import React, {ChangeEvent, useState} from 'react';
import axios from 'axios';

interface CreateTopicProps {
    onTopicCreated: (newTopic: any) => void
}

const CreateTopic: React.FC<CreateTopicProps> = ({ onTopicCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleCreatePost = async () => {
        try {
            const response = await axios.post('http://localhost:3000/topics', {
                title,
                content,
            });

            // Assuming the API returns the created post
            const newPost = response.data;

            // Trigger a callback to inform the parent component that a post was created
            onTopicCreated(newPost);

            // Clear the form
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <label>Title:</label>
            <input type="text" value={title} onChange={handleTitleChange} />
            <br />
            <label>Content:</label>
            <input type={"text"} value={content} onChange={handleContentChange} />
            <br />
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    );
};

export default CreateTopic;
