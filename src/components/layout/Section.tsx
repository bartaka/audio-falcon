import { ReactElement, ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
    sectionId: string;
    heading: string;
    subheading?: string;
    backgroundGradient?: boolean;
    children: ReactNode;
};

const Section = (props: Props): ReactElement => {
    const {
        sectionId,
        heading,
        subheading,
        backgroundGradient = false,
        children
    } = props;

    const sectionStyles = `my-[11rem] md:mt-[15rem] md:mb-[30rem] 3xl:mb-[50rem] ${backgroundGradient ? 'bg-[linear-gradient(180deg,#080808,#141414,#080808)]' : ''}`;

    return (
        <Fade
            duration={1500}
            delay={200}
            triggerOnce
        >
            <section
                className={sectionStyles}
                id={sectionId}
            >
                <div className="block mx-auto my-[4rem] w-fit min-w-[20rem] max-w-[40%] 3xl:max-w-[30%] text-center leading-none max-md:w-1/2">
                    <h2 className="text-[4rem] text-white border-b border-white uppercase tracking-[2px] mb-0 max-md:font-extralight">{heading}</h2>
                    {subheading &&
                        <h3 className="text-[1.1rem] font-thin mt-[4px] uppercase tracking-[5px]">{subheading}</h3>}
                </div>
                <Fade
                    delay={500}
                    duration={1500}
                    triggerOnce
                >
                    {children}
                </Fade>
            </section>
        </Fade>
    );
};

export default Section;
