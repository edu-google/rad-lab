"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,title:"03 - RAD Lab Management Project"},i="Setup RAD Lab Management GCP Project",l={unversionedId:"rad-lab-launcher/launcher_installation/management-project",id:"rad-lab-launcher/launcher_installation/management-project",title:"03 - RAD Lab Management Project",description:"The RAD Lab Admin project will used as the the host project to deploy RAD Lab modules for your users. It will host the gcloud project config and the storage (via GCS) for Terraform state and the APIs.",source:"@site/docs/rad-lab-launcher/launcher_installation/management-project.md",sourceDirName:"rad-lab-launcher/launcher_installation",slug:"/rad-lab-launcher/launcher_installation/management-project",permalink:"/rad-lab/docs/rad-lab-launcher/launcher_installation/management-project",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"03 - RAD Lab Management Project"},sidebar:"tutorialSidebar",previous:{title:"02 - Google Cloud",permalink:"/rad-lab/docs/rad-lab-launcher/launcher_installation/setup-gcp"},next:{title:"Configure Modules",permalink:"/rad-lab/docs/launcher_configure"}},s={},c=[{value:"GCS Bucket for Terraform State",id:"gcs-bucket-for-terraform-state",level:2},{value:"IAM Permissions Prerequisites",id:"iam-permissions-prerequisites",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setup-rad-lab-management-gcp-project"},"Setup RAD Lab Management GCP Project"),(0,n.kt)("p",null,"The RAD Lab Admin project will used as the the host project to deploy RAD Lab modules for your users. It will host the gcloud project config and the storage (via GCS) for Terraform state and the APIs."),(0,n.kt)("admonition",{title:"Important",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Ensure ",(0,n.kt)("a",{parentName:"p",href:"../source-control"},"01 - Source Control")," and ",(0,n.kt)("a",{parentName:"p",href:"../setup-gcp"},"02 - Google Cloud")," steps are complete before\nproceeding")),(0,n.kt)("h2",{id:"gcs-bucket-for-terraform-state"},"GCS Bucket for Terraform State"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"Cloud Storage Bucket")," within ",(0,n.kt)("strong",{parentName:"p"},"RAD Lab Management Project")," with read/write access to save the Terraform state for the entity (user or service account) spinning up the modules. This bucket is used to save state for all active deployments. "),(0,n.kt)("admonition",{title:"Terrafrom State",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We recommend to use a GCS bucket to store Terraform state instead of storing it locally, so that multiple Cloud admins can work through deploying the modules.")),(0,n.kt)("h2",{id:"iam-permissions-prerequisites"},"IAM Permissions Prerequisites"),(0,n.kt)("p",null,"In addition to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/rad-lab/tree/main/modules"},"module")," specific minimum ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/overview"},"IAM")," permissions (listed in Each ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/rad-lab/tree/main/modules"},"module"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md"),"), entities deploying RAD Lab modules via ",(0,n.kt)("strong",{parentName:"p"},"RAD Lab Launcher")," will also need to have below permissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parent: ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/iam.organizationRoleViewer")," ","[OPTIONAL: This permission is not required if ",(0,n.kt)("em",{parentName:"li"},"no parent (organization/folder)")," exists]"),(0,n.kt)("li",{parentName:"ul"},"RAD Lab Management Project: ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/storage.admin")),(0,n.kt)("li",{parentName:"ul"},"RAD Lab Management Project: ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/serviceusage.serviceUsageConsumer"))),(0,n.kt)("p",null,"You can use the Google Cloud Console to ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/manage-access-other-resources"},"view")," or ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/manage-access-other-resources#single-role"},"change")," IAM permissions."))}p.isMDXComponent=!0}}]);