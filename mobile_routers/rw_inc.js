const a0_0x5b1a5f=a0_0x309b;function a0_0x3c6a(){const _0x240af1=['$product_code','$suppliers','json','/view','$_id','message','../middleware/auth','$brand','$date','5212RMGYAG','5hmRJfE','aggregate','$category','query','name','$paid_amount','$name','29313gQQkJC','status','$maxProdPerUnit','express','$maxStocks','709418ttlpiL','$product','/barcode_scanner','get','876596CzyDvE','$primary_code','57098eJTGmm','$suppliers_docs','$note','Raw\x20Materials','$warehouse_name','$return_data','$product.type','33CCggZi','2168754VvCDOw','length','9246810FrGhRE','$product.quantity','suppliers','ejs','table\x20page','body','752qwvpXb','start','$product.floorlevel','$secondary_unit','exports','$due_amount','$finalize','../models/all_models','$secondary_code','$product.bay','$alertquantity','$invoice','log','post','$unit','$product.room_name','suppliers_docs','$expiry_date'];a0_0x3c6a=function(){return _0x240af1;};return a0_0x3c6a();}(function(_0x4d8892,_0x3b6b46){const _0x3a9c9b=a0_0x309b,_0x146cb3=_0x4d8892();while(!![]){try{const _0x305164=parseInt(_0x3a9c9b(0x1af))/0x1+parseInt(_0x3a9c9b(0x1a9))/0x2+parseInt(_0x3a9c9b(0x1b6))/0x3*(parseInt(_0x3a9c9b(0x19c))/0x4)+-parseInt(_0x3a9c9b(0x19d))/0x5*(-parseInt(_0x3a9c9b(0x1b7))/0x6)+parseInt(_0x3a9c9b(0x1ad))/0x7+-parseInt(_0x3a9c9b(0x1bf))/0x8*(-parseInt(_0x3a9c9b(0x1a4))/0x9)+-parseInt(_0x3a9c9b(0x1b9))/0xa;if(_0x305164===_0x3b6b46)break;else _0x146cb3['push'](_0x146cb3['shift']());}catch(_0xb1fe97){_0x146cb3['push'](_0x146cb3['shift']());}}}(a0_0x3c6a,0x47da0));const express=require(a0_0x5b1a5f(0x1a7)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0x5b1a5f(0x188)),auth=require(a0_0x5b1a5f(0x199)),nodemailer=require('nodemailer');var ejs=require(a0_0x5b1a5f(0x1bc));function a0_0x309b(_0xfa85ad,_0x49ce20){const _0x3c6a0a=a0_0x3c6a();return a0_0x309b=function(_0x309b57,_0x18ce34){_0x309b57=_0x309b57-0x183;let _0x330daf=_0x3c6a0a[_0x309b57];return _0x330daf;},a0_0x309b(_0xfa85ad,_0x49ce20);}const path=require('path'),users=require('../public/language/languages.json');router[a0_0x5b1a5f(0x1ac)](a0_0x5b1a5f(0x196),async(_0x4ad249,_0x5c4b00)=>{const _0x43376d=a0_0x5b1a5f;try{const _0x1b2236=parseInt(_0x4ad249[_0x43376d(0x1a0)][_0x43376d(0x1c0)])||0x0,_0x14eac8=parseInt(_0x4ad249[_0x43376d(0x1a0)]['end'])||0xa;let _0x3722ea;_0x3722ea=await purchases['aggregate']([{'$lookup':{'from':_0x43376d(0x1bb),'localField':_0x43376d(0x1bb),'foreignField':_0x43376d(0x1a1),'as':_0x43376d(0x191)}},{'$unwind':_0x43376d(0x1b0)},{'$unwind':_0x43376d(0x1aa)},{'$group':{'_id':_0x43376d(0x197),'invoice':{'$first':_0x43376d(0x18c)},'suppliers':{'$first':_0x43376d(0x194)},'date':{'$first':_0x43376d(0x19b)},'warehouse_name':{'$first':_0x43376d(0x1b3)},'room':{'$addToSet':_0x43376d(0x190)},'product':{'$push':_0x43376d(0x1aa)},'note':{'$first':_0x43376d(0x1b1)},'paid_amount':{'$first':_0x43376d(0x1a2)},'due_amount':{'$first':_0x43376d(0x186)},'return_data':{'$first':_0x43376d(0x1b4)},'batch_code':{'$first':'$batch_code'},'expiry_date':{'$first':_0x43376d(0x192)},'suppliers_docs':{'$first':'$suppliers_docs'},'total_product_quantity':{'$sum':_0x43376d(0x1ba)},'level':{'$addToSet':_0x43376d(0x18a)},'isle':{'$addToSet':'$product.bin'},'type':{'$addToSet':_0x43376d(0x1b5)},'floorlevel':{'$addToSet':_0x43376d(0x183)},'finalize':{'$first':_0x43376d(0x187)}}},{'$sort':{'_id':0x1}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'product':0x1,'note':0x1,'paid_amount':0x1,'due_amount':0x1,'return_data':0x1,'batch_code':0x1,'expiry_date':0x1,'suppliers_docs':0x1,'total_product_quantity':0x1,'level':0x1,'isle':0x1,'type':0x1,'floorlevel':0x1,'finalize':0x1}},{'$skip':_0x1b2236},{'$limit':_0x14eac8-_0x1b2236}]),_0x5c4b00[_0x43376d(0x195)](_0x3722ea);}catch(_0x547480){console[_0x43376d(0x18d)](_0x43376d(0x1bd),_0x547480),_0x5c4b00[_0x43376d(0x1a5)](0xc8)['json']({'message':_0x547480[_0x43376d(0x198)]});}}),router[a0_0x5b1a5f(0x18e)](a0_0x5b1a5f(0x1ab),async(_0x354d60,_0x2f0fc2)=>{const _0x1550e9=a0_0x5b1a5f,{product_code:_0x2da215}=_0x354d60[_0x1550e9(0x1be)];var _0x41674c;const _0xa824c4=await product['aggregate']([{'$match':{'primary_code':_0x2da215,'product_category':_0x1550e9(0x1b2)}},{'$group':{'_id':'$_id','name':{'$first':_0x1550e9(0x1a3)},'category':{'$first':_0x1550e9(0x19f)},'brand':{'$first':_0x1550e9(0x19a)},'unit':{'$first':_0x1550e9(0x18f)},'alertquantity':{'$first':'$alertquantity'},'product_code':{'$first':_0x1550e9(0x193)},'primary_code':{'$first':_0x1550e9(0x1ae)},'secondary_code':{'$first':_0x1550e9(0x189)},'maxStocks':{'$first':_0x1550e9(0x1a8)},'maxProdPerUnit':{'$first':_0x1550e9(0x1a6)},'product_cat':{'$first':'P'},'secondary_unit':{'$first':_0x1550e9(0x184)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]),_0x22c792=await product[_0x1550e9(0x19e)]([{'$match':{'secondary_code':_0x2da215,'product_category':_0x1550e9(0x1b2)}},{'$group':{'_id':_0x1550e9(0x197),'name':{'$first':_0x1550e9(0x1a3)},'category':{'$first':_0x1550e9(0x19f)},'brand':{'$first':_0x1550e9(0x19a)},'unit':{'$first':'$unit'},'alertquantity':{'$first':_0x1550e9(0x18b)},'product_code':{'$first':_0x1550e9(0x193)},'primary_code':{'$first':_0x1550e9(0x1ae)},'secondary_code':{'$first':_0x1550e9(0x189)},'maxStocks':{'$first':_0x1550e9(0x1a8)},'maxProdPerUnit':{'$first':_0x1550e9(0x1a6)},'product_cat':{'$first':'S'},'secondary_unit':{'$first':'$secondary_unit'}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]);if(_0xa824c4[_0x1550e9(0x1b8)]>0x0)_0x41674c=_0xa824c4;else _0x22c792[_0x1550e9(0x1b8)]>0x0&&(_0x41674c=_0x22c792);_0x2f0fc2[_0x1550e9(0x195)](_0x41674c);}),module[a0_0x5b1a5f(0x185)]=router;