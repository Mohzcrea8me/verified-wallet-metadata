# Vault Wallet - Metadata Site

This is a minimal static site used to represent **Verified Wallet**, a browser wallet extension, for use with [WalletConnect](https://walletconnect.com).

### 🌐 Live URL

Hosted at: [verified-wallet-site](https://mohzcrea8me.github.io/verified-wallet-metadata/)

---

## 🔧 Purpose

This site serves the following purposes:

- Provides branding (name, icon, and description) for WalletConnect dApps.
- Hosts a public wallet icon accessible via URL.
- Offers users a simple landing page with installation and video instructions.

---

## 🧩 Used In

### WalletConnect Metadata

This site is referenced in the WalletConnect initialization config:

```ts
metadata: {
  name: "Verified Wallet Extension",
  description: "Browser extension for the Verified Wallet.",
  url: "https://mohzcrea8me.github.io/verified-wallet-metadata",
  icons: ["https://raw.githubusercontent.com/mohzcrea8me/verified-wallet-metadata/main/logo.png"]
}

