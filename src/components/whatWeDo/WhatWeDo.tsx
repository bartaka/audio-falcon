import { ReactElement } from 'react';

import Section from '../layout/Section';
import Activity from './Activity';

import { whatWeDoData as data } from '../../data/whatWeDo';

const WhatWeDo = (): ReactElement => {
    return (
        <Section
            sectionId='what-we-do'
            heading='services'
            subheading='what we do'
            backgroundGradient
        >
            <div className="w-[70%] mx-auto mt-[1rem] -mb-[5rem] flex flex-col justify-between items-center max-md:w-4/5 max-md:mt-[5rem] max-md:mb-0">
                {data.map((activity) => (
                    <Activity
                        key={activity.id}
                        imgSrc={activity.imgSrc}
                        imgAlt={activity.imgAlt}
                        h3={activity.h3}
                        h4={activity.h4}
                        p={activity.p}
                    />
                ))}
            </div>
        </Section>
    );
};

export default WhatWeDo;
