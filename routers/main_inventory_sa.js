function a0_0x151e(_0x6f0ccd,_0x102406){const _0x1ba8da=a0_0x1ba8();return a0_0x151e=function(_0x151ee4,_0x29cbee){_0x151ee4=_0x151ee4-0x9c;let _0xcd28c3=_0x1ba8da[_0x151ee4];return _0xcd28c3;},a0_0x151e(_0x6f0ccd,_0x102406);}const a0_0x5c3d76=a0_0x151e;function a0_0x1ba8(){const _0x18bb94=['findOne','$product_details.product_code','errors','180YYIeql','Arabic\x20(ae)','3180100ydDsFI','2064228fZiwkX','3446086kCdNwj','2NVSBcu','post','English','French','../middleware/auth','22370652XmwzWm','express','success','user','email','/table','25278jwuXHC','flash','json','find','$product_details.product_stock','$product_details','render','Portuguese\x20(BR)','language','$name','product_list','German','$product_details.product_name','exports','../public/language/languages.json','7483296qpVmdj','Hindi','Chinese','xlsx','../models/all_models','English\x20(US)','exceljs','189559aDvkGp','Portuguese','Spanish'];a0_0x1ba8=function(){return _0x18bb94;};return a0_0x1ba8();}(function(_0x1b9059,_0x105b12){const _0x1c752c=a0_0x151e,_0x17990d=_0x1b9059();while(!![]){try{const _0x43597b=-parseInt(_0x1c752c(0xb7))/0x1*(parseInt(_0x1c752c(0xc2))/0x2)+-parseInt(_0x1c752c(0xc0))/0x3+-parseInt(_0x1c752c(0xbf))/0x4+parseInt(_0x1c752c(0xbd))/0x5*(parseInt(_0x1c752c(0xa1))/0x6)+parseInt(_0x1c752c(0xc1))/0x7+-parseInt(_0x1c752c(0xb0))/0x8+parseInt(_0x1c752c(0xc7))/0x9;if(_0x43597b===_0x105b12)break;else _0x17990d['push'](_0x17990d['shift']());}catch(_0x1e664f){_0x17990d['push'](_0x17990d['shift']());}}}(a0_0x1ba8,0x7f532));const express=require(a0_0x5c3d76(0x9c)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x5c3d76(0xb4)),auth=require(a0_0x5c3d76(0xc6)),users=require(a0_0x5c3d76(0xaf)),excelJS=require(a0_0x5c3d76(0xb6)),xlsx=require(a0_0x5c3d76(0xb3));router['get']('/view',auth,async(_0x20f6fb,_0x2d135d)=>{const _0x3bf82a=a0_0x5c3d76;try{const _0x46b109=await master_shop[_0x3bf82a(0xa4)](),_0x475c5a=_0x20f6fb[_0x3bf82a(0x9e)],_0x3b137f=await profile[_0x3bf82a(0xba)]({'email':_0x475c5a[_0x3bf82a(0x9f)]}),_0x281976=await staff[_0x3bf82a(0xba)]({'email':_0x475c5a['email']});if(_0x46b109[0x0][_0x3bf82a(0xa9)]==_0x3bf82a(0xb5))var _0xb88fa2=users[_0x3bf82a(0xc4)];else{if(_0x46b109[0x0][_0x3bf82a(0xa9)]==_0x3bf82a(0xb1))var _0xb88fa2=users[_0x3bf82a(0xb1)];else{if(_0x46b109[0x0][_0x3bf82a(0xa9)]==_0x3bf82a(0xac))var _0xb88fa2=users[_0x3bf82a(0xac)];else{if(_0x46b109[0x0][_0x3bf82a(0xa9)]==_0x3bf82a(0xb9))var _0xb88fa2=users[_0x3bf82a(0xb9)];else{if(_0x46b109[0x0]['language']=='French')var _0xb88fa2=users[_0x3bf82a(0xc5)];else{if(_0x46b109[0x0][_0x3bf82a(0xa9)]==_0x3bf82a(0xa8))var _0xb88fa2=users[_0x3bf82a(0xb8)];else{if(_0x46b109[0x0][_0x3bf82a(0xa9)]==_0x3bf82a(0xb2))var _0xb88fa2=users['Chinese'];else{if(_0x46b109[0x0]['language']==_0x3bf82a(0xbe))var _0xb88fa2=users['Arabic'];}}}}}}}_0x2d135d[_0x3bf82a(0xa7)]('main_inventory',{'success':_0x20f6fb['flash'](_0x3bf82a(0x9d)),'errors':_0x20f6fb[_0x3bf82a(0xa2)](_0x3bf82a(0xbc)),'master_shop':_0x46b109,'profile':_0x3b137f,'role':_0x475c5a,'language':_0xb88fa2,'product_list':_0x281976[_0x3bf82a(0xab)]});}catch(_0x278d2a){console['log'](_0x278d2a);}}),router[a0_0x5c3d76(0xc3)](a0_0x5c3d76(0xa0),async(_0x33a858,_0x4b138a)=>{const _0xf3b4b8=a0_0x5c3d76;try{const {isbool:_0x56bb33}=_0x33a858['body'],_0x34caaf=_0x33a858[_0xf3b4b8(0x9e)],_0xa74313=await warehouse['aggregate']([{'$unwind':_0xf3b4b8(0xa6)},{'$group':{'_id':{'name':_0xf3b4b8(0xaa),'product_code':_0xf3b4b8(0xbb)},'product_name':{'$first':_0xf3b4b8(0xad)},'product_stock':{'$sum':_0xf3b4b8(0xa5)}}},{'$sort':{'_id.name':0x1}}]);_0x4b138a[_0xf3b4b8(0xa3)](_0xa74313);}catch(_0x3c8e59){_0x4b138a[_0xf3b4b8(0xa3)]({'isConfirm':![],'error':_0x3c8e59});}}),module[a0_0x5c3d76(0xae)]=router;