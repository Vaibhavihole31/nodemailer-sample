import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Message() {

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  async function send() {
    const response = await axios.post('/sendEmail', {
      to: to,
      subject: subject,
      text: text
    })

    if (response.data.success) {
      alert("Message Send Successfully !!");
      
    }
    else {
      alert("Invalid Credentials")
    }

      setTo("");
      setSubject("");
      setText("");
  }

  return (
    <>
      <div className='container mt-5'>
      <div className='login-card'>
        <div className='row'>
          <h2 className='text-center mt-5'>Login</h2>
          <div className='col-md-6 mt-3'>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={to} onChange={(e) => { setTo(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="text"
                  value={subject} onChange={(e) => { setSubject(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="text"
                  value={text} onChange={(e) => { setText(e.target.value) }}
                />
              </div>
              <button className="login-page-btn w-100 mb-3" type="button" onClick={send}>
                <i class="fa-solid fa-right-to-bracket"></i> Send
              </button>
            </form>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default Message