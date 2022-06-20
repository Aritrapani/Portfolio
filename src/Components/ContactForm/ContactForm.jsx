import React, {useRef , useState, useContext } from 'react';
import './ContactForm.css';
import '../Intro/Intro.css';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context';

function ContactForm() {

    const form = useRef();
    const [done,setDone] = useState(false);
    const {state} = useContext(ThemeContext);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mbu340a', 'template_4sg6pt8', form.current, 'PKeCZGJESIaVb7YNf')
            .then((result) => {
                console.log(result.text);
                form.current.user_name.value = '';
                form.current.user_email.value = '';
                form.current.message.value = '';
                setDone(true);
                setTimeout(() => {
                    setDone(false);
                }, 5000);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contactForm" id='contact'>
            <div className="c-left">
                <div className="texts">
                    <span style={{color: state.darkMode ? 'white' : ''}}>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className='blur1 s-blur1' style={{ background: '#ABF1FF94' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' name='user_name' className='user' required/>
                    <input type='text' placeholder='Email' name='user_email' className='user' required/>
                    <textarea name='message' placeholder='Message' className='user' required/>
                    <input type='submit' className='btn' value='Send' />
                    <span style={{color: 'var(--orange)'}}>{done && 'Thanks for contacting me'}</span>
                    <div className='blur1 c-blur1' style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm