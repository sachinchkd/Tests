// components/GrapesJsEditor.jsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the GrapesJS SDK with no SSR
const GrapesJsStudioComponent = dynamic(
  () => import('@grapesjs/studio-sdk/react').then(mod => mod.default),
  { ssr: false }
);

// Also dynamically import the styles
const GrapesJsStyles = () => {
  useEffect(() => {
    import('@grapesjs/studio-sdk/style');
  }, []);
  return null;
};

export default function GrapesJsEditor({ onEditorReady }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEditorReady = (editor) => {
    console.log('Editor loaded', editor);
    if (onEditorReady) onEditorReady(editor);
  };

  if (!isMounted) {
    return <div>Loading editor...</div>;
  }

  return (
    <>
      <GrapesJsStyles />
      <GrapesJsStudioComponent
        onReady={handleEditorReady}
        options={{
          licenseKey: '68b983ed4c974400957bc5cd860c662bf8b62bf2c7cd4b558e7ce6c4274df4fe',
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
    </>
  );
}