import { useEffect, useRef } from "react";
import { schema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

export function Editor() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let state = EditorState.create({ schema });
        let view = new EditorView(ref.current, {
            state,
            dispatchTransaction(transaction) {
                console.log("Document size went from", transaction.before.content.size, "to", transaction.doc.content.size);
                let newState = view.state.apply(transaction);
                view.updateState(newState);
            },
        });
        return () => view.destroy();
    });

    return <div ref={ref}></div>;
}
