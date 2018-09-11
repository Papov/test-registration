import React from 'react';
import Form from "./Form";

export default class Main extends React.Component{
    render(){
        return(
            <div className='main'>
                <div className='container'>
                    <Form/>
                    <div id='map'>

                    </div>
                </div>
            </div>
        )
    }
}