import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import './App.css'
import BarLoader from "react-spinners/BarLoader";
import WeatherApp from './components/WeatherApp';

function App() {
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading()
  //   }, 2000)
  // }, [])

  return (
    <div className="App">
      {/* {loading ?
        (<BarLoader
          color={'#57C075'}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader" />)
        :
        (
          <WeatherApp />
        )

      } */}

      <WeatherApp />

    </div>
  )
}

export default App
