/**
 * This Class Specifies how A completed Topic will appear,
 */

import React, {useEffect, useState} from 'react'
import Topic from '../Types/Topic'
import {Card, CardHeader, CardContent,
    Box, IconButton, IconButtonProps, Typography} from '@mui/material'
import {Favorite} from '@mui/icons-material'
import {useParams} from "react-router-dom";
// import {makeStyles} from '@mui/styles' NOW LEGACY
enum Tags {TECHNICAL = "technical", MEME = "meme", INSPIRATIONAL = "inspiration"
}

type Props = {
    topic : Topic
}

const TopicItem : React.FC<Props> = ({topic}) => {
    return (
        <Card variant={"outlined"}>
            <CardHeader>
                title = {topic.title}
                subheader = "this is a subheader"
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