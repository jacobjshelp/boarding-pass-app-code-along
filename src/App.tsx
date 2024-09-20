import { useState } from 'react'
import Header from './components/Header'
import './styles/App.css'

function App() {
  const [boardingPassIndex, setboardingPassIndex] = useState(0)

  const showNextBoardingPass = () => {
    setboardingPassIndex(boardingPassIndex + 1)
  }

  return (
    <div id="container">
      <Header showNextBoardingPass={showNextBoardingPass} />
      <div id="mainSection">mainSection</div>
      <div id="footer">footer</div>
    </div>
  )
}

export default App
