var a0_0x7aea68=a0_0x441d;(function(_0x21da94,_0x1fdd33){var _0x2ef773=a0_0x441d,_0x55bc7d=_0x21da94();while(!![]){try{var _0x134922=-parseInt(_0x2ef773(0x123))/0x1*(parseInt(_0x2ef773(0x10e))/0x2)+parseInt(_0x2ef773(0x120))/0x3+parseInt(_0x2ef773(0x109))/0x4+-parseInt(_0x2ef773(0x105))/0x5+parseInt(_0x2ef773(0x10a))/0x6*(-parseInt(_0x2ef773(0x11b))/0x7)+-parseInt(_0x2ef773(0x11d))/0x8*(-parseInt(_0x2ef773(0x127))/0x9)+-parseInt(_0x2ef773(0x13d))/0xa;if(_0x134922===_0x1fdd33)break;else _0x55bc7d['push'](_0x55bc7d['shift']());}catch(_0x1f02c5){_0x55bc7d['push'](_0x55bc7d['shift']());}}}(a0_0x1d07,0x528b3));function a0_0x441d(_0x42ec77,_0x708abd){var _0x1d07b9=a0_0x1d07();return a0_0x441d=function(_0x441d7d,_0x116453){_0x441d7d=_0x441d7d-0xf3;var _0x6aef23=_0x1d07b9[_0x441d7d];return _0x6aef23;},a0_0x441d(_0x42ec77,_0x708abd);}const express=require(a0_0x7aea68(0x158)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_finished,sales,sales_finished,sales_return,suppliers_payment,customer_payment,transfers,transfers_finished,email_settings,supervisor_settings,adjustment_finished,adjustment}=require(a0_0x7aea68(0x136)),auth=require(a0_0x7aea68(0x153)),users=require('../public/language/languages.json'),nodemailer=require('nodemailer');function a0_0x1d07(){var _0xf19e0=['Spanish','../models/all_models','$name','English\x20(US)','flash','$product_details.expiry_date','transaction_finished_raw','email','329090nFvDwO','Chinese','exports','/viewdata_og_fg/:id','$sale_product.unit','$product','aggregate','$product.id_transaction_from','Hindi','$product_details._id','Arabic\x20(ae)','post','_id','Portuguese\x20(BR)','Arabic','view_og_table','$product_details.invoice','/viewdata_inc_fg/:id','$room','$product_details.product_stock','$product.to_room_name','find','../middleware/auth','$product_details.product_name','errors','$product.unit','transaction_finished','express','$product_details.unit','/viewFG','$product.production_date','$product.invoice','$product.expiry_date','all','English','push','German','view_table','/view','$product.to_quantity','data_sales','$sale_product','$sale_product.product_name','findById','$product_details','invoice','params','$product.new_adjust_qty','$sale_product.room_name','success','1289710duzVgj','warehouse_data','findOne','$invoice','2021656qruUGK','12hhSRyn','$sale_product.production_date','language','data_transfer','8894ouoFEr','Enabled','render','user','$product.room_names','$warehouse_name','$sale_product.product_code','/viewdata_tf_fg/:id','$product.id_transaction','json','length','view_tf_table','$sale_product.expiry_date','394954aDNxol','warehouses','37384BWXbHi','valueOf','$sale_product.id_transaction_from','1507368AqsEVO','body','$sale_product.invoice','146shZMFA','$product.product_code','map','get','738GBaCWW','$product.id_transaction_id','$$invoice','$sale_product._id','Portuguese','$product_details.product_code','$to_warehouse','$product._id','data_adjustment','$product.product_name','$sale_product.quantity','French','$date','Finished\x20Goods'];a0_0x1d07=function(){return _0xf19e0;};return a0_0x1d07();}router[a0_0x7aea68(0x126)](a0_0x7aea68(0xf9),auth,async(_0x5e1ac1,_0xc0e2b)=>{var _0xcbdc59=a0_0x7aea68;try{const {username:_0x247a57,email:_0x5a79c5,role:_0x22bb8d}=_0x5e1ac1[_0xcbdc59(0x111)],_0x5aeb41=_0x5e1ac1[_0xcbdc59(0x111)],_0x4d56fe=await profile['findOne']({'email':_0x5aeb41['email']}),_0x7ba0fd=await master_shop[_0xcbdc59(0x152)](),_0x5522f0=await warehouse[_0xcbdc59(0x143)]([{'$match':{'status':_0xcbdc59(0x10f),'warehouse_category':_0xcbdc59(0x134)}},{'$group':{'_id':_0xcbdc59(0x137),'name':{'$first':_0xcbdc59(0x137)}}}]);if(_0x7ba0fd[0x0][_0xcbdc59(0x10c)]==_0xcbdc59(0x138))var _0x59eaf7=users[_0xcbdc59(0xf5)];else{if(_0x7ba0fd[0x0]['language']==_0xcbdc59(0x145))var _0x59eaf7=users['Hindi'];else{if(_0x7ba0fd[0x0][_0xcbdc59(0x10c)]==_0xcbdc59(0xf7))var _0x59eaf7=users['German'];else{if(_0x7ba0fd[0x0][_0xcbdc59(0x10c)]==_0xcbdc59(0x135))var _0x59eaf7=users[_0xcbdc59(0x135)];else{if(_0x7ba0fd[0x0][_0xcbdc59(0x10c)]==_0xcbdc59(0x132))var _0x59eaf7=users['French'];else{if(_0x7ba0fd[0x0]['language']=='Portuguese\x20(BR)')var _0x59eaf7=users[_0xcbdc59(0x12b)];else{if(_0x7ba0fd[0x0]['language']==_0xcbdc59(0x13e))var _0x59eaf7=users[_0xcbdc59(0x13e)];else{if(_0x7ba0fd[0x0]['language']==_0xcbdc59(0x147))var _0x59eaf7=users[_0xcbdc59(0x14b)];}}}}}}}_0xc0e2b['render'](_0xcbdc59(0x157),{'success':_0x5e1ac1[_0xcbdc59(0x139)](_0xcbdc59(0x104)),'errors':_0x5e1ac1[_0xcbdc59(0x139)](_0xcbdc59(0x155)),'role':_0x5aeb41,'profile':_0x4d56fe,'master_shop':_0x7ba0fd,'dataProcess':_0x5522f0,'language':_0x59eaf7});}catch(_0x419770){console['log'](_0x419770);}}),router[a0_0x7aea68(0x148)]('/reports',auth,async(_0x4405ff,_0x417256)=>{var _0xcbf038=a0_0x7aea68;const {product_category:_0x36fc58,transaction_category:_0x2aed68,transaction_date_from:_0x32d006,transaction_date_to:_0x406221,warehouse_category:_0x147c31,item_code:_0xec2a34}=_0x4405ff[_0xcbf038(0x121)];console['log'](_0x147c31);if(_0x36fc58=='rm'){if(_0x147c31==_0xcbf038(0xf4)){var _0xb4eff4=await purchases['aggregate']([{'$match':{'date':{'$gte':_0x32d006,'$lte':_0x406221}}},{'$lookup':{'from':'warehouses','let':{'invoice':_0xcbf038(0x108)},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':[_0xcbf038(0x129),_0xcbf038(0x14d)]}}},{'$project':{'_id':_0xcbf038(0x146),'product_name':_0xcbf038(0x154),'product_code':'$product_details.product_code','quantity_available':_0xcbf038(0x150),'warehouse_name':_0xcbf038(0x137),'warehouse_room':'$room','invoice':_0xcbf038(0x14d),'production_date':'$product_details.production_date','expiry_date':_0xcbf038(0x13a),'UOM':_0xcbf038(0x159)}}],'as':'warehouse_data'}}]);_0xb4eff4[_0xcbf038(0xfb)]={},await Promise[_0xcbf038(0xf4)](_0xb4eff4[_0xcbf038(0x125)](async _0x22ea4c=>{var _0x4ac06b=_0xcbf038;_0xb4eff4['data_sales'][_0x22ea4c[_0x4ac06b(0x100)]]=[],await Promise[_0x4ac06b(0xf4)](_0x22ea4c['warehouse_data'][_0x4ac06b(0x125)](async _0xc44fad=>{var _0x51c81=_0x4ac06b;const _0x1ed848=await sales[_0x51c81(0x143)]([{'$unwind':_0x51c81(0xfc)},{'$match':{'sale_product.id_transaction_from':_0xc44fad['_id'][_0x51c81(0x11e)](),'sale_product.invoice':_0xc44fad['invoice']}},{'$project':{'_id':_0x51c81(0x12a),'product_name':_0x51c81(0xfd),'product_code':_0x51c81(0x114),'quantity_available':_0x51c81(0x131),'warehouse_name':_0x51c81(0x113),'warehouse_room':_0x51c81(0x103),'product_invoice':_0x51c81(0x122),'invoice':_0x51c81(0x108),'id_transaction_from':'$sale_product.id_transaction_from','date':'$date','production_date':'$sale_product.production_date','expiry_date':'$sale_product.expiry_date','UOM':'$sale_product.unit'}}]);_0x1ed848[_0x51c81(0x118)]>0x0&&_0xb4eff4[_0x51c81(0xfb)][_0x22ea4c[_0x51c81(0x100)]][_0x51c81(0xf6)](..._0x1ed848);}));})),_0xb4eff4[_0xcbf038(0xfb)]=_0xb4eff4[_0xcbf038(0xfb)],_0xb4eff4[_0xcbf038(0x12f)]={},await Promise['all'](_0xb4eff4[_0xcbf038(0x125)](async _0x547d6d=>{var _0x3c490e=_0xcbf038;_0xb4eff4[_0x3c490e(0x12f)][_0x547d6d[_0x3c490e(0x100)]]=[],await Promise[_0x3c490e(0xf4)](_0x547d6d[_0x3c490e(0x106)][_0x3c490e(0x125)](async _0x4cfd22=>{var _0x54140a=_0x3c490e;const _0xb14811=await adjustment['aggregate']([{'$unwind':_0x54140a(0x142)},{'$match':{'product.id_transaction_from':_0x4cfd22[_0x54140a(0x149)][_0x54140a(0x11e)](),'product.invoice':_0x4cfd22[_0x54140a(0x100)]}},{'$project':{'_id':_0x54140a(0x12e),'product_name':'$product.product_name','product_code':_0x54140a(0x124),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x54140a(0x113),'warehouse_room':_0x54140a(0x112),'product_invoice':_0x54140a(0x15c),'invoice':'$invoice','id_transaction_from':_0x54140a(0x144),'date':_0x54140a(0x133),'production_date':_0x54140a(0x15b),'expiry_date':'$product.expiry_date','UOM':_0x54140a(0x156)}}]);_0xb14811[_0x54140a(0x118)]>0x0&&_0xb4eff4[_0x54140a(0x12f)][_0x547d6d[_0x54140a(0x100)]][_0x54140a(0xf6)](..._0xb14811);}));})),_0xb4eff4[_0xcbf038(0x10d)]={},await Promise['all'](_0xb4eff4[_0xcbf038(0x125)](async _0x34b8da=>{var _0x3eb166=_0xcbf038;_0xb4eff4['data_transfer'][_0x34b8da[_0x3eb166(0x100)]]=[],await Promise['all'](_0x34b8da[_0x3eb166(0x106)][_0x3eb166(0x125)](async _0x1e6086=>{var _0x182809=_0x3eb166;const _0x5ce80d=await transfers[_0x182809(0x143)]([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x1e6086[_0x182809(0x149)]['valueOf'](),'product.To_invoice':_0x1e6086[_0x182809(0x100)]}},{'$project':{'_id':'$product._id','product_name':_0x182809(0x130),'product_code':_0x182809(0x124),'quantity_available':_0x182809(0xfa),'warehouse_name':_0x182809(0x12d),'warehouse_room':_0x182809(0x112),'product_invoice':_0x182809(0x151),'invoice':'$invoice','id_transaction_from':_0x182809(0x128),'date':_0x182809(0x133),'production_date':_0x182809(0x15b),'expiry_date':_0x182809(0xf3),'UOM':_0x182809(0x156)}}]);_0x5ce80d[_0x182809(0x118)]>0x0&&_0xb4eff4[_0x182809(0x10d)][_0x34b8da[_0x182809(0x100)]]['push'](..._0x5ce80d);}));})),_0x417256[_0xcbf038(0x117)]({'purchases_warehouse':_0xb4eff4,'data_sales':_0xb4eff4[_0xcbf038(0xfb)],'data_adjustment':_0xb4eff4[_0xcbf038(0x12f)],'data_transfer':_0xb4eff4['data_transfer']});}else{var _0xb4eff4=await purchases[_0xcbf038(0x143)]([{'$match':{'warehouse_name':_0x147c31,'date':{'$gte':_0x32d006,'$lte':_0x406221}}},{'$lookup':{'from':_0xcbf038(0x11c),'let':{'invoice':_0xcbf038(0x108)},'pipeline':[{'$unwind':_0xcbf038(0xff)},{'$match':{'$expr':{'$eq':['$$invoice','$product_details.invoice']}}},{'$project':{'_id':_0xcbf038(0x146),'product_name':_0xcbf038(0x154),'product_code':_0xcbf038(0x12c),'quantity_available':_0xcbf038(0x150),'warehouse_name':_0xcbf038(0x137),'warehouse_room':_0xcbf038(0x14f),'invoice':_0xcbf038(0x14d),'production_date':'$product_details.production_date','expiry_date':_0xcbf038(0x13a),'UOM':'$product_details.unit'}}],'as':_0xcbf038(0x106)}}]);_0xb4eff4[_0xcbf038(0xfb)]={},await Promise['all'](_0xb4eff4[_0xcbf038(0x125)](async _0x1ab190=>{var _0x32c34a=_0xcbf038;_0xb4eff4[_0x32c34a(0xfb)][_0x1ab190['invoice']]=[],await Promise[_0x32c34a(0xf4)](_0x1ab190[_0x32c34a(0x106)][_0x32c34a(0x125)](async _0x30e780=>{var _0x21c403=_0x32c34a;const _0x43ff70=await sales[_0x21c403(0x143)]([{'$unwind':_0x21c403(0xfc)},{'$match':{'sale_product.id_transaction_from':_0x30e780[_0x21c403(0x149)][_0x21c403(0x11e)](),'sale_product.invoice':_0x30e780['invoice']}},{'$project':{'_id':_0x21c403(0x12a),'product_name':'$sale_product.product_name','product_code':_0x21c403(0x114),'quantity_available':_0x21c403(0x131),'warehouse_name':_0x21c403(0x113),'warehouse_room':'$sale_product.room_name','product_invoice':'$sale_product.invoice','invoice':'$invoice','id_transaction_from':'$sale_product.id_transaction_from','date':'$date','production_date':_0x21c403(0x10b),'expiry_date':_0x21c403(0x11a),'UOM':_0x21c403(0x141)}}]);_0x43ff70['length']>0x0&&_0xb4eff4['data_sales'][_0x1ab190['invoice']][_0x21c403(0xf6)](..._0x43ff70);}));})),_0xb4eff4[_0xcbf038(0xfb)]=_0xb4eff4['data_sales'],_0xb4eff4[_0xcbf038(0x12f)]={},await Promise[_0xcbf038(0xf4)](_0xb4eff4[_0xcbf038(0x125)](async _0x40b7af=>{var _0x26ef4c=_0xcbf038;_0xb4eff4[_0x26ef4c(0x12f)][_0x40b7af['invoice']]=[],await Promise['all'](_0x40b7af['warehouse_data']['map'](async _0xa1690d=>{var _0x2d6f58=_0x26ef4c;const _0x738228=await adjustment[_0x2d6f58(0x143)]([{'$unwind':_0x2d6f58(0x142)},{'$match':{'product.id_transaction_from':_0xa1690d[_0x2d6f58(0x149)][_0x2d6f58(0x11e)](),'product.invoice':_0xa1690d[_0x2d6f58(0x100)]}},{'$project':{'_id':_0x2d6f58(0x12e),'product_name':'$product.product_name','product_code':_0x2d6f58(0x124),'quantity_available':_0x2d6f58(0x102),'warehouse_name':_0x2d6f58(0x113),'warehouse_room':'$product.room_names','product_invoice':_0x2d6f58(0x15c),'invoice':_0x2d6f58(0x108),'id_transaction_from':'$product.id_transaction_from','date':_0x2d6f58(0x133),'production_date':_0x2d6f58(0x15b),'expiry_date':'$product.expiry_date','UOM':_0x2d6f58(0x156)}}]);_0x738228[_0x2d6f58(0x118)]>0x0&&_0xb4eff4[_0x2d6f58(0x12f)][_0x40b7af[_0x2d6f58(0x100)]][_0x2d6f58(0xf6)](..._0x738228);}));})),_0xb4eff4[_0xcbf038(0x10d)]={},await Promise[_0xcbf038(0xf4)](_0xb4eff4['map'](async _0x4e3977=>{var _0x43651d=_0xcbf038;_0xb4eff4[_0x43651d(0x10d)][_0x4e3977[_0x43651d(0x100)]]=[],await Promise['all'](_0x4e3977[_0x43651d(0x106)][_0x43651d(0x125)](async _0x5028d4=>{var _0x5791f8=_0x43651d;const _0x1db077=await transfers['aggregate']([{'$unwind':'$product'},{'$match':{'product.id_transaction_id':_0x5028d4[_0x5791f8(0x149)][_0x5791f8(0x11e)](),'product.To_invoice':_0x5028d4['invoice']}},{'$project':{'_id':_0x5791f8(0x12e),'product_name':_0x5791f8(0x130),'product_code':'$product.product_code','quantity_available':'$product.to_quantity','warehouse_name':_0x5791f8(0x12d),'warehouse_room':_0x5791f8(0x112),'product_invoice':_0x5791f8(0x151),'invoice':_0x5791f8(0x108),'id_transaction_from':'$product.id_transaction_id','date':_0x5791f8(0x133),'production_date':_0x5791f8(0x15b),'expiry_date':_0x5791f8(0xf3),'UOM':'$product.unit'}}]);_0x1db077['length']>0x0&&_0xb4eff4[_0x5791f8(0x10d)][_0x4e3977[_0x5791f8(0x100)]]['push'](..._0x1db077);}));})),_0x417256[_0xcbf038(0x117)]({'purchases_warehouse':_0xb4eff4,'data_sales':_0xb4eff4['data_sales'],'data_adjustment':_0xb4eff4[_0xcbf038(0x12f)],'data_transfer':_0xb4eff4[_0xcbf038(0x10d)]});}}else{if(_0x147c31=='all'){var _0xb4eff4=await purchases_finished[_0xcbf038(0x143)]([{'$match':{'date':{'$gte':_0x32d006,'$lte':_0x406221}}},{'$lookup':{'from':'warehouses','let':{'invoice':'$invoice'},'pipeline':[{'$unwind':'$product_details'},{'$match':{'$expr':{'$eq':['$$invoice',_0xcbf038(0x14d)]}}},{'$project':{'_id':'$product_details._id','product_name':_0xcbf038(0x154),'product_code':_0xcbf038(0x12c),'quantity_available':'$product_details.product_stock','warehouse_name':_0xcbf038(0x137),'warehouse_room':_0xcbf038(0x14f),'invoice':_0xcbf038(0x14d),'production_date':'$product_details.production_date','expiry_date':_0xcbf038(0x13a),'UOM':_0xcbf038(0x159)}}],'as':_0xcbf038(0x106)}}]);_0xb4eff4[_0xcbf038(0xfb)]={},await Promise['all'](_0xb4eff4['map'](async _0x46fdf1=>{var _0x14743d=_0xcbf038;_0xb4eff4[_0x14743d(0xfb)][_0x46fdf1[_0x14743d(0x100)]]=[],await Promise[_0x14743d(0xf4)](_0x46fdf1[_0x14743d(0x106)][_0x14743d(0x125)](async _0x5f55c9=>{var _0x5571d5=_0x14743d;const _0x4f640c=await sales_finished['aggregate']([{'$unwind':_0x5571d5(0xfc)},{'$match':{'sale_product.id_transaction_from':_0x5f55c9[_0x5571d5(0x149)][_0x5571d5(0x11e)](),'sale_product.invoice':_0x5f55c9[_0x5571d5(0x100)]}},{'$project':{'_id':_0x5571d5(0x12a),'product_name':_0x5571d5(0xfd),'product_code':'$sale_product.product_code','quantity_available':_0x5571d5(0x131),'warehouse_name':_0x5571d5(0x113),'warehouse_room':'$sale_product.room_name','product_invoice':_0x5571d5(0x122),'invoice':_0x5571d5(0x108),'id_transaction_from':'$sale_product.id_transaction_from','date':_0x5571d5(0x133),'production_date':'$sale_product.production_date','expiry_date':_0x5571d5(0x11a),'UOM':_0x5571d5(0x141)}}]);_0x4f640c[_0x5571d5(0x118)]>0x0&&_0xb4eff4['data_sales'][_0x46fdf1[_0x5571d5(0x100)]]['push'](..._0x4f640c);}));})),_0xb4eff4[_0xcbf038(0xfb)]=_0xb4eff4[_0xcbf038(0xfb)],_0xb4eff4[_0xcbf038(0x12f)]={},await Promise[_0xcbf038(0xf4)](_0xb4eff4['map'](async _0xa77c6e=>{var _0x7cab5e=_0xcbf038;_0xb4eff4[_0x7cab5e(0x12f)][_0xa77c6e[_0x7cab5e(0x100)]]=[],await Promise[_0x7cab5e(0xf4)](_0xa77c6e[_0x7cab5e(0x106)][_0x7cab5e(0x125)](async _0x59d700=>{var _0x3c6d96=_0x7cab5e;const _0x3bab2c=await adjustment_finished[_0x3c6d96(0x143)]([{'$unwind':_0x3c6d96(0x142)},{'$match':{'product.id_transaction_from':_0x59d700['_id'][_0x3c6d96(0x11e)](),'product.invoice':_0x59d700['invoice']}},{'$project':{'_id':'$product._id','product_name':'$product.product_name','product_code':_0x3c6d96(0x124),'quantity_available':_0x3c6d96(0x102),'warehouse_name':_0x3c6d96(0x113),'warehouse_room':_0x3c6d96(0x112),'product_invoice':_0x3c6d96(0x15c),'invoice':_0x3c6d96(0x108),'id_transaction_from':_0x3c6d96(0x144),'date':_0x3c6d96(0x133),'production_date':_0x3c6d96(0x15b),'expiry_date':_0x3c6d96(0xf3),'UOM':'$product.unit'}}]);_0x3bab2c[_0x3c6d96(0x118)]>0x0&&_0xb4eff4['data_adjustment'][_0xa77c6e['invoice']][_0x3c6d96(0xf6)](..._0x3bab2c);}));})),_0xb4eff4['data_transfer']={},await Promise[_0xcbf038(0xf4)](_0xb4eff4['map'](async _0x5c2992=>{var _0x3973bd=_0xcbf038;_0xb4eff4[_0x3973bd(0x10d)][_0x5c2992[_0x3973bd(0x100)]]=[],await Promise[_0x3973bd(0xf4)](_0x5c2992[_0x3973bd(0x106)][_0x3973bd(0x125)](async _0x5918bd=>{var _0x1e04de=_0x3973bd;const _0xde224f=await transfers_finished[_0x1e04de(0x143)]([{'$unwind':_0x1e04de(0x142)},{'$match':{'product.id_transaction':_0x5918bd[_0x1e04de(0x149)][_0x1e04de(0x11e)](),'product.from_invoice':_0x5918bd[_0x1e04de(0x100)]}},{'$project':{'_id':_0x1e04de(0x12e),'product_name':_0x1e04de(0x130),'product_code':_0x1e04de(0x124),'quantity_available':_0x1e04de(0xfa),'warehouse_name':_0x1e04de(0x12d),'warehouse_room':_0x1e04de(0x112),'product_invoice':'$product.to_room_name','invoice':_0x1e04de(0x108),'id_transaction_from':_0x1e04de(0x116),'date':_0x1e04de(0x133),'production_date':_0x1e04de(0x15b),'expiry_date':_0x1e04de(0xf3),'UOM':_0x1e04de(0x156)}}]);_0xde224f[_0x1e04de(0x118)]>0x0&&_0xb4eff4[_0x1e04de(0x10d)][_0x5c2992['invoice']][_0x1e04de(0xf6)](..._0xde224f);}));})),_0x417256[_0xcbf038(0x117)]({'purchases_warehouse':_0xb4eff4,'data_sales':_0xb4eff4[_0xcbf038(0xfb)],'data_adjustment':_0xb4eff4['data_adjustment'],'data_transfer':_0xb4eff4[_0xcbf038(0x10d)]});}else{var _0xb4eff4=await purchases_finished['aggregate']([{'$match':{'warehouse_name':_0x147c31,'date':{'$gte':_0x32d006,'$lte':_0x406221}}},{'$lookup':{'from':_0xcbf038(0x11c),'let':{'invoice':_0xcbf038(0x108)},'pipeline':[{'$unwind':_0xcbf038(0xff)},{'$match':{'$expr':{'$eq':[_0xcbf038(0x129),'$product_details.invoice']}}},{'$project':{'_id':_0xcbf038(0x146),'product_name':'$product_details.product_name','product_code':_0xcbf038(0x12c),'quantity_available':_0xcbf038(0x150),'warehouse_name':_0xcbf038(0x137),'warehouse_room':_0xcbf038(0x14f),'invoice':_0xcbf038(0x14d),'production_date':'$product_details.production_date','expiry_date':'$product_details.expiry_date','UOM':_0xcbf038(0x159)}}],'as':_0xcbf038(0x106)}}]);_0xb4eff4[_0xcbf038(0xfb)]={},await Promise['all'](_0xb4eff4[_0xcbf038(0x125)](async _0x395402=>{var _0x9baea=_0xcbf038;_0xb4eff4[_0x9baea(0xfb)][_0x395402['invoice']]=[],await Promise[_0x9baea(0xf4)](_0x395402[_0x9baea(0x106)][_0x9baea(0x125)](async _0x1b65b8=>{var _0x22294c=_0x9baea;const _0x386ad9=await sales_finished['aggregate']([{'$unwind':_0x22294c(0xfc)},{'$match':{'sale_product.id_transaction_from':_0x1b65b8['_id'][_0x22294c(0x11e)](),'sale_product.invoice':_0x1b65b8['invoice']}},{'$project':{'_id':_0x22294c(0x12a),'product_name':_0x22294c(0xfd),'product_code':_0x22294c(0x114),'quantity_available':_0x22294c(0x131),'warehouse_name':_0x22294c(0x113),'warehouse_room':_0x22294c(0x103),'product_invoice':_0x22294c(0x122),'invoice':_0x22294c(0x108),'id_transaction_from':_0x22294c(0x11f),'date':_0x22294c(0x133),'production_date':_0x22294c(0x10b),'expiry_date':_0x22294c(0x11a),'UOM':'$sale_product.unit'}}]);_0x386ad9[_0x22294c(0x118)]>0x0&&_0xb4eff4[_0x22294c(0xfb)][_0x395402[_0x22294c(0x100)]][_0x22294c(0xf6)](..._0x386ad9);}));})),_0xb4eff4[_0xcbf038(0xfb)]=_0xb4eff4['data_sales'],_0xb4eff4[_0xcbf038(0x12f)]={},await Promise['all'](_0xb4eff4[_0xcbf038(0x125)](async _0x2def3f=>{var _0x2f2c56=_0xcbf038;_0xb4eff4['data_adjustment'][_0x2def3f[_0x2f2c56(0x100)]]=[],await Promise['all'](_0x2def3f[_0x2f2c56(0x106)][_0x2f2c56(0x125)](async _0x5cc912=>{var _0x277d4b=_0x2f2c56;const _0x5b8347=await adjustment_finished[_0x277d4b(0x143)]([{'$unwind':_0x277d4b(0x142)},{'$match':{'product.id_transaction_from':_0x5cc912['_id'][_0x277d4b(0x11e)](),'product.invoice':_0x5cc912['invoice']}},{'$project':{'_id':_0x277d4b(0x12e),'product_name':_0x277d4b(0x130),'product_code':_0x277d4b(0x124),'quantity_available':'$product.new_adjust_qty','warehouse_name':_0x277d4b(0x113),'warehouse_room':_0x277d4b(0x112),'product_invoice':_0x277d4b(0x15c),'invoice':_0x277d4b(0x108),'id_transaction_from':_0x277d4b(0x144),'date':'$date','production_date':_0x277d4b(0x15b),'expiry_date':_0x277d4b(0xf3),'UOM':_0x277d4b(0x156)}}]);_0x5b8347[_0x277d4b(0x118)]>0x0&&_0xb4eff4[_0x277d4b(0x12f)][_0x2def3f[_0x277d4b(0x100)]][_0x277d4b(0xf6)](..._0x5b8347);}));})),_0xb4eff4['data_transfer']={},await Promise['all'](_0xb4eff4[_0xcbf038(0x125)](async _0x4d36bd=>{var _0x12b016=_0xcbf038;_0xb4eff4[_0x12b016(0x10d)][_0x4d36bd[_0x12b016(0x100)]]=[],await Promise[_0x12b016(0xf4)](_0x4d36bd[_0x12b016(0x106)]['map'](async _0x31c72e=>{var _0x5e72e2=_0x12b016;const _0x550e65=await transfers_finished['aggregate']([{'$unwind':'$product'},{'$match':{'product.id_transaction':_0x31c72e[_0x5e72e2(0x149)]['valueOf'](),'product.from_invoice':_0x31c72e[_0x5e72e2(0x100)]}},{'$project':{'_id':_0x5e72e2(0x12e),'product_name':_0x5e72e2(0x130),'product_code':_0x5e72e2(0x124),'quantity_available':_0x5e72e2(0xfa),'warehouse_name':_0x5e72e2(0x12d),'warehouse_room':_0x5e72e2(0x112),'product_invoice':_0x5e72e2(0x151),'invoice':_0x5e72e2(0x108),'id_transaction_from':_0x5e72e2(0x116),'date':_0x5e72e2(0x133),'production_date':_0x5e72e2(0x15b),'expiry_date':_0x5e72e2(0xf3),'UOM':_0x5e72e2(0x156)}}]);_0x550e65['length']>0x0&&_0xb4eff4[_0x5e72e2(0x10d)][_0x4d36bd[_0x5e72e2(0x100)]]['push'](..._0x550e65);}));})),_0x417256[_0xcbf038(0x117)]({'purchases_warehouse':_0xb4eff4,'data_sales':_0xb4eff4[_0xcbf038(0xfb)],'data_adjustment':_0xb4eff4[_0xcbf038(0x12f)],'data_transfer':_0xb4eff4['data_transfer']});}}}),router[a0_0x7aea68(0x126)](a0_0x7aea68(0x14e),auth,async(_0x154f32,_0x2b21b4)=>{var _0x385faa=a0_0x7aea68;try{const _0x5e0387=_0x154f32['params']['id'];var _0x465a68=await purchases_finished[_0x385faa(0xfe)](_0x5e0387);const _0x470fb0=await master_shop[_0x385faa(0x152)](),_0x3bd167=_0x154f32[_0x385faa(0x111)],_0x58fa2c=await profile['findOne']({'email':_0x3bd167[_0x385faa(0x13c)]});if(_0x470fb0[0x0][_0x385faa(0x10c)]=='English\x20(US)')var _0x3c9580=users[_0x385faa(0xf5)];else{if(_0x470fb0[0x0]['language']==_0x385faa(0x145))var _0x3c9580=users[_0x385faa(0x145)];else{if(_0x470fb0[0x0][_0x385faa(0x10c)]=='German')var _0x3c9580=users[_0x385faa(0xf7)];else{if(_0x470fb0[0x0]['language']==_0x385faa(0x135))var _0x3c9580=users['Spanish'];else{if(_0x470fb0[0x0][_0x385faa(0x10c)]==_0x385faa(0x132))var _0x3c9580=users['French'];else{if(_0x470fb0[0x0][_0x385faa(0x10c)]==_0x385faa(0x14a))var _0x3c9580=users[_0x385faa(0x12b)];else{if(_0x470fb0[0x0]['language']==_0x385faa(0x13e))var _0x3c9580=users[_0x385faa(0x13e)];else{if(_0x470fb0[0x0][_0x385faa(0x10c)]==_0x385faa(0x147))var _0x3c9580=users[_0x385faa(0x14b)];}}}}}}}_0x2b21b4['render'](_0x385faa(0xf8),{'success':_0x154f32[_0x385faa(0x139)](_0x385faa(0x104)),'errors':_0x154f32['flash'](_0x385faa(0x155)),'master_shop':_0x470fb0,'profile':_0x58fa2c,'role':_0x3bd167,'language':_0x3c9580,'data':_0x465a68});}catch(_0x3806f3){_0x2b21b4[_0x385faa(0x117)](_0x3806f3);}}),router[a0_0x7aea68(0x126)](a0_0x7aea68(0x140),auth,async(_0x5c9c28,_0x257f04)=>{var _0x2a8f5e=a0_0x7aea68;try{const _0x385469=_0x5c9c28[_0x2a8f5e(0x101)]['id'];var _0x362241=await sales_finished[_0x2a8f5e(0xfe)](_0x385469);const _0x2a8df0=await master_shop['find'](),_0x578aac=_0x5c9c28[_0x2a8f5e(0x111)],_0x81681d=await profile[_0x2a8f5e(0x107)]({'email':_0x578aac[_0x2a8f5e(0x13c)]});if(_0x2a8df0[0x0]['language']==_0x2a8f5e(0x138))var _0x52f20b=users['English'];else{if(_0x2a8df0[0x0][_0x2a8f5e(0x10c)]==_0x2a8f5e(0x145))var _0x52f20b=users['Hindi'];else{if(_0x2a8df0[0x0][_0x2a8f5e(0x10c)]==_0x2a8f5e(0xf7))var _0x52f20b=users[_0x2a8f5e(0xf7)];else{if(_0x2a8df0[0x0]['language']==_0x2a8f5e(0x135))var _0x52f20b=users[_0x2a8f5e(0x135)];else{if(_0x2a8df0[0x0][_0x2a8f5e(0x10c)]==_0x2a8f5e(0x132))var _0x52f20b=users[_0x2a8f5e(0x132)];else{if(_0x2a8df0[0x0][_0x2a8f5e(0x10c)]=='Portuguese\x20(BR)')var _0x52f20b=users[_0x2a8f5e(0x12b)];else{if(_0x2a8df0[0x0]['language']==_0x2a8f5e(0x13e))var _0x52f20b=users[_0x2a8f5e(0x13e)];else{if(_0x2a8df0[0x0]['language']==_0x2a8f5e(0x147))var _0x52f20b=users[_0x2a8f5e(0x14b)];}}}}}}}_0x257f04[_0x2a8f5e(0x110)](_0x2a8f5e(0x14c),{'success':_0x5c9c28[_0x2a8f5e(0x139)]('success'),'errors':_0x5c9c28[_0x2a8f5e(0x139)]('errors'),'master_shop':_0x2a8df0,'profile':_0x81681d,'role':_0x578aac,'language':_0x52f20b,'data':_0x362241});}catch(_0x449055){_0x257f04['json'](_0x449055);}}),router[a0_0x7aea68(0x126)](a0_0x7aea68(0x115),auth,async(_0x347635,_0x31f91f)=>{var _0x3ab511=a0_0x7aea68;try{const _0x5d8761=_0x347635['params']['id'];var _0x5e8624=await transfers_finished['findById'](_0x5d8761);const _0x54eea9=await master_shop[_0x3ab511(0x152)](),_0x18edff=_0x347635['user'],_0x2f1e68=await profile[_0x3ab511(0x107)]({'email':_0x18edff[_0x3ab511(0x13c)]});if(_0x54eea9[0x0][_0x3ab511(0x10c)]==_0x3ab511(0x138))var _0x4f0a29=users[_0x3ab511(0xf5)];else{if(_0x54eea9[0x0][_0x3ab511(0x10c)]==_0x3ab511(0x145))var _0x4f0a29=users[_0x3ab511(0x145)];else{if(_0x54eea9[0x0][_0x3ab511(0x10c)]=='German')var _0x4f0a29=users[_0x3ab511(0xf7)];else{if(_0x54eea9[0x0][_0x3ab511(0x10c)]=='Spanish')var _0x4f0a29=users['Spanish'];else{if(_0x54eea9[0x0]['language']=='French')var _0x4f0a29=users[_0x3ab511(0x132)];else{if(_0x54eea9[0x0][_0x3ab511(0x10c)]==_0x3ab511(0x14a))var _0x4f0a29=users[_0x3ab511(0x12b)];else{if(_0x54eea9[0x0]['language']=='Chinese')var _0x4f0a29=users[_0x3ab511(0x13e)];else{if(_0x54eea9[0x0]['language']==_0x3ab511(0x147))var _0x4f0a29=users[_0x3ab511(0x14b)];}}}}}}}_0x31f91f['render'](_0x3ab511(0x119),{'success':_0x347635['flash'](_0x3ab511(0x104)),'errors':_0x347635['flash'](_0x3ab511(0x155)),'master_shop':_0x54eea9,'profile':_0x2f1e68,'role':_0x18edff,'language':_0x4f0a29,'data':_0x5e8624});}catch(_0x40a0a0){_0x31f91f[_0x3ab511(0x117)](_0x40a0a0);}}),router[a0_0x7aea68(0x126)](a0_0x7aea68(0x15a),auth,async(_0x557d0c,_0x4ef272)=>{var _0x6e14e3=a0_0x7aea68;try{const {username:_0x14f584,email:_0x15e474,role:_0x243a15}=_0x557d0c[_0x6e14e3(0x111)],_0x27f90b=_0x557d0c['user'],_0x453d3=await profile['findOne']({'email':_0x27f90b[_0x6e14e3(0x13c)]}),_0x17c523=await master_shop[_0x6e14e3(0x152)](),_0xb998de=await warehouse[_0x6e14e3(0x143)]([{'$match':{'status':'Enabled','warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':_0x6e14e3(0x137),'name':{'$first':_0x6e14e3(0x137)}}}]);if(_0x17c523[0x0][_0x6e14e3(0x10c)]==_0x6e14e3(0x138))var _0x3b04ee=users['English'];else{if(_0x17c523[0x0][_0x6e14e3(0x10c)]==_0x6e14e3(0x145))var _0x3b04ee=users[_0x6e14e3(0x145)];else{if(_0x17c523[0x0][_0x6e14e3(0x10c)]==_0x6e14e3(0xf7))var _0x3b04ee=users[_0x6e14e3(0xf7)];else{if(_0x17c523[0x0][_0x6e14e3(0x10c)]==_0x6e14e3(0x135))var _0x3b04ee=users[_0x6e14e3(0x135)];else{if(_0x17c523[0x0][_0x6e14e3(0x10c)]=='French')var _0x3b04ee=users[_0x6e14e3(0x132)];else{if(_0x17c523[0x0][_0x6e14e3(0x10c)]=='Portuguese\x20(BR)')var _0x3b04ee=users[_0x6e14e3(0x12b)];else{if(_0x17c523[0x0]['language']=='Chinese')var _0x3b04ee=users[_0x6e14e3(0x13e)];else{if(_0x17c523[0x0][_0x6e14e3(0x10c)]==_0x6e14e3(0x147))var _0x3b04ee=users['Arabic'];}}}}}}}_0x4ef272[_0x6e14e3(0x110)](_0x6e14e3(0x13b),{'success':_0x557d0c[_0x6e14e3(0x139)](_0x6e14e3(0x104)),'errors':_0x557d0c[_0x6e14e3(0x139)](_0x6e14e3(0x155)),'role':_0x27f90b,'profile':_0x453d3,'master_shop':_0x17c523,'dataProcess':_0xb998de,'language':_0x3b04ee});}catch(_0x38edc1){console['log'](_0x38edc1);}}),module[a0_0x7aea68(0x13f)]=router;