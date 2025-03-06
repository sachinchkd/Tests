'use client';

import {
  StudioCommands,
  ToastVariant,
} from '@grapesjs/studio-sdk/react';
import { useState } from 'react';

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
    <main className="flex h-screen flex-col justify-between p-5 gap-2">
      
    </main>
  );
}