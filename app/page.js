import FoodCategories from "@/components/FoodCategories";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <FoodCategories />
      <About />
      <Footer />
    </main>

  );
}
