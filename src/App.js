import { useState } from 'react'
import Ratings from './components/Ratings'
import ThankYou from './components/ThankYou'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

function App() {
  const [isClicked, setClick] = useState(false)
  const ratingOptions = [1, 2, 3, 4, 5]
  const clicked = async (e, value) => {
    setClick(true)
    await axios.post(`${API_URL}/results`, {
      resultNumber: value,
    })
  }
  return (
    <div className="layout">
      {isClicked == false ? (
        <Ratings clicked={clicked} ratingOptions={ratingOptions} />
      ) : (
        <ThankYou />
      )}
    </div>
  )
}

export default App
