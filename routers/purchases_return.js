var a0_0x581d18=a0_0x551c;(function(_0x1df71e,_0x5d54af){var _0x271b29=a0_0x551c,_0x42ab9c=_0x1df71e();while(!![]){try{var _0x398ba1=parseInt(_0x271b29(0x1fd))/0x1*(parseInt(_0x271b29(0x248))/0x2)+-parseInt(_0x271b29(0x21d))/0x3*(parseInt(_0x271b29(0x1f2))/0x4)+-parseInt(_0x271b29(0x204))/0x5*(parseInt(_0x271b29(0x244))/0x6)+-parseInt(_0x271b29(0x23e))/0x7+parseInt(_0x271b29(0x1f0))/0x8+parseInt(_0x271b29(0x234))/0x9+parseInt(_0x271b29(0x259))/0xa;if(_0x398ba1===_0x5d54af)break;else _0x42ab9c['push'](_0x42ab9c['shift']());}catch(_0x78ed0){_0x42ab9c['push'](_0x42ab9c['shift']());}}}(a0_0xb9af,0x60d44));function a0_0xb9af(){var _0x38b21b=['success','183031ZQboPb','Arabic\x20(ae)','purchase_quantity','$invoice','invoice','back','date','1838255FgwKib','received','body','errors','return_qty','$supplier_docs','Raw\x20Materials','$_id','stock_data','$return_product.return_qty','map','product_stock','secondary_code_hide','Chinese','$date','$product_details.primary_code','Enabled','product_details','$supplier_docs.address','room','German','product_details.return_qtyproduct_details.return_qty','return_product','Hindi','English\x20(US)','1618773mvfUcI','$product_details.bay','types','Router','product_name','Portuguese','Arabic','old_warehouse_data','to_warehouse_name','/view','purchase\x20return\x20successfully','get','status','foreach\x20newproduct','/view/:id','$discount','$note','express','string','$return_product','forEach','$return_product.price','return_purchase_edit','345060UkVdlH','type','warehouse_name','payment\x20successfull','secondary_code','$product_details.secondary_code','$total_amount','/purchases_return/view','floorlevel','post','2502738OcGPDZ','master','bin','$product_details.product_name','Purchase\x20Return','Portuguese\x20(BR)','12sKYHkX','product_code_hide','supplier_docs','../middleware/auth','6CuGLQb','language','$product_details.bin','/invoice/:id','to_room','json','../public/language/languages.json','name','getDate','primary_code_hide','old_data','/receive_payment/:id','email','$product_details.type','stocks','$product_details._id','$receivable','9855760NorzYz','level','pallet','$return_product.product_name','log','due_amount','note','find','aggregate','$product_details.floorlevel','getFullYear','flash','params','return_purchase_invoice','final','render','findById','$product_details.storage','$received','$product_details.product_stock','purchases_return','$product_details','$product_details.rack','isle','English','$name','3648240lohzDj','French','4onbObI','redirect','$return_product.total','../models/all_models','Spanish','exports','user','findOne','save','bay'];a0_0xb9af=function(){return _0x38b21b;};return a0_0xb9af();}const express=require(a0_0x581d18(0x22e)),app=express(),router=express[a0_0x581d18(0x220)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require(a0_0x581d18(0x1f5)),auth=require(a0_0x581d18(0x247)),users=require(a0_0x581d18(0x24e));function a0_0x551c(_0x430694,_0x25b212){var _0xb9afbf=a0_0xb9af();return a0_0x551c=function(_0x551c0f,_0x2422ec){_0x551c0f=_0x551c0f-0x1e8;var _0x86c3a=_0xb9afbf[_0x551c0f];return _0x86c3a;},a0_0x551c(_0x430694,_0x25b212);}router[a0_0x581d18(0x228)](a0_0x581d18(0x226),auth,async(_0x415fb8,_0x5087d1)=>{var _0x102db0=a0_0x581d18;try{const {username:_0x44fd61,email:_0x2a3bb1,role:_0x573aad}=_0x415fb8[_0x102db0(0x1f8)],_0x23ae76=_0x415fb8[_0x102db0(0x1f8)],_0x43d0f0=await profile[_0x102db0(0x1f9)]({'email':_0x23ae76[_0x102db0(0x254)]}),_0x2349f7=await master_shop[_0x102db0(0x260)]();console[_0x102db0(0x25d)](_0x102db0(0x23f),_0x2349f7);const _0x55274c=await purchases_return[_0x102db0(0x261)]([{'$lookup':{'from':'suppliers','localField':'suppliers','foreignField':_0x102db0(0x24f),'as':_0x102db0(0x246)}},{'$unwind':_0x102db0(0x230)},{'$unwind':_0x102db0(0x209)},{'$group':{'_id':_0x102db0(0x20b),'invoice':{'$first':_0x102db0(0x200)},'date':{'$first':_0x102db0(0x212)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':'$warehouse_name'},'product_name':{'$first':_0x102db0(0x25c)},'return_qty':{'$first':_0x102db0(0x20d)},'price':{'$first':_0x102db0(0x232)},'total':{'$sum':_0x102db0(0x1f4)},'note':{'$first':_0x102db0(0x22d)},'total_amount':{'$first':_0x102db0(0x23a)},'discount':{'$first':_0x102db0(0x22c)},'receivable':{'$first':_0x102db0(0x258)},'received':{'$first':_0x102db0(0x1e8)},'due_amount':{'$first':'$due_amount'},'mobile':{'$first':'$supplier_docs.mobile'},'email':{'$first':'$supplier_docs.email'},'address':{'$first':_0x102db0(0x216)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console[_0x102db0(0x25d)](_0x55274c);if(_0x2349f7[0x0]['language']==_0x102db0(0x21c)){var _0x155542=users['English'];console[_0x102db0(0x25d)](_0x155542);}else{if(_0x2349f7[0x0][_0x102db0(0x249)]==_0x102db0(0x21b))var _0x155542=users[_0x102db0(0x21b)];else{if(_0x2349f7[0x0][_0x102db0(0x249)]==_0x102db0(0x218))var _0x155542=users[_0x102db0(0x218)];else{if(_0x2349f7[0x0][_0x102db0(0x249)]=='Spanish')var _0x155542=users[_0x102db0(0x1f6)];else{if(_0x2349f7[0x0][_0x102db0(0x249)]==_0x102db0(0x1f1))var _0x155542=users[_0x102db0(0x1f1)];else{if(_0x2349f7[0x0][_0x102db0(0x249)]==_0x102db0(0x243))var _0x155542=users[_0x102db0(0x222)];else{if(_0x2349f7[0x0]['language']==_0x102db0(0x211))var _0x155542=users[_0x102db0(0x211)];else{if(_0x2349f7[0x0][_0x102db0(0x249)]==_0x102db0(0x1fe))var _0x155542=users[_0x102db0(0x223)];}}}}}}}_0x5087d1[_0x102db0(0x268)](_0x102db0(0x1ea),{'success':_0x415fb8['flash'](_0x102db0(0x1fc)),'errors':_0x415fb8[_0x102db0(0x264)](_0x102db0(0x207)),'role':_0x23ae76,'profile':_0x43d0f0,'master_shop':_0x2349f7,'user':_0x55274c,'language':_0x155542});}catch(_0x103657){console[_0x102db0(0x25d)](_0x103657);}}),router[a0_0x581d18(0x228)]('/view/:id',auth,async(_0x46acab,_0x1091e5)=>{var _0x252f6b=a0_0x581d18;try{const {username:_0x2fe55c,email:_0x394920,role:_0x3677e7}=_0x46acab[_0x252f6b(0x1f8)],_0x3d5d8e=_0x46acab[_0x252f6b(0x1f8)],_0x56e281=await profile['findOne']({'email':_0x3d5d8e[_0x252f6b(0x254)]}),_0x4afa92=await product['find']({}),_0x16394f=await master_shop['find']();console['log'](_0x252f6b(0x23f),_0x16394f),console[_0x252f6b(0x25d)](_0x46acab[_0x252f6b(0x206)]);const _0x3b87a2=_0x46acab[_0x252f6b(0x265)]['id'],_0xc42270=await purchases_return[_0x252f6b(0x269)](_0x3b87a2);console['log'](_0xc42270);const _0x5570dc=await warehouse['aggregate']([{'$match':{'name':_0xc42270[_0x252f6b(0x236)],'room':_0xc42270[_0x252f6b(0x217)]}},{'$unwind':_0x252f6b(0x1eb)},{'$group':{'_id':_0x252f6b(0x257),'name':{'$first':_0x252f6b(0x241)},'product_stock':{'$first':_0x252f6b(0x1e9)},'bay':{'$first':_0x252f6b(0x21e)},'bin':{'$first':_0x252f6b(0x24a)},'type':{'$first':_0x252f6b(0x255)},'floorlevel':{'$first':_0x252f6b(0x262)},'primary_code':{'$first':_0x252f6b(0x213)},'secondary_code':{'$first':_0x252f6b(0x239)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x252f6b(0x26a)},'rack':{'$first':_0x252f6b(0x1ec)}}}]);warehouse_data=await warehouse[_0x252f6b(0x261)]([{'$match':{'status':_0x252f6b(0x214),'name':'Return\x20Goods','warehouse_category':_0x252f6b(0x20a)}},{'$group':{'_id':_0x252f6b(0x1ef),'name':{'$first':_0x252f6b(0x1ef)}}},{'$sort':{'name':0x1}}]),console[_0x252f6b(0x25d)](_0x252f6b(0x20c),_0x5570dc);if(_0x16394f[0x0][_0x252f6b(0x249)]==_0x252f6b(0x21c)){var _0xed22bd=users['English'];console[_0x252f6b(0x25d)](_0xed22bd);}else{if(_0x16394f[0x0][_0x252f6b(0x249)]==_0x252f6b(0x21b))var _0xed22bd=users[_0x252f6b(0x21b)];else{if(_0x16394f[0x0]['language']==_0x252f6b(0x218))var _0xed22bd=users[_0x252f6b(0x218)];else{if(_0x16394f[0x0][_0x252f6b(0x249)]==_0x252f6b(0x1f6))var _0xed22bd=users[_0x252f6b(0x1f6)];else{if(_0x16394f[0x0]['language']==_0x252f6b(0x1f1))var _0xed22bd=users['French'];else{if(_0x16394f[0x0][_0x252f6b(0x249)]==_0x252f6b(0x243))var _0xed22bd=users[_0x252f6b(0x222)];else{if(_0x16394f[0x0][_0x252f6b(0x249)]=='Chinese')var _0xed22bd=users[_0x252f6b(0x211)];else{if(_0x16394f[0x0][_0x252f6b(0x249)]==_0x252f6b(0x1fe))var _0xed22bd=users['Arabic'];}}}}}}}_0x1091e5[_0x252f6b(0x268)](_0x252f6b(0x233),{'success':_0x46acab[_0x252f6b(0x264)](_0x252f6b(0x1fc)),'errors':_0x46acab['flash']('errors'),'role':_0x3d5d8e,'master_shop':_0x16394f,'profile':_0x56e281,'user':_0xc42270,'stock':_0x5570dc,'product':_0x4afa92,'language':_0xed22bd,'warehouse':warehouse_data});}catch(_0x5b8200){console[_0x252f6b(0x25d)](_0x5b8200);}}),router[a0_0x581d18(0x23d)](a0_0x581d18(0x22b),auth,async(_0x1cd35b,_0x59c540)=>{var _0x12d255=a0_0x581d18;try{const _0x263c87=_0x1cd35b[_0x12d255(0x265)]['id'];console[_0x12d255(0x25d)](_0x263c87);const _0x27d884=await purchases_return[_0x12d255(0x1f9)]({'invoice':_0x1cd35b['body'][_0x12d255(0x201)]});console[_0x12d255(0x25d)](_0x12d255(0x252),_0x27d884);const _0x5dcfe6=await warehouse[_0x12d255(0x1f9)]({'name':_0x27d884['to_warehouse_name'],'room':_0x27d884[_0x12d255(0x24c)]});console[_0x12d255(0x25d)]('old_warehouse_data',_0x5dcfe6);const {invoice:_0x44e0ee,suppliers:_0x88ae5c,date:_0x6a0c2a,warehouse_name:_0x4f8328,product_name:_0x57bb6c,purchase_quantity:_0x327f08,stocks:_0x2c75f0,return_qty:_0x1a463f,note:_0x2a1cdc,Room_name:_0x59646a,level:_0xb473ea,isle:_0x5aec05,pallet:_0x5136b1,to_warehouse_name:_0x406ad1,to_Room_name:_0x5bf764}=_0x1cd35b[_0x12d255(0x206)];if(typeof _0x57bb6c==_0x12d255(0x22f))var _0x235210=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x221)]],_0x1aab48=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x1ff)]],_0x337630=[_0x1cd35b[_0x12d255(0x206)]['stocks']],_0x34d5b7=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x208)]],_0x51a8ce=[_0x1cd35b['body'][_0x12d255(0x25a)]],_0x44907b=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x1ed)]],_0x3d04b5=[_0x1cd35b['body'][_0x12d255(0x25b)]],_0x17c694=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x21f)]],_0xbd3085=[_0x1cd35b[_0x12d255(0x206)]['product_code_hide']],_0x2c5ec8=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x251)]],_0x194bd6=[_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x210)]];else var _0x235210=[..._0x1cd35b[_0x12d255(0x206)][_0x12d255(0x221)]],_0x1aab48=[..._0x1cd35b[_0x12d255(0x206)]['purchase_quantity']],_0x337630=[..._0x1cd35b[_0x12d255(0x206)][_0x12d255(0x256)]],_0x34d5b7=[..._0x1cd35b[_0x12d255(0x206)][_0x12d255(0x208)]],_0x51a8ce=[..._0x1cd35b['body'][_0x12d255(0x25a)]],_0x44907b=[..._0x1cd35b[_0x12d255(0x206)][_0x12d255(0x1ed)]],_0x3d04b5=[..._0x1cd35b['body'][_0x12d255(0x25b)]],_0xbd3085=[..._0x1cd35b[_0x12d255(0x206)][_0x12d255(0x245)]],_0x2c5ec8=[..._0x1cd35b['body']['primary_code_hide']],_0x194bd6=[..._0x1cd35b[_0x12d255(0x206)]['secondary_code_hide']],_0x17c694=[..._0x1cd35b['body'][_0x12d255(0x21f)]];const _0x2e8c30=_0x235210[_0x12d255(0x20e)](_0xcf9f41=>{return _0xcf9f41={'product_name':_0xcf9f41};});_0x1aab48[_0x12d255(0x231)]((_0xe80ac2,_0x15b7d5)=>{_0x2e8c30[_0x15b7d5]['purchase_quantity']=_0xe80ac2;}),_0x337630[_0x12d255(0x231)]((_0x3d01a0,_0x533400)=>{_0x2e8c30[_0x533400]['stock_quantity']=_0x3d01a0;}),_0x34d5b7[_0x12d255(0x231)]((_0x2ea0fd,_0x23c0d2)=>{var _0x302991=_0x12d255;_0x2e8c30[_0x23c0d2][_0x302991(0x208)]=_0x2ea0fd;}),_0x51a8ce['forEach']((_0x135cbe,_0x1ca18a)=>{var _0x148611=_0x12d255;_0x2e8c30[_0x1ca18a][_0x148611(0x1fb)]=_0x135cbe;}),_0x44907b[_0x12d255(0x231)]((_0x1fc07d,_0x19d4c1)=>{var _0x233667=_0x12d255;_0x2e8c30[_0x19d4c1][_0x233667(0x240)]=_0x1fc07d;}),_0x3d04b5['forEach']((_0x5a0a46,_0x294592)=>{var _0x500613=_0x12d255;_0x2e8c30[_0x294592][_0x500613(0x23c)]=_0x5a0a46;}),_0xbd3085[_0x12d255(0x231)]((_0xd534e3,_0xa20e3d)=>{_0x2e8c30[_0xa20e3d]['product_code']=_0xd534e3;}),_0x2c5ec8['forEach']((_0x5d09f7,_0x279c37)=>{_0x2e8c30[_0x279c37]['primary_code']=_0x5d09f7;}),_0x194bd6[_0x12d255(0x231)]((_0x10f3d9,_0x288c43)=>{var _0x575bd9=_0x12d255;_0x2e8c30[_0x288c43][_0x575bd9(0x238)]=_0x10f3d9;}),_0x17c694[_0x12d255(0x231)]((_0x5ab766,_0x1d41ac)=>{var _0x4ba708=_0x12d255;_0x2e8c30[_0x1d41ac][_0x4ba708(0x235)]=_0x5ab766;});var _0x33e10f=0x0;_0x2e8c30['forEach'](_0x33b379=>{var _0x38fda3=_0x12d255;console[_0x38fda3(0x25d)](_0x38fda3(0x22a),_0x33b379),(parseInt(_0x33b379[_0x38fda3(0x1ff)])<parseInt(_0x33b379[_0x38fda3(0x208)])||parseInt(_0x33b379['stock_quantity'])<parseInt(_0x33b379[_0x38fda3(0x208)])||parseInt(_0x33b379[_0x38fda3(0x208)])==0x0)&&_0x33e10f++;});if(_0x33e10f!=0x0)return _0x1cd35b['flash'](_0x12d255(0x207),'Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty'),_0x59c540['redirect'](_0x12d255(0x202));_0x27d884[_0x12d255(0x21a)][_0x12d255(0x231)](_0x3f2ded=>{var _0x530ada=_0x12d255;const _0x476e07=_0x5dcfe6[_0x530ada(0x215)][_0x530ada(0x20e)](_0x3729a2=>{var _0x2666f9=_0x530ada;_0x3729a2[_0x2666f9(0x221)]==_0x3f2ded['product_name']&&_0x3729a2[_0x2666f9(0x23c)]==_0x3f2ded[_0x2666f9(0x23c)]&&_0x3729a2[_0x2666f9(0x235)]==_0x3f2ded['type']&&_0x3729a2['bin']==_0x3f2ded[_0x2666f9(0x240)]&&_0x3729a2[_0x2666f9(0x1fb)]==_0x3f2ded[_0x2666f9(0x1fb)]&&(_0x3729a2['product_stock']=parseInt(_0x3729a2[_0x2666f9(0x20f)])+parseInt(_0x3f2ded[_0x2666f9(0x208)]));});}),console[_0x12d255(0x25d)](_0x12d255(0x224),_0x5dcfe6),await _0x5dcfe6['save'](),_0x27d884[_0x12d255(0x201)]=_0x44e0ee,_0x27d884['suppliers']=_0x88ae5c,_0x27d884[_0x12d255(0x203)]=_0x6a0c2a,_0x27d884[_0x12d255(0x236)]=_0x4f8328,_0x27d884[_0x12d255(0x21a)]=_0x2e8c30,_0x27d884[_0x12d255(0x25f)]=_0x2a1cdc,_0x27d884[_0x12d255(0x217)]=_0x59646a,_0x27d884[_0x12d255(0x225)]=_0x406ad1,_0x27d884[_0x12d255(0x24c)]=_0x5bf764;const _0x3e68af=await _0x27d884[_0x12d255(0x1fa)](),_0x2b8b59=await purchases_return[_0x12d255(0x1f9)]({'invoice':_0x1cd35b[_0x12d255(0x206)]['invoice']}),_0x5b7aef=await warehouse['findOne']({'name':_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x225)],'room':_0x1cd35b[_0x12d255(0x206)]['to_Room_name']});_0x2b8b59[_0x12d255(0x21a)][_0x12d255(0x231)](_0x12eb99=>{var _0x268396=_0x12d255;_0x5b7aef['product_details'][_0x268396(0x20e)](_0x1f6166=>{var _0xc7846a=_0x268396;_0x1f6166[_0xc7846a(0x221)]==_0x12eb99['product_name']&&_0x1f6166[_0xc7846a(0x25b)]==_0x12eb99[_0xc7846a(0x25b)]&&(_0x1f6166['product_stock']=parseInt(_0x1f6166['product_stock'])-parseInt(_0x12eb99[_0xc7846a(0x208)]),console[_0xc7846a(0x25d)](_0xc7846a(0x219),_0x12eb99[_0xc7846a(0x208)]));});}),console[_0x12d255(0x25d)](_0x12d255(0x267),_0x5b7aef),await _0x5b7aef[_0x12d255(0x1fa)]();const _0x2d68c3=await s_payment_data[_0x12d255(0x1f9)]({'invoice':_0x1cd35b[_0x12d255(0x206)][_0x12d255(0x201)],'reason':_0x12d255(0x242)});await _0x2d68c3[_0x12d255(0x1fa)](),_0x1cd35b['flash']('success',_0x12d255(0x227)),_0x59c540[_0x12d255(0x1f3)](_0x12d255(0x23b));}catch(_0x15d8b4){console[_0x12d255(0x25d)](_0x15d8b4),_0x59c540[_0x12d255(0x229)](0xc8)[_0x12d255(0x24d)]({'message':_0x15d8b4['message']});}}),router[a0_0x581d18(0x228)](a0_0x581d18(0x24b),auth,async(_0xfda1af,_0x481d5d)=>{var _0x3e135a=a0_0x581d18;try{const {username:_0x248499,email:_0x35d830,role:_0x1644f1}=_0xfda1af['user'],_0x5763fa=_0xfda1af['user'],_0x50d96e=await profile[_0x3e135a(0x1f9)]({'email':_0x5763fa[_0x3e135a(0x254)]}),_0x5537c5=await master_shop[_0x3e135a(0x260)]();console[_0x3e135a(0x25d)](_0x3e135a(0x23f),_0x5537c5);const _0x391390=_0xfda1af[_0x3e135a(0x265)]['id'],_0x1aebcf=await purchases_return['findById'](_0x391390);console['log'](_0x1aebcf);const _0x40cd49=await suppliers[_0x3e135a(0x1f9)]({'name':_0x1aebcf['suppliers']});console['log'](_0x40cd49);if(_0x5537c5[0x0][_0x3e135a(0x249)]=='English\x20(US)'){var _0xa58d59=users[_0x3e135a(0x1ee)];console[_0x3e135a(0x25d)](_0xa58d59);}else{if(_0x5537c5[0x0][_0x3e135a(0x249)]==_0x3e135a(0x21b))var _0xa58d59=users[_0x3e135a(0x21b)];else{if(_0x5537c5[0x0][_0x3e135a(0x249)]=='German')var _0xa58d59=users[_0x3e135a(0x218)];else{if(_0x5537c5[0x0][_0x3e135a(0x249)]==_0x3e135a(0x1f6))var _0xa58d59=users[_0x3e135a(0x1f6)];else{if(_0x5537c5[0x0]['language']==_0x3e135a(0x1f1))var _0xa58d59=users[_0x3e135a(0x1f1)];else{if(_0x5537c5[0x0][_0x3e135a(0x249)]=='Portuguese\x20(BR)')var _0xa58d59=users[_0x3e135a(0x222)];else{if(_0x5537c5[0x0]['language']==_0x3e135a(0x211))var _0xa58d59=users['Chinese'];else{if(_0x5537c5[0x0][_0x3e135a(0x249)]==_0x3e135a(0x1fe))var _0xa58d59=users['Arabic'];}}}}}}}_0x481d5d[_0x3e135a(0x268)](_0x3e135a(0x266),{'success':_0xfda1af[_0x3e135a(0x264)]('success'),'errors':_0xfda1af[_0x3e135a(0x264)](_0x3e135a(0x207)),'role':_0x5763fa,'profile':_0x50d96e,'master_shop':_0x5537c5,'supplier':_0x40cd49,'purchase':_0x1aebcf,'language':_0xa58d59});}catch(_0x4cbedd){console[_0x3e135a(0x25d)](_0x4cbedd);}}),router[a0_0x581d18(0x23d)](a0_0x581d18(0x253),auth,async(_0x3df7af,_0x30f1bb)=>{var _0x1eba39=a0_0x581d18;try{const _0x31019a=_0x3df7af[_0x1eba39(0x265)]['id'],{invoice:_0x21b30d,suppliers:_0x49e51d,receivable_amount:_0x2a6230,received_amount:_0x379f38}=_0x3df7af[_0x1eba39(0x206)],_0x17bf52=await purchases_return[_0x1eba39(0x269)](_0x31019a);console[_0x1eba39(0x25d)](_0x17bf52);var _0x481609=_0x2a6230-_0x379f38;console[_0x1eba39(0x25d)](_0x379f38),_0x17bf52[_0x1eba39(0x205)]=parseFloat(_0x379f38)+parseFloat(_0x17bf52[_0x1eba39(0x205)]),_0x17bf52[_0x1eba39(0x25e)]=_0x481609,console['log'](_0x17bf52);const _0x3f7206=await _0x17bf52['save'](),_0x46750d=await s_payment_data['findOne']({'invoice':_0x3df7af[_0x1eba39(0x206)][_0x1eba39(0x201)],'reason':_0x1eba39(0x242)});_0x46750d['amount']=_0x481609,await _0x46750d['save']();let _0xb2fd3b=new Date(),_0x3fd285=('0'+_0xb2fd3b[_0x1eba39(0x250)]())['slice'](-0x2),_0x11cb42=('0'+(_0xb2fd3b['getMonth']()+0x1))['slice'](-0x2),_0x18362b=_0xb2fd3b[_0x1eba39(0x263)](),_0x436f2c=_0x18362b+'-'+_0x11cb42+'-'+_0x3fd285;const _0x591064=new suppliers_payment({'invoice':_0x21b30d,'date':_0x18362b+'-'+_0x11cb42+'-'+_0x3fd285,'suppliers':_0x49e51d,'reason':'Received\x20For\x20Purchase\x20Return','amount':_0x379f38}),_0x16fdef=await _0x591064[_0x1eba39(0x1fa)]();_0x3df7af['flash'](_0x1eba39(0x1fc),_0x1eba39(0x237)),_0x30f1bb[_0x1eba39(0x1f3)](_0x1eba39(0x23b));}catch(_0x1ff9f6){console[_0x1eba39(0x25d)](_0x1ff9f6);}}),module[a0_0x581d18(0x1f7)]=router;