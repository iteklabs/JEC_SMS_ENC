const a0_0x18e656=a0_0x3c1a;(function(_0x3e175e,_0x13f3f9){const _0x3ab8c1=a0_0x3c1a,_0xa938c0=_0x3e175e();while(!![]){try{const _0x220ac2=parseInt(_0x3ab8c1(0x1e3))/0x1+-parseInt(_0x3ab8c1(0x1f1))/0x2*(parseInt(_0x3ab8c1(0x1d6))/0x3)+parseInt(_0x3ab8c1(0x1ee))/0x4*(parseInt(_0x3ab8c1(0x1ca))/0x5)+parseInt(_0x3ab8c1(0x1de))/0x6*(-parseInt(_0x3ab8c1(0x1c2))/0x7)+parseInt(_0x3ab8c1(0x1dc))/0x8*(-parseInt(_0x3ab8c1(0x1e2))/0x9)+parseInt(_0x3ab8c1(0x1d0))/0xa+-parseInt(_0x3ab8c1(0x1dd))/0xb*(-parseInt(_0x3ab8c1(0x1c4))/0xc);if(_0x220ac2===_0x13f3f9)break;else _0xa938c0['push'](_0xa938c0['shift']());}catch(_0x53bff0){_0xa938c0['push'](_0xa938c0['shift']());}}}(a0_0x304a,0xdb10f));const express=require(a0_0x18e656(0x1c3)),app=express(),router=express['Router'](),auth=require(a0_0x18e656(0x1e8)),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0x18e656(0x1df)),users=require('../public/language/languages.json'),nodemailer=require(a0_0x18e656(0x1eb));function a0_0x304a(){const _0x3fc3f0=['870MtlIlp','../models/all_models','Hindi','log','7947hVPuqn','617224hfVLVM','English\x20(US)','language','Arabic','German','../middleware/auth','Spanish','findOne','nodemailer','Portuguese','flash','12jXYWDm','post','find','24mhxgWA','edit_approvals_view','/outgoing_finished','Adjustment\x20Finished\x20Goods','json','isAllowEdit','success','errors','adjf','trf','Transfer\x20Raw\x20materials','save','email','Transfer\x20Finished\x20Goods','trff','user','Adjustment\x20Raw\x20materials','86002JEDSAl','express','4863252GNwlEc','message','approvals_view','body','/transfer','/adjustment_finished','273505OMkHXf','/transfer_finished','adj','English','False','Portuguese\x20(BR)','13362570UZbkXq','outF','invoice','get','render','French','181305KoVJlV','Chinese','exports','/adjustment','out','Arabic\x20(ae)','6704bhnydY','55YDntBN'];a0_0x304a=function(){return _0x3fc3f0;};return a0_0x304a();}function a0_0x3c1a(_0x4b016e,_0x24b566){const _0x304abc=a0_0x304a();return a0_0x3c1a=function(_0x3c1a90,_0xc11d14){_0x3c1a90=_0x3c1a90-0x1b5;let _0x54f825=_0x304abc[_0x3c1a90];return _0x54f825;},a0_0x3c1a(_0x4b016e,_0x24b566);}router[a0_0x18e656(0x1d3)]('/view',auth,async(_0x4a9770,_0x51aa9c)=>{const _0x42d51e=a0_0x18e656;try{const {username:_0x3dc348,email:_0x13f0c9,role:_0x4227f4}=_0x4a9770[_0x42d51e(0x1c0)],_0x363edb=_0x4a9770[_0x42d51e(0x1c0)],_0x106e09=await profile['findOne']({'email':_0x363edb[_0x42d51e(0x1bd)]}),_0x5a2801=await master_shop[_0x42d51e(0x1f0)](),_0x240163=await sales[_0x42d51e(0x1f0)]({'finalize':'False'}),_0x10bd90=await adjustment[_0x42d51e(0x1f0)]({'finalize':'False'}),_0x5c9d0a=await transfers[_0x42d51e(0x1f0)]({'finalize':'False'});if(_0x5a2801[0x0][_0x42d51e(0x1e5)]=='English\x20(US)')var _0x5750f9=users[_0x42d51e(0x1cd)];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]==_0x42d51e(0x1e0))var _0x5750f9=users[_0x42d51e(0x1e0)];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]==_0x42d51e(0x1e7))var _0x5750f9=users[_0x42d51e(0x1e7)];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]==_0x42d51e(0x1e9))var _0x5750f9=users[_0x42d51e(0x1e9)];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]==_0x42d51e(0x1d5))var _0x5750f9=users[_0x42d51e(0x1d5)];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]=='Portuguese\x20(BR)')var _0x5750f9=users['Portuguese'];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]==_0x42d51e(0x1d7))var _0x5750f9=users[_0x42d51e(0x1d7)];else{if(_0x5a2801[0x0][_0x42d51e(0x1e5)]==_0x42d51e(0x1db))var _0x5750f9=users['Arabic'];}}}}}}}_0x51aa9c[_0x42d51e(0x1d4)](_0x42d51e(0x1f2),{'success':_0x4a9770[_0x42d51e(0x1ed)](_0x42d51e(0x1b7)),'errors':_0x4a9770['flash']('errors'),'role':_0x363edb,'profile':_0x106e09,'master_shop':_0x5a2801,'language':_0x5750f9,'sales':_0x240163,'adjustment':_0x10bd90,'transfer':_0x5c9d0a});}catch(_0x1cd098){console['log'](_0x1cd098);}}),router[a0_0x18e656(0x1d3)]('/outgoing',auth,async(_0x37e150,_0x21b540)=>{const _0x1d4549=a0_0x18e656;try{const {username:_0x36c97f,email:_0x2dca72,role:_0x5d919a}=_0x37e150['user'],_0x1dd9cb=_0x37e150[_0x1d4549(0x1c0)],_0x14d485=await profile[_0x1d4549(0x1ea)]({'email':_0x1dd9cb[_0x1d4549(0x1bd)]}),_0x4edc5d=await master_shop[_0x1d4549(0x1f0)](),_0x5c18b4=await sales[_0x1d4549(0x1f0)]({'finalize':_0x1d4549(0x1ce)}),_0x3ac8ef={'name':'Outgoing\x20Raw\x20materials','code':_0x1d4549(0x1da)};if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]=='English\x20(US)')var _0x2c79de=users['English'];else{if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]==_0x1d4549(0x1e0))var _0x2c79de=users[_0x1d4549(0x1e0)];else{if(_0x4edc5d[0x0]['language']==_0x1d4549(0x1e7))var _0x2c79de=users[_0x1d4549(0x1e7)];else{if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]==_0x1d4549(0x1e9))var _0x2c79de=users[_0x1d4549(0x1e9)];else{if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]==_0x1d4549(0x1d5))var _0x2c79de=users[_0x1d4549(0x1d5)];else{if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]==_0x1d4549(0x1cf))var _0x2c79de=users['Portuguese'];else{if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]==_0x1d4549(0x1d7))var _0x2c79de=users[_0x1d4549(0x1d7)];else{if(_0x4edc5d[0x0][_0x1d4549(0x1e5)]=='Arabic\x20(ae)')var _0x2c79de=users[_0x1d4549(0x1e6)];}}}}}}}_0x21b540['render'](_0x1d4549(0x1c6),{'success':_0x37e150[_0x1d4549(0x1ed)](_0x1d4549(0x1b7)),'errors':_0x37e150[_0x1d4549(0x1ed)]('errors'),'role':_0x1dd9cb,'profile':_0x14d485,'master_shop':_0x4edc5d,'language':_0x2c79de,'data':_0x5c18b4,'titleName':_0x3ac8ef});}catch(_0x1992f2){console['log'](_0x1992f2);}}),router[a0_0x18e656(0x1ef)]('/outgoing',auth,async(_0x1aa831,_0x366df6)=>{const _0x33d4cb=a0_0x18e656;try{const {id:_0x5eb84e,invoice:_0x3d837a,value:_0x4d5ff5}=_0x1aa831[_0x33d4cb(0x1c7)],_0x2f4eb8=await sales[_0x33d4cb(0x1ea)]({'_id':_0x5eb84e,'invoice':_0x3d837a});_0x2f4eb8['isAllowEdit']=_0x4d5ff5;const _0x808533=await _0x2f4eb8['save']();_0x366df6[_0x33d4cb(0x1b5)]({'status':0xc8,'data':{'BoolData':_0x808533[_0x33d4cb(0x1b6)],'InvoiceNum':_0x808533[_0x33d4cb(0x1d2)]}});}catch(_0x22d75d){return console[_0x33d4cb(0x1e1)](_0x22d75d),{'status':0x194,'data':_0x22d75d['message']};}}),router[a0_0x18e656(0x1d3)]('/adjustment',auth,async(_0x343a4a,_0x574e8f)=>{const _0x458f4b=a0_0x18e656;try{const {username:_0x1e1996,email:_0x564f9e,role:_0x2e6175}=_0x343a4a[_0x458f4b(0x1c0)],_0xfb8efe=_0x343a4a[_0x458f4b(0x1c0)],_0x2cacee=await profile[_0x458f4b(0x1ea)]({'email':_0xfb8efe[_0x458f4b(0x1bd)]}),_0x4cfe1c=await master_shop[_0x458f4b(0x1f0)](),_0x3d537f=await adjustment[_0x458f4b(0x1f0)]({'finalize':_0x458f4b(0x1ce)}),_0x126e85={'name':_0x458f4b(0x1c1),'code':_0x458f4b(0x1cc)};if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]==_0x458f4b(0x1e4))var _0x470dcb=users[_0x458f4b(0x1cd)];else{if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]==_0x458f4b(0x1e0))var _0x470dcb=users[_0x458f4b(0x1e0)];else{if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]=='German')var _0x470dcb=users[_0x458f4b(0x1e7)];else{if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]==_0x458f4b(0x1e9))var _0x470dcb=users[_0x458f4b(0x1e9)];else{if(_0x4cfe1c[0x0]['language']==_0x458f4b(0x1d5))var _0x470dcb=users[_0x458f4b(0x1d5)];else{if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]==_0x458f4b(0x1cf))var _0x470dcb=users[_0x458f4b(0x1ec)];else{if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]==_0x458f4b(0x1d7))var _0x470dcb=users['Chinese'];else{if(_0x4cfe1c[0x0][_0x458f4b(0x1e5)]=='Arabic\x20(ae)')var _0x470dcb=users['Arabic'];}}}}}}}_0x574e8f[_0x458f4b(0x1d4)](_0x458f4b(0x1c6),{'success':_0x343a4a['flash'](_0x458f4b(0x1b7)),'errors':_0x343a4a[_0x458f4b(0x1ed)](_0x458f4b(0x1b8)),'role':_0xfb8efe,'profile':_0x2cacee,'master_shop':_0x4cfe1c,'language':_0x470dcb,'data':_0x3d537f,'titleName':_0x126e85});}catch(_0x1bd02d){console[_0x458f4b(0x1e1)](_0x1bd02d);}}),router[a0_0x18e656(0x1ef)](a0_0x18e656(0x1d9),auth,async(_0x901e57,_0x4cf913)=>{const _0x19aff5=a0_0x18e656;try{const {id:_0x4b5b4c,invoice:_0x629f4e,value:_0x2a80fa}=_0x901e57['body'],_0x399d33=await adjustment[_0x19aff5(0x1ea)]({'_id':_0x4b5b4c,'invoice':_0x629f4e});_0x399d33['isAllowEdit']=_0x2a80fa;const _0x1f1fe7=await _0x399d33[_0x19aff5(0x1bc)]();_0x4cf913['json']({'status':0xc8,'data':{'BoolData':_0x1f1fe7[_0x19aff5(0x1b6)],'InvoiceNum':_0x1f1fe7[_0x19aff5(0x1d2)]}});}catch(_0x13c808){return{'status':0x194,'data':_0x13c808[_0x19aff5(0x1c5)]};}}),router['get']('/transfer',auth,async(_0x462a4c,_0x508576)=>{const _0x5862e2=a0_0x18e656;try{const {username:_0x27521e,email:_0x4fa4b6,role:_0x47fa47}=_0x462a4c[_0x5862e2(0x1c0)],_0x27c9a0=_0x462a4c[_0x5862e2(0x1c0)],_0x3acaca=await profile['findOne']({'email':_0x27c9a0[_0x5862e2(0x1bd)]}),_0x3976bd=await master_shop[_0x5862e2(0x1f0)](),_0x3d06c2=await transfers[_0x5862e2(0x1f0)]({'finalize':_0x5862e2(0x1ce)}),_0x298ede={'name':_0x5862e2(0x1bb),'code':_0x5862e2(0x1ba)};if(_0x3976bd[0x0][_0x5862e2(0x1e5)]==_0x5862e2(0x1e4))var _0x41e295=users[_0x5862e2(0x1cd)];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]==_0x5862e2(0x1e0))var _0x41e295=users[_0x5862e2(0x1e0)];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]==_0x5862e2(0x1e7))var _0x41e295=users[_0x5862e2(0x1e7)];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]==_0x5862e2(0x1e9))var _0x41e295=users[_0x5862e2(0x1e9)];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]=='French')var _0x41e295=users[_0x5862e2(0x1d5)];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]==_0x5862e2(0x1cf))var _0x41e295=users[_0x5862e2(0x1ec)];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]=='Chinese')var _0x41e295=users['Chinese'];else{if(_0x3976bd[0x0][_0x5862e2(0x1e5)]==_0x5862e2(0x1db))var _0x41e295=users[_0x5862e2(0x1e6)];}}}}}}}_0x508576[_0x5862e2(0x1d4)](_0x5862e2(0x1c6),{'success':_0x462a4c[_0x5862e2(0x1ed)]('success'),'errors':_0x462a4c['flash'](_0x5862e2(0x1b8)),'role':_0x27c9a0,'profile':_0x3acaca,'master_shop':_0x3976bd,'language':_0x41e295,'data':_0x3d06c2,'titleName':_0x298ede});}catch(_0x55ddb1){console[_0x5862e2(0x1e1)](_0x55ddb1);}}),router[a0_0x18e656(0x1ef)](a0_0x18e656(0x1c8),auth,async(_0x5586ff,_0x8c6e9d)=>{const _0x473cd4=a0_0x18e656;try{const {id:_0x2b2593,invoice:_0x5cc50e,value:_0x3396aa}=_0x5586ff[_0x473cd4(0x1c7)],_0x472bca=await transfers[_0x473cd4(0x1ea)]({'_id':_0x2b2593,'invoice':_0x5cc50e});_0x472bca[_0x473cd4(0x1b6)]=_0x3396aa;const _0x31417d=await _0x472bca[_0x473cd4(0x1bc)]();_0x8c6e9d[_0x473cd4(0x1b5)]({'status':0xc8,'data':{'BoolData':_0x31417d[_0x473cd4(0x1b6)],'InvoiceNum':_0x31417d[_0x473cd4(0x1d2)]}});}catch(_0x31af40){return{'status':0x194,'data':_0x31af40[_0x473cd4(0x1c5)]};}}),router[a0_0x18e656(0x1d3)](a0_0x18e656(0x1f3),auth,async(_0x558a2d,_0x109a57)=>{const _0x3d3c4f=a0_0x18e656;try{const {username:_0x5ed36a,email:_0x7d73d8,role:_0x285021}=_0x558a2d[_0x3d3c4f(0x1c0)],_0xf319ca=_0x558a2d[_0x3d3c4f(0x1c0)],_0x1d0721=await profile[_0x3d3c4f(0x1ea)]({'email':_0xf319ca['email']}),_0x198dc8=await master_shop['find'](),_0x27f9f4=await sales_finished[_0x3d3c4f(0x1f0)]({'finalize':'False'}),_0x3f669b={'name':'Outgoing\x20Finished\x20Goods','code':_0x3d3c4f(0x1d1)};if(_0x198dc8[0x0][_0x3d3c4f(0x1e5)]==_0x3d3c4f(0x1e4))var _0x2427af=users[_0x3d3c4f(0x1cd)];else{if(_0x198dc8[0x0][_0x3d3c4f(0x1e5)]==_0x3d3c4f(0x1e0))var _0x2427af=users[_0x3d3c4f(0x1e0)];else{if(_0x198dc8[0x0]['language']==_0x3d3c4f(0x1e7))var _0x2427af=users[_0x3d3c4f(0x1e7)];else{if(_0x198dc8[0x0][_0x3d3c4f(0x1e5)]=='Spanish')var _0x2427af=users[_0x3d3c4f(0x1e9)];else{if(_0x198dc8[0x0][_0x3d3c4f(0x1e5)]==_0x3d3c4f(0x1d5))var _0x2427af=users['French'];else{if(_0x198dc8[0x0]['language']==_0x3d3c4f(0x1cf))var _0x2427af=users[_0x3d3c4f(0x1ec)];else{if(_0x198dc8[0x0][_0x3d3c4f(0x1e5)]==_0x3d3c4f(0x1d7))var _0x2427af=users[_0x3d3c4f(0x1d7)];else{if(_0x198dc8[0x0]['language']=='Arabic\x20(ae)')var _0x2427af=users[_0x3d3c4f(0x1e6)];}}}}}}}_0x109a57[_0x3d3c4f(0x1d4)](_0x3d3c4f(0x1c6),{'success':_0x558a2d['flash']('success'),'errors':_0x558a2d[_0x3d3c4f(0x1ed)](_0x3d3c4f(0x1b8)),'role':_0xf319ca,'profile':_0x1d0721,'master_shop':_0x198dc8,'language':_0x2427af,'data':_0x27f9f4,'titleName':_0x3f669b});}catch(_0x3d2d36){console[_0x3d3c4f(0x1e1)](_0x3d2d36);}}),router[a0_0x18e656(0x1ef)](a0_0x18e656(0x1f3),auth,async(_0x53b33f,_0x128056)=>{const _0x21bb38=a0_0x18e656;try{const {id:_0x87b46e,invoice:_0xbaf687,value:_0x1f6a5d}=_0x53b33f[_0x21bb38(0x1c7)],_0x372b2f=await sales_finished[_0x21bb38(0x1ea)]({'_id':_0x87b46e,'invoice':_0xbaf687});_0x372b2f[_0x21bb38(0x1b6)]=_0x1f6a5d;const _0x54bef2=await _0x372b2f[_0x21bb38(0x1bc)]();_0x128056['json']({'status':0xc8,'data':{'BoolData':_0x54bef2[_0x21bb38(0x1b6)],'InvoiceNum':_0x54bef2[_0x21bb38(0x1d2)]}});}catch(_0xfb9bfb){return console[_0x21bb38(0x1e1)](_0xfb9bfb),{'status':0x194,'data':_0xfb9bfb[_0x21bb38(0x1c5)]};}}),router[a0_0x18e656(0x1d3)](a0_0x18e656(0x1c9),auth,async(_0x2744e9,_0x2df175)=>{const _0x230150=a0_0x18e656;try{const {username:_0x1e71e3,email:_0x4efd9f,role:_0x2326af}=_0x2744e9[_0x230150(0x1c0)],_0x3cdb30=_0x2744e9[_0x230150(0x1c0)],_0x130e17=await profile[_0x230150(0x1ea)]({'email':_0x3cdb30[_0x230150(0x1bd)]}),_0x274fe3=await master_shop['find'](),_0x47f201=await adjustment_finished[_0x230150(0x1f0)]({'finalize':_0x230150(0x1ce)}),_0x39545c={'name':_0x230150(0x1f4),'code':_0x230150(0x1b9)};if(_0x274fe3[0x0]['language']==_0x230150(0x1e4))var _0x349f64=users['English'];else{if(_0x274fe3[0x0]['language']==_0x230150(0x1e0))var _0x349f64=users[_0x230150(0x1e0)];else{if(_0x274fe3[0x0]['language']==_0x230150(0x1e7))var _0x349f64=users[_0x230150(0x1e7)];else{if(_0x274fe3[0x0]['language']=='Spanish')var _0x349f64=users['Spanish'];else{if(_0x274fe3[0x0][_0x230150(0x1e5)]==_0x230150(0x1d5))var _0x349f64=users[_0x230150(0x1d5)];else{if(_0x274fe3[0x0][_0x230150(0x1e5)]=='Portuguese\x20(BR)')var _0x349f64=users['Portuguese'];else{if(_0x274fe3[0x0][_0x230150(0x1e5)]==_0x230150(0x1d7))var _0x349f64=users['Chinese'];else{if(_0x274fe3[0x0]['language']=='Arabic\x20(ae)')var _0x349f64=users['Arabic'];}}}}}}}_0x2df175[_0x230150(0x1d4)](_0x230150(0x1c6),{'success':_0x2744e9['flash'](_0x230150(0x1b7)),'errors':_0x2744e9[_0x230150(0x1ed)](_0x230150(0x1b8)),'role':_0x3cdb30,'profile':_0x130e17,'master_shop':_0x274fe3,'language':_0x349f64,'data':_0x47f201,'titleName':_0x39545c});}catch(_0x31a5e5){console[_0x230150(0x1e1)](_0x31a5e5);}}),router[a0_0x18e656(0x1ef)](a0_0x18e656(0x1c9),auth,async(_0x2f3c47,_0x2447ae)=>{const _0x41deb7=a0_0x18e656;try{const {id:_0x5e63cd,invoice:_0x2dd237,value:_0x4cef58}=_0x2f3c47[_0x41deb7(0x1c7)],_0x31d966=await adjustment_finished[_0x41deb7(0x1ea)]({'_id':_0x5e63cd,'invoice':_0x2dd237});_0x31d966[_0x41deb7(0x1b6)]=_0x4cef58;const _0x5823f9=await _0x31d966[_0x41deb7(0x1bc)]();_0x2447ae['json']({'status':0xc8,'data':{'BoolData':_0x5823f9[_0x41deb7(0x1b6)],'InvoiceNum':_0x5823f9['invoice']}});}catch(_0x5786c8){return{'status':0x194,'data':_0x5786c8['message']};}}),router[a0_0x18e656(0x1d3)](a0_0x18e656(0x1cb),auth,async(_0x522b0a,_0x812fd6)=>{const _0xe6a847=a0_0x18e656;try{const {username:_0x238309,email:_0x947050,role:_0x4bb563}=_0x522b0a['user'],_0x3ae84d=_0x522b0a[_0xe6a847(0x1c0)],_0x3423ff=await profile[_0xe6a847(0x1ea)]({'email':_0x3ae84d[_0xe6a847(0x1bd)]}),_0x543d0f=await master_shop[_0xe6a847(0x1f0)](),_0xc423b9=await transfers_finished['find']({'finalize':_0xe6a847(0x1ce)}),_0x11dcce={'name':_0xe6a847(0x1be),'code':_0xe6a847(0x1bf)};if(_0x543d0f[0x0]['language']==_0xe6a847(0x1e4))var _0x48a892=users['English'];else{if(_0x543d0f[0x0]['language']==_0xe6a847(0x1e0))var _0x48a892=users[_0xe6a847(0x1e0)];else{if(_0x543d0f[0x0][_0xe6a847(0x1e5)]==_0xe6a847(0x1e7))var _0x48a892=users[_0xe6a847(0x1e7)];else{if(_0x543d0f[0x0]['language']==_0xe6a847(0x1e9))var _0x48a892=users[_0xe6a847(0x1e9)];else{if(_0x543d0f[0x0][_0xe6a847(0x1e5)]=='French')var _0x48a892=users[_0xe6a847(0x1d5)];else{if(_0x543d0f[0x0][_0xe6a847(0x1e5)]=='Portuguese\x20(BR)')var _0x48a892=users[_0xe6a847(0x1ec)];else{if(_0x543d0f[0x0][_0xe6a847(0x1e5)]==_0xe6a847(0x1d7))var _0x48a892=users[_0xe6a847(0x1d7)];else{if(_0x543d0f[0x0]['language']==_0xe6a847(0x1db))var _0x48a892=users[_0xe6a847(0x1e6)];}}}}}}}_0x812fd6[_0xe6a847(0x1d4)](_0xe6a847(0x1c6),{'success':_0x522b0a[_0xe6a847(0x1ed)]('success'),'errors':_0x522b0a[_0xe6a847(0x1ed)](_0xe6a847(0x1b8)),'role':_0x3ae84d,'profile':_0x3423ff,'master_shop':_0x543d0f,'language':_0x48a892,'data':_0xc423b9,'titleName':_0x11dcce});}catch(_0x32f28d){console[_0xe6a847(0x1e1)](_0x32f28d);}}),router[a0_0x18e656(0x1ef)]('/transfer_finished',auth,async(_0x5dea72,_0x41142c)=>{const _0x63c1fd=a0_0x18e656;try{const {id:_0x5218a8,invoice:_0x561ea1,value:_0x351712}=_0x5dea72[_0x63c1fd(0x1c7)],_0x52540a=await transfers_finished[_0x63c1fd(0x1ea)]({'_id':_0x5218a8,'invoice':_0x561ea1});_0x52540a[_0x63c1fd(0x1b6)]=_0x351712;const _0x103a13=await _0x52540a[_0x63c1fd(0x1bc)]();_0x41142c[_0x63c1fd(0x1b5)]({'status':0xc8,'data':{'BoolData':_0x103a13[_0x63c1fd(0x1b6)],'InvoiceNum':_0x103a13['invoice']}});}catch(_0xa60b55){return{'status':0x194,'data':_0xa60b55[_0x63c1fd(0x1c5)]};}}),module[a0_0x18e656(0x1d8)]=router;