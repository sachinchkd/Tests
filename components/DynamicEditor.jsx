// components/DynamicEditor.jsx
"use client";

import { useEffect, useState } from 'react';

export default function DynamicEditor({ onEditorReady }) {
  const [GrapesJsStudio, setGrapesJsStudio] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only load in browser
    if (typeof window !== 'undefined') {
      // Load styles and component asynchronously
      import('@grapesjs/studio-sdk/style')
        .then(() => import('@grapesjs/studio-sdk/react'))
        .then((module) => {
          setGrapesJsStudio(() => module.default);
          setIsLoaded(true);
        })
        .catch(error => {
          console.error("Failed to load GrapesJS Studio:", error);
        });
    }
  }, []);

  if (!isLoaded || !GrapesJsStudio) {
    return <div>Loading editor components...</div>;
  }

  return (
    <GrapesJsStudio
      onReady={onEditorReady}
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
  );
}