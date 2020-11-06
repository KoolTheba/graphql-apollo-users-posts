import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_POST_COMMENTS } from '../queries'

const PostComments = () => {

    let { id, postId } = useParams()

    const {loading, error, data} = useQuery(
        GET_POST_COMMENTS, 
        {variables: {postId}}
    )

    const postCommentsDetails = () => {
        if(data?.getComments.length === 0) {
            return (
                <>
                <p>No comments found!</p>   
                <Link to={`/user/${id}`}>Back</Link>
                </>
            )
        }

        return (
            <>
            {data?.getComments?.map(e => (
                <div className='comments-list' key={e.id}>
                    <p className='comment-content'>{e.content}</p>
                    <span role='img' aria-label='image'>💜 {e.likes}</span>
                </div>
            ))}
            </>
        )
    }

    if(loading) return <p>Loading comments...</p>
    if(error) return <p>Error getting comments!</p>

    return (
        <>
        <h2>Post comments</h2>
        {postCommentsDetails()}
        </>
    )

}

export default PostComments