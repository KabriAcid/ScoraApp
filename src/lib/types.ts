export type Team = {
  id: string;
  name: string;
  logo: string;
};

export type Player = {
  id: string;
  name: string;
  number: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
};

export type MatchEvent = {
  time: string;
  type: 'Goal' | 'Yellow Card' | 'Red Card' | 'Substitution';
  player: string;
  teamId: string;
  detail?: string;
};

export type MatchStats = {
  shots: number;
  shotsOnTarget: number;
  possession: number; // percentage
  passes: number;
  passAccuracy: number; // percentage
  fouls: number;
  yellowCards: number;
  redCards: number;
  offsides: number;
  corners: number;
};

export type Match = {
  id: string;
  date: string; // ISO string
  status: 'Finished' | 'Live' | 'Upcoming';
  time?: string; // e.g. '78'' for live matches
  league: string;
  teams: {
    home: Team;
    away: Team;
  };
  scores: {
    home: number;
    away: number;
  };
  lineups?: {
    home: Player[];
    away: Player[];
  };
  events?: MatchEvent[];
  stats?: {
    home: MatchStats;
    away: MatchStats;
  };
  h2h?: Match[];
};
