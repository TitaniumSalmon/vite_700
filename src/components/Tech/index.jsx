const Tech = ({isHighLight, data}) => {
    return (
        <div className="flex gap-4 text-sm">
            {
                data.map((e, i) =>(
                    <div key={`${e}-tech-${i}`} className={` px-2 py-1 rounded-md ${isHighLight ? "bg-primarySubcontent text-white" : "bg-button text-primarySubcontent"}`}>{e}</div>
                ))
            }        
        </div>
    )
}

export default Tech;