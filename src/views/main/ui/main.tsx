import { HeroSection } from "./heroSection";
import { LinaMagazine } from "./linaMagazine";
import { LinaOpportunities } from "./linaOpportunities";
import { LinaAchievements } from "./linaAchievements";
import { Latest } from "./latest";
import { LinaProducts } from "./linaProducts";



export function Main() {
  return (
    <>
      <HeroSection />
      <LinaProducts />
      <Latest />
      <LinaAchievements />
      <LinaOpportunities />
      <LinaMagazine />
    </>
  );
}
