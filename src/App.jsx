
import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concept</h1>
      <Student></Student>
      <Person></Person>
      <Developer name="arif" tech="javascript"></Developer>
      <Developer name="hossain" tech="python"></Developer>
      <Device cat="Smartphone" devName="Samsung" price="30000"></Device>
      <Device cat="Laptop" devName="Apple" price="100000"></Device>
      <Device cat="GPU" devName="G-Force" price="60000"></Device>
    </>
  )
}

function Student() {
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Department:</p>
    </div>
  )
}

function Person() {
  const name = 'Arif Hossain'
  const age = 28
  const location = 'Dhaka'
  const personStyle = {
    color: 'red'
  }
  return(
    <div style={personStyle}>
      <h1>My name is {name}</h1>
      <p>I am {age} years old</p>
      <p>I am from {location}</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '10px',

    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


function Device(device) {
  console.log(device);
  
  const deviceStyle = {
    fontSize: '20px',
    border: '2px solid red',
    padding: '10px',
    margin: '30px',
    borderRadius: '10px'

  }
  return(
    <div style={deviceStyle}>
      <h3>Category: {device.cat}</h3>
      <h4>Device Name: {device.devName}</h4>
      <h4>Device Price: {device.price}</h4>
    </div>
  )
}

export default App
