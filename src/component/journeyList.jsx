
import React from 'react';

const JourneyList = ({ journeys, onDelete, onUpdate }) => {
  const formatCost = (cost) => {
    const costString = cost.toString();
    const parts = [];
    let i = costString.length - 1;
    
    while (i >= 0) {
      const chunk = costString.substring(Math.max(i - 2, 0), i + 1);
      parts.unshift(chunk);
      i -= 3;
    }
    
    return parts.join(',');
  };
  return (
    <div className='container'>
      <div className='journey-list'>
          <h2><i class="fa-solid fa-earth-americas"></i> Journeys</h2>
      </div>
      <table >
        <thead>
          <tr className='table-head'>
            <th>Sl.N</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Travel Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {journeys.map((journey,i) => (
            <tr key={journey.id}>
              <td>{i+1}</td>
              <td>{journey.fromdate}</td>
              <td>{journey.todate}</td>
              <td>{formatCost(journey.cost)}</td>
              <td>
                <div className="actions">
                <button className="btn btn-danger"onClick={() => onDelete(journey.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => onUpdate(journey.id)}>Update</button>
                </div>
                {/* <button onClick={() => }>Update</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JourneyList;
