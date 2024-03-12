import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ScaleLoader } from 'react-spinners';

import styles from './ContactUsForm.module.scss';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ContactUsForm = (): React.ReactElement => {
    const form = useRef<HTMLFormElement>(null);

    const [btnText, setBtnText] = useState('send message');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            throw new Error('Environment variables VITE_APP_SERVICE_ID, VITE_APP_TEMPLATE_ID, or VITE_APP_PUBLIC_KEY are not defined');
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
            setIsLoading(false);
            setBtnText('message sent, thank you!');
            console.log(result.text);
        }, (error) => {
            setIsLoading(false);
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
            <ButtonPrimary btnType='submit'>
                {isLoading
                    ? <ScaleLoader height='1rem' />
                    : btnText
                }
            </ButtonPrimary>
        </form>
    );
};

export default ContactUsForm;
