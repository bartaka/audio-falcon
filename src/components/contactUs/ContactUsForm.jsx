import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {

    const handleSubmit = (e) => e.preventDefault();

    return (
        <form className={styles['contact-us-form']} onSubmit={handleSubmit}>
            <label for='name'>name</label>
            <input type='text' id='name'></input>
            <label for='email'>email</label>
            <input type='email' id='email' required />
            <label for='subject'>subject</label>
            <input type='text' required></input>
            <label for='message'>message</label>
            <textarea id='message' required></textarea>
            <button type='submit'>send</button>
        </form>
    );
};

export default ContactUsForm;