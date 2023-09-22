import Navbar from "../components/Layout/Navbar";
import HeroBg from "../components/HomeSections/HeroBg";
import Introduction from "../components/HomeSections/Introduction";
import RulesAndGuidelines from "../components/HomeSections/RulesAndGuidelines";
import JudgingCriteria from "../components/HomeSections/JudgingCriteria";
import FAQ from "../components/HomeSections/FAQ";
import Timeline from "../components/HomeSections/Timeline";
import PricesAndRewards from "../components/HomeSections/PricesAndRewards";
import PartnersAndSponsors from "../components/HomeSections/PartnersAndSponsors";
import PrivacyPolicyAndTerms from "../components/HomeSections/PrivacyPolicyAndTerms";
import Footer from "../components/Layout/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroBg />
      <Introduction />
      <RulesAndGuidelines />
      <JudgingCriteria />
      <FAQ />
      <Timeline />
      <PricesAndRewards />
      <PartnersAndSponsors />
      <PrivacyPolicyAndTerms />
      <Footer />
    </div>
  );
};

export default Homepage;
