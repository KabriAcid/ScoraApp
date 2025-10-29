
import { Navigation } from "@/components/Navigation";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold text-center">Profile</h1>
      </header>
      <main className="p-4">
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Profile page is under construction.</p>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default ProfilePage;
