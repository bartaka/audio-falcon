import styles from './Activity.module.scss';

type Props = {
    imgSrc: string;
    imgAlt: string;
    h3: string;
    h4: string;
    p: string;
};

const Activity = (props: Props): React.ReactElement => {
    const { imgSrc, imgAlt, h3, h4, p } = props;

    return (
        <div className={styles.activity}>
            <div className={styles.icon}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className='copy'>
                <h3>{h3}</h3>
                <h4>{h4}</h4>
                <p dangerouslySetInnerHTML={{
                    __html: p
                        .replace(
                            'FMOD and Wwise',
                            `<span class="${styles['highlight']}">FMOD and Wwise</span>`
                        )
                        .replace(
                            'Unity or Unreal Engine',
                            `<span class="${styles['highlight']}">Unity or Unreal Engine</span>`
                        )
                        .replace(
                            'surround ambiences',
                            `<span class="${styles['highlight']}">surround ambiences</span>`
                        )
                        .replace(
                            'cinematic impacts',
                            `<span class="${styles['highlight']}">cinematic impacts</span>`
                        )
                        .replace(
                            'documentary series',
                            `<span class="${styles['highlight']}">documentary series</span>`
                        )
                        .replace(
                            'smaller film productions',
                            `<span class="${styles['highlight']}">smaller film productions</span>`
                        )
                        .replace(
                            'sound design, edit, voice recording',
                            `<span class="${styles['highlight']}">sound design, edit, voice recording</span>`
                        )
                        .replace(
                            'final mix',
                            `<span class="${styles['highlight']}">final mix</span>`
                        )
                }}>
                </p>
            </div>
        </div>
    );
};

export default Activity;
