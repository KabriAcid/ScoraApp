
import { useState, useEffect } from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MatchCard } from "@/components/MatchCard";
import { MatchListItem } from "@/components/MatchListItem";
import { Navigation } from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { fixturesCalendar } from "@/data/fixturesCalendar";
import { matchesData } from "@/data/matches";
import { useRouter } from "next/router";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(17);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMatchClick = (matchId: string) => {
    router.push(`/match-detail?id=${matchId}`);
  };

  const featuredMatch = matchesData.find((m) => m.featured);
  const liveMatches = matchesData.filter((m) => !m.featured);

  const getActiveTab = () => {
    const path = router.pathname;
    if (path === "/") return "home";
    if (path === "/standings") return "standings";
    if (path === "/calendar") return "calendar";
    if (path === "/profile") return "profile";
    return "home";
  };

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
                  onClick={() => handleMatchClick(featuredMatch.id)}
                />
              </section>
            )}

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Today Match</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent"
                >
                  View All →
                </Button>
              </div>
              <div className="space-y-3">
                {liveMatches.map((match) => (
                  <MatchListItem
                    key={match.id}
                    {...match}
                    onClick={() => handleMatchClick(match.id)}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Navigation */}
      <Navigation activeTab={getActiveTab()} />
    </div>
  );
};

export default Index;
