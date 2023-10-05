import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import ButtonPrimary from '../buttons/ButtonPrimary';
import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {

    const form = useRef();

    const [btnText, setBtnText] = useState('send');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        ).then((result) => {
            e.target.reset();
            setBtnText('message sent, thank you!');
            console.log(result.text);
        }, (error) => {
            setBtnText('❗️ server error, please try again');
            console.log(error.text);
        });
    };

    return (
        <form className={styles['contact-us-form']} ref={form} onSubmit={handleSubmit}>
            <div className={styles['input-container']}>
                <label htmlFor='name'>
                    name <span className={styles.required}>(required)</span>
                </label>
                <input
                    type='text'
                    id='name'
                    name='user_name'
                    required
                />
            </div>
            <div className={styles['input-container']}>
                <label htmlFor='email'>
                    email <span className={styles.required}>(required)</span>
                </label>
                <input
                    type='email'
                    name='user_email'
                    id='email'
                    required
                />
            </div>
            <div className={styles['input-container']}>
                <label htmlFor='subject'>subject</label>
                <input
                    type='text'
                    name='subject'
                    id='subject'
                />
            </div>
            <div className={styles['input-container']}>
                <label htmlFor='message'>
                    message <span className={styles.required}>(required)</span>
                </label>
                <textarea
                    id='message'
                    name='message'
                    rows={7}
                    maxLength={10000}
                    required
                ></textarea>
            </div>
            <ButtonPrimary btnType='submit' text={btnText} />
        </form>
    );
};

export default ContactUsForm;

