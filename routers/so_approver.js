function a0_0x6f04(){const _0x121d12=['$name','29019309SfKoCL','find','Chinese','Portuguese\x20(BR)','language','view_so_approvers','findOne','accounting_account_id','findById','json','post','453jWVSEJ','flash','Hindi','4058436aBFGua','errors','Arabic','Spanish','336MMMSiP','$head_id_staff','aggregate','/setup','47236wQFeJC','account_data','success','/get_sales_data','English','map','name','body','name_accounting','/so_approvers/preview/','104WPwtew','save','5dNuqAw','acc','wms_data','/add','375372XzOqrC','get','German','redirect','Router','Arabic\x20(ae)','English\x20(US)','../public/language/languages.json','/add/','staffs','11421330ULCrwZ','params','_id','../models/all_models','Portuguese','French','Approver\x20Add\x20successfully','4890EVDFrk','user','render','/preview/:id','$warehouse_staff_id','so_approver_add','forEach','so_approver_all','staff_id','926199DirLXZ','email','$account_data'];a0_0x6f04=function(){return _0x121d12;};return a0_0x6f04();}const a0_0x2fb70b=a0_0xb78d;(function(_0x4d192a,_0x2a5111){const _0x28090d=a0_0xb78d,_0x4c316e=_0x4d192a();while(!![]){try{const _0x226b97=-parseInt(_0x28090d(0x1f0))/0x1+-parseInt(_0x28090d(0x22b))/0x2*(-parseInt(_0x28090d(0x1ff))/0x3)+-parseInt(_0x28090d(0x202))/0x4*(parseInt(_0x28090d(0x216))/0x5)+-parseInt(_0x28090d(0x206))/0x6*(-parseInt(_0x28090d(0x20a))/0x7)+-parseInt(_0x28090d(0x214))/0x8*(-parseInt(_0x28090d(0x21a))/0x9)+-parseInt(_0x28090d(0x224))/0xa+parseInt(_0x28090d(0x1f4))/0xb;if(_0x226b97===_0x2a5111)break;else _0x4c316e['push'](_0x4c316e['shift']());}catch(_0x2aa0e7){_0x4c316e['push'](_0x4c316e['shift']());}}}(a0_0x6f04,0xce2b1));function a0_0xb78d(_0x7140ad,_0x504b39){const _0x6f0474=a0_0x6f04();return a0_0xb78d=function(_0xb78def,_0x4890cf){_0xb78def=_0xb78def-0x1e8;let _0xcaa00=_0x6f0474[_0xb78def];return _0xcaa00;},a0_0xb78d(_0x7140ad,_0x504b39);}const express=require('express'),app=express(),router=express[a0_0x2fb70b(0x21e)](),auth=require('../middleware/auth'),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order,approver_acct,warehouse}=require(a0_0x2fb70b(0x227)),users=require(a0_0x2fb70b(0x221));router[a0_0x2fb70b(0x21b)](a0_0x2fb70b(0x209),auth,async(_0x5ca51b,_0x51c66f)=>{const _0x59cb41=a0_0x2fb70b;try{const _0x1f4100=_0x5ca51b['user'],_0x93496c=await master_shop['find'](),_0xa8f9ee=await profile[_0x59cb41(0x1fa)]({'email':_0x1f4100['email']}),_0xe01a9b=await approver_acct[_0x59cb41(0x208)]([{'$addFields':{'accounting_account_id':{'$toObjectId':_0x59cb41(0x207)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x59cb41(0x1eb)}}},{'$lookup':{'from':_0x59cb41(0x223),'localField':_0x59cb41(0x1fb),'foreignField':_0x59cb41(0x226),'as':_0x59cb41(0x20b)}},{'$unwind':_0x59cb41(0x1f2)},{'$lookup':{'from':'staffs','localField':'wms_account_id','foreignField':_0x59cb41(0x226),'as':_0x59cb41(0x218)}},{'$unwind':'$wms_data'}]);if(_0x93496c[0x0][_0x59cb41(0x1f8)]==_0x59cb41(0x220))var _0x5e85d7=users[_0x59cb41(0x20e)];else{if(_0x93496c[0x0]['language']==_0x59cb41(0x201))var _0x5e85d7=users[_0x59cb41(0x201)];else{if(_0x93496c[0x0][_0x59cb41(0x1f8)]==_0x59cb41(0x21c))var _0x5e85d7=users['German'];else{if(_0x93496c[0x0][_0x59cb41(0x1f8)]==_0x59cb41(0x205))var _0x5e85d7=users[_0x59cb41(0x205)];else{if(_0x93496c[0x0][_0x59cb41(0x1f8)]==_0x59cb41(0x229))var _0x5e85d7=users[_0x59cb41(0x229)];else{if(_0x93496c[0x0][_0x59cb41(0x1f8)]==_0x59cb41(0x1f7))var _0x5e85d7=users[_0x59cb41(0x228)];else{if(_0x93496c[0x0]['language']==_0x59cb41(0x1f6))var _0x5e85d7=users[_0x59cb41(0x1f6)];else{if(_0x93496c[0x0][_0x59cb41(0x1f8)]==_0x59cb41(0x21f))var _0x5e85d7=users[_0x59cb41(0x204)];}}}}}}}_0x51c66f[_0x59cb41(0x1e9)](_0x59cb41(0x1ee),{'success':_0x5ca51b['flash'](_0x59cb41(0x20c)),'errors':_0x5ca51b[_0x59cb41(0x200)](_0x59cb41(0x203)),'role':_0x1f4100,'profile':_0xa8f9ee,'master_shop':_0x93496c,'language':_0x5e85d7,'data':_0xe01a9b});}catch(_0x2fbb82){}}),router['get'](a0_0x2fb70b(0x219),auth,async(_0x35f034,_0x20356f)=>{const _0x51d520=a0_0x2fb70b;try{const _0x2cd0c7=_0x35f034[_0x51d520(0x1e8)],_0x50837d=await master_shop[_0x51d520(0x1f5)](),_0x4ce02f=await profile[_0x51d520(0x1fa)]({'email':_0x2cd0c7['email']}),_0x390089=await staff['find']({'account_category':'acc'}),_0x3248cc=await staff[_0x51d520(0x1f5)]({'account_category':'wm'}),_0x291a4e=await staff[_0x51d520(0x1f5)]({'account_category':'sa'}),_0x4abcbc=await warehouse['aggregate']([{'$group':{'_id':_0x51d520(0x1f3)}}]);if(_0x50837d[0x0]['language']==_0x51d520(0x220))var _0xc9dffe=users[_0x51d520(0x20e)];else{if(_0x50837d[0x0]['language']==_0x51d520(0x201))var _0xc9dffe=users[_0x51d520(0x201)];else{if(_0x50837d[0x0][_0x51d520(0x1f8)]==_0x51d520(0x21c))var _0xc9dffe=users[_0x51d520(0x21c)];else{if(_0x50837d[0x0]['language']==_0x51d520(0x205))var _0xc9dffe=users[_0x51d520(0x205)];else{if(_0x50837d[0x0]['language']==_0x51d520(0x229))var _0xc9dffe=users[_0x51d520(0x229)];else{if(_0x50837d[0x0][_0x51d520(0x1f8)]==_0x51d520(0x1f7))var _0xc9dffe=users['Portuguese'];else{if(_0x50837d[0x0][_0x51d520(0x1f8)]==_0x51d520(0x1f6))var _0xc9dffe=users[_0x51d520(0x1f6)];else{if(_0x50837d[0x0][_0x51d520(0x1f8)]==_0x51d520(0x21f))var _0xc9dffe=users[_0x51d520(0x204)];}}}}}}}_0x20356f['render'](_0x51d520(0x1ec),{'success':_0x35f034[_0x51d520(0x200)](_0x51d520(0x20c)),'errors':_0x35f034['flash'](_0x51d520(0x203)),'role':_0x2cd0c7,'profile':_0x4ce02f,'master_shop':_0x50837d,'language':_0xc9dffe,'accounting':_0x390089,'warehouse_acct':_0x3248cc,'sales_acct':_0x291a4e,'warehouse_loc':_0x4abcbc});}catch(_0x509440){}}),router[a0_0x2fb70b(0x1fe)](a0_0x2fb70b(0x222),auth,async(_0x3b8cd6,_0x1fce28)=>{const _0x1bfbce=a0_0x2fb70b;try{const {accounting_account_id:_0x4e7dcc,warehouse_account_id:_0x202296,staff_id:_0xc21915,warehouse_loc:_0x7eb7a0}=_0x3b8cd6[_0x1bfbce(0x211)];if(typeof _0xc21915=='string')var _0x40ab48=[_0x3b8cd6[_0x1bfbce(0x211)][_0x1bfbce(0x1ef)]],_0x140e01=[_0x3b8cd6[_0x1bfbce(0x211)][_0x1bfbce(0x212)]];else var _0x40ab48=[..._0x3b8cd6['body'][_0x1bfbce(0x1ef)]],_0x140e01=[..._0x3b8cd6[_0x1bfbce(0x211)]['name_accounting']];const _0x412f8b=_0x40ab48[_0x1bfbce(0x20f)](_0x5abdda=>{return _0x5abdda={'id_member':_0x5abdda};});_0x140e01[_0x1bfbce(0x1ed)]((_0x4000d6,_0x38eb2b)=>{const _0x1d2149=_0x1bfbce;_0x412f8b[_0x38eb2b][_0x1d2149(0x210)]=_0x4000d6;});const _0x265d4b=new approver_acct({'head_id_staff':_0x4e7dcc,'warehouse_staff_id':_0x202296,'warehouse_name':_0x7eb7a0,'members':_0x412f8b}),_0x5b0e86=await _0x265d4b[_0x1bfbce(0x215)]();_0x3b8cd6[_0x1bfbce(0x200)]('success',_0x1bfbce(0x22a)),_0x1fce28[_0x1bfbce(0x21d)](_0x1bfbce(0x213)+_0x5b0e86[_0x1bfbce(0x226)]);}catch(_0x1ebef7){}}),router[a0_0x2fb70b(0x1fe)](a0_0x2fb70b(0x20d),auth,async(_0x1a95ab,_0x70d552)=>{const _0x1d0ee5=a0_0x2fb70b;try{const {id_staff:_0x43e28a}=_0x1a95ab[_0x1d0ee5(0x211)],_0x58739f=await staff[_0x1d0ee5(0x1fc)](_0x43e28a);_0x70d552[_0x1d0ee5(0x1fd)](_0x58739f);}catch(_0x5b0f03){}}),router[a0_0x2fb70b(0x21b)](a0_0x2fb70b(0x1ea),auth,async(_0x49cbeb,_0x51b66c)=>{const _0x457892=a0_0x2fb70b;try{const _0x106d26=_0x49cbeb['user'],_0x50f4fe=_0x49cbeb[_0x457892(0x225)]['id'],_0x35d91f=await master_shop[_0x457892(0x1f5)](),_0x4677a2=await profile['findOne']({'email':_0x106d26[_0x457892(0x1f1)]}),_0x3e0e50=await staff[_0x457892(0x1f5)]({'account_category':_0x457892(0x217)}),_0x36efed=await staff['find']({'account_category':'wm'}),_0x2d00ae=await staff['find']({'account_category':'sa'}),_0x4fb76c=await warehouse[_0x457892(0x208)]([{'$group':{'_id':_0x457892(0x1f3)}}]),_0x4b4e85=await approver_acct['findById'](_0x50f4fe);if(_0x35d91f[0x0]['language']==_0x457892(0x220))var _0x3ec1ed=users[_0x457892(0x20e)];else{if(_0x35d91f[0x0][_0x457892(0x1f8)]==_0x457892(0x201))var _0x3ec1ed=users['Hindi'];else{if(_0x35d91f[0x0][_0x457892(0x1f8)]==_0x457892(0x21c))var _0x3ec1ed=users[_0x457892(0x21c)];else{if(_0x35d91f[0x0][_0x457892(0x1f8)]==_0x457892(0x205))var _0x3ec1ed=users[_0x457892(0x205)];else{if(_0x35d91f[0x0][_0x457892(0x1f8)]==_0x457892(0x229))var _0x3ec1ed=users[_0x457892(0x229)];else{if(_0x35d91f[0x0][_0x457892(0x1f8)]==_0x457892(0x1f7))var _0x3ec1ed=users[_0x457892(0x228)];else{if(_0x35d91f[0x0][_0x457892(0x1f8)]==_0x457892(0x1f6))var _0x3ec1ed=users[_0x457892(0x1f6)];else{if(_0x35d91f[0x0]['language']==_0x457892(0x21f))var _0x3ec1ed=users[_0x457892(0x204)];}}}}}}}_0x51b66c[_0x457892(0x1e9)](_0x457892(0x1f9),{'success':_0x49cbeb['flash'](_0x457892(0x20c)),'errors':_0x49cbeb[_0x457892(0x200)](_0x457892(0x203)),'role':_0x106d26,'profile':_0x4677a2,'master_shop':_0x35d91f,'language':_0x3ec1ed,'accounting':_0x3e0e50,'warehouse_acct':_0x36efed,'sales_acct':_0x2d00ae,'warehouse_loc':_0x4fb76c,'data':_0x4b4e85});}catch(_0x4b0423){}}),module['exports']=router;