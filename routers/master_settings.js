const a0_0x4b6a94=a0_0x45fc;(function(_0x4f4ebd,_0x4b1fb0){const _0x2141c0=a0_0x45fc,_0x449fff=_0x4f4ebd();while(!![]){try{const _0x243a11=-parseInt(_0x2141c0(0xac))/0x1*(parseInt(_0x2141c0(0x88))/0x2)+parseInt(_0x2141c0(0xc2))/0x3+parseInt(_0x2141c0(0xbb))/0x4*(parseInt(_0x2141c0(0x78))/0x5)+-parseInt(_0x2141c0(0xb5))/0x6+-parseInt(_0x2141c0(0x93))/0x7+-parseInt(_0x2141c0(0xa2))/0x8*(-parseInt(_0x2141c0(0x76))/0x9)+parseInt(_0x2141c0(0x9f))/0xa*(-parseInt(_0x2141c0(0xb2))/0xb);if(_0x243a11===_0x4b1fb0)break;else _0x449fff['push'](_0x449fff['shift']());}catch(_0x2e1cfa){_0x449fff['push'](_0x449fff['shift']());}}}(a0_0x3342,0x9e74f));const express=require(a0_0x4b6a94(0x96)),app=express(),router=express['Router'](),multer=require(a0_0x4b6a94(0x8f)),{profile,master_shop,email_settings,supervisor_settings,discount_volume_db}=require('../models/all_models'),auth=require(a0_0x4b6a94(0x81));var timezones=require(a0_0x4b6a94(0x9b));const users=require(a0_0x4b6a94(0xc5)),storage=multer[a0_0x4b6a94(0xae)]({'destination':(_0x20a128,_0x2dcc48,_0x1000f7)=>{_0x1000f7(null,'./public/upload');},'filename':(_0x5ef370,_0x72cb94,_0x14277f)=>{const _0x59d489=a0_0x4b6a94;_0x14277f(null,Date['now']()+_0x72cb94[_0x59d489(0xa6)]);}}),upload=multer({'storage':storage});function a0_0x45fc(_0x1d272f,_0x8e5881){const _0x334258=a0_0x3342();return a0_0x45fc=function(_0x45fca2,_0x4cdca6){_0x45fca2=_0x45fca2-0x75;let _0x24137c=_0x334258[_0x45fca2];return _0x24137c;},a0_0x45fc(_0x1d272f,_0x8e5881);}function a0_0x3342(){const _0x35f91d=['user','FGSnumber','password','/master_shop/view_data/volume_set','168388CEZzpN','email','FGSName','shop\x20setting\x20edit\x20successfully','post','hidden','/view/email','multer','Arabic','/view','master','480690lChadJ','redirect','get','express','exports','English','French','currency','timezones-list','volume_discount','flash','single','1121590ApMumQ','setup_volume_discount','site_title','3127912LCBRWh','find','RMSEmail','en-US','originalname','English\x20(US)','master_shop_data','German','discount_price','Volume\x20Discount\x20modified\x20successfully','6lavqnd','log','diskStorage','min_car_edit','image','errors','121rZidZf','file','Hindi','3040380oUJxZw','master\x20settings\x20email_data','/master_shop/view/supervisors','Portuguese','FGSEmail','2nd\x20master_shop_data','788XQIGHV','render','Chinese','save','body','discount_price_edit','RMSName','3746496AZCACQ','master_settings','findOne','../public/language/languages.json','string','host','max_car','max_car_edit','params','RMSnumber','Portuguese\x20(BR)','27pXodXj','/view/edit_settings','13745Mzclri','filename','currency_placement','success','timezone','language','Spanish','/view_data/edit_volume_set','map','../middleware/auth','/:id','Arabic\x20(ae)'];a0_0x3342=function(){return _0x35f91d;};return a0_0x3342();}router[a0_0x4b6a94(0x95)](a0_0x4b6a94(0x91),auth,async(_0x30e3ef,_0x1456d4)=>{const _0x23527f=a0_0x4b6a94;try{const {username:_0x227e9d,email:_0x3069c0,role:_0x1c4acf}=_0x30e3ef[_0x23527f(0x84)],_0x28e56d=_0x30e3ef[_0x23527f(0x84)],_0x466834=await profile['findOne']({'email':_0x28e56d[_0x23527f(0x89)]}),_0x26ebd9=await master_shop[_0x23527f(0xa3)]();console['log'](_0x23527f(0x92),_0x26ebd9);const _0x4aac00=new Date()['toLocaleString'](_0x23527f(0xa5),{'timeZone':_0x26ebd9[0x0][_0x23527f(0x7c)]});console[_0x23527f(0xad)]('timezone',_0x4aac00);if(_0x26ebd9[0x0][_0x23527f(0x7d)]==_0x23527f(0xa7)){var _0x4fda01=users[_0x23527f(0x98)];console[_0x23527f(0xad)](_0x4fda01);}else{if(_0x26ebd9[0x0][_0x23527f(0x7d)]==_0x23527f(0xb4))var _0x4fda01=users['Hindi'];else{if(_0x26ebd9[0x0][_0x23527f(0x7d)]=='German')var _0x4fda01=users[_0x23527f(0xa9)];else{if(_0x26ebd9[0x0][_0x23527f(0x7d)]==_0x23527f(0x7e))var _0x4fda01=users[_0x23527f(0x7e)];else{if(_0x26ebd9[0x0][_0x23527f(0x7d)]==_0x23527f(0x99))var _0x4fda01=users[_0x23527f(0x99)];else{if(_0x26ebd9[0x0][_0x23527f(0x7d)]=='Portuguese\x20(BR)')var _0x4fda01=users[_0x23527f(0xb8)];else{if(_0x26ebd9[0x0][_0x23527f(0x7d)]=='Chinese')var _0x4fda01=users['Chinese'];else{if(_0x26ebd9[0x0]['language']==_0x23527f(0x83))var _0x4fda01=users[_0x23527f(0x90)];}}}}}}}_0x1456d4[_0x23527f(0xbc)](_0x23527f(0xc3),{'success':_0x30e3ef[_0x23527f(0x9d)](_0x23527f(0x7b)),'errors':_0x30e3ef[_0x23527f(0x9d)](_0x23527f(0xb1)),'role':_0x28e56d,'profile':_0x466834,'master_shop':_0x26ebd9,'timezones':timezones,'language':_0x4fda01});}catch(_0x35969e){console[_0x23527f(0xad)](_0x35969e);}}),router[a0_0x4b6a94(0x95)](a0_0x4b6a94(0x82),auth,async(_0x45df8d,_0x12a8b7)=>{const _0x3ff667=a0_0x4b6a94;try{console[_0x3ff667(0xad)]('language'),console[_0x3ff667(0xad)](_0x45df8d[_0x3ff667(0xca)]['id']);const _0x9f1b3e=await master_shop['findOne']();_0x9f1b3e[_0x3ff667(0x7d)]=_0x45df8d['params']['id'],await _0x9f1b3e[_0x3ff667(0xbe)](),console['log'](_0x3ff667(0x92),_0x9f1b3e);}catch(_0x2d8485){console['log'](_0x2d8485);}}),router[a0_0x4b6a94(0x8c)](a0_0x4b6a94(0x77),auth,upload[a0_0x4b6a94(0x9e)](a0_0x4b6a94(0xb0)),async(_0x4f173c,_0x2b9d38)=>{const _0x300032=a0_0x4b6a94;try{const {site_title:_0x5406c2,currency:_0x286a03,currency_placement:_0x260c76,timezone:_0x558eed}=_0x4f173c['body'];if(_0x4f173c[_0x300032(0xbf)][_0x300032(0x8d)]==0x0){const _0x80dd67=await master_shop[_0x300032(0xc4)]();console[_0x300032(0xad)](_0x300032(0xa8),_0x80dd67);if(_0x80dd67==''){const _0x572faf=new master_shop({'site_title':_0x5406c2,'image':image,'currency':_0x286a03,'currency_placement':_0x260c76,'timezone':_0x558eed}),_0x439cab=await _0x572faf[_0x300032(0xbe)]();}else _0x80dd67[_0x300032(0xa1)]=_0x5406c2,_0x80dd67[_0x300032(0x9a)]=_0x286a03,_0x80dd67[_0x300032(0x7a)]=_0x260c76,_0x80dd67['timezone']=_0x558eed,await _0x80dd67[_0x300032(0xbe)]();}else{const _0x5dcae5=_0x4f173c[_0x300032(0xb3)][_0x300032(0x79)],_0x6ecefe=await master_shop[_0x300032(0xc4)]();console[_0x300032(0xad)](_0x300032(0xba),_0x6ecefe);if(_0x6ecefe==null){console[_0x300032(0xad)]('1',_0x5406c2);const _0x486e39=new master_shop({'site_title':_0x5406c2,'image':_0x5dcae5,'currency':_0x286a03,'currency_placement':_0x260c76,'timezone':_0x558eed}),_0x3eb908=await _0x486e39[_0x300032(0xbe)]();}else console[_0x300032(0xad)]('2',_0x5406c2),_0x6ecefe['site_title']=_0x5406c2,_0x6ecefe[_0x300032(0xb0)]=_0x5dcae5,_0x6ecefe[_0x300032(0x9a)]=_0x286a03,_0x6ecefe[_0x300032(0x7a)]=_0x260c76,_0x6ecefe[_0x300032(0x7c)]=_0x558eed,await _0x6ecefe[_0x300032(0xbe)]();}_0x4f173c[_0x300032(0x9d)](_0x300032(0x7b),'shop\x20setting\x20edit\x20successfully'),_0x2b9d38[_0x300032(0x94)]('/master_shop/view');}catch(_0x20dec4){console[_0x300032(0xad)](_0x20dec4);}}),router[a0_0x4b6a94(0x95)](a0_0x4b6a94(0x8e),auth,async(_0x2d6e5e,_0x241213)=>{const _0x50c801=a0_0x4b6a94;try{const {username:_0x2d977c,email:_0x4004b8,role:_0x48c3c6}=_0x2d6e5e[_0x50c801(0x84)],_0x185847=_0x2d6e5e[_0x50c801(0x84)],_0x480f14=await profile[_0x50c801(0xc4)]({'email':_0x185847[_0x50c801(0x89)]}),_0x2686b4=await master_shop['find']();console[_0x50c801(0xad)](_0x50c801(0x92),_0x2686b4);const _0x3f5ca9=await email_settings['findOne']();console['log'](_0x50c801(0xb6),_0x3f5ca9);if(_0x2686b4[0x0][_0x50c801(0x7d)]==_0x50c801(0xa7)){var _0x25c035=users[_0x50c801(0x98)];console[_0x50c801(0xad)](_0x25c035);}else{if(_0x2686b4[0x0][_0x50c801(0x7d)]==_0x50c801(0xb4))var _0x25c035=users['Hindi'];else{if(_0x2686b4[0x0][_0x50c801(0x7d)]==_0x50c801(0xa9))var _0x25c035=users['German'];else{if(_0x2686b4[0x0][_0x50c801(0x7d)]=='Spanish')var _0x25c035=users[_0x50c801(0x7e)];else{if(_0x2686b4[0x0][_0x50c801(0x7d)]=='French')var _0x25c035=users['French'];else{if(_0x2686b4[0x0][_0x50c801(0x7d)]=='Portuguese\x20(BR)')var _0x25c035=users[_0x50c801(0xb8)];else{if(_0x2686b4[0x0][_0x50c801(0x7d)]==_0x50c801(0xbd))var _0x25c035=users['Chinese'];else{if(_0x2686b4[0x0][_0x50c801(0x7d)]==_0x50c801(0x83))var _0x25c035=users[_0x50c801(0x90)];}}}}}}}_0x241213[_0x50c801(0xbc)]('email_settings',{'success':_0x2d6e5e['flash'](_0x50c801(0x7b)),'errors':_0x2d6e5e[_0x50c801(0x9d)](_0x50c801(0xb1)),'role':_0x185847,'profile':_0x480f14,'master_shop':_0x2686b4,'email':_0x3f5ca9,'language':_0x25c035});}catch(_0xfdd5fe){console['log'](_0xfdd5fe);}}),router[a0_0x4b6a94(0x8c)]('/view/email/edit_settings',auth,async(_0x319388,_0x1dfc53)=>{const _0x12e751=a0_0x4b6a94;try{const {host:_0x2615f9,port:_0xe86c9b,email:_0x518f9b,password:_0x4ce346}=_0x319388[_0x12e751(0xbf)],_0x455049=await email_settings[_0x12e751(0xc4)]();if(_0x455049==null){const _0x530c0f=new email_settings({'host':_0x2615f9,'port':_0xe86c9b,'email':_0x518f9b,'password':_0x4ce346});await _0x530c0f[_0x12e751(0xbe)]();}else _0x455049[_0x12e751(0xc7)]=_0x2615f9,_0x455049['port']=_0xe86c9b,_0x455049[_0x12e751(0x89)]=_0x518f9b,_0x455049[_0x12e751(0x86)]=_0x4ce346,await _0x455049[_0x12e751(0xbe)]();_0x319388[_0x12e751(0x9d)](_0x12e751(0x7b),_0x12e751(0x8b)),_0x1dfc53['redirect']('/master_shop/view/email');}catch(_0xd5b105){console[_0x12e751(0xad)](_0xd5b105);}}),router[a0_0x4b6a94(0x95)]('/view/supervisors',auth,async(_0x5a695c,_0x226f49)=>{const _0x2660d2=a0_0x4b6a94;try{const {username:_0x4faf27,email:_0x1b7f89,role:_0x1fd850}=_0x5a695c[_0x2660d2(0x84)],_0x18c6c3=_0x5a695c[_0x2660d2(0x84)],_0x31e26e=await supervisor_settings['find'](),_0x277a45=await profile[_0x2660d2(0xc4)]({'email':_0x18c6c3[_0x2660d2(0x89)]}),_0x33bf7c=await master_shop[_0x2660d2(0xa3)](),_0x1688a4=new Date()['toLocaleString'](_0x2660d2(0xa5),{'timeZone':_0x33bf7c[0x0]['timezone']});if(_0x33bf7c[0x0][_0x2660d2(0x7d)]=='English\x20(US)'){var _0x4c5dd5=users['English'];console[_0x2660d2(0xad)](_0x4c5dd5);}else{if(_0x33bf7c[0x0]['language']==_0x2660d2(0xb4))var _0x4c5dd5=users['Hindi'];else{if(_0x33bf7c[0x0][_0x2660d2(0x7d)]=='German')var _0x4c5dd5=users[_0x2660d2(0xa9)];else{if(_0x33bf7c[0x0][_0x2660d2(0x7d)]==_0x2660d2(0x7e))var _0x4c5dd5=users[_0x2660d2(0x7e)];else{if(_0x33bf7c[0x0][_0x2660d2(0x7d)]==_0x2660d2(0x99))var _0x4c5dd5=users[_0x2660d2(0x99)];else{if(_0x33bf7c[0x0][_0x2660d2(0x7d)]==_0x2660d2(0x75))var _0x4c5dd5=users[_0x2660d2(0xb8)];else{if(_0x33bf7c[0x0][_0x2660d2(0x7d)]==_0x2660d2(0xbd))var _0x4c5dd5=users[_0x2660d2(0xbd)];else{if(_0x33bf7c[0x0]['language']==_0x2660d2(0x83))var _0x4c5dd5=users[_0x2660d2(0x90)];}}}}}}}_0x226f49['render']('supervisor_settings',{'success':_0x5a695c[_0x2660d2(0x9d)]('success'),'errors':_0x5a695c[_0x2660d2(0x9d)]('errors'),'role':_0x18c6c3,'profile':_0x277a45,'master_shop':_0x33bf7c,'supervisor_data':_0x31e26e[0x0],'timezones':timezones,'language':_0x4c5dd5});}catch(_0x3805e7){console[_0x2660d2(0xad)](_0x3805e7);}}),router['post']('/view/supervisors',auth,async(_0x514bb3,_0x109178)=>{const _0x172377=a0_0x4b6a94;try{const {rm_name:_0x5b6a8e,fg_name:_0x4c2cf,rm_email:_0x402d4a,fg_email:_0x9f03df,rm_mobilenum:_0x72aa67,fg_number:_0x539686}=_0x514bb3['body'],_0xdb3343=await supervisor_settings[_0x172377(0xc4)]();if(_0xdb3343==null){const _0xd199a3=new supervisor_settings({'RMSName':_0x5b6a8e,'RMSEmail':_0x402d4a,'RMSnumber':_0x72aa67,'FGSName':_0x4c2cf,'FGSEmail':_0x9f03df,'FGSnumber':_0x539686});await _0xd199a3[_0x172377(0xbe)]();}else _0xdb3343[_0x172377(0xc1)]=_0x5b6a8e,_0xdb3343[_0x172377(0xa4)]=_0x402d4a,_0xdb3343[_0x172377(0xcb)]=_0x72aa67,_0xdb3343[_0x172377(0x8a)]=_0x4c2cf,_0xdb3343[_0x172377(0xb9)]=_0x9f03df,_0xdb3343[_0x172377(0x85)]=_0x539686,await _0xdb3343['save']();_0x514bb3[_0x172377(0x9d)](_0x172377(0x7b),_0x172377(0x8b)),_0x109178['redirect'](_0x172377(0xb7));}catch(_0x2a47eb){console[_0x172377(0xad)](_0x2a47eb);}}),router[a0_0x4b6a94(0x95)]('/view_data/volume_set',auth,async(_0xf3b41a,_0x2c0883)=>{const _0x5bb30b=a0_0x4b6a94;try{const _0x29cc49=_0xf3b41a[_0x5bb30b(0x84)],_0xa3d9dc=await supervisor_settings[_0x5bb30b(0xa3)](),_0x481ec9=await profile[_0x5bb30b(0xc4)]({'email':_0x29cc49[_0x5bb30b(0x89)]}),_0x3afd84=await master_shop['find'](),_0x31e7f7=await discount_volume_db[_0x5bb30b(0xc4)]();if(_0x3afd84[0x0]['language']==_0x5bb30b(0xa7)){var _0x2c952a=users[_0x5bb30b(0x98)];console[_0x5bb30b(0xad)](_0x2c952a);}else{if(_0x3afd84[0x0]['language']=='Hindi')var _0x2c952a=users['Hindi'];else{if(_0x3afd84[0x0][_0x5bb30b(0x7d)]=='German')var _0x2c952a=users['German'];else{if(_0x3afd84[0x0]['language']==_0x5bb30b(0x7e))var _0x2c952a=users['Spanish'];else{if(_0x3afd84[0x0][_0x5bb30b(0x7d)]==_0x5bb30b(0x99))var _0x2c952a=users[_0x5bb30b(0x99)];else{if(_0x3afd84[0x0][_0x5bb30b(0x7d)]==_0x5bb30b(0x75))var _0x2c952a=users[_0x5bb30b(0xb8)];else{if(_0x3afd84[0x0][_0x5bb30b(0x7d)]==_0x5bb30b(0xbd))var _0x2c952a=users[_0x5bb30b(0xbd)];else{if(_0x3afd84[0x0][_0x5bb30b(0x7d)]==_0x5bb30b(0x83))var _0x2c952a=users[_0x5bb30b(0x90)];}}}}}}}_0x2c0883['render'](_0x5bb30b(0xa0),{'success':_0xf3b41a[_0x5bb30b(0x9d)](_0x5bb30b(0x7b)),'errors':_0xf3b41a[_0x5bb30b(0x9d)](_0x5bb30b(0xb1)),'role':_0x29cc49,'profile':_0x481ec9,'master_shop':_0x3afd84,'supervisor_data':_0xa3d9dc[0x0],'language':_0x2c952a,'data':_0x31e7f7});}catch(_0x544ee3){}}),router[a0_0x4b6a94(0x8c)](a0_0x4b6a94(0x7f),auth,async(_0x3380d8,_0x21a16f)=>{const _0x427f2e=a0_0x4b6a94;try{const {min_car_edit:_0x39e931}=_0x3380d8['body'],_0x1a2025=await discount_volume_db['findOne']();if(typeof _0x39e931==_0x427f2e(0xc6))var _0xf15fe6=[_0x3380d8[_0x427f2e(0xbf)][_0x427f2e(0xaf)]],_0x1d0b5b=[_0x3380d8[_0x427f2e(0xbf)]['max_car_edit']],_0x4ab58a=[_0x3380d8[_0x427f2e(0xbf)]['discount_price_edit']];else var _0xf15fe6=[..._0x3380d8[_0x427f2e(0xbf)][_0x427f2e(0xaf)]],_0x1d0b5b=[..._0x3380d8['body'][_0x427f2e(0xc9)]],_0x4ab58a=[..._0x3380d8[_0x427f2e(0xbf)][_0x427f2e(0xc0)]];const _0x5658b3=_0xf15fe6[_0x427f2e(0x80)](_0x525d34=>{return _0x525d34={'min_car':_0x525d34};});_0x1d0b5b['forEach']((_0xef979c,_0x2a4017)=>{const _0x57019d=_0x427f2e;_0x5658b3[_0x2a4017][_0x57019d(0xc8)]=_0xef979c;}),_0x4ab58a['forEach']((_0x1f8caa,_0x40ccfd)=>{const _0x56e836=_0x427f2e;_0x5658b3[_0x40ccfd][_0x56e836(0xaa)]=_0x1f8caa;});if(_0x1a2025==null){const _0x230cd0=new discount_volume_db({'volume_discount':_0x5658b3});await _0x230cd0[_0x427f2e(0xbe)]();}else _0x1a2025[_0x427f2e(0x9c)]=_0x5658b3,await _0x1a2025[_0x427f2e(0xbe)]();_0x3380d8['flash'](_0x427f2e(0x7b),_0x427f2e(0xab)),_0x21a16f['redirect'](_0x427f2e(0x87));}catch(_0x3edc7c){}}),module[a0_0x4b6a94(0x97)]=router;