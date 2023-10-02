import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rvox0rm', // SERVICE_ID
            'template_rp3cf7p', // TEMPLATE_ID
            form.current,
            'EZJ0zC0tqwU-dKKDv' // PUBLIC KEY
        ).then((result) => {
            e.target.reset();
            console.log(result.text);
        }, (error) => {
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
                    required
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
                    required
                ></textarea>
            </div>
            <button type='submit'>send</button>
        </form>
    );
};

export default ContactUsForm;

