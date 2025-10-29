import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "live" | "finished" | "upcoming";
  league: string;
  homeLogo?: string;
  awayLogo?: string;
  onClick?: () => void;
}

export const MatchCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  league,
  homeLogo,
  awayLogo,
  onClick,
}: MatchCardProps) => {
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
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-primary-foreground/70 font-medium">
              {league}
            </span>
            {status === "live" && (
              <Badge className="bg-success text-success-foreground px-3 py-1 animate-pulse">
                LIVE
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center font-bold text-lg overflow-hidden">
                {homeLogo ? (
                  <Image
                    src={homeLogo}
                    alt={`${homeTeam} logo`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  homeTeam.substring(0, 3).toUpperCase()
                )}
              </div>
              <div className="text-center">
                <span className="text-primary-foreground font-semibold">
                  {homeTeam}
                </span>
                <p className="text-xs text-muted-foreground">Home</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mx-4">
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

            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center font-bold text-lg overflow-hidden">
                {awayLogo ? (
                  <Image
                    src={awayLogo}
                    alt={`${awayTeam} logo`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  awayTeam.substring(0, 3).toUpperCase()
                )}
              </div>
              <div className="text-center">
                <span className="text-primary-foreground font-semibold">
                  {awayTeam}
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
