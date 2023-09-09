import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'

export default function Additions({ additions }) {
  const language = additions.host_languages.join(', ')
  const additionsList = [
    {
      title: 'Правила помешкання',
      description: additions.house_rules,
    },
    {
      title: 'Політика скасування',
      description: additions.cancellation_policy,
    },
    {
      title: 'Місцевий транспорт',
      description: additions.local_transportation,
    },
    {
      title: 'Мови хоста',
      description: language,
    },
    {
      title: 'Спеціальні пропозиції',
      description: additions.special_offers,
    },
    {
      title: 'Інструкції щодо реєстрації',
      description: additions.checkin_instructions,
    },
  ]

  return (
    <Box shadow>
      <Heading border>Додаткові можливості</Heading>
      <u className='additions'>
        {additionsList.map((addition) => {
          return (
            <ListItem title={addition.title}>{addition.description}</ListItem>
          )
        })}
      </u>
    </Box>
  )
}
