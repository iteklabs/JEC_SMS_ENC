function a0_0x9abe(){const _0x32a86d=['10govSXG','4673583GwRFvy','payable_sum','message','English','reason','params','21594925MAqjTW','file','customer_payment','exports','now','contactperson','74449XlHUhg','render','Sale','customer_data','French','90285FqqbRx','data','sale_return','1332728LLQDJP','SalesmanName','redirect','889WsRAZr','save','sheet_to_json','German','\x20Failed','customer','Customers','then','errors','payable','aggregate','c_payments','find','map','setHeader','606eMUBUc','Arabic\x20(ae)','Hindi','write','diskStorage','Portuguese','post','landline','json','express','user','readFile','success','Router','/view/payment/:id','/products_export_migrate_file','name','amount','forEach','$reason','xlsx','single','../middleware/auth','customer\x20add\x20successfully','findById','PName','Spanish','status','receivable_sum','Content-Disposition','master','get','mobile','Chinese','public/Migration','log','error','$amount','address','findOne','customer_docs','Portuguese\x20(BR)','../public/language/languages.json','\x20added\x20successfully','Workbook','attachment;\x20filename=customer_Migration_File.xlsx','columns','receivable','PUnits','originalname','44zNcXVj','/customer/view','email','SalesmanCode','payment_data','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','flash','language','PBrands','public/Migration/','Arabic','/view/:id','/view','English\x20(US)','Content-Type','19045aRXxbc','26968mQTyfS','multer','body','/customer_import_migrate_file'];a0_0x9abe=function(){return _0x32a86d;};return a0_0x9abe();}const a0_0x2a1c38=a0_0x4499;(function(_0x435709,_0x507758){const _0xa73c2c=a0_0x4499,_0x31af5b=_0x435709();while(!![]){try{const _0x3afaab=parseInt(_0xa73c2c(0x1e7))/0x1+parseInt(_0xa73c2c(0x1c6))/0x2*(-parseInt(_0xa73c2c(0x1ec))/0x3)+parseInt(_0xa73c2c(0x1ef))/0x4+-parseInt(_0xa73c2c(0x1d5))/0x5*(parseInt(_0xa73c2c(0x194))/0x6)+-parseInt(_0xa73c2c(0x1f2))/0x7*(parseInt(_0xa73c2c(0x1d6))/0x8)+parseInt(_0xa73c2c(0x1db))/0x9*(-parseInt(_0xa73c2c(0x1da))/0xa)+parseInt(_0xa73c2c(0x1e1))/0xb;if(_0x3afaab===_0x507758)break;else _0x31af5b['push'](_0x31af5b['shift']());}catch(_0x1ec427){_0x31af5b['push'](_0x31af5b['shift']());}}}(a0_0x9abe,0x5bf1b));function a0_0x4499(_0x3a2f52,_0x2b444){const _0x9abe36=a0_0x9abe();return a0_0x4499=function(_0x449914,_0x2a31d9){_0x449914=_0x449914-0x18a;let _0x41c89c=_0x9abe36[_0x449914];return _0x41c89c;},a0_0x4499(_0x3a2f52,_0x2b444);}const express=require(a0_0x2a1c38(0x19d)),app=express(),router=express[a0_0x2a1c38(0x1a1)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require('../models/all_models'),auth=require(a0_0x2a1c38(0x1aa)),users=require(a0_0x2a1c38(0x1be)),excelJS=require('exceljs'),xlsx=require(a0_0x2a1c38(0x1a8)),multer=require(a0_0x2a1c38(0x1d7));router[a0_0x2a1c38(0x1b3)](a0_0x2a1c38(0x1d2),auth,async(_0x5f28eb,_0xcd0293)=>{const _0x135025=a0_0x2a1c38;try{const {username:_0x2b6714,email:_0x20fbe,role:_0xaced39}=_0x5f28eb[_0x135025(0x19e)],_0x23ffb0=_0x5f28eb[_0x135025(0x19e)],_0x12d57e=await profile['findOne']({'email':_0x23ffb0[_0x135025(0x1c8)]}),_0x3a4614=await master_shop[_0x135025(0x191)]();console[_0x135025(0x1b7)](_0x135025(0x1b2),_0x3a4614);const _0x3907e2=await customer[_0x135025(0x191)](),_0x2646b4=await customer['aggregate']([{'$lookup':{'from':_0x135025(0x190),'localField':'name','foreignField':'customer','as':_0x135025(0x1bc)}}]);console['log'](_0x2646b4);const _0x22fddc=_0x2646b4[_0x135025(0x192)](_0x361160=>{const _0xc1d37c=_0x135025;console['log'](_0xc1d37c(0x1ed),_0x361160);var _0x25cb5f=0x0,_0x53e037=0x0;return _0x361160[_0xc1d37c(0x1bc)][_0xc1d37c(0x1a6)](_0x4d6f72=>{const _0x487225=_0xc1d37c;console['log']('element',_0x4d6f72),_0x4d6f72[_0x487225(0x1df)]==_0x487225(0x1e9)?_0x25cb5f+=_0x4d6f72['amount']:_0x53e037+=_0x4d6f72[_0x487225(0x1a5)];}),_0x361160['sale']=parseFloat(_0x25cb5f)+0x0,_0x361160[_0xc1d37c(0x1ee)]=parseFloat(_0x53e037)+0x0,_0x361160;});console[_0x135025(0x1b7)](_0x135025(0x1ca),_0x22fddc);if(_0x3a4614[0x0][_0x135025(0x1cd)]==_0x135025(0x1d3)){var _0x1ddf62=users[_0x135025(0x1de)];console[_0x135025(0x1b7)](_0x1ddf62);}else{if(_0x3a4614[0x0][_0x135025(0x1cd)]==_0x135025(0x196))var _0x1ddf62=users['Hindi'];else{if(_0x3a4614[0x0]['language']==_0x135025(0x1f5))var _0x1ddf62=users[_0x135025(0x1f5)];else{if(_0x3a4614[0x0][_0x135025(0x1cd)]==_0x135025(0x1ae))var _0x1ddf62=users[_0x135025(0x1ae)];else{if(_0x3a4614[0x0][_0x135025(0x1cd)]=='French')var _0x1ddf62=users[_0x135025(0x1eb)];else{if(_0x3a4614[0x0][_0x135025(0x1cd)]==_0x135025(0x1bd))var _0x1ddf62=users[_0x135025(0x199)];else{if(_0x3a4614[0x0][_0x135025(0x1cd)]=='Chinese')var _0x1ddf62=users[_0x135025(0x1b5)];else{if(_0x3a4614[0x0][_0x135025(0x1cd)]==_0x135025(0x195))var _0x1ddf62=users[_0x135025(0x1d0)];}}}}}}}_0xcd0293[_0x135025(0x1e8)]('customer',{'success':_0x5f28eb[_0x135025(0x1cc)]('success'),'errors':_0x5f28eb[_0x135025(0x1cc)](_0x135025(0x18d)),'user':_0x3907e2,'role':_0x23ffb0,'profile':_0x12d57e,'payment':_0x22fddc,'master_shop':_0x3a4614,'language':_0x1ddf62});}catch(_0x26cb13){console[_0x135025(0x1b7)](_0x26cb13);}}),router['post'](a0_0x2a1c38(0x1d2),auth,async(_0x4eb1f6,_0x4f4217)=>{const _0x37fe0a=a0_0x2a1c38;try{const {name:_0x53ca5f,address:_0x5e539f,mobile:_0x562641,email:_0x3ea280,receivable:_0x1124b7,payable:_0x4a6b0b,contactperson:_0x47f8cf,landline:_0x1d4a53}=_0x4eb1f6[_0x37fe0a(0x1d8)],_0x9d167=new customer({'name':_0x53ca5f,'address':_0x5e539f,'mobile':_0x562641,'email':_0x3ea280,'receivable':_0x1124b7,'payable':_0x4a6b0b,'contactperson':_0x47f8cf,'landline':_0x1d4a53}),_0x446842=await _0x9d167[_0x37fe0a(0x1f3)]();_0x4eb1f6[_0x37fe0a(0x1cc)]('success',_0x37fe0a(0x1ab)),_0x4f4217[_0x37fe0a(0x1f1)](_0x37fe0a(0x1c7));}catch(_0x4eca4e){console[_0x37fe0a(0x1b7)](_0x4eca4e);}}),router[a0_0x2a1c38(0x1b3)](a0_0x2a1c38(0x1d1),auth,async(_0x370fb9,_0x1c0149)=>{const _0x46342b=a0_0x2a1c38;try{const {username:_0xc80159,email:_0x1dbda3,role:_0x233bf0}=_0x370fb9[_0x46342b(0x19e)],_0x2db03a=_0x370fb9[_0x46342b(0x19e)],_0x21c266=await profile[_0x46342b(0x1bb)]({'email':_0x2db03a[_0x46342b(0x1c8)]}),_0x49600c=await master_shop['find']();console[_0x46342b(0x1b7)](_0x46342b(0x1b2),_0x49600c);const _0x2db83b=_0x370fb9[_0x46342b(0x1e0)]['id'],_0x212d68=await customer[_0x46342b(0x1ac)](_0x2db83b);if(_0x49600c[0x0][_0x46342b(0x1cd)]==_0x46342b(0x1d3)){var _0x322e06=users['English'];console[_0x46342b(0x1b7)](_0x322e06);}else{if(_0x49600c[0x0][_0x46342b(0x1cd)]==_0x46342b(0x196))var _0x322e06=users[_0x46342b(0x196)];else{if(_0x49600c[0x0][_0x46342b(0x1cd)]==_0x46342b(0x1f5))var _0x322e06=users[_0x46342b(0x1f5)];else{if(_0x49600c[0x0]['language']=='Spanish')var _0x322e06=users[_0x46342b(0x1ae)];else{if(_0x49600c[0x0][_0x46342b(0x1cd)]==_0x46342b(0x1eb))var _0x322e06=users[_0x46342b(0x1eb)];else{if(_0x49600c[0x0][_0x46342b(0x1cd)]==_0x46342b(0x1bd))var _0x322e06=users[_0x46342b(0x199)];else{if(_0x49600c[0x0][_0x46342b(0x1cd)]=='Chinese')var _0x322e06=users['Chinese'];else{if(_0x49600c[0x0][_0x46342b(0x1cd)]==_0x46342b(0x195))var _0x322e06=users['Arabic'];}}}}}}}_0x1c0149['render'](_0x46342b(0x18a),{'success':_0x370fb9[_0x46342b(0x1cc)]('success'),'errors':_0x370fb9[_0x46342b(0x1cc)]('errors'),'role':_0x2db03a,'profile':_0x21c266,'user':_0x212d68,'master_shop':_0x49600c,'language':_0x322e06});}catch(_0x23a3db){console[_0x46342b(0x1b7)](_0x23a3db);}}),router[a0_0x2a1c38(0x19a)](a0_0x2a1c38(0x1d1),auth,async(_0x357a83,_0x54032e)=>{const _0x280bbd=a0_0x2a1c38;try{const _0x45771b=_0x357a83[_0x280bbd(0x1e0)]['id'],_0xddc13c=await customer['findById'](_0x45771b),{name:_0x523809,address:_0x379efd,mobile:_0x19e2d8,email:_0x40f5e7,receivable:_0x289695,payable:_0x34e6ab,contactperson:_0x14b13f,landline:_0x2246b9}=_0x357a83['body'];_0xddc13c[_0x280bbd(0x1a4)]=_0x523809,_0xddc13c['address']=_0x379efd,_0xddc13c['mobile']=_0x19e2d8,_0xddc13c[_0x280bbd(0x1c8)]=_0x40f5e7,_0xddc13c[_0x280bbd(0x1c3)]=_0x289695,_0xddc13c[_0x280bbd(0x18e)]=_0x34e6ab,_0xddc13c[_0x280bbd(0x1e6)]=_0x14b13f,_0xddc13c[_0x280bbd(0x19b)]=_0x2246b9;const _0x2e915c=await _0xddc13c[_0x280bbd(0x1f3)]();_0x357a83['flash']('success','customer\x20update\x20successfully'),_0x54032e[_0x280bbd(0x1f1)](_0x280bbd(0x1c7));}catch(_0x3fe05c){console['log'](_0x3fe05c);}}),router[a0_0x2a1c38(0x1b3)](a0_0x2a1c38(0x1a2),auth,async(_0x104e2f,_0x216300)=>{const _0x467d8a=a0_0x2a1c38;try{const {username:_0x418f14,email:_0x1a6efc,role:_0x4fe9c7}=_0x104e2f['user'],_0xbdb378=_0x104e2f['user'],_0x2da241=await profile['findOne']({'email':_0xbdb378[_0x467d8a(0x1c8)]}),_0x21b4a0=await master_shop[_0x467d8a(0x191)]();console['log'](_0x467d8a(0x1b2),_0x21b4a0),console[_0x467d8a(0x1b7)](_0x104e2f[_0x467d8a(0x1e0)]['id']);const _0x2182f5=await customer[_0x467d8a(0x1bb)]({'_id':_0x104e2f['params']['id']});console[_0x467d8a(0x1b7)](_0x467d8a(0x1ea),_0x2182f5);const _0x2ce87b=await c_payment_data['find']({'customer':_0x2182f5[_0x467d8a(0x1a4)]});console[_0x467d8a(0x1b7)](_0x2ce87b);const _0x3f4f2b=await c_payment_data[_0x467d8a(0x18f)]([{'$match':{'customer':_0x2182f5[_0x467d8a(0x1a4)]}},{'$match':{'reason':'Sale'}},{'$group':{'_id':'$reason','sum':{'$sum':_0x467d8a(0x1b9)}}}]);console[_0x467d8a(0x1b7)](_0x467d8a(0x1dc),_0x3f4f2b);const _0x7e1ce5=await c_payment_data[_0x467d8a(0x18f)]([{'$match':{'customer':_0x2182f5['name']}},{'$match':{'reason':'Sale\x20Return'}},{'$group':{'_id':_0x467d8a(0x1a7),'sum':{'$sum':_0x467d8a(0x1b9)}}}]);console[_0x467d8a(0x1b7)](_0x467d8a(0x1b0),_0x7e1ce5);if(_0x21b4a0[0x0][_0x467d8a(0x1cd)]==_0x467d8a(0x1d3)){var _0x238228=users['English'];console['log'](_0x238228);}else{if(_0x21b4a0[0x0][_0x467d8a(0x1cd)]==_0x467d8a(0x196))var _0x238228=users['Hindi'];else{if(_0x21b4a0[0x0][_0x467d8a(0x1cd)]=='German')var _0x238228=users[_0x467d8a(0x1f5)];else{if(_0x21b4a0[0x0][_0x467d8a(0x1cd)]=='Spanish')var _0x238228=users['Spanish'];else{if(_0x21b4a0[0x0]['language']==_0x467d8a(0x1eb))var _0x238228=users[_0x467d8a(0x1eb)];else{if(_0x21b4a0[0x0][_0x467d8a(0x1cd)]==_0x467d8a(0x1bd))var _0x238228=users[_0x467d8a(0x199)];else{if(_0x21b4a0[0x0][_0x467d8a(0x1cd)]=='Chinese')var _0x238228=users[_0x467d8a(0x1b5)];else{if(_0x21b4a0[0x0]['language']==_0x467d8a(0x195))var _0x238228=users[_0x467d8a(0x1d0)];}}}}}}}_0x216300[_0x467d8a(0x1e8)](_0x467d8a(0x1e3),{'success':_0x104e2f[_0x467d8a(0x1cc)](_0x467d8a(0x1a0)),'errors':_0x104e2f[_0x467d8a(0x1cc)](_0x467d8a(0x18d)),'role':_0xbdb378,'profile':_0x2da241,'payment':_0x2ce87b,'payable':_0x3f4f2b,'receivable':_0x7e1ce5,'master_shop':_0x21b4a0,'language':_0x238228});}catch(_0x16bc07){console[_0x467d8a(0x1b7)](_0x16bc07);}}),router['get'](a0_0x2a1c38(0x1a3),auth,async(_0x10f792,_0x3d8a5d)=>{const _0x2ced53=a0_0x2a1c38;try{const _0x1a530b=new excelJS[(_0x2ced53(0x1c0))](),_0x3afc51=_0x1a530b['addWorksheet'](_0x2ced53(0x18b));return _0x3afc51[_0x2ced53(0x1c2)]=[{'header':'ID','key':_0x2ced53(0x1ad),'width':0xa},{'header':'Name','key':_0x2ced53(0x1ce),'width':0xa},{'header':_0x2ced53(0x1c9),'key':_0x2ced53(0x1c4),'width':0xa},{'header':_0x2ced53(0x1f0),'key':_0x2ced53(0x1f0),'width':0xa},{'header':_0x2ced53(0x1ba),'key':_0x2ced53(0x1ba),'width':0xa},{'header':_0x2ced53(0x1b4),'key':'mobile','width':0xa},{'header':'email','key':_0x2ced53(0x1c8),'width':0xa}],_0x3d8a5d[_0x2ced53(0x193)](_0x2ced53(0x1d4),_0x2ced53(0x1cb)),_0x3d8a5d[_0x2ced53(0x193)](_0x2ced53(0x1b1),_0x2ced53(0x1c1)),_0x1a530b['xlsx'][_0x2ced53(0x197)](_0x3d8a5d)[_0x2ced53(0x18c)](()=>{const _0x1dd7f9=_0x2ced53;_0x3d8a5d[_0x1dd7f9(0x1af)](0xc8);});}catch(_0x354817){_0x3d8a5d[_0x2ced53(0x1af)](0x190)['send']({'errors':_0x354817[_0x2ced53(0x1dd)]});}});const storage1=multer[a0_0x2a1c38(0x198)]({'destination':(_0x10d1bf,_0x44971a,_0x276e6b)=>{const _0x3a9e03=a0_0x2a1c38;_0x276e6b(null,_0x3a9e03(0x1b6));},'filename':(_0x211d81,_0x4ed0b6,_0x47f897)=>{const _0x1fd2bb=a0_0x2a1c38;_0x47f897(null,Date[_0x1fd2bb(0x1e5)]()+_0x4ed0b6[_0x1fd2bb(0x1c5)]);}}),uploadMigrate=multer({'storage':storage1});router['post'](a0_0x2a1c38(0x1d9),auth,uploadMigrate[a0_0x2a1c38(0x1a9)]('customer_product_fule'),async(_0x3efed5,_0x435911)=>{const _0x3e9939=a0_0x2a1c38,_0x2fe7fa=_0x3efed5[_0x3e9939(0x1e2)]['filename'],_0x1fd9f0=await xlsx[_0x3e9939(0x19f)](_0x3e9939(0x1cf)+_0x2fe7fa);let _0x3ef8e8=_0x1fd9f0['SheetNames'],_0x47e251=xlsx['utils'][_0x3e9939(0x1f4)](_0x1fd9f0['Sheets'][_0x3ef8e8[0x0]]);for(const _0x4d628d of _0x47e251){const _0x1cf928=_0x4d628d['ID'],_0x41932c=_0x4d628d['Name'],_0x166c30=_0x4d628d['SalesmanCode'],_0x53caac=_0x4d628d[_0x3e9939(0x1f0)],_0x538dd9=_0x4d628d[_0x3e9939(0x1ba)],_0x4a91b0=_0x4d628d['mobile'],_0x10245a=_0x4d628d[_0x3e9939(0x1c8)];try{let _0x446c97=await customer[_0x3e9939(0x1bb)]({'name':_0x41932c});if(!_0x446c97){const _0x43869c=new customer({'name':_0x41932c,'ID':_0x1cf928,'SalesmanCode':_0x166c30,'SalesmanName':_0x53caac,'address':_0x538dd9,'mobile':_0x4a91b0,'email':_0x10245a});_0x446c97=await _0x43869c[_0x3e9939(0x1f3)](),_0x3efed5['flash'](_0x3e9939(0x1a0),_0x41932c+_0x3e9939(0x1bf));}else _0x3efed5[_0x3e9939(0x1cc)](_0x3e9939(0x1b8),_0x41932c+_0x3e9939(0x1f6));}catch(_0x4de20f){_0x435911[_0x3e9939(0x1af)](0x1f4)[_0x3e9939(0x19c)]({'proderror':_0x4de20f[_0x3e9939(0x1dd)],'aproduct':ProductName});}}_0x435911[_0x3e9939(0x1f1)](_0x3e9939(0x1c7));}),module[a0_0x2a1c38(0x1e4)]=router;