import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <Link to='/'><button>Home</button></Link>
            <h2>Total Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} : {user.email}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;