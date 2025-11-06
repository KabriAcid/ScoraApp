import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 border-b sticky top-0 bg-background z-10">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-8 rounded-md" />
          <div className="text-center">
            <Skeleton className="h-5 w-32 mb-1 mx-auto" />
            <Skeleton className="h-3 w-40 mx-auto" />
          </div>
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </header>

      <main className="p-4 space-y-4">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex}>
            <Skeleton className="h-5 w-32 mb-2" />
            <Card>
              <div className="space-y-0">
                {[...Array(3)].map((_, matchIndex) => (
                  <div
                    key={matchIndex}
                    className={`flex items-center justify-between p-4 ${
                      matchIndex < 2 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1 justify-end">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-7 w-7 rounded-full" />
                    </div>
                    <div className="text-center mx-4">
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                    <div className="flex items-center gap-4 flex-1">
                      <Skeleton className="h-7 w-7 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
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
