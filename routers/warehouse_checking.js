const a0_0x53c575=a0_0x362c;(function(_0x4bfff0,_0x3855d9){const _0x3a05b0=a0_0x362c,_0x5f1114=_0x4bfff0();while(!![]){try{const _0x3d92a5=parseInt(_0x3a05b0(0x176))/0x1*(-parseInt(_0x3a05b0(0x177))/0x2)+parseInt(_0x3a05b0(0x175))/0x3+parseInt(_0x3a05b0(0x182))/0x4*(-parseInt(_0x3a05b0(0x170))/0x5)+-parseInt(_0x3a05b0(0x167))/0x6+-parseInt(_0x3a05b0(0x173))/0x7+parseInt(_0x3a05b0(0x181))/0x8+parseInt(_0x3a05b0(0x169))/0x9;if(_0x3d92a5===_0x3855d9)break;else _0x5f1114['push'](_0x5f1114['shift']());}catch(_0x50d189){_0x5f1114['push'](_0x5f1114['shift']());}}}(a0_0x4785,0x3dcac));const express=require(a0_0x53c575(0x16a)),app=express(),router=express[a0_0x53c575(0x16e)](),{warehouse_validation_setup,master_shop,profile}=require(a0_0x53c575(0x17b)),auth=require(a0_0x53c575(0x16f)),nodemailer=require(a0_0x53c575(0x171));function a0_0x362c(_0x107b95,_0x22b542){const _0x4785c6=a0_0x4785();return a0_0x362c=function(_0x362cce,_0x2b868e){_0x362cce=_0x362cce-0x162;let _0x504ac2=_0x4785c6[_0x362cce];return _0x504ac2;},a0_0x362c(_0x107b95,_0x22b542);}var ejs=require(a0_0x53c575(0x17c));const path=require('path'),users=require('../public/language/languages.json');router['get']('/view/',auth,async(_0x41eb03,_0x5b9331)=>{const _0x2236f4=a0_0x53c575;try{const {username:_0x317acb,email:_0x35027e,role:_0x4b9be8}=_0x41eb03['user'],_0x478da6=_0x41eb03[_0x2236f4(0x165)],_0x4f4046=await profile[_0x2236f4(0x16c)]({'email':_0x478da6[_0x2236f4(0x185)]}),_0x43f55f=await master_shop[_0x2236f4(0x163)]();if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x178))var _0x721f91=users[_0x2236f4(0x164)];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x166))var _0x721f91=users[_0x2236f4(0x166)];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x162))var _0x721f91=users['German'];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x168))var _0x721f91=users[_0x2236f4(0x168)];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x172))var _0x721f91=users[_0x2236f4(0x172)];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x17a))var _0x721f91=users[_0x2236f4(0x17f)];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x16b))var _0x721f91=users[_0x2236f4(0x16b)];else{if(_0x43f55f[0x0][_0x2236f4(0x17e)]==_0x2236f4(0x16d))var _0x721f91=users[_0x2236f4(0x183)];}}}}}}}_0x5b9331['render'](_0x2236f4(0x17d),{'success':_0x41eb03[_0x2236f4(0x184)](_0x2236f4(0x179)),'errors':_0x41eb03['flash'](_0x2236f4(0x174)),'profile':_0x4f4046,'master_shop':_0x43f55f,'role':_0x478da6,'language':_0x721f91}),_0x5b9331['json'](_0x4f4046);}catch(_0x390930){console[_0x2236f4(0x180)](_0x390930);}}),module['exports']=router;function a0_0x4785(){const _0x88f34d=['266872KWDJIP','17684eTDnJn','Arabic','flash','email','German','find','English','user','Hindi','721488KIeQks','Spanish','11306277pGldlz','express','Chinese','findOne','Arabic\x20(ae)','Router','../middleware/auth','335xyeVJE','nodemailer','French','2464455Aueaox','errors','682572psiZmQ','23596hJlqgb','42ebopZI','English\x20(US)','success','Portuguese\x20(BR)','../models/all_models','ejs','warehouse_checking','language','Portuguese','log'];a0_0x4785=function(){return _0x88f34d;};return a0_0x4785();}