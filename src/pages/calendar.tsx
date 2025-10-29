
'use client';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { calendarMatchesData, pastCalendarMatchesData, CalendarMatch } from "@/data/calendarMatches";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface MatchGroup {
  date: string;
  matches: CalendarMatch[];
}

const CalendarMatchItemSkeleton = ({ isLast }: { isLast: boolean }) => (
    <div className={cn("flex items-center justify-between p-4", !isLast && "border-b border-border")}>
      <div className="flex items-center gap-4 flex-1 justify-end">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-7 w-7 rounded-full" />
      </div>
      <div className="text-center mx-4">
        <Skeleton className="h-6 w-16" />
      </div>
      <div className="flex items-center gap-4 flex-1">
        <Skeleton className="h-7 w-7 rounded-full" />
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
  );

const CalendarMatchItem = ({ match, isLast }: { match: CalendarMatch, isLast: boolean }) => (
  <div className={cn("flex items-center justify-between p-4", !isLast && "border-b border-border")}>
    <div className="flex items-center gap-4 flex-1 justify-end">
      <span className="font-semibold text-sm text-right">{match.homeTeam.responsiveName}</span>
      <Image src={match.homeLogo} alt={match.homeTeam.shortName} width={28} height={28} />
    </div>
    <div className="text-center mx-4">
      {match.status === 'finished' ? (
        <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-foreground">
              {match.homeScore} - {match.awayScore}
            </span>
        </div>
      ) : (
        <span className="text-sm font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          {match.time}
        </span>
      )}
    </div>
    <div className="flex items-center gap-4 flex-1">
      <Image src={match.awayLogo} alt={match.awayTeam.shortName} width={28} height={28} />
      <span className="font-semibold text-sm">{match.awayTeam.responsiveName}</span>
    </div>
  </div>
);

const CalendarPage = () => {
  const [matchweek, setMatchweek] = useState(10);
  const [loading, setLoading] = useState(true);
  const [matchGroups, setMatchGroups] = useState<MatchGroup[]>([]);
  const [currentDateRange, setCurrentDateRange] = useState("Sat 1 Nov - Mon 3 Nov");

  const loadMatches = (week: number) => {
    setLoading(true);
    setTimeout(() => {
      const data = week < 10 ? pastCalendarMatchesData : calendarMatchesData;
      if(week < 10) {
        setCurrentDateRange("Sat 25 Oct - Mon 27 Oct");
      } else {
        setCurrentDateRange("Sat 1 Nov - Mon 3 Nov");
      }

      const groupedMatches = data.reduce((acc, match) => {
        const date = match.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(match as CalendarMatch);
        return acc;
      }, {} as Record<string, CalendarMatch[]>);

      const groups: MatchGroup[] = Object.keys(groupedMatches).map(date => ({
        date: date,
        matches: groupedMatches[date]
      }));
      setMatchGroups(groups);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadMatches(matchweek);
  }, [matchweek]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 border-b sticky top-0 bg-background z-10">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setMatchweek(w => w - 1)}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="text-center">
            <h1 className="font-bold">Matchweek {matchweek}</h1>
            <p className="text-xs text-muted-foreground">{currentDateRange}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMatchweek(w => w + 1)}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-4">
      {loading ? (
          <div className="space-y-4">
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Card>
                  <CalendarMatchItemSkeleton isLast={false} />
                  <CalendarMatchItemSkeleton isLast={false} />
                  <CalendarMatchItemSkeleton isLast={true} />
              </Card>
            </div>
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Card>
                  <CalendarMatchItemSkeleton isLast={false} />
                  <CalendarMatchItemSkeleton isLast={true} />
              </Card>
            </div>
          </div>
        ) : (
          matchGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h2 className="font-bold text-sm mb-2 px-4">{group.date}</h2>
              <Card>
                <div className="space-y-0">
                  {group.matches.map((match, matchIndex) => (
                      <CalendarMatchItem key={match.id} match={match} isLast={matchIndex === group.matches.length - 1} />
                  ))}
                </div>
              </Card>
            </div>
          ))
        )}
      </main>

      <Navigation />
    </div>
  );
};

export default CalendarPage;
