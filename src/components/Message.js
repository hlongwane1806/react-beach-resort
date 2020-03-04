import React from 'react';
import {FaInfoCircle} from 'react-icons/fa';
import {FaCheckCircle} from 'react-icons/fa';
import {FaExclamationCircle} from 'react-icons/fa';
import {FaTimesCircle} from 'react-icons/fa';


const Message =(props)=>{
    const {status, message}= props;
   return ( <div className={`message ${status}-message`} >
            
            {status==='info'? <FaInfoCircle />: status==='success'? <FaCheckCircle/>
            : status==='error'?<FaTimesCircle/>: status ==='warning'? <FaExclamationCircle />:''}
            {message}
    </div>);
}

export default Message;