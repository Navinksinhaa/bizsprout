import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import contactsFinder from '../apis/contactsFinder'
import ContactsContext from '../context/contactsContext'

const initialValue = {
    Name: "",
    fromdate: '',
    todate:'',
    cost: ''
}
const UpdateContact = () => {

    const [data,setData] = useState([initialState])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };
   

    const handleSubmit = async (id) => {
        const response = await contactsFinder.put(`/${id}/update`, {
            name,
            phoneNumber,
            email
        })
        updateContact(response.data)
        setName('')
        setEmail('')
        setPhoneNumber('')
    }

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div>
            <h1 className='font-weight-light display-5 mt-5 text-center'>Journey</h1>
            <form action=''>
                <div className='form-row g-5'>
                    <div className='col'>
                        <label>
                            Name:
                            <input type='text' value={data.Name} onChange={handleInputChange} />
                        </label>
                    </div>

                    <div className='col'>
                        <label>
                            Journey From
                            <input type='date' value={email} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            Number:
                            <input type='date' value={phoneNumber} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                            Cost:
                            <input type='number' value={phoneNumber} onChange={handleInputChange} />
                        </label>
                    </div>
                </div>
            </form >
            <div className='d-flex gap-2'>
                <button onClick={() => handleSubmit(id)} className='btn btn-primary'>Update</button>
                <button onClick={() => handleBack()} className='btn btn-warning'>Back</button>
            </div>
        </div>
    )
}

export default UpdateContact
