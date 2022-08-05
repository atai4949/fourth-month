import React, { useState } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import UsersList from '../../components/usersList/UsersList';
import { Button } from 'react-bootstrap';

export default function MainPage(props) {

    const [users, setUsers] = useState([]);
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
    });

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const onChangeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        const options = {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => console.log(response))
    }

    return (
        <div className='container'>
            <Header />
            <h1>Main Page</h1>
            <Button variant="primary"
                className='mt-4 mb-4'
                onClick={getUsers}>
                get users
            </Button>


            <UsersList users={users} />
            <Footer />
        </div>
    );
}
