import { Icon } from 'react-feather'
import styles from './Button.module.scss'

interface ButtonLinkProps {
  text: string
  link: string
  icon?: Icon
}

export function ButtonLink ({ text, link, icon: Icon }: ButtonLinkProps) {
  return <a className={styles['button-link']} href={link} target='_blank' rel='noreferrer'>
    <span>{text}</span>
    {Icon && <Icon size={16}/>}
  </a>
}

interface ButtonProps {
  text: string
  onClick: () => void
  size?: 'default' | 'large'
  color: 'primary' | 'secondary'
  icon?: Icon
}

export function Button ({ text, onClick, size = 'default', color, icon: Icon }: ButtonProps) {
  return <div className={styles.button} data-color={color} data-size={size} onClick={onClick}>
    <span>{text}</span>
    {Icon && <Icon size={size === 'default' ? 16 : 20}/>}
  </div>
}
