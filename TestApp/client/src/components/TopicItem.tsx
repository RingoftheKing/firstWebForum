/**
 * This Class Specifies how A completed COMMENT will appear,
 */

import React from 'react'
import Topic from '../Types/Topic'
import {Card, CardHeader, CardContent,
    Box, IconButton, IconButtonProps, Typography} from '@mui/material'
import {Favorite} from '@mui/icons-material'
// import {makeStyles} from '@mui/styles' NOW LEGACY
enum Tags {TECHNICAL = "technical", MEME = "meme", INSPIRATIONAL = "inspiration"
}

/*
Stuff such as User Picture, Name, timestamp needs to be fetched from backend
 */
type Props = {
    topic: Topic
    tag: Tags
}

const TopicItem : React.FC<Props> = ({topic, tag}) => {
    return (
        <Card variant={"outlined"}>
            <CardHeader>
                title = {topic.title}
                subheader = {tag}
            </CardHeader>
            <CardContent>
                <Typography>
                    {topic.content}
                </Typography>
            </CardContent>
            <Box sx ={{display: 'flex', flexDirection: 'column'}}>
                <Favorite></Favorite>
                {topic.score}
            </Box>
        </Card>
    )
}

export default TopicItem