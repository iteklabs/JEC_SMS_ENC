function a0_0x1d20(){const _0x329d33=['$date','$product.to_quantity','body','$return_product.return_qty','$product.quantity','Portuguese','$sale_product.quantity','Spanish','Router','length','aggregate','$sale_product.price','false','$return_product','$total_price','findOne','_id','False','$product_list','account_category','/update_data','find','True','241012QfsCgM','$total_amount','Finished\x20Goods','index_acc','/pending_data_table','rsm','$product.from_quantity','20SBsihi','Raw\x20Materials','/my_inv','/get_count','$return_sale.sale_qty','errors','$sale_product','render','/price_chart','169675xkujNT','valueOf','log','$product','post','1289241xARddm','/pending_data','$return_sale','../public/language/languages.json','/avg_data','3OOfSDH','index_asd','index_sa','German','7jMfSTQ','true','$to_warehouse','$product_list.product_stock','flash','$sale_product.totalprice','English\x20(US)','findById','$count','Chinese','get','$product.product_name','success','2712590vkdOkt','Hindi','../models/all_models','language','paid','/paid_data_table','warehouse_category','369224fARqGs','English','71436QrDFTk','user','express','email','sad','263034wjCLKv','json'];a0_0x1d20=function(){return _0x329d33;};return a0_0x1d20();}const a0_0x50f372=a0_0x2fe7;(function(_0x47d45c,_0x114e73){const _0x54f0a4=a0_0x2fe7,_0x3c683c=_0x47d45c();while(!![]){try{const _0x32ad09=parseInt(_0x54f0a4(0x1fd))/0x1+parseInt(_0x54f0a4(0x1e4))/0x2*(parseInt(_0x54f0a4(0x217))/0x3)+-parseInt(_0x54f0a4(0x204))/0x4*(-parseInt(_0x54f0a4(0x20d))/0x5)+parseInt(_0x54f0a4(0x1df))/0x6+-parseInt(_0x54f0a4(0x1c9))/0x7*(-parseInt(_0x54f0a4(0x1dd))/0x8)+-parseInt(_0x54f0a4(0x212))/0x9+-parseInt(_0x54f0a4(0x1d6))/0xa;if(_0x32ad09===_0x114e73)break;else _0x3c683c['push'](_0x3c683c['shift']());}catch(_0x452a22){_0x3c683c['push'](_0x3c683c['shift']());}}}(a0_0x1d20,0x2d59b));function a0_0x2fe7(_0x1ef4e0,_0x2899de){const _0x1d2060=a0_0x1d20();return a0_0x2fe7=function(_0x2fe7a9,_0x5c5375){_0x2fe7a9=_0x2fe7a9-0x1c6;let _0x28ba07=_0x1d2060[_0x2fe7a9];return _0x28ba07;},a0_0x2fe7(_0x1ef4e0,_0x2899de);}const express=require(a0_0x50f372(0x1e1)),app=express(),router=express[a0_0x50f372(0x1ee)](),auth=require('../middleware/auth'),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order}=require(a0_0x50f372(0x1d8)),users=require(a0_0x50f372(0x215));router[a0_0x50f372(0x1d3)]('/index',auth,async(_0x2faa3d,_0x431d4f)=>{const _0x5b70e8=a0_0x50f372;try{const {username:_0x1d3658,email:_0x5a7b81,role:_0x378744}=_0x2faa3d[_0x5b70e8(0x1e0)],_0x45216d=_0x2faa3d[_0x5b70e8(0x1e0)],_0xf90087=await master_shop[_0x5b70e8(0x1fb)](),_0x181087=await profile[_0x5b70e8(0x1f5)]({'email':_0x45216d[_0x5b70e8(0x1e2)]});if(_0xf90087[0x0][_0x5b70e8(0x1d9)]==_0x5b70e8(0x1cf))var _0x276c9a=users[_0x5b70e8(0x1de)];else{if(_0xf90087[0x0][_0x5b70e8(0x1d9)]==_0x5b70e8(0x1d7))var _0x276c9a=users[_0x5b70e8(0x1d7)];else{if(_0xf90087[0x0][_0x5b70e8(0x1d9)]==_0x5b70e8(0x1c8))var _0x276c9a=users[_0x5b70e8(0x1c8)];else{if(_0xf90087[0x0][_0x5b70e8(0x1d9)]=='Spanish')var _0x276c9a=users[_0x5b70e8(0x1ed)];else{if(_0xf90087[0x0]['language']=='French')var _0x276c9a=users['French'];else{if(_0xf90087[0x0]['language']=='Portuguese\x20(BR)')var _0x276c9a=users[_0x5b70e8(0x1eb)];else{if(_0xf90087[0x0]['language']==_0x5b70e8(0x1d2))var _0x276c9a=users[_0x5b70e8(0x1d2)];else{if(_0xf90087[0x0]['language']=='Arabic\x20(ae)')var _0x276c9a=users['Arabic'];}}}}}}}if(_0x45216d[_0x5b70e8(0x1f9)]=='wm'){var _0x4912fd;if(_0x45216d['warehouse_category']==_0x5b70e8(0x205)){const _0x2f25f1=await product[_0x5b70e8(0x1fb)]({'product_category':_0x5b70e8(0x205)});_0x4912fd=_0x2f25f1['length'];}else{if(_0x45216d['warehouse_category']==_0x5b70e8(0x1ff)){const _0x57fe8d=await product[_0x5b70e8(0x1fb)]({'product_category':_0x5b70e8(0x1ff)});_0x4912fd=_0x57fe8d[_0x5b70e8(0x1ef)];}else{const _0x104aa2=await product[_0x5b70e8(0x1fb)]();_0x4912fd=_0x104aa2[_0x5b70e8(0x1ef)];}}const _0x5445da=await sales[_0x5b70e8(0x1f0)]([{'$group':{'_id':null,'total_price':{'$sum':'$total_price'}}}]),_0x3ccaeb=await sales[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x20a)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5b70e8(0x1ec)}}}]),_0x29ba54=await sales_return[_0x5b70e8(0x1f0)]([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x491398=await sales_return[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x214)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5b70e8(0x208)}}}]),_0x406af0=await purchases[_0x5b70e8(0x1f0)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x5b70e8(0x1fe)}}}]),_0xc626c4=await purchases_return[_0x5b70e8(0x1f0)]([{'$group':{'_id':null,'total':{'$sum':_0x5b70e8(0x1fe)}}}]),_0x37a0df=await purchases_return[_0x5b70e8(0x1f0)]([{'$unwind':'$return_product'},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_product.return_qty'}}}]),_0x2e7935=await purchases[_0x5b70e8(0x1f0)]([{'$unwind':'$product'},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5b70e8(0x1ea)}}}]),_0x199ff8=await purchases[_0x5b70e8(0x1f0)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x413de9=await sales[_0x5b70e8(0x1f0)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x2c0222=await transfers[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x210)},{'$group':{'_id':_0x5b70e8(0x1d4),'fromWarehouse':{'$first':'$from_warehouse'},'toWareHouse':{'$first':_0x5b70e8(0x1cb)},'FromtotalQuantity':{'$sum':'$product.from_quantity'},'TototalQuantity':{'$sum':_0x5b70e8(0x1e7)}}}]),_0xfb3bb5=await categories[_0x5b70e8(0x1fb)](),_0x5c2ebd=await product[_0x5b70e8(0x1fb)](),_0xf75b2=await suppliers[_0x5b70e8(0x1fb)](),_0x533aa7=await customer[_0x5b70e8(0x1fb)]();_0x431d4f[_0x5b70e8(0x20b)]('index',{'success':_0x2faa3d[_0x5b70e8(0x1cd)](_0x5b70e8(0x1d5)),'errors':_0x2faa3d[_0x5b70e8(0x1cd)](_0x5b70e8(0x209)),'role':_0x45216d,'profile':_0x181087,'sale':_0x5445da[0x0],'sales_return':_0x29ba54[0x0],'purchases':_0x406af0[0x0],'purchases_return':_0xc626c4[0x0],'purchases_table':_0x199ff8,'sales_table':_0x413de9,'categories':_0xfb3bb5[_0x5b70e8(0x1ef)],'product':_0x5c2ebd['length'],'suppliers':_0xf75b2[_0x5b70e8(0x1ef)],'customer':_0x533aa7[_0x5b70e8(0x1ef)],'master_shop':_0xf90087,'language':_0x276c9a,'sale_QTY':_0x3ccaeb[0x0],'purchases_QTY':_0x2e7935[0x0],'sales_return_QTY':_0x491398[0x0],'purchases_return_QTY':_0x37a0df[0x0],'transfer_table':_0x2c0222,'product_cnt':_0x4912fd});}else{if(_0x45216d['account_category']=='sa'){const _0x205a21=await staff[_0x5b70e8(0x1f5)]({'email':_0x45216d['email']}),_0x50169d=await sales_sa[_0x5b70e8(0x1fb)]({'sales_staff_id':_0x205a21[_0x5b70e8(0x1f6)]}),_0x11a6f5=await sales_sa['find']({'sales_staff_id':_0x205a21[_0x5b70e8(0x1f6)],'paid':_0x5b70e8(0x1fc)}),_0x4f2d8b=await sales_sa[_0x5b70e8(0x1fb)]({'sales_staff_id':_0x205a21['_id'],'paid':_0x5b70e8(0x1f7)}),_0x12a2cb=await sales_sa[_0x5b70e8(0x1f0)]([{'$match':{'sales_staff_id':_0x205a21[_0x5b70e8(0x1f6)]['valueOf']()}},{'$unwind':_0x5b70e8(0x20a)},{'$group':{'_id':null,'sumprice':{'$sum':_0x5b70e8(0x1f1)},'count':{'$sum':0x1}}},{'$project':{'_id':0x0,'sumprice':0x1,'averageprice':{'$round':[{'$divide':['$sumprice',_0x5b70e8(0x1d1)]},0x2]}}}]),_0x156326=await staff[_0x5b70e8(0x1f0)]([{'$match':{'email':_0x45216d[_0x5b70e8(0x1e2)]}},{'$unwind':_0x5b70e8(0x1f8)},{'$group':{'_id':null,'totalQTY':{'$sum':_0x5b70e8(0x1cc)}}}]);_0x431d4f[_0x5b70e8(0x20b)](_0x5b70e8(0x1c7),{'success':_0x2faa3d[_0x5b70e8(0x1cd)]('success'),'errors':_0x2faa3d[_0x5b70e8(0x1cd)]('errors'),'role':_0x45216d,'profile':_0x181087,'master_shop':_0xf90087,'language':_0x276c9a,'cntPaid':_0x11a6f5,'cntNotPaid':_0x4f2d8b,'avg_price':_0x12a2cb[0x0],'my_stock':_0x156326[0x0],'staff_arr':_0x205a21});}else{if(_0x45216d[_0x5b70e8(0x1f9)]=='acc'){const _0x24eb15=await staff[_0x5b70e8(0x1f5)]({'email':_0x45216d['email']});_0x431d4f['render'](_0x5b70e8(0x200),{'success':_0x2faa3d[_0x5b70e8(0x1cd)](_0x5b70e8(0x1d5)),'errors':_0x2faa3d[_0x5b70e8(0x1cd)](_0x5b70e8(0x209)),'role':_0x45216d,'profile':_0x181087,'master_shop':_0xf90087,'language':_0x276c9a}),_0x431d4f['json'](_0x24eb15);}else{if(_0x45216d[_0x5b70e8(0x1f9)]==_0x5b70e8(0x1e3)||_0x45216d[_0x5b70e8(0x1f9)]==_0x5b70e8(0x202)||_0x45216d[_0x5b70e8(0x1f9)]=='fss'){const _0x1cbdb2=await staff[_0x5b70e8(0x1f5)]({'email':_0x45216d[_0x5b70e8(0x1e2)]});_0x431d4f[_0x5b70e8(0x20b)](_0x5b70e8(0x1c6),{'success':_0x2faa3d[_0x5b70e8(0x1cd)](_0x5b70e8(0x1d5)),'errors':_0x2faa3d['flash'](_0x5b70e8(0x209)),'role':_0x45216d,'profile':_0x181087,'master_shop':_0xf90087,'language':_0x276c9a});}else{var _0x4912fd;if(_0x45216d['warehouse_category']==_0x5b70e8(0x205)){const _0x1731f8=await product['find']({'product_category':_0x5b70e8(0x205)});_0x4912fd=_0x1731f8[_0x5b70e8(0x1ef)];}else{if(_0x45216d[_0x5b70e8(0x1dc)]==_0x5b70e8(0x1ff)){const _0x3a5a80=await product['find']({'product_category':_0x5b70e8(0x1ff)});_0x4912fd=_0x3a5a80[_0x5b70e8(0x1ef)];}else{const _0x46068c=await product[_0x5b70e8(0x1fb)]();_0x4912fd=_0x46068c[_0x5b70e8(0x1ef)];}}const _0x4d2f80=await sales['aggregate']([{'$group':{'_id':null,'total_price':{'$sum':_0x5b70e8(0x1f4)}}}]),_0x38f0d8=await sales[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x20a)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$sale_product.quantity'}}}]),_0x24a2ed=await sales_return[_0x5b70e8(0x1f0)]([{'$group':{'_id':null,'total':{'$sum':_0x5b70e8(0x1fe)}}}]),_0x5c943d=await sales_return[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x214)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5b70e8(0x208)}}}]),_0x2931aa=await purchases['aggregate']([{'$group':{'_id':null,'total_amount':{'$sum':_0x5b70e8(0x1fe)}}}]),_0x1834ce=await purchases_return[_0x5b70e8(0x1f0)]([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0xa6d91f=await purchases_return[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x1f3)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5b70e8(0x1e9)}}}]),_0x1a9c87=await purchases['aggregate']([{'$unwind':'$product'},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5b70e8(0x1ea)}}}]),_0x5d767a=await purchases[_0x5b70e8(0x1f0)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x5f6cd4=await sales[_0x5b70e8(0x1f0)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x1db88b=await transfers[_0x5b70e8(0x1f0)]([{'$unwind':_0x5b70e8(0x210)},{'$group':{'_id':_0x5b70e8(0x1d4),'fromWarehouse':{'$first':'$from_warehouse'},'toWareHouse':{'$first':'$to_warehouse'},'FromtotalQuantity':{'$sum':_0x5b70e8(0x203)},'TototalQuantity':{'$sum':_0x5b70e8(0x1e7)}}}]),_0x20ec8e=await categories[_0x5b70e8(0x1fb)](),_0x171144=await product['find'](),_0x20e887=await suppliers['find'](),_0x5d4824=await customer['find']();_0x431d4f[_0x5b70e8(0x20b)]('index',{'success':_0x2faa3d[_0x5b70e8(0x1cd)](_0x5b70e8(0x1d5)),'errors':_0x2faa3d['flash'](_0x5b70e8(0x209)),'role':_0x45216d,'profile':_0x181087,'sale':_0x4d2f80[0x0],'sales_return':_0x24a2ed[0x0],'purchases':_0x2931aa[0x0],'purchases_return':_0x1834ce[0x0],'purchases_table':_0x5d767a,'sales_table':_0x5f6cd4,'categories':_0x20ec8e['length'],'product':_0x171144[_0x5b70e8(0x1ef)],'suppliers':_0x20e887[_0x5b70e8(0x1ef)],'customer':_0x5d4824[_0x5b70e8(0x1ef)],'master_shop':_0xf90087,'language':_0x276c9a,'sale_QTY':_0x38f0d8[0x0],'purchases_QTY':_0x1a9c87[0x0],'sales_return_QTY':_0x5c943d[0x0],'purchases_return_QTY':_0xa6d91f[0x0],'transfer_table':_0x1db88b,'product_cnt':_0x4912fd});}}}}}catch(_0x3c4511){console[_0x5b70e8(0x20f)](_0x3c4511);}}),router['get'](a0_0x50f372(0x201),auth,async(_0x425216,_0x58f537)=>{const _0x4ca23b=a0_0x50f372;try{const _0x1f167f=_0x425216['user'],_0x1aed0a=await staff[_0x4ca23b(0x1f5)]({'email':_0x1f167f[_0x4ca23b(0x1e2)]}),_0x204df6=await sales_sa['aggregate']([{'$match':{'sales_staff_id':_0x1aed0a[_0x4ca23b(0x1f6)][_0x4ca23b(0x20e)](),'paid':_0x4ca23b(0x1f7)}},{'$limit':0x4},{'$sort':{'invoice':-0x1}}]);_0x58f537[_0x4ca23b(0x1e5)](_0x204df6);}catch(_0x50a51a){_0x58f537[_0x4ca23b(0x1e5)](_0x50a51a);}}),router['get'](a0_0x50f372(0x213),auth,async(_0x13cd38,_0x2ed0e3)=>{const _0x412606=a0_0x50f372;try{const _0x3c2c0a=_0x13cd38['user'],_0x464b6b=await staff[_0x412606(0x1f5)]({'email':_0x3c2c0a[_0x412606(0x1e2)]}),_0x20e851=await sales_sa[_0x412606(0x1fb)]({'sales_staff_id':_0x464b6b[_0x412606(0x1f6)],'paid':'False'});_0x2ed0e3['json'](_0x20e851);}catch(_0x707a3a){_0x2ed0e3[_0x412606(0x1e5)](_0x707a3a);}}),router['post'](a0_0x50f372(0x207),auth,async(_0x1e961d,_0x4d546b)=>{const _0x19d76f=a0_0x50f372;try{const {sttaff_id:_0x569677,warehouse:_0xecd0a1,account_category:_0x214a8c}=_0x1e961d['user'],_0x3a24d6=await sales_order[_0x19d76f(0x1f0)]([{'$match':{'accounting_account_id':_0x569677,'accounting_account_confirm':_0x19d76f(0x1f2)}}]);_0x4d546b[_0x19d76f(0x1e5)](_0x3a24d6);}catch(_0x42ed95){}}),router['get'](a0_0x50f372(0x1db),auth,async(_0x456748,_0x2ecde5)=>{const _0x570279=a0_0x50f372;try{const _0x3b7abf=_0x456748['user'],_0x29a93b=await staff[_0x570279(0x1f5)]({'email':_0x3b7abf[_0x570279(0x1e2)]}),_0x19b744=await sales_sa['find']({'sales_staff_id':_0x29a93b[_0x570279(0x1f6)],'paid':_0x570279(0x1fc)});_0x2ecde5[_0x570279(0x1e5)](_0x19b744);}catch(_0x1dd2ef){_0x2ecde5[_0x570279(0x1e5)](_0x1dd2ef);}}),router['get']('/paid_data',auth,async(_0x544230,_0x376665)=>{const _0x51664d=a0_0x50f372;try{const _0x1418db=_0x544230[_0x51664d(0x1e0)],_0x598727=await staff[_0x51664d(0x1f5)]({'email':_0x1418db['email']}),_0xe41656=await sales_sa[_0x51664d(0x1f0)]([{'$match':{'sales_staff_id':_0x598727[_0x51664d(0x1f6)][_0x51664d(0x20e)](),'paid':_0x51664d(0x1fc)}},{'$limit':0x4},{'$sort':{'invoice':-0x1}}]);_0x376665['json'](_0xe41656);}catch(_0x490aca){_0x376665[_0x51664d(0x1e5)](_0x490aca);}}),router[a0_0x50f372(0x211)](a0_0x50f372(0x1fa),auth,async(_0x5a2f28,_0x26d5fd)=>{const _0x34098a=a0_0x50f372;try{const {id:_0x3d9660,price:_0x290b42}=_0x5a2f28[_0x34098a(0x1e8)],_0x5b6947=await sales_sa[_0x34098a(0x1d0)](_0x3d9660);_0x5b6947[_0x34098a(0x1da)]=_0x34098a(0x1fc),_0x5b6947['collection_price']=parseFloat(_0x290b42);const _0x264a62=await _0x5b6947['save']();_0x26d5fd['json'](_0x264a62);}catch(_0x2204d6){_0x26d5fd[_0x34098a(0x1e5)](_0x2204d6);}}),router[a0_0x50f372(0x1d3)](a0_0x50f372(0x213),auth,async(_0x52c2a6,_0x10c79e)=>{const _0x290c47=a0_0x50f372;try{const _0x5d3271=_0x52c2a6[_0x290c47(0x1e0)],_0x5932e5=await staff[_0x290c47(0x1f5)]({'email':_0x5d3271[_0x290c47(0x1e2)]}),_0x53f872=await sales_sa[_0x290c47(0x1fb)]({'sales_staff_id':_0x5932e5[_0x290c47(0x1f6)],'paid':_0x290c47(0x1f7)});_0x10c79e[_0x290c47(0x1e5)](_0x53f872);}catch(_0x21e947){_0x10c79e['json'](_0x21e947);}}),router[a0_0x50f372(0x1d3)](a0_0x50f372(0x216),auth,async(_0x134f9e,_0x2ea373)=>{const _0x250188=a0_0x50f372;try{const _0x1bc98c=_0x134f9e[_0x250188(0x1e0)],_0x342d2a=await staff[_0x250188(0x1f5)]({'email':_0x1bc98c['email']}),_0x4e4bbb=await sales_sa[_0x250188(0x1f0)]([{'$match':{'sales_staff_id':_0x342d2a[_0x250188(0x1f6)][_0x250188(0x20e)]()}},{'$unwind':_0x250188(0x20a)},{'$group':{'_id':null,'sumprice':{'$sum':_0x250188(0x1f1)},'count':{'$sum':0x1}}},{'$project':{'_id':0x0,'sumprice':0x1,'averageprice':{'$round':[{'$divide':['$sumprice',_0x250188(0x1d1)]},0x2]}}}]);_0x2ea373[_0x250188(0x1e5)](_0x4e4bbb);}catch(_0x5363b4){_0x2ea373[_0x250188(0x1e5)](_0x5363b4);}}),router[a0_0x50f372(0x1d3)](a0_0x50f372(0x206),auth,async(_0x33902d,_0x2e4941)=>{const _0x326470=a0_0x50f372;try{const _0x537765=_0x33902d['user'],_0x229f9e=await staff['findOne']({'email':_0x537765[_0x326470(0x1e2)]}),_0x1b8216=await staff[_0x326470(0x1f0)]([{'$match':{'email':_0x537765[_0x326470(0x1e2)]}},{'$unwind':_0x326470(0x1f8)},{'$match':{'product_list.isConfirm':_0x326470(0x1ca)}},{'$group':{'_id':null,'totalQTY':{'$sum':'$product_list.product_stock'}}}]);_0x2e4941['json'](_0x1b8216);}catch(_0x36ea90){_0x2e4941[_0x326470(0x1e5)](_0x36ea90);}}),router['get']('/sales_chart',auth,async(_0x2d631e,_0x705e35)=>{const _0x1a18f1=a0_0x50f372;try{const _0x2c62de=_0x2d631e[_0x1a18f1(0x1e0)],_0x3b7c8d=await staff[_0x1a18f1(0x1f5)]({'email':_0x2c62de['email']}),_0x4a52e7=await sales_sa[_0x1a18f1(0x1f0)]([{'$match':{'sales_staff_id':_0x3b7c8d[_0x1a18f1(0x1f6)][_0x1a18f1(0x20e)]()}},{'$unwind':_0x1a18f1(0x20a)},{'$group':{'_id':_0x1a18f1(0x1e6),'totalQuantity':{'$sum':_0x1a18f1(0x1ec)},'date':{'$first':_0x1a18f1(0x1e6)}}},{'$sort':{'date':0x1}}]);_0x705e35['json'](_0x4a52e7);}catch(_0x5f5261){_0x705e35[_0x1a18f1(0x1e5)](_0x5f5261);}}),router[a0_0x50f372(0x1d3)](a0_0x50f372(0x20c),auth,async(_0x5c1255,_0x15692c)=>{const _0x4f06ba=a0_0x50f372;try{const _0x279ae7=_0x5c1255[_0x4f06ba(0x1e0)],_0x19447c=await staff[_0x4f06ba(0x1f5)]({'email':_0x279ae7[_0x4f06ba(0x1e2)]}),_0x3d39c5=await sales_sa['aggregate']([{'$match':{'sales_staff_id':_0x19447c[_0x4f06ba(0x1f6)][_0x4f06ba(0x20e)]()}},{'$unwind':_0x4f06ba(0x20a)},{'$group':{'_id':_0x4f06ba(0x1e6),'totalPrice':{'$sum':_0x4f06ba(0x1ce)},'date':{'$first':_0x4f06ba(0x1e6)}}},{'$sort':{'date':0x1}}]);_0x15692c[_0x4f06ba(0x1e5)](_0x3d39c5);}catch(_0xa70816){_0x15692c['json'](_0xa70816);}}),module['exports']=router;