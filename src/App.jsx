
import './App.css'
import ToDo from './Todo'
import Practice from './Practice'
import Actor from './Actor'
import Singer from './Singer'
import Books from './Books';


function App() {
  // const time = 50;
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Alamgir'];

  const singers = [
    {id: 1, name: 'Habib Wahid', age: 55},
    {id: 2, name: 'Hridoy Khan', age: 50},
    {id: 3, name: 'Arefin Rumey', age: 45}
  ]

  const books = [
    {id: 1, BookName: 'Physics', price: 250},
    {id: 2, BookName: 'Biology', price: 300},
    {id: 3, BookName: 'Higher Math', price: 350},
    {id: 4, BookName: 'English', price: 400},
    {id: 5, BookName: 'Bangla', price: 450},
  ]

  return (
    <>
      <h1>React Core Concept</h1>

      {
        books.map(book => <Books key={book.id} book={book}></Books>)
      }

    {
      singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
    }

    {
      // actors.map(actor => <Actor actor={actor}></Actor>)
    }

      {/* <ToDo task="learn-react" isDone={true} time={time}></ToDo>
      <ToDo task="learn-js" isDone={false}></ToDo>
      <ToDo task="take a shower" isDone={false}></ToDo>
      <Practice title="React Start"></Practice>
      <Practice title="React Learning"></Practice>
      <Practice title="React Practicing"></Practice> */}


      
      {/* <Student></Student>
      <Person></Person>
      <Developer name="arif" tech="javascript"></Developer>
      <Developer name="hossain" tech="python"></Developer>
      <Device cat="Smartphone" devName="Samsung" price="30000"></Device>
      <Device cat="Laptop" devName="Apple" price="100000"></Device>
      <Device cat="GPU" devName="G-Force" price="60000"></Device>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Mushfiqur" runs="10000"></Player>
      <Salami name="Eid-Ul-Fitr" amount="1000"></Salami>
      <Salami name="Eid-Ul-Adha" amount="1500"></Salami>
      <Books name="Himu" price="200 Taka"></Books>
      <Books name="Tin Goyenda" price="250 Taka"></Books>
      <Books name="Podda Nodir Majhi" price="300 Taka"></Books> */}
      
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
// const {name, runs} = {name: 'tamim', runs: '5000'}
function Player({name, runs}) {
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Salami({name, amount}) {
  return(
    <div className='student'>
      <p>Salami For: {name}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

// function Books({name, price}){
//   const bookStyle = {
//     border: '5px solid blue',
//     borderRadius: '10px',
//     margin: '20px',
//     textAlign: 'left',
//     padding: '10px',
//   }
//   return(
//     <div style={bookStyle}>
//       <h5>Book Name: {name}</h5>
//       <h5>Book Price: {price}</h5>
//     </div>
//   )
// }


//  const {name, tech} = {name: 'arif', tech: 'javascript'}

export default App
