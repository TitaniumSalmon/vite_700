import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='flex items-end gap-5 text-2xl pb-2'>
            <a href='https://github.com/TitaniumSalmon' target='_blank' title='GitHub'
               className='text-gray-400 hover:text-primaryTitle transition-all duration-200 hover:scale-125'>
                <FontAwesomeIcon icon={faGithub}/>
                Github
            </a>
        </div>
    )
}

export default Contact;