function a0_0x259e(_0x46af8c,_0x2e952d){const _0xbb3e9a=a0_0xbb3e();return a0_0x259e=function(_0x259e5d,_0x21dad7){_0x259e5d=_0x259e5d-0x10b;let _0x14edc1=_0xbb3e9a[_0x259e5d];return _0x14edc1;},a0_0x259e(_0x46af8c,_0x2e952d);}const a0_0x411c59=a0_0x259e;(function(_0x5ae41a,_0x5b70c5){const _0x4b2899=a0_0x259e,_0x332305=_0x5ae41a();while(!![]){try{const _0x38d695=-parseInt(_0x4b2899(0x12c))/0x1*(parseInt(_0x4b2899(0x10e))/0x2)+parseInt(_0x4b2899(0x127))/0x3*(-parseInt(_0x4b2899(0x10b))/0x4)+-parseInt(_0x4b2899(0x118))/0x5*(-parseInt(_0x4b2899(0x129))/0x6)+parseInt(_0x4b2899(0x11f))/0x7+-parseInt(_0x4b2899(0x11b))/0x8*(-parseInt(_0x4b2899(0x12a))/0x9)+-parseInt(_0x4b2899(0x11c))/0xa+parseInt(_0x4b2899(0x11d))/0xb;if(_0x38d695===_0x5b70c5)break;else _0x332305['push'](_0x332305['shift']());}catch(_0x27f31b){_0x332305['push'](_0x332305['shift']());}}}(a0_0xbb3e,0x44624));const express=require('express'),app=express(),router=express[a0_0x411c59(0x115)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require('../models/all_models'),auth=require(a0_0x411c59(0x125)),users=require(a0_0x411c59(0x114));function a0_0xbb3e(){const _0x2fc6ff=['Spanish','user','Arabic','flash','../public/language/languages.json','Router','master','Portuguese','40FPhPUY','English\x20(US)','Hindi','8THbCid','1506230UaFXGD','9233048QBQCja','get','1010156IAytfk','Chinese','English','German','render','exports','../middleware/auth','log','1233wCLXiM','find','106698ESvoTu','507609DRYyCz','findOne','1UlxuGZ','French','language','/customer','2804dlyWBt','email','Arabic\x20(ae)','927014GAKdXX','errors'];a0_0xbb3e=function(){return _0x2fc6ff;};return a0_0xbb3e();}router['get']('/supplier',auth,async(_0x2106f8,_0x2f7725)=>{const _0x3235ce=a0_0x411c59;try{const {username:_0x358c90,email:_0x12bd35,role:_0x309ed3}=_0x2106f8[_0x3235ce(0x111)],_0xde7add=_0x2106f8[_0x3235ce(0x111)],_0xdd32b1=await profile[_0x3235ce(0x12b)]({'email':_0xde7add[_0x3235ce(0x10c)]}),_0x5dc0e0=await master_shop[_0x3235ce(0x128)]();console[_0x3235ce(0x126)](_0x3235ce(0x116),_0x5dc0e0);const _0x515b0a=await suppliers_payment[_0x3235ce(0x128)]();console[_0x3235ce(0x126)](_0x515b0a);if(_0x5dc0e0[0x0][_0x3235ce(0x12e)]=='English\x20(US)'){var _0x125ad6=users[_0x3235ce(0x121)];console[_0x3235ce(0x126)](_0x125ad6);}else{if(_0x5dc0e0[0x0]['language']=='Hindi')var _0x125ad6=users[_0x3235ce(0x11a)];else{if(_0x5dc0e0[0x0]['language']==_0x3235ce(0x122))var _0x125ad6=users[_0x3235ce(0x122)];else{if(_0x5dc0e0[0x0][_0x3235ce(0x12e)]=='Spanish')var _0x125ad6=users[_0x3235ce(0x110)];else{if(_0x5dc0e0[0x0][_0x3235ce(0x12e)]==_0x3235ce(0x12d))var _0x125ad6=users['French'];else{if(_0x5dc0e0[0x0]['language']=='Portuguese\x20(BR)')var _0x125ad6=users['Portuguese'];else{if(_0x5dc0e0[0x0][_0x3235ce(0x12e)]==_0x3235ce(0x120))var _0x125ad6=users[_0x3235ce(0x120)];else{if(_0x5dc0e0[0x0][_0x3235ce(0x12e)]==_0x3235ce(0x10d))var _0x125ad6=users['Arabic'];}}}}}}}_0x2f7725[_0x3235ce(0x123)]('supplier_payment_report',{'success':_0x2106f8[_0x3235ce(0x113)]('success'),'errors':_0x2106f8[_0x3235ce(0x113)](_0x3235ce(0x10f)),'role':_0xde7add,'profile':_0xdd32b1,'suppliers_data':_0x515b0a,'master_shop':_0x5dc0e0,'language':_0x125ad6});}catch(_0x480f6a){console[_0x3235ce(0x126)](_0x480f6a);}}),router[a0_0x411c59(0x11e)](a0_0x411c59(0x12f),auth,async(_0x1c2f88,_0x4ad398)=>{const _0x118f12=a0_0x411c59;try{const {username:_0x344a67,email:_0x49e80a,role:_0x5524f2}=_0x1c2f88['user'],_0x3f9e4a=_0x1c2f88[_0x118f12(0x111)],_0x152ac5=await profile[_0x118f12(0x12b)]({'email':_0x3f9e4a[_0x118f12(0x10c)]}),_0x187a9b=await master_shop[_0x118f12(0x128)]();console[_0x118f12(0x126)](_0x118f12(0x116),_0x187a9b);const _0x37f21a=await customer_payment[_0x118f12(0x128)]();console['log'](_0x37f21a);if(_0x187a9b[0x0][_0x118f12(0x12e)]==_0x118f12(0x119)){var _0x437fdc=users[_0x118f12(0x121)];console[_0x118f12(0x126)](_0x437fdc);}else{if(_0x187a9b[0x0]['language']==_0x118f12(0x11a))var _0x437fdc=users[_0x118f12(0x11a)];else{if(_0x187a9b[0x0][_0x118f12(0x12e)]==_0x118f12(0x122))var _0x437fdc=users[_0x118f12(0x122)];else{if(_0x187a9b[0x0]['language']==_0x118f12(0x110))var _0x437fdc=users[_0x118f12(0x110)];else{if(_0x187a9b[0x0]['language']==_0x118f12(0x12d))var _0x437fdc=users[_0x118f12(0x12d)];else{if(_0x187a9b[0x0]['language']=='Portuguese\x20(BR)')var _0x437fdc=users[_0x118f12(0x117)];else{if(_0x187a9b[0x0][_0x118f12(0x12e)]=='Chinese')var _0x437fdc=users[_0x118f12(0x120)];else{if(_0x187a9b[0x0][_0x118f12(0x12e)]==_0x118f12(0x10d))var _0x437fdc=users[_0x118f12(0x112)];}}}}}}}_0x4ad398[_0x118f12(0x123)]('customer_payment_report',{'success':_0x1c2f88[_0x118f12(0x113)]('success'),'errors':_0x1c2f88['flash'](_0x118f12(0x10f)),'role':_0x3f9e4a,'profile':_0x152ac5,'customer_data':_0x37f21a,'master_shop':_0x187a9b,'language':_0x437fdc});}catch(_0x4e671b){console[_0x118f12(0x126)](_0x4e671b);}}),module[a0_0x411c59(0x124)]=router;