"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||l;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1,title:"01 - Source Control"},a="Source Control",i={unversionedId:"terraform-cli/cli_installation/source-control",id:"terraform-cli/cli_installation/source-control",title:"01 - Source Control",description:"Cloning official RAD Lab repository",source:"@site/docs/terraform-cli/cli_installation/source-control.md",sourceDirName:"terraform-cli/cli_installation",slug:"/terraform-cli/cli_installation/source-control",permalink:"/rad-lab/docs/terraform-cli/cli_installation/source-control",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"01 - Source Control"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/rad-lab/docs/cli_installation"},next:{title:"02 - Google Cloud",permalink:"/rad-lab/docs/terraform-cli/cli_installation/setup-gcp"}},c={},s=[{value:"Cloning official RAD Lab repository",id:"cloning-official-rad-lab-repository",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"source-control"},"Source Control"),(0,n.kt)("h2",{id:"cloning-official-rad-lab-repository"},"Cloning official RAD Lab repository"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/rad-lab/"},"RAD Lab GitHub repository")," directly into Google Cloud Shell by clicking the button below. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You will need to follow ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"these steps")," to set up a GitHub Personal Access Token with ",(0,n.kt)("strong",{parentName:"p"},"repo")," scope.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/GoogleCloudPlatform/rad-lab&cloudshell_git_branch=main"},(0,n.kt)("img",{parentName:"a",src:"https://gstatic.com/cloudssh/images/open-btn.svg",alt:"Open in Cloud Shell"}))))}u.isMDXComponent=!0}}]);