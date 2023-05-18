import React from 'react'

export default function Message({message}){
    return(
        <div className='message'>
            <h5>{message.message}</h5>
            <p>Sent by: {message.name}</p>
        </div>
    )
}