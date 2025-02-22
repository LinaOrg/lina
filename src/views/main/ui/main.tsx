import { HeroSection } from "./heroSection";
import { LinaMagazine } from "./linaMagazine";
import { LinaOpportunities } from "./linaOpportunities";
import { LinaAchievements } from "./linaAchievements";
import { Latest } from "./latest";
import { LinaProducts } from "./linaProducts";

//this is a test 
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
