import React from 'react';
// import { Link } from 'react-router-dom';
const home = ({automation}) => {
  return (
    <>
    <header>
        <div className="top-nav">
            <div className="s-icons">
                <i className="fa fa-facebook" ></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-google"></i>
            </div>
            <div className="contact">
                Contact : 99999999999
            </div>
        </div>
        <nav className='l'>
                <div className="logo">
                    Chalo
                </div>
        </nav>
        <div className="container">
            <div className="left">
                <h1>Lorem ipsum dolor sit met <span>consetur</span></h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam dignissimos enim pariatur, 
                    ex praesentium aliquam officiis id ea, repudiandae dicta, iure animi fuga nostrum beatae tempora harum aspernatur. Ad!</h5>
                <button className='btn1'>lorem giggle slack hack</button>
                <button className="btn2">LOGIN</button>
            </div>
            <div className="right">
            </div>
        </div>
        
    </header>
    </>
  )
}

export default home;