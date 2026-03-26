import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'
const Header = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='text-left text-4xl text-primaryTitle font-bold leading-tight tracking-tight'>{data.name}</div>
            <div className='text-left text-primarySubcontent font-semibold text-sm tracking-wide uppercase'>{data.title}</div>
            <div className='text-left text-sm w-5/6 text-gray-500 leading-relaxed'>{data.caption}</div>
            <div className='text-left mt-3'>
                <a href={data.link} target='_blank'>
                    <span className='inline-flex items-center gap-2 rounded-lg bg-primaryTitle text-white py-2 px-5 text-sm font-medium hover:bg-primaryContent transition-colors duration-200 shadow-md hover:shadow-lg'>
                        {data.btnText}
                        <span className='inline-block'>
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;