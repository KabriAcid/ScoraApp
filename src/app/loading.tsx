import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-6 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>

        {/* Date Selector Skeleton */}
        <div className="px-4 pb-4">
          <Skeleton className="h-4 w-24 mb-3" />
          <div className="flex gap-2 overflow-x-auto pb-2 px-1">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="min-w-[48px] h-16 rounded-xl" />
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="p-4 space-y-6">
        {/* Featured Match Skeleton */}
        <section>
          <Skeleton className="h-6 w-32 mb-4" />
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex items-center gap-4 mx-4">
                  <Skeleton className="h-12 w-12" />
                  <Skeleton className="h-8 w-4" />
                  <Skeleton className="h-12 w-12" />
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Today's Matches Skeleton */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-8 w-24" />
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-6 w-16" />
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Navigation Skeleton */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card z-50 shadow-multi-layered">
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-1 flex-1">
              <Skeleton className="h-5 w-5 rounded-md" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
