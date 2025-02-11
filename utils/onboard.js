import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import fortmaticModule from '@web3-onboard/fortmatic'

import ApeIcon from '../Ape'

const RPC_URL = 'https://crab-rpc.darwinia.network'

const fortmatic = fortmaticModule({
  apiKey: process.env.NEXT_PUBLIC_FORTMATIC_KEY
})

const injected = injectedModule()
const walletConnect = walletConnectModule()
const coinbaseWallet = coinbaseModule()

const initOnboard = init({
  wallets: [walletConnect, coinbaseWallet, injected, fortmatic],
  chains: [
     {
       id: '0x1',
       token: 'ETH',
       label: 'Ethereum Mainnet',
       rpcUrl: 'https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
     },
    // {
    //   id: '0x3',
    //   token: 'tROP',
    //   label: 'Ethereum Ropsten Testnet',
    //   rpcUrl: 'https://ropsten.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    // },
   // {
 //     id: '0x44',
   //   token: 'CRAB',
 //     label: 'Crab EVM',
 //     rpcUrl: 'https://crab-rpc.darwinia.network'
//    }
    // {
    //   id: '0x89',
    //   token: 'MATIC',
    //   label: 'Matic Mainnet',
    //   rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    // }
  ],
  appMetadata: {
    name: 'Ringo Bingo',
    icon: ApeIcon,
    description: 'Ringo was his name-o',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    },
    gettingStartedGuide: 'https://blocknative.com',
    explore: 'https://blocknative.com'
  }
})

export { initOnboard }
