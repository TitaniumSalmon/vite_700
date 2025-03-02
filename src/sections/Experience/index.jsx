import { faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import picExp from '../../assets/picture.jpg'
const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div 
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter ['ex1'] ?  "bg-orange-100":""} `}
                onMouseEnter={() => setIsMouseEnter({['ex1']: true})}
                onMouseLeave={() => setIsMouseEnter({['ex1']: false})}
            >
                <div>
                    <div>
                        <span className={` txet-sm ${isMouseEnter ['ex1'] ? "text-primaryTitle":""}`}>2022-2023</span>
                    </div>
                    <div>
                    <img src={picExp} className='w-5/6 rounded-md' />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter ['ex1'] ? "text-primaryTitle":""}`}>
                        Fashion Ecommerce
                    </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub}/>
                            <FontAwesomeIcon icon={faMedium}/>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                        <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                        <div className="flex gap-4">
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex1'] ?  "text-primaryTitle" : "text-white" } `}>React</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex1'] ?  "text-primaryTitle" : "text-white" } `}>Node.js</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex1'] ?  "text-primaryTitle" : "text-white" } `}>Express</div>  
                        </div>
                </div>
            </div>
            <div 
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter ['ex2'] ?  "bg-orange-100":""} `}
                onMouseEnter={() => setIsMouseEnter({['ex2']: true})}
                onMouseLeave={() => setIsMouseEnter({['ex2']: false})}
            >
                <div>
                    <div>
                        <span className={` txet-sm ${isMouseEnter ['ex2'] ? "text-primaryTitle":""}`}>2022-2023</span>
                    </div>
                    <div>
                        <img src={picExp} alt="picEXP" className="w-5/6 rounded-md"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter ['ex2'] ? "text-primaryTitle":""}`}>Fashion Ecommerce</div>
                        <div>
                            <FontAwesomeIcon icon={faGithub}/>
                            <FontAwesomeIcon icon={faMedium}/>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                        <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                        <div className="flex gap-4">
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex2'] ?  "text-primaryTitle" : "text-white" } `}>React</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex2'] ?  "text-primaryTitle" : "text-white" } `}>Node.js</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ['ex2'] ?  "text-primaryTitle" : "text-white" } `}>Express</div>  
                        </div>
                </div>
            </div>
        </div>
        
    );
}

export default Experience;
