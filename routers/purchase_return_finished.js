const a0_0x17d380=a0_0x86f1;(function(_0x1e637b,_0x42a1ff){const _0x592e7f=a0_0x86f1,_0x62f363=_0x1e637b();while(!![]){try{const _0x8461b8=parseInt(_0x592e7f(0xbc))/0x1+-parseInt(_0x592e7f(0xbe))/0x2*(-parseInt(_0x592e7f(0xb2))/0x3)+parseInt(_0x592e7f(0xc1))/0x4+-parseInt(_0x592e7f(0x98))/0x5+-parseInt(_0x592e7f(0x86))/0x6+parseInt(_0x592e7f(0xf0))/0x7*(parseInt(_0x592e7f(0x8d))/0x8)+-parseInt(_0x592e7f(0xe9))/0x9*(parseInt(_0x592e7f(0xdc))/0xa);if(_0x8461b8===_0x42a1ff)break;else _0x62f363['push'](_0x62f363['shift']());}catch(_0x19da92){_0x62f363['push'](_0x62f363['shift']());}}}(a0_0x4cb7,0xd32c0));function a0_0x86f1(_0x4ef93f,_0x4d148f){const _0x4cb752=a0_0x4cb7();return a0_0x86f1=function(_0x86f157,_0x15a41b){_0x86f157=_0x86f157-0x84;let _0x1579da=_0x4cb752[_0x86f157];return _0x1579da;},a0_0x86f1(_0x4ef93f,_0x4d148f);}const express=require('express'),app=express(),router=express[a0_0x17d380(0xd3)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require(a0_0x17d380(0xcf)),auth=require(a0_0x17d380(0xda)),users=require(a0_0x17d380(0x8f));router[a0_0x17d380(0xd9)](a0_0x17d380(0xae),auth,async(_0x298243,_0xac3666)=>{const _0x2b3564=a0_0x17d380;try{const {username:_0x4d5ccc,email:_0x366f92,role:_0x1d6174}=_0x298243[_0x2b3564(0xdf)],_0x89214b=_0x298243[_0x2b3564(0xdf)],_0x26501e=await profile[_0x2b3564(0xca)]({'email':_0x89214b[_0x2b3564(0xc4)]}),_0x53949d=await master_shop[_0x2b3564(0x8e)]();console[_0x2b3564(0xb5)]('master',_0x53949d);const _0x54f2a9=await purchases_return_finished['aggregate']([{'$lookup':{'from':_0x2b3564(0x97),'localField':_0x2b3564(0x97),'foreignField':_0x2b3564(0x87),'as':_0x2b3564(0xc0)}},{'$unwind':_0x2b3564(0xb4)},{'$unwind':_0x2b3564(0xc6)},{'$group':{'_id':_0x2b3564(0xad),'invoice':{'$first':_0x2b3564(0xf2)},'date':{'$first':_0x2b3564(0x88)},'suppliers':{'$first':_0x2b3564(0xed)},'warehouse_name':{'$first':_0x2b3564(0x9b)},'product_name':{'$first':'$return_product.product_name'},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':'$return_product.price'},'total':{'$sum':_0x2b3564(0xd1)},'note':{'$first':_0x2b3564(0xab)},'total_amount':{'$first':_0x2b3564(0xe3)},'discount':{'$first':_0x2b3564(0xf5)},'receivable':{'$first':'$receivable'},'received':{'$first':'$received'},'due_amount':{'$first':_0x2b3564(0xe5)},'mobile':{'$first':_0x2b3564(0xb3)},'email':{'$first':_0x2b3564(0xc9)},'address':{'$first':_0x2b3564(0x9a)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console[_0x2b3564(0xb5)](_0x54f2a9);if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0x93)){var _0x5bd7a1=users[_0x2b3564(0xa3)];console[_0x2b3564(0xb5)](_0x5bd7a1);}else{if(_0x53949d[0x0][_0x2b3564(0xc3)]=='Hindi')var _0x5bd7a1=users[_0x2b3564(0xa1)];else{if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0xf7))var _0x5bd7a1=users[_0x2b3564(0xf7)];else{if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0xe0))var _0x5bd7a1=users[_0x2b3564(0xe0)];else{if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0xee))var _0x5bd7a1=users[_0x2b3564(0xee)];else{if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0xf3))var _0x5bd7a1=users[_0x2b3564(0xd7)];else{if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0xba))var _0x5bd7a1=users[_0x2b3564(0xba)];else{if(_0x53949d[0x0][_0x2b3564(0xc3)]==_0x2b3564(0xd6))var _0x5bd7a1=users['Arabic'];}}}}}}}_0xac3666[_0x2b3564(0xa7)](_0x2b3564(0x84),{'success':_0x298243['flash'](_0x2b3564(0xf4)),'errors':_0x298243[_0x2b3564(0xde)](_0x2b3564(0xc2)),'role':_0x89214b,'profile':_0x26501e,'master_shop':_0x53949d,'user':_0x54f2a9,'language':_0x5bd7a1});}catch(_0x49a455){console[_0x2b3564(0xb5)](_0x49a455);}}),router[a0_0x17d380(0xd9)](a0_0x17d380(0xb8),auth,async(_0x515179,_0x3e9ddf)=>{const _0x2e8269=a0_0x17d380;try{const {username:_0x2cdf9c,email:_0x548786,role:_0x18cbc5}=_0x515179[_0x2e8269(0xdf)],_0x4f7be6=_0x515179[_0x2e8269(0xdf)],_0x2c060e=await profile[_0x2e8269(0xca)]({'email':_0x4f7be6[_0x2e8269(0xc4)]}),_0x51be6b=await product[_0x2e8269(0x8e)]({}),_0x73dc4a=await master_shop[_0x2e8269(0x8e)](),_0x5ebc5a=_0x515179[_0x2e8269(0xe1)]['id'],_0x37a6e2=await purchases_return_finished['findById'](_0x5ebc5a),_0x33f11f=await warehouse[_0x2e8269(0xcc)]([{'$match':{'name':_0x37a6e2['warehouse_name'],'room':_0x37a6e2[_0x2e8269(0xaa)],'warehouse_category':_0x2e8269(0xe8)}},{'$unwind':'$product_details'},{'$group':{'_id':_0x2e8269(0xcb),'name':{'$first':_0x2e8269(0xdd)},'product_stock':{'$first':_0x2e8269(0x96)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x2e8269(0xc5)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x2e8269(0xeb)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x2e8269(0xac)},'storage':{'$first':_0x2e8269(0xe2)},'rack':{'$first':_0x2e8269(0xa2)}}}]);warehouse_data=await warehouse[_0x2e8269(0xcc)]([{'$match':{'status':_0x2e8269(0xf8),'name':_0x2e8269(0x9f),'warehouse_category':_0x2e8269(0xe8)}},{'$group':{'_id':_0x2e8269(0x95),'name':{'$first':_0x2e8269(0x95)}}},{'$sort':{'name':0x1}}]),console[_0x2e8269(0xb5)](_0x2e8269(0xd5),_0x33f11f);if(_0x73dc4a[0x0][_0x2e8269(0xc3)]==_0x2e8269(0x93)){var _0x199efd=users['English'];console[_0x2e8269(0xb5)](_0x199efd);}else{if(_0x73dc4a[0x0][_0x2e8269(0xc3)]==_0x2e8269(0xa1))var _0x199efd=users[_0x2e8269(0xa1)];else{if(_0x73dc4a[0x0]['language']==_0x2e8269(0xf7))var _0x199efd=users[_0x2e8269(0xf7)];else{if(_0x73dc4a[0x0][_0x2e8269(0xc3)]==_0x2e8269(0xe0))var _0x199efd=users['Spanish'];else{if(_0x73dc4a[0x0][_0x2e8269(0xc3)]==_0x2e8269(0xee))var _0x199efd=users[_0x2e8269(0xee)];else{if(_0x73dc4a[0x0][_0x2e8269(0xc3)]==_0x2e8269(0xf3))var _0x199efd=users['Portuguese'];else{if(_0x73dc4a[0x0]['language']==_0x2e8269(0xba))var _0x199efd=users[_0x2e8269(0xba)];else{if(_0x73dc4a[0x0]['language']==_0x2e8269(0xd6))var _0x199efd=users['Arabic'];}}}}}}}_0x3e9ddf[_0x2e8269(0xa7)]('return_purchase_edit_finished',{'success':_0x515179[_0x2e8269(0xde)](_0x2e8269(0xf4)),'errors':_0x515179['flash'](_0x2e8269(0xc2)),'role':_0x4f7be6,'master_shop':_0x73dc4a,'profile':_0x2c060e,'user':_0x37a6e2,'stock':_0x33f11f,'product':_0x51be6b,'language':_0x199efd,'warehouse':warehouse_data});}catch(_0x31ca78){console[_0x2e8269(0xb5)](_0x31ca78);}}),router[a0_0x17d380(0xa9)](a0_0x17d380(0xb8),auth,async(_0xe6f712,_0x11f318)=>{const _0x404063=a0_0x17d380;try{const _0x578124=_0xe6f712[_0x404063(0xe1)]['id'],_0x2e7927=await purchases_return_finished['findOne']({'invoice':_0xe6f712[_0x404063(0xbd)][_0x404063(0xef)]}),_0x3320d7=await warehouse['findOne']({'name':_0x2e7927[_0x404063(0xea)],'room':_0x2e7927['to_room'],'warehouse_category':_0x404063(0xe8)}),{invoice:_0x56bbf5,suppliers:_0x483c4a,date:_0x5b75b1,warehouse_name:_0x2f76c2,product_name:_0x55dfef,purchase_quantity:_0x4d3172,stocks:_0x328308,return_qty:_0x35d3dd,note:_0x4d540b,Room_name:_0x361f36,level:_0x56b971,isle:_0x42d706,pallet:_0x392a8e,to_warehouse_name:_0x3bbf5c,to_Room_name:_0x4ef3ae}=_0xe6f712[_0x404063(0xbd)];if(typeof _0x55dfef=='string')var _0x3772ec=[_0xe6f712[_0x404063(0xbd)][_0x404063(0x9d)]],_0x5c7078=[_0xe6f712['body']['purchase_quantity']],_0x4eeeda=[_0xe6f712[_0x404063(0xbd)][_0x404063(0xe4)]],_0x3f315c=[_0xe6f712[_0x404063(0xbd)][_0x404063(0x90)]],_0x53b2b2=[_0xe6f712[_0x404063(0xbd)][_0x404063(0xa5)]],_0x89fae8=[_0xe6f712['body'][_0x404063(0x9c)]],_0x2ba824=[_0xe6f712[_0x404063(0xbd)][_0x404063(0xdb)]],_0x277b3f=[_0xe6f712[_0x404063(0xbd)]['secondary_code_hide']];else var _0x3772ec=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0x9d)]],_0x5c7078=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0xcd)]],_0x4eeeda=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0xe4)]],_0x3f315c=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0x90)]],_0x53b2b2=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0xa5)]],_0x89fae8=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0x9c)]],_0x2ba824=[..._0xe6f712[_0x404063(0xbd)]['primary_code_hide']],_0x277b3f=[..._0xe6f712[_0x404063(0xbd)][_0x404063(0xc8)]];const _0x579059=_0x3772ec[_0x404063(0xa4)](_0x3d6f6e=>{return _0x3d6f6e={'product_name':_0x3d6f6e};});_0x5c7078['forEach']((_0x23c204,_0x1b8657)=>{const _0x20447d=_0x404063;_0x579059[_0x1b8657][_0x20447d(0xcd)]=_0x23c204;}),_0x4eeeda[_0x404063(0x9e)]((_0x158180,_0x29373d)=>{const _0x2a9b17=_0x404063;_0x579059[_0x29373d][_0x2a9b17(0xe7)]=_0x158180;}),_0x3f315c[_0x404063(0x9e)]((_0x45000f,_0x181586)=>{const _0x3fff25=_0x404063;_0x579059[_0x181586][_0x3fff25(0x90)]=_0x45000f;}),_0x53b2b2[_0x404063(0x9e)]((_0x4fb0e4,_0x241cb0)=>{const _0x26f67e=_0x404063;_0x579059[_0x241cb0][_0x26f67e(0xbf)]=_0x4fb0e4;}),_0x89fae8[_0x404063(0x9e)]((_0x2d1088,_0x502dcf)=>{const _0x2ad6b5=_0x404063;_0x579059[_0x502dcf][_0x2ad6b5(0xd8)]=_0x2d1088;}),_0x2ba824['forEach']((_0xbbddca,_0x3f8a2d)=>{const _0x1b714f=_0x404063;_0x579059[_0x3f8a2d][_0x1b714f(0xce)]=_0xbbddca;}),_0x277b3f['forEach']((_0x139a8a,_0x5011f3)=>{_0x579059[_0x5011f3]['secondary_code']=_0x139a8a;});var _0x1725e4=0x0;_0x579059[_0x404063(0x9e)](_0x104c03=>{const _0xf74d45=_0x404063;(parseInt(_0x104c03[_0xf74d45(0xcd)])<parseInt(_0x104c03[_0xf74d45(0x90)])||parseInt(_0x104c03[_0xf74d45(0xe7)])<parseInt(_0x104c03[_0xf74d45(0x90)]))&&_0x1725e4++;});if(_0x1725e4!=0x0)return _0xe6f712['flash'](_0x404063(0xc2),_0x404063(0xb7)),_0x11f318[_0x404063(0xa8)]('back');_0x2e7927['return_product'][_0x404063(0x9e)](_0x44b192=>{const _0x32f82f=_0x404063;if(_0x44b192['return_qty']>0x0){const _0x551d69=_0x3320d7[_0x32f82f(0xb0)][_0x32f82f(0xa4)](_0x570da1=>{const _0x2236d2=_0x32f82f;_0x570da1['product_name']==_0x44b192[_0x2236d2(0x9d)]&&_0x570da1[_0x2236d2(0xbf)]==_0x44b192[_0x2236d2(0xbf)]&&(_0x570da1['product_stock']=parseInt(_0x570da1[_0x2236d2(0xaf)])+parseInt(_0x44b192['return_qty']));});}}),await _0x3320d7['save'](),_0x2e7927[_0x404063(0xef)]=_0x56bbf5,_0x2e7927['suppliers']=_0x483c4a,_0x2e7927[_0x404063(0x91)]=_0x5b75b1,_0x2e7927[_0x404063(0xec)]=_0x2f76c2,_0x2e7927[_0x404063(0x8c)]=_0x579059,_0x2e7927[_0x404063(0x94)]=_0x4d540b,_0x2e7927[_0x404063(0xaa)]=_0x361f36,_0x2e7927[_0x404063(0xea)]=_0x3bbf5c,_0x2e7927[_0x404063(0xb9)]=_0x4ef3ae;const _0x118d62=await _0x2e7927[_0x404063(0x8b)](),_0x36abdf=await purchases_return_finished['findOne']({'invoice':_0xe6f712[_0x404063(0xbd)][_0x404063(0xef)]}),_0x417e4a=await warehouse['findOne']({'name':_0xe6f712[_0x404063(0xbd)][_0x404063(0xea)],'room':_0xe6f712['body'][_0x404063(0xc7)],'warehouse_category':_0x404063(0xe8)});_0x36abdf[_0x404063(0x8c)]['forEach'](_0x1f1b3c=>{const _0x1309ad=_0x404063;_0x417e4a['product_details'][_0x1309ad(0xa4)](_0xbe8e94=>{const _0x10813d=_0x1309ad;_0xbe8e94[_0x10813d(0x9d)]==_0x1f1b3c['product_name']&&_0xbe8e94[_0x10813d(0xbf)]==_0x1f1b3c[_0x10813d(0xbf)]&&(_0xbe8e94[_0x10813d(0xaf)]=parseInt(_0xbe8e94[_0x10813d(0xaf)])-parseInt(_0x1f1b3c['return_qty']));});}),await _0x417e4a[_0x404063(0x8b)]();const _0x3fce6a=await s_payment_data[_0x404063(0xca)]({'invoice':_0xe6f712[_0x404063(0xbd)][_0x404063(0xef)],'reason':_0x404063(0xb6)});await _0x3fce6a[_0x404063(0x8b)](),_0xe6f712['flash'](_0x404063(0xf4),_0x404063(0xa0)),_0x11f318[_0x404063(0xa8)](_0x404063(0xa6));}catch(_0xb8958f){console['log'](_0xb8958f),_0x11f318['status'](0xc8)[_0x404063(0xf6)]({'message':_0xb8958f['message']});}}),router[a0_0x17d380(0xd9)](a0_0x17d380(0xd0),auth,async(_0x2fb3e7,_0x4f0628)=>{const _0x4b12c2=a0_0x17d380;try{const {username:_0x36e5b4,email:_0x48e825,role:_0x400d45}=_0x2fb3e7[_0x4b12c2(0xdf)],_0x4935bd=_0x2fb3e7[_0x4b12c2(0xdf)],_0x298759=await profile[_0x4b12c2(0xca)]({'email':_0x4935bd[_0x4b12c2(0xc4)]}),_0x39f560=await master_shop[_0x4b12c2(0x8e)]();console[_0x4b12c2(0xb5)](_0x4b12c2(0x85),_0x39f560);const _0x1fd4f5=_0x2fb3e7['params']['id'],_0x597af1=await purchases_return[_0x4b12c2(0xe6)](_0x1fd4f5);console[_0x4b12c2(0xb5)](_0x597af1);const _0x1dad8f=await suppliers[_0x4b12c2(0xca)]({'name':_0x597af1[_0x4b12c2(0x97)]});console[_0x4b12c2(0xb5)](_0x1dad8f);if(_0x39f560[0x0][_0x4b12c2(0xc3)]==_0x4b12c2(0x93)){var _0xc66c7c=users[_0x4b12c2(0xa3)];console[_0x4b12c2(0xb5)](_0xc66c7c);}else{if(_0x39f560[0x0]['language']==_0x4b12c2(0xa1))var _0xc66c7c=users[_0x4b12c2(0xa1)];else{if(_0x39f560[0x0][_0x4b12c2(0xc3)]==_0x4b12c2(0xf7))var _0xc66c7c=users[_0x4b12c2(0xf7)];else{if(_0x39f560[0x0][_0x4b12c2(0xc3)]==_0x4b12c2(0xe0))var _0xc66c7c=users[_0x4b12c2(0xe0)];else{if(_0x39f560[0x0]['language']==_0x4b12c2(0xee))var _0xc66c7c=users['French'];else{if(_0x39f560[0x0]['language']=='Portuguese\x20(BR)')var _0xc66c7c=users[_0x4b12c2(0xd7)];else{if(_0x39f560[0x0]['language']==_0x4b12c2(0xba))var _0xc66c7c=users['Chinese'];else{if(_0x39f560[0x0][_0x4b12c2(0xc3)]==_0x4b12c2(0xd6))var _0xc66c7c=users['Arabic'];}}}}}}}_0x4f0628['render'](_0x4b12c2(0x92),{'success':_0x2fb3e7[_0x4b12c2(0xde)](_0x4b12c2(0xf4)),'errors':_0x2fb3e7[_0x4b12c2(0xde)](_0x4b12c2(0xc2)),'role':_0x4935bd,'profile':_0x298759,'master_shop':_0x39f560,'supplier':_0x1dad8f,'purchase':_0x597af1,'language':_0xc66c7c});}catch(_0x5d1742){console['log'](_0x5d1742);}}),router['post'](a0_0x17d380(0x8a),auth,async(_0x557802,_0x358353)=>{const _0x1f61d2=a0_0x17d380;try{const _0x45010a=_0x557802['params']['id'],{invoice:_0x5a00b2,suppliers:_0x3b60a2,receivable_amount:_0x5d4b76,received_amount:_0x2468ba}=_0x557802[_0x1f61d2(0xbd)],_0x2c7c70=await purchases_return[_0x1f61d2(0xe6)](_0x45010a);console[_0x1f61d2(0xb5)](_0x2c7c70);var _0x94d160=_0x5d4b76-_0x2468ba;console[_0x1f61d2(0xb5)](_0x2468ba),_0x2c7c70[_0x1f61d2(0xd4)]=parseFloat(_0x2468ba)+parseFloat(_0x2c7c70[_0x1f61d2(0xd4)]),_0x2c7c70[_0x1f61d2(0xd2)]=_0x94d160,console[_0x1f61d2(0xb5)](_0x2c7c70);const _0x1f2c37=await _0x2c7c70[_0x1f61d2(0x8b)](),_0x25f5fd=await s_payment_data[_0x1f61d2(0xca)]({'invoice':_0x557802['body'][_0x1f61d2(0xef)],'reason':_0x1f61d2(0xb6)});_0x25f5fd[_0x1f61d2(0x89)]=_0x94d160,await _0x25f5fd[_0x1f61d2(0x8b)]();let _0x5efd65=new Date(),_0x576173=('0'+_0x5efd65[_0x1f61d2(0x99)]())[_0x1f61d2(0xf1)](-0x2),_0xa72cd1=('0'+(_0x5efd65[_0x1f61d2(0xb1)]()+0x1))[_0x1f61d2(0xf1)](-0x2),_0x1527b6=_0x5efd65[_0x1f61d2(0xbb)](),_0x3edafe=_0x1527b6+'-'+_0xa72cd1+'-'+_0x576173;const _0x5f73a9=new suppliers_payment({'invoice':_0x5a00b2,'date':_0x1527b6+'-'+_0xa72cd1+'-'+_0x576173,'suppliers':_0x3b60a2,'reason':'Received\x20For\x20Purchase\x20Return','amount':_0x2468ba}),_0x22b407=await _0x5f73a9[_0x1f61d2(0x8b)]();_0x557802[_0x1f61d2(0xde)]('success','payment\x20successfull'),_0x358353[_0x1f61d2(0xa8)]('/purchases_return/view');}catch(_0x1df606){console[_0x1f61d2(0xb5)](_0x1df606);}}),module['exports']=router;function a0_0x4cb7(){const _0x583fc6=['return_product','880RQUyQw','find','../public/language/languages.json','return_qty','date','return_purchase_invoice','English\x20(US)','note','$name','$product_details.product_stock','suppliers','3300100DRXptj','getDate','$supplier_docs.address','$warehouse_name','product_code_hide','product_name','forEach','Return\x20Goods','purchase\x20return\x20successfully','Hindi','$product_details.rack','English','map','level','/purchases_return_finished/view','render','redirect','post','room','$note','$product_details.product_code','$_id','/view','product_stock','product_details','getMonth','37290OANRUA','$supplier_docs.mobile','$return_product','log','Purchase\x20Return','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','/view/:id','to_room','Chinese','getFullYear','1653073vNSRsl','body','212aXFTqF','bay','supplier_docs','2326640HdDLXc','errors','language','email','$product_details.bin','$supplier_docs','to_Room_name','secondary_code_hide','$supplier_docs.email','findOne','$product_details._id','aggregate','purchase_quantity','primary_code','../models/all_models','/invoice/:id','$return_product.total','due_amount','Router','received','stock_data','Arabic\x20(ae)','Portuguese','product_code','get','../middleware/auth','primary_code_hide','40rWZFaG','$product_details.product_name','flash','user','Spanish','params','$product_details.storage','$total_amount','stocks','$due_amount','findById','stock_quantity','Finished\x20Goods','5979294FpPpwg','to_warehouse_name','$product_details.floorlevel','warehouse_name','$suppliers','French','invoice','92827cMzAKA','slice','$invoice','Portuguese\x20(BR)','success','$discount','json','German','Enabled','purchases_return_finished','master','4971474ZRJomL','name','$date','amount','/receive_payment/:id','save'];a0_0x4cb7=function(){return _0x583fc6;};return a0_0x4cb7();}