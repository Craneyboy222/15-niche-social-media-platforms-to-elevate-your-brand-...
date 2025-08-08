import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import 'draft-js/dist/Draft.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    console.log(rawContent);
  };

  return (
    <div className="p-4 border rounded-lg">
      <Toolbar>
        {/** Add toolbar buttons here **/}
      </Toolbar>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={[toolbarPlugin]}
        placeholder="Start typing..."
        ariaLabel="Rich Text Editor"
      />
      <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Save
      </button>
    </div>
  );
};

export default RichTextEditor;
