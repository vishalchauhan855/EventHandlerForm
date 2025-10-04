import React, { useState } from 'react'

function Event() {
  const [users, setUsers] = useState({
    Username: '',
    Email: '',
    AcceptTerms: false,
    Gender: '',
    Country: '',
    Range: 50
  })
  const [show, setShow] = useState(false)

  function input(e) {
    const { name, value, type, checked } = e.target

    setUsers(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function showData(e) {
    e.preventDefault()
    setShow(true)
  }

  return (
    <>
      <form className='col-lg-5 mx-auto my-5 p-5 shadow' onSubmit={showData}>
      
        <div className='mt-4'>
          <input
            type="text"
            name='Username'
            placeholder='Enter your name'
            className='form-control shadow border-0'
            onChange={input}
          />
          <p>{users.Username}</p>
        </div>

   
        <div className='mt-4'>
          <input
            type="email"
            name='Email'
            placeholder='Enter your email'
            className='form-control shadow border-0'
            onChange={input}
          />
          <p>{users.Email}</p>
        </div>

     
        <div className='mt-4 form-check'>
          <input
            type="checkbox"
            name='AcceptTerms'
            className='form-check-input'
            onChange={input}
          />
          <label className='form-check-label'>Accept Terms and Conditions</label>
          <p>{users.AcceptTerms ? 'Accepted' : 'Not Accepted'}</p>
        </div>

       
        <div className='mt-4'>
          <label className='form-label'>Gender</label><br />
          <input
            type="radio"
            name="Gender"
            value="Male"
            onChange={input}
          /> Male&nbsp;
          <input
            type="radio"
            name="Gender"
            value="Female"
            onChange={input}
          /> Female
          <p>{users.Gender}</p>
        </div>

       
        <div className='mt-4'>
          <label className='form-label'>Country</label>
          <select
            name="Country"
            className='form-control'
            onChange={input}
            defaultValue=""
          >
            <option value="" disabled>Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
          <p>{users.Country}</p>
        </div>

        
        <div className='mt-4'>
          <label className='form-label'>Range: {users.Range}</label>
          <input
            type="range"
            name='Range'
            min="0"
            max="100"
            className='form-range'
            onChange={input}
            value={users.Range}
          />
        </div>

      
        <div className='mt-4'>
          <button className='btn btn-info shadow'>Submit</button>
        </div>

      
        <div className='mt-4'>
          {
            show && (
              <div>
                <h5>Submitted Data:</h5>
                <p><strong>Name:</strong> {users.Username}</p>
                <p><strong>Email:</strong> {users.Email}</p>
                <p><strong>Terms Accepted:</strong> {users.AcceptTerms ? 'Yes' : 'No'}</p>
                <p><strong>Gender:</strong> {users.Gender}</p>
                <p><strong>Country:</strong> {users.Country}</p>
                <p><strong>Range Value:</strong> {users.Range}</p>
              </div>
            )
          }
        </div>
      </form>
    </>
  )
}

export default Event
