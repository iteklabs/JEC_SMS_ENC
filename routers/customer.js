const a0_0x11351f=a0_0x253b;(function(_0xda74af,_0x562f55){const _0x4abdfd=a0_0x253b,_0x53927d=_0xda74af();while(!![]){try{const _0x5260b6=-parseInt(_0x4abdfd(0x22e))/0x1+parseInt(_0x4abdfd(0x20f))/0x2*(parseInt(_0x4abdfd(0x1ef))/0x3)+parseInt(_0x4abdfd(0x203))/0x4*(-parseInt(_0x4abdfd(0x20e))/0x5)+-parseInt(_0x4abdfd(0x1ca))/0x6+parseInt(_0x4abdfd(0x1d8))/0x7+-parseInt(_0x4abdfd(0x211))/0x8+parseInt(_0x4abdfd(0x20c))/0x9*(parseInt(_0x4abdfd(0x204))/0xa);if(_0x5260b6===_0x562f55)break;else _0x53927d['push'](_0x53927d['shift']());}catch(_0x46f9de){_0x53927d['push'](_0x53927d['shift']());}}}(a0_0x1116,0xd18a1));function a0_0x253b(_0x1323e9,_0x513137){const _0x1116b1=a0_0x1116();return a0_0x253b=function(_0x253b7d,_0x8c1fef){_0x253b7d=_0x253b7d-0x1c9;let _0x3d0eb9=_0x1116b1[_0x253b7d];return _0x3d0eb9;},a0_0x253b(_0x1323e9,_0x513137);}const express=require(a0_0x11351f(0x1e1)),app=express(),router=express[a0_0x11351f(0x1fe)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x11351f(0x1da)),auth=require('../middleware/auth'),users=require(a0_0x11351f(0x1d5)),excelJS=require(a0_0x11351f(0x1ea)),xlsx=require(a0_0x11351f(0x226)),multer=require(a0_0x11351f(0x228));router['get']('/view',auth,async(_0x8dafd4,_0x567b15)=>{const _0x204c67=a0_0x11351f;try{const {username:_0x2cd375,email:_0x3c313d,role:_0x43f81f}=_0x8dafd4['user'],_0x262962=_0x8dafd4[_0x204c67(0x20a)],_0x350608=await profile[_0x204c67(0x1ed)]({'email':_0x262962['email']}),_0x553f21=await master_shop[_0x204c67(0x222)]();console[_0x204c67(0x1f6)]('master',_0x553f21);const _0x3508d6=await customer[_0x204c67(0x222)](),_0x5ad290=await customer[_0x204c67(0x21c)]([{'$lookup':{'from':_0x204c67(0x1f0),'localField':_0x204c67(0x1d2),'foreignField':_0x204c67(0x1e2),'as':_0x204c67(0x21b)}}]);console[_0x204c67(0x1f6)](_0x5ad290);const _0x5e95bb=_0x5ad290[_0x204c67(0x1d9)](_0x5c5282=>{const _0x275e74=_0x204c67;console[_0x275e74(0x1f6)]('data',_0x5c5282);var _0x5031ec=0x0,_0x5c9d54=0x0;return _0x5c5282['customer_docs']['forEach'](_0x5cea51=>{const _0x5e8010=_0x275e74;console[_0x5e8010(0x1f6)](_0x5e8010(0x1e9),_0x5cea51),_0x5cea51[_0x5e8010(0x223)]==_0x5e8010(0x210)?_0x5031ec+=_0x5cea51[_0x5e8010(0x22d)]:_0x5c9d54+=_0x5cea51[_0x5e8010(0x22d)];}),_0x5c5282[_0x275e74(0x22c)]=parseFloat(_0x5031ec)+0x0,_0x5c5282[_0x275e74(0x1ee)]=parseFloat(_0x5c9d54)+0x0,_0x5c5282;});console[_0x204c67(0x1f6)](_0x204c67(0x213),_0x5e95bb);if(_0x553f21[0x0]['language']=='English\x20(US)'){var _0x1aa7dc=users[_0x204c67(0x1ec)];console[_0x204c67(0x1f6)](_0x1aa7dc);}else{if(_0x553f21[0x0][_0x204c67(0x1f3)]==_0x204c67(0x1dc))var _0x1aa7dc=users[_0x204c67(0x1dc)];else{if(_0x553f21[0x0][_0x204c67(0x1f3)]==_0x204c67(0x1f9))var _0x1aa7dc=users[_0x204c67(0x1f9)];else{if(_0x553f21[0x0][_0x204c67(0x1f3)]==_0x204c67(0x22a))var _0x1aa7dc=users[_0x204c67(0x22a)];else{if(_0x553f21[0x0][_0x204c67(0x1f3)]=='French')var _0x1aa7dc=users[_0x204c67(0x21f)];else{if(_0x553f21[0x0][_0x204c67(0x1f3)]==_0x204c67(0x216))var _0x1aa7dc=users['Portuguese'];else{if(_0x553f21[0x0][_0x204c67(0x1f3)]==_0x204c67(0x230))var _0x1aa7dc=users[_0x204c67(0x230)];else{if(_0x553f21[0x0][_0x204c67(0x1f3)]==_0x204c67(0x22b))var _0x1aa7dc=users[_0x204c67(0x218)];}}}}}}}_0x567b15[_0x204c67(0x1f4)]('customer',{'success':_0x8dafd4[_0x204c67(0x1d6)](_0x204c67(0x214)),'errors':_0x8dafd4[_0x204c67(0x1d6)](_0x204c67(0x1f5)),'user':_0x3508d6,'role':_0x262962,'profile':_0x350608,'payment':_0x5e95bb,'master_shop':_0x553f21,'language':_0x1aa7dc});}catch(_0x2477be){console[_0x204c67(0x1f6)](_0x2477be);}}),router[a0_0x11351f(0x22f)](a0_0x11351f(0x1df),auth,async(_0x1c16b8,_0x43872c)=>{const _0x527e7c=a0_0x11351f;try{const {name:_0x40cf11,address:_0x2776ae,mobile:_0x1c613e,email:_0x587ced,receivable:_0x593f18,payable:_0x316133,contactperson:_0x2ec26d,landline:_0x605d2f}=_0x1c16b8[_0x527e7c(0x20d)],_0x883962=new customer({'name':_0x40cf11,'address':_0x2776ae,'mobile':_0x1c613e,'email':_0x587ced,'receivable':_0x593f18,'payable':_0x316133,'contactperson':_0x2ec26d,'landline':_0x605d2f}),_0xca1b8d=await _0x883962[_0x527e7c(0x20b)]();_0x1c16b8['flash']('success','customer\x20add\x20successfully'),_0x43872c[_0x527e7c(0x212)](_0x527e7c(0x1fb));}catch(_0x654f37){console['log'](_0x654f37);}}),router[a0_0x11351f(0x208)](a0_0x11351f(0x1cf),auth,async(_0x20ef00,_0x5e3197)=>{const _0x1d00cf=a0_0x11351f;try{const {username:_0x464c37,email:_0x19737d,role:_0x55950b}=_0x20ef00[_0x1d00cf(0x20a)],_0x5d71e0=_0x20ef00['user'],_0x27b276=await profile[_0x1d00cf(0x1ed)]({'email':_0x5d71e0[_0x1d00cf(0x201)]}),_0x1ac113=await master_shop[_0x1d00cf(0x222)]();console[_0x1d00cf(0x1f6)](_0x1d00cf(0x221),_0x1ac113);const _0x572743=_0x20ef00[_0x1d00cf(0x206)]['id'],_0x41f9bb=await customer[_0x1d00cf(0x1fd)](_0x572743);if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]=='English\x20(US)'){var _0x2bd39e=users[_0x1d00cf(0x1ec)];console[_0x1d00cf(0x1f6)](_0x2bd39e);}else{if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]=='Hindi')var _0x2bd39e=users[_0x1d00cf(0x1dc)];else{if(_0x1ac113[0x0]['language']==_0x1d00cf(0x1f9))var _0x2bd39e=users[_0x1d00cf(0x1f9)];else{if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]==_0x1d00cf(0x22a))var _0x2bd39e=users['Spanish'];else{if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]==_0x1d00cf(0x21f))var _0x2bd39e=users['French'];else{if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]==_0x1d00cf(0x216))var _0x2bd39e=users[_0x1d00cf(0x224)];else{if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]==_0x1d00cf(0x230))var _0x2bd39e=users['Chinese'];else{if(_0x1ac113[0x0][_0x1d00cf(0x1f3)]==_0x1d00cf(0x22b))var _0x2bd39e=users[_0x1d00cf(0x218)];}}}}}}}_0x5e3197[_0x1d00cf(0x1f4)](_0x1d00cf(0x1e2),{'success':_0x20ef00[_0x1d00cf(0x1d6)](_0x1d00cf(0x214)),'errors':_0x20ef00[_0x1d00cf(0x1d6)](_0x1d00cf(0x1f5)),'role':_0x5d71e0,'profile':_0x27b276,'user':_0x41f9bb,'master_shop':_0x1ac113,'language':_0x2bd39e});}catch(_0x42f668){console[_0x1d00cf(0x1f6)](_0x42f668);}}),router[a0_0x11351f(0x22f)]('/view/:id',auth,async(_0x1b8417,_0xf66db8)=>{const _0x323b22=a0_0x11351f;try{const _0x78c584=_0x1b8417[_0x323b22(0x206)]['id'],_0x4e8fc4=await customer['findById'](_0x78c584),{name:_0x2289b7,address:_0x74e5a2,mobile:_0x41fd90,email:_0x198f3b,receivable:_0x5012cd,payable:_0xb1c5ca,contactperson:_0x311c9d,landline:_0x32ead7}=_0x1b8417[_0x323b22(0x20d)];_0x4e8fc4[_0x323b22(0x1d2)]=_0x2289b7,_0x4e8fc4[_0x323b22(0x1e6)]=_0x74e5a2,_0x4e8fc4[_0x323b22(0x1dd)]=_0x41fd90,_0x4e8fc4[_0x323b22(0x201)]=_0x198f3b,_0x4e8fc4[_0x323b22(0x232)]=_0x5012cd,_0x4e8fc4['payable']=_0xb1c5ca,_0x4e8fc4[_0x323b22(0x1d7)]=_0x311c9d,_0x4e8fc4[_0x323b22(0x202)]=_0x32ead7;const _0x11907e=await _0x4e8fc4[_0x323b22(0x20b)]();_0x1b8417['flash'](_0x323b22(0x214),_0x323b22(0x1e5)),_0xf66db8['redirect'](_0x323b22(0x1fb));}catch(_0x16ac8c){console[_0x323b22(0x1f6)](_0x16ac8c);}}),router['get'](a0_0x11351f(0x219),auth,async(_0x267313,_0x1bd8a0)=>{const _0x577a02=a0_0x11351f;try{const {username:_0x35256d,email:_0x2d7883,role:_0x334f7c}=_0x267313[_0x577a02(0x20a)],_0x34c85e=_0x267313[_0x577a02(0x20a)],_0xca91a7=await profile[_0x577a02(0x1ed)]({'email':_0x34c85e[_0x577a02(0x201)]}),_0x1e93cc=await master_shop['find']();console['log'](_0x577a02(0x221),_0x1e93cc),console[_0x577a02(0x1f6)](_0x267313[_0x577a02(0x206)]['id']);const _0x2175b0=await customer['findOne']({'_id':_0x267313[_0x577a02(0x206)]['id']});console[_0x577a02(0x1f6)](_0x577a02(0x1e4),_0x2175b0);const _0x4832ea=await c_payment_data[_0x577a02(0x222)]({'customer':_0x2175b0[_0x577a02(0x1d2)]});console[_0x577a02(0x1f6)](_0x4832ea);const _0x1ad840=await c_payment_data[_0x577a02(0x21c)]([{'$match':{'customer':_0x2175b0[_0x577a02(0x1d2)]}},{'$match':{'reason':_0x577a02(0x210)}},{'$group':{'_id':_0x577a02(0x1cc),'sum':{'$sum':_0x577a02(0x1f2)}}}]);console[_0x577a02(0x1f6)](_0x577a02(0x1e3),_0x1ad840);const _0x5d3623=await c_payment_data['aggregate']([{'$match':{'customer':_0x2175b0[_0x577a02(0x1d2)]}},{'$match':{'reason':_0x577a02(0x1f8)}},{'$group':{'_id':_0x577a02(0x1cc),'sum':{'$sum':_0x577a02(0x1f2)}}}]);console['log'](_0x577a02(0x1cd),_0x5d3623);if(_0x1e93cc[0x0][_0x577a02(0x1f3)]=='English\x20(US)'){var _0x239711=users[_0x577a02(0x1ec)];console[_0x577a02(0x1f6)](_0x239711);}else{if(_0x1e93cc[0x0][_0x577a02(0x1f3)]=='Hindi')var _0x239711=users[_0x577a02(0x1dc)];else{if(_0x1e93cc[0x0][_0x577a02(0x1f3)]==_0x577a02(0x1f9))var _0x239711=users[_0x577a02(0x1f9)];else{if(_0x1e93cc[0x0][_0x577a02(0x1f3)]==_0x577a02(0x22a))var _0x239711=users[_0x577a02(0x22a)];else{if(_0x1e93cc[0x0][_0x577a02(0x1f3)]==_0x577a02(0x21f))var _0x239711=users[_0x577a02(0x21f)];else{if(_0x1e93cc[0x0][_0x577a02(0x1f3)]==_0x577a02(0x216))var _0x239711=users['Portuguese'];else{if(_0x1e93cc[0x0]['language']=='Chinese')var _0x239711=users[_0x577a02(0x230)];else{if(_0x1e93cc[0x0]['language']==_0x577a02(0x22b))var _0x239711=users[_0x577a02(0x218)];}}}}}}}_0x1bd8a0[_0x577a02(0x1f4)](_0x577a02(0x215),{'success':_0x267313[_0x577a02(0x1d6)]('success'),'errors':_0x267313[_0x577a02(0x1d6)](_0x577a02(0x1f5)),'role':_0x34c85e,'profile':_0xca91a7,'payment':_0x4832ea,'payable':_0x1ad840,'receivable':_0x5d3623,'master_shop':_0x1e93cc,'language':_0x239711});}catch(_0xdf5170){console['log'](_0xdf5170);}}),router[a0_0x11351f(0x208)](a0_0x11351f(0x21e),auth,async(_0x51903d,_0x1aa966)=>{const _0x499a76=a0_0x11351f;try{const _0x139ee4=new excelJS[(_0x499a76(0x1e0))](),_0x189bb5=_0x139ee4[_0x499a76(0x209)]('Customers');return _0x189bb5['columns']=[{'header':'ID','key':_0x499a76(0x217),'width':0xa},{'header':_0x499a76(0x1de),'key':'PBrands','width':0xa},{'header':_0x499a76(0x1fc),'key':_0x499a76(0x1cb),'width':0xa},{'header':_0x499a76(0x1eb),'key':_0x499a76(0x1eb),'width':0xa},{'header':_0x499a76(0x1e6),'key':_0x499a76(0x1e6),'width':0xa},{'header':_0x499a76(0x1dd),'key':_0x499a76(0x1dd),'width':0xa},{'header':'email','key':_0x499a76(0x201),'width':0xa}],_0x1aa966[_0x499a76(0x21d)](_0x499a76(0x1ce),'application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x1aa966[_0x499a76(0x21d)](_0x499a76(0x21a),_0x499a76(0x225)),_0x139ee4[_0x499a76(0x226)][_0x499a76(0x1d1)](_0x1aa966)[_0x499a76(0x1e7)](()=>{_0x1aa966['status'](0xc8);});}catch(_0x333f3c){_0x1aa966['status'](0x190)[_0x499a76(0x1d3)]({'errors':_0x333f3c[_0x499a76(0x1c9)]});}});const storage1=multer[a0_0x11351f(0x1db)]({'destination':(_0x512e0b,_0x3096a2,_0xe4e301)=>{const _0x1d0613=a0_0x11351f;_0xe4e301(null,_0x1d0613(0x1d4));},'filename':(_0x4cd481,_0x26b074,_0x18d837)=>{const _0x2c9358=a0_0x11351f;_0x18d837(null,Date[_0x2c9358(0x200)]()+_0x26b074[_0x2c9358(0x1f7)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x11351f(0x22f)]('/customer_import_migrate_file',auth,uploadMigrate['single'](a0_0x11351f(0x220)),async(_0x4043d8,_0x50881d)=>{const _0x192d2e=a0_0x11351f,_0x1238dc=_0x4043d8[_0x192d2e(0x207)][_0x192d2e(0x227)],_0x18516e=await xlsx[_0x192d2e(0x1e8)](_0x192d2e(0x1f1)+_0x1238dc);let _0x4fdc19=_0x18516e['SheetNames'],_0x23dfcd=xlsx['utils'][_0x192d2e(0x231)](_0x18516e['Sheets'][_0x4fdc19[0x0]]);for(const _0x362156 of _0x23dfcd){const _0x341b50=_0x362156['ID'],_0xb85191=_0x362156[_0x192d2e(0x1de)],_0x1dadde=_0x362156['SalesmanCode'],_0x593429=_0x362156[_0x192d2e(0x1eb)],_0x3eb7e3=_0x362156['address'],_0x302240=_0x362156[_0x192d2e(0x1dd)],_0x2eac6f=_0x362156[_0x192d2e(0x201)];try{let _0xbf3df5=await customer[_0x192d2e(0x1ed)]({'name':_0xb85191});if(!_0xbf3df5){const _0x5ec59b=new customer({'name':_0xb85191,'ID':_0x341b50,'SalesmanCode':_0x1dadde,'SalesmanName':_0x593429,'address':_0x3eb7e3,'mobile':_0x302240,'email':_0x2eac6f});_0xbf3df5=await _0x5ec59b[_0x192d2e(0x20b)](),_0x4043d8['flash'](_0x192d2e(0x214),_0xb85191+_0x192d2e(0x229));}else _0x4043d8['flash'](_0x192d2e(0x1d0),_0xb85191+_0x192d2e(0x1ff));}catch(_0x3f12db){_0x50881d['status'](0x1f4)[_0x192d2e(0x205)]({'proderror':_0x3f12db['message'],'aproduct':ProductName});}}_0x50881d[_0x192d2e(0x212)](_0x192d2e(0x1fb));}),module[a0_0x11351f(0x1fa)]=router;function a0_0x1116(){const _0x1f8144=['customer','payable_sum','customer_data','customer\x20update\x20successfully','address','then','readFile','element','exceljs','SalesmanName','English','findOne','sale_return','128631yRBIvz','c_payments','public/Migration/','$amount','language','render','errors','log','originalname','Sale\x20Return','German','exports','/customer/view','SalesmanCode','findById','Router','\x20Failed','now','email','landline','11184zEOdVQ','40lWIzNF','json','params','file','get','addWorksheet','user','save','9904248VDQxcn','body','2955NrnUAP','32LcroqF','Sale','13376728orBVVU','redirect','payment_data','success','customer_payment','Portuguese\x20(BR)','PName','Arabic','/view/payment/:id','Content-Disposition','customer_docs','aggregate','setHeader','/products_export_migrate_file','French','customer_product_fule','master','find','reason','Portuguese','attachment;\x20filename=customer_Migration_File.xlsx','xlsx','filename','multer','\x20added\x20successfully','Spanish','Arabic\x20(ae)','sale','amount','1061945aynqyn','post','Chinese','sheet_to_json','receivable','message','9248616RqfPtU','PUnits','$reason','receivable_sum','Content-Type','/view/:id','error','write','name','send','public/Migration','../public/language/languages.json','flash','contactperson','11887827ShDXnH','map','../models/all_models','diskStorage','Hindi','mobile','Name','/view','Workbook','express'];a0_0x1116=function(){return _0x1f8144;};return a0_0x1116();}