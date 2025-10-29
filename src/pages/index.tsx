import { useState, useEffect } from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MatchCard } from "@/components/MatchCard";
import { MatchListItem } from "@/components/MatchListItem";
import { Navigation } from "@/components/Navigation";
import { MatchDetail } from "./match-detail";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedDate, setSelectedDate] = useState(17);
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [fixturesCalendar, setFixturesCalendar] = useState<
    { date: number; day: string; month?: string }[]
  >([]);

  const featuredMatch = {
    id: "1",
    homeTeam: "Chelsea",
    awayTeam: "Man Utd",
    homeScore: 1,
    awayScore: 1,
    status: "live" as const,
    league: "Premier League",
    homeLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/0i2_A1PMGHflrIe3umGD2A_96x96.png", // Chelsea
    awayLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69i-jBs_RxASrasQ_96x96.png", // Man Utd
    matchTime: 62,
    stadium: "Stamford Bridge",
    matchWeek: "Week 10",
  };

  const liveMatches = [
    {
      id: "2",
      homeTeam: "N Forest",
      awayTeam: "Liverpool",
      homeScore: 0,
      awayScore: 3,
      status: "live" as const,
      homeLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/nS_WGF9ydyPZPUjJpkP21A_96x96.png", // Nottingham Forest
      awayLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/0iHbx-InIB_Rbb3v0pS2JQ_96x96.png", // Liverpool
    },
    {
      id: "3",
      homeTeam: "Man City",
      awayTeam: "Brighton",
      homeScore: 2,
      awayScore: 1,
      status: "live" as const,
      homeLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgP1MfYGGA_96x96.png", // Man City
      awayLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png", // Brighton
    },
    {
      id: "4",
      homeTeam: "Wolves",
      awayTeam: "Leicester",
      homeScore: 1,
      awayScore: 0,
      status: "live" as const,
      homeLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/ZW73-Q34I4FNsD25m5fO_w_96x96.png", // Wolves
      awayLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/Pa3d1c13B1brruUNvVsyZQ_96x96.png", // Leicester
    },
  ];

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

    fetchFixtures();
  }, []);

  if (selectedMatch) {
    return <MatchDetail onBack={() => setSelectedMatch(null)} />;
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
        {/* Featured Match */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Live Match</h2>
          </div>
          <MatchCard
            {...featuredMatch}
            onClick={() => setSelectedMatch(featuredMatch.id)}
          />
        </section>

        {/* Today's Matches */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Today Match</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-accent hover:text-accent-foreground"
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
      </main>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
