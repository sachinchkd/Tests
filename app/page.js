"use client";

import Container from "../components//landing_page/Container";
import Footer from "../components//landing_page/Footer";
import Header from "../components/landing_page/Header";
import Navbar from "../components/landing_page/Navbar";
import SecondContainer from "../components/landing_page/SecondContainer";
import Videocontainer from "../components/landing_page/VideoContainer";

import { useEffect } from "react";

const StudioEditor = () => {
  useEffect(() => {
    // Ensure the script runs after the component is mounted
    if (window.GrapesJsStudioSDK) {
      window.GrapesJsStudioSDK.createStudioEditor({
        root: "#studio",
        licenseKey:
          "9288b413eb9f40728a30256f2502f00260929631643e4d7b8eac2c36bf132450",
        project: {
          default: {
            pages: [
              {
                name: "Home",
                component: `<h1 style="padding: 2rem; text-align: center">
                  Hello Studio 👋
                </h1>`,
              },
            ],
          },
        },
      });
    }
  }, []);

  return (
    <>
      
      <main style={{ flexGrow: 1, height: "100vh" }}>
        <div id="studio" style={{ height: "100%" }}></div>
      </main>
    </>
  );
};


export default function Home() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <StudioEditor />
    <iframe
      src="/webhub/html/index.html" // Ensure the file is in "public" folder
      width="100%"
      height="600px"
      style={{ border: "none" }}
    />
    <Videocontainer />
    <Container />
    <SecondContainer />
    <Footer />
  </div>
  );
}
