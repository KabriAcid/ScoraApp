'use client';

import Link from "next/link";
import { Home, TrendingUp, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/standings")) return "standings";
    if (pathname.startsWith("/calendar")) return "calendar";
    if (pathname.startsWith("/profile")) return "profile";
    return "home";
  }

  const activeTab = getActiveTab();

  const tabs = [
    { id: "home", href: "/", icon: Home, label: "Home" },
    { id: "standings", href: "/standings", icon: TrendingUp, label: "Standings" },
    { id: "calendar", href: "/calendar", icon: Calendar, label: "Calendar" },
    { id: "profile", href: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card z-50 shadow-multi-layered">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <Link
              href={tab.href}
              key={tab.id}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
