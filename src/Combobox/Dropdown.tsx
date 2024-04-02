import { useNamesContext } from '../context';

export const Dropdown = ({ onChange, title }) => {
  const names = useNamesContext();

  function handleClick() {
    onChange(new Date().getTime());
  }

  console.log('Dropdown', names);

  return (
    <select name='select' aria-label='Select' required onChange={console.log}>
      <option selected disabled value=''>
        {title}
      </option>
      {names.map((name) => (
        <option key={name}>{name}</option>
      ))}
    </select>
  );
};
