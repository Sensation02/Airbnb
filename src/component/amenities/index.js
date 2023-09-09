import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'
import Pool from './pool.svg'
import Gym from './gym.svg'
import FreeBreakfast from './breakfast.svg'
import FreeWifi from './wifi.svg'
import Parking from './parking.svg'
import Pets from './pets.svg'
import Service from './service.svg'
import Security from './security.svg'
import Child from './child.svg'
import Shuttle from './shuttle.svg'

export default function Amenities({ amenities }) {
  return (
    <Box shadow>
      <Heading border>Зручності</Heading>
      <List amenities={{ ...amenities }} />
    </Box>
  )
}
const List = ({ amenities }) => {
  const amenitiesList = [
    {
      name: 'Басейн',
      icon: Pool,
      condition: amenities.hasPool,
    },
    {
      name: 'Спортзал',
      icon: Gym,
      condition: amenities.hasGym,
    },
    {
      name: 'Безкоштовний сніданок',
      icon: FreeBreakfast,
      condition: amenities.hasFreeBreakfast,
    },
    {
      name: 'Безкоштовний Wi-Fi',
      icon: FreeWifi,
      condition: amenities.hasFreeWifi,
    },
    {
      name: 'Безкоштовна парковка',
      icon: Parking,
      condition: amenities.hasParking,
    },
    {
      name: 'Дозволено тварин',
      icon: Pets,
      condition: amenities.hasPetsAllowed,
    },
    {
      name: 'Обслуговування номерів',
      icon: Service,
      condition: amenities.hasRoomService,
    },
    {
      name: 'Охорона',
      icon: Security,
      condition: amenities.hasConciergeService,
    },
    {
      name: 'Дитячий клуб',
      icon: Child,
      condition: amenities.hasChildFriendly,
    },

    {
      name: 'Трансфер в аеропорт',
      icon: Shuttle,
      condition: amenities.hasAirportShuttle,
    },
  ]
  return (
    <ul className='amenities'>
      {amenitiesList.map((amenity) => {
        if (amenity.condition) {
          return <ListItem imageSrc={amenity.icon}>{amenity.name}</ListItem>
        } else {
          return null
        }
      })}
    </ul>
  )
}
