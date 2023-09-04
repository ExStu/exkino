import { FC, PropsWithChildren, ReactNode } from 'react'
import cn from 'clsx'

interface IContainer {
  children: ReactNode
  className?: string
}

const Container: FC<IContainer> = ({children, className}) => {
  return (
    <div className={cn('px-[96px] mx-auto my-0', className)}>
      {children}
    </div>
  )
}

export default Container;
