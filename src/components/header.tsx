import Link from 'next/link';
import { Button } from './ui/button';

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


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/matches" className="mr-6 flex items-center space-x-2">
          <SoccerBall className="h-6 w-6 text-primary" />
          <span className="hidden font-headline text-lg font-bold sm:inline-block">
            Scora
          </span>
        </Link>
      </div>
    </header>
  );
}
