import styles from './AboutUs.module.scss';
import aboutUsPhoto from '../../assets/aboutUs/about-us.jpg';

const AboutUs = () => {
    return (
        <section>
            <div className='section-heading'>
                <h2>about us</h2>
                <p>silny, chytry, sexy</p>
            </div>
            <div className={styles['about-us-feature']}>
                <img src={aboutUsPhoto} alt='Audio Falcon duo smiling' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi commodi porro non itaque, eligendi ullam sed nisi repellat. Ratione obcaecati quia soluta eos hic eius magni porro molestiae aperiam quaerat rem nemo quibusdam dolor aut libero vitae necessitatibus repellat placeat delectus corrupti dignissimos sint, reprehenderit ad nisi? Voluptates dolorum culpa atque laboriosam sunt aliquam error! Minus quo aspernatur aut modi ipsa veritatis praesentium maxime necessitatibus accusantium! Aspernatur blanditiis itaque nobis dolores distinctio, magni voluptates iure velit tenetur repellendus consectetur suscipit a saepe, eveniet molestias odio quasi inventore vero aut hic recusandae. Quasi, ut vitae debitis fugiat assumenda consequuntur voluptatem!</p>
            </div>
        </section>
    );
};

export default AboutUs;
