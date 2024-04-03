import { useEditor, EditorContent } from '@tiptap/react';
import History from '@tiptap/extension-history';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { JSONViewer } from './JsonViewer';
import { EditorButtons } from './EditorButtons';
import { ButtonExtension, buttonExtensionTag } from './Button';
import { ClockExtension, clockExtensionTag } from './Clock';
import { ComboboxExtension, comboboxExtensionTag } from './Combobox';
import classes from './Editor.module.css';
import { renderTag } from './helper';

// define your extension array
const extensions = [
  History,
  Document,
  Paragraph,
  Text,
  ClockExtension,
  ButtonExtension,
  ComboboxExtension,
];

const content = `
  <p>Editable Content</p>
  <p>Hello World! Look at button component: ${renderTag(buttonExtensionTag, {
    count: 0,
  })}</p>
  <p>Wow, Clocks! ${renderTag(clockExtensionTag)}</p>
  <p>Wow, Dropdown that using global context! ${renderTag(
    comboboxExtensionTag
  )}</p>
`;

export const Editor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div>
      <EditorContent className={classes.editor} editor={editor} />
      <EditorButtons editor={editor} />
      {content && <JSONViewer value={content} title='Content Input' />}
      {editor && <JSONViewer value={editor.getJSON()} title='JSON Output' />}
    </div>
  );
};
