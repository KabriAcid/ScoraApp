"use client";

import * as React from 'react';
import { Button } from './ui/button';
import { getHighlightRecommendations } from '@/ai/flows/highlight-recommendations';
import type { HighlightRecommendationsOutput } from '@/ai/flows/highlight-recommendations';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Sparkles, Film, AlertTriangle } from 'lucide-react';
import type { Match } from '@/lib/types';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface AiHighlightsProps {
    match: Match;
}

export default function AiHighlights({ match }: AiHighlightsProps) {
    const [highlights, setHighlights] = React.useState<HighlightRecommendationsOutput | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleGetHighlights = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const matchSummary = `Match between ${match.teams.home.name} and ${match.teams.away.name}. 
            Current score: ${match.scores.home} - ${match.scores.away}. 
            Status: ${match.status}.
            Events: ${match.events?.map(e => `${e.time} ${e.type} by ${e.player}`).join(', ') || 'No major events yet.'}`;

            const result = await getHighlightRecommendations({ matchSummary });
            setHighlights(result);
        } catch (e) {
            console.error(e);
            setError('Failed to generate highlights. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!highlights && !isLoading && !error) {
        return (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card p-12 text-center">
                <Sparkles className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-semibold">Discover Key Moments</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Let our AI analyze the match and bring you the most exciting highlights.
                </p>
                <Button onClick={handleGetHighlights} className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate AI Highlights
                </Button>
            </div>
        );
    }

    return (
        <div>
            {isLoading && (
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                         <Card key={i}>
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                     <Skeleton className="h-10 w-10 rounded-full" />
                                    <div className="space-y-2 flex-1">
                                        <Skeleton className="h-5 w-3/4" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            )}
            {error && (
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {highlights && (
                <div className="space-y-4">
                    {highlights.highlightRecommendations.map((rec, index) => (
                        <Card key={index} className="transition-all hover:shadow-md">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Film className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{rec.moment}</CardTitle>
                                        <p className="mt-1 text-sm text-muted-foreground">{rec.reason}</p>
                                        {rec.timestamp && <p className="mt-2 text-xs font-semibold text-accent">{rec.timestamp}</p>}
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
