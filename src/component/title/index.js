import './index.css'

export default function Title({
  title,
  rating,
  reviews,
  city,
  country,
  superhost,
}) {
  return (
    <div className='title'>
      <h1 className='title__text'>{title}</h1>

      <div className='title__sub-block'>
        <span className='title__sub-value'>{rating} рейтинг</span>
        <span className='title__sub-value'>{reviews} відгуків</span>
        <span className='title__sub-value'>
          {city}, {country}
        </span>

        {superhost && <span className='title__sub-value'>Superhost</span>}
      </div>
    </div>
  )
}
