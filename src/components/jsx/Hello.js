import React from 'react'

const Hello = () => {
    {/* JSX version of Hello component */}
    // return (
    //     <div id='hello' className='dummyClass'>
    //         <h1>Sample use of JSX and without JSX</h1>
    //     </div>
    // )
    {/* without using JSX of Hello component */}
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Sample use of JSX and without JSX'));

}

export default Hello;