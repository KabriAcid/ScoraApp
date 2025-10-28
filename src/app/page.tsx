import { Button } from '@/components/ui/button';
import { PhoneMockup } from '@/components/phone-mockup';
import { ArrowRight, Star, ShieldCheck, BarChart2 } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-headline text-4xl leading-tight tracking-tighter text-primary md:text-5xl lg:text-6xl">
              Never Miss a Goal.
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Welcome to <span className="font-semibold text-primary">Scora</span>, your ultimate companion for live soccer scores, detailed match stats, and AI-powered highlight recommendations.
            </p>
            <div className="mt-8 space-y-4">
              <FeatureItem icon={Star} text="AI-Curated Highlights: Catch the most exciting moments." />
              <FeatureItem icon={ShieldCheck} text="Live Match Details: Scores, lineups, and stats in real-time." />
              <FeatureItem icon={BarChart2} text="In-Depth Analysis: Head-to-head stats and team forms." />
            </div>

            <Button asChild size="lg" className="mt-10 bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-xl hover:shadow-accent/40">
              <Link href="/matches">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium text-foreground/80">{text}</span>
    </div>
  );
}
