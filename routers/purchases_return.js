function a0_0x13dd(_0x56131d,_0x5549e1){var _0x20f120=a0_0x20f1();return a0_0x13dd=function(_0x13ddb0,_0x5923a9){_0x13ddb0=_0x13ddb0-0x8e;var _0x1f338d=_0x20f120[_0x13ddb0];return _0x1f338d;},a0_0x13dd(_0x56131d,_0x5549e1);}var a0_0x12bac1=a0_0x13dd;(function(_0x16b0c0,_0x3e4505){var _0xc9c5f7=a0_0x13dd,_0x2c33b8=_0x16b0c0();while(!![]){try{var _0x3459c0=parseInt(_0xc9c5f7(0x100))/0x1*(-parseInt(_0xc9c5f7(0xe2))/0x2)+-parseInt(_0xc9c5f7(0xd5))/0x3+parseInt(_0xc9c5f7(0xdc))/0x4*(parseInt(_0xc9c5f7(0x101))/0x5)+-parseInt(_0xc9c5f7(0xd0))/0x6*(-parseInt(_0xc9c5f7(0xcc))/0x7)+-parseInt(_0xc9c5f7(0xaa))/0x8*(parseInt(_0xc9c5f7(0xf1))/0x9)+-parseInt(_0xc9c5f7(0xd6))/0xa*(-parseInt(_0xc9c5f7(0x10d))/0xb)+parseInt(_0xc9c5f7(0xf5))/0xc;if(_0x3459c0===_0x3e4505)break;else _0x2c33b8['push'](_0x2c33b8['shift']());}catch(_0x3bca85){_0x2c33b8['push'](_0x2c33b8['shift']());}}}(a0_0x20f1,0x4ed64));const express=require(a0_0x12bac1(0xe6)),app=express(),router=express[a0_0x12bac1(0xf2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require(a0_0x12bac1(0x9f)),auth=require('../middleware/auth'),users=require('../public/language/languages.json');router[a0_0x12bac1(0xca)](a0_0x12bac1(0xb4),auth,async(_0x6cfa9a,_0x102bda)=>{var _0x2ea407=a0_0x12bac1;try{const {username:_0x43df89,email:_0x11dc43,role:_0xd03dab}=_0x6cfa9a[_0x2ea407(0x112)],_0x5470e2=_0x6cfa9a[_0x2ea407(0x112)],_0x4c00e9=await profile[_0x2ea407(0xc3)]({'email':_0x5470e2[_0x2ea407(0xbc)]}),_0x3e22e2=await master_shop['find']();console[_0x2ea407(0xbf)](_0x2ea407(0x108),_0x3e22e2);const _0x3428fd=await purchases_return[_0x2ea407(0xc5)]([{'$lookup':{'from':_0x2ea407(0xa8),'localField':_0x2ea407(0xa8),'foreignField':_0x2ea407(0xba),'as':_0x2ea407(0xe9)}},{'$unwind':_0x2ea407(0x10a)},{'$unwind':_0x2ea407(0xde)},{'$group':{'_id':_0x2ea407(0xe3),'invoice':{'$first':_0x2ea407(0xe5)},'date':{'$first':_0x2ea407(0xe7)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':_0x2ea407(0xee)},'product_name':{'$first':_0x2ea407(0xbb)},'return_qty':{'$first':_0x2ea407(0xa0)},'price':{'$first':_0x2ea407(0x10c)},'total':{'$sum':_0x2ea407(0xdf)},'note':{'$first':_0x2ea407(0xab)},'total_amount':{'$first':_0x2ea407(0xff)},'discount':{'$first':_0x2ea407(0xf4)},'receivable':{'$first':_0x2ea407(0x95)},'received':{'$first':'$received'},'due_amount':{'$first':_0x2ea407(0xcf)},'mobile':{'$first':_0x2ea407(0xc2)},'email':{'$first':_0x2ea407(0xf8)},'address':{'$first':'$supplier_docs.address'},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console['log'](_0x3428fd);if(_0x3e22e2[0x0][_0x2ea407(0xea)]==_0x2ea407(0x99)){var _0x3a252e=users[_0x2ea407(0xfd)];console[_0x2ea407(0xbf)](_0x3a252e);}else{if(_0x3e22e2[0x0][_0x2ea407(0xea)]=='Hindi')var _0x3a252e=users[_0x2ea407(0x8e)];else{if(_0x3e22e2[0x0][_0x2ea407(0xea)]=='German')var _0x3a252e=users['German'];else{if(_0x3e22e2[0x0][_0x2ea407(0xea)]=='Spanish')var _0x3a252e=users[_0x2ea407(0xa6)];else{if(_0x3e22e2[0x0][_0x2ea407(0xea)]=='French')var _0x3a252e=users[_0x2ea407(0xad)];else{if(_0x3e22e2[0x0][_0x2ea407(0xea)]==_0x2ea407(0xdd))var _0x3a252e=users[_0x2ea407(0x9a)];else{if(_0x3e22e2[0x0][_0x2ea407(0xea)]==_0x2ea407(0x91))var _0x3a252e=users[_0x2ea407(0x91)];else{if(_0x3e22e2[0x0]['language']==_0x2ea407(0xda))var _0x3a252e=users[_0x2ea407(0xf9)];}}}}}}}_0x102bda[_0x2ea407(0xd2)](_0x2ea407(0xe4),{'success':_0x6cfa9a['flash']('success'),'errors':_0x6cfa9a[_0x2ea407(0xc7)](_0x2ea407(0xce)),'role':_0x5470e2,'profile':_0x4c00e9,'master_shop':_0x3e22e2,'user':_0x3428fd,'language':_0x3a252e});}catch(_0x428453){console['log'](_0x428453);}}),router[a0_0x12bac1(0xca)]('/view/:id',auth,async(_0x2e18e1,_0x4c505b)=>{var _0xa697b7=a0_0x12bac1;try{const {username:_0x4d485c,email:_0x31dc9b,role:_0x1611b1}=_0x2e18e1[_0xa697b7(0x112)],_0x3f7158=_0x2e18e1[_0xa697b7(0x112)],_0x39ae05=await profile[_0xa697b7(0xc3)]({'email':_0x3f7158['email']}),_0xa594e=await product[_0xa697b7(0x97)]({}),_0x476900=await master_shop['find']();console['log'](_0xa697b7(0x108),_0x476900),console[_0xa697b7(0xbf)](_0x2e18e1[_0xa697b7(0xa4)]);const _0x659250=_0x2e18e1[_0xa697b7(0xd8)]['id'],_0x206fbf=await purchases_return['findById'](_0x659250);console[_0xa697b7(0xbf)](_0x206fbf);const _0x3af3b3=await warehouse[_0xa697b7(0xc5)]([{'$match':{'name':_0x206fbf[_0xa697b7(0xd1)],'room':_0x206fbf[_0xa697b7(0x105)]}},{'$unwind':'$product_details'},{'$group':{'_id':_0xa697b7(0xeb),'name':{'$first':_0xa697b7(0x9b)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0xa697b7(0xe0)},'bin':{'$first':_0xa697b7(0x94)},'type':{'$first':_0xa697b7(0xd4)},'floorlevel':{'$first':_0xa697b7(0xa2)},'primary_code':{'$first':_0xa697b7(0xcd)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0xa697b7(0xb3)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0xa697b7(0xd3)}}}]);warehouse_data=await warehouse[_0xa697b7(0xc5)]([{'$match':{'status':'Enabled','name':'Return\x20Goods','warehouse_category':_0xa697b7(0xa9)}},{'$group':{'_id':_0xa697b7(0xb8),'name':{'$first':_0xa697b7(0xb8)}}},{'$sort':{'name':0x1}}]),console['log']('stock_data',_0x3af3b3);if(_0x476900[0x0][_0xa697b7(0xea)]=='English\x20(US)'){var _0x59d99b=users[_0xa697b7(0xfd)];console[_0xa697b7(0xbf)](_0x59d99b);}else{if(_0x476900[0x0]['language']==_0xa697b7(0x8e))var _0x59d99b=users[_0xa697b7(0x8e)];else{if(_0x476900[0x0][_0xa697b7(0xea)]==_0xa697b7(0xb2))var _0x59d99b=users[_0xa697b7(0xb2)];else{if(_0x476900[0x0][_0xa697b7(0xea)]=='Spanish')var _0x59d99b=users[_0xa697b7(0xa6)];else{if(_0x476900[0x0][_0xa697b7(0xea)]==_0xa697b7(0xad))var _0x59d99b=users[_0xa697b7(0xad)];else{if(_0x476900[0x0][_0xa697b7(0xea)]==_0xa697b7(0xdd))var _0x59d99b=users[_0xa697b7(0x9a)];else{if(_0x476900[0x0][_0xa697b7(0xea)]==_0xa697b7(0x91))var _0x59d99b=users[_0xa697b7(0x91)];else{if(_0x476900[0x0]['language']==_0xa697b7(0xda))var _0x59d99b=users['Arabic'];}}}}}}}_0x4c505b['render'](_0xa697b7(0x107),{'success':_0x2e18e1['flash'](_0xa697b7(0xc8)),'errors':_0x2e18e1[_0xa697b7(0xc7)](_0xa697b7(0xce)),'role':_0x3f7158,'master_shop':_0x476900,'profile':_0x39ae05,'user':_0x206fbf,'stock':_0x3af3b3,'product':_0xa594e,'language':_0x59d99b,'warehouse':warehouse_data});}catch(_0x51f63c){console[_0xa697b7(0xbf)](_0x51f63c);}}),router['post'](a0_0x12bac1(0x9c),auth,async(_0x4d8ef1,_0x3e8c9a)=>{var _0x5f032d=a0_0x12bac1;try{const _0x55f95c=_0x4d8ef1['params']['id'];console[_0x5f032d(0xbf)](_0x55f95c);const _0x41ddda=await purchases_return[_0x5f032d(0xc3)]({'invoice':_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xb6)]});console['log'](_0x5f032d(0xfe),_0x41ddda);const _0x4d3605=await warehouse[_0x5f032d(0xc3)]({'name':_0x41ddda['to_warehouse_name'],'room':_0x41ddda[_0x5f032d(0x92)]});console[_0x5f032d(0xbf)](_0x5f032d(0xa3),_0x4d3605);const {invoice:_0x5573c3,suppliers:_0x1165df,date:_0x476e2a,warehouse_name:_0xb6ba01,product_name:_0x478d72,purchase_quantity:_0x5111dd,stocks:_0x113f6e,return_qty:_0x3dd3c5,note:_0x116de9,Room_name:_0x493741,level:_0x3b353e,isle:_0x301f25,pallet:_0x3469dd,to_warehouse_name:_0x35639f,to_Room_name:_0x2f7ab3}=_0x4d8ef1[_0x5f032d(0xa4)];if(typeof _0x478d72==_0x5f032d(0x109))var _0x469c77=[_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xc0)]],_0x27859e=[_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xa1)]],_0x3f38e0=[_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xec)]],_0x553ded=[_0x4d8ef1['body'][_0x5f032d(0xb1)]],_0x2f67bc=[_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xe8)]],_0x4f0227=[_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xbd)]],_0x35509d=[_0x4d8ef1[_0x5f032d(0xa4)]['pallet']],_0x4c7a52=[_0x4d8ef1['body']['types']],_0x33b877=[_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xd9)]],_0x3514db=[_0x4d8ef1[_0x5f032d(0xa4)]['primary_code_hide']],_0xb0ac26=[_0x4d8ef1[_0x5f032d(0xa4)]['secondary_code_hide']];else var _0x469c77=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xc0)]],_0x27859e=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xa1)]],_0x3f38e0=[..._0x4d8ef1[_0x5f032d(0xa4)]['stocks']],_0x553ded=[..._0x4d8ef1['body'][_0x5f032d(0xb1)]],_0x2f67bc=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xe8)]],_0x4f0227=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xbd)]],_0x35509d=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0x9d)]],_0x33b877=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xd9)]],_0x3514db=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xcb)]],_0xb0ac26=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0x98)]],_0x4c7a52=[..._0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xf6)]];const _0x1f8f6c=_0x469c77[_0x5f032d(0xa7)](_0x448527=>{return _0x448527={'product_name':_0x448527};});_0x27859e[_0x5f032d(0xc6)]((_0x1227a5,_0x11b1c8)=>{_0x1f8f6c[_0x11b1c8]['purchase_quantity']=_0x1227a5;}),_0x3f38e0[_0x5f032d(0xc6)]((_0x210cd2,_0x4eb4b8)=>{var _0x2a21f1=_0x5f032d;_0x1f8f6c[_0x4eb4b8][_0x2a21f1(0xac)]=_0x210cd2;}),_0x553ded[_0x5f032d(0xc6)]((_0x681e4c,_0x13455e)=>{var _0x3655f2=_0x5f032d;_0x1f8f6c[_0x13455e][_0x3655f2(0xb1)]=_0x681e4c;}),_0x2f67bc[_0x5f032d(0xc6)]((_0x33cc3c,_0x3f4e8d)=>{var _0xf37781=_0x5f032d;_0x1f8f6c[_0x3f4e8d][_0xf37781(0x104)]=_0x33cc3c;}),_0x4f0227[_0x5f032d(0xc6)]((_0x8225a8,_0x56f9db)=>{_0x1f8f6c[_0x56f9db]['bin']=_0x8225a8;}),_0x35509d[_0x5f032d(0xc6)]((_0x4a000c,_0x34aaa8)=>{_0x1f8f6c[_0x34aaa8]['floorlevel']=_0x4a000c;}),_0x33b877[_0x5f032d(0xc6)]((_0x5748aa,_0x5a002f)=>{var _0x50f0e8=_0x5f032d;_0x1f8f6c[_0x5a002f][_0x50f0e8(0xfa)]=_0x5748aa;}),_0x3514db[_0x5f032d(0xc6)]((_0x310d5b,_0x50dcec)=>{_0x1f8f6c[_0x50dcec]['primary_code']=_0x310d5b;}),_0xb0ac26[_0x5f032d(0xc6)]((_0x15f1dd,_0x255a63)=>{_0x1f8f6c[_0x255a63]['secondary_code']=_0x15f1dd;}),_0x4c7a52['forEach']((_0x482d73,_0x191d71)=>{var _0x4f35f2=_0x5f032d;_0x1f8f6c[_0x191d71][_0x4f35f2(0xb0)]=_0x482d73;});var _0x23d865=0x0;_0x1f8f6c[_0x5f032d(0xc6)](_0x1a8fc4=>{var _0x27379b=_0x5f032d;console['log'](_0x27379b(0xa5),_0x1a8fc4),(parseInt(_0x1a8fc4['purchase_quantity'])<parseInt(_0x1a8fc4[_0x27379b(0xb1)])||parseInt(_0x1a8fc4['stock_quantity'])<parseInt(_0x1a8fc4['return_qty'])||parseInt(_0x1a8fc4[_0x27379b(0xb1)])==0x0)&&_0x23d865++;});if(_0x23d865!=0x0)return _0x4d8ef1['flash'](_0x5f032d(0xce),_0x5f032d(0x106)),_0x3e8c9a[_0x5f032d(0xaf)]('back');_0x41ddda['return_product'][_0x5f032d(0xc6)](_0x2495f7=>{var _0x1c9f17=_0x5f032d;const _0x2546b9=_0x4d3605[_0x1c9f17(0xef)]['map'](_0x3db1d8=>{var _0x2436c9=_0x1c9f17;_0x3db1d8[_0x2436c9(0xc0)]==_0x2495f7['product_name']&&_0x3db1d8[_0x2436c9(0xf7)]==_0x2495f7[_0x2436c9(0xf7)]&&_0x3db1d8[_0x2436c9(0xb0)]==_0x2495f7[_0x2436c9(0xb0)]&&_0x3db1d8[_0x2436c9(0x10b)]==_0x2495f7[_0x2436c9(0x10b)]&&_0x3db1d8[_0x2436c9(0x104)]==_0x2495f7[_0x2436c9(0x104)]&&(_0x3db1d8[_0x2436c9(0xfb)]=parseInt(_0x3db1d8[_0x2436c9(0xfb)])+parseInt(_0x2495f7[_0x2436c9(0xb1)]));});}),console[_0x5f032d(0xbf)](_0x5f032d(0xa3),_0x4d3605),await _0x4d3605[_0x5f032d(0x93)](),_0x41ddda[_0x5f032d(0xb6)]=_0x5573c3,_0x41ddda[_0x5f032d(0xa8)]=_0x1165df,_0x41ddda[_0x5f032d(0xdb)]=_0x476e2a,_0x41ddda[_0x5f032d(0xd1)]=_0xb6ba01,_0x41ddda['return_product']=_0x1f8f6c,_0x41ddda[_0x5f032d(0xf0)]=_0x116de9,_0x41ddda['room']=_0x493741,_0x41ddda[_0x5f032d(0x102)]=_0x35639f,_0x41ddda[_0x5f032d(0x92)]=_0x2f7ab3;const _0x3adfd9=await _0x41ddda[_0x5f032d(0x93)](),_0x6f10d=await purchases_return[_0x5f032d(0xc3)]({'invoice':_0x4d8ef1[_0x5f032d(0xa4)]['invoice']}),_0x2e2bea=await warehouse['findOne']({'name':_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0x102)],'room':_0x4d8ef1[_0x5f032d(0xa4)]['to_Room_name']});_0x6f10d[_0x5f032d(0xed)][_0x5f032d(0xc6)](_0x21df04=>{var _0x57651b=_0x5f032d;_0x2e2bea[_0x57651b(0xef)][_0x57651b(0xa7)](_0x323287=>{var _0xb03a51=_0x57651b;_0x323287[_0xb03a51(0xc0)]==_0x21df04[_0xb03a51(0xc0)]&&_0x323287[_0xb03a51(0x9d)]==_0x21df04[_0xb03a51(0x9d)]&&(_0x323287[_0xb03a51(0xfb)]=parseInt(_0x323287[_0xb03a51(0xfb)])-parseInt(_0x21df04[_0xb03a51(0xb1)]),console[_0xb03a51(0xbf)](_0xb03a51(0xfc),_0x21df04[_0xb03a51(0xb1)]));});}),console['log'](_0x5f032d(0xc4),_0x2e2bea),await _0x2e2bea[_0x5f032d(0x93)]();const _0x2b7b03=await s_payment_data[_0x5f032d(0xc3)]({'invoice':_0x4d8ef1[_0x5f032d(0xa4)][_0x5f032d(0xb6)],'reason':_0x5f032d(0xb9)});await _0x2b7b03[_0x5f032d(0x93)](),_0x4d8ef1[_0x5f032d(0xc7)]('success',_0x5f032d(0x96)),_0x3e8c9a[_0x5f032d(0xaf)](_0x5f032d(0xe1));}catch(_0x53d302){console[_0x5f032d(0xbf)](_0x53d302),_0x3e8c9a[_0x5f032d(0xd7)](0xc8)[_0x5f032d(0xc1)]({'message':_0x53d302['message']});}}),router[a0_0x12bac1(0xca)](a0_0x12bac1(0xae),auth,async(_0x2f651d,_0xfb1c21)=>{var _0x4c546a=a0_0x12bac1;try{const {username:_0x24d63c,email:_0x2bf92c,role:_0x314441}=_0x2f651d['user'],_0x16a08f=_0x2f651d[_0x4c546a(0x112)],_0x478ce3=await profile[_0x4c546a(0xc3)]({'email':_0x16a08f[_0x4c546a(0xbc)]}),_0x56eb26=await master_shop['find']();console['log'](_0x4c546a(0x108),_0x56eb26);const _0x4f9b61=_0x2f651d['params']['id'],_0x361270=await purchases_return[_0x4c546a(0xb7)](_0x4f9b61);console['log'](_0x361270);const _0x401516=await suppliers[_0x4c546a(0xc3)]({'name':_0x361270['suppliers']});console[_0x4c546a(0xbf)](_0x401516);if(_0x56eb26[0x0][_0x4c546a(0xea)]==_0x4c546a(0x99)){var _0x4dd5b4=users['English'];console['log'](_0x4dd5b4);}else{if(_0x56eb26[0x0][_0x4c546a(0xea)]==_0x4c546a(0x8e))var _0x4dd5b4=users['Hindi'];else{if(_0x56eb26[0x0][_0x4c546a(0xea)]==_0x4c546a(0xb2))var _0x4dd5b4=users[_0x4c546a(0xb2)];else{if(_0x56eb26[0x0]['language']==_0x4c546a(0xa6))var _0x4dd5b4=users[_0x4c546a(0xa6)];else{if(_0x56eb26[0x0][_0x4c546a(0xea)]==_0x4c546a(0xad))var _0x4dd5b4=users[_0x4c546a(0xad)];else{if(_0x56eb26[0x0][_0x4c546a(0xea)]==_0x4c546a(0xdd))var _0x4dd5b4=users[_0x4c546a(0x9a)];else{if(_0x56eb26[0x0][_0x4c546a(0xea)]==_0x4c546a(0x91))var _0x4dd5b4=users[_0x4c546a(0x91)];else{if(_0x56eb26[0x0][_0x4c546a(0xea)]=='Arabic\x20(ae)')var _0x4dd5b4=users[_0x4c546a(0xf9)];}}}}}}}_0xfb1c21[_0x4c546a(0xd2)](_0x4c546a(0x8f),{'success':_0x2f651d['flash']('success'),'errors':_0x2f651d['flash'](_0x4c546a(0xce)),'role':_0x16a08f,'profile':_0x478ce3,'master_shop':_0x56eb26,'supplier':_0x401516,'purchase':_0x361270,'language':_0x4dd5b4});}catch(_0x2ece7f){console['log'](_0x2ece7f);}}),router[a0_0x12bac1(0x10e)](a0_0x12bac1(0xc9),auth,async(_0x23459c,_0x5e37f0)=>{var _0x245695=a0_0x12bac1;try{const _0x459270=_0x23459c[_0x245695(0xd8)]['id'],{invoice:_0x203762,suppliers:_0x32ca23,receivable_amount:_0x19f70d,received_amount:_0x5bbb6f}=_0x23459c[_0x245695(0xa4)],_0xa5604e=await purchases_return[_0x245695(0xb7)](_0x459270);console['log'](_0xa5604e);var _0x2b2313=_0x19f70d-_0x5bbb6f;console['log'](_0x5bbb6f),_0xa5604e['received']=parseFloat(_0x5bbb6f)+parseFloat(_0xa5604e[_0x245695(0xf3)]),_0xa5604e[_0x245695(0x103)]=_0x2b2313,console[_0x245695(0xbf)](_0xa5604e);const _0x125e89=await _0xa5604e['save'](),_0x563404=await s_payment_data[_0x245695(0xc3)]({'invoice':_0x23459c['body'][_0x245695(0xb6)],'reason':_0x245695(0xb9)});_0x563404[_0x245695(0xbe)]=_0x2b2313,await _0x563404[_0x245695(0x93)]();let _0x1c5bf7=new Date(),_0x2a3023=('0'+_0x1c5bf7[_0x245695(0x90)]())[_0x245695(0x10f)](-0x2),_0x11daf3=('0'+(_0x1c5bf7[_0x245695(0x9e)]()+0x1))['slice'](-0x2),_0x2dc44f=_0x1c5bf7[_0x245695(0x110)](),_0xd4abd=_0x2dc44f+'-'+_0x11daf3+'-'+_0x2a3023;const _0x2c1b68=new suppliers_payment({'invoice':_0x203762,'date':_0x2dc44f+'-'+_0x11daf3+'-'+_0x2a3023,'suppliers':_0x32ca23,'reason':_0x245695(0xb5),'amount':_0x5bbb6f}),_0x5123c1=await _0x2c1b68[_0x245695(0x93)]();_0x23459c[_0x245695(0xc7)](_0x245695(0xc8),_0x245695(0x111)),_0x5e37f0['redirect'](_0x245695(0xe1));}catch(_0x58d2a2){console[_0x245695(0xbf)](_0x58d2a2);}}),module['exports']=router;function a0_0x20f1(){var _0x49ba63=['Purchase\x20Return','name','$return_product.product_name','email','isle','amount','log','product_name','json','$supplier_docs.mobile','findOne','final','aggregate','forEach','flash','success','/receive_payment/:id','get','primary_code_hide','119FxIJQZ','$product_details.primary_code','errors','$due_amount','87018eiHfxa','warehouse_name','render','$product_details.rack','$product_details.type','882441cLaeYz','10yQYhua','status','params','product_code_hide','Arabic\x20(ae)','date','1116736JYbPgB','Portuguese\x20(BR)','$supplier_docs','$return_product.total','$product_details.bay','/purchases_return/view','926eogNcb','$_id','purchases_return','$invoice','express','$date','level','supplier_docs','language','$product_details._id','stocks','return_product','$warehouse_name','product_details','note','243IVLiwJ','Router','received','$discount','6386208grxWZq','types','floorlevel','$supplier_docs.email','Arabic','product_code','product_stock','product_details.return_qtyproduct_details.return_qty','English','old_data','$total_amount','785oHtvbu','10bGAgRW','to_warehouse_name','due_amount','bay','room','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','return_purchase_edit','master','string','$return_product','bin','$return_product.price','2523356XWAlll','post','slice','getFullYear','payment\x20successfull','user','Hindi','return_purchase_invoice','getDate','Chinese','to_room','save','$product_details.bin','$receivable','purchase\x20return\x20successfully','find','secondary_code_hide','English\x20(US)','Portuguese','$product_details.product_name','/view/:id','pallet','getMonth','../models/all_models','$return_product.return_qty','purchase_quantity','$product_details.floorlevel','old_warehouse_data','body','foreach\x20newproduct','Spanish','map','suppliers','Raw\x20Materials','173624lmwEqj','$note','stock_quantity','French','/invoice/:id','redirect','type','return_qty','German','$product_details.product_code','/view','Received\x20For\x20Purchase\x20Return','invoice','findById','$name'];a0_0x20f1=function(){return _0x49ba63;};return a0_0x20f1();}