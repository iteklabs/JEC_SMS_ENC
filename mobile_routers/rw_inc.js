function a0_0xca32(_0x547a04,_0x14abc1){const _0x310879=a0_0x3108();return a0_0xca32=function(_0xca321,_0x55159e){_0xca321=_0xca321-0x179;let _0x5e0eb4=_0x310879[_0xca321];return _0x5e0eb4;},a0_0xca32(_0x547a04,_0x14abc1);}const a0_0x28318d=a0_0xca32;(function(_0x495a57,_0x3ed2be){const _0x405239=a0_0xca32,_0x417462=_0x495a57();while(!![]){try{const _0x3a15a0=-parseInt(_0x405239(0x1a6))/0x1*(parseInt(_0x405239(0x1af))/0x2)+-parseInt(_0x405239(0x1ab))/0x3*(parseInt(_0x405239(0x1b6))/0x4)+parseInt(_0x405239(0x1b4))/0x5*(parseInt(_0x405239(0x188))/0x6)+parseInt(_0x405239(0x17b))/0x7*(-parseInt(_0x405239(0x181))/0x8)+-parseInt(_0x405239(0x194))/0x9+parseInt(_0x405239(0x182))/0xa*(parseInt(_0x405239(0x193))/0xb)+parseInt(_0x405239(0x1b0))/0xc;if(_0x3a15a0===_0x3ed2be)break;else _0x417462['push'](_0x417462['shift']());}catch(_0x573dda){_0x417462['push'](_0x417462['shift']());}}}(a0_0x3108,0xdce4b));const express=require(a0_0x28318d(0x1a2)),app=express(),router=express[a0_0x28318d(0x198)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0x28318d(0x1a8)),auth=require(a0_0x28318d(0x18e)),nodemailer=require('nodemailer');var ejs=require(a0_0x28318d(0x197));const path=require(a0_0x28318d(0x17c)),users=require(a0_0x28318d(0x1a5));function a0_0x3108(){const _0x430fd6=['log','ejs','Router','length','$_id','table\x20page','/barcode_scanner','$product','$product.quantity','body','/view','$expiry_date','express','start','$alertquantity','../public/language/languages.json','2HQuqzF','$product_code','../models/all_models','exports','$maxStocks','19923dqIDTA','$suppliers_docs','$warehouse_name','message','123538CxThcQ','16476588IpiweT','$invoice','$secondary_code','$secondary_unit','115OLBJYJ','suppliers_docs','892JyghnB','$due_amount','$primary_code','query','$batch_code','250054pRnGxp','path','$category','name','aggregate','$return_data','232yyjLbB','4832110RKGdAW','$note','json','$maxProdPerUnit','get','$finalize','445062sokffg','$date','$paid_amount','$name','$product.bin','$brand','../middleware/auth','$product.floorlevel','status','Raw\x20Materials','$unit','22kBvQPz','4503096hHyxYt','post'];a0_0x3108=function(){return _0x430fd6;};return a0_0x3108();}router[a0_0x28318d(0x186)](a0_0x28318d(0x1a0),async(_0x7d8670,_0x45c6e3)=>{const _0x365a1f=a0_0x28318d;try{const _0x1f751c=parseInt(_0x7d8670[_0x365a1f(0x179)][_0x365a1f(0x1a3)])||0x0,_0x1c387d=parseInt(_0x7d8670['query']['end'])||0xa;let _0x4e3b2f;_0x4e3b2f=await purchases[_0x365a1f(0x17f)]([{'$lookup':{'from':'suppliers','localField':'suppliers','foreignField':_0x365a1f(0x17e),'as':_0x365a1f(0x1b5)}},{'$unwind':_0x365a1f(0x1ac)},{'$unwind':_0x365a1f(0x19d)},{'$group':{'_id':_0x365a1f(0x19a),'invoice':{'$first':_0x365a1f(0x1b1)},'suppliers':{'$first':'$suppliers'},'date':{'$first':_0x365a1f(0x189)},'warehouse_name':{'$first':_0x365a1f(0x1ad)},'room':{'$addToSet':'$product.room_name'},'product':{'$push':'$product'},'note':{'$first':_0x365a1f(0x183)},'paid_amount':{'$first':_0x365a1f(0x18a)},'due_amount':{'$first':_0x365a1f(0x1b7)},'return_data':{'$first':_0x365a1f(0x180)},'batch_code':{'$first':_0x365a1f(0x17a)},'expiry_date':{'$first':_0x365a1f(0x1a1)},'suppliers_docs':{'$first':_0x365a1f(0x1ac)},'total_product_quantity':{'$sum':_0x365a1f(0x19e)},'level':{'$addToSet':'$product.bay'},'isle':{'$addToSet':_0x365a1f(0x18c)},'type':{'$addToSet':'$product.type'},'floorlevel':{'$addToSet':_0x365a1f(0x18f)},'finalize':{'$first':_0x365a1f(0x187)}}},{'$sort':{'_id':0x1}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'product':0x1,'note':0x1,'paid_amount':0x1,'due_amount':0x1,'return_data':0x1,'batch_code':0x1,'expiry_date':0x1,'suppliers_docs':0x1,'total_product_quantity':0x1,'level':0x1,'isle':0x1,'type':0x1,'floorlevel':0x1,'finalize':0x1}},{'$skip':_0x1f751c},{'$limit':_0x1c387d-_0x1f751c}]),_0x45c6e3[_0x365a1f(0x184)](_0x4e3b2f);}catch(_0x6956f2){console[_0x365a1f(0x196)](_0x365a1f(0x19b),_0x6956f2),_0x45c6e3[_0x365a1f(0x190)](0xc8)[_0x365a1f(0x184)]({'message':_0x6956f2[_0x365a1f(0x1ae)]});}}),router[a0_0x28318d(0x195)](a0_0x28318d(0x19c),async(_0x804ff5,_0x7ab258)=>{const _0x3b1461=a0_0x28318d,{product_code:_0x327dff}=_0x804ff5[_0x3b1461(0x19f)];var _0x2f80ff;const _0x295864=await product['aggregate']([{'$match':{'primary_code':_0x327dff,'product_category':_0x3b1461(0x191)}},{'$group':{'_id':_0x3b1461(0x19a),'name':{'$first':'$name'},'category':{'$first':_0x3b1461(0x17d)},'brand':{'$first':_0x3b1461(0x18d)},'unit':{'$first':'$unit'},'alertquantity':{'$first':_0x3b1461(0x1a4)},'product_code':{'$first':'$product_code'},'primary_code':{'$first':_0x3b1461(0x1b8)},'secondary_code':{'$first':_0x3b1461(0x1b2)},'maxStocks':{'$first':_0x3b1461(0x1aa)},'maxProdPerUnit':{'$first':_0x3b1461(0x185)},'product_cat':{'$first':'P'},'secondary_unit':{'$first':_0x3b1461(0x1b3)}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]),_0x3ec30e=await product[_0x3b1461(0x17f)]([{'$match':{'secondary_code':_0x327dff,'product_category':_0x3b1461(0x191)}},{'$group':{'_id':'$_id','name':{'$first':_0x3b1461(0x18b)},'category':{'$first':'$category'},'brand':{'$first':_0x3b1461(0x18d)},'unit':{'$first':_0x3b1461(0x192)},'alertquantity':{'$first':_0x3b1461(0x1a4)},'product_code':{'$first':_0x3b1461(0x1a7)},'primary_code':{'$first':_0x3b1461(0x1b8)},'secondary_code':{'$first':_0x3b1461(0x1b2)},'maxStocks':{'$first':'$maxStocks'},'maxProdPerUnit':{'$first':'$maxProdPerUnit'},'product_cat':{'$first':'S'},'secondary_unit':{'$first':'$secondary_unit'}}},{'$project':{'_id':0x1,'name':0x1,'category':0x1,'brand':0x1,'unit':0x1,'alertquantity':0x1,'product_code':0x1,'primary_code':0x1,'secondary_code':0x1,'maxStocks':0x1,'maxProdPerUnit':0x1,'product_cat':0x1,'secondary_unit':0x1}}]);if(_0x295864[_0x3b1461(0x199)]>0x0)_0x2f80ff=_0x295864;else _0x3ec30e[_0x3b1461(0x199)]>0x0&&(_0x2f80ff=_0x3ec30e);_0x7ab258[_0x3b1461(0x184)](_0x2f80ff);}),module[a0_0x28318d(0x1a9)]=router;