function a0_0x4b54(){const _0x46450a=['email','language','58088dMKMqa','2PTygYa','Arabic','Spanish','../middleware/auth','8088YLLKQu','Arabic\x20(ae)','4584nfqmtF','Chinese','product_list','flash','/view','_id','1135LOMZmp','log','find','Portuguese\x20(BR)','user','Portuguese','mongoose','render','exports','../public/language/languages.json','1804XFvEIA','French','success','70yLTWnU','Router','847632hJWnij','Hindi','exceljs','3631STrntP','English','238grpgNh','German','express','632745VXWvrJ','69111eewDMK'];a0_0x4b54=function(){return _0x46450a;};return a0_0x4b54();}const a0_0x1da8c0=a0_0x1b8e;(function(_0x58fbee,_0x263cd2){const _0x1a19ea=a0_0x1b8e,_0x279737=_0x58fbee();while(!![]){try{const _0x4ffe88=-parseInt(_0x1a19ea(0x207))/0x1*(parseInt(_0x1a19ea(0x211))/0x2)+parseInt(_0x1a19ea(0x20c))/0x3+-parseInt(_0x1a19ea(0x204))/0x4+parseInt(_0x1a19ea(0x1f5))/0x5*(-parseInt(_0x1a19ea(0x1ef))/0x6)+-parseInt(_0x1a19ea(0x209))/0x7*(-parseInt(_0x1a19ea(0x210))/0x8)+parseInt(_0x1a19ea(0x20d))/0x9*(-parseInt(_0x1a19ea(0x202))/0xa)+-parseInt(_0x1a19ea(0x1ff))/0xb*(-parseInt(_0x1a19ea(0x1ed))/0xc);if(_0x4ffe88===_0x263cd2)break;else _0x279737['push'](_0x279737['shift']());}catch(_0x576eca){_0x279737['push'](_0x279737['shift']());}}}(a0_0x4b54,0x1eaa5));function a0_0x1b8e(_0x147700,_0x317c20){const _0x4b54a6=a0_0x4b54();return a0_0x1b8e=function(_0x1b8e6e,_0x309ba8){_0x1b8e6e=_0x1b8e6e-0x1ec;let _0xdad7c5=_0x4b54a6[_0x1b8e6e];return _0xdad7c5;},a0_0x1b8e(_0x147700,_0x317c20);}const express=require(a0_0x1da8c0(0x20b)),app=express(),router=express[a0_0x1da8c0(0x203)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require('../models/all_models'),auth=require(a0_0x1da8c0(0x1ec)),users=require(a0_0x1da8c0(0x1fe)),excelJS=require(a0_0x1da8c0(0x206)),xlsx=require('xlsx'),mongoose=require(a0_0x1da8c0(0x1fb));router['get'](a0_0x1da8c0(0x1f3),auth,async(_0x40f7ad,_0x3df005)=>{const _0x8a4e22=a0_0x1da8c0;try{const _0x50f906=await master_shop['find'](),_0x2a7236=_0x40f7ad[_0x8a4e22(0x1f9)],_0x1f6aec=await profile['findOne']({'email':_0x2a7236[_0x8a4e22(0x20e)]}),_0x2ac964=await staff['findOne']({'email':_0x2a7236['email']}),_0x45a536=await sales_sa[_0x8a4e22(0x1f7)]({'sales_staff_id':_0x2ac964[_0x8a4e22(0x1f4)]});if(_0x50f906[0x0]['language']=='English\x20(US)')var _0xf27354=users[_0x8a4e22(0x208)];else{if(_0x50f906[0x0][_0x8a4e22(0x20f)]==_0x8a4e22(0x205))var _0xf27354=users[_0x8a4e22(0x205)];else{if(_0x50f906[0x0][_0x8a4e22(0x20f)]=='German')var _0xf27354=users[_0x8a4e22(0x20a)];else{if(_0x50f906[0x0][_0x8a4e22(0x20f)]=='Spanish')var _0xf27354=users[_0x8a4e22(0x213)];else{if(_0x50f906[0x0][_0x8a4e22(0x20f)]==_0x8a4e22(0x200))var _0xf27354=users[_0x8a4e22(0x200)];else{if(_0x50f906[0x0][_0x8a4e22(0x20f)]==_0x8a4e22(0x1f8))var _0xf27354=users[_0x8a4e22(0x1fa)];else{if(_0x50f906[0x0]['language']==_0x8a4e22(0x1f0))var _0xf27354=users[_0x8a4e22(0x1f0)];else{if(_0x50f906[0x0][_0x8a4e22(0x20f)]==_0x8a4e22(0x1ee))var _0xf27354=users[_0x8a4e22(0x212)];}}}}}}}_0x3df005[_0x8a4e22(0x1fc)]('reports_sa',{'success':_0x40f7ad[_0x8a4e22(0x1f2)](_0x8a4e22(0x201)),'errors':_0x40f7ad[_0x8a4e22(0x1f2)]('errors'),'master_shop':_0x50f906,'profile':_0x1f6aec,'role':_0x2a7236,'language':_0xf27354,'product_list':_0x2ac964[_0x8a4e22(0x1f1)],'sales_mine':_0x45a536});}catch(_0x30fe02){console[_0x8a4e22(0x1f6)](_0x30fe02);}}),module[a0_0x1da8c0(0x1fd)]=router;