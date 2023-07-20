import { notFound } from "next/navigation";
import Stats from "@/components/stats";

export const runtime = "edge";

export default async function StatsPage({
  params,
}: {
  params: { key: string };
}) {
  if (params.key !== "github") {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <Stats />
    </div>
  );
}
