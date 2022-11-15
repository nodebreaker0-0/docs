"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_label:"Contract Interaction"},c="Contract Interaction on CosmWasm with Celestia",i={unversionedId:"developers/cosmwasm-contract-interaction",id:"developers/cosmwasm-contract-interaction",title:"Contract Interaction on CosmWasm with Celestia",description:"In the previous steps, we have stored out contract's tx hash in an",source:"@site/docs/developers/cosmwasm-contract-interaction.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-interaction",permalink:"/pr-preview/pr-312/fr/developers/cosmwasm-contract-interaction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-interaction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Contract Interaction"},sidebar:"developers",previous:{title:"Contract Deployment",permalink:"/pr-preview/pr-312/fr/developers/cosmwasm-contract-deployment"},next:{title:"CosmWasm Resources",permalink:"/pr-preview/pr-312/fr/developers/cosmwasm-resources"}},s={},l=[{value:"Contract Querying",id:"contract-querying",level:2},{value:"Contract Instantiation",id:"contract-instantiation",level:2},{value:"Contract Interaction",id:"contract-interaction",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-interaction-on-cosmwasm-with-celestia"},"Contract Interaction on CosmWasm with Celestia"),(0,a.kt)("p",null,"In the previous steps, we have stored out contract's tx hash in an\nenvironment variable for later use."),(0,a.kt)("p",null,"Because of the longer time periods of submitting transactions via Rollmint\ndue to waiting on Celestia's Data Availability Layer to confirm block inclusion,\nwe will need to query our  tx hash directly to get information about it."),(0,a.kt)("h2",{id:"contract-querying"},"Contract Querying"),(0,a.kt)("p",null,"Let's start by querying our transaction hash for its code ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"CODE_ID=$(wasmd query tx --type=hash $TX_HASH $NODE --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,a.kt)("p",null,"This will give us back the Code ID of the deployed contract."),(0,a.kt)("p",null,"In our case, since it's the first contract deployed on our local network,\nthe value is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"Now, we can take a look at the contracts instantiated by this Code ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n")),(0,a.kt)("p",null,"We get the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,a.kt)("h2",{id:"contract-instantiation"},"Contract Instantiation"),(0,a.kt)("p",null,"We start instantiating the contract by writing up the following ",(0,a.kt)("inlineCode",{parentName:"p"},"INIT")," message\nfor nameservice contract. Here, we are specifying that ",(0,a.kt)("inlineCode",{parentName:"p"},"purchase_price")," of a name\nis ",(0,a.kt)("inlineCode",{parentName:"p"},"100uwasm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_price")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"999uwasm"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'INIT=\'{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}\'\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from $KEY_NAME --keyring-backend test --label "name service" $TXFLAG -y --no-admin\n')),(0,a.kt)("h2",{id:"contract-interaction"},"Contract Interaction"),(0,a.kt)("p",null,"Now that we instantiated it, we can interact further with the contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')\necho $CONTRACT\n\nwasmd query wasm contract $CONTRACT $NODE\nwasmd query bank balances $CONTRACT $NODE\n")),(0,a.kt)("p",null,"This allows us to see the contract address, contract details, and\nbank balances."),(0,a.kt)("p",null,"Now, let's register a name to the contract for our wallet address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'REGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100uwasm --from $KEY_NAME $TXFLAG -y\n\n# Query the owner of the name record\nNAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json\n')),(0,a.kt)("p",null,"With that, we have instantiated and interacted with the CosmWasm nameservice\nsmart contract using Celestia!"))}p.isMDXComponent=!0}}]);