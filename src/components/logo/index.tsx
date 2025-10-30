// import { useNavigate } from 'react-router-dom'
import logo from './pcg-logo.svg'
import './styles.scss'

export function Logo({ className = '' }) {
  //   const navigate = useNavigate()

  return (
    <img
      src={logo}
      alt="logo"
      className={`logo pointer ${className}`}
      draggable={false}
      //   onClick={() => navigate('/')}
    />
  )
}
