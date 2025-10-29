'use client';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { calendarMatchesData, pastCalendarMatchesData } from "@/data/calendarMatches";
import Image from "next/image";
import Loading from "@/components/Loading";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time?: string;
  homeLogo: string;
  awayLogo: string;
  homeScore?: number;
  awayScore?: number;
  status: "upcoming" | "finished";
}

interface MatchGroup {
  date: string;
  matches: Match[];
}

const CalendarMatchItem = ({ match }: { match: Match }) => (
  <div className="flex items-center justify-between p-2">
    <div className="flex items-center gap-4 flex-1 justify-end">
      <span className="font-semibold text-sm text-right">{match.homeTeam}</span>
      <Image src={match.homeLogo} alt={match.homeTeam} width={28} height={28} />
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
      <Image src={match.awayLogo} alt={match.awayTeam} width={28} height={28} />
      <span className="font-semibold text-sm">{match.awayTeam}</span>
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
        acc[date].push(match);
        return acc;
      }, {} as Record<string, Match[]>);

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

  if (loading) {
    return <Loading />;
  }

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
        {matchGroups.map((group, index) => (
          <div key={index}>
            <h2 className="font-bold text-sm mb-2 px-2">{group.date}</h2>
            <div className="space-y-2">
              {group.matches.map((match) => (
                  <CalendarMatchItem key={match.id} match={match} />
              ))}
            </div>
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
};

export default CalendarPage;
