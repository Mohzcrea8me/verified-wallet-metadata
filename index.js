const params = new URLSearchParams(window.location.search);
const uri = params.get("uri");

console.log("vw: ", window.verifiedwallet);

if (uri?.startsWith("wc") && window.verifiedwallet?.request) {
  console.log("using uri: ", uri);
  window.verifiedwallet.request({
    method: "pair_walletconnect_uri",
    params: { uri },
  });
}
