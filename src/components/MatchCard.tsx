
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PremierLeagueClub } from "@/data/clubs";

interface MatchCardProps {
  homeTeam: PremierLeagueClub;
  awayTeam: PremierLeagueClub;
  homeScore: number;
  awayScore: number;
  status: "live" | "finished" | "upcoming";
  homeLogo?: string;
  awayLogo?: string;
  matchTime?: number;
  stadium?: string;
  matchWeek?: string;
  onClick?: () => void;
}

export const MatchCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  homeLogo,
  awayLogo,
  matchTime,
  stadium,
  matchWeek,
  onClick,
}: MatchCardProps) => {
  const homeBadge = homeLogo || homeTeam.badgeUrl;
  const awayBadge = awayLogo || awayTeam.badgeUrl;

  return (
    <div>
      <Card
        className="relative overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
        style={{
          background: "var(--gradient-card)",
          boxShadow: "var(--shadow-card)",
        }}
        onClick={onClick}
      >
        <div className="p-6">
          <div className="text-center mb-4">
            {stadium && <p className="text-sm font-semibold text-primary-foreground/90">{stadium}</p>}
            {matchWeek && <p className="text-xs text-primary-foreground/60">{matchWeek}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center font-bold text-lg overflow-hidden">
                {homeBadge ? (
                  <Image
                    src={homeBadge}
                    alt={`${homeTeam.name} logo`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  homeTeam.shortName.substring(0, 3).toUpperCase()
                )}
              </div>
              <div className="text-center">
                <span className="text-primary-foreground font-semibold">
                  {homeTeam.responsiveName}
                </span>
                <p className="text-xs text-muted-foreground">Home</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mx-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-primary-foreground">
                  {homeScore}
                </span>
                <span className="text-3xl font-bold text-primary-foreground/50">
                  :
                </span>
                <span className="text-4xl font-bold text-primary-foreground">
                  {awayScore}
                </span>
              </div>
              {status === "live" && matchTime && (
                <div className="mt-2 flex flex-col items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-success/30 bg-success/10 text-success"
                    >
                      {matchTime}'
                    </Badge>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center font-bold text-lg overflow-hidden">
                {awayBadge ? (
                  <Image
                    src={awayBadge}
                    alt={`${awayTeam.name} logo`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  awayTeam.shortName.substring(0, 3).toUpperCase()
                )}
              </div>
              <div className="text-center">
                <span className="text-primary-foreground font-semibold">
                  {awayTeam.responsiveName}
                </span>
                <p className="text-xs text-muted-foreground">Away</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
