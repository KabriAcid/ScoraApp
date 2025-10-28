import { Skeleton } from '@/components/ui/skeleton';

export default function MatchDetailLoading() {
  return (
    <div className="container mx-auto max-w-5xl p-4">
      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-2 mb-4">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-64" />
        </div>
        <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 mb-8">
            <div className="flex flex-col items-center gap-2">
                <Skeleton className="h-20 w-20 rounded-full" />
                <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-12 w-32" />
            <div className="flex flex-col items-center gap-2">
                <Skeleton className="h-20 w-20 rounded-full" />
                <Skeleton className="h-6 w-32" />
            </div>
        </div>
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-96 w-full mt-6" />
      </div>
    </div>
  );
}
