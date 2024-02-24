import Section from '../layout/Section';
import ContactUsForm from './ContactUsForm';

const ContactUsSection = (): React.ReactElement => {
    return (
        <Section
            sectionId='contact'
            heading='Contact us'
        >
            <ContactUsForm />
        </Section>
    );
};

export default ContactUsSection;
