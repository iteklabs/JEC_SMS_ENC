var a0_0x11e5e4=a0_0x1e1b;(function(_0x1dc6aa,_0x1408b9){var _0x11f486=a0_0x1e1b,_0x13a35a=_0x1dc6aa();while(!![]){try{var _0x529604=parseInt(_0x11f486(0x19f))/0x1*(-parseInt(_0x11f486(0x197))/0x2)+parseInt(_0x11f486(0x195))/0x3*(-parseInt(_0x11f486(0x176))/0x4)+-parseInt(_0x11f486(0x170))/0x5*(parseInt(_0x11f486(0x17a))/0x6)+-parseInt(_0x11f486(0x19b))/0x7*(parseInt(_0x11f486(0x19c))/0x8)+-parseInt(_0x11f486(0x173))/0x9+parseInt(_0x11f486(0x184))/0xa*(-parseInt(_0x11f486(0x172))/0xb)+parseInt(_0x11f486(0x174))/0xc;if(_0x529604===_0x1408b9)break;else _0x13a35a['push'](_0x13a35a['shift']());}catch(_0x2dd137){_0x13a35a['push'](_0x13a35a['shift']());}}}(a0_0x49dc,0x3a65e));const express=require(a0_0x11e5e4(0x19e)),app=express(),router=express['Router'](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require('../models/all_models'),auth=require(a0_0x11e5e4(0x186)),users=require(a0_0x11e5e4(0x179));router[a0_0x11e5e4(0x18c)](a0_0x11e5e4(0x190),auth,async(_0x15baf9,_0x160373)=>{var _0x36501c=a0_0x11e5e4;try{const {username:_0xfd80ce,email:_0x31ba56,role:_0x4897e3}=_0x15baf9[_0x36501c(0x199)],_0x31af73=_0x15baf9[_0x36501c(0x199)],_0x380225=await profile[_0x36501c(0x181)]({'email':_0x31af73[_0x36501c(0x169)]}),_0xa05a4c=await master_shop[_0x36501c(0x16d)]();console[_0x36501c(0x196)](_0x36501c(0x188),_0xa05a4c);const _0x2cac89=await product[_0x36501c(0x16d)]();console[_0x36501c(0x196)](_0x2cac89);if(_0xa05a4c[0x0]['language']==_0x36501c(0x17b)){var _0x5d0ef4=users['English'];console[_0x36501c(0x196)](_0x5d0ef4);}else{if(_0xa05a4c[0x0][_0x36501c(0x182)]==_0x36501c(0x1a2))var _0x5d0ef4=users[_0x36501c(0x1a2)];else{if(_0xa05a4c[0x0]['language']==_0x36501c(0x180))var _0x5d0ef4=users[_0x36501c(0x180)];else{if(_0xa05a4c[0x0][_0x36501c(0x182)]==_0x36501c(0x1a0))var _0x5d0ef4=users[_0x36501c(0x1a0)];else{if(_0xa05a4c[0x0][_0x36501c(0x182)]==_0x36501c(0x185))var _0x5d0ef4=users[_0x36501c(0x185)];else{if(_0xa05a4c[0x0][_0x36501c(0x182)]=='Portuguese\x20(BR)')var _0x5d0ef4=users[_0x36501c(0x189)];else{if(_0xa05a4c[0x0][_0x36501c(0x182)]=='Chinese')var _0x5d0ef4=users[_0x36501c(0x17c)];else{if(_0xa05a4c[0x0]['language']=='Arabic\x20(ae)')var _0x5d0ef4=users['Arabic'];}}}}}}}_0x160373['render'](_0x36501c(0x19a),{'success':_0x15baf9[_0x36501c(0x183)](_0x36501c(0x16f)),'errors':_0x15baf9[_0x36501c(0x183)]('errors'),'role':_0x31af73,'profile':_0x380225,'master_shop':_0xa05a4c,'alldata':_0x2cac89,'language':_0x5d0ef4});}catch(_0x38604b){console[_0x36501c(0x196)](_0x38604b);}}),router[a0_0x11e5e4(0x18c)]('/customer',auth,async(_0x175faf,_0x273e26)=>{var _0x327c4c=a0_0x11e5e4;try{const {username:_0x5887e1,email:_0x1882c2,role:_0x161911}=_0x175faf['user'],_0x39943a=_0x175faf[_0x327c4c(0x199)],_0x4fb55c=await profile[_0x327c4c(0x181)]({'email':_0x39943a[_0x327c4c(0x169)]}),_0x49b552=await master_shop[_0x327c4c(0x16d)]();console['log'](_0x327c4c(0x188),_0x49b552);const _0x4361c1=await customer[_0x327c4c(0x16d)]();console[_0x327c4c(0x196)](_0x4361c1);if(_0x49b552[0x0][_0x327c4c(0x182)]=='English\x20(US)'){var _0x1a6c3b=users['English'];console[_0x327c4c(0x196)](_0x1a6c3b);}else{if(_0x49b552[0x0][_0x327c4c(0x182)]=='Hindi')var _0x1a6c3b=users[_0x327c4c(0x1a2)];else{if(_0x49b552[0x0][_0x327c4c(0x182)]=='German')var _0x1a6c3b=users[_0x327c4c(0x180)];else{if(_0x49b552[0x0][_0x327c4c(0x182)]=='Spanish')var _0x1a6c3b=users['Spanish'];else{if(_0x49b552[0x0][_0x327c4c(0x182)]=='French')var _0x1a6c3b=users[_0x327c4c(0x185)];else{if(_0x49b552[0x0][_0x327c4c(0x182)]=='Portuguese\x20(BR)')var _0x1a6c3b=users[_0x327c4c(0x189)];else{if(_0x49b552[0x0][_0x327c4c(0x182)]=='Chinese')var _0x1a6c3b=users[_0x327c4c(0x17c)];else{if(_0x49b552[0x0][_0x327c4c(0x182)]==_0x327c4c(0x18b))var _0x1a6c3b=users[_0x327c4c(0x1a1)];}}}}}}}_0x273e26[_0x327c4c(0x18f)](_0x327c4c(0x193),{'success':_0x175faf[_0x327c4c(0x183)](_0x327c4c(0x16f)),'errors':_0x175faf[_0x327c4c(0x183)]('errors'),'role':_0x39943a,'profile':_0x4fb55c,'master_shop':_0x49b552,'alldata':_0x4361c1,'language':_0x1a6c3b});}catch(_0x4c7f09){console['log'](_0x4c7f09);}}),router['get'](a0_0x11e5e4(0x18a),auth,async(_0x4d7aa7,_0x3dd536)=>{var _0x1ee8e0=a0_0x11e5e4;try{const {username:_0x3318e3,email:_0x38d310,role:_0x593bbe}=_0x4d7aa7[_0x1ee8e0(0x199)],_0x9d99ce=_0x4d7aa7[_0x1ee8e0(0x199)],_0x14e070=await profile[_0x1ee8e0(0x181)]({'email':_0x9d99ce[_0x1ee8e0(0x169)]}),_0x55b4b9=await master_shop[_0x1ee8e0(0x16d)]();console[_0x1ee8e0(0x196)](_0x1ee8e0(0x188),_0x55b4b9);const _0x2fc737=await suppliers[_0x1ee8e0(0x16d)]();console[_0x1ee8e0(0x196)](_0x2fc737);if(_0x55b4b9[0x0][_0x1ee8e0(0x182)]==_0x1ee8e0(0x17b)){var _0xc72d5c=users[_0x1ee8e0(0x18e)];console['log'](_0xc72d5c);}else{if(_0x55b4b9[0x0]['language']==_0x1ee8e0(0x1a2))var _0xc72d5c=users[_0x1ee8e0(0x1a2)];else{if(_0x55b4b9[0x0][_0x1ee8e0(0x182)]==_0x1ee8e0(0x180))var _0xc72d5c=users['German'];else{if(_0x55b4b9[0x0][_0x1ee8e0(0x182)]==_0x1ee8e0(0x1a0))var _0xc72d5c=users[_0x1ee8e0(0x1a0)];else{if(_0x55b4b9[0x0]['language']==_0x1ee8e0(0x185))var _0xc72d5c=users[_0x1ee8e0(0x185)];else{if(_0x55b4b9[0x0]['language']==_0x1ee8e0(0x177))var _0xc72d5c=users[_0x1ee8e0(0x189)];else{if(_0x55b4b9[0x0]['language']==_0x1ee8e0(0x17c))var _0xc72d5c=users[_0x1ee8e0(0x17c)];else{if(_0x55b4b9[0x0][_0x1ee8e0(0x182)]==_0x1ee8e0(0x18b))var _0xc72d5c=users['Arabic'];}}}}}}}_0x3dd536[_0x1ee8e0(0x18f)]('supplier_report',{'success':_0x4d7aa7['flash'](_0x1ee8e0(0x16f)),'errors':_0x4d7aa7[_0x1ee8e0(0x183)](_0x1ee8e0(0x17f)),'role':_0x9d99ce,'profile':_0x14e070,'master_shop':_0x55b4b9,'alldata':_0x2fc737,'language':_0xc72d5c});}catch(_0x4e9410){console[_0x1ee8e0(0x196)](_0x4e9410);}}),router[a0_0x11e5e4(0x18c)]('/purchases',auth,async(_0x4754fc,_0x2c04cc)=>{var _0x1c1d50=a0_0x11e5e4;try{const {username:_0x596faa,email:_0x28beec,role:_0x15d548}=_0x4754fc[_0x1c1d50(0x199)],_0xf2abbc=_0x4754fc[_0x1c1d50(0x199)],_0x239b83=await profile['findOne']({'email':_0xf2abbc[_0x1c1d50(0x169)]}),_0x4b4b4b=await master_shop[_0x1c1d50(0x16d)]();console['log'](_0x1c1d50(0x188),_0x4b4b4b);const _0x5288bc=await purchases['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x1c1d50(0x194),'payable':0x1}}]);console[_0x1c1d50(0x196)](_0x1c1d50(0x18d),_0x5288bc);if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]=='English\x20(US)'){var _0x17cd89=users[_0x1c1d50(0x18e)];console[_0x1c1d50(0x196)](_0x17cd89);}else{if(_0x4b4b4b[0x0]['language']==_0x1c1d50(0x1a2))var _0x17cd89=users[_0x1c1d50(0x1a2)];else{if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]==_0x1c1d50(0x180))var _0x17cd89=users[_0x1c1d50(0x180)];else{if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]==_0x1c1d50(0x1a0))var _0x17cd89=users['Spanish'];else{if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]=='French')var _0x17cd89=users['French'];else{if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]==_0x1c1d50(0x177))var _0x17cd89=users[_0x1c1d50(0x189)];else{if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]=='Chinese')var _0x17cd89=users['Chinese'];else{if(_0x4b4b4b[0x0][_0x1c1d50(0x182)]==_0x1c1d50(0x18b))var _0x17cd89=users[_0x1c1d50(0x1a1)];}}}}}}}_0x2c04cc[_0x1c1d50(0x18f)](_0x1c1d50(0x17e),{'success':_0x4754fc[_0x1c1d50(0x183)](_0x1c1d50(0x16f)),'errors':_0x4754fc['flash'](_0x1c1d50(0x17f)),'role':_0xf2abbc,'profile':_0x239b83,'master_shop':_0x4b4b4b,'alldata':_0x5288bc,'language':_0x17cd89});}catch(_0x590447){console['log'](_0x590447);}}),router[a0_0x11e5e4(0x18c)]('/purchase_return',auth,async(_0x5b1cca,_0x56521b)=>{var _0x37e702=a0_0x11e5e4;try{const {username:_0x435fc9,email:_0x231c97,role:_0x51e84a}=_0x5b1cca[_0x37e702(0x199)],_0x29c1f2=_0x5b1cca[_0x37e702(0x199)],_0x2eef0b=await profile[_0x37e702(0x181)]({'email':_0x29c1f2['email']}),_0x37e41c=await master_shop['find']();console[_0x37e702(0x196)]('master',_0x37e41c);const _0x1d66b3=await purchases_return[_0x37e702(0x175)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x37e702(0x16c),'receivable':0x1}}]);console[_0x37e702(0x196)]('purchases_return_report',_0x1d66b3);if(_0x37e41c[0x0][_0x37e702(0x182)]==_0x37e702(0x17b)){var _0x265c8c=users[_0x37e702(0x18e)];console['log'](_0x265c8c);}else{if(_0x37e41c[0x0]['language']==_0x37e702(0x1a2))var _0x265c8c=users[_0x37e702(0x1a2)];else{if(_0x37e41c[0x0]['language']=='German')var _0x265c8c=users[_0x37e702(0x180)];else{if(_0x37e41c[0x0][_0x37e702(0x182)]==_0x37e702(0x1a0))var _0x265c8c=users['Spanish'];else{if(_0x37e41c[0x0][_0x37e702(0x182)]=='French')var _0x265c8c=users[_0x37e702(0x185)];else{if(_0x37e41c[0x0][_0x37e702(0x182)]=='Portuguese\x20(BR)')var _0x265c8c=users[_0x37e702(0x189)];else{if(_0x37e41c[0x0]['language']==_0x37e702(0x17c))var _0x265c8c=users[_0x37e702(0x17c)];else{if(_0x37e41c[0x0][_0x37e702(0x182)]==_0x37e702(0x18b))var _0x265c8c=users['Arabic'];}}}}}}}_0x56521b[_0x37e702(0x18f)]('purchases_return_report',{'success':_0x5b1cca[_0x37e702(0x183)](_0x37e702(0x16f)),'errors':_0x5b1cca[_0x37e702(0x183)]('errors'),'role':_0x29c1f2,'profile':_0x2eef0b,'master_shop':_0x37e41c,'alldata':_0x1d66b3,'language':_0x265c8c});}catch(_0x527d84){console[_0x37e702(0x196)](_0x527d84);}}),router[a0_0x11e5e4(0x18c)](a0_0x11e5e4(0x187),auth,async(_0x3a0183,_0x37b892)=>{var _0x42d160=a0_0x11e5e4;try{const {username:_0x1a3ffc,email:_0x1d515c,role:_0x5105cc}=_0x3a0183[_0x42d160(0x199)],_0x1ccc26=_0x3a0183['user'],_0x1af26a=await profile[_0x42d160(0x181)]({'email':_0x1ccc26[_0x42d160(0x169)]}),_0x390e19=await master_shop['find']();console[_0x42d160(0x196)](_0x42d160(0x188),_0x390e19);const _0x18beb7=await sales[_0x42d160(0x175)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x42d160(0x178),'receivable_amount':0x1}}]);console[_0x42d160(0x196)](_0x18beb7);if(_0x390e19[0x0][_0x42d160(0x182)]==_0x42d160(0x17b)){var _0x920612=users[_0x42d160(0x18e)];console[_0x42d160(0x196)](_0x920612);}else{if(_0x390e19[0x0][_0x42d160(0x182)]==_0x42d160(0x1a2))var _0x920612=users['Hindi'];else{if(_0x390e19[0x0][_0x42d160(0x182)]==_0x42d160(0x180))var _0x920612=users['German'];else{if(_0x390e19[0x0][_0x42d160(0x182)]==_0x42d160(0x1a0))var _0x920612=users[_0x42d160(0x1a0)];else{if(_0x390e19[0x0][_0x42d160(0x182)]=='French')var _0x920612=users['French'];else{if(_0x390e19[0x0][_0x42d160(0x182)]=='Portuguese\x20(BR)')var _0x920612=users[_0x42d160(0x189)];else{if(_0x390e19[0x0][_0x42d160(0x182)]=='Chinese')var _0x920612=users[_0x42d160(0x17c)];else{if(_0x390e19[0x0][_0x42d160(0x182)]==_0x42d160(0x18b))var _0x920612=users['Arabic'];}}}}}}}_0x37b892[_0x42d160(0x18f)]('sales_report',{'success':_0x3a0183[_0x42d160(0x183)]('success'),'errors':_0x3a0183[_0x42d160(0x183)](_0x42d160(0x17f)),'role':_0x1ccc26,'profile':_0x1af26a,'master_shop':_0x390e19,'alldata':_0x18beb7,'language':_0x920612});}catch(_0x1fffce){console[_0x42d160(0x196)](_0x1fffce);}}),router[a0_0x11e5e4(0x18c)](a0_0x11e5e4(0x17d),auth,async(_0x5c18c7,_0x2b7612)=>{var _0x23b1a8=a0_0x11e5e4;try{const {username:_0x556467,email:_0x3494c8,role:_0x2f968b}=_0x5c18c7[_0x23b1a8(0x199)],_0x108abd=_0x5c18c7[_0x23b1a8(0x199)],_0x153746=await profile['findOne']({'email':_0x108abd[_0x23b1a8(0x169)]}),_0xbdf6b9=await master_shop['find']();console['log'](_0x23b1a8(0x188),_0xbdf6b9);const _0x106aac=await sales_return[_0x23b1a8(0x175)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x23b1a8(0x198),'payable_to_customer':0x1}}]);console['log'](_0x106aac);if(_0xbdf6b9[0x0]['language']==_0x23b1a8(0x17b)){var _0x6eabf8=users[_0x23b1a8(0x18e)];console[_0x23b1a8(0x196)](_0x6eabf8);}else{if(_0xbdf6b9[0x0][_0x23b1a8(0x182)]==_0x23b1a8(0x1a2))var _0x6eabf8=users['Hindi'];else{if(_0xbdf6b9[0x0]['language']==_0x23b1a8(0x180))var _0x6eabf8=users['German'];else{if(_0xbdf6b9[0x0][_0x23b1a8(0x182)]==_0x23b1a8(0x1a0))var _0x6eabf8=users['Spanish'];else{if(_0xbdf6b9[0x0][_0x23b1a8(0x182)]=='French')var _0x6eabf8=users['French'];else{if(_0xbdf6b9[0x0]['language']=='Portuguese\x20(BR)')var _0x6eabf8=users[_0x23b1a8(0x189)];else{if(_0xbdf6b9[0x0][_0x23b1a8(0x182)]==_0x23b1a8(0x17c))var _0x6eabf8=users['Chinese'];else{if(_0xbdf6b9[0x0]['language']==_0x23b1a8(0x18b))var _0x6eabf8=users[_0x23b1a8(0x1a1)];}}}}}}}_0x2b7612[_0x23b1a8(0x18f)](_0x23b1a8(0x191),{'success':_0x5c18c7[_0x23b1a8(0x183)]('success'),'errors':_0x5c18c7['flash']('errors'),'role':_0x108abd,'profile':_0x153746,'master_shop':_0xbdf6b9,'alldata':_0x106aac,'language':_0x6eabf8});}catch(_0x2eee8e){console[_0x23b1a8(0x196)](_0x2eee8e);}}),router['get'](a0_0x11e5e4(0x16a),auth,async(_0x18bdff,_0xe22981)=>{var _0x1e02d8=a0_0x11e5e4;try{const {username:_0x25d038,email:_0x5a1416,role:_0x485401}=_0x18bdff[_0x1e02d8(0x199)],_0x2c97b4=_0x18bdff[_0x1e02d8(0x199)],_0x3aad68=await profile[_0x1e02d8(0x181)]({'email':_0x2c97b4[_0x1e02d8(0x169)]}),_0x556546=await master_shop[_0x1e02d8(0x16d)]();console['log'](_0x1e02d8(0x188),_0x556546);const _0x46a624=await adjustment[_0x1e02d8(0x16d)]();console[_0x1e02d8(0x196)](_0x46a624);if(_0x556546[0x0][_0x1e02d8(0x182)]==_0x1e02d8(0x17b)){var _0x3e059c=users['English'];console[_0x1e02d8(0x196)](_0x3e059c);}else{if(_0x556546[0x0][_0x1e02d8(0x182)]=='Hindi')var _0x3e059c=users[_0x1e02d8(0x1a2)];else{if(_0x556546[0x0][_0x1e02d8(0x182)]=='German')var _0x3e059c=users[_0x1e02d8(0x180)];else{if(_0x556546[0x0]['language']==_0x1e02d8(0x1a0))var _0x3e059c=users[_0x1e02d8(0x1a0)];else{if(_0x556546[0x0][_0x1e02d8(0x182)]=='French')var _0x3e059c=users['French'];else{if(_0x556546[0x0]['language']==_0x1e02d8(0x177))var _0x3e059c=users[_0x1e02d8(0x189)];else{if(_0x556546[0x0][_0x1e02d8(0x182)]==_0x1e02d8(0x17c))var _0x3e059c=users[_0x1e02d8(0x17c)];else{if(_0x556546[0x0][_0x1e02d8(0x182)]=='Arabic\x20(ae)')var _0x3e059c=users[_0x1e02d8(0x1a1)];}}}}}}}_0xe22981[_0x1e02d8(0x18f)](_0x1e02d8(0x16e),{'success':_0x18bdff[_0x1e02d8(0x183)](_0x1e02d8(0x16f)),'errors':_0x18bdff['flash'](_0x1e02d8(0x17f)),'role':_0x2c97b4,'profile':_0x3aad68,'master_shop':_0x556546,'alldata':_0x46a624,'language':_0x3e059c});}catch(_0x47ce85){console['log'](_0x47ce85);}}),router[a0_0x11e5e4(0x18c)](a0_0x11e5e4(0x16b),auth,async(_0x483459,_0x511e81)=>{var _0x589105=a0_0x11e5e4;try{const {username:_0xb526d0,email:_0xae984c,role:_0x19e858}=_0x483459[_0x589105(0x199)],_0x1f399c=_0x483459[_0x589105(0x199)],_0x461032=await profile['findOne']({'email':_0x1f399c['email']}),_0xe81cbb=await master_shop[_0x589105(0x16d)]();console[_0x589105(0x196)](_0x589105(0x188),_0xe81cbb);const _0x47cb72=await transfers[_0x589105(0x16d)]();console['log'](_0x47cb72);if(_0xe81cbb[0x0]['language']=='English\x20(US)'){var _0x19b082=users['English'];console[_0x589105(0x196)](_0x19b082);}else{if(_0xe81cbb[0x0][_0x589105(0x182)]==_0x589105(0x1a2))var _0x19b082=users[_0x589105(0x1a2)];else{if(_0xe81cbb[0x0][_0x589105(0x182)]==_0x589105(0x180))var _0x19b082=users[_0x589105(0x180)];else{if(_0xe81cbb[0x0]['language']==_0x589105(0x1a0))var _0x19b082=users['Spanish'];else{if(_0xe81cbb[0x0]['language']=='French')var _0x19b082=users[_0x589105(0x185)];else{if(_0xe81cbb[0x0][_0x589105(0x182)]==_0x589105(0x177))var _0x19b082=users[_0x589105(0x189)];else{if(_0xe81cbb[0x0][_0x589105(0x182)]=='Chinese')var _0x19b082=users['Chinese'];else{if(_0xe81cbb[0x0][_0x589105(0x182)]==_0x589105(0x18b))var _0x19b082=users[_0x589105(0x1a1)];}}}}}}}_0x511e81[_0x589105(0x18f)](_0x589105(0x171),{'success':_0x483459['flash'](_0x589105(0x16f)),'errors':_0x483459[_0x589105(0x183)](_0x589105(0x17f)),'role':_0x1f399c,'profile':_0x461032,'master_shop':_0xe81cbb,'alldata':_0x47cb72,'language':_0x19b082});}catch(_0x55f311){console[_0x589105(0x196)](_0x55f311);}}),router[a0_0x11e5e4(0x18c)](a0_0x11e5e4(0x192),auth,async(_0x47cdff,_0x15185b)=>{var _0x55f5ea=a0_0x11e5e4;try{const {username:_0x168397,email:_0x3e7f2e,role:_0x244bac}=_0x47cdff[_0x55f5ea(0x199)],_0x5afcef=_0x47cdff[_0x55f5ea(0x199)],_0x16aa89=await profile['findOne']({'email':_0x5afcef[_0x55f5ea(0x169)]}),_0x3395b6=await master_shop[_0x55f5ea(0x16d)]();console[_0x55f5ea(0x196)]('master',_0x3395b6);const _0x5282ac=await all_expenses['find']();console[_0x55f5ea(0x196)](_0x5282ac);if(_0x3395b6[0x0][_0x55f5ea(0x182)]==_0x55f5ea(0x17b)){var _0x5c808c=users[_0x55f5ea(0x18e)];console[_0x55f5ea(0x196)](_0x5c808c);}else{if(_0x3395b6[0x0][_0x55f5ea(0x182)]==_0x55f5ea(0x1a2))var _0x5c808c=users['Hindi'];else{if(_0x3395b6[0x0][_0x55f5ea(0x182)]=='German')var _0x5c808c=users['German'];else{if(_0x3395b6[0x0][_0x55f5ea(0x182)]==_0x55f5ea(0x1a0))var _0x5c808c=users[_0x55f5ea(0x1a0)];else{if(_0x3395b6[0x0][_0x55f5ea(0x182)]==_0x55f5ea(0x185))var _0x5c808c=users[_0x55f5ea(0x185)];else{if(_0x3395b6[0x0]['language']==_0x55f5ea(0x177))var _0x5c808c=users[_0x55f5ea(0x189)];else{if(_0x3395b6[0x0][_0x55f5ea(0x182)]=='Chinese')var _0x5c808c=users[_0x55f5ea(0x17c)];else{if(_0x3395b6[0x0][_0x55f5ea(0x182)]==_0x55f5ea(0x18b))var _0x5c808c=users['Arabic'];}}}}}}}_0x15185b['render'](_0x55f5ea(0x19d),{'success':_0x47cdff[_0x55f5ea(0x183)](_0x55f5ea(0x16f)),'errors':_0x47cdff[_0x55f5ea(0x183)](_0x55f5ea(0x17f)),'role':_0x5afcef,'profile':_0x16aa89,'master_shop':_0x3395b6,'alldata':_0x5282ac,'language':_0x5c808c});}catch(_0x3b55f7){console['log'](_0x3b55f7);}}),module['exports']=router;function a0_0x1e1b(_0x48abab,_0x1d2966){var _0x49dc18=a0_0x49dc();return a0_0x1e1b=function(_0x1e1b91,_0x50fb84){_0x1e1b91=_0x1e1b91-0x169;var _0x1c7746=_0x49dc18[_0x1e1b91];return _0x1c7746;},a0_0x1e1b(_0x48abab,_0x1d2966);}function a0_0x49dc(){var _0x386d3f=['688zbgQjA','expense_report','express','65357eDowCt','Spanish','Arabic','Hindi','email','/adjustment','/transfer','$return_product.product_name','find','adjustment_report','success','3960rEQUoZ','transfer_report','55EfvYIv','3469824kGLRva','17249868JvbTPN','aggregate','4rNtLCU','Portuguese\x20(BR)','$sale_product.product_name','../public/language/languages.json','1884WkoAny','English\x20(US)','Chinese','/sale_return','purchases_report','errors','German','findOne','language','flash','599150REbqfo','French','../middleware/auth','/sale','master','Portuguese','/supplier','Arabic\x20(ae)','get','purchases\x20report','English','render','/product','sales_return_report','/expense','customer_report','$product.product_name','206535FMRaio','log','2OxLYYj','$return_sale.product_name','user','product_report','10605ukrvpI'];a0_0x49dc=function(){return _0x386d3f;};return a0_0x49dc();}