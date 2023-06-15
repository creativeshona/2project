import axios from 'axios';
import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Project.css'



const Contact = () => {

    const [targetdata, setTargetdata] = useState();
    const [ blank, setblank] = useState(false);


    const valueget = (e) => {
        // console.log(e.target.name ,e.target.value);
        // setTargetdata(e.target.value);
        console.log(targetdata)
        const { name, value } = e.target;
      
        setTargetdata((preData) => ({...preData, [name]:value}))

    }

    const submitform = (e) => {
        // e.preventDefault()
        // console.log('submit', targetdata );
        axios.post("http://localhost:8000/Client-Data", targetdata)
            .then((res) => {
                console.log(res);
                if(res.data){
                toast.success("added successfully")
                setblank(!blank)
                }
            }).catch((err) => {
                console.log(err)
                toast.error('something is wrong')
            })
    }



   
    return (
        <>
            
            <ToastContainer />

            <section className="form" style={{ backgroundColor: '#eee',  }}>
                <div className="container vh-100">
                    <div className="row d-flex justify-content-center align-items-center vh-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card card-form text-black" style={
                                {
                                    borderRadius: 25,
                                    width: '100%',
                                    // height: '100vh'
                                }
                            }>
                                <div className="card-body p-md-5 " style={{ width: '100%' }}>
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Get In Touch</p>

                                            <form className="mx-1 mx-md-4 " style={{
                                                margin: '10px',
                                                width: '100%'
                                            }}
                                            >

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i style={{
                                                        width: '10%',
                                                        height: '10vh',
                                                        padding: '5px'
                                                    }}><FaUser /></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="Name" type="text" id="form3Example1c" className="form-control" onChange={(e) => (valueget(e))} />
                                                        <label className="form-label" htmlfor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i style={{
                                                        width: '10%',
                                                        height: '10vh',
                                                        padding: '5px'
                                                    }}><FaEnvelope /></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="Email" type="email" id="form3Example3c" className="form-control" onChange={(e) => (valueget(e))} />
                                                        <label className="form-label" htmlfor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i style={{
                                                        width: '10%',
                                                        height: '10vh',
                                                        padding: '5px'
                                                    }}><FaLock /></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="Password" type="password" id="form3Example4c" className="form-control" onChange={(e) => (valueget(e))} />
                                                        <label className="form-label" htmlfor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i style={{
                                                        width: '10%',
                                                        height: '10vh',
                                                        /* background: red; */
                                                        padding: '5px'
                                                    }}><FaPhone /></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="Contact" type="number" id="form3Example4cd" className="form-control" onChange={(e) => (valueget(e))} />
                                                        <label className="form-label" htmlfor="form3Example4cd">Contact</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-success btn-lg" style={{ backgroundColor: '#139595' }} onClick={submitform}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
