'use client';

import Link from "next/link";
import { Home, TrendingUp, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

export const Navigation = ({ activeTab: activeTabProp }: { activeTab: string }) => {
  const router = useRouter();
  
  const getActiveTab = () => {
    const path = router.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/standings")) return "standings";
    if (path.startsWith("/calendar")) return "calendar";
    if (path.startsWith("/profile")) return "profile";
    return activeTabProp;
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
