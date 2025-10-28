"use client";

import * as React from "react";
import { addDays, format, isToday, isYesterday, isTomorrow } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Match } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { getMatchesByDate } from "@/lib/actions";
import { MatchList } from "@/components/match-list";
import { MatchCardSkeleton } from "@/components/match-card-skeleton";

export default function MatchesPage() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [matches, setMatches] = React.useState<Match[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchMatches = async () => {
      setIsLoading(true);
      const fetchedMatches = await getMatchesByDate(date);
      setMatches(fetchedMatches);
      setIsLoading(false);
    };

    fetchMatches();
  }, [date]);

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
      setIsDatePickerOpen(false);
    }
  }

  const handleDayNavigation = (direction: 'prev' | 'next') => {
    setDate(currentDate => addDays(currentDate, direction === 'prev' ? -1 : 1));
  };
  
  const getDisplayDate = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, "PPP");
  }

  return (
    <div className="container mx-auto max-w-4xl p-4 page-transition">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-headline text-3xl text-primary">Matches</h1>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="icon" onClick={() => handleDayNavigation('prev')} aria-label="Previous day">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[150px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? getDisplayDate(date) : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="icon" onClick={() => handleDayNavigation('next')} aria-label="Next day">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <MatchCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <MatchList matches={matches} />
      )}
    </div>
  );
}
