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
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { standingsData } from "@/data/standings";

interface TeamStanding {
  position: number;
  team: {
    name: string;
    logo: string;
  };
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Select defaultValue="premier-league">
              <SelectTrigger>
                <SelectValue placeholder="League" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="premier-league">Premier League</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2024-2025">
              <SelectTrigger>
                <SelectValue placeholder="Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-2025">2024/25</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Home/Away" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Home & Away</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {loading ? (
          <StandingsSkeleton />
        ) : (
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Pos</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead className="text-right">Pl</TableHead>
                  <TableHead className="text-right hidden sm:table-cell">W</TableHead>
                  <TableHead className="text-right hidden sm:table-cell">D</TableHead>
                  <TableHead className="text-right hidden sm:table-cell">L</TableHead>
                  <TableHead className="text-right">Pts</TableHead>
                  <TableHead className="text-center hidden md:table-cell">Form</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standings.map((entry) => (
                  <TableRow key={entry.position}>
                    <TableCell className="font-medium">{entry.position}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Image
                          src={entry.team.logo}
                          alt={entry.team.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="hidden sm:inline">{entry.team.name}</span>
                        <span className="sm:hidden">{entry.team.name.substring(0,3).toUpperCase()}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{entry.played}</TableCell>
                    <TableCell className="text-right hidden sm:table-cell">{entry.win}</TableCell>
                    <TableCell className="text-right hidden sm:table-cell">{entry.draw}</TableCell>
                    <TableCell className="text-right hidden sm:table-cell">{entry.loss}</TableCell>
                    <TableCell className="text-right font-bold">{entry.points}</TableCell>
                    <TableCell className="hidden md:table-cell">
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
    </div>
  );
};

export default StandingsPage;
