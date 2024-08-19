import {useEffect, useRef} from 'react'
import './Dashboard.css'

const Dashboard = () => {
  const cubeRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const rotation = scrollTop * 0.1 // Adjust rotation speed
      cubeRef.current.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="dashboard">
      <div className="scroll-container">
        <h1>Welcome to the 3D Animated Dashboard</h1>
        <p>Scroll down to see the 3D cube animation in action.</p>
        <div className="cube" ref={cubeRef}>
          <div className="face front">Front</div>
          <div className="face back">Back</div>
          <div className="face left">Left</div>
          <div className="face right">Right</div>
          <div className="face top">Top</div>
          <div className="face bottom">Bottom</div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  )
}

export default Dashboard
