"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7762],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),g=l,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),l=t(4334),o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(3117),l=t(7294),o=t(4334),r=t(2389),i=t(7392),c=t(7094),s=t(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:r,defaultValue:d,values:g,groupId:m,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=g??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(f,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:d??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,c.U)(),[y,R]=(0,l.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:B}=(0,s.o5)();if(null!=m){const e=N[m];null!=e&&e!==y&&f.some((n=>n.value===e))&&R(e)}const C=e=>{const n=e.currentTarget,t=T.indexOf(n),a=f[t].value;a!==y&&(B(n),R(a),null!=m&&v(m,String(a)))},D=e=>{var n;let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},f.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:e=>T.push(e),onKeyDown:D,onClick:C},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":y===n})}),t??n)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function g(e){const n=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},6470:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=t(3117),l=(t(7294),t(3905)),o=t(5488),r=t(5162);const i={sidebar_label:"Docker Setup"},c="\ud83d\udc33 Docker Setup",s={unversionedId:"nodes/docker",id:"nodes/docker",title:"\ud83d\udc33 Docker Setup",description:"This page has installation instructions to run celestia-node using Docker. If you are looking for instructions to run celestia-node using a binary, please refer to the Celestia Node page.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/nodes/docker.mdx",sourceDirName:"nodes",slug:"/nodes/docker",permalink:"/fr/nodes/docker",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/docker.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Docker Setup"},sidebar:"nodes",previous:{title:"Celestia Node",permalink:"/fr/category/celestia-node"},next:{title:"Node Metrics",permalink:"/fr/nodes/celestia-node-metrics"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Arabica Setup",id:"arabica-setup",level:2},{value:"Following Logs",id:"following-logs",level:3},{value:"Stopping the Container",id:"stopping-the-container",level:3},{value:"Removing the Container",id:"removing-the-container",level:3},{value:"Following Logs",id:"following-logs-1",level:3},{value:"Stopping the Container",id:"stopping-the-container-1",level:3},{value:"Removing the Container",id:"removing-the-container-1",level:3},{value:"Following Logs",id:"following-logs-2",level:3},{value:"Stopping the Container",id:"stopping-the-container-2",level:3},{value:"Removing the Container",id:"removing-the-container-2",level:3},{value:"Mamaki Setup",id:"mamaki-setup",level:2},{value:"Following Logs",id:"following-logs-3",level:3},{value:"Stopping the Container",id:"stopping-the-container-3",level:3},{value:"Removing the Container",id:"removing-the-container-3",level:3},{value:"Following Logs",id:"following-logs-4",level:3},{value:"Stopping the Container",id:"stopping-the-container-4",level:3},{value:"Removing the Container",id:"removing-the-container-4",level:3},{value:"Following Logs",id:"following-logs-5",level:3},{value:"Stopping the Container",id:"stopping-the-container-5",level:3},{value:"Removing the Container",id:"removing-the-container-5",level:3}],d={toc:p};function g(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-docker-setup"},"\ud83d\udc33 Docker Setup"),(0,l.kt)("p",null,"This page has installation instructions to run ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," using Docker. If you are looking for instructions to run ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," using a binary, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"/fr/nodes/celestia-node"},"Celestia Node")," page."),(0,l.kt)("p",null,"Using Docker is the easiest way to run ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," for most users. Docker is a containerization platform that allows you to run ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," in an isolated environment. This means that you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," on your machine without having to worry about installing and configuring all of the dependencies required to run the node."),(0,l.kt)("p",null,"The easiest way to install Docker is to use the official Docker Desktop installer. You can find the instructions for your operating system ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),"."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," and basic understanding of Docker")),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)("h2",{id:"arabica-setup"},"Arabica Setup"),(0,l.kt)(o.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"light",label:"Light Node",mdxType:"TabItem"},(0,l.kt)("p",null,"First, create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in your root directory with the file below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:latest\nFROM golang:1.19.1-alpine\n \nCOPY --from=golang:1.19.1-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nRUN apk update\nRUN apk add curl tar wget clang pkgconfig libressl-dev jq alpine-sdk bash \nRUN rm -rf celestia-node && git clone https://github.com/celestiaorg/celestia-node.git && cd celestia-node && git checkout tags/v0.4.2 && make install && make cel-key && celestia light init\nCMD celestia light start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090\n')),(0,l.kt)("p",null,"Then ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into your new directory with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Dockerfiles\n")),(0,l.kt)("p",null,"Then, build the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t yourname/arabica-node .\n")),(0,l.kt)("p",null,"Lastly, run the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9090:26658 --name arabica-light yourname/arabica-node\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"following-logs"},"Following Logs"),(0,l.kt)("p",null,"To follow the logs of the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --follow arabica-light\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"stopping-the-container"},"Stopping the Container"),(0,l.kt)("p",null,"In the case where you want to stop the node (and container), use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop arabica-light\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"removing-the-container"},"Removing the Container"),(0,l.kt)("p",null,"If you would like to delete the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm arabica-light\n"))),(0,l.kt)(r.Z,{value:"full",label:"Full Node",mdxType:"TabItem"},(0,l.kt)("p",null,"First, create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in your root directory with the file below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:latest\nFROM golang:1.19.1-alpine\n \nCOPY --from=golang:1.19.1-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nRUN apk update\nRUN apk add curl tar wget clang pkgconfig libressl-dev jq alpine-sdk bash \nRUN rm -rf celestia-node && git clone https://github.com/celestiaorg/celestia-node.git && cd celestia-node && git checkout tags/v0.4.2 && make install && make cel-key && celestia full init\nCMD celestia full start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090\n')),(0,l.kt)("p",null,"Then ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into your new directory with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Dockerfiles\n")),(0,l.kt)("p",null,"Then, build the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t yourname/arabica-node .\n")),(0,l.kt)("p",null,"Lastly, run the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9090:26658 --name arabica-full yourname/arabica-node\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"following-logs-1"},"Following Logs"),(0,l.kt)("p",null,"To follow the logs of the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --follow arabica-full\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"stopping-the-container-1"},"Stopping the Container"),(0,l.kt)("p",null,"In the case where you want to stop the node (and container), use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop arabica-full\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"removing-the-container-1"},"Removing the Container"),(0,l.kt)("p",null,"If you would like to delete the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm arabica-full\n"))),(0,l.kt)(r.Z,{value:"bridge",label:"Bridge Node",mdxType:"TabItem"},(0,l.kt)("p",null,"First, create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in your root directory with the file below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:latest\nFROM golang:1.19.1-alpine\n \nCOPY --from=golang:1.19.1-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nRUN apk update\nRUN apk add curl tar wget clang pkgconfig libressl-dev jq alpine-sdk bash \nRUN rm -rf celestia-node && git clone https://github.com/celestiaorg/celestia-node.git && cd celestia-node && git checkout tags/v0.4.2 && make install && make cel-key && celestia bridge init\nCMD celestia bridge start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090\n')),(0,l.kt)("p",null,"Then ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into your new directory with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Dockerfiles\n")),(0,l.kt)("p",null,"Then, build the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t yourname/arabica-node .\n")),(0,l.kt)("p",null,"Lastly, run the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9090:26658 --name arabica-bridge yourname/arabica-node\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"following-logs-2"},"Following Logs"),(0,l.kt)("p",null,"To follow the logs of the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --follow arabica-bridge\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"stopping-the-container-2"},"Stopping the Container"),(0,l.kt)("p",null,"In the case where you want to stop the node (and container), use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop arabica-bridge\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"removing-the-container-2"},"Removing the Container"),(0,l.kt)("p",null,"If you would like to delete the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm arabica-bridge\n"))))),(0,l.kt)(r.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)("h2",{id:"mamaki-setup"},"Mamaki Setup"),(0,l.kt)(o.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"light",label:"Light Node",mdxType:"TabItem"},(0,l.kt)("p",null,"First, create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in your root directory with the file below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:latest\nFROM golang:1.18.2-alpine\n \nCOPY --from=golang:1.18.2-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nRUN apk update\nRUN apk add curl tar wget clang pkgconfig libressl-dev jq alpine-sdk bash \nRUN rm -rf celestia-node && git clone https://github.com/celestiaorg/celestia-node.git && cd celestia-node && git checkout tags/v0.3.0-rc2 && make install && make cel-key && celestia light init \nCMD celestia light start --core.grpc https://rpc-mamaki.pops.one:9090\n')),(0,l.kt)("p",null,"Then ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into your new directory with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Dockerfiles\n")),(0,l.kt)("p",null,"Then, build the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t yourname/mamaki-node .\n")),(0,l.kt)("p",null,"Lastly, run the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9090:26658 --name mamaki-light yourname/mamaki-node\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"following-logs-3"},"Following Logs"),(0,l.kt)("p",null,"To follow the logs of the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --follow mamaki-light\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"stopping-the-container-3"},"Stopping the Container"),(0,l.kt)("p",null,"In the case where you want to stop the node (and container), use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop mamaki-light\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"removing-the-container-3"},"Removing the Container"),(0,l.kt)("p",null,"If you would like to delete the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm mamaki-light\n"))),(0,l.kt)(r.Z,{value:"full",label:"Full Node",mdxType:"TabItem"},(0,l.kt)("p",null,"First, create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in your root directory with the file below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:latest\nFROM golang:1.18.2-alpine\n \nCOPY --from=golang:1.18.2-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nRUN apk update\nRUN apk add curl tar wget clang pkgconfig libressl-dev jq alpine-sdk bash \nRUN rm -rf celestia-node && git clone https://github.com/celestiaorg/celestia-node.git && cd celestia-node && git checkout tags/v0.3.0-rc2 && make install && make cel-key && celestia full init \nCMD celestia full start --core.grpc https://rpc-mamaki.pops.one:9090\n')),(0,l.kt)("p",null,"Then ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into your new directory with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Dockerfiles\n")),(0,l.kt)("p",null,"Then, build the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t yourname/mamaki-node .\n")),(0,l.kt)("p",null,"Lastly, run the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9090:26658 --name mamaki-full yourname/mamaki-node\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"following-logs-4"},"Following Logs"),(0,l.kt)("p",null,"To follow the logs of the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --follow mamaki-full\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"stopping-the-container-4"},"Stopping the Container"),(0,l.kt)("p",null,"In the case where you want to stop the node (and container), use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop mamaki-full\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"removing-the-container-4"},"Removing the Container"),(0,l.kt)("p",null,"If you would like to delete the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm mamaki-full\n"))),(0,l.kt)(r.Z,{value:"bridge",label:"Bridge Node",mdxType:"TabItem"},(0,l.kt)("p",null,"First, create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in your root directory with the file below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:latest\nFROM golang:1.18.2-alpine\n \nCOPY --from=golang:1.18.2-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nRUN apk update\nRUN apk add curl tar wget clang pkgconfig libressl-dev jq alpine-sdk bash \nRUN rm -rf celestia-node && git clone https://github.com/celestiaorg/celestia-node.git && cd celestia-node && git checkout tags/v0.3.0-rc2 && make install && make cel-key && celestia bridge init\nCMD celestia bridge start --core.grpc https://rpc-mamaki.pops.one:9090 --core.remote tcp://rpc-mamaki.pops.one:26657\n')),(0,l.kt)("p",null,"Then ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into your new directory with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Dockerfiles\n")),(0,l.kt)("p",null,"Then, build the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t yourname/mamaki-node .\n")),(0,l.kt)("p",null,"Lastly, run the image using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 9090:26658 --name mamaki-bridge yourname/mamaki-node\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"following-logs-5"},"Following Logs"),(0,l.kt)("p",null,"To follow the logs of the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --follow mamaki-bridge\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"stopping-the-container-5"},"Stopping the Container"),(0,l.kt)("p",null,"In the case where you want to stop the node (and container), use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop mamaki-bridge\n")),(0,l.kt)("p",null,"---==crwdHRulesLBB_2_BBsuleRHdwrc=="),(0,l.kt)("h3",{id:"removing-the-container-5"},"Removing the Container"),(0,l.kt)("p",null,"If you would like to delete the container, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm mamaki-bridge\n")))))))}g.isMDXComponent=!0}}]);