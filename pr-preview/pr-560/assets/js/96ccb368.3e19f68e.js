"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Local devnet"},l="Running a local Celestia devnet",i={unversionedId:"nodes/local-devnet",id:"nodes/local-devnet",title:"Running a local Celestia devnet",description:"This tutorial has only been tested on an AMD machine running Ubuntu 22.10 x64.",source:"@site/docs/nodes/local-devnet.md",sourceDirName:"nodes",slug:"/nodes/local-devnet",permalink:"/pr-preview/pr-560/nodes/local-devnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/local-devnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Local devnet"},sidebar:"nodes",previous:{title:"The Blockspace Race",permalink:"/pr-preview/pr-560/nodes/blockspace-race"},next:{title:"Arabica devnet",permalink:"/pr-preview/pr-560/nodes/arabica-devnet"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the local devnet",id:"run-the-local-devnet",level:2},{value:"Query your balance",id:"query-your-balance",level:3},{value:"Start, stop, or remove your container",id:"start-stop-or-remove-your-container",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-local-celestia-devnet"},"Running a local Celestia devnet"),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial has only been tested on an AMD machine running Ubuntu 22.10 x64.")),(0,r.kt)("p",null,"This tutorial will teach developers how to easily run a local Celestia devnet\non their own machine (or in the cloud). Running a local devnet for Celestia\nto test your rollup is the recommended first step before deploying to a testnet.\nThis eliminates the need for testnet tokens and deploying to a testnet until\nyou are ready."),(0,r.kt)("p",null,"The development journey for your rollup will look something like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run your rollup and post DA to a local devnet, and make sure everything works\nas expected"),(0,r.kt)("li",{parentName:"ol"},"Deploy the rollup, posting to a DA testnet. Confirm again that everything\nis functioning properly"),(0,r.kt)("li",{parentName:"ol"},"Finally, deploy your rollup to the DA Layer's mainnet")),(0,r.kt)("p",null,"Whether you're a developer simply testing things on your laptop or using a\nvirtual machine in the cloud, this process can be done on any machine of\nyour choosing. We tested it out on a machine with the following\nspecs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 1 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Single Core AMD"),(0,r.kt)("li",{parentName:"ul"},"Disk: 25 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"OS: Ubuntu 22.10 x64")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"First, you'll need to have Docker installed or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository"},"install Docker"),"\n(",(0,r.kt)("em",{parentName:"p"},"Ubuntu version"),")"),(0,r.kt)("h2",{id:"run-the-local-devnet"},"Run the local devnet"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"local-celestia-devnet")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --platform linux/amd64 -p 26657:26657 -p 26659:26659 ghcr.io/celestiaorg/local-celestia-devnet:main\n")),(0,r.kt)("p",null,"If you'd like to name your container with a custom name, you can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--name")," option when first running the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name custom_name --platform linux/amd64 -p 26657:26657 -p 26659:26659 ghcr.io/celestiaorg/local-celestia-devnet:main\n")),(0,r.kt)("p",null,"Nice! You have a local Celestia devnet running now."),(0,r.kt)("h3",{id:"query-your-balance"},"Query your balance"),(0,r.kt)("p",null,"Open a new terminal instance. Check the balance on your account that you'll be\nusing to post blocks to the local network, this will make sure you can post\nrollup blocks to your Celestia Devnet for DA & consensus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://0.0.0.0:26659/balance\n")),(0,r.kt)("p",null,"You will see something like this, denoting your balance in TIA x 10^(-6):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"denom":"utia","amount":"999995000000000"}\n')),(0,r.kt)("p",null,"If you want to be able to transpose your JSON results into a nicer\nformat, you can install ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,r.kt)("inlineCode",{parentName:"a"},"jq")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install jq\n")),(0,r.kt)("p",null,"Then run this to display in a prettier format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://0.0.0.0:26659/balance | jq\n")),(0,r.kt)("p",null,"Here's what my response was when I wrote this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100    43  100    43    0     0   1730      0 --:--:-- --:--:-- --:--:--  1791\n{\n  "denom": "utia",\n  "amount": "999995000000000"\n}\n')),(0,r.kt)("p",null,"If you want to clean it up some more, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," option to run ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),"\nin silent mode and not print the progress metrics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -X GET http://0.0.0.0:26659/balance | jq\n")),(0,r.kt)("p",null,"Your result will now look like this, nice \ud83e\udee1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "denom": "utia",\n  "amount": "999995000000000"\n}\n')),(0,r.kt)("h3",{id:"start-stop-or-remove-your-container"},"Start, stop, or remove your container"),(0,r.kt)("p",null,"Find the Container ID that is running by using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"Then stop the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop CONTAINER_ID_or_NAME\n")),(0,r.kt)("p",null,"You can obtain the container ID or name of a stopped container using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps -a")," command, which will list all containers (running and stopped)\nand their details. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,r.kt)("p",null,"This will give you an output similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                                            COMMAND            CREATED         STATUS         PORTS                                                                                                                         NAMES\nd9af68de54e4   ghcr.io/celestiaorg/local-celestia-devnet:main   "/entrypoint.sh"   5 minutes ago   Up 2 minutes   1317/tcp, 9090/tcp, 0.0.0.0:26657->26657/tcp, :::26657->26657/tcp, 26656/tcp, 0.0.0.0:26659->26659/tcp, :::26659->26659/tcp   musing_matsumoto\n')),(0,r.kt)("p",null,"In this example, you can restart the container using either its container ID\n(",(0,r.kt)("inlineCode",{parentName:"p"},"d9af68de54e4"),") or name (",(0,r.kt)("inlineCode",{parentName:"p"},"musing_matsumoto"),"). To restart the container, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker start d9af68de54e4\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker start musing_matsumoto\n")),(0,r.kt)("p",null,"If you ever would like to remove the container, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker rm"),"\ncommand followed by the container ID or name."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm CONTAINER_ID_or_NAME\n")))}d.isMDXComponent=!0}}]);