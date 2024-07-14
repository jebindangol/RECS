import React, { useState } from 'react';
import QuillEditor from '@/components/wysiwyg/editor';

const EditorPage: React.FC = () => {
    const [content, setContent] = useState('');

    const handleEditorChange = (newContent: string) => {
        setContent(newContent);
    };

    return (
        <div>
        <QuillEditor
            value={content}
            onChange={handleEditorChange}
        />
        {/* <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div> */}
        </div>
    );
};

export default EditorPage;
