import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface MatchListItemProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "live" | "finished" | "upcoming";
  homeLogo?: string;
  awayLogo?: string;
  onClick?: () => void;
}

export const MatchListItem = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  homeLogo,
  awayLogo,
  onClick,
}: MatchListItemProps) => {
  return (
    <div
      className="flex items-center justify-between p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
          {homeLogo ? (
            <Image
              src={homeLogo}
              alt={`${homeTeam} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          ) : (
            homeTeam.substring(0, 2).toUpperCase()
          )}
        </div>
        <span className="font-medium text-sm">{homeTeam}</span>
      </div>

      <div className="flex items-center gap-3 mx-4">
        {status === "live" ? (
          <>
            <Badge
              variant="outline"
              className="bg-success/10 text-success border-success/30 px-3"
            >
              {homeScore}
            </Badge>
            <Badge
              variant="outline"
              className="bg-success/10 text-success border-success/30 px-3"
            >
              {awayScore}
            </Badge>
          </>
        ) : (
          <>
            <span className="font-bold text-lg">{homeScore}</span>
            <span className="font-bold text-lg text-muted-foreground">:</span>
            <span className="font-bold text-lg">{awayScore}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 flex-1 justify-end">
        <span className="font-medium text-sm text-right">{awayTeam}</span>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
          {awayLogo ? (
            <Image
              src={awayLogo}
              alt={`${awayTeam} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          ) : (
            awayTeam.substring(0, 2).toUpperCase()
          )}
        </div>
      </div>
    </div>
  );
};
