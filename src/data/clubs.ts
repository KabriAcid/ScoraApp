
export interface PremierLeagueClub {
  name: string;
  responsiveName: string;
  shortName: string;
  badgeUrl: string;
}

export const premierLeagueClubs: PremierLeagueClub[] = [
  {
    name: "West Ham United",
    responsiveName: "West Ham",
    shortName: "WHU",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t21.png",
  },
  {
    name: "Leeds United",
    responsiveName: "Leeds",
    shortName: "LEE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t2.png",
  },
  {
    name: "Arsenal",
    responsiveName: "Arsenal",
    shortName: "ARS",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t3.png",
  },
  {
    name: "Brighton & Hove Albion",
    responsiveName: "Brighton",
    shortName: "BHA",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t36.png",
  },
  {
    name: "Crystal Palace",
    responsiveName: "Crystal Palace",
    shortName: "CRY",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t31.png",
  },
  {
    name: "Brentford",
    responsiveName: "Brentford",
    shortName: "BRE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t94.png",
  },
  {
    name: "Tottenham Hotspur",
    responsiveName: "Tottenham",
    shortName: "TOT",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t6.png",
  },
  {
    name: "Liverpool",
    responsiveName: "Liverpool",
    shortName: "LIV",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t14.png",
  },
  {
    name: "Newcastle United",
    responsiveName: "Newcastle",
    shortName: "NEW",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t4.png",
  },
  {
    name: "AFC Bournemouth",
    responsiveName: "Bournemouth",
    shortName: "BOU",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t91.png",
  },
  {
    name: "Manchester City",
    responsiveName: "Man City",
    shortName: "MCI",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t43.png",
  },
  {
    name: "Chelsea",
    responsiveName: "Chelsea",
    shortName: "CHE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t8.png",
  },
  {
    name: "Nottingham Forest",
    responsiveName: "Nottingham",
    shortName: "NFO",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t17.png",
  },
  {
    name: "Fulham",
    responsiveName: "Fulham",
    shortName: "FUL",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t54.png",
  },
  {
    name: "Aston Villa",
    responsiveName: "Aston Villa",
    shortName: "AVL",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t7.png",
  },
  {
    name: "Manchester United",
    responsiveName: "Man United",
    shortName: "MUN",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t1.png",
  },
  {
    name: "Everton",
    responsiveName: "Everton",
    shortName: "EVE",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t11.png",
  },
    {
    name: "Wolverhampton Wanderers",
    responsiveName: "Wolves",
    shortName: "WOL",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t39.png",
  },
  {
    name: "Leicester City",
    responsiveName: "Leicester",
    shortName: "LEI",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t13.png",
  },
  {
    name: "Southampton",
    responsiveName: "Southampton",
    shortName: "SOU",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t20.png",
  },
  {
    name: "Burnley",
    responsiveName: "Burnley",
    shortName: "BUR",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t90.png",
  },
  {
    name: "Sunderland",
    responsiveName: "Sunderland",
    shortName: "SUN",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t56.png"
  }
];

export const clubMap = new Map(premierLeagueClubs.map(club => [club.name, club]));
