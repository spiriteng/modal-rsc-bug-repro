import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link
        href="/stats/github"
        className="flex items-center space-x-1 rounded-md bg-gray-100 px-2 py-0.5 text-gray-700 transition-all duration-75 hover:scale-105 active:scale-95"
      >
        34.5K clicks
      </Link>
    </div>
  );
}
