import { Link } from 'react-router-dom'
import { Separator } from '../../components/separ'

export function PageNotFound() {
  return (
    <>
      <Separator size="small" border="top" />
      <div className="section__body">
        <div className="section__body-col">
          <div className="section__header" data-scroll="title">
            <div className="section__header-title">
              <strong>404</strong> ошибка
            </div>
            <div className="section__header-subtitle">
              Что-то пошло не так :(
            </div>
          </div>
        </div>
        <div className="section__body-col">
          <div className="section__content">
            <h1>Страница не найдена</h1>
            <p>
              Страница, на которую Вы зашли, не существует.
              <br />
              Но у нас есть много другого, что Вас может заинтересовать.
            </p>
          </div>
          <div className="section__buttons">
            <Link to="/" className="button">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
      <Separator size="small" border="bottom" />
    </>
  )
}
