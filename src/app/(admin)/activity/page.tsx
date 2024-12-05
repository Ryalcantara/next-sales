import Sidebar from "@/components/activity/Sidebar/Sidebar";
import Topbar from "@/components/activity/Topbar/Topbar";

export default function Activity({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden h-dvh">
      <Topbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
