var a0_0x5684b6=a0_0x3fdd;function a0_0x3fdd(_0x17caa1,_0x118f9d){var _0x46050d=a0_0x4605();return a0_0x3fdd=function(_0x3fdd0a,_0x54a921){_0x3fdd0a=_0x3fdd0a-0xc7;var _0x521176=_0x46050d[_0x3fdd0a];return _0x521176;},a0_0x3fdd(_0x17caa1,_0x118f9d);}function a0_0x4605(){var _0x13f526=['stock','data','master','json','French','product_code','Spanish','Portuguese','Return\x20Goods','7089PUelTF','save','language','German','note','/sales_return/view','/view/:id','product_details','customers','ToRoom','English\x20(US)','stocks','slice','bin','$product_details.storage','types','date','find','4179948bWUbFO','$product_details.bin','suppliers','getMonth','bay','all_data','warehouse_name','return_sale','customer','774540NmwvAW','string','findById','success','$product_details.rack','secondary_code','findOne','subtract','params','errors','Return\x20Rooms','map','getDate','843255uNPKPw','sales_return_invoice','sale_qty','6893680NwUDCD','old_warehouse_data','get','Hindi','986AheUgI','type','new\x20new_data','Arabic\x20(ae)','Enabled','14DQHAHx','$product_details.type','return_sale_edit','email','body','Arabic','../models/all_models','old_data','user','420344reLkvi','Portuguese\x20(BR)','$product_details.floorlevel','$product_details.bay','exports','payment\x20successfull','sales_quantity','$product_details.primary_code','$product_details.product_code','$product_details','ToWarehouse','$product_details.product_stock','product_stock','render','paid_amount','product_name','floorlevel','customer_docs','invoice','/view','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','foreach\x20newproduct','45ZwcMrh','flash','/give_payment/:id','aggregate','back','name','Sale\x20Return','getFullYear','Raw\x20Materials','English','$product_details.secondary_code','primary_code','forEach','../middleware/auth','redirect','Chinese','message','status','return_qty','3529122AYpDAs','log','$product_details._id','$name'];a0_0x4605=function(){return _0x13f526;};return a0_0x4605();}(function(_0x26ce8c,_0x2d13e1){var _0x24ebd0=a0_0x3fdd,_0x4ad5af=_0x26ce8c();while(!![]){try{var _0x1d2b73=parseInt(_0x24ebd0(0xd0))/0x1+-parseInt(_0x24ebd0(0xd7))/0x2*(parseInt(_0x24ebd0(0x11b))/0x3)+parseInt(_0x24ebd0(0x12d))/0x4+parseInt(_0x24ebd0(0x136))/0x5+parseInt(_0x24ebd0(0x10e))/0x6*(-parseInt(_0x24ebd0(0xdc))/0x7)+-parseInt(_0x24ebd0(0xe5))/0x8*(-parseInt(_0x24ebd0(0xfb))/0x9)+parseInt(_0x24ebd0(0xd3))/0xa;if(_0x1d2b73===_0x2d13e1)break;else _0x4ad5af['push'](_0x4ad5af['shift']());}catch(_0x576d64){_0x4ad5af['push'](_0x4ad5af['shift']());}}}(a0_0x4605,0x9fa4c));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x5684b6(0xe2)),auth=require(a0_0x5684b6(0x108)),users=require('../public/language/languages.json');router['get'](a0_0x5684b6(0xf8),auth,async(_0x44bd1c,_0x20381a)=>{var _0x370031=a0_0x5684b6;try{const {username:_0x55fdd8,email:_0x3cda1d,role:_0x368c4e}=_0x44bd1c[_0x370031(0xe4)],_0x389226=_0x44bd1c[_0x370031(0xe4)],_0x29f9bf=await profile['findOne']({'email':_0x389226[_0x370031(0xdf)]}),_0x5a91e3=await master_shop['find']();console['log']('master',_0x5a91e3);const _0x4a5950=await sales_return[_0x370031(0xfe)]([{'$lookup':{'from':_0x370031(0x123),'localField':_0x370031(0x135),'foreignField':_0x370031(0x100),'as':_0x370031(0xf6)}},{'$unwind':'$customer_docs'}]);console[_0x370031(0x10f)](_0x370031(0x132),_0x4a5950);if(_0x5a91e3[0x0]['language']==_0x370031(0x125)){var _0x3c61d0=users[_0x370031(0x104)];console[_0x370031(0x10f)](_0x3c61d0);}else{if(_0x5a91e3[0x0][_0x370031(0x11d)]==_0x370031(0xd6))var _0x3c61d0=users[_0x370031(0xd6)];else{if(_0x5a91e3[0x0][_0x370031(0x11d)]=='German')var _0x3c61d0=users['German'];else{if(_0x5a91e3[0x0]['language']==_0x370031(0x118))var _0x3c61d0=users[_0x370031(0x118)];else{if(_0x5a91e3[0x0][_0x370031(0x11d)]=='French')var _0x3c61d0=users[_0x370031(0x116)];else{if(_0x5a91e3[0x0][_0x370031(0x11d)]==_0x370031(0xe6))var _0x3c61d0=users['Portuguese'];else{if(_0x5a91e3[0x0]['language']==_0x370031(0x10a))var _0x3c61d0=users['Chinese'];else{if(_0x5a91e3[0x0][_0x370031(0x11d)]==_0x370031(0xda))var _0x3c61d0=users['Arabic'];}}}}}}}_0x20381a['render']('sales_return',{'success':_0x44bd1c[_0x370031(0xfc)](_0x370031(0x139)),'errors':_0x44bd1c['flash']('errors'),'role':_0x389226,'profile':_0x29f9bf,'master_shop':_0x5a91e3,'user':_0x4a5950,'language':_0x3c61d0});}catch(_0x307cc2){console[_0x370031(0x10f)](_0x307cc2);}}),router[a0_0x5684b6(0xd5)]('/view/:id',auth,async(_0xcfc43,_0x1787b3)=>{var _0x4d1fea=a0_0x5684b6;try{const {username:_0x186b30,email:_0x3dd110,role:_0x1c1c6d}=_0xcfc43['user'],_0x5f1733=_0xcfc43[_0x4d1fea(0xe4)],_0x448613=await profile[_0x4d1fea(0xc9)]({'email':_0x5f1733[_0x4d1fea(0xdf)]}),_0x1dadd8=await master_shop['find']();console[_0x4d1fea(0x10f)](_0x4d1fea(0x114),_0x1dadd8);const _0x3deebc=_0xcfc43['params']['id'];console[_0x4d1fea(0x10f)](_0x3deebc);var _0xe106fe=[_0x4d1fea(0xcd)];const _0x434e3a=await sales_return['findById'](_0x3deebc),_0x1b1bf8=await warehouse['aggregate']([{'$match':{'name':_0x434e3a['ToWarehouse'],'room':_0x434e3a[_0x4d1fea(0x124)]}},{'$unwind':_0x4d1fea(0xee)},{'$group':{'_id':_0x4d1fea(0x110),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x4d1fea(0xf0)},'bay':{'$first':_0x4d1fea(0xe8)},'bin':{'$first':_0x4d1fea(0x12e)},'type':{'$first':_0x4d1fea(0xdd)},'floorlevel':{'$first':_0x4d1fea(0xe7)},'primary_code':{'$first':_0x4d1fea(0xec)},'secondary_code':{'$first':_0x4d1fea(0x105)},'product_code':{'$first':_0x4d1fea(0xed)},'storage':{'$first':_0x4d1fea(0x129)},'rack':{'$first':_0x4d1fea(0xc7)}}}]);console['log'](_0x1b1bf8);const _0x3c489b=await warehouse[_0x4d1fea(0xfe)]([{'$match':{'status':_0x4d1fea(0xdb),'name':_0x4d1fea(0x11a),'warehouse_category':_0x4d1fea(0x103)}},{'$group':{'_id':_0x4d1fea(0x111),'name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0x1025d4=await product['find']({});if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]=='English\x20(US)'){var _0x4645c8=users[_0x4d1fea(0x104)];console[_0x4d1fea(0x10f)](_0x4645c8);}else{if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]=='Hindi')var _0x4645c8=users['Hindi'];else{if(_0x1dadd8[0x0]['language']=='German')var _0x4645c8=users[_0x4d1fea(0x11e)];else{if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]==_0x4d1fea(0x118))var _0x4645c8=users[_0x4d1fea(0x118)];else{if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]=='French')var _0x4645c8=users['French'];else{if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]==_0x4d1fea(0xe6))var _0x4645c8=users[_0x4d1fea(0x119)];else{if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]==_0x4d1fea(0x10a))var _0x4645c8=users[_0x4d1fea(0x10a)];else{if(_0x1dadd8[0x0][_0x4d1fea(0x11d)]==_0x4d1fea(0xda))var _0x4645c8=users[_0x4d1fea(0xe1)];}}}}}}}_0x1787b3[_0x4d1fea(0xf2)](_0x4d1fea(0xde),{'success':_0xcfc43['flash'](_0x4d1fea(0x139)),'errors':_0xcfc43[_0x4d1fea(0xfc)](_0x4d1fea(0xcc)),'role':_0x5f1733,'profile':_0x448613,'master_shop':_0x1dadd8,'user':_0x434e3a,'stock':_0x1b1bf8,'unit':_0x1025d4,'language':_0x4645c8,'warehouses':_0x3c489b,'rooms':_0xe106fe});}catch(_0x55acb5){console[_0x4d1fea(0x10f)](_0x55acb5);}}),router['post'](a0_0x5684b6(0x121),auth,async(_0x229f98,_0x1d25b1)=>{var _0x1af02b=a0_0x5684b6;try{const _0x2aba3b=_0x229f98[_0x1af02b(0xcb)]['id'];console[_0x1af02b(0x10f)](_0x2aba3b);const _0xa4f777=await sales_return[_0x1af02b(0xc9)]({'invoice':_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0xf7)]});console['log'](_0x1af02b(0xe3),_0xa4f777);const _0x2e58cb=await warehouse[_0x1af02b(0xc9)]({'name':_0xa4f777[_0x1af02b(0xef)],'room':_0xa4f777['ToRoom']});console['log'](_0x1af02b(0xd4),_0x2e58cb);const {invoice:_0x48a046,customer:_0x504705,date:_0x34bba4,warehouse_name:_0x35a6e7,product_name:_0x333cfd,primary_code:_0x3e299e,secondary_code:_0x54e9d4,product_code:_0x2963dc,sales_quantity:_0x1237ec,stocks:_0x124afa,return_qty:_0x1f7f34,note:_0x5eb8b9,to_warehouse_name:_0x3d3b2d,to_Room_name:_0x18539d}=_0x229f98[_0x1af02b(0xe0)];console[_0x1af02b(0x10f)](_0x229f98[_0x1af02b(0xe0)]);if(typeof _0x333cfd==_0x1af02b(0x137))var _0x1ae0c1=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0xf4)]],_0x558969=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x106)]],_0xedaba0=[_0x229f98['body'][_0x1af02b(0xc8)]],_0x54a3d1=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x117)]],_0x44eab7=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0xeb)]],_0xce120e=[_0x229f98[_0x1af02b(0xe0)]['stocks']],_0x1d993c=[_0x229f98[_0x1af02b(0xe0)]['return_qty']],_0x1d2a7c=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x131)]],_0x3ef89=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x128)]],_0x33a088=[_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x12a)]],_0x4b7982=[_0x229f98[_0x1af02b(0xe0)]['floorlevel']];else var _0x1ae0c1=[..._0x229f98[_0x1af02b(0xe0)][_0x1af02b(0xf4)]],_0x558969=[..._0x229f98['body'][_0x1af02b(0x106)]],_0xedaba0=[..._0x229f98['body'][_0x1af02b(0xc8)]],_0x54a3d1=[..._0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x117)]],_0x44eab7=[..._0x229f98[_0x1af02b(0xe0)]['sales_quantity']],_0xce120e=[..._0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x126)]],_0x1d993c=[..._0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x10d)]],_0x1d2a7c=[..._0x229f98[_0x1af02b(0xe0)][_0x1af02b(0x131)]],_0x3ef89=[..._0x229f98['body']['bin']],_0x33a088=[..._0x229f98[_0x1af02b(0xe0)]['types']],_0x4b7982=[..._0x229f98[_0x1af02b(0xe0)][_0x1af02b(0xf5)]];const _0x2c62bb=_0x1ae0c1[_0x1af02b(0xce)](_0xf6f0d=>{return _0xf6f0d={'product_name':_0xf6f0d};});_0x558969[_0x1af02b(0x107)]((_0x128fc6,_0x282c90)=>{var _0x5163d2=_0x1af02b;_0x2c62bb[_0x282c90][_0x5163d2(0x106)]=_0x128fc6;}),_0xedaba0[_0x1af02b(0x107)]((_0x13dc1c,_0x6ab28c)=>{var _0x25cb24=_0x1af02b;_0x2c62bb[_0x6ab28c][_0x25cb24(0xc8)]=_0x13dc1c;}),_0x54a3d1['forEach']((_0x390244,_0x319617)=>{var _0x3433d0=_0x1af02b;_0x2c62bb[_0x319617][_0x3433d0(0x117)]=_0x390244;}),_0x44eab7[_0x1af02b(0x107)]((_0x1d5791,_0x554bdd)=>{var _0x1b828a=_0x1af02b;_0x2c62bb[_0x554bdd][_0x1b828a(0xd2)]=_0x1d5791;}),_0xce120e[_0x1af02b(0x107)]((_0x161360,_0x197bde)=>{var _0x498101=_0x1af02b;_0x2c62bb[_0x197bde][_0x498101(0x112)]=_0x161360;}),_0x1d993c[_0x1af02b(0x107)]((_0x4b7432,_0x41c4b8)=>{_0x2c62bb[_0x41c4b8]['return_qty']=_0x4b7432;}),_0x1d2a7c[_0x1af02b(0x107)]((_0x3d0ba0,_0x403ea8)=>{var _0x49ff60=_0x1af02b;_0x2c62bb[_0x403ea8][_0x49ff60(0x131)]=_0x3d0ba0;}),_0x3ef89[_0x1af02b(0x107)]((_0x7084a4,_0x55eab8)=>{var _0x4b13b8=_0x1af02b;_0x2c62bb[_0x55eab8][_0x4b13b8(0x128)]=_0x7084a4;}),_0x33a088['forEach']((_0x5bb062,_0x19eede)=>{var _0x161d35=_0x1af02b;_0x2c62bb[_0x19eede][_0x161d35(0xd8)]=_0x5bb062;}),_0x4b7982[_0x1af02b(0x107)]((_0x307c13,_0x5df81d)=>{var _0x21f905=_0x1af02b;_0x2c62bb[_0x5df81d][_0x21f905(0xf5)]=_0x307c13;});var _0x47bbcd=0x0;_0x2c62bb[_0x1af02b(0x107)](_0x84c289=>{var _0x142456=_0x1af02b;console[_0x142456(0x10f)](_0x142456(0xfa),_0x84c289),(parseInt(_0x84c289[_0x142456(0xd2)])<parseInt(_0x84c289['return_qty'])||parseInt(_0x84c289['stock'])<parseInt(_0x84c289[_0x142456(0x10d)])&&parseInt(_0x84c289[_0x142456(0xd2)])>parseInt(_0x84c289[_0x142456(0x10d)])||parseInt(_0x84c289[_0x142456(0x10d)])==0x0)&&_0x47bbcd++;});if(_0x47bbcd!=0x0)return _0x229f98[_0x1af02b(0xfc)](_0x1af02b(0xcc),_0x1af02b(0xf9)),_0x1d25b1[_0x1af02b(0x109)](_0x1af02b(0xff));_0xa4f777[_0x1af02b(0x134)][_0x1af02b(0x107)](_0x4c8d92=>{var _0x42b1a9=_0x1af02b;const _0x232073=_0x2e58cb[_0x42b1a9(0x122)]['map'](_0x2f766e=>{var _0x216976=_0x42b1a9;_0x2f766e[_0x216976(0xf4)]==_0x4c8d92[_0x216976(0xf4)]&&_0x2f766e[_0x216976(0xf5)]==_0x4c8d92[_0x216976(0xf5)]&&_0x2f766e[_0x216976(0xd8)]==_0x4c8d92[_0x216976(0xd8)]&&_0x2f766e[_0x216976(0x128)]==_0x4c8d92[_0x216976(0x128)]&&_0x2f766e['bay']==_0x4c8d92[_0x216976(0x131)]&&(_0x2f766e[_0x216976(0xf1)]=parseInt(_0x2f766e[_0x216976(0xf1)])+parseInt(_0x4c8d92[_0x216976(0x10d)]));});}),console['log']('old_warehouse_data',_0x2e58cb),await _0x2e58cb[_0x1af02b(0x11c)](),_0xa4f777['invoice']=_0x48a046,_0xa4f777[_0x1af02b(0x135)]=_0x504705,_0xa4f777[_0x1af02b(0x12b)]=_0x34bba4,_0xa4f777[_0x1af02b(0x133)]=_0x35a6e7,_0xa4f777[_0x1af02b(0x134)]=_0x2c62bb,_0xa4f777[_0x1af02b(0x11f)]=_0x5eb8b9,_0xa4f777[_0x1af02b(0xef)]=_0x3d3b2d,_0xa4f777[_0x1af02b(0x124)]=_0x18539d;const _0x3aa9b6=await _0xa4f777[_0x1af02b(0x11c)]();console[_0x1af02b(0x10f)](_0x1af02b(0xd9),_0x3aa9b6);const _0x492560=await c_payment_data['findOne']({'invoice':_0x229f98[_0x1af02b(0xe0)][_0x1af02b(0xf7)],'reason':_0x1af02b(0x101)});_0x492560['suppliers']=_0x229f98['body'][_0x1af02b(0x12f)],_0x492560[_0x1af02b(0x12b)]=_0x229f98[_0x1af02b(0xe0)]['date'],await _0x492560[_0x1af02b(0x11c)](),_0x229f98[_0x1af02b(0xfc)](_0x1af02b(0x139),'purchase\x20return\x20successfully'),_0x1d25b1[_0x1af02b(0x109)](_0x1af02b(0x120));}catch(_0x27a282){console[_0x1af02b(0x10f)](_0x27a282),_0x1d25b1[_0x1af02b(0x10c)](0xc8)[_0x1af02b(0x115)]({'message':_0x27a282[_0x1af02b(0x10b)]});}}),router['post'](a0_0x5684b6(0xfd),auth,async(_0xa4d848,_0x2c4b6c)=>{var _0x2796db=a0_0x5684b6;try{const _0x22d941=_0xa4d848[_0x2796db(0xcb)]['id'],{invoice:_0x57e31c,customer:_0x386ff1,payable_to_customer:_0x2fef39,paid_amount:_0x881dd6}=_0xa4d848[_0x2796db(0xe0)],_0x4d8e14=await sales_return[_0x2796db(0x138)](_0x22d941);console[_0x2796db(0x10f)](_0x2796db(0x113),_0x4d8e14),console['log'](_0x2fef39),console[_0x2796db(0x10f)](_0x881dd6);var _0xc9eb0d=_0x2fef39-_0x881dd6;console['log'](_0x2796db(0xca),_0xc9eb0d),_0x4d8e14[_0x2796db(0xf3)]=parseFloat(_0x881dd6)+parseFloat(_0x4d8e14['paid_amount']),_0x4d8e14['due_amount']=_0xc9eb0d,console['log'](_0x4d8e14);const _0x2dbfcd=await _0x4d8e14[_0x2796db(0x11c)]();console[_0x2796db(0x10f)](0x1b207);const _0x543460=await c_payment_data['findOne']({'invoice':_0xa4d848[_0x2796db(0xe0)][_0x2796db(0xf7)],'reason':'Sale\x20Return'});console[_0x2796db(0x10f)]('c_payment',_0x543460),_0x543460['amount']=_0xc9eb0d,await _0x543460[_0x2796db(0x11c)]();let _0x1ed9ad=new Date(),_0x460117=('0'+_0x1ed9ad[_0x2796db(0xcf)]())['slice'](-0x2),_0x43ba9c=('0'+(_0x1ed9ad[_0x2796db(0x130)]()+0x1))[_0x2796db(0x127)](-0x2),_0x1789d6=_0x1ed9ad[_0x2796db(0x102)](),_0x121787=_0x1789d6+'-'+_0x43ba9c+'-'+_0x460117;const _0xdae68b=new customer_payment({'invoice':_0x57e31c,'date':_0x1789d6+'-'+_0x43ba9c+'-'+_0x460117,'customer':_0x386ff1,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x881dd6}),_0x1843a1=await _0xdae68b[_0x2796db(0x11c)]();_0xa4d848[_0x2796db(0xfc)](_0x2796db(0x139),_0x2796db(0xea)),_0x2c4b6c[_0x2796db(0x109)](_0x2796db(0x120));}catch(_0x4c407a){console[_0x2796db(0x10f)](_0x4c407a);}}),router[a0_0x5684b6(0xd5)]('/invoice/:id',auth,async(_0x523898,_0x1dd1f2)=>{var _0x425f6d=a0_0x5684b6;try{const {username:_0x58e3ca,email:_0x1d125d,role:_0x195b4d}=_0x523898[_0x425f6d(0xe4)],_0x3b63d9=_0x523898[_0x425f6d(0xe4)],_0x46cac0=await profile[_0x425f6d(0xc9)]({'email':_0x3b63d9[_0x425f6d(0xdf)]}),_0x72995f=await master_shop[_0x425f6d(0x12c)]();console[_0x425f6d(0x10f)](_0x425f6d(0x114),_0x72995f);const _0x36b2b3=_0x523898['params']['id'],_0x4e96bc=await sales_return[_0x425f6d(0x138)](_0x36b2b3);console[_0x425f6d(0x10f)](_0x4e96bc);const _0x55faac=await customer['findOne']({'name':_0x4e96bc['customer']});console[_0x425f6d(0x10f)](_0x55faac);if(_0x72995f[0x0][_0x425f6d(0x11d)]==_0x425f6d(0x125)){var _0x654952=users['English'];console[_0x425f6d(0x10f)](_0x654952);}else{if(_0x72995f[0x0][_0x425f6d(0x11d)]=='Hindi')var _0x654952=users[_0x425f6d(0xd6)];else{if(_0x72995f[0x0][_0x425f6d(0x11d)]=='German')var _0x654952=users[_0x425f6d(0x11e)];else{if(_0x72995f[0x0][_0x425f6d(0x11d)]=='Spanish')var _0x654952=users[_0x425f6d(0x118)];else{if(_0x72995f[0x0][_0x425f6d(0x11d)]==_0x425f6d(0x116))var _0x654952=users[_0x425f6d(0x116)];else{if(_0x72995f[0x0][_0x425f6d(0x11d)]==_0x425f6d(0xe6))var _0x654952=users['Portuguese'];else{if(_0x72995f[0x0][_0x425f6d(0x11d)]==_0x425f6d(0x10a))var _0x654952=users[_0x425f6d(0x10a)];else{if(_0x72995f[0x0]['language']=='Arabic\x20(ae)')var _0x654952=users[_0x425f6d(0xe1)];}}}}}}}_0x1dd1f2['render'](_0x425f6d(0xd1),{'success':_0x523898[_0x425f6d(0xfc)](_0x425f6d(0x139)),'errors':_0x523898[_0x425f6d(0xfc)](_0x425f6d(0xcc)),'role':_0x3b63d9,'profile':_0x46cac0,'master_shop':_0x72995f,'customers':_0x55faac,'sales':_0x4e96bc,'language':_0x654952});}catch(_0x4717af){console[_0x425f6d(0x10f)](_0x4717af);}}),module[a0_0x5684b6(0xe9)]=router;