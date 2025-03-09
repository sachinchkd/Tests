'use client';
// app/page.jsx
import { useState } from 'react';
import Container from "../components/landing_page/Container";
import Footer from "../components/landing_page/Footer";
import Header from "../components/landing_page/Header";
import Navbar from "../components/landing_page/Navbar";
import SecondContainer from "../components/landing_page/SecondContainer";
import Videocontainer from "../components/landing_page/VideoContainer";

import GrapesJsStudio, {
  StudioCommands,
  ToastVariant,
} from '@grapesjs/studio-sdk/react';

import '@grapesjs/studio-sdk/style';


export default function Home() {
  const [editor, setEditor] = useState();

  const onReady = (editor) => {
    console.log('Editor loaded', editor);
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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        <GrapesJsStudio
          onReady={onReady}
          options={{
            licenseKey: 'f1368a1739dc41a4ac9758aeae04b98187ed1af66e4449a59e5939775b75fa60',
            project: {
              default: {
                pages: [
                  {
                    name: 'Home',
                    component: `<h1 style="padding: 2rem; text-align: center">
                      Hello Studio 👋
                    </h1>`,
                  },
                ],
              },
            },
          }}
        />
      </div>
      </main>
      <Videocontainer />
      <Container />
      <SecondContainer />
      <Footer />
    </>
  );
}