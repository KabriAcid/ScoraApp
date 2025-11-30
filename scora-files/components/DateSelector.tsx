import { cn } from "@/lib/utils";

interface DateSelectorProps {
  selectedDate: number;
  onDateChange: (date: number) => void;
  fixturesCalendar: { day: string; date: number }[]; // Add fixturesCalendar as a prop
}

export const DateSelector = ({
  selectedDate,
  onDateChange,
  fixturesCalendar, // Use fixturesCalendar from props
}: DateSelectorProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-1">
      {fixturesCalendar.map(({ date, day }) => (
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
