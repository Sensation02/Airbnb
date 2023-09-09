import './index.css'
import Heading from '../heading'

export default function RoomList({ list }) {
  const shutOutList = [...list]

  return (
    <div className='shutout__block'>
      <Heading>Відгуки користувачів</Heading>

      <div className='shutout__list'>
        {shutOutList.map((item) => (
          <div className='shutout__item' key={item.id}>
            <div className='shutout__item--heading'>
              <span className='shutout__item--name'>{item.guestName}</span>
              <span className='shutout__item--rating'>
                Рейтинг: {item.rating}
              </span>
            </div>
            <p className='shutout__item--review'>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
