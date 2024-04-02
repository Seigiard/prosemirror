import { NodeViewWrapper } from '@tiptap/react';

export default (props) => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    });
  };

  return (
    <NodeViewWrapper className='react-component'>
      <span className='label'>React Component</span>

      <span className='content'>
        <button onClick={increase}>
          This button has been clicked {props.node.attrs.count} times.
        </button>
      </span>
    </NodeViewWrapper>
  );
};
