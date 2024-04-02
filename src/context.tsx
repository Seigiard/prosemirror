import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

// Create a new context
const NamesContext = createContext<string[]>([]);

// Create a provider component
const NamesProvider: FC = ({ children }: PropsWithChildren) => {
  // Define the state for the list of names
  const [names, setNames] = useState<string[]>([
    'Mia',
    'Harper',
    'Liam',
    'William',
    'Henry',
    'Alexander',
    'Amelia',
    'Olivia',
    'Noah',
    'Henry',
  ]);

  // Provide the state and functions to the children components
  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  );
};

function useNamesContext() {
  return useContext(NamesContext);
}

export { NamesProvider, useNamesContext };
