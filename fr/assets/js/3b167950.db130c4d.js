"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9866],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var r=n(3117),s=(n(7294),n(3905));const a={sidebar_label:"SystemD"},l="Configuration de votre Node en tant que processus d'arri\xe8re-plan avec SystemD",i={unversionedId:"nodes/systemd",id:"nodes/systemd",title:"Configuration de votre Node en tant que processus d'arri\xe8re-plan avec SystemD",description:"SystemD est un service daemon utile pour ex\xe9cuter des applications en tant que processus en arri\xe8re-plan.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/nodes/systemd.md",sourceDirName:"nodes",slug:"/nodes/systemd",permalink:"/fr/nodes/systemd",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/systemd.md",tags:[],version:"current",frontMatter:{sidebar_label:"SystemD"},sidebar:"nodes",previous:{title:"Processus de Hardfork de Celestia",permalink:"/fr/nodes/hardfork-process"},next:{title:"Documentation Devops",permalink:"/fr/nodes/devops-resources"}},o={},c=[{value:"Consensus Nodes",id:"consensus-nodes",level:2},{value:"D\xe9marrer Celestia App avec SystemD",id:"d\xe9marrer-celestia-app-avec-systemd",level:3},{value:"N\u0153uds de disponibilit\xe9 des donn\xe9es",id:"n\u0153uds-de-disponibilit\xe9-des-donn\xe9es",level:2},{value:"Node de stockage complet Celestia",id:"node-de-stockage-complet-celestia",level:3},{value:"Bridge Node Celestia",id:"bridge-node-celestia",level:3},{value:"Light Node Celestia",id:"light-node-celestia",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration-de-votre-node-en-tant-que-processus-darri\xe8re-plan-avec-systemd"},"Configuration de votre Node en tant que processus d'arri\xe8re-plan avec SystemD"),(0,s.kt)("p",null,"SystemD est un service daemon utile pour ex\xe9cuter des applications en tant que processus en arri\xe8re-plan."),(0,s.kt)("h2",{id:"consensus-nodes"},"Consensus Nodes"),(0,s.kt)("p",null,"Si vous ex\xe9cutez un node validateur ou complet de consensus, voici les \xe9tapes pour configurer ",(0,s.kt)("inlineCode",{parentName:"p"},"celestia-appd")," en tant que processus d'arri\xe8re-plan."),(0,s.kt)("h3",{id:"d\xe9marrer-celestia-app-avec-systemd"},"D\xe9marrer Celestia App avec SystemD"),(0,s.kt)("p",null,"SystemD est un service daemon utile pour ex\xe9cuter des applications en tant que processus en arri\xe8re-plan."),(0,s.kt)("p",null,"Cr\xe9er un fichier systemd Celestia-App :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-appd.service\n[Unit]\nDescription=celestia-appd Cosmos daemon\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia-appd start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"Si le fichier a \xe9t\xe9 cr\xe9\xe9 avec succ\xe8s, vous pourrez voir son contenu :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-appd.service\n")),(0,s.kt)("p",null,"Activer et d\xe9marrer le daemon celestia-appd :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-appd\nsystemctl start celestia-appd\n")),(0,s.kt)("p",null,"V\xe9rifier si le daemon a \xe9t\xe9 d\xe9marr\xe9 correctement :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status celestia-appd\n")),(0,s.kt)("p",null,"V\xe9rifier les logs du daemon en temps r\xe9el :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u celestia-appd.service -f\n")),(0,s.kt)("p",null,"Pour v\xe9rifier si votre node est synchronis\xe9 avant d'aller de l'avant :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s localhost:26657/status | jq .result | jq .sync_info\n")),(0,s.kt)("p",null,"Assurez-vous que vous avez ",(0,s.kt)("inlineCode",{parentName:"p"},'"catching_up": false'),", sinon laissez-le tourner jusqu'\xe0 ce qu'il soit synchronis\xe9."),(0,s.kt)("h2",{id:"n\u0153uds-de-disponibilit\xe9-des-donn\xe9es"},"N\u0153uds de disponibilit\xe9 des donn\xe9es"),(0,s.kt)("h3",{id:"node-de-stockage-complet-celestia"},"Node de stockage complet Celestia"),(0,s.kt)("p",null,"Cr\xe9er un fichier systemd de Full Storage Node Celestia:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-full.service\n[Unit]\nDescription=celestia-full Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia full start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"Si le fichier a \xe9t\xe9 cr\xe9\xe9 avec succ\xe8s, vous pourrez voir son contenu :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-full.service\n")),(0,s.kt)("p",null,"Activer et d\xe9marrer le daemon celestia-full:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-full\nsystemctl start celestia-full && journalctl -u \\\ncelestia-full.service -f\n")),(0,s.kt)("p",null,"Vous devriez voir les logs \xe0 travers la synchronisation du full storage node."),(0,s.kt)("h3",{id:"bridge-node-celestia"},"Bridge Node Celestia"),(0,s.kt)("p",null,"Cr\xe9er un fichier systemd Celestia Bridge :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-bridge.service\n[Unit]\nDescription=celestia-bridge Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia bridge start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"Si le fichier a \xe9t\xe9 cr\xe9\xe9 avec succ\xe8s, vous pourrez voir son contenu :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-bridge.service\n")),(0,s.kt)("p",null,"Activer et d\xe9marrer le daemon celestia-bridge:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-bridge\nsystemctl start celestia-bridge && journalctl -u \\\ncelestia-bridge.service -f\n")),(0,s.kt)("p",null,"Maintenant, le bridge node Celestia va commencer \xe0 synchroniser les ent\xeates et stocker les blocs depuis l'application Celestia."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Remarque : Au d\xe9marrage, nous pouvons voir le ",(0,s.kt)("inlineCode",{parentName:"p"},"multiadress")," \xe0 partir du bridge node Celestia. Ceci est ",(0,s.kt)("strong",{parentName:"p"},"n\xe9cessaire pour les futures connexions de Light Node")," et la communication avec les bridge nodes Celestia")),(0,s.kt)("p",null,"Exemple:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NODE_IP=<ip-address>\n/ip4/$NODE_IP/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22\n")),(0,s.kt)("p",null,"Vous devriez voir les logs \xe0 travers la synchronisation du bridge node."),(0,s.kt)("h3",{id:"light-node-celestia"},"Light Node Celestia"),(0,s.kt)("p",null,"Lancer le Light Node en tant que processus daemon en arri\xe8re-plan"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service\n[Unit]\nDescription=celestia-lightd Light Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia light start --core.ip <ip-address> --core.grpc.port <port>\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"Si un fichier a \xe9t\xe9 cr\xe9\xe9 avec succ\xe8s, vous pourrez voir son contenu :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-lightd.service\n")),(0,s.kt)("p",null,"Activer et d\xe9marrer le daemon celestia-lightd :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-lightd\nsystemctl start celestia-lightd\n")),(0,s.kt)("p",null,"V\xe9rifier si le daemon a \xe9t\xe9 d\xe9marr\xe9 correctement :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status celestia-lightd\n")),(0,s.kt)("p",null,"V\xe9rifier les logs du daemon en temps r\xe9el :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u celestia-lightd.service -f\n")),(0,s.kt)("p",null,"Maintenant, le Light Node Celestia va commencer \xe0 synchroniser les en-t\xeates. Une fois la synchronisation termin\xe9e, le Light Node effectuera l'\xe9chantillonnage disponibilit\xe9 des donn\xe9es (DAS) \xe0 partir du Bridge Node."))}d.isMDXComponent=!0}}]);