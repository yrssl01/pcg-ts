import { useEffect, useState } from 'react'
import './styles.scss'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export function Navigation() {
  const history = useLocation()
  const [location, setLocation] = useState<'main' | 'services' | 'projects'>()

  useEffect(() => {
    if (history.pathname.includes('services')) {
      setLocation('services')
      return
    }
    if (history.pathname.includes('projects')) {
      setLocation('projects')
      return
    }
    setLocation('main')
  }, [history])

  return (
    <div className="navigation">
      <Link
        to="/"
        className={clsx('navigation-item', { active: location === 'main' })}
      >
        <span className="pcg pcg-home font-24"></span>
        <div className="name">Главная</div>
      </Link>
      <Link
        to="/services/"
        className={clsx('navigation-item', { active: location === 'services' })}
      >
        <span className="pcg pcg-services font-24"></span>
        <div className="name">Услуги</div>
      </Link>
      <Link
        to="/projects/"
        className={clsx('navigation-item', { active: location === 'projects' })}
      >
        <span className="pcg pcg-projects font-24"></span>
        <div className="name">Проекты</div>
      </Link>
    </div>
  )
}
