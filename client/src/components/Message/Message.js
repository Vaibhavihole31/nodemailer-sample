import React, { useState } from 'react';
import axios from 'axios';
import './Message.css';
import headerImg from './gmail-logo.png';
import gamilImg from './gmail-img.png';
import swal from "sweetalert";

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

    setTo("");
    setSubject("");
    setText("");

    swal("Message Send Successfully !!");
  }

  return (
    <>
      <div className='container mt-5'>
        <div className=' message-card '>
          <div className='row'>
            <div className='col-md-6'>
              <h4><img className='gmail-logo' src={headerImg} /> Gmail</h4>

              <img className='gmail-img' src={gamilImg} />
            </div>
            <div className='col-md-4 send-message-card  mt-5 mb-3'>
              <form>
                <h4 className='text-center mt-5 mb-5'>New Message</h4>
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
                    placeholder="subject"
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
                <button className="login-page-btn btn btn-primary w-100 mb-3" type="button" onClick={send}>
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