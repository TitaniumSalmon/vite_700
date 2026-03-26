import {data} from '../../contents/about'
const About = () => {
    return (
        <div id='about-section' className='space-y-4 scroll-mt-20'>
            <div className='text-primaryAccent font-semibold tracking-widest text-xs uppercase'>{data.title}</div>
            <div className='text-sm leading-relaxed text-gray-600'>{data.description}</div>
            <div className='flex flex-wrap gap-2 pt-1'>
                {data.highlights.map((h, i) => (
                    <span key={i} className='text-xs px-3 py-1 rounded-full bg-blue-50 text-primaryContent font-medium border border-blue-100'>
                        {h}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default About;