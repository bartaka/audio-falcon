import Section from "../layout/Section";
import Activity from "./Activity";

import { whatWeDoData as data } from "../../data/whatWeDo";
import styles from './WhatWeDo.module.scss';

const WhatWeDo = (): React.ReactElement => {
    return (
        <Section
            sectionId='what-we-do'
            heading='what we do'
        >
            <div className={styles.container}>
                {data.map(activity => (
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
