import React from 'react'
import Person from './Person'


function NameList() {
    const name = ['Walt', 'Jesse', 'Saul', 'Mike']
    const person = [
        {
            id: 1,
            name: 'Walt',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Jesse',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Saul',
            age: 28,
            skill: 'Vue'
        },
        {
            id: 4,
            name: 'Mike',
            age: 32,
            skill: 'Laravel'
        }
    ]
    const personList = person.map(person => (
        <Person key={person.id} person={person}></Person>
    ))
    return <div>{personList}</div>
}

export default NameList