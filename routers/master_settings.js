const a0_0x53fdcf=a0_0x662a;(function(_0x4758f0,_0x120ca1){const _0xc3cd3b=a0_0x662a,_0x156011=_0x4758f0();while(!![]){try{const _0x15fd30=-parseInt(_0xc3cd3b(0xae))/0x1*(-parseInt(_0xc3cd3b(0xf9))/0x2)+parseInt(_0xc3cd3b(0xca))/0x3+-parseInt(_0xc3cd3b(0xc3))/0x4*(parseInt(_0xc3cd3b(0xf1))/0x5)+parseInt(_0xc3cd3b(0xfa))/0x6*(parseInt(_0xc3cd3b(0x103))/0x7)+-parseInt(_0xc3cd3b(0xe4))/0x8+parseInt(_0xc3cd3b(0x8e))/0x9*(parseInt(_0xc3cd3b(0xc8))/0xa)+parseInt(_0xc3cd3b(0x94))/0xb*(-parseInt(_0xc3cd3b(0xc5))/0xc);if(_0x15fd30===_0x120ca1)break;else _0x156011['push'](_0x156011['shift']());}catch(_0x306e13){_0x156011['push'](_0x156011['shift']());}}}(a0_0x51fd,0x2b59b));const express=require('express'),app=express(),router=express[a0_0x53fdcf(0xa1)](),multer=require(a0_0x53fdcf(0x99)),{profile,master_shop,email_settings,supervisor_settings,discount_volume_db,warehouse_validation_setup,warehouse,product}=require(a0_0x53fdcf(0xeb)),auth=require(a0_0x53fdcf(0xc1));var timezones=require(a0_0x53fdcf(0xa7));const users=require('../public/language/languages.json'),mongoose=require('mongoose'),PDFDocument=require('pdfkit-table'),{Canvas}=require(a0_0x53fdcf(0xab)),JsBarcode=require(a0_0x53fdcf(0xc6)),storage=multer[a0_0x53fdcf(0xe2)]({'destination':(_0x243ece,_0x35a5c9,_0x1465f8)=>{const _0x783b81=a0_0x53fdcf;_0x1465f8(null,_0x783b81(0xd0));},'filename':(_0x59d94b,_0x520bc2,_0x5af2e1)=>{const _0x14addc=a0_0x53fdcf;_0x5af2e1(null,Date['now']()+_0x520bc2[_0x14addc(0xa8)]);}}),upload=multer({'storage':storage});function a0_0x51fd(){const _0x45275b=['host','errors','width','FGSName','site_title','redirect','split','7sHHcKn','Bin\x20Location\x20Validation\x20update\x20successfully','render','warehouse_name','$name','master_shop_data','Portuguese\x20(BR)','filename','product_id','French','product_name','/get_product','push','min','min_car_edit','user','concat','height','/master_shop/view/supervisors','json','currency_placement','FGSEmail','email','/product_list','findOne','455958ifGBkk','/view_data/warehouse_valid','$_id','max_data','/room','$warehouse_id','27709rFFOki','/view/supervisors','image','save','RMSnumber','multer','toString','Enabled','/master_shop/view/email','find','$room','discount_price_edit','_id','Router','Volume\x20Discount\x20modified\x20successfully','shop\x20setting\x20edit\x20successfully','product_data','log','/master_shop/view','timezones-list','originalname','room','exports','canvas','prod_code','email_settings','133nSFNpT','Chinese','/view/email/edit_settings','toBuffer','bay','English','CODE128','/view_data/edit_volume_set','setup_warehouse_bin_edit','flash','master\x20settings\x20email_data','addPage','en-US','currency','length','Types','hidden','warehouse_id','forEach','../middleware/auth','max_car','8684VsgYek','toLocaleString','1476eSwbUm','jsbarcode','body','20ILpzOW','English\x20(US)','152820kHnDLz','bin','end','data','match','get','./public/upload','Arabic','success','/view_data/warehouse_valid/add','language','max_car_edit','Portuguese','min_data','prod_name','ObjectId','findById','timezone','aggregate','/room_edit','Arabic\x20(ae)','password','params','German','diskStorage','map','570040svaJdX','/view/edit_settings','string','Hindi','setup_warehouse_bin_add','/view_data/edit/:id','/view_data/volume_set','../models/all_models','Spanish','bind','max','/:id','/view/email','325kMtamE','port','master_settings','setup_volume_discount','master','2nd\x20master_shop_data','/master_shop/view_data/volume_set','supervisor_settings','2938yaTqvB','2112774HZkqED','post'];a0_0x51fd=function(){return _0x45275b;};return a0_0x51fd();}function a0_0x662a(_0x2a6a6f,_0x48cdad){const _0x51fdc3=a0_0x51fd();return a0_0x662a=function(_0x662a65,_0x5c23a7){_0x662a65=_0x662a65-0x8c;let _0x256247=_0x51fdc3[_0x662a65];return _0x256247;},a0_0x662a(_0x2a6a6f,_0x48cdad);}router[a0_0x53fdcf(0xcf)]('/view',auth,async(_0x592dc0,_0x55b404)=>{const _0xb3c49b=a0_0x53fdcf;try{const {username:_0x202ca0,email:_0x461f4e,role:_0xa739b7}=_0x592dc0[_0xb3c49b(0x112)],_0x44c29b=_0x592dc0[_0xb3c49b(0x112)],_0x483257=await profile[_0xb3c49b(0x8d)]({'email':_0x44c29b[_0xb3c49b(0x119)]}),_0x3c7ad4=await master_shop[_0xb3c49b(0x9d)]();console[_0xb3c49b(0xa5)](_0xb3c49b(0xf5),_0x3c7ad4);const _0x34aec9=new Date()[_0xb3c49b(0xc4)](_0xb3c49b(0xba),{'timeZone':_0x3c7ad4[0x0]['timezone']});console['log']('timezone',_0x34aec9);if(_0x3c7ad4[0x0][_0xb3c49b(0xd4)]==_0xb3c49b(0xc9)){var _0x448507=users[_0xb3c49b(0xb3)];console[_0xb3c49b(0xa5)](_0x448507);}else{if(_0x3c7ad4[0x0][_0xb3c49b(0xd4)]==_0xb3c49b(0xe7))var _0x448507=users[_0xb3c49b(0xe7)];else{if(_0x3c7ad4[0x0]['language']==_0xb3c49b(0xe1))var _0x448507=users[_0xb3c49b(0xe1)];else{if(_0x3c7ad4[0x0]['language']==_0xb3c49b(0xec))var _0x448507=users[_0xb3c49b(0xec)];else{if(_0x3c7ad4[0x0][_0xb3c49b(0xd4)]==_0xb3c49b(0x10c))var _0x448507=users[_0xb3c49b(0x10c)];else{if(_0x3c7ad4[0x0][_0xb3c49b(0xd4)]==_0xb3c49b(0x109))var _0x448507=users[_0xb3c49b(0xd6)];else{if(_0x3c7ad4[0x0]['language']==_0xb3c49b(0xaf))var _0x448507=users['Chinese'];else{if(_0x3c7ad4[0x0][_0xb3c49b(0xd4)]=='Arabic\x20(ae)')var _0x448507=users[_0xb3c49b(0xd1)];}}}}}}}_0x55b404['render'](_0xb3c49b(0xf3),{'success':_0x592dc0[_0xb3c49b(0xb7)](_0xb3c49b(0xd2)),'errors':_0x592dc0['flash']('errors'),'role':_0x44c29b,'profile':_0x483257,'master_shop':_0x3c7ad4,'timezones':timezones,'language':_0x448507});}catch(_0x2adbac){console['log'](_0x2adbac);}}),router[a0_0x53fdcf(0xcf)](a0_0x53fdcf(0xef),auth,async(_0x2d8e5c,_0x207630)=>{const _0x250d05=a0_0x53fdcf;try{console['log'](_0x250d05(0xd4)),console['log'](_0x2d8e5c[_0x250d05(0xe0)]['id']);const _0x4e4e18=await master_shop[_0x250d05(0x8d)]();_0x4e4e18[_0x250d05(0xd4)]=_0x2d8e5c['params']['id'],await _0x4e4e18[_0x250d05(0x97)](),console[_0x250d05(0xa5)]('master',_0x4e4e18);}catch(_0x15309c){console[_0x250d05(0xa5)](_0x15309c);}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0xe5),auth,upload['single'](a0_0x53fdcf(0x96)),async(_0x1e2880,_0x28f8fb)=>{const _0x4d0271=a0_0x53fdcf;try{const {site_title:_0x5b7840,currency:_0x2384e4,currency_placement:_0x422092,timezone:_0xc04557}=_0x1e2880['body'];if(_0x1e2880[_0x4d0271(0xc7)][_0x4d0271(0xbe)]==0x0){const _0x350227=await master_shop[_0x4d0271(0x8d)]();console[_0x4d0271(0xa5)](_0x4d0271(0x108),_0x350227);if(_0x350227==''){const _0x16f689=new master_shop({'site_title':_0x5b7840,'image':image,'currency':_0x2384e4,'currency_placement':_0x422092,'timezone':_0xc04557}),_0x2652f5=await _0x16f689[_0x4d0271(0x97)]();}else _0x350227[_0x4d0271(0x100)]=_0x5b7840,_0x350227[_0x4d0271(0xbb)]=_0x2384e4,_0x350227[_0x4d0271(0x117)]=_0x422092,_0x350227[_0x4d0271(0xdb)]=_0xc04557,await _0x350227[_0x4d0271(0x97)]();}else{const _0x21f267=_0x1e2880['file'][_0x4d0271(0x10a)],_0x35a38a=await master_shop[_0x4d0271(0x8d)]();console['log'](_0x4d0271(0xf6),_0x35a38a);if(_0x35a38a==null){console['log']('1',_0x5b7840);const _0x3f13c9=new master_shop({'site_title':_0x5b7840,'image':_0x21f267,'currency':_0x2384e4,'currency_placement':_0x422092,'timezone':_0xc04557}),_0x28ae5e=await _0x3f13c9[_0x4d0271(0x97)]();}else console[_0x4d0271(0xa5)]('2',_0x5b7840),_0x35a38a[_0x4d0271(0x100)]=_0x5b7840,_0x35a38a[_0x4d0271(0x96)]=_0x21f267,_0x35a38a[_0x4d0271(0xbb)]=_0x2384e4,_0x35a38a['currency_placement']=_0x422092,_0x35a38a[_0x4d0271(0xdb)]=_0xc04557,await _0x35a38a[_0x4d0271(0x97)]();}_0x1e2880[_0x4d0271(0xb7)](_0x4d0271(0xd2),_0x4d0271(0xa3)),_0x28f8fb[_0x4d0271(0x101)](_0x4d0271(0xa6));}catch(_0x9fca25){console[_0x4d0271(0xa5)](_0x9fca25);}}),router[a0_0x53fdcf(0xcf)](a0_0x53fdcf(0xf0),auth,async(_0x3b4f2b,_0x1aa202)=>{const _0x429362=a0_0x53fdcf;try{const {username:_0x39b49e,email:_0x149f58,role:_0xdd917e}=_0x3b4f2b[_0x429362(0x112)],_0x333ad5=_0x3b4f2b[_0x429362(0x112)],_0x327c85=await profile[_0x429362(0x8d)]({'email':_0x333ad5['email']}),_0x4d8cd8=await master_shop[_0x429362(0x9d)]();console[_0x429362(0xa5)]('master',_0x4d8cd8);const _0x381995=await email_settings['findOne']();console[_0x429362(0xa5)](_0x429362(0xb8),_0x381995);if(_0x4d8cd8[0x0][_0x429362(0xd4)]==_0x429362(0xc9)){var _0x4a68dd=users[_0x429362(0xb3)];console[_0x429362(0xa5)](_0x4a68dd);}else{if(_0x4d8cd8[0x0][_0x429362(0xd4)]==_0x429362(0xe7))var _0x4a68dd=users[_0x429362(0xe7)];else{if(_0x4d8cd8[0x0]['language']==_0x429362(0xe1))var _0x4a68dd=users[_0x429362(0xe1)];else{if(_0x4d8cd8[0x0][_0x429362(0xd4)]==_0x429362(0xec))var _0x4a68dd=users[_0x429362(0xec)];else{if(_0x4d8cd8[0x0][_0x429362(0xd4)]==_0x429362(0x10c))var _0x4a68dd=users['French'];else{if(_0x4d8cd8[0x0]['language']==_0x429362(0x109))var _0x4a68dd=users[_0x429362(0xd6)];else{if(_0x4d8cd8[0x0][_0x429362(0xd4)]==_0x429362(0xaf))var _0x4a68dd=users[_0x429362(0xaf)];else{if(_0x4d8cd8[0x0][_0x429362(0xd4)]==_0x429362(0xde))var _0x4a68dd=users['Arabic'];}}}}}}}_0x1aa202[_0x429362(0x105)](_0x429362(0xad),{'success':_0x3b4f2b['flash'](_0x429362(0xd2)),'errors':_0x3b4f2b[_0x429362(0xb7)]('errors'),'role':_0x333ad5,'profile':_0x327c85,'master_shop':_0x4d8cd8,'email':_0x381995,'language':_0x4a68dd});}catch(_0x1a6e00){console[_0x429362(0xa5)](_0x1a6e00);}}),router['post'](a0_0x53fdcf(0xb0),auth,async(_0x18fe07,_0x1d9dec)=>{const _0x4656ef=a0_0x53fdcf;try{const {host:_0x48e787,port:_0x35496d,email:_0x1deb98,password:_0x550e43}=_0x18fe07[_0x4656ef(0xc7)],_0x597581=await email_settings[_0x4656ef(0x8d)]();if(_0x597581==null){const _0x57ee48=new email_settings({'host':_0x48e787,'port':_0x35496d,'email':_0x1deb98,'password':_0x550e43});await _0x57ee48[_0x4656ef(0x97)]();}else _0x597581[_0x4656ef(0xfc)]=_0x48e787,_0x597581[_0x4656ef(0xf2)]=_0x35496d,_0x597581[_0x4656ef(0x119)]=_0x1deb98,_0x597581[_0x4656ef(0xdf)]=_0x550e43,await _0x597581['save']();_0x18fe07['flash'](_0x4656ef(0xd2),'shop\x20setting\x20edit\x20successfully'),_0x1d9dec['redirect'](_0x4656ef(0x9c));}catch(_0x2df678){console[_0x4656ef(0xa5)](_0x2df678);}}),router[a0_0x53fdcf(0xcf)]('/view/supervisors',auth,async(_0x14dea2,_0x179432)=>{const _0x5dcfd4=a0_0x53fdcf;try{const {username:_0x4f661b,email:_0x5ed4ad,role:_0x7e32dc}=_0x14dea2[_0x5dcfd4(0x112)],_0x15b76a=_0x14dea2[_0x5dcfd4(0x112)],_0x29adcf=await supervisor_settings[_0x5dcfd4(0x9d)](),_0x4c78b5=await profile['findOne']({'email':_0x15b76a['email']}),_0x1168a1=await master_shop[_0x5dcfd4(0x9d)](),_0x132eb0=new Date()[_0x5dcfd4(0xc4)]('en-US',{'timeZone':_0x1168a1[0x0][_0x5dcfd4(0xdb)]});if(_0x1168a1[0x0]['language']==_0x5dcfd4(0xc9)){var _0x33d01c=users[_0x5dcfd4(0xb3)];console[_0x5dcfd4(0xa5)](_0x33d01c);}else{if(_0x1168a1[0x0][_0x5dcfd4(0xd4)]==_0x5dcfd4(0xe7))var _0x33d01c=users[_0x5dcfd4(0xe7)];else{if(_0x1168a1[0x0][_0x5dcfd4(0xd4)]==_0x5dcfd4(0xe1))var _0x33d01c=users['German'];else{if(_0x1168a1[0x0][_0x5dcfd4(0xd4)]=='Spanish')var _0x33d01c=users[_0x5dcfd4(0xec)];else{if(_0x1168a1[0x0][_0x5dcfd4(0xd4)]=='French')var _0x33d01c=users[_0x5dcfd4(0x10c)];else{if(_0x1168a1[0x0]['language']=='Portuguese\x20(BR)')var _0x33d01c=users[_0x5dcfd4(0xd6)];else{if(_0x1168a1[0x0][_0x5dcfd4(0xd4)]=='Chinese')var _0x33d01c=users[_0x5dcfd4(0xaf)];else{if(_0x1168a1[0x0]['language']=='Arabic\x20(ae)')var _0x33d01c=users[_0x5dcfd4(0xd1)];}}}}}}}_0x179432[_0x5dcfd4(0x105)](_0x5dcfd4(0xf8),{'success':_0x14dea2[_0x5dcfd4(0xb7)](_0x5dcfd4(0xd2)),'errors':_0x14dea2[_0x5dcfd4(0xb7)](_0x5dcfd4(0xfd)),'role':_0x15b76a,'profile':_0x4c78b5,'master_shop':_0x1168a1,'supervisor_data':_0x29adcf[0x0],'timezones':timezones,'language':_0x33d01c});}catch(_0x191893){console[_0x5dcfd4(0xa5)](_0x191893);}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0x95),auth,async(_0x1e2325,_0x2d639c)=>{const _0x22f5ad=a0_0x53fdcf;try{const {rm_name:_0x5774b3,fg_name:_0x3bc6a2,rm_email:_0xdaf2a,fg_email:_0x2ea445,rm_mobilenum:_0x25de88,fg_number:_0x219b49}=_0x1e2325[_0x22f5ad(0xc7)],_0xd48b35=await supervisor_settings['findOne']();if(_0xd48b35==null){const _0x4812fc=new supervisor_settings({'RMSName':_0x5774b3,'RMSEmail':_0xdaf2a,'RMSnumber':_0x25de88,'FGSName':_0x3bc6a2,'FGSEmail':_0x2ea445,'FGSnumber':_0x219b49});await _0x4812fc['save']();}else _0xd48b35['RMSName']=_0x5774b3,_0xd48b35['RMSEmail']=_0xdaf2a,_0xd48b35[_0x22f5ad(0x98)]=_0x25de88,_0xd48b35[_0x22f5ad(0xff)]=_0x3bc6a2,_0xd48b35[_0x22f5ad(0x118)]=_0x2ea445,_0xd48b35['FGSnumber']=_0x219b49,await _0xd48b35['save']();_0x1e2325[_0x22f5ad(0xb7)](_0x22f5ad(0xd2),_0x22f5ad(0xa3)),_0x2d639c['redirect'](_0x22f5ad(0x115));}catch(_0x15723c){console['log'](_0x15723c);}}),router[a0_0x53fdcf(0xcf)](a0_0x53fdcf(0xea),auth,async(_0x56765f,_0x387cc5)=>{const _0x5e1190=a0_0x53fdcf;try{const _0x12b79e=_0x56765f[_0x5e1190(0x112)],_0x4ab49b=await supervisor_settings['find'](),_0x51809c=await profile[_0x5e1190(0x8d)]({'email':_0x12b79e[_0x5e1190(0x119)]}),_0x526ffa=await master_shop['find'](),_0x3b5413=await discount_volume_db[_0x5e1190(0x8d)]();if(_0x526ffa[0x0][_0x5e1190(0xd4)]==_0x5e1190(0xc9)){var _0x389ace=users[_0x5e1190(0xb3)];console['log'](_0x389ace);}else{if(_0x526ffa[0x0][_0x5e1190(0xd4)]==_0x5e1190(0xe7))var _0x389ace=users[_0x5e1190(0xe7)];else{if(_0x526ffa[0x0][_0x5e1190(0xd4)]=='German')var _0x389ace=users[_0x5e1190(0xe1)];else{if(_0x526ffa[0x0][_0x5e1190(0xd4)]==_0x5e1190(0xec))var _0x389ace=users[_0x5e1190(0xec)];else{if(_0x526ffa[0x0][_0x5e1190(0xd4)]==_0x5e1190(0x10c))var _0x389ace=users[_0x5e1190(0x10c)];else{if(_0x526ffa[0x0]['language']==_0x5e1190(0x109))var _0x389ace=users['Portuguese'];else{if(_0x526ffa[0x0][_0x5e1190(0xd4)]==_0x5e1190(0xaf))var _0x389ace=users[_0x5e1190(0xaf)];else{if(_0x526ffa[0x0][_0x5e1190(0xd4)]==_0x5e1190(0xde))var _0x389ace=users[_0x5e1190(0xd1)];}}}}}}}_0x387cc5['render'](_0x5e1190(0xf4),{'success':_0x56765f[_0x5e1190(0xb7)](_0x5e1190(0xd2)),'errors':_0x56765f[_0x5e1190(0xb7)](_0x5e1190(0xfd)),'role':_0x12b79e,'profile':_0x51809c,'master_shop':_0x526ffa,'supervisor_data':_0x4ab49b[0x0],'language':_0x389ace,'data':_0x3b5413});}catch(_0x319bf3){}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0xb5),auth,async(_0x770591,_0x32ffe0)=>{const _0x4c4d58=a0_0x53fdcf;try{const {min_car_edit:_0x58a739}=_0x770591['body'],_0x2bcad5=await discount_volume_db['findOne']();if(typeof _0x58a739==_0x4c4d58(0xe6))var _0x411310=[_0x770591[_0x4c4d58(0xc7)][_0x4c4d58(0x111)]],_0x2758af=[_0x770591[_0x4c4d58(0xc7)][_0x4c4d58(0xd5)]],_0x5c30b1=[_0x770591[_0x4c4d58(0xc7)][_0x4c4d58(0x9f)]];else var _0x411310=[..._0x770591[_0x4c4d58(0xc7)][_0x4c4d58(0x111)]],_0x2758af=[..._0x770591['body']['max_car_edit']],_0x5c30b1=[..._0x770591['body']['discount_price_edit']];const _0x229745=_0x411310[_0x4c4d58(0xe3)](_0x4cdaff=>{return _0x4cdaff={'min_car':_0x4cdaff};});_0x2758af['forEach']((_0x356c05,_0x317f4c)=>{const _0x4d995a=_0x4c4d58;_0x229745[_0x317f4c][_0x4d995a(0xc2)]=_0x356c05;}),_0x5c30b1[_0x4c4d58(0xc0)]((_0x504609,_0xdb80d)=>{_0x229745[_0xdb80d]['discount_price']=_0x504609;});if(_0x2bcad5==null){const _0x9a55dc=new discount_volume_db({'volume_discount':_0x229745});await _0x9a55dc[_0x4c4d58(0x97)]();}else _0x2bcad5['volume_discount']=_0x229745,await _0x2bcad5[_0x4c4d58(0x97)]();_0x770591[_0x4c4d58(0xb7)](_0x4c4d58(0xd2),_0x4c4d58(0xa2)),_0x32ffe0[_0x4c4d58(0x101)](_0x4c4d58(0xf7));}catch(_0x225bff){}}),router[a0_0x53fdcf(0xcf)](a0_0x53fdcf(0x8f),auth,async(_0x441243,_0x23ec39)=>{const _0x27ca65=a0_0x53fdcf;try{const _0xdd0208=_0x441243[_0x27ca65(0x112)],_0x513f78=await supervisor_settings[_0x27ca65(0x9d)](),_0x4560da=await profile[_0x27ca65(0x8d)]({'email':_0xdd0208[_0x27ca65(0x119)]}),_0x30c45d=await master_shop[_0x27ca65(0x9d)](),_0x33eea4=await warehouse_validation_setup[_0x27ca65(0x9d)]();if(_0x30c45d[0x0][_0x27ca65(0xd4)]==_0x27ca65(0xc9))var _0x1538ef=users[_0x27ca65(0xb3)];else{if(_0x30c45d[0x0][_0x27ca65(0xd4)]==_0x27ca65(0xe7))var _0x1538ef=users[_0x27ca65(0xe7)];else{if(_0x30c45d[0x0][_0x27ca65(0xd4)]==_0x27ca65(0xe1))var _0x1538ef=users[_0x27ca65(0xe1)];else{if(_0x30c45d[0x0][_0x27ca65(0xd4)]==_0x27ca65(0xec))var _0x1538ef=users[_0x27ca65(0xec)];else{if(_0x30c45d[0x0]['language']==_0x27ca65(0x10c))var _0x1538ef=users[_0x27ca65(0x10c)];else{if(_0x30c45d[0x0][_0x27ca65(0xd4)]==_0x27ca65(0x109))var _0x1538ef=users[_0x27ca65(0xd6)];else{if(_0x30c45d[0x0][_0x27ca65(0xd4)]=='Chinese')var _0x1538ef=users[_0x27ca65(0xaf)];else{if(_0x30c45d[0x0]['language']==_0x27ca65(0xde))var _0x1538ef=users[_0x27ca65(0xd1)];}}}}}}}_0x23ec39['render']('setup_warehouse_bin',{'success':_0x441243[_0x27ca65(0xb7)](_0x27ca65(0xd2)),'errors':_0x441243[_0x27ca65(0xb7)]('errors'),'role':_0xdd0208,'profile':_0x4560da,'master_shop':_0x30c45d,'supervisor_data':_0x513f78[0x0],'language':_0x1538ef,'data':_0x33eea4});}catch(_0x558135){}}),router[a0_0x53fdcf(0xcf)](a0_0x53fdcf(0xd3),auth,async(_0x4f7a46,_0x477775)=>{const _0x5ad5d9=a0_0x53fdcf;try{const _0x6e644=_0x4f7a46[_0x5ad5d9(0x112)],_0x4f4fcf=await supervisor_settings[_0x5ad5d9(0x9d)](),_0x38e3c8=await profile[_0x5ad5d9(0x8d)]({'email':_0x6e644[_0x5ad5d9(0x119)]}),_0x364927=await master_shop[_0x5ad5d9(0x9d)](),_0x28c456=await warehouse_validation_setup['find'](),_0x339e53=await warehouse[_0x5ad5d9(0xdc)]([{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x5ad5d9(0x107),'name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]);if(_0x364927[0x0][_0x5ad5d9(0xd4)]==_0x5ad5d9(0xc9))var _0xc8408=users['English'];else{if(_0x364927[0x0][_0x5ad5d9(0xd4)]==_0x5ad5d9(0xe7))var _0xc8408=users[_0x5ad5d9(0xe7)];else{if(_0x364927[0x0][_0x5ad5d9(0xd4)]=='German')var _0xc8408=users[_0x5ad5d9(0xe1)];else{if(_0x364927[0x0]['language']=='Spanish')var _0xc8408=users[_0x5ad5d9(0xec)];else{if(_0x364927[0x0][_0x5ad5d9(0xd4)]=='French')var _0xc8408=users['French'];else{if(_0x364927[0x0]['language']==_0x5ad5d9(0x109))var _0xc8408=users['Portuguese'];else{if(_0x364927[0x0][_0x5ad5d9(0xd4)]==_0x5ad5d9(0xaf))var _0xc8408=users[_0x5ad5d9(0xaf)];else{if(_0x364927[0x0][_0x5ad5d9(0xd4)]==_0x5ad5d9(0xde))var _0xc8408=users[_0x5ad5d9(0xd1)];}}}}}}}_0x477775[_0x5ad5d9(0x105)](_0x5ad5d9(0xe8),{'success':_0x4f7a46[_0x5ad5d9(0xb7)](_0x5ad5d9(0xd2)),'errors':_0x4f7a46[_0x5ad5d9(0xb7)](_0x5ad5d9(0xfd)),'role':_0x6e644,'profile':_0x38e3c8,'master_shop':_0x364927,'supervisor_data':_0x4f4fcf[0x0],'language':_0xc8408,'data':_0x28c456,'warehouse':_0x339e53});}catch(_0x1d7d3b){}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0xd3),auth,async(_0x1a184b,_0x555c4d)=>{const _0x3f2893=a0_0x53fdcf;try{const {warehouse_name:_0x15c0b3,room_name:_0x35ba5b,prod_code:_0x211d6a}=_0x1a184b[_0x3f2893(0xc7)];var _0x1618c4=_0x35ba5b[_0x3f2893(0x102)]('~'),_0x540f3e=_0x1618c4[0x0],_0x5c465b=_0x1618c4[0x1];if(typeof _0x211d6a==_0x3f2893(0xe6))var _0x47fdc6=[_0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0xac)]],_0xb1d21=[_0x1a184b['body']['prod_name']],_0x33fb7c=[_0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0xb2)]],_0x31a04e=[_0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0xd7)]],_0x1b6cd3=[_0x1a184b['body'][_0x3f2893(0x91)]],_0x38a161=[_0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0x10b)]];else var _0xb1d21=[..._0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0xd8)]],_0x47fdc6=[..._0x1a184b['body']['prod_code']],_0x33fb7c=[..._0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0xb2)]],_0x31a04e=[..._0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0xd7)]],_0x1b6cd3=[..._0x1a184b[_0x3f2893(0xc7)][_0x3f2893(0x91)]],_0x38a161=[..._0x1a184b[_0x3f2893(0xc7)]['product_id']];const _0x26aec3=_0x47fdc6['map'](_0x29b781=>{return _0x29b781={'product_code':_0x29b781};});_0xb1d21[_0x3f2893(0xc0)]((_0x16ec4f,_0x11a208)=>{const _0x415f89=_0x3f2893;_0x26aec3[_0x11a208][_0x415f89(0x10d)]=_0x16ec4f;}),_0x33fb7c[_0x3f2893(0xc0)]((_0x357df4,_0x3aa3e0)=>{const _0x439806=_0x3f2893;var _0x4911d8=_0x357df4[_0x439806(0xce)](/[A-Za-z]+/)[0x0],_0x5a1b07=parseInt(_0x357df4[_0x439806(0xce)](/\d+/)[0x0]);_0x26aec3[_0x3aa3e0][_0x439806(0xb2)]=_0x4911d8,_0x26aec3[_0x3aa3e0][_0x439806(0xcb)]=_0x5a1b07;}),_0x31a04e[_0x3f2893(0xc0)]((_0x5c9225,_0x5d9a84)=>{_0x26aec3[_0x5d9a84]['min']=_0x5c9225;}),_0x1b6cd3[_0x3f2893(0xc0)]((_0x12af20,_0x21d050)=>{const _0x37e417=_0x3f2893;_0x26aec3[_0x21d050][_0x37e417(0xee)]=_0x12af20;}),_0x38a161[_0x3f2893(0xc0)]((_0x478a04,_0x45bf67)=>{const _0x54f611=_0x3f2893;_0x26aec3[_0x45bf67][_0x54f611(0x10b)]=_0x478a04;});const _0x451acb=new warehouse_validation_setup({'warehouse_id':_0x5c465b,'warehouse_name':_0x15c0b3,'room':_0x540f3e,'product_data':_0x26aec3}),_0x181add=await _0x451acb[_0x3f2893(0x97)]();_0x1a184b[_0x3f2893(0xb7)]('success','Bin\x20validation\x20success'),_0x555c4d[_0x3f2893(0x101)]('/master_shop/view_data/edit/'+_0x181add[_0x3f2893(0xa0)]);}catch(_0x72cfcd){console['log'](_0x72cfcd);}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0x92),auth,async(_0x1feea9,_0x14989e)=>{const _0x280b7c=a0_0x53fdcf;try{const _0x28c030=mongoose[_0x280b7c(0xbd)]['ObjectId'],{warehouse_name:_0x30a15b}=_0x1feea9[_0x280b7c(0xc7)],_0x5ab73e=await warehouse_validation_setup[_0x280b7c(0xdc)]([{'$group':{'_id':_0x280b7c(0x90),'warehouse_id':{'$first':_0x280b7c(0x93)}}}]);let _0x5682f0=[];for(let _0x5c8159=0x0;_0x5c8159<=_0x5ab73e[_0x280b7c(0xbc)]-0x1;_0x5c8159++){const _0x3c7c7f=_0x5ab73e[_0x5c8159];_0x5682f0[_0x280b7c(0x10f)](_0x28c030(_0x3c7c7f[_0x280b7c(0xbf)]));}const _0x4eb67a=_0x5682f0,_0x33fee1=await warehouse[_0x280b7c(0xdc)]([{'$match':{'name':_0x30a15b,'status':'Enabled','_id':{'$nin':_0x4eb67a}}},{'$group':{'_id':_0x280b7c(0x90),'room_name':{'$first':_0x280b7c(0x9e)}}},{'$sort':{'room_name':0x1}}]);_0x14989e['json'](_0x33fee1);}catch(_0x4b7324){_0x14989e[_0x280b7c(0x116)](_0x4b7324);}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0x8c),auth,async(_0x58ac7f,_0x5242c8)=>{const _0x1ff4d4=a0_0x53fdcf;try{const _0x265b8f=await product[_0x1ff4d4(0x9d)]();_0x5242c8['json'](_0x265b8f);}catch(_0x35b643){_0x5242c8['json'](_0x35b643);}}),router['post'](a0_0x53fdcf(0x10e),auth,async(_0x2c0fee,_0x14d824)=>{const _0x3ae468=a0_0x53fdcf;try{const {product_id:_0x1f937a}=_0x2c0fee[_0x3ae468(0xc7)],_0x343a21=await product['findById'](_0x1f937a);_0x14d824['json'](_0x343a21);}catch(_0x3a9460){_0x14d824[_0x3ae468(0x116)](_0x3a9460);}}),router[a0_0x53fdcf(0xcf)](a0_0x53fdcf(0xe9),auth,async(_0x1c966c,_0x4f56f3)=>{const _0x3bc04f=a0_0x53fdcf;try{const _0xdcdd26=_0x1c966c[_0x3bc04f(0x112)],_0x241f07=await supervisor_settings[_0x3bc04f(0x9d)](),_0xa9c4e0=await profile[_0x3bc04f(0x8d)]({'email':_0xdcdd26[_0x3bc04f(0x119)]}),_0x1cdb9d=await master_shop[_0x3bc04f(0x9d)](),_0x252feb=_0x1c966c[_0x3bc04f(0xe0)]['id'],_0x43a9e0=await warehouse_validation_setup[_0x3bc04f(0xda)](_0x252feb),_0x2b2f76=await warehouse[_0x3bc04f(0xdc)]([{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x3bc04f(0x107),'name':{'$first':_0x3bc04f(0x107)}}},{'$sort':{'name':0x1}}]);if(_0x1cdb9d[0x0]['language']==_0x3bc04f(0xc9))var _0x481d1b=users[_0x3bc04f(0xb3)];else{if(_0x1cdb9d[0x0][_0x3bc04f(0xd4)]==_0x3bc04f(0xe7))var _0x481d1b=users['Hindi'];else{if(_0x1cdb9d[0x0][_0x3bc04f(0xd4)]==_0x3bc04f(0xe1))var _0x481d1b=users['German'];else{if(_0x1cdb9d[0x0][_0x3bc04f(0xd4)]=='Spanish')var _0x481d1b=users[_0x3bc04f(0xec)];else{if(_0x1cdb9d[0x0][_0x3bc04f(0xd4)]==_0x3bc04f(0x10c))var _0x481d1b=users[_0x3bc04f(0x10c)];else{if(_0x1cdb9d[0x0][_0x3bc04f(0xd4)]==_0x3bc04f(0x109))var _0x481d1b=users['Portuguese'];else{if(_0x1cdb9d[0x0]['language']=='Chinese')var _0x481d1b=users['Chinese'];else{if(_0x1cdb9d[0x0][_0x3bc04f(0xd4)]==_0x3bc04f(0xde))var _0x481d1b=users[_0x3bc04f(0xd1)];}}}}}}}_0x4f56f3['render'](_0x3bc04f(0xb6),{'success':_0x1c966c[_0x3bc04f(0xb7)](_0x3bc04f(0xd2)),'errors':_0x1c966c['flash'](_0x3bc04f(0xfd)),'role':_0xdcdd26,'profile':_0xa9c4e0,'master_shop':_0x1cdb9d,'supervisor_data':_0x241f07[0x0],'language':_0x481d1b,'data':_0x43a9e0,'warehouse':_0x2b2f76});}catch(_0x1a2847){}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0xdd),auth,async(_0xabc4c7,_0x45f92f)=>{const _0x1c5f29=a0_0x53fdcf;try{const _0x4db20d=mongoose['Types'][_0x1c5f29(0xd9)],{warehouse_name:_0x2b6abd}=_0xabc4c7[_0x1c5f29(0xc7)],_0x10817d=await warehouse_validation_setup['aggregate']([{'$group':{'_id':_0x1c5f29(0x90),'warehouse_id':{'$first':_0x1c5f29(0x93)}}}]);let _0x43fb49=[];for(let _0x50d2ad=0x0;_0x50d2ad<=_0x10817d[_0x1c5f29(0xbc)]-0x1;_0x50d2ad++){const _0x2a6a22=_0x10817d[_0x50d2ad];_0x43fb49[_0x1c5f29(0x10f)](_0x4db20d(_0x2a6a22[_0x1c5f29(0xbf)]));}const _0x5ee0b7=_0x43fb49,_0x351d0f=await warehouse[_0x1c5f29(0xdc)]([{'$match':{'name':_0x2b6abd,'status':_0x1c5f29(0x9b)}},{'$group':{'_id':_0x1c5f29(0x90),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]);_0x45f92f['json'](_0x351d0f);}catch(_0x5e22ea){_0x45f92f['json'](_0x5e22ea);}}),router[a0_0x53fdcf(0xfb)](a0_0x53fdcf(0xe9),auth,async(_0xc4e02d,_0x328a1a)=>{const _0x3d5cef=a0_0x53fdcf;try{const {prod_code:_0x54d196}=_0xc4e02d[_0x3d5cef(0xc7)],_0xc6ee=_0xc4e02d[_0x3d5cef(0xe0)]['id'],_0x5abbdf=await warehouse_validation_setup['findById'](_0xc6ee);if(typeof _0x54d196==_0x3d5cef(0xe6))var _0x403af5=[_0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0xac)]],_0x3b6a0b=[_0xc4e02d['body'][_0x3d5cef(0xd8)]],_0x3160c2=[_0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0xb2)]],_0x3d9e18=[_0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0xd7)]],_0x8cc7f0=[_0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0x91)]],_0x52df47=[_0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0x10b)]];else var _0x3b6a0b=[..._0xc4e02d['body'][_0x3d5cef(0xd8)]],_0x403af5=[..._0xc4e02d['body']['prod_code']],_0x3160c2=[..._0xc4e02d[_0x3d5cef(0xc7)]['bay']],_0x3d9e18=[..._0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0xd7)]],_0x8cc7f0=[..._0xc4e02d[_0x3d5cef(0xc7)][_0x3d5cef(0x91)]],_0x52df47=[..._0xc4e02d['body']['product_id']];const _0x2242e8=_0x403af5[_0x3d5cef(0xe3)](_0x78c733=>{return _0x78c733={'product_code':_0x78c733};});_0x3b6a0b[_0x3d5cef(0xc0)]((_0xb8d0bd,_0x5d4cce)=>{_0x2242e8[_0x5d4cce]['product_name']=_0xb8d0bd;}),_0x3160c2['forEach']((_0xba5dc0,_0x2090ee)=>{const _0x22f58e=_0x3d5cef;var _0x3c0424=_0xba5dc0[_0x22f58e(0xce)](/[A-Za-z]+/)[0x0],_0x33032b=parseInt(_0xba5dc0[_0x22f58e(0xce)](/\d+/)[0x0]);_0x2242e8[_0x2090ee][_0x22f58e(0xb2)]=_0x3c0424,_0x2242e8[_0x2090ee][_0x22f58e(0xcb)]=_0x33032b;}),_0x3d9e18[_0x3d5cef(0xc0)]((_0xdabe2b,_0x3ddb46)=>{_0x2242e8[_0x3ddb46]['min']=_0xdabe2b;}),_0x8cc7f0[_0x3d5cef(0xc0)]((_0x3b07bb,_0x1d9507)=>{const _0x8e2cdb=_0x3d5cef;_0x2242e8[_0x1d9507][_0x8e2cdb(0xee)]=_0x3b07bb;}),_0x52df47[_0x3d5cef(0xc0)]((_0x34efd9,_0x2c3d21)=>{const _0x3f7a3f=_0x3d5cef;_0x2242e8[_0x2c3d21][_0x3f7a3f(0x10b)]=_0x34efd9;}),_0x5abbdf[_0x3d5cef(0xa4)]=_0x2242e8;const _0x4b2f23=await _0x5abbdf[_0x3d5cef(0x97)]();_0xc4e02d[_0x3d5cef(0xb7)](_0x3d5cef(0xd2),_0x3d5cef(0x104)),_0x328a1a[_0x3d5cef(0x101)]('/master_shop/view_data/edit/'+_0x4b2f23[_0x3d5cef(0xa0)]);}catch(_0x4321dd){_0x328a1a[_0x3d5cef(0x116)](_0x4321dd);}}),router[a0_0x53fdcf(0xfb)]('/view_data/print',auth,async(_0x5e78bc,_0x4b7581)=>{const _0x39a25f=a0_0x53fdcf;try{const {warehouse_id:_0x8038f4}=_0x5e78bc[_0x39a25f(0xc7)],_0xee217d=await warehouse_validation_setup[_0x39a25f(0xda)](_0x8038f4),_0x348cc2=_0x118376=>_0x118376*0x48,_0x4c5941={'width':0x3,'height':0x1},_0x3182f9=new PDFDocument({'margin':_0x348cc2(0.75),'size':[_0x348cc2(_0x4c5941[_0x39a25f(0xfe)]),_0x348cc2(_0x4c5941[_0x39a25f(0x114)])],'bufferPages':!![]}),_0x3512bc=_0xee217d[_0x39a25f(0xa4)][_0x39a25f(0xbc)];for(let _0x1f2e32=0x0;_0x1f2e32<=_0x3512bc-0x1;_0x1f2e32++){var _0x246a7d=_0xee217d[_0x39a25f(0xa4)][_0x1f2e32],_0x4acd14=_0xee217d[_0x39a25f(0x106)]+'~'+_0xee217d[_0x39a25f(0xa9)]+'~'+_0x246a7d[_0x39a25f(0xb2)]+'~'+_0x246a7d[_0x39a25f(0xcb)];const _0x53bf15={'width':0x190,'height':0x96},_0x24f118={'width':_0x348cc2(_0x4c5941['width']),'height':_0x348cc2(_0x4c5941[_0x39a25f(0x114)])},_0x3f349b=new Canvas();JsBarcode(_0x3f349b,_0x4acd14,{'format':_0x39a25f(0xb4),'height':_0x53bf15['height'],'displayValue':!![],'text':_0x4acd14});const _0x4a4f6f=_0x3f349b[_0x39a25f(0xb1)](),_0x2f77df=_0x24f118[_0x39a25f(0xfe)]/_0x53bf15['width'],_0x1a3480=_0x24f118[_0x39a25f(0x114)]/_0x53bf15['height'],_0x179c36=Math[_0x39a25f(0x110)](_0x2f77df,_0x1a3480),_0x160f34=_0x53bf15['width']*_0x179c36,_0x5af94c=_0x53bf15['height']*_0x179c36,_0x446683=(_0x24f118[_0x39a25f(0xfe)]-_0x160f34)/0x2,_0x20ff20=(_0x24f118[_0x39a25f(0x114)]-_0x5af94c)/0x2;_0x3182f9[_0x39a25f(0x96)](_0x4a4f6f,_0x446683,_0x20ff20,{'width':_0x160f34,'height':_0x5af94c}),_0x1f2e32!=_0x3512bc&&_0x3182f9[_0x39a25f(0xb9)](),console[_0x39a25f(0xa5)](_0x4acd14);}const _0x332562=[];_0x3182f9['on'](_0x39a25f(0xcd),_0x332562[_0x39a25f(0x10f)][_0x39a25f(0xed)](_0x332562)),_0x3182f9['on']('end',()=>{const _0x4ad444=_0x39a25f,_0xebd135=Buffer[_0x4ad444(0x113)](_0x332562),_0x8ce67a=_0xebd135[_0x4ad444(0x9a)]('base64');_0x4b7581['json']({'pdfContent':_0x8ce67a});}),_0x3182f9[_0x39a25f(0xcc)]();}catch(_0x1c5986){_0x4b7581['json'](_0x1c5986);}}),module[a0_0x53fdcf(0xaa)]=router;