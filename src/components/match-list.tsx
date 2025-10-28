import type { Match } from '@/lib/types';
import { MatchCard } from './match-card';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface MatchListProps {
  matches: Match[];
}

export function MatchList({ matches }: MatchListProps) {
  if (matches.length === 0) {
    return (
      <Alert className="border-dashed">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>No Matches Found</AlertTitle>
        <AlertDescription>
          There are no scheduled matches for the selected date.
        </AlertDescription>
      </Alert>
    );
  }

  const groupedMatches = matches.reduce((acc, match) => {
    (acc[match.league] = acc[match.league] || []).push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedMatches).map(([league, leagueMatches]) => (
        <div key={league}>
          <h2 className="mb-4 font-headline text-xl">{league}</h2>
          <div className="space-y-4">
            {leagueMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
