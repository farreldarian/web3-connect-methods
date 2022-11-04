'use client'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'
import Account from '../../components/Account'
import ConnectButton from './ConnectButton'

const { provider, chains } = configureChains(
  [chain.polygon],
  [publicProvider()]
)

const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: { qrcode: false },
})

const wagmiClient = createClient({
  connectors: [walletConnectConnector],
  provider: provider,
})

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
