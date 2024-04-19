import React from 'react'

function Column() {
    const item =  []
    return (
        <React.Fragment>
            {
                item.map ( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Walter White</td>
        </React.Fragment>
    )
}

export default Column
