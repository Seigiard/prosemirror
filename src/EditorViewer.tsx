export const EditorJSONPreview = ({ editor }) => {
  return (
    <details>
      <summary className='outline' role='button'>
        JSON Output
      </summary>

      <pre>
        <code>{JSON.stringify(editor.getJSON(), null, 2)}</code>
      </pre>
    </details>
  );
};
