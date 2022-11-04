import { chain, configureChains, createClient } from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'

export const { provider, chains } = configureChains(
  [chain.polygon],
  [publicProvider()]
)

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: { qrcode: false },
})

export const wagmiClient = createClient({
  connectors: [walletConnectConnector],
  provider: provider,
})
