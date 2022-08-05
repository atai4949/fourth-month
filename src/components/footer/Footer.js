import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../header/header.module.css';

export default function Footer() {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.menu}>
                <li>
                    <Link to="/" className={classes.link}>Main</Link>
                </li>
                <li>
                    <Link to="/users" className={classes.link}>Our users</Link>
                </li>
                <li>
                    <Link to="/about" className={classes.link}>About</Link>
                </li>
            </ul>
        </div>
    );
}
