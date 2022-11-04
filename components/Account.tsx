'use-client'

import { useAccount } from 'wagmi'

export default function Account() {
  const { address } = useAccount()
  if (address == null) return <></>
  return (
    <div>
      <p>Connected to</p>
      <p>{address}</p>
    </div>
  )
}
