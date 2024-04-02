// src/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import classes from './Editor.module.css';
import { EditorJSONPreview } from './EditorViewer';
import TagExtension from './Tag/TagExtension';

// define your extension array
const extensions = [Document, Paragraph, Text, TagExtension];

const content =
  '<p>Hello World!</p><p>Editabele</p><p><react-component count="0"></p></react-component><p>Content</p>';

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
