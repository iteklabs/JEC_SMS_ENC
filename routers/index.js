const a0_0x297b40=a0_0x59ff;function a0_0x59ff(_0x2ec4b1,_0x4772b7){const _0x1dd51d=a0_0x1dd5();return a0_0x59ff=function(_0x59ff55,_0x475bdc){_0x59ff55=_0x59ff55-0x118;let _0x46c26a=_0x1dd51d[_0x59ff55];return _0x46c26a;},a0_0x59ff(_0x2ec4b1,_0x4772b7);}(function(_0xc5377e,_0x388c35){const _0x469359=a0_0x59ff,_0x40fd7b=_0xc5377e();while(!![]){try{const _0x46a860=parseInt(_0x469359(0x160))/0x1+-parseInt(_0x469359(0x12f))/0x2+-parseInt(_0x469359(0x136))/0x3+parseInt(_0x469359(0x165))/0x4+-parseInt(_0x469359(0x11d))/0x5*(parseInt(_0x469359(0x14b))/0x6)+parseInt(_0x469359(0x150))/0x7*(parseInt(_0x469359(0x120))/0x8)+-parseInt(_0x469359(0x135))/0x9;if(_0x46a860===_0x388c35)break;else _0x40fd7b['push'](_0x40fd7b['shift']());}catch(_0x4a16d9){_0x40fd7b['push'](_0x40fd7b['shift']());}}}(a0_0x1dd5,0x1c745));const express=require('express'),app=express(),router=express[a0_0x297b40(0x157)](),auth=require(a0_0x297b40(0x158)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,adjustment,purchases_finished,sales_finished,adjustment_finished,transfers_finished,staff,sales_sa,sales_order}=require(a0_0x297b40(0x132)),users=require(a0_0x297b40(0x15b));router['get']('/index',auth,async(_0x4503e8,_0x5661e4)=>{const _0x5c07ce=a0_0x297b40;try{const {username:_0x39a06a,email:_0x508f48,role:_0x60a874}=_0x4503e8[_0x5c07ce(0x13c)],_0xfa594b=_0x4503e8[_0x5c07ce(0x13c)],_0x1dafc6=await master_shop[_0x5c07ce(0x119)](),_0x518770=await profile[_0x5c07ce(0x141)]({'email':_0xfa594b['email']});if(_0x1dafc6[0x0][_0x5c07ce(0x121)]==_0x5c07ce(0x152))var _0xe730cb=users[_0x5c07ce(0x143)];else{if(_0x1dafc6[0x0][_0x5c07ce(0x121)]=='Hindi')var _0xe730cb=users['Hindi'];else{if(_0x1dafc6[0x0]['language']==_0x5c07ce(0x124))var _0xe730cb=users[_0x5c07ce(0x124)];else{if(_0x1dafc6[0x0][_0x5c07ce(0x121)]==_0x5c07ce(0x145))var _0xe730cb=users[_0x5c07ce(0x145)];else{if(_0x1dafc6[0x0][_0x5c07ce(0x121)]==_0x5c07ce(0x11e))var _0xe730cb=users['French'];else{if(_0x1dafc6[0x0]['language']=='Portuguese\x20(BR)')var _0xe730cb=users['Portuguese'];else{if(_0x1dafc6[0x0]['language']==_0x5c07ce(0x154))var _0xe730cb=users['Chinese'];else{if(_0x1dafc6[0x0][_0x5c07ce(0x121)]==_0x5c07ce(0x13a))var _0xe730cb=users['Arabic'];}}}}}}}if(_0xfa594b['account_category']=='wm'){var _0x326872;if(_0xfa594b['warehouse_category']=='Raw\x20Materials'){const _0x3d8f43=await product['find']({'product_category':'Raw\x20Materials'});_0x326872=_0x3d8f43['length'];}else{if(_0xfa594b[_0x5c07ce(0x13b)]=='Finished\x20Goods'){const _0x3e801f=await product[_0x5c07ce(0x119)]({'product_category':_0x5c07ce(0x13e)});_0x326872=_0x3e801f[_0x5c07ce(0x14c)];}else{const _0xdcb49f=await product['find']();_0x326872=_0xdcb49f['length'];}}const _0x34ea75=await sales['aggregate']([{'$group':{'_id':null,'total_price':{'$sum':'$total_price'}}}]),_0x1cb671=await sales[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x13f)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$sale_product.quantity'}}}]),_0x3c3cb2=await sales_return[_0x5c07ce(0x122)]([{'$group':{'_id':null,'total':{'$sum':_0x5c07ce(0x151)}}}]),_0x48772f=await sales_return[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x161)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_sale.sale_qty'}}}]),_0x2a7384=await purchases[_0x5c07ce(0x122)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x5c07ce(0x151)}}}]),_0x244c85=await purchases_return['aggregate']([{'$group':{'_id':null,'total':{'$sum':_0x5c07ce(0x151)}}}]),_0x1deeef=await purchases_return[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x12c)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5c07ce(0x11c)}}}]),_0x8f0723=await purchases[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x14a)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5c07ce(0x162)}}}]),_0x471a74=await purchases['aggregate']([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x1def3f=await sales[_0x5c07ce(0x122)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x516552=await transfers[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x14a)},{'$group':{'_id':_0x5c07ce(0x159),'fromWarehouse':{'$first':'$from_warehouse'},'toWareHouse':{'$first':_0x5c07ce(0x155)},'FromtotalQuantity':{'$sum':'$product.from_quantity'},'TototalQuantity':{'$sum':_0x5c07ce(0x123)}}}]),_0x1b233f=await categories['find'](),_0x3ef933=await product['find'](),_0x42e554=await suppliers['find'](),_0x158840=await customer[_0x5c07ce(0x119)]();_0x5661e4['render'](_0x5c07ce(0x12e),{'success':_0x4503e8[_0x5c07ce(0x12d)]('success'),'errors':_0x4503e8[_0x5c07ce(0x12d)](_0x5c07ce(0x14f)),'role':_0xfa594b,'profile':_0x518770,'sale':_0x34ea75[0x0],'sales_return':_0x3c3cb2[0x0],'purchases':_0x2a7384[0x0],'purchases_return':_0x244c85[0x0],'purchases_table':_0x471a74,'sales_table':_0x1def3f,'categories':_0x1b233f[_0x5c07ce(0x14c)],'product':_0x3ef933['length'],'suppliers':_0x42e554[_0x5c07ce(0x14c)],'customer':_0x158840[_0x5c07ce(0x14c)],'master_shop':_0x1dafc6,'language':_0xe730cb,'sale_QTY':_0x1cb671[0x0],'purchases_QTY':_0x8f0723[0x0],'sales_return_QTY':_0x48772f[0x0],'purchases_return_QTY':_0x1deeef[0x0],'transfer_table':_0x516552,'product_cnt':_0x326872});}else{if(_0xfa594b['account_category']=='sa'){const _0x380606=await staff[_0x5c07ce(0x141)]({'email':_0xfa594b[_0x5c07ce(0x147)]}),_0x2e938a=await sales_sa[_0x5c07ce(0x119)]({'sales_staff_id':_0x380606[_0x5c07ce(0x139)]}),_0x33c2c2=await sales_sa['find']({'sales_staff_id':_0x380606[_0x5c07ce(0x139)],'paid':'True'}),_0x47eacf=await sales_sa['find']({'sales_staff_id':_0x380606['_id'],'paid':_0x5c07ce(0x130)}),_0x14b110=await sales_sa[_0x5c07ce(0x122)]([{'$match':{'sales_staff_id':_0x380606[_0x5c07ce(0x139)][_0x5c07ce(0x163)]()}},{'$unwind':_0x5c07ce(0x13f)},{'$group':{'_id':null,'sumprice':{'$sum':_0x5c07ce(0x11b)},'count':{'$sum':0x1}}},{'$project':{'_id':0x0,'sumprice':0x1,'averageprice':{'$round':[{'$divide':[_0x5c07ce(0x153),_0x5c07ce(0x144)]},0x2]}}}]),_0x2f0c69=await staff[_0x5c07ce(0x122)]([{'$match':{'email':_0xfa594b['email']}},{'$unwind':_0x5c07ce(0x11f)},{'$group':{'_id':null,'totalQTY':{'$sum':_0x5c07ce(0x134)}}}]);_0x5661e4[_0x5c07ce(0x137)]('index_sa',{'success':_0x4503e8[_0x5c07ce(0x12d)]('success'),'errors':_0x4503e8[_0x5c07ce(0x12d)]('errors'),'role':_0xfa594b,'profile':_0x518770,'master_shop':_0x1dafc6,'language':_0xe730cb,'cntPaid':_0x33c2c2,'cntNotPaid':_0x47eacf,'avg_price':_0x14b110[0x0],'my_stock':_0x2f0c69[0x0],'staff_arr':_0x380606});}else{if(_0xfa594b[_0x5c07ce(0x128)]=='acc'){const _0x4b0fb2=await staff[_0x5c07ce(0x141)]({'email':_0xfa594b['email']});_0x5661e4[_0x5c07ce(0x137)]('index_acc',{'success':_0x4503e8[_0x5c07ce(0x12d)](_0x5c07ce(0x15f)),'errors':_0x4503e8[_0x5c07ce(0x12d)]('errors'),'role':_0xfa594b,'profile':_0x518770,'master_shop':_0x1dafc6,'language':_0xe730cb}),_0x5661e4[_0x5c07ce(0x118)](_0x4b0fb2);}else{if(_0xfa594b[_0x5c07ce(0x128)]==_0x5c07ce(0x13d)||_0xfa594b[_0x5c07ce(0x128)]=='rsm'||_0xfa594b[_0x5c07ce(0x128)]=='fss'){const _0x4dfa2b=await staff['findOne']({'email':_0xfa594b[_0x5c07ce(0x147)]});_0x5661e4['render'](_0x5c07ce(0x148),{'success':_0x4503e8[_0x5c07ce(0x12d)](_0x5c07ce(0x15f)),'errors':_0x4503e8['flash'](_0x5c07ce(0x14f)),'role':_0xfa594b,'profile':_0x518770,'master_shop':_0x1dafc6,'language':_0xe730cb});}else{var _0x326872;if(_0xfa594b[_0x5c07ce(0x13b)]==_0x5c07ce(0x140)){const _0x4447d4=await product[_0x5c07ce(0x119)]({'product_category':_0x5c07ce(0x140)});_0x326872=_0x4447d4[_0x5c07ce(0x14c)];}else{if(_0xfa594b[_0x5c07ce(0x13b)]==_0x5c07ce(0x13e)){const _0x5c2e55=await product[_0x5c07ce(0x119)]({'product_category':'Finished\x20Goods'});_0x326872=_0x5c2e55[_0x5c07ce(0x14c)];}else{const _0x1b6cf9=await product[_0x5c07ce(0x119)]();_0x326872=_0x1b6cf9['length'];}}const _0x3f0680=await sales[_0x5c07ce(0x122)]([{'$group':{'_id':null,'total_price':{'$sum':_0x5c07ce(0x14d)}}}]),_0x2a3557=await sales['aggregate']([{'$unwind':_0x5c07ce(0x13f)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5c07ce(0x146)}}}]),_0x3a5603=await sales_return['aggregate']([{'$group':{'_id':null,'total':{'$sum':_0x5c07ce(0x151)}}}]),_0x33bd5f=await sales_return[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x161)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_sale.sale_qty'}}}]),_0xff9ec4=await purchases[_0x5c07ce(0x122)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x5c07ce(0x151)}}}]),_0x8082cb=await purchases_return['aggregate']([{'$group':{'_id':null,'total':{'$sum':_0x5c07ce(0x151)}}}]),_0xab89ec=await purchases_return['aggregate']([{'$unwind':_0x5c07ce(0x12c)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5c07ce(0x11c)}}}]),_0x2867b7=await purchases[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x14a)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x5c07ce(0x162)}}}]),_0x5068d8=await purchases['aggregate']([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x3a1367=await sales[_0x5c07ce(0x122)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x424311=await transfers[_0x5c07ce(0x122)]([{'$unwind':_0x5c07ce(0x14a)},{'$group':{'_id':_0x5c07ce(0x159),'fromWarehouse':{'$first':_0x5c07ce(0x131)},'toWareHouse':{'$first':_0x5c07ce(0x155)},'FromtotalQuantity':{'$sum':_0x5c07ce(0x129)},'TototalQuantity':{'$sum':'$product.to_quantity'}}}]),_0x584f9b=await categories[_0x5c07ce(0x119)](),_0x88e1e=await product[_0x5c07ce(0x119)](),_0x5968dc=await suppliers[_0x5c07ce(0x119)](),_0x5598a2=await customer[_0x5c07ce(0x119)]();_0x5661e4[_0x5c07ce(0x137)](_0x5c07ce(0x12e),{'success':_0x4503e8[_0x5c07ce(0x12d)](_0x5c07ce(0x15f)),'errors':_0x4503e8[_0x5c07ce(0x12d)](_0x5c07ce(0x14f)),'role':_0xfa594b,'profile':_0x518770,'sale':_0x3f0680[0x0],'sales_return':_0x3a5603[0x0],'purchases':_0xff9ec4[0x0],'purchases_return':_0x8082cb[0x0],'purchases_table':_0x5068d8,'sales_table':_0x3a1367,'categories':_0x584f9b['length'],'product':_0x88e1e[_0x5c07ce(0x14c)],'suppliers':_0x5968dc[_0x5c07ce(0x14c)],'customer':_0x5598a2['length'],'master_shop':_0x1dafc6,'language':_0xe730cb,'sale_QTY':_0x2a3557[0x0],'purchases_QTY':_0x2867b7[0x0],'sales_return_QTY':_0x33bd5f[0x0],'purchases_return_QTY':_0xab89ec[0x0],'transfer_table':_0x424311,'product_cnt':_0x326872});}}}}}catch(_0x30acbe){console[_0x5c07ce(0x149)](_0x30acbe);}}),router['get'](a0_0x297b40(0x164),auth,async(_0x1c5cf7,_0x57a2f1)=>{const _0x520da0=a0_0x297b40;try{const _0x2a6889=_0x1c5cf7['user'],_0x4b06d8=await staff[_0x520da0(0x141)]({'email':_0x2a6889['email']}),_0x4578bc=await sales_sa[_0x520da0(0x122)]([{'$match':{'sales_staff_id':_0x4b06d8[_0x520da0(0x139)][_0x520da0(0x163)](),'paid':_0x520da0(0x130)}},{'$limit':0x4},{'$sort':{'invoice':-0x1}}]);_0x57a2f1[_0x520da0(0x118)](_0x4578bc);}catch(_0x5d0710){_0x57a2f1[_0x520da0(0x118)](_0x5d0710);}}),router[a0_0x297b40(0x12b)](a0_0x297b40(0x15e),auth,async(_0x4c748f,_0x41ebd7)=>{const _0x1eda24=a0_0x297b40;try{const _0x2a46d3=_0x4c748f[_0x1eda24(0x13c)],_0xb46607=await staff['findOne']({'email':_0x2a46d3[_0x1eda24(0x147)]}),_0x189b53=await sales_sa[_0x1eda24(0x119)]({'sales_staff_id':_0xb46607[_0x1eda24(0x139)],'paid':'False'});_0x41ebd7[_0x1eda24(0x118)](_0x189b53);}catch(_0x444d20){_0x41ebd7['json'](_0x444d20);}}),router['post'](a0_0x297b40(0x166),auth,async(_0x1567eb,_0xbd83b0)=>{const _0x1c0f74=a0_0x297b40;try{const {sttaff_id:_0x95bc57,warehouse:_0x1c7e26,account_category:_0x3b874a}=_0x1567eb['user'],_0x3dfaae=await sales_order[_0x1c0f74(0x122)]([{'$match':{'accounting_account_id':_0x95bc57,'accounting_account_confirm':'false'}}]);_0xbd83b0[_0x1c0f74(0x118)](_0x3dfaae);}catch(_0x1a3a3d){}}),router[a0_0x297b40(0x12b)](a0_0x297b40(0x11a),auth,async(_0x5b91ce,_0x1c865d)=>{const _0x52742d=a0_0x297b40;try{const _0x15f13e=_0x5b91ce[_0x52742d(0x13c)],_0x5826db=await staff[_0x52742d(0x141)]({'email':_0x15f13e['email']}),_0x2e1555=await sales_sa['find']({'sales_staff_id':_0x5826db[_0x52742d(0x139)],'paid':_0x52742d(0x142)});_0x1c865d[_0x52742d(0x118)](_0x2e1555);}catch(_0x2ea281){_0x1c865d['json'](_0x2ea281);}}),router['get'](a0_0x297b40(0x12a),auth,async(_0x113b07,_0x1e0f2b)=>{const _0x527c8b=a0_0x297b40;try{const _0x2dc86e=_0x113b07[_0x527c8b(0x13c)],_0x62c7e1=await staff[_0x527c8b(0x141)]({'email':_0x2dc86e[_0x527c8b(0x147)]}),_0x3f5982=await sales_sa['aggregate']([{'$match':{'sales_staff_id':_0x62c7e1[_0x527c8b(0x139)][_0x527c8b(0x163)](),'paid':_0x527c8b(0x142)}},{'$limit':0x4},{'$sort':{'invoice':-0x1}}]);_0x1e0f2b['json'](_0x3f5982);}catch(_0x2a258f){_0x1e0f2b[_0x527c8b(0x118)](_0x2a258f);}}),router[a0_0x297b40(0x126)]('/update_data',auth,async(_0x56f7c2,_0x3c2bbb)=>{const _0x4a330e=a0_0x297b40;try{const {id:_0xa4f63e,price:_0x43c7f8}=_0x56f7c2[_0x4a330e(0x15a)],_0x45e739=await sales_sa[_0x4a330e(0x156)](_0xa4f63e);_0x45e739['paid']=_0x4a330e(0x142),_0x45e739['collection_price']=parseFloat(_0x43c7f8);const _0x502f5b=await _0x45e739[_0x4a330e(0x14e)]();_0x3c2bbb[_0x4a330e(0x118)](_0x502f5b);}catch(_0x36870a){_0x3c2bbb[_0x4a330e(0x118)](_0x36870a);}}),router[a0_0x297b40(0x12b)](a0_0x297b40(0x15e),auth,async(_0x5f4360,_0x2062fd)=>{const _0xeedc4f=a0_0x297b40;try{const _0x1b54fd=_0x5f4360[_0xeedc4f(0x13c)],_0x84c1d9=await staff[_0xeedc4f(0x141)]({'email':_0x1b54fd['email']}),_0x47c619=await sales_sa[_0xeedc4f(0x119)]({'sales_staff_id':_0x84c1d9[_0xeedc4f(0x139)],'paid':'False'});_0x2062fd[_0xeedc4f(0x118)](_0x47c619);}catch(_0x2798af){_0x2062fd[_0xeedc4f(0x118)](_0x2798af);}}),router['get'](a0_0x297b40(0x125),auth,async(_0x3dbf1,_0x368470)=>{const _0x33b586=a0_0x297b40;try{const _0x50ed96=_0x3dbf1[_0x33b586(0x13c)],_0x33e837=await staff[_0x33b586(0x141)]({'email':_0x50ed96[_0x33b586(0x147)]}),_0x5e5d67=await sales_sa['aggregate']([{'$match':{'sales_staff_id':_0x33e837[_0x33b586(0x139)]['valueOf']()}},{'$unwind':_0x33b586(0x13f)},{'$group':{'_id':null,'sumprice':{'$sum':'$sale_product.price'},'count':{'$sum':0x1}}},{'$project':{'_id':0x0,'sumprice':0x1,'averageprice':{'$round':[{'$divide':[_0x33b586(0x153),_0x33b586(0x144)]},0x2]}}}]);_0x368470[_0x33b586(0x118)](_0x5e5d67);}catch(_0x18e356){_0x368470[_0x33b586(0x118)](_0x18e356);}}),router['get'](a0_0x297b40(0x138),auth,async(_0x261a45,_0x14b08f)=>{const _0x1399fe=a0_0x297b40;try{const _0x370f4b=_0x261a45[_0x1399fe(0x13c)],_0x2b8b27=await staff[_0x1399fe(0x141)]({'email':_0x370f4b[_0x1399fe(0x147)]}),_0x18c967=await staff[_0x1399fe(0x122)]([{'$match':{'email':_0x370f4b[_0x1399fe(0x147)]}},{'$unwind':_0x1399fe(0x11f)},{'$match':{'product_list.isConfirm':_0x1399fe(0x127)}},{'$group':{'_id':null,'totalQTY':{'$sum':_0x1399fe(0x134)}}}]);_0x14b08f[_0x1399fe(0x118)](_0x18c967);}catch(_0x464912){_0x14b08f[_0x1399fe(0x118)](_0x464912);}}),router[a0_0x297b40(0x12b)](a0_0x297b40(0x133),auth,async(_0x4a6126,_0x418eb9)=>{const _0x2152a0=a0_0x297b40;try{const _0xf12448=_0x4a6126[_0x2152a0(0x13c)],_0x3e9f1a=await staff[_0x2152a0(0x141)]({'email':_0xf12448[_0x2152a0(0x147)]}),_0xa0660c=await sales_sa[_0x2152a0(0x122)]([{'$match':{'sales_staff_id':_0x3e9f1a[_0x2152a0(0x139)][_0x2152a0(0x163)]()}},{'$unwind':'$sale_product'},{'$group':{'_id':_0x2152a0(0x15c),'totalQuantity':{'$sum':_0x2152a0(0x146)},'date':{'$first':_0x2152a0(0x15c)}}},{'$sort':{'date':0x1}}]);_0x418eb9[_0x2152a0(0x118)](_0xa0660c);}catch(_0x347044){_0x418eb9['json'](_0x347044);}}),router[a0_0x297b40(0x12b)](a0_0x297b40(0x15d),auth,async(_0x2468cd,_0x452a8a)=>{const _0x1c0edf=a0_0x297b40;try{const _0x25ff58=_0x2468cd['user'],_0x5507df=await staff[_0x1c0edf(0x141)]({'email':_0x25ff58[_0x1c0edf(0x147)]}),_0x4233c4=await sales_sa[_0x1c0edf(0x122)]([{'$match':{'sales_staff_id':_0x5507df[_0x1c0edf(0x139)][_0x1c0edf(0x163)]()}},{'$unwind':_0x1c0edf(0x13f)},{'$group':{'_id':_0x1c0edf(0x15c),'totalPrice':{'$sum':'$sale_product.totalprice'},'date':{'$first':_0x1c0edf(0x15c)}}},{'$sort':{'date':0x1}}]);_0x452a8a['json'](_0x4233c4);}catch(_0x9e7b58){_0x452a8a['json'](_0x9e7b58);}}),module['exports']=router;function a0_0x1dd5(){const _0x32b6fa=['/paid_data_table','$sale_product.price','$return_product.return_qty','125EYxQCY','French','$product_list','150296nDimEI','language','aggregate','$product.to_quantity','German','/avg_data','post','true','account_category','$product.from_quantity','/paid_data','get','$return_product','flash','index','209384HOKvYE','False','$from_warehouse','../models/all_models','/sales_chart','$product_list.product_stock','415269rdcZMW','244803mFKegB','render','/my_inv','_id','Arabic\x20(ae)','warehouse_category','user','sad','Finished\x20Goods','$sale_product','Raw\x20Materials','findOne','True','English','$count','Spanish','$sale_product.quantity','email','index_asd','log','$product','32808CvjIan','length','$total_price','save','errors','49YeuRQt','$total_amount','English\x20(US)','$sumprice','Chinese','$to_warehouse','findById','Router','../middleware/auth','$product.product_name','body','../public/language/languages.json','$date','/price_chart','/pending_data','success','217755HmqNru','$return_sale','$product.quantity','valueOf','/pending_data_table','545676UKMngH','/get_count','json','find'];a0_0x1dd5=function(){return _0x32b6fa;};return a0_0x1dd5();}