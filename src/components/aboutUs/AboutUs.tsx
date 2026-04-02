import { ReactElement, useEffect, useState } from 'react';

import client from '../../data/sanityClient';
import Section from '../layout/Section';
import image from '../../assets/aboutUs/about-us.jpg';

const AboutUs = (): ReactElement => {
    const [cvUrl, setCvUrl] = useState<string | null>(null);

    useEffect(() => {
        const query = '*[_type == "files"][0]{ "cvUrl": cv.asset->url }';
        client.fetch(query).then((data) => {
            if (data?.cvUrl) setCvUrl(data.cvUrl);
        });
    }, []);

    return (
        <Section
            sectionId='about-us'
            heading='About us'
            backgroundGradient
        >
            <div className="flex justify-center items-stretch w-4/5 mx-auto max-md:flex-col max-md:items-center 3xl:w-[70%]">
                <img
                    src={image}
                    alt='Luky & Bara'
                    className="h-[40rem] object-cover max-md:max-w-full max-md:h-[25rem] 3xl:max-w-[60%]"
                />
                <div className="font-am-sans ml-[2rem] w-[55%] flex flex-col justify-between leading-normal max-md:w-full max-md:ml-0 max-md:leading-[1.5] max-md:text-justify 3xl:ml-[3rem]">
                    <h3 className="text-[2.5rem] text-white font-thin m-0 uppercase max-md:text-[2rem] max-md:my-[2rem] max-md:text-center 3xl:text-[4rem]">Welcome to our website!</h3>
                    <p className="m-0 max-md:mb-[2rem]">
                        We are <span className="highlight">Lukáš Holocsy</span> and <span className="highlight">Barbora Kaňoková</span>, a dynamic duo based in Prague, Czech Republic. Lukas, a talented film and video game sound designer from Slovakia, has a remarkable knack for capturing emotions and enhancing storytelling through sound. Meanwhile, Barbora, with her administrative skills, ensures that our collaborative projects run smoothly and efficiently.
                    </p>
                    <p className="m-0 max-md:mb-[2rem]">
                        Passionate about creativity and storytelling, we are open to working on a wide range of projects, including films, video games, and documentaries. Lukas' ability to craft immersive soundscapes, combined with Barbora's meticulous organization, allows us to deliver exceptional results to our clients.
                    </p>
                    <p className="m-0 max-md:mb-[2rem]">
                        With a client-centric approach, we value effective communication and close collaboration to bring your vision to life. Our portfolio showcases our previous works and the diverse narratives we have been a part of. Whether you are a filmmaker, a game developer, or a documentary producer, we are eager to join you on your next creative endeavor. Let's create something remarkable together!
                    </p>
                    {cvUrl && (
                        <p className="m-0 max-md:mb-[2rem]">
                            DOWNLOAD CV: <a className="underline text-text-main" href={cvUrl} download target='_blank' rel='noreferrer'>
                                HERE
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default AboutUs;
