import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { CHANGE_USERNAME } from '../mutations'
import { GET_USER_DETAIL } from '../queries'

const ChangeUserDetails = () => {

    let { id } = useParams()

    const {loading, error, data, refetch } = useQuery(GET_USER_DETAIL, {variables: {userId: id}})
    const [ changeUsername ] = useMutation(CHANGE_USERNAME)
    const [ username, setUsername ] = useState('')

    const handleChange = (e) => setUsername(e.target.value)

    const onUsernameChange = () => {
        changeUsername({ variables: {userId: id, newUsername: username}})
        refetch()
        setUsername('')
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>

    return (
        <>
        <p>Change the username: {data.getUser.username}</p>
        <div className='edit-info-form'>
            <textarea
                placeholder={'write the new username'}
                onChange={handleChange}
                value={username}
            ></textarea>
            <br />
            <button
                onClick={() => onUsernameChange()}
            >Apply</button>
        </div>
        <p><Link to={`/user/${id}`}>Back to User</Link></p>
        </>
    )
}

export default ChangeUserDetails