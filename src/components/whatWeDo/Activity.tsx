import { ReactElement } from 'react';

type Props = {
    imgSrc: string;
    imgAlt: string;
    h3: string;
    h4: string;
    p: string;
};

const Activity = (props: Props): ReactElement => {
    const { imgSrc, imgAlt, h3, h4, p } = props;

    return (
        <div className="w-full flex flex-row items-start mb-[1rem] max-md:flex-col max-md:items-center max-md:mb-[2rem] max-md:text-justify 3xl:w-[75%] 3xl:max-w-[1200px]">
            <div className="w-[5rem] min-w-[5rem] mr-[4rem] mt-[1.5rem] max-md:mr-0 max-md:mb-[1rem] max-md:text-center 3xl:w-[7rem] 3xl:min-w-[7rem] 3xl:mr-[6rem]">
                <img
                    className="max-w-full h-auto"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className='copy'>
                <h3 className="text-teal uppercase text-[3rem] mt-0 mb-12 leading-[1.7] font-thin tracking-[2px] p-0 max-md:mb-[5rem] max-md:leading-none max-md:text-center 3xl:text-[3rem]">{h3}</h3>
                <h4 className="text-text-grey capitalize text-[2.4rem] -mt-[4.9rem] -mb-[0.8rem] leading-[1.7] font-thin tracking-[2px] p-0 max-md:mb-[2.5rem] max-md:leading-none max-md:text-center">{h4}</h4>
                <p
                    className="font-am-sans leading-[1.2] mb-[2.4rem] mt-[2.4rem]"
                    dangerouslySetInnerHTML={{
                        __html: p
                            .replace(
                                'FMOD and Wwise',
                                `<span class="highlight">FMOD and Wwise</span>`
                            )
                            .replace(
                                'Unity or Unreal Engine',
                                `<span class="highlight">Unity or Unreal Engine</span>`
                            )
                            .replace(
                                'surround ambiences',
                                `<span class="highlight">surround ambiences</span>`
                            )
                            .replace(
                                'cinematic impacts',
                                `<span class="highlight">cinematic impacts</span>`
                            )
                            .replace(
                                'documentary series',
                                `<span class="highlight">documentary series</span>`
                            )
                            .replace(
                                'smaller film productions',
                                `<span class="highlight">smaller film productions</span>`
                            )
                            .replace(
                                'sound design, edit, voice recording',
                                `<span class="highlight">sound design, edit, voice recording</span>`
                            )
                            .replace(
                                'final mix',
                                `<span class="highlight">final mix</span>`
                            )
                    }}>
                </p>
            </div>
        </div>
    );
};

export default Activity;
