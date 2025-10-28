import type { Player } from '@/lib/types';
import { Card, CardContent } from './ui/card';

interface PlayerListProps {
    players: Player[];
    title: string;
}

export function PlayerList({ players, title }: PlayerListProps) {
    return (
        <Card>
            <CardContent className="p-4">
                <h4 className="mb-4 font-semibold">{title}</h4>
                <ul className="space-y-3">
                    {players.map(player => (
                        <li key={player.id} className="flex items-center justify-between text-sm">
                           <div className="flex items-center gap-3">
                             <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                <span className="font-bold">{player.number}</span>
                             </div>
                             <span>{player.name}</span>
                           </div>
                           <span className="text-muted-foreground">{player.position}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
