function a0_0x2f6c(_0x5ea7db,_0x56b402){const _0x8a7371=a0_0x8a73();return a0_0x2f6c=function(_0x2f6cfc,_0x3574af){_0x2f6cfc=_0x2f6cfc-0xea;let _0x3aed66=_0x8a7371[_0x2f6cfc];return _0x3aed66;},a0_0x2f6c(_0x5ea7db,_0x56b402);}const a0_0x32892d=a0_0x2f6c;(function(_0x12be8e,_0x14adbb){const _0x36ebd0=a0_0x2f6c,_0x281a7c=_0x12be8e();while(!![]){try{const _0x50972d=-parseInt(_0x36ebd0(0xf3))/0x1*(parseInt(_0x36ebd0(0xf7))/0x2)+parseInt(_0x36ebd0(0x118))/0x3*(-parseInt(_0x36ebd0(0x100))/0x4)+-parseInt(_0x36ebd0(0xfc))/0x5+-parseInt(_0x36ebd0(0xef))/0x6+-parseInt(_0x36ebd0(0x108))/0x7+parseInt(_0x36ebd0(0x12a))/0x8*(-parseInt(_0x36ebd0(0x126))/0x9)+-parseInt(_0x36ebd0(0x102))/0xa*(-parseInt(_0x36ebd0(0x121))/0xb);if(_0x50972d===_0x14adbb)break;else _0x281a7c['push'](_0x281a7c['shift']());}catch(_0x118fb7){_0x281a7c['push'](_0x281a7c['shift']());}}}(a0_0x8a73,0x568e8));const express=require(a0_0x32892d(0xf8)),app=express(),router=express[a0_0x32892d(0xee)](),auth=require(a0_0x32892d(0xec)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order,approver_acct,warehouse}=require(a0_0x32892d(0x103)),users=require(a0_0x32892d(0x115));function a0_0x8a73(){const _0x3de14d=['/setup','$wms_data','staffs','Approver\x20Add\x20successfully','success','Portuguese\x20(BR)','flash','exports','body','Spanish','../public/language/languages.json','Hindi','Arabic','3pWQzBm','/so_approvers/preview/','$name','English\x20(US)','/add','aggregate','/get_sales_data','name_accounting','acc','11kXlQmV','wms_data','English','French','email','285651RzOUIO','staff_id','language','errors','136aNINAR','json','$warehouse_staff_id','findById','$account_data','../middleware/auth','so_approver_all','Router','2765658YdJJvK','save','German','render','1421VRXHxK','Chinese','redirect','_id','936XJovdj','express','get','find','forEach','1251175SBFGbR','user','view_so_approvers','/add/','2719684OydeXs','so_approver_add','31450220pCMSBq','../models/all_models','Portuguese','findOne','Arabic\x20(ae)','$head_id_staff','1363572YElQsi','accounting_account_id','post'];a0_0x8a73=function(){return _0x3de14d;};return a0_0x8a73();}router['get'](a0_0x32892d(0x10b),auth,async(_0x29ab77,_0x3d59e0)=>{const _0x262542=a0_0x32892d;try{const _0x5d9ede=_0x29ab77[_0x262542(0xfd)],_0x35ad71=await master_shop[_0x262542(0xfa)](),_0x18ab58=await profile[_0x262542(0x105)]({'email':_0x5d9ede[_0x262542(0x125)]}),_0x165f0e=await approver_acct[_0x262542(0x11d)]([{'$addFields':{'accounting_account_id':{'$toObjectId':_0x262542(0x107)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x262542(0x12c)}}},{'$lookup':{'from':_0x262542(0x10d),'localField':_0x262542(0x109),'foreignField':_0x262542(0xf6),'as':'account_data'}},{'$unwind':_0x262542(0xeb)},{'$lookup':{'from':'staffs','localField':'wms_account_id','foreignField':_0x262542(0xf6),'as':_0x262542(0x122)}},{'$unwind':_0x262542(0x10c)}]);if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0x11b))var _0x2a7dc9=users[_0x262542(0x123)];else{if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0x116))var _0x2a7dc9=users[_0x262542(0x116)];else{if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0xf1))var _0x2a7dc9=users[_0x262542(0xf1)];else{if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0x114))var _0x2a7dc9=users[_0x262542(0x114)];else{if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0x124))var _0x2a7dc9=users['French'];else{if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0x110))var _0x2a7dc9=users[_0x262542(0x104)];else{if(_0x35ad71[0x0][_0x262542(0x128)]==_0x262542(0xf4))var _0x2a7dc9=users[_0x262542(0xf4)];else{if(_0x35ad71[0x0][_0x262542(0x128)]=='Arabic\x20(ae)')var _0x2a7dc9=users[_0x262542(0x117)];}}}}}}}_0x3d59e0[_0x262542(0xf2)](_0x262542(0xed),{'success':_0x29ab77[_0x262542(0x111)](_0x262542(0x10f)),'errors':_0x29ab77[_0x262542(0x111)](_0x262542(0x129)),'role':_0x5d9ede,'profile':_0x18ab58,'master_shop':_0x35ad71,'language':_0x2a7dc9,'data':_0x165f0e});}catch(_0x4fbaed){}}),router[a0_0x32892d(0xf9)](a0_0x32892d(0x11c),auth,async(_0x35ec41,_0x409a0f)=>{const _0x1031ad=a0_0x32892d;try{const _0x3600d3=_0x35ec41[_0x1031ad(0xfd)],_0x567290=await master_shop[_0x1031ad(0xfa)](),_0x176c0c=await profile[_0x1031ad(0x105)]({'email':_0x3600d3['email']}),_0x30afbc=await staff[_0x1031ad(0xfa)]({'account_category':'acc'}),_0x5072d8=await staff['find']({'account_category':'wm'}),_0x2870d7=await staff[_0x1031ad(0xfa)]({'account_category':'sa'}),_0x258460=await warehouse[_0x1031ad(0x11d)]([{'$group':{'_id':_0x1031ad(0x11a)}}]);if(_0x567290[0x0][_0x1031ad(0x128)]==_0x1031ad(0x11b))var _0x1034e9=users['English'];else{if(_0x567290[0x0][_0x1031ad(0x128)]==_0x1031ad(0x116))var _0x1034e9=users[_0x1031ad(0x116)];else{if(_0x567290[0x0][_0x1031ad(0x128)]==_0x1031ad(0xf1))var _0x1034e9=users[_0x1031ad(0xf1)];else{if(_0x567290[0x0][_0x1031ad(0x128)]==_0x1031ad(0x114))var _0x1034e9=users['Spanish'];else{if(_0x567290[0x0][_0x1031ad(0x128)]=='French')var _0x1034e9=users[_0x1031ad(0x124)];else{if(_0x567290[0x0]['language']=='Portuguese\x20(BR)')var _0x1034e9=users[_0x1031ad(0x104)];else{if(_0x567290[0x0][_0x1031ad(0x128)]=='Chinese')var _0x1034e9=users[_0x1031ad(0xf4)];else{if(_0x567290[0x0]['language']==_0x1031ad(0x106))var _0x1034e9=users[_0x1031ad(0x117)];}}}}}}}_0x409a0f[_0x1031ad(0xf2)](_0x1031ad(0x101),{'success':_0x35ec41[_0x1031ad(0x111)](_0x1031ad(0x10f)),'errors':_0x35ec41[_0x1031ad(0x111)](_0x1031ad(0x129)),'role':_0x3600d3,'profile':_0x176c0c,'master_shop':_0x567290,'language':_0x1034e9,'accounting':_0x30afbc,'warehouse_acct':_0x5072d8,'sales_acct':_0x2870d7,'warehouse_loc':_0x258460});}catch(_0x243374){}}),router[a0_0x32892d(0x10a)](a0_0x32892d(0xff),auth,async(_0x98a2b6,_0x2ab416)=>{const _0x1a25b5=a0_0x32892d;try{const {accounting_account_id:_0x23c256,warehouse_account_id:_0x36250b,staff_id:_0x45cc3a,warehouse_loc:_0x42d137}=_0x98a2b6['body'];if(typeof _0x45cc3a=='string')var _0x561d6b=[_0x98a2b6[_0x1a25b5(0x113)][_0x1a25b5(0x127)]],_0x175898=[_0x98a2b6['body']['name_accounting']];else var _0x561d6b=[..._0x98a2b6[_0x1a25b5(0x113)][_0x1a25b5(0x127)]],_0x175898=[..._0x98a2b6['body'][_0x1a25b5(0x11f)]];const _0xdb6bdd=_0x561d6b['map'](_0x43fc49=>{return _0x43fc49={'id_member':_0x43fc49};});_0x175898[_0x1a25b5(0xfb)]((_0x26ecf5,_0x4edc1c)=>{_0xdb6bdd[_0x4edc1c]['name']=_0x26ecf5;});const _0x48b258=new approver_acct({'head_id_staff':_0x23c256,'warehouse_staff_id':_0x36250b,'warehouse_name':_0x42d137,'members':_0xdb6bdd}),_0x64d9e5=await _0x48b258[_0x1a25b5(0xf0)]();_0x98a2b6[_0x1a25b5(0x111)](_0x1a25b5(0x10f),_0x1a25b5(0x10e)),_0x2ab416[_0x1a25b5(0xf5)](_0x1a25b5(0x119)+_0x64d9e5[_0x1a25b5(0xf6)]);}catch(_0x396541){}}),router[a0_0x32892d(0x10a)](a0_0x32892d(0x11e),auth,async(_0x1dc275,_0x43ed1c)=>{const _0x16a204=a0_0x32892d;try{const {id_staff:_0x13a1ab}=_0x1dc275[_0x16a204(0x113)],_0x50bbd9=await staff[_0x16a204(0xea)](_0x13a1ab);_0x43ed1c[_0x16a204(0x12b)](_0x50bbd9);}catch(_0x29918e){}}),router['get']('/preview/:id',auth,async(_0x3ea751,_0x18dd72)=>{const _0x5a054c=a0_0x32892d;try{const _0x7f113=_0x3ea751['user'],_0x308145=_0x3ea751['params']['id'],_0x1ef566=await master_shop[_0x5a054c(0xfa)](),_0x4e8a17=await profile[_0x5a054c(0x105)]({'email':_0x7f113['email']}),_0x292bc9=await staff['find']({'account_category':_0x5a054c(0x120)}),_0x559070=await staff[_0x5a054c(0xfa)]({'account_category':'wm'}),_0x2fc508=await staff[_0x5a054c(0xfa)]({'account_category':'sa'}),_0x4d519d=await warehouse[_0x5a054c(0x11d)]([{'$group':{'_id':'$name'}}]),_0x386d6d=await approver_acct[_0x5a054c(0xea)](_0x308145);if(_0x1ef566[0x0][_0x5a054c(0x128)]=='English\x20(US)')var _0x2e2b1a=users[_0x5a054c(0x123)];else{if(_0x1ef566[0x0]['language']=='Hindi')var _0x2e2b1a=users[_0x5a054c(0x116)];else{if(_0x1ef566[0x0][_0x5a054c(0x128)]=='German')var _0x2e2b1a=users[_0x5a054c(0xf1)];else{if(_0x1ef566[0x0][_0x5a054c(0x128)]==_0x5a054c(0x114))var _0x2e2b1a=users['Spanish'];else{if(_0x1ef566[0x0][_0x5a054c(0x128)]==_0x5a054c(0x124))var _0x2e2b1a=users[_0x5a054c(0x124)];else{if(_0x1ef566[0x0][_0x5a054c(0x128)]==_0x5a054c(0x110))var _0x2e2b1a=users[_0x5a054c(0x104)];else{if(_0x1ef566[0x0][_0x5a054c(0x128)]==_0x5a054c(0xf4))var _0x2e2b1a=users['Chinese'];else{if(_0x1ef566[0x0][_0x5a054c(0x128)]==_0x5a054c(0x106))var _0x2e2b1a=users[_0x5a054c(0x117)];}}}}}}}_0x18dd72[_0x5a054c(0xf2)](_0x5a054c(0xfe),{'success':_0x3ea751[_0x5a054c(0x111)]('success'),'errors':_0x3ea751['flash'](_0x5a054c(0x129)),'role':_0x7f113,'profile':_0x4e8a17,'master_shop':_0x1ef566,'language':_0x2e2b1a,'accounting':_0x292bc9,'warehouse_acct':_0x559070,'sales_acct':_0x2fc508,'warehouse_loc':_0x4d519d,'data':_0x386d6d});}catch(_0x4392e3){}}),module[a0_0x32892d(0x112)]=router;