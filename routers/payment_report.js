const a0_0x50f627=a0_0x9926;(function(_0x4c0068,_0x5ba7e9){const _0x3082d6=a0_0x9926,_0x227583=_0x4c0068();while(!![]){try{const _0x4bcea2=parseInt(_0x3082d6(0xed))/0x1+parseInt(_0x3082d6(0xf2))/0x2+-parseInt(_0x3082d6(0xe2))/0x3+-parseInt(_0x3082d6(0xfa))/0x4+parseInt(_0x3082d6(0xdb))/0x5+parseInt(_0x3082d6(0xf9))/0x6+-parseInt(_0x3082d6(0xe1))/0x7;if(_0x4bcea2===_0x5ba7e9)break;else _0x227583['push'](_0x227583['shift']());}catch(_0x16b832){_0x227583['push'](_0x227583['shift']());}}}(a0_0x4f35,0xd589b));function a0_0x4f35(){const _0x53ea8e=['../models/all_models','Arabic','French','exports','1432466LHOuVb','../public/language/languages.json','email','master','German','English\x20(US)','language','1051008lWoQym','2858464JIUwks','Chinese','/supplier','flash','supplier_payment_report','render','Portuguese','3694185ebOxgw','user','find','express','Spanish','errors','8836485GaKvDB','257448PnkuYO','customer_payment_report','success','/customer','../middleware/auth','log','English','Hindi','Arabic\x20(ae)','get','findOne','1307200NurZIv'];a0_0x4f35=function(){return _0x53ea8e;};return a0_0x4f35();}function a0_0x9926(_0x3b5cbe,_0x4eb826){const _0x4f3566=a0_0x4f35();return a0_0x9926=function(_0x99267f,_0x129586){_0x99267f=_0x99267f-0xd8;let _0x1f0edc=_0x4f3566[_0x99267f];return _0x1f0edc;},a0_0x9926(_0x3b5cbe,_0x4eb826);}const express=require(a0_0x50f627(0xde)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x50f627(0xee)),auth=require(a0_0x50f627(0xe6)),users=require(a0_0x50f627(0xf3));router['get'](a0_0x50f627(0xfc),auth,async(_0x408344,_0x865432)=>{const _0x2501a8=a0_0x50f627;try{const {username:_0x33111c,email:_0x28a020,role:_0x37ad11}=_0x408344[_0x2501a8(0xdc)],_0x739f1e=_0x408344[_0x2501a8(0xdc)],_0x4dd9ec=await profile[_0x2501a8(0xec)]({'email':_0x739f1e[_0x2501a8(0xf4)]}),_0x19ffdc=await master_shop[_0x2501a8(0xdd)]();console['log'](_0x2501a8(0xf5),_0x19ffdc);const _0x35388d=await suppliers_payment[_0x2501a8(0xdd)]();console[_0x2501a8(0xe7)](_0x35388d);if(_0x19ffdc[0x0]['language']=='English\x20(US)'){var _0x300962=users[_0x2501a8(0xe8)];console[_0x2501a8(0xe7)](_0x300962);}else{if(_0x19ffdc[0x0][_0x2501a8(0xf8)]=='Hindi')var _0x300962=users[_0x2501a8(0xe9)];else{if(_0x19ffdc[0x0][_0x2501a8(0xf8)]==_0x2501a8(0xf6))var _0x300962=users[_0x2501a8(0xf6)];else{if(_0x19ffdc[0x0][_0x2501a8(0xf8)]==_0x2501a8(0xdf))var _0x300962=users[_0x2501a8(0xdf)];else{if(_0x19ffdc[0x0]['language']==_0x2501a8(0xf0))var _0x300962=users[_0x2501a8(0xf0)];else{if(_0x19ffdc[0x0][_0x2501a8(0xf8)]=='Portuguese\x20(BR)')var _0x300962=users['Portuguese'];else{if(_0x19ffdc[0x0][_0x2501a8(0xf8)]==_0x2501a8(0xfb))var _0x300962=users['Chinese'];else{if(_0x19ffdc[0x0][_0x2501a8(0xf8)]==_0x2501a8(0xea))var _0x300962=users[_0x2501a8(0xef)];}}}}}}}_0x865432[_0x2501a8(0xd9)](_0x2501a8(0xd8),{'success':_0x408344[_0x2501a8(0xfd)](_0x2501a8(0xe4)),'errors':_0x408344[_0x2501a8(0xfd)](_0x2501a8(0xe0)),'role':_0x739f1e,'profile':_0x4dd9ec,'suppliers_data':_0x35388d,'master_shop':_0x19ffdc,'language':_0x300962});}catch(_0x1556a6){console['log'](_0x1556a6);}}),router[a0_0x50f627(0xeb)](a0_0x50f627(0xe5),auth,async(_0x5cb8d1,_0x1fe663)=>{const _0x24c683=a0_0x50f627;try{const {username:_0x444a02,email:_0x911ba3,role:_0xd2f874}=_0x5cb8d1[_0x24c683(0xdc)],_0x4fd091=_0x5cb8d1[_0x24c683(0xdc)],_0x254c44=await profile[_0x24c683(0xec)]({'email':_0x4fd091[_0x24c683(0xf4)]}),_0x5ae593=await master_shop[_0x24c683(0xdd)]();console[_0x24c683(0xe7)](_0x24c683(0xf5),_0x5ae593);const _0x5ab445=await customer_payment[_0x24c683(0xdd)]();console[_0x24c683(0xe7)](_0x5ab445);if(_0x5ae593[0x0][_0x24c683(0xf8)]==_0x24c683(0xf7)){var _0x271a87=users[_0x24c683(0xe8)];console['log'](_0x271a87);}else{if(_0x5ae593[0x0][_0x24c683(0xf8)]==_0x24c683(0xe9))var _0x271a87=users[_0x24c683(0xe9)];else{if(_0x5ae593[0x0][_0x24c683(0xf8)]==_0x24c683(0xf6))var _0x271a87=users[_0x24c683(0xf6)];else{if(_0x5ae593[0x0][_0x24c683(0xf8)]==_0x24c683(0xdf))var _0x271a87=users[_0x24c683(0xdf)];else{if(_0x5ae593[0x0][_0x24c683(0xf8)]==_0x24c683(0xf0))var _0x271a87=users[_0x24c683(0xf0)];else{if(_0x5ae593[0x0]['language']=='Portuguese\x20(BR)')var _0x271a87=users[_0x24c683(0xda)];else{if(_0x5ae593[0x0]['language']==_0x24c683(0xfb))var _0x271a87=users[_0x24c683(0xfb)];else{if(_0x5ae593[0x0][_0x24c683(0xf8)]=='Arabic\x20(ae)')var _0x271a87=users[_0x24c683(0xef)];}}}}}}}_0x1fe663[_0x24c683(0xd9)](_0x24c683(0xe3),{'success':_0x5cb8d1['flash'](_0x24c683(0xe4)),'errors':_0x5cb8d1[_0x24c683(0xfd)](_0x24c683(0xe0)),'role':_0x4fd091,'profile':_0x254c44,'customer_data':_0x5ab445,'master_shop':_0x5ae593,'language':_0x271a87});}catch(_0x12aba1){console['log'](_0x12aba1);}}),module[a0_0x50f627(0xf1)]=router;