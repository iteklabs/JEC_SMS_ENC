var a0_0x1be702=a0_0x3691;(function(_0x45f890,_0x1caa6b){var _0xcee2f3=a0_0x3691,_0x2b1393=_0x45f890();while(!![]){try{var _0x387546=-parseInt(_0xcee2f3(0x137))/0x1*(parseInt(_0xcee2f3(0x158))/0x2)+-parseInt(_0xcee2f3(0x13a))/0x3+-parseInt(_0xcee2f3(0x133))/0x4+-parseInt(_0xcee2f3(0x16b))/0x5+-parseInt(_0xcee2f3(0x160))/0x6*(parseInt(_0xcee2f3(0x13c))/0x7)+-parseInt(_0xcee2f3(0x167))/0x8+-parseInt(_0xcee2f3(0x131))/0x9*(-parseInt(_0xcee2f3(0x14f))/0xa);if(_0x387546===_0x1caa6b)break;else _0x2b1393['push'](_0x2b1393['shift']());}catch(_0x8d147e){_0x2b1393['push'](_0x2b1393['shift']());}}}(a0_0x1068,0xf269d));const express=require(a0_0x1be702(0x14d)),app=express(),router=express[a0_0x1be702(0x15b)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require(a0_0x1be702(0x164)),auth=require(a0_0x1be702(0x13b)),users=require(a0_0x1be702(0x150));function a0_0x3691(_0x3993b,_0x391829){var _0x106815=a0_0x1068();return a0_0x3691=function(_0x36916b,_0x591772){_0x36916b=_0x36916b-0x131;var _0x3d032b=_0x106815[_0x36916b];return _0x3d032b;},a0_0x3691(_0x3993b,_0x391829);}router[a0_0x1be702(0x135)](a0_0x1be702(0x144),auth,async(_0x2d838b,_0x293ce8)=>{var _0x337f7b=a0_0x1be702;try{const _0x3e21d1=_0x2d838b['user'];console['log'](_0x337f7b(0x16c),_0x2d838b[_0x337f7b(0x14b)]);const _0x58b236=await profile['findOne']({'email':_0x3e21d1[_0x337f7b(0x159)]}),_0x2977b8=await master_shop['find']();console[_0x337f7b(0x163)](_0x337f7b(0x148),_0x2977b8);const _0x1e2165=await warehouse[_0x337f7b(0x149)]([{'$match':{'status':_0x337f7b(0x151)}},{'$group':{'_id':_0x337f7b(0x168),'name':{'$first':_0x337f7b(0x168)}}}]),_0x266956=await product['find']({});if(_0x2977b8[0x0][_0x337f7b(0x13e)]==_0x337f7b(0x14e)){var _0x58b3c3=users['English'];console['log'](_0x58b3c3);}else{if(_0x2977b8[0x0]['language']=='Hindi')var _0x58b3c3=users[_0x337f7b(0x152)];else{if(_0x2977b8[0x0]['language']==_0x337f7b(0x13d))var _0x58b3c3=users['German'];else{if(_0x2977b8[0x0][_0x337f7b(0x13e)]==_0x337f7b(0x15c))var _0x58b3c3=users[_0x337f7b(0x15c)];else{if(_0x2977b8[0x0]['language']=='French')var _0x58b3c3=users[_0x337f7b(0x16e)];else{if(_0x2977b8[0x0]['language']==_0x337f7b(0x136))var _0x58b3c3=users['Portuguese'];else{if(_0x2977b8[0x0][_0x337f7b(0x13e)]=='Chinese')var _0x58b3c3=users['Chinese'];else{if(_0x2977b8[0x0][_0x337f7b(0x13e)]==_0x337f7b(0x142))var _0x58b3c3=users[_0x337f7b(0x162)];}}}}}}}_0x293ce8[_0x337f7b(0x132)](_0x337f7b(0x146),{'success':_0x2d838b['flash'](_0x337f7b(0x14c)),'errors':_0x2d838b['flash'](_0x337f7b(0x15f)),'role':_0x3e21d1,'profile':_0x58b236,'master_shop':_0x2977b8,'warehouse':_0x1e2165,'product':_0x266956,'warehouse_doc':[],'product_doc':[],'language':_0x58b3c3});}catch(_0x1ef016){console[_0x337f7b(0x163)](_0x1ef016);}}),router[a0_0x1be702(0x135)]('/view/:id',auth,async(_0x13e9f6,_0x15428e)=>{var _0x100116=a0_0x1be702;try{const _0x4bc554=await master_shop[_0x100116(0x16a)]();console[_0x100116(0x163)](_0x100116(0x148),_0x4bc554);if(_0x13e9f6[_0x100116(0x15d)]['id']==_0x100116(0x155)){const _0x30ea6f=await warehouse[_0x100116(0x16a)]();console[_0x100116(0x163)](_0x30ea6f);if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x14e)){var _0x443a9e=users['English'];console[_0x100116(0x163)](_0x443a9e);}else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x152))var _0x443a9e=users[_0x100116(0x152)];else{if(_0x4bc554[0x0]['language']==_0x100116(0x13d))var _0x443a9e=users[_0x100116(0x13d)];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x15c))var _0x443a9e=users[_0x100116(0x15c)];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x16e))var _0x443a9e=users[_0x100116(0x16e)];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x136))var _0x443a9e=users['Portuguese'];else{if(_0x4bc554[0x0][_0x100116(0x13e)]=='Chinese')var _0x443a9e=users['Chinese'];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x142))var _0x443a9e=users[_0x100116(0x162)];}}}}}}}_0x15428e['status'](0xc8)['json']({'data':_0x30ea6f,'language':_0x443a9e[_0x100116(0x155)]});}else{const _0x185953=await product[_0x100116(0x16a)]();console[_0x100116(0x163)](_0x100116(0x156),_0x185953);if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x14e)){var _0x443a9e=users[_0x100116(0x138)];console[_0x100116(0x163)](_0x443a9e);}else{if(_0x4bc554[0x0]['language']==_0x100116(0x152))var _0x443a9e=users[_0x100116(0x152)];else{if(_0x4bc554[0x0][_0x100116(0x13e)]=='German')var _0x443a9e=users[_0x100116(0x13d)];else{if(_0x4bc554[0x0]['language']=='Spanish')var _0x443a9e=users['Spanish'];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x16e))var _0x443a9e=users[_0x100116(0x16e)];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x136))var _0x443a9e=users[_0x100116(0x170)];else{if(_0x4bc554[0x0]['language']==_0x100116(0x16d))var _0x443a9e=users[_0x100116(0x16d)];else{if(_0x4bc554[0x0][_0x100116(0x13e)]==_0x100116(0x142))var _0x443a9e=users[_0x100116(0x162)];}}}}}}}_0x15428e['status'](0xc8)[_0x100116(0x143)]({'data':_0x185953,'language':_0x443a9e[_0x100116(0x166)]});}}catch(_0x345f90){console[_0x100116(0x163)](_0x345f90);}}),router['get'](a0_0x1be702(0x157),auth,async(_0x41760b,_0x325192)=>{var _0x2105ab=a0_0x1be702;try{const _0x463085=_0x41760b['params']['id'];console[_0x2105ab(0x163)](_0x463085);const _0x45ed0e=await master_shop[_0x2105ab(0x16a)]();console[_0x2105ab(0x163)](_0x2105ab(0x148),_0x45ed0e);const _0x2a5c69=await warehouse[_0x2105ab(0x149)]([{'$match':{'name':_0x463085}},{'$unwind':_0x2105ab(0x15e)},{'$lookup':{'from':_0x2105ab(0x166),'localField':_0x2105ab(0x153),'foreignField':_0x2105ab(0x165),'as':_0x2105ab(0x139)}},{'$unwind':_0x2105ab(0x140)},{'$project':{'name':0x1,'product_name':_0x2105ab(0x134),'product_stock':_0x2105ab(0x141),'category':'$product_docs.category','brand':_0x2105ab(0x13f),'sku':_0x2105ab(0x169),'unit':_0x2105ab(0x147),'rak':_0x2105ab(0x154),'bin':_0x2105ab(0x145)}}]);console[_0x2105ab(0x163)](_0x2a5c69);if(_0x45ed0e[0x0][_0x2105ab(0x13e)]=='English\x20(US)'){var _0x28c9ec=users[_0x2105ab(0x138)];console['log'](_0x28c9ec);}else{if(_0x45ed0e[0x0]['language']==_0x2105ab(0x152))var _0x28c9ec=users[_0x2105ab(0x152)];else{if(_0x45ed0e[0x0][_0x2105ab(0x13e)]==_0x2105ab(0x13d))var _0x28c9ec=users[_0x2105ab(0x13d)];else{if(_0x45ed0e[0x0][_0x2105ab(0x13e)]==_0x2105ab(0x15c))var _0x28c9ec=users['Spanish'];else{if(_0x45ed0e[0x0]['language']==_0x2105ab(0x16e))var _0x28c9ec=users[_0x2105ab(0x16e)];else{if(_0x45ed0e[0x0]['language']==_0x2105ab(0x136))var _0x28c9ec=users['Portuguese'];else{if(_0x45ed0e[0x0][_0x2105ab(0x13e)]==_0x2105ab(0x16d))var _0x28c9ec=users['Chinese'];else{if(_0x45ed0e[0x0]['language']=='Arabic\x20(ae)')var _0x28c9ec=users[_0x2105ab(0x162)];}}}}}}}_0x325192[_0x2105ab(0x174)](0xc8)['json']({'data':_0x2a5c69,'language':_0x28c9ec});}catch(_0x25a0fc){console[_0x2105ab(0x163)](_0x25a0fc);}}),router[a0_0x1be702(0x135)](a0_0x1be702(0x15a),auth,async(_0x46b903,_0x39c285)=>{var _0x1aec45=a0_0x1be702;try{const _0x3e5e26=_0x46b903[_0x1aec45(0x15d)]['id'];console[_0x1aec45(0x163)](_0x3e5e26);const _0x540959=await master_shop[_0x1aec45(0x16a)]();console[_0x1aec45(0x163)](_0x1aec45(0x148),_0x540959);const _0x4a863e=await product['findOne']({'name':_0x3e5e26});console[_0x1aec45(0x163)](_0x1aec45(0x14a),_0x4a863e);const _0x1036ba=await warehouse[_0x1aec45(0x149)]([{'$unwind':_0x1aec45(0x15e)},{'$match':{'product_details.product_name':_0x3e5e26}},{'$project':{'name':0x1,'product_name':_0x1aec45(0x134),'product_stock':'$product_details.product_stock'}}]);console['log']('warehouse_data',_0x1036ba);if(_0x540959[0x0][_0x1aec45(0x13e)]==_0x1aec45(0x14e)){var _0x39cb2f=users[_0x1aec45(0x138)];console[_0x1aec45(0x163)](_0x39cb2f);}else{if(_0x540959[0x0][_0x1aec45(0x13e)]=='Hindi')var _0x39cb2f=users[_0x1aec45(0x152)];else{if(_0x540959[0x0][_0x1aec45(0x13e)]==_0x1aec45(0x13d))var _0x39cb2f=users['German'];else{if(_0x540959[0x0]['language']==_0x1aec45(0x15c))var _0x39cb2f=users[_0x1aec45(0x15c)];else{if(_0x540959[0x0][_0x1aec45(0x13e)]==_0x1aec45(0x16e))var _0x39cb2f=users['French'];else{if(_0x540959[0x0][_0x1aec45(0x13e)]==_0x1aec45(0x136))var _0x39cb2f=users[_0x1aec45(0x170)];else{if(_0x540959[0x0][_0x1aec45(0x13e)]==_0x1aec45(0x16d))var _0x39cb2f=users[_0x1aec45(0x16d)];else{if(_0x540959[0x0]['language']==_0x1aec45(0x142))var _0x39cb2f=users['Arabic'];}}}}}}}_0x39c285[_0x1aec45(0x174)](0xc8)[_0x1aec45(0x143)]({'product_data':_0x4a863e,'warehouse_data':_0x1036ba,'language':_0x39cb2f});}catch(_0xcc671){console[_0x1aec45(0x163)](_0xcc671);}}),router[a0_0x1be702(0x161)](a0_0x1be702(0x16f),async(_0x4df2f7,_0x30f672)=>{var _0x3391ef=a0_0x1be702;const {warehouseNew:_0x576232,rooms:_0x22a48a}=_0x4df2f7[_0x3391ef(0x171)];let _0x37fad1;_0x22a48a==_0x3391ef(0x173)?_0x37fad1=await warehouse[_0x3391ef(0x149)]([{'$match':{'name':_0x576232}},{'$unwind':_0x3391ef(0x15e)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x37fad1=await warehouse[_0x3391ef(0x149)]([{'$match':{'name':_0x576232,'room':_0x22a48a}},{'$unwind':_0x3391ef(0x15e)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]),_0x30f672[_0x3391ef(0x143)](_0x37fad1);}),router['post'](a0_0x1be702(0x172),async(_0x5bfee9,_0x5b29dd)=>{var _0x525912=a0_0x1be702;const {warehouseNew:_0x26b8e0,rooms:_0x1e89cc,Type:_0x17c8fd,process_cat:_0x444c64,room_cat:_0x5ab398}=_0x5bfee9['body'],_0x3c3e27=await product[_0x525912(0x16a)]();_0x5b29dd[_0x525912(0x143)](_0x3c3e27);}),module['exports']=router;function a0_0x1068(){var _0x5b5e21=['warehouse','111','/view/warehouse/:id','1419620QjBjUd','email','/view/product/:id','Router','Spanish','params','$product_details','errors','6IZjzOB','post','Arabic','log','../models/all_models','name','products','13925880EuSWez','$name','$product_docs.sku','find','8456695yODqve','role_data','Chinese','French','/Reports','Portuguese','body','/Reports_product','All','status','9PGEQQM','render','2024724bCHTSo','$product_details.product_name','get','Portuguese\x20(BR)','2PpZUcr','English','product_docs','2945820BDrbzu','../middleware/auth','11153093nGohdV','German','language','$product_docs.brand','$product_docs','$product_details.product_stock','Arabic\x20(ae)','json','/view','product_details.bin_name','stock_report','$product_docs.unit','master','aggregate','product_data','user','success','express','English\x20(US)','89260390UCYSlf','../public/language/languages.json','Enabled','Hindi','product_details.product_name','product_details.rak_name'];a0_0x1068=function(){return _0x5b5e21;};return a0_0x1068();}