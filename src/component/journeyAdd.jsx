
import React, { useState,useEffect } from 'react';
import JourneyList from './journeyList';
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JourneyAdd = () => {
  const currentDate = moment().format('DD-MMM-YYYY');
  console.log(currentDate);
  const joiningDate = "2023-07-21";
  
  
  console.log(joiningDate)
  const [journeys, setJourneys] = useState([]);
  const [data, setData] = useState({
    
    fromdate: '',
    todate: '',
    cost: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
      setData({
        ...data,
        [name]: value
      });
    
  };

  

  const validateJourney = () => {
    const { cost } = data;

    // Check if cost is positive
    if (Number(cost) <= 0) {
      toast.error('🦄 cost must be positive!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      
      return false;
    }

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateJourney()) {
        return;
      }
   
    const newJourney = {
      id: Date.now(),
      fromdate: moment(data.fromdate).format('DD-MMM-yyyy'),
      todate: moment(data.todate).format('DD-MMM-yyyy'),
      cost: (data.cost)
    };
    
    const isDuplicateJourney = journeys.some(journey => 
      journey.fromdate === newJourney.fromdate &&
      journey.todate === newJourney.todate 
    );
    
    if (isDuplicateJourney) {
      toast.warn('🦄 Duplicate journey found. Cannot add the same journey again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
       
      console.log("Duplicate journey found. Cannot add the same journey again.");
    } else {
      setJourneys([...journeys, newJourney]);
      
    }
    
    setData({
      fromdate: '',
      todate: '',
      cost: ''
    });
  };
  useEffect(() => {
   
  }, [journeys]);
  console.log(JSON.stringify(journeys));

  /* Delete Form*/
  const handleDelete = (id) => {
    const updatedJourneys = journeys.filter((journey) => journey.id !== id);
    setJourneys(updatedJourneys);
  };

  /* upDate Form */
  const handleUpdate = (journeyId) => {
   
    const journeyToUpdate = journeys.find((journey) => journey.id === journeyId);
  
    if (!journeyToUpdate) {
      return;
    }
    setData({      
      fromdate: journeyToUpdate.fromdate,
      todate: journeyToUpdate.todate,
      cost: journeyToUpdate.cost
    });
  
    
    const updatedJourneys = journeys.filter((journey) => journey.id !== journeyId);
    setJourneys(updatedJourneys);
  };


  return (
    <div className='journey'>
      <h2>Add Journey</h2>

      <form  onSubmit={handleSubmit}>
     
        <label>
          From Date:
          <input
            type="date"
            name="fromdate"
            min={joiningDate}
            max={"2024-04-01"}
            value={data.fromdate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          To Date:
          <input
            type="date"
            name="todate"
            min={data.fromdate}
            max={"2024-04-01"}
            value={data.todate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Travel Cost:
          <input
            type="text"
            name="cost"
            value={data.cost}
            onChange={handleInputChange}
            required
          />
           <ToastContainer/>
        </label>
        <button className="add"type="submit">Add</button>
      </form>

      <JourneyList journeys={journeys} onDelete={handleDelete} onUpdate={handleUpdate}/>
    </div>
  );
};

export default JourneyAdd;
