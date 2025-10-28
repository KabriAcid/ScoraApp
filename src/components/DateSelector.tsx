import { cn } from "@/lib/utils";
import { fixturesCalendar } from "@/data/fixturesCalendar";

interface DateSelectorProps {
  selectedDate: number;
  onDateChange: (date: number) => void;
}

export const DateSelector = ({
  selectedDate,
  onDateChange,
}: DateSelectorProps) => {
  const dates = fixturesCalendar.map((fixture) => ({
    day: fixture.day, // Use the day directly
    date: fixture.date, // Use the date directly as a number
  }));

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-1">
      {dates.map(({ date, day }, index) => (
        <button
          key={date}
          onClick={() => onDateChange(date)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[48px] h-16 rounded-xl transition-all",
            selectedDate === date
              ? "bg-accent text-accent-foreground shadow-lg scale-105"
              : "bg-card text-foreground hover:bg-secondary"
          )}
        >
          <span className="text-xs font-medium mb-1">{day}</span>
          <span className="text-lg font-bold">{date}</span>
        </button>
      ))}
    </div>
  );
};
