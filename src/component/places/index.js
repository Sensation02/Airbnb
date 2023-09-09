import './index.css'
import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

export default function Places({ list }) {
  const placesList = [...list]
  return (
    <Box shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      {placesList.map((item) => (
        <ListItem key={item.id}>
          <a href={item.link}>{item.name}</a>
        </ListItem>
      ))}
    </Box>
  )
}
