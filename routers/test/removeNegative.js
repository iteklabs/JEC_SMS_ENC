function a0_0x1eb7(){const _0x4f32cd=['data_adjustment','../../models/all_models','Router','$product.to_quantity','invoice','14800005047429','2489004zsiVgn','$product.room_names','\x20documents\x20updated','1326vCXSfX','$product._id','$room','/checking','modifiedCount','get','$product.invoice','$sale_product.room_name','$product','all','$product_details.product_stock','$product.to_room_name','$sale_product.product_code','warehouse_data','push','1593654YINvxH','291528LDJGbQ','success','192760qXqNIR','$$invoice','flash','message','$product.product_name','json','aggregate','$sale_product.quantity','log','$product.product_code','$sale_product.product_name','$product_details.invoice','_id','$product_details','length','16327TlITbw','17171hXsySM','render','$sale_product._id','/negative','table\x20page','map','status','updateMany','$invoice','$product.id_transaction_id','$warehouse_name','monitor','/warehouse_monitor','data_transfer','10ozvvhp','2741190qmPkTP','/join','$product_details._id','INCF-52068316','data_sales','$name','$product.new_adjust_qty','valueOf'];a0_0x1eb7=function(){return _0x4f32cd;};return a0_0x1eb7();}function a0_0x4c8f(_0x1d9c49,_0x5b1cb3){const _0x1eb73a=a0_0x1eb7();return a0_0x4c8f=function(_0x4c8f2d,_0x12c784){_0x4c8f2d=_0x4c8f2d-0x162;let _0x232fbe=_0x1eb73a[_0x4c8f2d];return _0x232fbe;},a0_0x4c8f(_0x1d9c49,_0x5b1cb3);}const a0_0x5ba60d=a0_0x4c8f;(function(_0x5a75ad,_0x453ac1){const _0x2525bd=a0_0x4c8f,_0x4dc2ef=_0x5a75ad();while(!![]){try{const _0x27a67e=-parseInt(_0x2525bd(0x16b))/0x1*(-parseInt(_0x2525bd(0x17a))/0x2)+parseInt(_0x2525bd(0x19b))/0x3+parseInt(_0x2525bd(0x19c))/0x4+parseInt(_0x2525bd(0x17b))/0x5+parseInt(_0x2525bd(0x18c))/0x6*(-parseInt(_0x2525bd(0x16c))/0x7)+-parseInt(_0x2525bd(0x19e))/0x8+-parseInt(_0x2525bd(0x189))/0x9;if(_0x27a67e===_0x453ac1)break;else _0x4dc2ef['push'](_0x4dc2ef['shift']());}catch(_0x3fff8a){_0x4dc2ef['push'](_0x4dc2ef['shift']());}}}(a0_0x1eb7,0x5f829));const express=require('express'),app=express(),router=express[a0_0x5ba60d(0x185)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require(a0_0x5ba60d(0x184));router[a0_0x5ba60d(0x191)](a0_0x5ba60d(0x16f),async(_0x69c363,_0x408344)=>{const _0x218e7f=a0_0x5ba60d;try{const _0x482866=await warehouse[_0x218e7f(0x173)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x408344['json']({'status':_0x482866[_0x218e7f(0x190)]+_0x218e7f(0x18b)});}catch(_0xeb3a4c){console[_0x218e7f(0x164)](_0x218e7f(0x170),_0xeb3a4c),_0x408344[_0x218e7f(0x172)](0xc8)[_0x218e7f(0x1a3)]({'message':_0xeb3a4c[_0x218e7f(0x1a1)]});}}),router[a0_0x5ba60d(0x191)](a0_0x5ba60d(0x18f),async(_0x1f6b44,_0x5af3d5)=>{const _0x1ec133=a0_0x5ba60d;try{const _0x4162dd=await warehouse[_0x1ec133(0x162)]([{'$unwind':_0x1ec133(0x169)},{'$match':{'product_details.invoice':_0x1ec133(0x17e),'product_details.primary_code':_0x1ec133(0x188)}},{'$group':{'_id':{'name':_0x1ec133(0x180),'room':_0x1ec133(0x18e)},'products':{'$push':_0x1ec133(0x169)}}}]);_0x5af3d5[_0x1ec133(0x1a3)](_0x4162dd);}catch(_0x5e9010){console[_0x1ec133(0x164)](_0x1ec133(0x170),_0x5e9010),_0x5af3d5[_0x1ec133(0x172)](0xc8)[_0x1ec133(0x1a3)]({'message':_0x5e9010[_0x1ec133(0x1a1)]});}}),router[a0_0x5ba60d(0x191)](a0_0x5ba60d(0x178),async(_0x3a0589,_0x155f63)=>{const _0x5332ee=a0_0x5ba60d;_0x155f63[_0x5332ee(0x16d)](_0x5332ee(0x177),{'success':_0x3a0589['flash'](_0x5332ee(0x19d)),'errors':_0x3a0589[_0x5332ee(0x1a0)]('errors')});}),router['get'](a0_0x5ba60d(0x17c),async(_0x1ea8c7,_0x2144d3)=>{const _0x41702b=a0_0x5ba60d;var _0x4bd742=await purchases['aggregate']([{'$lookup':{'from':'warehouses','let':{'invoice':_0x41702b(0x174)},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0x41702b(0x19f),_0x41702b(0x167)]}}},{'$project':{'_id':_0x41702b(0x17d),'product_name':'$product_details.product_name','product_code':'$product_details.product_code','quantity_available':_0x41702b(0x196),'warehouse_name':_0x41702b(0x180),'warehouse_room':_0x41702b(0x18e),'invoice':'$product_details.invoice'}}],'as':_0x41702b(0x199)}}]);_0x4bd742[_0x41702b(0x17f)]={},await Promise[_0x41702b(0x195)](_0x4bd742[_0x41702b(0x171)](async _0x412a92=>{const _0x4f6683=_0x41702b;_0x4bd742[_0x4f6683(0x17f)][_0x412a92[_0x4f6683(0x187)]]=[],await Promise[_0x4f6683(0x195)](_0x412a92[_0x4f6683(0x199)][_0x4f6683(0x171)](async _0x367c22=>{const _0x5ab11b=_0x4f6683,_0x3fed45=await sales['aggregate']([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x367c22[_0x5ab11b(0x168)][_0x5ab11b(0x182)](),'sale_product.invoice':_0x367c22[_0x5ab11b(0x187)]}},{'$project':{'_id':_0x5ab11b(0x16e),'product_name':_0x5ab11b(0x166),'product_code':_0x5ab11b(0x198),'quantity_available':_0x5ab11b(0x163),'warehouse_name':_0x5ab11b(0x176),'warehouse_room':_0x5ab11b(0x193),'product_invoice':'$sale_product.invoice','invoice':_0x5ab11b(0x174),'id_transaction_from':'$sale_product.id_transaction_from'}}]);_0x3fed45[_0x5ab11b(0x16a)]>0x0&&_0x4bd742[_0x5ab11b(0x17f)][_0x412a92['invoice']][_0x5ab11b(0x19a)](..._0x3fed45);}));})),_0x4bd742[_0x41702b(0x17f)]=_0x4bd742[_0x41702b(0x17f)],_0x4bd742[_0x41702b(0x183)]={},await Promise[_0x41702b(0x195)](_0x4bd742[_0x41702b(0x171)](async _0x58cf29=>{const _0x2733db=_0x41702b;_0x4bd742[_0x2733db(0x183)][_0x58cf29[_0x2733db(0x187)]]=[],await Promise[_0x2733db(0x195)](_0x58cf29['warehouse_data'][_0x2733db(0x171)](async _0x505cae=>{const _0x1587bf=_0x2733db,_0x1e420f=await adjustment['aggregate']([{'$unwind':'$product'},{'$match':{'product.id_transaction_from':_0x505cae['_id'][_0x1587bf(0x182)](),'product.invoice':_0x505cae[_0x1587bf(0x187)]}},{'$project':{'_id':_0x1587bf(0x18d),'product_name':'$product.product_name','product_code':_0x1587bf(0x165),'quantity_available':_0x1587bf(0x181),'warehouse_name':'$warehouse_name','warehouse_room':_0x1587bf(0x18a),'product_invoice':_0x1587bf(0x192),'invoice':'$invoice','id_transaction_from':'$product.id_transaction_from'}}]);_0x1e420f[_0x1587bf(0x16a)]>0x0&&_0x4bd742[_0x1587bf(0x183)][_0x58cf29[_0x1587bf(0x187)]][_0x1587bf(0x19a)](..._0x1e420f);}));})),_0x4bd742['data_transfer']={},await Promise[_0x41702b(0x195)](_0x4bd742[_0x41702b(0x171)](async _0x12f2b4=>{const _0x4f10c5=_0x41702b;_0x4bd742[_0x4f10c5(0x179)][_0x12f2b4[_0x4f10c5(0x187)]]=[],await Promise[_0x4f10c5(0x195)](_0x12f2b4[_0x4f10c5(0x199)][_0x4f10c5(0x171)](async _0x1edb20=>{const _0x5cc474=_0x4f10c5,_0x28ecb7=await transfers[_0x5cc474(0x162)]([{'$unwind':_0x5cc474(0x194)},{'$match':{'product.id_transaction_id':_0x1edb20[_0x5cc474(0x168)][_0x5cc474(0x182)](),'product.To_invoice':_0x1edb20[_0x5cc474(0x187)]}},{'$project':{'_id':_0x5cc474(0x18d),'product_name':_0x5cc474(0x1a2),'product_code':_0x5cc474(0x165),'quantity_available':_0x5cc474(0x186),'warehouse_name':'$to_warehouse','warehouse_room':_0x5cc474(0x18a),'product_invoice':_0x5cc474(0x197),'invoice':_0x5cc474(0x174),'id_transaction_id':_0x5cc474(0x175)}}]);console[_0x5cc474(0x164)](_0x28ecb7),_0x28ecb7['length']>0x0&&_0x4bd742[_0x5cc474(0x179)][_0x12f2b4['invoice']][_0x5cc474(0x19a)](..._0x28ecb7);}));})),_0x2144d3['json']({'purchases_warehouse':_0x4bd742,'data_sales':_0x4bd742[_0x41702b(0x17f)],'data_adjustment':_0x4bd742[_0x41702b(0x183)],'data_transfer':_0x4bd742[_0x41702b(0x179)]});}),module['exports']=router;