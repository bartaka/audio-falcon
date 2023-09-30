import Section from "../layout/Section";
import Activity from "./Activity";

import svg1 from '../../assets/whatWeDo/AF_Icon_What We Do_FnD-Location Sound V2.svg';
import svg2 from '../../assets/whatWeDo/AF_What We Do_FnD-Post-Production V2.svg';
import svg3 from '../../assets/whatWeDo/AF_What We Do_VG-Post-Production V2.svg';
import svg4 from '../../assets/whatWeDo/AF_What We Do_FR-SFX Creation V2.svg';

import styles from './WhatWeDo.module.scss';

const WhatWeDo = () => {
    return (
        <Section
            sectionId='what-we-do'
            heading='what we do'
        >
            <div className={styles.container}>
                <Activity
                    imgSource={svg1}
                    imgAlt='activity icon - film location sound'
                    h3='film and documentary'
                    h4='location sound'
                />
                <Activity
                    imgSource={svg2}
                    imgAlt='activity icon - film post-production'
                    h3='film and documentary'
                    h4='post-production'
                />
                <Activity
                    imgSource={svg3}
                    imgAlt='activity icon - video game post-production'
                    h3='video game'
                    h4='post-production'
                />
                <Activity
                    imgSource={svg4}
                    imgAlt='activity icon - field recording'
                    h3='field recording'
                    h4='sfx creation'
                />
            </div>
        </Section>
    );
};

export default WhatWeDo;
