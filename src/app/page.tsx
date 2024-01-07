"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Button from '@/components/button'
import Editor from '@/components/editor';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
export default function Home() {
  const [openedEditor, setOpenedEditor] = useState('html');
  const [htmlEditorIsOpen, setHtmlEditorIsOpen] = useState(true);
  const [cssEditorIsOpen, setCssEditorIsOpen] = useState(false);
  const onTabClick = (editorName: string) => {
    setOpenedEditor(editorName);
  };
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(` `);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <style>${css}</style>
            <script>${js}</script>
            <body>${html}</body>            
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)
  }, [html, css, js])
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="tab-button-container">
        <Button title="HTML" onClick={() => {
          onTabClick('html')
        }} />
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }} />
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }} />
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <p>The html editor is open</p>
          ) : openedEditor === 'css' ? (
            <p>The CSS editor is open!!!!!!</p>
          ) : (
            <p>the JavaScript editor is open</p>
          )
        }

        {
          openedEditor === 'html' ? (
            <Editor
              language="xml"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              language="css"
              value={css}
              setEditorState={setCss}
            />
          ) : (
            <Editor
              language="javascript"
              value={js}
              setEditorState={setJs}
            />
          )
        }
      </div>
      <div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  ); //</div>
  //)
}