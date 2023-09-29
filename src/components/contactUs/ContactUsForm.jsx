import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className={styles['contact-us-form']} onSubmit={handleSubmit}>
      <label htmlFor='name'>name</label>
      <input type='text' id='name'></input>
      <label htmlFor='email'>email</label>
      <input type='email' id='email' required />
      <label htmlFor='subject'>subject</label>
      <input type='text' required></input>
      <label htmlFor='message'>message</label>
      <textarea id='message' required></textarea>
      <button type='submit'>send</button>
    </form>
  );
};

export default ContactUsForm;
