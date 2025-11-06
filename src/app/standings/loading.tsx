import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 border-b">
        <Skeleton className="h-6 w-32 mx-auto" />
      </header>

      <main className="p-4">
        <Card className="p-4 mb-4">
          <Skeleton className="h-10 w-full rounded-md" />
        </Card>

        <Card className="p-4">
          {/* Table Header */}
          <div className="flex items-center gap-2 mb-4 pb-2 border-b">
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 py-2">
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-10 font-bold" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="h-5 w-5 rounded-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>

      {/* Navigation Skeleton */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card z-50 shadow-multi-layered">
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-1 flex-1"
            >
              <Skeleton className="h-5 w-5 rounded-md" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
