const a0_0x2ca2cf=a0_0x52a7;function a0_0x1a25(){const _0x466734=['forEach','77mFOCWQ','tmpisFG','view_sales_sa','user','../public/language/languages.json','126834iepfMn','Chinese','totalPrice','language','conversion_data','render','secondary_unit','Portuguese','getPrimUnitNo','../middleware/auth','Spanish','prod_cat','no_per_unit','get','padStart','success','/add_sales','Portuguese\x20(BR)','/product_list','find','aggregate','_id','../models/all_models','now','adj_discount','single','body','post','prod_code','adj_dicount_price','quantity','toString','flash','prod_name','all_sales_sa','json','multer','unit','37483jfJaJg','primary_code','English','Router','errors','Invoice\x20created\x20with\x20incremented\x20start\x20value:','$product_list','1829844iWFgiv','diskStorage','true','/volume_setup','exports','Arabic\x20(ae)','totalprice','log','findById','3520188XQHqvn','file','invoice_starts','add_sales_sa','product_name','map','./public/sales_invoice','exceljs','/product_data','price','/sales_sa/view_sales/','id_transaction','save','ObjectId','string','xlsx','Arabic','mongoose','id_transaction_from','French','291054IJvRhW','conversion_unit','Hindi','valueOf','express','email','English\x20(US)','/product_data_id','product_list','8DTZYaR','findOne','German','Types','3918735WZBHkT','real_qty_unit_val','9731664nVABjw'];a0_0x1a25=function(){return _0x466734;};return a0_0x1a25();}function a0_0x52a7(_0x3b4358,_0x512763){const _0x1a25e2=a0_0x1a25();return a0_0x52a7=function(_0x52a79a,_0x15b288){_0x52a79a=_0x52a79a-0x18f;let _0x7ec489=_0x1a25e2[_0x52a79a];return _0x7ec489;},a0_0x52a7(_0x3b4358,_0x512763);}(function(_0x38385c,_0x2efede){const _0x312d02=a0_0x52a7,_0xdcb843=_0x38385c();while(!![]){try{const _0x2e46a6=parseInt(_0x312d02(0x1ba))/0x1*(-parseInt(_0x312d02(0x1e7))/0x2)+-parseInt(_0x312d02(0x1de))/0x3+parseInt(_0x312d02(0x1ca))/0x4+parseInt(_0x312d02(0x1eb))/0x5+parseInt(_0x312d02(0x194))/0x6*(parseInt(_0x312d02(0x18f))/0x7)+-parseInt(_0x312d02(0x1ed))/0x8+parseInt(_0x312d02(0x1c1))/0x9;if(_0x2e46a6===_0x2efede)break;else _0xdcb843['push'](_0xdcb843['shift']());}catch(_0x33a501){_0xdcb843['push'](_0xdcb843['shift']());}}}(a0_0x1a25,0x9b547));const express=require(a0_0x2ca2cf(0x1e2)),app=express(),router=express[a0_0x2ca2cf(0x1bd)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa,discount_volume_db}=require(a0_0x2ca2cf(0x1aa)),auth=require(a0_0x2ca2cf(0x19d)),users=require(a0_0x2ca2cf(0x193)),excelJS=require(a0_0x2ca2cf(0x1d1)),xlsx=require(a0_0x2ca2cf(0x1d9)),mongoose=require(a0_0x2ca2cf(0x1db)),multer=require(a0_0x2ca2cf(0x1b8)),storage=multer[a0_0x2ca2cf(0x1c2)]({'destination':(_0x41ef7c,_0x3dc8fb,_0x309327)=>{const _0x19e391=a0_0x2ca2cf;_0x309327(null,_0x19e391(0x1d0));},'filename':(_0x525f27,_0x260e31,_0x5f105d)=>{const _0x2df837=a0_0x2ca2cf;_0x5f105d(null,Date[_0x2df837(0x1ab)]()+'~'+_0x260e31['originalname']);}}),upload=multer({'storage':storage});router[a0_0x2ca2cf(0x1a1)]('/',auth,async(_0x34619d,_0x234d8a)=>{const _0x5149ba=a0_0x2ca2cf;try{const _0x35c86f=await master_shop['find'](),_0x25a230=_0x34619d['user'],_0x5016e6=await profile[_0x5149ba(0x1e8)]({'email':_0x25a230['email']}),_0x28df2b=await staff['findOne']({'email':_0x25a230['email']}),_0x356f2d=await sales_sa[_0x5149ba(0x1a7)]({'sales_staff_id':_0x28df2b['_id']});if(_0x35c86f[0x0]['language']==_0x5149ba(0x1e4))var _0x2a7f64=users[_0x5149ba(0x1bc)];else{if(_0x35c86f[0x0]['language']==_0x5149ba(0x1e0))var _0x2a7f64=users[_0x5149ba(0x1e0)];else{if(_0x35c86f[0x0][_0x5149ba(0x197)]==_0x5149ba(0x1e9))var _0x2a7f64=users[_0x5149ba(0x1e9)];else{if(_0x35c86f[0x0][_0x5149ba(0x197)]==_0x5149ba(0x19e))var _0x2a7f64=users[_0x5149ba(0x19e)];else{if(_0x35c86f[0x0][_0x5149ba(0x197)]==_0x5149ba(0x1dd))var _0x2a7f64=users[_0x5149ba(0x1dd)];else{if(_0x35c86f[0x0][_0x5149ba(0x197)]==_0x5149ba(0x1a5))var _0x2a7f64=users['Portuguese'];else{if(_0x35c86f[0x0]['language']==_0x5149ba(0x195))var _0x2a7f64=users[_0x5149ba(0x195)];else{if(_0x35c86f[0x0]['language']==_0x5149ba(0x1c6))var _0x2a7f64=users[_0x5149ba(0x1da)];}}}}}}}_0x234d8a[_0x5149ba(0x199)](_0x5149ba(0x1b6),{'success':_0x34619d[_0x5149ba(0x1b4)](_0x5149ba(0x1a3)),'errors':_0x34619d[_0x5149ba(0x1b4)](_0x5149ba(0x1be)),'master_shop':_0x35c86f,'profile':_0x5016e6,'role':_0x25a230,'language':_0x2a7f64,'product_list':_0x28df2b[_0x5149ba(0x1e6)],'sales_mine':_0x356f2d,'staff_arr':_0x28df2b});}catch(_0x4acbdc){console[_0x5149ba(0x1c8)](_0x4acbdc);}}),router[a0_0x2ca2cf(0x1a1)](a0_0x2ca2cf(0x1a4),auth,async(_0x36f19a,_0x4c067b)=>{const _0x42fa44=a0_0x2ca2cf;try{const _0x44d8fb=await master_shop[_0x42fa44(0x1a7)](),_0x1d3f89=_0x36f19a['user'],_0x436c95=await profile[_0x42fa44(0x1e8)]({'email':_0x1d3f89[_0x42fa44(0x1e3)]}),_0x553a36=await staff[_0x42fa44(0x1e8)]({'email':_0x1d3f89['email']}),_0x153027=await customer[_0x42fa44(0x1a7)]({'agent_id':_0x553a36[_0x42fa44(0x1a9)]});if(_0x44d8fb[0x0][_0x42fa44(0x197)]==_0x42fa44(0x1e4))var _0x1824b7=users['English'];else{if(_0x44d8fb[0x0][_0x42fa44(0x197)]==_0x42fa44(0x1e0))var _0x1824b7=users[_0x42fa44(0x1e0)];else{if(_0x44d8fb[0x0][_0x42fa44(0x197)]==_0x42fa44(0x1e9))var _0x1824b7=users['German'];else{if(_0x44d8fb[0x0][_0x42fa44(0x197)]==_0x42fa44(0x19e))var _0x1824b7=users[_0x42fa44(0x19e)];else{if(_0x44d8fb[0x0][_0x42fa44(0x197)]==_0x42fa44(0x1dd))var _0x1824b7=users[_0x42fa44(0x1dd)];else{if(_0x44d8fb[0x0]['language']==_0x42fa44(0x1a5))var _0x1824b7=users[_0x42fa44(0x19b)];else{if(_0x44d8fb[0x0][_0x42fa44(0x197)]==_0x42fa44(0x195))var _0x1824b7=users[_0x42fa44(0x195)];else{if(_0x44d8fb[0x0][_0x42fa44(0x197)]=='Arabic\x20(ae)')var _0x1824b7=users[_0x42fa44(0x1da)];}}}}}}}_0x4c067b[_0x42fa44(0x199)](_0x42fa44(0x1cd),{'success':_0x36f19a[_0x42fa44(0x1b4)](_0x42fa44(0x1a3)),'errors':_0x36f19a[_0x42fa44(0x1b4)]('errors'),'master_shop':_0x44d8fb,'profile':_0x436c95,'role':_0x1d3f89,'language':_0x1824b7,'customer':_0x153027,'staff_arr':_0x553a36});}catch(_0x2cf729){console[_0x42fa44(0x1c8)](_0x2cf729);}}),router['get']('/view_sales/:id',auth,async(_0x5e3c66,_0x4afb14)=>{const _0x45891c=a0_0x2ca2cf;try{const _0x19bee5=await master_shop[_0x45891c(0x1a7)](),_0x556c2b=_0x5e3c66[_0x45891c(0x192)],_0x47036b=await profile[_0x45891c(0x1e8)]({'email':_0x556c2b[_0x45891c(0x1e3)]}),_0x3499bc=await staff[_0x45891c(0x1e8)]({'email':_0x556c2b[_0x45891c(0x1e3)]}),_0xca13ae=await customer[_0x45891c(0x1a7)]({'agent_id':_0x3499bc[_0x45891c(0x1a9)]}),_0x1532b0=_0x5e3c66['params']['id'],_0x10ee67=await sales_sa[_0x45891c(0x1c9)](_0x1532b0);if(_0x19bee5[0x0]['language']==_0x45891c(0x1e4))var _0x4029b0=users[_0x45891c(0x1bc)];else{if(_0x19bee5[0x0][_0x45891c(0x197)]=='Hindi')var _0x4029b0=users[_0x45891c(0x1e0)];else{if(_0x19bee5[0x0]['language']=='German')var _0x4029b0=users[_0x45891c(0x1e9)];else{if(_0x19bee5[0x0][_0x45891c(0x197)]==_0x45891c(0x19e))var _0x4029b0=users['Spanish'];else{if(_0x19bee5[0x0][_0x45891c(0x197)]==_0x45891c(0x1dd))var _0x4029b0=users[_0x45891c(0x1dd)];else{if(_0x19bee5[0x0][_0x45891c(0x197)]==_0x45891c(0x1a5))var _0x4029b0=users[_0x45891c(0x19b)];else{if(_0x19bee5[0x0][_0x45891c(0x197)]==_0x45891c(0x195))var _0x4029b0=users['Chinese'];else{if(_0x19bee5[0x0][_0x45891c(0x197)]=='Arabic\x20(ae)')var _0x4029b0=users['Arabic'];}}}}}}}_0x4afb14[_0x45891c(0x199)](_0x45891c(0x191),{'success':_0x5e3c66[_0x45891c(0x1b4)]('success'),'errors':_0x5e3c66[_0x45891c(0x1b4)](_0x45891c(0x1be)),'master_shop':_0x19bee5,'profile':_0x47036b,'role':_0x556c2b,'language':_0x4029b0,'customer':_0xca13ae,'sales_sa':_0x10ee67,'staff_arr':_0x3499bc});}catch(_0x25cff9){console['log'](_0x25cff9);}}),router[a0_0x2ca2cf(0x1af)](a0_0x2ca2cf(0x1a4),auth,upload[a0_0x2ca2cf(0x1ad)]('image'),async(_0x1af62b,_0x380b5a)=>{const _0x470710=a0_0x2ca2cf;try{const {customer:_0x1a932e,date:_0x5bddca,prod_code:_0x11f221,note:_0x1cf93f,paid_status:_0x4aaa39,DSI:_0xe8ff13,cash_amount:_0x37c47f,amount_data:_0x4b6220,bank_data:_0x204e00,check_no:_0x1a1ff4,due_date:_0x1e7d90}=_0x1af62b[_0x470710(0x1ae)],_0x40918d=_0x1af62b[_0x470710(0x1cb)]['filename'];if(typeof _0x11f221==_0x470710(0x1d8))var _0x2652d1=[_0x1af62b['body']['prod_code']],_0x3a0c32=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b5)]],_0x2972fb=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1bb)]],_0x4a69b3=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b2)]],_0x89a2b7=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b9)]],_0xf68978=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1d3)]],_0x293bdc=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x196)]],_0x3457a6=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1d5)]],_0x4c9fa7=[_0x1af62b['body'][_0x470710(0x1b1)]],_0x28744c=[_0x1af62b[_0x470710(0x1ae)]['tmpisFG']],_0x325981=[_0x1af62b[_0x470710(0x1ae)]['no_per_unit']],_0x57d3cb=[_0x1af62b['body'][_0x470710(0x19c)]],_0x2fb9c1=[_0x1af62b['body'][_0x470710(0x19f)]],_0x577703=[_0x1af62b['body'][_0x470710(0x19a)]],_0x5662c5=[_0x1af62b[_0x470710(0x1ae)][_0x470710(0x1df)]];else var _0x2652d1=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b0)]],_0x3a0c32=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b5)]],_0x2972fb=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1bb)]],_0x4a69b3=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b2)]],_0x89a2b7=[..._0x1af62b['body'][_0x470710(0x1b9)]],_0xf68978=[..._0x1af62b[_0x470710(0x1ae)]['price']],_0x293bdc=[..._0x1af62b['body'][_0x470710(0x196)]],_0x3457a6=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1d5)]],_0x4c9fa7=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1b1)]],_0x28744c=[..._0x1af62b['body'][_0x470710(0x190)]],_0x325981=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1a0)]],_0x57d3cb=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x19c)]],_0x2fb9c1=[..._0x1af62b[_0x470710(0x1ae)]['prod_cat']],_0x577703=[..._0x1af62b[_0x470710(0x1ae)]['secondary_unit']],_0x5662c5=[..._0x1af62b[_0x470710(0x1ae)][_0x470710(0x1df)]];const _0x4a87db=_0x2652d1[_0x470710(0x1cf)](_0x49b3f5=>{return _0x49b3f5={'product_code':_0x49b3f5};});_0x3a0c32['forEach']((_0x1ad9b1,_0x24aea8)=>{const _0x4036dd=_0x470710;_0x4a87db[_0x24aea8][_0x4036dd(0x1ce)]=_0x1ad9b1;}),_0x2972fb[_0x470710(0x1ee)]((_0x2a524b,_0x5ad8b5)=>{const _0x1db81e=_0x470710;_0x4a87db[_0x5ad8b5][_0x1db81e(0x1bb)]=_0x2a524b;}),_0x325981[_0x470710(0x1ee)]((_0x7d728a,_0x41141f)=>{const _0xe5745e=_0x470710;_0x4a87db[_0x41141f][_0xe5745e(0x1a0)]=_0x7d728a;}),_0x4a69b3[_0x470710(0x1ee)]((_0x33a14b,_0x12c85e)=>{_0x4a87db[_0x12c85e]['quantity']=_0x33a14b;}),_0x89a2b7[_0x470710(0x1ee)]((_0x2f4bd5,_0x5ced40)=>{const _0x4b0337=_0x470710;_0x4a87db[_0x5ced40][_0x4b0337(0x1b9)]=_0x2f4bd5;}),_0xf68978[_0x470710(0x1ee)]((_0x3e2bbe,_0x364ec8)=>{_0x4a87db[_0x364ec8]['price']=_0x3e2bbe;}),_0x293bdc[_0x470710(0x1ee)]((_0x91de40,_0x3e7f50)=>{const _0x25523c=_0x470710;_0x4a87db[_0x3e7f50][_0x25523c(0x1c7)]=_0x91de40;}),_0x3457a6[_0x470710(0x1ee)]((_0x3f25de,_0x2c1e81)=>{const _0x31105f=_0x470710;_0x4a87db[_0x2c1e81][_0x31105f(0x1dc)]=_0x3f25de;}),_0x4c9fa7['forEach']((_0x350d07,_0x3f78d1)=>{const _0x3f342e=_0x470710;_0x4a87db[_0x3f78d1][_0x3f342e(0x1ac)]=_0x350d07;}),_0x28744c[_0x470710(0x1ee)]((_0x5d16d4,_0x1e6290)=>{_0x4a87db[_0x1e6290]['isFG']=_0x5d16d4;}),_0x577703[_0x470710(0x1ee)]((_0x53f604,_0x561e8d)=>{_0x4a87db[_0x561e8d]['secondary_unit']=_0x53f604;}),_0x57d3cb[_0x470710(0x1ee)]((_0x580391,_0xe77887)=>{const _0x387c40=_0x470710;_0x4a87db[_0xe77887][_0x387c40(0x1ec)]=_0x580391;}),_0x2fb9c1[_0x470710(0x1ee)]((_0x470ad2,_0x4ce2e1)=>{const _0xe58d1e=_0x470710;_0x4a87db[_0x4ce2e1][_0xe58d1e(0x19f)]=_0x470ad2;}),_0x5662c5['forEach']((_0x47c7b2,_0x4d0e1b)=>{const _0x49bfea=_0x470710;_0x4a87db[_0x4d0e1b][_0x49bfea(0x198)]=_0x47c7b2;});const _0x47cec7=new invoice_sa();await _0x47cec7[_0x470710(0x1d6)]();const _0x2707c1=_0x1af62b['user'],_0x322b00=await staff[_0x470710(0x1e8)]({'email':_0x2707c1[_0x470710(0x1e3)]}),_0x2afb7b=new sales_sa({'invoice':_0x47cec7[_0x470710(0x1cc)]['toString']()[_0x470710(0x1a2)](0x8,'0'),'customer':_0x1a932e,'file':_0x40918d,'date':_0x5bddca,'sale_product':_0x4a87db,'note':_0x1cf93f,'sales_staff_id':_0x322b00[_0x470710(0x1a9)][_0x470710(0x1e1)](),'paid':_0x4aaa39,'dsi':_0xe8ff13,'cash':_0x37c47f,'amount':_0x4b6220,'bank':_0x204e00,'check_no':_0x1a1ff4,'due_date':_0x1e7d90}),_0x347bc1=await _0x2afb7b[_0x470710(0x1d6)]();console[_0x470710(0x1c8)](_0x470710(0x1bf),_0x47cec7[_0x470710(0x1cc)][_0x470710(0x1b3)]()[_0x470710(0x1a2)](0x8,'0'));const _0x22cc8d=mongoose[_0x470710(0x1ea)][_0x470710(0x1d7)];_0x1af62b[_0x470710(0x1b4)](_0x470710(0x1a3),'Sales\x20add\x20successfully'),_0x380b5a['redirect'](_0x470710(0x1d4)+_0x347bc1[_0x470710(0x1a9)]);}catch(_0x1a291c){console[_0x470710(0x1c8)](_0x1a291c);}}),router['post']('/add_sales_notes',auth,async(_0xe3ad27,_0x416c9b)=>{const _0x3ebc1c=a0_0x2ca2cf;try{const {date_data:_0x497fb4,note_data:_0x14dfe9,status_data:_0x35b193}=_0xe3ad27[_0x3ebc1c(0x1ae)],_0x2781b4=new invoice_sa();await _0x2781b4['save']();const _0x2799da=_0xe3ad27[_0x3ebc1c(0x192)],_0x1037f9=await staff['findOne']({'email':_0x2799da[_0x3ebc1c(0x1e3)]}),_0x7a6e3c=new sales_sa({'invoice':_0x2781b4['invoice_starts'][_0x3ebc1c(0x1b3)]()[_0x3ebc1c(0x1a2)](0x8,'0'),'status_data':_0x35b193,'date':_0x497fb4,'note':_0x14dfe9,'sales_staff_id':_0x1037f9[_0x3ebc1c(0x1a9)][_0x3ebc1c(0x1e1)]()}),_0x2d025a=await _0x7a6e3c[_0x3ebc1c(0x1d6)]();console['log'](_0x3ebc1c(0x1bf),_0x2781b4['invoice_starts']['toString']()['padStart'](0x8,'0'));const _0x2aa741=mongoose[_0x3ebc1c(0x1ea)][_0x3ebc1c(0x1d7)];_0xe3ad27['flash'](_0x3ebc1c(0x1a3),'Sales\x20add\x20successfully'),_0x416c9b['redirect'](_0x3ebc1c(0x1d4)+_0x2d025a[_0x3ebc1c(0x1a9)]);}catch(_0x161845){console[_0x3ebc1c(0x1c8)](_0x161845);}}),router[a0_0x2ca2cf(0x1af)](a0_0x2ca2cf(0x1a6),auth,async(_0x251577,_0x59b870)=>{const _0x6ababf=a0_0x2ca2cf;try{const _0x213266=_0x251577['user'],_0x44950e=await profile[_0x6ababf(0x1e8)]({'email':_0x213266['email']}),_0x1eed72=await staff[_0x6ababf(0x1a8)]([{'$match':{'email':_0x213266[_0x6ababf(0x1e3)]}},{'$unwind':_0x6ababf(0x1c0)},{'$match':{'product_list.isConfirm':_0x6ababf(0x1c3)}}]);_0x59b870[_0x6ababf(0x1b7)](_0x1eed72);}catch(_0x5d6c9c){}}),router['post']('/customer_data',auth,async(_0x119ba2,_0x1dcb75)=>{const _0x45c679=a0_0x2ca2cf;try{const {customer_name:_0x2511de}=_0x119ba2[_0x45c679(0x1ae)],_0x1ed56f=await customer[_0x45c679(0x1e8)]({'name':_0x2511de});_0x1dcb75[_0x45c679(0x1b7)](_0x1ed56f);}catch(_0x37973d){}}),router[a0_0x2ca2cf(0x1af)](a0_0x2ca2cf(0x1d2),auth,async(_0x4d95e9,_0x55299f)=>{const _0x48d933=a0_0x2ca2cf;try{const _0x2f4fa8=_0x4d95e9[_0x48d933(0x192)],{id_data:_0x38cc2e}=_0x4d95e9['body'],_0x52b5ef=await profile['findOne']({'email':_0x2f4fa8[_0x48d933(0x1e3)]}),_0x25c724=mongoose[_0x48d933(0x1ea)]['ObjectId'];console[_0x48d933(0x1c8)](_0x25c724(_0x38cc2e));var _0x44d768=_0x25c724(_0x38cc2e);const _0x38bca1=await staff[_0x48d933(0x1a8)]([{'$match':{'email':_0x2f4fa8['email']}},{'$unwind':_0x48d933(0x1c0)},{'$match':{'product_list.isConfirm':_0x48d933(0x1c3),'product_list._id':_0x44d768}}]);_0x55299f[_0x48d933(0x1b7)](_0x38bca1);}catch(_0x15f2b6){}}),router['post'](a0_0x2ca2cf(0x1c4),auth,async(_0x2a7471,_0x211030)=>{const _0x28bf21=a0_0x2ca2cf;try{const _0x431f2b=await discount_volume_db[_0x28bf21(0x1e8)]();_0x211030[_0x28bf21(0x1b7)](_0x431f2b);}catch(_0x23c60b){}}),router[a0_0x2ca2cf(0x1af)]('/getProductData',auth,async(_0x52cf43,_0x585fc3)=>{const _0x1a7b4c=a0_0x2ca2cf;try{const _0x50f6ed=await product[_0x1a7b4c(0x1a7)]();_0x585fc3['json'](_0x50f6ed);}catch(_0x30a4a0){}}),router['post'](a0_0x2ca2cf(0x1e5),auth,async(_0x39a36f,_0x382dbd)=>{const _0x36b133=a0_0x2ca2cf;try{const {id_data:_0x4f799a}=_0x39a36f[_0x36b133(0x1ae)],_0x207187=await product[_0x36b133(0x1c9)](_0x4f799a);_0x382dbd[_0x36b133(0x1b7)](_0x207187);}catch(_0x596c4e){}}),module[a0_0x2ca2cf(0x1c5)]=router;