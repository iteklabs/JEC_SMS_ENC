const a0_0x3379d9=a0_0x2aa0;function a0_0x3533(){const _0x1f42a4=['timezones-list','German','language','67924mHVVXv','Router','Portuguese\x20(BR)','flash','master','Arabic\x20(ae)','render','../models/all_models','Spanish','exports','3339726GLzRQQ','log','multer','English\x20(US)','French','errors','email','findOne','Portuguese','5604wVhddH','1365441gFUNVO','1627482mLGNoY','Chinese','7634952DXNHsQ','user','express','timezone','Hindi','600hULomK','/view','English','734214YKlgKE','Arabic','find'];a0_0x3533=function(){return _0x1f42a4;};return a0_0x3533();}function a0_0x2aa0(_0x4cd135,_0xeda4f5){const _0x353320=a0_0x3533();return a0_0x2aa0=function(_0x2aa0dd,_0x55e8fb){_0x2aa0dd=_0x2aa0dd-0x16e;let _0x47e05f=_0x353320[_0x2aa0dd];return _0x47e05f;},a0_0x2aa0(_0x4cd135,_0xeda4f5);}(function(_0x2ed773,_0x598b19){const _0x55e67a=a0_0x2aa0,_0x19d5c5=_0x2ed773();while(!![]){try{const _0x22da20=-parseInt(_0x55e67a(0x18b))/0x1+-parseInt(_0x55e67a(0x185))/0x2+-parseInt(_0x55e67a(0x17b))/0x3+parseInt(_0x55e67a(0x179))/0x4*(parseInt(_0x55e67a(0x182))/0x5)+parseInt(_0x55e67a(0x170))/0x6+-parseInt(_0x55e67a(0x17a))/0x7+parseInt(_0x55e67a(0x17d))/0x8;if(_0x22da20===_0x598b19)break;else _0x19d5c5['push'](_0x19d5c5['shift']());}catch(_0x294623){_0x19d5c5['push'](_0x19d5c5['shift']());}}}(a0_0x3533,0x7ba9a));const express=require(a0_0x3379d9(0x17f)),app=express(),router=express[a0_0x3379d9(0x18c)](),multer=require(a0_0x3379d9(0x172)),{profile,master_shop,email_settings}=require(a0_0x3379d9(0x192)),auth=require('../middleware/auth');var timezones=require(a0_0x3379d9(0x188));const users=require('../public/language/languages.json');router['get'](a0_0x3379d9(0x183),auth,async(_0x5f2077,_0x481de7)=>{const _0x971dff=a0_0x3379d9;try{const {username:_0x527abd,email:_0x332599,role:_0x4d5d49}=_0x5f2077[_0x971dff(0x17e)],_0x6fd869=_0x5f2077['user'],_0x2b47d5=await profile[_0x971dff(0x177)]({'email':_0x6fd869[_0x971dff(0x176)]}),_0x25df36=await master_shop[_0x971dff(0x187)]();console[_0x971dff(0x171)](_0x971dff(0x18f),_0x25df36);const _0xdd9ccd=new Date()['toLocaleString']('en-US',{'timeZone':_0x25df36[0x0][_0x971dff(0x180)]});console[_0x971dff(0x171)](_0x971dff(0x180),_0xdd9ccd);if(_0x25df36[0x0]['language']==_0x971dff(0x173)){var _0x4da2c4=users[_0x971dff(0x184)];console[_0x971dff(0x171)](_0x4da2c4);}else{if(_0x25df36[0x0][_0x971dff(0x18a)]=='Hindi')var _0x4da2c4=users[_0x971dff(0x181)];else{if(_0x25df36[0x0][_0x971dff(0x18a)]==_0x971dff(0x189))var _0x4da2c4=users[_0x971dff(0x189)];else{if(_0x25df36[0x0][_0x971dff(0x18a)]==_0x971dff(0x16e))var _0x4da2c4=users[_0x971dff(0x16e)];else{if(_0x25df36[0x0][_0x971dff(0x18a)]==_0x971dff(0x174))var _0x4da2c4=users[_0x971dff(0x174)];else{if(_0x25df36[0x0]['language']==_0x971dff(0x18d))var _0x4da2c4=users[_0x971dff(0x178)];else{if(_0x25df36[0x0][_0x971dff(0x18a)]==_0x971dff(0x17c))var _0x4da2c4=users[_0x971dff(0x17c)];else{if(_0x25df36[0x0][_0x971dff(0x18a)]==_0x971dff(0x190))var _0x4da2c4=users[_0x971dff(0x186)];}}}}}}}_0x481de7[_0x971dff(0x191)]('warehousemap_outgoing',{'success':_0x5f2077[_0x971dff(0x18e)]('success'),'errors':_0x5f2077[_0x971dff(0x18e)](_0x971dff(0x175)),'role':_0x6fd869,'profile':_0x2b47d5,'master_shop':_0x25df36,'timezones':timezones,'language':_0x4da2c4});}catch(_0x3f3256){console['log'](_0x3f3256);}}),module[a0_0x3379d9(0x16f)]=router;