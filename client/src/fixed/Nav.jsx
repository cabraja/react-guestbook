import React from 'react'
import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav>
            <ul>
            <li><Link to="/">All Messages</Link></li>
            <li><Link to="/message">Leave a Message</Link></li>
            </ul>
        </nav>
    )
}