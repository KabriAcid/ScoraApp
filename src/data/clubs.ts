
export interface PremierLeagueClub {
  name: string;
  shortName: string;
  badgeUrl: string;
}

export const premierLeagueClubs: PremierLeagueClub[] = [
  {
    name: "West Ham United",
    shortName: "WHU",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t86.png",
  },
  {
    name: "Leeds United",
    shortName: "LEE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t2.png",
  },
  {
    name: "Arsenal",
    shortName: "ARS",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t3.png",
  },
  {
    name: "Brighton & Hove Albion",
    shortName: "BHA",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t36.png",
  },
  {
    name: "Crystal Palace",
    shortName: "CRY",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t31.png",
  },
  {
    name: "Brentford",
    shortName: "BRE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t94.png",
  },
  {
    name: "Tottenham Hotspur",
    shortName: "TOT",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t6.png",
  },
  {
    name: "Liverpool",
    shortName: "LIV",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t14.png",
  },
  {
    name: "Newcastle United",
    shortName: "NEW",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t4.png",
  },
  {
    name: "AFC Bournemouth",
    shortName: "BOU",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t91.png",
  },
  {
    name: "Manchester City",
    shortName: "MCI",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t43.png",
  },
  {
    name: "Chelsea",
    shortName: "CHE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t8.png",
  },
  {
    name: "Nottingham Forest",
    shortName: "NFO",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t17.png",
  },
  {
    name: "Fulham",
    shortName: "FUL",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t54.png",
  },
  {
    name: "Aston Villa",
    shortName: "AVL",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t7.png",
  },
  {
    name: "Manchester United",
    shortName: "MUN",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t1.png",
  },
  {
    name: "Everton",
    shortName: "EVE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t11.png",
  },
    {
    name: "Wolverhampton Wanderers",
    shortName: "WOL",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t39.png",
  },
  {
    name: "Leicester City",
    shortName: "LEI",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t13.png",
  },
  {
    name: "Southampton",
    shortName: "SOU",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t20.png",
  },
  {
    name: "Burnley",
    shortName: "BUR",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t90.png",
  },
  {
    name: "Sunderland",
    shortName: "SUN",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t56.png"
  }
];

export const clubMap = new Map(premierLeagueClubs.map(club => [club.name, club]));
