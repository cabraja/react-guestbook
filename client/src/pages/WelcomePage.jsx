import {React, useState,useEffect} from 'react'
import Message from '../components/Message';

export default function WelcomePage(){

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
      fetch("http://localhost:5000/api/messages")
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                throw new Error('Request failed with status code ' + res.status);
            }
        })
        .then(data => setMessages(data))
        .catch(err => setError("Could not fetch data. Try again later."))
    }, [])
    

    return(
        <>
            <h1>Guestbook</h1>
            <p>See what people wrote about us and feel free to leave a message.</p>

            <br />
            <br />

            {
                error ?
                <p className='error'>{error}</p>
                :
                    messages.length > 0 && !error ?
                    messages.map(m => <Message message={m} key={m.id}/>)
                    :
                    <p>Loading messages...</p>
            }

            

            

        </>
    )
}