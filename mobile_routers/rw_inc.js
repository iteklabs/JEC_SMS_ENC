const a0_0x59b89b=a0_0xe454;(function(_0x40abc9,_0x10ba53){const _0x1c657c=a0_0xe454,_0x1a2318=_0x40abc9();while(!![]){try{const _0x3811ca=parseInt(_0x1c657c(0x1af))/0x1+parseInt(_0x1c657c(0x1ac))/0x2+parseInt(_0x1c657c(0x1bd))/0x3+-parseInt(_0x1c657c(0x1b0))/0x4*(-parseInt(_0x1c657c(0x1bf))/0x5)+-parseInt(_0x1c657c(0x1c2))/0x6+-parseInt(_0x1c657c(0x1a0))/0x7+-parseInt(_0x1c657c(0x1b3))/0x8;if(_0x3811ca===_0x10ba53)break;else _0x1a2318['push'](_0x1a2318['shift']());}catch(_0x1919a4){_0x1a2318['push'](_0x1a2318['shift']());}}}(a0_0x4ce5,0x2a932));function a0_0xe454(_0x1f6b6b,_0x23ee5e){const _0x4ce518=a0_0x4ce5();return a0_0xe454=function(_0xe4543d,_0x3702fb){_0xe4543d=_0xe4543d-0x19f;let _0xfd154f=_0x4ce518[_0xe4543d];return _0xfd154f;},a0_0xe454(_0x1f6b6b,_0x23ee5e);}const express=require(a0_0x59b89b(0x1c4)),app=express(),router=express[a0_0x59b89b(0x1b2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require('../models/all_models'),auth=require(a0_0x59b89b(0x1c0)),nodemailer=require(a0_0x59b89b(0x1ca));var ejs=require(a0_0x59b89b(0x1b1));function a0_0x4ce5(){const _0x5f067e=['$product.quantity','$unit','693424zefYyn','log','$finalize','153391kithGd','220BwKyAU','ejs','Router','5033160IQdFxq','$return_data','table\x20page','$note','$product.floorlevel','$primary_code','Raw\x20Materials','$product.bin','body','message','739698tGPuZd','$name','21915PubIBw','../middleware/auth','$paid_amount','1082670aUQyEV','$_id','express','length','start','$product.room_name','suppliers','json','nodemailer','/view','query','end','$maxProdPerUnit','$date','aggregate','$warehouse_name','$suppliers_docs','$product.bay','name','$suppliers','26306GAAKon','$secondary_unit','$secondary_code','$product','$product_code','$maxStocks','$category','$product.type','/barcode_scanner','$alertquantity'];a0_0x4ce5=function(){return _0x5f067e;};return a0_0x4ce5();}const path=require('path'),users=require('../public/language/languages.json');router['get'](a0_0x59b89b(0x1cb),async(_0x36f1c0,_0x43807a)=>{const _0xa2ead5=a0_0x59b89b;try{const _0x52de07=parseInt(_0x36f1c0[_0xa2ead5(0x1cc)][_0xa2ead5(0x1c6)])||0x0,_0x2ef9e2=parseInt(_0x36f1c0[_0xa2ead5(0x1cc)][_0xa2ead5(0x1cd)])||0xa;let _0x5399fe;_0x5399fe=await purchases[_0xa2ead5(0x1d0)]([{'$lookup':{'from':_0xa2ead5(0x1c8),'localField':_0xa2ead5(0x1c8),'foreignField':_0xa2ead5(0x1d4),'as':'suppliers_docs'}},{'$unwind':_0xa2ead5(0x1d2)},{'$unwind':_0xa2ead5(0x1a3)},{'$group':{'_id':_0xa2ead5(0x1c3),'invoice':{'$first':'$invoice'},'suppliers':{'$first':_0xa2ead5(0x19f)},'date':{'$first':_0xa2ead5(0x1cf)},'warehouse_name':{'$first':_0xa2ead5(0x1d1)},'room':{'$addToSet':_0xa2ead5(0x1c7)},'product':{'$push':_0xa2ead5(0x1a3)},'note':{'$first':_0xa2ead5(0x1b6)},'paid_amount':{'$first':_0xa2ead5(0x1c1)},'due_amount':{'$first':'$due_amount'},'return_data':{'$first':_0xa2ead5(0x1b4)},'batch_code':{'$first':'$batch_code'},'expiry_date':{'$first':'$expiry_date'},'suppliers_docs':{'$first':_0xa2ead5(0x1d2)},'total_product_quantity':{'$sum':_0xa2ead5(0x1aa)},'level':{'$addToSet':_0xa2ead5(0x1d3)},'isle':{'$addToSet':_0xa2ead5(0x1ba)},'type':{'$addToSet':_0xa2ead5(0x1a7)},'floorlevel':{'$addToSet':_0xa2ead5(0x1b7)},'finalize':{'$first':_0xa2ead5(0x1ae)}}},{'$sort':{'_id':0x1}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'product':0x1,'note':0x1,'paid_amount':0x1,'due_amount':0x1,'return_data':0x1,'batch_code':0x1,'expiry_date':0x1,'suppliers_docs':0x1,'total_product_quantity':0x1,'level':0x1,'isle':0x1,'type':0x1,'floorlevel':0x1,'finalize':0x1}},{'$skip':_0x52de07},{'$limit':_0x2ef9e2-_0x52de07}]),_0x43807a[_0xa2ead5(0x1c9)](_0x5399fe);}catch(_0x9d784){console[_0xa2ead5(0x1ad)](_0xa2ead5(0x1b5),_0x9d784),_0x43807a['status'](0xc8)[_0xa2ead5(0x1c9)]({'message':_0x9d784[_0xa2ead5(0x1bc)]});}}),router['post'](a0_0x59b89b(0x1a8),async(_0xf853ad,_0x44eb07)=>{const _0x208e4a=a0_0x59b89b,{product_code:_0x7140f9}=_0xf853ad[_0x208e4a(0x1bb)];var _0x1f7d6a;const _0x3a0836=await product[_0x208e4a(0x1d0)]([{'$match':{'primary_code':_0x7140f9,'product_category':_0x208e4a(0x1b9)}},{'$group':{'_id':_0x208e4a(0x1c3),'name':{'$first':_0x208e4a(0x1be)},'category':{'$first':_0x208e4a(0x1a6)},'brand':{'$first':'$brand'},'unit':{'$first':_0x208e4a(0x1ab)},'alertquantity':{'$first':'$alertquantity'},'product_code':{'$first':_0x208e4a(0x1a4)},'primary_code':{'$first':_0x208e4a(0x1b8)},'secondary_code':{'$first':'$secondary_code'},'maxStocks':{'$first':_0x208e4a(0x1a5)},'maxProdPerUnit':{'$first':'$maxProdPerUnit'},'product_cat':{'$first':'P'},'secondary_unit':{'$first':_0x208e4a(0x1a1)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]),_0x58941a=await product['aggregate']([{'$match':{'secondary_code':_0x7140f9,'product_category':_0x208e4a(0x1b9)}},{'$group':{'_id':'$_id','name':{'$first':_0x208e4a(0x1be)},'category':{'$first':_0x208e4a(0x1a6)},'brand':{'$first':'$brand'},'unit':{'$first':_0x208e4a(0x1ab)},'alertquantity':{'$first':_0x208e4a(0x1a9)},'product_code':{'$first':_0x208e4a(0x1a4)},'primary_code':{'$first':_0x208e4a(0x1b8)},'secondary_code':{'$first':_0x208e4a(0x1a2)},'maxStocks':{'$first':'$maxStocks'},'maxProdPerUnit':{'$first':_0x208e4a(0x1ce)},'product_cat':{'$first':'S'},'secondary_unit':{'$first':_0x208e4a(0x1a1)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]);if(_0x3a0836[_0x208e4a(0x1c5)]>0x0)_0x1f7d6a=_0x3a0836;else _0x58941a[_0x208e4a(0x1c5)]>0x0&&(_0x1f7d6a=_0x58941a);_0x44eb07[_0x208e4a(0x1c9)](_0x1f7d6a);}),module['exports']=router;