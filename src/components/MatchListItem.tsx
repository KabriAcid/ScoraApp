
import { Badge } from "@/components/ui/badge";
import { PremierLeagueClub } from "@/data/clubs";

interface MatchListItemProps {
  homeTeam: PremierLeagueClub;
  awayTeam: PremierLeagueClub;
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
  const homeBadge = homeLogo || homeTeam.badgeUrl;
  const awayBadge = awayLogo || awayTeam.badgeUrl;

  return (
    <div
      className="flex items-center justify-between p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
          {homeBadge ? (
            <img
              src={homeBadge}
              alt={`${homeTeam.shortName} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          ) : (
            homeTeam.shortName.substring(0, 2).toUpperCase()
          )}
        </div>
        <span className="font-medium text-sm">{homeTeam.responsiveName}</span>
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
        <span className="font-medium text-sm text-right">{awayTeam.responsiveName}</span>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden">
          {awayBadge ? (
            <img
              src={awayBadge}
              alt={`${awayTeam.shortName} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
          ) : (
            awayTeam.shortName.substring(0, 2).toUpperCase()
          )}
        </div>
      </div>
    </div>
  );
};
