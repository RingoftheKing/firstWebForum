import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Topic from "../Types/Topic";

const TopicList = () => {
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await axios.get('https://localhost:3000/topics');
                setTopics(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchTopics();
    }, []);

    return (
        <div>
            <h1>Topic List</h1>
            {topics.map((topic) => (
                <Card key={topic.id} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {topic.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {topic.content}
                        </Typography>
                        {/* You can add more details or fields from your Post model */}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default TopicList;
