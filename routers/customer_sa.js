const a0_0x525e49=a0_0x38ed;function a0_0x38ed(_0x5b25b8,_0x3c9025){const _0x541a18=a0_0x541a();return a0_0x38ed=function(_0x38ed7b,_0x52ed8d){_0x38ed7b=_0x38ed7b-0x18f;let _0x3dbe10=_0x541a18[_0x38ed7b];return _0x3dbe10;},a0_0x38ed(_0x5b25b8,_0x3c9025);}(function(_0x39a528,_0x4a8df5){const _0x3e5ad2=a0_0x38ed,_0x14f021=_0x39a528();while(!![]){try{const _0x43df63=-parseInt(_0x3e5ad2(0x195))/0x1*(-parseInt(_0x3e5ad2(0x1b0))/0x2)+-parseInt(_0x3e5ad2(0x1be))/0x3*(-parseInt(_0x3e5ad2(0x1b4))/0x4)+parseInt(_0x3e5ad2(0x1a0))/0x5+parseInt(_0x3e5ad2(0x1fa))/0x6+parseInt(_0x3e5ad2(0x1c3))/0x7*(parseInt(_0x3e5ad2(0x1c5))/0x8)+-parseInt(_0x3e5ad2(0x201))/0x9*(-parseInt(_0x3e5ad2(0x1a5))/0xa)+-parseInt(_0x3e5ad2(0x1a4))/0xb;if(_0x43df63===_0x4a8df5)break;else _0x14f021['push'](_0x14f021['shift']());}catch(_0x228679){_0x14f021['push'](_0x14f021['shift']());}}}(a0_0x541a,0x42b5c));const express=require(a0_0x525e49(0x1ea)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x525e49(0x1fe)),auth=require(a0_0x525e49(0x1b7)),users=require('../public/language/languages.json'),excelJS=require(a0_0x525e49(0x1bf)),xlsx=require(a0_0x525e49(0x199)),multer=require(a0_0x525e49(0x1c6));function a0_0x541a(){const _0x16fd3c=['find','Workbook','attachment;\x20filename=customer_Migration_File.xlsx','English','c_payments','Customers','business_start_year','json','success','landline','customer_sa','German','columns','user','status','originalname','customer_data','customer_product_fule','type_organization','express','SalesmanCode','filename','/view/payment/:id','customer_docs','/customer_sa/view','Sale','Chinese','contactperson','/view/:id','credit_limit','forEach','less_percent','findOne','SalesmanName','sale_return','3083142FUgzZU','diskStorage','mobile','post','../models/all_models','readFile','Content-Disposition','394758HvYSnp','payable','Arabic','English\x20(US)','Arabic\x20(ae)','email','receivable_sum','flash','Sheets','valueOf','31103LvaayU','$amount','customer_payment','Spanish','xlsx','master','Portuguese\x20(BR)','log','res_address','SheetNames','address','2368745JbqNqd','French','_id','/view','15890820yqHuQo','50HaRKgO','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','terms_of_payments','get','public/Migration','Portuguese','map','file','receivable','errors','aggregate','4KptmZb','element','data','language','182552stJYdM','findById','public/Migration/','../middleware/auth','string','body','Hindi','sheet_to_json','utils','Content-Type','3kHmeII','exceljs','exports','customer','render','6384aHOFMc','then','3536VuyXPy','multer','setHeader','params','\x20Failed','reason','amount','save','$reason','name','message','/products_export_migrate_file','now','Sale\x20Return','redirect','PBrands','customer\x20update\x20successfully','sale'];a0_0x541a=function(){return _0x16fd3c;};return a0_0x541a();}router[a0_0x525e49(0x1a8)](a0_0x525e49(0x1a3),auth,async(_0x471e84,_0x14ab3a)=>{const _0x2989e4=a0_0x525e49;try{const {username:_0x15b272,email:_0x14f511,role:_0x1786ac}=_0x471e84[_0x2989e4(0x1e4)],_0x11fe9b=_0x471e84[_0x2989e4(0x1e4)],_0x3b47ec=await profile['findOne']({'email':_0x11fe9b[_0x2989e4(0x190)]}),_0x3ca961=await master_shop[_0x2989e4(0x1d7)](),_0x53056b=await staff[_0x2989e4(0x1f7)]({'email':_0x11fe9b[_0x2989e4(0x190)]}),_0x294ef7=await customer[_0x2989e4(0x1d7)]({'agent_id':_0x53056b[_0x2989e4(0x1a2)]}),_0x280663=await customer[_0x2989e4(0x1af)]([{'$match':{'agent_id':_0x53056b[_0x2989e4(0x1a2)][_0x2989e4(0x194)]()}},{'$lookup':{'from':_0x2989e4(0x1db),'localField':_0x2989e4(0x1ce),'foreignField':_0x2989e4(0x1c1),'as':'customer_docs'}}]),_0x16a23f=_0x280663[_0x2989e4(0x1ab)](_0x5cee0d=>{const _0x323c3f=_0x2989e4;console['log'](_0x323c3f(0x1b2),_0x5cee0d);var _0x382034=0x0,_0x2ab184=0x0;return _0x5cee0d[_0x323c3f(0x1ee)][_0x323c3f(0x1f5)](_0x149e4a=>{const _0x53debf=_0x323c3f;console[_0x53debf(0x19c)](_0x53debf(0x1b1),_0x149e4a),_0x149e4a[_0x53debf(0x1ca)]=='Sale'?_0x382034+=_0x149e4a['amount']:_0x2ab184+=_0x149e4a[_0x53debf(0x1cb)];}),_0x5cee0d[_0x323c3f(0x1d6)]=parseFloat(_0x382034)+0x0,_0x5cee0d[_0x323c3f(0x1f9)]=parseFloat(_0x2ab184)+0x0,_0x5cee0d;});if(_0x3ca961[0x0][_0x2989e4(0x1b3)]=='English\x20(US)'){var _0x4f4ba9=users[_0x2989e4(0x1da)];console[_0x2989e4(0x19c)](_0x4f4ba9);}else{if(_0x3ca961[0x0][_0x2989e4(0x1b3)]==_0x2989e4(0x1ba))var _0x4f4ba9=users[_0x2989e4(0x1ba)];else{if(_0x3ca961[0x0][_0x2989e4(0x1b3)]==_0x2989e4(0x1e2))var _0x4f4ba9=users[_0x2989e4(0x1e2)];else{if(_0x3ca961[0x0][_0x2989e4(0x1b3)]==_0x2989e4(0x198))var _0x4f4ba9=users[_0x2989e4(0x198)];else{if(_0x3ca961[0x0]['language']=='French')var _0x4f4ba9=users[_0x2989e4(0x1a1)];else{if(_0x3ca961[0x0][_0x2989e4(0x1b3)]==_0x2989e4(0x19b))var _0x4f4ba9=users[_0x2989e4(0x1aa)];else{if(_0x3ca961[0x0]['language']==_0x2989e4(0x1f1))var _0x4f4ba9=users[_0x2989e4(0x1f1)];else{if(_0x3ca961[0x0]['language']==_0x2989e4(0x18f))var _0x4f4ba9=users['Arabic'];}}}}}}}_0x14ab3a[_0x2989e4(0x1c2)](_0x2989e4(0x1e1),{'success':_0x471e84[_0x2989e4(0x192)](_0x2989e4(0x1df)),'errors':_0x471e84['flash'](_0x2989e4(0x1ae)),'user':_0x294ef7,'role':_0x11fe9b,'profile':_0x3b47ec,'master_shop':_0x3ca961,'language':_0x4f4ba9,'agent_id':_0x53056b[_0x2989e4(0x1a2)],'payment':_0x16a23f,'staff_arr':_0x53056b});}catch(_0x236364){console[_0x2989e4(0x19c)](_0x236364);}}),router[a0_0x525e49(0x1fd)](a0_0x525e49(0x1a3),auth,async(_0x1b2e77,_0x34c7ad)=>{const _0x31cdd8=a0_0x525e49;try{const {name:_0x5648be,address:_0x25459f,mobile:_0x4028ba,email:_0x5a823a,receivable:_0x1ca6d9,payable:_0x2204c3,contactperson:_0x2205c7,landline:_0x5674c3,agent_id:_0x27f305,less_percent:_0x12913e,type_org:_0x585b85,res_address:_0x437154,business_start_year:_0x28d5cd,credit_limit:_0x3f0e7c,term_pay:_0x3d90bb}=_0x1b2e77[_0x31cdd8(0x1b9)];if(typeof _0x12913e==_0x31cdd8(0x1b8))var _0x56f1d5=[_0x1b2e77['body'][_0x31cdd8(0x1f6)]];else var _0x56f1d5=[..._0x1b2e77[_0x31cdd8(0x1b9)][_0x31cdd8(0x1f6)]];const _0xe42353=_0x56f1d5['map'](_0x12f45f=>{return _0x12f45f={'less':_0x12f45f};}),_0x3db101=new customer({'name':_0x5648be,'address':_0x25459f,'mobile':_0x4028ba,'email':_0x5a823a,'receivable':_0x1ca6d9,'payable':_0x2204c3,'customer_discount':_0xe42353,'contactperson':_0x2205c7,'landline':_0x5674c3,'agent_id':_0x27f305,'res_address':_0x437154,'type_organization':_0x585b85,'business_start_year':_0x28d5cd,'credit_limit':_0x3f0e7c,'terms_of_payments':_0x3d90bb}),_0x20100b=await _0x3db101[_0x31cdd8(0x1cc)]();_0x1b2e77[_0x31cdd8(0x192)](_0x31cdd8(0x1df),'customer\x20add\x20successfully'),_0x34c7ad['redirect'](_0x31cdd8(0x1ef));}catch(_0x4e7a4c){console[_0x31cdd8(0x19c)](_0x4e7a4c);}}),router[a0_0x525e49(0x1a8)]('/view/:id',auth,async(_0x299055,_0x3d8edb)=>{const _0x401446=a0_0x525e49;try{const {username:_0x3b72e7,email:_0x2e70d3,role:_0x37ffcb}=_0x299055[_0x401446(0x1e4)],_0x1851b9=_0x299055[_0x401446(0x1e4)],_0x5a2ced=await profile[_0x401446(0x1f7)]({'email':_0x1851b9['email']}),_0x47a50c=await master_shop['find']();console[_0x401446(0x19c)](_0x401446(0x19a),_0x47a50c);const _0x2dfa1f=_0x299055[_0x401446(0x1c8)]['id'],_0x192022=await customer[_0x401446(0x1b5)](_0x2dfa1f);console[_0x401446(0x19c)](_0x192022);if(_0x47a50c[0x0]['language']==_0x401446(0x204)){var _0x53904a=users[_0x401446(0x1da)];console[_0x401446(0x19c)](_0x53904a);}else{if(_0x47a50c[0x0][_0x401446(0x1b3)]=='Hindi')var _0x53904a=users['Hindi'];else{if(_0x47a50c[0x0][_0x401446(0x1b3)]==_0x401446(0x1e2))var _0x53904a=users[_0x401446(0x1e2)];else{if(_0x47a50c[0x0][_0x401446(0x1b3)]==_0x401446(0x198))var _0x53904a=users['Spanish'];else{if(_0x47a50c[0x0][_0x401446(0x1b3)]=='French')var _0x53904a=users[_0x401446(0x1a1)];else{if(_0x47a50c[0x0][_0x401446(0x1b3)]=='Portuguese\x20(BR)')var _0x53904a=users[_0x401446(0x1aa)];else{if(_0x47a50c[0x0][_0x401446(0x1b3)]==_0x401446(0x1f1))var _0x53904a=users[_0x401446(0x1f1)];else{if(_0x47a50c[0x0][_0x401446(0x1b3)]==_0x401446(0x18f))var _0x53904a=users[_0x401446(0x203)];}}}}}}}_0x3d8edb[_0x401446(0x1c2)](_0x401446(0x1e1),{'success':_0x299055['flash'](_0x401446(0x1df)),'errors':_0x299055['flash'](_0x401446(0x1ae)),'role':_0x1851b9,'profile':_0x5a2ced,'user':_0x192022,'master_shop':_0x47a50c,'language':_0x53904a});}catch(_0x45a26d){console[_0x401446(0x19c)](_0x45a26d);}}),router['post'](a0_0x525e49(0x1f3),auth,async(_0x28aeee,_0x4cf709)=>{const _0x500aba=a0_0x525e49;try{const _0x1e43b0=_0x28aeee['params']['id'],_0x1e8e22=await customer[_0x500aba(0x1b5)](_0x1e43b0),{name:_0x11fd63,address:_0x1a679d,mobile:_0x248b27,email:_0x243b3a,receivable:_0x1e7415,payable:_0x70d53c,contactperson:_0x4a8d96,landline:_0x3e0fbd,less_percent_edit:_0x2230c3,edit_type_org:_0x22b8fb,edit_res_address:_0x39cc90,edit_business_start_year:_0x3486c4,edit_credit_limit:_0x44954e,edit_term_pay:_0x2db73b}=_0x28aeee[_0x500aba(0x1b9)];if(typeof _0x2230c3==_0x500aba(0x1b8))var _0x1232e8=[_0x28aeee[_0x500aba(0x1b9)]['less_percent_edit']];else var _0x1232e8=[..._0x28aeee[_0x500aba(0x1b9)]['less_percent_edit']];const _0x5af2dd=_0x1232e8[_0x500aba(0x1ab)](_0x11add0=>{return _0x11add0={'less':_0x11add0};});_0x1e8e22[_0x500aba(0x1ce)]=_0x11fd63,_0x1e8e22['address']=_0x1a679d,_0x1e8e22['mobile']=_0x248b27,_0x1e8e22[_0x500aba(0x190)]=_0x243b3a,_0x1e8e22[_0x500aba(0x1ad)]=_0x1e7415,_0x1e8e22[_0x500aba(0x202)]=_0x70d53c,_0x1e8e22[_0x500aba(0x1f2)]=_0x4a8d96,_0x1e8e22[_0x500aba(0x1e0)]=_0x3e0fbd,_0x1e8e22['customer_discount']=_0x5af2dd,_0x1e8e22[_0x500aba(0x1e9)]=_0x22b8fb,_0x1e8e22[_0x500aba(0x1dd)]=_0x3486c4,_0x1e8e22[_0x500aba(0x1f4)]=_0x44954e,_0x1e8e22[_0x500aba(0x1a7)]=_0x2db73b,_0x1e8e22[_0x500aba(0x19d)]=_0x39cc90;const _0x572d92=await _0x1e8e22['save']();_0x28aeee[_0x500aba(0x192)](_0x500aba(0x1df),_0x500aba(0x1d5)),_0x4cf709[_0x500aba(0x1d3)]('/customer_sa/view');}catch(_0x2fd435){console['log'](_0x2fd435);}}),router[a0_0x525e49(0x1a8)](a0_0x525e49(0x1ed),auth,async(_0xa1fa7a,_0xb622d9)=>{const _0x4ac744=a0_0x525e49;try{const {username:_0x52030f,email:_0x40b514,role:_0x34077f}=_0xa1fa7a[_0x4ac744(0x1e4)],_0x25cadc=_0xa1fa7a[_0x4ac744(0x1e4)],_0x1798c4=await profile[_0x4ac744(0x1f7)]({'email':_0x25cadc[_0x4ac744(0x190)]}),_0x2d0b60=await master_shop[_0x4ac744(0x1d7)]();console['log']('master',_0x2d0b60),console['log'](_0xa1fa7a['params']['id']);const _0x2ab5c4=await customer['findOne']({'_id':_0xa1fa7a['params']['id']});console['log'](_0x4ac744(0x1e7),_0x2ab5c4);const _0x48db76=await c_payment_data[_0x4ac744(0x1d7)]({'customer':_0x2ab5c4[_0x4ac744(0x1ce)]});console['log'](_0x48db76);const _0x8656c4=await c_payment_data[_0x4ac744(0x1af)]([{'$match':{'customer':_0x2ab5c4[_0x4ac744(0x1ce)]}},{'$match':{'reason':_0x4ac744(0x1f0)}},{'$group':{'_id':_0x4ac744(0x1cd),'sum':{'$sum':_0x4ac744(0x196)}}}]);console[_0x4ac744(0x19c)]('payable_sum',_0x8656c4);const _0x15e607=await c_payment_data[_0x4ac744(0x1af)]([{'$match':{'customer':_0x2ab5c4[_0x4ac744(0x1ce)]}},{'$match':{'reason':_0x4ac744(0x1d2)}},{'$group':{'_id':_0x4ac744(0x1cd),'sum':{'$sum':'$amount'}}}]);console['log'](_0x4ac744(0x191),_0x15e607);if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x204)){var _0x2945ed=users[_0x4ac744(0x1da)];console[_0x4ac744(0x19c)](_0x2945ed);}else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x1ba))var _0x2945ed=users[_0x4ac744(0x1ba)];else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]=='German')var _0x2945ed=users[_0x4ac744(0x1e2)];else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x198))var _0x2945ed=users[_0x4ac744(0x198)];else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x1a1))var _0x2945ed=users[_0x4ac744(0x1a1)];else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x19b))var _0x2945ed=users[_0x4ac744(0x1aa)];else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x1f1))var _0x2945ed=users['Chinese'];else{if(_0x2d0b60[0x0][_0x4ac744(0x1b3)]==_0x4ac744(0x18f))var _0x2945ed=users['Arabic'];}}}}}}}_0xb622d9['render'](_0x4ac744(0x197),{'success':_0xa1fa7a[_0x4ac744(0x192)]('success'),'errors':_0xa1fa7a[_0x4ac744(0x192)](_0x4ac744(0x1ae)),'role':_0x25cadc,'profile':_0x1798c4,'payment':_0x48db76,'payable':_0x8656c4,'receivable':_0x15e607,'master_shop':_0x2d0b60,'language':_0x2945ed});}catch(_0x125634){console[_0x4ac744(0x19c)](_0x125634);}}),router['get'](a0_0x525e49(0x1d0),auth,async(_0x2ec5a7,_0x5a30d0)=>{const _0x544721=a0_0x525e49;try{const _0x36464c=new excelJS[(_0x544721(0x1d8))](),_0x23b97b=_0x36464c['addWorksheet'](_0x544721(0x1dc));return _0x23b97b[_0x544721(0x1e3)]=[{'header':'ID','key':'PName','width':0xa},{'header':'Name','key':_0x544721(0x1d4),'width':0xa},{'header':_0x544721(0x1eb),'key':'PUnits','width':0xa},{'header':'SalesmanName','key':'SalesmanName','width':0xa},{'header':_0x544721(0x19f),'key':'address','width':0xa},{'header':_0x544721(0x1fc),'key':_0x544721(0x1fc),'width':0xa},{'header':_0x544721(0x190),'key':_0x544721(0x190),'width':0xa}],_0x5a30d0[_0x544721(0x1c7)](_0x544721(0x1bd),_0x544721(0x1a6)),_0x5a30d0[_0x544721(0x1c7)](_0x544721(0x200),_0x544721(0x1d9)),_0x36464c[_0x544721(0x199)]['write'](_0x5a30d0)[_0x544721(0x1c4)](()=>{const _0x5e747c=_0x544721;_0x5a30d0[_0x5e747c(0x1e5)](0xc8);});}catch(_0x29aca7){_0x5a30d0[_0x544721(0x1e5)](0x190)['send']({'errors':_0x29aca7[_0x544721(0x1cf)]});}});const storage1=multer[a0_0x525e49(0x1fb)]({'destination':(_0x56c505,_0x1aeb30,_0x358de7)=>{const _0x5443ee=a0_0x525e49;_0x358de7(null,_0x5443ee(0x1a9));},'filename':(_0x33f40d,_0x59418c,_0x469a23)=>{const _0x421e18=a0_0x525e49;_0x469a23(null,Date[_0x421e18(0x1d1)]()+_0x59418c[_0x421e18(0x1e6)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x525e49(0x1fd)]('/customer_import_migrate_file',auth,uploadMigrate['single'](a0_0x525e49(0x1e8)),async(_0x47fe43,_0x385cbc)=>{const _0x2e1a5e=a0_0x525e49,_0x37a873=_0x47fe43[_0x2e1a5e(0x1ac)][_0x2e1a5e(0x1ec)],_0x3ae16a=await xlsx[_0x2e1a5e(0x1ff)](_0x2e1a5e(0x1b6)+_0x37a873);let _0xd377d0=_0x3ae16a[_0x2e1a5e(0x19e)],_0x34a403=xlsx[_0x2e1a5e(0x1bc)][_0x2e1a5e(0x1bb)](_0x3ae16a[_0x2e1a5e(0x193)][_0xd377d0[0x0]]);for(const _0x15e633 of _0x34a403){const _0x5841e2=_0x15e633['ID'],_0x21b092=_0x15e633['Name'],_0x1ce5fd=_0x15e633[_0x2e1a5e(0x1eb)],_0x14c22a=_0x15e633[_0x2e1a5e(0x1f8)],_0xf27aa9=_0x15e633[_0x2e1a5e(0x19f)],_0x2210d9=_0x15e633[_0x2e1a5e(0x1fc)],_0x502bce=_0x15e633[_0x2e1a5e(0x190)];try{let _0x50298a=await customer[_0x2e1a5e(0x1f7)]({'name':_0x21b092});if(!_0x50298a){const _0x4b7491=new customer({'name':_0x21b092,'ID':_0x5841e2,'SalesmanCode':_0x1ce5fd,'SalesmanName':_0x14c22a,'address':_0xf27aa9,'mobile':_0x2210d9,'email':_0x502bce});_0x50298a=await _0x4b7491[_0x2e1a5e(0x1cc)](),_0x47fe43[_0x2e1a5e(0x192)](_0x2e1a5e(0x1df),_0x21b092+'\x20added\x20successfully');}else _0x47fe43[_0x2e1a5e(0x192)]('error',_0x21b092+_0x2e1a5e(0x1c9));}catch(_0x1d728d){_0x385cbc[_0x2e1a5e(0x1e5)](0x1f4)[_0x2e1a5e(0x1de)]({'proderror':_0x1d728d[_0x2e1a5e(0x1cf)],'aproduct':ProductName});}}_0x385cbc['redirect'](_0x2e1a5e(0x1ef));}),module[a0_0x525e49(0x1c0)]=router;