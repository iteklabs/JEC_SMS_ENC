const a0_0x5bf7da=a0_0x43a6;(function(_0x259b70,_0x42ded6){const _0x43aed7=a0_0x43a6,_0x122fa0=_0x259b70();while(!![]){try{const _0x2706dd=-parseInt(_0x43aed7(0x1b6))/0x1+parseInt(_0x43aed7(0x1b5))/0x2+-parseInt(_0x43aed7(0x1c1))/0x3+parseInt(_0x43aed7(0x1d9))/0x4+parseInt(_0x43aed7(0x1f1))/0x5+parseInt(_0x43aed7(0x1e2))/0x6*(-parseInt(_0x43aed7(0x1b8))/0x7)+parseInt(_0x43aed7(0x1d3))/0x8;if(_0x2706dd===_0x42ded6)break;else _0x122fa0['push'](_0x122fa0['shift']());}catch(_0x5e1a26){_0x122fa0['push'](_0x122fa0['shift']());}}}(a0_0x95a3,0x60b41));const express=require(a0_0x5bf7da(0x1e8)),app=express(),router=express[a0_0x5bf7da(0x1bc)](),auth=require(a0_0x5bf7da(0x1bf)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order}=require(a0_0x5bf7da(0x1cb)),users=require(a0_0x5bf7da(0x1cf));function a0_0x43a6(_0x3cb961,_0x4cf31d){const _0x95a319=a0_0x95a3();return a0_0x43a6=function(_0x43a6e4,_0x43ef95){_0x43a6e4=_0x43a6e4-0x1af;let _0x8c3f88=_0x95a319[_0x43a6e4];return _0x8c3f88;},a0_0x43a6(_0x3cb961,_0x4cf31d);}router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1fc),auth,async(_0x278c3b,_0x48450c)=>{const _0x2684bf=a0_0x5bf7da;try{const {username:_0x19c6b5,email:_0x573ba2,role:_0x2dd709}=_0x278c3b[_0x2684bf(0x200)],_0xbe7c31=_0x278c3b[_0x2684bf(0x200)],_0x47ec3f=await master_shop['find'](),_0x5142ef=await profile['findOne']({'email':_0xbe7c31['email']});if(_0x47ec3f[0x0]['language']=='English\x20(US)')var _0x1d1cfe=users[_0x2684bf(0x1df)];else{if(_0x47ec3f[0x0][_0x2684bf(0x1bb)]==_0x2684bf(0x1b4))var _0x1d1cfe=users[_0x2684bf(0x1b4)];else{if(_0x47ec3f[0x0]['language']==_0x2684bf(0x1f9))var _0x1d1cfe=users['German'];else{if(_0x47ec3f[0x0]['language']==_0x2684bf(0x1d8))var _0x1d1cfe=users[_0x2684bf(0x1d8)];else{if(_0x47ec3f[0x0][_0x2684bf(0x1bb)]==_0x2684bf(0x1d5))var _0x1d1cfe=users['French'];else{if(_0x47ec3f[0x0]['language']=='Portuguese\x20(BR)')var _0x1d1cfe=users[_0x2684bf(0x1db)];else{if(_0x47ec3f[0x0][_0x2684bf(0x1bb)]==_0x2684bf(0x1b3))var _0x1d1cfe=users[_0x2684bf(0x1b3)];else{if(_0x47ec3f[0x0][_0x2684bf(0x1bb)]=='Arabic\x20(ae)')var _0x1d1cfe=users[_0x2684bf(0x1e5)];}}}}}}}if(_0xbe7c31[_0x2684bf(0x1c2)]=='wm'){var _0x53e45c;if(_0xbe7c31[_0x2684bf(0x1ec)]==_0x2684bf(0x1d6)){const _0x3233ea=await product[_0x2684bf(0x1ce)]({'product_category':_0x2684bf(0x1d6)});_0x53e45c=_0x3233ea[_0x2684bf(0x1fa)];}else{if(_0xbe7c31[_0x2684bf(0x1ec)]==_0x2684bf(0x1f3)){const _0x2ad2e3=await product['find']({'product_category':_0x2684bf(0x1f3)});_0x53e45c=_0x2ad2e3[_0x2684bf(0x1fa)];}else{const _0x24e149=await product[_0x2684bf(0x1ce)]();_0x53e45c=_0x24e149['length'];}}const _0x156c18=await sales[_0x2684bf(0x1fd)]([{'$group':{'_id':null,'total_price':{'$sum':'$total_price'}}}]),_0x19156f=await sales[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1ca)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2684bf(0x1e3)}}}]),_0x2b3a31=await sales_return[_0x2684bf(0x1fd)]([{'$group':{'_id':null,'total':{'$sum':_0x2684bf(0x1b9)}}}]),_0x4f94bd=await sales_return[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1ba)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_sale.sale_qty'}}}]),_0xb352e1=await purchases[_0x2684bf(0x1fd)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x2684bf(0x1b9)}}}]),_0x2b44d5=await purchases_return['aggregate']([{'$group':{'_id':null,'total':{'$sum':'$total_amount'}}}]),_0x3042ca=await purchases_return[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1d0)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2684bf(0x1ed)}}}]),_0xc25e67=await purchases[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1b2)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2684bf(0x1e0)}}}]),_0x57468b=await purchases[_0x2684bf(0x1fd)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x55f5ac=await sales['aggregate']([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x335867=await transfers[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1b2)},{'$group':{'_id':_0x2684bf(0x1c9),'fromWarehouse':{'$first':_0x2684bf(0x1f4)},'toWareHouse':{'$first':'$to_warehouse'},'FromtotalQuantity':{'$sum':'$product.from_quantity'},'TototalQuantity':{'$sum':_0x2684bf(0x1dd)}}}]),_0x517391=await categories[_0x2684bf(0x1ce)](),_0x26a4a1=await product[_0x2684bf(0x1ce)](),_0x2fbd30=await suppliers[_0x2684bf(0x1ce)](),_0x4bd8b8=await customer[_0x2684bf(0x1ce)]();_0x48450c[_0x2684bf(0x1c4)](_0x2684bf(0x1af),{'success':_0x278c3b[_0x2684bf(0x1f0)](_0x2684bf(0x1c8)),'errors':_0x278c3b[_0x2684bf(0x1f0)](_0x2684bf(0x1f2)),'role':_0xbe7c31,'profile':_0x5142ef,'sale':_0x156c18[0x0],'sales_return':_0x2b3a31[0x0],'purchases':_0xb352e1[0x0],'purchases_return':_0x2b44d5[0x0],'purchases_table':_0x57468b,'sales_table':_0x55f5ac,'categories':_0x517391['length'],'product':_0x26a4a1['length'],'suppliers':_0x2fbd30['length'],'customer':_0x4bd8b8[_0x2684bf(0x1fa)],'master_shop':_0x47ec3f,'language':_0x1d1cfe,'sale_QTY':_0x19156f[0x0],'purchases_QTY':_0xc25e67[0x0],'sales_return_QTY':_0x4f94bd[0x0],'purchases_return_QTY':_0x3042ca[0x0],'transfer_table':_0x335867,'product_cnt':_0x53e45c});}else{if(_0xbe7c31[_0x2684bf(0x1c2)]=='sa'){const _0x1f095e=await staff[_0x2684bf(0x1de)]({'email':_0xbe7c31['email']}),_0x3d30f0=await sales_sa['find']({'sales_staff_id':_0x1f095e[_0x2684bf(0x1ef)]}),_0x3b0a41=await sales_sa[_0x2684bf(0x1ce)]({'sales_staff_id':_0x1f095e['_id'],'paid':'True'}),_0x34e9a4=await sales_sa[_0x2684bf(0x1ce)]({'sales_staff_id':_0x1f095e[_0x2684bf(0x1ef)],'paid':_0x2684bf(0x1da)}),_0x49e6dd=await sales_sa[_0x2684bf(0x1fd)]([{'$match':{'sales_staff_id':_0x1f095e['_id'][_0x2684bf(0x1ff)]()}},{'$unwind':_0x2684bf(0x1ca)},{'$group':{'_id':null,'sumprice':{'$sum':_0x2684bf(0x1e9)},'count':{'$sum':0x1}}},{'$project':{'_id':0x0,'sumprice':0x1,'averageprice':{'$round':[{'$divide':['$sumprice',_0x2684bf(0x1f6)]},0x2]}}}]),_0x35663b=await staff[_0x2684bf(0x1fd)]([{'$match':{'email':_0xbe7c31[_0x2684bf(0x1f8)]}},{'$unwind':_0x2684bf(0x1f7)},{'$group':{'_id':null,'totalQTY':{'$sum':_0x2684bf(0x1d2)}}}]);_0x48450c[_0x2684bf(0x1c4)](_0x2684bf(0x1fb),{'success':_0x278c3b['flash'](_0x2684bf(0x1c8)),'errors':_0x278c3b[_0x2684bf(0x1f0)](_0x2684bf(0x1f2)),'role':_0xbe7c31,'profile':_0x5142ef,'master_shop':_0x47ec3f,'language':_0x1d1cfe,'cntPaid':_0x3b0a41,'cntNotPaid':_0x34e9a4,'avg_price':_0x49e6dd[0x0],'my_stock':_0x35663b[0x0],'staff_arr':_0x1f095e});}else{if(_0xbe7c31[_0x2684bf(0x1c2)]==_0x2684bf(0x1b7)){const _0x30b0d0=await staff[_0x2684bf(0x1de)]({'email':_0xbe7c31[_0x2684bf(0x1f8)]});_0x48450c[_0x2684bf(0x1c4)]('index_acc',{'success':_0x278c3b['flash'](_0x2684bf(0x1c8)),'errors':_0x278c3b[_0x2684bf(0x1f0)](_0x2684bf(0x1f2)),'role':_0xbe7c31,'profile':_0x5142ef,'master_shop':_0x47ec3f,'language':_0x1d1cfe}),_0x48450c[_0x2684bf(0x1bd)](_0x30b0d0);}else{if(_0xbe7c31[_0x2684bf(0x1c2)]=='sad'||_0xbe7c31[_0x2684bf(0x1c2)]==_0x2684bf(0x1cc)||_0xbe7c31[_0x2684bf(0x1c2)]==_0x2684bf(0x1c7)){const _0x2bbf53=await staff[_0x2684bf(0x1de)]({'email':_0xbe7c31['email']});_0x48450c['render'](_0x2684bf(0x1ee),{'success':_0x278c3b[_0x2684bf(0x1f0)](_0x2684bf(0x1c8)),'errors':_0x278c3b[_0x2684bf(0x1f0)]('errors'),'role':_0xbe7c31,'profile':_0x5142ef,'master_shop':_0x47ec3f,'language':_0x1d1cfe});}else{var _0x53e45c;if(_0xbe7c31['warehouse_category']=='Raw\x20Materials'){const _0x2a3a47=await product['find']({'product_category':_0x2684bf(0x1d6)});_0x53e45c=_0x2a3a47[_0x2684bf(0x1fa)];}else{if(_0xbe7c31[_0x2684bf(0x1ec)]==_0x2684bf(0x1f3)){const _0x2651dc=await product['find']({'product_category':_0x2684bf(0x1f3)});_0x53e45c=_0x2651dc['length'];}else{const _0x327853=await product['find']();_0x53e45c=_0x327853['length'];}}const _0x969129=await sales['aggregate']([{'$group':{'_id':null,'total_price':{'$sum':_0x2684bf(0x1e1)}}}]),_0x33649e=await sales['aggregate']([{'$unwind':_0x2684bf(0x1ca)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$sale_product.quantity'}}}]),_0x5bc0d3=await sales_return[_0x2684bf(0x1fd)]([{'$group':{'_id':null,'total':{'$sum':_0x2684bf(0x1b9)}}}]),_0x263399=await sales_return['aggregate']([{'$unwind':_0x2684bf(0x1ba)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2684bf(0x1be)}}}]),_0x4d5a71=await purchases[_0x2684bf(0x1fd)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x2684bf(0x1b9)}}}]),_0x27609c=await purchases_return[_0x2684bf(0x1fd)]([{'$group':{'_id':null,'total':{'$sum':_0x2684bf(0x1b9)}}}]),_0x293203=await purchases_return['aggregate']([{'$unwind':_0x2684bf(0x1d0)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2684bf(0x1ed)}}}]),_0x3648a1=await purchases[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1b2)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x2684bf(0x1e0)}}}]),_0x37c5d3=await purchases[_0x2684bf(0x1fd)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x48d763=await sales['aggregate']([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x3c36c2=await transfers[_0x2684bf(0x1fd)]([{'$unwind':_0x2684bf(0x1b2)},{'$group':{'_id':'$product.product_name','fromWarehouse':{'$first':_0x2684bf(0x1f4)},'toWareHouse':{'$first':'$to_warehouse'},'FromtotalQuantity':{'$sum':_0x2684bf(0x1b1)},'TototalQuantity':{'$sum':'$product.to_quantity'}}}]),_0x4a0c2c=await categories['find'](),_0xafb9c1=await product['find'](),_0x17a91b=await suppliers[_0x2684bf(0x1ce)](),_0x44d753=await customer[_0x2684bf(0x1ce)]();_0x48450c[_0x2684bf(0x1c4)]('index',{'success':_0x278c3b[_0x2684bf(0x1f0)](_0x2684bf(0x1c8)),'errors':_0x278c3b[_0x2684bf(0x1f0)]('errors'),'role':_0xbe7c31,'profile':_0x5142ef,'sale':_0x969129[0x0],'sales_return':_0x5bc0d3[0x0],'purchases':_0x4d5a71[0x0],'purchases_return':_0x27609c[0x0],'purchases_table':_0x37c5d3,'sales_table':_0x48d763,'categories':_0x4a0c2c[_0x2684bf(0x1fa)],'product':_0xafb9c1[_0x2684bf(0x1fa)],'suppliers':_0x17a91b['length'],'customer':_0x44d753[_0x2684bf(0x1fa)],'master_shop':_0x47ec3f,'language':_0x1d1cfe,'sale_QTY':_0x33649e[0x0],'purchases_QTY':_0x3648a1[0x0],'sales_return_QTY':_0x263399[0x0],'purchases_return_QTY':_0x293203[0x0],'transfer_table':_0x3c36c2,'product_cnt':_0x53e45c});}}}}}catch(_0x5298fc){console[_0x2684bf(0x202)](_0x5298fc);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1e4),auth,async(_0x382f00,_0x3843ac)=>{const _0x3aa3d5=a0_0x5bf7da;try{const _0xdc7c0d=_0x382f00[_0x3aa3d5(0x200)],_0x1f4953=await staff[_0x3aa3d5(0x1de)]({'email':_0xdc7c0d[_0x3aa3d5(0x1f8)]}),_0x398c6e=await sales_sa[_0x3aa3d5(0x1fd)]([{'$match':{'sales_staff_id':_0x1f4953[_0x3aa3d5(0x1ef)][_0x3aa3d5(0x1ff)](),'paid':'False'}},{'$limit':0x4},{'$sort':{'invoice':-0x1}}]);_0x3843ac[_0x3aa3d5(0x1bd)](_0x398c6e);}catch(_0x34c2a0){_0x3843ac[_0x3aa3d5(0x1bd)](_0x34c2a0);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1eb),auth,async(_0x551698,_0x464e13)=>{const _0x2390c2=a0_0x5bf7da;try{const _0xc3faeb=_0x551698[_0x2390c2(0x200)],_0x57eba2=await staff[_0x2390c2(0x1de)]({'email':_0xc3faeb[_0x2390c2(0x1f8)]}),_0x3a91c4=await sales_sa[_0x2390c2(0x1ce)]({'sales_staff_id':_0x57eba2['_id'],'paid':_0x2390c2(0x1da)});_0x464e13[_0x2390c2(0x1bd)](_0x3a91c4);}catch(_0x295adf){_0x464e13['json'](_0x295adf);}}),router['post']('/get_count',auth,async(_0x109f45,_0xb7acbf)=>{const _0x578b18=a0_0x5bf7da;try{const {sttaff_id:_0x318938,warehouse:_0x273525,account_category:_0x29e7da}=_0x109f45[_0x578b18(0x200)],_0x592483=await sales_order['aggregate']([{'$match':{'accounting_account_id':_0x318938,'accounting_account_confirm':_0x578b18(0x1ea)}}]);_0xb7acbf[_0x578b18(0x1bd)](_0x592483);}catch(_0x6441f8){}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1e6),auth,async(_0x135aab,_0x227230)=>{const _0x45240b=a0_0x5bf7da;try{const _0x3f4d46=_0x135aab['user'],_0x270979=await staff[_0x45240b(0x1de)]({'email':_0x3f4d46[_0x45240b(0x1f8)]}),_0x5a0a67=await sales_sa[_0x45240b(0x1ce)]({'sales_staff_id':_0x270979['_id'],'paid':'True'});_0x227230[_0x45240b(0x1bd)](_0x5a0a67);}catch(_0x3780ed){_0x227230[_0x45240b(0x1bd)](_0x3780ed);}}),router['get'](a0_0x5bf7da(0x1fe),auth,async(_0x89b701,_0x57a948)=>{const _0xd9c774=a0_0x5bf7da;try{const _0x3de377=_0x89b701['user'],_0xa2835b=await staff[_0xd9c774(0x1de)]({'email':_0x3de377['email']}),_0x52595d=await sales_sa['aggregate']([{'$match':{'sales_staff_id':_0xa2835b[_0xd9c774(0x1ef)]['valueOf'](),'paid':_0xd9c774(0x1d1)}},{'$limit':0x4},{'$sort':{'invoice':-0x1}}]);_0x57a948[_0xd9c774(0x1bd)](_0x52595d);}catch(_0x1abfd5){_0x57a948[_0xd9c774(0x1bd)](_0x1abfd5);}}),router['post'](a0_0x5bf7da(0x1e7),auth,async(_0x41a3ca,_0x3f403d)=>{const _0x5d19c6=a0_0x5bf7da;try{const {id:_0x429603,price:_0x5118c9}=_0x41a3ca['body'],_0x1e622e=await sales_sa[_0x5d19c6(0x1c6)](_0x429603);_0x1e622e['paid']=_0x5d19c6(0x1d1),_0x1e622e['collection_price']=parseFloat(_0x5118c9);const _0x288405=await _0x1e622e[_0x5d19c6(0x1c5)]();_0x3f403d[_0x5d19c6(0x1bd)](_0x288405);}catch(_0x14c384){_0x3f403d['json'](_0x14c384);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1eb),auth,async(_0x401a20,_0xae84dd)=>{const _0x4e181b=a0_0x5bf7da;try{const _0x18dea6=_0x401a20[_0x4e181b(0x200)],_0x2f604e=await staff[_0x4e181b(0x1de)]({'email':_0x18dea6[_0x4e181b(0x1f8)]}),_0x29f35e=await sales_sa['find']({'sales_staff_id':_0x2f604e[_0x4e181b(0x1ef)],'paid':_0x4e181b(0x1da)});_0xae84dd[_0x4e181b(0x1bd)](_0x29f35e);}catch(_0x519754){_0xae84dd[_0x4e181b(0x1bd)](_0x519754);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1c3),auth,async(_0x56a1dd,_0x2decd2)=>{const _0x4e5464=a0_0x5bf7da;try{const _0x5b2efc=_0x56a1dd[_0x4e5464(0x200)],_0x239ca8=await staff['findOne']({'email':_0x5b2efc['email']}),_0x16e0cd=await sales_sa[_0x4e5464(0x1fd)]([{'$match':{'sales_staff_id':_0x239ca8['_id'][_0x4e5464(0x1ff)]()}},{'$unwind':_0x4e5464(0x1ca)},{'$group':{'_id':null,'sumprice':{'$sum':_0x4e5464(0x1e9)},'count':{'$sum':0x1}}},{'$project':{'_id':0x0,'sumprice':0x1,'averageprice':{'$round':[{'$divide':[_0x4e5464(0x1b0),_0x4e5464(0x1f6)]},0x2]}}}]);_0x2decd2[_0x4e5464(0x1bd)](_0x16e0cd);}catch(_0x3808c2){_0x2decd2[_0x4e5464(0x1bd)](_0x3808c2);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1c0),auth,async(_0xc00929,_0x56d267)=>{const _0x5ec60a=a0_0x5bf7da;try{const _0x25ea7d=_0xc00929[_0x5ec60a(0x200)],_0x380743=await staff[_0x5ec60a(0x1de)]({'email':_0x25ea7d[_0x5ec60a(0x1f8)]}),_0x55a54d=await staff[_0x5ec60a(0x1fd)]([{'$match':{'email':_0x25ea7d[_0x5ec60a(0x1f8)]}},{'$unwind':'$product_list'},{'$match':{'product_list.isConfirm':_0x5ec60a(0x1d4)}},{'$group':{'_id':null,'totalQTY':{'$sum':_0x5ec60a(0x1d2)}}}]);_0x56d267['json'](_0x55a54d);}catch(_0x22246b){_0x56d267['json'](_0x22246b);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1dc),auth,async(_0x3919f3,_0x3c4223)=>{const _0x5200d0=a0_0x5bf7da;try{const _0x1fa31d=_0x3919f3[_0x5200d0(0x200)],_0x4c6c1f=await staff[_0x5200d0(0x1de)]({'email':_0x1fa31d[_0x5200d0(0x1f8)]}),_0x359530=await sales_sa[_0x5200d0(0x1fd)]([{'$match':{'sales_staff_id':_0x4c6c1f['_id'][_0x5200d0(0x1ff)]()}},{'$unwind':'$sale_product'},{'$group':{'_id':'$date','totalQuantity':{'$sum':_0x5200d0(0x1e3)},'date':{'$first':_0x5200d0(0x201)}}},{'$sort':{'date':0x1}}]);_0x3c4223[_0x5200d0(0x1bd)](_0x359530);}catch(_0x37eb4a){_0x3c4223[_0x5200d0(0x1bd)](_0x37eb4a);}}),router[a0_0x5bf7da(0x1cd)](a0_0x5bf7da(0x1f5),auth,async(_0x49c72f,_0xdf7a6f)=>{const _0x4f1e47=a0_0x5bf7da;try{const _0x17f82b=_0x49c72f[_0x4f1e47(0x200)],_0x1e307d=await staff[_0x4f1e47(0x1de)]({'email':_0x17f82b['email']}),_0x55d244=await sales_sa[_0x4f1e47(0x1fd)]([{'$match':{'sales_staff_id':_0x1e307d[_0x4f1e47(0x1ef)][_0x4f1e47(0x1ff)]()}},{'$unwind':'$sale_product'},{'$group':{'_id':_0x4f1e47(0x201),'totalPrice':{'$sum':'$sale_product.totalprice'},'date':{'$first':'$date'}}},{'$sort':{'date':0x1}}]);_0xdf7a6f[_0x4f1e47(0x1bd)](_0x55d244);}catch(_0x471126){_0xdf7a6f[_0x4f1e47(0x1bd)](_0x471126);}}),module[a0_0x5bf7da(0x1d7)]=router;function a0_0x95a3(){const _0x4c93a7=['$sumprice','$product.from_quantity','$product','Chinese','Hindi','542546LYAAoL','681024ZzWyub','acc','26887rwGzsv','$total_amount','$return_sale','language','Router','json','$return_sale.sale_qty','../middleware/auth','/my_inv','137883NDnhwW','account_category','/avg_data','render','save','findById','fss','success','$product.product_name','$sale_product','../models/all_models','rsm','get','find','../public/language/languages.json','$return_product','True','$product_list.product_stock','4205992oQOhXl','true','French','Raw\x20Materials','exports','Spanish','702224ZLWEgz','False','Portuguese','/sales_chart','$product.to_quantity','findOne','English','$product.quantity','$total_price','66eYYNAz','$sale_product.quantity','/pending_data_table','Arabic','/paid_data_table','/update_data','express','$sale_product.price','false','/pending_data','warehouse_category','$return_product.return_qty','index_asd','_id','flash','963775hpEBeQ','errors','Finished\x20Goods','$from_warehouse','/price_chart','$count','$product_list','email','German','length','index_sa','/index','aggregate','/paid_data','valueOf','user','$date','log','index'];a0_0x95a3=function(){return _0x4c93a7;};return a0_0x95a3();}