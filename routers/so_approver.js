function a0_0x1a7a(){const _0x102c56=['Spanish','save','acc','string','findById','user','../middleware/auth','get','German','119jEORKr','8zRarLm','findOne','$warehouse_staff_id','post','wms_data','json','Arabic','Approver\x20Add\x20successfully','email','body','name_accounting','aggregate','Portuguese\x20(BR)','account_data','/add/','/setup','so_approver_all','Portuguese','flash','Arabic\x20(ae)','Hindi','2890977duDtoS','wms_account_id','render','/add','forEach','language','exports','9776cJdDtT','11xtnGxq','/get_sales_data','staff_id','3867921fkejLt','4391072TrLCKa','15488530kbtaPi','French','English\x20(US)','params','635004ojFtgf','errors','8zwcjQG','staffs','name','accounting_account_id','success','find','_id','English','redirect','$account_data','Chinese','844835VvAcnU','$name'];a0_0x1a7a=function(){return _0x102c56;};return a0_0x1a7a();}const a0_0x392a0f=a0_0x4c37;function a0_0x4c37(_0x74ba84,_0x34ea53){const _0x1a7aa8=a0_0x1a7a();return a0_0x4c37=function(_0x4c37c7,_0x4ef8e1){_0x4c37c7=_0x4c37c7-0xb1;let _0x10c716=_0x1a7aa8[_0x4c37c7];return _0x10c716;},a0_0x4c37(_0x74ba84,_0x34ea53);}(function(_0x5a6236,_0x3def4b){const _0xaec131=a0_0x4c37,_0x2c7a2f=_0x5a6236();while(!![]){try{const _0x5d8124=-parseInt(_0xaec131(0xd2))/0x1*(-parseInt(_0xaec131(0xef))/0x2)+parseInt(_0xaec131(0xe8))/0x3+parseInt(_0xaec131(0xbc))/0x4*(parseInt(_0xaec131(0xc7))/0x5)+parseInt(_0xaec131(0xba))/0x6+parseInt(_0xaec131(0xb5))/0x7+-parseInt(_0xaec131(0xd3))/0x8*(parseInt(_0xaec131(0xb4))/0x9)+parseInt(_0xaec131(0xb6))/0xa*(-parseInt(_0xaec131(0xb1))/0xb);if(_0x5d8124===_0x3def4b)break;else _0x2c7a2f['push'](_0x2c7a2f['shift']());}catch(_0x579842){_0x2c7a2f['push'](_0x2c7a2f['shift']());}}}(a0_0x1a7a,0x9bb4d));const express=require('express'),app=express(),router=express['Router'](),auth=require(a0_0x392a0f(0xcf)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order,approver_acct,warehouse}=require('../models/all_models'),users=require('../public/language/languages.json');router['get'](a0_0x392a0f(0xe2),auth,async(_0x5f3526,_0x399419)=>{const _0x8bac08=a0_0x392a0f;try{const _0xefefd=_0x5f3526[_0x8bac08(0xce)],_0x22ed52=await master_shop[_0x8bac08(0xc1)](),_0x3d50c9=await profile[_0x8bac08(0xd4)]({'email':_0xefefd['email']}),_0x1803e3=await approver_acct[_0x8bac08(0xde)]([{'$addFields':{'accounting_account_id':{'$toObjectId':'$head_id_staff'}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x8bac08(0xd5)}}},{'$lookup':{'from':_0x8bac08(0xbd),'localField':_0x8bac08(0xbf),'foreignField':_0x8bac08(0xc2),'as':_0x8bac08(0xe0)}},{'$unwind':_0x8bac08(0xc5)},{'$lookup':{'from':_0x8bac08(0xbd),'localField':_0x8bac08(0xe9),'foreignField':'_id','as':_0x8bac08(0xd7)}},{'$unwind':'$wms_data'}]);if(_0x22ed52[0x0]['language']==_0x8bac08(0xb8))var _0xb7f223=users[_0x8bac08(0xc3)];else{if(_0x22ed52[0x0]['language']==_0x8bac08(0xe7))var _0xb7f223=users[_0x8bac08(0xe7)];else{if(_0x22ed52[0x0][_0x8bac08(0xed)]==_0x8bac08(0xd1))var _0xb7f223=users[_0x8bac08(0xd1)];else{if(_0x22ed52[0x0][_0x8bac08(0xed)]==_0x8bac08(0xc9))var _0xb7f223=users[_0x8bac08(0xc9)];else{if(_0x22ed52[0x0][_0x8bac08(0xed)]==_0x8bac08(0xb7))var _0xb7f223=users['French'];else{if(_0x22ed52[0x0][_0x8bac08(0xed)]==_0x8bac08(0xdf))var _0xb7f223=users[_0x8bac08(0xe4)];else{if(_0x22ed52[0x0][_0x8bac08(0xed)]==_0x8bac08(0xc6))var _0xb7f223=users[_0x8bac08(0xc6)];else{if(_0x22ed52[0x0][_0x8bac08(0xed)]==_0x8bac08(0xe6))var _0xb7f223=users[_0x8bac08(0xd9)];}}}}}}}_0x399419[_0x8bac08(0xea)](_0x8bac08(0xe3),{'success':_0x5f3526[_0x8bac08(0xe5)](_0x8bac08(0xc0)),'errors':_0x5f3526[_0x8bac08(0xe5)](_0x8bac08(0xbb)),'role':_0xefefd,'profile':_0x3d50c9,'master_shop':_0x22ed52,'language':_0xb7f223,'data':_0x1803e3});}catch(_0x541fa9){}}),router[a0_0x392a0f(0xd0)](a0_0x392a0f(0xeb),auth,async(_0x580218,_0x33c021)=>{const _0x9e0b6e=a0_0x392a0f;try{const _0x8eba72=_0x580218['user'],_0x3dd16f=await master_shop[_0x9e0b6e(0xc1)](),_0x16f1b0=await profile[_0x9e0b6e(0xd4)]({'email':_0x8eba72[_0x9e0b6e(0xdb)]}),_0x5b8e7a=await staff[_0x9e0b6e(0xc1)]({'account_category':'acc'}),_0x18828c=await staff[_0x9e0b6e(0xc1)]({'account_category':'wm'}),_0x152a24=await staff[_0x9e0b6e(0xc1)]({'account_category':'sa'}),_0x535fe4=await warehouse[_0x9e0b6e(0xde)]([{'$group':{'_id':_0x9e0b6e(0xc8)}}]);if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xb8))var _0x29242e=users['English'];else{if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xe7))var _0x29242e=users['Hindi'];else{if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xd1))var _0x29242e=users[_0x9e0b6e(0xd1)];else{if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xc9))var _0x29242e=users['Spanish'];else{if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xb7))var _0x29242e=users['French'];else{if(_0x3dd16f[0x0]['language']==_0x9e0b6e(0xdf))var _0x29242e=users[_0x9e0b6e(0xe4)];else{if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xc6))var _0x29242e=users['Chinese'];else{if(_0x3dd16f[0x0][_0x9e0b6e(0xed)]==_0x9e0b6e(0xe6))var _0x29242e=users['Arabic'];}}}}}}}_0x33c021[_0x9e0b6e(0xea)]('so_approver_add',{'success':_0x580218[_0x9e0b6e(0xe5)]('success'),'errors':_0x580218[_0x9e0b6e(0xe5)](_0x9e0b6e(0xbb)),'role':_0x8eba72,'profile':_0x16f1b0,'master_shop':_0x3dd16f,'language':_0x29242e,'accounting':_0x5b8e7a,'warehouse_acct':_0x18828c,'sales_acct':_0x152a24,'warehouse_loc':_0x535fe4});}catch(_0x3710c4){}}),router[a0_0x392a0f(0xd6)](a0_0x392a0f(0xe1),auth,async(_0x2055e0,_0x265c4c)=>{const _0x3ada2b=a0_0x392a0f;try{const {accounting_account_id:_0x44e5c3,warehouse_account_id:_0x17a63d,staff_id:_0x3b0294,warehouse_loc:_0x1305fa}=_0x2055e0[_0x3ada2b(0xdc)];if(typeof _0x3b0294==_0x3ada2b(0xcc))var _0x4aca5f=[_0x2055e0[_0x3ada2b(0xdc)][_0x3ada2b(0xb3)]],_0x38728e=[_0x2055e0[_0x3ada2b(0xdc)][_0x3ada2b(0xdd)]];else var _0x4aca5f=[..._0x2055e0[_0x3ada2b(0xdc)][_0x3ada2b(0xb3)]],_0x38728e=[..._0x2055e0[_0x3ada2b(0xdc)]['name_accounting']];const _0x26fa89=_0x4aca5f['map'](_0x5dc1ec=>{return _0x5dc1ec={'id_member':_0x5dc1ec};});_0x38728e[_0x3ada2b(0xec)]((_0x5ae75a,_0x4ba460)=>{const _0x3a43f5=_0x3ada2b;_0x26fa89[_0x4ba460][_0x3a43f5(0xbe)]=_0x5ae75a;});const _0x530a81=new approver_acct({'head_id_staff':_0x44e5c3,'warehouse_staff_id':_0x17a63d,'warehouse_name':_0x1305fa,'members':_0x26fa89}),_0x280a36=await _0x530a81[_0x3ada2b(0xca)]();_0x2055e0[_0x3ada2b(0xe5)](_0x3ada2b(0xc0),_0x3ada2b(0xda)),_0x265c4c[_0x3ada2b(0xc4)]('/so_approvers/preview/'+_0x280a36['_id']);}catch(_0x19af08){}}),router[a0_0x392a0f(0xd6)](a0_0x392a0f(0xb2),auth,async(_0x483737,_0x4e7c4f)=>{const _0x1b5c83=a0_0x392a0f;try{const {id_staff:_0x251968}=_0x483737[_0x1b5c83(0xdc)],_0x2da276=await staff[_0x1b5c83(0xcd)](_0x251968);_0x4e7c4f[_0x1b5c83(0xd8)](_0x2da276);}catch(_0x49919f){}}),router['get']('/preview/:id',auth,async(_0x53ad26,_0x5343b0)=>{const _0x2ae01c=a0_0x392a0f;try{const _0x534fac=_0x53ad26[_0x2ae01c(0xce)],_0x493802=_0x53ad26[_0x2ae01c(0xb9)]['id'],_0x28f8b5=await master_shop[_0x2ae01c(0xc1)](),_0x1a7e41=await profile[_0x2ae01c(0xd4)]({'email':_0x534fac['email']}),_0xaf5593=await staff[_0x2ae01c(0xc1)]({'account_category':_0x2ae01c(0xcb)}),_0x49455c=await staff[_0x2ae01c(0xc1)]({'account_category':'wm'}),_0x217666=await staff[_0x2ae01c(0xc1)]({'account_category':'sa'}),_0x55c314=await warehouse[_0x2ae01c(0xde)]([{'$group':{'_id':'$name'}}]),_0x3429a4=await approver_acct[_0x2ae01c(0xcd)](_0x493802);if(_0x28f8b5[0x0][_0x2ae01c(0xed)]=='English\x20(US)')var _0x22d178=users['English'];else{if(_0x28f8b5[0x0][_0x2ae01c(0xed)]==_0x2ae01c(0xe7))var _0x22d178=users[_0x2ae01c(0xe7)];else{if(_0x28f8b5[0x0][_0x2ae01c(0xed)]==_0x2ae01c(0xd1))var _0x22d178=users['German'];else{if(_0x28f8b5[0x0]['language']=='Spanish')var _0x22d178=users['Spanish'];else{if(_0x28f8b5[0x0][_0x2ae01c(0xed)]==_0x2ae01c(0xb7))var _0x22d178=users['French'];else{if(_0x28f8b5[0x0][_0x2ae01c(0xed)]==_0x2ae01c(0xdf))var _0x22d178=users[_0x2ae01c(0xe4)];else{if(_0x28f8b5[0x0][_0x2ae01c(0xed)]==_0x2ae01c(0xc6))var _0x22d178=users[_0x2ae01c(0xc6)];else{if(_0x28f8b5[0x0]['language']==_0x2ae01c(0xe6))var _0x22d178=users[_0x2ae01c(0xd9)];}}}}}}}_0x5343b0['render']('view_so_approvers',{'success':_0x53ad26[_0x2ae01c(0xe5)](_0x2ae01c(0xc0)),'errors':_0x53ad26[_0x2ae01c(0xe5)](_0x2ae01c(0xbb)),'role':_0x534fac,'profile':_0x1a7e41,'master_shop':_0x28f8b5,'language':_0x22d178,'accounting':_0xaf5593,'warehouse_acct':_0x49455c,'sales_acct':_0x217666,'warehouse_loc':_0x55c314,'data':_0x3429a4});}catch(_0x16c0ed){}}),module[a0_0x392a0f(0xee)]=router;