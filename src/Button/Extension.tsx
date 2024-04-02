import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from './Component';

export const buttonExtensionName = 'buttonComponent';
export const buttonExtensionTag = 'button-component';

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
