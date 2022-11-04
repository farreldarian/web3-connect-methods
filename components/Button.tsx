import { ButtonHTMLAttributes } from 'react'

export default function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className='text-2xl py-3 px-6 bg-gray-100 shadow rounded-md hover:bg-gray-200'
      {...rest}
    >
      {children}
    </button>
  )
}
