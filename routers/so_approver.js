const a0_0x42884d=a0_0x1ae9;function a0_0x1ae9(_0x33d910,_0x23009c){const _0x52aefa=a0_0x52ae();return a0_0x1ae9=function(_0x1ae971,_0x2aa989){_0x1ae971=_0x1ae971-0x1c2;let _0x4133eb=_0x52aefa[_0x1ae971];return _0x4133eb;},a0_0x1ae9(_0x33d910,_0x23009c);}(function(_0x5c0f60,_0x260793){const _0x1f9c77=a0_0x1ae9,_0x19d515=_0x5c0f60();while(!![]){try{const _0x3675e2=-parseInt(_0x1f9c77(0x1d0))/0x1*(parseInt(_0x1f9c77(0x1d6))/0x2)+-parseInt(_0x1f9c77(0x1ff))/0x3+parseInt(_0x1f9c77(0x1cb))/0x4*(-parseInt(_0x1f9c77(0x1ca))/0x5)+parseInt(_0x1f9c77(0x1f7))/0x6*(parseInt(_0x1f9c77(0x1da))/0x7)+parseInt(_0x1f9c77(0x1f6))/0x8+-parseInt(_0x1f9c77(0x1f0))/0x9*(parseInt(_0x1f9c77(0x1f4))/0xa)+parseInt(_0x1f9c77(0x1e8))/0xb;if(_0x3675e2===_0x260793)break;else _0x19d515['push'](_0x19d515['shift']());}catch(_0x4b81df){_0x19d515['push'](_0x19d515['shift']());}}}(a0_0x52ae,0x406d7));const express=require(a0_0x42884d(0x1f2)),app=express(),router=express['Router'](),auth=require(a0_0x42884d(0x1f5)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order,approver_acct,warehouse}=require(a0_0x42884d(0x1e6)),users=require(a0_0x42884d(0x1cf));router[a0_0x42884d(0x1c8)](a0_0x42884d(0x1fe),auth,async(_0x3027bf,_0x2ff66b)=>{const _0x1d7c24=a0_0x42884d;try{const _0x76749a=_0x3027bf[_0x1d7c24(0x1f9)],_0x38ebb9=await master_shop[_0x1d7c24(0x1d7)](),_0x94eb7c=await profile[_0x1d7c24(0x1e3)]({'email':_0x76749a['email']}),_0x4942ce=await approver_acct[_0x1d7c24(0x1f1)]([{'$addFields':{'accounting_account_id':{'$toObjectId':_0x1d7c24(0x1d3)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x1d7c24(0x1f8)}}},{'$lookup':{'from':_0x1d7c24(0x1d4),'localField':'accounting_account_id','foreignField':'_id','as':_0x1d7c24(0x1ee)}},{'$unwind':_0x1d7c24(0x1e1)},{'$lookup':{'from':_0x1d7c24(0x1d4),'localField':'wms_account_id','foreignField':_0x1d7c24(0x1e9),'as':'wms_data'}},{'$unwind':_0x1d7c24(0x1ec)}]);if(_0x38ebb9[0x0][_0x1d7c24(0x1d8)]==_0x1d7c24(0x1d5))var _0x2f01af=users[_0x1d7c24(0x1c5)];else{if(_0x38ebb9[0x0]['language']==_0x1d7c24(0x1e0))var _0x2f01af=users[_0x1d7c24(0x1e0)];else{if(_0x38ebb9[0x0][_0x1d7c24(0x1d8)]==_0x1d7c24(0x1c9))var _0x2f01af=users[_0x1d7c24(0x1c9)];else{if(_0x38ebb9[0x0]['language']==_0x1d7c24(0x1d1))var _0x2f01af=users['Spanish'];else{if(_0x38ebb9[0x0]['language']=='French')var _0x2f01af=users[_0x1d7c24(0x1fb)];else{if(_0x38ebb9[0x0][_0x1d7c24(0x1d8)]==_0x1d7c24(0x1fd))var _0x2f01af=users[_0x1d7c24(0x1ed)];else{if(_0x38ebb9[0x0][_0x1d7c24(0x1d8)]=='Chinese')var _0x2f01af=users[_0x1d7c24(0x1ef)];else{if(_0x38ebb9[0x0]['language']==_0x1d7c24(0x200))var _0x2f01af=users[_0x1d7c24(0x1cc)];}}}}}}}_0x2ff66b['render'](_0x1d7c24(0x1eb),{'success':_0x3027bf[_0x1d7c24(0x1d9)](_0x1d7c24(0x1c6)),'errors':_0x3027bf['flash']('errors'),'role':_0x76749a,'profile':_0x94eb7c,'master_shop':_0x38ebb9,'language':_0x2f01af,'data':_0x4942ce});}catch(_0x5d7be2){}}),router[a0_0x42884d(0x1c8)](a0_0x42884d(0x1ce),auth,async(_0x564c32,_0x4ea28a)=>{const _0x25529c=a0_0x42884d;try{const _0x3124d1=_0x564c32[_0x25529c(0x1f9)],_0x30ffe2=await master_shop[_0x25529c(0x1d7)](),_0x5a5acd=await profile[_0x25529c(0x1e3)]({'email':_0x3124d1[_0x25529c(0x1c2)]}),_0x3cd1a5=await staff[_0x25529c(0x1d7)]({'account_category':_0x25529c(0x1c4)}),_0x4906d4=await staff[_0x25529c(0x1d7)]({'account_category':'wm'}),_0x201230=await staff['find']({'account_category':'sa'}),_0x5559a0=await warehouse['aggregate']([{'$group':{'_id':_0x25529c(0x1df)}}]);if(_0x30ffe2[0x0][_0x25529c(0x1d8)]==_0x25529c(0x1d5))var _0x4c7cf8=users['English'];else{if(_0x30ffe2[0x0][_0x25529c(0x1d8)]==_0x25529c(0x1e0))var _0x4c7cf8=users[_0x25529c(0x1e0)];else{if(_0x30ffe2[0x0][_0x25529c(0x1d8)]==_0x25529c(0x1c9))var _0x4c7cf8=users[_0x25529c(0x1c9)];else{if(_0x30ffe2[0x0][_0x25529c(0x1d8)]==_0x25529c(0x1d1))var _0x4c7cf8=users[_0x25529c(0x1d1)];else{if(_0x30ffe2[0x0][_0x25529c(0x1d8)]=='French')var _0x4c7cf8=users['French'];else{if(_0x30ffe2[0x0][_0x25529c(0x1d8)]==_0x25529c(0x1fd))var _0x4c7cf8=users['Portuguese'];else{if(_0x30ffe2[0x0]['language']==_0x25529c(0x1ef))var _0x4c7cf8=users[_0x25529c(0x1ef)];else{if(_0x30ffe2[0x0][_0x25529c(0x1d8)]==_0x25529c(0x200))var _0x4c7cf8=users[_0x25529c(0x1cc)];}}}}}}}_0x4ea28a[_0x25529c(0x1db)](_0x25529c(0x1e7),{'success':_0x564c32[_0x25529c(0x1d9)](_0x25529c(0x1c6)),'errors':_0x564c32[_0x25529c(0x1d9)](_0x25529c(0x1e4)),'role':_0x3124d1,'profile':_0x5a5acd,'master_shop':_0x30ffe2,'language':_0x4c7cf8,'accounting':_0x3cd1a5,'warehouse_acct':_0x4906d4,'sales_acct':_0x201230,'warehouse_loc':_0x5559a0});}catch(_0x5f4cee){}}),router['post']('/add/',auth,async(_0x4cad61,_0x35254f)=>{const _0xdf4597=a0_0x42884d;try{const {accounting_account_id:_0x178a6b,warehouse_account_id:_0x7e2164,staff_id:_0x558f50,warehouse_loc:_0x51b207}=_0x4cad61[_0xdf4597(0x1cd)];if(typeof _0x558f50==_0xdf4597(0x1c3))var _0x5333b1=[_0x4cad61[_0xdf4597(0x1cd)][_0xdf4597(0x1ea)]],_0x5f2c69=[_0x4cad61[_0xdf4597(0x1cd)][_0xdf4597(0x1de)]];else var _0x5333b1=[..._0x4cad61[_0xdf4597(0x1cd)][_0xdf4597(0x1ea)]],_0x5f2c69=[..._0x4cad61[_0xdf4597(0x1cd)][_0xdf4597(0x1de)]];const _0x3eef17=_0x5333b1['map'](_0x486eb3=>{return _0x486eb3={'id_member':_0x486eb3};});_0x5f2c69[_0xdf4597(0x1e5)]((_0x57d42f,_0x57c890)=>{const _0x49527a=_0xdf4597;_0x3eef17[_0x57c890][_0x49527a(0x1f3)]=_0x57d42f;});const _0x5818b9=new approver_acct({'head_id_staff':_0x178a6b,'warehouse_staff_id':_0x7e2164,'warehouse_name':_0x51b207,'members':_0x3eef17}),_0x268083=await _0x5818b9[_0xdf4597(0x1e2)]();_0x4cad61[_0xdf4597(0x1d9)](_0xdf4597(0x1c6),_0xdf4597(0x1fa)),_0x35254f['redirect']('/so_approvers/preview/'+_0x268083[_0xdf4597(0x1e9)]);}catch(_0x10bdf1){}}),router['post'](a0_0x42884d(0x1fc),auth,async(_0x2d3670,_0x1866e6)=>{const _0x222d75=a0_0x42884d;try{const {id_staff:_0x58e426}=_0x2d3670[_0x222d75(0x1cd)],_0x3434da=await staff[_0x222d75(0x1dc)](_0x58e426);_0x1866e6[_0x222d75(0x1d2)](_0x3434da);}catch(_0x1719ca){}}),router['get']('/preview/:id',auth,async(_0x56bc84,_0x43d3db)=>{const _0x57154f=a0_0x42884d;try{const _0x45db12=_0x56bc84['user'],_0x2548d9=_0x56bc84['params']['id'],_0x3f7c52=await master_shop[_0x57154f(0x1d7)](),_0x21cb0b=await profile['findOne']({'email':_0x45db12[_0x57154f(0x1c2)]}),_0x578fa5=await staff['find']({'account_category':_0x57154f(0x1c4)}),_0xda4067=await staff[_0x57154f(0x1d7)]({'account_category':'wm'}),_0x38e90f=await staff[_0x57154f(0x1d7)]({'account_category':'sa'}),_0x48a310=await warehouse[_0x57154f(0x1f1)]([{'$group':{'_id':'$name'}}]),_0x2aa205=await approver_acct['findById'](_0x2548d9);if(_0x3f7c52[0x0][_0x57154f(0x1d8)]=='English\x20(US)')var _0x103e21=users[_0x57154f(0x1c5)];else{if(_0x3f7c52[0x0][_0x57154f(0x1d8)]==_0x57154f(0x1e0))var _0x103e21=users['Hindi'];else{if(_0x3f7c52[0x0][_0x57154f(0x1d8)]=='German')var _0x103e21=users['German'];else{if(_0x3f7c52[0x0]['language']==_0x57154f(0x1d1))var _0x103e21=users[_0x57154f(0x1d1)];else{if(_0x3f7c52[0x0]['language']==_0x57154f(0x1fb))var _0x103e21=users[_0x57154f(0x1fb)];else{if(_0x3f7c52[0x0]['language']==_0x57154f(0x1fd))var _0x103e21=users[_0x57154f(0x1ed)];else{if(_0x3f7c52[0x0]['language']=='Chinese')var _0x103e21=users[_0x57154f(0x1ef)];else{if(_0x3f7c52[0x0][_0x57154f(0x1d8)]=='Arabic\x20(ae)')var _0x103e21=users[_0x57154f(0x1cc)];}}}}}}}_0x43d3db[_0x57154f(0x1db)](_0x57154f(0x1dd),{'success':_0x56bc84[_0x57154f(0x1d9)](_0x57154f(0x1c6)),'errors':_0x56bc84['flash']('errors'),'role':_0x45db12,'profile':_0x21cb0b,'master_shop':_0x3f7c52,'language':_0x103e21,'accounting':_0x578fa5,'warehouse_acct':_0xda4067,'sales_acct':_0x38e90f,'warehouse_loc':_0x48a310,'data':_0x2aa205});}catch(_0x2b90a6){}}),module[a0_0x42884d(0x1c7)]=router;function a0_0x52ae(){const _0x2f5ccc=['/get_sales_data','Portuguese\x20(BR)','/setup','639588kTIVyc','Arabic\x20(ae)','email','string','acc','English','success','exports','get','German','5XEsTEm','1148920hGlFIw','Arabic','body','/add','../public/language/languages.json','2VPEJzx','Spanish','json','$head_id_staff','staffs','English\x20(US)','227428WpgrHs','find','language','flash','69237zqWviu','render','findById','view_so_approvers','name_accounting','$name','Hindi','$account_data','save','findOne','errors','forEach','../models/all_models','so_approver_add','9861313BgLOyz','_id','staff_id','so_approver_all','$wms_data','Portuguese','account_data','Chinese','774IYhEPS','aggregate','express','name','17640MOJDSh','../middleware/auth','1421864YuSJar','42YYhkWr','$warehouse_staff_id','user','Approver\x20Add\x20successfully','French'];a0_0x52ae=function(){return _0x2f5ccc;};return a0_0x52ae();}