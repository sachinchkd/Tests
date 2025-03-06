"use client"

import GrapesJsStudio, {
  StudioCommands,
  ToastVariant,
} from '@grapesjs/studio-sdk/react';
import { Code, FileText, Save } from 'lucide-react';
import { useState } from 'react';

import '@grapesjs/studio-sdk/style';

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
        <GrapesJsStudio
          onReady={onReady}
          options={{
            licenseKey: '25603078c3f74b04a77a56021154bbe0b622640198374f838ead19b4b7b1336b',
            project: {
              default: {
                pages: [
                  {
                    name: 'Home',
                    component: `<div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
                      <header style="text-align: center; margin-bottom: 3rem;">
                        <h1 style="font-size: 2.5rem; color: #374151; margin-bottom: 1rem;">Welcome to WebCraft Studio</h1>
                        <p style="font-size: 1.2rem; color: #6B7280; max-width: 600px; margin: 0 auto;">
                          Build beautiful responsive websites with our drag-and-drop editor. No coding required!
                        </p>
                      </header>
                      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                        <div style="background-color: #F3F4F6; padding: 2rem; border-radius: 0.5rem; text-align: center;">
                          <h2 style="font-size: 1.5rem; color: #374151; margin-bottom: 1rem;">Drag & Drop</h2>
                          <p style="color: #6B7280;">Build your website visually with our intuitive drag-and-drop interface.</p>
                        </div>
                        <div style="background-color: #F3F4F6; padding: 2rem; border-radius: 0.5rem; text-align: center;">
                          <h2 style="font-size: 1.5rem; color: #374151; margin-bottom: 1rem;">Responsive</h2>
                          <p style="color: #6B7280;">All designs automatically adapt to any screen size.</p>
                        </div>
                        <div style="background-color: #F3F4F6; padding: 2rem; border-radius: 0.5rem; text-align: center;">
                          <h2 style="font-size: 1.5rem; color: #374151; margin-bottom: 1rem;">Export</h2>
                          <p style="color: #6B7280;">Export clean HTML/CSS code ready for production.</p>
                        </div>
                      </section>
                    </div>`,
                  },
                ],
              },
            },
            // Add more configuration options
            canvas: {
              styles: [
                'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
              ],
            },
            panels: {
              defaults: {
                stylePrefix: 'gjs-',
              }
            }
          }}
        />
      </div>
    </main>
  );
}