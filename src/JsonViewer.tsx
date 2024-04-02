export const JSONViewer = ({ value, title }) => {
  const output =
    typeof value === 'string' ? value : JSON.stringify(value, null, 2);

  return (
    <details>
      <summary className='outline' role='button'>
        {title}
      </summary>

      <pre>
        <code>{output}</code>
      </pre>
    </details>
  );
};
