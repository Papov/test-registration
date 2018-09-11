import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='container'>
                    <div className='images logo'>
                        <img src="./img/msg.jpg" />
                    </div>
                    <div className='title_container'>
                        <span className='title_name gray-color'>contact us</span>
                        <span className='title_text'>Say <span className='blue-color'>Hello!</span></span>
                    </div>
                </div>
            </div>
        )
    }
}