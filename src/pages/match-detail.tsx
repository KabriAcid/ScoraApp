'use client';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowLeft, MoreVertical, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { TeamLineup } from "@/components/TeamLineup";
import { matchesData } from "@/data/matches";
import Loading from "@/components/Loading";

const MatchDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [match, setMatch] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundMatch = matchesData.find((m) => m.id === id);
      setMatch(foundMatch);
    }
  }, [id]);

  if (!match) {
    return <Loading />;
  }

  const {
    homeTeam,
    awayTeam,
    stadium,
    homeLogo,
    awayLogo,
    homeScore,
    awayScore,
    homeTeamData,
    awayTeamData,
  } = match;

  return (
    <div
      className="min-h-screen bg-background pb-20"
    >
      {/* Header */}
      <div
        className="p-6 text-primary-foreground"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Premier League</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center mb-4">
          <p className="text-sm text-primary-foreground/70 mb-2">{stadium}</p>
          <Badge className="bg-success text-success-foreground mb-4">LIVE</Badge>
        </div>

        {/* Score */}
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mb-2 font-bold text-2xl text-foreground overflow-hidden">
              <Image src={homeLogo} alt={`${homeTeam} logo`} width={56} height={56} className="object-contain"/>
            </div>
            <span className="text-sm font-medium">{homeTeam}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold">{homeScore}</span>
            <span className="text-3xl text-primary-foreground/50">:</span>
            <span className="text-5xl font-bold">{awayScore}</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mb-2 font-bold text-2xl text-foreground overflow-hidden">
              <Image src={awayLogo} alt={`${awayTeam} logo`} width={56} height={56} className="object-contain"/>
            </div>
            <span className="text-sm font-medium">{awayTeam}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="p-6"
      >
        <Tabs defaultValue="lineups" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="lineups">Lineups</TabsTrigger>
            <TabsTrigger value="h2h">H2H</TabsTrigger>
          </TabsList>

          <TabsContent value="lineups" className="space-y-6">
             {/* Lineup Visualization */}
             <div>
              <h3 className="font-semibold mb-4">Formation</h3>
              <div className="grid grid-cols-2 gap-2">
                <TeamLineup players={homeTeamData.lineup} color="blue" />
                <TeamLineup players={awayTeamData.lineup} color="red" />
              </div>
            </div>

            {/* Managers */}
            <div>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">GP</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{homeTeamData.manager}</p>
                      <p className="text-xs text-muted-foreground">{homeTeam} Manager</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-semibold">{awayTeamData.manager}</p>
                      <p className="text-xs text-muted-foreground">{awayTeam} Manager</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-red-600">EH</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Lineups */}
            <div>
              <h3 className="font-semibold mb-4">Lineups</h3>
              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Home Team */}
                  <div className="space-y-3">
                    {homeTeamData.lineup.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-2"
                      >
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-white">{player.number}</span>
                        </div>
                        <span className="text-sm font-medium truncate">{player.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Away Team */}
                  <div className="space-y-3">
                    {awayTeamData.lineup.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-2 justify-end"
                      >
                        <span className="text-sm font-medium truncate text-right">{player.name}</span>
                        <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-white">{player.number}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formation */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {homeTeamData.formation}
                    </Badge>
                    <span className="text-xs text-muted-foreground">Formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Formation</span>
                    <Badge variant="secondary" className="text-xs">
                      {awayTeamData.formation}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Substitutes */}
            <div>
              <h3 className="font-semibold mb-4">Substitutes</h3>
              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Home Team Subs */}
                  <div className="space-y-3">
                    {homeTeamData.substitutes.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-2"
                      >
                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-blue-600">{player.number}</span>
                        </div>
                        <span className="text-sm truncate">{player.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Away Team Subs */}
                  <div className="space-y-3">
                    {awayTeamData.substitutes.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center gap-2 justify-end"
                      >
                        <span className="text-sm truncate text-right">{player.name}</span>
                        <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-red-600">{player.number}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div
              className="space-y-4"
            >
              {/* Stat Bar Component */}
              {[
                { label: "Possession", home: 58, away: 42 },
                { label: "Shots", home: 12, away: 8 },
                { label: "Shots on Target", home: 5, away: 3 },
                { label: "Corners", home: 7, away: 4 },
                { label: "Fouls", home: 11, away: 14 },
                { label: "Yellow Cards", home: 2, away: 3 },
                { label: "Passes", home: 432, away: 318 },
                { label: "Pass Accuracy", home: 85, away: 78 },
              ].map((stat) => (
                <div
                  key={stat.label}
                >
                  <Card className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">{stat.home}{stat.label.includes("Accuracy") ? "%" : ""}</span>
                      <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                      <span className="text-sm font-semibold">{stat.away}{stat.label.includes("Accuracy") ? "%" : ""}</span>
                    </div>
                    <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-secondary">
                      <div
                        className="bg-blue-600"
                        style={{ width: `${(stat.home / (stat.home + stat.away)) * 100}%` }}
                      />
                      <div
                        className="bg-red-600"
                        style={{ width: `${(stat.away / (stat.home + stat.away)) * 100}%` }}
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="summary">
            <div
              className="space-y-4"
            >
              {/* Match Events */}
              {[
                { time: "12'", team: "home", type: "goal", player: "Mason Mount", description: "Assisted by Kai Havertz" },
                { time: "23'", team: "away", type: "yellow", player: "Bruno Fernandes", description: "Foul" },
                { time: "38'", team: "away", type: "goal", player: "Marcus Rashford", description: "Penalty kick" },
                { time: "45'", team: "home", type: "yellow", player: "Jorginho", description: "Tactical foul" },
                { time: "67'", team: "home", type: "substitution", player: "Christian Pulisic ↔ Hakim Ziyech", description: "" },
                { time: "72'", team: "away", type: "yellow", player: "Casemiro", description: "Unsporting behavior" },
                { time: "81'", team: "away", type: "substitution", player: "Anthony Martial ↔ Jadon Sancho", description: "" },
              ].map((event, index) => (
                <div
                  key={index}
                >
                  <Card className={`p-4 ${event.team === "home" ? "mr-8" : "ml-8"}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary shrink-0">
                        {event.type === "goal" && <Target className="w-5 h-5 text-success" />}
                        {event.type === "yellow" && <div className="w-4 h-5 bg-yellow-500 rounded-sm" />}
                        {event.type === "substitution" && <Activity className="w-5 h-5 text-accent" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">{event.time}</Badge>
                          <span className="font-semibold text-sm">{event.player}</span>
                        </div>
                        {event.description && (
                          <p className="text-xs text-muted-foreground">{event.description}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="h2h">
            <div
              className="space-y-6"
            >
              {/* Overall Stats */}
              <div>
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 text-center">Last 5 Meetings</h3>
                  <div className="flex justify-around items-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">2</div>
                      <div className="text-xs text-muted-foreground">Chelsea Wins</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-muted-foreground mb-1">1</div>
                      <div className="text-xs text-muted-foreground">Draws</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">2</div>
                      <div className="text-xs text-muted-foreground">Man Utd Wins</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Previous Matches */}
              <div>
                <h3 className="font-semibold mb-3">Previous Results</h3>
                <div className="space-y-3">
                  {[
                    { date: "Mar 2024", home: "Man Utd", away: "Chelsea", homeScore: 2, awayScore: 1, competition: "Premier League" },
                    { date: "Nov 2023", home: "Chelsea", away: "Man Utd", homeScore: 3, awayScore: 1, competition: "Premier League" },
                    { date: "May 2023", home: "Man Utd", away: "Chelsea", homeScore: 1, awayScore: 1, competition: "FA Cup" },
                    { date: "Feb 2023", home: "Chelsea", away: "Man Utd", homeScore: 0, awayScore: 2, competition: "Premier League" },
                    { date: "Oct 2022", home: "Man Utd", away: "Chelsea", homeScore: 1, awayScore: 2, competition: "Premier League" },
                  ].map((match, index) => (
                    <div
                      key={index}
                    >
                      <Card className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground">{match.date}</span>
                          <Badge variant="secondary" className="text-xs">{match.competition}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 flex-1">
                            <span className="text-sm font-medium">{match.home}</span>
                          </div>
                          <div className="flex items-center gap-3 mx-4">
                            <span className={`font-bold ${match.homeScore > match.awayScore ? "text-foreground" : "text-muted-foreground"}`}>
                              {match.homeScore}
                            </span>
                            <span className="text-muted-foreground">-</span>
                            <span className={`font-bold ${match.awayScore > match.homeScore ? "text-foreground" : "text-muted-foreground"}`}>
                              {match.awayScore}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-1 justify-end">
                            <span className="text-sm font-medium">{match.away}</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MatchDetailPage;
