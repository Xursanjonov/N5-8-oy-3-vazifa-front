import React, { memo, useEffect, useState } from 'react'
import UserCart from '../../components/user-cart'

const Home = () => {
    const [users, setUsers] = useState(null)
    const fetchData = (api) => {
        fetch(`${api}/users`).then(res => res.json())
            .then(data => setUsers(data))
            .catch(er => console.error(er))
    }
    useEffect(() => {
        fetchData('http://localhost:8001')
        console.log(users)
    }, [])

    return (
        <section>
            <div className="wrapper">
                {
                    users?.payload?.map(user => (
                        <UserCart key={user?.id} user={user} />
                    ))
                }
            </div>
        </section>
    )
}

export default memo(Home)