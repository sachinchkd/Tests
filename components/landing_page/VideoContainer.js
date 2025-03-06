"use client"

import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { Code, FileText, Save } from 'lucide-react';
import { useState } from 'react';


export default function Home() {
  const [editor, setEditor] = useState();
  const [isSaving, setIsSaving] = useState(false);

  const onReady = (editor) => {
    console.log('Editor loaded', editor);
    setEditor(editor);
  };

  const showToast = (id, message, variant = ToastVariant.Info) =>
    editor?.runCommand(StudioCommands.toastAdd, {
      id,
      header: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      content: message,
      variant,
    });

  const getProjectData = () => {
    if (editor) {
      console.log({ projectData: editor?.getProjectData() });
      showToast('project-data', 'Project data logged in console');
    }
  };

  const getExportData = () => {
    if (editor) {
      console.log({ html: editor?.getHtml(), css: editor?.getCss() });
      showToast('export-data', 'HTML/CSS exported to console');
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save operation
    setTimeout(() => {
      showToast('save-success', 'Project saved successfully!', ToastVariant.Success);
      setIsSaving(false);
    }, 800);
  };

  return (
    <main className="flex h-screen flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="font-bold text-xl text-blue-600">WebHub Studio</div>
            <span className="text-gray-500 text-sm">v1.0</span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm transition-colors" 
              onClick={getProjectData}
            >
              <FileText size={16} />
              <span>Project Data</span>
            </button>
            <button 
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm transition-colors" 
              onClick={getExportData}
            >
              <Code size={16} />
              <span>Export HTML/CSS</span>
            </button>
            <button 
              className={`flex items-center gap-2 ${isSaving ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-md text-sm transition-colors`} 
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save size={16} />
              <span>{isSaving ? 'Saving...' : 'Save'}</span>
            </button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 w-full overflow-hidden relative">
        <StudioEditor
            options={{
              licenseKey: '6474dfcb44a5452ebe4c66054bd3790ae34d0299a5d2435da48a8f4b1fd6ff99',
              theme: 'dark',
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
            }}
          />
      </div>
    </main>
  );
}
