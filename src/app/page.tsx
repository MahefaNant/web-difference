import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/Navbar";
import { FaCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#1C1C1C]">
        <NavBar />
        <HeroSection
          badge={{
            text: "CRÉE UN SITE WEB VRAIMENT UNIQUE",
            imageSrc: "/logo-bulle.png",
          }}
          titleLines={[
            "Votre site doit donner envie",
            "de rester, pas de revenir en",
            "arrière.",
          ]}
          highlightedWords={["site", "donner", "envie", "rester"]}
          strikethroughWords={["revenir", "arrière"]}
          strikethroughWordsNormal={["en"]}
          description="Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats."
          primaryCTA={{
            text: "Prendre RDV",
            href: "/signup",
            icon: (
              <FaCalendarAlt
                style={{ width: "20px", height: "20px" }}
                className="font-extrabold h-12 w-12"
              />
            ),
          }}
          secondaryCTA={{
            text: "Découvrir nos projets",
            href: "/customers",
          }}
        />

        {/* Additional sections can go here */}
        <div className="h-20" />
      </main>
    </>
  );
}
