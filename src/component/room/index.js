import './index.css'

export default function Room({
  type,
  pricePerNight: price,
  currency,
  capacity,
}) {
  return (
    <div className='room__item'>
      <div className='room__item__type'>{type}</div>
      <div className='room__item__capacity'>{capacity} guests</div>
      <div className='room__item__price'>
        {currency}
        {price}
      </div>
    </div>
  )
}
