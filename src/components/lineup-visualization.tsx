import type { Player } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface LineupVisualizationProps {
  lineup: Player[];
}

export function LineupVisualization({ lineup }: LineupVisualizationProps) {
  const formation: Record<string, Player[]> = {
    Goalkeeper: [],
    Defender: [],
    Midfielder: [],
    Forward: [],
  };

  lineup.forEach(player => {
    if (formation[player.position]) {
      formation[player.position].push(player);
    }
  });

  return (
    <div className="relative aspect-[2/3] w-full rounded-lg bg-green-600/20 p-4 ring-1 ring-inset ring-green-600/30">
      <div className="relative h-full w-full">
        {/* Field Markings */}
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-green-600/40"></div>
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-600/40"></div>
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/40"></div>
        <div className="absolute inset-x-0 top-0 h-16 border-b-2 border-green-600/40">
            <div className="absolute left-1/2 top-0 h-8 w-24 -translate-x-1/2 rounded-b-lg border-2 border-t-0 border-green-600/40"></div>
        </div>
        <div className="absolute inset-0 rounded-lg border-2 border-green-600/40"></div>


        <TooltipProvider>
            {Object.entries(formation).map(([position, players]) => (
                <div key={position} className={cn(
                    "absolute inset-x-0 flex justify-around",
                    position === 'Goalkeeper' && 'top-[5%]',
                    position === 'Defender' && 'top-[20%]',
                    position === 'Midfielder' && 'top-[45%]',
                    position === 'Forward' && 'top-[75%]',
                )}>
                    {players.map(player => (
                        <Tooltip key={player.id}>
                            <TooltipTrigger asChild>
                                <div className="group relative flex cursor-pointer flex-col items-center transition-transform duration-200 hover:!scale-110 hover:z-10">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-foreground bg-primary text-primary-foreground shadow-md">
                                        <span className="text-xs font-bold">{player.number}</span>
                                    </div>
                                    <span className="mt-1 block max-w-[60px] truncate rounded-full bg-black/20 px-1.5 py-0.5 text-center text-[10px] font-medium text-white/90 group-hover:bg-black/40">
                                        {player.name.split(' ').pop()}
                                    </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-semibold">{player.name} (#{player.number})</p>
                                <p className="text-muted-foreground">{player.position}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            ))}
        </TooltipProvider>
      </div>
    </div>
  );
}
