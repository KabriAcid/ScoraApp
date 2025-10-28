'use server';

import type { Match } from './types';
import { matches as allMatches } from './data';
import { format } from 'date-fns';

// Simulate network delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getMatchesByDate(date: Date): Promise<Match[]> {
  await delay(1000); // Simulate API latency
  
  const dateString = format(date, 'yyyy-MM-dd');

  const filteredMatches = allMatches.filter(match => match.date.startsWith(dateString));

  // Sort matches: Live > Upcoming > Finished
  return filteredMatches.sort((a, b) => {
    const statusOrder = { 'Live': 1, 'Upcoming': 2, 'Finished': 3 };
    return statusOrder[a.status] - statusOrder[b.status];
  });
}

export async function getMatchById(id: string): Promise<Match | undefined> {
    await delay(500);
    return allMatches.find(match => match.id === id);
}
