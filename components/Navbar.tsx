import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'
import { menuItems } from './menuItems'

export function Navbar() {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({ text, href }) => (
          <ActiveLink key={text} text={text} href={href} />
        ))
      }
    </nav>
  )
}
