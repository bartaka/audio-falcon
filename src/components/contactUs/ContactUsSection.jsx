import ContactUsForm from "./ContactUsForm";
import styles from './ContactUsSection.module.scss';

const ContactUsSection = () => {
    return (
        <section className={styles['section-contact-us']}>
            <div className='section-heading'>
                <h2>contact us</h2>
            </div>
            <ContactUsForm />
        </section>
    );
};

export default ContactUsSection;