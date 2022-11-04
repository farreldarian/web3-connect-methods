'use client'

import { WagmiConfig } from 'wagmi'
import Account from '../../components/Account'
import ConnectButton from './ConnectButton'
import { wagmiClient } from './wagmi'

export default function Page() {
  return (
    <WagmiConfig client={wagmiClient}>
      <div className='w-screen h-screen grid place-items-center'>
        <Account />
        <ConnectButton
          connectorId='walletConnect'
          onConnect={async (connector) => {
            const uri = (await connector.getProvider()).connector.uri
            window.open(
              `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`,
              // `metamask://wc?uri=${encodeURIComponent(uri)}`,
              '_self',
              'noreferrer noopener'
            )
          }}
        />
      </div>
    </WagmiConfig>
  )
}
