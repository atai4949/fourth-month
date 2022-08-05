import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './header.module.css'

export default function Header() {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.menu}>
                <li><NavLink to="/" className={classes.link}>Main</NavLink></li>
                <li><NavLink to="/users" className={classes.link}>Our users</NavLink></li>
                <li><NavLink to="/about" className={classes.link}>About</NavLink></li>
            </ul>
        </div>
    )
}
