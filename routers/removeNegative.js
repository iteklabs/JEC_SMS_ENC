const a0_0x34cf18=a0_0x5513;function a0_0x48c3(){const _0x2a65d6=['/warehouse_monitor','$sale_product.product_code','get','data_transfer','/join','$product._id','$sale_product.room_name','$product.id_transaction_from','warehouse_data','errors','4965248kbhgSK','message','push','_id','$product_details.product_stock','12ryhmlO','$product.id_transaction_id','$$invoice','map','$product','/negative','20nDgWXv','$product.to_quantity','$invoice','all','valueOf','/checking','$product_details.product_name','length','$sale_product.product_name','exports','3858726EhxOKM','$sale_product.id_transaction_from','success','INCF-52068316','$product_details','$name','modifiedCount','table\x20page','$product.product_code','11333TJojcv','invoice','aggregate','monitor','updateMany','$product_details._id','2315398fhkxEO','render','log','144dOmRvh','$product.invoice','status','data_sales','$product.new_adjust_qty','14800005047429','express','$sale_product.invoice','$product.product_name','$product_details.product_code','1cWkuib','$product_details.invoice','685894DGMqnu','1446490jiKXWp','$product.to_room_name','data_adjustment','Router','json','$product.room_names','$room','874539aQlGxU','$warehouse_name','2454hHQvXC','flash'];a0_0x48c3=function(){return _0x2a65d6;};return a0_0x48c3();}(function(_0x1e0c4d,_0x3c0fa5){const _0x4de429=a0_0x5513,_0x450e54=_0x1e0c4d();while(!![]){try{const _0x2becc4=parseInt(_0x4de429(0x1df))/0x1*(-parseInt(_0x4de429(0x1d2))/0x2)+parseInt(_0x4de429(0x1c3))/0x3+parseInt(_0x4de429(0x1fc))/0x4*(parseInt(_0x4de429(0x1e2))/0x5)+-parseInt(_0x4de429(0x1eb))/0x6*(parseInt(_0x4de429(0x1cc))/0x7)+-parseInt(_0x4de429(0x1f7))/0x8+parseInt(_0x4de429(0x1e9))/0x9*(parseInt(_0x4de429(0x202))/0xa)+parseInt(_0x4de429(0x1e1))/0xb*(parseInt(_0x4de429(0x1d5))/0xc);if(_0x2becc4===_0x3c0fa5)break;else _0x450e54['push'](_0x450e54['shift']());}catch(_0x3747d9){_0x450e54['push'](_0x450e54['shift']());}}}(a0_0x48c3,0xa0348));const express=require(a0_0x34cf18(0x1db)),app=express(),router=express[a0_0x34cf18(0x1e5)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require('../../models/all_models');function a0_0x5513(_0x4b3ad9,_0x3c2e3a){const _0x48c3bf=a0_0x48c3();return a0_0x5513=function(_0x55131e,_0x563bf6){_0x55131e=_0x55131e-0x1be;let _0x58192f=_0x48c3bf[_0x55131e];return _0x58192f;},a0_0x5513(_0x4b3ad9,_0x3c2e3a);}router[a0_0x34cf18(0x1ef)](a0_0x34cf18(0x201),async(_0x412770,_0x5e8f5c)=>{const _0x2f683d=a0_0x34cf18;try{const _0x391abb=await warehouse[_0x2f683d(0x1d0)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x5e8f5c[_0x2f683d(0x1e6)]({'status':_0x391abb[_0x2f683d(0x1c9)]+'\x20documents\x20updated'});}catch(_0xd4fb55){console['log']('table\x20page',_0xd4fb55),_0x5e8f5c['status'](0xc8)['json']({'message':_0xd4fb55[_0x2f683d(0x1f8)]});}}),router[a0_0x34cf18(0x1ef)](a0_0x34cf18(0x1be),async(_0x230c4f,_0x3db2d3)=>{const _0x307a60=a0_0x34cf18;try{const _0xf82f98=await warehouse[_0x307a60(0x1ce)]([{'$unwind':'$product_details'},{'$match':{'product_details.invoice':_0x307a60(0x1c6),'product_details.primary_code':_0x307a60(0x1da)}},{'$group':{'_id':{'name':_0x307a60(0x1c8),'room':_0x307a60(0x1e8)},'products':{'$push':_0x307a60(0x1c7)}}}]);_0x3db2d3[_0x307a60(0x1e6)](_0xf82f98);}catch(_0x2ccd95){console[_0x307a60(0x1d4)](_0x307a60(0x1ca),_0x2ccd95),_0x3db2d3[_0x307a60(0x1d7)](0xc8)[_0x307a60(0x1e6)]({'message':_0x2ccd95[_0x307a60(0x1f8)]});}}),router['get'](a0_0x34cf18(0x1ed),async(_0x3ecff8,_0x55860a)=>{const _0x57da4f=a0_0x34cf18;_0x55860a[_0x57da4f(0x1d3)](_0x57da4f(0x1cf),{'success':_0x3ecff8[_0x57da4f(0x1ec)](_0x57da4f(0x1c5)),'errors':_0x3ecff8[_0x57da4f(0x1ec)](_0x57da4f(0x1f6))});}),router[a0_0x34cf18(0x1ef)](a0_0x34cf18(0x1f1),async(_0x327f4f,_0x190335)=>{const _0x1cc1bb=a0_0x34cf18;var _0xc47899=await purchases['aggregate']([{'$lookup':{'from':'warehouses','let':{'invoice':_0x1cc1bb(0x204)},'pipeline':[{'$unwind':_0x1cc1bb(0x1c7)},{'$match':{'$expr':{'$eq':[_0x1cc1bb(0x1fe),_0x1cc1bb(0x1e0)]}}},{'$project':{'_id':_0x1cc1bb(0x1d1),'product_name':_0x1cc1bb(0x1bf),'product_code':_0x1cc1bb(0x1de),'quantity_available':_0x1cc1bb(0x1fb),'warehouse_name':'$name','warehouse_room':'$room','invoice':_0x1cc1bb(0x1e0)}}],'as':_0x1cc1bb(0x1f5)}}]);_0xc47899[_0x1cc1bb(0x1d8)]={},await Promise[_0x1cc1bb(0x205)](_0xc47899[_0x1cc1bb(0x1ff)](async _0x1e927c=>{const _0x1f73d3=_0x1cc1bb;_0xc47899[_0x1f73d3(0x1d8)][_0x1e927c[_0x1f73d3(0x1cd)]]=[],await Promise[_0x1f73d3(0x205)](_0x1e927c[_0x1f73d3(0x1f5)][_0x1f73d3(0x1ff)](async _0x4ee2ec=>{const _0x411506=_0x1f73d3,_0x838592=await sales[_0x411506(0x1ce)]([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x4ee2ec[_0x411506(0x1fa)][_0x411506(0x206)](),'sale_product.invoice':_0x4ee2ec[_0x411506(0x1cd)]}},{'$project':{'_id':'$sale_product._id','product_name':_0x411506(0x1c1),'product_code':_0x411506(0x1ee),'quantity_available':'$sale_product.quantity','warehouse_name':_0x411506(0x1ea),'warehouse_room':_0x411506(0x1f3),'product_invoice':_0x411506(0x1dc),'invoice':_0x411506(0x204),'id_transaction_from':_0x411506(0x1c4)}}]);_0x838592[_0x411506(0x1c0)]>0x0&&_0xc47899[_0x411506(0x1d8)][_0x1e927c[_0x411506(0x1cd)]][_0x411506(0x1f9)](..._0x838592);}));})),_0xc47899[_0x1cc1bb(0x1d8)]=_0xc47899[_0x1cc1bb(0x1d8)],_0xc47899[_0x1cc1bb(0x1e4)]={},await Promise[_0x1cc1bb(0x205)](_0xc47899[_0x1cc1bb(0x1ff)](async _0x1e322d=>{const _0x315c89=_0x1cc1bb;_0xc47899[_0x315c89(0x1e4)][_0x1e322d[_0x315c89(0x1cd)]]=[],await Promise[_0x315c89(0x205)](_0x1e322d[_0x315c89(0x1f5)][_0x315c89(0x1ff)](async _0x1368ea=>{const _0x557bc4=_0x315c89,_0x3e463c=await adjustment['aggregate']([{'$unwind':_0x557bc4(0x200)},{'$match':{'product.id_transaction_from':_0x1368ea[_0x557bc4(0x1fa)][_0x557bc4(0x206)](),'product.invoice':_0x1368ea[_0x557bc4(0x1cd)]}},{'$project':{'_id':_0x557bc4(0x1f2),'product_name':_0x557bc4(0x1dd),'product_code':_0x557bc4(0x1cb),'quantity_available':_0x557bc4(0x1d9),'warehouse_name':_0x557bc4(0x1ea),'warehouse_room':'$product.room_names','product_invoice':_0x557bc4(0x1d6),'invoice':_0x557bc4(0x204),'id_transaction_from':_0x557bc4(0x1f4)}}]);_0x3e463c[_0x557bc4(0x1c0)]>0x0&&_0xc47899[_0x557bc4(0x1e4)][_0x1e322d[_0x557bc4(0x1cd)]]['push'](..._0x3e463c);}));})),_0xc47899[_0x1cc1bb(0x1f0)]={},await Promise['all'](_0xc47899[_0x1cc1bb(0x1ff)](async _0x287f32=>{const _0x22e69f=_0x1cc1bb;_0xc47899[_0x22e69f(0x1f0)][_0x287f32[_0x22e69f(0x1cd)]]=[],await Promise[_0x22e69f(0x205)](_0x287f32['warehouse_data'][_0x22e69f(0x1ff)](async _0x13a57b=>{const _0x4c25b4=_0x22e69f,_0x125194=await transfers[_0x4c25b4(0x1ce)]([{'$unwind':_0x4c25b4(0x200)},{'$match':{'product.id_transaction_id':_0x13a57b['_id'][_0x4c25b4(0x206)](),'product.To_invoice':_0x13a57b[_0x4c25b4(0x1cd)]}},{'$project':{'_id':_0x4c25b4(0x1f2),'product_name':'$product.product_name','product_code':_0x4c25b4(0x1cb),'quantity_available':_0x4c25b4(0x203),'warehouse_name':'$to_warehouse','warehouse_room':_0x4c25b4(0x1e7),'product_invoice':_0x4c25b4(0x1e3),'invoice':_0x4c25b4(0x204),'id_transaction_id':_0x4c25b4(0x1fd)}}]);console['log'](_0x125194),_0x125194[_0x4c25b4(0x1c0)]>0x0&&_0xc47899[_0x4c25b4(0x1f0)][_0x287f32[_0x4c25b4(0x1cd)]][_0x4c25b4(0x1f9)](..._0x125194);}));})),_0x190335['json']({'purchases_warehouse':_0xc47899,'data_sales':_0xc47899[_0x1cc1bb(0x1d8)],'data_adjustment':_0xc47899[_0x1cc1bb(0x1e4)],'data_transfer':_0xc47899[_0x1cc1bb(0x1f0)]});}),module[a0_0x34cf18(0x1c2)]=router;