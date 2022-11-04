'use client'

import {
  ConnectKitButton,
  ConnectKitProvider,
  getDefaultClient,
} from 'connectkit'
import { createClient, WagmiConfig } from 'wagmi'
import Account from '../../components/Account'

const client = createClient(
  getDefaultClient({
    appName: 'Web3 Connect',
  })
)

export default function Page() {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <div className='w-screen min-h-screen grid place-items-center'>
          <Account />
          <ConnectKitButton />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
