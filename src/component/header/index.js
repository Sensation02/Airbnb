import './index.css'
import logo from './airbnb.svg'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' height={32} />
    </div>
  )
}
