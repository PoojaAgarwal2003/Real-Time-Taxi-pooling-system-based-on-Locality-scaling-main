import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="hello1">
    <div className="container11">
      <div className="text11">Responsive contact us form</div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required/>
            <div className="underline"></div>
            <label>First Name</label>
           
          </div>
          <div className="input-data">
            <input type="text" required/>
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
          </div>
          <div className="form-row">
          <div className="input-data">
            <input type="email" required />
            <div className="underline"></div>
            <label>Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>Others</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
             <textarea cols="30" rows="10"></textarea>
             <div className="underline"></div>
             <label>Write your message</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
             <button type='submit' className='btn'>Submit</button>
          </div>
        </div>
      </form>
    </div>
</div>
    </>
  )
}

export default Contact
