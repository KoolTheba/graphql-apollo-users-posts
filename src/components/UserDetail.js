import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_USER_DETAIL, GET_USER_POSTS } from '../queries'

const UserDetail = () => {

    let { id } = useParams()

    const { loading, error, data } = useQuery(GET_USER_DETAIL, {variables: {userId: id}})
    const [ getUserPosts, {data: userPosts, loading: userPostsLoading} ] = useLazyQuery(GET_USER_POSTS)

    const onGetPosts = () => getUserPosts({ variables: { userId: id }})

    const postsDetails = () => {
        if(userPostsLoading) return <p>Loading posts...</p>
        if(userPosts?.getPosts?.length === 0) {
            return (
                <>
                <p>No Posts found!</p>
                <Link to={'/'}>Back</Link>
                </>
            )
        }

        return  userPosts?.getPosts?.map(post => (
                    <div key={post.id}>
                    <div className='posts-list'>
                        <h4>Post</h4>
                        <p className='post-content' key={post.id}>{post.content}</p>
                        <span role='img' aria-label='image'>💜 {post.likes}</span>
                    </div>
                    <button
                        className='load-comments-button'
                        style={{cursor: 'pointer', backgroundColor: 'orange'}}
                    ><Link to={`/user/${id}/post/${post.id}/comments`}>More info</Link>
                    </button>
                    </div>
                ))
    }

    if(loading) return <p>Loading data...</p>
    if(error) return <p>Error getting data!</p>

    return (
        <>
        <h1>User id {id} Detail</h1>
        <p>Username: {data.getUser.username}</p>
        <button>
            <Link to={`/user/${id}/edit`}>Edit Username</Link>
        </button>
        <p>Email: {data.getUser.email}</p>
        <button
            className='check-posts-button'
            onClick={onGetPosts}
            style={{cursor: 'pointer', backgroundColor: 'olivedrab'}}
        >Check posts
        </button>
        {postsDetails()}
        </>
    )
}

export default UserDetail