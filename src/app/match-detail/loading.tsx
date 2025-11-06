import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Skeleton */}
      <div
        className="p-6 text-primary-foreground"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-8 w-8 rounded-md bg-white/20" />
          <Skeleton className="h-5 w-40 bg-white/20" />
          <Skeleton className="h-8 w-8 rounded-md bg-white/20" />
        </div>

        <div className="text-center mb-4">
          <Skeleton className="h-4 w-48 mb-2 mx-auto bg-white/20" />
          <Skeleton className="h-6 w-16 mb-4 mx-auto rounded-full bg-white/20" />
        </div>

        {/* Score Skeleton */}
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="flex flex-col items-center">
            <Skeleton className="w-16 h-16 rounded-full mb-2 bg-white/20" />
            <Skeleton className="h-3 w-12 bg-white/20" />
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 bg-white/20" />
            <Skeleton className="h-8 w-4 bg-white/20" />
            <Skeleton className="h-12 w-12 bg-white/20" />
          </div>

          <div className="flex flex-col items-center">
            <Skeleton className="w-16 h-16 rounded-full mb-2 bg-white/20" />
            <Skeleton className="h-3 w-12 bg-white/20" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Tabs Skeleton */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-10 rounded-md" />
          ))}
        </div>

        {/* Content Cards */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-5 w-32 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
