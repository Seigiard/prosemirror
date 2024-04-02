import { ChangeEvent } from 'react';
import { useNamesContext } from '../context';

export const Dropdown = ({
  onChange,
  title,
}: {
  onChange: (name: string) => void;
  title: string;
}) => {
  const names = useNamesContext();

  function handleClick(e: ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  }

  const uniqueNames = [...new Set([title, ...names])];

  return (
    <select
      name='select'
      value={title}
      aria-label='Select'
      required
      onChange={handleClick}
    >
      {uniqueNames.map((name) => (
        <option key={name} disabled={title === name}>
          {name}
        </option>
      ))}
    </select>
  );
};
