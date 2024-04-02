import { NodeViewWrapper } from '@tiptap/react';

export default (props) => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    });
  };

  return (
    <NodeViewWrapper as='button' className='outline' onClick={increase}>
      This button has been clicked {props.node.attrs.count} times.
    </NodeViewWrapper>
  );
};
