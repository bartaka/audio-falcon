import { FocusEvent, FormEvent, ReactElement, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ScaleLoader } from 'react-spinners';

import ButtonPrimary from '../buttons/ButtonPrimary';

type FieldErrors = { name: string; email: string; message: string };

const validateField = (field: keyof FieldErrors, value: string): string => {
    if (field === 'name' && !value.trim()) return 'Name is required';
    if (field === 'email') {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
    }
    if (field === 'message' && !value.trim()) return 'Message is required';
    return '';
};

const ContactUsForm = (): ReactElement => {
    const form = useRef<HTMLFormElement>(null);

    const [btnText, setBtnText] = useState('send message');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<FieldErrors>({ name: '', email: '', message: '' });

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const nameAttr = e.target.name;
        const field: keyof FieldErrors =
            nameAttr === 'user_name' ? 'name' :
            nameAttr === 'user_email' ? 'email' : 'message';
        setErrors(prev => ({ ...prev, [field]: validateField(field, e.target.value) }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    const inputBase = "w-full mb-[2rem] bg-text-main border-2 border-transparent rounded-[5px] text-[1.5rem] pl-[1rem] font-poppins transition-[border] duration-500 focus:!outline-none focus:border-teal text-black";
    const inputError = "!border-error";

    return (
        <form className="flex flex-col items-center" ref={form} onSubmit={handleSubmit}>
            <div className="flex flex-col items-center w-4/5 md:w-2/5">
                <label className="self-start text-[1.8rem]" htmlFor='name'>
                    name <span className="text-[1.4rem]">(required)</span>
                </label>
                <input
                    className={`${inputBase} h-[3rem] ${errors.name ? inputError : ''}`}
                    type='text'
                    id='name'
                    name='user_name'
                    required
                    onBlur={handleBlur}
                />
                {errors.name && <span className="self-start text-[1.2rem] text-error -mt-[1.5rem] mb-[1rem]">{errors.name}</span>}
            </div>
            <div className="flex flex-col items-center w-4/5 md:w-2/5">
                <label className="self-start text-[1.8rem]" htmlFor='email'>
                    email <span className="text-[1.4rem]">(required)</span>
                </label>
                <input
                    className={`${inputBase} h-[3rem] ${errors.email ? inputError : ''}`}
                    type='email'
                    name='user_email'
                    id='email'
                    required
                    onBlur={handleBlur}
                />
                {errors.email && <span className="self-start text-[1.2rem] text-error -mt-[1.5rem] mb-[1rem]">{errors.email}</span>}
            </div>
            <div className="flex flex-col items-center w-4/5 md:w-2/5">
                <label className="self-start text-[1.8rem]" htmlFor='subject'>subject</label>
                <input
                    className={`${inputBase} h-[3rem]`}
                    type='text'
                    name='subject'
                    id='subject'
                />
            </div>
            <div className="flex flex-col items-center w-4/5 md:w-2/5">
                <label className="self-start text-[1.8rem]" htmlFor='message'>
                    message <span className="text-[1.4rem]">(required)</span>
                </label>
                <textarea
                    className={`${inputBase} ${errors.message ? inputError : ''}`}
                    id='message'
                    name='message'
                    rows={7}
                    maxLength={10000}
                    required
                    onBlur={handleBlur}
                ></textarea>
                {errors.message && <span className="self-start text-[1.2rem] text-error -mt-[1.5rem] mb-[1rem]">{errors.message}</span>}
            </div>
            <ButtonPrimary btnType='submit'>
                {isLoading
                    ? <ScaleLoader height='1rem' />
                    : btnText
                }
            </ButtonPrimary>
            <p className="w-4/5 md:w-2/5 mt-[1rem] text-[1.2rem] text-text-grey text-center">
                Your name and email are used only to reply to your message and are not stored or shared with third parties.
            </p>
        </form>
    );
};

export default ContactUsForm;
