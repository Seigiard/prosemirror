// src/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import classes from './Editor.module.css';
import { ButtonExtension, buttonExtensionTag } from './Button';
import { ClockExtension, clockExtensionTag } from './Clock';
import { JSONViewer } from './JsonViewer';
import { ComboboxExtension, comboboxExtensionTag } from './Combobox';

// define your extension array
const extensions = [
  Document,
  Paragraph,
  Text,
  ClockExtension,
  ButtonExtension,
  ComboboxExtension,
];

const content = `
  <p>Editable Content</p>
  <p>Hello World! Look at button component: <${buttonExtensionTag} count="0"><${buttonExtensionTag} /></p>
  <p>Wow, Clocks! <${clockExtensionTag}></${clockExtensionTag}></p>
  <p>Wow, Dropdown that using global context! <${comboboxExtensionTag}></${comboboxExtensionTag}></p>
`;

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
