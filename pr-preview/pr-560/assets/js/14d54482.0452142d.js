"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Arabica devnet"},i="Arabica devnet",l={unversionedId:"nodes/arabica-devnet",id:"nodes/arabica-devnet",title:"Arabica devnet",description:"arabica-devnet",source:"@site/docs/nodes/arabica-devnet.md",sourceDirName:"nodes",slug:"/nodes/arabica-devnet",permalink:"/pr-preview/pr-560/nodes/arabica-devnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/arabica-devnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Arabica devnet"},sidebar:"nodes",previous:{title:"Local devnet",permalink:"/pr-preview/pr-560/nodes/local-devnet"},next:{title:"Mocha testnet",permalink:"/pr-preview/pr-560/nodes/mocha-testnet"}},s={},c=[{value:"Integrations",id:"integrations",level:2},{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"API endpoints",id:"api-endpoints",level:2},{value:"gRPC endpoints",id:"grpc-endpoints",level:2},{value:"Arabica devnet faucet",id:"arabica-devnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arabica-devnet"},"Arabica devnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"arabica-devnet",src:n(5922).Z,width:"4500",height:"2251"})),(0,r.kt)("p",null,"Arabica Devnet is a new testnet from Celestia Labs that is focused\nexclusively on providing developers with enhanced performance and\nthe latest upgrades for testing their rollups and applications."),(0,r.kt)("p",null,"Arabica does not focus on validator or consensus-level testing, rather,\nthat is what Mocha Testnet is used for. If you are a validator, we\nrecommend just testing your validator operations on Mocha ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-560/nodes/mocha-testnet"},"here"),"."),(0,r.kt)("p",null,"With Arabica having the latest updates from all Celestia's products deployed\non it, it can be subject to many changes. Therefore, as a fair warning,\nArabica can break unexpectedly but given it will be continuously updated,\nit is a useful way to keep testing the latest changes in the software."),(0,r.kt)("p",null,"Developers can still deploy on Mocha Testnet their sovereign rollups if they\nchose to do so, it just will always lag behind Arabica Devnet until Mocha\nundergoes Hardfork Upgrades in coordination with Validators."),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("p",null,"This guide contains the relevant sections for how to connect to Arabica,\ndepending on the type of node you are running."),(0,r.kt)("p",null,"Your best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,r.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Arabica:"),(0,r.kt)("p",null,"Data Availability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-560/nodes/bridge-node"},"Bridge Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-560/nodes/full-storage-node"},"Full Storage Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-560/nodes/light-node"},"Light Node"))),(0,r.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Arabica")," in order to refer\nto the correct instructions on this page on how to connect to Arabica."),(0,r.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,r.kt)("p",null,"The RPC endpoint is to allow users to interact with Celestia's nodes by\nquerying the node's state and broadcasting transactions on the\nCelestia network. The default port is 26657."),(0,r.kt)("p",null,"Below is a list of RPC endpoints you can use to connect to Arabica Devnet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc.limani.celestia-devops.dev"},"https://rpc.limani.celestia-devops.dev"))),(0,r.kt)("h2",{id:"api-endpoints"},"API endpoints"),(0,r.kt)("p",null,"The API endpoint is to allow users to interact with the REST API in Cosmos\nSDK which is implemented using gRPC-gateway, which exposes gRPC endpoints\nas REST endpoints. This allows for communication with the node using REST\ncalls, which can be useful if the client does not support gRPC or HTTP2.\nThe default port is 1317."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.limani.celestia-devops.dev"},"https://api.limani.celestia-devops.dev"))),(0,r.kt)("h2",{id:"grpc-endpoints"},"gRPC endpoints"),(0,r.kt)("p",null,"The gRPC endpoint is to allow users to interact with a celestia-node using\ngRPC, a modern open-source and high-performance RPC framework. The default\nport is 9090. In the Cosmos SDK, gRPC is used to define state queries and\nbroadcast transactions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc.limani.celestia-devops.dev"},"https://grpc.limani.celestia-devops.dev"))),(0,r.kt)("h2",{id:"arabica-devnet-faucet"},"Arabica devnet faucet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,r.kt)("p",null,"You can request from Arabica Devnet Faucet on the #arabica-faucet channel on\nCelestia's Discord server with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,r.kt)("h2",{id:"explorers"},"Explorers"),(0,r.kt)("p",null,"There is an explorer you can use for Arabica:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.celestia.tools/arabica/"},"https://explorer.celestia.tools/arabica"))))}u.isMDXComponent=!0},5922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arabica-devnet-d7ec894d41dfc56748cc565a7e1a5b91.png"}}]);