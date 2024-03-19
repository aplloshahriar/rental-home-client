

const SectionTitle = ({ heading, subHeading ,button}) => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mt-8" >{heading}</h2>
           
            <p className="text-lg mt-2 mb-4">{subHeading}</p>
           
        </div>
    );
};

export default SectionTitle;