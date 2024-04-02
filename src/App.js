import { Editor } from './Editor';
import { NamesProvider } from './context';

export function App() {
  return (
    <NamesProvider>
      <Editor />
    </NamesProvider>
  );
}
