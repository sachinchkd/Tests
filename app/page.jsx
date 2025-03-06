// page.jsx
"use client";

import { StudioCommands, ToastVariant } from '@grapesjs/studio-sdk/react';
import dynamic from "next/dynamic";
import { useState } from "react";
import Container from "../components/landing_page/Container";
import Footer from "../components/landing_page/Footer";
import Header from "../components/landing_page/Header";
import Navbar from "../components/landing_page/Navbar";
import SecondContainer from "../components/landing_page/SecondContainer";
import Videocontainer from "../components/landing_page/VideoContainer";

// Dynamically import the editor with no SSR
const GrapesJsEditor = dynamic(() => import('../components/GrapeJsEditor'), {
  ssr: false,
});

export default function Home() {
  const [editor, setEditor] = useState(null);

  const onReady = (editor) => {
    setEditor(editor);
  };

  const showToast = (id) =>
    editor?.runCommand(StudioCommands.toastAdd, {
      id,
      header: 'Toast header',
      content: 'Data logged in console',
      variant: ToastVariant.Info,
    });

  const getProjetData = () => {
    if (editor) {
      console.log({ projectData: editor?.getProjectData() });
      showToast('log-project-data');
    }
  };

  const getExportData = () => {
    if (editor) {
      console.log({ html: editor?.getHtml(), css: editor?.getCss() });
      showToast('log-html-css');
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <main className="flex h-screen flex-col justify-between p-5 gap-2">
        <div className="p-1 flex gap-5">
          <div className="font-bold">SDK example Next.js</div>
          <button className="border rounded px-2" onClick={getProjetData}>
            Log Project Data
          </button>
          <button className="border rounded px-2" onClick={getExportData}>
            Log HTML/CSS
          </button>
        </div>
        <div className="flex-1 w-full h-full overflow-hidden">
          <GrapesJsEditor onEditorReady={onReady} />
        </div>
      </main>
      <Videocontainer />
      <Container />
      <SecondContainer />
      <Footer />
    </>
  );
}