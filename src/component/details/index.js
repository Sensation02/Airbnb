import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'
import guestsImg from './guests.svg'
import bedroomsImg from './bedrooms.svg'
import bedsImg from './beds.svg'
import bathroomsImg from './bathrooms.svg'

export default function Details({ details }) {
  return (
    <Box shadow>
      <Heading border>Деталі</Heading>
      <List details={{ ...details }} />
    </Box>
  )
}

const List = ({ details }) => {
  return (
    <ul className='details__list'>
      <ListItem imageSrc={guestsImg}>
        <span className='details__item__value'>{details.guests}</span>
        <span className='details__item__label'>Гостей</span>
      </ListItem>
      <ListItem imageSrc={bedroomsImg}>
        <span className='details__item__value'>{details.bedrooms}</span>
        {details.bedrooms === 1 ? (
          <span className='details__item__label'>Спальня</span>
        ) : details.bedrooms > 1 && details.bedrooms < 5 ? (
          <span className='details__item__label'>Спальні</span>
        ) : (
          <span className='details__item__label'>Спалень</span>
        )}
      </ListItem>
      <ListItem imageSrc={bedsImg}>
        <span className='details__item__value'>{details.beds}</span>
        {details.beds === 1 ? (
          <span className='details__item__label'>Ліжко</span>
        ) : (
          <span className='details__item__label'>Ліжка</span>
        )}
      </ListItem>
      <ListItem imageSrc={bathroomsImg}>
        <span className='details__item__value'>{details.baths}</span>
        <span className='details__item__label'>
          {details.baths === 1
            ? 'Ванна кімната'
            : details.baths > 1 && details.baths < 5
            ? 'Ванні кімнати'
            : 'Ванних кімнат'}
        </span>
      </ListItem>
    </ul>
  )
}
