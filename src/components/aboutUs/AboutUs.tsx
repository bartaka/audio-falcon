import styles from './AboutUs.module.scss';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Section from '../layout/Section';
import image from '../../assets/aboutUs/about-us.jpg';

const AboutUs = (): React.ReactElement => {
    return (
        <Section
            sectionId='about-us'
            heading='About us'
            subheading='Welcome to our website!'
        >
            <div className={styles.container}>
                <img src={image} alt='Luky & Bara' />
                <div className={styles.text}>
                    <p>
                        We are <span className={styles.bold}>Lukas Holocsy</span> and <span className={styles.bold}>Barbora Kaňoková</span>, a dynamic duo based in Prague, Czech Republic. Lukas, a talented film and video game sound designer from Slovakia, has a remarkable knack for capturing emotions and enhancing storytelling through sound. Meanwhile, Barbora, with her administrative skills, ensures that our collaborative projects run smoothly and efficiently.
                    </p>
                    <p>
                        Passionate about creativity and storytelling, we are open to working on a wide range of projects, including films, video games, and documentaries. Lukas' ability to craft immersive soundscapes, combined with Barbora's meticulous organization, allows us to deliver exceptional results to our clients.
                    </p>
                    <p>
                        With a client-centric approach, we value effective communication and close collaboration to bring your vision to life. Our portfolio showcases our previous works and the diverse narratives we have been a part of. Whether you are a filmmaker, a game developer, or a documentary producer, we are eager to join you on your next creative endeavor. Let's create something remarkable together!
                    </p>
                    <ButtonPrimary btnType='button' text='download our CV' />
                </div>
            </div>
        </Section>
    );
};

export default AboutUs;
