var a0_0x1ea0f1=a0_0x347b;(function(_0x31b14c,_0x501096){var _0x3d03a5=a0_0x347b,_0x41bc1e=_0x31b14c();while(!![]){try{var _0x3b46d9=parseInt(_0x3d03a5(0x18c))/0x1+parseInt(_0x3d03a5(0x1b6))/0x2+-parseInt(_0x3d03a5(0x189))/0x3+-parseInt(_0x3d03a5(0x196))/0x4*(parseInt(_0x3d03a5(0x191))/0x5)+parseInt(_0x3d03a5(0x1a4))/0x6*(-parseInt(_0x3d03a5(0x1a9))/0x7)+parseInt(_0x3d03a5(0x1a8))/0x8*(-parseInt(_0x3d03a5(0x198))/0x9)+parseInt(_0x3d03a5(0x19b))/0xa;if(_0x3b46d9===_0x501096)break;else _0x41bc1e['push'](_0x41bc1e['shift']());}catch(_0x127501){_0x41bc1e['push'](_0x41bc1e['shift']());}}}(a0_0x2922,0x85620));function a0_0x347b(_0x594368,_0x42cae8){var _0x2922a0=a0_0x2922();return a0_0x347b=function(_0x347bf6,_0x1cd1a1){_0x347bf6=_0x347bf6-0x185;var _0xd668b3=_0x2922a0[_0x347bf6];return _0xd668b3;},a0_0x347b(_0x594368,_0x42cae8);}const express=require(a0_0x1ea0f1(0x197)),app=express(),router=express[a0_0x1ea0f1(0x18e)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x1ea0f1(0x190)),auth=require('../middleware/auth'),users=require(a0_0x1ea0f1(0x1ae));router[a0_0x1ea0f1(0x1b2)]('/product',auth,async(_0x643710,_0x13cf5e)=>{var _0x2fa258=a0_0x1ea0f1;try{const {username:_0x2a4037,email:_0x4eb594,role:_0x42b69f}=_0x643710[_0x2fa258(0x1ab)],_0x4df058=_0x643710['user'],_0x30d1c7=await profile[_0x2fa258(0x1b9)]({'email':_0x4df058[_0x2fa258(0x1a2)]}),_0x2b6050=await master_shop[_0x2fa258(0x1b8)]();console['log']('master',_0x2b6050);const _0x2e63ad=await product['find']();console[_0x2fa258(0x1b0)](_0x2e63ad);if(_0x2b6050[0x0][_0x2fa258(0x1bc)]==_0x2fa258(0x1bb)){var _0x291abc=users[_0x2fa258(0x1af)];console[_0x2fa258(0x1b0)](_0x291abc);}else{if(_0x2b6050[0x0][_0x2fa258(0x1bc)]==_0x2fa258(0x199))var _0x291abc=users['Hindi'];else{if(_0x2b6050[0x0][_0x2fa258(0x1bc)]==_0x2fa258(0x188))var _0x291abc=users['German'];else{if(_0x2b6050[0x0]['language']==_0x2fa258(0x186))var _0x291abc=users[_0x2fa258(0x186)];else{if(_0x2b6050[0x0][_0x2fa258(0x1bc)]=='French')var _0x291abc=users[_0x2fa258(0x1ad)];else{if(_0x2b6050[0x0][_0x2fa258(0x1bc)]=='Portuguese\x20(BR)')var _0x291abc=users[_0x2fa258(0x18d)];else{if(_0x2b6050[0x0][_0x2fa258(0x1bc)]==_0x2fa258(0x1bd))var _0x291abc=users['Chinese'];else{if(_0x2b6050[0x0][_0x2fa258(0x1bc)]==_0x2fa258(0x1a1))var _0x291abc=users[_0x2fa258(0x195)];}}}}}}}_0x13cf5e[_0x2fa258(0x19f)]('product_report',{'success':_0x643710[_0x2fa258(0x193)](_0x2fa258(0x1b1)),'errors':_0x643710[_0x2fa258(0x193)](_0x2fa258(0x18a)),'role':_0x4df058,'profile':_0x30d1c7,'master_shop':_0x2b6050,'alldata':_0x2e63ad,'language':_0x291abc});}catch(_0x360a34){console[_0x2fa258(0x1b0)](_0x360a34);}}),router[a0_0x1ea0f1(0x1b2)]('/customer',auth,async(_0x16f671,_0x37d6fb)=>{var _0x392357=a0_0x1ea0f1;try{const {username:_0x1e70b2,email:_0x3b92fd,role:_0x5d5233}=_0x16f671['user'],_0x34d476=_0x16f671[_0x392357(0x1ab)],_0x3c3fd6=await profile['findOne']({'email':_0x34d476[_0x392357(0x1a2)]}),_0x4cd411=await master_shop['find']();console[_0x392357(0x1b0)](_0x392357(0x194),_0x4cd411);const _0x38c1d=await customer[_0x392357(0x1b8)]();console[_0x392357(0x1b0)](_0x38c1d);if(_0x4cd411[0x0]['language']==_0x392357(0x1bb)){var _0x22c1a1=users[_0x392357(0x1af)];console[_0x392357(0x1b0)](_0x22c1a1);}else{if(_0x4cd411[0x0][_0x392357(0x1bc)]==_0x392357(0x199))var _0x22c1a1=users['Hindi'];else{if(_0x4cd411[0x0][_0x392357(0x1bc)]==_0x392357(0x188))var _0x22c1a1=users[_0x392357(0x188)];else{if(_0x4cd411[0x0]['language']==_0x392357(0x186))var _0x22c1a1=users[_0x392357(0x186)];else{if(_0x4cd411[0x0][_0x392357(0x1bc)]==_0x392357(0x1ad))var _0x22c1a1=users['French'];else{if(_0x4cd411[0x0]['language']==_0x392357(0x1ac))var _0x22c1a1=users[_0x392357(0x18d)];else{if(_0x4cd411[0x0][_0x392357(0x1bc)]==_0x392357(0x1bd))var _0x22c1a1=users['Chinese'];else{if(_0x4cd411[0x0]['language']=='Arabic\x20(ae)')var _0x22c1a1=users['Arabic'];}}}}}}}_0x37d6fb[_0x392357(0x19f)](_0x392357(0x192),{'success':_0x16f671['flash'](_0x392357(0x1b1)),'errors':_0x16f671[_0x392357(0x193)]('errors'),'role':_0x34d476,'profile':_0x3c3fd6,'master_shop':_0x4cd411,'alldata':_0x38c1d,'language':_0x22c1a1});}catch(_0x14ca8e){console[_0x392357(0x1b0)](_0x14ca8e);}}),router['get'](a0_0x1ea0f1(0x1a5),auth,async(_0x5b4021,_0x12fdd9)=>{var _0x7ba6f6=a0_0x1ea0f1;try{const {username:_0x137441,email:_0x293ae1,role:_0x4b25e7}=_0x5b4021[_0x7ba6f6(0x1ab)],_0x4dc783=_0x5b4021['user'],_0x5a1395=await profile['findOne']({'email':_0x4dc783[_0x7ba6f6(0x1a2)]}),_0x2af21f=await master_shop['find']();console['log'](_0x7ba6f6(0x194),_0x2af21f);const _0x396347=await suppliers[_0x7ba6f6(0x1b8)]();console[_0x7ba6f6(0x1b0)](_0x396347);if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]==_0x7ba6f6(0x1bb)){var _0x7512ce=users[_0x7ba6f6(0x1af)];console[_0x7ba6f6(0x1b0)](_0x7512ce);}else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]==_0x7ba6f6(0x199))var _0x7512ce=users['Hindi'];else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]==_0x7ba6f6(0x188))var _0x7512ce=users[_0x7ba6f6(0x188)];else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]==_0x7ba6f6(0x186))var _0x7512ce=users[_0x7ba6f6(0x186)];else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]=='French')var _0x7512ce=users[_0x7ba6f6(0x1ad)];else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]=='Portuguese\x20(BR)')var _0x7512ce=users[_0x7ba6f6(0x18d)];else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]==_0x7ba6f6(0x1bd))var _0x7512ce=users['Chinese'];else{if(_0x2af21f[0x0][_0x7ba6f6(0x1bc)]==_0x7ba6f6(0x1a1))var _0x7512ce=users[_0x7ba6f6(0x195)];}}}}}}}_0x12fdd9[_0x7ba6f6(0x19f)](_0x7ba6f6(0x19a),{'success':_0x5b4021[_0x7ba6f6(0x193)](_0x7ba6f6(0x1b1)),'errors':_0x5b4021['flash'](_0x7ba6f6(0x18a)),'role':_0x4dc783,'profile':_0x5a1395,'master_shop':_0x2af21f,'alldata':_0x396347,'language':_0x7512ce});}catch(_0x7d3119){console[_0x7ba6f6(0x1b0)](_0x7d3119);}}),router[a0_0x1ea0f1(0x1b2)](a0_0x1ea0f1(0x1b5),auth,async(_0xe806b2,_0x167b37)=>{var _0x8f5e83=a0_0x1ea0f1;try{const {username:_0x1116d8,email:_0x1b61b2,role:_0x950219}=_0xe806b2[_0x8f5e83(0x1ab)],_0x2b25ab=_0xe806b2[_0x8f5e83(0x1ab)],_0x89feb7=await profile[_0x8f5e83(0x1b9)]({'email':_0x2b25ab[_0x8f5e83(0x1a2)]}),_0x38a403=await master_shop[_0x8f5e83(0x1b8)]();console[_0x8f5e83(0x1b0)](_0x8f5e83(0x194),_0x38a403);const _0x480a7c=await purchases['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x8f5e83(0x1aa),'payable':0x1}}]);console[_0x8f5e83(0x1b0)](_0x8f5e83(0x18b),_0x480a7c);if(_0x38a403[0x0][_0x8f5e83(0x1bc)]==_0x8f5e83(0x1bb)){var _0x347d33=users[_0x8f5e83(0x1af)];console[_0x8f5e83(0x1b0)](_0x347d33);}else{if(_0x38a403[0x0][_0x8f5e83(0x1bc)]=='Hindi')var _0x347d33=users[_0x8f5e83(0x199)];else{if(_0x38a403[0x0][_0x8f5e83(0x1bc)]==_0x8f5e83(0x188))var _0x347d33=users['German'];else{if(_0x38a403[0x0]['language']==_0x8f5e83(0x186))var _0x347d33=users[_0x8f5e83(0x186)];else{if(_0x38a403[0x0][_0x8f5e83(0x1bc)]=='French')var _0x347d33=users['French'];else{if(_0x38a403[0x0][_0x8f5e83(0x1bc)]==_0x8f5e83(0x1ac))var _0x347d33=users[_0x8f5e83(0x18d)];else{if(_0x38a403[0x0]['language']==_0x8f5e83(0x1bd))var _0x347d33=users['Chinese'];else{if(_0x38a403[0x0][_0x8f5e83(0x1bc)]==_0x8f5e83(0x1a1))var _0x347d33=users[_0x8f5e83(0x195)];}}}}}}}_0x167b37[_0x8f5e83(0x19f)](_0x8f5e83(0x1a7),{'success':_0xe806b2[_0x8f5e83(0x193)]('success'),'errors':_0xe806b2[_0x8f5e83(0x193)](_0x8f5e83(0x18a)),'role':_0x2b25ab,'profile':_0x89feb7,'master_shop':_0x38a403,'alldata':_0x480a7c,'language':_0x347d33});}catch(_0x461620){console[_0x8f5e83(0x1b0)](_0x461620);}}),router[a0_0x1ea0f1(0x1b2)]('/purchase_return',auth,async(_0x2f1c2f,_0x544fec)=>{var _0x19213a=a0_0x1ea0f1;try{const {username:_0x580e82,email:_0x9ecdc5,role:_0x116baa}=_0x2f1c2f[_0x19213a(0x1ab)],_0x1586d8=_0x2f1c2f['user'],_0x38d61f=await profile[_0x19213a(0x1b9)]({'email':_0x1586d8['email']}),_0x300324=await master_shop[_0x19213a(0x1b8)]();console[_0x19213a(0x1b0)](_0x19213a(0x194),_0x300324);const _0x1364d5=await purchases_return[_0x19213a(0x1b4)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':'$return_product.product_name','receivable':0x1}}]);console['log'](_0x19213a(0x1b7),_0x1364d5);if(_0x300324[0x0][_0x19213a(0x1bc)]=='English\x20(US)'){var _0x250256=users[_0x19213a(0x1af)];console[_0x19213a(0x1b0)](_0x250256);}else{if(_0x300324[0x0]['language']=='Hindi')var _0x250256=users['Hindi'];else{if(_0x300324[0x0][_0x19213a(0x1bc)]==_0x19213a(0x188))var _0x250256=users[_0x19213a(0x188)];else{if(_0x300324[0x0][_0x19213a(0x1bc)]==_0x19213a(0x186))var _0x250256=users[_0x19213a(0x186)];else{if(_0x300324[0x0][_0x19213a(0x1bc)]=='French')var _0x250256=users[_0x19213a(0x1ad)];else{if(_0x300324[0x0][_0x19213a(0x1bc)]==_0x19213a(0x1ac))var _0x250256=users['Portuguese'];else{if(_0x300324[0x0][_0x19213a(0x1bc)]=='Chinese')var _0x250256=users[_0x19213a(0x1bd)];else{if(_0x300324[0x0][_0x19213a(0x1bc)]==_0x19213a(0x1a1))var _0x250256=users[_0x19213a(0x195)];}}}}}}}_0x544fec[_0x19213a(0x19f)](_0x19213a(0x1b7),{'success':_0x2f1c2f[_0x19213a(0x193)](_0x19213a(0x1b1)),'errors':_0x2f1c2f[_0x19213a(0x193)]('errors'),'role':_0x1586d8,'profile':_0x38d61f,'master_shop':_0x300324,'alldata':_0x1364d5,'language':_0x250256});}catch(_0x581bf8){console[_0x19213a(0x1b0)](_0x581bf8);}}),router[a0_0x1ea0f1(0x1b2)](a0_0x1ea0f1(0x1b3),auth,async(_0x43bead,_0x3ab239)=>{var _0x41cd57=a0_0x1ea0f1;try{const {username:_0x4c500d,email:_0x50ff4b,role:_0x1eb0d9}=_0x43bead['user'],_0x153f0a=_0x43bead['user'],_0xf65d94=await profile[_0x41cd57(0x1b9)]({'email':_0x153f0a['email']}),_0x4d9a51=await master_shop[_0x41cd57(0x1b8)]();console['log']('master',_0x4d9a51);const _0x129976=await sales[_0x41cd57(0x1b4)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x41cd57(0x1a6),'receivable_amount':0x1}}]);console[_0x41cd57(0x1b0)](_0x129976);if(_0x4d9a51[0x0][_0x41cd57(0x1bc)]=='English\x20(US)'){var _0x1abc2d=users[_0x41cd57(0x1af)];console[_0x41cd57(0x1b0)](_0x1abc2d);}else{if(_0x4d9a51[0x0]['language']=='Hindi')var _0x1abc2d=users[_0x41cd57(0x199)];else{if(_0x4d9a51[0x0][_0x41cd57(0x1bc)]==_0x41cd57(0x188))var _0x1abc2d=users[_0x41cd57(0x188)];else{if(_0x4d9a51[0x0]['language']==_0x41cd57(0x186))var _0x1abc2d=users[_0x41cd57(0x186)];else{if(_0x4d9a51[0x0]['language']=='French')var _0x1abc2d=users[_0x41cd57(0x1ad)];else{if(_0x4d9a51[0x0]['language']==_0x41cd57(0x1ac))var _0x1abc2d=users[_0x41cd57(0x18d)];else{if(_0x4d9a51[0x0]['language']==_0x41cd57(0x1bd))var _0x1abc2d=users[_0x41cd57(0x1bd)];else{if(_0x4d9a51[0x0][_0x41cd57(0x1bc)]==_0x41cd57(0x1a1))var _0x1abc2d=users[_0x41cd57(0x195)];}}}}}}}_0x3ab239['render'](_0x41cd57(0x1a3),{'success':_0x43bead[_0x41cd57(0x193)](_0x41cd57(0x1b1)),'errors':_0x43bead['flash'](_0x41cd57(0x18a)),'role':_0x153f0a,'profile':_0xf65d94,'master_shop':_0x4d9a51,'alldata':_0x129976,'language':_0x1abc2d});}catch(_0x141128){console[_0x41cd57(0x1b0)](_0x141128);}}),router['get'](a0_0x1ea0f1(0x187),auth,async(_0x50e109,_0x5392d9)=>{var _0x1c9788=a0_0x1ea0f1;try{const {username:_0x42cca3,email:_0x2639b2,role:_0x115f86}=_0x50e109[_0x1c9788(0x1ab)],_0x4cb328=_0x50e109[_0x1c9788(0x1ab)],_0x44b622=await profile[_0x1c9788(0x1b9)]({'email':_0x4cb328['email']}),_0x31e65d=await master_shop[_0x1c9788(0x1b8)]();console[_0x1c9788(0x1b0)]('master',_0x31e65d);const _0x573a7d=await sales_return[_0x1c9788(0x1b4)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x1c9788(0x19e),'payable_to_customer':0x1}}]);console['log'](_0x573a7d);if(_0x31e65d[0x0]['language']==_0x1c9788(0x1bb)){var _0x29e1da=users[_0x1c9788(0x1af)];console[_0x1c9788(0x1b0)](_0x29e1da);}else{if(_0x31e65d[0x0]['language']=='Hindi')var _0x29e1da=users['Hindi'];else{if(_0x31e65d[0x0][_0x1c9788(0x1bc)]=='German')var _0x29e1da=users[_0x1c9788(0x188)];else{if(_0x31e65d[0x0][_0x1c9788(0x1bc)]==_0x1c9788(0x186))var _0x29e1da=users[_0x1c9788(0x186)];else{if(_0x31e65d[0x0][_0x1c9788(0x1bc)]==_0x1c9788(0x1ad))var _0x29e1da=users[_0x1c9788(0x1ad)];else{if(_0x31e65d[0x0][_0x1c9788(0x1bc)]==_0x1c9788(0x1ac))var _0x29e1da=users[_0x1c9788(0x18d)];else{if(_0x31e65d[0x0]['language']==_0x1c9788(0x1bd))var _0x29e1da=users['Chinese'];else{if(_0x31e65d[0x0][_0x1c9788(0x1bc)]==_0x1c9788(0x1a1))var _0x29e1da=users[_0x1c9788(0x195)];}}}}}}}_0x5392d9[_0x1c9788(0x19f)]('sales_return_report',{'success':_0x50e109[_0x1c9788(0x193)](_0x1c9788(0x1b1)),'errors':_0x50e109[_0x1c9788(0x193)](_0x1c9788(0x18a)),'role':_0x4cb328,'profile':_0x44b622,'master_shop':_0x31e65d,'alldata':_0x573a7d,'language':_0x29e1da});}catch(_0x50c1bc){console[_0x1c9788(0x1b0)](_0x50c1bc);}}),router[a0_0x1ea0f1(0x1b2)](a0_0x1ea0f1(0x19d),auth,async(_0x1117c3,_0x57c266)=>{var _0x321284=a0_0x1ea0f1;try{const {username:_0x50c87c,email:_0x471e66,role:_0x4a8e1a}=_0x1117c3[_0x321284(0x1ab)],_0x5a6e66=_0x1117c3[_0x321284(0x1ab)],_0x48f488=await profile[_0x321284(0x1b9)]({'email':_0x5a6e66[_0x321284(0x1a2)]}),_0x4cc7d7=await master_shop['find']();console[_0x321284(0x1b0)](_0x321284(0x194),_0x4cc7d7);const _0x2446dd=await adjustment[_0x321284(0x1b8)]();console[_0x321284(0x1b0)](_0x2446dd);if(_0x4cc7d7[0x0][_0x321284(0x1bc)]==_0x321284(0x1bb)){var _0x416cfd=users[_0x321284(0x1af)];console[_0x321284(0x1b0)](_0x416cfd);}else{if(_0x4cc7d7[0x0]['language']==_0x321284(0x199))var _0x416cfd=users[_0x321284(0x199)];else{if(_0x4cc7d7[0x0][_0x321284(0x1bc)]=='German')var _0x416cfd=users[_0x321284(0x188)];else{if(_0x4cc7d7[0x0][_0x321284(0x1bc)]==_0x321284(0x186))var _0x416cfd=users[_0x321284(0x186)];else{if(_0x4cc7d7[0x0][_0x321284(0x1bc)]==_0x321284(0x1ad))var _0x416cfd=users[_0x321284(0x1ad)];else{if(_0x4cc7d7[0x0]['language']==_0x321284(0x1ac))var _0x416cfd=users[_0x321284(0x18d)];else{if(_0x4cc7d7[0x0][_0x321284(0x1bc)]=='Chinese')var _0x416cfd=users[_0x321284(0x1bd)];else{if(_0x4cc7d7[0x0][_0x321284(0x1bc)]==_0x321284(0x1a1))var _0x416cfd=users[_0x321284(0x195)];}}}}}}}_0x57c266['render'](_0x321284(0x1ba),{'success':_0x1117c3[_0x321284(0x193)]('success'),'errors':_0x1117c3[_0x321284(0x193)]('errors'),'role':_0x5a6e66,'profile':_0x48f488,'master_shop':_0x4cc7d7,'alldata':_0x2446dd,'language':_0x416cfd});}catch(_0x4e4163){console[_0x321284(0x1b0)](_0x4e4163);}}),router[a0_0x1ea0f1(0x1b2)]('/transfer',auth,async(_0x1aff40,_0x36013b)=>{var _0x1496e6=a0_0x1ea0f1;try{const {username:_0x26e859,email:_0x4e0a11,role:_0x377500}=_0x1aff40[_0x1496e6(0x1ab)],_0x1c37c3=_0x1aff40[_0x1496e6(0x1ab)],_0x57c3bc=await profile[_0x1496e6(0x1b9)]({'email':_0x1c37c3['email']}),_0x13c7d0=await master_shop[_0x1496e6(0x1b8)]();console[_0x1496e6(0x1b0)](_0x1496e6(0x194),_0x13c7d0);const _0x2920b0=await transfers[_0x1496e6(0x1b8)]();console[_0x1496e6(0x1b0)](_0x2920b0);if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]=='English\x20(US)'){var _0x5e4ef4=users[_0x1496e6(0x1af)];console['log'](_0x5e4ef4);}else{if(_0x13c7d0[0x0]['language']==_0x1496e6(0x199))var _0x5e4ef4=users[_0x1496e6(0x199)];else{if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]=='German')var _0x5e4ef4=users[_0x1496e6(0x188)];else{if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]==_0x1496e6(0x186))var _0x5e4ef4=users['Spanish'];else{if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]==_0x1496e6(0x1ad))var _0x5e4ef4=users[_0x1496e6(0x1ad)];else{if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]==_0x1496e6(0x1ac))var _0x5e4ef4=users[_0x1496e6(0x18d)];else{if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]==_0x1496e6(0x1bd))var _0x5e4ef4=users[_0x1496e6(0x1bd)];else{if(_0x13c7d0[0x0][_0x1496e6(0x1bc)]==_0x1496e6(0x1a1))var _0x5e4ef4=users['Arabic'];}}}}}}}_0x36013b[_0x1496e6(0x19f)](_0x1496e6(0x18f),{'success':_0x1aff40[_0x1496e6(0x193)](_0x1496e6(0x1b1)),'errors':_0x1aff40[_0x1496e6(0x193)](_0x1496e6(0x18a)),'role':_0x1c37c3,'profile':_0x57c3bc,'master_shop':_0x13c7d0,'alldata':_0x2920b0,'language':_0x5e4ef4});}catch(_0x4a4a0f){console['log'](_0x4a4a0f);}}),router[a0_0x1ea0f1(0x1b2)](a0_0x1ea0f1(0x185),auth,async(_0x255e80,_0x2d5be3)=>{var _0x3faa72=a0_0x1ea0f1;try{const {username:_0x3b3c04,email:_0x5c1694,role:_0x373a6c}=_0x255e80[_0x3faa72(0x1ab)],_0x266a4e=_0x255e80[_0x3faa72(0x1ab)],_0x1492eb=await profile[_0x3faa72(0x1b9)]({'email':_0x266a4e[_0x3faa72(0x1a2)]}),_0x453a82=await master_shop[_0x3faa72(0x1b8)]();console[_0x3faa72(0x1b0)](_0x3faa72(0x194),_0x453a82);const _0xf08692=await all_expenses[_0x3faa72(0x1b8)]();console['log'](_0xf08692);if(_0x453a82[0x0][_0x3faa72(0x1bc)]==_0x3faa72(0x1bb)){var _0xbeb3e0=users['English'];console['log'](_0xbeb3e0);}else{if(_0x453a82[0x0][_0x3faa72(0x1bc)]==_0x3faa72(0x199))var _0xbeb3e0=users[_0x3faa72(0x199)];else{if(_0x453a82[0x0][_0x3faa72(0x1bc)]=='German')var _0xbeb3e0=users['German'];else{if(_0x453a82[0x0]['language']==_0x3faa72(0x186))var _0xbeb3e0=users[_0x3faa72(0x186)];else{if(_0x453a82[0x0]['language']=='French')var _0xbeb3e0=users[_0x3faa72(0x1ad)];else{if(_0x453a82[0x0][_0x3faa72(0x1bc)]==_0x3faa72(0x1ac))var _0xbeb3e0=users[_0x3faa72(0x18d)];else{if(_0x453a82[0x0][_0x3faa72(0x1bc)]=='Chinese')var _0xbeb3e0=users[_0x3faa72(0x1bd)];else{if(_0x453a82[0x0][_0x3faa72(0x1bc)]==_0x3faa72(0x1a1))var _0xbeb3e0=users[_0x3faa72(0x195)];}}}}}}}_0x2d5be3[_0x3faa72(0x19f)](_0x3faa72(0x19c),{'success':_0x255e80[_0x3faa72(0x193)]('success'),'errors':_0x255e80[_0x3faa72(0x193)](_0x3faa72(0x18a)),'role':_0x266a4e,'profile':_0x1492eb,'master_shop':_0x453a82,'alldata':_0xf08692,'language':_0xbeb3e0});}catch(_0x2d77fb){console[_0x3faa72(0x1b0)](_0x2d77fb);}}),module[a0_0x1ea0f1(0x1a0)]=router;function a0_0x2922(){var _0x2fe220=['French','../public/language/languages.json','English','log','success','get','/sale','aggregate','/purchases','278308iTJhbX','purchases_return_report','find','findOne','adjustment_report','English\x20(US)','language','Chinese','/expense','Spanish','/sale_return','German','1826136ReyIci','errors','purchases\x20report','950833mtpbZE','Portuguese','Router','transfer_report','../models/all_models','215ksMvYO','customer_report','flash','master','Arabic','48364fdRFnl','express','24867UFLmtP','Hindi','supplier_report','21447860wsrZPX','expense_report','/adjustment','$return_sale.product_name','render','exports','Arabic\x20(ae)','email','sales_report','5081748mpispv','/supplier','$sale_product.product_name','purchases_report','2064tyLkGU','7bXbojR','$product.product_name','user','Portuguese\x20(BR)'];a0_0x2922=function(){return _0x2fe220;};return a0_0x2922();}