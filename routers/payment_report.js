const a0_0x2c4d0=a0_0x5c0e;(function(_0x59ece5,_0x9a71ea){const _0xbc2b5d=a0_0x5c0e,_0xda6405=_0x59ece5();while(!![]){try{const _0x1cf905=-parseInt(_0xbc2b5d(0x9d))/0x1+parseInt(_0xbc2b5d(0x95))/0x2+-parseInt(_0xbc2b5d(0x9f))/0x3*(-parseInt(_0xbc2b5d(0x7e))/0x4)+parseInt(_0xbc2b5d(0x86))/0x5*(parseInt(_0xbc2b5d(0x85))/0x6)+parseInt(_0xbc2b5d(0x88))/0x7*(parseInt(_0xbc2b5d(0x82))/0x8)+parseInt(_0xbc2b5d(0x8c))/0x9+-parseInt(_0xbc2b5d(0x7b))/0xa;if(_0x1cf905===_0x9a71ea)break;else _0xda6405['push'](_0xda6405['shift']());}catch(_0x34e6a8){_0xda6405['push'](_0xda6405['shift']());}}}(a0_0x325e,0x239e0));const express=require(a0_0x2c4d0(0x8e)),app=express(),router=express[a0_0x2c4d0(0x81)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require('../models/all_models'),auth=require(a0_0x2c4d0(0x92)),users=require(a0_0x2c4d0(0x7f));function a0_0x5c0e(_0x5dec52,_0x5d8f49){const _0x325e18=a0_0x325e();return a0_0x5c0e=function(_0x5c0e52,_0x30e62d){_0x5c0e52=_0x5c0e52-0x78;let _0x506d30=_0x325e18[_0x5c0e52];return _0x506d30;},a0_0x5c0e(_0x5dec52,_0x5d8f49);}router[a0_0x2c4d0(0x8d)](a0_0x2c4d0(0x78),auth,async(_0x4f2ba1,_0x2daccc)=>{const _0x5ba1e7=a0_0x2c4d0;try{const {username:_0x551b39,email:_0x4d58ac,role:_0x336de6}=_0x4f2ba1[_0x5ba1e7(0x7c)],_0x2918e8=_0x4f2ba1[_0x5ba1e7(0x7c)],_0x3bc423=await profile['findOne']({'email':_0x2918e8[_0x5ba1e7(0x93)]}),_0x467bff=await master_shop['find']();console[_0x5ba1e7(0x9e)](_0x5ba1e7(0x7d),_0x467bff);const _0x5a4952=await suppliers_payment[_0x5ba1e7(0x96)]();console[_0x5ba1e7(0x9e)](_0x5a4952);if(_0x467bff[0x0][_0x5ba1e7(0x87)]==_0x5ba1e7(0x94)){var _0x437771=users['English'];console['log'](_0x437771);}else{if(_0x467bff[0x0][_0x5ba1e7(0x87)]=='Hindi')var _0x437771=users[_0x5ba1e7(0x91)];else{if(_0x467bff[0x0][_0x5ba1e7(0x87)]=='German')var _0x437771=users[_0x5ba1e7(0x89)];else{if(_0x467bff[0x0]['language']==_0x5ba1e7(0x97))var _0x437771=users[_0x5ba1e7(0x97)];else{if(_0x467bff[0x0][_0x5ba1e7(0x87)]=='French')var _0x437771=users[_0x5ba1e7(0x90)];else{if(_0x467bff[0x0][_0x5ba1e7(0x87)]==_0x5ba1e7(0x9a))var _0x437771=users['Portuguese'];else{if(_0x467bff[0x0][_0x5ba1e7(0x87)]=='Chinese')var _0x437771=users['Chinese'];else{if(_0x467bff[0x0][_0x5ba1e7(0x87)]==_0x5ba1e7(0x99))var _0x437771=users[_0x5ba1e7(0x8b)];}}}}}}}_0x2daccc['render'](_0x5ba1e7(0x9c),{'success':_0x4f2ba1[_0x5ba1e7(0x83)](_0x5ba1e7(0x8a)),'errors':_0x4f2ba1[_0x5ba1e7(0x83)](_0x5ba1e7(0x84)),'role':_0x2918e8,'profile':_0x3bc423,'suppliers_data':_0x5a4952,'master_shop':_0x467bff,'language':_0x437771});}catch(_0x2a9d0b){console[_0x5ba1e7(0x9e)](_0x2a9d0b);}}),router[a0_0x2c4d0(0x8d)](a0_0x2c4d0(0x8f),auth,async(_0x50ec1b,_0x1476eb)=>{const _0x22171c=a0_0x2c4d0;try{const {username:_0x795aff,email:_0x33beca,role:_0x5873a8}=_0x50ec1b['user'],_0x589ca6=_0x50ec1b['user'],_0x23bc44=await profile['findOne']({'email':_0x589ca6['email']}),_0x185340=await master_shop['find']();console[_0x22171c(0x9e)](_0x22171c(0x7d),_0x185340);const _0x5d670f=await customer_payment['find']();console[_0x22171c(0x9e)](_0x5d670f);if(_0x185340[0x0][_0x22171c(0x87)]==_0x22171c(0x94)){var _0x2d65ad=users[_0x22171c(0x80)];console[_0x22171c(0x9e)](_0x2d65ad);}else{if(_0x185340[0x0][_0x22171c(0x87)]=='Hindi')var _0x2d65ad=users[_0x22171c(0x91)];else{if(_0x185340[0x0][_0x22171c(0x87)]==_0x22171c(0x89))var _0x2d65ad=users['German'];else{if(_0x185340[0x0][_0x22171c(0x87)]==_0x22171c(0x97))var _0x2d65ad=users[_0x22171c(0x97)];else{if(_0x185340[0x0][_0x22171c(0x87)]==_0x22171c(0x90))var _0x2d65ad=users[_0x22171c(0x90)];else{if(_0x185340[0x0][_0x22171c(0x87)]=='Portuguese\x20(BR)')var _0x2d65ad=users[_0x22171c(0x79)];else{if(_0x185340[0x0][_0x22171c(0x87)]==_0x22171c(0x98))var _0x2d65ad=users['Chinese'];else{if(_0x185340[0x0][_0x22171c(0x87)]==_0x22171c(0x99))var _0x2d65ad=users[_0x22171c(0x8b)];}}}}}}}_0x1476eb[_0x22171c(0x7a)](_0x22171c(0x9b),{'success':_0x50ec1b[_0x22171c(0x83)]('success'),'errors':_0x50ec1b['flash']('errors'),'role':_0x589ca6,'profile':_0x23bc44,'customer_data':_0x5d670f,'master_shop':_0x185340,'language':_0x2d65ad});}catch(_0xc4045e){console[_0x22171c(0x9e)](_0xc4045e);}}),module['exports']=router;function a0_0x325e(){const _0x1fc4fc=['master','452YUTsCw','../public/language/languages.json','English','Router','1816jMstiv','flash','errors','1274256ZBbiUV','5ehRjwd','language','7000czLrfn','German','success','Arabic','466848KWGWsh','get','express','/customer','French','Hindi','../middleware/auth','email','English\x20(US)','536192EMIroZ','find','Spanish','Chinese','Arabic\x20(ae)','Portuguese\x20(BR)','customer_payment_report','supplier_payment_report','41970HAUkCA','log','7557jovSmJ','/supplier','Portuguese','render','8561330aPfdHC','user'];a0_0x325e=function(){return _0x1fc4fc;};return a0_0x325e();}