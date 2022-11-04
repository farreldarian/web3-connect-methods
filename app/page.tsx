import Link from 'next/link'
import { ReactNode } from 'react'

export default function Home() {
  return (
    <div className='w-screen min-h-screen bg-gray-50 grid gap-3'>
      <NavLink href='/web3modal'>Web3 Modal</NavLink>
      <NavLink href='/custom'>Custom</NavLink>
      <NavLink href='/connectkit'>Connectkit</NavLink>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className='py-3 px-6 bg-gray-100 hover:bg-gray-200 text-2xl'
    >
      {children}
    </Link>
  )
}
