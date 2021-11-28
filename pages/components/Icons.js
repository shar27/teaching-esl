import React from 'react'
import {Grid} from '@material-ui/core';
import {BiTime } from 'react-icons/BI';
import {FcMultipleDevices} from 'react-icons/Fc'
import {MdGppGood} from 'react-icons/Md'

function Icons() {
    return (
    <div className="d-flex justify-content-evenly col-sm-12 col-md-12">
   
<FcMultipleDevices
   size={96}

   />
   

<BiTime
   size={96}

   />

<MdGppGood 
    size={96}
/>




    
        
        </div>
    )
}

export default Icons
