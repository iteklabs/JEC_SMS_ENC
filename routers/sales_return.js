var a0_0x25b22b=a0_0x2b90;function a0_0x3c9d(){var _0xaa1a96=['slice','$product_details.secondary_code','language','bay','$product_details.product_name','$product_details.floorlevel','render','9fmBYQf','Sale\x20Return','master','English\x20(US)','body','type','ToWarehouse','json','Router','/invoice/:id','post','27162sTtPte','Arabic','date','sales_return_invoice','flash','message','types','$product_details.bin','redirect','8pdmHgC','/give_payment/:id','exports','../middleware/auth','all_data','status','secondary_code','777570qSbJvW','4786901GQpsqb','bin','map','Portuguese\x20(BR)','1292rBaCRz','customer_docs','product_stock','product_name','user','primary_code','findById','3386202drhDpq','French','/sales_return/view','English','sales_return','paid_amount','due_amount','invoice','Arabic\x20(ae)','aggregate','587466gOmXyy','$product_details.product_stock','Chinese','product_details','sales_quantity','c_payment','$customer_docs','/view/:id','Hindi','floorlevel','findOne','$name','old_warehouse_data','$product_details.type','purchase\x20return\x20successfully','new\x20new_data','Portuguese','$product_details._id','note','suppliers','payment\x20successfull','customer','name','foreach\x20newproduct','German','stock','return_qty','ToRoom','express','data','params','Enabled','warehouse_name','/view','Return\x20Goods','find','Spanish','success','amount','getFullYear','getDate','$product_details.product_code','$product_details.bay','3691910IwOkRH','getMonth','string','save','Returned\x20Payment\x20For\x20Sale\x20Return','1989lGXEpZ','forEach','email','../models/all_models','../public/language/languages.json','Return\x20Rooms','sale_qty','return_sale_edit','log','old_data','errors','get'];a0_0x3c9d=function(){return _0xaa1a96;};return a0_0x3c9d();}(function(_0x376ee3,_0x396f7b){var _0x5a77d1=a0_0x2b90,_0xe74f9=_0x376ee3();while(!![]){try{var _0x52799f=-parseInt(_0x5a77d1(0xe0))/0x1*(-parseInt(_0x5a77d1(0x77))/0x2)+-parseInt(_0x5a77d1(0xcd))/0x3*(-parseInt(_0x5a77d1(0x8c))/0x4)+-parseInt(_0x5a77d1(0x87))/0x5+parseInt(_0x5a77d1(0x93))/0x6+-parseInt(_0x5a77d1(0x88))/0x7*(parseInt(_0x5a77d1(0x80))/0x8)+-parseInt(_0x5a77d1(0x9d))/0x9+parseInt(_0x5a77d1(0xc8))/0xa;if(_0x52799f===_0x396f7b)break;else _0xe74f9['push'](_0xe74f9['shift']());}catch(_0x1c1da4){_0xe74f9['push'](_0xe74f9['shift']());}}}(a0_0x3c9d,0x592f9));function a0_0x2b90(_0x4f5dcd,_0x5892d3){var _0x3c9dca=a0_0x3c9d();return a0_0x2b90=function(_0x2b9047,_0x35a77d){_0x2b9047=_0x2b9047-0x71;var _0x520ca0=_0x3c9dca[_0x2b9047];return _0x520ca0;},a0_0x2b90(_0x4f5dcd,_0x5892d3);}const express=require(a0_0x25b22b(0xb9)),app=express(),router=express[a0_0x25b22b(0x74)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x25b22b(0xd0)),auth=require(a0_0x25b22b(0x83)),users=require(a0_0x25b22b(0xd1));router[a0_0x25b22b(0xd8)](a0_0x25b22b(0xbe),auth,async(_0x1fe41d,_0x20046)=>{var _0x50e744=a0_0x25b22b;try{const {username:_0x3fb05b,email:_0x2509a6,role:_0x1a78fe}=_0x1fe41d[_0x50e744(0x90)],_0x13b254=_0x1fe41d[_0x50e744(0x90)],_0x5b9921=await profile[_0x50e744(0xa7)]({'email':_0x13b254[_0x50e744(0xcf)]}),_0x41513c=await master_shop[_0x50e744(0xc0)]();console[_0x50e744(0xd5)](_0x50e744(0xe2),_0x41513c);const _0x1c04bb=await sales_return['aggregate']([{'$lookup':{'from':'customers','localField':_0x50e744(0xb2),'foreignField':_0x50e744(0xb3),'as':_0x50e744(0x8d)}},{'$unwind':_0x50e744(0xa3)}]);console[_0x50e744(0xd5)](_0x50e744(0x84),_0x1c04bb);if(_0x41513c[0x0][_0x50e744(0xdb)]==_0x50e744(0xe3)){var _0x424b00=users[_0x50e744(0x96)];console[_0x50e744(0xd5)](_0x424b00);}else{if(_0x41513c[0x0][_0x50e744(0xdb)]=='Hindi')var _0x424b00=users['Hindi'];else{if(_0x41513c[0x0][_0x50e744(0xdb)]==_0x50e744(0xb5))var _0x424b00=users[_0x50e744(0xb5)];else{if(_0x41513c[0x0]['language']=='Spanish')var _0x424b00=users['Spanish'];else{if(_0x41513c[0x0][_0x50e744(0xdb)]==_0x50e744(0x94))var _0x424b00=users[_0x50e744(0x94)];else{if(_0x41513c[0x0][_0x50e744(0xdb)]=='Portuguese\x20(BR)')var _0x424b00=users['Portuguese'];else{if(_0x41513c[0x0][_0x50e744(0xdb)]==_0x50e744(0x9f))var _0x424b00=users['Chinese'];else{if(_0x41513c[0x0]['language']=='Arabic\x20(ae)')var _0x424b00=users[_0x50e744(0x78)];}}}}}}}_0x20046[_0x50e744(0xdf)](_0x50e744(0x97),{'success':_0x1fe41d[_0x50e744(0x7b)](_0x50e744(0xc2)),'errors':_0x1fe41d[_0x50e744(0x7b)](_0x50e744(0xd7)),'role':_0x13b254,'profile':_0x5b9921,'master_shop':_0x41513c,'user':_0x1c04bb,'language':_0x424b00});}catch(_0x56623e){console[_0x50e744(0xd5)](_0x56623e);}}),router['get']('/view/:id',auth,async(_0x44c78f,_0x24790b)=>{var _0x4cf5f2=a0_0x25b22b;try{const {username:_0xa905e3,email:_0xc1f8dd,role:_0x464f43}=_0x44c78f[_0x4cf5f2(0x90)],_0x317543=_0x44c78f[_0x4cf5f2(0x90)],_0x168f75=await profile['findOne']({'email':_0x317543[_0x4cf5f2(0xcf)]}),_0x3c167d=await master_shop['find']();console[_0x4cf5f2(0xd5)]('master',_0x3c167d);const _0x3d59df=_0x44c78f[_0x4cf5f2(0xbb)]['id'];console[_0x4cf5f2(0xd5)](_0x3d59df);var _0x32e1ab=[_0x4cf5f2(0xd2)];const _0x27e8bd=await sales_return[_0x4cf5f2(0x92)](_0x3d59df),_0x2eaccd=await warehouse[_0x4cf5f2(0x9c)]([{'$match':{'name':_0x27e8bd[_0x4cf5f2(0x72)],'room':_0x27e8bd[_0x4cf5f2(0xb8)]}},{'$unwind':'$product_details'},{'$group':{'_id':_0x4cf5f2(0xae),'name':{'$first':_0x4cf5f2(0xdd)},'product_stock':{'$first':_0x4cf5f2(0x9e)},'bay':{'$first':_0x4cf5f2(0xc7)},'bin':{'$first':_0x4cf5f2(0x7e)},'type':{'$first':_0x4cf5f2(0xaa)},'floorlevel':{'$first':_0x4cf5f2(0xde)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x4cf5f2(0xda)},'product_code':{'$first':_0x4cf5f2(0xc6)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':'$product_details.rack'}}}]);console[_0x4cf5f2(0xd5)](_0x2eaccd);const _0xdeee1a=await warehouse[_0x4cf5f2(0x9c)]([{'$match':{'status':_0x4cf5f2(0xbc),'name':_0x4cf5f2(0xbf),'warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':'$name','name':{'$first':_0x4cf5f2(0xa8)}}},{'$sort':{'name':0x1}}]),_0x3efcf7=await product['find']({});if(_0x3c167d[0x0][_0x4cf5f2(0xdb)]==_0x4cf5f2(0xe3)){var _0x220066=users[_0x4cf5f2(0x96)];console['log'](_0x220066);}else{if(_0x3c167d[0x0]['language']==_0x4cf5f2(0xa5))var _0x220066=users['Hindi'];else{if(_0x3c167d[0x0][_0x4cf5f2(0xdb)]=='German')var _0x220066=users['German'];else{if(_0x3c167d[0x0][_0x4cf5f2(0xdb)]=='Spanish')var _0x220066=users['Spanish'];else{if(_0x3c167d[0x0]['language']==_0x4cf5f2(0x94))var _0x220066=users[_0x4cf5f2(0x94)];else{if(_0x3c167d[0x0]['language']==_0x4cf5f2(0x8b))var _0x220066=users[_0x4cf5f2(0xad)];else{if(_0x3c167d[0x0][_0x4cf5f2(0xdb)]==_0x4cf5f2(0x9f))var _0x220066=users['Chinese'];else{if(_0x3c167d[0x0][_0x4cf5f2(0xdb)]==_0x4cf5f2(0x9b))var _0x220066=users[_0x4cf5f2(0x78)];}}}}}}}_0x24790b['render'](_0x4cf5f2(0xd4),{'success':_0x44c78f[_0x4cf5f2(0x7b)](_0x4cf5f2(0xc2)),'errors':_0x44c78f['flash'](_0x4cf5f2(0xd7)),'role':_0x317543,'profile':_0x168f75,'master_shop':_0x3c167d,'user':_0x27e8bd,'stock':_0x2eaccd,'unit':_0x3efcf7,'language':_0x220066,'warehouses':_0xdeee1a,'rooms':_0x32e1ab});}catch(_0x226707){console['log'](_0x226707);}}),router[a0_0x25b22b(0x76)](a0_0x25b22b(0xa4),auth,async(_0x51f3aa,_0x5d1e82)=>{var _0x5f2d56=a0_0x25b22b;try{const _0x2d6da3=_0x51f3aa[_0x5f2d56(0xbb)]['id'];console[_0x5f2d56(0xd5)](_0x2d6da3);const _0x28045b=await sales_return[_0x5f2d56(0xa7)]({'invoice':_0x51f3aa[_0x5f2d56(0xe4)]['invoice']});console[_0x5f2d56(0xd5)](_0x5f2d56(0xd6),_0x28045b);const _0x46c61c=await warehouse[_0x5f2d56(0xa7)]({'name':_0x28045b[_0x5f2d56(0x72)],'room':_0x28045b[_0x5f2d56(0xb8)]});console[_0x5f2d56(0xd5)](_0x5f2d56(0xa9),_0x46c61c);const {invoice:_0x464991,customer:_0x16a18a,date:_0xcda21c,warehouse_name:_0x392190,product_name:_0x51301a,primary_code:_0x3a2025,secondary_code:_0x4c7c7f,product_code:_0x49e377,sales_quantity:_0x5c002e,stocks:_0x26d507,return_qty:_0x36f4fb,note:_0x377cce,to_warehouse_name:_0x9844d6,to_Room_name:_0x3ed029}=_0x51f3aa[_0x5f2d56(0xe4)];console[_0x5f2d56(0xd5)](_0x51f3aa[_0x5f2d56(0xe4)]);if(typeof _0x51301a==_0x5f2d56(0xca))var _0x4e8468=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x8f)]],_0x42ee01=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x91)]],_0x4b5768=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x86)]],_0x4df957=[_0x51f3aa[_0x5f2d56(0xe4)]['product_code']],_0x5a6fbf=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0xa1)]],_0x6dfd45=[_0x51f3aa[_0x5f2d56(0xe4)]['stocks']],_0x1fe730=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0xb7)]],_0x3e0d52=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0xdc)]],_0x3d3146=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x89)]],_0x4882b0=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x7d)]],_0xe30296=[_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0xa6)]];else var _0x4e8468=[..._0x51f3aa[_0x5f2d56(0xe4)]['product_name']],_0x42ee01=[..._0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x91)]],_0x4b5768=[..._0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x86)]],_0x4df957=[..._0x51f3aa['body']['product_code']],_0x5a6fbf=[..._0x51f3aa['body'][_0x5f2d56(0xa1)]],_0x6dfd45=[..._0x51f3aa[_0x5f2d56(0xe4)]['stocks']],_0x1fe730=[..._0x51f3aa[_0x5f2d56(0xe4)]['return_qty']],_0x3e0d52=[..._0x51f3aa['body']['bay']],_0x3d3146=[..._0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x89)]],_0x4882b0=[..._0x51f3aa[_0x5f2d56(0xe4)]['types']],_0xe30296=[..._0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0xa6)]];const _0x25d4f1=_0x4e8468[_0x5f2d56(0x8a)](_0x251a9d=>{return _0x251a9d={'product_name':_0x251a9d};});_0x42ee01[_0x5f2d56(0xce)]((_0x47f38f,_0x1ebec2)=>{var _0x5abbbf=_0x5f2d56;_0x25d4f1[_0x1ebec2][_0x5abbbf(0x91)]=_0x47f38f;}),_0x4b5768[_0x5f2d56(0xce)]((_0x5b0ba2,_0x57fb4c)=>{var _0x1e2f76=_0x5f2d56;_0x25d4f1[_0x57fb4c][_0x1e2f76(0x86)]=_0x5b0ba2;}),_0x4df957[_0x5f2d56(0xce)]((_0x2c1372,_0x59843f)=>{_0x25d4f1[_0x59843f]['product_code']=_0x2c1372;}),_0x5a6fbf[_0x5f2d56(0xce)]((_0x5c3519,_0x3f9cc0)=>{var _0x47ea47=_0x5f2d56;_0x25d4f1[_0x3f9cc0][_0x47ea47(0xd3)]=_0x5c3519;}),_0x6dfd45['forEach']((_0x17f60f,_0x40c4f7)=>{var _0x3412a0=_0x5f2d56;_0x25d4f1[_0x40c4f7][_0x3412a0(0xb6)]=_0x17f60f;}),_0x1fe730[_0x5f2d56(0xce)]((_0x4e28ca,_0x5a028b)=>{var _0x31631c=_0x5f2d56;_0x25d4f1[_0x5a028b][_0x31631c(0xb7)]=_0x4e28ca;}),_0x3e0d52[_0x5f2d56(0xce)]((_0x8fb7b7,_0x120db6)=>{var _0x1e6bda=_0x5f2d56;_0x25d4f1[_0x120db6][_0x1e6bda(0xdc)]=_0x8fb7b7;}),_0x3d3146['forEach']((_0x29fbc3,_0x1fba51)=>{_0x25d4f1[_0x1fba51]['bin']=_0x29fbc3;}),_0x4882b0['forEach']((_0x352677,_0x35900d)=>{var _0x5aab70=_0x5f2d56;_0x25d4f1[_0x35900d][_0x5aab70(0x71)]=_0x352677;}),_0xe30296['forEach']((_0xc2b97b,_0x240b5d)=>{var _0x588bd9=_0x5f2d56;_0x25d4f1[_0x240b5d][_0x588bd9(0xa6)]=_0xc2b97b;});var _0x1318cf=0x0;_0x25d4f1[_0x5f2d56(0xce)](_0x107f5b=>{var _0x1a6a2d=_0x5f2d56;console[_0x1a6a2d(0xd5)](_0x1a6a2d(0xb4),_0x107f5b),(parseInt(_0x107f5b[_0x1a6a2d(0xd3)])<parseInt(_0x107f5b[_0x1a6a2d(0xb7)])||parseInt(_0x107f5b[_0x1a6a2d(0xb6)])<parseInt(_0x107f5b[_0x1a6a2d(0xb7)])&&parseInt(_0x107f5b[_0x1a6a2d(0xd3)])>parseInt(_0x107f5b['return_qty'])||parseInt(_0x107f5b[_0x1a6a2d(0xb7)])==0x0)&&_0x1318cf++;});if(_0x1318cf!=0x0)return _0x51f3aa['flash'](_0x5f2d56(0xd7),'Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0x5d1e82[_0x5f2d56(0x7f)]('back');_0x28045b['return_sale']['forEach'](_0x5b922f=>{var _0x24cccf=_0x5f2d56;const _0x3dbac4=_0x46c61c[_0x24cccf(0xa0)][_0x24cccf(0x8a)](_0x17545d=>{var _0x39b0f5=_0x24cccf;_0x17545d['product_name']==_0x5b922f[_0x39b0f5(0x8f)]&&_0x17545d['floorlevel']==_0x5b922f['floorlevel']&&_0x17545d[_0x39b0f5(0x71)]==_0x5b922f[_0x39b0f5(0x71)]&&_0x17545d['bin']==_0x5b922f['bin']&&_0x17545d['bay']==_0x5b922f['bay']&&(_0x17545d[_0x39b0f5(0x8e)]=parseInt(_0x17545d[_0x39b0f5(0x8e)])+parseInt(_0x5b922f[_0x39b0f5(0xb7)]));});}),console[_0x5f2d56(0xd5)](_0x5f2d56(0xa9),_0x46c61c),await _0x46c61c['save'](),_0x28045b[_0x5f2d56(0x9a)]=_0x464991,_0x28045b['customer']=_0x16a18a,_0x28045b['date']=_0xcda21c,_0x28045b[_0x5f2d56(0xbd)]=_0x392190,_0x28045b['return_sale']=_0x25d4f1,_0x28045b[_0x5f2d56(0xaf)]=_0x377cce,_0x28045b[_0x5f2d56(0x72)]=_0x9844d6,_0x28045b[_0x5f2d56(0xb8)]=_0x3ed029;const _0x4f16e6=await _0x28045b['save']();console[_0x5f2d56(0xd5)](_0x5f2d56(0xac),_0x4f16e6);const _0x3bf02e=await c_payment_data[_0x5f2d56(0xa7)]({'invoice':_0x51f3aa['body']['invoice'],'reason':_0x5f2d56(0xe1)});_0x3bf02e[_0x5f2d56(0xb0)]=_0x51f3aa['body'][_0x5f2d56(0xb0)],_0x3bf02e[_0x5f2d56(0x79)]=_0x51f3aa[_0x5f2d56(0xe4)][_0x5f2d56(0x79)],await _0x3bf02e[_0x5f2d56(0xcb)](),_0x51f3aa[_0x5f2d56(0x7b)](_0x5f2d56(0xc2),_0x5f2d56(0xab)),_0x5d1e82['redirect'](_0x5f2d56(0x95));}catch(_0x157d5c){console[_0x5f2d56(0xd5)](_0x157d5c),_0x5d1e82[_0x5f2d56(0x85)](0xc8)[_0x5f2d56(0x73)]({'message':_0x157d5c[_0x5f2d56(0x7c)]});}}),router['post'](a0_0x25b22b(0x81),auth,async(_0x4f9c9f,_0x4d2943)=>{var _0x2934e6=a0_0x25b22b;try{const _0x415201=_0x4f9c9f[_0x2934e6(0xbb)]['id'],{invoice:_0xd77a72,customer:_0x146c52,payable_to_customer:_0x2a360b,paid_amount:_0x539f9b}=_0x4f9c9f['body'],_0x241272=await sales_return['findById'](_0x415201);console[_0x2934e6(0xd5)](_0x2934e6(0xba),_0x241272),console['log'](_0x2a360b),console[_0x2934e6(0xd5)](_0x539f9b);var _0x2f1056=_0x2a360b-_0x539f9b;console[_0x2934e6(0xd5)]('subtract',_0x2f1056),_0x241272[_0x2934e6(0x98)]=parseFloat(_0x539f9b)+parseFloat(_0x241272[_0x2934e6(0x98)]),_0x241272[_0x2934e6(0x99)]=_0x2f1056,console[_0x2934e6(0xd5)](_0x241272);const _0x2937dc=await _0x241272['save']();console['log'](0x1b207);const _0x44edd4=await c_payment_data[_0x2934e6(0xa7)]({'invoice':_0x4f9c9f[_0x2934e6(0xe4)][_0x2934e6(0x9a)],'reason':_0x2934e6(0xe1)});console['log'](_0x2934e6(0xa2),_0x44edd4),_0x44edd4[_0x2934e6(0xc3)]=_0x2f1056,await _0x44edd4['save']();let _0x164108=new Date(),_0x39a44e=('0'+_0x164108[_0x2934e6(0xc5)]())[_0x2934e6(0xd9)](-0x2),_0x1d5806=('0'+(_0x164108[_0x2934e6(0xc9)]()+0x1))[_0x2934e6(0xd9)](-0x2),_0x504c37=_0x164108[_0x2934e6(0xc4)](),_0x38d4ec=_0x504c37+'-'+_0x1d5806+'-'+_0x39a44e;const _0x3e0d00=new customer_payment({'invoice':_0xd77a72,'date':_0x504c37+'-'+_0x1d5806+'-'+_0x39a44e,'customer':_0x146c52,'reason':_0x2934e6(0xcc),'amount':_0x539f9b}),_0x2eee8f=await _0x3e0d00[_0x2934e6(0xcb)]();_0x4f9c9f[_0x2934e6(0x7b)](_0x2934e6(0xc2),_0x2934e6(0xb1)),_0x4d2943[_0x2934e6(0x7f)](_0x2934e6(0x95));}catch(_0x5d0e41){console[_0x2934e6(0xd5)](_0x5d0e41);}}),router[a0_0x25b22b(0xd8)](a0_0x25b22b(0x75),auth,async(_0x331e15,_0x94bfaf)=>{var _0x2e2160=a0_0x25b22b;try{const {username:_0x14b66e,email:_0x1fc982,role:_0xfc8de0}=_0x331e15[_0x2e2160(0x90)],_0x177a7a=_0x331e15['user'],_0x41afb1=await profile[_0x2e2160(0xa7)]({'email':_0x177a7a['email']}),_0x3786da=await master_shop[_0x2e2160(0xc0)]();console[_0x2e2160(0xd5)]('master',_0x3786da);const _0x1f8b5d=_0x331e15[_0x2e2160(0xbb)]['id'],_0x22f9f0=await sales_return[_0x2e2160(0x92)](_0x1f8b5d);console[_0x2e2160(0xd5)](_0x22f9f0);const _0x4a580c=await customer[_0x2e2160(0xa7)]({'name':_0x22f9f0[_0x2e2160(0xb2)]});console[_0x2e2160(0xd5)](_0x4a580c);if(_0x3786da[0x0][_0x2e2160(0xdb)]==_0x2e2160(0xe3)){var _0x220da6=users[_0x2e2160(0x96)];console['log'](_0x220da6);}else{if(_0x3786da[0x0]['language']==_0x2e2160(0xa5))var _0x220da6=users[_0x2e2160(0xa5)];else{if(_0x3786da[0x0][_0x2e2160(0xdb)]==_0x2e2160(0xb5))var _0x220da6=users[_0x2e2160(0xb5)];else{if(_0x3786da[0x0][_0x2e2160(0xdb)]==_0x2e2160(0xc1))var _0x220da6=users[_0x2e2160(0xc1)];else{if(_0x3786da[0x0]['language']==_0x2e2160(0x94))var _0x220da6=users['French'];else{if(_0x3786da[0x0][_0x2e2160(0xdb)]==_0x2e2160(0x8b))var _0x220da6=users[_0x2e2160(0xad)];else{if(_0x3786da[0x0][_0x2e2160(0xdb)]==_0x2e2160(0x9f))var _0x220da6=users[_0x2e2160(0x9f)];else{if(_0x3786da[0x0][_0x2e2160(0xdb)]=='Arabic\x20(ae)')var _0x220da6=users[_0x2e2160(0x78)];}}}}}}}_0x94bfaf[_0x2e2160(0xdf)](_0x2e2160(0x7a),{'success':_0x331e15['flash'](_0x2e2160(0xc2)),'errors':_0x331e15[_0x2e2160(0x7b)]('errors'),'role':_0x177a7a,'profile':_0x41afb1,'master_shop':_0x3786da,'customers':_0x4a580c,'sales':_0x22f9f0,'language':_0x220da6});}catch(_0xd47953){console[_0x2e2160(0xd5)](_0xd47953);}}),module[a0_0x25b22b(0x82)]=router;