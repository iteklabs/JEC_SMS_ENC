function a0_0x5888(_0x5e1ff6,_0x19002f){var _0x457777=a0_0x4577();return a0_0x5888=function(_0x58888f,_0x419068){_0x58888f=_0x58888f-0x129;var _0xae8db=_0x457777[_0x58888f];return _0xae8db;},a0_0x5888(_0x5e1ff6,_0x19002f);}var a0_0x2a2357=a0_0x5888;function a0_0x4577(){var _0x5cf4f0=['/view/:id','Arabic\x20(ae)','subtract','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','product_details','bay','product_stock','amount','3630624VLonZM','$product_details._id','$customer_docs','/sales_return/view','Enabled','$product_details.product_code','getFullYear','customers','customer_docs','English\x20(US)','1109104FnfpZp','3772305bmPIcL','Raw\x20Materials','aggregate','status','$product_details.secondary_code','redirect','c_payment','master','$product_details.type','customer','Hindi','9378eImPki','suppliers','getDate','return_qty','stock','paid_amount','sale_qty','old_data','Portuguese\x20(BR)','bin','Arabic','return_sale_edit','flash','/view','body','839153GTnlvR','Portuguese','sales_return','back','render','message','warehouse_name','map','English','product_name','$product_details','$product_details.product_name','findById','floorlevel','params','get','ToWarehouse','1120742lDSTxE','invoice','/give_payment/:id','json','find','French','German','Sale\x20Return','save','sales_quantity','Return\x20Rooms','findOne','slice','secondary_code','Chinese','language','forEach','errors','return_sale','all_data','user','stocks','post','date','$product_details.storage','payment\x20successfull','ToRoom','old_warehouse_data','exports','1545JYOoPS','product_code','sales_return_invoice','../models/all_models','Return\x20Goods','primary_code','name','$product_details.rack','type','success','$product_details.floorlevel','451442hyDJeq','email','Spanish','/invoice/:id','3MRkHRB','$product_details.bin','../public/language/languages.json','log'];a0_0x4577=function(){return _0x5cf4f0;};return a0_0x4577();}(function(_0x946c7c,_0x3ce89e){var _0x4add4b=a0_0x5888,_0x445c19=_0x946c7c();while(!![]){try{var _0x530792=parseInt(_0x4add4b(0x17e))/0x1+-parseInt(_0x4add4b(0x156))/0x2*(-parseInt(_0x4add4b(0x182))/0x3)+-parseInt(_0x4add4b(0x12a))/0x4+-parseInt(_0x4add4b(0x173))/0x5*(parseInt(_0x4add4b(0x136))/0x6)+parseInt(_0x4add4b(0x145))/0x7+parseInt(_0x4add4b(0x18e))/0x8+-parseInt(_0x4add4b(0x12b))/0x9;if(_0x530792===_0x3ce89e)break;else _0x445c19['push'](_0x445c19['shift']());}catch(_0x4d87f4){_0x445c19['push'](_0x445c19['shift']());}}}(a0_0x4577,0x63274));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x2a2357(0x176)),auth=require('../middleware/auth'),users=require(a0_0x2a2357(0x184));router[a0_0x2a2357(0x154)](a0_0x2a2357(0x143),auth,async(_0x437d7c,_0x35a359)=>{var _0x53349c=a0_0x2a2357;try{const {username:_0x249bbd,email:_0x1b0115,role:_0x7159d4}=_0x437d7c['user'],_0x1186b5=_0x437d7c[_0x53349c(0x16a)],_0x193d3a=await profile['findOne']({'email':_0x1186b5[_0x53349c(0x17f)]}),_0x12c3a3=await master_shop[_0x53349c(0x15a)]();console[_0x53349c(0x185)](_0x53349c(0x132),_0x12c3a3);const _0x40bba3=await sales_return[_0x53349c(0x12d)]([{'$lookup':{'from':_0x53349c(0x195),'localField':'customer','foreignField':_0x53349c(0x179),'as':_0x53349c(0x196)}},{'$unwind':_0x53349c(0x190)}]);console[_0x53349c(0x185)](_0x53349c(0x169),_0x40bba3);if(_0x12c3a3[0x0]['language']==_0x53349c(0x129)){var _0x25292a=users[_0x53349c(0x14d)];console[_0x53349c(0x185)](_0x25292a);}else{if(_0x12c3a3[0x0][_0x53349c(0x165)]==_0x53349c(0x135))var _0x25292a=users[_0x53349c(0x135)];else{if(_0x12c3a3[0x0]['language']=='German')var _0x25292a=users[_0x53349c(0x15c)];else{if(_0x12c3a3[0x0][_0x53349c(0x165)]=='Spanish')var _0x25292a=users[_0x53349c(0x180)];else{if(_0x12c3a3[0x0]['language']==_0x53349c(0x15b))var _0x25292a=users['French'];else{if(_0x12c3a3[0x0]['language']=='Portuguese\x20(BR)')var _0x25292a=users[_0x53349c(0x146)];else{if(_0x12c3a3[0x0][_0x53349c(0x165)]=='Chinese')var _0x25292a=users[_0x53349c(0x164)];else{if(_0x12c3a3[0x0][_0x53349c(0x165)]==_0x53349c(0x187))var _0x25292a=users['Arabic'];}}}}}}}_0x35a359[_0x53349c(0x149)](_0x53349c(0x147),{'success':_0x437d7c['flash']('success'),'errors':_0x437d7c[_0x53349c(0x142)](_0x53349c(0x167)),'role':_0x1186b5,'profile':_0x193d3a,'master_shop':_0x12c3a3,'user':_0x40bba3,'language':_0x25292a});}catch(_0x257e6c){console[_0x53349c(0x185)](_0x257e6c);}}),router[a0_0x2a2357(0x154)](a0_0x2a2357(0x186),auth,async(_0xd32873,_0x176824)=>{var _0x4f9704=a0_0x2a2357;try{const {username:_0x24789b,email:_0x404d85,role:_0x2bbc9e}=_0xd32873[_0x4f9704(0x16a)],_0x3e717b=_0xd32873[_0x4f9704(0x16a)],_0x30f6bc=await profile[_0x4f9704(0x161)]({'email':_0x3e717b[_0x4f9704(0x17f)]}),_0xd4a590=await master_shop[_0x4f9704(0x15a)]();console[_0x4f9704(0x185)](_0x4f9704(0x132),_0xd4a590);const _0x4fee95=_0xd32873[_0x4f9704(0x153)]['id'];console[_0x4f9704(0x185)](_0x4fee95);var _0x5b46dc=[_0x4f9704(0x160)];const _0x34cc56=await sales_return['findById'](_0x4fee95),_0x16dc2b=await warehouse[_0x4f9704(0x12d)]([{'$match':{'name':_0x34cc56[_0x4f9704(0x155)],'room':_0x34cc56[_0x4f9704(0x170)]}},{'$unwind':_0x4f9704(0x14f)},{'$group':{'_id':_0x4f9704(0x18f),'name':{'$first':_0x4f9704(0x150)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x4f9704(0x183)},'type':{'$first':_0x4f9704(0x133)},'floorlevel':{'$first':_0x4f9704(0x17d)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x4f9704(0x12f)},'product_code':{'$first':_0x4f9704(0x193)},'storage':{'$first':_0x4f9704(0x16e)},'rack':{'$first':_0x4f9704(0x17a)}}}]);console[_0x4f9704(0x185)](_0x16dc2b);const _0xacfcd5=await warehouse[_0x4f9704(0x12d)]([{'$match':{'status':_0x4f9704(0x192),'name':_0x4f9704(0x177),'warehouse_category':_0x4f9704(0x12c)}},{'$group':{'_id':'$name','name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0x449485=await product['find']({});if(_0xd4a590[0x0][_0x4f9704(0x165)]=='English\x20(US)'){var _0xe5a01=users[_0x4f9704(0x14d)];console[_0x4f9704(0x185)](_0xe5a01);}else{if(_0xd4a590[0x0][_0x4f9704(0x165)]=='Hindi')var _0xe5a01=users['Hindi'];else{if(_0xd4a590[0x0]['language']==_0x4f9704(0x15c))var _0xe5a01=users[_0x4f9704(0x15c)];else{if(_0xd4a590[0x0]['language']=='Spanish')var _0xe5a01=users[_0x4f9704(0x180)];else{if(_0xd4a590[0x0][_0x4f9704(0x165)]=='French')var _0xe5a01=users[_0x4f9704(0x15b)];else{if(_0xd4a590[0x0][_0x4f9704(0x165)]==_0x4f9704(0x13e))var _0xe5a01=users[_0x4f9704(0x146)];else{if(_0xd4a590[0x0]['language']=='Chinese')var _0xe5a01=users[_0x4f9704(0x164)];else{if(_0xd4a590[0x0][_0x4f9704(0x165)]==_0x4f9704(0x187))var _0xe5a01=users['Arabic'];}}}}}}}_0x176824[_0x4f9704(0x149)](_0x4f9704(0x141),{'success':_0xd32873['flash'](_0x4f9704(0x17c)),'errors':_0xd32873[_0x4f9704(0x142)](_0x4f9704(0x167)),'role':_0x3e717b,'profile':_0x30f6bc,'master_shop':_0xd4a590,'user':_0x34cc56,'stock':_0x16dc2b,'unit':_0x449485,'language':_0xe5a01,'warehouses':_0xacfcd5,'rooms':_0x5b46dc});}catch(_0x6b2c0d){console[_0x4f9704(0x185)](_0x6b2c0d);}}),router[a0_0x2a2357(0x16c)](a0_0x2a2357(0x186),auth,async(_0x584106,_0x53e568)=>{var _0x274f1b=a0_0x2a2357;try{const _0x2b772e=_0x584106[_0x274f1b(0x153)]['id'];console['log'](_0x2b772e);const _0x2c901b=await sales_return[_0x274f1b(0x161)]({'invoice':_0x584106['body'][_0x274f1b(0x157)]});console['log'](_0x274f1b(0x13d),_0x2c901b);const _0x517d0e=await warehouse['findOne']({'name':_0x2c901b[_0x274f1b(0x155)],'room':_0x2c901b[_0x274f1b(0x170)]});console[_0x274f1b(0x185)](_0x274f1b(0x171),_0x517d0e);const {invoice:_0xe011ca,customer:_0x3286c2,date:_0x5ea840,warehouse_name:_0x1b4297,product_name:_0x409ddf,primary_code:_0xd1bf29,secondary_code:_0x4ea44d,product_code:_0x354e55,sales_quantity:_0x3f9d1a,stocks:_0xb003f3,return_qty:_0x2ebae4,note:_0x370c21,to_warehouse_name:_0x32a2a4,to_Room_name:_0x5834b9}=_0x584106[_0x274f1b(0x144)];console['log'](_0x584106[_0x274f1b(0x144)]);if(typeof _0x409ddf=='string')var _0x44649c=[_0x584106[_0x274f1b(0x144)][_0x274f1b(0x14e)]],_0x409ca2=[_0x584106[_0x274f1b(0x144)]['primary_code']],_0x3e55ac=[_0x584106[_0x274f1b(0x144)][_0x274f1b(0x163)]],_0x20ce23=[_0x584106['body'][_0x274f1b(0x174)]],_0x25def6=[_0x584106[_0x274f1b(0x144)][_0x274f1b(0x15f)]],_0x30c562=[_0x584106[_0x274f1b(0x144)][_0x274f1b(0x16b)]],_0x56db4a=[_0x584106['body'][_0x274f1b(0x139)]],_0x4252c4=[_0x584106['body']['bay']],_0x340352=[_0x584106[_0x274f1b(0x144)]['bin']],_0x13d825=[_0x584106['body']['types']],_0x8fed11=[_0x584106['body'][_0x274f1b(0x152)]];else var _0x44649c=[..._0x584106[_0x274f1b(0x144)][_0x274f1b(0x14e)]],_0x409ca2=[..._0x584106['body'][_0x274f1b(0x178)]],_0x3e55ac=[..._0x584106[_0x274f1b(0x144)]['secondary_code']],_0x20ce23=[..._0x584106[_0x274f1b(0x144)]['product_code']],_0x25def6=[..._0x584106[_0x274f1b(0x144)][_0x274f1b(0x15f)]],_0x30c562=[..._0x584106[_0x274f1b(0x144)][_0x274f1b(0x16b)]],_0x56db4a=[..._0x584106[_0x274f1b(0x144)][_0x274f1b(0x139)]],_0x4252c4=[..._0x584106[_0x274f1b(0x144)][_0x274f1b(0x18b)]],_0x340352=[..._0x584106[_0x274f1b(0x144)][_0x274f1b(0x13f)]],_0x13d825=[..._0x584106[_0x274f1b(0x144)]['types']],_0x8fed11=[..._0x584106[_0x274f1b(0x144)]['floorlevel']];const _0x231c00=_0x44649c[_0x274f1b(0x14c)](_0x52379a=>{return _0x52379a={'product_name':_0x52379a};});_0x409ca2[_0x274f1b(0x166)]((_0x1a9b1b,_0x4dd7f4)=>{_0x231c00[_0x4dd7f4]['primary_code']=_0x1a9b1b;}),_0x3e55ac[_0x274f1b(0x166)]((_0x483f5c,_0x219513)=>{var _0x4792d6=_0x274f1b;_0x231c00[_0x219513][_0x4792d6(0x163)]=_0x483f5c;}),_0x20ce23[_0x274f1b(0x166)]((_0x159056,_0x1fa396)=>{var _0x3f494b=_0x274f1b;_0x231c00[_0x1fa396][_0x3f494b(0x174)]=_0x159056;}),_0x25def6[_0x274f1b(0x166)]((_0x15d57a,_0x3c6e82)=>{_0x231c00[_0x3c6e82]['sale_qty']=_0x15d57a;}),_0x30c562[_0x274f1b(0x166)]((_0x36db76,_0x3e5df2)=>{var _0x2411f2=_0x274f1b;_0x231c00[_0x3e5df2][_0x2411f2(0x13a)]=_0x36db76;}),_0x56db4a[_0x274f1b(0x166)]((_0x2d4418,_0x1b066b)=>{var _0x56de16=_0x274f1b;_0x231c00[_0x1b066b][_0x56de16(0x139)]=_0x2d4418;}),_0x4252c4['forEach']((_0x19167a,_0x5da5df)=>{_0x231c00[_0x5da5df]['bay']=_0x19167a;}),_0x340352[_0x274f1b(0x166)]((_0xec32b0,_0x32e7b4)=>{var _0x21a798=_0x274f1b;_0x231c00[_0x32e7b4][_0x21a798(0x13f)]=_0xec32b0;}),_0x13d825[_0x274f1b(0x166)]((_0x13474e,_0x998d2d)=>{var _0x28d899=_0x274f1b;_0x231c00[_0x998d2d][_0x28d899(0x17b)]=_0x13474e;}),_0x8fed11[_0x274f1b(0x166)]((_0x3013a1,_0x192692)=>{var _0x401454=_0x274f1b;_0x231c00[_0x192692][_0x401454(0x152)]=_0x3013a1;});var _0x553da2=0x0;_0x231c00[_0x274f1b(0x166)](_0x5adca2=>{var _0x25f5a0=_0x274f1b;console['log']('foreach\x20newproduct',_0x5adca2),(parseInt(_0x5adca2[_0x25f5a0(0x13c)])<parseInt(_0x5adca2['return_qty'])||parseInt(_0x5adca2[_0x25f5a0(0x13a)])<parseInt(_0x5adca2['return_qty'])&&parseInt(_0x5adca2['sale_qty'])>parseInt(_0x5adca2[_0x25f5a0(0x139)])||parseInt(_0x5adca2[_0x25f5a0(0x139)])==0x0)&&_0x553da2++;});if(_0x553da2!=0x0)return _0x584106['flash']('errors',_0x274f1b(0x189)),_0x53e568[_0x274f1b(0x130)](_0x274f1b(0x148));_0x2c901b[_0x274f1b(0x168)][_0x274f1b(0x166)](_0x57c61d=>{var _0x5643dc=_0x274f1b;const _0x15481d=_0x517d0e[_0x5643dc(0x18a)]['map'](_0x4b5bf9=>{var _0x5eda42=_0x5643dc;_0x4b5bf9[_0x5eda42(0x14e)]==_0x57c61d['product_name']&&_0x4b5bf9[_0x5eda42(0x152)]==_0x57c61d['floorlevel']&&_0x4b5bf9['type']==_0x57c61d['type']&&_0x4b5bf9[_0x5eda42(0x13f)]==_0x57c61d[_0x5eda42(0x13f)]&&_0x4b5bf9[_0x5eda42(0x18b)]==_0x57c61d['bay']&&(_0x4b5bf9[_0x5eda42(0x18c)]=parseInt(_0x4b5bf9['product_stock'])+parseInt(_0x57c61d[_0x5eda42(0x139)]));});}),console['log'](_0x274f1b(0x171),_0x517d0e),await _0x517d0e[_0x274f1b(0x15e)](),_0x2c901b[_0x274f1b(0x157)]=_0xe011ca,_0x2c901b[_0x274f1b(0x134)]=_0x3286c2,_0x2c901b[_0x274f1b(0x16d)]=_0x5ea840,_0x2c901b[_0x274f1b(0x14b)]=_0x1b4297,_0x2c901b[_0x274f1b(0x168)]=_0x231c00,_0x2c901b['note']=_0x370c21,_0x2c901b[_0x274f1b(0x155)]=_0x32a2a4,_0x2c901b[_0x274f1b(0x170)]=_0x5834b9;const _0x5d0d17=await _0x2c901b['save']();console[_0x274f1b(0x185)]('new\x20new_data',_0x5d0d17);const _0x8711ef=await c_payment_data[_0x274f1b(0x161)]({'invoice':_0x584106['body'][_0x274f1b(0x157)],'reason':_0x274f1b(0x15d)});_0x8711ef['suppliers']=_0x584106['body'][_0x274f1b(0x137)],_0x8711ef[_0x274f1b(0x16d)]=_0x584106[_0x274f1b(0x144)]['date'],await _0x8711ef[_0x274f1b(0x15e)](),_0x584106[_0x274f1b(0x142)](_0x274f1b(0x17c),'purchase\x20return\x20successfully'),_0x53e568['redirect'](_0x274f1b(0x191));}catch(_0x3d6297){console[_0x274f1b(0x185)](_0x3d6297),_0x53e568[_0x274f1b(0x12e)](0xc8)[_0x274f1b(0x159)]({'message':_0x3d6297[_0x274f1b(0x14a)]});}}),router[a0_0x2a2357(0x16c)](a0_0x2a2357(0x158),auth,async(_0x57403b,_0x2f5871)=>{var _0x1a3d5b=a0_0x2a2357;try{const _0x1790e6=_0x57403b['params']['id'],{invoice:_0x1dd4b0,customer:_0x3bc01f,payable_to_customer:_0x5e7975,paid_amount:_0x4eb2b7}=_0x57403b['body'],_0x17cec3=await sales_return[_0x1a3d5b(0x151)](_0x1790e6);console[_0x1a3d5b(0x185)]('data',_0x17cec3),console['log'](_0x5e7975),console[_0x1a3d5b(0x185)](_0x4eb2b7);var _0x31cee8=_0x5e7975-_0x4eb2b7;console[_0x1a3d5b(0x185)](_0x1a3d5b(0x188),_0x31cee8),_0x17cec3[_0x1a3d5b(0x13b)]=parseFloat(_0x4eb2b7)+parseFloat(_0x17cec3[_0x1a3d5b(0x13b)]),_0x17cec3['due_amount']=_0x31cee8,console['log'](_0x17cec3);const _0x1cf0eb=await _0x17cec3[_0x1a3d5b(0x15e)]();console[_0x1a3d5b(0x185)](0x1b207);const _0x46cdd7=await c_payment_data[_0x1a3d5b(0x161)]({'invoice':_0x57403b[_0x1a3d5b(0x144)]['invoice'],'reason':_0x1a3d5b(0x15d)});console['log'](_0x1a3d5b(0x131),_0x46cdd7),_0x46cdd7[_0x1a3d5b(0x18d)]=_0x31cee8,await _0x46cdd7[_0x1a3d5b(0x15e)]();let _0x130218=new Date(),_0x524e9a=('0'+_0x130218[_0x1a3d5b(0x138)]())[_0x1a3d5b(0x162)](-0x2),_0xe16722=('0'+(_0x130218['getMonth']()+0x1))[_0x1a3d5b(0x162)](-0x2),_0x42b678=_0x130218[_0x1a3d5b(0x194)](),_0x164267=_0x42b678+'-'+_0xe16722+'-'+_0x524e9a;const _0x356254=new customer_payment({'invoice':_0x1dd4b0,'date':_0x42b678+'-'+_0xe16722+'-'+_0x524e9a,'customer':_0x3bc01f,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x4eb2b7}),_0x129a4a=await _0x356254[_0x1a3d5b(0x15e)]();_0x57403b[_0x1a3d5b(0x142)](_0x1a3d5b(0x17c),_0x1a3d5b(0x16f)),_0x2f5871[_0x1a3d5b(0x130)](_0x1a3d5b(0x191));}catch(_0x37c256){console[_0x1a3d5b(0x185)](_0x37c256);}}),router[a0_0x2a2357(0x154)](a0_0x2a2357(0x181),auth,async(_0x2c4c50,_0x50ac5d)=>{var _0x11e404=a0_0x2a2357;try{const {username:_0xbe2a98,email:_0x4d31bd,role:_0x562c85}=_0x2c4c50[_0x11e404(0x16a)],_0x4b7f9a=_0x2c4c50['user'],_0xd10f4d=await profile[_0x11e404(0x161)]({'email':_0x4b7f9a[_0x11e404(0x17f)]}),_0x512033=await master_shop[_0x11e404(0x15a)]();console['log'](_0x11e404(0x132),_0x512033);const _0x1d9ee6=_0x2c4c50['params']['id'],_0x5fb1b9=await sales_return[_0x11e404(0x151)](_0x1d9ee6);console[_0x11e404(0x185)](_0x5fb1b9);const _0x13acca=await customer[_0x11e404(0x161)]({'name':_0x5fb1b9[_0x11e404(0x134)]});console[_0x11e404(0x185)](_0x13acca);if(_0x512033[0x0][_0x11e404(0x165)]==_0x11e404(0x129)){var _0x2d23c1=users[_0x11e404(0x14d)];console[_0x11e404(0x185)](_0x2d23c1);}else{if(_0x512033[0x0]['language']==_0x11e404(0x135))var _0x2d23c1=users[_0x11e404(0x135)];else{if(_0x512033[0x0][_0x11e404(0x165)]==_0x11e404(0x15c))var _0x2d23c1=users[_0x11e404(0x15c)];else{if(_0x512033[0x0][_0x11e404(0x165)]==_0x11e404(0x180))var _0x2d23c1=users[_0x11e404(0x180)];else{if(_0x512033[0x0][_0x11e404(0x165)]==_0x11e404(0x15b))var _0x2d23c1=users[_0x11e404(0x15b)];else{if(_0x512033[0x0][_0x11e404(0x165)]=='Portuguese\x20(BR)')var _0x2d23c1=users[_0x11e404(0x146)];else{if(_0x512033[0x0][_0x11e404(0x165)]==_0x11e404(0x164))var _0x2d23c1=users['Chinese'];else{if(_0x512033[0x0][_0x11e404(0x165)]==_0x11e404(0x187))var _0x2d23c1=users[_0x11e404(0x140)];}}}}}}}_0x50ac5d[_0x11e404(0x149)](_0x11e404(0x175),{'success':_0x2c4c50[_0x11e404(0x142)](_0x11e404(0x17c)),'errors':_0x2c4c50[_0x11e404(0x142)](_0x11e404(0x167)),'role':_0x4b7f9a,'profile':_0xd10f4d,'master_shop':_0x512033,'customers':_0x13acca,'sales':_0x5fb1b9,'language':_0x2d23c1});}catch(_0x39e8f4){console[_0x11e404(0x185)](_0x39e8f4);}}),module[a0_0x2a2357(0x172)]=router;