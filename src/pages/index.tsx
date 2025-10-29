import { useState, useEffect } from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MatchCard } from "@/components/MatchCard";
import { MatchListItem } from "@/components/MatchListItem";
import { Navigation } from "@/components/Navigation";
import { MatchDetail } from "./match-detail";
import StandingsPage from "./standings";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedDate, setSelectedDate] = useState(17);
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [fixturesCalendar, setFixturesCalendar] = useState<
    { date: number; day: string; month?: string }[]
  >([]);
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await fetch("/api/fixtures");
        const data = await response.json();
        setFixturesCalendar(data);
      } catch (error) {
        console.error("Failed to fetch fixtures:", error);
      }
    };

    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/matches");
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Failed to fetch matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
    fetchMatches();
  }, []);

  const featuredMatch = matches.find((m) => m.featured);
  const liveMatches = matches.filter((m) => !m.featured);

  if (selectedMatch) {
    const match = matches.find((m) => m.id === selectedMatch);
    return <MatchDetail match={match} onBack={() => setSelectedMatch(null)} />;
  }

  if (activeTab === "standings") {
    return (
      <>
        <StandingsPage />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Scora</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Date Selector */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              {fixturesCalendar[0]?.month || ""}
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 px-1">
            {fixturesCalendar.map(({ date, day }) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={
                  selectedDate === date
                    ? "bg-accent text-accent-foreground shadow-lg scale-105 flex flex-col items-center justify-center min-w-[48px] h-16 rounded-xl transition-all"
                    : "bg-card text-foreground hover:bg-secondary flex flex-col items-center justify-center min-w-[48px] h-16 rounded-xl transition-all"
                }
              >
                <span className="text-xs font-medium mb-1">{day}</span>
                <span className="text-lg font-bold">{date}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {loading ? (
          <>
            <section>
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-48 w-full rounded-xl" />
            </section>
            <section>
              <Skeleton className="h-8 w-1/3 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-20 w-full rounded-xl" />
                <Skeleton className="h-20 w-full rounded-xl" />
                <Skeleton className="h-20 w-full rounded-xl" />
              </div>
            </section>
          </>
        ) : (
          <>
            {featuredMatch && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Live Match</h2>
                </div>
                <MatchCard
                  {...featuredMatch}
                  onClick={() => setSelectedMatch(featuredMatch.id)}
                />
              </section>
            )}

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Today Match</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-white"
                >
                  View All →
                </Button>
              </div>
              <div className="space-y-3">
                {liveMatches.map((match) => (
                  <MatchListItem
                    key={match.id}
                    {...match}
                    onClick={() => setSelectedMatch(match.id)}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
