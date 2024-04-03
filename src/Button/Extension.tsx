import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { NodeViewWrapper } from '@tiptap/react';

export const buttonExtensionName = 'buttonComponent';
export const buttonExtensionTag = 'button-component';

const Component = (props) => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    });
  };

  const count = props.node.attrs.count;

  return (
    <NodeViewWrapper as='button' className='outline' onClick={increase}>
      {count ? `Clicked ${count} times` : 'Click me!'}
    </NodeViewWrapper>
  );
};

export default Node.create({
  name: buttonExtensionName,

  group: 'inline',
  inline: true,

  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: buttonExtensionTag,
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
