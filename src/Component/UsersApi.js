import React, { useState, useEffect } from 'react'
import Loading from './Loading.js';
import GitHubUsers from './GitHubUsers.js';

function UsersApi()
{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => 
    {
        try
        {

            const res = await fetch('https://api.github.com/users')
            setUsers(await res.json());
            setLoading(false)
            console.log(users)
        } catch (err)
        {
            console.log("My Error Is: ", err)
        }
    }
    useEffect(() =>
    {
        getUsers();
    }, [])
    if (loading)
    {
        return (
            <>
                <Loading />
            </>
        )
    }
    return (
        <div>
            <GitHubUsers users={users} />
        </div>
    )
}

export default UsersApi
