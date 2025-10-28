import type { Match, Team } from './types';
import { subDays, addDays, formatISO } from 'date-fns';

const today = new Date();

const placeholderImages = {
    team1: "https://picsum.photos/seed/101/100/100",
    team2: "https://picsum.photos/seed/102/100/100",
    team3: "https://picsum.photos/seed/103/100/100",
    team4: "https://picsum.photos/seed/104/100/100",
    team5: "https://picsum.photos/seed/105/100/100",
    team6: "https://picsum.photos/seed/106/100/100",
};


export const teams: Record<string, Team> = {
  t1: { id: 't1', name: 'Violet FC', logo: placeholderImages.team1 },
  t2: { id: 't2', name: 'Red Dragons', logo: placeholderImages.team2 },
  t3: { id: 't3', name: 'Azure Eagles', logo: placeholderImages.team3 },
  t4: { id: 't4', name: 'Emerald Strikers', logo: placeholderImages.team4 },
  t5: { id: 't5', name: 'Golden Lions', logo: placeholderImages.team5 },
  t6: { id: 't6', name: 'Shadow Wolves', logo: placeholderImages.team6 },
};

export const matches: Match[] = [
  // Today's Matches
  {
    id: '1',
    date: formatISO(new Date(today.setHours(15, 0, 0))),
    status: 'Live',
    time: "78'",
    league: 'Premier League',
    teams: { home: teams['t1'], away: teams['t2'] },
    scores: { home: 2, away: 1 },
    events: [
        { time: "12'", type: 'Goal', player: 'L. Sterling', teamId: 't1' },
        { time: "35'", type: 'Yellow Card', player: 'J. Ward', teamId: 't2' },
        { time: "55'", type: 'Goal', player: 'C. Palmer', teamId: 't2' },
        { time: "71'", type: 'Goal', player: 'N. Jackson', teamId: 't1' },
    ],
    lineups: {
        home: [
            { id: 'p1', name: 'K. Arrizabalaga', number: 1, position: 'Goalkeeper'},
            { id: 'p2', name: 'R. James', number: 24, position: 'Defender' },
            { id: 'p3', name: 'T. Silva', number: 6, position: 'Defender' },
            { id: 'p4', name: 'B. Chilwell', number: 21, position: 'Defender' },
            { id: 'p5', name: 'W. Fofana', number: 33, position: 'Defender' },
            { id: 'p6', name: 'E. Fernandez', number: 5, position: 'Midfielder' },
            { id: 'p7', name: 'N. Kante', number: 7, position: 'Midfielder' },
            { id: 'p8', name: 'M. Mount', number: 19, position: 'Midfielder' },
            { id: 'p9', name: 'L. Sterling', number: 17, position: 'Forward' },
            { id: 'p10', name: 'N. Jackson', number: 15, position: 'Forward' },
            { id: 'p11', name: 'M. Mudryk', number: 10, position: 'Forward' },
        ],
        away: [
            { id: 'p12', name: 'V. Guaita', number: 1, position: 'Goalkeeper' },
            { id: 'p13', name: 'N. Clyne', number: 17, position: 'Defender' },
            { id: 'p14', name: 'J. Andersen', number: 16, position: 'Defender' },
            { id: 'p15', name: 'M. Guehi', number: 6, position: 'Defender' },
            { id: 'p16', name: 'T. Mitchell', number: 3, position: 'Defender' },
            { id: 'p17', name: 'C. Doucoure', number: 28, position: 'Midfielder' },
            { id: 'p18', name: 'J. Lerma', number: 8, position: 'Midfielder' },
            { id: 'p19', name: 'E. Eze', number: 10, position: 'Midfielder' },
            { id: 'p20', name: 'M. Olise', number: 7, position: 'Forward' },
            { id: 'p21', name: 'O. Edouard', number: 22, position: 'Forward' },
            { id: 'p22', name: 'J. Ayew', number: 9, position: 'Forward' },
        ],
    },
  },
  {
    id: '2',
    date: formatISO(new Date(today.setHours(20, 0, 0))),
    status: 'Upcoming',
    league: 'La Liga',
    teams: { home: teams['t3'], away: teams['t4'] },
    scores: { home: 0, away: 0 },
  },
  // Yesterday's Matches
  {
    id: '3',
    date: formatISO(subDays(today, 1).setHours(18, 0, 0)),
    status: 'Finished',
    league: 'Serie A',
    teams: { home: teams['t5'], away: teams['t6'] },
    scores: { home: 3, away: 0 },
    lineups: {
        home: [],
        away: []
    }
  },
  // Tomorrow's Matches
  {
    id: '4',
    date: formatISO(addDays(today, 1).setHours(19, 45, 0)),
    status: 'Upcoming',
    league: 'Champions League',
    teams: { home: teams['t1'], away: teams['t3'] },
    scores: { home: 0, away: 0 },
  },
    {
    id: '5',
    date: formatISO(new Date(today.setHours(17, 30, 0))),
    status: 'Finished',
    time: "90'",
    league: 'Premier League',
    teams: { home: teams['t4'], away: teams['t5'] },
    scores: { home: 1, away: 1 },
    events: [
        { time: "45'", type: 'Goal', player: 'D. Verde', teamId: 't4' },
        { time: "88'", type: 'Goal', player: 'A. Lione', teamId: 't5' },
    ],
  },
];
