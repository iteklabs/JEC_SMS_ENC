const a0_0xf6ce8c=a0_0x38ca;(function(_0x5b3bc5,_0x43237f){const _0x222411=a0_0x38ca,_0x1d9edc=_0x5b3bc5();while(!![]){try{const _0x3693dc=-parseInt(_0x222411(0x127))/0x1*(parseInt(_0x222411(0x108))/0x2)+-parseInt(_0x222411(0x122))/0x3*(parseInt(_0x222411(0x123))/0x4)+parseInt(_0x222411(0x126))/0x5+-parseInt(_0x222411(0x121))/0x6+parseInt(_0x222411(0x10f))/0x7*(parseInt(_0x222411(0x10e))/0x8)+parseInt(_0x222411(0x129))/0x9*(parseInt(_0x222411(0x11f))/0xa)+parseInt(_0x222411(0x11e))/0xb*(parseInt(_0x222411(0x10a))/0xc);if(_0x3693dc===_0x43237f)break;else _0x1d9edc['push'](_0x1d9edc['shift']());}catch(_0x5a3dea){_0x1d9edc['push'](_0x1d9edc['shift']());}}}(a0_0x3d6a,0xd68a5));function a0_0x38ca(_0x5d1995,_0x2f0ec4){const _0x3d6a80=a0_0x3d6a();return a0_0x38ca=function(_0x38ca1c,_0x297a8b){_0x38ca1c=_0x38ca1c-0x108;let _0x100571=_0x3d6a80[_0x38ca1c];return _0x100571;},a0_0x38ca(_0x5d1995,_0x2f0ec4);}const express=require(a0_0xf6ce8c(0x125)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0xf6ce8c(0x12a)),auth=require('../middleware/auth'),users=require(a0_0xf6ce8c(0x12f)),excelJS=require(a0_0xf6ce8c(0x11b)),xlsx=require(a0_0xf6ce8c(0x132));router[a0_0xf6ce8c(0x11d)](a0_0xf6ce8c(0x131),auth,async(_0x38e8c8,_0xcd582f)=>{const _0x1c975e=a0_0xf6ce8c;try{const _0x4918fd=await master_shop[_0x1c975e(0x10c)](),_0x3eca12=_0x38e8c8[_0x1c975e(0x12e)],_0x1a559f=await profile['findOne']({'email':_0x3eca12[_0x1c975e(0x124)]}),_0x30b639=await staff['findOne']({'email':_0x3eca12[_0x1c975e(0x124)]});if(_0x4918fd[0x0]['language']==_0x1c975e(0x10b))var _0x165054=users[_0x1c975e(0x12d)];else{if(_0x4918fd[0x0][_0x1c975e(0x118)]==_0x1c975e(0x10d))var _0x165054=users[_0x1c975e(0x10d)];else{if(_0x4918fd[0x0][_0x1c975e(0x118)]=='German')var _0x165054=users[_0x1c975e(0x113)];else{if(_0x4918fd[0x0][_0x1c975e(0x118)]==_0x1c975e(0x117))var _0x165054=users[_0x1c975e(0x117)];else{if(_0x4918fd[0x0][_0x1c975e(0x118)]==_0x1c975e(0x133))var _0x165054=users[_0x1c975e(0x133)];else{if(_0x4918fd[0x0]['language']==_0x1c975e(0x128))var _0x165054=users[_0x1c975e(0x112)];else{if(_0x4918fd[0x0][_0x1c975e(0x118)]==_0x1c975e(0x11c))var _0x165054=users['Chinese'];else{if(_0x4918fd[0x0]['language']==_0x1c975e(0x114))var _0x165054=users[_0x1c975e(0x116)];}}}}}}}_0xcd582f[_0x1c975e(0x130)](_0x1c975e(0x119),{'success':_0x38e8c8[_0x1c975e(0x115)](_0x1c975e(0x110)),'errors':_0x38e8c8[_0x1c975e(0x115)]('errors'),'master_shop':_0x4918fd,'profile':_0x1a559f,'role':_0x3eca12,'language':_0x165054,'product_list':_0x30b639[_0x1c975e(0x11a)]});}catch(_0xac8849){console[_0x1c975e(0x109)](_0xac8849);}}),router['post'](a0_0xf6ce8c(0x12c),async(_0x4421ee,_0x5746b8)=>{const _0x5e5fae=a0_0xf6ce8c;try{const {isbool:_0x52bfcb}=_0x4421ee['body'],_0x55fa78=_0x4421ee[_0x5e5fae(0x12e)],_0x5ae3dd=await warehouse[_0x5e5fae(0x111)]([{'$unwind':_0x5e5fae(0x120)},{'$group':{'_id':{'name':'$name','product_code':'$product_details.product_code'},'product_name':{'$first':'$product_details.product_name'},'product_stock':{'$sum':'$product_details.product_stock'}}},{'$sort':{'_id.name':0x1}}]);_0x5746b8[_0x5e5fae(0x12b)](_0x5ae3dd);}catch(_0x777e4a){_0x5746b8['json']({'isConfirm':![],'error':_0x777e4a});}}),module['exports']=router;function a0_0x3d6a(){const _0x279983=['English','user','../public/language/languages.json','render','/view','xlsx','French','2rhAihM','log','12LTHHtX','English\x20(US)','find','Hindi','3265520tLsOAL','28AkYOAQ','success','aggregate','Portuguese','German','Arabic\x20(ae)','flash','Arabic','Spanish','language','main_inventory','product_list','exceljs','Chinese','get','13588333ZBIVVu','10UbiDbh','$product_details','2964018CaDomu','4923627HLTycj','4TruswN','email','express','4178305ctuVEG','1352111IrekCT','Portuguese\x20(BR)','5961204mHKQLr','../models/all_models','json','/table'];a0_0x3d6a=function(){return _0x279983;};return a0_0x3d6a();}