import { ReactElement, ReactNode } from 'react';

type Props = {
    btnType: 'button' | 'submit';
    children: ReactNode;
};

const ButtonPrimary = (props: Props): ReactElement => {
    const { btnType, children } = props;

    return (
        <button
            className="py-[0.3rem] px-[1.5rem] text-white text-[2rem] tracking-[1px] font-gothic bg-teal border-none rounded-[5px] cursor-pointer uppercase transition-[background-color,transform] duration-200 ease-out hover:bg-teal-dark hover:-translate-y-px active:translate-y-0 max-md:font-extralight"
            type={btnType}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
