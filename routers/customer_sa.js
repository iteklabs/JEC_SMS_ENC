const a0_0x24657b=a0_0x4b48;(function(_0x5677e0,_0x57bb4d){const _0x4f263f=a0_0x4b48,_0x5b6601=_0x5677e0();while(!![]){try{const _0x3e0296=-parseInt(_0x4f263f(0xfe))/0x1*(parseInt(_0x4f263f(0x10a))/0x2)+-parseInt(_0x4f263f(0x130))/0x3+-parseInt(_0x4f263f(0xce))/0x4+parseInt(_0x4f263f(0x12a))/0x5*(parseInt(_0x4f263f(0x12b))/0x6)+-parseInt(_0x4f263f(0xfb))/0x7+parseInt(_0x4f263f(0xf1))/0x8*(-parseInt(_0x4f263f(0x127))/0x9)+parseInt(_0x4f263f(0xde))/0xa;if(_0x3e0296===_0x57bb4d)break;else _0x5b6601['push'](_0x5b6601['shift']());}catch(_0x4f57be){_0x5b6601['push'](_0x5b6601['shift']());}}}(a0_0x2490,0x31f1a));const express=require(a0_0x24657b(0x11b)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x24657b(0x111)),auth=require(a0_0x24657b(0xd0)),users=require(a0_0x24657b(0xc7)),excelJS=require(a0_0x24657b(0x10f)),xlsx=require(a0_0x24657b(0x119)),multer=require('multer');function a0_0x4b48(_0x2d17e9,_0x1d6a32){const _0x249020=a0_0x2490();return a0_0x4b48=function(_0x4b4853,_0x2a218b){_0x4b4853=_0x4b4853-0xc4;let _0x1273af=_0x249020[_0x4b4853];return _0x1273af;},a0_0x4b48(_0x2d17e9,_0x1d6a32);}router[a0_0x24657b(0xd9)](a0_0x24657b(0x10e),auth,async(_0x276c5f,_0x337fc9)=>{const _0x4d0683=a0_0x24657b;try{const {username:_0xf32ac,email:_0x540a89,role:_0x6c9d40}=_0x276c5f['user'],_0x5d63f0=_0x276c5f[_0x4d0683(0x113)],_0x198a6c=await profile[_0x4d0683(0x108)]({'email':_0x5d63f0[_0x4d0683(0xd2)]}),_0x578fe2=await master_shop[_0x4d0683(0xc5)](),_0x2cb09f=await staff['findOne']({'email':_0x5d63f0['email']}),_0x5e1a51=await customer[_0x4d0683(0xc5)]({'agent_id':_0x2cb09f[_0x4d0683(0x123)]}),_0xe7ae36=await customer[_0x4d0683(0xe3)]([{'$match':{'agent_id':_0x2cb09f[_0x4d0683(0x123)]['valueOf']()}},{'$lookup':{'from':_0x4d0683(0x129),'localField':_0x4d0683(0xdf),'foreignField':_0x4d0683(0xe7),'as':_0x4d0683(0x12d)}}]),_0x3280ef=_0xe7ae36[_0x4d0683(0x107)](_0x5a49ed=>{const _0x2237aa=_0x4d0683;console['log']('data',_0x5a49ed);var _0x596f44=0x0,_0x5ad975=0x0;return _0x5a49ed[_0x2237aa(0x12d)]['forEach'](_0x2c1ef0=>{const _0x521abc=_0x2237aa;console['log'](_0x521abc(0x103),_0x2c1ef0),_0x2c1ef0[_0x521abc(0x118)]==_0x521abc(0xe0)?_0x596f44+=_0x2c1ef0[_0x521abc(0x11d)]:_0x5ad975+=_0x2c1ef0[_0x521abc(0x11d)];}),_0x5a49ed[_0x2237aa(0xef)]=parseFloat(_0x596f44)+0x0,_0x5a49ed[_0x2237aa(0x106)]=parseFloat(_0x5ad975)+0x0,_0x5a49ed;});if(_0x578fe2[0x0]['language']==_0x4d0683(0xcc)){var _0x3e9c57=users[_0x4d0683(0xd3)];console[_0x4d0683(0xee)](_0x3e9c57);}else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]=='Hindi')var _0x3e9c57=users[_0x4d0683(0xd5)];else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]==_0x4d0683(0xf0))var _0x3e9c57=users['German'];else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]==_0x4d0683(0xc6))var _0x3e9c57=users[_0x4d0683(0xc6)];else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]==_0x4d0683(0x11e))var _0x3e9c57=users[_0x4d0683(0x11e)];else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]=='Portuguese\x20(BR)')var _0x3e9c57=users[_0x4d0683(0xff)];else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]==_0x4d0683(0x10c))var _0x3e9c57=users['Chinese'];else{if(_0x578fe2[0x0][_0x4d0683(0xd1)]==_0x4d0683(0xe2))var _0x3e9c57=users[_0x4d0683(0xf4)];}}}}}}}_0x337fc9[_0x4d0683(0xe1)]('customer_sa',{'success':_0x276c5f[_0x4d0683(0x109)](_0x4d0683(0x104)),'errors':_0x276c5f['flash'](_0x4d0683(0x133)),'user':_0x5e1a51,'role':_0x5d63f0,'profile':_0x198a6c,'master_shop':_0x578fe2,'language':_0x3e9c57,'agent_id':_0x2cb09f[_0x4d0683(0x123)],'payment':_0x3280ef,'staff_arr':_0x2cb09f});}catch(_0x3faf8d){console[_0x4d0683(0xee)](_0x3faf8d);}}),router[a0_0x24657b(0x11c)](a0_0x24657b(0x10e),auth,async(_0x56325d,_0x2ba95d)=>{const _0xf792a7=a0_0x24657b;try{const {name:_0x4fc785,address:_0x269abf,mobile:_0x97f05f,email:_0x3a023c,receivable:_0x54bcf2,payable:_0x296886,contactperson:_0x297309,landline:_0x56e807,agent_id:_0x3e2dfa,less_percent:_0x39b219,type_org:_0x40155f,res_address:_0x4ec8dd,business_start_year:_0x22f5a8,credit_limit:_0x389e65,term_pay:_0x2efba5}=_0x56325d[_0xf792a7(0xfd)];if(typeof _0x39b219==_0xf792a7(0xdd))var _0x43966c=[_0x56325d[_0xf792a7(0xfd)][_0xf792a7(0xe5)]];else var _0x43966c=[..._0x56325d['body'][_0xf792a7(0xe5)]];const _0x4a1f1b=_0x43966c[_0xf792a7(0x107)](_0x3dcd9c=>{return _0x3dcd9c={'less':_0x3dcd9c};}),_0x33fcc0=new customer({'name':_0x4fc785,'address':_0x269abf,'mobile':_0x97f05f,'email':_0x3a023c,'receivable':_0x54bcf2,'payable':_0x296886,'customer_discount':_0x4a1f1b,'contactperson':_0x297309,'landline':_0x56e807,'agent_id':_0x3e2dfa,'res_address':_0x4ec8dd,'type_organization':_0x40155f,'business_start_year':_0x22f5a8,'credit_limit':_0x389e65,'terms_of_payments':_0x2efba5}),_0x29a5f9=await _0x33fcc0['save']();_0x56325d['flash'](_0xf792a7(0x104),_0xf792a7(0x131)),_0x2ba95d[_0xf792a7(0x128)](_0xf792a7(0x126));}catch(_0x3df34a){console[_0xf792a7(0xee)](_0x3df34a);}}),router[a0_0x24657b(0xd9)](a0_0x24657b(0x125),auth,async(_0x45170b,_0x1e929c)=>{const _0x3c5a57=a0_0x24657b;try{const {username:_0x56cc40,email:_0x56f72a,role:_0x6048e0}=_0x45170b[_0x3c5a57(0x113)],_0x8fe59c=_0x45170b['user'],_0x52db0a=await profile[_0x3c5a57(0x108)]({'email':_0x8fe59c['email']}),_0xe28801=await master_shop[_0x3c5a57(0xc5)]();console[_0x3c5a57(0xee)](_0x3c5a57(0xeb),_0xe28801);const _0x200213=_0x45170b[_0x3c5a57(0xda)]['id'],_0x21e761=await customer[_0x3c5a57(0x102)](_0x200213);console[_0x3c5a57(0xee)](_0x21e761);if(_0xe28801[0x0][_0x3c5a57(0xd1)]=='English\x20(US)'){var _0x47d52a=users['English'];console[_0x3c5a57(0xee)](_0x47d52a);}else{if(_0xe28801[0x0]['language']==_0x3c5a57(0xd5))var _0x47d52a=users[_0x3c5a57(0xd5)];else{if(_0xe28801[0x0]['language']=='German')var _0x47d52a=users[_0x3c5a57(0xf0)];else{if(_0xe28801[0x0][_0x3c5a57(0xd1)]==_0x3c5a57(0xc6))var _0x47d52a=users[_0x3c5a57(0xc6)];else{if(_0xe28801[0x0][_0x3c5a57(0xd1)]=='French')var _0x47d52a=users[_0x3c5a57(0x11e)];else{if(_0xe28801[0x0][_0x3c5a57(0xd1)]==_0x3c5a57(0xf5))var _0x47d52a=users[_0x3c5a57(0xff)];else{if(_0xe28801[0x0][_0x3c5a57(0xd1)]==_0x3c5a57(0x10c))var _0x47d52a=users['Chinese'];else{if(_0xe28801[0x0][_0x3c5a57(0xd1)]==_0x3c5a57(0xe2))var _0x47d52a=users[_0x3c5a57(0xf4)];}}}}}}}_0x1e929c['render']('customer_sa',{'success':_0x45170b[_0x3c5a57(0x109)]('success'),'errors':_0x45170b[_0x3c5a57(0x109)]('errors'),'role':_0x8fe59c,'profile':_0x52db0a,'user':_0x21e761,'master_shop':_0xe28801,'language':_0x47d52a});}catch(_0x4a5ef5){console['log'](_0x4a5ef5);}}),router[a0_0x24657b(0x11c)](a0_0x24657b(0x125),auth,async(_0x331705,_0x5a77eb)=>{const _0x1d9c93=a0_0x24657b;try{const _0x4dc9ff=_0x331705['params']['id'],_0x1fafdf=await customer[_0x1d9c93(0x102)](_0x4dc9ff),{name:_0x563e7e,address:_0x11a126,mobile:_0x2d7615,email:_0x4fa2cc,receivable:_0x29c79f,payable:_0x3694ee,contactperson:_0xeacfb7,landline:_0x26232b,less_percent_edit:_0x50bdbf,edit_type_org:_0x7424e5,edit_res_address:_0x2ffb06,edit_business_start_year:_0x14532b,edit_credit_limit:_0x125e7b,edit_term_pay:_0x7f6bb}=_0x331705[_0x1d9c93(0xfd)];if(typeof _0x50bdbf==_0x1d9c93(0xdd))var _0x44ace7=[_0x331705[_0x1d9c93(0xfd)][_0x1d9c93(0x117)]];else var _0x44ace7=[..._0x331705[_0x1d9c93(0xfd)][_0x1d9c93(0x117)]];const _0x2f6206=_0x44ace7['map'](_0x4d618a=>{return _0x4d618a={'less':_0x4d618a};});_0x1fafdf[_0x1d9c93(0xdf)]=_0x563e7e,_0x1fafdf[_0x1d9c93(0x11a)]=_0x11a126,_0x1fafdf[_0x1d9c93(0xcb)]=_0x2d7615,_0x1fafdf[_0x1d9c93(0xd2)]=_0x4fa2cc,_0x1fafdf[_0x1d9c93(0x132)]=_0x29c79f,_0x1fafdf['payable']=_0x3694ee,_0x1fafdf[_0x1d9c93(0xf3)]=_0xeacfb7,_0x1fafdf[_0x1d9c93(0xf8)]=_0x26232b,_0x1fafdf[_0x1d9c93(0x116)]=_0x2f6206,_0x1fafdf['type_organization']=_0x7424e5,_0x1fafdf[_0x1d9c93(0x101)]=_0x14532b,_0x1fafdf[_0x1d9c93(0x124)]=_0x125e7b,_0x1fafdf['terms_of_payments']=_0x7f6bb,_0x1fafdf['res_address']=_0x2ffb06;const _0x297beb=await _0x1fafdf[_0x1d9c93(0xc4)]();_0x331705[_0x1d9c93(0x109)](_0x1d9c93(0x104),_0x1d9c93(0xe9)),_0x5a77eb[_0x1d9c93(0x128)](_0x1d9c93(0x126));}catch(_0x412c87){console['log'](_0x412c87);}}),router[a0_0x24657b(0xd9)](a0_0x24657b(0x105),auth,async(_0x371a8e,_0x474c6c)=>{const _0x15e25e=a0_0x24657b;try{const {username:_0x4000f,email:_0x1cb349,role:_0x5974db}=_0x371a8e[_0x15e25e(0x113)],_0xb45032=_0x371a8e[_0x15e25e(0x113)],_0xfd7132=await profile[_0x15e25e(0x108)]({'email':_0xb45032[_0x15e25e(0xd2)]}),_0x40a373=await master_shop[_0x15e25e(0xc5)]();console[_0x15e25e(0xee)](_0x15e25e(0xeb),_0x40a373),console[_0x15e25e(0xee)](_0x371a8e['params']['id']);const _0x320627=await customer['findOne']({'_id':_0x371a8e[_0x15e25e(0xda)]['id']});console[_0x15e25e(0xee)](_0x15e25e(0xfc),_0x320627);const _0x3a9f1c=await c_payment_data['find']({'customer':_0x320627[_0x15e25e(0xdf)]});console[_0x15e25e(0xee)](_0x3a9f1c);const _0x7cfcc9=await c_payment_data[_0x15e25e(0xe3)]([{'$match':{'customer':_0x320627[_0x15e25e(0xdf)]}},{'$match':{'reason':_0x15e25e(0xe0)}},{'$group':{'_id':_0x15e25e(0xcd),'sum':{'$sum':_0x15e25e(0xd7)}}}]);console[_0x15e25e(0xee)](_0x15e25e(0xf9),_0x7cfcc9);const _0x35ab89=await c_payment_data[_0x15e25e(0xe3)]([{'$match':{'customer':_0x320627[_0x15e25e(0xdf)]}},{'$match':{'reason':_0x15e25e(0xf2)}},{'$group':{'_id':_0x15e25e(0xcd),'sum':{'$sum':_0x15e25e(0xd7)}}}]);console[_0x15e25e(0xee)](_0x15e25e(0xe4),_0x35ab89);if(_0x40a373[0x0][_0x15e25e(0xd1)]==_0x15e25e(0xcc)){var _0x182a29=users[_0x15e25e(0xd3)];console['log'](_0x182a29);}else{if(_0x40a373[0x0][_0x15e25e(0xd1)]=='Hindi')var _0x182a29=users[_0x15e25e(0xd5)];else{if(_0x40a373[0x0][_0x15e25e(0xd1)]==_0x15e25e(0xf0))var _0x182a29=users[_0x15e25e(0xf0)];else{if(_0x40a373[0x0][_0x15e25e(0xd1)]==_0x15e25e(0xc6))var _0x182a29=users[_0x15e25e(0xc6)];else{if(_0x40a373[0x0][_0x15e25e(0xd1)]==_0x15e25e(0x11e))var _0x182a29=users[_0x15e25e(0x11e)];else{if(_0x40a373[0x0][_0x15e25e(0xd1)]==_0x15e25e(0xf5))var _0x182a29=users[_0x15e25e(0xff)];else{if(_0x40a373[0x0][_0x15e25e(0xd1)]=='Chinese')var _0x182a29=users[_0x15e25e(0x10c)];else{if(_0x40a373[0x0]['language']==_0x15e25e(0xe2))var _0x182a29=users[_0x15e25e(0xf4)];}}}}}}}_0x474c6c[_0x15e25e(0xe1)](_0x15e25e(0x12c),{'success':_0x371a8e['flash']('success'),'errors':_0x371a8e[_0x15e25e(0x109)](_0x15e25e(0x133)),'role':_0xb45032,'profile':_0xfd7132,'payment':_0x3a9f1c,'payable':_0x7cfcc9,'receivable':_0x35ab89,'master_shop':_0x40a373,'language':_0x182a29});}catch(_0x5d0e06){console[_0x15e25e(0xee)](_0x5d0e06);}}),router[a0_0x24657b(0xd9)]('/products_export_migrate_file',auth,async(_0x3107c3,_0x372b29)=>{const _0x594f9e=a0_0x24657b;try{const _0xae2567=new excelJS['Workbook'](),_0x50295e=_0xae2567[_0x594f9e(0xec)]('Customers');return _0x50295e[_0x594f9e(0xca)]=[{'header':'ID','key':_0x594f9e(0x112),'width':0xa},{'header':'Name','key':_0x594f9e(0x115),'width':0xa},{'header':_0x594f9e(0xdc),'key':_0x594f9e(0xf7),'width':0xa},{'header':'SalesmanName','key':_0x594f9e(0xd6),'width':0xa},{'header':_0x594f9e(0x11a),'key':'address','width':0xa},{'header':_0x594f9e(0xcb),'key':_0x594f9e(0xcb),'width':0xa},{'header':_0x594f9e(0xd2),'key':_0x594f9e(0xd2),'width':0xa}],_0x372b29[_0x594f9e(0xc9)](_0x594f9e(0x121),_0x594f9e(0xea)),_0x372b29[_0x594f9e(0xc9)](_0x594f9e(0x10b),_0x594f9e(0x122)),_0xae2567[_0x594f9e(0x119)][_0x594f9e(0x120)](_0x372b29)['then'](()=>{_0x372b29['status'](0xc8);});}catch(_0x3580af){_0x372b29[_0x594f9e(0xc8)](0x190)[_0x594f9e(0x12f)]({'errors':_0x3580af[_0x594f9e(0xcf)]});}});const storage1=multer[a0_0x24657b(0xdb)]({'destination':(_0x47e973,_0x3b88a6,_0x24ad96)=>{const _0x25abda=a0_0x24657b;_0x24ad96(null,_0x25abda(0x110));},'filename':(_0x492ce2,_0x293246,_0x472fb3)=>{const _0x1ad4d4=a0_0x24657b;_0x472fb3(null,Date[_0x1ad4d4(0xe6)]()+_0x293246['originalname']);}}),uploadMigrate=multer({'storage':storage1});function a0_0x2490(){const _0x556174=['log','sale','German','32ykOQxn','Sale\x20Return','contactperson','Arabic','Portuguese\x20(BR)','file','PUnits','landline','payable_sum','single','2563764KcZdZs','customer_data','body','32456alMLkH','Portuguese','/customer_import_migrate_file','business_start_year','findById','element','success','/view/payment/:id','sale_return','map','findOne','flash','10wMkFBe','Content-Disposition','Chinese','json','/view','exceljs','public/Migration','../models/all_models','PName','user','sheet_to_json','PBrands','customer_discount','less_percent_edit','reason','xlsx','address','express','post','amount','French','exports','write','Content-Type','attachment;\x20filename=customer_Migration_File.xlsx','_id','credit_limit','/view/:id','/customer_sa/view','104994Kmcqrc','redirect','c_payments','147945bFVxbv','54tnShBm','customer_payment','customer_docs','\x20added\x20successfully','send','999213YeNbEi','customer\x20add\x20successfully','receivable','errors','save','find','Spanish','../public/language/languages.json','status','setHeader','columns','mobile','English\x20(US)','$reason','1359776rdSOFx','message','../middleware/auth','language','email','English','Sheets','Hindi','SalesmanName','$amount','SheetNames','get','params','diskStorage','SalesmanCode','string','11864800iLWvTi','name','Sale','render','Arabic\x20(ae)','aggregate','receivable_sum','less_percent','now','customer','public/Migration/','customer\x20update\x20successfully','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','master','addWorksheet','readFile'];a0_0x2490=function(){return _0x556174;};return a0_0x2490();}router['post'](a0_0x24657b(0x100),auth,uploadMigrate[a0_0x24657b(0xfa)]('customer_product_fule'),async(_0x4eaa1b,_0x18bc7e)=>{const _0x4bc096=a0_0x24657b,_0x974e4=_0x4eaa1b[_0x4bc096(0xf6)]['filename'],_0x2acde7=await xlsx[_0x4bc096(0xed)](_0x4bc096(0xe8)+_0x974e4);let _0x1fb44d=_0x2acde7[_0x4bc096(0xd8)],_0x3fb6af=xlsx['utils'][_0x4bc096(0x114)](_0x2acde7[_0x4bc096(0xd4)][_0x1fb44d[0x0]]);for(const _0x4ae5dd of _0x3fb6af){const _0x3e9887=_0x4ae5dd['ID'],_0x4e2505=_0x4ae5dd['Name'],_0x5e0813=_0x4ae5dd['SalesmanCode'],_0x5ac714=_0x4ae5dd[_0x4bc096(0xd6)],_0x2753c0=_0x4ae5dd[_0x4bc096(0x11a)],_0x3a7106=_0x4ae5dd[_0x4bc096(0xcb)],_0xfbc72d=_0x4ae5dd['email'];try{let _0x198f51=await customer[_0x4bc096(0x108)]({'name':_0x4e2505});if(!_0x198f51){const _0x15b075=new customer({'name':_0x4e2505,'ID':_0x3e9887,'SalesmanCode':_0x5e0813,'SalesmanName':_0x5ac714,'address':_0x2753c0,'mobile':_0x3a7106,'email':_0xfbc72d});_0x198f51=await _0x15b075[_0x4bc096(0xc4)](),_0x4eaa1b['flash'](_0x4bc096(0x104),_0x4e2505+_0x4bc096(0x12e));}else _0x4eaa1b[_0x4bc096(0x109)]('error',_0x4e2505+'\x20Failed');}catch(_0x2e9019){_0x18bc7e['status'](0x1f4)[_0x4bc096(0x10d)]({'proderror':_0x2e9019['message'],'aproduct':ProductName});}}_0x18bc7e[_0x4bc096(0x128)](_0x4bc096(0x126));}),module[a0_0x24657b(0x11f)]=router;