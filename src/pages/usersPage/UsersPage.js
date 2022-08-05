import React, { useState } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Button } from 'react-bootstrap';
import UsersList from '../../components/usersList/UsersList';

export default function UsersPage() {
    return (
        <div className='container'>
            <Header />
            <h1>Users</h1>
            <Footer />
        </div>
    )
}
