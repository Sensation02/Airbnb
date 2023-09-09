import './index.css'
import Box from '../box'
import ListItem from '../list-item'

export default function Price({
  price,
  discount,
  currency,
  cleaningFee,
  serviceFee,
  checkIn,
  checkOut,
}) {
  return (
    <Box className='price'>
      <div className='price__header'>
        <span
          className={`price__value ${
            discount ? 'price__value--discounted' : ''
          }`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>

      <List {...{ currency, cleaningFee, serviceFee, checkIn, checkOut }} />
    </Box>
  )
}

function List({ currency, cleaningFee, serviceFee, checkIn, checkOut }) {
  return (
    <ul className='price__list'>
      <ListItem>
        <span className='price__item__label'>Cleaning fee: </span>
        <span className='price__item__value'>
          {currency}
          {cleaningFee}
        </span>
      </ListItem>
      <ListItem>
        <span className='price__item__label'>Service fee: </span>
        <span className='price__item__value'>
          {currency}
          {serviceFee}
        </span>
      </ListItem>
      <ListItem>
        <span className='price__item__label'>Total: </span>
        <span className='price__item__value'>
          {currency}
          {cleaningFee + serviceFee}
        </span>
      </ListItem>
      <ListItem>
        <span className='price__item__label'>Check-in: </span>
        <span className='price__item__value'>{checkIn}</span>
      </ListItem>
      <ListItem>
        <span className='price__item__label'>Check-out: </span>
        <span className='price__item__value'>{checkOut}</span>
      </ListItem>
    </ul>
  )
}
