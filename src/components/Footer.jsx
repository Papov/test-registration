import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='container'>
                    <div className='footer_items'>
                        <div className='footer_item'>
                            <div className='footer_icon'>
                                <img src="./img/phone.jpg"/>
                            </div>
                            <div className='footer_icon_title'>Have a question?</div>
                            <span className='footer_icon_number'>+1 1234567890</span>
                        </div>
                        <div className='vertical_line'></div>
                        <div className='footer_item'>
                            <div className='footer_icon'>
                                <img src="./img/clock.jpg"/>
                            </div>
                            <div className='footer_icon_title'>Open mon - fri</div>
                            <span className='footer_icon_time'>08:00am to 8:00pm</span>
                        </div>
                        <div className='vertical_line'></div>
                        <div className='footer_item'>
                            <div className='footer_icon'>
                                <img src="./img/footer_msg.jpg"/>
                            </div>
                            <div className='footer_icon_title'>Drop us an email</div>
                            <span className='footer_icon_email'><a href="mailto:help@yourdomain.com">help@yourdomain.com</a></span>
                        </div>
                </div>
                </div>
                <div className='footer_copyright'>
                    <div className='container'>
                        <span className='footer_bigText'>Try our <span className='bold'>services</span> right now</span>
                        <span className='footer_smallText'>The most appealing part of the theme it's very clear and light. And it reavels invidual.</span>
                    </div>
                </div>
            </div>
        )
    }
}