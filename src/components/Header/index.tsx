import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'


const Header: React.FC = () => {
  return (
     <>
      <DesktopMenu />
      <MobileMenu />
     </>
  )
}

export default Header
