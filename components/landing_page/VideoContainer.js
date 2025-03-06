'use client';

import createStudioEditor from '@grapesjs/studio-sdk';
import GrapesJsStudio, {
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
  
  createStudioEditor({
    root: '#studio-editor',
    licenseKey: '25603078c3f74b04a77a56021154bbe0b622640198374f838ead19b4b7b1336b',
    theme: 'light',
    project: {
      type: 'web',
      // TODO: replace with a unique id for your projects. e.g. an uuid
      id: 'UNIQUE_PROJECT_ID'
    },
    identity: {
      // TODO: replace with a unique id for your end users. e.g. an uuid
      id: 'UNIQUE_END_USER_ID'
    },
    assets: {
      storageType: 'cloud'
    },
    storage: {
      type: 'cloud',
      autosaveChanges: 100,
      autosaveIntervalMs: 10000
    }
  });
  
  return (
    <main className="flex h-screen flex-col justify-between p-5 gap-2">
      <div className="p-1 flex gap-5">
        <div className="font-bold">WebHub Studio</div>
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
            licenseKey: '25603078c3f74b04a77a56021154bbe0b622640198374f838ead19b4b7b1336b',
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
  );
}