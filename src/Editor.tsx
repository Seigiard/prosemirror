// src/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import classes from './Editor.module.css';
import { ButtonExtension, buttonExtensionTag } from './Button';
import { ClockExtension, clockExtensionTag } from './Clock';
import { JSONViewer } from './JsonViewer';

// define your extension array
const extensions = [Document, Paragraph, Text, ClockExtension, ButtonExtension];

const content = `<p>Hello World! Look at button component: <${buttonExtensionTag} count="0"><${buttonExtensionTag} /></p><p>Wow, Clocks! <${clockExtensionTag} count="0"></${clockExtensionTag}></p><p>Content</p>`;

export const Editor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div>
      <EditorContent className={classes.editor} editor={editor} />
      {content && <JSONViewer value={content} title='Content Input' />}
      {editor && <JSONViewer value={editor.getJSON()} title='JSON Output' />}
    </div>
  );
};
