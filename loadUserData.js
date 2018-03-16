const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

function startApp(web3) {
  // const eth = new Eth(web3.currentProvider)
  // const contract = new EthContract(eth)
  // initContract(contract)

  console.log(web3.eth) // shows a lot of the calls you could make with data relevant to metamask logged in user
  console.log(web3.eth.accounts)
  console.log(web3.eth.coinbase)
  var account = web3.eth.accounts[0];
  //TODO code here to 
}

window.addEventListener('load', function() {
  // Check if Web3 has been injected by the browser:
  if (typeof web3 !== 'undefined') {
    // You have a web3 browser! Continue below!
    startApp(web3);
  } else {
  	console.log("PLZ INSTALL METAMASK")
     // Warn the user that they need to get a web3 browser
     // Or install MetaMask, maybe with a nice graphic.
  }

})