import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  coinbaseWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);
const projectId = process.env.PROJECT_ID || "";

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      facebookWallet({ options: { projectId } }),
      googleWallet({ options: { projectId } }),
      githubWallet({ options: { projectId } }),
      discordWallet({ options: { projectId } }),
      twitterWallet({ options: { projectId } }),
      coinbaseWallet({ chains, appName: "My RainbowKit App" }),
      metaMaskWallet({ chains }),
      trustWallet({ chains }),
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function rainbowWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
