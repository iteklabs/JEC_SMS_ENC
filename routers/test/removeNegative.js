const a0_0x13e436=a0_0x3640;(function(_0x44d426,_0x45d129){const _0x233328=a0_0x3640,_0x45e0fc=_0x44d426();while(!![]){try{const _0x27acda=-parseInt(_0x233328(0x216))/0x1+parseInt(_0x233328(0x224))/0x2*(-parseInt(_0x233328(0x221))/0x3)+-parseInt(_0x233328(0x22b))/0x4+-parseInt(_0x233328(0x209))/0x5+parseInt(_0x233328(0x1f5))/0x6+parseInt(_0x233328(0x1ef))/0x7*(-parseInt(_0x233328(0x1f7))/0x8)+parseInt(_0x233328(0x229))/0x9;if(_0x27acda===_0x45d129)break;else _0x45e0fc['push'](_0x45e0fc['shift']());}catch(_0x802450){_0x45e0fc['push'](_0x45e0fc['shift']());}}}(a0_0x2551,0xdff91));function a0_0x3640(_0x1189c9,_0x73f4aa){const _0x25516c=a0_0x2551();return a0_0x3640=function(_0x3640ff,_0x58501f){_0x3640ff=_0x3640ff-0x1ee;let _0x31de76=_0x25516c[_0x3640ff];return _0x31de76;},a0_0x3640(_0x1189c9,_0x73f4aa);}function a0_0x2551(){const _0x206601=['5063523eCMFLC','/join','$product','2VgqowF','$product_details','$product.product_name','$sale_product.product_name','$product_details.product_code','49856832NQlByl','$product_details.product_stock','1884892YKFkeC','errors','$$invoice','invoice','651MGChhk','data_sales','warehouse_data','all','Router','flash','7415718vSiolH','/negative','106872bKsSEQ','$product.room_names','table\x20page','$room','monitor','push','$product.product_code','$sale_product.id_transaction_from','$warehouse_name','warehouses','status','$sale_product.product_code','_id','$name','log','$sale_product._id','INCF-52068316','data_adjustment','4707635tHsaQM','$product_details.invoice','express','json','modifiedCount','data_transfer','\x20documents\x20updated','$product.id_transaction_from','map','valueOf','get','message','aggregate','1515230qhAMzU','$invoice','$sale_product.room_name','render','$sale_product.quantity','updateMany','$product._id','length','$product.to_room_name','/warehouse_monitor','$sale_product.invoice'];a0_0x2551=function(){return _0x206601;};return a0_0x2551();}const express=require(a0_0x13e436(0x20b)),app=express(),router=express[a0_0x13e436(0x1f3)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings,purchases_finished,sales_finished,adjustment_finished,transfers,transfers_finished,sales,adjustment}=require('../../models/all_models');router['get'](a0_0x13e436(0x1f6),async(_0x4d73e6,_0x406679)=>{const _0x360acd=a0_0x13e436;try{const _0x3cbfda=await warehouse[_0x360acd(0x21b)]({'product_details.product_stock':{'$lt':0x0}},{'$mul':{'product_details.$[elem].product_stock':-0x1}},{'arrayFilters':[{'elem.product_stock':{'$lt':0x0}}]});_0x406679[_0x360acd(0x20c)]({'status':_0x3cbfda[_0x360acd(0x20d)]+_0x360acd(0x20f)});}catch(_0xfad309){console[_0x360acd(0x205)](_0x360acd(0x1f9),_0xfad309),_0x406679['status'](0xc8)[_0x360acd(0x20c)]({'message':_0xfad309['message']});}}),router[a0_0x13e436(0x213)]('/checking',async(_0x5c4284,_0x396fd8)=>{const _0x40db43=a0_0x13e436;try{const _0x3a6826=await warehouse[_0x40db43(0x215)]([{'$unwind':_0x40db43(0x225)},{'$match':{'product_details.invoice':_0x40db43(0x207),'product_details.primary_code':'14800005047429'}},{'$group':{'_id':{'name':_0x40db43(0x204),'room':_0x40db43(0x1fa)},'products':{'$push':_0x40db43(0x225)}}}]);_0x396fd8[_0x40db43(0x20c)](_0x3a6826);}catch(_0x229350){console[_0x40db43(0x205)](_0x40db43(0x1f9),_0x229350),_0x396fd8[_0x40db43(0x201)](0xc8)['json']({'message':_0x229350[_0x40db43(0x214)]});}}),router[a0_0x13e436(0x213)](a0_0x13e436(0x21f),async(_0xa47775,_0x4b6c79)=>{const _0x762f3d=a0_0x13e436;_0x4b6c79[_0x762f3d(0x219)](_0x762f3d(0x1fb),{'success':_0xa47775[_0x762f3d(0x1f4)]('success'),'errors':_0xa47775[_0x762f3d(0x1f4)](_0x762f3d(0x22c))});}),router[a0_0x13e436(0x213)](a0_0x13e436(0x222),async(_0x33fdf2,_0x3fb756)=>{const _0x4cf4a1=a0_0x13e436;var _0x5f52ff=await purchases['aggregate']([{'$lookup':{'from':_0x4cf4a1(0x200),'let':{'invoice':'$invoice'},'pipeline':[{'$unwind':_0x4cf4a1(0x225)},{'$match':{'$expr':{'$eq':[_0x4cf4a1(0x22d),_0x4cf4a1(0x20a)]}}},{'$project':{'_id':'$product_details._id','product_name':'$product_details.product_name','product_code':_0x4cf4a1(0x228),'quantity_available':_0x4cf4a1(0x22a),'warehouse_name':_0x4cf4a1(0x204),'warehouse_room':_0x4cf4a1(0x1fa),'invoice':_0x4cf4a1(0x20a)}}],'as':_0x4cf4a1(0x1f1)}}]);_0x5f52ff[_0x4cf4a1(0x1f0)]={},await Promise[_0x4cf4a1(0x1f2)](_0x5f52ff[_0x4cf4a1(0x211)](async _0x308237=>{const _0x44306b=_0x4cf4a1;_0x5f52ff['data_sales'][_0x308237[_0x44306b(0x1ee)]]=[],await Promise[_0x44306b(0x1f2)](_0x308237['warehouse_data'][_0x44306b(0x211)](async _0x4c7176=>{const _0x5e2e85=_0x44306b,_0xf69d5a=await sales[_0x5e2e85(0x215)]([{'$unwind':'$sale_product'},{'$match':{'sale_product.id_transaction_from':_0x4c7176['_id'][_0x5e2e85(0x212)](),'sale_product.invoice':_0x4c7176[_0x5e2e85(0x1ee)]}},{'$project':{'_id':_0x5e2e85(0x206),'product_name':_0x5e2e85(0x227),'product_code':_0x5e2e85(0x202),'quantity_available':_0x5e2e85(0x21a),'warehouse_name':_0x5e2e85(0x1ff),'warehouse_room':_0x5e2e85(0x218),'product_invoice':_0x5e2e85(0x220),'invoice':_0x5e2e85(0x217),'id_transaction_from':_0x5e2e85(0x1fe)}}]);_0xf69d5a[_0x5e2e85(0x21d)]>0x0&&_0x5f52ff[_0x5e2e85(0x1f0)][_0x308237[_0x5e2e85(0x1ee)]]['push'](..._0xf69d5a);}));})),_0x5f52ff[_0x4cf4a1(0x1f0)]=_0x5f52ff[_0x4cf4a1(0x1f0)],_0x5f52ff[_0x4cf4a1(0x208)]={},await Promise[_0x4cf4a1(0x1f2)](_0x5f52ff['map'](async _0x17df34=>{const _0x4372f7=_0x4cf4a1;_0x5f52ff[_0x4372f7(0x208)][_0x17df34[_0x4372f7(0x1ee)]]=[],await Promise[_0x4372f7(0x1f2)](_0x17df34[_0x4372f7(0x1f1)][_0x4372f7(0x211)](async _0x247a69=>{const _0xf812ad=_0x4372f7,_0x36817f=await adjustment['aggregate']([{'$unwind':_0xf812ad(0x223)},{'$match':{'product.id_transaction_from':_0x247a69[_0xf812ad(0x203)][_0xf812ad(0x212)](),'product.invoice':_0x247a69[_0xf812ad(0x1ee)]}},{'$project':{'_id':_0xf812ad(0x21c),'product_name':_0xf812ad(0x226),'product_code':_0xf812ad(0x1fd),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0xf812ad(0x1ff),'warehouse_room':_0xf812ad(0x1f8),'product_invoice':'$product.invoice','invoice':_0xf812ad(0x217),'id_transaction_from':_0xf812ad(0x210)}}]);_0x36817f[_0xf812ad(0x21d)]>0x0&&_0x5f52ff[_0xf812ad(0x208)][_0x17df34[_0xf812ad(0x1ee)]][_0xf812ad(0x1fc)](..._0x36817f);}));})),_0x5f52ff[_0x4cf4a1(0x20e)]={},await Promise[_0x4cf4a1(0x1f2)](_0x5f52ff[_0x4cf4a1(0x211)](async _0x3c9d10=>{const _0x3f7fc3=_0x4cf4a1;_0x5f52ff[_0x3f7fc3(0x20e)][_0x3c9d10[_0x3f7fc3(0x1ee)]]=[],await Promise[_0x3f7fc3(0x1f2)](_0x3c9d10[_0x3f7fc3(0x1f1)]['map'](async _0x11f8ce=>{const _0x233e71=_0x3f7fc3,_0x2b8159=await transfers[_0x233e71(0x215)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x11f8ce['_id'][_0x233e71(0x212)](),'product.To_invoice':_0x11f8ce['invoice']}},{'$project':{'_id':_0x233e71(0x21c),'product_name':_0x233e71(0x226),'product_code':_0x233e71(0x1fd),'quantity_available':'$product.to_quantity','warehouse_name':'$to_warehouse','warehouse_room':_0x233e71(0x1f8),'product_invoice':_0x233e71(0x21e),'invoice':'$invoice','id_transaction_id':'$product.id_transaction_id'}}]);console[_0x233e71(0x205)](_0x2b8159),_0x2b8159['length']>0x0&&_0x5f52ff[_0x233e71(0x20e)][_0x3c9d10[_0x233e71(0x1ee)]][_0x233e71(0x1fc)](..._0x2b8159);}));})),_0x3fb756[_0x4cf4a1(0x20c)]({'purchases_warehouse':_0x5f52ff,'data_sales':_0x5f52ff[_0x4cf4a1(0x1f0)],'data_adjustment':_0x5f52ff[_0x4cf4a1(0x208)],'data_transfer':_0x5f52ff[_0x4cf4a1(0x20e)]});}),module['exports']=router;