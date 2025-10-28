import type { Team } from '@/lib/types';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TeamBadgeProps {
  team: Team;
  size?: number;
}

export function TeamBadge({ team, size = 48 }: TeamBadgeProps) {
  const placeholder = PlaceHolderImages.find(p => p.imageUrl === team.logo);

  return (
    <Avatar className="border-2 border-card bg-muted" style={{ height: size, width: size }}>
      <AvatarImage 
        src={team.logo} 
        alt={`${team.name} logo`} 
        width={size}
        height={size}
        data-ai-hint={placeholder?.imageHint}
      />
      <AvatarFallback>{team.name.substring(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
