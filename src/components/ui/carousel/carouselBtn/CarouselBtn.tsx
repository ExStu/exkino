import { ButtonHTMLAttributes, forwardRef } from 'react'
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import cn from 'clsx'
import styles from './CarouselBtn.module.scss'

interface CarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: 'next' | 'prev'
}

export const CarouselBtn = forwardRef<HTMLButtonElement, CarouselButtonProps>(({ className, variant, ...props }, ref) => (
  
  <button disabled={props.disabled} className={cn(
    styles.btn, className
  )} ref={ref} {...props}>
    {variant === 'next' ? (
      <BsChevronRight/>
    ) : (
      <BsChevronLeft/>
    )}
  </button>
));