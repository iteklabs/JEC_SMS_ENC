function a0_0x15ef(){const _0x3ec0ef=['flash','Chinese','Arabic','8725113xANWNQ','../models/all_models','English','user','English\x20(US)','160iIlTWi','log','21265suLBoH','French','4480728AyBKDy','Portuguese\x20(BR)','Arabic\x20(ae)','get','find','master','/supplier','1330wFBDRw','success','supplier_payment_report','2831686zqApKl','findOne','471AoMrTS','Portuguese','Router','email','Spanish','language','../public/language/languages.json','German','errors','852dGtThw','7522vWjSXg','3456888xZWbMO','22960xSPWOu','Hindi','/customer','render'];a0_0x15ef=function(){return _0x3ec0ef;};return a0_0x15ef();}const a0_0x193356=a0_0x314f;(function(_0x3d4bb5,_0x3092f5){const _0x4d5a25=a0_0x314f,_0x350503=_0x3d4bb5();while(!![]){try{const _0x273fdb=parseInt(_0x4d5a25(0x178))/0x1*(-parseInt(_0x4d5a25(0x15a))/0x2)+-parseInt(_0x4d5a25(0x16c))/0x3+-parseInt(_0x4d5a25(0x159))/0x4*(parseInt(_0x4d5a25(0x16a))/0x5)+-parseInt(_0x4d5a25(0x15b))/0x6+parseInt(_0x4d5a25(0x173))/0x7*(parseInt(_0x4d5a25(0x15c))/0x8)+parseInt(_0x4d5a25(0x163))/0x9+parseInt(_0x4d5a25(0x168))/0xa*(parseInt(_0x4d5a25(0x176))/0xb);if(_0x273fdb===_0x3092f5)break;else _0x350503['push'](_0x350503['shift']());}catch(_0x41468c){_0x350503['push'](_0x350503['shift']());}}}(a0_0x15ef,0xd8701));const express=require('express'),app=express(),router=express[a0_0x193356(0x17a)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x193356(0x164)),auth=require('../middleware/auth'),users=require(a0_0x193356(0x17e));function a0_0x314f(_0x2b33b1,_0x30683f){const _0x15efcb=a0_0x15ef();return a0_0x314f=function(_0x314fe6,_0x3e3e86){_0x314fe6=_0x314fe6-0x159;let _0x4859ae=_0x15efcb[_0x314fe6];return _0x4859ae;},a0_0x314f(_0x2b33b1,_0x30683f);}router[a0_0x193356(0x16f)](a0_0x193356(0x172),auth,async(_0x27248a,_0x13dd7e)=>{const _0x51390b=a0_0x193356;try{const {username:_0x438227,email:_0x36f638,role:_0x2e1da1}=_0x27248a[_0x51390b(0x166)],_0x932e87=_0x27248a[_0x51390b(0x166)],_0x424dd9=await profile[_0x51390b(0x177)]({'email':_0x932e87[_0x51390b(0x17b)]}),_0x1314dc=await master_shop['find']();console['log'](_0x51390b(0x171),_0x1314dc);const _0x552809=await suppliers_payment['find']();console[_0x51390b(0x169)](_0x552809);if(_0x1314dc[0x0][_0x51390b(0x17d)]=='English\x20(US)'){var _0x11bdbb=users[_0x51390b(0x165)];console['log'](_0x11bdbb);}else{if(_0x1314dc[0x0]['language']=='Hindi')var _0x11bdbb=users[_0x51390b(0x15d)];else{if(_0x1314dc[0x0][_0x51390b(0x17d)]==_0x51390b(0x17f))var _0x11bdbb=users[_0x51390b(0x17f)];else{if(_0x1314dc[0x0][_0x51390b(0x17d)]==_0x51390b(0x17c))var _0x11bdbb=users['Spanish'];else{if(_0x1314dc[0x0][_0x51390b(0x17d)]==_0x51390b(0x16b))var _0x11bdbb=users[_0x51390b(0x16b)];else{if(_0x1314dc[0x0][_0x51390b(0x17d)]==_0x51390b(0x16d))var _0x11bdbb=users[_0x51390b(0x179)];else{if(_0x1314dc[0x0]['language']==_0x51390b(0x161))var _0x11bdbb=users['Chinese'];else{if(_0x1314dc[0x0][_0x51390b(0x17d)]==_0x51390b(0x16e))var _0x11bdbb=users[_0x51390b(0x162)];}}}}}}}_0x13dd7e[_0x51390b(0x15f)](_0x51390b(0x175),{'success':_0x27248a[_0x51390b(0x160)](_0x51390b(0x174)),'errors':_0x27248a[_0x51390b(0x160)]('errors'),'role':_0x932e87,'profile':_0x424dd9,'suppliers_data':_0x552809,'master_shop':_0x1314dc,'language':_0x11bdbb});}catch(_0x51c991){console['log'](_0x51c991);}}),router['get'](a0_0x193356(0x15e),auth,async(_0x3d622a,_0xd13109)=>{const _0x35583f=a0_0x193356;try{const {username:_0x4ad762,email:_0x5a7acf,role:_0x4965c1}=_0x3d622a[_0x35583f(0x166)],_0x57674a=_0x3d622a[_0x35583f(0x166)],_0x2bc510=await profile['findOne']({'email':_0x57674a[_0x35583f(0x17b)]}),_0x533fa3=await master_shop[_0x35583f(0x170)]();console['log'](_0x35583f(0x171),_0x533fa3);const _0x19a76a=await customer_payment[_0x35583f(0x170)]();console[_0x35583f(0x169)](_0x19a76a);if(_0x533fa3[0x0][_0x35583f(0x17d)]==_0x35583f(0x167)){var _0x2acec1=users['English'];console[_0x35583f(0x169)](_0x2acec1);}else{if(_0x533fa3[0x0][_0x35583f(0x17d)]=='Hindi')var _0x2acec1=users[_0x35583f(0x15d)];else{if(_0x533fa3[0x0][_0x35583f(0x17d)]==_0x35583f(0x17f))var _0x2acec1=users[_0x35583f(0x17f)];else{if(_0x533fa3[0x0][_0x35583f(0x17d)]==_0x35583f(0x17c))var _0x2acec1=users[_0x35583f(0x17c)];else{if(_0x533fa3[0x0][_0x35583f(0x17d)]=='French')var _0x2acec1=users['French'];else{if(_0x533fa3[0x0][_0x35583f(0x17d)]==_0x35583f(0x16d))var _0x2acec1=users[_0x35583f(0x179)];else{if(_0x533fa3[0x0][_0x35583f(0x17d)]==_0x35583f(0x161))var _0x2acec1=users['Chinese'];else{if(_0x533fa3[0x0][_0x35583f(0x17d)]==_0x35583f(0x16e))var _0x2acec1=users[_0x35583f(0x162)];}}}}}}}_0xd13109['render']('customer_payment_report',{'success':_0x3d622a['flash'](_0x35583f(0x174)),'errors':_0x3d622a['flash'](_0x35583f(0x180)),'role':_0x57674a,'profile':_0x2bc510,'customer_data':_0x19a76a,'master_shop':_0x533fa3,'language':_0x2acec1});}catch(_0x48d328){console[_0x35583f(0x169)](_0x48d328);}}),module['exports']=router;