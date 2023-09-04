import { FC, ReactNode } from 'react'
import cn from 'clsx'
import Link from 'next/link'
// import {IconType} from 'react-icons'
import {BsChevronRight} from 'react-icons/bs'
import styles from './Title.module.scss'

interface ITitle {
  children: ReactNode
  className?: string
  link?: void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: boolean
}

const Title: FC<ITitle> = ({children, className, link, size, icon}) => {
  return (
    <h2 className={cn('text-4xl cursor-pointer', className)}>
      {link ? (
        <Link href={link}>{children}</Link>
      ) : (
        <span className={styles.span}>
          {children}
          {icon && (
            <BsChevronRight size={30}/>
          )}
        </span>
      )}
    </h2>
  )
}

export default Title;
