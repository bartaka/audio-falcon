import { ReactElement } from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = (): ReactElement => {
    return (
        <div className='flex items-center justify-center min-h-[90vh]'>
            <ScaleLoader color='white' height='1.5rem' />
        </div>
    );
};

export default Loader;
