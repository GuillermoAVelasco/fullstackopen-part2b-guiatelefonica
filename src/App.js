import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const setNewNameTel=(e)=>{
    setNewName(e.target.value)
  }

  const addPerson=(e)=>{
    e.preventDefault()
    if(persons.find(element=> element.name===newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    const newPerson={
      name:newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  } //2.6 paso 1

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={setNewNameTel} />
          debug:{newName}
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map((reg) => 
            <li key={reg.name}>{reg.name}</li>          
          )
        }
      </ul>
    </div>
  )
}

export default App
