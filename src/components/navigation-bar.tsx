"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Trophy, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/matches', label: 'Matches', icon: Calendar },
    { href: '#', label: 'Leagues', icon: Trophy },
    { href: '#', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="mx-auto grid h-16 max-w-lg grid-cols-3">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && item.href !== '#';
          const isDisabled = item.href === '#';
          return (
            <Link
              key={item.label}
              href={isDisabled ? '#' : item.href}
              className={cn(
                'inline-flex flex-col items-center justify-center px-5 font-medium group',
                isDisabled && 'opacity-40 cursor-not-allowed'
              )}
              aria-disabled={isDisabled}
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              <div className={cn(
                'p-2 rounded-full transition-colors',
                isActive ? 'bg-accent/10' : 'group-hover:bg-accent/5'
              )}>
                <item.icon className={cn(
                  'h-6 w-6 transition-colors',
                  isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-accent'
                )} />
              </div>
              <span className={cn(
                'text-xs transition-colors',
                isActive ? 'text-accent font-semibold' : 'text-muted-foreground'
              )}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
