function a0_0x476b(){var _0x22a8d5=['Returned\x20Payment\x20For\x20Sale\x20Return','sale_qty','redirect','warehouse_name','return_sale','$product_details','Portuguese\x20(BR)','flash','old_data','$product_details.rack','master','sales_quantity','suppliers','customer_docs','717391aFYAid','German','8029386zzqASV','Router','paid_amount','bin','payment\x20successfull','Enabled','email','930pktWpf','find','save','language','log','Arabic\x20(ae)','status','20140yJetBa','../models/all_models','new\x20new_data','$customer_docs','back','product_code','customer','$product_details.storage','floorlevel','3142704JSIzQr','$product_details.product_code','findById','due_amount','params','customers','subtract','8rWhazj','/view/:id','ToRoom','get','ToWarehouse','exports','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','Portuguese','post','json','English\x20(US)','stock','$product_details.bay','6339158tjhhtT','body','Arabic','Return\x20Goods','aggregate','type','bay','success','foreach\x20newproduct','product_details','$product_details.primary_code','French','Return\x20Rooms','getMonth','product_name','secondary_code','/sales_return/view','old_warehouse_data','primary_code','data','findOne','stocks','English','115548oUALAF','return_qty','$product_details.product_stock','Chinese','types','user','/give_payment/:id','Spanish','product_stock','getDate','$product_details.product_name','amount','$product_details._id','string','name','render','date','/invoice/:id','express','map','sales_return','Hindi','forEach','slice','$name','$product_details.type','52oviRYA','Sale\x20Return','errors','c_payment','invoice','21880830LtljCp'];a0_0x476b=function(){return _0x22a8d5;};return a0_0x476b();}var a0_0x1b6ebc=a0_0x2865;(function(_0x300c05,_0x4816d2){var _0x542733=a0_0x2865,_0x4a3984=_0x300c05();while(!![]){try{var _0x32858b=-parseInt(_0x542733(0x125))/0x1+-parseInt(_0x542733(0x183))/0x2*(-parseInt(_0x542733(0x169))/0x3)+-parseInt(_0x542733(0x13e))/0x4+parseInt(_0x542733(0x135))/0x5*(parseInt(_0x542733(0x12e))/0x6)+-parseInt(_0x542733(0x152))/0x7*(parseInt(_0x542733(0x145))/0x8)+-parseInt(_0x542733(0x127))/0x9+parseInt(_0x542733(0x116))/0xa;if(_0x32858b===_0x4816d2)break;else _0x4a3984['push'](_0x4a3984['shift']());}catch(_0x31786d){_0x4a3984['push'](_0x4a3984['shift']());}}}(a0_0x476b,0x7d400));const express=require(a0_0x1b6ebc(0x17b)),app=express(),router=express[a0_0x1b6ebc(0x128)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x1b6ebc(0x136)),auth=require('../middleware/auth'),users=require('../public/language/languages.json');function a0_0x2865(_0x213ff3,_0x3a876a){var _0x476b40=a0_0x476b();return a0_0x2865=function(_0x286585,_0x16f1d2){_0x286585=_0x286585-0x112;var _0x1169e0=_0x476b40[_0x286585];return _0x1169e0;},a0_0x2865(_0x213ff3,_0x3a876a);}router[a0_0x1b6ebc(0x148)]('/view',auth,async(_0x25260c,_0x26173e)=>{var _0xdf2ce1=a0_0x1b6ebc;try{const {username:_0x10edff,email:_0xa80845,role:_0x293fa1}=_0x25260c[_0xdf2ce1(0x16e)],_0x3bd7cb=_0x25260c[_0xdf2ce1(0x16e)],_0x4fa098=await profile['findOne']({'email':_0x3bd7cb[_0xdf2ce1(0x12d)]}),_0xc41d03=await master_shop[_0xdf2ce1(0x12f)]();console[_0xdf2ce1(0x132)](_0xdf2ce1(0x121),_0xc41d03);const _0x584029=await sales_return['aggregate']([{'$lookup':{'from':_0xdf2ce1(0x143),'localField':_0xdf2ce1(0x13b),'foreignField':_0xdf2ce1(0x177),'as':_0xdf2ce1(0x124)}},{'$unwind':_0xdf2ce1(0x138)}]);console[_0xdf2ce1(0x132)]('all_data',_0x584029);if(_0xc41d03[0x0][_0xdf2ce1(0x131)]==_0xdf2ce1(0x14f)){var _0x46579a=users['English'];console[_0xdf2ce1(0x132)](_0x46579a);}else{if(_0xc41d03[0x0][_0xdf2ce1(0x131)]==_0xdf2ce1(0x17e))var _0x46579a=users[_0xdf2ce1(0x17e)];else{if(_0xc41d03[0x0][_0xdf2ce1(0x131)]=='German')var _0x46579a=users[_0xdf2ce1(0x126)];else{if(_0xc41d03[0x0][_0xdf2ce1(0x131)]==_0xdf2ce1(0x170))var _0x46579a=users[_0xdf2ce1(0x170)];else{if(_0xc41d03[0x0][_0xdf2ce1(0x131)]==_0xdf2ce1(0x15d))var _0x46579a=users[_0xdf2ce1(0x15d)];else{if(_0xc41d03[0x0]['language']=='Portuguese\x20(BR)')var _0x46579a=users[_0xdf2ce1(0x14c)];else{if(_0xc41d03[0x0]['language']=='Chinese')var _0x46579a=users[_0xdf2ce1(0x16c)];else{if(_0xc41d03[0x0][_0xdf2ce1(0x131)]==_0xdf2ce1(0x133))var _0x46579a=users[_0xdf2ce1(0x154)];}}}}}}}_0x26173e[_0xdf2ce1(0x178)](_0xdf2ce1(0x17d),{'success':_0x25260c[_0xdf2ce1(0x11e)]('success'),'errors':_0x25260c[_0xdf2ce1(0x11e)](_0xdf2ce1(0x113)),'role':_0x3bd7cb,'profile':_0x4fa098,'master_shop':_0xc41d03,'user':_0x584029,'language':_0x46579a});}catch(_0x5aa1bb){console[_0xdf2ce1(0x132)](_0x5aa1bb);}}),router[a0_0x1b6ebc(0x148)]('/view/:id',auth,async(_0x57827e,_0x55d531)=>{var _0x2c8539=a0_0x1b6ebc;try{const {username:_0x26758d,email:_0x53c52f,role:_0x5a0456}=_0x57827e['user'],_0x290746=_0x57827e[_0x2c8539(0x16e)],_0x36358c=await profile['findOne']({'email':_0x290746['email']}),_0x12a654=await master_shop[_0x2c8539(0x12f)]();console[_0x2c8539(0x132)](_0x2c8539(0x121),_0x12a654);const _0x5b7870=_0x57827e['params']['id'];console[_0x2c8539(0x132)](_0x5b7870);var _0x200f1c=[_0x2c8539(0x15e)];const _0x116215=await sales_return[_0x2c8539(0x140)](_0x5b7870),_0x3d078d=await warehouse[_0x2c8539(0x156)]([{'$match':{'name':_0x116215[_0x2c8539(0x149)],'room':_0x116215[_0x2c8539(0x147)]}},{'$unwind':_0x2c8539(0x11c)},{'$group':{'_id':_0x2c8539(0x175),'name':{'$first':_0x2c8539(0x173)},'product_stock':{'$first':_0x2c8539(0x16b)},'bay':{'$first':_0x2c8539(0x151)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x2c8539(0x182)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x2c8539(0x15c)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x2c8539(0x13f)},'storage':{'$first':_0x2c8539(0x13c)},'rack':{'$first':_0x2c8539(0x120)}}}]);console['log'](_0x3d078d);const _0xc768f6=await warehouse[_0x2c8539(0x156)]([{'$match':{'status':_0x2c8539(0x12c),'name':_0x2c8539(0x155),'warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':'$name','name':{'$first':_0x2c8539(0x181)}}},{'$sort':{'name':0x1}}]),_0x4dc5f7=await product[_0x2c8539(0x12f)]({});if(_0x12a654[0x0][_0x2c8539(0x131)]==_0x2c8539(0x14f)){var _0x33003c=users[_0x2c8539(0x168)];console['log'](_0x33003c);}else{if(_0x12a654[0x0]['language']==_0x2c8539(0x17e))var _0x33003c=users[_0x2c8539(0x17e)];else{if(_0x12a654[0x0][_0x2c8539(0x131)]==_0x2c8539(0x126))var _0x33003c=users['German'];else{if(_0x12a654[0x0][_0x2c8539(0x131)]==_0x2c8539(0x170))var _0x33003c=users['Spanish'];else{if(_0x12a654[0x0]['language']=='French')var _0x33003c=users['French'];else{if(_0x12a654[0x0][_0x2c8539(0x131)]==_0x2c8539(0x11d))var _0x33003c=users[_0x2c8539(0x14c)];else{if(_0x12a654[0x0][_0x2c8539(0x131)]==_0x2c8539(0x16c))var _0x33003c=users[_0x2c8539(0x16c)];else{if(_0x12a654[0x0][_0x2c8539(0x131)]==_0x2c8539(0x133))var _0x33003c=users[_0x2c8539(0x154)];}}}}}}}_0x55d531[_0x2c8539(0x178)]('return_sale_edit',{'success':_0x57827e[_0x2c8539(0x11e)]('success'),'errors':_0x57827e[_0x2c8539(0x11e)](_0x2c8539(0x113)),'role':_0x290746,'profile':_0x36358c,'master_shop':_0x12a654,'user':_0x116215,'stock':_0x3d078d,'unit':_0x4dc5f7,'language':_0x33003c,'warehouses':_0xc768f6,'rooms':_0x200f1c});}catch(_0xc22bb8){console[_0x2c8539(0x132)](_0xc22bb8);}}),router[a0_0x1b6ebc(0x14d)](a0_0x1b6ebc(0x146),auth,async(_0x4d92aa,_0x8aedfc)=>{var _0x19a95a=a0_0x1b6ebc;try{const _0x23db27=_0x4d92aa[_0x19a95a(0x142)]['id'];console[_0x19a95a(0x132)](_0x23db27);const _0x5c20a0=await sales_return[_0x19a95a(0x166)]({'invoice':_0x4d92aa['body']['invoice']});console[_0x19a95a(0x132)](_0x19a95a(0x11f),_0x5c20a0);const _0x1e9b2a=await warehouse[_0x19a95a(0x166)]({'name':_0x5c20a0[_0x19a95a(0x149)],'room':_0x5c20a0[_0x19a95a(0x147)]});console[_0x19a95a(0x132)](_0x19a95a(0x163),_0x1e9b2a);const {invoice:_0x4f2c9a,customer:_0x409d21,date:_0x3d587e,warehouse_name:_0x4b8511,product_name:_0xb77945,primary_code:_0x3065a5,secondary_code:_0x360540,product_code:_0x5ece75,sales_quantity:_0x5d53bd,stocks:_0x364e88,return_qty:_0x5cea58,note:_0x59b8a1,to_warehouse_name:_0x151931,to_Room_name:_0x4584aa}=_0x4d92aa[_0x19a95a(0x153)];console['log'](_0x4d92aa[_0x19a95a(0x153)]);if(typeof _0xb77945==_0x19a95a(0x176))var _0x400ac9=[_0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x160)]],_0x51c256=[_0x4d92aa[_0x19a95a(0x153)]['primary_code']],_0x383199=[_0x4d92aa[_0x19a95a(0x153)]['secondary_code']],_0x1899ae=[_0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x13a)]],_0x5a8c85=[_0x4d92aa['body'][_0x19a95a(0x122)]],_0x302e4b=[_0x4d92aa[_0x19a95a(0x153)]['stocks']],_0x3ae339=[_0x4d92aa['body']['return_qty']],_0x2f70ed=[_0x4d92aa['body']['bay']],_0x2f2401=[_0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x12a)]],_0x5a66c8=[_0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x16d)]],_0x1149b2=[_0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x13d)]];else var _0x400ac9=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x160)]],_0x51c256=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x164)]],_0x383199=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x161)]],_0x1899ae=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x13a)]],_0x5a8c85=[..._0x4d92aa['body']['sales_quantity']],_0x302e4b=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x167)]],_0x3ae339=[..._0x4d92aa['body'][_0x19a95a(0x16a)]],_0x2f70ed=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x158)]],_0x2f2401=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x12a)]],_0x5a66c8=[..._0x4d92aa[_0x19a95a(0x153)]['types']],_0x1149b2=[..._0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x13d)]];const _0x1bf5ae=_0x400ac9[_0x19a95a(0x17c)](_0x3f1e72=>{return _0x3f1e72={'product_name':_0x3f1e72};});_0x51c256[_0x19a95a(0x17f)]((_0x153c94,_0x429bfe)=>{var _0x1cad5e=_0x19a95a;_0x1bf5ae[_0x429bfe][_0x1cad5e(0x164)]=_0x153c94;}),_0x383199[_0x19a95a(0x17f)]((_0x3ceebc,_0x18eeb0)=>{var _0x235f85=_0x19a95a;_0x1bf5ae[_0x18eeb0][_0x235f85(0x161)]=_0x3ceebc;}),_0x1899ae[_0x19a95a(0x17f)]((_0x6957de,_0x4ebd8b)=>{_0x1bf5ae[_0x4ebd8b]['product_code']=_0x6957de;}),_0x5a8c85[_0x19a95a(0x17f)]((_0xe45dbb,_0x4ac57a)=>{_0x1bf5ae[_0x4ac57a]['sale_qty']=_0xe45dbb;}),_0x302e4b['forEach']((_0x316c6d,_0x56fe4a)=>{var _0xe478ee=_0x19a95a;_0x1bf5ae[_0x56fe4a][_0xe478ee(0x150)]=_0x316c6d;}),_0x3ae339[_0x19a95a(0x17f)]((_0xfb8aab,_0xbb78b9)=>{var _0x3edcf3=_0x19a95a;_0x1bf5ae[_0xbb78b9][_0x3edcf3(0x16a)]=_0xfb8aab;}),_0x2f70ed[_0x19a95a(0x17f)]((_0x250cbd,_0x2f3ec3)=>{_0x1bf5ae[_0x2f3ec3]['bay']=_0x250cbd;}),_0x2f2401[_0x19a95a(0x17f)]((_0x50d25c,_0x5c7887)=>{var _0x2b576f=_0x19a95a;_0x1bf5ae[_0x5c7887][_0x2b576f(0x12a)]=_0x50d25c;}),_0x5a66c8[_0x19a95a(0x17f)]((_0x2082e2,_0x17e2d3)=>{var _0x307a00=_0x19a95a;_0x1bf5ae[_0x17e2d3][_0x307a00(0x157)]=_0x2082e2;}),_0x1149b2['forEach']((_0x4a22bf,_0x147496)=>{var _0x5c5c9f=_0x19a95a;_0x1bf5ae[_0x147496][_0x5c5c9f(0x13d)]=_0x4a22bf;});var _0x23c68e=0x0;_0x1bf5ae[_0x19a95a(0x17f)](_0x1cbf5c=>{var _0x1e9d91=_0x19a95a;console[_0x1e9d91(0x132)](_0x1e9d91(0x15a),_0x1cbf5c),(parseInt(_0x1cbf5c[_0x1e9d91(0x118)])<parseInt(_0x1cbf5c[_0x1e9d91(0x16a)])||parseInt(_0x1cbf5c[_0x1e9d91(0x150)])<parseInt(_0x1cbf5c[_0x1e9d91(0x16a)])&&parseInt(_0x1cbf5c['sale_qty'])>parseInt(_0x1cbf5c[_0x1e9d91(0x16a)])||parseInt(_0x1cbf5c['return_qty'])==0x0)&&_0x23c68e++;});if(_0x23c68e!=0x0)return _0x4d92aa[_0x19a95a(0x11e)](_0x19a95a(0x113),_0x19a95a(0x14b)),_0x8aedfc[_0x19a95a(0x119)](_0x19a95a(0x139));_0x5c20a0[_0x19a95a(0x11b)][_0x19a95a(0x17f)](_0x55d237=>{var _0x2e6ce1=_0x19a95a;const _0x21e106=_0x1e9b2a[_0x2e6ce1(0x15b)][_0x2e6ce1(0x17c)](_0x57220b=>{var _0x1968c6=_0x2e6ce1;_0x57220b[_0x1968c6(0x160)]==_0x55d237[_0x1968c6(0x160)]&&_0x57220b['floorlevel']==_0x55d237[_0x1968c6(0x13d)]&&_0x57220b[_0x1968c6(0x157)]==_0x55d237[_0x1968c6(0x157)]&&_0x57220b[_0x1968c6(0x12a)]==_0x55d237[_0x1968c6(0x12a)]&&_0x57220b[_0x1968c6(0x158)]==_0x55d237[_0x1968c6(0x158)]&&(_0x57220b[_0x1968c6(0x171)]=parseInt(_0x57220b[_0x1968c6(0x171)])+parseInt(_0x55d237[_0x1968c6(0x16a)]));});}),console[_0x19a95a(0x132)](_0x19a95a(0x163),_0x1e9b2a),await _0x1e9b2a['save'](),_0x5c20a0['invoice']=_0x4f2c9a,_0x5c20a0[_0x19a95a(0x13b)]=_0x409d21,_0x5c20a0[_0x19a95a(0x179)]=_0x3d587e,_0x5c20a0[_0x19a95a(0x11a)]=_0x4b8511,_0x5c20a0[_0x19a95a(0x11b)]=_0x1bf5ae,_0x5c20a0['note']=_0x59b8a1,_0x5c20a0[_0x19a95a(0x149)]=_0x151931,_0x5c20a0[_0x19a95a(0x147)]=_0x4584aa;const _0x50d03b=await _0x5c20a0[_0x19a95a(0x130)]();console[_0x19a95a(0x132)](_0x19a95a(0x137),_0x50d03b);const _0x2ec7b7=await c_payment_data[_0x19a95a(0x166)]({'invoice':_0x4d92aa['body'][_0x19a95a(0x115)],'reason':'Sale\x20Return'});_0x2ec7b7[_0x19a95a(0x123)]=_0x4d92aa[_0x19a95a(0x153)][_0x19a95a(0x123)],_0x2ec7b7[_0x19a95a(0x179)]=_0x4d92aa[_0x19a95a(0x153)]['date'],await _0x2ec7b7[_0x19a95a(0x130)](),_0x4d92aa['flash'](_0x19a95a(0x159),'purchase\x20return\x20successfully'),_0x8aedfc['redirect'](_0x19a95a(0x162));}catch(_0x881cf8){console['log'](_0x881cf8),_0x8aedfc[_0x19a95a(0x134)](0xc8)[_0x19a95a(0x14e)]({'message':_0x881cf8['message']});}}),router[a0_0x1b6ebc(0x14d)](a0_0x1b6ebc(0x16f),auth,async(_0x5c43e1,_0x6fa621)=>{var _0x1773ba=a0_0x1b6ebc;try{const _0x1aeb0b=_0x5c43e1[_0x1773ba(0x142)]['id'],{invoice:_0x3ade7b,customer:_0x552f1c,payable_to_customer:_0x20b7f0,paid_amount:_0x45e4ab}=_0x5c43e1[_0x1773ba(0x153)],_0x21bc22=await sales_return[_0x1773ba(0x140)](_0x1aeb0b);console[_0x1773ba(0x132)](_0x1773ba(0x165),_0x21bc22),console[_0x1773ba(0x132)](_0x20b7f0),console[_0x1773ba(0x132)](_0x45e4ab);var _0x390f0f=_0x20b7f0-_0x45e4ab;console[_0x1773ba(0x132)](_0x1773ba(0x144),_0x390f0f),_0x21bc22[_0x1773ba(0x129)]=parseFloat(_0x45e4ab)+parseFloat(_0x21bc22['paid_amount']),_0x21bc22[_0x1773ba(0x141)]=_0x390f0f,console['log'](_0x21bc22);const _0x43d981=await _0x21bc22['save']();console[_0x1773ba(0x132)](0x1b207);const _0x33300b=await c_payment_data[_0x1773ba(0x166)]({'invoice':_0x5c43e1[_0x1773ba(0x153)][_0x1773ba(0x115)],'reason':_0x1773ba(0x112)});console[_0x1773ba(0x132)](_0x1773ba(0x114),_0x33300b),_0x33300b[_0x1773ba(0x174)]=_0x390f0f,await _0x33300b['save']();let _0x24454e=new Date(),_0x233777=('0'+_0x24454e[_0x1773ba(0x172)]())[_0x1773ba(0x180)](-0x2),_0x8a75f=('0'+(_0x24454e[_0x1773ba(0x15f)]()+0x1))[_0x1773ba(0x180)](-0x2),_0x3e805e=_0x24454e['getFullYear'](),_0x2b1f79=_0x3e805e+'-'+_0x8a75f+'-'+_0x233777;const _0x3ba01b=new customer_payment({'invoice':_0x3ade7b,'date':_0x3e805e+'-'+_0x8a75f+'-'+_0x233777,'customer':_0x552f1c,'reason':_0x1773ba(0x117),'amount':_0x45e4ab}),_0x1ae80c=await _0x3ba01b[_0x1773ba(0x130)]();_0x5c43e1[_0x1773ba(0x11e)](_0x1773ba(0x159),_0x1773ba(0x12b)),_0x6fa621[_0x1773ba(0x119)](_0x1773ba(0x162));}catch(_0x10b71e){console[_0x1773ba(0x132)](_0x10b71e);}}),router[a0_0x1b6ebc(0x148)](a0_0x1b6ebc(0x17a),auth,async(_0x23932f,_0x1ef5f2)=>{var _0x222ffe=a0_0x1b6ebc;try{const {username:_0x534c47,email:_0x490064,role:_0x46dfea}=_0x23932f[_0x222ffe(0x16e)],_0x1b51a0=_0x23932f[_0x222ffe(0x16e)],_0x177975=await profile[_0x222ffe(0x166)]({'email':_0x1b51a0[_0x222ffe(0x12d)]}),_0x55aaeb=await master_shop[_0x222ffe(0x12f)]();console[_0x222ffe(0x132)](_0x222ffe(0x121),_0x55aaeb);const _0x464a56=_0x23932f[_0x222ffe(0x142)]['id'],_0x4034d7=await sales_return[_0x222ffe(0x140)](_0x464a56);console[_0x222ffe(0x132)](_0x4034d7);const _0x2a762b=await customer[_0x222ffe(0x166)]({'name':_0x4034d7[_0x222ffe(0x13b)]});console[_0x222ffe(0x132)](_0x2a762b);if(_0x55aaeb[0x0][_0x222ffe(0x131)]==_0x222ffe(0x14f)){var _0x4c7bd9=users[_0x222ffe(0x168)];console[_0x222ffe(0x132)](_0x4c7bd9);}else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]==_0x222ffe(0x17e))var _0x4c7bd9=users[_0x222ffe(0x17e)];else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]==_0x222ffe(0x126))var _0x4c7bd9=users[_0x222ffe(0x126)];else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]==_0x222ffe(0x170))var _0x4c7bd9=users[_0x222ffe(0x170)];else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]=='French')var _0x4c7bd9=users[_0x222ffe(0x15d)];else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]=='Portuguese\x20(BR)')var _0x4c7bd9=users['Portuguese'];else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]==_0x222ffe(0x16c))var _0x4c7bd9=users[_0x222ffe(0x16c)];else{if(_0x55aaeb[0x0][_0x222ffe(0x131)]==_0x222ffe(0x133))var _0x4c7bd9=users['Arabic'];}}}}}}}_0x1ef5f2[_0x222ffe(0x178)]('sales_return_invoice',{'success':_0x23932f[_0x222ffe(0x11e)](_0x222ffe(0x159)),'errors':_0x23932f[_0x222ffe(0x11e)](_0x222ffe(0x113)),'role':_0x1b51a0,'profile':_0x177975,'master_shop':_0x55aaeb,'customers':_0x2a762b,'sales':_0x4034d7,'language':_0x4c7bd9});}catch(_0x685bd4){console[_0x222ffe(0x132)](_0x685bd4);}}),module[a0_0x1b6ebc(0x14a)]=router;