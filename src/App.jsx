import { useState } from 'react'
import WeatherApp from './components/WeatherApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App
