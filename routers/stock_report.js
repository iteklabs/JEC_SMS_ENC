function a0_0x4ce7(_0x155847,_0x346f4f){var _0x2e0b28=a0_0x2e0b();return a0_0x4ce7=function(_0x4ce77d,_0x5bc392){_0x4ce77d=_0x4ce77d-0x10e;var _0x362e06=_0x2e0b28[_0x4ce77d];return _0x362e06;},a0_0x4ce7(_0x155847,_0x346f4f);}var a0_0xa4858=a0_0x4ce7;(function(_0x25f4e2,_0x583390){var _0xd8a10e=a0_0x4ce7,_0x18e19e=_0x25f4e2();while(!![]){try{var _0x599e53=parseInt(_0xd8a10e(0x14e))/0x1+-parseInt(_0xd8a10e(0x119))/0x2*(parseInt(_0xd8a10e(0x11b))/0x3)+parseInt(_0xd8a10e(0x12e))/0x4+parseInt(_0xd8a10e(0x120))/0x5*(parseInt(_0xd8a10e(0x147))/0x6)+parseInt(_0xd8a10e(0x129))/0x7+-parseInt(_0xd8a10e(0x137))/0x8+-parseInt(_0xd8a10e(0x148))/0x9*(parseInt(_0xd8a10e(0x134))/0xa);if(_0x599e53===_0x583390)break;else _0x18e19e['push'](_0x18e19e['shift']());}catch(_0x2f2a76){_0x18e19e['push'](_0x18e19e['shift']());}}}(a0_0x2e0b,0x553e7));function a0_0x2e0b(){var _0x4131af=['Chinese','Spanish','2333536hCeoOW','$product_details.product_name','$product_docs.category','warehouse','post','/Reports_product','10IsTvph','name','params','898992tVvyrg','Hindi','product_details.rak_name','email','German','English','language','$product_details.product_stock','$product_docs','json','get','/view/:id','product_data','product_details.product_name','status','flash','12GvVGmR','12263157mAjvwN','product_details.bin_name','body','$product_docs.sku','$name','../models/all_models','303243yfdOHz','render','log','Portuguese','English\x20(US)','success','find','Arabic\x20(ae)','user','All','role_data','warehouse_data','Arabic','stock_report','2906lyHyly','products','141KgpXTw','$product_details','Portuguese\x20(BR)','Enabled','$product_docs.brand','786565snEwVc','/Reports','French','/view/product/:id','product_docs','aggregate','findOne','/view/warehouse/:id','$product_docs.unit','4838008zJlJIH','master','/view'];a0_0x2e0b=function(){return _0x4131af;};return a0_0x2e0b();}const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require(a0_0xa4858(0x14d)),auth=require('../middleware/auth'),users=require('../public/language/languages.json');router[a0_0xa4858(0x141)](a0_0xa4858(0x12b),auth,async(_0xe18ab5,_0x574b44)=>{var _0x43c8b1=a0_0xa4858;try{const _0x2bb7c6=_0xe18ab5[_0x43c8b1(0x113)];console[_0x43c8b1(0x150)](_0x43c8b1(0x115),_0xe18ab5['user']);const _0x15fecd=await profile[_0x43c8b1(0x126)]({'email':_0x2bb7c6[_0x43c8b1(0x13a)]}),_0x4048bf=await master_shop[_0x43c8b1(0x111)]();console['log'](_0x43c8b1(0x12a),_0x4048bf);const _0x211157=await warehouse['aggregate']([{'$match':{'status':_0x43c8b1(0x11e)}},{'$group':{'_id':_0x43c8b1(0x14c),'name':{'$first':_0x43c8b1(0x14c)}}}]),_0x3dbe46=await product[_0x43c8b1(0x111)]({});if(_0x4048bf[0x0]['language']==_0x43c8b1(0x10f)){var _0x3785cf=users[_0x43c8b1(0x13c)];console[_0x43c8b1(0x150)](_0x3785cf);}else{if(_0x4048bf[0x0][_0x43c8b1(0x13d)]==_0x43c8b1(0x138))var _0x3785cf=users['Hindi'];else{if(_0x4048bf[0x0][_0x43c8b1(0x13d)]==_0x43c8b1(0x13b))var _0x3785cf=users[_0x43c8b1(0x13b)];else{if(_0x4048bf[0x0][_0x43c8b1(0x13d)]==_0x43c8b1(0x12d))var _0x3785cf=users[_0x43c8b1(0x12d)];else{if(_0x4048bf[0x0][_0x43c8b1(0x13d)]==_0x43c8b1(0x122))var _0x3785cf=users[_0x43c8b1(0x122)];else{if(_0x4048bf[0x0][_0x43c8b1(0x13d)]=='Portuguese\x20(BR)')var _0x3785cf=users[_0x43c8b1(0x10e)];else{if(_0x4048bf[0x0]['language']==_0x43c8b1(0x12c))var _0x3785cf=users[_0x43c8b1(0x12c)];else{if(_0x4048bf[0x0][_0x43c8b1(0x13d)]==_0x43c8b1(0x112))var _0x3785cf=users[_0x43c8b1(0x117)];}}}}}}}_0x574b44[_0x43c8b1(0x14f)](_0x43c8b1(0x118),{'success':_0xe18ab5['flash'](_0x43c8b1(0x110)),'errors':_0xe18ab5[_0x43c8b1(0x146)]('errors'),'role':_0x2bb7c6,'profile':_0x15fecd,'master_shop':_0x4048bf,'warehouse':_0x211157,'product':_0x3dbe46,'warehouse_doc':[],'product_doc':[],'language':_0x3785cf});}catch(_0x2a09c7){console[_0x43c8b1(0x150)](_0x2a09c7);}}),router[a0_0xa4858(0x141)](a0_0xa4858(0x142),auth,async(_0x58ec8d,_0x2ac42f)=>{var _0x1c94ac=a0_0xa4858;try{const _0x35dce8=await master_shop[_0x1c94ac(0x111)]();console[_0x1c94ac(0x150)](_0x1c94ac(0x12a),_0x35dce8);if(_0x58ec8d['params']['id']==_0x1c94ac(0x131)){const _0x3e5f5a=await warehouse[_0x1c94ac(0x111)]();console[_0x1c94ac(0x150)](_0x3e5f5a);if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x10f)){var _0x20dcda=users[_0x1c94ac(0x13c)];console[_0x1c94ac(0x150)](_0x20dcda);}else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x138))var _0x20dcda=users[_0x1c94ac(0x138)];else{if(_0x35dce8[0x0]['language']==_0x1c94ac(0x13b))var _0x20dcda=users[_0x1c94ac(0x13b)];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x12d))var _0x20dcda=users['Spanish'];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x122))var _0x20dcda=users[_0x1c94ac(0x122)];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x11d))var _0x20dcda=users['Portuguese'];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]=='Chinese')var _0x20dcda=users['Chinese'];else{if(_0x35dce8[0x0]['language']==_0x1c94ac(0x112))var _0x20dcda=users[_0x1c94ac(0x117)];}}}}}}}_0x2ac42f[_0x1c94ac(0x145)](0xc8)[_0x1c94ac(0x140)]({'data':_0x3e5f5a,'language':_0x20dcda[_0x1c94ac(0x131)]});}else{const _0x217766=await product['find']();console[_0x1c94ac(0x150)]('111',_0x217766);if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x10f)){var _0x20dcda=users[_0x1c94ac(0x13c)];console[_0x1c94ac(0x150)](_0x20dcda);}else{if(_0x35dce8[0x0]['language']==_0x1c94ac(0x138))var _0x20dcda=users[_0x1c94ac(0x138)];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]=='German')var _0x20dcda=users[_0x1c94ac(0x13b)];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]=='Spanish')var _0x20dcda=users['Spanish'];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x122))var _0x20dcda=users[_0x1c94ac(0x122)];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x11d))var _0x20dcda=users[_0x1c94ac(0x10e)];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]==_0x1c94ac(0x12c))var _0x20dcda=users['Chinese'];else{if(_0x35dce8[0x0][_0x1c94ac(0x13d)]=='Arabic\x20(ae)')var _0x20dcda=users['Arabic'];}}}}}}}_0x2ac42f[_0x1c94ac(0x145)](0xc8)['json']({'data':_0x217766,'language':_0x20dcda['products']});}}catch(_0x482c2d){console[_0x1c94ac(0x150)](_0x482c2d);}}),router[a0_0xa4858(0x141)](a0_0xa4858(0x127),auth,async(_0x5b7ae5,_0x50f484)=>{var _0x1c362c=a0_0xa4858;try{const _0x4fc0e8=_0x5b7ae5[_0x1c362c(0x136)]['id'];console['log'](_0x4fc0e8);const _0x320b4b=await master_shop[_0x1c362c(0x111)]();console['log'](_0x1c362c(0x12a),_0x320b4b);const _0x449f8d=await warehouse['aggregate']([{'$match':{'name':_0x4fc0e8}},{'$unwind':_0x1c362c(0x11c)},{'$lookup':{'from':_0x1c362c(0x11a),'localField':_0x1c362c(0x144),'foreignField':_0x1c362c(0x135),'as':_0x1c362c(0x124)}},{'$unwind':_0x1c362c(0x13f)},{'$project':{'name':0x1,'product_name':_0x1c362c(0x12f),'product_stock':'$product_details.product_stock','category':_0x1c362c(0x130),'brand':_0x1c362c(0x11f),'sku':_0x1c362c(0x14b),'unit':_0x1c362c(0x128),'rak':_0x1c362c(0x139),'bin':_0x1c362c(0x149)}}]);console['log'](_0x449f8d);if(_0x320b4b[0x0]['language']==_0x1c362c(0x10f)){var _0x3feb53=users['English'];console[_0x1c362c(0x150)](_0x3feb53);}else{if(_0x320b4b[0x0][_0x1c362c(0x13d)]=='Hindi')var _0x3feb53=users[_0x1c362c(0x138)];else{if(_0x320b4b[0x0][_0x1c362c(0x13d)]==_0x1c362c(0x13b))var _0x3feb53=users[_0x1c362c(0x13b)];else{if(_0x320b4b[0x0]['language']==_0x1c362c(0x12d))var _0x3feb53=users[_0x1c362c(0x12d)];else{if(_0x320b4b[0x0][_0x1c362c(0x13d)]=='French')var _0x3feb53=users[_0x1c362c(0x122)];else{if(_0x320b4b[0x0][_0x1c362c(0x13d)]==_0x1c362c(0x11d))var _0x3feb53=users[_0x1c362c(0x10e)];else{if(_0x320b4b[0x0][_0x1c362c(0x13d)]==_0x1c362c(0x12c))var _0x3feb53=users[_0x1c362c(0x12c)];else{if(_0x320b4b[0x0][_0x1c362c(0x13d)]=='Arabic\x20(ae)')var _0x3feb53=users['Arabic'];}}}}}}}_0x50f484['status'](0xc8)[_0x1c362c(0x140)]({'data':_0x449f8d,'language':_0x3feb53});}catch(_0x473a09){console[_0x1c362c(0x150)](_0x473a09);}}),router[a0_0xa4858(0x141)](a0_0xa4858(0x123),auth,async(_0x2cba64,_0x4da886)=>{var _0x3edc27=a0_0xa4858;try{const _0x42c224=_0x2cba64[_0x3edc27(0x136)]['id'];console[_0x3edc27(0x150)](_0x42c224);const _0x35b6b8=await master_shop['find']();console[_0x3edc27(0x150)](_0x3edc27(0x12a),_0x35b6b8);const _0x1fb30a=await product['findOne']({'name':_0x42c224});console['log'](_0x3edc27(0x143),_0x1fb30a);const _0x4edbbc=await warehouse[_0x3edc27(0x125)]([{'$unwind':'$product_details'},{'$match':{'product_details.product_name':_0x42c224}},{'$project':{'name':0x1,'product_name':_0x3edc27(0x12f),'product_stock':_0x3edc27(0x13e)}}]);console[_0x3edc27(0x150)](_0x3edc27(0x116),_0x4edbbc);if(_0x35b6b8[0x0][_0x3edc27(0x13d)]==_0x3edc27(0x10f)){var _0x43617b=users[_0x3edc27(0x13c)];console['log'](_0x43617b);}else{if(_0x35b6b8[0x0][_0x3edc27(0x13d)]==_0x3edc27(0x138))var _0x43617b=users['Hindi'];else{if(_0x35b6b8[0x0]['language']==_0x3edc27(0x13b))var _0x43617b=users['German'];else{if(_0x35b6b8[0x0][_0x3edc27(0x13d)]==_0x3edc27(0x12d))var _0x43617b=users[_0x3edc27(0x12d)];else{if(_0x35b6b8[0x0][_0x3edc27(0x13d)]==_0x3edc27(0x122))var _0x43617b=users[_0x3edc27(0x122)];else{if(_0x35b6b8[0x0]['language']==_0x3edc27(0x11d))var _0x43617b=users[_0x3edc27(0x10e)];else{if(_0x35b6b8[0x0]['language']==_0x3edc27(0x12c))var _0x43617b=users[_0x3edc27(0x12c)];else{if(_0x35b6b8[0x0][_0x3edc27(0x13d)]==_0x3edc27(0x112))var _0x43617b=users['Arabic'];}}}}}}}_0x4da886['status'](0xc8)['json']({'product_data':_0x1fb30a,'warehouse_data':_0x4edbbc,'language':_0x43617b});}catch(_0x3551a8){console[_0x3edc27(0x150)](_0x3551a8);}}),router[a0_0xa4858(0x132)](a0_0xa4858(0x121),async(_0x30ae45,_0x34c7b7)=>{var _0x4c36f4=a0_0xa4858;const {warehouseNew:_0x1970c3,rooms:_0xc4a9be}=_0x30ae45['body'];let _0x313738;_0xc4a9be==_0x4c36f4(0x114)?_0x313738=await warehouse[_0x4c36f4(0x125)]([{'$match':{'name':_0x1970c3}},{'$unwind':'$product_details'},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x313738=await warehouse[_0x4c36f4(0x125)]([{'$match':{'name':_0x1970c3,'room':_0xc4a9be}},{'$unwind':_0x4c36f4(0x11c)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]),_0x34c7b7[_0x4c36f4(0x140)](_0x313738);}),router[a0_0xa4858(0x132)](a0_0xa4858(0x133),async(_0x2a28d1,_0x1276ec)=>{var _0x1b8eda=a0_0xa4858;const {warehouseNew:_0x2957ee,rooms:_0x26202f,Type:_0x55ccb5,process_cat:_0x1b9f7e,room_cat:_0x258676}=_0x2a28d1[_0x1b8eda(0x14a)],_0x226132=await product[_0x1b8eda(0x111)]();_0x1276ec['json'](_0x226132);}),module['exports']=router;