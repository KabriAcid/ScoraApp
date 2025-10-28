import { Header } from '@/components/header';
import { NavigationBar } from '@/components/navigation-bar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <NavigationBar />
    </div>
  );
}
