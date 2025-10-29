
'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { standingsData } from "@/data/standings";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/Navigation";
import { PremierLeagueClub } from "@/data/clubs";

interface TeamStanding {
  position: number;
  team: PremierLeagueClub;
  played: number;
  win: number;
  draw: number;
  loss: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: ("W" | "D" | "L")[];
}

const FormBadge = ({ result }: { result: "W" | "D" | "L" }) => {
  const baseClasses = "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white";
  const variants = {
    W: "bg-green-500",
    D: "bg-gray-400",
    L: "bg-red-500",
  };
  return <div className={`${baseClasses} ${variants[result]}`}>{result}</div>;
};

const StandingsSkeleton = () => (
  <div className="space-y-2">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="flex items-center gap-4 p-2">
        <Skeleton className="h-6 w-6" />
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-6 w-24" />
        <div className="flex-grow" />
        <Skeleton className="h-6 w-8" />
        <Skeleton className="h-6 w-8" />
        <Skeleton className="h-6 w-8" />
      </div>
    ))}
  </div>
);

const StandingsPage = () => {
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setStandings(standingsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold text-center">Standings</h1>
      </header>

      <main className="p-4">
        <Card className="p-4 mb-4">
          <div className="grid grid-cols-1">
            <Select defaultValue="2024-2025">
              <SelectTrigger>
                <SelectValue placeholder="Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-2025">2024/25</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {loading ? (
          <StandingsSkeleton />
        ) : (
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px] p-2">Pos</TableHead>
                  <TableHead className="p-2">Team</TableHead>
                  <TableHead className="text-right p-2">Pl</TableHead>
                  <TableHead className="text-right p-2">W</TableHead>
                  <TableHead className="text-right p-2">D</TableHead>
                  <TableHead className="text-right p-2">L</TableHead>
                  <TableHead className="text-right p-2">GF</TableHead>
                  <TableHead className="text-right p-2">GA</TableHead>
                  <TableHead className="text-right p-2">GD</TableHead>
                  <TableHead className="text-right font-bold p-2">Pts</TableHead>
                  <TableHead className="p-2 text-center">Form</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standings.map((entry) => (
                  <TableRow key={entry.position}>
                    <TableCell className="font-medium p-2">{entry.position}</TableCell>
                    <TableCell className="p-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={entry.team.badgeUrl}
                          alt={entry.team.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="hidden sm:inline">{entry.team.responsiveName}</span>
                        <span className="sm:hidden">{entry.team.shortName.toUpperCase()}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right p-2">{entry.played}</TableCell>
                    <TableCell className="text-right p-2">{entry.win}</TableCell>
                    <TableCell className="text-right p-2">{entry.draw}</TableCell>
                    <TableCell className="text-right p-2">{entry.loss}</TableCell>
                    <TableCell className="text-right p-2">{entry.gf}</TableCell>
                    <TableCell className="text-right p-2">{entry.ga}</TableCell>
                    <TableCell className="text-right p-2">{entry.gd}</TableCell>
                    <TableCell className="text-right font-bold p-2">{entry.points}</TableCell>
                    <TableCell className="p-2">
                      <div className="flex gap-1 justify-center">
                        {entry.form.map((result, index) => (
                          <FormBadge key={index} result={result} />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </main>
      <Navigation />
    </div>
  );
};

export default StandingsPage;
