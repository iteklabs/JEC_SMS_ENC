const a0_0x1411ac=a0_0x53c4;(function(_0x5b0498,_0x557a2a){const _0x50b99f=a0_0x53c4,_0x5de509=_0x5b0498();while(!![]){try{const _0x2d6204=parseInt(_0x50b99f(0x207))/0x1*(-parseInt(_0x50b99f(0x1dc))/0x2)+parseInt(_0x50b99f(0x1fa))/0x3*(-parseInt(_0x50b99f(0x1e0))/0x4)+-parseInt(_0x50b99f(0x1d9))/0x5+-parseInt(_0x50b99f(0x1dd))/0x6*(-parseInt(_0x50b99f(0x1ba))/0x7)+-parseInt(_0x50b99f(0x1f9))/0x8*(parseInt(_0x50b99f(0x1fb))/0x9)+parseInt(_0x50b99f(0x20d))/0xa+parseInt(_0x50b99f(0x1fe))/0xb;if(_0x2d6204===_0x557a2a)break;else _0x5de509['push'](_0x5de509['shift']());}catch(_0x4c6822){_0x5de509['push'](_0x5de509['shift']());}}}(a0_0x38ee,0x9c251));function a0_0x38ee(){const _0x31c90a=['log','diskStorage','German','xlsx','readFile','addWorksheet','language','7OHyVmF','English\x20(US)','PBrands','contactperson','\x20added\x20successfully','errors','PUnits','message','filename','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','customer_docs','utils','customer\x20update\x20successfully','business_start_year','Name','public/Migration','success','map','render','/products_export_migrate_file','Arabic\x20(ae)','Spanish','customer_data','save','find','flash','type_organization','English','findById','forEach','redirect','3419110WMhENk','SalesmanCode','Sheets','2BWJSMZ','855228JJTWhD','string','Portuguese\x20(BR)','36UCEiEi','exports','element','Hindi','Portuguese','Sale','../middleware/auth','landline','exceljs','payable','reason','error','customer_sa','findOne','/view/payment/:id','customer_payment','less_percent_edit','sale_return','../public/language/languages.json','Content-Type','Customers','$amount','name','less_percent','params','8UCBMaM','293172zCwTdD','2539044rXkhNY','amount','then','30911947QaVBVh','Chinese','address','/customer_sa/view','$reason','columns','body','originalname','SalesmanName','1226091ByepNi','Router','status','mobile','French','attachment;\x20filename=customer_Migration_File.xlsx','7583990rEBkok','aggregate','setHeader','_id','send','terms_of_payments','valueOf','express','sheet_to_json','get','write','SheetNames','email','post','/view/:id','Sale\x20Return','/customer_import_migrate_file','sale','user'];a0_0x38ee=function(){return _0x31c90a;};return a0_0x38ee();}const express=require(a0_0x1411ac(0x1a7)),app=express(),router=express[a0_0x1411ac(0x208)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require('../models/all_models'),auth=require(a0_0x1411ac(0x1e6)),users=require(a0_0x1411ac(0x1f2)),excelJS=require(a0_0x1411ac(0x1e8)),xlsx=require(a0_0x1411ac(0x1b6)),multer=require('multer');router[a0_0x1411ac(0x1a9)]('/view',auth,async(_0x318e82,_0x5ef0fa)=>{const _0x44c653=a0_0x1411ac;try{const {username:_0x582e8d,email:_0x170a77,role:_0x4971da}=_0x318e82[_0x44c653(0x1b2)],_0x4ce853=_0x318e82[_0x44c653(0x1b2)],_0x30c216=await profile['findOne']({'email':_0x4ce853[_0x44c653(0x1ac)]}),_0x304d6e=await master_shop[_0x44c653(0x1d2)](),_0x433fab=await staff[_0x44c653(0x1ed)]({'email':_0x4ce853['email']}),_0x316e76=await customer[_0x44c653(0x1d2)]({'agent_id':_0x433fab[_0x44c653(0x210)]}),_0x5436bb=await customer['aggregate']([{'$match':{'agent_id':_0x433fab[_0x44c653(0x210)][_0x44c653(0x1a6)]()}},{'$lookup':{'from':'c_payments','localField':_0x44c653(0x1f6),'foreignField':'customer','as':_0x44c653(0x1c4)}}]),_0x10d39e=_0x5436bb[_0x44c653(0x1cb)](_0x18bb38=>{const _0x3e8e58=_0x44c653;console[_0x3e8e58(0x1b3)]('data',_0x18bb38);var _0x438fcc=0x0,_0x24a1f5=0x0;return _0x18bb38[_0x3e8e58(0x1c4)][_0x3e8e58(0x1d7)](_0x553ca7=>{const _0x3c4668=_0x3e8e58;console[_0x3c4668(0x1b3)](_0x3c4668(0x1e2),_0x553ca7),_0x553ca7[_0x3c4668(0x1ea)]==_0x3c4668(0x1e5)?_0x438fcc+=_0x553ca7[_0x3c4668(0x1fc)]:_0x24a1f5+=_0x553ca7[_0x3c4668(0x1fc)];}),_0x18bb38[_0x3e8e58(0x1b1)]=parseFloat(_0x438fcc)+0x0,_0x18bb38[_0x3e8e58(0x1f1)]=parseFloat(_0x24a1f5)+0x0,_0x18bb38;});if(_0x304d6e[0x0][_0x44c653(0x1b9)]==_0x44c653(0x1bb)){var _0x93bb2c=users['English'];console[_0x44c653(0x1b3)](_0x93bb2c);}else{if(_0x304d6e[0x0]['language']=='Hindi')var _0x93bb2c=users[_0x44c653(0x1e3)];else{if(_0x304d6e[0x0][_0x44c653(0x1b9)]==_0x44c653(0x1b5))var _0x93bb2c=users[_0x44c653(0x1b5)];else{if(_0x304d6e[0x0][_0x44c653(0x1b9)]==_0x44c653(0x1cf))var _0x93bb2c=users['Spanish'];else{if(_0x304d6e[0x0][_0x44c653(0x1b9)]==_0x44c653(0x20b))var _0x93bb2c=users[_0x44c653(0x20b)];else{if(_0x304d6e[0x0][_0x44c653(0x1b9)]==_0x44c653(0x1df))var _0x93bb2c=users['Portuguese'];else{if(_0x304d6e[0x0]['language']==_0x44c653(0x1ff))var _0x93bb2c=users[_0x44c653(0x1ff)];else{if(_0x304d6e[0x0][_0x44c653(0x1b9)]=='Arabic\x20(ae)')var _0x93bb2c=users['Arabic'];}}}}}}}_0x5ef0fa[_0x44c653(0x1cc)](_0x44c653(0x1ec),{'success':_0x318e82[_0x44c653(0x1d3)](_0x44c653(0x1ca)),'errors':_0x318e82[_0x44c653(0x1d3)](_0x44c653(0x1bf)),'user':_0x316e76,'role':_0x4ce853,'profile':_0x30c216,'master_shop':_0x304d6e,'language':_0x93bb2c,'agent_id':_0x433fab[_0x44c653(0x210)],'payment':_0x10d39e,'staff_arr':_0x433fab});}catch(_0x1ba89b){console['log'](_0x1ba89b);}}),router['post']('/view',auth,async(_0x35da55,_0x2f2b52)=>{const _0x9f062c=a0_0x1411ac;try{const {name:_0x277421,address:_0x42afed,mobile:_0x4d4fde,email:_0x26afb9,receivable:_0x3bdf35,payable:_0x9f120a,contactperson:_0x375e88,landline:_0x4dae54,agent_id:_0x1b9916,less_percent:_0x4f5439,type_org:_0x47a933,res_address:_0x46e8cd,business_start_year:_0x2096a6,credit_limit:_0x5af5c0,term_pay:_0x227393}=_0x35da55['body'];if(typeof _0x4f5439==_0x9f062c(0x1de))var _0x5c645e=[_0x35da55['body'][_0x9f062c(0x1f7)]];else var _0x5c645e=[..._0x35da55[_0x9f062c(0x204)][_0x9f062c(0x1f7)]];const _0xcd2e96=_0x5c645e[_0x9f062c(0x1cb)](_0x296822=>{return _0x296822={'less':_0x296822};}),_0x53434f=new customer({'name':_0x277421,'address':_0x42afed,'mobile':_0x4d4fde,'email':_0x26afb9,'receivable':_0x3bdf35,'payable':_0x9f120a,'customer_discount':_0xcd2e96,'contactperson':_0x375e88,'landline':_0x4dae54,'agent_id':_0x1b9916,'res_address':_0x46e8cd,'type_organization':_0x47a933,'business_start_year':_0x2096a6,'credit_limit':_0x5af5c0,'terms_of_payments':_0x227393}),_0x467289=await _0x53434f['save']();_0x35da55[_0x9f062c(0x1d3)]('success','customer\x20add\x20successfully'),_0x2f2b52['redirect']('/customer_sa/view');}catch(_0x2e5391){console['log'](_0x2e5391);}}),router['get'](a0_0x1411ac(0x1ae),auth,async(_0x20a3a4,_0x39fc8f)=>{const _0x7d562b=a0_0x1411ac;try{const {username:_0x415411,email:_0x35dc38,role:_0x579f7d}=_0x20a3a4['user'],_0x591e35=_0x20a3a4[_0x7d562b(0x1b2)],_0x3e7af2=await profile[_0x7d562b(0x1ed)]({'email':_0x591e35[_0x7d562b(0x1ac)]}),_0x3a7f26=await master_shop[_0x7d562b(0x1d2)]();console[_0x7d562b(0x1b3)]('master',_0x3a7f26);const _0x1c1b78=_0x20a3a4[_0x7d562b(0x1f8)]['id'],_0x2a0bcb=await customer[_0x7d562b(0x1d6)](_0x1c1b78);console['log'](_0x2a0bcb);if(_0x3a7f26[0x0][_0x7d562b(0x1b9)]==_0x7d562b(0x1bb)){var _0xc22b08=users[_0x7d562b(0x1d5)];console[_0x7d562b(0x1b3)](_0xc22b08);}else{if(_0x3a7f26[0x0][_0x7d562b(0x1b9)]==_0x7d562b(0x1e3))var _0xc22b08=users[_0x7d562b(0x1e3)];else{if(_0x3a7f26[0x0]['language']==_0x7d562b(0x1b5))var _0xc22b08=users['German'];else{if(_0x3a7f26[0x0][_0x7d562b(0x1b9)]==_0x7d562b(0x1cf))var _0xc22b08=users[_0x7d562b(0x1cf)];else{if(_0x3a7f26[0x0][_0x7d562b(0x1b9)]==_0x7d562b(0x20b))var _0xc22b08=users[_0x7d562b(0x20b)];else{if(_0x3a7f26[0x0]['language']==_0x7d562b(0x1df))var _0xc22b08=users[_0x7d562b(0x1e4)];else{if(_0x3a7f26[0x0][_0x7d562b(0x1b9)]==_0x7d562b(0x1ff))var _0xc22b08=users[_0x7d562b(0x1ff)];else{if(_0x3a7f26[0x0][_0x7d562b(0x1b9)]=='Arabic\x20(ae)')var _0xc22b08=users['Arabic'];}}}}}}}_0x39fc8f['render'](_0x7d562b(0x1ec),{'success':_0x20a3a4[_0x7d562b(0x1d3)](_0x7d562b(0x1ca)),'errors':_0x20a3a4[_0x7d562b(0x1d3)](_0x7d562b(0x1bf)),'role':_0x591e35,'profile':_0x3e7af2,'user':_0x2a0bcb,'master_shop':_0x3a7f26,'language':_0xc22b08});}catch(_0x245625){console[_0x7d562b(0x1b3)](_0x245625);}}),router[a0_0x1411ac(0x1ad)](a0_0x1411ac(0x1ae),auth,async(_0x4a6da3,_0x54ad7e)=>{const _0x5a72de=a0_0x1411ac;try{const _0x4f8d08=_0x4a6da3[_0x5a72de(0x1f8)]['id'],_0x371bb5=await customer[_0x5a72de(0x1d6)](_0x4f8d08),{name:_0x50c72b,address:_0x1f7d66,mobile:_0x4de183,email:_0xeb47a,receivable:_0x179c61,payable:_0x503f25,contactperson:_0xc7f361,landline:_0x1615cb,less_percent_edit:_0x58dc40,edit_type_org:_0x281801,edit_res_address:_0x3274ae,edit_business_start_year:_0x48f94f,edit_credit_limit:_0x59670b,edit_term_pay:_0x3ec10d}=_0x4a6da3[_0x5a72de(0x204)];if(typeof _0x58dc40==_0x5a72de(0x1de))var _0x68dff4=[_0x4a6da3[_0x5a72de(0x204)]['less_percent_edit']];else var _0x68dff4=[..._0x4a6da3['body'][_0x5a72de(0x1f0)]];const _0x437659=_0x68dff4[_0x5a72de(0x1cb)](_0x34e74c=>{return _0x34e74c={'less':_0x34e74c};});_0x371bb5[_0x5a72de(0x1f6)]=_0x50c72b,_0x371bb5[_0x5a72de(0x200)]=_0x1f7d66,_0x371bb5[_0x5a72de(0x20a)]=_0x4de183,_0x371bb5[_0x5a72de(0x1ac)]=_0xeb47a,_0x371bb5['receivable']=_0x179c61,_0x371bb5[_0x5a72de(0x1e9)]=_0x503f25,_0x371bb5[_0x5a72de(0x1bd)]=_0xc7f361,_0x371bb5[_0x5a72de(0x1e7)]=_0x1615cb,_0x371bb5['customer_discount']=_0x437659,_0x371bb5[_0x5a72de(0x1d4)]=_0x281801,_0x371bb5[_0x5a72de(0x1c7)]=_0x48f94f,_0x371bb5['credit_limit']=_0x59670b,_0x371bb5[_0x5a72de(0x212)]=_0x3ec10d,_0x371bb5['res_address']=_0x3274ae;const _0xff2b7=await _0x371bb5['save']();_0x4a6da3['flash']('success',_0x5a72de(0x1c6)),_0x54ad7e[_0x5a72de(0x1d8)](_0x5a72de(0x201));}catch(_0x36ac00){console[_0x5a72de(0x1b3)](_0x36ac00);}}),router[a0_0x1411ac(0x1a9)](a0_0x1411ac(0x1ee),auth,async(_0x3a77ad,_0x46da77)=>{const _0x3bc242=a0_0x1411ac;try{const {username:_0x4caaed,email:_0x10a10b,role:_0x3a9155}=_0x3a77ad['user'],_0x531eb0=_0x3a77ad[_0x3bc242(0x1b2)],_0x3f65f6=await profile['findOne']({'email':_0x531eb0[_0x3bc242(0x1ac)]}),_0x2446d0=await master_shop[_0x3bc242(0x1d2)]();console['log']('master',_0x2446d0),console['log'](_0x3a77ad[_0x3bc242(0x1f8)]['id']);const _0x3e9676=await customer[_0x3bc242(0x1ed)]({'_id':_0x3a77ad[_0x3bc242(0x1f8)]['id']});console[_0x3bc242(0x1b3)](_0x3bc242(0x1d0),_0x3e9676);const _0x1b3116=await c_payment_data['find']({'customer':_0x3e9676[_0x3bc242(0x1f6)]});console[_0x3bc242(0x1b3)](_0x1b3116);const _0x109f53=await c_payment_data[_0x3bc242(0x20e)]([{'$match':{'customer':_0x3e9676[_0x3bc242(0x1f6)]}},{'$match':{'reason':_0x3bc242(0x1e5)}},{'$group':{'_id':_0x3bc242(0x202),'sum':{'$sum':_0x3bc242(0x1f5)}}}]);console[_0x3bc242(0x1b3)]('payable_sum',_0x109f53);const _0x6778d=await c_payment_data['aggregate']([{'$match':{'customer':_0x3e9676[_0x3bc242(0x1f6)]}},{'$match':{'reason':_0x3bc242(0x1af)}},{'$group':{'_id':_0x3bc242(0x202),'sum':{'$sum':_0x3bc242(0x1f5)}}}]);console['log']('receivable_sum',_0x6778d);if(_0x2446d0[0x0]['language']==_0x3bc242(0x1bb)){var _0x369ecc=users[_0x3bc242(0x1d5)];console[_0x3bc242(0x1b3)](_0x369ecc);}else{if(_0x2446d0[0x0]['language']==_0x3bc242(0x1e3))var _0x369ecc=users[_0x3bc242(0x1e3)];else{if(_0x2446d0[0x0][_0x3bc242(0x1b9)]==_0x3bc242(0x1b5))var _0x369ecc=users['German'];else{if(_0x2446d0[0x0][_0x3bc242(0x1b9)]==_0x3bc242(0x1cf))var _0x369ecc=users[_0x3bc242(0x1cf)];else{if(_0x2446d0[0x0][_0x3bc242(0x1b9)]=='French')var _0x369ecc=users['French'];else{if(_0x2446d0[0x0][_0x3bc242(0x1b9)]==_0x3bc242(0x1df))var _0x369ecc=users[_0x3bc242(0x1e4)];else{if(_0x2446d0[0x0]['language']==_0x3bc242(0x1ff))var _0x369ecc=users['Chinese'];else{if(_0x2446d0[0x0][_0x3bc242(0x1b9)]==_0x3bc242(0x1ce))var _0x369ecc=users['Arabic'];}}}}}}}_0x46da77[_0x3bc242(0x1cc)](_0x3bc242(0x1ef),{'success':_0x3a77ad[_0x3bc242(0x1d3)](_0x3bc242(0x1ca)),'errors':_0x3a77ad[_0x3bc242(0x1d3)](_0x3bc242(0x1bf)),'role':_0x531eb0,'profile':_0x3f65f6,'payment':_0x1b3116,'payable':_0x109f53,'receivable':_0x6778d,'master_shop':_0x2446d0,'language':_0x369ecc});}catch(_0x9ab9b9){console['log'](_0x9ab9b9);}}),router[a0_0x1411ac(0x1a9)](a0_0x1411ac(0x1cd),auth,async(_0x2d3155,_0x18f15f)=>{const _0xbf2d63=a0_0x1411ac;try{const _0x4c4ab6=new excelJS['Workbook'](),_0x1d32f2=_0x4c4ab6[_0xbf2d63(0x1b8)](_0xbf2d63(0x1f4));return _0x1d32f2[_0xbf2d63(0x203)]=[{'header':'ID','key':'PName','width':0xa},{'header':_0xbf2d63(0x1c8),'key':_0xbf2d63(0x1bc),'width':0xa},{'header':_0xbf2d63(0x1da),'key':_0xbf2d63(0x1c0),'width':0xa},{'header':_0xbf2d63(0x206),'key':'SalesmanName','width':0xa},{'header':_0xbf2d63(0x200),'key':_0xbf2d63(0x200),'width':0xa},{'header':_0xbf2d63(0x20a),'key':_0xbf2d63(0x20a),'width':0xa},{'header':_0xbf2d63(0x1ac),'key':_0xbf2d63(0x1ac),'width':0xa}],_0x18f15f[_0xbf2d63(0x20f)](_0xbf2d63(0x1f3),_0xbf2d63(0x1c3)),_0x18f15f['setHeader']('Content-Disposition',_0xbf2d63(0x20c)),_0x4c4ab6[_0xbf2d63(0x1b6)][_0xbf2d63(0x1aa)](_0x18f15f)[_0xbf2d63(0x1fd)](()=>{const _0x230a0a=_0xbf2d63;_0x18f15f[_0x230a0a(0x209)](0xc8);});}catch(_0x5d77e6){_0x18f15f['status'](0x190)[_0xbf2d63(0x211)]({'errors':_0x5d77e6[_0xbf2d63(0x1c1)]});}});function a0_0x53c4(_0x5cafc1,_0x450960){const _0x38ee49=a0_0x38ee();return a0_0x53c4=function(_0x53c43a,_0x248930){_0x53c43a=_0x53c43a-0x1a6;let _0x1db5e8=_0x38ee49[_0x53c43a];return _0x1db5e8;},a0_0x53c4(_0x5cafc1,_0x450960);}const storage1=multer[a0_0x1411ac(0x1b4)]({'destination':(_0x228d32,_0x52d2ab,_0x2b4379)=>{const _0x50b429=a0_0x1411ac;_0x2b4379(null,_0x50b429(0x1c9));},'filename':(_0x2e9f5f,_0x27a0da,_0x56bbdc)=>{const _0x4d2fc0=a0_0x1411ac;_0x56bbdc(null,Date['now']()+_0x27a0da[_0x4d2fc0(0x205)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x1411ac(0x1ad)](a0_0x1411ac(0x1b0),auth,uploadMigrate['single']('customer_product_fule'),async(_0x277704,_0x1fad10)=>{const _0x5d8865=a0_0x1411ac,_0x288314=_0x277704['file'][_0x5d8865(0x1c2)],_0x43cbd6=await xlsx[_0x5d8865(0x1b7)]('public/Migration/'+_0x288314);let _0x307caa=_0x43cbd6[_0x5d8865(0x1ab)],_0x5b074f=xlsx[_0x5d8865(0x1c5)][_0x5d8865(0x1a8)](_0x43cbd6[_0x5d8865(0x1db)][_0x307caa[0x0]]);for(const _0x177e71 of _0x5b074f){const _0x356006=_0x177e71['ID'],_0x2fa84c=_0x177e71[_0x5d8865(0x1c8)],_0x12d8be=_0x177e71[_0x5d8865(0x1da)],_0x2955b5=_0x177e71[_0x5d8865(0x206)],_0x3685ad=_0x177e71[_0x5d8865(0x200)],_0x4418fd=_0x177e71[_0x5d8865(0x20a)],_0x1d922e=_0x177e71[_0x5d8865(0x1ac)];try{let _0x1df39f=await customer[_0x5d8865(0x1ed)]({'name':_0x2fa84c});if(!_0x1df39f){const _0x121763=new customer({'name':_0x2fa84c,'ID':_0x356006,'SalesmanCode':_0x12d8be,'SalesmanName':_0x2955b5,'address':_0x3685ad,'mobile':_0x4418fd,'email':_0x1d922e});_0x1df39f=await _0x121763[_0x5d8865(0x1d1)](),_0x277704[_0x5d8865(0x1d3)](_0x5d8865(0x1ca),_0x2fa84c+_0x5d8865(0x1be));}else _0x277704[_0x5d8865(0x1d3)](_0x5d8865(0x1eb),_0x2fa84c+'\x20Failed');}catch(_0x4b6a5c){_0x1fad10['status'](0x1f4)['json']({'proderror':_0x4b6a5c['message'],'aproduct':ProductName});}}_0x1fad10[_0x5d8865(0x1d8)]('/customer_sa/view');}),module[a0_0x1411ac(0x1e1)]=router;