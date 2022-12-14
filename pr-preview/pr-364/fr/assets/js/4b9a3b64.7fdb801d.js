"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9795],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_label:"Setup Network Environment"},a="Setting Up Your Environment for CosmWasm on Celestia",s={unversionedId:"developers/cosmwasm-environment",id:"developers/cosmwasm-environment",title:"Setting Up Your Environment for CosmWasm on Celestia",description:"Now the wasmd binary is built, we need to setup a local network",source:"@site/docs/developers/cosmwasm-environment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-environment",permalink:"/pr-preview/pr-364/fr/developers/cosmwasm-environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup Network Environment"},sidebar:"developers",previous:{title:"CosmWasm Dependencies",permalink:"/pr-preview/pr-364/fr/developers/cosmwasm-dependency"},next:{title:"Contract Deployment",permalink:"/pr-preview/pr-364/fr/developers/cosmwasm-contract-deployment"}},l={},c=[{value:"Initializing Cosmwasm Rollup with a Bash Script",id:"initializing-cosmwasm-rollup-with-a-bash-script",level:2},{value:"Optional: See what&#39;s inside the script",id:"optional-see-whats-inside-the-script",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-your-environment-for-cosmwasm-on-celestia"},"Setting Up Your Environment for CosmWasm on Celestia"),(0,i.kt)("p",null,"Now the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," binary is built, we need to setup a local network\nthat communicates between ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," and Rollmint."),(0,i.kt)("h2",{id:"initializing-cosmwasm-rollup-with-a-bash-script"},"Initializing Cosmwasm Rollup with a Bash Script"),(0,i.kt)("p",null,"We have a handy ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/devrel-tools"},"here"),"."),(0,i.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# From inside the `wasmd` directory\ncd ..\ngit clone https://github.com/celestiaorg/devrel-tools\ncp devrel-tools/cosmwasm/init.sh wasmd/\ncd wasmd/\n")),(0,i.kt)("p",null,"This copies over our ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nCosmWasm rollup."),(0,i.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the CosmWasm Rollup."),(0,i.kt)("p",null,"You can initialize the script with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"bash init.sh\n")),(0,i.kt)("p",null,"With that, we have kickstarted our ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," network!"),(0,i.kt)("h2",{id:"optional-see-whats-inside-the-script"},"Optional: See what's inside the script"),(0,i.kt)("p",null,"You can skip this section, but it is important to know\nhow Rollmint is initializing the cosmwasm rollup."),(0,i.kt)("p",null,"Here are the contents of the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/sh\n\nVALIDATOR_NAME=validator1\nCHAIN_ID=celeswasm\nKEY_NAME=celeswasm-key\nTOKEN_AMOUNT="10000000000000000000000000uwasm"\nSTAKING_AMOUNT=1000000000uwasm\nCHAINFLAG="--chain-id ${CHAIN_ID}"\nTXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\nNODEIP="--node http://127.0.0.1:26657"\n\nNAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\necho $NAMESPACE_ID\nDA_BLOCK_HEIGHT=$(curl https://rpc.limani.celestia-devops.dev/block | jq -r \'.result.block.header.height\')\necho $DA_BLOCK_HEIGHT\n\nrm -rf "$HOME"/.wasmd\nwasmd tendermint unsafe-reset-all\nwasmd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n\nsed -i\'\' -e \'s/^minimum-gas-prices *= .*/minimum-gas-prices = "0uwasm"/\' "$HOME"/.wasmd/config/app.toml\nsed -i\'\' -e \'/\\[api\\]/,+3 s/enable *= .*/enable = true/\' "$HOME"/.wasmd/config/app.toml\nsed -i\'\' -e "s/^chain-id *= .*/chain-id = \\"$CHAIN_ID\\"/" "$HOME"/.wasmd/config/client.toml\nsed -i\'\' -e \'/\\[rpc\\]/,+3 s/laddr *= .*/laddr = "tcp:\\/\\/0.0.0.0:26657"/\' "$HOME"/.wasmd/config/config.toml\nsed -i\'\' -e \'s/"time_iota_ms": "1000"/"time_iota_ms": "10"/\' "$HOME"/.wasmd/config/genesis.json\nsed -i\'\' -e \'s/bond_denom": ".*"/bond_denom": "uwasm"/\' "$HOME"/.wasmd/config/genesis.json\nsed -i\'\' -e \'s/mint_denom": ".*"/mint_denom": "uwasm"/\' "$HOME"/.wasmd/config/genesis.json\n\nwasmd keys add $KEY_NAME --keyring-backend test\nwasmd add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend test\nwasmd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend test\nwasmd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"gas_limit":6000000}\' --rollmint.namespace_id $NAMESPACE_ID --rollmint.da_start_height $DA_BLOCK_HEIGHT\n')))}p.isMDXComponent=!0}}]);