import axios from 'axios';
import React, {useState, useEffect} from 'react';

function MessagesList()
{
    const [messages, setMessages] = useState([]); 

    useEffect(() => {
        const fetchData = async () =>{
            const result = await axios.get (`${process.env.REACT_APP_API_URL}/messages`);
            if(result.data.messages){
                let messagesArray = result.data.messages;
                messagesArray.reverse();
                setMessages(messagesArray)
            }
        };

        fetchData();

    }, []
    );

    return (
        <div id ="MessagesList">
            <h2 className='text-xl font-bold mb-4'>Mesaje transmise anterior</h2>
        <ul>
            {
                messages.length ? messages.map(message => 
                    <li key ={message.entryID}>
                        <p>
                            <span className='text-bold'>{message.senderName}</span>
                            <span className='text-italic'>{` a trimis un mesaj catre  ${message.receiverMail}: ${message.messageContent}`}</span>
                        </p>

                    </li>
                )
                : <li>Fara mesaje noi</li>
            }
        </ul>
        </div>
    );
}

export default MessagesList;