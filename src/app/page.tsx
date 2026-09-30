import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";

export default function Home() {
  return (
    <main className="flex-1">
      <article>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
      </article>
    </main>
  );
}
