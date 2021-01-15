import React, {useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'
import { FaPlus } from 'react-icons/fa';
import Modal from './components/Modal/CreateChatModal';
// import Modal from 'react-modal';

// Modal.setAppElement("#root");

function App() {
  const [ modalOpen, setModalOpen ] = useState(false);
  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
 
  useEffect(() => setJobs(data), []);

  const filterFunc = ({category}) => {
    if(filters.length===0){
      return true;
    }

    const tags = [];

    if(category){
        tags.push(...category);
    }

    // return tags.some(tag => filters.includes(tag));
    return filters.every(filter => tags.includes(filter));
  }

  const handletagClick = (tag) => {
    // avoid re-adding tag
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
     <header className="mb-12 p-20 text-xl font-bold" style={{backgroundColor: '#B8B8FF'}}>
      하마하마
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
          <JobBoardComponent
          job={job} 
          key={job.id} 
          handletagClick={handletagClick}/>         
         ))
       )
     } 

    <div>

    <Container>
      {/* <Button
        type="button"
        tooltip="Open Modal"
        styles={{backgroundColor: darkColors.lighterRed, color: lightColors.white}}
        onClick={openModal}>
          <FaPlus />
        </Button> */}
        <button type="button" onClick={openModal} className="rounded-full border border-gray-100 bg-red-500 p-6 text-lg"> <FaPlus /></button>
      
        <Modal open={ modalOpen } close={ closeModal } header="새로운 채팅방 만들기">
        </Modal>

    </Container>
    </div>
     </div>
    </>
  );
}

export default App;
