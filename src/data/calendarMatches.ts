
import { clubMap, PremierLeagueClub } from "./clubs";

export type MatchStatus = "upcoming" | "finished";

export interface CalendarMatch {
  id: string;
  date: string;
  homeTeam: PremierLeagueClub;
  awayTeam: PremierLeagueClub;
  time?: string;
  homeLogo: string;
  awayLogo: string;
  homeScore?: number;
  awayScore?: number;
  status: MatchStatus;
}


export const calendarMatchesData: CalendarMatch[] = [
  {
    id: "101",
    date: "Sat 1 Nov",
    homeTeam: clubMap.get("Brighton & Hove Albion")!,
    awayTeam: clubMap.get("Leeds United")!,
    time: "16:00",
    homeLogo: clubMap.get("Brighton & Hove Albion")!.badgeUrl,
    awayLogo: clubMap.get("Leeds United")!.badgeUrl,
    status: "upcoming" as const
  },
  {
    id: "102",
    date: "Sat 1 Nov",
    homeTeam: clubMap.get("Burnley")!,
    awayTeam: clubMap.get("Arsenal")!,
    time: "16:00",
    homeLogo: clubMap.get("Burnley")!.badgeUrl,
    awayLogo: clubMap.get("Arsenal")!.badgeUrl,
    status: "upcoming" as const
  },
  {
    id: "103",
    date: "Sat 1 Nov",
    homeTeam: clubMap.get("Crystal Palace")!,
    awayTeam: clubMap.get("Brentford")!,
    time: "16:00",
    homeLogo: clubMap.get("Crystal Palace")!.badgeUrl,
    awayLogo: clubMap.get("Brentford")!.badgeUrl,
    status: "upcoming" as const
  },
  {
    id: "104",
    date: "Sun 2 Nov",
    homeTeam: clubMap.get("Everton")!,
    awayTeam: clubMap.get("West Ham United")!,
    time: "14:00",
    homeLogo: clubMap.get("Everton")!.badgeUrl,
    awayLogo: clubMap.get("West Ham United")!.badgeUrl,
    status: "upcoming" as const
  },
  {
    id: "105",
    date: "Sun 2 Nov",
    homeTeam: clubMap.get("Newcastle United")!,
    awayTeam: clubMap.get("Southampton")!,
    time: "14:00",
    homeLogo: clubMap.get("Newcastle United")!.badgeUrl,
    awayLogo: clubMap.get("Southampton")!.badgeUrl,
    status: "upcoming" as const
  },
    {
    id: "106",
    date: "Mon 3 Nov",
    homeTeam: clubMap.get("Wolverhampton Wanderers")!,
    awayTeam: clubMap.get("Aston Villa")!,
    time: "20:00",
    homeLogo: clubMap.get("Wolverhampton Wanderers")!.badgeUrl,
    awayLogo: clubMap.get("Aston Villa")!.badgeUrl,
    status: "upcoming" as const
  }
];

export const pastCalendarMatchesData: CalendarMatch[] = [
  {
    id: "201",
    date: "Sat 25 Oct",
    homeTeam: clubMap.get("Manchester City")!,
    awayTeam: clubMap.get("Chelsea")!,
    homeScore: 2,
    awayScore: 2,
    homeLogo: clubMap.get("Manchester City")!.badgeUrl,
    awayLogo: clubMap.get("Chelsea")!.badgeUrl,
    status: "finished" as const
  },
  {
    id: "202",
    date: "Sat 25 Oct",
    homeTeam: clubMap.get("Liverpool")!,
    awayTeam: clubMap.get("Manchester United")!,
    homeScore: 0,
    awayScore: 1,
    homeLogo: clubMap.get("Liverpool")!.badgeUrl,
    awayLogo: clubMap.get("Manchester United")!.badgeUrl,
    status: "finished" as const
  },
  {
    id: "203",
    date: "Sun 26 Oct",
    homeTeam: clubMap.get("Arsenal")!,
    awayTeam: clubMap.get("Tottenham Hotspur")!,
    homeScore: 3,
    awayScore: 1,
    homeLogo: clubMap.get("Arsenal")!.badgeUrl,
    awayLogo: clubMap.get("Tottenham Hotspur")!.badgeUrl,
    status: "finished" as const
  },
   {
    id: "204",
    date: "Mon 27 Oct",
    homeTeam: clubMap.get("Fulham")!,
    awayTeam: clubMap.get("Everton")!,
    homeScore: 0,
    awayScore: 0,
    homeLogo: clubMap.get("Fulham")!.badgeUrl,
    awayLogo: clubMap.get("Everton")!.badgeUrl,
    status: "finished" as const
  }
]
