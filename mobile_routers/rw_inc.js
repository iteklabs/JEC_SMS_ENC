const a0_0x334fe5=a0_0x66c1;(function(_0x1fac92,_0x1a3005){const _0x14c232=a0_0x66c1,_0x244a25=_0x1fac92();while(!![]){try{const _0x54598c=-parseInt(_0x14c232(0x12f))/0x1+-parseInt(_0x14c232(0x145))/0x2+-parseInt(_0x14c232(0x150))/0x3+-parseInt(_0x14c232(0x13a))/0x4*(parseInt(_0x14c232(0x124))/0x5)+parseInt(_0x14c232(0x129))/0x6*(parseInt(_0x14c232(0x13d))/0x7)+parseInt(_0x14c232(0x135))/0x8+parseInt(_0x14c232(0x14e))/0x9;if(_0x54598c===_0x1a3005)break;else _0x244a25['push'](_0x244a25['shift']());}catch(_0xf8146){_0x244a25['push'](_0x244a25['shift']());}}}(a0_0x55ec,0x25de6));const express=require('express'),app=express(),router=express[a0_0x334fe5(0x14d)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0x334fe5(0x13c)),auth=require(a0_0x334fe5(0x130)),nodemailer=require(a0_0x334fe5(0x141));function a0_0x55ec(){const _0x526368=['$alertquantity','$category','nodemailer','$_id','aggregate','$date','285818BsYovf','post','$name','$product_code','length','message','$note','$warehouse_name','Router','4915665uWBjBt','$expiry_date','312402fPLcVL','$return_data','$brand','query','$product.floorlevel','$product.bin','$batch_code','suppliers','get','$product.room_name','$maxProdPerUnit','$suppliers','$product','end','$secondary_unit','$product.bay','95ECpNYR','$maxStocks','path','$secondary_code','body','762888VWGCPO','suppliers_docs','$paid_amount','json','Raw\x20Materials','$suppliers_docs','75937dTitIa','../middleware/auth','/barcode_scanner','$unit','/view','$product.type','599648oTPFHi','ejs','$primary_code','$due_amount','../public/language/languages.json','56884XRGahB','$finalize','../models/all_models','7tjWKah','table\x20page'];a0_0x55ec=function(){return _0x526368;};return a0_0x55ec();}var ejs=require(a0_0x334fe5(0x136));function a0_0x66c1(_0xeff55b,_0xab0275){const _0x55ec7e=a0_0x55ec();return a0_0x66c1=function(_0x66c14c,_0x31aa45){_0x66c14c=_0x66c14c-0x11d;let _0x14b36f=_0x55ec7e[_0x66c14c];return _0x14b36f;},a0_0x66c1(_0xeff55b,_0xab0275);}const path=require(a0_0x334fe5(0x126)),users=require(a0_0x334fe5(0x139));router[a0_0x334fe5(0x158)](a0_0x334fe5(0x133),async(_0x35b118,_0x91c382)=>{const _0x15f914=a0_0x334fe5;try{const _0x2b5ca5=parseInt(_0x35b118[_0x15f914(0x153)]['start'])||0x0,_0x1f8c30=parseInt(_0x35b118['query'][_0x15f914(0x121)])||0xa;let _0x33de9e;_0x33de9e=await purchases['aggregate']([{'$lookup':{'from':_0x15f914(0x157),'localField':_0x15f914(0x157),'foreignField':'name','as':_0x15f914(0x12a)}},{'$unwind':'$suppliers_docs'},{'$unwind':_0x15f914(0x120)},{'$group':{'_id':_0x15f914(0x142),'invoice':{'$first':'$invoice'},'suppliers':{'$first':_0x15f914(0x11f)},'date':{'$first':_0x15f914(0x144)},'warehouse_name':{'$first':_0x15f914(0x14c)},'room':{'$addToSet':_0x15f914(0x11d)},'product':{'$push':_0x15f914(0x120)},'note':{'$first':_0x15f914(0x14b)},'paid_amount':{'$first':_0x15f914(0x12b)},'due_amount':{'$first':_0x15f914(0x138)},'return_data':{'$first':_0x15f914(0x151)},'batch_code':{'$first':_0x15f914(0x156)},'expiry_date':{'$first':_0x15f914(0x14f)},'suppliers_docs':{'$first':_0x15f914(0x12e)},'total_product_quantity':{'$sum':'$product.quantity'},'level':{'$addToSet':_0x15f914(0x123)},'isle':{'$addToSet':_0x15f914(0x155)},'type':{'$addToSet':_0x15f914(0x134)},'floorlevel':{'$addToSet':_0x15f914(0x154)},'finalize':{'$first':_0x15f914(0x13b)}}},{'$sort':{'_id':0x1}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'product':0x1,'note':0x1,'paid_amount':0x1,'due_amount':0x1,'return_data':0x1,'batch_code':0x1,'expiry_date':0x1,'suppliers_docs':0x1,'total_product_quantity':0x1,'level':0x1,'isle':0x1,'type':0x1,'floorlevel':0x1,'finalize':0x1}},{'$skip':_0x2b5ca5},{'$limit':_0x1f8c30-_0x2b5ca5}]),_0x91c382[_0x15f914(0x12c)](_0x33de9e);}catch(_0x457df0){console['log'](_0x15f914(0x13e),_0x457df0),_0x91c382['status'](0xc8)[_0x15f914(0x12c)]({'message':_0x457df0[_0x15f914(0x14a)]});}}),router[a0_0x334fe5(0x146)](a0_0x334fe5(0x131),async(_0x15634d,_0xe7b630)=>{const _0x3a8204=a0_0x334fe5,{product_code:_0x5225f0}=_0x15634d[_0x3a8204(0x128)];var _0x430312;const _0xdf90c3=await product[_0x3a8204(0x143)]([{'$match':{'primary_code':_0x5225f0,'product_category':'Raw\x20Materials'}},{'$group':{'_id':_0x3a8204(0x142),'name':{'$first':'$name'},'category':{'$first':_0x3a8204(0x140)},'brand':{'$first':_0x3a8204(0x152)},'unit':{'$first':_0x3a8204(0x132)},'alertquantity':{'$first':_0x3a8204(0x13f)},'product_code':{'$first':'$product_code'},'primary_code':{'$first':_0x3a8204(0x137)},'secondary_code':{'$first':_0x3a8204(0x127)},'maxStocks':{'$first':_0x3a8204(0x125)},'maxProdPerUnit':{'$first':_0x3a8204(0x11e)},'product_cat':{'$first':'P'},'secondary_unit':{'$first':_0x3a8204(0x122)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]),_0x493ac0=await product[_0x3a8204(0x143)]([{'$match':{'secondary_code':_0x5225f0,'product_category':_0x3a8204(0x12d)}},{'$group':{'_id':'$_id','name':{'$first':_0x3a8204(0x147)},'category':{'$first':_0x3a8204(0x140)},'brand':{'$first':_0x3a8204(0x152)},'unit':{'$first':_0x3a8204(0x132)},'alertquantity':{'$first':_0x3a8204(0x13f)},'product_code':{'$first':_0x3a8204(0x148)},'primary_code':{'$first':_0x3a8204(0x137)},'secondary_code':{'$first':_0x3a8204(0x127)},'maxStocks':{'$first':_0x3a8204(0x125)},'maxProdPerUnit':{'$first':_0x3a8204(0x11e)},'product_cat':{'$first':'S'},'secondary_unit':{'$first':_0x3a8204(0x122)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]);if(_0xdf90c3['length']>0x0)_0x430312=_0xdf90c3;else _0x493ac0[_0x3a8204(0x149)]>0x0&&(_0x430312=_0x493ac0);_0xe7b630[_0x3a8204(0x12c)](_0x430312);}),module['exports']=router;