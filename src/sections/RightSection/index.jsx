import About from '../About';
import Experience from '../Experience';
import Project from '../Project'
const RightSection = () => {
    return (
        <div className='text-left flex flex-col gap-16 px-5 pb-20'>
            <About />
            <Experience />
            <Project />
        </div>
    );
}

export default RightSection;