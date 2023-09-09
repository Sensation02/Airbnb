import './index.css'

export default function ListItem({ children, imageSrc, title }) {
  return (
    <li className='list-item'>
      {imageSrc && (
        <img
          src={imageSrc}
          alt='icon'
          style={{ height: '1.5rem', width: '1.5rem' }}
        />
      )}
      <div className='list-item__content'>
        {title && <h3 className='list-item__title'>{title}</h3>}
        <div className='list-item__body'>{children}</div>
      </div>
    </li>
  )
}
