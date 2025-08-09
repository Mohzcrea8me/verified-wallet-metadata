const params = new URLSearchParams(window.location.search);
const uri = params.get("uri");

console.log("window: ", window);

if (uri?.startsWith("wc")) {
  console.log("using uri: ", uri);
  window.verifiedwallet.request({
    method: "pair_walletconnect_uri",
    params: { uri },
  });
}
