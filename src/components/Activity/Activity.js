import React, { useEffect, useState } from 'react';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import { addToDb, getStoredCart } from '../../fakeDb';



const Activity = ({singleProduct}) => {

    const notify = () => toast("Successful! You Did It.");
    // console.log(toast);

    const [getTime , setGetTime] = useState([])

    // console.log(singleProduct);
    let totalTime = 0 ;
    for(const product of singleProduct){
        totalTime = totalTime + product.time ;
    }

    // useEffect(()=>{
    //     const storedData = getStoredCart();
        
    // },[])

    const handelTimeSet =(e)=>{
        // const value = e.target.innerText
        setGetTime(e.target.innerText);
        // console.log(e.target.innerText);
        addToDb(e);
    }

    return (
        <div className='activity-container'>
            <div className=''>
                <h1>Delower Hossain </h1>
                <p>Email: hdelower68@gmial.com</p>

                <p><small>Jhenaidha, Dhaka, Bangladesh</small></p>
            </div>
                <div className="my-info">
                    <div>
                        <h1>65(kg)</h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>6.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>22(yrs)</h1>
                        <p>Age</p>
                    </div>
                </div>
                <h4>Add a Break</h4>

                <div className="take-time">
                    <ul>
                        <button onClick={handelTimeSet} >10s</button>
                        <button onClick={handelTimeSet} >20s</button>
                        <button onClick={handelTimeSet} >30s</button>
                        <button onClick={handelTimeSet} >40s</button>
                        <button onClick={handelTimeSet} >50s</button>
                    </ul>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise time: {totalTime}s</h4>
                </div>
                <div className='break-time'>
                    <h4>Break time:{getTime} </h4>
                </div>
                <button onClick={notify} className='activity-btn'>
                    <h4  >Activity Completed</h4>
                </button>
                <ToastContainer/>
        </div>
    );
    
};

export default Activity;