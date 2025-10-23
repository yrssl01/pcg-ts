import { useNavigate } from 'react-router-dom'
import logo from './pcg-logo.svg'

export function Logo() {
  //   const navigate = useNavigate()

  return (
    <img
      src={logo}
      alt="logo"
      className="logo pointer"
      draggable={false}
      //   onClick={() => navigate('/')}
    />
  )
}
