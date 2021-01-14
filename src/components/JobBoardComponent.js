import React from 'react';

// let x ={
//     "id": 5,
//     "company": "Loop Studios",
//     "logo": "./images/loop-studios.svg",
//     "new": false,
//     "featured": false,
//     "position": "Software Engineer",
//     "role": "FullStack",
//     "level": "Midweight",
//     "postedAt": "1w ago",
//     "contract": "Full Time",
//     "location": "Worldwide",
//     "languages": ["JavaScript"],
//     "tools": ["Ruby", "Sass"]
// }

const JobBoardComponent = ({job: 
    {logo, company, isNew, position, postedAt, subtitle, location, category, }, 
    handletagClick,
}) => {
    const tags = [];

    if(category){
        tags.push(...category);
    }

    return(
    <div className= {`flex flex-col bg-white shadow-md my-16 p-6 rounded  ${
        isNew && 'border-l-4 border-teal-500 border-solid'} sm:flex-row sm:my-8`}>
        <div>
            <img 
                className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0" 
                src={logo} 
                alt={company} />
        </div>
        <div className="flex flex-col justify-between ml-4">
            <h3 className="font-bold text-teal-500">
                {company}
                {isNew && (
                    <span className="bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full uppercase text-sm">
                        New
                    </span>
                )}
            

            </h3>
            <h2 className="font-bold text-xl my-2">{position}</h2>
            <p className="text-gray-700">
                {subtitle}
            </p>
        </div>
        <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 sm:justify-center">
            {tags ? tags.map((tag) => (
                <span 
                    onClick={() => handletagClick(tag)}
                    className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0">
                    {tag}
                </span>
            ))
            : ("")}
        </div>
    </div>
            
    );
    }

export default JobBoardComponent;
