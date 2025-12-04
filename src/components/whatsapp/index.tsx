import icon from './whatsapp-icon.svg'
import './styles.scss'

const WHATSAPP_PHONE = '77273111105'
const DEFAULT_MESSAGE =
  'Здравствуйте! Я пишу вам насчет проекта с сайта Project Construction Group!'

export function Whatsapp() {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`

  return (
    <>
      <a
        href={url}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
      >
        <img src={icon} alt="" className="whatsapp-button__icon" />
      </a>
    </>
  )
}
