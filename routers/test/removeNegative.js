function a0_0x5182(_0x5edcab,_0x24a1c6){const _0x47e01b=a0_0x47e0();return a0_0x5182=function(_0x518263,_0x448b10){_0x518263=_0x518263-0x18f;let _0x2c111e=_0x47e01b[_0x518263];return _0x2c111e;},a0_0x5182(_0x5edcab,_0x24a1c6);}const a0_0x522613=a0_0x5182;(function(_0x341e48,_0x621fed){const _0x25d3f1=a0_0x5182,_0x262e51=_0x341e48();while(!![]){try{const _0x3cb606=-parseInt(_0x25d3f1(0x1be))/0x1*(-parseInt(_0x25d3f1(0x1a0))/0x2)+-parseInt(_0x25d3f1(0x1bb))/0x3*(-parseInt(_0x25d3f1(0x1b8))/0x4)+parseInt(_0x25d3f1(0x19c))/0x5*(parseInt(_0x25d3f1(0x1bd))/0x6)+-parseInt(_0x25d3f1(0x1ce))/0x7*(-parseInt(_0x25d3f1(0x1bf))/0x8)+parseInt(_0x25d3f1(0x1c2))/0x9*(-parseInt(_0x25d3f1(0x1b4))/0xa)+-parseInt(_0x25d3f1(0x1a3))/0xb*(-parseInt(_0x25d3f1(0x1af))/0xc)+-parseInt(_0x25d3f1(0x1ad))/0xd;if(_0x3cb606===_0x621fed)break;else _0x262e51['push'](_0x262e51['shift']());}catch(_0x1b2af8){_0x262e51['push'](_0x262e51['shift']());}}}(a0_0x47e0,0x1a99c));function a0_0x47e0(){const _0x446e0a=['562218RUVSCl','16529pHwDNl','50168PfznRJ','express','$to_warehouse','63gkOQYN','updateMany','$sale_product.id_transaction_from','$warehouse_name','get','push','data_transfer','INCF-52068316','$product_details.product_code','log','aggregate','_id','147qtPPCa','warehouse_data','valueOf','$sale_product.room_name','table\x20page','all','$product_details.product_name','/negative','$$invoice','../../models/all_models','$product.to_room_name','$invoice','map','length','10GoDfAS','monitor','status','$product.id_transaction_id','4AFSbGV','message','$product.room_names','202257LPSSIB','$product_details','$product.product_name','$product._id','$name','$product.product_code','data_sales','json','$product_details.product_stock','$product_details.invoice','6931002haGjIc','$product_details._id','108GoExTi','exports','invoice','$product.to_quantity','$product','40130YThBaU','warehouses','$sale_product.invoice','$sale_product.product_code','4gcoTqc','$room','flash','457689gOyUJJ','data_adjustment'];a0_0x47e0=function(){return _0x446e0a;};return a0_0x47e0();}const express=require(a0_0x522613(0x1c0)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require(a0_0x522613(0x197));router[a0_0x522613(0x1c6)](a0_0x522613(0x195),async(_0x3af2c3,_0x36df7a)=>{const _0x1dc89b=a0_0x522613;try{const _0x5a02a2=await warehouse[_0x1dc89b(0x1c3)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x36df7a[_0x1dc89b(0x1aa)]({'status':_0x5a02a2['modifiedCount']+'\x20documents\x20updated'});}catch(_0xacbd2e){console[_0x1dc89b(0x1cb)]('table\x20page',_0xacbd2e),_0x36df7a['status'](0xc8)[_0x1dc89b(0x1aa)]({'message':_0xacbd2e[_0x1dc89b(0x1a1)]});}}),router['get']('/checking',async(_0x310144,_0x141269)=>{const _0xf87c75=a0_0x522613;try{const _0x2c4f12=await warehouse[_0xf87c75(0x1cc)]([{'$unwind':_0xf87c75(0x1a4)},{'$match':{'product_details.invoice':_0xf87c75(0x1c9),'product_details.primary_code':'14800005047429'}},{'$group':{'_id':{'name':_0xf87c75(0x1a7),'room':'$room'},'products':{'$push':_0xf87c75(0x1a4)}}}]);_0x141269[_0xf87c75(0x1aa)](_0x2c4f12);}catch(_0x596e4d){console['log'](_0xf87c75(0x192),_0x596e4d),_0x141269[_0xf87c75(0x19e)](0xc8)[_0xf87c75(0x1aa)]({'message':_0x596e4d[_0xf87c75(0x1a1)]});}}),router['get']('/warehouse_monitor',async(_0x5553a3,_0x51067d)=>{const _0x14e21e=a0_0x522613;_0x51067d['render'](_0x14e21e(0x19d),{'success':_0x5553a3[_0x14e21e(0x1ba)]('success'),'errors':_0x5553a3['flash']('errors')});}),router['get']('/join',async(_0x33acc9,_0x4a6694)=>{const _0xc8b31c=a0_0x522613;var _0x1337cc=await purchases[_0xc8b31c(0x1cc)]([{'$lookup':{'from':_0xc8b31c(0x1b5),'let':{'invoice':_0xc8b31c(0x199)},'pipeline':[{'$unwind':_0xc8b31c(0x1a4)},{'$match':{'$expr':{'$eq':[_0xc8b31c(0x196),_0xc8b31c(0x1ac)]}}},{'$project':{'_id':_0xc8b31c(0x1ae),'product_name':_0xc8b31c(0x194),'product_code':_0xc8b31c(0x1ca),'quantity_available':_0xc8b31c(0x1ab),'warehouse_name':_0xc8b31c(0x1a7),'warehouse_room':_0xc8b31c(0x1b9),'invoice':_0xc8b31c(0x1ac)}}],'as':_0xc8b31c(0x18f)}}]);_0x1337cc[_0xc8b31c(0x1a9)]={},await Promise[_0xc8b31c(0x193)](_0x1337cc[_0xc8b31c(0x19a)](async _0x522652=>{const _0x36c5cd=_0xc8b31c;_0x1337cc[_0x36c5cd(0x1a9)][_0x522652[_0x36c5cd(0x1b1)]]=[],await Promise[_0x36c5cd(0x193)](_0x522652[_0x36c5cd(0x18f)][_0x36c5cd(0x19a)](async _0x1fc6ca=>{const _0x2d3036=_0x36c5cd,_0x3c4488=await sales[_0x2d3036(0x1cc)]([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x1fc6ca[_0x2d3036(0x1cd)][_0x2d3036(0x190)](),'sale_product.invoice':_0x1fc6ca['invoice']}},{'$project':{'_id':'$sale_product._id','product_name':'$sale_product.product_name','product_code':_0x2d3036(0x1b7),'quantity_available':'$sale_product.quantity','warehouse_name':_0x2d3036(0x1c5),'warehouse_room':_0x2d3036(0x191),'product_invoice':_0x2d3036(0x1b6),'invoice':_0x2d3036(0x199),'id_transaction_from':_0x2d3036(0x1c4)}}]);_0x3c4488[_0x2d3036(0x19b)]>0x0&&_0x1337cc[_0x2d3036(0x1a9)][_0x522652[_0x2d3036(0x1b1)]]['push'](..._0x3c4488);}));})),_0x1337cc[_0xc8b31c(0x1a9)]=_0x1337cc[_0xc8b31c(0x1a9)],_0x1337cc[_0xc8b31c(0x1bc)]={},await Promise[_0xc8b31c(0x193)](_0x1337cc[_0xc8b31c(0x19a)](async _0x384b53=>{const _0x344abc=_0xc8b31c;_0x1337cc['data_adjustment'][_0x384b53[_0x344abc(0x1b1)]]=[],await Promise[_0x344abc(0x193)](_0x384b53[_0x344abc(0x18f)][_0x344abc(0x19a)](async _0x1fec20=>{const _0x278984=_0x344abc,_0x33beaa=await adjustment[_0x278984(0x1cc)]([{'$unwind':_0x278984(0x1b3)},{'$match':{'product.id_transaction_from':_0x1fec20[_0x278984(0x1cd)]['valueOf'](),'product.invoice':_0x1fec20['invoice']}},{'$project':{'_id':_0x278984(0x1a6),'product_name':_0x278984(0x1a5),'product_code':_0x278984(0x1a8),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x278984(0x1c5),'warehouse_room':'$product.room_names','product_invoice':'$product.invoice','invoice':'$invoice','id_transaction_from':'$product.id_transaction_from'}}]);_0x33beaa[_0x278984(0x19b)]>0x0&&_0x1337cc['data_adjustment'][_0x384b53[_0x278984(0x1b1)]][_0x278984(0x1c7)](..._0x33beaa);}));})),_0x1337cc['data_transfer']={},await Promise['all'](_0x1337cc['map'](async _0x2ba2d8=>{const _0x4d277a=_0xc8b31c;_0x1337cc[_0x4d277a(0x1c8)][_0x2ba2d8['invoice']]=[],await Promise[_0x4d277a(0x193)](_0x2ba2d8[_0x4d277a(0x18f)][_0x4d277a(0x19a)](async _0x5d7f68=>{const _0x1399f9=_0x4d277a,_0x328671=await transfers['aggregate']([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x5d7f68[_0x1399f9(0x1cd)]['valueOf'](),'product.To_invoice':_0x5d7f68[_0x1399f9(0x1b1)]}},{'$project':{'_id':'$product._id','product_name':_0x1399f9(0x1a5),'product_code':'$product.product_code','quantity_available':_0x1399f9(0x1b2),'warehouse_name':_0x1399f9(0x1c1),'warehouse_room':_0x1399f9(0x1a2),'product_invoice':_0x1399f9(0x198),'invoice':_0x1399f9(0x199),'id_transaction_id':_0x1399f9(0x19f)}}]);console[_0x1399f9(0x1cb)](_0x328671),_0x328671[_0x1399f9(0x19b)]>0x0&&_0x1337cc['data_transfer'][_0x2ba2d8[_0x1399f9(0x1b1)]]['push'](..._0x328671);}));})),_0x4a6694[_0xc8b31c(0x1aa)]({'purchases_warehouse':_0x1337cc,'data_sales':_0x1337cc[_0xc8b31c(0x1a9)],'data_adjustment':_0x1337cc[_0xc8b31c(0x1bc)],'data_transfer':_0x1337cc[_0xc8b31c(0x1c8)]});}),module[a0_0x522613(0x1b0)]=router;