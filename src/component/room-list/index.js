import './index.css'
import Heading from '../heading'
import Item from '../room'
import { Fragment } from 'react'

export default function RoomList({ list }) {
  return (
    <div className='room__block'>
      <Heading border>Room Types</Heading>

      <div className='room__list'>
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
