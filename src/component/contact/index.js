import './index.css'
import Heading from '../heading'

export default function Contact({ contact }) {
  return (
    <div className='contact'>
      <div className='contact__info'>
        <div className='contact__info__avatar'>
          <image src={contact.image} alt={contact.name} />
        </div>

        <div className='contact__info__name'>
          <Heading>Господар - {contact.name}</Heading>
          <ul className='contact__info__list'>
            <p className='contact__info__text'>{contact.phone}</p>
            <p className='contact__info__text'>{contact.response_rate}</p>
            <p className='contact__info__text'>{contact.response_time}</p>
          </ul>
        </div>
      </div>
      <p className='contact__description'>{contact.info}</p>
    </div>
  )
}
