import React, { useState } from 'react';
import './Empdetails.css'; 

const Empdetails = () => {
  const [data, setData] = useState([
    { slno: 1, empid: 5, empname: 'John Doe', empphoneno:'987654321', empaddress:'UK' ,emergencycontactno: 98765432 },
    { slno: 2, empid: 9, empname: 'Alex', empphoneno:'987654321', empaddress:'USA' ,emergencycontactno: 234567890 },
    { slno: 3, empid: 7, empname: 'Marina', empphoneno:'987654321', empaddress:'CANADA' ,emergencycontactno: 987654334 },
    { slno: 4, empid: 2, empname: 'Lee', empphoneno:'987654321', empaddress:'AFRICA' ,emergencycontactno: 934598765 },
  ]);

  const [newData, setNewData] = useState({ slno:'', empid: '', empname: '', empphoneno: '', empaddress:'', emergencycontactno:'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { ...newData, slno: data.length + 1 }]);
    setNewData({ slno:'', empid: '', empname: '', empphoneno: '', empaddress:'', emergencycontactno:'' });
  };

  const handleUpdate = (empid) => {
    setData((prevData) =>
      prevData.map((item) => (item.empid === empid ? newData : item))
    );
    setNewData({ slno:'', empid: '', empname: '', empphoneno: '', empaddress:'', emergencycontactno:'' });
  };

  const handleDelete = (empid) => {
    setData((prevData) => prevData.filter((item) => item.empid !== empid));
  };

  return (
    <div>
      <div className='mt-2'>
        <h2 className='mb-4'>Employee Details</h2>
        <label className='emp-label'>
          EMP ID:
          <input 
            className='ms-5 emp-input'
            type="text"
            name="empid"
            value={newData.empid}
            onChange={handleChange}
          />
        </label><br/>
        <label className='emp-label'>
          EMP NAME:
          <input
            className='ms-4 emp-input'
            type="text"
            name="empname"
            value={newData.empname}
            onChange={handleChange}
          />
        </label>

        <br/>
        <label className='emp-label'>
          EMP PHONE NO:
          <input
            className=' ms-3  emp-input'
            type="text"
            name="empphoneno"
            value={newData.empphoneno}
            onChange={handleChange}
          />
        </label> 

        <br/>
        <label className='emp-label'>
          EMP ADDRESS:
          <input
            className='ms-3  emp-input'
            type="text"
            name="empaddress"
            value={newData.empaddress}
            onChange={handleChange}
          />
        </label>

        <br/>
        <label className='emp-label'>
          EMERGENCY CONTACT NO:
          <input
            className='ms-3  emp-input'
            type="text"
            name="emergencycontactno"
            value={newData.emergencycontactno}
            onChange={handleChange}
          />
        </label>
        
        <button className='btn btn-primary p-0' onClick={handleAdd}>Add/Update</button>
      </div>
    
      <table className="empdetails-table mt-5">
        <thead>
          <tr>
            <th>SL NO</th>
            <th>EMP ID</th>
            <th>EMP NAME</th>
            <th>EMP PHONE NO</th>
            <th>EMP ADDRESS</th>
            <th>EMERGENCY CONTACT NO</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.empid}>
              <td>{item.slno}</td>
              <td>{item.empid}</td>
              <td>{item.empname}</td>
              <td>{item.empphoneno}</td>
              <td>{item.empaddress}</td>
              <td>{item.emergencycontactno}</td>
              <td>
                <button className='me-3 btn btn-success p-0' onClick={() => handleUpdate(item.empid)}>Update</button>
                <button className='btn btn-danger p-0' onClick={() => handleDelete(item.empid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Empdetails;
