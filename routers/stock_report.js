var a0_0x142c10=a0_0x5d63;(function(_0x511bad,_0x4b07b1){var _0x24153f=a0_0x5d63,_0x2fc8f6=_0x511bad();while(!![]){try{var _0x123909=-parseInt(_0x24153f(0x1dc))/0x1*(-parseInt(_0x24153f(0x1ea))/0x2)+-parseInt(_0x24153f(0x1db))/0x3+-parseInt(_0x24153f(0x1f5))/0x4+parseInt(_0x24153f(0x1f0))/0x5*(-parseInt(_0x24153f(0x1f1))/0x6)+-parseInt(_0x24153f(0x1e5))/0x7*(-parseInt(_0x24153f(0x1fb))/0x8)+parseInt(_0x24153f(0x1d6))/0x9+parseInt(_0x24153f(0x1eb))/0xa*(parseInt(_0x24153f(0x1e2))/0xb);if(_0x123909===_0x4b07b1)break;else _0x2fc8f6['push'](_0x2fc8f6['shift']());}catch(_0x35f6d5){_0x2fc8f6['push'](_0x2fc8f6['shift']());}}}(a0_0x2462,0x8f949));function a0_0x5d63(_0x1a5859,_0x43f7e1){var _0x2462fe=a0_0x2462();return a0_0x5d63=function(_0x5d633b,_0x2e7977){_0x5d633b=_0x5d633b-0x1d3;var _0x57450a=_0x2462fe[_0x5d633b];return _0x57450a;},a0_0x5d63(_0x1a5859,_0x43f7e1);}const express=require(a0_0x142c10(0x20a)),app=express(),router=express[a0_0x142c10(0x1e6)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require('../models/all_models'),auth=require(a0_0x142c10(0x1fc)),users=require(a0_0x142c10(0x20b));function a0_0x2462(){var _0x5a5035=['Spanish','English\x20(US)','187731NPUSGV','11022EejMiK','product_details.rak_name','/view/warehouse/:id','Arabic\x20(ae)','warehouse','$product_docs.sku','154KihzRf','params','name','5809720otpBWh','Router','German','products','/Reports_product','80OtXzNA','267460gZhSIJ','language','Enabled','get','Hindi','310755afdzqf','18ksrghC','exports','Chinese','Portuguese\x20(BR)','3493008FUeOmC','user','English','product_docs','$name','French','8UnEBtQ','../middleware/auth','render','$product_details.product_name','aggregate','$product_details.product_stock','Arabic','json','errors','find','body','Portuguese','post','product_details.bin_name','findOne','express','../public/language/languages.json','$product_docs','master','$product_details','status','585927JbWYie','log','/Reports'];a0_0x2462=function(){return _0x5a5035;};return a0_0x2462();}router['get']('/view',auth,async(_0xcd9526,_0xaf0175)=>{var _0x56e32c=a0_0x142c10;try{const _0x4c76c9=_0xcd9526[_0x56e32c(0x1f6)];console[_0x56e32c(0x1d7)]('role_data',_0xcd9526[_0x56e32c(0x1f6)]);const _0x21547b=await profile[_0x56e32c(0x209)]({'email':_0x4c76c9['email']}),_0x474425=await master_shop['find']();console[_0x56e32c(0x1d7)](_0x56e32c(0x1d3),_0x474425);const _0x73d196=await warehouse[_0x56e32c(0x1ff)]([{'$match':{'status':_0x56e32c(0x1ed)}},{'$group':{'_id':_0x56e32c(0x1f9),'name':{'$first':_0x56e32c(0x1f9)}}}]),_0x2a395c=await product[_0x56e32c(0x204)]({});if(_0x474425[0x0]['language']==_0x56e32c(0x1da)){var _0x20e48c=users[_0x56e32c(0x1f7)];console[_0x56e32c(0x1d7)](_0x20e48c);}else{if(_0x474425[0x0][_0x56e32c(0x1ec)]=='Hindi')var _0x20e48c=users[_0x56e32c(0x1ef)];else{if(_0x474425[0x0][_0x56e32c(0x1ec)]==_0x56e32c(0x1e7))var _0x20e48c=users[_0x56e32c(0x1e7)];else{if(_0x474425[0x0][_0x56e32c(0x1ec)]==_0x56e32c(0x1d9))var _0x20e48c=users['Spanish'];else{if(_0x474425[0x0][_0x56e32c(0x1ec)]==_0x56e32c(0x1fa))var _0x20e48c=users[_0x56e32c(0x1fa)];else{if(_0x474425[0x0]['language']==_0x56e32c(0x1f4))var _0x20e48c=users[_0x56e32c(0x206)];else{if(_0x474425[0x0]['language']==_0x56e32c(0x1f3))var _0x20e48c=users[_0x56e32c(0x1f3)];else{if(_0x474425[0x0][_0x56e32c(0x1ec)]=='Arabic\x20(ae)')var _0x20e48c=users['Arabic'];}}}}}}}_0xaf0175[_0x56e32c(0x1fd)]('stock_report',{'success':_0xcd9526['flash']('success'),'errors':_0xcd9526['flash'](_0x56e32c(0x203)),'role':_0x4c76c9,'profile':_0x21547b,'master_shop':_0x474425,'warehouse':_0x73d196,'product':_0x2a395c,'warehouse_doc':[],'product_doc':[],'language':_0x20e48c});}catch(_0x486154){console[_0x56e32c(0x1d7)](_0x486154);}}),router['get']('/view/:id',auth,async(_0x2da965,_0x5d6360)=>{var _0xb1fd80=a0_0x142c10;try{const _0x4909c0=await master_shop[_0xb1fd80(0x204)]();console[_0xb1fd80(0x1d7)](_0xb1fd80(0x1d3),_0x4909c0);if(_0x2da965[_0xb1fd80(0x1e3)]['id']==_0xb1fd80(0x1e0)){const _0x144cf1=await warehouse[_0xb1fd80(0x204)]();console[_0xb1fd80(0x1d7)](_0x144cf1);if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1da)){var _0x304a71=users['English'];console[_0xb1fd80(0x1d7)](_0x304a71);}else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1ef))var _0x304a71=users['Hindi'];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]=='German')var _0x304a71=users[_0xb1fd80(0x1e7)];else{if(_0x4909c0[0x0]['language']==_0xb1fd80(0x1d9))var _0x304a71=users[_0xb1fd80(0x1d9)];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1fa))var _0x304a71=users[_0xb1fd80(0x1fa)];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1f4))var _0x304a71=users[_0xb1fd80(0x206)];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1f3))var _0x304a71=users[_0xb1fd80(0x1f3)];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]=='Arabic\x20(ae)')var _0x304a71=users['Arabic'];}}}}}}}_0x5d6360['status'](0xc8)[_0xb1fd80(0x202)]({'data':_0x144cf1,'language':_0x304a71['warehouse']});}else{const _0x467c70=await product[_0xb1fd80(0x204)]();console['log']('111',_0x467c70);if(_0x4909c0[0x0]['language']=='English\x20(US)'){var _0x304a71=users[_0xb1fd80(0x1f7)];console['log'](_0x304a71);}else{if(_0x4909c0[0x0]['language']=='Hindi')var _0x304a71=users[_0xb1fd80(0x1ef)];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1e7))var _0x304a71=users['German'];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1d9))var _0x304a71=users['Spanish'];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1fa))var _0x304a71=users['French'];else{if(_0x4909c0[0x0][_0xb1fd80(0x1ec)]==_0xb1fd80(0x1f4))var _0x304a71=users[_0xb1fd80(0x206)];else{if(_0x4909c0[0x0]['language']=='Chinese')var _0x304a71=users[_0xb1fd80(0x1f3)];else{if(_0x4909c0[0x0]['language']==_0xb1fd80(0x1df))var _0x304a71=users[_0xb1fd80(0x201)];}}}}}}}_0x5d6360[_0xb1fd80(0x1d5)](0xc8)[_0xb1fd80(0x202)]({'data':_0x467c70,'language':_0x304a71[_0xb1fd80(0x1e8)]});}}catch(_0x7ec57a){console[_0xb1fd80(0x1d7)](_0x7ec57a);}}),router[a0_0x142c10(0x1ee)](a0_0x142c10(0x1de),auth,async(_0x1adbf9,_0x2ea76d)=>{var _0x24aa55=a0_0x142c10;try{const _0x119d07=_0x1adbf9[_0x24aa55(0x1e3)]['id'];console[_0x24aa55(0x1d7)](_0x119d07);const _0x159beb=await master_shop[_0x24aa55(0x204)]();console[_0x24aa55(0x1d7)](_0x24aa55(0x1d3),_0x159beb);const _0x45fbfb=await warehouse[_0x24aa55(0x1ff)]([{'$match':{'name':_0x119d07}},{'$unwind':_0x24aa55(0x1d4)},{'$lookup':{'from':_0x24aa55(0x1e8),'localField':'product_details.product_name','foreignField':_0x24aa55(0x1e4),'as':_0x24aa55(0x1f8)}},{'$unwind':_0x24aa55(0x20c)},{'$project':{'name':0x1,'product_name':_0x24aa55(0x1fe),'product_stock':_0x24aa55(0x200),'category':'$product_docs.category','brand':'$product_docs.brand','sku':_0x24aa55(0x1e1),'unit':'$product_docs.unit','rak':_0x24aa55(0x1dd),'bin':_0x24aa55(0x208)}}]);console[_0x24aa55(0x1d7)](_0x45fbfb);if(_0x159beb[0x0][_0x24aa55(0x1ec)]==_0x24aa55(0x1da)){var _0x5e4b8b=users[_0x24aa55(0x1f7)];console[_0x24aa55(0x1d7)](_0x5e4b8b);}else{if(_0x159beb[0x0][_0x24aa55(0x1ec)]==_0x24aa55(0x1ef))var _0x5e4b8b=users[_0x24aa55(0x1ef)];else{if(_0x159beb[0x0][_0x24aa55(0x1ec)]=='German')var _0x5e4b8b=users[_0x24aa55(0x1e7)];else{if(_0x159beb[0x0]['language']==_0x24aa55(0x1d9))var _0x5e4b8b=users[_0x24aa55(0x1d9)];else{if(_0x159beb[0x0][_0x24aa55(0x1ec)]==_0x24aa55(0x1fa))var _0x5e4b8b=users['French'];else{if(_0x159beb[0x0][_0x24aa55(0x1ec)]=='Portuguese\x20(BR)')var _0x5e4b8b=users[_0x24aa55(0x206)];else{if(_0x159beb[0x0][_0x24aa55(0x1ec)]==_0x24aa55(0x1f3))var _0x5e4b8b=users[_0x24aa55(0x1f3)];else{if(_0x159beb[0x0][_0x24aa55(0x1ec)]==_0x24aa55(0x1df))var _0x5e4b8b=users[_0x24aa55(0x201)];}}}}}}}_0x2ea76d[_0x24aa55(0x1d5)](0xc8)[_0x24aa55(0x202)]({'data':_0x45fbfb,'language':_0x5e4b8b});}catch(_0x5f54dc){console[_0x24aa55(0x1d7)](_0x5f54dc);}}),router[a0_0x142c10(0x1ee)]('/view/product/:id',auth,async(_0x4bf807,_0xdf39a8)=>{var _0x5aeb99=a0_0x142c10;try{const _0x4d3d89=_0x4bf807[_0x5aeb99(0x1e3)]['id'];console[_0x5aeb99(0x1d7)](_0x4d3d89);const _0x56839d=await master_shop['find']();console[_0x5aeb99(0x1d7)](_0x5aeb99(0x1d3),_0x56839d);const _0x2db5c0=await product[_0x5aeb99(0x209)]({'name':_0x4d3d89});console[_0x5aeb99(0x1d7)]('product_data',_0x2db5c0);const _0x161381=await warehouse[_0x5aeb99(0x1ff)]([{'$unwind':'$product_details'},{'$match':{'product_details.product_name':_0x4d3d89}},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':_0x5aeb99(0x200)}}]);console['log']('warehouse_data',_0x161381);if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1da)){var _0x5d4988=users[_0x5aeb99(0x1f7)];console['log'](_0x5d4988);}else{if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1ef))var _0x5d4988=users[_0x5aeb99(0x1ef)];else{if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1e7))var _0x5d4988=users['German'];else{if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1d9))var _0x5d4988=users[_0x5aeb99(0x1d9)];else{if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1fa))var _0x5d4988=users[_0x5aeb99(0x1fa)];else{if(_0x56839d[0x0]['language']==_0x5aeb99(0x1f4))var _0x5d4988=users[_0x5aeb99(0x206)];else{if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1f3))var _0x5d4988=users['Chinese'];else{if(_0x56839d[0x0][_0x5aeb99(0x1ec)]==_0x5aeb99(0x1df))var _0x5d4988=users[_0x5aeb99(0x201)];}}}}}}}_0xdf39a8[_0x5aeb99(0x1d5)](0xc8)[_0x5aeb99(0x202)]({'product_data':_0x2db5c0,'warehouse_data':_0x161381,'language':_0x5d4988});}catch(_0x1f5b0b){console[_0x5aeb99(0x1d7)](_0x1f5b0b);}}),router[a0_0x142c10(0x207)](a0_0x142c10(0x1d8),async(_0xd764a7,_0x19544a)=>{var _0x5e0d5d=a0_0x142c10;const {warehouseNew:_0x212758,rooms:_0x2222f8}=_0xd764a7[_0x5e0d5d(0x205)];let _0x2386da;_0x2222f8=='All'?_0x2386da=await warehouse[_0x5e0d5d(0x1ff)]([{'$match':{'name':_0x212758}},{'$unwind':_0x5e0d5d(0x1d4)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x2386da=await warehouse[_0x5e0d5d(0x1ff)]([{'$match':{'name':_0x212758,'room':_0x2222f8}},{'$unwind':_0x5e0d5d(0x1d4)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]),_0x19544a[_0x5e0d5d(0x202)](_0x2386da);}),router[a0_0x142c10(0x207)](a0_0x142c10(0x1e9),async(_0xf9a49b,_0x4b42b0)=>{var _0x180eb1=a0_0x142c10;const {warehouseNew:_0x306f1c,rooms:_0x1f8a8b,Type:_0x93f702,process_cat:_0x208e7b,room_cat:_0x155cee}=_0xf9a49b[_0x180eb1(0x205)],_0x3debe7=await product[_0x180eb1(0x204)]();_0x4b42b0[_0x180eb1(0x202)](_0x3debe7);}),module[a0_0x142c10(0x1f2)]=router;