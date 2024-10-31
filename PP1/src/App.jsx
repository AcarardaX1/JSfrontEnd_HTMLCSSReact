import { useState } from 'react'
import './App.css'
import Header from './Compontents/Header.jsx'
import { items } from './data.jsx'
import { materials } from './Compontents/materials.jsx'
import './css/Header.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className='material-main'>

        {

          items?.map((items) => (

            <Materials key={items.id} items={items} />


          ))

        }
      </div>

    </div>
  )
}

export default App
