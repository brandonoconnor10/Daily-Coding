import React, { useState } from 'react'
import './EventRSVPForm.css'
const EventRSVPForm = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [attendees, setAttendees] = useState(1)
const [dietary, setDietary ] = useState('')
const [additionalGuests, setAdditionalGuests ] = useState(false)
const [submitted, setSubmitted] = useState(false)


const handleSubmit = (e) => {
    e.preventDefault(
        setSubmitted(true)
    )
}

  return (
    <div>
<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <label>
          Email:
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          Number of attendees:
          <input type="number" min="1" required value={attendees} onChange={(e) => setAttendees(e.target.value)} 
          />
        </label>
        <label>
          Dietary preferences:
          <input type="text" value={dietary} onChange={(e) => setDietary(e.target.value)} 
          />
        </label>
        <label>
          Bringing additional guests:
          <input type="checkbox" checked={additionalGuests} onChange={(e) => setAdditionalGuests(e.target.checked)} 
          />
        </label>
        <button type="submit">Submit RSVP</button>
      </form>
        { submitted && (
            <div>
                <h3>RSVP Submitted!</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Number of attendees: {attendees}</p>
                <p>Dietary preferences: {dietary || "None"}</p>
                <p>Bringing additional guests: {additionalGuests ? 'Yes' : 'No'}</p>
            </div>
        )}
    </div>
  )
}

export default EventRSVPForm