const a0_0x1f87c6=a0_0x4621;function a0_0x15f9(){const _0x46d62d=['json','9OTKTJj','985beTuzP','Portuguese','Arabic','warehouse_checking','language','5418450OkfPJp','success','French','render','express','user','path','English\x20(US)','Spanish','log','4102866rVsOAl','../models/all_models','English','Chinese','5440200vPbjbJ','1313500inRInT','Arabic\x20(ae)','14oONWJX','exports','14324gGKWHb','nodemailer','Router','email','1261067Rxcrkp','Portuguese\x20(BR)','/view/','Hindi','14068570JBDaxe','German','../middleware/auth','flash'];a0_0x15f9=function(){return _0x46d62d;};return a0_0x15f9();}(function(_0x59e379,_0x385d68){const _0x5a87c2=a0_0x4621,_0x51960f=_0x59e379();while(!![]){try{const _0x5d782d=-parseInt(_0x5a87c2(0x17c))/0x1+parseInt(_0x5a87c2(0x174))/0x2+-parseInt(_0x5a87c2(0x16f))/0x3+-parseInt(_0x5a87c2(0x178))/0x4*(parseInt(_0x5a87c2(0x186))/0x5)+parseInt(_0x5a87c2(0x165))/0x6+-parseInt(_0x5a87c2(0x176))/0x7*(-parseInt(_0x5a87c2(0x173))/0x8)+parseInt(_0x5a87c2(0x185))/0x9*(parseInt(_0x5a87c2(0x180))/0xa);if(_0x5d782d===_0x385d68)break;else _0x51960f['push'](_0x51960f['shift']());}catch(_0x5c3655){_0x51960f['push'](_0x51960f['shift']());}}}(a0_0x15f9,0xf254a));const express=require(a0_0x1f87c6(0x169)),app=express(),router=express[a0_0x1f87c6(0x17a)](),{warehouse_validation_setup,master_shop,profile}=require(a0_0x1f87c6(0x170)),auth=require(a0_0x1f87c6(0x182)),nodemailer=require(a0_0x1f87c6(0x179));var ejs=require('ejs');const path=require(a0_0x1f87c6(0x16b)),users=require('../public/language/languages.json');function a0_0x4621(_0x18e41e,_0x3987ce){const _0x15f997=a0_0x15f9();return a0_0x4621=function(_0x4621cf,_0x278a37){_0x4621cf=_0x4621cf-0x161;let _0x51ad4a=_0x15f997[_0x4621cf];return _0x51ad4a;},a0_0x4621(_0x18e41e,_0x3987ce);}router['get'](a0_0x1f87c6(0x17e),auth,async(_0x5998bf,_0x14ce95)=>{const _0x10c838=a0_0x1f87c6;try{const {username:_0x731788,email:_0x5d53c6,role:_0x1b913e}=_0x5998bf['user'],_0x34728c=_0x5998bf[_0x10c838(0x16a)],_0xacabfe=await profile['findOne']({'email':_0x34728c[_0x10c838(0x17b)]}),_0x1ca14c=await master_shop['find']();if(_0x1ca14c[0x0]['language']==_0x10c838(0x16c))var _0x4378b6=users[_0x10c838(0x171)];else{if(_0x1ca14c[0x0]['language']==_0x10c838(0x17f))var _0x4378b6=users[_0x10c838(0x17f)];else{if(_0x1ca14c[0x0]['language']=='German')var _0x4378b6=users[_0x10c838(0x181)];else{if(_0x1ca14c[0x0]['language']==_0x10c838(0x16d))var _0x4378b6=users[_0x10c838(0x16d)];else{if(_0x1ca14c[0x0][_0x10c838(0x164)]=='French')var _0x4378b6=users[_0x10c838(0x167)];else{if(_0x1ca14c[0x0][_0x10c838(0x164)]==_0x10c838(0x17d))var _0x4378b6=users[_0x10c838(0x161)];else{if(_0x1ca14c[0x0][_0x10c838(0x164)]==_0x10c838(0x172))var _0x4378b6=users['Chinese'];else{if(_0x1ca14c[0x0]['language']==_0x10c838(0x175))var _0x4378b6=users[_0x10c838(0x162)];}}}}}}}_0x14ce95[_0x10c838(0x168)](_0x10c838(0x163),{'success':_0x5998bf['flash'](_0x10c838(0x166)),'errors':_0x5998bf[_0x10c838(0x183)]('errors'),'profile':_0xacabfe,'master_shop':_0x1ca14c,'role':_0x34728c,'language':_0x4378b6}),_0x14ce95[_0x10c838(0x184)](_0xacabfe);}catch(_0x1a72be){console[_0x10c838(0x16e)](_0x1a72be);}}),module[a0_0x1f87c6(0x177)]=router;