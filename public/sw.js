if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const t=e=>s(e,c),o={module:{uri:c},exports:n,require:t};a[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-73d11fcc0b4f952c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/1043-687b026937fa3860.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/1317-84729a2d2418abfc.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/1704-58ccf461147207eb.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/181-fd941b2aaed091fa.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/1974-cb9837d17dab0728.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/231-eaa86363dec0fcc9.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/3251-bcef9e8ec295849c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/3283-9782cd9d0eef62ab.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/370b0802-5a5c69de5adb882a.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/371-ffed7871bb6f4e98.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/3761-9e5cde1f3d1bc536.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/3827-a1fd2c0ea11ea9f4.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/397-f547695c6db89dbd.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/3baf5dbb-bd600c381de2eb1d.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/3d47b92a-25dc4d56857b94ee.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/4580-434008bd315afb07.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/4674-14fe3d21f788f353.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/479ba886-c47ae57df32f324c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/4868-8f3cceb3b3bd79ec.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/5190-a4e5269aaed7c474.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/6101-09c02210b08dc7f4.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/6135-c98f862d9f05bd76.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/7009-0364eb3065c9bb59.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/7071-d3a661f672873e1e.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/7422-82f84b3ddef7dc32.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/795d4814-912d49df50a61ee9.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8-439833ce3a99ab42.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8030-c3112e4665f592e1.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8173-bffbe5235d616560.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8350-5c277a61b4570dee.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8950-0a708d58bbea9f20.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8972-b95169b49f5f8f91.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/8e1d74a4-098f0a4c60ce79d4.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/9772-20cad7c4d2dcc288.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(auth)/layout-bb99fe8fcc622cb4.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(auth)/sign-in/%5B%5B...sign-in%5D%5D/page-2e6f140695d0c448.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(auth)/sign-up/%5B%5B...sign-up%5D%5D/page-cb51b245270d19f8.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/(hospital)/affiliates/page-25feaf4f8fbdaa0a.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/(hospital)/clients/page-bab8fb1938c294b2.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/(hospital)/consultation/page-ecf4761d4099d11f.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/(pharmacy)/inventory/page-df099ed44ad5ec35.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/(pharmacy)/orders/page-79f2ca52e0bb514c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/about/page-b5e714f9361c1544.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/layout-c5edcdbda48bcaac.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/messages/page-43d2f81411be409c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/%5Bid%5D/overview/page-0e31a51f4d62fa21.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/company/set-up/page-5f83938b79452d4b.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/hospital/home/page-244b96e83aea09bf.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/pharmacy/(general)/cart/page-2322690651ee5ec0.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/pharmacy/(general)/home/page-9746b871130bb38d.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/pharmacy/(general)/layout-8475393d3faafe7e.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/pharmacy/(general)/orders/page-486070a7b5b413d3.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(company)/pharmacy/shop/%5Bid%5D/page-11d9e471266ad3ed.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/%5BclerkId%5D/account/page-e7b9e80d78d02e01.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/%5BclerkId%5D/affiliation/page-8019c23d0758b5a1.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/%5BclerkId%5D/dashboard/page-8ad8660a3945a20b.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/%5BclerkId%5D/health-record/page-04c88455d7dadc11.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/%5BclerkId%5D/history/page-50c0fafbbbda51ee.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/%5BclerkId%5D/layout-0a684284c060b83c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/landing/page-876b71ab2f388cf9.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/(patient)/layout-8ade9b0057ffe8bb.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/account-activation/layout-68443d4d66e6cb44.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/account-activation/page-9e7e12a51d1eb7bf.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/affiliates/layout-0689f4605ac4a004.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/affiliates/page-846b8f9663fd39ad.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/blogs/%5Bid%5D/page-86212f34e4f57f39.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/blogs/create-post/page-c69d264c8722610b.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/blogs/created/page-719f9a69a18fe733.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/blogs/home/page-6e76d9ac0da5a3bd.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/blogs/layout-6baa13a9a29f81c0.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/blogs/saved/page-9ede592c116e0b64.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/history/page-a9e91f136f8b67b3.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/home/page-f6d3bff9f622642b.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/layout-95889885f38bdecf.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/personal-room/page-18f4a9b551141512.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/recordings/page-54437c630b31248b.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/requests/page-61f391b9c641d98f.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/room/%5Bid%5D/page-90820494a4eb156e.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/room/layout-8b4a3fe11c3f77eb.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/consultation/upcoming/page-7c14a7349ba93e1d.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/page-3d71e1b4bbdc71cd.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/(root)/testing/page-59f392409f13d6e2.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/_not-found/page-39e08bc1cc05212e.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/layout-e9e05e4a3b7db2bf.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/loading-c7250a4409d5390a.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/app/not-found-ad38cbe9ef8d5c87.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/b714f034-84667d25e4b39a2c.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/c916193b-d94cd4bfb2839168.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/ca377847-cf77d6babfc6c0ac.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/fd9d1056-e3a181a1e0b74972.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/main-app-6a8204a20955b75d.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/main-c09aea0e6110deef.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8c49a01a7ee34b96.js",revision:"jwKj_HeraVNK9Xp_vrebX"},{url:"/_next/static/css/158583c6bfad706b.css",revision:"158583c6bfad706b"},{url:"/_next/static/css/ac1555e2e05d3188.css",revision:"ac1555e2e05d3188"},{url:"/_next/static/css/e26c170773e77b1d.css",revision:"e26c170773e77b1d"},{url:"/_next/static/jwKj_HeraVNK9Xp_vrebX/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/jwKj_HeraVNK9Xp_vrebX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.svg",revision:"9371737ef6098558568bcc825eac69ac"},{url:"/icons/24-7.png",revision:"fbc305b20008459b415c9b57ff65c5ac"},{url:"/icons/Cart.svg",revision:"5de62319cc19d5bc30033059eeb8db41"},{url:"/icons/Company.svg",revision:"afc8d82f8241090be3ca314acc846956"},{url:"/icons/Home.svg",revision:"2123c2520734817e92944fa2670d4465"},{url:"/icons/Management.svg",revision:"ccb30d750cbf05af952eb7e852c78a67"},{url:"/icons/Medical Doctor.svg",revision:"dcfefd3a786238cb23c00c6e204dc3ec"},{url:"/icons/Pill.svg",revision:"f11995be14a240e6d4141c3cf9897c1a"},{url:"/icons/Procurement.svg",revision:"b7d2e638d4219166b94061369b639c96"},{url:"/icons/Profile.svg",revision:"615748e3e651179e172b610009e50356"},{url:"/icons/User Account.svg",revision:"0bbef2468edf7d7e6713805088b59cdd"},{url:"/icons/Video.svg",revision:"bbff416be996645d1e7c85ec52e9c92b"},{url:"/icons/Warehouse.svg",revision:"43193b25e010ec6e6acd6c18bbb116f4"},{url:"/icons/add-meeting.svg",revision:"30baf72ae5c255331e079f53d0484787"},{url:"/icons/add-personal.svg",revision:"c32222acaee8c6285d94d492ee1cde7d"},{url:"/icons/bx_data.png",revision:"24c117d47032ed3d858ef943e2d5b446"},{url:"/icons/call-ended.svg",revision:"e3ff27bc87e1e1208f3da9dba14276c0"},{url:"/icons/checked.svg",revision:"935f09427dd020a180ea3b2a9661716d"},{url:"/icons/consultation.svg",revision:"98ff00adfae9113f7a37fa9d670f3833"},{url:"/icons/copy.svg",revision:"0a83faba29fd2627ef28eff089641305"},{url:"/icons/dashboard.svg",revision:"a2c2c6d0ed48e800251e23551ba0d869"},{url:"/icons/hamburger.svg",revision:"441d942f09276670fe8c01569b49c24c"},{url:"/icons/ig.png",revision:"f9ec34a7e3528057d5c34a2568764ba0"},{url:"/icons/img-logo-192.png",revision:"614b5f6db1c6221e2754e12f2a5a1630"},{url:"/icons/img-logo-384.png",revision:"d68b0d089f5c50e92a7c9483c9022f44"},{url:"/icons/img-logo-512.png",revision:"4994aba0663642b3d621c3f53c656dce"},{url:"/icons/info.svg",revision:"8dc1eb88aaf629229f29a07222644a54"},{url:"/icons/join-meeting.svg",revision:"73c5f963dddc37539b4810ed363fed55"},{url:"/icons/linkedIn.png",revision:"7d6981779fc211478cc625dea81994ec"},{url:"/icons/loading-circle.svg",revision:"fba9fdd83b93af39ccb5c88a66ea6742"},{url:"/icons/mdi_drugs.png",revision:"7ea0edb28606e7541ab35894a71b5ed2"},{url:"/icons/play.svg",revision:"110e618df5c2705216f72c88c2fa4dfa"},{url:"/icons/previous.svg",revision:"1a30556e274c888e5996366965ec49ce"},{url:"/icons/recordings.svg",revision:"40a06aaa911b22111b601887b1236a7f"},{url:"/icons/schedule.svg",revision:"8a15c065311d9895eaacf469de70019b"},{url:"/icons/share.svg",revision:"154520797f630a872b3705e79cb13009"},{url:"/icons/streamline_insurance-hand.png",revision:"da4f696e467af76d22b78d881715aed0"},{url:"/icons/three-dots.svg",revision:"ffae90fd9cdb6fbf91f3bcb26bee5599"},{url:"/icons/uil_schedule.png",revision:"0a3b08a0dbbf90afce2b5e5c6c1716ab"},{url:"/icons/upcoming.svg",revision:"a7f8bfb4495fa52ae184e8481e167747"},{url:"/icons/userlist.svg",revision:"c181f031664748092be65d7f1667b3ac"},{url:"/images/about-card-1.jpg",revision:"34bd019df898873a2be45e6abb5b9e19"},{url:"/images/about-card-2.jpg",revision:"43082f31dc39b7142125fb31d9dd4fe1"},{url:"/images/about-card-3.jpg",revision:"2366c7be41709461a60ba0fce14fe26f"},{url:"/images/aboutpic.jpg",revision:"2af326d898f63756f1ab32e814909d8e"},{url:"/images/bg.jpeg",revision:"cd0ab59f6602624d6d77000723d32c61"},{url:"/images/doc-1.jpg",revision:"26300c33ad72bea63e0a0a97e57f2b2f"},{url:"/images/doc-2.jpg",revision:"9c4db31de99eecac41d5a4464053c3e8"},{url:"/images/doc-3.jpg",revision:"6a6e09d0c64900128582816d29dc5f1b"},{url:"/images/doc-4.jpg",revision:"c726234033c4566cfae784b5a07cccc0"},{url:"/images/drug 0.jpg",revision:"777cb4726aa20b5235b9a3489a6188e8"},{url:"/images/drug 1.jpg",revision:"d6a6274ad6b36dc2410f7a29c55ce18e"},{url:"/images/drug 11.jpg",revision:"d256be134bb573dd53356bea093e2c51"},{url:"/images/drug 12.jpg",revision:"2f72a0cd51c3de3c09a8f361e2eee1da"},{url:"/images/drug 13.jpg",revision:"918737dadfee704c30a01e49f9bde8a2"},{url:"/images/drug 4.jpg",revision:"459b30cbd9301c7281757994770008c0"},{url:"/images/drug 5.jpg",revision:"8f1a28d5c029b5d4e5c3ce17c433a2d4"},{url:"/images/drug 6.jpg",revision:"a4f28c144a49f7e51ac53ad0934bbbd5"},{url:"/images/drug 7.jpg",revision:"b48635c790d7df56624970f366973170"},{url:"/images/drug 8.jpg",revision:"4e62751d155ca9319e55aabcd672bfd2"},{url:"/images/drug 9.jpg",revision:"d5202b16620676cc9eca0db8747c5ca3"},{url:"/images/health.jpg",revision:"f9863a50614c201675fe6b0e3eb4a045"},{url:"/images/hero.jpg",revision:"fa4d94deb7bbb02ceb27ef4e0acec3e6"},{url:"/images/herobg.jpg",revision:"9a71c1a0cb72178328a2a6769f99ca77"},{url:"/images/hosp-1.jpg",revision:"fb402fa08534b7194a7babdca07bbcd7"},{url:"/images/hosp-2.jpg",revision:"0f2f2ccbac8ec071040fa9395b42876e"},{url:"/images/hosp-3.jpg",revision:"7547c55e3f3b04b3fcf29841020190a9"},{url:"/images/hosp-4.jpg",revision:"383d82d97914b69c85cc80877149b657"},{url:"/images/hosp-5.jpg",revision:"51b98f39b2d953bb25a22112cac5bf06"},{url:"/images/hosp-6.jpg",revision:"9857a26d9259a6d4e8e062375194be3a"},{url:"/images/hosp-7.jpg",revision:"bf1dce387a3c61b56b201c02adc516b3"},{url:"/images/hosp-8.jpg",revision:"2df75dc2bc48785a8c93d7cc8d6019e1"},{url:"/images/hosp-9.jpg",revision:"ce7a6a3a469cb0bea68503089e6b42db"},{url:"/images/laptopGirlSmiling.jpg",revision:"82d97b18e3400d7912065a7c07fcda6b"},{url:"/images/meet-up.jpg",revision:"4df1f8b256a47a677c0a21a65e08c3a2"},{url:"/images/patient-1.jpg",revision:"8820497011194f609de663e61425e129"},{url:"/images/patient-2.jpg",revision:"0f3f068dc8301197ca9d3164c8e56cef"},{url:"/images/patient-3.jpg",revision:"6c94ec5f3b403c5a564cf69d9e987056"},{url:"/images/pharm-sup.jpg",revision:"ee7db7f428f6b77eada41ef0d3c2bb9e"},{url:"/images/sp-logo.png",revision:"6a8c46f67d2021b77b0bcb41bab112ab"},{url:"/images/telemed.jpeg",revision:"aab7b7ee12930ee78cbf0a32601a7078"},{url:"/images/vp-pharm.jpg",revision:"466869df4cceb3dbac4b48781f837f29"},{url:"/images/why-us.jpg",revision:"a260fbcf2e738785b7412da699c38c34"},{url:"/logo.svg",revision:"34e2a4bbedcc0412e2985d9abb96f76f"},{url:"/manifest.json",revision:"8ebc406ea725062cfd7fe2dac8c0cc93"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
