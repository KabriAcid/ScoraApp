import { getMatchById } from '@/lib/actions';
import { notFound } from 'next/navigation';
import { TeamBadge } from '@/components/team-badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineupVisualization } from '@/components/lineup-visualization';
import AiHighlights from '@/components/ai-highlights';
import { PlayerList } from '@/components/player-list';
import type { Match } from '@/lib/types';

export default async function MatchDetailPage({ params }: { params: { id: string } }) {
  const match: Match | undefined = await getMatchById(params.id);

  if (!match) {
    notFound();
  }

  const { teams, scores, status, time, league, lineups } = match;

  return (
    <div className="container mx-auto max-w-5xl p-4 page-transition">
      <div className="mb-4 text-center">
        <p className="text-sm text-muted-foreground">{league}</p>
        <p className="text-sm text-muted-foreground">{new Date(match.date).toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      
      <div className="mb-8 grid grid-cols-[1fr,auto,1fr] items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <TeamBadge team={teams.home} size={80} />
          <h2 className="text-center font-headline text-xl">{teams.home.name}</h2>
        </div>

        <div className="text-center">
          {status === 'Upcoming' ? (
            <span className="font-headline text-3xl md:text-5xl">{new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          ) : (
            <span className="font-headline text-4xl md:text-6xl">{scores.home} - {scores.away}</span>
          )}
          {status === 'Live' && <div className="mt-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-bold text-accent">{time}</div>}
          {status === 'Finished' && <div className="mt-2 text-sm font-semibold text-muted-foreground">Full Time</div>}
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <TeamBadge team={teams.away} size={80} />
          <h2 className="text-center font-headline text-xl">{teams.away.name}</h2>
        </div>
      </div>
      
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="lineups" disabled={!lineups || lineups.home.length === 0}>Lineups</TabsTrigger>
          <TabsTrigger value="stats" disabled>Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="mt-6">
          <AiHighlights match={match} />
        </TabsContent>
        <TabsContent value="lineups" className="mt-6">
          {lineups && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 font-headline text-xl">{teams.home.name}</h3>
                <LineupVisualization lineup={lineups.home} />
                <div className="mt-6">
                  <PlayerList players={lineups.home} title="Starting XI" />
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-headline text-xl">{teams.away.name}</h3>
                <LineupVisualization lineup={lineups.away} />
                <div className="mt-6">
                  <PlayerList players={lineups.away} title="Starting XI" />
                </div>
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value="stats">
          {/* Stats content here */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
