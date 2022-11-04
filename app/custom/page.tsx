'use client'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Account from '../../components/Account'
import ConnectButton from './ConnectButton'

const { provider, chains } = configureChains(
  [chain.polygon],
  [publicProvider()]
)

const wagmiClient = createClient({
  connectors: [],
  provider: provider,
})

export default function Page() {
  return (
    <WagmiConfig client={wagmiClient}>
      <div className='w-screen h-screen grid place-items-center'>
        <Account />
        <ConnectButton
          createConnector={async () => {
            const { WalletConnectConnector } = await import(
              'wagmi/connectors/walletConnect'
            )
            return new WalletConnectConnector({
              chains,
              options: { qrcode: false },
            })
          }}
        />
      </div>
    </WagmiConfig>
  )
}
