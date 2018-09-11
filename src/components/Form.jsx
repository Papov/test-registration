import React from 'react';

export default class Form extends React.Component{
    onSubmitEvent(e){
        e.preventDefault();
        alert('Your Message have send');
    }
    fileEvent(e){
        e.preventDefault();
        this.refs.file.click();
    }
    checkedFile(e){
        let element = this.refs.subject;
        element.setAttribute('placeholder', e.target.value)
    }
    createSubmitEvent(e){
        this.refs.submit.click()
    }
    render(){
        return(
            <form action="#" onSubmit={this.onSubmitEvent} className='form' ref='form'>
                <div className='input_inline'>
                    <input type="text" name='user_name' placeholder='Your name' required className='user_name input' title='insert your name, please'/>
                    <input type="email" name='email' placeholder='Email' required className='user_email input' title='insert your email, please'/>
                </div>
                <input type="text" placeholder='Subject' onClick={this.fileEvent.bind(this)} className='user_subject input' ref='subject' readOnly/>
                <input type="file" name='file' className='disabled' ref='file' onInput={this.checkedFile.bind(this)}/>
                <textarea name="message" cols="30" rows="10" placeholder='Your Message' className='user_message' title='insert your messages, please'/>
                <div onClick={this.createSubmitEvent.bind(this)} className='user_submit input'>Send Message</div>
                <input type="submit" className='disabled' ref='submit'/>
            </form>
        )
    }
}