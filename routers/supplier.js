const a0_0x3791e0=a0_0x526d;(function(_0xfad7a,_0x6d44ed){const _0x54546d=a0_0x526d,_0x10d602=_0xfad7a();while(!![]){try{const _0x2f3b9a=-parseInt(_0x54546d(0x99))/0x1*(parseInt(_0x54546d(0x91))/0x2)+-parseInt(_0x54546d(0xa0))/0x3+-parseInt(_0x54546d(0xe0))/0x4+parseInt(_0x54546d(0xbf))/0x5+-parseInt(_0x54546d(0xb7))/0x6*(parseInt(_0x54546d(0xd2))/0x7)+parseInt(_0x54546d(0xcf))/0x8*(parseInt(_0x54546d(0xc0))/0x9)+-parseInt(_0x54546d(0xda))/0xa*(-parseInt(_0x54546d(0x7e))/0xb);if(_0x2f3b9a===_0x6d44ed)break;else _0x10d602['push'](_0x10d602['shift']());}catch(_0xc1e911){_0x10d602['push'](_0x10d602['shift']());}}}(a0_0x5a2a,0x896b0));function a0_0x526d(_0x1fdf00,_0x4a48a9){const _0x5a2afc=a0_0x5a2a();return a0_0x526d=function(_0x526d58,_0x191b64){_0x526d58=_0x526d58-0x77;let _0x5bbff8=_0x5a2afc[_0x526d58];return _0x5bbff8;},a0_0x526d(_0x1fdf00,_0x4a48a9);}const express=require('express'),app=express(),router=express[a0_0x3791e0(0xe2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require('../models/all_models'),auth=require(a0_0x3791e0(0xab)),users=require(a0_0x3791e0(0x98)),excelJS=require(a0_0x3791e0(0xb1)),xlsx=require('xlsx'),multer=require(a0_0x3791e0(0xc5));function a0_0x5a2a(){const _0x42cb67=['supplier_payment','Mobile_number','diskStorage','log','suppliers_docs','661592KmXWMp','English','Arabic','11809eZEtqQ','readFile','findById','attachment;\x20filename=supplier_Migration_File.xlsx','Supplier_Code','address','aggregate','$amount','30vxwaoA','originalname','public/Migration','master','suppliers_code','params','3413640ORxmMB','json','Router','write','Company_Name','/view','Content-Type','find','French','/supplier/view','4502278lpvvru','reason','Email','status','addWorksheet','name','error','post','Chinese','Hindi','single','supplier_product_file','PBrands','Portuguese\x20(BR)','render','/supplier_import_migrate_file','Customers','SalesmanName','Portuguese','494278TmYKyF','Arabic\x20(ae)','supplier\x20data\x20add\x20successfully','supplier','email','filename','send','../public/language/languages.json','4vxRfzl','/products_export_migrate_file','Purchase\x20Return','purchase','receivable_sum','then','body','1650201DdkArv','message','landline','forEach','Workbook','get','success','Purchase','English\x20(US)','suppliers','file','../middleware/auth','amount','findOne','mobile','contactperson','exports','exceljs','xlsx','German','\x20added\x20successfully','payable_sum','doc','402HtRkWX','PUnits','setHeader','errors','purchase_return','$reason','/view/payment/:id','supplier\x20data\x20update\x20successfully','4651715ofJSqH','99shNCrY','redirect','now','Spanish','user','multer','/view/:id','language','flash','save'];a0_0x5a2a=function(){return _0x42cb67;};return a0_0x5a2a();}router[a0_0x3791e0(0xa5)](a0_0x3791e0(0x79),auth,async(_0x1fd581,_0x3542c6)=>{const _0x301512=a0_0x3791e0;try{const {username:_0x11407c,email:_0x1eab6f,role:_0x44edf8}=_0x1fd581[_0x301512(0xc4)],_0x10f12c=_0x1fd581['user'],_0x594083=await profile[_0x301512(0xad)]({'email':_0x10f12c['email']}),_0x47a930=await master_shop[_0x301512(0x7b)]();console[_0x301512(0xcd)](_0x301512(0xdd),_0x47a930);const _0x1af691=await suppliers[_0x301512(0x7b)]();console[_0x301512(0xcd)](_0x1af691);const _0x54e250=await suppliers[_0x301512(0xd8)]([{'$lookup':{'from':'s_payments','localField':_0x301512(0x83),'foreignField':_0x301512(0xa9),'as':'suppliers_docs'}}]),_0x4a7613=_0x54e250['map'](_0x2f0ace=>{const _0x5e92bf=_0x301512;console[_0x5e92bf(0xcd)]('data',_0x2f0ace);var _0x29064a=0x0,_0x204d5a=0x0;return _0x2f0ace[_0x5e92bf(0xce)][_0x5e92bf(0xa3)](_0x57c7d6=>{const _0x134422=_0x5e92bf;console[_0x134422(0xcd)](_0x134422(0xb6),_0x57c7d6),_0x57c7d6[_0x134422(0x7f)]==_0x134422(0xa7)?_0x29064a+=_0x57c7d6[_0x134422(0xac)]:_0x204d5a+=_0x57c7d6[_0x134422(0xac)];}),_0x2f0ace[_0x5e92bf(0x9c)]=_0x29064a,_0x2f0ace[_0x5e92bf(0xbb)]=_0x204d5a,_0x2f0ace;});console[_0x301512(0xcd)]('supplier.js\x20payment_data',_0x4a7613);if(_0x47a930[0x0][_0x301512(0xc7)]==_0x301512(0xa8)){var _0x526796=users[_0x301512(0xd0)];console[_0x301512(0xcd)](_0x526796);}else{if(_0x47a930[0x0][_0x301512(0xc7)]==_0x301512(0x87))var _0x526796=users[_0x301512(0x87)];else{if(_0x47a930[0x0]['language']==_0x301512(0xb3))var _0x526796=users['German'];else{if(_0x47a930[0x0]['language']==_0x301512(0xc3))var _0x526796=users['Spanish'];else{if(_0x47a930[0x0][_0x301512(0xc7)]==_0x301512(0x7c))var _0x526796=users['French'];else{if(_0x47a930[0x0][_0x301512(0xc7)]==_0x301512(0x8b))var _0x526796=users[_0x301512(0x90)];else{if(_0x47a930[0x0][_0x301512(0xc7)]==_0x301512(0x86))var _0x526796=users[_0x301512(0x86)];else{if(_0x47a930[0x0][_0x301512(0xc7)]==_0x301512(0x92))var _0x526796=users[_0x301512(0xd1)];}}}}}}}_0x3542c6['render']('supplier',{'success':_0x1fd581['flash']('success'),'errors':_0x1fd581[_0x301512(0xc8)](_0x301512(0xba)),'user':_0x1af691,'profile':_0x594083,'master_shop':_0x47a930,'role':_0x10f12c,'payment':_0x4a7613,'language':_0x526796});}catch(_0x31d24e){console[_0x301512(0xcd)](_0x31d24e);}}),router['post'](a0_0x3791e0(0x79),auth,async(_0x31eaee,_0x522952)=>{const _0x1ffd55=a0_0x3791e0;try{const {name:_0x3540b8,email:_0x109a62,mobile:_0x520d9a,company:_0x1cb57b,address:_0x5c2660,receivable:_0x5ae18d,payable:_0x4c8c6d,code:_0x519c6a,contactperson:_0x15ee70,landline:_0x43e042}=_0x31eaee[_0x1ffd55(0x9f)],_0x42741f=new suppliers({'name':_0x3540b8,'email':_0x109a62,'mobile':_0x520d9a,'company':_0x1cb57b,'address':_0x5c2660,'receivable':_0x5ae18d,'payable':_0x4c8c6d,'suppliers_code':_0x519c6a,'contactperson':_0x15ee70,'landline':_0x43e042}),_0x2b12b7=await _0x42741f[_0x1ffd55(0xc9)]();_0x31eaee[_0x1ffd55(0xc8)]('success',_0x1ffd55(0x93)),_0x522952[_0x1ffd55(0xc1)]('/supplier/view');}catch(_0x3980b5){console['log'](_0x3980b5);}}),router[a0_0x3791e0(0xa5)](a0_0x3791e0(0xc6),auth,async(_0x46c9f6,_0x34168b)=>{const _0x10a45a=a0_0x3791e0;try{const {username:_0x41d15c,email:_0x8719cd,role:_0x350da3}=_0x46c9f6[_0x10a45a(0xc4)],_0x5b2cb9=_0x46c9f6[_0x10a45a(0xc4)],_0x4e0b1b=await profile[_0x10a45a(0xad)]({'email':_0x5b2cb9[_0x10a45a(0x95)]}),_0x30e6fb=await master_shop[_0x10a45a(0x7b)]();console[_0x10a45a(0xcd)](_0x10a45a(0xdd),_0x30e6fb);const _0x379b7a=_0x46c9f6[_0x10a45a(0xdf)]['id'],_0x5327ba=await suppliers[_0x10a45a(0xd4)](_0x379b7a);console[_0x10a45a(0xcd)](_0x5327ba);if(_0x30e6fb[0x0][_0x10a45a(0xc7)]==_0x10a45a(0xa8)){var _0x52b318=users['English'];console[_0x10a45a(0xcd)](_0x52b318);}else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]=='Hindi')var _0x52b318=users['Hindi'];else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]=='German')var _0x52b318=users[_0x10a45a(0xb3)];else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]==_0x10a45a(0xc3))var _0x52b318=users[_0x10a45a(0xc3)];else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]==_0x10a45a(0x7c))var _0x52b318=users[_0x10a45a(0x7c)];else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]==_0x10a45a(0x8b))var _0x52b318=users['Portuguese'];else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]==_0x10a45a(0x86))var _0x52b318=users[_0x10a45a(0x86)];else{if(_0x30e6fb[0x0][_0x10a45a(0xc7)]=='Arabic\x20(ae)')var _0x52b318=users[_0x10a45a(0xd1)];}}}}}}}_0x34168b['render'](_0x10a45a(0x94),{'success':_0x46c9f6[_0x10a45a(0xc8)](_0x10a45a(0xa6)),'errors':_0x46c9f6[_0x10a45a(0xc8)](_0x10a45a(0xba)),'role':_0x5b2cb9,'profile':_0x4e0b1b,'master_shop':_0x30e6fb,'user':_0x5327ba,'language':_0x52b318});}catch(_0x135559){console[_0x10a45a(0xcd)](_0x135559);}}),router['post']('/view/:id',auth,async(_0x26cedb,_0x2a8070)=>{const _0x3a979b=a0_0x3791e0;try{const _0x2c4e3b=_0x26cedb[_0x3a979b(0xdf)]['id'],_0x26ad55=await suppliers['findById'](_0x2c4e3b),{name:_0x228b56,email:_0x4ec5d4,mobile:_0x4bd888,company:_0x36fc05,address:_0x1f343c,receivable:_0x2f0d09,payable:_0x42f291,code:_0x2387d9,contactperson:_0x3a0d8a,landline:_0x3e95cb}=_0x26cedb[_0x3a979b(0x9f)];_0x26ad55[_0x3a979b(0x83)]=_0x228b56,_0x26ad55[_0x3a979b(0x95)]=_0x4ec5d4,_0x26ad55[_0x3a979b(0xae)]=_0x4bd888,_0x26ad55['company']=_0x36fc05,_0x26ad55['address']=_0x1f343c,_0x26ad55['receivable']=_0x2f0d09,_0x26ad55['payable']=_0x42f291,_0x26ad55[_0x3a979b(0xde)]=_0x2387d9,_0x26ad55[_0x3a979b(0xaf)]=_0x3a0d8a,_0x26ad55[_0x3a979b(0xa2)]=_0x3e95cb;const _0x1b3c2b=await _0x26ad55['save']();_0x26cedb[_0x3a979b(0xc8)](_0x3a979b(0xa6),_0x3a979b(0xbe)),_0x2a8070[_0x3a979b(0xc1)](_0x3a979b(0x7d));}catch(_0x4d3957){console[_0x3a979b(0xcd)](_0x4d3957);}}),router['get'](a0_0x3791e0(0xbd),auth,async(_0x3e31aa,_0x4e6daf)=>{const _0x4f3afb=a0_0x3791e0;try{const {username:_0x232779,email:_0x1592ed,role:_0x236ac3}=_0x3e31aa[_0x4f3afb(0xc4)],_0x5a5159=_0x3e31aa['user'],_0x3bf1bd=await profile[_0x4f3afb(0xad)]({'email':_0x5a5159[_0x4f3afb(0x95)]}),_0x2dc9b8=await master_shop[_0x4f3afb(0x7b)]();console[_0x4f3afb(0xcd)](_0x4f3afb(0xdd),_0x2dc9b8),console[_0x4f3afb(0xcd)](_0x3e31aa['params']['id']);const _0x56a15a=await suppliers[_0x4f3afb(0xad)]({'_id':_0x3e31aa['params']['id']});console[_0x4f3afb(0xcd)](_0x56a15a);const _0x1a2721=await s_payment_data[_0x4f3afb(0x7b)]({'suppliers':_0x56a15a[_0x4f3afb(0x83)]});console[_0x4f3afb(0xcd)](_0x1a2721);const _0x5493f7=await s_payment_data[_0x4f3afb(0xd8)]([{'$match':{'suppliers':_0x56a15a[_0x4f3afb(0x83)]}},{'$match':{'reason':_0x4f3afb(0xa7)}},{'$group':{'_id':_0x4f3afb(0xbc),'sum':{'$sum':_0x4f3afb(0xd9)}}}]);console[_0x4f3afb(0xcd)](_0x4f3afb(0xb5),_0x5493f7);const _0x1c01d2=await s_payment_data[_0x4f3afb(0xd8)]([{'$match':{'suppliers':_0x56a15a[_0x4f3afb(0x83)]}},{'$match':{'reason':_0x4f3afb(0x9b)}},{'$group':{'_id':_0x4f3afb(0xbc),'sum':{'$sum':_0x4f3afb(0xd9)}}}]);console[_0x4f3afb(0xcd)](_0x4f3afb(0x9d),_0x1c01d2);if(_0x2dc9b8[0x0][_0x4f3afb(0xc7)]==_0x4f3afb(0xa8)){var _0x22543c=users[_0x4f3afb(0xd0)];console[_0x4f3afb(0xcd)](_0x22543c);}else{if(_0x2dc9b8[0x0][_0x4f3afb(0xc7)]==_0x4f3afb(0x87))var _0x22543c=users[_0x4f3afb(0x87)];else{if(_0x2dc9b8[0x0][_0x4f3afb(0xc7)]==_0x4f3afb(0xb3))var _0x22543c=users[_0x4f3afb(0xb3)];else{if(_0x2dc9b8[0x0][_0x4f3afb(0xc7)]=='Spanish')var _0x22543c=users[_0x4f3afb(0xc3)];else{if(_0x2dc9b8[0x0]['language']==_0x4f3afb(0x7c))var _0x22543c=users['French'];else{if(_0x2dc9b8[0x0]['language']==_0x4f3afb(0x8b))var _0x22543c=users['Portuguese'];else{if(_0x2dc9b8[0x0]['language']==_0x4f3afb(0x86))var _0x22543c=users[_0x4f3afb(0x86)];else{if(_0x2dc9b8[0x0]['language']==_0x4f3afb(0x92))var _0x22543c=users[_0x4f3afb(0xd1)];}}}}}}}_0x4e6daf[_0x4f3afb(0x8c)](_0x4f3afb(0xca),{'success':_0x3e31aa['flash'](_0x4f3afb(0xa6)),'errors':_0x3e31aa[_0x4f3afb(0xc8)]('errors'),'role':_0x5a5159,'profile':_0x3bf1bd,'master_shop':_0x2dc9b8,'payment':_0x1a2721,'payable':_0x5493f7,'receivable':_0x1c01d2,'language':_0x22543c});}catch(_0x49eac8){console[_0x4f3afb(0xcd)](_0x49eac8);}}),router[a0_0x3791e0(0xa5)](a0_0x3791e0(0x9a),auth,async(_0x2f1d3f,_0x108326)=>{const _0x591412=a0_0x3791e0;try{const _0x325ae1=new excelJS[(_0x591412(0xa4))](),_0x4cbe54=_0x325ae1[_0x591412(0x82)](_0x591412(0x8e));return _0x4cbe54['columns']=[{'header':'Name','key':_0x591412(0x8a),'width':0xa},{'header':_0x591412(0xd6),'key':_0x591412(0xb8),'width':0xa},{'header':_0x591412(0x80),'key':_0x591412(0x8f),'width':0xa},{'header':'Mobile_number','key':_0x591412(0xd7),'width':0xa},{'header':'Company_Name','key':_0x591412(0xae),'width':0xa},{'header':_0x591412(0xd7),'key':'email','width':0xa}],_0x108326[_0x591412(0xb9)](_0x591412(0x7a),'application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x108326[_0x591412(0xb9)]('Content-Disposition',_0x591412(0xd5)),_0x325ae1[_0x591412(0xb2)][_0x591412(0x77)](_0x108326)[_0x591412(0x9e)](()=>{const _0x11793c=_0x591412;_0x108326[_0x11793c(0x81)](0xc8);});}catch(_0x59a780){_0x108326[_0x591412(0x81)](0x190)[_0x591412(0x97)]({'errors':_0x59a780[_0x591412(0xa1)]});}});const storage1=multer[a0_0x3791e0(0xcc)]({'destination':(_0x27b56a,_0x40507a,_0x10fb68)=>{const _0x5c56ab=a0_0x3791e0;_0x10fb68(null,_0x5c56ab(0xdc));},'filename':(_0x228ff9,_0x24df92,_0x27719e)=>{const _0x2f1ea1=a0_0x3791e0;_0x27719e(null,Date[_0x2f1ea1(0xc2)]()+_0x24df92[_0x2f1ea1(0xdb)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x3791e0(0x85)](a0_0x3791e0(0x8d),auth,uploadMigrate[a0_0x3791e0(0x88)](a0_0x3791e0(0x89)),async(_0x35fe3e,_0x21a08c)=>{const _0x3ec390=a0_0x3791e0,_0x135fe3=_0x35fe3e[_0x3ec390(0xaa)][_0x3ec390(0x96)],_0x4656ee=await xlsx[_0x3ec390(0xd3)]('public/Migration/'+_0x135fe3);let _0x476378=_0x4656ee['SheetNames'],_0xd2c1b6=xlsx['utils']['sheet_to_json'](_0x4656ee['Sheets'][_0x476378[0x0]]);for(const _0x447914 of _0xd2c1b6){const _0x224dfc=_0x447914['Name'],_0xf87f62=_0x447914[_0x3ec390(0xd6)],_0x507bf6=_0x447914[_0x3ec390(0xd7)],_0x19047d=_0x447914[_0x3ec390(0xcb)],_0x504f53=_0x447914[_0x3ec390(0x80)],_0x354ee9=_0x447914[_0x3ec390(0x78)];try{let _0x16fd0d=await suppliers[_0x3ec390(0xad)]({'name':_0x224dfc});if(!_0x16fd0d){const _0x26b879=new suppliers({'name':_0x224dfc,'suppliers_code':_0xf87f62,'address':_0x507bf6,'mobile':_0x19047d,'email':_0x504f53,'company':_0x354ee9});_0x16fd0d=await _0x26b879[_0x3ec390(0xc9)](),_0x35fe3e[_0x3ec390(0xc8)]('success',_0x224dfc+_0x3ec390(0xb4));}else _0x35fe3e[_0x3ec390(0xc8)](_0x3ec390(0x84),_0x224dfc+'\x20Failed');}catch(_0x1a206d){_0x21a08c[_0x3ec390(0x81)](0x1f4)[_0x3ec390(0xe1)]({'proderror':_0x1a206d['message'],'aproduct':ProductName});}}_0x21a08c[_0x3ec390(0xc1)](_0x3ec390(0x7d));}),module[a0_0x3791e0(0xb0)]=router;