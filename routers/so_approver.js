function a0_0x5331(){const _0x1f9282=['Portuguese','$warehouse_staff_id','English\x20(US)','28163KjNmDg','find','/setup','$name','post','wms_data','508566NoDzhE','redirect','24431UAlfmT','German','90FUcsWn','so_approver_all','wms_account_id','/add','render','findOne','save','email','express','Chinese','errors','Portuguese\x20(BR)','get','aggregate','_id','$head_id_staff','4571beQgSC','string','so_approver_add','$account_data','acc','495584ThQBNJ','Router','exports','forEach','params','view_so_approvers','success','French','user','staff_id','English','/so_approvers/preview/','../models/all_models','/add/','Spanish','findById','body','/get_sales_data','Hindi','924gMJrME','staffs','accounting_account_id','flash','$wms_data','624lqqwqx','2qubMOp','json','language','../public/language/languages.json','306mUzapu','Arabic\x20(ae)','Arabic','45810pieISb','31852uBVkGV'];a0_0x5331=function(){return _0x1f9282;};return a0_0x5331();}const a0_0x13b48b=a0_0x2188;function a0_0x2188(_0x382fa1,_0x33b073){const _0x533122=a0_0x5331();return a0_0x2188=function(_0x2188fb,_0x1a78ec){_0x2188fb=_0x2188fb-0x1a6;let _0x959877=_0x533122[_0x2188fb];return _0x959877;},a0_0x2188(_0x382fa1,_0x33b073);}(function(_0x2f3323,_0x3064e1){const _0x18427f=a0_0x2188,_0x27c8b6=_0x2f3323();while(!![]){try{const _0x424851=parseInt(_0x18427f(0x1bf))/0x1*(parseInt(_0x18427f(0x1b3))/0x2)+parseInt(_0x18427f(0x1c5))/0x3+parseInt(_0x18427f(0x1bb))/0x4*(-parseInt(_0x18427f(0x1c9))/0x5)+-parseInt(_0x18427f(0x1b2))/0x6*(-parseInt(_0x18427f(0x1d9))/0x7)+parseInt(_0x18427f(0x1de))/0x8+parseInt(_0x18427f(0x1b7))/0x9*(parseInt(_0x18427f(0x1ba))/0xa)+-parseInt(_0x18427f(0x1c7))/0xb*(parseInt(_0x18427f(0x1ad))/0xc);if(_0x424851===_0x3064e1)break;else _0x27c8b6['push'](_0x27c8b6['shift']());}catch(_0x4d97e4){_0x27c8b6['push'](_0x27c8b6['shift']());}}}(a0_0x5331,0x293f4));const express=require(a0_0x13b48b(0x1d1)),app=express(),router=express[a0_0x13b48b(0x1df)](),auth=require('../middleware/auth'),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order,approver_acct,warehouse}=require(a0_0x13b48b(0x1a6)),users=require(a0_0x13b48b(0x1b6));router[a0_0x13b48b(0x1d5)](a0_0x13b48b(0x1c1),auth,async(_0x52daa8,_0x2c53a8)=>{const _0xfccfb8=a0_0x13b48b;try{const _0xf6aa56=_0x52daa8['user'],_0x56be2e=await master_shop['find'](),_0x596c17=await profile['findOne']({'email':_0xf6aa56[_0xfccfb8(0x1d0)]}),_0x730f65=await approver_acct[_0xfccfb8(0x1d6)]([{'$addFields':{'accounting_account_id':{'$toObjectId':_0xfccfb8(0x1d8)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0xfccfb8(0x1bd)}}},{'$lookup':{'from':_0xfccfb8(0x1ae),'localField':_0xfccfb8(0x1af),'foreignField':_0xfccfb8(0x1d7),'as':'account_data'}},{'$unwind':_0xfccfb8(0x1dc)},{'$lookup':{'from':_0xfccfb8(0x1ae),'localField':_0xfccfb8(0x1cb),'foreignField':_0xfccfb8(0x1d7),'as':_0xfccfb8(0x1c4)}},{'$unwind':_0xfccfb8(0x1b1)}]);if(_0x56be2e[0x0][_0xfccfb8(0x1b5)]==_0xfccfb8(0x1be))var _0x27df90=users['English'];else{if(_0x56be2e[0x0][_0xfccfb8(0x1b5)]==_0xfccfb8(0x1ac))var _0x27df90=users[_0xfccfb8(0x1ac)];else{if(_0x56be2e[0x0][_0xfccfb8(0x1b5)]=='German')var _0x27df90=users[_0xfccfb8(0x1c8)];else{if(_0x56be2e[0x0]['language']==_0xfccfb8(0x1a8))var _0x27df90=users[_0xfccfb8(0x1a8)];else{if(_0x56be2e[0x0]['language']==_0xfccfb8(0x1e5))var _0x27df90=users['French'];else{if(_0x56be2e[0x0][_0xfccfb8(0x1b5)]==_0xfccfb8(0x1d4))var _0x27df90=users[_0xfccfb8(0x1bc)];else{if(_0x56be2e[0x0]['language']==_0xfccfb8(0x1d2))var _0x27df90=users[_0xfccfb8(0x1d2)];else{if(_0x56be2e[0x0]['language']==_0xfccfb8(0x1b8))var _0x27df90=users[_0xfccfb8(0x1b9)];}}}}}}}_0x2c53a8['render'](_0xfccfb8(0x1ca),{'success':_0x52daa8['flash'](_0xfccfb8(0x1e4)),'errors':_0x52daa8['flash']('errors'),'role':_0xf6aa56,'profile':_0x596c17,'master_shop':_0x56be2e,'language':_0x27df90,'data':_0x730f65});}catch(_0x4c5cc5){}}),router[a0_0x13b48b(0x1d5)](a0_0x13b48b(0x1cc),auth,async(_0x2c6259,_0x37dcb2)=>{const _0xe39239=a0_0x13b48b;try{const _0x3756e4=_0x2c6259[_0xe39239(0x1e6)],_0x433747=await master_shop[_0xe39239(0x1c0)](),_0x22541e=await profile[_0xe39239(0x1ce)]({'email':_0x3756e4[_0xe39239(0x1d0)]}),_0x379f5e=await staff[_0xe39239(0x1c0)]({'account_category':_0xe39239(0x1dd)}),_0x3a123b=await staff['find']({'account_category':'wm'}),_0x191732=await staff[_0xe39239(0x1c0)]({'account_category':'sa'}),_0x38bbc1=await warehouse['aggregate']([{'$group':{'_id':'$name'}}]);if(_0x433747[0x0][_0xe39239(0x1b5)]==_0xe39239(0x1be))var _0x305f28=users[_0xe39239(0x1e8)];else{if(_0x433747[0x0][_0xe39239(0x1b5)]==_0xe39239(0x1ac))var _0x305f28=users['Hindi'];else{if(_0x433747[0x0][_0xe39239(0x1b5)]==_0xe39239(0x1c8))var _0x305f28=users[_0xe39239(0x1c8)];else{if(_0x433747[0x0][_0xe39239(0x1b5)]==_0xe39239(0x1a8))var _0x305f28=users[_0xe39239(0x1a8)];else{if(_0x433747[0x0][_0xe39239(0x1b5)]==_0xe39239(0x1e5))var _0x305f28=users[_0xe39239(0x1e5)];else{if(_0x433747[0x0]['language']=='Portuguese\x20(BR)')var _0x305f28=users[_0xe39239(0x1bc)];else{if(_0x433747[0x0]['language']==_0xe39239(0x1d2))var _0x305f28=users[_0xe39239(0x1d2)];else{if(_0x433747[0x0][_0xe39239(0x1b5)]==_0xe39239(0x1b8))var _0x305f28=users[_0xe39239(0x1b9)];}}}}}}}_0x37dcb2[_0xe39239(0x1cd)](_0xe39239(0x1db),{'success':_0x2c6259[_0xe39239(0x1b0)](_0xe39239(0x1e4)),'errors':_0x2c6259['flash']('errors'),'role':_0x3756e4,'profile':_0x22541e,'master_shop':_0x433747,'language':_0x305f28,'accounting':_0x379f5e,'warehouse_acct':_0x3a123b,'sales_acct':_0x191732,'warehouse_loc':_0x38bbc1});}catch(_0x264385){}}),router[a0_0x13b48b(0x1c3)](a0_0x13b48b(0x1a7),auth,async(_0x1674d4,_0x27d195)=>{const _0x4092e4=a0_0x13b48b;try{const {accounting_account_id:_0x26f069,warehouse_account_id:_0x1c814d,staff_id:_0x556fd4,warehouse_loc:_0x3f407f}=_0x1674d4[_0x4092e4(0x1aa)];if(typeof _0x556fd4==_0x4092e4(0x1da))var _0x4b1bba=[_0x1674d4[_0x4092e4(0x1aa)][_0x4092e4(0x1e7)]],_0x4ba249=[_0x1674d4[_0x4092e4(0x1aa)]['name_accounting']];else var _0x4b1bba=[..._0x1674d4['body'][_0x4092e4(0x1e7)]],_0x4ba249=[..._0x1674d4[_0x4092e4(0x1aa)]['name_accounting']];const _0x3c2581=_0x4b1bba['map'](_0x1e2f5e=>{return _0x1e2f5e={'id_member':_0x1e2f5e};});_0x4ba249[_0x4092e4(0x1e1)]((_0x1223de,_0xe8d1cc)=>{_0x3c2581[_0xe8d1cc]['name']=_0x1223de;});const _0x256815=new approver_acct({'head_id_staff':_0x26f069,'warehouse_staff_id':_0x1c814d,'warehouse_name':_0x3f407f,'members':_0x3c2581}),_0x267cb8=await _0x256815[_0x4092e4(0x1cf)]();_0x1674d4['flash'](_0x4092e4(0x1e4),'Approver\x20Add\x20successfully'),_0x27d195[_0x4092e4(0x1c6)](_0x4092e4(0x1e9)+_0x267cb8[_0x4092e4(0x1d7)]);}catch(_0x4513f9){}}),router[a0_0x13b48b(0x1c3)](a0_0x13b48b(0x1ab),auth,async(_0x5b6adc,_0x2df0b3)=>{const _0x4368eb=a0_0x13b48b;try{const {id_staff:_0x1e637f}=_0x5b6adc[_0x4368eb(0x1aa)],_0x1cfed9=await staff['findById'](_0x1e637f);_0x2df0b3[_0x4368eb(0x1b4)](_0x1cfed9);}catch(_0x4223d8){}}),router[a0_0x13b48b(0x1d5)]('/preview/:id',auth,async(_0x437eac,_0x2c3aeb)=>{const _0x5857c1=a0_0x13b48b;try{const _0x3efba7=_0x437eac[_0x5857c1(0x1e6)],_0x29233f=_0x437eac[_0x5857c1(0x1e2)]['id'],_0x22ecb8=await master_shop[_0x5857c1(0x1c0)](),_0x4bf912=await profile[_0x5857c1(0x1ce)]({'email':_0x3efba7[_0x5857c1(0x1d0)]}),_0x5de7ad=await staff[_0x5857c1(0x1c0)]({'account_category':'acc'}),_0x58b3cf=await staff['find']({'account_category':'wm'}),_0x1ef44d=await staff[_0x5857c1(0x1c0)]({'account_category':'sa'}),_0x3c01cd=await warehouse[_0x5857c1(0x1d6)]([{'$group':{'_id':_0x5857c1(0x1c2)}}]),_0x6b0039=await approver_acct[_0x5857c1(0x1a9)](_0x29233f);if(_0x22ecb8[0x0][_0x5857c1(0x1b5)]=='English\x20(US)')var _0x36f941=users[_0x5857c1(0x1e8)];else{if(_0x22ecb8[0x0]['language']==_0x5857c1(0x1ac))var _0x36f941=users[_0x5857c1(0x1ac)];else{if(_0x22ecb8[0x0][_0x5857c1(0x1b5)]==_0x5857c1(0x1c8))var _0x36f941=users[_0x5857c1(0x1c8)];else{if(_0x22ecb8[0x0]['language']==_0x5857c1(0x1a8))var _0x36f941=users[_0x5857c1(0x1a8)];else{if(_0x22ecb8[0x0][_0x5857c1(0x1b5)]=='French')var _0x36f941=users[_0x5857c1(0x1e5)];else{if(_0x22ecb8[0x0][_0x5857c1(0x1b5)]==_0x5857c1(0x1d4))var _0x36f941=users[_0x5857c1(0x1bc)];else{if(_0x22ecb8[0x0][_0x5857c1(0x1b5)]==_0x5857c1(0x1d2))var _0x36f941=users['Chinese'];else{if(_0x22ecb8[0x0]['language']==_0x5857c1(0x1b8))var _0x36f941=users[_0x5857c1(0x1b9)];}}}}}}}_0x2c3aeb[_0x5857c1(0x1cd)](_0x5857c1(0x1e3),{'success':_0x437eac['flash'](_0x5857c1(0x1e4)),'errors':_0x437eac[_0x5857c1(0x1b0)](_0x5857c1(0x1d3)),'role':_0x3efba7,'profile':_0x4bf912,'master_shop':_0x22ecb8,'language':_0x36f941,'accounting':_0x5de7ad,'warehouse_acct':_0x58b3cf,'sales_acct':_0x1ef44d,'warehouse_loc':_0x3c01cd,'data':_0x6b0039});}catch(_0x3f7aad){}}),module[a0_0x13b48b(0x1e0)]=router;