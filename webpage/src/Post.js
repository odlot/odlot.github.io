import React from 'react';
import Paper from '@mui/material/Paper';
import ReactMarkdown from 'react-markdown'

const markdown = `
# Markdown Syntax
Well, this is a paragraph written in Markdown.

## Subheading

This is another paragraph written in Markdown.
`

function Post(props) {
    return (
        <Paper>
            <ReactMarkdown children={markdown}/>
        </Paper>
    )
}

export default Post;