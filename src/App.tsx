import hotelRooms from '../data.json'

function App() {
  return (
    <div>
      <h1>React Developer Coding Challenge</h1>
      <p>Below you can see the data which you will find at ../data.json</p>
      <pre>{JSON.stringify(hotelRooms, null, 2)}</pre>
    </div>
  )
}

export default App
