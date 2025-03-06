// app/editor/page.jsx
"use client";

import { StudioCommands, ToastVariant } from '@grapesjs/studio-sdk/react';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Import only the minimal components needed for the editor page
const DynamicEditor = dynamic(() => import('../../components/DynamicEditor'), {
  ssr: false,
  loading: () => <div>Loading editor...</div>
});

export default function EditorPage() {
  const [mounted, setMounted] = useState(false);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onReady = (editor) => {
    console.log('Editor loaded');
    setEditor(editor);
  };

  const showToast = (id) =>
    editor?.runCommand(StudioCommands.toastAdd, {
      id,
      header: 'Toast header',
      content: 'Data logged in console',
      variant: ToastVariant.Info,
    });

  const getProjectData = () => {
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

  if (!mounted) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-screen">
      <div className="p-3 flex gap-5 border-b">
        <div className="font-bold">SDK example Next.js</div>
        <button className="border rounded px-2" onClick={getProjectData}>
          Log Project Data
        </button>
        <button className="border rounded px-2" onClick={getExportData}>
          Log HTML/CSS
        </button>
      </div>
      <div className="flex-1 w-full h-full overflow-hidden">
        <DynamicEditor onEditorReady={onReady} />
      </div>
    </div>
  );
}