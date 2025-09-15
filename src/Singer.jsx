import './App.css'

export default function Singer({singer}) {
    
    return <div className='singer'>
        <h4>ID: {singer.id}</h4>
        <h2>Name: {singer.name}</h2>
        <h4>Age:{singer.age}</h4>
        
    </div>
}