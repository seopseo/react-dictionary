import React from 'react'

function Book({ title, author, summary, genre, release, ISBN}){
    
    return (
            <>
                <h1>title: {title}</h1>
                <h3>author: {author}</h3> 
                <h3>summary: {summary}</h3>
                <h3>genre: {genre}</h3>
                <h3>release: {release}</h3>
                <h3>ISBN: {ISBN}</h3>
            </>
        )
    }
export default Book;