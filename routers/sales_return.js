var a0_0x31afdd=a0_0x4551;function a0_0x4575(){var _0x4b96c8=['/invoice/:id','new\x20new_data','express','aggregate','English\x20(US)','$product_details.primary_code','Portuguese\x20(BR)','stock','$product_details.bin','../models/all_models','subtract','Returned\x20Payment\x20For\x20Sale\x20Return','sale_qty','user','redirect','customer_docs','3304GOjsrb','name','sales_return_invoice','findById','14892724Ytdsgf','$customer_docs','note','bin','old_warehouse_data','c_payment','due_amount','Router','2YIzOsb','amount','email','language','post','invoice','English','customer','Chinese','product_details','Portuguese','errors','/give_payment/:id','Raw\x20Materials','return_sale_edit','Arabic','Return\x20Goods','$product_details.rack','ToRoom','/view/:id','getFullYear','paid_amount','stocks','305OQISKU','type','$product_details','French','back','1565420rNXqeq','map','1277067hTlBbl','forEach','find','master','$product_details._id','German','sales_return','log','357450DNeWys','primary_code','payment\x20successfull','floorlevel','return_qty','params','success','sales_quantity','old_data','$product_details.bay','customers','render','body','$product_details.floorlevel','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','status','foreach\x20newproduct','product_name','$name','secondary_code','$product_details.secondary_code','/sales_return/view','warehouse_name','../middleware/auth','suppliers','ToWarehouse','date','Arabic\x20(ae)','4151268AnopsP','9OBmlva','exports','791gXyHAI','save','Hindi','string','get','return_sale','flash','product_stock','getDate','findOne','types','67038wiMfXf','purchase\x20return\x20successfully','Spanish','bay','product_code'];a0_0x4575=function(){return _0x4b96c8;};return a0_0x4575();}(function(_0x45ea4e,_0x153af8){var _0x3112bd=a0_0x4551,_0x5a5f4f=_0x45ea4e();while(!![]){try{var _0x32aff6=parseInt(_0x3112bd(0xdf))/0x1+parseInt(_0x3112bd(0x12a))/0x2*(-parseInt(_0x3112bd(0xd7))/0x3)+-parseInt(_0x3112bd(0xfb))/0x4+-parseInt(_0x3112bd(0xd0))/0x5*(-parseInt(_0x3112bd(0x109))/0x6)+parseInt(_0x3112bd(0xfe))/0x7*(-parseInt(_0x3112bd(0x11e))/0x8)+parseInt(_0x3112bd(0xfc))/0x9*(-parseInt(_0x3112bd(0xd5))/0xa)+parseInt(_0x3112bd(0x122))/0xb;if(_0x32aff6===_0x153af8)break;else _0x5a5f4f['push'](_0x5a5f4f['shift']());}catch(_0x30775e){_0x5a5f4f['push'](_0x5a5f4f['shift']());}}}(a0_0x4575,0xb149a));const express=require(a0_0x31afdd(0x110)),app=express(),router=express[a0_0x31afdd(0x129)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x31afdd(0x117)),auth=require(a0_0x31afdd(0xf6)),users=require('../public/language/languages.json');function a0_0x4551(_0x47779b,_0x437c31){var _0x457522=a0_0x4575();return a0_0x4551=function(_0x455190,_0x2847a6){_0x455190=_0x455190-0xcb;var _0x79f34a=_0x457522[_0x455190];return _0x79f34a;},a0_0x4551(_0x47779b,_0x437c31);}router[a0_0x31afdd(0x102)]('/view',auth,async(_0xbb07,_0x723f86)=>{var _0x3e8ca4=a0_0x31afdd;try{const {username:_0x480e84,email:_0x54340d,role:_0x5296f1}=_0xbb07[_0x3e8ca4(0x11b)],_0x5254f9=_0xbb07[_0x3e8ca4(0x11b)],_0x318206=await profile['findOne']({'email':_0x5254f9[_0x3e8ca4(0x12c)]}),_0x17a176=await master_shop['find']();console[_0x3e8ca4(0xde)]('master',_0x17a176);const _0xf25b2e=await sales_return[_0x3e8ca4(0x111)]([{'$lookup':{'from':_0x3e8ca4(0xe9),'localField':'customer','foreignField':_0x3e8ca4(0x11f),'as':_0x3e8ca4(0x11d)}},{'$unwind':_0x3e8ca4(0x123)}]);console[_0x3e8ca4(0xde)]('all_data',_0xf25b2e);if(_0x17a176[0x0]['language']==_0x3e8ca4(0x112)){var _0x2ff443=users[_0x3e8ca4(0x130)];console['log'](_0x2ff443);}else{if(_0x17a176[0x0]['language']==_0x3e8ca4(0x100))var _0x2ff443=users[_0x3e8ca4(0x100)];else{if(_0x17a176[0x0][_0x3e8ca4(0x12d)]==_0x3e8ca4(0xdc))var _0x2ff443=users[_0x3e8ca4(0xdc)];else{if(_0x17a176[0x0][_0x3e8ca4(0x12d)]==_0x3e8ca4(0x10b))var _0x2ff443=users['Spanish'];else{if(_0x17a176[0x0]['language']==_0x3e8ca4(0xd3))var _0x2ff443=users[_0x3e8ca4(0xd3)];else{if(_0x17a176[0x0][_0x3e8ca4(0x12d)]==_0x3e8ca4(0x114))var _0x2ff443=users[_0x3e8ca4(0x134)];else{if(_0x17a176[0x0][_0x3e8ca4(0x12d)]==_0x3e8ca4(0x132))var _0x2ff443=users['Chinese'];else{if(_0x17a176[0x0][_0x3e8ca4(0x12d)]==_0x3e8ca4(0xfa))var _0x2ff443=users['Arabic'];}}}}}}}_0x723f86[_0x3e8ca4(0xea)](_0x3e8ca4(0xdd),{'success':_0xbb07[_0x3e8ca4(0x104)](_0x3e8ca4(0xe5)),'errors':_0xbb07['flash']('errors'),'role':_0x5254f9,'profile':_0x318206,'master_shop':_0x17a176,'user':_0xf25b2e,'language':_0x2ff443});}catch(_0x4e0ed7){console[_0x3e8ca4(0xde)](_0x4e0ed7);}}),router[a0_0x31afdd(0x102)](a0_0x31afdd(0xcc),auth,async(_0x2b9c64,_0x1d21e2)=>{var _0x23b0a7=a0_0x31afdd;try{const {username:_0x22ec2f,email:_0x24f782,role:_0x4dad75}=_0x2b9c64[_0x23b0a7(0x11b)],_0x42d7b1=_0x2b9c64[_0x23b0a7(0x11b)],_0x4bed46=await profile[_0x23b0a7(0x107)]({'email':_0x42d7b1['email']}),_0x504ad3=await master_shop[_0x23b0a7(0xd9)]();console[_0x23b0a7(0xde)](_0x23b0a7(0xda),_0x504ad3);const _0x66101e=_0x2b9c64[_0x23b0a7(0xe4)]['id'];console['log'](_0x66101e);var _0x54ad5b=['Return\x20Rooms'];const _0x427fd3=await sales_return[_0x23b0a7(0x121)](_0x66101e),_0x53b8d8=await warehouse[_0x23b0a7(0x111)]([{'$match':{'name':_0x427fd3[_0x23b0a7(0xf8)],'room':_0x427fd3[_0x23b0a7(0xcb)]}},{'$unwind':_0x23b0a7(0xd2)},{'$group':{'_id':_0x23b0a7(0xdb),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x23b0a7(0xe8)},'bin':{'$first':_0x23b0a7(0x116)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x23b0a7(0xec)},'primary_code':{'$first':_0x23b0a7(0x113)},'secondary_code':{'$first':_0x23b0a7(0xf3)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x23b0a7(0x13b)}}}]);console['log'](_0x53b8d8);const _0x479096=await warehouse['aggregate']([{'$match':{'status':'Enabled','name':_0x23b0a7(0x13a),'warehouse_category':_0x23b0a7(0x137)}},{'$group':{'_id':'$name','name':{'$first':_0x23b0a7(0xf1)}}},{'$sort':{'name':0x1}}]),_0x5771ed=await product[_0x23b0a7(0xd9)]({});if(_0x504ad3[0x0]['language']=='English\x20(US)'){var _0x3b4eb5=users[_0x23b0a7(0x130)];console[_0x23b0a7(0xde)](_0x3b4eb5);}else{if(_0x504ad3[0x0][_0x23b0a7(0x12d)]==_0x23b0a7(0x100))var _0x3b4eb5=users[_0x23b0a7(0x100)];else{if(_0x504ad3[0x0]['language']=='German')var _0x3b4eb5=users[_0x23b0a7(0xdc)];else{if(_0x504ad3[0x0][_0x23b0a7(0x12d)]==_0x23b0a7(0x10b))var _0x3b4eb5=users[_0x23b0a7(0x10b)];else{if(_0x504ad3[0x0][_0x23b0a7(0x12d)]==_0x23b0a7(0xd3))var _0x3b4eb5=users[_0x23b0a7(0xd3)];else{if(_0x504ad3[0x0][_0x23b0a7(0x12d)]==_0x23b0a7(0x114))var _0x3b4eb5=users[_0x23b0a7(0x134)];else{if(_0x504ad3[0x0]['language']==_0x23b0a7(0x132))var _0x3b4eb5=users[_0x23b0a7(0x132)];else{if(_0x504ad3[0x0][_0x23b0a7(0x12d)]==_0x23b0a7(0xfa))var _0x3b4eb5=users['Arabic'];}}}}}}}_0x1d21e2['render'](_0x23b0a7(0x138),{'success':_0x2b9c64['flash'](_0x23b0a7(0xe5)),'errors':_0x2b9c64[_0x23b0a7(0x104)](_0x23b0a7(0x135)),'role':_0x42d7b1,'profile':_0x4bed46,'master_shop':_0x504ad3,'user':_0x427fd3,'stock':_0x53b8d8,'unit':_0x5771ed,'language':_0x3b4eb5,'warehouses':_0x479096,'rooms':_0x54ad5b});}catch(_0x355619){console[_0x23b0a7(0xde)](_0x355619);}}),router[a0_0x31afdd(0x12e)]('/view/:id',auth,async(_0x35bd79,_0x567cfb)=>{var _0x1bfa85=a0_0x31afdd;try{const _0x16110b=_0x35bd79[_0x1bfa85(0xe4)]['id'];console[_0x1bfa85(0xde)](_0x16110b);const _0x3e564d=await sales_return['findOne']({'invoice':_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x12f)]});console['log'](_0x1bfa85(0xe7),_0x3e564d);const _0x889b30=await warehouse[_0x1bfa85(0x107)]({'name':_0x3e564d[_0x1bfa85(0xf8)],'room':_0x3e564d[_0x1bfa85(0xcb)]});console[_0x1bfa85(0xde)](_0x1bfa85(0x126),_0x889b30);const {invoice:_0x551525,customer:_0x59aa59,date:_0x4d243d,warehouse_name:_0xc56a20,product_name:_0xf8cbe2,primary_code:_0x2d3999,secondary_code:_0x23b765,product_code:_0x59ef3e,sales_quantity:_0x5b6704,stocks:_0x3e0250,return_qty:_0x5abcde,note:_0x42f322,to_warehouse_name:_0x41542a,to_Room_name:_0x36ac56}=_0x35bd79[_0x1bfa85(0xeb)];console['log'](_0x35bd79[_0x1bfa85(0xeb)]);if(typeof _0xf8cbe2==_0x1bfa85(0x101))var _0x45ef66=[_0x35bd79['body'][_0x1bfa85(0xf0)]],_0x11dae6=[_0x35bd79['body'][_0x1bfa85(0xe0)]],_0x4f4489=[_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xf2)]],_0x567b11=[_0x35bd79['body'][_0x1bfa85(0x10d)]],_0x304360=[_0x35bd79[_0x1bfa85(0xeb)]['sales_quantity']],_0x388811=[_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xcf)]],_0x5496ad=[_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xe3)]],_0x2f2567=[_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x10c)]],_0x5b1aaa=[_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x125)]],_0x761058=[_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x108)]],_0x1da89c=[_0x35bd79['body'][_0x1bfa85(0xe2)]];else var _0x45ef66=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xf0)]],_0x11dae6=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xe0)]],_0x4f4489=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xf2)]],_0x567b11=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x10d)]],_0x304360=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xe6)]],_0x388811=[..._0x35bd79['body'][_0x1bfa85(0xcf)]],_0x5496ad=[..._0x35bd79['body'][_0x1bfa85(0xe3)]],_0x2f2567=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x10c)]],_0x5b1aaa=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x125)]],_0x761058=[..._0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x108)]],_0x1da89c=[..._0x35bd79[_0x1bfa85(0xeb)]['floorlevel']];const _0x5c5aaa=_0x45ef66['map'](_0x5d1874=>{return _0x5d1874={'product_name':_0x5d1874};});_0x11dae6[_0x1bfa85(0xd8)]((_0xd8ece7,_0x2abaec)=>{_0x5c5aaa[_0x2abaec]['primary_code']=_0xd8ece7;}),_0x4f4489[_0x1bfa85(0xd8)]((_0x38cd11,_0x15444d)=>{var _0x21333d=_0x1bfa85;_0x5c5aaa[_0x15444d][_0x21333d(0xf2)]=_0x38cd11;}),_0x567b11[_0x1bfa85(0xd8)]((_0x150722,_0x216a69)=>{_0x5c5aaa[_0x216a69]['product_code']=_0x150722;}),_0x304360[_0x1bfa85(0xd8)]((_0x30b5d5,_0x10e829)=>{var _0x32dc26=_0x1bfa85;_0x5c5aaa[_0x10e829][_0x32dc26(0x11a)]=_0x30b5d5;}),_0x388811[_0x1bfa85(0xd8)]((_0x5d6d1d,_0x280ae1)=>{var _0x553252=_0x1bfa85;_0x5c5aaa[_0x280ae1][_0x553252(0x115)]=_0x5d6d1d;}),_0x5496ad[_0x1bfa85(0xd8)]((_0x5ccbf9,_0xcba89)=>{var _0x547d05=_0x1bfa85;_0x5c5aaa[_0xcba89][_0x547d05(0xe3)]=_0x5ccbf9;}),_0x2f2567[_0x1bfa85(0xd8)]((_0x1f8321,_0xc6c7b8)=>{var _0x217362=_0x1bfa85;_0x5c5aaa[_0xc6c7b8][_0x217362(0x10c)]=_0x1f8321;}),_0x5b1aaa[_0x1bfa85(0xd8)]((_0x73ccb3,_0x887647)=>{var _0x2feb1c=_0x1bfa85;_0x5c5aaa[_0x887647][_0x2feb1c(0x125)]=_0x73ccb3;}),_0x761058['forEach']((_0x45a87c,_0x4c84ec)=>{var _0x1919ea=_0x1bfa85;_0x5c5aaa[_0x4c84ec][_0x1919ea(0xd1)]=_0x45a87c;}),_0x1da89c[_0x1bfa85(0xd8)]((_0x4cb244,_0x18c1ea)=>{_0x5c5aaa[_0x18c1ea]['floorlevel']=_0x4cb244;});var _0x257e38=0x0;_0x5c5aaa[_0x1bfa85(0xd8)](_0x12bb23=>{var _0x2b38ad=_0x1bfa85;console['log'](_0x2b38ad(0xef),_0x12bb23),(parseInt(_0x12bb23[_0x2b38ad(0x11a)])<parseInt(_0x12bb23['return_qty'])||parseInt(_0x12bb23['stock'])<parseInt(_0x12bb23[_0x2b38ad(0xe3)])&&parseInt(_0x12bb23[_0x2b38ad(0x11a)])>parseInt(_0x12bb23[_0x2b38ad(0xe3)])||parseInt(_0x12bb23[_0x2b38ad(0xe3)])==0x0)&&_0x257e38++;});if(_0x257e38!=0x0)return _0x35bd79[_0x1bfa85(0x104)]('errors',_0x1bfa85(0xed)),_0x567cfb['redirect'](_0x1bfa85(0xd4));_0x3e564d[_0x1bfa85(0x103)][_0x1bfa85(0xd8)](_0xa8e024=>{var _0x1e19e9=_0x1bfa85;const _0x2beabf=_0x889b30[_0x1e19e9(0x133)][_0x1e19e9(0xd6)](_0x333a98=>{var _0x94a6c9=_0x1e19e9;_0x333a98[_0x94a6c9(0xf0)]==_0xa8e024['product_name']&&_0x333a98[_0x94a6c9(0xe2)]==_0xa8e024[_0x94a6c9(0xe2)]&&_0x333a98[_0x94a6c9(0xd1)]==_0xa8e024[_0x94a6c9(0xd1)]&&_0x333a98['bin']==_0xa8e024[_0x94a6c9(0x125)]&&_0x333a98[_0x94a6c9(0x10c)]==_0xa8e024[_0x94a6c9(0x10c)]&&(_0x333a98[_0x94a6c9(0x105)]=parseInt(_0x333a98[_0x94a6c9(0x105)])+parseInt(_0xa8e024[_0x94a6c9(0xe3)]));});}),console[_0x1bfa85(0xde)](_0x1bfa85(0x126),_0x889b30),await _0x889b30['save'](),_0x3e564d[_0x1bfa85(0x12f)]=_0x551525,_0x3e564d[_0x1bfa85(0x131)]=_0x59aa59,_0x3e564d[_0x1bfa85(0xf9)]=_0x4d243d,_0x3e564d[_0x1bfa85(0xf5)]=_0xc56a20,_0x3e564d[_0x1bfa85(0x103)]=_0x5c5aaa,_0x3e564d[_0x1bfa85(0x124)]=_0x42f322,_0x3e564d[_0x1bfa85(0xf8)]=_0x41542a,_0x3e564d[_0x1bfa85(0xcb)]=_0x36ac56;const _0x51e4d8=await _0x3e564d['save']();console['log'](_0x1bfa85(0x10f),_0x51e4d8);const _0x1f24bb=await c_payment_data[_0x1bfa85(0x107)]({'invoice':_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0x12f)],'reason':'Sale\x20Return'});_0x1f24bb[_0x1bfa85(0xf7)]=_0x35bd79['body'][_0x1bfa85(0xf7)],_0x1f24bb[_0x1bfa85(0xf9)]=_0x35bd79[_0x1bfa85(0xeb)][_0x1bfa85(0xf9)],await _0x1f24bb[_0x1bfa85(0xff)](),_0x35bd79[_0x1bfa85(0x104)](_0x1bfa85(0xe5),_0x1bfa85(0x10a)),_0x567cfb['redirect'](_0x1bfa85(0xf4));}catch(_0x5566e4){console['log'](_0x5566e4),_0x567cfb[_0x1bfa85(0xee)](0xc8)['json']({'message':_0x5566e4['message']});}}),router[a0_0x31afdd(0x12e)](a0_0x31afdd(0x136),auth,async(_0xb21ee8,_0xec7907)=>{var _0x28a87c=a0_0x31afdd;try{const _0xa7f4f3=_0xb21ee8[_0x28a87c(0xe4)]['id'],{invoice:_0x473e49,customer:_0x386dba,payable_to_customer:_0xcd8ee1,paid_amount:_0xc55143}=_0xb21ee8[_0x28a87c(0xeb)],_0x27c92f=await sales_return[_0x28a87c(0x121)](_0xa7f4f3);console['log']('data',_0x27c92f),console[_0x28a87c(0xde)](_0xcd8ee1),console[_0x28a87c(0xde)](_0xc55143);var _0x1120a3=_0xcd8ee1-_0xc55143;console[_0x28a87c(0xde)](_0x28a87c(0x118),_0x1120a3),_0x27c92f['paid_amount']=parseFloat(_0xc55143)+parseFloat(_0x27c92f[_0x28a87c(0xce)]),_0x27c92f[_0x28a87c(0x128)]=_0x1120a3,console[_0x28a87c(0xde)](_0x27c92f);const _0x4a80a8=await _0x27c92f['save']();console[_0x28a87c(0xde)](0x1b207);const _0x5ed503=await c_payment_data[_0x28a87c(0x107)]({'invoice':_0xb21ee8[_0x28a87c(0xeb)][_0x28a87c(0x12f)],'reason':'Sale\x20Return'});console[_0x28a87c(0xde)](_0x28a87c(0x127),_0x5ed503),_0x5ed503[_0x28a87c(0x12b)]=_0x1120a3,await _0x5ed503[_0x28a87c(0xff)]();let _0x3d0217=new Date(),_0x339bb2=('0'+_0x3d0217[_0x28a87c(0x106)]())['slice'](-0x2),_0x201ccc=('0'+(_0x3d0217['getMonth']()+0x1))['slice'](-0x2),_0xa450aa=_0x3d0217[_0x28a87c(0xcd)](),_0x3e978d=_0xa450aa+'-'+_0x201ccc+'-'+_0x339bb2;const _0x4c68ad=new customer_payment({'invoice':_0x473e49,'date':_0xa450aa+'-'+_0x201ccc+'-'+_0x339bb2,'customer':_0x386dba,'reason':_0x28a87c(0x119),'amount':_0xc55143}),_0x5e6c44=await _0x4c68ad['save']();_0xb21ee8['flash']('success',_0x28a87c(0xe1)),_0xec7907[_0x28a87c(0x11c)](_0x28a87c(0xf4));}catch(_0x32dcb3){console['log'](_0x32dcb3);}}),router[a0_0x31afdd(0x102)](a0_0x31afdd(0x10e),auth,async(_0x38b95d,_0x28abd6)=>{var _0x4b9b0c=a0_0x31afdd;try{const {username:_0x2a9b87,email:_0x1bc506,role:_0x2cf2cc}=_0x38b95d[_0x4b9b0c(0x11b)],_0x415013=_0x38b95d[_0x4b9b0c(0x11b)],_0x3ac8c0=await profile['findOne']({'email':_0x415013[_0x4b9b0c(0x12c)]}),_0x3f64bc=await master_shop['find']();console[_0x4b9b0c(0xde)](_0x4b9b0c(0xda),_0x3f64bc);const _0x21160b=_0x38b95d[_0x4b9b0c(0xe4)]['id'],_0x2f3b57=await sales_return[_0x4b9b0c(0x121)](_0x21160b);console[_0x4b9b0c(0xde)](_0x2f3b57);const _0x43bb64=await customer[_0x4b9b0c(0x107)]({'name':_0x2f3b57[_0x4b9b0c(0x131)]});console['log'](_0x43bb64);if(_0x3f64bc[0x0]['language']==_0x4b9b0c(0x112)){var _0x1897c2=users[_0x4b9b0c(0x130)];console['log'](_0x1897c2);}else{if(_0x3f64bc[0x0]['language']=='Hindi')var _0x1897c2=users[_0x4b9b0c(0x100)];else{if(_0x3f64bc[0x0][_0x4b9b0c(0x12d)]=='German')var _0x1897c2=users[_0x4b9b0c(0xdc)];else{if(_0x3f64bc[0x0][_0x4b9b0c(0x12d)]==_0x4b9b0c(0x10b))var _0x1897c2=users['Spanish'];else{if(_0x3f64bc[0x0][_0x4b9b0c(0x12d)]=='French')var _0x1897c2=users[_0x4b9b0c(0xd3)];else{if(_0x3f64bc[0x0][_0x4b9b0c(0x12d)]==_0x4b9b0c(0x114))var _0x1897c2=users['Portuguese'];else{if(_0x3f64bc[0x0][_0x4b9b0c(0x12d)]==_0x4b9b0c(0x132))var _0x1897c2=users[_0x4b9b0c(0x132)];else{if(_0x3f64bc[0x0][_0x4b9b0c(0x12d)]=='Arabic\x20(ae)')var _0x1897c2=users[_0x4b9b0c(0x139)];}}}}}}}_0x28abd6[_0x4b9b0c(0xea)](_0x4b9b0c(0x120),{'success':_0x38b95d[_0x4b9b0c(0x104)]('success'),'errors':_0x38b95d[_0x4b9b0c(0x104)](_0x4b9b0c(0x135)),'role':_0x415013,'profile':_0x3ac8c0,'master_shop':_0x3f64bc,'customers':_0x43bb64,'sales':_0x2f3b57,'language':_0x1897c2});}catch(_0xee5ccc){console['log'](_0xee5ccc);}}),module[a0_0x31afdd(0xfd)]=router;