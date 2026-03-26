import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = () => {
    return (
    <div className='px-6 pt-14'>
        <div className='sticky top-14 flex flex-col justify-between h-[87vh] pb-8'>
          <div className='flex flex-col gap-8'>
            <Header />
            <Navbar />
          </div>
          <Contact />
        </div>
    </div>
    )
}

export default LeftSection;