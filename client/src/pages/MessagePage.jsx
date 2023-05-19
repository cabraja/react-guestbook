import {React,useState} from 'react'

export default function MessagePage(){

    const [error, setError] = useState("");
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    // PROVERA FORME I SLANJE PORUKE
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        if(!formData.get("message")){
            setError("Please type a message.");
            return;
        }
        if(!formData.get("name")){
            setError("Please type your name.");
            return;
        }

        setError("");
        setIsBtnDisabled(true);

        const formObj = {
            message: formData.get("message"),
            name: formData.get("name")
        }

        fetch("http://localhost:5000/api/messages", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObj),
          })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log("Error: " + err))
    }

    return(
        <>
            <h1>Message page</h1>
            <br />

            <form method='POST' onSubmit={handleSubmit} >
                <label htmlFor='tbMessage'>Message:</label>
                <input type='text' name='message' defaultValue={""}  placeholder='Your message here'/>
                <br/>
                <br />
                <label htmlFor='tbUser'>Name:</label>
                <input type='text' name='name' defaultValue={""}  placeholder='Your name here'/>
                <br/>
                <br />
                <button type='submit' disabled={isBtnDisabled} id='btnSubmit'>Post</button>

                <br/>
                <br />
                <p className='error'>{error}</p>

            </form>
        </>
    )
}