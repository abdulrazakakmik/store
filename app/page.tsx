import { Hero, Redsection, Section2 } from "@/components/index";

export default function Home() {
  return (
    <div className="bg-gray-100 lg:bg-white pt-4 w-full">
      <Hero />
      <Redsection />
      <Section2 />
    </div>
  );
}
