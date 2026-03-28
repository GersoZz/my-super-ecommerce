import { useEffect, useState } from 'react'
import './PromoBanner.css'

function PromoBanner({ onClose, totalSeconds = 5 }) {
  const [visible, setVisible] = useState(true)
  const [seconds, setSeconds] = useState(totalSeconds)

  useEffect(() => {
    if (visible === false) return

    const interval = setInterval(() => {
      console.log('Hacer algo')
      setSeconds((actualSeconds) => actualSeconds - 1)
    }, 1000)

    // cleanup function
    return () => clearInterval(interval)
  }, [visible])

  useEffect(() => {
    if (seconds === 0) setVisible(false)
  }, [seconds])

  if (visible === false) return

  return (
    <div className="promo-banner">
      <span>Promotion available for {seconds} seconds</span>
      <button
        className="promo-close"
        onClick={onClose}
      >
        X
      </button>
    </div>
  )
}

export default PromoBanner
