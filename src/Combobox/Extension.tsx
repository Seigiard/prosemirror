import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { NodeViewWrapper } from '@tiptap/react';
import { Dropdown } from './Dropdown';

export const comboboxExtensionName = 'comboboxComponent';
export const comboboxExtensionTag = 'combobox-component';

const Component = (props) => {
  const updateId = (id) => {
    props.updateAttributes({
      name: id,
    });
  };

  return (
    <NodeViewWrapper>
      <Dropdown onChange={updateId} title={props.node.attrs.name} />
    </NodeViewWrapper>
  );
};

export default Node.create({
  name: comboboxExtensionName,

  group: 'inline',
  inline: true,

  atom: true,

  addAttributes() {
    return {
      name: {
        default: 'Please, select your name',
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: comboboxExtensionTag,
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
