import React from "react";

const Hello = () => {
    // return (
    //     <div className= 'dummyClass'>
    //         <h1> Alohomora </h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         {id : 'hello', className : 'dummyClass'},
         React.createElement('h1', null, 'Alohomora'))
}
export default Hello