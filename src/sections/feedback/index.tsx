import { useState } from 'react'
import { Separator } from '../../components/separ'
import { API_BASE } from '../../core/api'
import './styles.scss'

export function Feedback() {
  const [expanded, setExpanded] = useState(false)
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedName = name.trim()
    const trimmedCity = city.trim()
    const trimmedPhone = phone.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName) {
      alert('Пожалуйста, укажите имя.')
      return
    }

    if (!trimmedCity) {
      alert('Пожалуйста, укажите город и страну.')
      return
    }

    if (!trimmedPhone) {
      alert('Пожалуйста, укажите телефон.')
      return
    } else {
      const digits = trimmedPhone.replace(/\D/g, '')
      if (digits.length < 7) {
        alert('Пожалуйста, укажите корректный номер телефона (минимум 7 цифр).')
        return
      }
    }

    if (!trimmedMessage) {
      alert('Пожалуйста, опишите, что вас интересует.')
      return
    }
    if (trimmedMessage.length < 10) {
      alert('Сообщение должно быть чуть подробнее (минимум 10 символов).')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`${API_BASE}/feedback/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          city: trimmedCity,
          phone: trimmedPhone,
          email: email.trim(),
          message: trimmedMessage,
        }),
      })

      if (!res.ok) {
        let errorText = 'Не удалось отправь заявку. Попробуйте позже.'

        try {
          const data = await res.json()
          if (data && typeof data == 'object') {
            const firstError = Object.values(data)[0]
            if (typeof firstError === 'string') {
              errorText = firstError
            } else if (Array.isArray(firstError) && firstError[0]) {
              errorText = String(firstError[0])
            }
          }
        } catch {
          /* empty */
        }
        alert(errorText)
        return
      }

      alert('Спасибо! Ваша заявка отправлена.')
      setName('')
      setCity('')
      setPhone('')
      setEmail('')
      setMessage('')
      setExpanded(false)
    } catch (err) {
      console.error(err)
      alert('Не удалось отправь заявку. Попробуйте позже.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section id="feedback" className="section feedback">
        <Separator size="small" />
        <form className="section__body" onSubmit={handleSubmit}>
          <div className="section__body-col">
            <div className="section__content">
              <div className="h4">Напишите нам</div>
              <p>И мы ответим на любые интересующие вас вопросы</p>
            </div>
            {expanded && (
              <div className="feedback__more">
                <div className="feedback__group">
                  <input
                    type="text"
                    placeholder="Имя *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="feedback__input input"
                    required
                  />
                </div>
                <div className="feedback__group">
                  <input
                    type="text"
                    placeholder="Город, страна *"
                    className="feedback__input input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="feedback__group">
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    className="feedback__input input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="feedback__group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="feedback__input input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="section__body-col">
            <div className="feedback__group feedback__more-area">
              <textarea
                value={message}
                placeholder="Что вас интересует? *"
                className="feedback__textarea textarea"
                onFocus={() => setExpanded(true)}
                onClick={() => setExpanded(true)}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            {expanded && (
              <div className="feedback__more">
                <button
                  type="submit"
                  className="feedback__button btn"
                  disabled={submitting}
                >
                  {submitting ? 'Отправляем...' : 'Отправить'}
                </button>
              </div>
            )}
          </div>
        </form>
        <Separator size="small" />
      </section>
    </>
  )
}
