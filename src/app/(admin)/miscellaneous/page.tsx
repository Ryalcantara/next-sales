import Sidebar from "@/components/misc/Sidebar/Sidebar";
import Topbar from "@/components/misc/Topbar/Topbar";

export default function Misc({children}: {children: React.ReactNode}) {
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
