import { EthTokenIcon, DaiTokenIcon, UniTokenIcon } from "./icons"
import { TokenBalance } from "./WalletHome/interfaces"

export const SIMULATOR_ID = "sim"

export const CREATE_ACCOUNT = "create-account"
export const SEND_RECEIVE = "send-receive"
export const CONNECT_WEB3 = "connect-web3"

export const PATH_IDS = [CREATE_ACCOUNT, SEND_RECEIVE, CONNECT_WEB3] as const
export const FAKE_DEMO_ADDRESS = "0xfa4e...de30"
export const PATH_ID_QUERY_PARAM = "sim"

// Pulse animation type names
export const CIRCLE = "circle"
export const FULL_BUTTON = "full-button"
export const NARROW_BUTTON = "narrow-button"

export const defaultTokenBalances: Array<TokenBalance> = [
  {
    name: "Ether",
    ticker: "ETH",
    amount: 0,
    usdConversion: 1,
    Icon: EthTokenIcon,
  },
  {
    name: "DAI",
    ticker: "DAI",
    amount: 0,
    usdConversion: 1,
    Icon: DaiTokenIcon,
  },
  {
    name: "Uniswap",
    ticker: "UNI",
    amount: 0,
    usdConversion: 1,
    Icon: UniTokenIcon,
  },
]
