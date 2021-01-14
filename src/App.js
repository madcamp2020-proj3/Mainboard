import React, {useState, useEffect } from 'react';
import {Row, Col, Container} from 'reactstrap';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';
//import Columns from 'react-columns';
//import {Grid, Row, Col} from 'react-bootstrap';

var Columns = require('react-columns');

function App() {
  const [jobs, setJobs] = useState([]);
  const[filters, setFilters] = useState(['CSS']);
  
  useEffect(() => setJobs(data), []);

  const filterFunc = ({role, level, tools, languages}) => {
    if(filters.length===0){
      return true;
    }

    const tags = [role, level];

    if(languages){
        tags.push(...languages);
    }

    // return tags.some(tag => filters.includes(tag));
    return filters.every(filter => tags.includes(filter));
  }

  const handletagClick = (tag) => {
    // avoid reading tag
    if(filters.includes(tag)) return;

    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters= () => {
    setFilters([]);
  }
  
  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
     <header className="bg-teal-500 mb-12">
       <img src="/images/bg-header-desktop.svg" alt="bg-image" />
     </header>

     <div className="container">

      {filters.length > 0 && (
      <div className={`flex bg-white shdow-md -my-16 mb-20 mx-10 p-6 rounded z-10 relative`}>
        {filters.map((filter) => (
        <span className="cursor-pointer mr-4 mb-4 rounded font-bold text-teal-500 bg-teal-100 p-2 sm:mb-0"
          onClick={() => handleFilterClick(filter)}>
            <span
            className=''>x {filter}
            </span>
        </span>
        ))}
        <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">Clear</button>
      </div>
    )}

     {
       jobs.length === 0 ? (
         <p>Jobs are fetching...</p>
       ) : (
         filteredJobs.map(job => (
          <Container>
            <Row>
              <Col>
                <JobBoardComponent 
                job={job} 
                key={job.id} 
                handletagClick={handletagClick}/>
              </Col>
              <Col>
                <JobBoardComponent 
                job={job} 
                key={job.id} 
                handletagClick={handletagClick}/>
              </Col>
            </Row>
          </Container>
            
         
         ))
       )
     }     
     </div>

    </>

    
  );
}

export default App;
