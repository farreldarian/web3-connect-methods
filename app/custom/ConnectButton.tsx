import { Connector, useConnect, useNetwork } from 'wagmi'
import Button from '../../components/Button'

type Props = {
  createConnector: () => Promise<Connector>
}

export default function ConnectButton({ createConnector }: Props) {
  const { connect } = useConnect()
  const { chains } = useNetwork()

  const connectWallet = async () => {
    const connector = await createConnector()

    const getUri = async () =>
      new Promise<void>((resolve) =>
        connector.once('message', async ({ type }) => {
          if (type !== 'connecting') return

          const uri = (await connector.getProvider()).connector.uri
          window.open(
            // `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`,
            `metamask://wc?uri=${encodeURIComponent(uri)}`,
            '_self',
            'noreferrer noopener'
          )
          resolve()
        })
      )

    await Promise.all([connect({ connector, chainId: chains[0].id }), getUri()])
  }

  return <Button onClick={connectWallet}>Connect with MetaMask</Button>
}
