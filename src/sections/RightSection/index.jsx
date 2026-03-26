import About from '../About';
import Experience from '../Experience';
import Project from '../Project'
const RightSection = () => {
    return (
        <div className='text-left grid gap-y-4 px-5'>
            <About />
            <Experience />
            <Project />
        </div>

    );
}

export default RightSection;