
export interface PremierLeagueClub {
  name: string;
  shortName: string;
  badgeUrl: string;
}

export const premierLeagueClubs: PremierLeagueClub[] = [
  {
    name: "West Ham United",
    shortName: "West Ham",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t21.png",
  },
  {
    name: "Leeds United",
    shortName: "Leeds",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t2.png",
  },
  {
    name: "Arsenal",
    shortName: "Arsenal",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t3.png",
  },
  {
    name: "Brighton & Hove Albion",
    shortName: "Brighton",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t36.png",
  },
  {
    name: "Crystal Palace",
    shortName: "Crystal Palace",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t31.png",
  },
  {
    name: "Brentford",
    shortName: "Brentford",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t94.png",
  },
  {
    name: "Tottenham Hotspur",
    shortName: "Tottenham",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t6.png",
  },
  {
    name: "Liverpool",
    shortName: "Liverpool",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t14.png",
  },
  {
    name: "Newcastle United",
    shortName: "Newcastle",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t4.png",
  },
  {
    name: "AFC Bournemouth",
    shortName: "Bournemouth",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t91.png",
  },
  {
    name: "Manchester City",
    shortName: "Man City",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t43.png",
  },
  {
    name: "Chelsea",
    shortName: "Chelsea",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t8.png",
  },
  {
    name: "Nottingham Forest",
    shortName: "Nott'm Forest",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t17.png",
  },
  {
    name: "Fulham",
    shortName: "Fulham",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t54.png",
  },
  {
    name: "Aston Villa",
    shortName: "Aston Villa",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t7.png",
  },
  {
    name: "Manchester United",
    shortName: "Man United",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t1.png",
  },
  {
    name: "Everton",
    shortName: "Everton",
    badgeUrl:
      "https://resources.premierleague.com/premierleague/badges/21/t11.png",
  },
    {
    name: "Wolverhampton Wanderers",
    shortName: "Wolves",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t39.png",
  },
  {
    name: "Leicester City",
    shortName: "Leicester",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t13.png",
  },
  {
    name: "Southampton",
    shortName: "Southampton",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t20.png",
  },
  {
    name: "Burnley",
    shortName: "Burnley",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t90.png",
  },
  {
    name: "Sunderland",
    shortName: "Sunderland",
    badgeUrl: "https://resources.premierleague.com/premierleague/badges/21/t56.png"
  }
];

export const clubMap = new Map(premierLeagueClubs.map(club => [club.name, club]));
