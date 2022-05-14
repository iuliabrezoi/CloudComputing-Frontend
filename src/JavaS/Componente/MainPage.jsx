import React from 'react';
import Header from './Header';
import MessagesList from './MessagesList';
import MessagesSubmit from './MessagesSubmit';

function MainPage(props){
    return ( 
        <div id = "MainPage">
            <Header title={'Analiza de Sentiment'}/>
            <div className='flex max-w-7xl m-auto px-14 py-24'>
                <div className ='w-1/2 pl-5'>
                    <MessagesList/>
                </div>
                <div className='w-1/2 pr-5'></div>
                <MessagesSubmit/>
            </div>
        </div>
    );
}

export default MainPage;