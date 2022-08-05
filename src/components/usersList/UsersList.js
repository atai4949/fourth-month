import React, { useState } from 'react'
import { Table } from 'react-bootstrap'


export default function UsersList({ users }) {
    return (
        <div className='container'>
            <h1>Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                {
                    users.map(user => (
                        <tbody key={user.id}>
                            <tr>
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.username}</th>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>

        </div>
    )
}
