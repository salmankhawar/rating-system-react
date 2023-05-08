import { useState } from 'react'
import Ratings from './components/Ratings'
import ThankYou from './components/ThankYou'

function App() {
  const [isClicked, setClick] = useState(false)
  const ratingOptions = [1, 2, 3, 4, 5]
  function clicked(e) {
    setClick(true)
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
