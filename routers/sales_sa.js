const a0_0x430dc2=a0_0x33bc;(function(_0x679906,_0x54e5b1){const _0xdd3c94=a0_0x33bc,_0x1f17b9=_0x679906();while(!![]){try{const _0x12cd3c=parseInt(_0xdd3c94(0xb3))/0x1*(-parseInt(_0xdd3c94(0x89))/0x2)+-parseInt(_0xdd3c94(0x82))/0x3+parseInt(_0xdd3c94(0x9f))/0x4+-parseInt(_0xdd3c94(0xcb))/0x5+-parseInt(_0xdd3c94(0xaf))/0x6*(parseInt(_0xdd3c94(0xa6))/0x7)+-parseInt(_0xdd3c94(0xc6))/0x8*(-parseInt(_0xdd3c94(0xc5))/0x9)+parseInt(_0xdd3c94(0xb4))/0xa;if(_0x12cd3c===_0x54e5b1)break;else _0x1f17b9['push'](_0x1f17b9['shift']());}catch(_0x52695e){_0x1f17b9['push'](_0x1f17b9['shift']());}}}(a0_0x4012,0xc97f9));function a0_0x4012(){const _0x52bddd=['diskStorage','findById','findOne','padStart','exports','id_transaction_from','Sales\x20add\x20successfully','invoice_starts','find','redirect','English\x20(US)','view_sales_sa','./public/sales_invoice','7533ckkFbV','9392SAuTNg','Invoice\x20created\x20with\x20incremented\x20start\x20value:','German','prod_code','language','1283910gPWRTA','valueOf','errors','_id','Hindi','/add_sales_notes','Chinese','$product_list','/volume_setup','render','body','ObjectId','log','exceljs','/getProductData','getPrimUnitNo','conversion_unit','quantity','add_sales_sa','originalname','/product_data_id','English','Spanish','post','../models/all_models','2836353GQFRQB','../public/language/languages.json','primary_code','product_name','totalprice','isFG','forEach','82756fxforO','success','Types','adj_dicount_price','email','flash','string','../middleware/auth','save','all_sales_sa','Arabic\x20(ae)','image','express','user','true','Portuguese','/add_sales','Router','unit','French','/sales_sa/view_sales/','/product_data','4873980EQBCxp','prod_cat','map','totalPrice','no_per_unit','adj_discount','get','68957eOjotJ','/view_sales/:id','xlsx','/customer_data','Arabic','price','secondary_unit','prod_name','id_transaction','546yWaxuP','toString','mongoose','tmpisFG','2hygdcQ','8056340SqHlJP','Portuguese\x20(BR)','json','aggregate'];a0_0x4012=function(){return _0x52bddd;};return a0_0x4012();}function a0_0x33bc(_0x28b365,_0x17434e){const _0x4012a3=a0_0x4012();return a0_0x33bc=function(_0x33bc39,_0x2ee8a0){_0x33bc39=_0x33bc39-0x73;let _0x126fda=_0x4012a3[_0x33bc39];return _0x126fda;},a0_0x33bc(_0x28b365,_0x17434e);}const express=require(a0_0x430dc2(0x95)),app=express(),router=express[a0_0x430dc2(0x9a)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa,discount_volume_db}=require(a0_0x430dc2(0x81)),auth=require(a0_0x430dc2(0x90)),users=require(a0_0x430dc2(0x83)),excelJS=require(a0_0x430dc2(0x76)),xlsx=require(a0_0x430dc2(0xa8)),mongoose=require(a0_0x430dc2(0xb1)),multer=require('multer'),storage=multer[a0_0x430dc2(0xb8)]({'destination':(_0x385d6b,_0xfd68ff,_0x5f4acb)=>{const _0x5a49e6=a0_0x430dc2;_0x5f4acb(null,_0x5a49e6(0xc4));},'filename':(_0x10a854,_0x3e09ce,_0x18497d)=>{const _0xba5b66=a0_0x430dc2;_0x18497d(null,Date['now']()+'~'+_0x3e09ce[_0xba5b66(0x7c)]);}}),upload=multer({'storage':storage});router['get']('/',auth,async(_0x1e279f,_0x1ec1e2)=>{const _0x4874ab=a0_0x430dc2;try{const _0x2484b9=await master_shop[_0x4874ab(0xc0)](),_0x1d75df=_0x1e279f[_0x4874ab(0x96)],_0x29a261=await profile[_0x4874ab(0xba)]({'email':_0x1d75df[_0x4874ab(0x8d)]}),_0x3e40f0=await staff[_0x4874ab(0xba)]({'email':_0x1d75df['email']}),_0x4d25e1=await sales_sa[_0x4874ab(0xc0)]({'sales_staff_id':_0x3e40f0['_id']});if(_0x2484b9[0x0][_0x4874ab(0xca)]==_0x4874ab(0xc2))var _0x4188eb=users[_0x4874ab(0x7e)];else{if(_0x2484b9[0x0]['language']==_0x4874ab(0xcf))var _0x4188eb=users['Hindi'];else{if(_0x2484b9[0x0][_0x4874ab(0xca)]=='German')var _0x4188eb=users[_0x4874ab(0xc8)];else{if(_0x2484b9[0x0][_0x4874ab(0xca)]==_0x4874ab(0x7f))var _0x4188eb=users[_0x4874ab(0x7f)];else{if(_0x2484b9[0x0][_0x4874ab(0xca)]==_0x4874ab(0x9c))var _0x4188eb=users[_0x4874ab(0x9c)];else{if(_0x2484b9[0x0][_0x4874ab(0xca)]==_0x4874ab(0xb5))var _0x4188eb=users[_0x4874ab(0x98)];else{if(_0x2484b9[0x0][_0x4874ab(0xca)]=='Chinese')var _0x4188eb=users[_0x4874ab(0xd1)];else{if(_0x2484b9[0x0][_0x4874ab(0xca)]==_0x4874ab(0x93))var _0x4188eb=users[_0x4874ab(0xaa)];}}}}}}}_0x1ec1e2[_0x4874ab(0xd4)](_0x4874ab(0x92),{'success':_0x1e279f[_0x4874ab(0x8e)](_0x4874ab(0x8a)),'errors':_0x1e279f[_0x4874ab(0x8e)](_0x4874ab(0xcd)),'master_shop':_0x2484b9,'profile':_0x29a261,'role':_0x1d75df,'language':_0x4188eb,'product_list':_0x3e40f0['product_list'],'sales_mine':_0x4d25e1,'staff_arr':_0x3e40f0});}catch(_0x2738cd){console[_0x4874ab(0x75)](_0x2738cd);}}),router[a0_0x430dc2(0xa5)](a0_0x430dc2(0x99),auth,async(_0x3600b9,_0x1f3e75)=>{const _0x225020=a0_0x430dc2;try{const _0x3bfbb3=await master_shop[_0x225020(0xc0)](),_0x1fe36a=_0x3600b9[_0x225020(0x96)],_0x481c90=await profile[_0x225020(0xba)]({'email':_0x1fe36a['email']}),_0x321b92=await staff[_0x225020(0xba)]({'email':_0x1fe36a[_0x225020(0x8d)]}),_0x580f3f=await customer[_0x225020(0xc0)]({'agent_id':_0x321b92[_0x225020(0xce)]});if(_0x3bfbb3[0x0][_0x225020(0xca)]==_0x225020(0xc2))var _0x1c9cfb=users['English'];else{if(_0x3bfbb3[0x0][_0x225020(0xca)]==_0x225020(0xcf))var _0x1c9cfb=users[_0x225020(0xcf)];else{if(_0x3bfbb3[0x0][_0x225020(0xca)]==_0x225020(0xc8))var _0x1c9cfb=users[_0x225020(0xc8)];else{if(_0x3bfbb3[0x0][_0x225020(0xca)]=='Spanish')var _0x1c9cfb=users[_0x225020(0x7f)];else{if(_0x3bfbb3[0x0]['language']==_0x225020(0x9c))var _0x1c9cfb=users[_0x225020(0x9c)];else{if(_0x3bfbb3[0x0][_0x225020(0xca)]==_0x225020(0xb5))var _0x1c9cfb=users[_0x225020(0x98)];else{if(_0x3bfbb3[0x0][_0x225020(0xca)]=='Chinese')var _0x1c9cfb=users[_0x225020(0xd1)];else{if(_0x3bfbb3[0x0][_0x225020(0xca)]==_0x225020(0x93))var _0x1c9cfb=users['Arabic'];}}}}}}}_0x1f3e75[_0x225020(0xd4)](_0x225020(0x7b),{'success':_0x3600b9[_0x225020(0x8e)](_0x225020(0x8a)),'errors':_0x3600b9[_0x225020(0x8e)](_0x225020(0xcd)),'master_shop':_0x3bfbb3,'profile':_0x481c90,'role':_0x1fe36a,'language':_0x1c9cfb,'customer':_0x580f3f,'staff_arr':_0x321b92});}catch(_0x2d6299){console[_0x225020(0x75)](_0x2d6299);}}),router['get'](a0_0x430dc2(0xa7),auth,async(_0x31f9e7,_0x4275ad)=>{const _0x66e899=a0_0x430dc2;try{const _0x3e864b=await master_shop['find'](),_0x1919c7=_0x31f9e7[_0x66e899(0x96)],_0x2fbb4a=await profile[_0x66e899(0xba)]({'email':_0x1919c7[_0x66e899(0x8d)]}),_0x16f97f=await staff[_0x66e899(0xba)]({'email':_0x1919c7[_0x66e899(0x8d)]}),_0x2878f1=await customer['find']({'agent_id':_0x16f97f['_id']}),_0x312a56=_0x31f9e7['params']['id'],_0x6c4445=await sales_sa[_0x66e899(0xb9)](_0x312a56);if(_0x3e864b[0x0][_0x66e899(0xca)]=='English\x20(US)')var _0x67f3=users[_0x66e899(0x7e)];else{if(_0x3e864b[0x0][_0x66e899(0xca)]=='Hindi')var _0x67f3=users[_0x66e899(0xcf)];else{if(_0x3e864b[0x0][_0x66e899(0xca)]==_0x66e899(0xc8))var _0x67f3=users['German'];else{if(_0x3e864b[0x0][_0x66e899(0xca)]==_0x66e899(0x7f))var _0x67f3=users[_0x66e899(0x7f)];else{if(_0x3e864b[0x0][_0x66e899(0xca)]==_0x66e899(0x9c))var _0x67f3=users[_0x66e899(0x9c)];else{if(_0x3e864b[0x0][_0x66e899(0xca)]==_0x66e899(0xb5))var _0x67f3=users[_0x66e899(0x98)];else{if(_0x3e864b[0x0]['language']==_0x66e899(0xd1))var _0x67f3=users[_0x66e899(0xd1)];else{if(_0x3e864b[0x0]['language']==_0x66e899(0x93))var _0x67f3=users['Arabic'];}}}}}}}_0x4275ad['render'](_0x66e899(0xc3),{'success':_0x31f9e7['flash'](_0x66e899(0x8a)),'errors':_0x31f9e7[_0x66e899(0x8e)](_0x66e899(0xcd)),'master_shop':_0x3e864b,'profile':_0x2fbb4a,'role':_0x1919c7,'language':_0x67f3,'customer':_0x2878f1,'sales_sa':_0x6c4445,'staff_arr':_0x16f97f});}catch(_0x12bf34){console['log'](_0x12bf34);}}),router[a0_0x430dc2(0x80)]('/add_sales',auth,upload['single'](a0_0x430dc2(0x94)),async(_0x5562e6,_0x1a0df2)=>{const _0x582780=a0_0x430dc2;try{const {customer:_0x1dde80,date:_0x4eab41,prod_code:_0x2d98f9,note:_0x4cebd4,paid_status:_0x533442,DSI:_0x27f895,cash_amount:_0x3960ae,amount_data:_0xdbf795,bank_data:_0x4908e3,check_no:_0x2ddcba,due_date:_0x161e33}=_0x5562e6[_0x582780(0x73)],_0x5cdd24=_0x5562e6['file']['filename'];if(typeof _0x2d98f9==_0x582780(0x8f))var _0x167ce9=[_0x5562e6['body'][_0x582780(0xc9)]],_0xa8689d=[_0x5562e6['body'][_0x582780(0xad)]],_0x3c4997=[_0x5562e6[_0x582780(0x73)][_0x582780(0x84)]],_0xb0b5e4=[_0x5562e6[_0x582780(0x73)][_0x582780(0x7a)]],_0x443abe=[_0x5562e6[_0x582780(0x73)][_0x582780(0x9b)]],_0x32b5d3=[_0x5562e6[_0x582780(0x73)][_0x582780(0xab)]],_0x2eb296=[_0x5562e6[_0x582780(0x73)][_0x582780(0xa2)]],_0x3fdd04=[_0x5562e6[_0x582780(0x73)][_0x582780(0xae)]],_0x27e421=[_0x5562e6[_0x582780(0x73)][_0x582780(0x8c)]],_0x1f6f28=[_0x5562e6[_0x582780(0x73)][_0x582780(0xb2)]],_0x152ed3=[_0x5562e6[_0x582780(0x73)][_0x582780(0xa3)]],_0x2d5d8f=[_0x5562e6[_0x582780(0x73)][_0x582780(0x78)]],_0xb583a3=[_0x5562e6[_0x582780(0x73)][_0x582780(0xa0)]],_0x303d10=[_0x5562e6[_0x582780(0x73)][_0x582780(0xac)]],_0x44b1be=[_0x5562e6[_0x582780(0x73)]['conversion_unit']];else var _0x167ce9=[..._0x5562e6[_0x582780(0x73)][_0x582780(0xc9)]],_0xa8689d=[..._0x5562e6[_0x582780(0x73)]['prod_name']],_0x3c4997=[..._0x5562e6[_0x582780(0x73)]['primary_code']],_0xb0b5e4=[..._0x5562e6[_0x582780(0x73)][_0x582780(0x7a)]],_0x443abe=[..._0x5562e6['body'][_0x582780(0x9b)]],_0x32b5d3=[..._0x5562e6[_0x582780(0x73)][_0x582780(0xab)]],_0x2eb296=[..._0x5562e6[_0x582780(0x73)]['totalPrice']],_0x3fdd04=[..._0x5562e6[_0x582780(0x73)][_0x582780(0xae)]],_0x27e421=[..._0x5562e6[_0x582780(0x73)]['adj_dicount_price']],_0x1f6f28=[..._0x5562e6[_0x582780(0x73)]['tmpisFG']],_0x152ed3=[..._0x5562e6['body'][_0x582780(0xa3)]],_0x2d5d8f=[..._0x5562e6['body'][_0x582780(0x78)]],_0xb583a3=[..._0x5562e6[_0x582780(0x73)]['prod_cat']],_0x303d10=[..._0x5562e6[_0x582780(0x73)][_0x582780(0xac)]],_0x44b1be=[..._0x5562e6[_0x582780(0x73)][_0x582780(0x79)]];const _0x24931e=_0x167ce9[_0x582780(0xa1)](_0xf7d40f=>{return _0xf7d40f={'product_code':_0xf7d40f};});_0xa8689d[_0x582780(0x88)]((_0x1b6b9f,_0x2d5b67)=>{const _0x271e86=_0x582780;_0x24931e[_0x2d5b67][_0x271e86(0x85)]=_0x1b6b9f;}),_0x3c4997[_0x582780(0x88)]((_0x1442a8,_0xa60ff9)=>{const _0x25bdf8=_0x582780;_0x24931e[_0xa60ff9][_0x25bdf8(0x84)]=_0x1442a8;}),_0x152ed3[_0x582780(0x88)]((_0x151cb6,_0xc4d1cf)=>{const _0x57243b=_0x582780;_0x24931e[_0xc4d1cf][_0x57243b(0xa3)]=_0x151cb6;}),_0xb0b5e4[_0x582780(0x88)]((_0x22bf45,_0x3bdf8f)=>{const _0x3cb289=_0x582780;_0x24931e[_0x3bdf8f][_0x3cb289(0x7a)]=_0x22bf45;}),_0x443abe['forEach']((_0x139102,_0x4f13a7)=>{const _0x12fbb3=_0x582780;_0x24931e[_0x4f13a7][_0x12fbb3(0x9b)]=_0x139102;}),_0x32b5d3[_0x582780(0x88)]((_0x5c909c,_0x3be2c9)=>{_0x24931e[_0x3be2c9]['price']=_0x5c909c;}),_0x2eb296[_0x582780(0x88)]((_0x5c78d4,_0x1a258e)=>{const _0x10a8f9=_0x582780;_0x24931e[_0x1a258e][_0x10a8f9(0x86)]=_0x5c78d4;}),_0x3fdd04['forEach']((_0x5f5442,_0x2db739)=>{const _0x5d2366=_0x582780;_0x24931e[_0x2db739][_0x5d2366(0xbd)]=_0x5f5442;}),_0x27e421['forEach']((_0x55cc2c,_0x5ddd04)=>{const _0x3fd065=_0x582780;_0x24931e[_0x5ddd04][_0x3fd065(0xa4)]=_0x55cc2c;}),_0x1f6f28['forEach']((_0x15d299,_0x5713a2)=>{const _0x225f52=_0x582780;_0x24931e[_0x5713a2][_0x225f52(0x87)]=_0x15d299;}),_0x303d10[_0x582780(0x88)]((_0x20a260,_0x2a5c63)=>{const _0x2b1df0=_0x582780;_0x24931e[_0x2a5c63][_0x2b1df0(0xac)]=_0x20a260;}),_0x2d5d8f[_0x582780(0x88)]((_0x3bc5b4,_0x505ccd)=>{_0x24931e[_0x505ccd]['real_qty_unit_val']=_0x3bc5b4;}),_0xb583a3[_0x582780(0x88)]((_0x35648a,_0x1fce72)=>{const _0x5bb7d5=_0x582780;_0x24931e[_0x1fce72][_0x5bb7d5(0xa0)]=_0x35648a;}),_0x44b1be['forEach']((_0x214a44,_0x506488)=>{_0x24931e[_0x506488]['conversion_data']=_0x214a44;});const _0x49c487=new invoice_sa();await _0x49c487[_0x582780(0x91)]();const _0x578c25=_0x5562e6[_0x582780(0x96)],_0x43a5d7=await staff[_0x582780(0xba)]({'email':_0x578c25[_0x582780(0x8d)]}),_0x161905=new sales_sa({'invoice':_0x49c487['invoice_starts'][_0x582780(0xb0)]()[_0x582780(0xbb)](0x8,'0'),'customer':_0x1dde80,'file':_0x5cdd24,'date':_0x4eab41,'sale_product':_0x24931e,'note':_0x4cebd4,'sales_staff_id':_0x43a5d7[_0x582780(0xce)][_0x582780(0xcc)](),'paid':_0x533442,'dsi':_0x27f895,'cash':_0x3960ae,'amount':_0xdbf795,'bank':_0x4908e3,'check_no':_0x2ddcba,'due_date':_0x161e33}),_0x55872e=await _0x161905[_0x582780(0x91)]();console['log'](_0x582780(0xc7),_0x49c487['invoice_starts']['toString']()[_0x582780(0xbb)](0x8,'0'));const _0x47b480=mongoose[_0x582780(0x8b)][_0x582780(0x74)];_0x5562e6[_0x582780(0x8e)](_0x582780(0x8a),_0x582780(0xbe)),_0x1a0df2[_0x582780(0xc1)](_0x582780(0x9d)+_0x55872e['_id']);}catch(_0x15783a){console[_0x582780(0x75)](_0x15783a);}}),router['post'](a0_0x430dc2(0xd0),auth,async(_0x34d0bf,_0x481f8d)=>{const _0x5dc003=a0_0x430dc2;try{const {date_data:_0x2d3d23,note_data:_0x24138f,status_data:_0x4660c9}=_0x34d0bf[_0x5dc003(0x73)],_0x840d75=new invoice_sa();await _0x840d75[_0x5dc003(0x91)]();const _0x3b7888=_0x34d0bf[_0x5dc003(0x96)],_0x4680ad=await staff[_0x5dc003(0xba)]({'email':_0x3b7888[_0x5dc003(0x8d)]}),_0x25039c=new sales_sa({'invoice':_0x840d75[_0x5dc003(0xbf)][_0x5dc003(0xb0)]()['padStart'](0x8,'0'),'status_data':_0x4660c9,'date':_0x2d3d23,'note':_0x24138f,'sales_staff_id':_0x4680ad[_0x5dc003(0xce)][_0x5dc003(0xcc)]()}),_0x17b11b=await _0x25039c[_0x5dc003(0x91)]();console['log'](_0x5dc003(0xc7),_0x840d75[_0x5dc003(0xbf)]['toString']()[_0x5dc003(0xbb)](0x8,'0'));const _0x211dde=mongoose['Types'][_0x5dc003(0x74)];_0x34d0bf['flash'](_0x5dc003(0x8a),_0x5dc003(0xbe)),_0x481f8d[_0x5dc003(0xc1)](_0x5dc003(0x9d)+_0x17b11b[_0x5dc003(0xce)]);}catch(_0x8a8140){console[_0x5dc003(0x75)](_0x8a8140);}}),router[a0_0x430dc2(0x80)]('/product_list',auth,async(_0x5b764a,_0x21796b)=>{const _0x500ed8=a0_0x430dc2;try{const _0x561c42=_0x5b764a['user'],_0x4335c1=await profile[_0x500ed8(0xba)]({'email':_0x561c42[_0x500ed8(0x8d)]}),_0x218a03=await staff[_0x500ed8(0xb7)]([{'$match':{'email':_0x561c42[_0x500ed8(0x8d)]}},{'$unwind':_0x500ed8(0xd2)},{'$match':{'product_list.isConfirm':'true'}}]);_0x21796b[_0x500ed8(0xb6)](_0x218a03);}catch(_0x2ac662){}}),router[a0_0x430dc2(0x80)](a0_0x430dc2(0xa9),auth,async(_0x42cbdf,_0x2e248c)=>{const _0x8748b9=a0_0x430dc2;try{const {customer_name:_0xe98d1}=_0x42cbdf[_0x8748b9(0x73)],_0x3bb4e8=await customer[_0x8748b9(0xba)]({'name':_0xe98d1});_0x2e248c[_0x8748b9(0xb6)](_0x3bb4e8);}catch(_0x504400){}}),router[a0_0x430dc2(0x80)](a0_0x430dc2(0x9e),auth,async(_0x4aa6ca,_0xe98199)=>{const _0x17f608=a0_0x430dc2;try{const _0x350ad7=_0x4aa6ca[_0x17f608(0x96)],{id_data:_0x4bb0a5}=_0x4aa6ca[_0x17f608(0x73)],_0x4272d8=await profile['findOne']({'email':_0x350ad7[_0x17f608(0x8d)]}),_0x4f2b73=mongoose[_0x17f608(0x8b)][_0x17f608(0x74)];console['log'](_0x4f2b73(_0x4bb0a5));var _0x27de5d=_0x4f2b73(_0x4bb0a5);const _0x564bf5=await staff['aggregate']([{'$match':{'email':_0x350ad7[_0x17f608(0x8d)]}},{'$unwind':'$product_list'},{'$match':{'product_list.isConfirm':_0x17f608(0x97),'product_list._id':_0x27de5d}}]);_0xe98199[_0x17f608(0xb6)](_0x564bf5);}catch(_0x3f5255){}}),router['post'](a0_0x430dc2(0xd3),auth,async(_0x3b7148,_0x1e9417)=>{const _0x1a5eaf=a0_0x430dc2;try{const _0x4d83bc=await discount_volume_db[_0x1a5eaf(0xba)]();_0x1e9417[_0x1a5eaf(0xb6)](_0x4d83bc);}catch(_0x2c230e){}}),router[a0_0x430dc2(0x80)](a0_0x430dc2(0x77),auth,async(_0x50d138,_0x466f4d)=>{const _0x24881b=a0_0x430dc2;try{const _0x261ba8=await product['find']();_0x466f4d[_0x24881b(0xb6)](_0x261ba8);}catch(_0x327292){}}),router['post'](a0_0x430dc2(0x7d),auth,async(_0x515aaa,_0x1f21eb)=>{const _0x4a7361=a0_0x430dc2;try{const {id_data:_0x4879d5}=_0x515aaa['body'],_0x3ffae2=await product[_0x4a7361(0xb9)](_0x4879d5);_0x1f21eb[_0x4a7361(0xb6)](_0x3ffae2);}catch(_0x50fb90){}}),module[a0_0x430dc2(0xbc)]=router;