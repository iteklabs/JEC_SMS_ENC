var a0_0x498e8e=a0_0xf346;function a0_0x776d(){var _0x414d31=['$product.to_quantity','$product.product_code','$product._id','$product.new_adjust_qty','9311862ljSoPC','find','$product.expiry_date','Arabic\x20(ae)','$warehouse_name','nodemailer','$invoice','English\x20(US)','/viewdata_tf_fg/:id','view_og_table','/viewdata_og_fg/:id','data_sales','$sale_product.product_code','log','4860590WwVatC','all','$product.unit','$date','$sale_product.id_transaction_from','warehouses','push','$sale_product.production_date','$product_details.product_name','length','findOne','transaction_finished','4672332AiXSrv','/reports','603028Vakget','render','invoice','$product_details.expiry_date','$name','42990UUhhGK','valueOf','$sale_product','errors','Router','$sale_product._id','data_transfer','json','$sale_product.expiry_date','English','447333FJrnWh','Finished\x20Goods','$sale_product.invoice','findById','map','$product_details.unit','$product.room_names','Portuguese','$sale_product.room_name','$product.to_room_name','$room','French','success','$sale_product.quantity','express','$product_details','25619352QswqKd','data_adjustment','user','get','Spanish','email','aggregate','$product.id_transaction_from','Enabled','_id','body','$product_details._id','German','$$invoice','params','post','$product_details.product_stock','$product.id_transaction_id','exports','Chinese','view_table','language','Hindi','warehouse_data','Arabic','14PGfTxm','$sale_product.product_name','$to_warehouse','Portuguese\x20(BR)','$product.production_date','$product_details.production_date','$sale_product.unit','flash','$product.product_name','$product','$product.invoice','$product.id_transaction','$product_details.invoice','$product_details.product_code'];a0_0x776d=function(){return _0x414d31;};return a0_0x776d();}function a0_0xf346(_0x491bad,_0xc30d56){var _0x776d05=a0_0x776d();return a0_0xf346=function(_0xf346f0,_0x59efe1){_0xf346f0=_0xf346f0-0xe7;var _0x30b4c1=_0x776d05[_0xf346f0];return _0x30b4c1;},a0_0xf346(_0x491bad,_0xc30d56);}(function(_0x5c860c,_0x3acd27){var _0x277a95=a0_0xf346,_0x5da91b=_0x5c860c();while(!![]){try{var _0x38b042=-parseInt(_0x277a95(0x13f))/0x1+parseInt(_0x277a95(0x10c))/0x2*(parseInt(_0x277a95(0x149))/0x3)+-parseInt(_0x277a95(0x13a))/0x4+parseInt(_0x277a95(0x12c))/0x5+parseInt(_0x277a95(0x138))/0x6+parseInt(_0x277a95(0x11e))/0x7+-parseInt(_0x277a95(0xf3))/0x8;if(_0x38b042===_0x3acd27)break;else _0x5da91b['push'](_0x5da91b['shift']());}catch(_0x293dac){_0x5da91b['push'](_0x5da91b['shift']());}}}(a0_0x776d,0xb1e8d));const express=require(a0_0x498e8e(0xf1)),app=express(),router=express[a0_0x498e8e(0x143)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished,adjustment}=require('../models/all_models'),auth=require('../middleware/auth'),users=require('../public/language/languages.json'),nodemailer=require(a0_0x498e8e(0x123));router[a0_0x498e8e(0xf6)]('/view',auth,async(_0x2e77f3,_0x1a63e8)=>{var _0x154fb8=a0_0x498e8e;try{const {username:_0x183352,email:_0x341e1c,role:_0x1c499c}=_0x2e77f3[_0x154fb8(0xf5)],_0x20486e=_0x2e77f3[_0x154fb8(0xf5)],_0x36c9e4=await profile[_0x154fb8(0x136)]({'email':_0x20486e[_0x154fb8(0xf8)]}),_0x27883f=await master_shop['find'](),_0x90d36c=await warehouse['aggregate']([{'$match':{'status':_0x154fb8(0xfb),'warehouse_category':_0x154fb8(0x14a)}},{'$group':{'_id':_0x154fb8(0x13e),'name':{'$first':_0x154fb8(0x13e)}}}]);if(_0x27883f[0x0][_0x154fb8(0x108)]=='English\x20(US)')var _0x32e6ae=users[_0x154fb8(0x148)];else{if(_0x27883f[0x0][_0x154fb8(0x108)]==_0x154fb8(0x109))var _0x32e6ae=users[_0x154fb8(0x109)];else{if(_0x27883f[0x0][_0x154fb8(0x108)]==_0x154fb8(0xff))var _0x32e6ae=users[_0x154fb8(0xff)];else{if(_0x27883f[0x0][_0x154fb8(0x108)]=='Spanish')var _0x32e6ae=users[_0x154fb8(0xf7)];else{if(_0x27883f[0x0][_0x154fb8(0x108)]==_0x154fb8(0xee))var _0x32e6ae=users['French'];else{if(_0x27883f[0x0][_0x154fb8(0x108)]==_0x154fb8(0x10f))var _0x32e6ae=users[_0x154fb8(0xea)];else{if(_0x27883f[0x0][_0x154fb8(0x108)]==_0x154fb8(0x106))var _0x32e6ae=users[_0x154fb8(0x106)];else{if(_0x27883f[0x0][_0x154fb8(0x108)]==_0x154fb8(0x121))var _0x32e6ae=users[_0x154fb8(0x10b)];}}}}}}}_0x1a63e8['render'](_0x154fb8(0x137),{'success':_0x2e77f3[_0x154fb8(0x113)]('success'),'errors':_0x2e77f3['flash'](_0x154fb8(0x142)),'role':_0x20486e,'profile':_0x36c9e4,'master_shop':_0x27883f,'dataProcess':_0x90d36c,'language':_0x32e6ae});}catch(_0x2e45e2){console[_0x154fb8(0x12b)](_0x2e45e2);}}),router[a0_0x498e8e(0x102)](a0_0x498e8e(0x139),auth,async(_0x339d80,_0x57fc53)=>{var _0x3eb79b=a0_0x498e8e;const {product_category:_0x117aaa,transaction_category:_0x2776cd,transaction_date_from:_0x18403c,transaction_date_to:_0x314142,warehouse_category:_0x29ce2e,item_code:_0x49e371}=_0x339d80[_0x3eb79b(0xfd)];console['log'](_0x29ce2e);if(_0x117aaa=='rm'){if(_0x29ce2e=='all'){var _0x45ccaf=await purchases[_0x3eb79b(0xf9)]([{'$match':{'date':{'$gte':_0x18403c,'$lte':_0x314142}}},{'$lookup':{'from':'warehouses','let':{'invoice':'$invoice'},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x3eb79b(0x100),'$product_details.invoice']}}},{'$project':{'_id':_0x3eb79b(0xfe),'product_name':'$product_details.product_name','product_code':_0x3eb79b(0x119),'quantity_available':_0x3eb79b(0x103),'warehouse_name':_0x3eb79b(0x13e),'warehouse_room':_0x3eb79b(0xed),'invoice':'$product_details.invoice','production_date':_0x3eb79b(0x111),'expiry_date':_0x3eb79b(0x13d),'UOM':_0x3eb79b(0xe8)}}],'as':_0x3eb79b(0x10a)}}]);_0x45ccaf[_0x3eb79b(0x129)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf['map'](async _0x3734c2=>{var _0x22360c=_0x3eb79b;_0x45ccaf[_0x22360c(0x129)][_0x3734c2[_0x22360c(0x13c)]]=[],await Promise[_0x22360c(0x12d)](_0x3734c2['warehouse_data'][_0x22360c(0xe7)](async _0x1f56b7=>{var _0x57187e=_0x22360c;const _0xa6bf78=await sales[_0x57187e(0xf9)]([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x1f56b7[_0x57187e(0xfc)][_0x57187e(0x140)](),'sale_product.invoice':_0x1f56b7['invoice']}},{'$project':{'_id':'$sale_product._id','product_name':_0x57187e(0x10d),'product_code':'$sale_product.product_code','quantity_available':_0x57187e(0xf0),'warehouse_name':_0x57187e(0x122),'warehouse_room':_0x57187e(0xeb),'product_invoice':_0x57187e(0x14b),'invoice':_0x57187e(0x124),'id_transaction_from':_0x57187e(0x130),'date':_0x57187e(0x12f),'production_date':_0x57187e(0x133),'expiry_date':_0x57187e(0x147),'UOM':_0x57187e(0x112)}}]);_0xa6bf78[_0x57187e(0x135)]>0x0&&_0x45ccaf['data_sales'][_0x3734c2[_0x57187e(0x13c)]][_0x57187e(0x132)](..._0xa6bf78);}));})),_0x45ccaf['data_sales']=_0x45ccaf['data_sales'],_0x45ccaf[_0x3eb79b(0xf4)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf[_0x3eb79b(0xe7)](async _0x31648f=>{var _0xc194eb=_0x3eb79b;_0x45ccaf[_0xc194eb(0xf4)][_0x31648f[_0xc194eb(0x13c)]]=[],await Promise[_0xc194eb(0x12d)](_0x31648f[_0xc194eb(0x10a)][_0xc194eb(0xe7)](async _0x5d44eb=>{var _0x20a0ee=_0xc194eb;const _0x23dbfc=await adjustment['aggregate']([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x5d44eb[_0x20a0ee(0xfc)][_0x20a0ee(0x140)](),'product.invoice':_0x5d44eb[_0x20a0ee(0x13c)]}},{'$project':{'_id':_0x20a0ee(0x11c),'product_name':'$product.product_name','product_code':_0x20a0ee(0x11b),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x20a0ee(0x122),'warehouse_room':'$product.room_names','product_invoice':_0x20a0ee(0x116),'invoice':'$invoice','id_transaction_from':'$product.id_transaction_from','date':_0x20a0ee(0x12f),'production_date':_0x20a0ee(0x110),'expiry_date':'$product.expiry_date','UOM':_0x20a0ee(0x12e)}}]);_0x23dbfc[_0x20a0ee(0x135)]>0x0&&_0x45ccaf['data_adjustment'][_0x31648f[_0x20a0ee(0x13c)]][_0x20a0ee(0x132)](..._0x23dbfc);}));})),_0x45ccaf[_0x3eb79b(0x145)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf['map'](async _0x4418b7=>{var _0x51a95c=_0x3eb79b;_0x45ccaf[_0x51a95c(0x145)][_0x4418b7[_0x51a95c(0x13c)]]=[],await Promise[_0x51a95c(0x12d)](_0x4418b7[_0x51a95c(0x10a)]['map'](async _0x1a0e9c=>{var _0x2816c1=_0x51a95c;const _0x32b9a5=await transfers['aggregate']([{'$unwind':_0x2816c1(0x115)},{'$match':{'product.id_transaction_id':_0x1a0e9c['_id'][_0x2816c1(0x140)](),'product.To_invoice':_0x1a0e9c[_0x2816c1(0x13c)]}},{'$project':{'_id':_0x2816c1(0x11c),'product_name':_0x2816c1(0x114),'product_code':_0x2816c1(0x11b),'quantity_available':_0x2816c1(0x11a),'warehouse_name':_0x2816c1(0x10e),'warehouse_room':'$product.room_names','product_invoice':_0x2816c1(0xec),'invoice':_0x2816c1(0x124),'id_transaction_from':_0x2816c1(0x104),'date':_0x2816c1(0x12f),'production_date':'$product.production_date','expiry_date':_0x2816c1(0x120),'UOM':_0x2816c1(0x12e)}}]);_0x32b9a5[_0x2816c1(0x135)]>0x0&&_0x45ccaf[_0x2816c1(0x145)][_0x4418b7['invoice']]['push'](..._0x32b9a5);}));})),_0x57fc53['json']({'purchases_warehouse':_0x45ccaf,'data_sales':_0x45ccaf[_0x3eb79b(0x129)],'data_adjustment':_0x45ccaf[_0x3eb79b(0xf4)],'data_transfer':_0x45ccaf[_0x3eb79b(0x145)]});}else{var _0x45ccaf=await purchases[_0x3eb79b(0xf9)]([{'$match':{'warehouse_name':_0x29ce2e,'date':{'$gte':_0x18403c,'$lte':_0x314142}}},{'$lookup':{'from':_0x3eb79b(0x131),'let':{'invoice':_0x3eb79b(0x124)},'pipeline':[{'$unwind':_0x3eb79b(0xf2)},{'$match':{'$expr':{'$eq':[_0x3eb79b(0x100),'$product_details.invoice']}}},{'$project':{'_id':_0x3eb79b(0xfe),'product_name':'$product_details.product_name','product_code':'$product_details.product_code','quantity_available':'$product_details.product_stock','warehouse_name':_0x3eb79b(0x13e),'warehouse_room':_0x3eb79b(0xed),'invoice':_0x3eb79b(0x118),'production_date':_0x3eb79b(0x111),'expiry_date':_0x3eb79b(0x13d),'UOM':'$product_details.unit'}}],'as':_0x3eb79b(0x10a)}}]);_0x45ccaf[_0x3eb79b(0x129)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf[_0x3eb79b(0xe7)](async _0x31b8ab=>{var _0x36b759=_0x3eb79b;_0x45ccaf[_0x36b759(0x129)][_0x31b8ab[_0x36b759(0x13c)]]=[],await Promise[_0x36b759(0x12d)](_0x31b8ab[_0x36b759(0x10a)][_0x36b759(0xe7)](async _0xc41b13=>{var _0x4394d2=_0x36b759;const _0x28f78f=await sales[_0x4394d2(0xf9)]([{'$unwind':_0x4394d2(0x141)},{'$match':{'sale_product.id_transaction_from':_0xc41b13['_id'][_0x4394d2(0x140)](),'sale_product.invoice':_0xc41b13[_0x4394d2(0x13c)]}},{'$project':{'_id':'$sale_product._id','product_name':'$sale_product.product_name','product_code':_0x4394d2(0x12a),'quantity_available':_0x4394d2(0xf0),'warehouse_name':_0x4394d2(0x122),'warehouse_room':_0x4394d2(0xeb),'product_invoice':_0x4394d2(0x14b),'invoice':'$invoice','id_transaction_from':_0x4394d2(0x130),'date':'$date','production_date':_0x4394d2(0x133),'expiry_date':'$sale_product.expiry_date','UOM':_0x4394d2(0x112)}}]);_0x28f78f[_0x4394d2(0x135)]>0x0&&_0x45ccaf[_0x4394d2(0x129)][_0x31b8ab[_0x4394d2(0x13c)]]['push'](..._0x28f78f);}));})),_0x45ccaf[_0x3eb79b(0x129)]=_0x45ccaf[_0x3eb79b(0x129)],_0x45ccaf[_0x3eb79b(0xf4)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf['map'](async _0xe17621=>{var _0x40e820=_0x3eb79b;_0x45ccaf[_0x40e820(0xf4)][_0xe17621[_0x40e820(0x13c)]]=[],await Promise[_0x40e820(0x12d)](_0xe17621[_0x40e820(0x10a)][_0x40e820(0xe7)](async _0x2fd052=>{var _0x4b93c0=_0x40e820;const _0x3c665d=await adjustment[_0x4b93c0(0xf9)]([{'$unwind':_0x4b93c0(0x115)},{'$match':{'product.id_transaction_from':_0x2fd052[_0x4b93c0(0xfc)][_0x4b93c0(0x140)](),'product.invoice':_0x2fd052[_0x4b93c0(0x13c)]}},{'$project':{'_id':'$product._id','product_name':_0x4b93c0(0x114),'product_code':_0x4b93c0(0x11b),'quantity_available':_0x4b93c0(0x11d),'warehouse_name':_0x4b93c0(0x122),'warehouse_room':_0x4b93c0(0xe9),'product_invoice':'$product.invoice','invoice':_0x4b93c0(0x124),'id_transaction_from':_0x4b93c0(0xfa),'date':'$date','production_date':_0x4b93c0(0x110),'expiry_date':_0x4b93c0(0x120),'UOM':_0x4b93c0(0x12e)}}]);_0x3c665d[_0x4b93c0(0x135)]>0x0&&_0x45ccaf[_0x4b93c0(0xf4)][_0xe17621['invoice']][_0x4b93c0(0x132)](..._0x3c665d);}));})),_0x45ccaf['data_transfer']={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf[_0x3eb79b(0xe7)](async _0x4815a2=>{var _0x36a26c=_0x3eb79b;_0x45ccaf[_0x36a26c(0x145)][_0x4815a2[_0x36a26c(0x13c)]]=[],await Promise[_0x36a26c(0x12d)](_0x4815a2[_0x36a26c(0x10a)][_0x36a26c(0xe7)](async _0x368c4c=>{var _0x3d76f8=_0x36a26c;const _0x496277=await transfers['aggregate']([{'$unwind':_0x3d76f8(0x115)},{'$match':{'product.id_transaction_id':_0x368c4c[_0x3d76f8(0xfc)][_0x3d76f8(0x140)](),'product.To_invoice':_0x368c4c[_0x3d76f8(0x13c)]}},{'$project':{'_id':_0x3d76f8(0x11c),'product_name':_0x3d76f8(0x114),'product_code':_0x3d76f8(0x11b),'quantity_available':_0x3d76f8(0x11a),'warehouse_name':_0x3d76f8(0x10e),'warehouse_room':'$product.room_names','product_invoice':'$product.to_room_name','invoice':_0x3d76f8(0x124),'id_transaction_from':_0x3d76f8(0x104),'date':_0x3d76f8(0x12f),'production_date':_0x3d76f8(0x110),'expiry_date':_0x3d76f8(0x120),'UOM':'$product.unit'}}]);_0x496277[_0x3d76f8(0x135)]>0x0&&_0x45ccaf[_0x3d76f8(0x145)][_0x4815a2[_0x3d76f8(0x13c)]]['push'](..._0x496277);}));})),_0x57fc53['json']({'purchases_warehouse':_0x45ccaf,'data_sales':_0x45ccaf[_0x3eb79b(0x129)],'data_adjustment':_0x45ccaf['data_adjustment'],'data_transfer':_0x45ccaf['data_transfer']});}}else{if(_0x29ce2e==_0x3eb79b(0x12d)){var _0x45ccaf=await purchases_finished[_0x3eb79b(0xf9)]([{'$match':{'date':{'$gte':_0x18403c,'$lte':_0x314142}}},{'$lookup':{'from':_0x3eb79b(0x131),'let':{'invoice':'$invoice'},'pipeline':[{'$unwind':_0x3eb79b(0xf2)},{'$match':{'$expr':{'$eq':[_0x3eb79b(0x100),_0x3eb79b(0x118)]}}},{'$project':{'_id':_0x3eb79b(0xfe),'product_name':'$product_details.product_name','product_code':_0x3eb79b(0x119),'quantity_available':_0x3eb79b(0x103),'warehouse_name':_0x3eb79b(0x13e),'warehouse_room':_0x3eb79b(0xed),'invoice':_0x3eb79b(0x118),'production_date':_0x3eb79b(0x111),'expiry_date':_0x3eb79b(0x13d),'UOM':'$product_details.unit'}}],'as':_0x3eb79b(0x10a)}}]);_0x45ccaf[_0x3eb79b(0x129)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf['map'](async _0x2d1c6b=>{var _0x43bb9=_0x3eb79b;_0x45ccaf[_0x43bb9(0x129)][_0x2d1c6b[_0x43bb9(0x13c)]]=[],await Promise[_0x43bb9(0x12d)](_0x2d1c6b[_0x43bb9(0x10a)][_0x43bb9(0xe7)](async _0x23a42f=>{var _0x262c95=_0x43bb9;const _0x49ea62=await sales_finished['aggregate']([{'$unwind':_0x262c95(0x141)},{'$match':{'sale_product.id_transaction_from':_0x23a42f[_0x262c95(0xfc)][_0x262c95(0x140)](),'sale_product.invoice':_0x23a42f[_0x262c95(0x13c)]}},{'$project':{'_id':'$sale_product._id','product_name':_0x262c95(0x10d),'product_code':_0x262c95(0x12a),'quantity_available':_0x262c95(0xf0),'warehouse_name':_0x262c95(0x122),'warehouse_room':'$sale_product.room_name','product_invoice':_0x262c95(0x14b),'invoice':_0x262c95(0x124),'id_transaction_from':_0x262c95(0x130),'date':'$date','production_date':'$sale_product.production_date','expiry_date':_0x262c95(0x147),'UOM':_0x262c95(0x112)}}]);_0x49ea62[_0x262c95(0x135)]>0x0&&_0x45ccaf[_0x262c95(0x129)][_0x2d1c6b[_0x262c95(0x13c)]][_0x262c95(0x132)](..._0x49ea62);}));})),_0x45ccaf['data_sales']=_0x45ccaf[_0x3eb79b(0x129)],_0x45ccaf[_0x3eb79b(0xf4)]={},await Promise['all'](_0x45ccaf[_0x3eb79b(0xe7)](async _0x721ecf=>{var _0x4ad7f3=_0x3eb79b;_0x45ccaf['data_adjustment'][_0x721ecf[_0x4ad7f3(0x13c)]]=[],await Promise['all'](_0x721ecf[_0x4ad7f3(0x10a)][_0x4ad7f3(0xe7)](async _0x3bdadf=>{var _0x2a5d2d=_0x4ad7f3;const _0xfc9b8d=await adjustment_finished[_0x2a5d2d(0xf9)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x3bdadf[_0x2a5d2d(0xfc)]['valueOf'](),'product.invoice':_0x3bdadf[_0x2a5d2d(0x13c)]}},{'$project':{'_id':'$product._id','product_name':_0x2a5d2d(0x114),'product_code':'$product.product_code','quantity_available':_0x2a5d2d(0x11d),'warehouse_name':_0x2a5d2d(0x122),'warehouse_room':_0x2a5d2d(0xe9),'product_invoice':_0x2a5d2d(0x116),'invoice':_0x2a5d2d(0x124),'id_transaction_from':_0x2a5d2d(0xfa),'date':_0x2a5d2d(0x12f),'production_date':_0x2a5d2d(0x110),'expiry_date':'$product.expiry_date','UOM':_0x2a5d2d(0x12e)}}]);_0xfc9b8d[_0x2a5d2d(0x135)]>0x0&&_0x45ccaf[_0x2a5d2d(0xf4)][_0x721ecf['invoice']][_0x2a5d2d(0x132)](..._0xfc9b8d);}));})),_0x45ccaf[_0x3eb79b(0x145)]={},await Promise['all'](_0x45ccaf['map'](async _0x994bdc=>{var _0x576c7a=_0x3eb79b;_0x45ccaf['data_transfer'][_0x994bdc[_0x576c7a(0x13c)]]=[],await Promise[_0x576c7a(0x12d)](_0x994bdc[_0x576c7a(0x10a)]['map'](async _0x267375=>{var _0x58bcaf=_0x576c7a;const _0x4d121e=await transfers_finished['aggregate']([{'$unwind':_0x58bcaf(0x115)},{'$match':{'product.id_transaction':_0x267375[_0x58bcaf(0xfc)][_0x58bcaf(0x140)](),'product.from_invoice':_0x267375['invoice']}},{'$project':{'_id':'$product._id','product_name':_0x58bcaf(0x114),'product_code':_0x58bcaf(0x11b),'quantity_available':'$product.to_quantity','warehouse_name':_0x58bcaf(0x10e),'warehouse_room':_0x58bcaf(0xe9),'product_invoice':_0x58bcaf(0xec),'invoice':_0x58bcaf(0x124),'id_transaction_from':_0x58bcaf(0x117),'date':_0x58bcaf(0x12f),'production_date':'$product.production_date','expiry_date':_0x58bcaf(0x120),'UOM':_0x58bcaf(0x12e)}}]);_0x4d121e['length']>0x0&&_0x45ccaf[_0x58bcaf(0x145)][_0x994bdc[_0x58bcaf(0x13c)]][_0x58bcaf(0x132)](..._0x4d121e);}));})),_0x57fc53['json']({'purchases_warehouse':_0x45ccaf,'data_sales':_0x45ccaf[_0x3eb79b(0x129)],'data_adjustment':_0x45ccaf[_0x3eb79b(0xf4)],'data_transfer':_0x45ccaf[_0x3eb79b(0x145)]});}else{var _0x45ccaf=await purchases_finished[_0x3eb79b(0xf9)]([{'$match':{'warehouse_name':_0x29ce2e,'date':{'$gte':_0x18403c,'$lte':_0x314142}}},{'$lookup':{'from':_0x3eb79b(0x131),'let':{'invoice':_0x3eb79b(0x124)},'pipeline':[{'$unwind':_0x3eb79b(0xf2)},{'$match':{'$expr':{'$eq':[_0x3eb79b(0x100),_0x3eb79b(0x118)]}}},{'$project':{'_id':_0x3eb79b(0xfe),'product_name':_0x3eb79b(0x134),'product_code':_0x3eb79b(0x119),'quantity_available':_0x3eb79b(0x103),'warehouse_name':_0x3eb79b(0x13e),'warehouse_room':_0x3eb79b(0xed),'invoice':_0x3eb79b(0x118),'production_date':'$product_details.production_date','expiry_date':'$product_details.expiry_date','UOM':_0x3eb79b(0xe8)}}],'as':_0x3eb79b(0x10a)}}]);_0x45ccaf[_0x3eb79b(0x129)]={},await Promise['all'](_0x45ccaf[_0x3eb79b(0xe7)](async _0x4a881a=>{var _0x192cad=_0x3eb79b;_0x45ccaf[_0x192cad(0x129)][_0x4a881a['invoice']]=[],await Promise[_0x192cad(0x12d)](_0x4a881a[_0x192cad(0x10a)]['map'](async _0x5264ee=>{var _0x4d9d1a=_0x192cad;const _0x5b716b=await sales_finished['aggregate']([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x5264ee[_0x4d9d1a(0xfc)][_0x4d9d1a(0x140)](),'sale_product.invoice':_0x5264ee['invoice']}},{'$project':{'_id':_0x4d9d1a(0x144),'product_name':_0x4d9d1a(0x10d),'product_code':_0x4d9d1a(0x12a),'quantity_available':_0x4d9d1a(0xf0),'warehouse_name':'$warehouse_name','warehouse_room':'$sale_product.room_name','product_invoice':_0x4d9d1a(0x14b),'invoice':_0x4d9d1a(0x124),'id_transaction_from':'$sale_product.id_transaction_from','date':_0x4d9d1a(0x12f),'production_date':_0x4d9d1a(0x133),'expiry_date':_0x4d9d1a(0x147),'UOM':_0x4d9d1a(0x112)}}]);_0x5b716b['length']>0x0&&_0x45ccaf[_0x4d9d1a(0x129)][_0x4a881a[_0x4d9d1a(0x13c)]][_0x4d9d1a(0x132)](..._0x5b716b);}));})),_0x45ccaf['data_sales']=_0x45ccaf[_0x3eb79b(0x129)],_0x45ccaf[_0x3eb79b(0xf4)]={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf[_0x3eb79b(0xe7)](async _0x1687d2=>{var _0x4c9fa0=_0x3eb79b;_0x45ccaf['data_adjustment'][_0x1687d2['invoice']]=[],await Promise[_0x4c9fa0(0x12d)](_0x1687d2[_0x4c9fa0(0x10a)][_0x4c9fa0(0xe7)](async _0x5b3230=>{var _0x304792=_0x4c9fa0;const _0x228f9a=await adjustment_finished[_0x304792(0xf9)]([{'$unwind':_0x304792(0x115)},{'$match':{'product.id_transaction_from':_0x5b3230[_0x304792(0xfc)][_0x304792(0x140)](),'product.invoice':_0x5b3230[_0x304792(0x13c)]}},{'$project':{'_id':_0x304792(0x11c),'product_name':_0x304792(0x114),'product_code':'$product.product_code','quantity_available':_0x304792(0x11d),'warehouse_name':_0x304792(0x122),'warehouse_room':_0x304792(0xe9),'product_invoice':'$product.invoice','invoice':_0x304792(0x124),'id_transaction_from':_0x304792(0xfa),'date':_0x304792(0x12f),'production_date':_0x304792(0x110),'expiry_date':'$product.expiry_date','UOM':_0x304792(0x12e)}}]);_0x228f9a['length']>0x0&&_0x45ccaf[_0x304792(0xf4)][_0x1687d2['invoice']][_0x304792(0x132)](..._0x228f9a);}));})),_0x45ccaf['data_transfer']={},await Promise[_0x3eb79b(0x12d)](_0x45ccaf[_0x3eb79b(0xe7)](async _0x250ad5=>{var _0x501765=_0x3eb79b;_0x45ccaf[_0x501765(0x145)][_0x250ad5[_0x501765(0x13c)]]=[],await Promise[_0x501765(0x12d)](_0x250ad5[_0x501765(0x10a)][_0x501765(0xe7)](async _0x4f6146=>{var _0x5559bd=_0x501765;const _0x18b1aa=await transfers_finished[_0x5559bd(0xf9)]([{'$unwind':_0x5559bd(0x115)},{'$match':{'product.id_transaction':_0x4f6146[_0x5559bd(0xfc)]['valueOf'](),'product.from_invoice':_0x4f6146[_0x5559bd(0x13c)]}},{'$project':{'_id':_0x5559bd(0x11c),'product_name':'$product.product_name','product_code':'$product.product_code','quantity_available':_0x5559bd(0x11a),'warehouse_name':'$to_warehouse','warehouse_room':'$product.room_names','product_invoice':_0x5559bd(0xec),'invoice':'$invoice','id_transaction_from':'$product.id_transaction','date':_0x5559bd(0x12f),'production_date':_0x5559bd(0x110),'expiry_date':'$product.expiry_date','UOM':_0x5559bd(0x12e)}}]);_0x18b1aa[_0x5559bd(0x135)]>0x0&&_0x45ccaf[_0x5559bd(0x145)][_0x250ad5[_0x5559bd(0x13c)]][_0x5559bd(0x132)](..._0x18b1aa);}));})),_0x57fc53['json']({'purchases_warehouse':_0x45ccaf,'data_sales':_0x45ccaf['data_sales'],'data_adjustment':_0x45ccaf[_0x3eb79b(0xf4)],'data_transfer':_0x45ccaf[_0x3eb79b(0x145)]});}}}),router['get']('/viewdata_inc_fg/:id',auth,async(_0x3d8d1e,_0x577c9b)=>{var _0x15a011=a0_0x498e8e;try{const _0x144043=_0x3d8d1e[_0x15a011(0x101)]['id'];var _0x27af25=await purchases_finished[_0x15a011(0x14c)](_0x144043);const _0x407030=await master_shop['find'](),_0x3cee14=_0x3d8d1e[_0x15a011(0xf5)],_0x15c70a=await profile[_0x15a011(0x136)]({'email':_0x3cee14['email']});if(_0x407030[0x0][_0x15a011(0x108)]==_0x15a011(0x125))var _0x49d557=users[_0x15a011(0x148)];else{if(_0x407030[0x0][_0x15a011(0x108)]==_0x15a011(0x109))var _0x49d557=users[_0x15a011(0x109)];else{if(_0x407030[0x0][_0x15a011(0x108)]==_0x15a011(0xff))var _0x49d557=users['German'];else{if(_0x407030[0x0]['language']==_0x15a011(0xf7))var _0x49d557=users[_0x15a011(0xf7)];else{if(_0x407030[0x0][_0x15a011(0x108)]==_0x15a011(0xee))var _0x49d557=users[_0x15a011(0xee)];else{if(_0x407030[0x0]['language']==_0x15a011(0x10f))var _0x49d557=users['Portuguese'];else{if(_0x407030[0x0][_0x15a011(0x108)]==_0x15a011(0x106))var _0x49d557=users['Chinese'];else{if(_0x407030[0x0][_0x15a011(0x108)]==_0x15a011(0x121))var _0x49d557=users[_0x15a011(0x10b)];}}}}}}}_0x577c9b[_0x15a011(0x13b)](_0x15a011(0x107),{'success':_0x3d8d1e[_0x15a011(0x113)](_0x15a011(0xef)),'errors':_0x3d8d1e[_0x15a011(0x113)](_0x15a011(0x142)),'master_shop':_0x407030,'profile':_0x15c70a,'role':_0x3cee14,'language':_0x49d557,'data':_0x27af25});}catch(_0x579c0f){_0x577c9b[_0x15a011(0x146)](_0x579c0f);}}),router[a0_0x498e8e(0xf6)](a0_0x498e8e(0x128),auth,async(_0x35b98a,_0x461a06)=>{var _0x247291=a0_0x498e8e;try{const _0x4150c6=_0x35b98a[_0x247291(0x101)]['id'];var _0x311822=await sales_finished['findById'](_0x4150c6);const _0x327379=await master_shop[_0x247291(0x11f)](),_0x3fd003=_0x35b98a[_0x247291(0xf5)],_0x328518=await profile['findOne']({'email':_0x3fd003[_0x247291(0xf8)]});if(_0x327379[0x0][_0x247291(0x108)]=='English\x20(US)')var _0x49724a=users[_0x247291(0x148)];else{if(_0x327379[0x0]['language']=='Hindi')var _0x49724a=users[_0x247291(0x109)];else{if(_0x327379[0x0][_0x247291(0x108)]=='German')var _0x49724a=users[_0x247291(0xff)];else{if(_0x327379[0x0][_0x247291(0x108)]=='Spanish')var _0x49724a=users[_0x247291(0xf7)];else{if(_0x327379[0x0]['language']=='French')var _0x49724a=users[_0x247291(0xee)];else{if(_0x327379[0x0][_0x247291(0x108)]==_0x247291(0x10f))var _0x49724a=users[_0x247291(0xea)];else{if(_0x327379[0x0][_0x247291(0x108)]==_0x247291(0x106))var _0x49724a=users[_0x247291(0x106)];else{if(_0x327379[0x0]['language']==_0x247291(0x121))var _0x49724a=users[_0x247291(0x10b)];}}}}}}}_0x461a06[_0x247291(0x13b)](_0x247291(0x127),{'success':_0x35b98a[_0x247291(0x113)](_0x247291(0xef)),'errors':_0x35b98a[_0x247291(0x113)](_0x247291(0x142)),'master_shop':_0x327379,'profile':_0x328518,'role':_0x3fd003,'language':_0x49724a,'data':_0x311822});}catch(_0x34a51b){_0x461a06[_0x247291(0x146)](_0x34a51b);}}),router[a0_0x498e8e(0xf6)](a0_0x498e8e(0x126),auth,async(_0x2a57c7,_0x1cd047)=>{var _0xf95293=a0_0x498e8e;try{const _0xfe1924=_0x2a57c7['params']['id'];var _0x25d6dc=await transfers_finished['findById'](_0xfe1924);const _0x29fa24=await master_shop[_0xf95293(0x11f)](),_0x45d4d2=_0x2a57c7[_0xf95293(0xf5)],_0x1b6012=await profile['findOne']({'email':_0x45d4d2[_0xf95293(0xf8)]});if(_0x29fa24[0x0]['language']==_0xf95293(0x125))var _0xeaefcb=users['English'];else{if(_0x29fa24[0x0][_0xf95293(0x108)]==_0xf95293(0x109))var _0xeaefcb=users['Hindi'];else{if(_0x29fa24[0x0][_0xf95293(0x108)]=='German')var _0xeaefcb=users['German'];else{if(_0x29fa24[0x0]['language']==_0xf95293(0xf7))var _0xeaefcb=users[_0xf95293(0xf7)];else{if(_0x29fa24[0x0][_0xf95293(0x108)]==_0xf95293(0xee))var _0xeaefcb=users['French'];else{if(_0x29fa24[0x0][_0xf95293(0x108)]=='Portuguese\x20(BR)')var _0xeaefcb=users[_0xf95293(0xea)];else{if(_0x29fa24[0x0][_0xf95293(0x108)]==_0xf95293(0x106))var _0xeaefcb=users['Chinese'];else{if(_0x29fa24[0x0][_0xf95293(0x108)]==_0xf95293(0x121))var _0xeaefcb=users['Arabic'];}}}}}}}_0x1cd047[_0xf95293(0x13b)]('view_tf_table',{'success':_0x2a57c7[_0xf95293(0x113)](_0xf95293(0xef)),'errors':_0x2a57c7[_0xf95293(0x113)]('errors'),'master_shop':_0x29fa24,'profile':_0x1b6012,'role':_0x45d4d2,'language':_0xeaefcb,'data':_0x25d6dc});}catch(_0x4ed704){_0x1cd047[_0xf95293(0x146)](_0x4ed704);}}),router[a0_0x498e8e(0xf6)]('/viewFG',auth,async(_0x3f0a25,_0x310877)=>{var _0x17e3fe=a0_0x498e8e;try{const {username:_0x23b24e,email:_0x263b8b,role:_0x3b1dc4}=_0x3f0a25['user'],_0x493e77=_0x3f0a25[_0x17e3fe(0xf5)],_0x41fe6e=await profile[_0x17e3fe(0x136)]({'email':_0x493e77['email']}),_0xad74ee=await master_shop[_0x17e3fe(0x11f)](),_0x3364ed=await warehouse['aggregate']([{'$match':{'status':_0x17e3fe(0xfb),'warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':_0x17e3fe(0x13e),'name':{'$first':_0x17e3fe(0x13e)}}}]);if(_0xad74ee[0x0][_0x17e3fe(0x108)]=='English\x20(US)')var _0x148148=users[_0x17e3fe(0x148)];else{if(_0xad74ee[0x0]['language']==_0x17e3fe(0x109))var _0x148148=users[_0x17e3fe(0x109)];else{if(_0xad74ee[0x0][_0x17e3fe(0x108)]==_0x17e3fe(0xff))var _0x148148=users['German'];else{if(_0xad74ee[0x0][_0x17e3fe(0x108)]=='Spanish')var _0x148148=users['Spanish'];else{if(_0xad74ee[0x0][_0x17e3fe(0x108)]==_0x17e3fe(0xee))var _0x148148=users[_0x17e3fe(0xee)];else{if(_0xad74ee[0x0][_0x17e3fe(0x108)]==_0x17e3fe(0x10f))var _0x148148=users[_0x17e3fe(0xea)];else{if(_0xad74ee[0x0][_0x17e3fe(0x108)]==_0x17e3fe(0x106))var _0x148148=users[_0x17e3fe(0x106)];else{if(_0xad74ee[0x0]['language']=='Arabic\x20(ae)')var _0x148148=users['Arabic'];}}}}}}}_0x310877[_0x17e3fe(0x13b)]('transaction_finished_raw',{'success':_0x3f0a25[_0x17e3fe(0x113)]('success'),'errors':_0x3f0a25[_0x17e3fe(0x113)](_0x17e3fe(0x142)),'role':_0x493e77,'profile':_0x41fe6e,'master_shop':_0xad74ee,'dataProcess':_0x3364ed,'language':_0x148148});}catch(_0x2e0b6e){console[_0x17e3fe(0x12b)](_0x2e0b6e);}}),module[a0_0x498e8e(0x105)]=router;