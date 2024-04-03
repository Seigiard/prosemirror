export const JSONViewer = ({ value, title }) => {
  const output =
    typeof value === 'string' ? value : JSON.stringify(value, null, 2);

  return (
    <article>
      <h3>{title}</h3>
      <pre>
        <code>{output}</code>
      </pre>
    </article>
  );
};
