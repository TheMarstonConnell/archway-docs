"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[6668],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1543:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3},s="Basics",p={unversionedId:"create/getting-started/basics",id:"create/getting-started/basics",isDocsHomePage:!1,title:"Basics",description:"Developer CLI Overview",source:"@site/docs/create/getting-started/basics.md",sourceDirName:"create/getting-started",slug:"/create/getting-started/basics",permalink:"/docs/create/getting-started/basics",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/getting-started/basics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/create/getting-started/setup"},next:{title:"Starting out",permalink:"/docs/create/guides/my-first-dapp/start"}},u=[{value:"Developer CLI Overview",id:"developer-cli-overview",children:[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]},{value:"Commands",id:"commands",children:[]}]}],l={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics"},"Basics"),(0,a.kt)("h2",{id:"developer-cli-overview"},"Developer CLI Overview"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"archway [command] [options]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-v, --version       output the current version\n-h, --help          display help for command\n")),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"accounts [options]               List available wallets or add new wallet\nbuild                            Build current project\nconfigure [options]              Print or modify environment settings\ndeploy [options]                 Deploy to network, or test deployability\nfaucet                           Request Testnet funds from faucet\nhistory                          Print deployments history\nnetwork                          Show network settings or migrate between networks\nnew                              Create a new project for Archway network\nquery [options] <module> [type]  Query for data on Archway network\nrun [options]                    Run a custom script of your own creation\ntest                             Run unit tests\ntx [options]                     Execute a transaction on Archway network\nhelp [command]                   display help for command\n")))}d.isMDXComponent=!0}}]);