import SectionHeading from "../layout/SectionHeading";

import ContactUsForm from "./ContactUsForm";
import styles from './ContactUsSection.module.scss';

const ContactUsSection = () => {
    return (
        <section className={styles['section-contact-us']} id='contact'>
            <SectionHeading heading='contact us' />
            <ContactUsForm />
        </section>
    );
};

export default ContactUsSection;