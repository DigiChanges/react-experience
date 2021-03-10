import React from 'react'
import cn from 'classnames'

type Props = {
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

const IconBurger = ({ className, onClick }: Props) => (
  <svg
    onClick={onClick}
    className={cn(['inline m-5', className])}
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M1,2 L15,2 C15.5522847,2 16,1.55228475 16,1 C16,0.44771525 15.5522847,0 15,0 L1,0 C0.44771525,0 0,0.44771525 0,1 C0,1.55228475 0.44771525,2 1,2 Z M15,5 L1,5 C0.44771525,5 0,5.44771525 0,6 C0,6.55228475 0.44771525,7 1,7 L15,7 C15.5522847,7 16,6.55228475 16,6 C16,5.44771525 15.5522847,5 15,5 Z M15,10 L1,10 C0.44771525,10 0,10.4477153 0,11 C0,11.5522847 0.44771525,12 1,12 L15,12 C15.5522847,12 16,11.5522847 16,11 C16,10.4477153 15.5522847,10 15,10 Z"
    />
  </svg>
)
export default IconBurger
