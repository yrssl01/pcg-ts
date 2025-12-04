import { useEffect, useState } from 'react'
import './styles.scss'
import { GridLines } from '../grid'
import { Header } from '../../sections/header/header'
import { Separator } from '../separ'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export default function Menu() {
  const history = useLocation()
  const [location, setLocation] = useState<
    | 'main'
    | 'about'
    | 'metrics'
    | 'services'
    | 'projects'
    | 'partners'
    | 'licenses'
    | 'contacts'
  >()

  useEffect(() => {
    if (history.pathname.includes('about')) {
      setLocation('about')
      return
    }
    if (history.pathname.includes('metrics')) {
      setLocation('metrics')
      return
    }
    if (history.pathname.includes('services')) {
      setLocation('services')
      return
    }
    if (history.pathname.includes('projects')) {
      setLocation('projects')
      return
    }
    if (history.pathname.includes('partners')) {
      setLocation('partners')
      return
    }
    if (history.pathname.includes('licenses')) {
      setLocation('licenses')
      return
    }
    if (history.pathname.includes('contacts')) {
      setLocation('contacts')
      return
    }
    setLocation('main')
  }, [history])

  const [isFixed, setIsFixed] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 80

      if (window.scrollY > threshold) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div id="menu" className={`${isFixed ? 'fixed' : 'default'}`}>
        <button className="menu-open" type="button" onClick={toggleMenu}>
          <div className="menu-open__text">Меню</div>
          <div className="menu-open__icon">
            <div className="menu-open__icon-top"></div>
            <div className="menu-open__icon-center"></div>
            <div className="menu-open__icon-bottom"></div>
          </div>
        </button>
        <div className={`menu ${openMenu ? 'opened' : ''}`}>
          <GridLines />
          <Header />
          <Separator border="bottom" />
          <div className="menu__body">
            <ul className="menu__list">
              <li className="menu__list-point">
                <Link
                  to="/"
                  className={clsx('menu__list-link', {
                    active: location === 'main',
                  })}
                  onClick={toggleMenu}
                >
                  Главная
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="/about"
                  className={clsx('menu__list-link', {
                    active: location === 'about',
                  })}
                  onClick={toggleMenu}
                >
                  О нас
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="/metrics"
                  className={clsx('menu__list-link', {
                    active: location === 'metrics',
                  })}
                  onClick={toggleMenu}
                >
                  Наша статистика
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="/services"
                  className={clsx('menu__list-link', {
                    active: location === 'services',
                  })}
                  onClick={toggleMenu}
                >
                  Что мы предоставляем
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="/projects"
                  className={clsx('menu__list-link', {
                    active: location === 'projects',
                  })}
                  onClick={toggleMenu}
                >
                  Проекты
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="/partners"
                  className={clsx('menu__list-link', {
                    active: location === 'partners',
                  })}
                  onClick={toggleMenu}
                >
                  Клиенты и партнеры
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="/licenses"
                  className={clsx('menu__list-link', {
                    active: location === 'licenses',
                  })}
                  onClick={toggleMenu}
                >
                  Разрешения
                </Link>
              </li>
              <li className="menu__list-point">
                <Link
                  to="contacts"
                  className={clsx('menu__list-link', {
                    active: location === 'contacts',
                  })}
                  onClick={toggleMenu}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          className={`menu-close ${openMenu ? 'active' : ''}`}
          type="button"
          onClick={closeMenu}
        ></button>
      </div>
    </>
  )
}
