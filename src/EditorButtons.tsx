import classes from './Editor.module.css';
import { buttonExtensionTag } from './Button';
import { clockExtensionTag } from './Clock';
import { comboboxExtensionTag } from './Combobox';
import { RenderTagPropsType, renderTag } from './helper';
import { useNamesContext } from './context';

export function EditorButtons({ editor }) {
  const names = useNamesContext();
  const components = {
    button: buttonExtensionTag,
    clock: clockExtensionTag,
    dropdown: comboboxExtensionTag,
  };

  function handleClick(
    component: keyof typeof components,
    props: RenderTagPropsType = {}
  ) {
    editor
      .chain()
      .focus()
      .insertContent(renderTag(components[component], props))
      .run();
  }

  return (
    <div className={`${classes.buttons} grid`}>
      <button className='secondary' onClick={() => handleClick('button')}>
        Insert Button
      </button>
      <button className='secondary' onClick={() => handleClick('clock')}>
        Insert Clock
      </button>
      <details className='dropdown'>
        <summary className='secondary' role='button'>
          Insert Name
        </summary>
        <ul>
          {names.map((name) => (
            <li key={name} onClick={() => handleClick('dropdown', { name })}>
              {name}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
