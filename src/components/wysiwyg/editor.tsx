import React from 'react';
import dynamic from 'next/dynamic';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
});

interface QuillEditorProps {
    value: string;
    onChange: (newValue: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
    const handleChange = (content: string) => {
        onChange(content);
    };

    return (
        <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{
            toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean'],
            ],
        }}
        formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'color', 'background',
            'align', 'link', 'image', 'video',
        ]}
        />
    );
};

export default QuillEditor;
