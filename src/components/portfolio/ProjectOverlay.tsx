import { Fragment, ReactElement, MouseEventHandler, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { toPlainText } from '@portabletext/react';

import { Project } from '../../interfaces/Project';
import { truncate } from '../../utils/Strings';

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

type Props = {
    project: Project;
    onClose: MouseEventHandler<HTMLElement>;
};

const ProjectOverlay = (props: Props): ReactElement => {
    const {
        project: {
            projectName,
            year,
            role,
            client,
            website,
            note,
            description,
            video,
            image
        },
        onClose
    } = props;

    const backdropRoot = document.getElementById('backdrop-root');
    const modalRoot = document.getElementById('modal-root');
    const modalRef = useRef<HTMLDivElement>(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    if (!backdropRoot || !modalRoot) {
        throw new Error('Required root elements not found');
    }

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                (onCloseRef.current as unknown as () => void)();
                return;
            }
            if (e.key === 'Tab' && modalRef.current) {
                const elements = Array.from(
                    modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
                );
                if (!elements.length) return;
                const first = elements[0];
                const last = elements[elements.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div
                    className="fixed top-0 left-0 w-full h-screen z-[100] bg-black/75 overflow-y-hidden animate-fade-in"
                    onClick={onClose}
                />,
                backdropRoot
            )}
            {ReactDOM.createPortal(
                <div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] 3xl:w-[40%] z-[200] overflow-y-auto md:overflow-hidden max-h-screen md:max-h-none bg-bg-sec border border-bg-main pt-[1.5rem] px-[1.5rem] pb-[1.5rem] md:pt-[3rem] md:px-[3rem] md:pb-[8rem] animate-fade-in"
                    ref={modalRef}
                    role='dialog'
                    aria-modal='true'
                    aria-label={projectName}
                >
                    <button
                        className="text-text-main cursor-pointer absolute top-[1rem] right-[1rem] bg-transparent border-none text-[3rem] transition-all duration-500 hover:scale-[1.15]"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    <h2 className="block w-[80%] md:w-[60%] mx-auto text-center border-b border-[#e1e1e1] uppercase text-[3rem] max-md:font-extralight">{projectName}</h2>
                    <div className="mt-[5rem] flex flex-col md:flex-row md:justify-between">
                        <div className="flex-1 mr-0 mt-[2rem] md:mr-[3rem] md:mt-0 order-last md:order-none">
                            {video
                                ?
                                <iframe
                                    id='inlineFrame'
                                    title='Inline Frame'
                                    className="w-full h-[22rem] border-none rounded-[4px] m-0 p-0"
                                    src={`https://www.youtube.com/embed/${new URL(video).searchParams.get('v')}`}
                                />
                                :
                                <img src={image} className="w-full h-auto border-none rounded-[4px] m-0 p-0" />
                            }
                        </div>
                        <div className="flex-1 order-first md:order-none">
                            <p className="font-am-sans mt-0 mb-0 leading-[1.5]">
                                <span className="font-gothic text-[2rem] font-thin">YEAR:</span> {year}
                            </p>
                            <p className="font-am-sans mt-0 mb-0 leading-[1.5]">
                                <span className="font-gothic text-[2rem] font-thin">WORK:</span> {role}
                            </p>
                            {client &&
                                <p className="font-am-sans mt-0 mb-0 leading-[1.5]">
                                    <span className="font-gothic text-[2rem] font-thin">CLIENT:</span> {client}
                                </p>
                            }
                            <p className="font-am-sans mt-0 mb-0 leading-[1.5]">
                                <span className="font-gothic text-[2rem] font-thin">WEB:</span>
                                {' '}
                                <a
                                    className="no-underline text-teal hover:text-text-main"
                                    href={website}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {truncate(website, 41)}
                                </a>
                            </p>
                            {note &&
                                <p className="font-am-sans mt-[2rem] mb-0 leading-[1.5]">
                                    Post-Production was done in <a className="no-underline text-teal hover:text-text-main" href="https://studiobeep.cz" target="_blank" rel="noopener noreferrer">Studio Beep</a>.
                                </p>
                            }
                            <p className="font-am-sans mt-[2rem] mb-0 leading-[1.5] max-md:text-justify">
                                <span className="font-gothic text-[2rem] font-thin">DESCRIPTION:</span> {toPlainText(description)}
                            </p>
                        </div>
                    </div>
                </div>,
                modalRoot
            )}
        </Fragment>
    );
};

export default ProjectOverlay;
