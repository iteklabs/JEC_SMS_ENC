const a0_0x17ec51=a0_0x4fba;function a0_0x4fba(_0xd989d0,_0x418ced){const _0x25f486=a0_0x25f4();return a0_0x4fba=function(_0x4fba0b,_0x60426f){_0x4fba0b=_0x4fba0b-0xb1;let _0x31c55f=_0x25f486[_0x4fba0b];return _0x31c55f;},a0_0x4fba(_0xd989d0,_0x418ced);}(function(_0x23a9d3,_0x15b03a){const _0x30d706=a0_0x4fba,_0x15a960=_0x23a9d3();while(!![]){try{const _0x3bf372=parseInt(_0x30d706(0xc9))/0x1+-parseInt(_0x30d706(0xd8))/0x2*(parseInt(_0x30d706(0xb1))/0x3)+parseInt(_0x30d706(0xc2))/0x4+-parseInt(_0x30d706(0xbc))/0x5+-parseInt(_0x30d706(0xb2))/0x6*(parseInt(_0x30d706(0xb7))/0x7)+-parseInt(_0x30d706(0xb4))/0x8*(-parseInt(_0x30d706(0xc5))/0x9)+parseInt(_0x30d706(0xd2))/0xa;if(_0x3bf372===_0x15b03a)break;else _0x15a960['push'](_0x15a960['shift']());}catch(_0x49c515){_0x15a960['push'](_0x15a960['shift']());}}}(a0_0x25f4,0x56551));const express=require('express'),app=express(),router=express['Router'](),multer=require(a0_0x17ec51(0xc6)),{profile,master_shop,email_settings}=require(a0_0x17ec51(0xce)),auth=require(a0_0x17ec51(0xd7));var timezones=require(a0_0x17ec51(0xbb));const users=require(a0_0x17ec51(0xb9));function a0_0x25f4(){const _0x5d3565=['Hindi','1467ZkSSBH','multer','Portuguese\x20(BR)','German','22317rlSmdS','Portuguese','Arabic\x20(ae)','en-US','log','../models/all_models','/view','master','flash','17698090aAmKoD','success','find','findOne','render','../middleware/auth','8OhFjzF','431331HcPUSK','4145658bfEXls','get','12824lVSmop','user','Arabic','7XnXUuU','English','../public/language/languages.json','language','timezones-list','2817355nPGrOu','warehousemap_outgoing','timezone','English\x20(US)','French','Spanish','518896LefZCh','Chinese'];a0_0x25f4=function(){return _0x5d3565;};return a0_0x25f4();}router[a0_0x17ec51(0xb3)](a0_0x17ec51(0xcf),auth,async(_0x383309,_0x4fabdb)=>{const _0x3c122e=a0_0x17ec51;try{const {username:_0xac4312,email:_0x5ddffa,role:_0xba82ac}=_0x383309[_0x3c122e(0xb5)],_0x23967b=_0x383309[_0x3c122e(0xb5)],_0x2d4955=await profile[_0x3c122e(0xd5)]({'email':_0x23967b['email']}),_0x36e3c8=await master_shop[_0x3c122e(0xd4)]();console[_0x3c122e(0xcd)](_0x3c122e(0xd0),_0x36e3c8);const _0xbf1c7f=new Date()['toLocaleString'](_0x3c122e(0xcc),{'timeZone':_0x36e3c8[0x0][_0x3c122e(0xbe)]});console['log'](_0x3c122e(0xbe),_0xbf1c7f);if(_0x36e3c8[0x0][_0x3c122e(0xba)]==_0x3c122e(0xbf)){var _0x1204a8=users[_0x3c122e(0xb8)];console[_0x3c122e(0xcd)](_0x1204a8);}else{if(_0x36e3c8[0x0][_0x3c122e(0xba)]==_0x3c122e(0xc4))var _0x1204a8=users[_0x3c122e(0xc4)];else{if(_0x36e3c8[0x0][_0x3c122e(0xba)]==_0x3c122e(0xc8))var _0x1204a8=users[_0x3c122e(0xc8)];else{if(_0x36e3c8[0x0][_0x3c122e(0xba)]=='Spanish')var _0x1204a8=users[_0x3c122e(0xc1)];else{if(_0x36e3c8[0x0][_0x3c122e(0xba)]==_0x3c122e(0xc0))var _0x1204a8=users[_0x3c122e(0xc0)];else{if(_0x36e3c8[0x0]['language']==_0x3c122e(0xc7))var _0x1204a8=users[_0x3c122e(0xca)];else{if(_0x36e3c8[0x0][_0x3c122e(0xba)]==_0x3c122e(0xc3))var _0x1204a8=users[_0x3c122e(0xc3)];else{if(_0x36e3c8[0x0][_0x3c122e(0xba)]==_0x3c122e(0xcb))var _0x1204a8=users[_0x3c122e(0xb6)];}}}}}}}_0x4fabdb[_0x3c122e(0xd6)](_0x3c122e(0xbd),{'success':_0x383309[_0x3c122e(0xd1)](_0x3c122e(0xd3)),'errors':_0x383309[_0x3c122e(0xd1)]('errors'),'role':_0x23967b,'profile':_0x2d4955,'master_shop':_0x36e3c8,'timezones':timezones,'language':_0x1204a8});}catch(_0x2fe341){console[_0x3c122e(0xcd)](_0x2fe341);}}),module['exports']=router;