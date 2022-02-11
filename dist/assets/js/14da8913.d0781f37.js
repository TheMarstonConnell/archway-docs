"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[463],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2999:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return w}});var r=n(7462),a=n(3366),o=n(7294),i=n(3905),s=n(9443);var c=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),u="tabItem_1uMI",p="tabItemActive_2DSg";var m=function(e){var t,n=e.lazy,r=e.block,a=e.defaultValue,i=e.values,s=e.groupId,m=e.className,d=o.Children.toArray(e.children),f=null!=i?i:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=a?a:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=c(),y=g.tabGroupChoices,w=g.setTabGroupChoices,k=(0,o.useState)(h),b=k[0],C=k[1],v=[];if(null!=s){var N=y[s];null!=N&&N!==b&&f.some((function(e){return e.value===N}))&&C(N)}var x=function(e){var t=e.currentTarget,n=v.indexOf(t),r=f[n].value;C(r),null!=s&&(w(s,r),setTimeout((function(){var e,n,r,a,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=v.indexOf(e.target)+1;n=v[r]||v[0];break;case"ArrowLeft":var a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:j,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,o.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};var d=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},f=["components"],h={sidebar_position:6},g="Building a dApp frontend",y={unversionedId:"create/guides/my-first-dapp/dapp",id:"create/guides/my-first-dapp/dapp",isDocsHomePage:!1,title:"Building a dApp frontend",description:"For building web frontends, you'll need the following npm packages to connect your web page to Archway Network.",source:"@site/docs/create/guides/my-first-dapp/dapp.mdx",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/dapp",permalink:"/docs/create/guides/my-first-dapp/dapp",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/dapp.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Interacting with your contract",permalink:"/docs/create/guides/my-first-dapp/interact"},next:{title:"Installation",permalink:"/docs/node/install"}},w=[{value:"Connecting to Archway",id:"connecting-to-archway",children:[]},{value:"Querying the counter",id:"querying-the-counter",children:[]},{value:"Incrementing the counter",id:"incrementing-the-counter",children:[]},{value:"Clone it and try yourself",id:"clone-it-and-try-yourself",children:[]}],k={toc:w};function b(e){var t=e.components,o=(0,a.Z)(e,f);return(0,i.kt)("wrapper",(0,r.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-a-dapp-frontend"},"Building a dApp frontend"),(0,i.kt)("p",null,"For building web frontends, you'll need the following ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," packages to connect your web page to Archway Network."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@cosmjs/stargate"},"@cosmjs/stargate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@cosmjs/cosmwasm-stargate"},"@cosmjs/cosmwasm-stargate"))),(0,i.kt)("h4",{id:"cosmjsstargate"},"@cosmjs/stargate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@cosmjs/stargate")," is client library for the Cosmos SDK."),(0,i.kt)("h4",{id:"cosmjscosmwasm-stargate"},"@cosmjs/cosmwasm-stargate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@cosmjs/cosmwasm-stargate")," is an SDK to build CosmWasm clients. It extends ",(0,i.kt)("inlineCode",{parentName:"p"},"@cosmjs/stargate")," with functionality for ",(0,i.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," contracts."),(0,i.kt)("h3",{id:"connecting-to-archway"},"Connecting to Archway"),(0,i.kt)("p",null,"We\u2019ll need our dApp to connect to users\u2019 wallets with a browser extension like ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap"},"Keplr")," wallet."),(0,i.kt)("p",null,"After installing the extension, you\u2019ll notice Keplr is exposed to web pages as a property of the JavaScript window object of the active page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8330).Z})),(0,i.kt)("p",null,"Keplr also needs some metadata about the chain it\u2019s connecting to, and the type of contracts stored there.\nHere's the parameters you'll need to connect to Archway\u2019s Constantine testnet and enable CosmWasm smart contracts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const ChainInfo = {\n  chainId: "constantine-1",\n  chainName: "Constantine Testnet",\n  rpc: "https://rpc.constantine-1.archway.tech" ,\n  rest: "https://api.constantine-1.archway.tech",\n  stakeCurrency: {coinDenom: "CONST",coinMinimalDenom: "uconst",coinDecimals: 6},\n  bip44: {coinType: 118},\n  bech32Config: {bech32PrefixAccAddr: "archway",bech32PrefixAccPub: "archwaypub",bech32PrefixValAddr: "archwayvaloper",bech32PrefixValPub: "archwayvaloperpub",bech32PrefixConsAddr: "archwayvalcons",bech32PrefixConsPub: "archwayvalconspub"\n  },\n  currencies: [{coinDenom: "CONST",coinMinimalDenom: "uconst",coinDecimals: 6}],\n  feeCurrencies: [{coinDenom: "CONST",coinMinimalDenom: "uconst",coinDecimals: 6}],\n  coinType: 118,\n  gasPriceStep: {low: 0,average: 0.1,high: 0.2},\n  features: [\'cosmwasm\']\n};\n')),(0,i.kt)("p",null,"Now we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainInfo")," to set up Keplr for Constantine testnet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';\nimport { GasPrice } from \"@cosmjs/stargate\";\n \nlet accounts, CosmWasmClient, queryHandler, gasPrice;\n\nasync function connectKeplrWallet() {\n  if (window['keplr']) {\n    if (window.keplr['experimentalSuggestChain']) {\n      await window.keplr.experimentalSuggestChain()\n      await window.keplr.enable(ChainInfo.chainId);\n      const offlineSigner = await window.getOfflineSigner(ChainInfo.chainId);\n      CosmWasmClient = await SigningCosmWasmClient.connectWithSigner(ChainInfo.rpc, offlineSigner);\n     \n      // This async waits for the user to authorize your dApp\n      // it returns their account address only after permissions\n      // to read that address are granted\n      accounts = await this.offlineSigner.getAccounts();\n \n      queryHandler = CosmWasmClient.queryClient.wasm.queryContractSmart;\n      // Gas price\n      gasPrice = GasPrice.fromString('0.002uconst');\n \n      console.log('Wallet connected', {\n        offlineSigner: offlineSigner,\n        CosmWasmClient: CosmWasmClient,\n        accounts: accounts,\n        chain: ChainInfo,\n        queryHandler: queryHandler,\n        gasPrice: gasPrice\n      });\n    } else {\n      console.warn('Error accessing experimental features, please update Keplr');\n    }\n  } else {\n    console.warn('Error accessing Keplr, please install Keplr');\n  }\n};\n")),(0,i.kt)("h2",{id:"querying-the-counter"},"Querying the counter"),(0,i.kt)("p",null,"In the previous step we saved a reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmWasmClient.queryClient.wasm.queryContractSmart"),". We'll use it to query our ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg::GetCount")," entrypoint of the Increment contract. "),(0,i.kt)("p",null,"Just like when we queried from CLI, we need to convert entrypoints to lowercase and snake case. In JavaScript the arguments become ",(0,i.kt)("inlineCode",{parentName:"p"},"{get_count: {}}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const getCount = async () => {\n  // Your contract address\n  const ContractAddress = process.env.CONTRACT_ADDRESS;\n  // Query arguments\n  let entrypoint = {\n    get_count: {}\n  };\n  // Do query type 'smart'\n  let queryResult = await queryHandler.query(ContractAddress, entrypoint);\n  console.log('GetCount Query', queryResult);\n},\n")),(0,i.kt)("h2",{id:"incrementing-the-counter"},"Incrementing the counter"),(0,i.kt)("p",null,"To broadcast transactions we call the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," function using our previous ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmWasmClient")," reference. We call this function with the following parameters:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"userAddress")," - the address broadcasting the transaction"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ContractAddress")," - the address of the contract the user is transacting with"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"entrypoint")," - arguments to be executed which match an entrypoint in the contract"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"txFee")," - transaction fees calculated by the ",(0,i.kt)("inlineCode",{parentName:"li"},"calculateFee")," function from ",(0,i.kt)("inlineCode",{parentName:"li"},"@cosmjs/stargate"))),(0,i.kt)("p",null,"We convert the case of entrypoint arguments to lowercase and snake case again, so ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg::Increment {}")," from our Rust contract becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"{increment: {}}")," in our JavaScript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { calculateFee } from \"@cosmjs/stargate\";\n\nconst incrementCounter = async () => {\n  // Your contract address\n  const ContractAddress = process.env.CONTRACT_ADDRESS;\n  // Tx arguments\n  let entrypoint = {\n    increment: {}\n  };\n  // Gas fee estimation\n  let txFee = calculateFee(300000, gasPrice);\n  // Send Tx\n  let tx = await CosmWasmClient.execute(userAddress, ContractAddress, entrypoint, txFee);\n  console.log('Increment Tx', tx);\n}\n")),(0,i.kt)("h2",{id:"clone-it-and-try-yourself"},"Clone it and try yourself"),(0,i.kt)("p",null,"You'll find working examples of dApp frontends for the Increment starter code template in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archway-network/dApp-examples"},"dApp examples repository"),". Examples are given in both ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(d,{value:"vue",label:"Vue.js",default:!0,mdxType:"TabItem"},(0,i.kt)("a",{href:"https://github.com/archway-network/dApp-examples/tree/main/vuejs/increment",target:"_blank"},"Vue Increment")),(0,i.kt)(d,{value:"react",label:"React",mdxType:"TabItem"},(0,i.kt)("a",{href:"https://github.com/archway-network/dApp-examples/tree/main/react/increment",target:"_blank"},"React Increment"))))}b.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8330:function(e,t,n){t.Z=n.p+"assets/images/keplr11-8d1ed72d63de2ac8e0907644873890c6.png"}}]);