const a0_0x47de6f=a0_0x1b80;(function(_0x105c85,_0x499c59){const _0xa1e00d=a0_0x1b80,_0x1a41ea=_0x105c85();while(!![]){try{const _0x140b31=-parseInt(_0xa1e00d(0x1c0))/0x1*(parseInt(_0xa1e00d(0x1a2))/0x2)+parseInt(_0xa1e00d(0x171))/0x3*(parseInt(_0xa1e00d(0x17c))/0x4)+parseInt(_0xa1e00d(0x1b2))/0x5+-parseInt(_0xa1e00d(0x177))/0x6*(parseInt(_0xa1e00d(0x19d))/0x7)+parseInt(_0xa1e00d(0x1a4))/0x8+parseInt(_0xa1e00d(0x1bb))/0x9*(-parseInt(_0xa1e00d(0x18e))/0xa)+parseInt(_0xa1e00d(0x1b9))/0xb;if(_0x140b31===_0x499c59)break;else _0x1a41ea['push'](_0x1a41ea['shift']());}catch(_0x190099){_0x1a41ea['push'](_0x1a41ea['shift']());}}}(a0_0x364d,0x50d39));const express=require(a0_0x47de6f(0x1d6)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require(a0_0x47de6f(0x1dc)),auth=require(a0_0x47de6f(0x18c)),users=require(a0_0x47de6f(0x1c3));function a0_0x1b80(_0x9c48b5,_0x139857){const _0x364dc9=a0_0x364d();return a0_0x1b80=function(_0x1b8025,_0x1a748f){_0x1b8025=_0x1b8025-0x16f;let _0x16d49b=_0x364dc9[_0x1b8025];return _0x16d49b;},a0_0x1b80(_0x9c48b5,_0x139857);}function a0_0x364d(){const _0x256e7f=['level','$product_details.secondary_code','$return_product.product_name','Chinese','warehouse_name','findOne','$product_details.product_code','$product_details.type','due_amount','$product_details.floorlevel','flash','get','$warehouse_name','/purchases_return/view','to_warehouse_name','success','express','payment\x20successfull','Received\x20For\x20Purchase\x20Return','$due_amount','$product_details.storage','save','../models/all_models','body','/invoice/:id','$_id','purchase_quantity','product_stock','$product_details.bay','redirect','getFullYear','slice','Arabic\x20(ae)','back','findById','27OWGEaK','product_name','return_product','stock_quantity','$product_details.rack','getDate','966XJttCs','/receive_payment/:id','return_purchase_invoice','master','primary_code_hide','281620MRZdeI','$supplier_docs.mobile','/purchases_return_finished/view','purchases_return_finished','received','to_Room_name','forEach','Purchase\x20Return','aggregate','German','stock_data','$product_details','return_purchase_edit_finished','suppliers','$supplier_docs.address','Portuguese','../middleware/auth','user','1340kNhdpZ','Return\x20Goods','params','to_room','errors','invoice','Portuguese\x20(BR)','date','string','$name','Spanish','product_code_hide','$invoice','$receivable','$suppliers','23191JUDAgp','English\x20(US)','amount','product_details','$supplier_docs','2cGFeHB','$supplier_docs.email','4054472aEvErw','stocks','exports','return_qty','/view/:id','post','Finished\x20Goods','log','render','bay','French','purchase\x20return\x20successfully','email','$product_details.product_name','1884730ttAmUm','note','secondary_code_hide','getMonth','find','$return_product.price','room','3152369lsDinw','English','39042tdlQRX','Arabic','product_code','secondary_code','Enabled','358229ciWZmJ','language','supplier_docs','../public/language/languages.json','status','Hindi'];a0_0x364d=function(){return _0x256e7f;};return a0_0x364d();}router[a0_0x47de6f(0x1d1)]('/view',auth,async(_0x5adf8d,_0x47fcac)=>{const _0x4eb644=a0_0x47de6f;try{const {username:_0x22214e,email:_0x16752e,role:_0x142159}=_0x5adf8d['user'],_0x7b0313=_0x5adf8d[_0x4eb644(0x18d)],_0x45bca6=await profile['findOne']({'email':_0x7b0313[_0x4eb644(0x1b0)]}),_0x59b8f6=await master_shop['find']();console[_0x4eb644(0x1ab)](_0x4eb644(0x17a),_0x59b8f6);const _0x1c6e83=await purchases_return_finished[_0x4eb644(0x184)]([{'$lookup':{'from':_0x4eb644(0x189),'localField':_0x4eb644(0x189),'foreignField':'name','as':_0x4eb644(0x1c2)}},{'$unwind':'$return_product'},{'$unwind':_0x4eb644(0x1a1)},{'$group':{'_id':_0x4eb644(0x1df),'invoice':{'$first':_0x4eb644(0x19a)},'date':{'$first':'$date'},'suppliers':{'$first':_0x4eb644(0x19c)},'warehouse_name':{'$first':_0x4eb644(0x1d2)},'product_name':{'$first':_0x4eb644(0x1c8)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':_0x4eb644(0x1b7)},'total':{'$sum':'$return_product.total'},'note':{'$first':'$note'},'total_amount':{'$first':'$total_amount'},'discount':{'$first':'$discount'},'receivable':{'$first':_0x4eb644(0x19b)},'received':{'$first':'$received'},'due_amount':{'$first':_0x4eb644(0x1d9)},'mobile':{'$first':_0x4eb644(0x17d)},'email':{'$first':_0x4eb644(0x1a3)},'address':{'$first':_0x4eb644(0x18a)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console[_0x4eb644(0x1ab)](_0x1c6e83);if(_0x59b8f6[0x0][_0x4eb644(0x1c1)]==_0x4eb644(0x19e)){var _0x4368b8=users['English'];console[_0x4eb644(0x1ab)](_0x4368b8);}else{if(_0x59b8f6[0x0][_0x4eb644(0x1c1)]==_0x4eb644(0x1c5))var _0x4368b8=users['Hindi'];else{if(_0x59b8f6[0x0][_0x4eb644(0x1c1)]=='German')var _0x4368b8=users[_0x4eb644(0x185)];else{if(_0x59b8f6[0x0]['language']==_0x4eb644(0x198))var _0x4368b8=users[_0x4eb644(0x198)];else{if(_0x59b8f6[0x0]['language']==_0x4eb644(0x1ae))var _0x4368b8=users[_0x4eb644(0x1ae)];else{if(_0x59b8f6[0x0][_0x4eb644(0x1c1)]==_0x4eb644(0x194))var _0x4368b8=users[_0x4eb644(0x18b)];else{if(_0x59b8f6[0x0][_0x4eb644(0x1c1)]=='Chinese')var _0x4368b8=users[_0x4eb644(0x1c9)];else{if(_0x59b8f6[0x0]['language']==_0x4eb644(0x1e6))var _0x4368b8=users[_0x4eb644(0x1bc)];}}}}}}}_0x47fcac[_0x4eb644(0x1ac)](_0x4eb644(0x17f),{'success':_0x5adf8d[_0x4eb644(0x1d0)]('success'),'errors':_0x5adf8d[_0x4eb644(0x1d0)](_0x4eb644(0x192)),'role':_0x7b0313,'profile':_0x45bca6,'master_shop':_0x59b8f6,'user':_0x1c6e83,'language':_0x4368b8});}catch(_0x4eff76){console['log'](_0x4eff76);}}),router['get'](a0_0x47de6f(0x1a8),auth,async(_0x29123c,_0x2a466b)=>{const _0x367844=a0_0x47de6f;try{const {username:_0x398a6c,email:_0x34d2e8,role:_0x9dcf6}=_0x29123c[_0x367844(0x18d)],_0x335d34=_0x29123c[_0x367844(0x18d)],_0xa84870=await profile['findOne']({'email':_0x335d34[_0x367844(0x1b0)]}),_0x471ddf=await product[_0x367844(0x1b6)]({}),_0x37b8d7=await master_shop[_0x367844(0x1b6)](),_0x4a88f4=_0x29123c[_0x367844(0x190)]['id'],_0x35d776=await purchases_return_finished[_0x367844(0x170)](_0x4a88f4),_0x5f1805=await warehouse[_0x367844(0x184)]([{'$match':{'name':_0x35d776[_0x367844(0x1ca)],'room':_0x35d776[_0x367844(0x1b8)],'warehouse_category':_0x367844(0x1aa)}},{'$unwind':_0x367844(0x187)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x367844(0x1b1)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x367844(0x1e2)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x367844(0x1cd)},'floorlevel':{'$first':_0x367844(0x1cf)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x367844(0x1c7)},'product_code':{'$first':_0x367844(0x1cc)},'storage':{'$first':_0x367844(0x1da)},'rack':{'$first':_0x367844(0x175)}}}]);warehouse_data=await warehouse[_0x367844(0x184)]([{'$match':{'status':_0x367844(0x1bf),'name':_0x367844(0x18f),'warehouse_category':_0x367844(0x1aa)}},{'$group':{'_id':_0x367844(0x197),'name':{'$first':_0x367844(0x197)}}},{'$sort':{'name':0x1}}]),console['log'](_0x367844(0x186),_0x5f1805);if(_0x37b8d7[0x0]['language']==_0x367844(0x19e)){var _0x4a009f=users[_0x367844(0x1ba)];console[_0x367844(0x1ab)](_0x4a009f);}else{if(_0x37b8d7[0x0][_0x367844(0x1c1)]==_0x367844(0x1c5))var _0x4a009f=users[_0x367844(0x1c5)];else{if(_0x37b8d7[0x0]['language']==_0x367844(0x185))var _0x4a009f=users['German'];else{if(_0x37b8d7[0x0]['language']==_0x367844(0x198))var _0x4a009f=users[_0x367844(0x198)];else{if(_0x37b8d7[0x0][_0x367844(0x1c1)]==_0x367844(0x1ae))var _0x4a009f=users[_0x367844(0x1ae)];else{if(_0x37b8d7[0x0][_0x367844(0x1c1)]=='Portuguese\x20(BR)')var _0x4a009f=users[_0x367844(0x18b)];else{if(_0x37b8d7[0x0][_0x367844(0x1c1)]==_0x367844(0x1c9))var _0x4a009f=users['Chinese'];else{if(_0x37b8d7[0x0][_0x367844(0x1c1)]==_0x367844(0x1e6))var _0x4a009f=users[_0x367844(0x1bc)];}}}}}}}_0x2a466b[_0x367844(0x1ac)](_0x367844(0x188),{'success':_0x29123c[_0x367844(0x1d0)]('success'),'errors':_0x29123c[_0x367844(0x1d0)](_0x367844(0x192)),'role':_0x335d34,'master_shop':_0x37b8d7,'profile':_0xa84870,'user':_0x35d776,'stock':_0x5f1805,'product':_0x471ddf,'language':_0x4a009f,'warehouse':warehouse_data});}catch(_0x1e85ad){console[_0x367844(0x1ab)](_0x1e85ad);}}),router['post'](a0_0x47de6f(0x1a8),auth,async(_0x214121,_0x1e34bc)=>{const _0x3b4dac=a0_0x47de6f;try{const _0x52d280=_0x214121['params']['id'],_0x4de993=await purchases_return_finished['findOne']({'invoice':_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x193)]}),_0x3e560a=await warehouse['findOne']({'name':_0x4de993['to_warehouse_name'],'room':_0x4de993[_0x3b4dac(0x191)],'warehouse_category':_0x3b4dac(0x1aa)}),{invoice:_0x1da5c9,suppliers:_0x378782,date:_0x2e2a4f,warehouse_name:_0x2e64a8,product_name:_0x148da0,purchase_quantity:_0xc75912,stocks:_0x23467a,return_qty:_0x2da122,note:_0x1a3d6d,Room_name:_0x5b1e05,level:_0x40c21f,isle:_0x3f8843,pallet:_0x8465d7,to_warehouse_name:_0x28b1c6,to_Room_name:_0x30e693}=_0x214121[_0x3b4dac(0x1dd)];if(typeof _0x148da0==_0x3b4dac(0x196))var _0x28cb41=[_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x172)]],_0x3e3166=[_0x214121['body']['purchase_quantity']],_0x2414ac=[_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1a5)]],_0x128bf7=[_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1a7)]],_0xad35b6=[_0x214121[_0x3b4dac(0x1dd)]['level']],_0xd59ef7=[_0x214121['body'][_0x3b4dac(0x199)]],_0x496f63=[_0x214121['body']['primary_code_hide']],_0x4450c3=[_0x214121[_0x3b4dac(0x1dd)]['secondary_code_hide']];else var _0x28cb41=[..._0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x172)]],_0x3e3166=[..._0x214121[_0x3b4dac(0x1dd)]['purchase_quantity']],_0x2414ac=[..._0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1a5)]],_0x128bf7=[..._0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1a7)]],_0xad35b6=[..._0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1c6)]],_0xd59ef7=[..._0x214121['body'][_0x3b4dac(0x199)]],_0x496f63=[..._0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x17b)]],_0x4450c3=[..._0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1b4)]];const _0x278226=_0x28cb41['map'](_0x326cfb=>{return _0x326cfb={'product_name':_0x326cfb};});_0x3e3166[_0x3b4dac(0x182)]((_0x42995e,_0x29b908)=>{const _0x2e8d70=_0x3b4dac;_0x278226[_0x29b908][_0x2e8d70(0x1e0)]=_0x42995e;}),_0x2414ac[_0x3b4dac(0x182)]((_0x42753e,_0x5f154a)=>{const _0x204db8=_0x3b4dac;_0x278226[_0x5f154a][_0x204db8(0x174)]=_0x42753e;}),_0x128bf7[_0x3b4dac(0x182)]((_0x55cf52,_0x3eb912)=>{const _0x3cc765=_0x3b4dac;_0x278226[_0x3eb912][_0x3cc765(0x1a7)]=_0x55cf52;}),_0xad35b6['forEach']((_0x5d8816,_0x686345)=>{const _0x31c9bc=_0x3b4dac;_0x278226[_0x686345][_0x31c9bc(0x1ad)]=_0x5d8816;}),_0xd59ef7['forEach']((_0x471113,_0x4ace4d)=>{const _0x5b9301=_0x3b4dac;_0x278226[_0x4ace4d][_0x5b9301(0x1bd)]=_0x471113;}),_0x496f63[_0x3b4dac(0x182)]((_0x17dd4b,_0x5a4c15)=>{_0x278226[_0x5a4c15]['primary_code']=_0x17dd4b;}),_0x4450c3[_0x3b4dac(0x182)]((_0x59d488,_0x6d7f2c)=>{const _0x3f6c97=_0x3b4dac;_0x278226[_0x6d7f2c][_0x3f6c97(0x1be)]=_0x59d488;});var _0x483715=0x0;_0x278226[_0x3b4dac(0x182)](_0x4c86b2=>{const _0x1ca5c9=_0x3b4dac;(parseInt(_0x4c86b2[_0x1ca5c9(0x1e0)])<parseInt(_0x4c86b2[_0x1ca5c9(0x1a7)])||parseInt(_0x4c86b2[_0x1ca5c9(0x174)])<parseInt(_0x4c86b2['return_qty']))&&_0x483715++;});if(_0x483715!=0x0)return _0x214121['flash'](_0x3b4dac(0x192),'Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty'),_0x1e34bc[_0x3b4dac(0x1e3)](_0x3b4dac(0x16f));_0x4de993[_0x3b4dac(0x173)]['forEach'](_0x4ea9dc=>{const _0x3b2878=_0x3b4dac;if(_0x4ea9dc[_0x3b2878(0x1a7)]>0x0){const _0x509f96=_0x3e560a['product_details']['map'](_0x11a9d1=>{const _0xbd981d=_0x3b2878;_0x11a9d1['product_name']==_0x4ea9dc[_0xbd981d(0x172)]&&_0x11a9d1[_0xbd981d(0x1ad)]==_0x4ea9dc[_0xbd981d(0x1ad)]&&(_0x11a9d1[_0xbd981d(0x1e1)]=parseInt(_0x11a9d1[_0xbd981d(0x1e1)])+parseInt(_0x4ea9dc[_0xbd981d(0x1a7)]));});}}),await _0x3e560a[_0x3b4dac(0x1db)](),_0x4de993[_0x3b4dac(0x193)]=_0x1da5c9,_0x4de993['suppliers']=_0x378782,_0x4de993[_0x3b4dac(0x195)]=_0x2e2a4f,_0x4de993[_0x3b4dac(0x1ca)]=_0x2e64a8,_0x4de993[_0x3b4dac(0x173)]=_0x278226,_0x4de993[_0x3b4dac(0x1b3)]=_0x1a3d6d,_0x4de993[_0x3b4dac(0x1b8)]=_0x5b1e05,_0x4de993['to_warehouse_name']=_0x28b1c6,_0x4de993[_0x3b4dac(0x191)]=_0x30e693;const _0x516495=await _0x4de993['save'](),_0x35c653=await purchases_return_finished[_0x3b4dac(0x1cb)]({'invoice':_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x193)]}),_0x76d9b7=await warehouse[_0x3b4dac(0x1cb)]({'name':_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x1d4)],'room':_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x181)],'warehouse_category':_0x3b4dac(0x1aa)});_0x35c653[_0x3b4dac(0x173)][_0x3b4dac(0x182)](_0x18ddf0=>{const _0x43ffe2=_0x3b4dac;_0x76d9b7[_0x43ffe2(0x1a0)]['map'](_0x35d414=>{const _0x28f106=_0x43ffe2;_0x35d414[_0x28f106(0x172)]==_0x18ddf0['product_name']&&_0x35d414[_0x28f106(0x1ad)]==_0x18ddf0[_0x28f106(0x1ad)]&&(_0x35d414['product_stock']=parseInt(_0x35d414['product_stock'])-parseInt(_0x18ddf0[_0x28f106(0x1a7)]));});}),await _0x76d9b7[_0x3b4dac(0x1db)]();const _0xca8e18=await s_payment_data[_0x3b4dac(0x1cb)]({'invoice':_0x214121[_0x3b4dac(0x1dd)][_0x3b4dac(0x193)],'reason':'Purchase\x20Return'});await _0xca8e18[_0x3b4dac(0x1db)](),_0x214121[_0x3b4dac(0x1d0)]('success',_0x3b4dac(0x1af)),_0x1e34bc[_0x3b4dac(0x1e3)](_0x3b4dac(0x17e));}catch(_0x188d91){console[_0x3b4dac(0x1ab)](_0x188d91),_0x1e34bc[_0x3b4dac(0x1c4)](0xc8)['json']({'message':_0x188d91['message']});}}),router[a0_0x47de6f(0x1d1)](a0_0x47de6f(0x1de),auth,async(_0x2f0ba8,_0x492aa1)=>{const _0x4d164a=a0_0x47de6f;try{const {username:_0x5149e8,email:_0x2ad6c7,role:_0x323b1e}=_0x2f0ba8['user'],_0x102275=_0x2f0ba8['user'],_0x4dc54e=await profile[_0x4d164a(0x1cb)]({'email':_0x102275[_0x4d164a(0x1b0)]}),_0x427c65=await master_shop[_0x4d164a(0x1b6)]();console[_0x4d164a(0x1ab)](_0x4d164a(0x17a),_0x427c65);const _0x24e9b0=_0x2f0ba8[_0x4d164a(0x190)]['id'],_0x39737d=await purchases_return[_0x4d164a(0x170)](_0x24e9b0);console[_0x4d164a(0x1ab)](_0x39737d);const _0x2b3370=await suppliers[_0x4d164a(0x1cb)]({'name':_0x39737d[_0x4d164a(0x189)]});console[_0x4d164a(0x1ab)](_0x2b3370);if(_0x427c65[0x0]['language']==_0x4d164a(0x19e)){var _0x489386=users['English'];console[_0x4d164a(0x1ab)](_0x489386);}else{if(_0x427c65[0x0]['language']=='Hindi')var _0x489386=users[_0x4d164a(0x1c5)];else{if(_0x427c65[0x0]['language']==_0x4d164a(0x185))var _0x489386=users[_0x4d164a(0x185)];else{if(_0x427c65[0x0]['language']==_0x4d164a(0x198))var _0x489386=users['Spanish'];else{if(_0x427c65[0x0][_0x4d164a(0x1c1)]==_0x4d164a(0x1ae))var _0x489386=users[_0x4d164a(0x1ae)];else{if(_0x427c65[0x0][_0x4d164a(0x1c1)]==_0x4d164a(0x194))var _0x489386=users[_0x4d164a(0x18b)];else{if(_0x427c65[0x0]['language']=='Chinese')var _0x489386=users[_0x4d164a(0x1c9)];else{if(_0x427c65[0x0]['language']=='Arabic\x20(ae)')var _0x489386=users[_0x4d164a(0x1bc)];}}}}}}}_0x492aa1[_0x4d164a(0x1ac)](_0x4d164a(0x179),{'success':_0x2f0ba8[_0x4d164a(0x1d0)](_0x4d164a(0x1d5)),'errors':_0x2f0ba8[_0x4d164a(0x1d0)](_0x4d164a(0x192)),'role':_0x102275,'profile':_0x4dc54e,'master_shop':_0x427c65,'supplier':_0x2b3370,'purchase':_0x39737d,'language':_0x489386});}catch(_0x5c465f){console[_0x4d164a(0x1ab)](_0x5c465f);}}),router[a0_0x47de6f(0x1a9)](a0_0x47de6f(0x178),auth,async(_0x7362b0,_0x5d34c3)=>{const _0x3279e6=a0_0x47de6f;try{const _0x1a4faf=_0x7362b0[_0x3279e6(0x190)]['id'],{invoice:_0x340e8d,suppliers:_0x500b88,receivable_amount:_0x4c7b9b,received_amount:_0x51e9a3}=_0x7362b0['body'],_0x4e6925=await purchases_return['findById'](_0x1a4faf);console[_0x3279e6(0x1ab)](_0x4e6925);var _0x273f44=_0x4c7b9b-_0x51e9a3;console['log'](_0x51e9a3),_0x4e6925[_0x3279e6(0x180)]=parseFloat(_0x51e9a3)+parseFloat(_0x4e6925[_0x3279e6(0x180)]),_0x4e6925[_0x3279e6(0x1ce)]=_0x273f44,console[_0x3279e6(0x1ab)](_0x4e6925);const _0x7909ff=await _0x4e6925[_0x3279e6(0x1db)](),_0x2f02c0=await s_payment_data[_0x3279e6(0x1cb)]({'invoice':_0x7362b0['body'][_0x3279e6(0x193)],'reason':_0x3279e6(0x183)});_0x2f02c0[_0x3279e6(0x19f)]=_0x273f44,await _0x2f02c0[_0x3279e6(0x1db)]();let _0x2f853b=new Date(),_0x5d8ae3=('0'+_0x2f853b[_0x3279e6(0x176)]())[_0x3279e6(0x1e5)](-0x2),_0x311023=('0'+(_0x2f853b[_0x3279e6(0x1b5)]()+0x1))[_0x3279e6(0x1e5)](-0x2),_0x3040d0=_0x2f853b[_0x3279e6(0x1e4)](),_0x1c8e2e=_0x3040d0+'-'+_0x311023+'-'+_0x5d8ae3;const _0x5790ad=new suppliers_payment({'invoice':_0x340e8d,'date':_0x3040d0+'-'+_0x311023+'-'+_0x5d8ae3,'suppliers':_0x500b88,'reason':_0x3279e6(0x1d8),'amount':_0x51e9a3}),_0x246eda=await _0x5790ad[_0x3279e6(0x1db)]();_0x7362b0[_0x3279e6(0x1d0)](_0x3279e6(0x1d5),_0x3279e6(0x1d7)),_0x5d34c3[_0x3279e6(0x1e3)](_0x3279e6(0x1d3));}catch(_0x21a88d){console[_0x3279e6(0x1ab)](_0x21a88d);}}),module[a0_0x47de6f(0x1a6)]=router;