"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
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

const projectId =
  process.env.PROJECT_ID || "70a6503f-8a3e-4629-b064-101adb3e7949";

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      facebookWallet({ options: { projectId } }),
      googleWallet({ options: { projectId } }),
      githubWallet({ options: { projectId } }),
      discordWallet({ options: { projectId } }),
      twitterWallet({ options: { projectId } }),
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function RainbowWrapper({
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
