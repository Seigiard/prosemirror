import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import { useEffect, useState } from 'react';
import { NodeViewWrapper } from '@tiptap/react';

export const clockExtensionName = 'clockComponent';
export const clockExtensionTag = 'clock-component';

const Component = (props) => {
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

export default Node.create({
  name: clockExtensionName,

  group: 'inline',
  inline: true,

  atom: true,

  parseHTML() {
    return [
      {
        tag: clockExtensionTag,
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-component', mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component, { contentDOMElementTag: 'span' });
  },
});
