import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[15rem] h-screen">
      <div className="flex gap-4 flex-col p-4">
          <Link href="/activity/billing">Billing Queue</Link>
          <Link href="/activity/order-history">Sales History</Link>
      </div>
    </div>
  );
}
