import React from "react";
import axios from 'axios';

const handleMessageSend = async (e) =>{
    const button = e.target;
    const senderName = document.getElementById('senderName').value;
    const receiverMail = document.getElementById('receiverMail').value;
    const messageContent = document.getElementById('messageContent').value;

    try{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages/foreign`,
        {
            senderName,
            receiverMail,
            messageContent,
            senderMail: 'brezoiiulia18@stud.ase.ro'
        }
        )

        console.log(response)
        if(response){
            alert('\nMesajul a fost trimis!');
        }
    }
    

    catch(error)
    {
        console.log(error);
    }
}

function MessagesSubmit()
{
    return(
        <div id="MessagesSubmit">
            <div className='text-2xl font-bold mb-4'>Trimite un mesaj!</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Nume
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="Dana" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverMail">
                            Destinatar
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-7 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverMail" type="text" placeholder="dana@gmail.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="messageContent">
                            Mesajul
                        </label>
                        <textarea
                            rows={4}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'Hei!'} />
                    </div>
                </div>
            </form>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
            onClick = {handleMessageSend}
           >
            Trimite
        </button>
            
        </div>
    );
}

export default MessagesSubmit;