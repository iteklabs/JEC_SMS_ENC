var a0_0x13be1b=a0_0x9fc0;(function(_0x3cf2ea,_0x597ee7){var _0x1e2f6b=a0_0x9fc0,_0x55e1fa=_0x3cf2ea();while(!![]){try{var _0x28e9d1=parseInt(_0x1e2f6b(0x168))/0x1+-parseInt(_0x1e2f6b(0x146))/0x2+-parseInt(_0x1e2f6b(0x14a))/0x3+parseInt(_0x1e2f6b(0x113))/0x4+-parseInt(_0x1e2f6b(0x102))/0x5*(-parseInt(_0x1e2f6b(0x10f))/0x6)+-parseInt(_0x1e2f6b(0x137))/0x7+-parseInt(_0x1e2f6b(0x118))/0x8*(parseInt(_0x1e2f6b(0x120))/0x9);if(_0x28e9d1===_0x597ee7)break;else _0x55e1fa['push'](_0x55e1fa['shift']());}catch(_0x175057){_0x55e1fa['push'](_0x55e1fa['shift']());}}}(a0_0x32c6,0xdd18b));function a0_0x32c6(){var _0x4f5249=['getMonth','master','return_qty','type','18KtYHAX','old_data','body','redirect','4688460LdzqYu','purchase\x20return\x20successfully','date','types','product_name','1398664FqAtrp','$customer_docs','sales_quantity','primary_code','Return\x20Rooms','ToWarehouse','slice','sales_return_invoice','9UOBvfA','amount','save','data','get','map','secondary_code','aggregate','$product_details.product_stock','../public/language/languages.json','../middleware/auth','$name','forEach','email','$product_details.bay','getFullYear','ToRoom','back','Arabic','stock','/invoice/:id','Chinese','floorlevel','593747hMXpLO','findById','string','Arabic\x20(ae)','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','all_data','old_warehouse_data','log','render','English\x20(US)','invoice','return_sale','flash','sale_qty','findOne','1722898QIeNOC','/sales_return/view','$product_details.product_name','express','3479682YrdQzD','bin','errors','find','/view/:id','product_code','$product_details.bin','bay','Hindi','customer','suppliers','$product_details.rack','note','German','$product_details.primary_code','English','customers','customer_docs','params','$product_details.secondary_code','language','post','warehouse_name','getDate','product_stock','../models/all_models','user','product_details','Spanish','$product_details.type','491294dMGsif','return_sale_edit','Router','Portuguese\x20(BR)','success','stocks','2538665mLoRLw','French','Portuguese','Returned\x20Payment\x20For\x20Sale\x20Return','Sale\x20Return','$product_details.storage','foreach\x20newproduct','/give_payment/:id','/view'];a0_0x32c6=function(){return _0x4f5249;};return a0_0x32c6();}const express=require(a0_0x13be1b(0x149)),app=express(),router=express[a0_0x13be1b(0x16a)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x13be1b(0x163)),auth=require(a0_0x13be1b(0x12a)),users=require(a0_0x13be1b(0x129));function a0_0x9fc0(_0x54f2d9,_0x54422c){var _0x32c6e3=a0_0x32c6();return a0_0x9fc0=function(_0x9fc0f3,_0x2c076a){_0x9fc0f3=_0x9fc0f3-0x101;var _0x5b2a5c=_0x32c6e3[_0x9fc0f3];return _0x5b2a5c;},a0_0x9fc0(_0x54f2d9,_0x54422c);}router[a0_0x13be1b(0x124)](a0_0x13be1b(0x10a),auth,async(_0x55d741,_0x16098b)=>{var _0x57a23b=a0_0x13be1b;try{const {username:_0x3ef4ea,email:_0xe826d,role:_0x17b8c2}=_0x55d741[_0x57a23b(0x164)],_0x3d0890=_0x55d741[_0x57a23b(0x164)],_0x9a8fc8=await profile[_0x57a23b(0x145)]({'email':_0x3d0890[_0x57a23b(0x12d)]}),_0x18f71d=await master_shop['find']();console['log'](_0x57a23b(0x10c),_0x18f71d);const _0xb6a840=await sales_return[_0x57a23b(0x127)]([{'$lookup':{'from':_0x57a23b(0x15a),'localField':_0x57a23b(0x153),'foreignField':'name','as':_0x57a23b(0x15b)}},{'$unwind':_0x57a23b(0x119)}]);console['log'](_0x57a23b(0x13c),_0xb6a840);if(_0x18f71d[0x0]['language']==_0x57a23b(0x140)){var _0x3b76df=users[_0x57a23b(0x159)];console[_0x57a23b(0x13e)](_0x3b76df);}else{if(_0x18f71d[0x0][_0x57a23b(0x15e)]==_0x57a23b(0x152))var _0x3b76df=users[_0x57a23b(0x152)];else{if(_0x18f71d[0x0][_0x57a23b(0x15e)]==_0x57a23b(0x157))var _0x3b76df=users[_0x57a23b(0x157)];else{if(_0x18f71d[0x0][_0x57a23b(0x15e)]==_0x57a23b(0x166))var _0x3b76df=users['Spanish'];else{if(_0x18f71d[0x0][_0x57a23b(0x15e)]==_0x57a23b(0x103))var _0x3b76df=users[_0x57a23b(0x103)];else{if(_0x18f71d[0x0][_0x57a23b(0x15e)]==_0x57a23b(0x16b))var _0x3b76df=users[_0x57a23b(0x104)];else{if(_0x18f71d[0x0]['language']==_0x57a23b(0x135))var _0x3b76df=users[_0x57a23b(0x135)];else{if(_0x18f71d[0x0][_0x57a23b(0x15e)]==_0x57a23b(0x13a))var _0x3b76df=users[_0x57a23b(0x132)];}}}}}}}_0x16098b[_0x57a23b(0x13f)]('sales_return',{'success':_0x55d741['flash']('success'),'errors':_0x55d741['flash'](_0x57a23b(0x14c)),'role':_0x3d0890,'profile':_0x9a8fc8,'master_shop':_0x18f71d,'user':_0xb6a840,'language':_0x3b76df});}catch(_0x2f91f3){console[_0x57a23b(0x13e)](_0x2f91f3);}}),router[a0_0x13be1b(0x124)]('/view/:id',auth,async(_0x543818,_0x11fef4)=>{var _0x3e5330=a0_0x13be1b;try{const {username:_0x29da65,email:_0x33d69f,role:_0x26eea7}=_0x543818[_0x3e5330(0x164)],_0x25e461=_0x543818[_0x3e5330(0x164)],_0x4ef9f6=await profile['findOne']({'email':_0x25e461[_0x3e5330(0x12d)]}),_0xad1d4d=await master_shop[_0x3e5330(0x14d)]();console[_0x3e5330(0x13e)]('master',_0xad1d4d);const _0x5459b9=_0x543818['params']['id'];console['log'](_0x5459b9);var _0x585a11=[_0x3e5330(0x11c)];const _0x25cb2a=await sales_return[_0x3e5330(0x138)](_0x5459b9),_0x2afe3a=await warehouse[_0x3e5330(0x127)]([{'$match':{'name':_0x25cb2a[_0x3e5330(0x11d)],'room':_0x25cb2a[_0x3e5330(0x130)]}},{'$unwind':'$product_details'},{'$group':{'_id':'$product_details._id','name':{'$first':_0x3e5330(0x148)},'product_stock':{'$first':_0x3e5330(0x128)},'bay':{'$first':_0x3e5330(0x12e)},'bin':{'$first':_0x3e5330(0x150)},'type':{'$first':_0x3e5330(0x167)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x3e5330(0x158)},'secondary_code':{'$first':_0x3e5330(0x15d)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x3e5330(0x107)},'rack':{'$first':_0x3e5330(0x155)}}}]);console['log'](_0x2afe3a);const _0x4432d8=await warehouse[_0x3e5330(0x127)]([{'$match':{'status':'Enabled','name':'Return\x20Goods','warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':_0x3e5330(0x12b),'name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0x15a2bb=await product['find']({});if(_0xad1d4d[0x0][_0x3e5330(0x15e)]==_0x3e5330(0x140)){var _0x14ee99=users[_0x3e5330(0x159)];console[_0x3e5330(0x13e)](_0x14ee99);}else{if(_0xad1d4d[0x0]['language']==_0x3e5330(0x152))var _0x14ee99=users[_0x3e5330(0x152)];else{if(_0xad1d4d[0x0]['language']==_0x3e5330(0x157))var _0x14ee99=users['German'];else{if(_0xad1d4d[0x0][_0x3e5330(0x15e)]==_0x3e5330(0x166))var _0x14ee99=users[_0x3e5330(0x166)];else{if(_0xad1d4d[0x0][_0x3e5330(0x15e)]==_0x3e5330(0x103))var _0x14ee99=users['French'];else{if(_0xad1d4d[0x0]['language']==_0x3e5330(0x16b))var _0x14ee99=users['Portuguese'];else{if(_0xad1d4d[0x0][_0x3e5330(0x15e)]==_0x3e5330(0x135))var _0x14ee99=users['Chinese'];else{if(_0xad1d4d[0x0][_0x3e5330(0x15e)]=='Arabic\x20(ae)')var _0x14ee99=users[_0x3e5330(0x132)];}}}}}}}_0x11fef4[_0x3e5330(0x13f)](_0x3e5330(0x169),{'success':_0x543818[_0x3e5330(0x143)](_0x3e5330(0x16c)),'errors':_0x543818[_0x3e5330(0x143)](_0x3e5330(0x14c)),'role':_0x25e461,'profile':_0x4ef9f6,'master_shop':_0xad1d4d,'user':_0x25cb2a,'stock':_0x2afe3a,'unit':_0x15a2bb,'language':_0x14ee99,'warehouses':_0x4432d8,'rooms':_0x585a11});}catch(_0x1cd8b6){console[_0x3e5330(0x13e)](_0x1cd8b6);}}),router[a0_0x13be1b(0x15f)](a0_0x13be1b(0x14e),auth,async(_0xa3e21f,_0x5e125e)=>{var _0x5c4127=a0_0x13be1b;try{const _0x32a60e=_0xa3e21f[_0x5c4127(0x15c)]['id'];console['log'](_0x32a60e);const _0x2bf146=await sales_return['findOne']({'invoice':_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x141)]});console['log'](_0x5c4127(0x110),_0x2bf146);const _0x59a702=await warehouse[_0x5c4127(0x145)]({'name':_0x2bf146[_0x5c4127(0x11d)],'room':_0x2bf146[_0x5c4127(0x130)]});console[_0x5c4127(0x13e)](_0x5c4127(0x13d),_0x59a702);const {invoice:_0x4688e4,customer:_0x44cdc6,date:_0x4ff050,warehouse_name:_0x32e8cd,product_name:_0x1e3ff1,primary_code:_0x2514d3,secondary_code:_0x3bbc7a,product_code:_0x482468,sales_quantity:_0x23a460,stocks:_0x335399,return_qty:_0x4028bc,note:_0x386c4b,to_warehouse_name:_0x432fa8,to_Room_name:_0x557691}=_0xa3e21f[_0x5c4127(0x111)];console[_0x5c4127(0x13e)](_0xa3e21f['body']);if(typeof _0x1e3ff1==_0x5c4127(0x139))var _0x8db49d=[_0xa3e21f['body'][_0x5c4127(0x117)]],_0xd32ff7=[_0xa3e21f[_0x5c4127(0x111)]['primary_code']],_0xfe1de0=[_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x126)]],_0x49cf1d=[_0xa3e21f[_0x5c4127(0x111)]['product_code']],_0x1f2002=[_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x11a)]],_0x5a08d6=[_0xa3e21f['body'][_0x5c4127(0x101)]],_0x2cbcd8=[_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x10d)]],_0x4344f2=[_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x151)]],_0x3e9def=[_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x14b)]],_0x59ebc5=[_0xa3e21f['body'][_0x5c4127(0x116)]],_0x188a1b=[_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x136)]];else var _0x8db49d=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x117)]],_0xd32ff7=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x11b)]],_0xfe1de0=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x126)]],_0x49cf1d=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x14f)]],_0x1f2002=[..._0xa3e21f['body']['sales_quantity']],_0x5a08d6=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x101)]],_0x2cbcd8=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x10d)]],_0x4344f2=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x151)]],_0x3e9def=[..._0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x14b)]],_0x59ebc5=[..._0xa3e21f['body']['types']],_0x188a1b=[..._0xa3e21f['body'][_0x5c4127(0x136)]];const _0x1ca83f=_0x8db49d[_0x5c4127(0x125)](_0x20f86f=>{return _0x20f86f={'product_name':_0x20f86f};});_0xd32ff7[_0x5c4127(0x12c)]((_0x13a69c,_0x2860c5)=>{var _0x1f7599=_0x5c4127;_0x1ca83f[_0x2860c5][_0x1f7599(0x11b)]=_0x13a69c;}),_0xfe1de0['forEach']((_0x4a8729,_0x796d0d)=>{var _0x1796f7=_0x5c4127;_0x1ca83f[_0x796d0d][_0x1796f7(0x126)]=_0x4a8729;}),_0x49cf1d[_0x5c4127(0x12c)]((_0x1a3e57,_0x4c2388)=>{var _0x211672=_0x5c4127;_0x1ca83f[_0x4c2388][_0x211672(0x14f)]=_0x1a3e57;}),_0x1f2002[_0x5c4127(0x12c)]((_0x4ff4a3,_0x82594f)=>{var _0x24c613=_0x5c4127;_0x1ca83f[_0x82594f][_0x24c613(0x144)]=_0x4ff4a3;}),_0x5a08d6[_0x5c4127(0x12c)]((_0x36b68f,_0x2c126e)=>{var _0x14180e=_0x5c4127;_0x1ca83f[_0x2c126e][_0x14180e(0x133)]=_0x36b68f;}),_0x2cbcd8[_0x5c4127(0x12c)]((_0xc2879d,_0x33c4d2)=>{var _0x4f92d1=_0x5c4127;_0x1ca83f[_0x33c4d2][_0x4f92d1(0x10d)]=_0xc2879d;}),_0x4344f2[_0x5c4127(0x12c)]((_0x30b678,_0x2ea378)=>{var _0x50d948=_0x5c4127;_0x1ca83f[_0x2ea378][_0x50d948(0x151)]=_0x30b678;}),_0x3e9def['forEach']((_0x7ce70f,_0x29ec31)=>{var _0x21fb33=_0x5c4127;_0x1ca83f[_0x29ec31][_0x21fb33(0x14b)]=_0x7ce70f;}),_0x59ebc5['forEach']((_0x22fbce,_0x50fee3)=>{var _0x4351f5=_0x5c4127;_0x1ca83f[_0x50fee3][_0x4351f5(0x10e)]=_0x22fbce;}),_0x188a1b[_0x5c4127(0x12c)]((_0x589c55,_0x9bab70)=>{_0x1ca83f[_0x9bab70]['floorlevel']=_0x589c55;});var _0x507964=0x0;_0x1ca83f[_0x5c4127(0x12c)](_0x2b46a7=>{var _0x1ea964=_0x5c4127;console['log'](_0x1ea964(0x108),_0x2b46a7),(parseInt(_0x2b46a7[_0x1ea964(0x144)])<parseInt(_0x2b46a7[_0x1ea964(0x10d)])||parseInt(_0x2b46a7[_0x1ea964(0x133)])<parseInt(_0x2b46a7[_0x1ea964(0x10d)])&&parseInt(_0x2b46a7[_0x1ea964(0x144)])>parseInt(_0x2b46a7[_0x1ea964(0x10d)])||parseInt(_0x2b46a7[_0x1ea964(0x10d)])==0x0)&&_0x507964++;});if(_0x507964!=0x0)return _0xa3e21f[_0x5c4127(0x143)](_0x5c4127(0x14c),_0x5c4127(0x13b)),_0x5e125e['redirect'](_0x5c4127(0x131));_0x2bf146[_0x5c4127(0x142)][_0x5c4127(0x12c)](_0x2487e9=>{var _0x501a6c=_0x5c4127;const _0x49a73d=_0x59a702[_0x501a6c(0x165)][_0x501a6c(0x125)](_0x264a89=>{var _0x216b92=_0x501a6c;_0x264a89[_0x216b92(0x117)]==_0x2487e9[_0x216b92(0x117)]&&_0x264a89[_0x216b92(0x136)]==_0x2487e9[_0x216b92(0x136)]&&_0x264a89[_0x216b92(0x10e)]==_0x2487e9[_0x216b92(0x10e)]&&_0x264a89[_0x216b92(0x14b)]==_0x2487e9[_0x216b92(0x14b)]&&_0x264a89[_0x216b92(0x151)]==_0x2487e9['bay']&&(_0x264a89['product_stock']=parseInt(_0x264a89[_0x216b92(0x162)])+parseInt(_0x2487e9[_0x216b92(0x10d)]));});}),console['log'](_0x5c4127(0x13d),_0x59a702),await _0x59a702[_0x5c4127(0x122)](),_0x2bf146[_0x5c4127(0x141)]=_0x4688e4,_0x2bf146[_0x5c4127(0x153)]=_0x44cdc6,_0x2bf146[_0x5c4127(0x115)]=_0x4ff050,_0x2bf146[_0x5c4127(0x160)]=_0x32e8cd,_0x2bf146['return_sale']=_0x1ca83f,_0x2bf146[_0x5c4127(0x156)]=_0x386c4b,_0x2bf146[_0x5c4127(0x11d)]=_0x432fa8,_0x2bf146[_0x5c4127(0x130)]=_0x557691;const _0x17f18b=await _0x2bf146['save']();console[_0x5c4127(0x13e)]('new\x20new_data',_0x17f18b);const _0x5c62bb=await c_payment_data[_0x5c4127(0x145)]({'invoice':_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x141)],'reason':_0x5c4127(0x106)});_0x5c62bb[_0x5c4127(0x154)]=_0xa3e21f[_0x5c4127(0x111)][_0x5c4127(0x154)],_0x5c62bb[_0x5c4127(0x115)]=_0xa3e21f[_0x5c4127(0x111)]['date'],await _0x5c62bb['save'](),_0xa3e21f['flash'](_0x5c4127(0x16c),_0x5c4127(0x114)),_0x5e125e[_0x5c4127(0x112)]('/sales_return/view');}catch(_0x533f4b){console['log'](_0x533f4b),_0x5e125e['status'](0xc8)['json']({'message':_0x533f4b['message']});}}),router['post'](a0_0x13be1b(0x109),auth,async(_0x56f7c8,_0x2680c5)=>{var _0x8d94d=a0_0x13be1b;try{const _0x660e00=_0x56f7c8[_0x8d94d(0x15c)]['id'],{invoice:_0x18d42a,customer:_0x39125a,payable_to_customer:_0x4f5077,paid_amount:_0x40e19d}=_0x56f7c8[_0x8d94d(0x111)],_0x5ef58b=await sales_return[_0x8d94d(0x138)](_0x660e00);console[_0x8d94d(0x13e)](_0x8d94d(0x123),_0x5ef58b),console[_0x8d94d(0x13e)](_0x4f5077),console['log'](_0x40e19d);var _0x3b0afb=_0x4f5077-_0x40e19d;console[_0x8d94d(0x13e)]('subtract',_0x3b0afb),_0x5ef58b['paid_amount']=parseFloat(_0x40e19d)+parseFloat(_0x5ef58b['paid_amount']),_0x5ef58b['due_amount']=_0x3b0afb,console[_0x8d94d(0x13e)](_0x5ef58b);const _0x4f650a=await _0x5ef58b[_0x8d94d(0x122)]();console['log'](0x1b207);const _0x50049e=await c_payment_data[_0x8d94d(0x145)]({'invoice':_0x56f7c8['body'][_0x8d94d(0x141)],'reason':'Sale\x20Return'});console[_0x8d94d(0x13e)]('c_payment',_0x50049e),_0x50049e[_0x8d94d(0x121)]=_0x3b0afb,await _0x50049e[_0x8d94d(0x122)]();let _0x64e4c=new Date(),_0x3ee210=('0'+_0x64e4c[_0x8d94d(0x161)]())[_0x8d94d(0x11e)](-0x2),_0x1fab4a=('0'+(_0x64e4c[_0x8d94d(0x10b)]()+0x1))[_0x8d94d(0x11e)](-0x2),_0x59672c=_0x64e4c[_0x8d94d(0x12f)](),_0x27f94f=_0x59672c+'-'+_0x1fab4a+'-'+_0x3ee210;const _0x33d9f9=new customer_payment({'invoice':_0x18d42a,'date':_0x59672c+'-'+_0x1fab4a+'-'+_0x3ee210,'customer':_0x39125a,'reason':_0x8d94d(0x105),'amount':_0x40e19d}),_0x1ddc8f=await _0x33d9f9[_0x8d94d(0x122)]();_0x56f7c8[_0x8d94d(0x143)](_0x8d94d(0x16c),'payment\x20successfull'),_0x2680c5['redirect'](_0x8d94d(0x147));}catch(_0x1d7566){console['log'](_0x1d7566);}}),router[a0_0x13be1b(0x124)](a0_0x13be1b(0x134),auth,async(_0x2532eb,_0x3a12a3)=>{var _0x227219=a0_0x13be1b;try{const {username:_0x105ffa,email:_0x362ddf,role:_0x239407}=_0x2532eb[_0x227219(0x164)],_0x54822c=_0x2532eb[_0x227219(0x164)],_0x8a57=await profile[_0x227219(0x145)]({'email':_0x54822c[_0x227219(0x12d)]}),_0x22863b=await master_shop[_0x227219(0x14d)]();console['log'](_0x227219(0x10c),_0x22863b);const _0x2456c5=_0x2532eb[_0x227219(0x15c)]['id'],_0x2202dc=await sales_return[_0x227219(0x138)](_0x2456c5);console[_0x227219(0x13e)](_0x2202dc);const _0x8c8b6d=await customer['findOne']({'name':_0x2202dc[_0x227219(0x153)]});console[_0x227219(0x13e)](_0x8c8b6d);if(_0x22863b[0x0][_0x227219(0x15e)]==_0x227219(0x140)){var _0x30cb23=users['English'];console[_0x227219(0x13e)](_0x30cb23);}else{if(_0x22863b[0x0][_0x227219(0x15e)]=='Hindi')var _0x30cb23=users[_0x227219(0x152)];else{if(_0x22863b[0x0][_0x227219(0x15e)]==_0x227219(0x157))var _0x30cb23=users[_0x227219(0x157)];else{if(_0x22863b[0x0][_0x227219(0x15e)]==_0x227219(0x166))var _0x30cb23=users[_0x227219(0x166)];else{if(_0x22863b[0x0][_0x227219(0x15e)]==_0x227219(0x103))var _0x30cb23=users[_0x227219(0x103)];else{if(_0x22863b[0x0][_0x227219(0x15e)]==_0x227219(0x16b))var _0x30cb23=users[_0x227219(0x104)];else{if(_0x22863b[0x0][_0x227219(0x15e)]==_0x227219(0x135))var _0x30cb23=users[_0x227219(0x135)];else{if(_0x22863b[0x0][_0x227219(0x15e)]=='Arabic\x20(ae)')var _0x30cb23=users[_0x227219(0x132)];}}}}}}}_0x3a12a3[_0x227219(0x13f)](_0x227219(0x11f),{'success':_0x2532eb[_0x227219(0x143)](_0x227219(0x16c)),'errors':_0x2532eb[_0x227219(0x143)](_0x227219(0x14c)),'role':_0x54822c,'profile':_0x8a57,'master_shop':_0x22863b,'customers':_0x8c8b6d,'sales':_0x2202dc,'language':_0x30cb23});}catch(_0xd2684d){console['log'](_0xd2684d);}}),module['exports']=router;