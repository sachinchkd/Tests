// app/page.jsx
import Link from 'next/link';
import Container from "../components/landing_page/Container";
import Footer from "../components/landing_page/Footer";
import Header from "../components/landing_page/Header";
import Navbar from "../components/landing_page/Navbar";
import SecondContainer from "../components/landing_page/SecondContainer";
import Videocontainer from "../components/landing_page/VideoContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">Web Hub Builder</h1>
          <p className="text-xl">Build your website visually using our advanced editor</p>
          <Link 
            href="/editor" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Launch Editor
          </Link>
        </div>
      </main>
      <Videocontainer />
      <Container />
      <SecondContainer />
      <Footer />
    </>
  );
}