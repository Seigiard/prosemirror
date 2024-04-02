import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from './Component';

export const clockExtensionName = 'clockComponent';
export const clockExtensionTag = 'clock-component';

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
