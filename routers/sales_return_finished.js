function a0_0x179b(){var _0x552f46=['bin','12EBOcuX','render','paid_amount','invoice','21063ZjlmBZ','exports','stocks_QA','483564vKZOIQ','sales_return_finished','sale_qty','return_sale_QA','aggregate','master','product_details','bay','c_payment','getDate','for_categorize','Enabled','errors','user','return_qty_QA','English','product_code','primary_code_QA','types','getMonth','QA\x20Warehouse','floorlevel','$product_details.bin','findOne','body','932862lECEny','Router','suppliers','Spanish','status','Arabic','Hindi','language','new\x20new_data','note','name','$product_details.storage','primary_code','$product_details._id','due_amount','$product_details.product_name','$product_details.secondary_code','$product_details.bay','../middleware/auth','product_name_QA','French','$name','English\x20(US)','252KznYEU','$product_details.rack','return_sale_edit_finished','/invoice/:id','success','redirect','customer','sales_quantity_QA','23364gSUMIA','email','stock','ToWarehouse','3594PGPZVb','slice','58069KuvlVw','amount','old_warehouse_data','post','Arabic\x20(ae)','Portuguese','type','$product_details.product_stock','message','ToRoom','/view/:id','Portuguese\x20(BR)','product_code_QA','find','product_name','$product_details.product_code','German','get','return_qty','back','/sales_return_finished/view','224NFiVGD','map','/sales_return/view','log','return_sale','purchase\x20return\x20successfully','getFullYear','flash','/view','forEach','4460pilTrs','secondary_code_QA','stocks','customer_docs','date','40rOqwey','$product_details.primary_code','Chinese','warehouse_name','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','product_stock','save','findById','1200BJUHVo','secondary_code','Sale\x20Return','params','sales_quantity','Finished\x20Goods','customers'];a0_0x179b=function(){return _0x552f46;};return a0_0x179b();}var a0_0x698940=a0_0x8aa9;(function(_0x5340fa,_0x22d2e2){var _0x4e7aac=a0_0x8aa9,_0x3d9617=_0x5340fa();while(!![]){try{var _0x1cc217=parseInt(_0x4e7aac(0x14f))/0x1+parseInt(_0x4e7aac(0x138))/0x2*(-parseInt(_0x4e7aac(0x112))/0x3)+parseInt(_0x4e7aac(0x106))/0x4*(parseInt(_0x4e7aac(0x133))/0x5)+parseInt(_0x4e7aac(0xef))/0x6+parseInt(_0x4e7aac(0x14c))/0x7*(-parseInt(_0x4e7aac(0x129))/0x8)+-parseInt(_0x4e7aac(0x10e))/0x9*(parseInt(_0x4e7aac(0x140))/0xa)+-parseInt(_0x4e7aac(0x114))/0xb*(-parseInt(_0x4e7aac(0x148))/0xc);if(_0x1cc217===_0x22d2e2)break;else _0x3d9617['push'](_0x3d9617['shift']());}catch(_0x4462e){_0x3d9617['push'](_0x3d9617['shift']());}}}(a0_0x179b,0x448d0));function a0_0x8aa9(_0x524159,_0x12ab42){var _0x179b7e=a0_0x179b();return a0_0x8aa9=function(_0x8aa9fb,_0x2d28e6){_0x8aa9fb=_0x8aa9fb-0xe7;var _0x47b206=_0x179b7e[_0x8aa9fb];return _0x47b206;},a0_0x8aa9(_0x524159,_0x12ab42);}const express=require('express'),app=express(),router=express[a0_0x698940(0xf0)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data,sales_return_finished}=require('../models/all_models'),auth=require(a0_0x698940(0x101)),users=require('../public/language/languages.json');router[a0_0x698940(0x125)](a0_0x698940(0x131),auth,async(_0x4f9da7,_0x56c426)=>{var _0x536f76=a0_0x698940;try{const {username:_0x131c2f,email:_0x4a83b0,role:_0x505bda}=_0x4f9da7['user'],_0x28dcc8=_0x4f9da7['user'],_0x1219e0=await profile[_0x536f76(0xed)]({'email':_0x28dcc8['email']}),_0x1fbdb2=await master_shop['find'](),_0x25a650=await sales_return_finished[_0x536f76(0x153)]([{'$lookup':{'from':_0x536f76(0x146),'localField':'customer','foreignField':_0x536f76(0xf9),'as':_0x536f76(0x136)}},{'$unwind':'$customer_docs'}]);if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0x105)){var _0x24f5e1=users[_0x536f76(0x15e)];console[_0x536f76(0x12c)](_0x24f5e1);}else{if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0xf5))var _0x24f5e1=users[_0x536f76(0xf5)];else{if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0x124))var _0x24f5e1=users['German'];else{if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0xf2))var _0x24f5e1=users[_0x536f76(0xf2)];else{if(_0x1fbdb2[0x0]['language']==_0x536f76(0x103))var _0x24f5e1=users[_0x536f76(0x103)];else{if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0x11f))var _0x24f5e1=users[_0x536f76(0x119)];else{if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0x13a))var _0x24f5e1=users['Chinese'];else{if(_0x1fbdb2[0x0][_0x536f76(0xf6)]==_0x536f76(0x118))var _0x24f5e1=users['Arabic'];}}}}}}}_0x56c426[_0x536f76(0x149)](_0x536f76(0x150),{'success':_0x4f9da7[_0x536f76(0x130)](_0x536f76(0x10a)),'errors':_0x4f9da7[_0x536f76(0x130)](_0x536f76(0x15b)),'role':_0x28dcc8,'profile':_0x1219e0,'master_shop':_0x1fbdb2,'user':_0x25a650,'language':_0x24f5e1});}catch(_0x46dfd2){console[_0x536f76(0x12c)](_0x46dfd2);}}),router['get'](a0_0x698940(0x11e),auth,async(_0x2ffd01,_0x2af97f)=>{var _0x162d01=a0_0x698940;try{const {username:_0x599d7c,email:_0x37bd34,role:_0x47a24e}=_0x2ffd01[_0x162d01(0x15c)],_0x5a51b1=_0x2ffd01['user'],_0x1adc40=await profile[_0x162d01(0xed)]({'email':_0x5a51b1[_0x162d01(0x10f)]}),_0x2dcbd0=await master_shop[_0x162d01(0x121)]();console[_0x162d01(0x12c)]('master',_0x2dcbd0);const _0x278713=_0x2ffd01[_0x162d01(0x143)]['id'];console['log'](_0x278713);var _0x62e60=['Return\x20Rooms'];const _0x2cc14d=await sales_return_finished[_0x162d01(0x13f)](_0x278713),_0x2b858e=await warehouse['aggregate']([{'$match':{'name':_0x2cc14d[_0x162d01(0x111)],'room':_0x2cc14d['ToRoom']}},{'$unwind':'$product_details'},{'$group':{'_id':_0x162d01(0xfc),'name':{'$first':_0x162d01(0xfe)},'product_stock':{'$first':_0x162d01(0x11b)},'bay':{'$first':_0x162d01(0x100)},'bin':{'$first':_0x162d01(0xec)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x162d01(0x139)},'secondary_code':{'$first':_0x162d01(0xff)},'product_code':{'$first':_0x162d01(0x123)},'storage':{'$first':_0x162d01(0xfa)},'rack':{'$first':_0x162d01(0x107)}}}]);console[_0x162d01(0x12c)](_0x2b858e);const _0x92ee9a=await warehouse[_0x162d01(0x153)]([{'$match':{'status':'Enabled','warehouse_category':_0x162d01(0x145)}},{'$group':{'_id':'$name','name':{'$first':_0x162d01(0x104)}}},{'$sort':{'name':0x1}}]),_0x3db8bf=await warehouse['aggregate']([{'$match':{'status':_0x162d01(0x15a),'name':_0x162d01(0xea)}},{'$group':{'_id':_0x162d01(0x104),'name':{'$first':_0x162d01(0x104)}}},{'$sort':{'name':0x1}}]),_0x48eab2=await product[_0x162d01(0x121)]({});if(_0x2dcbd0[0x0][_0x162d01(0xf6)]==_0x162d01(0x105)){var _0x2440c7=users['English'];console['log'](_0x2440c7);}else{if(_0x2dcbd0[0x0]['language']==_0x162d01(0xf5))var _0x2440c7=users[_0x162d01(0xf5)];else{if(_0x2dcbd0[0x0][_0x162d01(0xf6)]=='German')var _0x2440c7=users[_0x162d01(0x124)];else{if(_0x2dcbd0[0x0][_0x162d01(0xf6)]==_0x162d01(0xf2))var _0x2440c7=users[_0x162d01(0xf2)];else{if(_0x2dcbd0[0x0]['language']==_0x162d01(0x103))var _0x2440c7=users[_0x162d01(0x103)];else{if(_0x2dcbd0[0x0][_0x162d01(0xf6)]=='Portuguese\x20(BR)')var _0x2440c7=users['Portuguese'];else{if(_0x2dcbd0[0x0]['language']==_0x162d01(0x13a))var _0x2440c7=users[_0x162d01(0x13a)];else{if(_0x2dcbd0[0x0][_0x162d01(0xf6)]==_0x162d01(0x118))var _0x2440c7=users[_0x162d01(0xf4)];}}}}}}}_0x2af97f[_0x162d01(0x149)](_0x162d01(0x108),{'success':_0x2ffd01[_0x162d01(0x130)](_0x162d01(0x10a)),'errors':_0x2ffd01[_0x162d01(0x130)](_0x162d01(0x15b)),'role':_0x5a51b1,'profile':_0x1adc40,'master_shop':_0x2dcbd0,'user':_0x2cc14d,'stock':_0x2b858e,'unit':_0x48eab2,'language':_0x2440c7,'warehouses':_0x92ee9a,'rooms':_0x62e60,'warehouse_QA':_0x3db8bf});}catch(_0x2464bf){console[_0x162d01(0x12c)](_0x2464bf);}}),router[a0_0x698940(0x117)](a0_0x698940(0x11e),auth,async(_0x391787,_0xbb3875)=>{var _0x3631f1=a0_0x698940;if(_0x391787[_0x3631f1(0xee)][_0x3631f1(0x159)]=='QA')try{const _0x3ba457=_0x391787['params']['id'],_0x1938b6=await sales_return[_0x3631f1(0xed)]({'invoice':_0x391787[_0x3631f1(0xee)][_0x3631f1(0x14b)]}),_0x522b6d=await warehouse['findOne']({'name':_0x1938b6['ToWarehouse'],'room':_0x1938b6[_0x3631f1(0x11d)]}),{invoice:_0x4e0ae6,customer:_0x3707ce,date:_0x560f4f,warehouse_name:_0x800f28,product_name:_0x10af4d,primary_code:_0xace5f2,secondary_code:_0xeb550b,product_code:_0x463a96,sales_quantity:_0x4347ca,stocks:_0x1b127e,return_qty:_0x47c0ec,note:_0x5b2df6,to_warehouse_name_QA:_0x4da13f,to_Room_name_QA:_0x102ee3}=_0x391787['body'];if(typeof product_name_QA=='string')var _0x101267=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x102)]],_0x5e5460=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0xe7)]],_0x178f2d=[_0x391787['body']['secondary_code_QA']],_0x377273=[_0x391787[_0x3631f1(0xee)]['product_code_QA']],_0x2332a7=[_0x391787[_0x3631f1(0xee)]['sales_quantity_QA']],_0x1af204=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x14e)]],_0x27a7cf=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x15d)]];else var _0x101267=[..._0x391787[_0x3631f1(0xee)]['product_name_QA']],_0x5e5460=[..._0x391787[_0x3631f1(0xee)]['primary_code_QA']],_0x178f2d=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x134)]],_0x377273=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x120)]],_0x2332a7=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x10d)]],_0x1af204=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x14e)]],_0x27a7cf=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x15d)]];const _0x99b405=_0x101267[_0x3631f1(0x12a)](_0x1a6996=>{return _0x1a6996={'product_name':_0x1a6996};});_0x5e5460['forEach']((_0x3a87c8,_0x5658fb)=>{_0x99b405[_0x5658fb]['primary_code']=_0x3a87c8;}),_0x178f2d['forEach']((_0x1ab44d,_0x2f4fe2)=>{_0x99b405[_0x2f4fe2]['secondary_code']=_0x1ab44d;}),_0x377273['forEach']((_0x176c37,_0x2a12e6)=>{var _0x301c53=_0x3631f1;_0x99b405[_0x2a12e6][_0x301c53(0x15f)]=_0x176c37;}),_0x2332a7[_0x3631f1(0x132)]((_0x2fd21a,_0x4f6a8b)=>{var _0x41874b=_0x3631f1;_0x99b405[_0x4f6a8b][_0x41874b(0x151)]=_0x2fd21a;}),_0x1af204[_0x3631f1(0x132)]((_0x2ec987,_0x295c06)=>{var _0x45e955=_0x3631f1;_0x99b405[_0x295c06][_0x45e955(0x110)]=_0x2ec987;}),_0x27a7cf[_0x3631f1(0x132)]((_0x5ab80a,_0x328397)=>{var _0x279b6b=_0x3631f1;_0x99b405[_0x328397][_0x279b6b(0x126)]=_0x5ab80a;}),_0x1938b6[_0x3631f1(0x152)]['forEach'](_0xe471cb=>{var _0x5ac1cc=_0x3631f1;const _0x5873db=_0x522b6d['product_details'][_0x5ac1cc(0x12a)](_0x5381b3=>{var _0x5aca36=_0x5ac1cc;_0x5381b3['product_name']==_0xe471cb[_0x5aca36(0x122)]&&(_0x5381b3[_0x5aca36(0x13d)]=parseInt(_0x5381b3[_0x5aca36(0x13d)])+parseInt(_0xe471cb[_0x5aca36(0x126)]));});}),await _0x522b6d[_0x3631f1(0x13e)](),_0x1938b6[_0x3631f1(0x14b)]=_0x4e0ae6,_0x1938b6[_0x3631f1(0x10c)]=_0x3707ce,_0x1938b6[_0x3631f1(0x137)]=_0x560f4f,_0x1938b6['warehouse_name']=_0x800f28,_0x1938b6['return_sale_QA']=_0x99b405,_0x1938b6[_0x3631f1(0xf8)]=_0x5b2df6,_0x1938b6[_0x3631f1(0x111)]=_0x4da13f,_0x1938b6[_0x3631f1(0x11d)]=_0x102ee3;const _0x3c641a=await _0x1938b6[_0x3631f1(0x13e)](),_0x43d4b5=await c_payment_data[_0x3631f1(0xed)]({'invoice':_0x391787[_0x3631f1(0xee)][_0x3631f1(0x14b)],'reason':_0x3631f1(0x142)});_0x43d4b5[_0x3631f1(0xf1)]=_0x391787[_0x3631f1(0xee)][_0x3631f1(0xf1)],_0x43d4b5[_0x3631f1(0x137)]=_0x391787[_0x3631f1(0xee)][_0x3631f1(0x137)],await _0x43d4b5[_0x3631f1(0x13e)](),_0x391787[_0x3631f1(0x130)](_0x3631f1(0x10a),'purchase\x20return\x20successfully'),_0xbb3875[_0x3631f1(0x10b)](_0x3631f1(0x128));}catch(_0x582937){console[_0x3631f1(0x12c)](_0x582937),_0xbb3875[_0x3631f1(0xf3)](0xc8)['json']({'message':_0x582937[_0x3631f1(0x11c)]});}else try{const _0x52db63=_0x391787['params']['id'];console[_0x3631f1(0x12c)](_0x52db63);const _0x10e8f2=await sales_return[_0x3631f1(0xed)]({'invoice':_0x391787[_0x3631f1(0xee)][_0x3631f1(0x14b)]});console['log']('old_data',_0x10e8f2);const _0xb8afbd=await warehouse[_0x3631f1(0xed)]({'name':_0x10e8f2[_0x3631f1(0x111)],'room':_0x10e8f2[_0x3631f1(0x11d)]});console[_0x3631f1(0x12c)](_0x3631f1(0x116),_0xb8afbd);const {invoice:_0x522c63,customer:_0x33e0f2,date:_0x55acdf,warehouse_name:_0x1abe32,product_name:_0x6cc3d2,primary_code:_0x35a1ff,secondary_code:_0x1339c1,product_code:_0x26a166,sales_quantity:_0x111465,stocks:_0x37ebbf,return_qty:_0x4e8c6c,note:_0x1e55c6,to_warehouse_name:_0x5f0106,to_Room_name:_0x4dc763}=_0x391787[_0x3631f1(0xee)];console[_0x3631f1(0x12c)](_0x391787[_0x3631f1(0xee)]);if(typeof _0x6cc3d2=='string')var _0x101267=[_0x391787['body'][_0x3631f1(0x122)]],_0x5e5460=[_0x391787[_0x3631f1(0xee)]['primary_code']],_0x178f2d=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x141)]],_0x377273=[_0x391787['body'][_0x3631f1(0x15f)]],_0x2332a7=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x144)]],_0x1af204=[_0x391787['body'][_0x3631f1(0x135)]],_0x27a7cf=[_0x391787[_0x3631f1(0xee)]['return_qty']],_0x5c43a4=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x156)]],_0x44391f=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0x147)]],_0x46d95b=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0xe8)]],_0x2cd09a=[_0x391787[_0x3631f1(0xee)][_0x3631f1(0xeb)]];else var _0x101267=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x122)]],_0x5e5460=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0xfb)]],_0x178f2d=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x141)]],_0x377273=[..._0x391787[_0x3631f1(0xee)]['product_code']],_0x2332a7=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x144)]],_0x1af204=[..._0x391787['body']['stocks']],_0x27a7cf=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x126)]],_0x5c43a4=[..._0x391787['body'][_0x3631f1(0x156)]],_0x44391f=[..._0x391787[_0x3631f1(0xee)][_0x3631f1(0x147)]],_0x46d95b=[..._0x391787['body'][_0x3631f1(0xe8)]],_0x2cd09a=[..._0x391787[_0x3631f1(0xee)]['floorlevel']];const _0x52d49c=_0x101267[_0x3631f1(0x12a)](_0x42f090=>{return _0x42f090={'product_name':_0x42f090};});_0x5e5460[_0x3631f1(0x132)]((_0xffc3f9,_0x4095a8)=>{var _0x2be147=_0x3631f1;_0x52d49c[_0x4095a8][_0x2be147(0xfb)]=_0xffc3f9;}),_0x178f2d['forEach']((_0x46e2c8,_0x47817d)=>{var _0x163661=_0x3631f1;_0x52d49c[_0x47817d][_0x163661(0x141)]=_0x46e2c8;}),_0x377273[_0x3631f1(0x132)]((_0x356ed5,_0x30d80b)=>{var _0x35eb8f=_0x3631f1;_0x52d49c[_0x30d80b][_0x35eb8f(0x15f)]=_0x356ed5;}),_0x2332a7[_0x3631f1(0x132)]((_0x1cfbfe,_0x5061e5)=>{var _0x13a333=_0x3631f1;_0x52d49c[_0x5061e5][_0x13a333(0x151)]=_0x1cfbfe;}),_0x1af204[_0x3631f1(0x132)]((_0x2bdceb,_0x372d08)=>{var _0x1845ef=_0x3631f1;_0x52d49c[_0x372d08][_0x1845ef(0x110)]=_0x2bdceb;}),_0x27a7cf[_0x3631f1(0x132)]((_0x58c91b,_0x29b517)=>{var _0x208f62=_0x3631f1;_0x52d49c[_0x29b517][_0x208f62(0x126)]=_0x58c91b;}),_0x5c43a4[_0x3631f1(0x132)]((_0x5ef46d,_0x38866e)=>{_0x52d49c[_0x38866e]['bay']=_0x5ef46d;}),_0x44391f[_0x3631f1(0x132)]((_0x2c22b5,_0x8733c3)=>{var _0x35459d=_0x3631f1;_0x52d49c[_0x8733c3][_0x35459d(0x147)]=_0x2c22b5;}),_0x46d95b[_0x3631f1(0x132)]((_0x34a1c4,_0x563a22)=>{var _0x6641bc=_0x3631f1;_0x52d49c[_0x563a22][_0x6641bc(0x11a)]=_0x34a1c4;}),_0x2cd09a[_0x3631f1(0x132)]((_0x38a8e5,_0x3d5fa9)=>{_0x52d49c[_0x3d5fa9]['floorlevel']=_0x38a8e5;});var _0x4fea7a=0x0;_0x52d49c[_0x3631f1(0x132)](_0x1686a7=>{var _0xc8e5f5=_0x3631f1;console[_0xc8e5f5(0x12c)]('foreach\x20newproduct',_0x1686a7),(parseInt(_0x1686a7['sale_qty'])<parseInt(_0x1686a7['return_qty'])||parseInt(_0x1686a7[_0xc8e5f5(0x110)])<parseInt(_0x1686a7[_0xc8e5f5(0x126)])&&parseInt(_0x1686a7[_0xc8e5f5(0x151)])>parseInt(_0x1686a7[_0xc8e5f5(0x126)])||parseInt(_0x1686a7[_0xc8e5f5(0x126)])==0x0)&&_0x4fea7a++;});if(_0x4fea7a!=0x0)return _0x391787['flash'](_0x3631f1(0x15b),_0x3631f1(0x13c)),_0xbb3875['redirect'](_0x3631f1(0x127));_0x10e8f2[_0x3631f1(0x12d)][_0x3631f1(0x132)](_0x315822=>{var _0x54b2e6=_0x3631f1;const _0x4414b8=_0xb8afbd[_0x54b2e6(0x155)][_0x54b2e6(0x12a)](_0x41db82=>{var _0x275d1f=_0x54b2e6;_0x41db82[_0x275d1f(0x122)]==_0x315822['product_name']&&_0x41db82[_0x275d1f(0xeb)]==_0x315822[_0x275d1f(0xeb)]&&_0x41db82['type']==_0x315822['type']&&_0x41db82[_0x275d1f(0x147)]==_0x315822['bin']&&_0x41db82[_0x275d1f(0x156)]==_0x315822[_0x275d1f(0x156)]&&(_0x41db82[_0x275d1f(0x13d)]=parseInt(_0x41db82[_0x275d1f(0x13d)])+parseInt(_0x315822[_0x275d1f(0x126)]));});}),console[_0x3631f1(0x12c)](_0x3631f1(0x116),_0xb8afbd),await _0xb8afbd[_0x3631f1(0x13e)](),_0x10e8f2[_0x3631f1(0x14b)]=_0x522c63,_0x10e8f2['customer']=_0x33e0f2,_0x10e8f2['date']=_0x55acdf,_0x10e8f2[_0x3631f1(0x13b)]=_0x1abe32,_0x10e8f2[_0x3631f1(0x12d)]=_0x52d49c,_0x10e8f2['note']=_0x1e55c6,_0x10e8f2[_0x3631f1(0x111)]=_0x5f0106,_0x10e8f2[_0x3631f1(0x11d)]=_0x4dc763;const _0x1b6809=await _0x10e8f2[_0x3631f1(0x13e)]();console['log'](_0x3631f1(0xf7),_0x1b6809);const _0x4af68d=await c_payment_data[_0x3631f1(0xed)]({'invoice':_0x391787[_0x3631f1(0xee)]['invoice'],'reason':_0x3631f1(0x142)});_0x4af68d[_0x3631f1(0xf1)]=_0x391787[_0x3631f1(0xee)][_0x3631f1(0xf1)],_0x4af68d[_0x3631f1(0x137)]=_0x391787['body'][_0x3631f1(0x137)],await _0x4af68d[_0x3631f1(0x13e)](),_0x391787[_0x3631f1(0x130)](_0x3631f1(0x10a),_0x3631f1(0x12e)),_0xbb3875[_0x3631f1(0x10b)](_0x3631f1(0x12b));}catch(_0x844ee0){console['log'](_0x844ee0),_0xbb3875[_0x3631f1(0xf3)](0xc8)['json']({'message':_0x844ee0[_0x3631f1(0x11c)]});}}),router['post']('/give_payment/:id',auth,async(_0x1673e0,_0xb30200)=>{var _0x4b3151=a0_0x698940;try{const _0x384ac7=_0x1673e0['params']['id'],{invoice:_0x51df0e,customer:_0x53ed87,payable_to_customer:_0x19c5ce,paid_amount:_0x546110}=_0x1673e0[_0x4b3151(0xee)],_0x26a807=await sales_return['findById'](_0x384ac7);console['log']('data',_0x26a807),console['log'](_0x19c5ce),console[_0x4b3151(0x12c)](_0x546110);var _0x4ec26c=_0x19c5ce-_0x546110;console[_0x4b3151(0x12c)]('subtract',_0x4ec26c),_0x26a807[_0x4b3151(0x14a)]=parseFloat(_0x546110)+parseFloat(_0x26a807[_0x4b3151(0x14a)]),_0x26a807[_0x4b3151(0xfd)]=_0x4ec26c,console['log'](_0x26a807);const _0x3d7811=await _0x26a807['save']();console['log'](0x1b207);const _0x28560a=await c_payment_data[_0x4b3151(0xed)]({'invoice':_0x1673e0[_0x4b3151(0xee)]['invoice'],'reason':'Sale\x20Return'});console[_0x4b3151(0x12c)](_0x4b3151(0x157),_0x28560a),_0x28560a[_0x4b3151(0x115)]=_0x4ec26c,await _0x28560a[_0x4b3151(0x13e)]();let _0xd10e06=new Date(),_0x59ac3a=('0'+_0xd10e06[_0x4b3151(0x158)]())[_0x4b3151(0x113)](-0x2),_0x56378d=('0'+(_0xd10e06[_0x4b3151(0xe9)]()+0x1))[_0x4b3151(0x113)](-0x2),_0x5b7ea9=_0xd10e06[_0x4b3151(0x12f)](),_0x28e4b3=_0x5b7ea9+'-'+_0x56378d+'-'+_0x59ac3a;const _0x126350=new customer_payment({'invoice':_0x51df0e,'date':_0x5b7ea9+'-'+_0x56378d+'-'+_0x59ac3a,'customer':_0x53ed87,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x546110}),_0x256298=await _0x126350[_0x4b3151(0x13e)]();_0x1673e0['flash']('success','payment\x20successfull'),_0xb30200[_0x4b3151(0x10b)](_0x4b3151(0x12b));}catch(_0x3fd517){console[_0x4b3151(0x12c)](_0x3fd517);}}),router[a0_0x698940(0x125)](a0_0x698940(0x109),auth,async(_0xee3e18,_0x157fd6)=>{var _0x47372e=a0_0x698940;try{const {username:_0x2dc7da,email:_0xdd580b,role:_0x415875}=_0xee3e18['user'],_0x55004b=_0xee3e18[_0x47372e(0x15c)],_0x125521=await profile[_0x47372e(0xed)]({'email':_0x55004b['email']}),_0x14d076=await master_shop[_0x47372e(0x121)]();console[_0x47372e(0x12c)](_0x47372e(0x154),_0x14d076);const _0x5a2ed4=_0xee3e18[_0x47372e(0x143)]['id'],_0x1fcaaa=await sales_return[_0x47372e(0x13f)](_0x5a2ed4);console[_0x47372e(0x12c)](_0x1fcaaa);const _0x16bd8c=await customer[_0x47372e(0xed)]({'name':_0x1fcaaa[_0x47372e(0x10c)]});console[_0x47372e(0x12c)](_0x16bd8c);if(_0x14d076[0x0][_0x47372e(0xf6)]==_0x47372e(0x105)){var _0x58d3b2=users[_0x47372e(0x15e)];console['log'](_0x58d3b2);}else{if(_0x14d076[0x0][_0x47372e(0xf6)]==_0x47372e(0xf5))var _0x58d3b2=users[_0x47372e(0xf5)];else{if(_0x14d076[0x0][_0x47372e(0xf6)]==_0x47372e(0x124))var _0x58d3b2=users['German'];else{if(_0x14d076[0x0][_0x47372e(0xf6)]==_0x47372e(0xf2))var _0x58d3b2=users[_0x47372e(0xf2)];else{if(_0x14d076[0x0][_0x47372e(0xf6)]=='French')var _0x58d3b2=users[_0x47372e(0x103)];else{if(_0x14d076[0x0][_0x47372e(0xf6)]=='Portuguese\x20(BR)')var _0x58d3b2=users[_0x47372e(0x119)];else{if(_0x14d076[0x0][_0x47372e(0xf6)]==_0x47372e(0x13a))var _0x58d3b2=users[_0x47372e(0x13a)];else{if(_0x14d076[0x0][_0x47372e(0xf6)]=='Arabic\x20(ae)')var _0x58d3b2=users[_0x47372e(0xf4)];}}}}}}}_0x157fd6['render']('sales_return_invoice',{'success':_0xee3e18[_0x47372e(0x130)](_0x47372e(0x10a)),'errors':_0xee3e18[_0x47372e(0x130)](_0x47372e(0x15b)),'role':_0x55004b,'profile':_0x125521,'master_shop':_0x14d076,'customers':_0x16bd8c,'sales':_0x1fcaaa,'language':_0x58d3b2});}catch(_0x3bc162){console[_0x47372e(0x12c)](_0x3bc162);}}),module[a0_0x698940(0x14d)]=router;