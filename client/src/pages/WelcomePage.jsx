import {React, useState,useEffect} from 'react'
import Message from '../components/Message';

export default function WelcomePage(){

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/messages")
        .then(res => res.json())
        .then(data => setMessages(data))
        .catch(err => console.log(err))
    }, [])
    

    return(
        <>
            <h1>Guestbook</h1>
            <p>See what people wrote about us and feel free to leave a message.</p>

            <br />
            <br />

            {
                messages.length > 0 ?
                messages.map(m => <Message message={m} key={m.id}/>)
                :
                <p>Loading messages...</p>
            }

        </>
    )
}