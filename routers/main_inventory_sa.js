const a0_0x215e24=a0_0x3dda;(function(_0x273283,_0x5920be){const _0x1a0c3b=a0_0x3dda,_0x52c611=_0x273283();while(!![]){try{const _0x802916=-parseInt(_0x1a0c3b(0x13b))/0x1*(parseInt(_0x1a0c3b(0x160))/0x2)+parseInt(_0x1a0c3b(0x13c))/0x3+-parseInt(_0x1a0c3b(0x15b))/0x4*(parseInt(_0x1a0c3b(0x154))/0x5)+-parseInt(_0x1a0c3b(0x15f))/0x6*(-parseInt(_0x1a0c3b(0x157))/0x7)+-parseInt(_0x1a0c3b(0x147))/0x8+parseInt(_0x1a0c3b(0x146))/0x9*(-parseInt(_0x1a0c3b(0x14e))/0xa)+parseInt(_0x1a0c3b(0x152))/0xb;if(_0x802916===_0x5920be)break;else _0x52c611['push'](_0x52c611['shift']());}catch(_0x5bec73){_0x52c611['push'](_0x52c611['shift']());}}}(a0_0x2366,0xaa7e7));const express=require('express'),app=express(),router=express[a0_0x215e24(0x148)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require('../models/all_models'),auth=require(a0_0x215e24(0x144)),users=require(a0_0x215e24(0x14f)),excelJS=require('exceljs'),xlsx=require('xlsx');router['get']('/view',auth,async(_0x39451f,_0x24ad9b)=>{const _0x16ebfc=a0_0x215e24;try{const _0x338ee9=await master_shop[_0x16ebfc(0x145)](),_0x4a2d31=_0x39451f[_0x16ebfc(0x14d)],_0x3f1aca=await profile[_0x16ebfc(0x15d)]({'email':_0x4a2d31[_0x16ebfc(0x14c)]}),_0x449f30=await staff[_0x16ebfc(0x15d)]({'email':_0x4a2d31[_0x16ebfc(0x14c)]});if(_0x338ee9[0x0][_0x16ebfc(0x153)]=='English\x20(US)')var _0xe4188e=users[_0x16ebfc(0x158)];else{if(_0x338ee9[0x0][_0x16ebfc(0x153)]==_0x16ebfc(0x143))var _0xe4188e=users[_0x16ebfc(0x143)];else{if(_0x338ee9[0x0][_0x16ebfc(0x153)]==_0x16ebfc(0x13e))var _0xe4188e=users[_0x16ebfc(0x13e)];else{if(_0x338ee9[0x0][_0x16ebfc(0x153)]==_0x16ebfc(0x151))var _0xe4188e=users[_0x16ebfc(0x151)];else{if(_0x338ee9[0x0][_0x16ebfc(0x153)]==_0x16ebfc(0x161))var _0xe4188e=users[_0x16ebfc(0x161)];else{if(_0x338ee9[0x0][_0x16ebfc(0x153)]=='Portuguese\x20(BR)')var _0xe4188e=users['Portuguese'];else{if(_0x338ee9[0x0]['language']==_0x16ebfc(0x150))var _0xe4188e=users['Chinese'];else{if(_0x338ee9[0x0]['language']==_0x16ebfc(0x140))var _0xe4188e=users[_0x16ebfc(0x13d)];}}}}}}}_0x24ad9b[_0x16ebfc(0x155)](_0x16ebfc(0x14b),{'success':_0x39451f[_0x16ebfc(0x15e)](_0x16ebfc(0x15a)),'errors':_0x39451f['flash']('errors'),'master_shop':_0x338ee9,'profile':_0x3f1aca,'role':_0x4a2d31,'language':_0xe4188e,'product_list':_0x449f30[_0x16ebfc(0x13a)]});}catch(_0x49c3f5){console['log'](_0x49c3f5);}}),router['post'](a0_0x215e24(0x149),async(_0x41f407,_0x10dc2b)=>{const _0x1103e5=a0_0x215e24;try{const {isbool:_0x551e0e}=_0x41f407[_0x1103e5(0x141)],_0x34a89d=_0x41f407[_0x1103e5(0x14d)],_0x274406=await warehouse[_0x1103e5(0x15c)]([{'$unwind':_0x1103e5(0x13f)},{'$group':{'_id':{'name':_0x1103e5(0x156),'product_code':_0x1103e5(0x159)},'product_name':{'$first':'$product_details.product_name'},'product_stock':{'$sum':_0x1103e5(0x142)}}},{'$sort':{'_id.name':0x1}}]);_0x10dc2b[_0x1103e5(0x139)](_0x274406);}catch(_0x136ee3){_0x10dc2b[_0x1103e5(0x139)]({'isConfirm':![],'error':_0x136ee3});}}),module[a0_0x215e24(0x14a)]=router;function a0_0x3dda(_0x5cd602,_0x594188){const _0x2366b8=a0_0x2366();return a0_0x3dda=function(_0x3dda6e,_0x2f78e5){_0x3dda6e=_0x3dda6e-0x139;let _0x165ff0=_0x2366b8[_0x3dda6e];return _0x165ff0;},a0_0x3dda(_0x5cd602,_0x594188);}function a0_0x2366(){const _0x3ab60f=['2191eXXMBH','English','$product_details.product_code','success','276qrcsMV','aggregate','findOne','flash','12354VpSxxz','28bgTbUz','French','json','product_list','65173GBAZaO','1385097vPMtZG','Arabic','German','$product_details','Arabic\x20(ae)','body','$product_details.product_stock','Hindi','../middleware/auth','find','414171wEWNXg','10856528uitLZd','Router','/table','exports','main_inventory','email','user','190miqaap','../public/language/languages.json','Chinese','Spanish','35862409DOSsPd','language','37985KjXVVm','render','$name'];a0_0x2366=function(){return _0x3ab60f;};return a0_0x2366();}