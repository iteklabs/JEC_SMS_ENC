var a0_0x5d0d8b=a0_0x2cb1;function a0_0x2cb1(_0x59a2fa,_0x2c7fed){var _0x421d98=a0_0x421d();return a0_0x2cb1=function(_0x2cb123,_0x1d148e){_0x2cb123=_0x2cb123-0x1d9;var _0x518e0f=_0x421d98[_0x2cb123];return _0x518e0f;},a0_0x2cb1(_0x59a2fa,_0x2c7fed);}(function(_0x15ba05,_0x18290c){var _0x410391=a0_0x2cb1,_0x16f632=_0x15ba05();while(!![]){try{var _0x553135=-parseInt(_0x410391(0x1db))/0x1*(parseInt(_0x410391(0x1eb))/0x2)+-parseInt(_0x410391(0x206))/0x3+-parseInt(_0x410391(0x1f1))/0x4*(-parseInt(_0x410391(0x214))/0x5)+parseInt(_0x410391(0x21d))/0x6*(parseInt(_0x410391(0x212))/0x7)+-parseInt(_0x410391(0x1ed))/0x8*(parseInt(_0x410391(0x1da))/0x9)+-parseInt(_0x410391(0x210))/0xa*(parseInt(_0x410391(0x219))/0xb)+-parseInt(_0x410391(0x23d))/0xc*(-parseInt(_0x410391(0x24a))/0xd);if(_0x553135===_0x18290c)break;else _0x16f632['push'](_0x16f632['shift']());}catch(_0x3967df){_0x16f632['push'](_0x16f632['shift']());}}}(a0_0x421d,0x46495));function a0_0x421d(){var _0x31fd7d=['save','map','$product_details.rack','sale_qty','$product_details.floorlevel','subtract','get','/sales_return/view','60IgtpYX','language','Enabled','data','customers','new\x20new_data','ToRoom','bay','errors','English','Portuguese\x20(BR)','Router','date','1920542mpdKYu','/view/:id','2288457ovXMMo','14907uxmxue','$product_details.product_code','floorlevel','c_payment','product_stock','amount','flash','slice','success','Chinese','/invoice/:id','Portuguese','Return\x20Goods','Spanish','body','master','40NRSZTm','return_qty','8TUXPHG','redirect','invoice','Arabic\x20(ae)','707100AKrDTr','bin','product_code','payment\x20successfull','types','customer','$product_details.primary_code','Return\x20Rooms','../models/all_models','note','status','ToWarehouse','secondary_code','Raw\x20Materials','$product_details._id','due_amount','stocks','sales_return_invoice','name','all_data','$customer_docs','1667889aXtNCI','express','email','$product_details.type','log','findById','return_sale_edit','findOne','product_details','type','50vXeXDm','return_sale','1077251NkANzs','Sale\x20Return','15JPRimS','foreach\x20newproduct','$name','warehouse_name','aggregate','735691QPWYYI','purchase\x20return\x20successfully','user','old_data','18jflvVo','Arabic','German','$product_details','string','/view','suppliers','find','paid_amount','stock','../middleware/auth','params','forEach','old_warehouse_data','getFullYear','French','exports','$product_details.bay','Hindi','customer_docs','render','product_name','$product_details.secondary_code','English\x20(US)'];a0_0x421d=function(){return _0x31fd7d;};return a0_0x421d();}const express=require(a0_0x5d0d8b(0x207)),app=express(),router=express[a0_0x5d0d8b(0x248)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x5d0d8b(0x1f9)),auth=require(a0_0x5d0d8b(0x227)),users=require('../public/language/languages.json');router[a0_0x5d0d8b(0x23b)](a0_0x5d0d8b(0x222),auth,async(_0x34ad4a,_0x5d04f8)=>{var _0x49f0ab=a0_0x5d0d8b;try{const {username:_0x137e36,email:_0x234c83,role:_0x32d61b}=_0x34ad4a['user'],_0x41f8f8=_0x34ad4a[_0x49f0ab(0x21b)],_0x2799f7=await profile['findOne']({'email':_0x41f8f8[_0x49f0ab(0x208)]}),_0x321971=await master_shop[_0x49f0ab(0x224)]();console[_0x49f0ab(0x20a)]('master',_0x321971);const _0x28b99a=await sales_return[_0x49f0ab(0x218)]([{'$lookup':{'from':_0x49f0ab(0x241),'localField':_0x49f0ab(0x1f6),'foreignField':_0x49f0ab(0x203),'as':_0x49f0ab(0x230)}},{'$unwind':_0x49f0ab(0x205)}]);console[_0x49f0ab(0x20a)](_0x49f0ab(0x204),_0x28b99a);if(_0x321971[0x0][_0x49f0ab(0x23e)]=='English\x20(US)'){var _0xfca321=users[_0x49f0ab(0x246)];console[_0x49f0ab(0x20a)](_0xfca321);}else{if(_0x321971[0x0]['language']==_0x49f0ab(0x22f))var _0xfca321=users[_0x49f0ab(0x22f)];else{if(_0x321971[0x0][_0x49f0ab(0x23e)]=='German')var _0xfca321=users[_0x49f0ab(0x21f)];else{if(_0x321971[0x0]['language']=='Spanish')var _0xfca321=users[_0x49f0ab(0x1e8)];else{if(_0x321971[0x0][_0x49f0ab(0x23e)]==_0x49f0ab(0x22c))var _0xfca321=users[_0x49f0ab(0x22c)];else{if(_0x321971[0x0][_0x49f0ab(0x23e)]==_0x49f0ab(0x247))var _0xfca321=users[_0x49f0ab(0x1e6)];else{if(_0x321971[0x0][_0x49f0ab(0x23e)]=='Chinese')var _0xfca321=users[_0x49f0ab(0x1e4)];else{if(_0x321971[0x0][_0x49f0ab(0x23e)]==_0x49f0ab(0x1f0))var _0xfca321=users[_0x49f0ab(0x21e)];}}}}}}}_0x5d04f8[_0x49f0ab(0x231)]('sales_return',{'success':_0x34ad4a[_0x49f0ab(0x1e1)](_0x49f0ab(0x1e3)),'errors':_0x34ad4a[_0x49f0ab(0x1e1)](_0x49f0ab(0x245)),'role':_0x41f8f8,'profile':_0x2799f7,'master_shop':_0x321971,'user':_0x28b99a,'language':_0xfca321});}catch(_0x3e0e37){console[_0x49f0ab(0x20a)](_0x3e0e37);}}),router['get'](a0_0x5d0d8b(0x1d9),auth,async(_0x5b955b,_0x3d8224)=>{var _0x2d410e=a0_0x5d0d8b;try{const {username:_0x2222f1,email:_0x33ab94,role:_0x4761aa}=_0x5b955b[_0x2d410e(0x21b)],_0x5e617=_0x5b955b[_0x2d410e(0x21b)],_0x3ff56b=await profile[_0x2d410e(0x20d)]({'email':_0x5e617[_0x2d410e(0x208)]}),_0x466c73=await master_shop[_0x2d410e(0x224)]();console['log'](_0x2d410e(0x1ea),_0x466c73);const _0x1af1bc=_0x5b955b['params']['id'];console[_0x2d410e(0x20a)](_0x1af1bc);var _0x564ffa=[_0x2d410e(0x1f8)];const _0x4c81eb=await sales_return[_0x2d410e(0x20b)](_0x1af1bc),_0x38f839=await warehouse[_0x2d410e(0x218)]([{'$match':{'name':_0x4c81eb[_0x2d410e(0x1fc)],'room':_0x4c81eb[_0x2d410e(0x243)]}},{'$unwind':_0x2d410e(0x220)},{'$group':{'_id':_0x2d410e(0x1ff),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x2d410e(0x22e)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x2d410e(0x209)},'floorlevel':{'$first':_0x2d410e(0x239)},'primary_code':{'$first':_0x2d410e(0x1f7)},'secondary_code':{'$first':_0x2d410e(0x233)},'product_code':{'$first':_0x2d410e(0x1dc)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x2d410e(0x237)}}}]);console[_0x2d410e(0x20a)](_0x38f839);const _0x4f676f=await warehouse[_0x2d410e(0x218)]([{'$match':{'status':_0x2d410e(0x23f),'name':_0x2d410e(0x1e7),'warehouse_category':_0x2d410e(0x1fe)}},{'$group':{'_id':_0x2d410e(0x216),'name':{'$first':_0x2d410e(0x216)}}},{'$sort':{'name':0x1}}]),_0x2f73c0=await product[_0x2d410e(0x224)]({});if(_0x466c73[0x0][_0x2d410e(0x23e)]=='English\x20(US)'){var _0x404d29=users[_0x2d410e(0x246)];console[_0x2d410e(0x20a)](_0x404d29);}else{if(_0x466c73[0x0][_0x2d410e(0x23e)]==_0x2d410e(0x22f))var _0x404d29=users['Hindi'];else{if(_0x466c73[0x0][_0x2d410e(0x23e)]==_0x2d410e(0x21f))var _0x404d29=users['German'];else{if(_0x466c73[0x0][_0x2d410e(0x23e)]==_0x2d410e(0x1e8))var _0x404d29=users[_0x2d410e(0x1e8)];else{if(_0x466c73[0x0][_0x2d410e(0x23e)]==_0x2d410e(0x22c))var _0x404d29=users[_0x2d410e(0x22c)];else{if(_0x466c73[0x0][_0x2d410e(0x23e)]==_0x2d410e(0x247))var _0x404d29=users[_0x2d410e(0x1e6)];else{if(_0x466c73[0x0]['language']==_0x2d410e(0x1e4))var _0x404d29=users[_0x2d410e(0x1e4)];else{if(_0x466c73[0x0][_0x2d410e(0x23e)]==_0x2d410e(0x1f0))var _0x404d29=users[_0x2d410e(0x21e)];}}}}}}}_0x3d8224[_0x2d410e(0x231)](_0x2d410e(0x20c),{'success':_0x5b955b['flash'](_0x2d410e(0x1e3)),'errors':_0x5b955b[_0x2d410e(0x1e1)](_0x2d410e(0x245)),'role':_0x5e617,'profile':_0x3ff56b,'master_shop':_0x466c73,'user':_0x4c81eb,'stock':_0x38f839,'unit':_0x2f73c0,'language':_0x404d29,'warehouses':_0x4f676f,'rooms':_0x564ffa});}catch(_0x1a8b58){console[_0x2d410e(0x20a)](_0x1a8b58);}}),router['post'](a0_0x5d0d8b(0x1d9),auth,async(_0x4ad8ca,_0x5215ad)=>{var _0x23c53c=a0_0x5d0d8b;try{const _0x37045a=_0x4ad8ca[_0x23c53c(0x228)]['id'];console['log'](_0x37045a);const _0xb7e4=await sales_return['findOne']({'invoice':_0x4ad8ca[_0x23c53c(0x1e9)]['invoice']});console['log'](_0x23c53c(0x21c),_0xb7e4);const _0x9f6ba7=await warehouse[_0x23c53c(0x20d)]({'name':_0xb7e4[_0x23c53c(0x1fc)],'room':_0xb7e4[_0x23c53c(0x243)]});console[_0x23c53c(0x20a)]('old_warehouse_data',_0x9f6ba7);const {invoice:_0x5f1403,customer:_0x98bbcc,date:_0x1e9b3e,warehouse_name:_0x2fe751,product_name:_0x1853bf,primary_code:_0x5636a8,secondary_code:_0x4432ce,product_code:_0xcf5344,sales_quantity:_0x281797,stocks:_0x1e8b9f,return_qty:_0x1ca08e,note:_0x398912,to_warehouse_name:_0x51e97f,to_Room_name:_0x43f184}=_0x4ad8ca[_0x23c53c(0x1e9)];console['log'](_0x4ad8ca['body']);if(typeof _0x1853bf==_0x23c53c(0x221))var _0x19ac03=[_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x232)]],_0x10e9db=[_0x4ad8ca[_0x23c53c(0x1e9)]['primary_code']],_0x4dbc6c=[_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1fd)]],_0x42cde3=[_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1f3)]],_0x459bfc=[_0x4ad8ca[_0x23c53c(0x1e9)]['sales_quantity']],_0x4c04e8=[_0x4ad8ca[_0x23c53c(0x1e9)]['stocks']],_0x2f6972=[_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1ec)]],_0x1527d=[_0x4ad8ca[_0x23c53c(0x1e9)]['bay']],_0xbfc7bb=[_0x4ad8ca[_0x23c53c(0x1e9)]['bin']],_0x2ea99c=[_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1f5)]],_0x3c3967=[_0x4ad8ca[_0x23c53c(0x1e9)]['floorlevel']];else var _0x19ac03=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x232)]],_0x10e9db=[..._0x4ad8ca[_0x23c53c(0x1e9)]['primary_code']],_0x4dbc6c=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1fd)]],_0x42cde3=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1f3)]],_0x459bfc=[..._0x4ad8ca[_0x23c53c(0x1e9)]['sales_quantity']],_0x4c04e8=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x201)]],_0x2f6972=[..._0x4ad8ca['body'][_0x23c53c(0x1ec)]],_0x1527d=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x244)]],_0xbfc7bb=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1f2)]],_0x2ea99c=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1f5)]],_0x3c3967=[..._0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1dd)]];const _0x5bfc1c=_0x19ac03[_0x23c53c(0x236)](_0x337834=>{return _0x337834={'product_name':_0x337834};});_0x10e9db[_0x23c53c(0x229)]((_0x1e204c,_0x4cbd61)=>{_0x5bfc1c[_0x4cbd61]['primary_code']=_0x1e204c;}),_0x4dbc6c[_0x23c53c(0x229)]((_0x25f73c,_0x1d4f14)=>{_0x5bfc1c[_0x1d4f14]['secondary_code']=_0x25f73c;}),_0x42cde3['forEach']((_0x11e8ab,_0x58ff4c)=>{var _0x537d4e=_0x23c53c;_0x5bfc1c[_0x58ff4c][_0x537d4e(0x1f3)]=_0x11e8ab;}),_0x459bfc[_0x23c53c(0x229)]((_0x50ceed,_0x1f77c7)=>{var _0xccd27=_0x23c53c;_0x5bfc1c[_0x1f77c7][_0xccd27(0x238)]=_0x50ceed;}),_0x4c04e8[_0x23c53c(0x229)]((_0x147af3,_0x357701)=>{var _0x4d75dc=_0x23c53c;_0x5bfc1c[_0x357701][_0x4d75dc(0x226)]=_0x147af3;}),_0x2f6972[_0x23c53c(0x229)]((_0x261835,_0x3dc31e)=>{var _0x24d28b=_0x23c53c;_0x5bfc1c[_0x3dc31e][_0x24d28b(0x1ec)]=_0x261835;}),_0x1527d[_0x23c53c(0x229)]((_0x2c5b3b,_0x466f88)=>{var _0x2eba1d=_0x23c53c;_0x5bfc1c[_0x466f88][_0x2eba1d(0x244)]=_0x2c5b3b;}),_0xbfc7bb[_0x23c53c(0x229)]((_0x3c9406,_0x39be96)=>{var _0x315002=_0x23c53c;_0x5bfc1c[_0x39be96][_0x315002(0x1f2)]=_0x3c9406;}),_0x2ea99c[_0x23c53c(0x229)]((_0x3e0ddc,_0x340094)=>{var _0x191a47=_0x23c53c;_0x5bfc1c[_0x340094][_0x191a47(0x20f)]=_0x3e0ddc;}),_0x3c3967[_0x23c53c(0x229)]((_0x68ec52,_0x4a2706)=>{var _0x5060f4=_0x23c53c;_0x5bfc1c[_0x4a2706][_0x5060f4(0x1dd)]=_0x68ec52;});var _0x23dffb=0x0;_0x5bfc1c[_0x23c53c(0x229)](_0x57f66b=>{var _0x19c7a3=_0x23c53c;console[_0x19c7a3(0x20a)](_0x19c7a3(0x215),_0x57f66b),(parseInt(_0x57f66b['sale_qty'])<parseInt(_0x57f66b[_0x19c7a3(0x1ec)])||parseInt(_0x57f66b[_0x19c7a3(0x226)])<parseInt(_0x57f66b['return_qty'])&&parseInt(_0x57f66b['sale_qty'])>parseInt(_0x57f66b[_0x19c7a3(0x1ec)])||parseInt(_0x57f66b[_0x19c7a3(0x1ec)])==0x0)&&_0x23dffb++;});if(_0x23dffb!=0x0)return _0x4ad8ca[_0x23c53c(0x1e1)](_0x23c53c(0x245),'Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0x5215ad['redirect']('back');_0xb7e4[_0x23c53c(0x211)][_0x23c53c(0x229)](_0x240eb7=>{var _0x419102=_0x23c53c;const _0xb34e28=_0x9f6ba7[_0x419102(0x20e)][_0x419102(0x236)](_0x153a03=>{var _0x3d915c=_0x419102;_0x153a03['product_name']==_0x240eb7['product_name']&&_0x153a03[_0x3d915c(0x1dd)]==_0x240eb7[_0x3d915c(0x1dd)]&&_0x153a03[_0x3d915c(0x20f)]==_0x240eb7[_0x3d915c(0x20f)]&&_0x153a03[_0x3d915c(0x1f2)]==_0x240eb7['bin']&&_0x153a03[_0x3d915c(0x244)]==_0x240eb7['bay']&&(_0x153a03[_0x3d915c(0x1df)]=parseInt(_0x153a03[_0x3d915c(0x1df)])+parseInt(_0x240eb7[_0x3d915c(0x1ec)]));});}),console[_0x23c53c(0x20a)](_0x23c53c(0x22a),_0x9f6ba7),await _0x9f6ba7['save'](),_0xb7e4[_0x23c53c(0x1ef)]=_0x5f1403,_0xb7e4[_0x23c53c(0x1f6)]=_0x98bbcc,_0xb7e4[_0x23c53c(0x249)]=_0x1e9b3e,_0xb7e4[_0x23c53c(0x217)]=_0x2fe751,_0xb7e4[_0x23c53c(0x211)]=_0x5bfc1c,_0xb7e4[_0x23c53c(0x1fa)]=_0x398912,_0xb7e4[_0x23c53c(0x1fc)]=_0x51e97f,_0xb7e4[_0x23c53c(0x243)]=_0x43f184;const _0x248405=await _0xb7e4[_0x23c53c(0x235)]();console['log'](_0x23c53c(0x242),_0x248405);const _0x15821f=await c_payment_data[_0x23c53c(0x20d)]({'invoice':_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x1ef)],'reason':_0x23c53c(0x213)});_0x15821f[_0x23c53c(0x223)]=_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x223)],_0x15821f[_0x23c53c(0x249)]=_0x4ad8ca[_0x23c53c(0x1e9)][_0x23c53c(0x249)],await _0x15821f[_0x23c53c(0x235)](),_0x4ad8ca[_0x23c53c(0x1e1)](_0x23c53c(0x1e3),_0x23c53c(0x21a)),_0x5215ad[_0x23c53c(0x1ee)](_0x23c53c(0x23c));}catch(_0xe58184){console[_0x23c53c(0x20a)](_0xe58184),_0x5215ad[_0x23c53c(0x1fb)](0xc8)['json']({'message':_0xe58184['message']});}}),router['post']('/give_payment/:id',auth,async(_0x36f0bd,_0x161d57)=>{var _0x3b2d8c=a0_0x5d0d8b;try{const _0x1d6bc5=_0x36f0bd['params']['id'],{invoice:_0x2ac607,customer:_0x28cfa4,payable_to_customer:_0x1e5218,paid_amount:_0x5a925a}=_0x36f0bd[_0x3b2d8c(0x1e9)],_0x142490=await sales_return[_0x3b2d8c(0x20b)](_0x1d6bc5);console[_0x3b2d8c(0x20a)](_0x3b2d8c(0x240),_0x142490),console[_0x3b2d8c(0x20a)](_0x1e5218),console['log'](_0x5a925a);var _0xd65548=_0x1e5218-_0x5a925a;console[_0x3b2d8c(0x20a)](_0x3b2d8c(0x23a),_0xd65548),_0x142490[_0x3b2d8c(0x225)]=parseFloat(_0x5a925a)+parseFloat(_0x142490[_0x3b2d8c(0x225)]),_0x142490[_0x3b2d8c(0x200)]=_0xd65548,console[_0x3b2d8c(0x20a)](_0x142490);const _0x4e617a=await _0x142490[_0x3b2d8c(0x235)]();console['log'](0x1b207);const _0x5280e9=await c_payment_data[_0x3b2d8c(0x20d)]({'invoice':_0x36f0bd[_0x3b2d8c(0x1e9)][_0x3b2d8c(0x1ef)],'reason':'Sale\x20Return'});console[_0x3b2d8c(0x20a)](_0x3b2d8c(0x1de),_0x5280e9),_0x5280e9[_0x3b2d8c(0x1e0)]=_0xd65548,await _0x5280e9['save']();let _0x329c85=new Date(),_0x1e0ebe=('0'+_0x329c85['getDate']())[_0x3b2d8c(0x1e2)](-0x2),_0x53582c=('0'+(_0x329c85['getMonth']()+0x1))['slice'](-0x2),_0x6120b9=_0x329c85[_0x3b2d8c(0x22b)](),_0x3f8981=_0x6120b9+'-'+_0x53582c+'-'+_0x1e0ebe;const _0x41413f=new customer_payment({'invoice':_0x2ac607,'date':_0x6120b9+'-'+_0x53582c+'-'+_0x1e0ebe,'customer':_0x28cfa4,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x5a925a}),_0x48dcc7=await _0x41413f[_0x3b2d8c(0x235)]();_0x36f0bd['flash'](_0x3b2d8c(0x1e3),_0x3b2d8c(0x1f4)),_0x161d57[_0x3b2d8c(0x1ee)](_0x3b2d8c(0x23c));}catch(_0x5d5b1f){console[_0x3b2d8c(0x20a)](_0x5d5b1f);}}),router[a0_0x5d0d8b(0x23b)](a0_0x5d0d8b(0x1e5),auth,async(_0x1fa43f,_0x5c8b23)=>{var _0x3067a2=a0_0x5d0d8b;try{const {username:_0x1c6e51,email:_0x225a06,role:_0x381552}=_0x1fa43f[_0x3067a2(0x21b)],_0x4b9ffc=_0x1fa43f[_0x3067a2(0x21b)],_0x3eb72c=await profile[_0x3067a2(0x20d)]({'email':_0x4b9ffc[_0x3067a2(0x208)]}),_0x8b26fc=await master_shop[_0x3067a2(0x224)]();console[_0x3067a2(0x20a)](_0x3067a2(0x1ea),_0x8b26fc);const _0x320540=_0x1fa43f['params']['id'],_0x36cfc1=await sales_return[_0x3067a2(0x20b)](_0x320540);console[_0x3067a2(0x20a)](_0x36cfc1);const _0x80929f=await customer['findOne']({'name':_0x36cfc1[_0x3067a2(0x1f6)]});console[_0x3067a2(0x20a)](_0x80929f);if(_0x8b26fc[0x0]['language']==_0x3067a2(0x234)){var _0x42826b=users[_0x3067a2(0x246)];console['log'](_0x42826b);}else{if(_0x8b26fc[0x0][_0x3067a2(0x23e)]=='Hindi')var _0x42826b=users[_0x3067a2(0x22f)];else{if(_0x8b26fc[0x0]['language']==_0x3067a2(0x21f))var _0x42826b=users[_0x3067a2(0x21f)];else{if(_0x8b26fc[0x0][_0x3067a2(0x23e)]==_0x3067a2(0x1e8))var _0x42826b=users[_0x3067a2(0x1e8)];else{if(_0x8b26fc[0x0][_0x3067a2(0x23e)]==_0x3067a2(0x22c))var _0x42826b=users[_0x3067a2(0x22c)];else{if(_0x8b26fc[0x0][_0x3067a2(0x23e)]==_0x3067a2(0x247))var _0x42826b=users[_0x3067a2(0x1e6)];else{if(_0x8b26fc[0x0][_0x3067a2(0x23e)]==_0x3067a2(0x1e4))var _0x42826b=users[_0x3067a2(0x1e4)];else{if(_0x8b26fc[0x0][_0x3067a2(0x23e)]==_0x3067a2(0x1f0))var _0x42826b=users[_0x3067a2(0x21e)];}}}}}}}_0x5c8b23[_0x3067a2(0x231)](_0x3067a2(0x202),{'success':_0x1fa43f['flash'](_0x3067a2(0x1e3)),'errors':_0x1fa43f[_0x3067a2(0x1e1)](_0x3067a2(0x245)),'role':_0x4b9ffc,'profile':_0x3eb72c,'master_shop':_0x8b26fc,'customers':_0x80929f,'sales':_0x36cfc1,'language':_0x42826b});}catch(_0x451295){console['log'](_0x451295);}}),module[a0_0x5d0d8b(0x22d)]=router;