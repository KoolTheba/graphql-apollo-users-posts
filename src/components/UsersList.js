import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS_LIST } from '../queries'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const { loading, error, data } = useQuery(GET_USERS_LIST)

    if(loading) return <p>Loading data...</p>
    if(error) return <p>Error getting data!</p>

    return (
        <>
        <h2>Users</h2>
        <div>        
            {data && data.getUsers.map(e => (
                <p key={e.id}>
                <Link to={`/user/${e.id}`}>{e.first_name} {e.last_name}</Link>
                </p>
        ))}
        </div>
        </>
    )
}

export default UsersList
