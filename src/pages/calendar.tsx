'use client';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { calendarMatchesData } from "@/data/calendarMatches";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Loading from "@/components/Loading";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  homeLogo: string;
  awayLogo: string;
}

interface MatchGroup {
  date: string;
  matches: Match[];
}

const CalendarMatchItem = ({ match }: { match: Match }) => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center gap-4 flex-1 justify-end">
      <span className="font-semibold text-sm text-right">{match.homeTeam}</span>
      <Image src={match.homeLogo} alt={match.homeTeam} width={28} height={28} />
    </div>
    <div className="text-center mx-4">
      <span className="text-sm font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
        {match.time}
      </span>
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

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      const groupedMatches = calendarMatchesData.reduce((acc, match) => {
        const date = match.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(match);
        return acc;
      }, {} as Record<string, typeof calendarMatchesData>);

      const groups: MatchGroup[] = Object.keys(groupedMatches).map(date => ({
        date: date,
        matches: groupedMatches[date]
      }));
      setMatchGroups(groups);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 border-b sticky top-0 bg-background z-10">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setMatchweek(w => w > 1 ? w - 1 : 1)}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="text-center">
            <h1 className="font-bold">Matchweek {matchweek}</h1>
            <p className="text-xs text-muted-foreground">Sat 1 Nov - Mon 3 Nov</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMatchweek(w => w + 1)}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-6">
        {matchGroups.map((group, index) => (
          <div key={index}>
            <h2 className="font-bold text-sm mb-2 px-2">{group.date}</h2>
            <Card>
              {group.matches.map((match, matchIndex) => (
                <div key={match.id}>
                  <CalendarMatchItem match={match} />
                  {matchIndex < group.matches.length - 1 && <Separator />}
                </div>
              ))}
            </Card>
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
};

export default CalendarPage;
