import Section from "../layout/Section";
import ContactUsForm from "./ContactUsForm";

const ContactUsSection = () => {
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