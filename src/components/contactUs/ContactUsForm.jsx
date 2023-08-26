import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {
    return (
        <form className={styles['contact-us-form']}>
            <label for='email'>email</label>
            <input type='email' id='email' />
            <label for='name'>name</label>
            <input type='text' id='name'></input>
            <label for='message'>message</label>
            <textarea id='message'></textarea>
        </form>
    );
};

export default ContactUsForm;