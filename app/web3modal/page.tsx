'use client'

import { Web3Button, Web3Modal } from '@web3modal/react'

const config = {
  projectId: 'bcee42fc8ff0364d04d945db8fc5c832',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal',
  },
} as const

export default function page() {
  return (
    <>
      {/* <Button>Connect with MetaMask</Button> */}
      <Web3Button />
      <Web3Modal config={config} />
    </>
  )
}
