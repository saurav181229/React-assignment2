import React from 'react';

const ValidationCompoent = (props)=>{
   let validtionMessage = 'text long enough'
   if(props.length<=5){
       validtionMessage = 'text too short'
   }
    
        return(
            <div>
                {validtionMessage}
            </div>
        )

};
export default ValidationCompoent;