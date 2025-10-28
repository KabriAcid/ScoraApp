import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MatchCardSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
          <div className="flex items-center gap-3 justify-self-start">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="hidden h-5 w-24 md:block" />
          </div>

          <div className="flex flex-col items-center gap-1">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-4 w-12" />
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <Skeleton className="hidden h-5 w-24 md:block" />
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
