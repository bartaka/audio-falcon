import { ReactElement } from 'react';

import Section from '../layout/Section';
import ContactUsForm from './ContactUsForm';

const ContactUsSection = (): ReactElement => {
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
