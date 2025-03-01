import Header from '../Header'
import Navbar from '../Navbar'
import Contact from '../Contact'
const LeftSection = () => {
    return (
        <div>
            <div className='sticky top-0 grid grid-row-[35%_45%_20%] h-screen'>
                <Header />
                <Navbar />
                <Contact />
            </div>
        </div>
    );
}

export default LeftSection;