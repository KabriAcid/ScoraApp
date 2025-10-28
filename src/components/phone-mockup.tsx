import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { TeamBadge } from './team-badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SoccerBall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12-3.2 4.9" />
    <path d="m5.1 19.4 3.2-6.1" />
    <path d="M12 12h7.8" />
    <path d="m16.1 3.7-3.2 6.1" />
    <path d="M21.9 10.6 15 12" />
    <path d="M12 12-3.2 4.9" />
    <path d="m5.1 19.4 3.2-6.1" />
    <path d="M12 12h7.8" />
    <path d="m16.1 3.7-3.2 6.1" />
    <path d="M21.9 10.6 15 12" />
    <path d="M12 12-3.2 4.9" />
    <path d="m5.1 19.4 3.2-6.1" />
    <path d="M12 12h7.8" />
    <path d="m16.1 3.7-3.2 6.1" />
    <path d="M21.9 10.6 15 12" />
    <path d="M3.23 4.88 10 12" />
    <path d="m5.15 19.37 3.16-6.07" />
    <path d="M12 12h7.83" />
    <path d="m16.11 3.71-3.21 6.1" />
    <path d="m21.92 10.59-6.83 1.4" />
  </svg>
);


export function PhoneMockup() {
  const team1Logo = PlaceHolderImages.find(img => img.id === 'team-logo-1');
  const team2Logo = PlaceHolderImages.find(img => img.id === 'team-logo-2');

  return (
    <div className="relative mx-auto h-[550px] w-[280px] rounded-[40px] border-[10px] border-gray-800 bg-gray-800 shadow-xl dark:border-gray-900">
      <div className="absolute left-1/2 top-0 h-4 w-28 -translate-x-1/2 rounded-b-lg bg-gray-800 dark:bg-gray-900"></div>
      <div className="h-full w-full overflow-hidden rounded-[30px] bg-background">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <SoccerBall className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg text-primary">Scora</span>
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
          </div>

          {/* Content */}
          <div className="flex-grow p-4">
            <h2 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
              Live Match
            </h2>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <TeamBadge
                      team={{
                        id: '1',
                        name: 'Violet FC',
                        logo: team1Logo?.imageUrl ?? '',
                      }}
                    />
                    <span className="w-20 truncate text-sm font-medium">Violet FC</span>
                  </div>
                  <div className="text-center">
                    <span className="font-headline text-4xl">2 - 1</span>
                    <div className="mt-1 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent">
                      78'
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                     <TeamBadge
                      team={{
                        id: '2',
                        name: 'Red Dragons',
                        logo: team2Logo?.imageUrl ?? '',
                      }}
                    />
                    <span className="w-20 truncate text-sm font-medium">Red Dragons</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
