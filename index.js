const params = new URLSearchParams(window.location.search);
const uri = params.get("uri");

if (uri?.startsWith("wc") && window.verifiedwallet?.request) {
  window.verifiedwallet.request({
    method: "pair_walletconnect_uri",
    params: { uri },
  });
}
