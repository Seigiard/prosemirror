import { useEffect, useState } from 'react';
import { NodeViewWrapper } from '@tiptap/react';

export default (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <NodeViewWrapper as='span' className='react-component'>
      {time}
    </NodeViewWrapper>
  );
};
