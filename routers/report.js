function a0_0x5c49(){var _0x433eac=['log','310070JLbLvx','expense_report','find','email','/customer','583008TqBwkc','user','$return_product.product_name','errors','/adjustment','findOne','662886QRdPNq','flash','language','Portuguese','5835940LtcvID','French','24GfRroJ','German','sales_report','render','supplier_report','../middleware/auth','9qyYzNj','/transfer','Hindi','/expense','$sale_product.product_name','413042klgDYB','../models/all_models','2946852FdWRWF','/sale','Chinese','Arabic','product_report','get','purchases\x20report','sales_return_report','English','master','/purchases','Spanish','success','transfer_report','Portuguese\x20(BR)','6084asnbiT','English\x20(US)','Arabic\x20(ae)','purchases_return_report','aggregate','../public/language/languages.json','express','/supplier','$return_sale.product_name','1760UbGSRX','/purchase_return'];a0_0x5c49=function(){return _0x433eac;};return a0_0x5c49();}var a0_0x133874=a0_0x376e;function a0_0x376e(_0x3bd2ab,_0x49db3f){var _0x5c499f=a0_0x5c49();return a0_0x376e=function(_0x376e19,_0x496e15){_0x376e19=_0x376e19-0x1bf;var _0x2b352e=_0x5c499f[_0x376e19];return _0x2b352e;},a0_0x376e(_0x3bd2ab,_0x49db3f);}(function(_0xef8327,_0x410d63){var _0x53baad=a0_0x376e,_0x171232=_0xef8327();while(!![]){try{var _0x2814dc=-parseInt(_0x53baad(0x1e7))/0x1+parseInt(_0x53baad(0x1cb))/0x2+parseInt(_0x53baad(0x1e2))/0x3*(-parseInt(_0x53baad(0x1d0))/0x4)+parseInt(_0x53baad(0x1c8))/0x5*(parseInt(_0x53baad(0x1bf))/0x6)+parseInt(_0x53baad(0x1d6))/0x7*(-parseInt(_0x53baad(0x1dc))/0x8)+parseInt(_0x53baad(0x1e9))/0x9+parseInt(_0x53baad(0x1da))/0xa;if(_0x2814dc===_0x410d63)break;else _0x171232['push'](_0x171232['shift']());}catch(_0x2cc76e){_0x171232['push'](_0x171232['shift']());}}}(a0_0x5c49,0x46751));const express=require(a0_0x133874(0x1c5)),app=express(),router=express['Router'](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x133874(0x1e8)),auth=require(a0_0x133874(0x1e1)),users=require(a0_0x133874(0x1c4));router['get']('/product',auth,async(_0x26c3dd,_0x4424f1)=>{var _0x56db8d=a0_0x133874;try{const {username:_0x19796a,email:_0x21e08e,role:_0x377276}=_0x26c3dd[_0x56db8d(0x1d1)],_0x412762=_0x26c3dd[_0x56db8d(0x1d1)],_0x430ce0=await profile['findOne']({'email':_0x412762['email']}),_0x577d33=await master_shop[_0x56db8d(0x1cd)]();console[_0x56db8d(0x1ca)](_0x56db8d(0x1f2),_0x577d33);const _0x25249e=await product['find']();console[_0x56db8d(0x1ca)](_0x25249e);if(_0x577d33[0x0][_0x56db8d(0x1d8)]==_0x56db8d(0x1c0)){var _0x2cc996=users['English'];console[_0x56db8d(0x1ca)](_0x2cc996);}else{if(_0x577d33[0x0]['language']=='Hindi')var _0x2cc996=users[_0x56db8d(0x1e4)];else{if(_0x577d33[0x0][_0x56db8d(0x1d8)]==_0x56db8d(0x1dd))var _0x2cc996=users[_0x56db8d(0x1dd)];else{if(_0x577d33[0x0][_0x56db8d(0x1d8)]==_0x56db8d(0x1f4))var _0x2cc996=users[_0x56db8d(0x1f4)];else{if(_0x577d33[0x0]['language']==_0x56db8d(0x1db))var _0x2cc996=users[_0x56db8d(0x1db)];else{if(_0x577d33[0x0]['language']==_0x56db8d(0x1f7))var _0x2cc996=users[_0x56db8d(0x1d9)];else{if(_0x577d33[0x0][_0x56db8d(0x1d8)]==_0x56db8d(0x1eb))var _0x2cc996=users[_0x56db8d(0x1eb)];else{if(_0x577d33[0x0][_0x56db8d(0x1d8)]==_0x56db8d(0x1c1))var _0x2cc996=users['Arabic'];}}}}}}}_0x4424f1[_0x56db8d(0x1df)](_0x56db8d(0x1ed),{'success':_0x26c3dd[_0x56db8d(0x1d7)](_0x56db8d(0x1f5)),'errors':_0x26c3dd[_0x56db8d(0x1d7)](_0x56db8d(0x1d3)),'role':_0x412762,'profile':_0x430ce0,'master_shop':_0x577d33,'alldata':_0x25249e,'language':_0x2cc996});}catch(_0x1b6b2f){console['log'](_0x1b6b2f);}}),router[a0_0x133874(0x1ee)](a0_0x133874(0x1cf),auth,async(_0x1decdb,_0x359d24)=>{var _0x54a04d=a0_0x133874;try{const {username:_0xbb7650,email:_0x522630,role:_0xc223c6}=_0x1decdb[_0x54a04d(0x1d1)],_0x41f433=_0x1decdb[_0x54a04d(0x1d1)],_0x39de01=await profile[_0x54a04d(0x1d5)]({'email':_0x41f433[_0x54a04d(0x1ce)]}),_0x4916d7=await master_shop[_0x54a04d(0x1cd)]();console[_0x54a04d(0x1ca)](_0x54a04d(0x1f2),_0x4916d7);const _0x536c27=await customer[_0x54a04d(0x1cd)]();console['log'](_0x536c27);if(_0x4916d7[0x0][_0x54a04d(0x1d8)]==_0x54a04d(0x1c0)){var _0x11551d=users[_0x54a04d(0x1f1)];console[_0x54a04d(0x1ca)](_0x11551d);}else{if(_0x4916d7[0x0]['language']=='Hindi')var _0x11551d=users['Hindi'];else{if(_0x4916d7[0x0][_0x54a04d(0x1d8)]==_0x54a04d(0x1dd))var _0x11551d=users[_0x54a04d(0x1dd)];else{if(_0x4916d7[0x0][_0x54a04d(0x1d8)]==_0x54a04d(0x1f4))var _0x11551d=users[_0x54a04d(0x1f4)];else{if(_0x4916d7[0x0][_0x54a04d(0x1d8)]==_0x54a04d(0x1db))var _0x11551d=users[_0x54a04d(0x1db)];else{if(_0x4916d7[0x0][_0x54a04d(0x1d8)]==_0x54a04d(0x1f7))var _0x11551d=users[_0x54a04d(0x1d9)];else{if(_0x4916d7[0x0][_0x54a04d(0x1d8)]==_0x54a04d(0x1eb))var _0x11551d=users[_0x54a04d(0x1eb)];else{if(_0x4916d7[0x0][_0x54a04d(0x1d8)]=='Arabic\x20(ae)')var _0x11551d=users[_0x54a04d(0x1ec)];}}}}}}}_0x359d24[_0x54a04d(0x1df)]('customer_report',{'success':_0x1decdb[_0x54a04d(0x1d7)]('success'),'errors':_0x1decdb['flash'](_0x54a04d(0x1d3)),'role':_0x41f433,'profile':_0x39de01,'master_shop':_0x4916d7,'alldata':_0x536c27,'language':_0x11551d});}catch(_0x3b10e2){console[_0x54a04d(0x1ca)](_0x3b10e2);}}),router[a0_0x133874(0x1ee)](a0_0x133874(0x1c6),auth,async(_0x8f608c,_0x1a1e06)=>{var _0x279361=a0_0x133874;try{const {username:_0x17032c,email:_0x7776ef,role:_0x381229}=_0x8f608c[_0x279361(0x1d1)],_0x15c4f2=_0x8f608c['user'],_0x11310d=await profile[_0x279361(0x1d5)]({'email':_0x15c4f2[_0x279361(0x1ce)]}),_0x317132=await master_shop[_0x279361(0x1cd)]();console['log'](_0x279361(0x1f2),_0x317132);const _0x23d545=await suppliers[_0x279361(0x1cd)]();console[_0x279361(0x1ca)](_0x23d545);if(_0x317132[0x0][_0x279361(0x1d8)]==_0x279361(0x1c0)){var _0x247e15=users[_0x279361(0x1f1)];console[_0x279361(0x1ca)](_0x247e15);}else{if(_0x317132[0x0][_0x279361(0x1d8)]==_0x279361(0x1e4))var _0x247e15=users[_0x279361(0x1e4)];else{if(_0x317132[0x0]['language']==_0x279361(0x1dd))var _0x247e15=users[_0x279361(0x1dd)];else{if(_0x317132[0x0][_0x279361(0x1d8)]==_0x279361(0x1f4))var _0x247e15=users[_0x279361(0x1f4)];else{if(_0x317132[0x0][_0x279361(0x1d8)]==_0x279361(0x1db))var _0x247e15=users['French'];else{if(_0x317132[0x0][_0x279361(0x1d8)]=='Portuguese\x20(BR)')var _0x247e15=users[_0x279361(0x1d9)];else{if(_0x317132[0x0][_0x279361(0x1d8)]==_0x279361(0x1eb))var _0x247e15=users[_0x279361(0x1eb)];else{if(_0x317132[0x0][_0x279361(0x1d8)]==_0x279361(0x1c1))var _0x247e15=users[_0x279361(0x1ec)];}}}}}}}_0x1a1e06[_0x279361(0x1df)](_0x279361(0x1e0),{'success':_0x8f608c[_0x279361(0x1d7)](_0x279361(0x1f5)),'errors':_0x8f608c[_0x279361(0x1d7)](_0x279361(0x1d3)),'role':_0x15c4f2,'profile':_0x11310d,'master_shop':_0x317132,'alldata':_0x23d545,'language':_0x247e15});}catch(_0x4b3017){console[_0x279361(0x1ca)](_0x4b3017);}}),router['get'](a0_0x133874(0x1f3),auth,async(_0x114a77,_0x38ae76)=>{var _0x21dd8a=a0_0x133874;try{const {username:_0x43f6bd,email:_0x2bdf6b,role:_0x4ed47e}=_0x114a77['user'],_0x8db8a7=_0x114a77[_0x21dd8a(0x1d1)],_0x350da8=await profile[_0x21dd8a(0x1d5)]({'email':_0x8db8a7[_0x21dd8a(0x1ce)]}),_0x5ca5e1=await master_shop[_0x21dd8a(0x1cd)]();console[_0x21dd8a(0x1ca)](_0x21dd8a(0x1f2),_0x5ca5e1);const _0x1a8090=await purchases[_0x21dd8a(0x1c3)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':'$product.product_name','payable':0x1}}]);console['log'](_0x21dd8a(0x1ef),_0x1a8090);if(_0x5ca5e1[0x0]['language']==_0x21dd8a(0x1c0)){var _0x45bf0a=users[_0x21dd8a(0x1f1)];console[_0x21dd8a(0x1ca)](_0x45bf0a);}else{if(_0x5ca5e1[0x0][_0x21dd8a(0x1d8)]==_0x21dd8a(0x1e4))var _0x45bf0a=users['Hindi'];else{if(_0x5ca5e1[0x0][_0x21dd8a(0x1d8)]==_0x21dd8a(0x1dd))var _0x45bf0a=users[_0x21dd8a(0x1dd)];else{if(_0x5ca5e1[0x0][_0x21dd8a(0x1d8)]==_0x21dd8a(0x1f4))var _0x45bf0a=users[_0x21dd8a(0x1f4)];else{if(_0x5ca5e1[0x0][_0x21dd8a(0x1d8)]==_0x21dd8a(0x1db))var _0x45bf0a=users[_0x21dd8a(0x1db)];else{if(_0x5ca5e1[0x0][_0x21dd8a(0x1d8)]==_0x21dd8a(0x1f7))var _0x45bf0a=users[_0x21dd8a(0x1d9)];else{if(_0x5ca5e1[0x0][_0x21dd8a(0x1d8)]==_0x21dd8a(0x1eb))var _0x45bf0a=users['Chinese'];else{if(_0x5ca5e1[0x0]['language']==_0x21dd8a(0x1c1))var _0x45bf0a=users[_0x21dd8a(0x1ec)];}}}}}}}_0x38ae76[_0x21dd8a(0x1df)]('purchases_report',{'success':_0x114a77[_0x21dd8a(0x1d7)](_0x21dd8a(0x1f5)),'errors':_0x114a77[_0x21dd8a(0x1d7)](_0x21dd8a(0x1d3)),'role':_0x8db8a7,'profile':_0x350da8,'master_shop':_0x5ca5e1,'alldata':_0x1a8090,'language':_0x45bf0a});}catch(_0x40fe6f){console['log'](_0x40fe6f);}}),router['get'](a0_0x133874(0x1c9),auth,async(_0x1c7dcc,_0x228652)=>{var _0x5ad57c=a0_0x133874;try{const {username:_0x549b91,email:_0x2759b2,role:_0x114db3}=_0x1c7dcc[_0x5ad57c(0x1d1)],_0x147d0f=_0x1c7dcc[_0x5ad57c(0x1d1)],_0x154c90=await profile[_0x5ad57c(0x1d5)]({'email':_0x147d0f[_0x5ad57c(0x1ce)]}),_0x2b3a83=await master_shop[_0x5ad57c(0x1cd)]();console[_0x5ad57c(0x1ca)](_0x5ad57c(0x1f2),_0x2b3a83);const _0xc4bfd9=await purchases_return['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x5ad57c(0x1d2),'receivable':0x1}}]);console[_0x5ad57c(0x1ca)](_0x5ad57c(0x1c2),_0xc4bfd9);if(_0x2b3a83[0x0][_0x5ad57c(0x1d8)]==_0x5ad57c(0x1c0)){var _0x1a609f=users[_0x5ad57c(0x1f1)];console['log'](_0x1a609f);}else{if(_0x2b3a83[0x0]['language']=='Hindi')var _0x1a609f=users[_0x5ad57c(0x1e4)];else{if(_0x2b3a83[0x0][_0x5ad57c(0x1d8)]=='German')var _0x1a609f=users[_0x5ad57c(0x1dd)];else{if(_0x2b3a83[0x0][_0x5ad57c(0x1d8)]==_0x5ad57c(0x1f4))var _0x1a609f=users[_0x5ad57c(0x1f4)];else{if(_0x2b3a83[0x0]['language']==_0x5ad57c(0x1db))var _0x1a609f=users[_0x5ad57c(0x1db)];else{if(_0x2b3a83[0x0][_0x5ad57c(0x1d8)]==_0x5ad57c(0x1f7))var _0x1a609f=users['Portuguese'];else{if(_0x2b3a83[0x0][_0x5ad57c(0x1d8)]==_0x5ad57c(0x1eb))var _0x1a609f=users[_0x5ad57c(0x1eb)];else{if(_0x2b3a83[0x0][_0x5ad57c(0x1d8)]==_0x5ad57c(0x1c1))var _0x1a609f=users[_0x5ad57c(0x1ec)];}}}}}}}_0x228652['render'](_0x5ad57c(0x1c2),{'success':_0x1c7dcc[_0x5ad57c(0x1d7)](_0x5ad57c(0x1f5)),'errors':_0x1c7dcc[_0x5ad57c(0x1d7)]('errors'),'role':_0x147d0f,'profile':_0x154c90,'master_shop':_0x2b3a83,'alldata':_0xc4bfd9,'language':_0x1a609f});}catch(_0x28f569){console[_0x5ad57c(0x1ca)](_0x28f569);}}),router[a0_0x133874(0x1ee)](a0_0x133874(0x1ea),auth,async(_0xf0ebe8,_0x3d91a4)=>{var _0x3b328d=a0_0x133874;try{const {username:_0x1de8ad,email:_0x48dbf3,role:_0x65bd4f}=_0xf0ebe8[_0x3b328d(0x1d1)],_0x3edd24=_0xf0ebe8['user'],_0x102daa=await profile[_0x3b328d(0x1d5)]({'email':_0x3edd24['email']}),_0xee9447=await master_shop[_0x3b328d(0x1cd)]();console[_0x3b328d(0x1ca)](_0x3b328d(0x1f2),_0xee9447);const _0x2fc7cc=await sales[_0x3b328d(0x1c3)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x3b328d(0x1e6),'receivable_amount':0x1}}]);console[_0x3b328d(0x1ca)](_0x2fc7cc);if(_0xee9447[0x0][_0x3b328d(0x1d8)]==_0x3b328d(0x1c0)){var _0x412bbb=users[_0x3b328d(0x1f1)];console[_0x3b328d(0x1ca)](_0x412bbb);}else{if(_0xee9447[0x0][_0x3b328d(0x1d8)]==_0x3b328d(0x1e4))var _0x412bbb=users[_0x3b328d(0x1e4)];else{if(_0xee9447[0x0][_0x3b328d(0x1d8)]==_0x3b328d(0x1dd))var _0x412bbb=users[_0x3b328d(0x1dd)];else{if(_0xee9447[0x0]['language']==_0x3b328d(0x1f4))var _0x412bbb=users[_0x3b328d(0x1f4)];else{if(_0xee9447[0x0][_0x3b328d(0x1d8)]==_0x3b328d(0x1db))var _0x412bbb=users[_0x3b328d(0x1db)];else{if(_0xee9447[0x0]['language']==_0x3b328d(0x1f7))var _0x412bbb=users['Portuguese'];else{if(_0xee9447[0x0][_0x3b328d(0x1d8)]=='Chinese')var _0x412bbb=users['Chinese'];else{if(_0xee9447[0x0][_0x3b328d(0x1d8)]==_0x3b328d(0x1c1))var _0x412bbb=users[_0x3b328d(0x1ec)];}}}}}}}_0x3d91a4['render'](_0x3b328d(0x1de),{'success':_0xf0ebe8[_0x3b328d(0x1d7)](_0x3b328d(0x1f5)),'errors':_0xf0ebe8[_0x3b328d(0x1d7)](_0x3b328d(0x1d3)),'role':_0x3edd24,'profile':_0x102daa,'master_shop':_0xee9447,'alldata':_0x2fc7cc,'language':_0x412bbb});}catch(_0x3e2d16){console['log'](_0x3e2d16);}}),router[a0_0x133874(0x1ee)]('/sale_return',auth,async(_0x3fdf1b,_0x31a83f)=>{var _0x2da4e7=a0_0x133874;try{const {username:_0x33f3ea,email:_0x3371b7,role:_0x55add1}=_0x3fdf1b['user'],_0xf268bc=_0x3fdf1b[_0x2da4e7(0x1d1)],_0x5171b1=await profile[_0x2da4e7(0x1d5)]({'email':_0xf268bc[_0x2da4e7(0x1ce)]}),_0x25e3e4=await master_shop[_0x2da4e7(0x1cd)]();console[_0x2da4e7(0x1ca)](_0x2da4e7(0x1f2),_0x25e3e4);const _0x20314e=await sales_return['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x2da4e7(0x1c7),'payable_to_customer':0x1}}]);console[_0x2da4e7(0x1ca)](_0x20314e);if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]=='English\x20(US)'){var _0x174e0e=users[_0x2da4e7(0x1f1)];console[_0x2da4e7(0x1ca)](_0x174e0e);}else{if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]=='Hindi')var _0x174e0e=users[_0x2da4e7(0x1e4)];else{if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]==_0x2da4e7(0x1dd))var _0x174e0e=users[_0x2da4e7(0x1dd)];else{if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]==_0x2da4e7(0x1f4))var _0x174e0e=users['Spanish'];else{if(_0x25e3e4[0x0]['language']==_0x2da4e7(0x1db))var _0x174e0e=users[_0x2da4e7(0x1db)];else{if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]=='Portuguese\x20(BR)')var _0x174e0e=users[_0x2da4e7(0x1d9)];else{if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]=='Chinese')var _0x174e0e=users[_0x2da4e7(0x1eb)];else{if(_0x25e3e4[0x0][_0x2da4e7(0x1d8)]==_0x2da4e7(0x1c1))var _0x174e0e=users['Arabic'];}}}}}}}_0x31a83f[_0x2da4e7(0x1df)](_0x2da4e7(0x1f0),{'success':_0x3fdf1b[_0x2da4e7(0x1d7)](_0x2da4e7(0x1f5)),'errors':_0x3fdf1b['flash'](_0x2da4e7(0x1d3)),'role':_0xf268bc,'profile':_0x5171b1,'master_shop':_0x25e3e4,'alldata':_0x20314e,'language':_0x174e0e});}catch(_0x552666){console[_0x2da4e7(0x1ca)](_0x552666);}}),router[a0_0x133874(0x1ee)](a0_0x133874(0x1d4),auth,async(_0x48cd41,_0x2b5338)=>{var _0x58ae7b=a0_0x133874;try{const {username:_0xd41f03,email:_0x4e032f,role:_0x10a8df}=_0x48cd41[_0x58ae7b(0x1d1)],_0x30e518=_0x48cd41[_0x58ae7b(0x1d1)],_0x463e03=await profile[_0x58ae7b(0x1d5)]({'email':_0x30e518[_0x58ae7b(0x1ce)]}),_0x5c46be=await master_shop['find']();console[_0x58ae7b(0x1ca)](_0x58ae7b(0x1f2),_0x5c46be);const _0x4071ec=await adjustment['find']();console[_0x58ae7b(0x1ca)](_0x4071ec);if(_0x5c46be[0x0][_0x58ae7b(0x1d8)]==_0x58ae7b(0x1c0)){var _0xebbcfb=users[_0x58ae7b(0x1f1)];console[_0x58ae7b(0x1ca)](_0xebbcfb);}else{if(_0x5c46be[0x0][_0x58ae7b(0x1d8)]==_0x58ae7b(0x1e4))var _0xebbcfb=users[_0x58ae7b(0x1e4)];else{if(_0x5c46be[0x0][_0x58ae7b(0x1d8)]==_0x58ae7b(0x1dd))var _0xebbcfb=users[_0x58ae7b(0x1dd)];else{if(_0x5c46be[0x0]['language']==_0x58ae7b(0x1f4))var _0xebbcfb=users[_0x58ae7b(0x1f4)];else{if(_0x5c46be[0x0][_0x58ae7b(0x1d8)]=='French')var _0xebbcfb=users[_0x58ae7b(0x1db)];else{if(_0x5c46be[0x0][_0x58ae7b(0x1d8)]==_0x58ae7b(0x1f7))var _0xebbcfb=users[_0x58ae7b(0x1d9)];else{if(_0x5c46be[0x0][_0x58ae7b(0x1d8)]==_0x58ae7b(0x1eb))var _0xebbcfb=users[_0x58ae7b(0x1eb)];else{if(_0x5c46be[0x0]['language']=='Arabic\x20(ae)')var _0xebbcfb=users[_0x58ae7b(0x1ec)];}}}}}}}_0x2b5338['render']('adjustment_report',{'success':_0x48cd41[_0x58ae7b(0x1d7)](_0x58ae7b(0x1f5)),'errors':_0x48cd41[_0x58ae7b(0x1d7)](_0x58ae7b(0x1d3)),'role':_0x30e518,'profile':_0x463e03,'master_shop':_0x5c46be,'alldata':_0x4071ec,'language':_0xebbcfb});}catch(_0x243dbc){console['log'](_0x243dbc);}}),router[a0_0x133874(0x1ee)](a0_0x133874(0x1e3),auth,async(_0x229ea6,_0xfd64f5)=>{var _0x15ff49=a0_0x133874;try{const {username:_0x436994,email:_0x3d1d06,role:_0x319ae5}=_0x229ea6[_0x15ff49(0x1d1)],_0x31d0e6=_0x229ea6[_0x15ff49(0x1d1)],_0x372863=await profile[_0x15ff49(0x1d5)]({'email':_0x31d0e6[_0x15ff49(0x1ce)]}),_0x229fa4=await master_shop[_0x15ff49(0x1cd)]();console['log'](_0x15ff49(0x1f2),_0x229fa4);const _0x3a8944=await transfers[_0x15ff49(0x1cd)]();console[_0x15ff49(0x1ca)](_0x3a8944);if(_0x229fa4[0x0][_0x15ff49(0x1d8)]==_0x15ff49(0x1c0)){var _0x289bf5=users[_0x15ff49(0x1f1)];console[_0x15ff49(0x1ca)](_0x289bf5);}else{if(_0x229fa4[0x0]['language']==_0x15ff49(0x1e4))var _0x289bf5=users['Hindi'];else{if(_0x229fa4[0x0][_0x15ff49(0x1d8)]==_0x15ff49(0x1dd))var _0x289bf5=users['German'];else{if(_0x229fa4[0x0]['language']==_0x15ff49(0x1f4))var _0x289bf5=users[_0x15ff49(0x1f4)];else{if(_0x229fa4[0x0]['language']==_0x15ff49(0x1db))var _0x289bf5=users[_0x15ff49(0x1db)];else{if(_0x229fa4[0x0]['language']==_0x15ff49(0x1f7))var _0x289bf5=users[_0x15ff49(0x1d9)];else{if(_0x229fa4[0x0]['language']=='Chinese')var _0x289bf5=users['Chinese'];else{if(_0x229fa4[0x0][_0x15ff49(0x1d8)]=='Arabic\x20(ae)')var _0x289bf5=users[_0x15ff49(0x1ec)];}}}}}}}_0xfd64f5[_0x15ff49(0x1df)](_0x15ff49(0x1f6),{'success':_0x229ea6[_0x15ff49(0x1d7)](_0x15ff49(0x1f5)),'errors':_0x229ea6[_0x15ff49(0x1d7)](_0x15ff49(0x1d3)),'role':_0x31d0e6,'profile':_0x372863,'master_shop':_0x229fa4,'alldata':_0x3a8944,'language':_0x289bf5});}catch(_0x276464){console[_0x15ff49(0x1ca)](_0x276464);}}),router[a0_0x133874(0x1ee)](a0_0x133874(0x1e5),auth,async(_0x621028,_0x30ac7f)=>{var _0x1f165a=a0_0x133874;try{const {username:_0x5319bf,email:_0x19ce03,role:_0x376887}=_0x621028[_0x1f165a(0x1d1)],_0x2ee3c6=_0x621028[_0x1f165a(0x1d1)],_0x3cfa4a=await profile[_0x1f165a(0x1d5)]({'email':_0x2ee3c6[_0x1f165a(0x1ce)]}),_0x59fce2=await master_shop[_0x1f165a(0x1cd)]();console['log']('master',_0x59fce2);const _0x329964=await all_expenses['find']();console[_0x1f165a(0x1ca)](_0x329964);if(_0x59fce2[0x0][_0x1f165a(0x1d8)]=='English\x20(US)'){var _0x437c4f=users[_0x1f165a(0x1f1)];console[_0x1f165a(0x1ca)](_0x437c4f);}else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]==_0x1f165a(0x1e4))var _0x437c4f=users[_0x1f165a(0x1e4)];else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]==_0x1f165a(0x1dd))var _0x437c4f=users[_0x1f165a(0x1dd)];else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]==_0x1f165a(0x1f4))var _0x437c4f=users[_0x1f165a(0x1f4)];else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]=='French')var _0x437c4f=users['French'];else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]=='Portuguese\x20(BR)')var _0x437c4f=users[_0x1f165a(0x1d9)];else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]==_0x1f165a(0x1eb))var _0x437c4f=users[_0x1f165a(0x1eb)];else{if(_0x59fce2[0x0][_0x1f165a(0x1d8)]=='Arabic\x20(ae)')var _0x437c4f=users['Arabic'];}}}}}}}_0x30ac7f[_0x1f165a(0x1df)](_0x1f165a(0x1cc),{'success':_0x621028['flash'](_0x1f165a(0x1f5)),'errors':_0x621028[_0x1f165a(0x1d7)]('errors'),'role':_0x2ee3c6,'profile':_0x3cfa4a,'master_shop':_0x59fce2,'alldata':_0x329964,'language':_0x437c4f});}catch(_0x260817){console[_0x1f165a(0x1ca)](_0x260817);}}),module['exports']=router;