import Container from "../components//landing_page/Container";
import Footer from "../components//landing_page/Footer";
import Header from "../components/landing_page/Header";
import Navbar from "../components/landing_page/Navbar";
import SecondContainer from "../components/landing_page/SecondContainer";
import Videocontainer from "../components/landing_page/VideoContainer";


export default function Home() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Videocontainer />
    <Container />
    <SecondContainer />
    <Footer />
  </div>
  );
}
