import { Connector, useConnect } from 'wagmi'
import Button from '../../components/Button'
import { chains } from './wagmi'

type Props = {
  connectorId: string
  onConnect: (connector: Connector) => Promise<void> | void
}

export default function ConnectButton({ connectorId, onConnect }: Props) {
  const { connectAsync, connectors } = useConnect()

  const connectWallet = async () => {
    const connector = connectors.find((c) => c.id === connectorId)
    if (!connector) throw new Error(`No connector with ID '${connectorId}'`)

    connector.once('message', async ({ type }) => {
      if (type !== 'connecting') return
      await onConnect(connector)
    })
    await connectAsync({ connector, chainId: chains[0].id })
  }

  return <Button onClick={connectWallet}>Connect with MetaMask</Button>
}
