const a0_0x52de77=a0_0x2bb3;(function(_0x176f80,_0x2a39f7){const _0x19534b=a0_0x2bb3,_0x255f81=_0x176f80();while(!![]){try{const _0x596b8f=parseInt(_0x19534b(0x1d7))/0x1*(-parseInt(_0x19534b(0x1c4))/0x2)+-parseInt(_0x19534b(0x187))/0x3*(-parseInt(_0x19534b(0x1ba))/0x4)+-parseInt(_0x19534b(0x1a4))/0x5+-parseInt(_0x19534b(0x1b2))/0x6*(-parseInt(_0x19534b(0x1e4))/0x7)+parseInt(_0x19534b(0x1db))/0x8*(parseInt(_0x19534b(0x185))/0x9)+-parseInt(_0x19534b(0x18f))/0xa*(parseInt(_0x19534b(0x18c))/0xb)+parseInt(_0x19534b(0x1a2))/0xc;if(_0x596b8f===_0x2a39f7)break;else _0x255f81['push'](_0x255f81['shift']());}catch(_0x592aa6){_0x255f81['push'](_0x255f81['shift']());}}}(a0_0x52a1,0x63a23));const express=require(a0_0x52de77(0x1de)),app=express(),router=express[a0_0x52de77(0x191)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require('../models/all_models'),auth=require(a0_0x52de77(0x19e)),users=require(a0_0x52de77(0x182)),excelJS=require('exceljs'),xlsx=require('xlsx'),multer=require(a0_0x52de77(0x1ce));router[a0_0x52de77(0x1dd)]('/view',auth,async(_0x1206b4,_0xd982c2)=>{const _0x3f902f=a0_0x52de77;try{const {username:_0x11f473,email:_0x5260ea,role:_0x14a34e}=_0x1206b4[_0x3f902f(0x1e8)],_0x1a85f1=_0x1206b4[_0x3f902f(0x1e8)],_0x4eb6f2=await profile['findOne']({'email':_0x1a85f1['email']}),_0x1d41c0=await master_shop['find']();console['log'](_0x3f902f(0x1d2),_0x1d41c0);const _0x4eee3f=await customer[_0x3f902f(0x1c7)](),_0x2dcd58=await customer['aggregate']([{'$lookup':{'from':_0x3f902f(0x1d6),'localField':_0x3f902f(0x1bc),'foreignField':_0x3f902f(0x1a0),'as':'customer_docs'}}]);console[_0x3f902f(0x1ab)](_0x2dcd58);const _0x2b1650=_0x2dcd58[_0x3f902f(0x1a7)](_0x1edf1b=>{const _0x237837=_0x3f902f;console[_0x237837(0x1ab)](_0x237837(0x189),_0x1edf1b);var _0x21352f=0x0,_0x3ec757=0x0;return _0x1edf1b[_0x237837(0x1c1)][_0x237837(0x1a3)](_0x22a55a=>{const _0xd4e6e9=_0x237837;console[_0xd4e6e9(0x1ab)](_0xd4e6e9(0x1dc),_0x22a55a),_0x22a55a[_0xd4e6e9(0x1e7)]==_0xd4e6e9(0x184)?_0x21352f+=_0x22a55a['amount']:_0x3ec757+=_0x22a55a[_0xd4e6e9(0x1d5)];}),_0x1edf1b[_0x237837(0x1cb)]=parseFloat(_0x21352f)+0x0,_0x1edf1b[_0x237837(0x18a)]=parseFloat(_0x3ec757)+0x0,_0x1edf1b;});console[_0x3f902f(0x1ab)](_0x3f902f(0x1bd),_0x2b1650);if(_0x1d41c0[0x0][_0x3f902f(0x186)]=='English\x20(US)'){var _0x102ed9=users['English'];console[_0x3f902f(0x1ab)](_0x102ed9);}else{if(_0x1d41c0[0x0][_0x3f902f(0x186)]==_0x3f902f(0x1b6))var _0x102ed9=users['Hindi'];else{if(_0x1d41c0[0x0][_0x3f902f(0x186)]==_0x3f902f(0x1c9))var _0x102ed9=users['German'];else{if(_0x1d41c0[0x0][_0x3f902f(0x186)]==_0x3f902f(0x1d8))var _0x102ed9=users['Spanish'];else{if(_0x1d41c0[0x0][_0x3f902f(0x186)]==_0x3f902f(0x1b8))var _0x102ed9=users[_0x3f902f(0x1b8)];else{if(_0x1d41c0[0x0][_0x3f902f(0x186)]=='Portuguese\x20(BR)')var _0x102ed9=users[_0x3f902f(0x1ad)];else{if(_0x1d41c0[0x0]['language']==_0x3f902f(0x190))var _0x102ed9=users[_0x3f902f(0x190)];else{if(_0x1d41c0[0x0]['language']==_0x3f902f(0x1d1))var _0x102ed9=users[_0x3f902f(0x1d3)];}}}}}}}_0xd982c2['render'](_0x3f902f(0x1a0),{'success':_0x1206b4[_0x3f902f(0x1c5)](_0x3f902f(0x181)),'errors':_0x1206b4[_0x3f902f(0x1c5)](_0x3f902f(0x1c3)),'user':_0x4eee3f,'role':_0x1a85f1,'profile':_0x4eb6f2,'payment':_0x2b1650,'master_shop':_0x1d41c0,'language':_0x102ed9});}catch(_0x4bd81e){console[_0x3f902f(0x1ab)](_0x4bd81e);}}),router[a0_0x52de77(0x17d)](a0_0x52de77(0x1bf),auth,async(_0x52660a,_0x34abef)=>{const _0x437344=a0_0x52de77;try{const {name:_0xde1e61,address:_0x4404f8,mobile:_0x271789,email:_0x240e22,receivable:_0x3d9a8b,payable:_0x1c50d9,contactperson:_0x5bb388,landline:_0xd59a6}=_0x52660a[_0x437344(0x195)],_0x4dfb59=new customer({'name':_0xde1e61,'address':_0x4404f8,'mobile':_0x271789,'email':_0x240e22,'receivable':_0x3d9a8b,'payable':_0x1c50d9,'contactperson':_0x5bb388,'landline':_0xd59a6}),_0x5a2c40=await _0x4dfb59[_0x437344(0x1cc)]();_0x52660a[_0x437344(0x1c5)](_0x437344(0x181),_0x437344(0x1a9)),_0x34abef[_0x437344(0x1a5)]('/customer/view');}catch(_0x569a03){console[_0x437344(0x1ab)](_0x569a03);}}),router[a0_0x52de77(0x1dd)](a0_0x52de77(0x1ac),auth,async(_0xf09d79,_0x27605f)=>{const _0x22c66f=a0_0x52de77;try{const {username:_0x4c35d3,email:_0x29fcc3,role:_0x1937fa}=_0xf09d79['user'],_0x56fdf0=_0xf09d79[_0x22c66f(0x1e8)],_0x2ec18f=await profile[_0x22c66f(0x1e0)]({'email':_0x56fdf0[_0x22c66f(0x1b3)]}),_0x2e8af1=await master_shop[_0x22c66f(0x1c7)]();console[_0x22c66f(0x1ab)](_0x22c66f(0x1d2),_0x2e8af1);const _0x3080c3=_0xf09d79[_0x22c66f(0x18e)]['id'],_0x3ec3f7=await customer[_0x22c66f(0x1cd)](_0x3080c3);if(_0x2e8af1[0x0][_0x22c66f(0x186)]==_0x22c66f(0x1b5)){var _0x534354=users['English'];console[_0x22c66f(0x1ab)](_0x534354);}else{if(_0x2e8af1[0x0]['language']==_0x22c66f(0x1b6))var _0x534354=users[_0x22c66f(0x1b6)];else{if(_0x2e8af1[0x0][_0x22c66f(0x186)]==_0x22c66f(0x1c9))var _0x534354=users[_0x22c66f(0x1c9)];else{if(_0x2e8af1[0x0][_0x22c66f(0x186)]==_0x22c66f(0x1d8))var _0x534354=users[_0x22c66f(0x1d8)];else{if(_0x2e8af1[0x0][_0x22c66f(0x186)]==_0x22c66f(0x1b8))var _0x534354=users[_0x22c66f(0x1b8)];else{if(_0x2e8af1[0x0][_0x22c66f(0x186)]=='Portuguese\x20(BR)')var _0x534354=users[_0x22c66f(0x1ad)];else{if(_0x2e8af1[0x0][_0x22c66f(0x186)]==_0x22c66f(0x190))var _0x534354=users[_0x22c66f(0x190)];else{if(_0x2e8af1[0x0]['language']==_0x22c66f(0x1d1))var _0x534354=users[_0x22c66f(0x1d3)];}}}}}}}_0x27605f[_0x22c66f(0x1af)](_0x22c66f(0x1a0),{'success':_0xf09d79[_0x22c66f(0x1c5)](_0x22c66f(0x181)),'errors':_0xf09d79['flash'](_0x22c66f(0x1c3)),'role':_0x56fdf0,'profile':_0x2ec18f,'user':_0x3ec3f7,'master_shop':_0x2e8af1,'language':_0x534354});}catch(_0x4e69ec){console[_0x22c66f(0x1ab)](_0x4e69ec);}}),router[a0_0x52de77(0x17d)](a0_0x52de77(0x1ac),auth,async(_0x39907b,_0x4365e0)=>{const _0x3ff084=a0_0x52de77;try{const _0x6f6ca6=_0x39907b[_0x3ff084(0x18e)]['id'],_0x413372=await customer['findById'](_0x6f6ca6),{name:_0x51324d,address:_0x19feaa,mobile:_0x467ffb,email:_0x2900c5,receivable:_0x148b68,payable:_0x425427,contactperson:_0x213aa7,landline:_0x58921a}=_0x39907b['body'];_0x413372['name']=_0x51324d,_0x413372['address']=_0x19feaa,_0x413372[_0x3ff084(0x18b)]=_0x467ffb,_0x413372[_0x3ff084(0x1b3)]=_0x2900c5,_0x413372[_0x3ff084(0x1ae)]=_0x148b68,_0x413372['payable']=_0x425427,_0x413372['contactperson']=_0x213aa7,_0x413372[_0x3ff084(0x17c)]=_0x58921a;const _0x514f9b=await _0x413372['save']();_0x39907b[_0x3ff084(0x1c5)](_0x3ff084(0x181),_0x3ff084(0x1aa)),_0x4365e0[_0x3ff084(0x1a5)](_0x3ff084(0x19d));}catch(_0x4b9d8c){console[_0x3ff084(0x1ab)](_0x4b9d8c);}}),router[a0_0x52de77(0x1dd)](a0_0x52de77(0x1be),auth,async(_0x2b1344,_0x3ffe06)=>{const _0x2dda3c=a0_0x52de77;try{const {username:_0x2fc2dc,email:_0x404daa,role:_0x4de92d}=_0x2b1344['user'],_0xa24b9=_0x2b1344[_0x2dda3c(0x1e8)],_0x36c73e=await profile[_0x2dda3c(0x1e0)]({'email':_0xa24b9[_0x2dda3c(0x1b3)]}),_0x59c014=await master_shop[_0x2dda3c(0x1c7)]();console['log']('master',_0x59c014),console[_0x2dda3c(0x1ab)](_0x2b1344[_0x2dda3c(0x18e)]['id']);const _0x464ec1=await customer['findOne']({'_id':_0x2b1344[_0x2dda3c(0x18e)]['id']});console[_0x2dda3c(0x1ab)](_0x2dda3c(0x1e2),_0x464ec1);const _0x3b4969=await c_payment_data[_0x2dda3c(0x1c7)]({'customer':_0x464ec1['name']});console[_0x2dda3c(0x1ab)](_0x3b4969);const _0x5ea881=await c_payment_data['aggregate']([{'$match':{'customer':_0x464ec1[_0x2dda3c(0x1bc)]}},{'$match':{'reason':_0x2dda3c(0x184)}},{'$group':{'_id':_0x2dda3c(0x1a6),'sum':{'$sum':_0x2dda3c(0x1c6)}}}]);console[_0x2dda3c(0x1ab)](_0x2dda3c(0x1b7),_0x5ea881);const _0x1fa66d=await c_payment_data[_0x2dda3c(0x194)]([{'$match':{'customer':_0x464ec1['name']}},{'$match':{'reason':_0x2dda3c(0x180)}},{'$group':{'_id':_0x2dda3c(0x1a6),'sum':{'$sum':_0x2dda3c(0x1c6)}}}]);console['log'](_0x2dda3c(0x17e),_0x1fa66d);if(_0x59c014[0x0]['language']==_0x2dda3c(0x1b5)){var _0x51088f=users[_0x2dda3c(0x1e3)];console[_0x2dda3c(0x1ab)](_0x51088f);}else{if(_0x59c014[0x0][_0x2dda3c(0x186)]==_0x2dda3c(0x1b6))var _0x51088f=users[_0x2dda3c(0x1b6)];else{if(_0x59c014[0x0][_0x2dda3c(0x186)]==_0x2dda3c(0x1c9))var _0x51088f=users[_0x2dda3c(0x1c9)];else{if(_0x59c014[0x0]['language']==_0x2dda3c(0x1d8))var _0x51088f=users[_0x2dda3c(0x1d8)];else{if(_0x59c014[0x0][_0x2dda3c(0x186)]==_0x2dda3c(0x1b8))var _0x51088f=users['French'];else{if(_0x59c014[0x0][_0x2dda3c(0x186)]==_0x2dda3c(0x1df))var _0x51088f=users[_0x2dda3c(0x1ad)];else{if(_0x59c014[0x0][_0x2dda3c(0x186)]=='Chinese')var _0x51088f=users[_0x2dda3c(0x190)];else{if(_0x59c014[0x0]['language']==_0x2dda3c(0x1d1))var _0x51088f=users[_0x2dda3c(0x1d3)];}}}}}}}_0x3ffe06[_0x2dda3c(0x1af)]('customer_payment',{'success':_0x2b1344['flash']('success'),'errors':_0x2b1344[_0x2dda3c(0x1c5)](_0x2dda3c(0x1c3)),'role':_0xa24b9,'profile':_0x36c73e,'payment':_0x3b4969,'payable':_0x5ea881,'receivable':_0x1fa66d,'master_shop':_0x59c014,'language':_0x51088f});}catch(_0xb60b5b){console[_0x2dda3c(0x1ab)](_0xb60b5b);}}),router[a0_0x52de77(0x1dd)](a0_0x52de77(0x1d9),auth,async(_0x5a3062,_0x506008)=>{const _0x3ec5ad=a0_0x52de77;try{const _0x333ccd=new excelJS[(_0x3ec5ad(0x1a8))](),_0x14ba7a=_0x333ccd[_0x3ec5ad(0x1cf)]('Customers');return _0x14ba7a[_0x3ec5ad(0x193)]=[{'header':'ID','key':_0x3ec5ad(0x188),'width':0xa},{'header':'Name','key':_0x3ec5ad(0x19a),'width':0xa},{'header':_0x3ec5ad(0x1bb),'key':_0x3ec5ad(0x1b0),'width':0xa},{'header':_0x3ec5ad(0x1ca),'key':'SalesmanName','width':0xa},{'header':_0x3ec5ad(0x1d0),'key':'address','width':0xa},{'header':_0x3ec5ad(0x18b),'key':_0x3ec5ad(0x18b),'width':0xa},{'header':_0x3ec5ad(0x1b3),'key':_0x3ec5ad(0x1b3),'width':0xa}],_0x506008[_0x3ec5ad(0x19b)](_0x3ec5ad(0x1b9),_0x3ec5ad(0x1b1)),_0x506008['setHeader']('Content-Disposition','attachment;\x20filename=customer_Migration_File.xlsx'),_0x333ccd['xlsx'][_0x3ec5ad(0x183)](_0x506008)[_0x3ec5ad(0x196)](()=>{const _0x8cd8d3=_0x3ec5ad;_0x506008[_0x8cd8d3(0x199)](0xc8);});}catch(_0x11a9ac){_0x506008[_0x3ec5ad(0x199)](0x190)['send']({'errors':_0x11a9ac[_0x3ec5ad(0x192)]});}});function a0_0x52a1(){const _0x13ea8d=['112746NPmRpv','email','diskStorage','English\x20(US)','Hindi','payable_sum','French','Content-Type','229196kyomyo','SalesmanCode','name','payment_data','/view/payment/:id','/view','public/Migration/','customer_docs','SheetNames','errors','219436zHRctw','flash','$amount','find','originalname','German','SalesmanName','sale','save','findById','multer','addWorksheet','address','Arabic\x20(ae)','master','Arabic','now','amount','c_payments','2Ekhxrj','Spanish','/products_export_migrate_file','\x20Failed','1898384xpvrPw','element','get','express','Portuguese\x20(BR)','findOne','public/Migration','customer_data','English','56WOZzTc','json','file','reason','user','landline','post','receivable_sum','/customer_import_migrate_file','Sale\x20Return','success','../public/language/languages.json','write','Sale','18BcUJOm','language','21yRVLKW','PName','data','sale_return','mobile','1217491zYQDxP','filename','params','70crlfec','Chinese','Router','message','columns','aggregate','body','then','utils','readFile','status','PBrands','setHeader','customer_product_fule','/customer/view','../middleware/auth','\x20added\x20successfully','customer','sheet_to_json','6942576nvsVQA','forEach','1011315biZCEk','redirect','$reason','map','Workbook','customer\x20add\x20successfully','customer\x20update\x20successfully','log','/view/:id','Portuguese','receivable','render','PUnits','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'];a0_0x52a1=function(){return _0x13ea8d;};return a0_0x52a1();}const storage1=multer[a0_0x52de77(0x1b4)]({'destination':(_0x223b1d,_0x38a427,_0x5a3fb8)=>{const _0x977978=a0_0x52de77;_0x5a3fb8(null,_0x977978(0x1e1));},'filename':(_0x32f9a5,_0x246e84,_0x350514)=>{const _0x5923c6=a0_0x52de77;_0x350514(null,Date[_0x5923c6(0x1d4)]()+_0x246e84[_0x5923c6(0x1c8)]);}}),uploadMigrate=multer({'storage':storage1});function a0_0x2bb3(_0x3c7f15,_0x5e09e3){const _0x52a195=a0_0x52a1();return a0_0x2bb3=function(_0x2bb37c,_0x3d8f31){_0x2bb37c=_0x2bb37c-0x17c;let _0xf7e6eb=_0x52a195[_0x2bb37c];return _0xf7e6eb;},a0_0x2bb3(_0x3c7f15,_0x5e09e3);}router['post'](a0_0x52de77(0x17f),auth,uploadMigrate['single'](a0_0x52de77(0x19c)),async(_0xdc3897,_0x407d44)=>{const _0x1d2444=a0_0x52de77,_0x3ea1e5=_0xdc3897[_0x1d2444(0x1e6)][_0x1d2444(0x18d)],_0x47e3ef=await xlsx[_0x1d2444(0x198)](_0x1d2444(0x1c0)+_0x3ea1e5);let _0x3898f0=_0x47e3ef[_0x1d2444(0x1c2)],_0x3a3b33=xlsx[_0x1d2444(0x197)][_0x1d2444(0x1a1)](_0x47e3ef['Sheets'][_0x3898f0[0x0]]);for(const _0x6b713f of _0x3a3b33){const _0x2bc80a=_0x6b713f['ID'],_0x2dc90a=_0x6b713f['Name'],_0x1bc284=_0x6b713f['SalesmanCode'],_0x4701e9=_0x6b713f[_0x1d2444(0x1ca)],_0x585abd=_0x6b713f['address'],_0x27de89=_0x6b713f[_0x1d2444(0x18b)],_0x333885=_0x6b713f[_0x1d2444(0x1b3)];try{let _0x3a4a9a=await customer['findOne']({'name':_0x2dc90a});if(!_0x3a4a9a){const _0x461cd6=new customer({'name':_0x2dc90a,'ID':_0x2bc80a,'SalesmanCode':_0x1bc284,'SalesmanName':_0x4701e9,'address':_0x585abd,'mobile':_0x27de89,'email':_0x333885});_0x3a4a9a=await _0x461cd6[_0x1d2444(0x1cc)](),_0xdc3897[_0x1d2444(0x1c5)](_0x1d2444(0x181),_0x2dc90a+_0x1d2444(0x19f));}else _0xdc3897['flash']('error',_0x2dc90a+_0x1d2444(0x1da));}catch(_0x1e868e){_0x407d44[_0x1d2444(0x199)](0x1f4)[_0x1d2444(0x1e5)]({'proderror':_0x1e868e[_0x1d2444(0x192)],'aproduct':ProductName});}}_0x407d44['redirect'](_0x1d2444(0x19d));}),module['exports']=router;