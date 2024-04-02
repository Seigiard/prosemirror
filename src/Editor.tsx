// src/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import classes from './Editor.module.css';
import { EditorJSONPreview } from './EditorViewer';

// define your extension array
const extensions = [Document, Paragraph, Text];

const content =
  '<p>Hello World!</p><p>Editabele</p><node-view contenteditable="false">and not</node-view>';

export const Editor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div>
      <EditorContent className={classes.editor} editor={editor} />
      {editor && <EditorJSONPreview editor={editor} />}
    </div>
  );
};
