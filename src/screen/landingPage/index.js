import React from "react";
import DrawerAppBar from "../../components/navbar";
import HeroSection from "../../components/heroSection";
import SynchronizeEmails from "../../components/synchronizeEmails";
import SmartAssistant from "../../components/smartAssistant";
import HappyCustomers from "../../components/customers";
import Subscribe from "../../components/subscribe";
import Footer from "../../components/footer";
import Cards22 from "../../components/cards";
function LandingPage() {
  return (
    <div>
      <DrawerAppBar />
      <br />
      <br />
      <HeroSection />
      <br />
      <br />
      <SynchronizeEmails />
      <br />
      <br />
      <SmartAssistant />
      <br />
      <br />
      <HappyCustomers />
      <br />
      <br />
      <Cards22 />
      <br />
      <br />
      <Subscribe />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default LandingPage;
