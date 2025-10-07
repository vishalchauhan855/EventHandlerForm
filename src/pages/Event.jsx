

import React, { useState } from 'react';

function Event() {
  const [users, Setusers] = useState({});
  const [show, setShow] = useState(false);

  function input(e) {
    const { name, value, type, checked } = e.target;

    if (name === 'Skills') {
      const updatedSkills = checked
        ? [...(users.Skills || []), value]
        : (users.Skills || []).filter(skill => skill !== value);

      Setusers({ ...users, Skills: updatedSkills });
    } else if (type === 'checkbox') {
      Setusers({ ...users, [name]: checked });
    } else {
      Setusers({ ...users, [name]: value });
    }
  }

  function showData(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div className="container my-5">
      <form className="col-md-6 mx-auto card p-4 shadow" onSubmit={showData}>
        <h2 className="text-center mb-4">User Form</h2>

      
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="Username"
            placeholder="Enter your name"
            className="form-control"
            onChange={input}
          />
        </div>

     
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="Email"
            placeholder="Enter your email"
            className="form-control"
            onChange={input}
          />
        </div>

  
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="AcceptTerms"
            className="form-check-input"
            onChange={input}
          />
          <label className="form-check-label">Accept Terms and Conditions</label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender:</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="Gender"
              value="Male"
              className="form-check-input"
              onChange={input}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="Gender"
              value="Female"
              className="form-check-input"
              onChange={input}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

      
        <div className="mb-3">
          <label className="form-label">Country</label>
          <select
            name="Country"
            className="form-select"
            onChange={input}
            defaultValue=""
          >
            <option value="" disabled>Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
        </div>

      
        <div className="mb-3">
          <label className="form-label d-block">Select Skills:</label>
          {['HTML', 'CSS', 'JavaScript', 'React'].map(skill => (
            <div key={skill} className="form-check form-check-inline">
              <input
                type="checkbox"
                name="Skills"
                value={skill}
                className="form-check-input"
                onChange={input}
                checked={(users.Skills || []).includes(skill)}
              />
              <label className="form-check-label">{skill}</label>
            </div>
          ))}
        </div>

       
        <div className="mb-4">
          <label className="form-label">Range: {users.Range || 50}</label>
          <input
            type="range"
            name="Range"
            min="0"
            max="100"
            className="form-range"
            onChange={input}
            value={users.Range || 50}
          />
        </div>

       
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

     
        {show && (
          <div className="mt-4 border-top pt-3">
            <h4>Submitted Data</h4>
            <ul className="list-group">
              <li className="list-group-item"><strong>Name:</strong> {users.Username || '-'}</li>
              <li className="list-group-item"><strong>Email:</strong> {users.Email || '-'}</li>
              <li className="list-group-item"><strong>Accepted Terms:</strong> {users.AcceptTerms ? 'Yes' : 'No'}</li>
              <li className="list-group-item"><strong>Gender:</strong> {users.Gender || '-'}</li>
              <li className="list-group-item"><strong>Country:</strong> {users.Country || '-'}</li>
              <li className="list-group-item"><strong>Skills:</strong> {(users.Skills || []).join(', ') || 'None'}</li>
              <li className="list-group-item"><strong>Range:</strong> {users.Range || 50}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default Event;
