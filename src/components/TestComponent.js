import React from 'react';

const TestComponent = ({job: 
    {logo, company, isNew, featured, position, role, level, postedAt, subtitle, location, languages, tools, }, 

}) => {  const tags = [role, level];

    if(languages){
        tags.push(...languages);
    }

    if(tools){
        tags.push(...tools);
    }

    return(
    <div className= {`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded sm:flex-row sm:my-8`}>
        <div>
            <img 
                className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0" 
                src={logo} 
                alt={company} />
        </div>

        <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 sm:justify-center">
            {tags ? tags.map((tag) => (
                <span 
                    
                    className="cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0">
                    {tag}
                </span>
            ))
            : ("")}
        </div>
    </div>
            
    );
    }

export default TestComponent;
