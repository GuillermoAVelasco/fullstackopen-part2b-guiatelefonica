import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const setNewNameTel=(e)=>{
    setNewName(e.target.value)
  }

  const setNewNumberTel=(e)=>{
    setNewNumber(e.target.value)
  }

  const setFindFilterName=(e)=>{
    setFilterName(e.target.value)
  }

  const addPerson=(e)=>{
    e.preventDefault()
    if(persons.find(element=> element.name.trim().toUpperCase()===newName.trim().toUpperCase())){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }

    const newPerson={
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  } //2.6 paso 1

  const personsFind = filterName===''
  ? persons
  : persons.filter(person => person.name.toUpperCase().indexOf(filterName.toUpperCase()) !== -1)
console.log(personsFind)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter show with: <input value={filterName} onChange={setFindFilterName} /></div>
      <h2>Add a New</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={setNewNameTel} /></div>
        <div>number: <input value={newNumber} onChange={setNewNumberTel} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          personsFind.map((reg) => 
            <li key={reg.name}>{reg.name} {reg.number}</li>          
          )
        }
      </ul>
    </div>
  )
}

export default App
