import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './ContactUsForm.module.scss';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ContactUsForm = (): React.ReactElement => {
    const form = useRef<HTMLFormElement>(null);

    const [btnText, setBtnText] = useState('send');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            throw new Error('Environment variables REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, or REACT_APP_PUBLIC_KEY are not defined');
        }

        if (!form.current) {
            throw new Error('The form does not exist');
        }

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
        ).then((result) => {
            if (form.current) {
                form.current.reset();
            }
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
