function a0_0x4346(_0x1cdb4c,_0x4c6d35){var _0x32df4f=a0_0x32df();return a0_0x4346=function(_0x4346b2,_0x25a92b){_0x4346b2=_0x4346b2-0x136;var _0x1294ad=_0x32df4f[_0x4346b2];return _0x1294ad;},a0_0x4346(_0x1cdb4c,_0x4c6d35);}var a0_0x549bfd=a0_0x4346;(function(_0xe2ed41,_0x4762da){var _0x11a1a1=a0_0x4346,_0x48c7ee=_0xe2ed41();while(!![]){try{var _0x1e119d=parseInt(_0x11a1a1(0x16f))/0x1+-parseInt(_0x11a1a1(0x184))/0x2*(-parseInt(_0x11a1a1(0x159))/0x3)+parseInt(_0x11a1a1(0x17b))/0x4+parseInt(_0x11a1a1(0x145))/0x5*(-parseInt(_0x11a1a1(0x137))/0x6)+parseInt(_0x11a1a1(0x147))/0x7+parseInt(_0x11a1a1(0x166))/0x8*(-parseInt(_0x11a1a1(0x18b))/0x9)+parseInt(_0x11a1a1(0x1a4))/0xa*(-parseInt(_0x11a1a1(0x19e))/0xb);if(_0x1e119d===_0x4762da)break;else _0x48c7ee['push'](_0x48c7ee['shift']());}catch(_0x2a1f30){_0x48c7ee['push'](_0x48c7ee['shift']());}}}(a0_0x32df,0x277bf));function a0_0x32df(){var _0x530a88=['findOne','$product_details.type','Purchase\x20Return','due_amount','errors','194079oEMLnI','product_details','return_qty','secondary_code_hide','invoice','../middleware/auth','product_stock','master','stock_quantity','back','/invoice/:id','return_product','232056NhekLz','suppliers','$supplier_docs.address','product_details.return_qtyproduct_details.return_qty','final','email','types','message','/purchases_return/view','28990chFiyX','aggregate','return_purchase_invoice','return_purchase_edit','stock_data','body','Chinese','12591CNzIci','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','to_Room_name','$supplier_docs.email','$product_details.primary_code','Received\x20For\x20Purchase\x20Return','json','Router','supplier_docs','redirect','map','getMonth','purchase_quantity','room','$receivable','$product_details.bin','slice','$product_details.product_code','stocks','64581trXmVa','primary_code_hide','user','date','$return_product.price','pallet','690Oppmuz','$invoice','Arabic\x20(ae)','$product_details.secondary_code','$product_details._id','language','$name','old_warehouse_data','note','$product_details.floorlevel','$received','English','Arabic','warehouse_name','$date','forEach','post','18078cRYcIb','flash','product_name','status','log','floorlevel','bay','$return_product.return_qty','to_warehouse_name','$product_details.storage','$suppliers','save','$return_product.product_name','English\x20(US)','65iFtUdG','bin','1421056mjWdYo','getDate','French','params','$supplier_docs.mobile','render','express','$product_details.product_name','to_room','getFullYear','get','find','level','foreach\x20newproduct','Hindi','$return_product','Portuguese','Portuguese\x20(BR)','57mGNWUq','isle','exports','Raw\x20Materials','$note','findById','German','Return\x20Goods','$discount','type','/view/:id','$supplier_docs','success','712jFihBQ','Spanish','product_code_hide','$product_details.bay'];a0_0x32df=function(){return _0x530a88;};return a0_0x32df();}const express=require(a0_0x549bfd(0x14d)),app=express(),router=express[a0_0x549bfd(0x192)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require('../models/all_models'),auth=require(a0_0x549bfd(0x174)),users=require('../public/language/languages.json');router['get']('/view',auth,async(_0x3c4832,_0x2ec9a9)=>{var _0x33d498=a0_0x549bfd;try{const {username:_0x44a6c9,email:_0x18cb5b,role:_0x3dcd29}=_0x3c4832[_0x33d498(0x1a0)],_0x1a2469=_0x3c4832['user'],_0x53f740=await profile[_0x33d498(0x16a)]({'email':_0x1a2469[_0x33d498(0x180)]}),_0x90976a=await master_shop[_0x33d498(0x152)]();console[_0x33d498(0x13b)](_0x33d498(0x176),_0x90976a);const _0x176b85=await purchases_return[_0x33d498(0x185)]([{'$lookup':{'from':_0x33d498(0x17c),'localField':_0x33d498(0x17c),'foreignField':'name','as':_0x33d498(0x193)}},{'$unwind':_0x33d498(0x156)},{'$unwind':_0x33d498(0x164)},{'$group':{'_id':'$_id','invoice':{'$first':_0x33d498(0x1a5)},'date':{'$first':_0x33d498(0x1b2)},'suppliers':{'$first':_0x33d498(0x141)},'warehouse_name':{'$first':'$warehouse_name'},'product_name':{'$first':_0x33d498(0x143)},'return_qty':{'$first':_0x33d498(0x13e)},'price':{'$first':_0x33d498(0x1a2)},'total':{'$sum':'$return_product.total'},'note':{'$first':_0x33d498(0x15d)},'total_amount':{'$first':'$total_amount'},'discount':{'$first':_0x33d498(0x161)},'receivable':{'$first':_0x33d498(0x199)},'received':{'$first':_0x33d498(0x1ae)},'due_amount':{'$first':'$due_amount'},'mobile':{'$first':_0x33d498(0x14b)},'email':{'$first':_0x33d498(0x18e)},'address':{'$first':_0x33d498(0x17d)},'return_sum_qty':{'$sum':_0x33d498(0x13e)}}}]);console[_0x33d498(0x13b)](_0x176b85);if(_0x90976a[0x0][_0x33d498(0x1a9)]==_0x33d498(0x144)){var _0x296010=users[_0x33d498(0x1af)];console['log'](_0x296010);}else{if(_0x90976a[0x0]['language']==_0x33d498(0x155))var _0x296010=users[_0x33d498(0x155)];else{if(_0x90976a[0x0][_0x33d498(0x1a9)]==_0x33d498(0x15f))var _0x296010=users[_0x33d498(0x15f)];else{if(_0x90976a[0x0][_0x33d498(0x1a9)]=='Spanish')var _0x296010=users[_0x33d498(0x167)];else{if(_0x90976a[0x0][_0x33d498(0x1a9)]==_0x33d498(0x149))var _0x296010=users[_0x33d498(0x149)];else{if(_0x90976a[0x0][_0x33d498(0x1a9)]=='Portuguese\x20(BR)')var _0x296010=users[_0x33d498(0x157)];else{if(_0x90976a[0x0]['language']==_0x33d498(0x18a))var _0x296010=users[_0x33d498(0x18a)];else{if(_0x90976a[0x0][_0x33d498(0x1a9)]=='Arabic\x20(ae)')var _0x296010=users[_0x33d498(0x1b0)];}}}}}}}_0x2ec9a9[_0x33d498(0x14c)]('purchases_return',{'success':_0x3c4832['flash'](_0x33d498(0x165)),'errors':_0x3c4832[_0x33d498(0x138)](_0x33d498(0x16e)),'role':_0x1a2469,'profile':_0x53f740,'master_shop':_0x90976a,'user':_0x176b85,'language':_0x296010});}catch(_0x850787){console[_0x33d498(0x13b)](_0x850787);}}),router[a0_0x549bfd(0x151)](a0_0x549bfd(0x163),auth,async(_0x21e152,_0x643a5e)=>{var _0xb20a6f=a0_0x549bfd;try{const {username:_0x527bc7,email:_0xbdab35,role:_0x1c4d61}=_0x21e152['user'],_0x256300=_0x21e152[_0xb20a6f(0x1a0)],_0x184c9f=await profile['findOne']({'email':_0x256300[_0xb20a6f(0x180)]}),_0x36f599=await product['find']({}),_0x704523=await master_shop[_0xb20a6f(0x152)]();console[_0xb20a6f(0x13b)](_0xb20a6f(0x176),_0x704523),console[_0xb20a6f(0x13b)](_0x21e152[_0xb20a6f(0x189)]);const _0x3a6dc1=_0x21e152[_0xb20a6f(0x14a)]['id'],_0x218fd8=await purchases_return['findById'](_0x3a6dc1);console['log'](_0x218fd8);const _0x4238a1=await warehouse[_0xb20a6f(0x185)]([{'$match':{'name':_0x218fd8[_0xb20a6f(0x1b1)],'room':_0x218fd8[_0xb20a6f(0x198)]}},{'$unwind':'$product_details'},{'$group':{'_id':_0xb20a6f(0x1a8),'name':{'$first':_0xb20a6f(0x14e)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0xb20a6f(0x169)},'bin':{'$first':_0xb20a6f(0x19a)},'type':{'$first':_0xb20a6f(0x16b)},'floorlevel':{'$first':_0xb20a6f(0x1ad)},'primary_code':{'$first':_0xb20a6f(0x18f)},'secondary_code':{'$first':_0xb20a6f(0x1a7)},'product_code':{'$first':_0xb20a6f(0x19c)},'storage':{'$first':_0xb20a6f(0x140)},'rack':{'$first':'$product_details.rack'}}}]);warehouse_data=await warehouse[_0xb20a6f(0x185)]([{'$match':{'status':'Enabled','name':_0xb20a6f(0x160),'warehouse_category':_0xb20a6f(0x15c)}},{'$group':{'_id':_0xb20a6f(0x1aa),'name':{'$first':_0xb20a6f(0x1aa)}}},{'$sort':{'name':0x1}}]),console[_0xb20a6f(0x13b)](_0xb20a6f(0x188),_0x4238a1);if(_0x704523[0x0][_0xb20a6f(0x1a9)]==_0xb20a6f(0x144)){var _0xf2bcf1=users[_0xb20a6f(0x1af)];console[_0xb20a6f(0x13b)](_0xf2bcf1);}else{if(_0x704523[0x0][_0xb20a6f(0x1a9)]==_0xb20a6f(0x155))var _0xf2bcf1=users['Hindi'];else{if(_0x704523[0x0][_0xb20a6f(0x1a9)]==_0xb20a6f(0x15f))var _0xf2bcf1=users[_0xb20a6f(0x15f)];else{if(_0x704523[0x0][_0xb20a6f(0x1a9)]==_0xb20a6f(0x167))var _0xf2bcf1=users[_0xb20a6f(0x167)];else{if(_0x704523[0x0]['language']==_0xb20a6f(0x149))var _0xf2bcf1=users['French'];else{if(_0x704523[0x0]['language']==_0xb20a6f(0x158))var _0xf2bcf1=users[_0xb20a6f(0x157)];else{if(_0x704523[0x0][_0xb20a6f(0x1a9)]==_0xb20a6f(0x18a))var _0xf2bcf1=users[_0xb20a6f(0x18a)];else{if(_0x704523[0x0][_0xb20a6f(0x1a9)]==_0xb20a6f(0x1a6))var _0xf2bcf1=users[_0xb20a6f(0x1b0)];}}}}}}}_0x643a5e[_0xb20a6f(0x14c)](_0xb20a6f(0x187),{'success':_0x21e152[_0xb20a6f(0x138)](_0xb20a6f(0x165)),'errors':_0x21e152[_0xb20a6f(0x138)](_0xb20a6f(0x16e)),'role':_0x256300,'master_shop':_0x704523,'profile':_0x184c9f,'user':_0x218fd8,'stock':_0x4238a1,'product':_0x36f599,'language':_0xf2bcf1,'warehouse':warehouse_data});}catch(_0x272207){console['log'](_0x272207);}}),router[a0_0x549bfd(0x136)](a0_0x549bfd(0x163),auth,async(_0x1c8edc,_0x430724)=>{var _0x22677e=a0_0x549bfd;try{const _0x130353=_0x1c8edc[_0x22677e(0x14a)]['id'];console['log'](_0x130353);const _0x531fe2=await purchases_return[_0x22677e(0x16a)]({'invoice':_0x1c8edc['body']['invoice']});console[_0x22677e(0x13b)]('old_data',_0x531fe2);const _0x1a9c28=await warehouse['findOne']({'name':_0x531fe2[_0x22677e(0x13f)],'room':_0x531fe2[_0x22677e(0x14f)]});console['log']('old_warehouse_data',_0x1a9c28);const {invoice:_0x287130,suppliers:_0x2cd6bd,date:_0x20a448,warehouse_name:_0x34b314,product_name:_0x5e5be2,purchase_quantity:_0x30a24d,stocks:_0x67c9a5,return_qty:_0x4097ba,note:_0x499b01,Room_name:_0x4f8cdb,level:_0x2bd01b,isle:_0x4c6b3c,pallet:_0x27d437,to_warehouse_name:_0x373dbf,to_Room_name:_0x26e42d}=_0x1c8edc[_0x22677e(0x189)];if(typeof _0x5e5be2=='string')var _0x8cdb31=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x139)]],_0x19f742=[_0x1c8edc['body'][_0x22677e(0x197)]],_0xee016f=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x19d)]],_0x586843=[_0x1c8edc[_0x22677e(0x189)]['return_qty']],_0x2223d4=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x153)]],_0x3d24d6=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x15a)]],_0x1ca639=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x1a3)]],_0x5993ba=[_0x1c8edc[_0x22677e(0x189)]['types']],_0x1274c4=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x168)]],_0x27d13e=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x19f)]],_0x424f5b=[_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x172)]];else var _0x8cdb31=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x139)]],_0x19f742=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x197)]],_0xee016f=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x19d)]],_0x586843=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x171)]],_0x2223d4=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x153)]],_0x3d24d6=[..._0x1c8edc['body'][_0x22677e(0x15a)]],_0x1ca639=[..._0x1c8edc['body']['pallet']],_0x1274c4=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x168)]],_0x27d13e=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x19f)]],_0x424f5b=[..._0x1c8edc[_0x22677e(0x189)][_0x22677e(0x172)]],_0x5993ba=[..._0x1c8edc['body'][_0x22677e(0x181)]];const _0x210050=_0x8cdb31['map'](_0x2ce8f8=>{return _0x2ce8f8={'product_name':_0x2ce8f8};});_0x19f742[_0x22677e(0x1b3)]((_0x365432,_0xba08e7)=>{_0x210050[_0xba08e7]['purchase_quantity']=_0x365432;}),_0xee016f[_0x22677e(0x1b3)]((_0x3de9b2,_0x100fc0)=>{var _0x551a3a=_0x22677e;_0x210050[_0x100fc0][_0x551a3a(0x177)]=_0x3de9b2;}),_0x586843[_0x22677e(0x1b3)]((_0x2dcca4,_0x3b8a2a)=>{_0x210050[_0x3b8a2a]['return_qty']=_0x2dcca4;}),_0x2223d4[_0x22677e(0x1b3)]((_0x1fcbc6,_0x2d45f8)=>{var _0x14d228=_0x22677e;_0x210050[_0x2d45f8][_0x14d228(0x13d)]=_0x1fcbc6;}),_0x3d24d6[_0x22677e(0x1b3)]((_0x5bc0b8,_0x281a35)=>{_0x210050[_0x281a35]['bin']=_0x5bc0b8;}),_0x1ca639[_0x22677e(0x1b3)]((_0x273af1,_0x5e0e5b)=>{var _0x113604=_0x22677e;_0x210050[_0x5e0e5b][_0x113604(0x13c)]=_0x273af1;}),_0x1274c4[_0x22677e(0x1b3)]((_0x21e52a,_0x23d1bf)=>{_0x210050[_0x23d1bf]['product_code']=_0x21e52a;}),_0x27d13e[_0x22677e(0x1b3)]((_0x382f83,_0x46aa4a)=>{_0x210050[_0x46aa4a]['primary_code']=_0x382f83;}),_0x424f5b[_0x22677e(0x1b3)]((_0xa122b2,_0x317bb1)=>{_0x210050[_0x317bb1]['secondary_code']=_0xa122b2;}),_0x5993ba['forEach']((_0x28f0fe,_0x5ce845)=>{var _0x53771d=_0x22677e;_0x210050[_0x5ce845][_0x53771d(0x162)]=_0x28f0fe;});var _0x269528=0x0;_0x210050['forEach'](_0x51e30b=>{var _0x287962=_0x22677e;console[_0x287962(0x13b)](_0x287962(0x154),_0x51e30b),(parseInt(_0x51e30b['purchase_quantity'])<parseInt(_0x51e30b[_0x287962(0x171)])||parseInt(_0x51e30b[_0x287962(0x177)])<parseInt(_0x51e30b[_0x287962(0x171)])||parseInt(_0x51e30b[_0x287962(0x171)])==0x0)&&_0x269528++;});if(_0x269528!=0x0)return _0x1c8edc[_0x22677e(0x138)](_0x22677e(0x16e),_0x22677e(0x18c)),_0x430724[_0x22677e(0x194)](_0x22677e(0x178));_0x531fe2[_0x22677e(0x17a)][_0x22677e(0x1b3)](_0x21ed56=>{var _0x3668a5=_0x22677e;const _0x37ab3d=_0x1a9c28[_0x3668a5(0x170)][_0x3668a5(0x195)](_0x4f9af1=>{var _0xda696=_0x3668a5;_0x4f9af1[_0xda696(0x139)]==_0x21ed56[_0xda696(0x139)]&&_0x4f9af1[_0xda696(0x13c)]==_0x21ed56['floorlevel']&&_0x4f9af1[_0xda696(0x162)]==_0x21ed56[_0xda696(0x162)]&&_0x4f9af1[_0xda696(0x146)]==_0x21ed56[_0xda696(0x146)]&&_0x4f9af1[_0xda696(0x13d)]==_0x21ed56[_0xda696(0x13d)]&&(_0x4f9af1[_0xda696(0x175)]=parseInt(_0x4f9af1[_0xda696(0x175)])+parseInt(_0x21ed56[_0xda696(0x171)]));});}),console['log'](_0x22677e(0x1ab),_0x1a9c28),await _0x1a9c28['save'](),_0x531fe2[_0x22677e(0x173)]=_0x287130,_0x531fe2[_0x22677e(0x17c)]=_0x2cd6bd,_0x531fe2[_0x22677e(0x1a1)]=_0x20a448,_0x531fe2[_0x22677e(0x1b1)]=_0x34b314,_0x531fe2[_0x22677e(0x17a)]=_0x210050,_0x531fe2[_0x22677e(0x1ac)]=_0x499b01,_0x531fe2[_0x22677e(0x198)]=_0x4f8cdb,_0x531fe2['to_warehouse_name']=_0x373dbf,_0x531fe2[_0x22677e(0x14f)]=_0x26e42d;const _0x58780a=await _0x531fe2[_0x22677e(0x142)](),_0x279cbd=await purchases_return[_0x22677e(0x16a)]({'invoice':_0x1c8edc[_0x22677e(0x189)][_0x22677e(0x173)]}),_0x5906c2=await warehouse[_0x22677e(0x16a)]({'name':_0x1c8edc[_0x22677e(0x189)]['to_warehouse_name'],'room':_0x1c8edc['body'][_0x22677e(0x18d)]});_0x279cbd['return_product'][_0x22677e(0x1b3)](_0x749dbc=>{var _0x2cb084=_0x22677e;_0x5906c2[_0x2cb084(0x170)]['map'](_0x8d51c9=>{var _0x313ffd=_0x2cb084;_0x8d51c9[_0x313ffd(0x139)]==_0x749dbc['product_name']&&_0x8d51c9[_0x313ffd(0x1a3)]==_0x749dbc[_0x313ffd(0x1a3)]&&(_0x8d51c9['product_stock']=parseInt(_0x8d51c9[_0x313ffd(0x175)])-parseInt(_0x749dbc['return_qty']),console['log'](_0x313ffd(0x17e),_0x749dbc[_0x313ffd(0x171)]));});}),console[_0x22677e(0x13b)](_0x22677e(0x17f),_0x5906c2),await _0x5906c2['save']();const _0x3dd4d7=await s_payment_data['findOne']({'invoice':_0x1c8edc['body'][_0x22677e(0x173)],'reason':_0x22677e(0x16c)});await _0x3dd4d7[_0x22677e(0x142)](),_0x1c8edc[_0x22677e(0x138)]('success','purchase\x20return\x20successfully'),_0x430724[_0x22677e(0x194)](_0x22677e(0x183));}catch(_0x34714b){console['log'](_0x34714b),_0x430724[_0x22677e(0x13a)](0xc8)[_0x22677e(0x191)]({'message':_0x34714b[_0x22677e(0x182)]});}}),router['get'](a0_0x549bfd(0x179),auth,async(_0x34ceee,_0x29dfdd)=>{var _0x3a6139=a0_0x549bfd;try{const {username:_0x26395c,email:_0x5e133f,role:_0x1b584e}=_0x34ceee[_0x3a6139(0x1a0)],_0x15174d=_0x34ceee[_0x3a6139(0x1a0)],_0x3afe24=await profile[_0x3a6139(0x16a)]({'email':_0x15174d['email']}),_0x22e1d2=await master_shop[_0x3a6139(0x152)]();console[_0x3a6139(0x13b)](_0x3a6139(0x176),_0x22e1d2);const _0x5a1334=_0x34ceee[_0x3a6139(0x14a)]['id'],_0x5e8fe=await purchases_return['findById'](_0x5a1334);console[_0x3a6139(0x13b)](_0x5e8fe);const _0x1cc0c1=await suppliers[_0x3a6139(0x16a)]({'name':_0x5e8fe[_0x3a6139(0x17c)]});console[_0x3a6139(0x13b)](_0x1cc0c1);if(_0x22e1d2[0x0][_0x3a6139(0x1a9)]==_0x3a6139(0x144)){var _0x35993e=users['English'];console[_0x3a6139(0x13b)](_0x35993e);}else{if(_0x22e1d2[0x0][_0x3a6139(0x1a9)]==_0x3a6139(0x155))var _0x35993e=users['Hindi'];else{if(_0x22e1d2[0x0]['language']=='German')var _0x35993e=users['German'];else{if(_0x22e1d2[0x0]['language']==_0x3a6139(0x167))var _0x35993e=users[_0x3a6139(0x167)];else{if(_0x22e1d2[0x0]['language']==_0x3a6139(0x149))var _0x35993e=users[_0x3a6139(0x149)];else{if(_0x22e1d2[0x0]['language']==_0x3a6139(0x158))var _0x35993e=users[_0x3a6139(0x157)];else{if(_0x22e1d2[0x0][_0x3a6139(0x1a9)]==_0x3a6139(0x18a))var _0x35993e=users['Chinese'];else{if(_0x22e1d2[0x0][_0x3a6139(0x1a9)]=='Arabic\x20(ae)')var _0x35993e=users[_0x3a6139(0x1b0)];}}}}}}}_0x29dfdd[_0x3a6139(0x14c)](_0x3a6139(0x186),{'success':_0x34ceee['flash'](_0x3a6139(0x165)),'errors':_0x34ceee['flash'](_0x3a6139(0x16e)),'role':_0x15174d,'profile':_0x3afe24,'master_shop':_0x22e1d2,'supplier':_0x1cc0c1,'purchase':_0x5e8fe,'language':_0x35993e});}catch(_0x93e082){console[_0x3a6139(0x13b)](_0x93e082);}}),router['post']('/receive_payment/:id',auth,async(_0x4c8835,_0x5f346d)=>{var _0x2b2a3c=a0_0x549bfd;try{const _0x624e7e=_0x4c8835[_0x2b2a3c(0x14a)]['id'],{invoice:_0x5bd672,suppliers:_0x4b855b,receivable_amount:_0x357fea,received_amount:_0x4ebbe7}=_0x4c8835[_0x2b2a3c(0x189)],_0x366ef6=await purchases_return[_0x2b2a3c(0x15e)](_0x624e7e);console[_0x2b2a3c(0x13b)](_0x366ef6);var _0x3e4367=_0x357fea-_0x4ebbe7;console[_0x2b2a3c(0x13b)](_0x4ebbe7),_0x366ef6['received']=parseFloat(_0x4ebbe7)+parseFloat(_0x366ef6['received']),_0x366ef6[_0x2b2a3c(0x16d)]=_0x3e4367,console['log'](_0x366ef6);const _0x4e8dac=await _0x366ef6[_0x2b2a3c(0x142)](),_0x8fca54=await s_payment_data[_0x2b2a3c(0x16a)]({'invoice':_0x4c8835[_0x2b2a3c(0x189)]['invoice'],'reason':_0x2b2a3c(0x16c)});_0x8fca54['amount']=_0x3e4367,await _0x8fca54[_0x2b2a3c(0x142)]();let _0x403229=new Date(),_0x31ab27=('0'+_0x403229[_0x2b2a3c(0x148)]())[_0x2b2a3c(0x19b)](-0x2),_0x469733=('0'+(_0x403229[_0x2b2a3c(0x196)]()+0x1))[_0x2b2a3c(0x19b)](-0x2),_0x472181=_0x403229[_0x2b2a3c(0x150)](),_0x22bb3a=_0x472181+'-'+_0x469733+'-'+_0x31ab27;const _0x26502c=new suppliers_payment({'invoice':_0x5bd672,'date':_0x472181+'-'+_0x469733+'-'+_0x31ab27,'suppliers':_0x4b855b,'reason':_0x2b2a3c(0x190),'amount':_0x4ebbe7}),_0x26c0f5=await _0x26502c['save']();_0x4c8835[_0x2b2a3c(0x138)](_0x2b2a3c(0x165),'payment\x20successfull'),_0x5f346d[_0x2b2a3c(0x194)]('/purchases_return/view');}catch(_0x36e648){console[_0x2b2a3c(0x13b)](_0x36e648);}}),module[a0_0x549bfd(0x15b)]=router;