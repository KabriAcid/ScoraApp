import type { Match } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { TeamBadge } from './team-badge';
import Link from 'next/link';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const { status, teams, scores, time, id } = match;

  const StatusIndicator = () => {
    switch(status) {
      case 'Live':
        return (
          <div className="flex flex-col items-center">
            <span className="font-headline text-2xl tracking-tight">{scores.home} - {scores.away}</span>
            <div className="mt-1 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent">{time}</div>
          </div>
        );
      case 'Finished':
        return (
           <div className="flex flex-col items-center">
            <span className="font-headline text-2xl tracking-tight">{scores.home} - {scores.away}</span>
            <div className="mt-1 text-xs font-medium text-muted-foreground">FT</div>
          </div>
        );
      case 'Upcoming':
        const matchTime = new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return (
          <div className="flex flex-col items-center">
            <span className="font-headline text-lg tracking-tight">{matchTime}</span>
             <div className="mt-1 text-xs font-medium text-muted-foreground">Upcoming</div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <Link href={`/matches/${id}`} className="block transition-transform duration-200 hover:scale-[1.02]">
      <Card className="w-full overflow-hidden shadow-sm transition-shadow hover:shadow-lg">
        <CardContent className="p-4">
          <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
            <div className="flex items-center gap-3 justify-self-start">
              <TeamBadge team={teams.home} />
              <span className="hidden text-sm font-semibold md:block">{teams.home.name}</span>
            </div>
            
            <StatusIndicator />

            <div className="flex items-center gap-3 justify-self-end">
              <span className="hidden text-sm font-semibold md:block">{teams.away.name}</span>
              <TeamBadge team={teams.away} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
