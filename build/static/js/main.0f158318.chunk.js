(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{32:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b506200005d6040518060400160405280601681526020017f5768697370657220536d61727420636f6e7472616374000000000000000000008152506200006360201b620003aa1760201c565b620001ed565b62000103816040516024016200007a9190620001c9565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200010660201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200016b5780820151818401526020810190506200014e565b60008484015250505050565b6000601f19601f8301169050919050565b600062000195826200012f565b620001a181856200013a565b9350620001b38185602086016200014b565b620001be8162000177565b840191505092915050565b60006020820190508181036000830152620001e5818462000188565b905092915050565b610e0080620001fd6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906106fe565b61009e565b005b61006a61020e565b6040516100779190610760565b60405180910390f35b610088610259565b604051610095919061095c565b60405180910390f35b60016000808282546100b091906109ad565b92505081905550600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161016f9190610bed565b506040820151816002015550506101bb6040518060400160405280601b81526020017f25732077686973706572656420772f206d65737361676520257321000000000081525033610443565b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610203929190610d09565b60405180910390a250565b60006102516040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546104df565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156103a157838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461030690610a10565b80601f016020809104026020016040519081016040528092919081815260200182805461033290610a10565b801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b505050505081526020016002820154815250508152602001906001019061027d565b50505050905090565b610440816040516024016103be9190610d39565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061057b565b50565b6104db8282604051602401610459929190610d6a565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061057b565b5050565b61057782826040516024016104f5929190610d9a565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061057b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61060b826105c2565b810181811067ffffffffffffffff8211171561062a576106296105d3565b5b80604052505050565b600061063d6105a4565b90506106498282610602565b919050565b600067ffffffffffffffff821115610669576106686105d3565b5b610672826105c2565b9050602081019050919050565b82818337600083830152505050565b60006106a161069c8461064e565b610633565b9050828152602081018484840111156106bd576106bc6105bd565b5b6106c884828561067f565b509392505050565b600082601f8301126106e5576106e46105b8565b5b81356106f584826020860161068e565b91505092915050565b600060208284031215610714576107136105ae565b5b600082013567ffffffffffffffff811115610732576107316105b3565b5b61073e848285016106d0565b91505092915050565b6000819050919050565b61075a81610747565b82525050565b60006020820190506107756000830184610751565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107d2826107a7565b9050919050565b6107e2816107c7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610822578082015181840152602081019050610807565b60008484015250505050565b6000610839826107e8565b61084381856107f3565b9350610853818560208601610804565b61085c816105c2565b840191505092915050565b61087081610747565b82525050565b600060608301600083015161088e60008601826107d9565b50602083015184820360208601526108a6828261082e565b91505060408301516108bb6040860182610867565b508091505092915050565b60006108d28383610876565b905092915050565b6000602082019050919050565b60006108f28261077b565b6108fc8185610786565b93508360208202850161090e85610797565b8060005b8581101561094a578484038952815161092b85826108c6565b9450610936836108da565b925060208a01995050600181019050610912565b50829750879550505050505092915050565b6000602082019050818103600083015261097681846108e7565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109b882610747565b91506109c383610747565b92508282019050808211156109db576109da61097e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a2857607f821691505b602082108103610a3b57610a3a6109e1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610aa37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a66565b610aad8683610a66565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610aea610ae5610ae084610747565b610ac5565b610747565b9050919050565b6000819050919050565b610b0483610acf565b610b18610b1082610af1565b848454610a73565b825550505050565b600090565b610b2d610b20565b610b38818484610afb565b505050565b5b81811015610b5c57610b51600082610b25565b600181019050610b3e565b5050565b601f821115610ba157610b7281610a41565b610b7b84610a56565b81016020851015610b8a578190505b610b9e610b9685610a56565b830182610b3d565b50505b505050565b600082821c905092915050565b6000610bc460001984600802610ba6565b1980831691505092915050565b6000610bdd8383610bb3565b9150826002028217905092915050565b610bf6826107e8565b67ffffffffffffffff811115610c0f57610c0e6105d3565b5b610c198254610a10565b610c24828285610b60565b600060209050601f831160018114610c575760008415610c45578287015190505b610c4f8582610bd1565b865550610cb7565b601f198416610c6586610a41565b60005b82811015610c8d57848901518255600182019150602085019450602081019050610c68565b86831015610caa5784890151610ca6601f891682610bb3565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000610cdb826107e8565b610ce58185610cbf565b9350610cf5818560208601610804565b610cfe816105c2565b840191505092915050565b6000604082019050610d1e6000830185610751565b8181036020830152610d308184610cd0565b90509392505050565b60006020820190508181036000830152610d538184610cd0565b905092915050565b610d64816107c7565b82525050565b60006040820190508181036000830152610d848185610cd0565b9050610d936020830184610d5b565b9392505050565b60006040820190508181036000830152610db48185610cd0565b9050610dc36020830184610751565b939250505056fea26469706673582212207111847743ac6ba58f47eda620d7aa059e6ce6a9ef870327af81079767115f4864736f6c63430008110033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906106fe565b61009e565b005b61006a61020e565b6040516100779190610760565b60405180910390f35b610088610259565b604051610095919061095c565b60405180910390f35b60016000808282546100b091906109ad565b92505081905550600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161016f9190610bed565b506040820151816002015550506101bb6040518060400160405280601b81526020017f25732077686973706572656420772f206d65737361676520257321000000000081525033610443565b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610203929190610d09565b60405180910390a250565b60006102516040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546104df565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156103a157838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461030690610a10565b80601f016020809104026020016040519081016040528092919081815260200182805461033290610a10565b801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b505050505081526020016002820154815250508152602001906001019061027d565b50505050905090565b610440816040516024016103be9190610d39565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061057b565b50565b6104db8282604051602401610459929190610d6a565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061057b565b5050565b61057782826040516024016104f5929190610d9a565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061057b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61060b826105c2565b810181811067ffffffffffffffff8211171561062a576106296105d3565b5b80604052505050565b600061063d6105a4565b90506106498282610602565b919050565b600067ffffffffffffffff821115610669576106686105d3565b5b610672826105c2565b9050602081019050919050565b82818337600083830152505050565b60006106a161069c8461064e565b610633565b9050828152602081018484840111156106bd576106bc6105bd565b5b6106c884828561067f565b509392505050565b600082601f8301126106e5576106e46105b8565b5b81356106f584826020860161068e565b91505092915050565b600060208284031215610714576107136105ae565b5b600082013567ffffffffffffffff811115610732576107316105b3565b5b61073e848285016106d0565b91505092915050565b6000819050919050565b61075a81610747565b82525050565b60006020820190506107756000830184610751565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107d2826107a7565b9050919050565b6107e2816107c7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610822578082015181840152602081019050610807565b60008484015250505050565b6000610839826107e8565b61084381856107f3565b9350610853818560208601610804565b61085c816105c2565b840191505092915050565b61087081610747565b82525050565b600060608301600083015161088e60008601826107d9565b50602083015184820360208601526108a6828261082e565b91505060408301516108bb6040860182610867565b508091505092915050565b60006108d28383610876565b905092915050565b6000602082019050919050565b60006108f28261077b565b6108fc8185610786565b93508360208202850161090e85610797565b8060005b8581101561094a578484038952815161092b85826108c6565b9450610936836108da565b925060208a01995050600181019050610912565b50829750879550505050505092915050565b6000602082019050818103600083015261097681846108e7565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109b882610747565b91506109c383610747565b92508282019050808211156109db576109da61097e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a2857607f821691505b602082108103610a3b57610a3a6109e1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610aa37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a66565b610aad8683610a66565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610aea610ae5610ae084610747565b610ac5565b610747565b9050919050565b6000819050919050565b610b0483610acf565b610b18610b1082610af1565b848454610a73565b825550505050565b600090565b610b2d610b20565b610b38818484610afb565b505050565b5b81811015610b5c57610b51600082610b25565b600181019050610b3e565b5050565b601f821115610ba157610b7281610a41565b610b7b84610a56565b81016020851015610b8a578190505b610b9e610b9685610a56565b830182610b3d565b50505b505050565b600082821c905092915050565b6000610bc460001984600802610ba6565b1980831691505092915050565b6000610bdd8383610bb3565b9150826002028217905092915050565b610bf6826107e8565b67ffffffffffffffff811115610c0f57610c0e6105d3565b5b610c198254610a10565b610c24828285610b60565b600060209050601f831160018114610c575760008415610c45578287015190505b610c4f8582610bd1565b865550610cb7565b601f198416610c6586610a41565b60005b82811015610c8d57848901518255600182019150602085019450602081019050610c68565b86831015610caa5784890151610ca6601f891682610bb3565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000610cdb826107e8565b610ce58185610cbf565b9350610cf5818560208601610804565b610cfe816105c2565b840191505092915050565b6000604082019050610d1e6000830185610751565b8181036020830152610d308184610cd0565b90509392505050565b60006020820190508181036000830152610d538184610cd0565b905092915050565b610d64816107c7565b82525050565b60006040820190508181036000830152610d848185610cd0565b9050610d936020830184610d5b565b9392505050565b60006040820190508181036000830152610db48185610cd0565b9050610dc36020830184610751565b939250505056fea26469706673582212207111847743ac6ba58f47eda620d7aa059e6ce6a9ef870327af81079767115f4864736f6c63430008110033","linkReferences":{},"deployedLinkReferences":{}}')},38:function(f,b,e){f.exports=e(57)},43:function(f,b,e){},45:function(f,b,e){},47:function(f,b){},57:function(f,b,e){"use strict";e.r(b);var a=e(6),t=e.n(a),n=e(31),c=e.n(n),r=(e(43),e(22)),d=e(2),s=e.n(d),o=e(12),u=e(19),i=(e(45),e(32)),l=function(){return window.ethereum},p=function(){var f=Object(o.a)(s.a.mark((function f(){var b,e,a;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=l()){f.next=5;break}return console.error("Make sure you have Metamask!"),f.abrupt("return",null);case 5:return console.log("We have the Ethereum object",b),f.next=8,b.request({method:"eth_accounts"});case 8:if(0===(e=f.sent).length){f.next=15;break}return a=e[0],console.log("Found an authorized account:",a),f.abrupt("return",a);case 15:return console.error("No authorized account found"),f.abrupt("return",null);case 17:f.next=23;break;case 19:return f.prev=19,f.t0=f.catch(0),console.error(f.t0),f.abrupt("return",null);case 23:case"end":return f.stop()}}),f,null,[[0,19]])})));return function(){return f.apply(this,arguments)}}(),m=function(){var f=Object(a.useState)(""),b=Object(r.a)(f,2),e=b[0],n=b[1],c=Object(a.useState)([]),d=Object(r.a)(c,2),m=d[0],v=d[1],h=Object(a.useState)(""),y=Object(r.a)(h,2),g=(y[0],y[1],i.abi),w=function(){var f=Object(o.a)(s.a.mark((function f(){var b,e,a,t,n,c,r;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=window,!(e=b.ethereum)){f.next=14;break}return a=new u.a.providers.Web3Provider(e),t=a.getSigner(),n=new u.a.Contract("0x759Dc4c2156144017195Dd723D5f6002C86c08Fb",g,t),f.next=8,n.getAllWaves();case 8:c=f.sent,r=[],c.forEach((function(f){r.push({address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message})})),v(r),f.next=15;break;case 14:console.log("Ethereum object doesn't exist!");case 15:f.next=20;break;case 17:f.prev=17,f.t0=f.catch(0),console.log(f.t0);case 20:case"end":return f.stop()}}),f,null,[[0,17]])})));return function(){return f.apply(this,arguments)}}(),x=function(){var f=Object(o.a)(s.a.mark((function f(){var b,e;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=l()){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:e=f.sent,console.log("Connected",e[0]),n(e[0]),w(),f.next=16;break;case 13:f.prev=13,f.t0=f.catch(0),console.error(f.t0);case 16:case"end":return f.stop()}}),f,null,[[0,13]])})));return function(){return f.apply(this,arguments)}}(),k=function(){var f=Object(o.a)(s.a.mark((function f(){var b,e,a,t,n,c,r;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=window,!(e=b.ethereum)){f.next=23;break}return a=new u.a.providers.Web3Provider(e),t=a.getSigner(),n=new u.a.Contract("0x759Dc4c2156144017195Dd723D5f6002C86c08Fb",g,t),f.next=8,n.getTotalWaves();case 8:return c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),f.next=12,n.wave("I love my laptop");case 12:return r=f.sent,console.log("Mining...",r.hash),f.next=16,r.wait();case 16:return console.log("Mined --",r.hash),f.next=19,n.getTotalWaves();case 19:c=f.sent,console.log("Retrieved total wave count ...",c.toNumber()),f.next=24;break;case 23:console.log("Ethereum object doesn,t exist!");case 24:f.next=29;break;case 26:f.prev=26,f.t0=f.catch(0),console.log(f.t0);case 29:case"end":return f.stop()}}),f,null,[[0,26]])})));return function(){return f.apply(this,arguments)}}();return Object(a.useEffect)(Object(o.a)(s.a.mark((function f(){var b;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,p();case 2:null!==(b=f.sent)&&(n(b),w());case 4:case"end":return f.stop()}}),f)}))),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),t.a.createElement("div",{className:"bio"},"I am Ugochukwu and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!"),t.a.createElement("button",{className:"waveButton",onClick:k},"Wave at Me"),!e&&t.a.createElement("button",{className:"waveButton",onClick:x},"Connect Wallet"),e&&t.a.createElement("form",{id:"message",onSubmit:null},t.a.createElement("textarea",null),t.a.createElement("button",{type:"submit",className:"waveButton"},"Submit")),e&&m.map((function(f,b){return t.a.createElement("div",{key:b,style:{backgroundColor:"OldLace",marginTop:"16px",padding:"8px",border:"0",borderRadius:"5px"}},t.a.createElement("div",null,"from: ",f.address),t.a.createElement("div",null,t.a.createElement("h4",null,f.message)),t.a.createElement("div",null,"Time: ",f.timestamp.toString()))}))))};c.a.render(t.a.createElement(m,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0f158318.chunk.js.map