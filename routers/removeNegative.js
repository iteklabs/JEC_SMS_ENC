function a0_0x397f(_0x228e07,_0x23c198){const _0x4d4f43=a0_0x4d4f();return a0_0x397f=function(_0x397f0d,_0x2a3c8d){_0x397f0d=_0x397f0d-0x117;let _0xe113e1=_0x4d4f43[_0x397f0d];return _0xe113e1;},a0_0x397f(_0x228e07,_0x23c198);}const a0_0x3a1612=a0_0x397f;(function(_0x20afeb,_0x314ff0){const _0x316d72=a0_0x397f,_0x265809=_0x20afeb();while(!![]){try{const _0x7ea792=-parseInt(_0x316d72(0x142))/0x1*(-parseInt(_0x316d72(0x11b))/0x2)+parseInt(_0x316d72(0x148))/0x3+-parseInt(_0x316d72(0x132))/0x4+parseInt(_0x316d72(0x14f))/0x5+-parseInt(_0x316d72(0x14e))/0x6+parseInt(_0x316d72(0x149))/0x7+parseInt(_0x316d72(0x153))/0x8*(parseInt(_0x316d72(0x12e))/0x9);if(_0x7ea792===_0x314ff0)break;else _0x265809['push'](_0x265809['shift']());}catch(_0x562002){_0x265809['push'](_0x265809['shift']());}}}(a0_0x4d4f,0x7cd2b));function a0_0x4d4f(){const _0x468769=['$product.id_transaction_id','render','$product.invoice','length','message','errors','3VTIXct','$product','INCF-52068316','status','modifiedCount','invoice','448161SqONRy','1695253MmFdpR','$sale_product.id_transaction_from','Router','flash','$product._id','4601796jOoBCd','548100SWqUhs','$product.to_quantity','data_adjustment','/negative','1503536sQpfbc','$product_details.product_stock','data_sales','get','../../models/all_models','_id','valueOf','$name','aggregate','659150XxNPOF','$sale_product.quantity','updateMany','$sale_product.room_name','$sale_product._id','json','$$invoice','warehouses','log','$sale_product.invoice','monitor','map','express','$product.room_names','/warehouse_monitor','$product.to_room_name','all','$product_details._id','push','18LoyTGm','success','$invoice','$product.product_code','2350216xArhyM','$product_details.invoice','/join','$product_details','$sale_product','$product.product_name','14800005047429','$sale_product.product_code','$sale_product.product_name','data_transfer'];a0_0x4d4f=function(){return _0x468769;};return a0_0x4d4f();}const express=require(a0_0x3a1612(0x127)),app=express(),router=express[a0_0x3a1612(0x14b)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require(a0_0x3a1612(0x157));router[a0_0x3a1612(0x156)](a0_0x3a1612(0x152),async(_0x53e6d4,_0x473045)=>{const _0x4cd276=a0_0x3a1612;try{const _0x180e92=await warehouse[_0x4cd276(0x11d)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x473045[_0x4cd276(0x120)]({'status':_0x180e92[_0x4cd276(0x146)]+'\x20documents\x20updated'});}catch(_0x540bba){console['log']('table\x20page',_0x540bba),_0x473045[_0x4cd276(0x145)](0xc8)[_0x4cd276(0x120)]({'message':_0x540bba[_0x4cd276(0x140)]});}}),router[a0_0x3a1612(0x156)]('/checking',async(_0x2fdc51,_0x69423d)=>{const _0x332f98=a0_0x3a1612;try{const _0x4dbd39=await warehouse[_0x332f98(0x11a)]([{'$unwind':_0x332f98(0x135)},{'$match':{'product_details.invoice':_0x332f98(0x144),'product_details.primary_code':_0x332f98(0x138)}},{'$group':{'_id':{'name':'$name','room':'$room'},'products':{'$push':_0x332f98(0x135)}}}]);_0x69423d[_0x332f98(0x120)](_0x4dbd39);}catch(_0x20e677){console[_0x332f98(0x123)]('table\x20page',_0x20e677),_0x69423d[_0x332f98(0x145)](0xc8)[_0x332f98(0x120)]({'message':_0x20e677['message']});}}),router['get'](a0_0x3a1612(0x129),async(_0x2b9a2b,_0x216c3d)=>{const _0x21627e=a0_0x3a1612;_0x216c3d[_0x21627e(0x13d)](_0x21627e(0x125),{'success':_0x2b9a2b[_0x21627e(0x14c)](_0x21627e(0x12f)),'errors':_0x2b9a2b[_0x21627e(0x14c)](_0x21627e(0x141))});}),router[a0_0x3a1612(0x156)](a0_0x3a1612(0x134),async(_0x4d3999,_0x3b7efd)=>{const _0x59c84c=a0_0x3a1612;var _0x9db9f8=await purchases[_0x59c84c(0x11a)]([{'$lookup':{'from':_0x59c84c(0x122),'let':{'invoice':_0x59c84c(0x130)},'pipeline':[{'$unwind':_0x59c84c(0x135)},{'$match':{'$expr':{'$eq':[_0x59c84c(0x121),_0x59c84c(0x133)]}}},{'$project':{'_id':_0x59c84c(0x12c),'product_name':'$product_details.product_name','product_code':'$product_details.product_code','quantity_available':_0x59c84c(0x154),'warehouse_name':_0x59c84c(0x119),'warehouse_room':'$room','invoice':'$product_details.invoice'}}],'as':'warehouse_data'}}]);_0x9db9f8[_0x59c84c(0x155)]={},await Promise[_0x59c84c(0x12b)](_0x9db9f8[_0x59c84c(0x126)](async _0x278c9e=>{const _0x498af2=_0x59c84c;_0x9db9f8[_0x498af2(0x155)][_0x278c9e[_0x498af2(0x147)]]=[],await Promise['all'](_0x278c9e['warehouse_data'][_0x498af2(0x126)](async _0x274458=>{const _0x5a848a=_0x498af2,_0x1439a6=await sales['aggregate']([{'$unwind':_0x5a848a(0x136)},{'$match':{'sale_product.id_transaction_from':_0x274458[_0x5a848a(0x117)][_0x5a848a(0x118)](),'sale_product.invoice':_0x274458[_0x5a848a(0x147)]}},{'$project':{'_id':_0x5a848a(0x11f),'product_name':_0x5a848a(0x13a),'product_code':_0x5a848a(0x139),'quantity_available':_0x5a848a(0x11c),'warehouse_name':'$warehouse_name','warehouse_room':_0x5a848a(0x11e),'product_invoice':_0x5a848a(0x124),'invoice':_0x5a848a(0x130),'id_transaction_from':_0x5a848a(0x14a)}}]);_0x1439a6[_0x5a848a(0x13f)]>0x0&&_0x9db9f8[_0x5a848a(0x155)][_0x278c9e[_0x5a848a(0x147)]]['push'](..._0x1439a6);}));})),_0x9db9f8[_0x59c84c(0x155)]=_0x9db9f8[_0x59c84c(0x155)],_0x9db9f8[_0x59c84c(0x151)]={},await Promise[_0x59c84c(0x12b)](_0x9db9f8[_0x59c84c(0x126)](async _0xb05a53=>{const _0x37b7d2=_0x59c84c;_0x9db9f8['data_adjustment'][_0xb05a53['invoice']]=[],await Promise[_0x37b7d2(0x12b)](_0xb05a53['warehouse_data'][_0x37b7d2(0x126)](async _0x3b1ae6=>{const _0x134b0b=_0x37b7d2,_0x3069e4=await adjustment[_0x134b0b(0x11a)]([{'$unwind':_0x134b0b(0x143)},{'$match':{'product.id_transaction_from':_0x3b1ae6[_0x134b0b(0x117)][_0x134b0b(0x118)](),'product.invoice':_0x3b1ae6[_0x134b0b(0x147)]}},{'$project':{'_id':_0x134b0b(0x14d),'product_name':'$product.product_name','product_code':_0x134b0b(0x131),'quantity_available':'$product.new_adjust_qty','warehouse_name':'$warehouse_name','warehouse_room':_0x134b0b(0x128),'product_invoice':_0x134b0b(0x13e),'invoice':_0x134b0b(0x130),'id_transaction_from':'$product.id_transaction_from'}}]);_0x3069e4['length']>0x0&&_0x9db9f8[_0x134b0b(0x151)][_0xb05a53[_0x134b0b(0x147)]]['push'](..._0x3069e4);}));})),_0x9db9f8[_0x59c84c(0x13b)]={},await Promise[_0x59c84c(0x12b)](_0x9db9f8[_0x59c84c(0x126)](async _0x2681d2=>{const _0x126c89=_0x59c84c;_0x9db9f8['data_transfer'][_0x2681d2[_0x126c89(0x147)]]=[],await Promise[_0x126c89(0x12b)](_0x2681d2['warehouse_data']['map'](async _0x510901=>{const _0x5a1a23=_0x126c89,_0x4029e0=await transfers['aggregate']([{'$unwind':_0x5a1a23(0x143)},{'$match':{'product.id_transaction_id':_0x510901[_0x5a1a23(0x117)][_0x5a1a23(0x118)](),'product.To_invoice':_0x510901[_0x5a1a23(0x147)]}},{'$project':{'_id':'$product._id','product_name':_0x5a1a23(0x137),'product_code':_0x5a1a23(0x131),'quantity_available':_0x5a1a23(0x150),'warehouse_name':'$to_warehouse','warehouse_room':_0x5a1a23(0x128),'product_invoice':_0x5a1a23(0x12a),'invoice':_0x5a1a23(0x130),'id_transaction_id':_0x5a1a23(0x13c)}}]);console['log'](_0x4029e0),_0x4029e0[_0x5a1a23(0x13f)]>0x0&&_0x9db9f8[_0x5a1a23(0x13b)][_0x2681d2['invoice']][_0x5a1a23(0x12d)](..._0x4029e0);}));})),_0x3b7efd[_0x59c84c(0x120)]({'purchases_warehouse':_0x9db9f8,'data_sales':_0x9db9f8[_0x59c84c(0x155)],'data_adjustment':_0x9db9f8[_0x59c84c(0x151)],'data_transfer':_0x9db9f8[_0x59c84c(0x13b)]});}),module['exports']=router;