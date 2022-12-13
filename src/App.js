import "./App.css";
import DrawerAppBar from "./components/navbar";
import HeroSection from "./components/heroSection";
import SynchronizeEmails from "./components/synchronizeEmails";
import SmartAssistant from "./components/smartAssistant";
import Pricing from "./components/pricing";
import HappyCustomers from "./components/customers";
import Subscribe from "./components/subscribe";
import Sticker from "./components/stickers";
import Footer from "./components/footer";
import Cards22 from "./components/cards";
function App() {
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
      <Pricing />
      <br />
      <br />
      <HappyCustomers />
      <br />
      <br />
      <Subscribe />
      <br />
      <br />
      <Cards22 />
      <br />
      <br />
      <Sticker />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
