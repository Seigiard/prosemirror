export const EditorJSONPreview = ({ editor }) => {
  return <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre>;
};
