const a0_0x592062=a0_0x164c;(function(_0x1fa4de,_0x2102c8){const _0xa3ed2e=a0_0x164c,_0x41d300=_0x1fa4de();while(!![]){try{const _0x852462=-parseInt(_0xa3ed2e(0x99))/0x1+-parseInt(_0xa3ed2e(0xce))/0x2*(parseInt(_0xa3ed2e(0x6e))/0x3)+-parseInt(_0xa3ed2e(0xd0))/0x4*(parseInt(_0xa3ed2e(0x73))/0x5)+-parseInt(_0xa3ed2e(0xd2))/0x6*(-parseInt(_0xa3ed2e(0xa0))/0x7)+-parseInt(_0xa3ed2e(0x65))/0x8*(-parseInt(_0xa3ed2e(0x68))/0x9)+parseInt(_0xa3ed2e(0x90))/0xa*(parseInt(_0xa3ed2e(0xbf))/0xb)+-parseInt(_0xa3ed2e(0x76))/0xc;if(_0x852462===_0x2102c8)break;else _0x41d300['push'](_0x41d300['shift']());}catch(_0x23082c){_0x41d300['push'](_0x41d300['shift']());}}}(a0_0x4efd,0xd0580));function a0_0x4efd(){const _0x1bcffc=['sale_return','../models/all_models','9545544SrsfQK','customer_data','error','customer_payment','string','PName','xlsx','flash','sheet_to_json','customer\x20add\x20successfully','/view/:id','receivable','valueOf','customer','save','email','sale','/customer_import_migrate_file','/customer_sa/view','then','$reason','columns','French','SalesmanCode','status','file','790kEOLcs','customer_docs','post','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','less_percent_edit','findOne','data','Content-Type','customer_product_fule','1552374OBzynt','\x20Failed','/products_export_migrate_file','English\x20(US)','customer_sa','render','success','14UdNsxa','terms_of_payments','English','setHeader','Name','map','Workbook','Hindi','customer\x20update\x20successfully','exceljs','Portuguese','Chinese','payable','aggregate','amount','get','json','now','element','user','German','SalesmanName','params','forEach','$amount','exports','Sale\x20Return','/view','_id','find','payable_sum','234707kjswXn','landline','../public/language/languages.json','name','Arabic\x20(ae)','redirect','findById','body','errors','express','SheetNames','res_address','Spanish','log','customer_discount','4pjJxHG','Arabic','32TAbKNK','less_percent','2549514NhmZEi','receivable_sum','readFile','8152SSOBZv','type_organization','../middleware/auth','11043ERSdIu','multer','language','Portuguese\x20(BR)','c_payments','address','436647ryXkiw','mobile','PUnits','attachment;\x20filename=customer_Migration_File.xlsx','addWorksheet','183415KKtUXp'];a0_0x4efd=function(){return _0x1bcffc;};return a0_0x4efd();}function a0_0x164c(_0x42997c,_0x54ddd4){const _0x4efdbd=a0_0x4efd();return a0_0x164c=function(_0x164c73,_0x8ee8a7){_0x164c73=_0x164c73-0x65;let _0x54b3e5=_0x4efdbd[_0x164c73];return _0x54b3e5;},a0_0x164c(_0x42997c,_0x54ddd4);}const express=require(a0_0x592062(0xc8)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x592062(0x75)),auth=require(a0_0x592062(0x67)),users=require(a0_0x592062(0xc1)),excelJS=require(a0_0x592062(0xa9)),xlsx=require(a0_0x592062(0x7c)),multer=require(a0_0x592062(0x69));router[a0_0x592062(0xaf)]('/view',auth,async(_0x4b374d,_0x360eee)=>{const _0x2c4b5e=a0_0x592062;try{const {username:_0xded73,email:_0x4ca827,role:_0x3eb0bd}=_0x4b374d[_0x2c4b5e(0xb3)],_0x13b7ff=_0x4b374d[_0x2c4b5e(0xb3)],_0x29d53e=await profile[_0x2c4b5e(0x95)]({'email':_0x13b7ff[_0x2c4b5e(0x85)]}),_0x1e46e2=await master_shop[_0x2c4b5e(0xbd)](),_0x5cc2e1=await staff[_0x2c4b5e(0x95)]({'email':_0x13b7ff[_0x2c4b5e(0x85)]}),_0x41df78=await customer[_0x2c4b5e(0xbd)]({'agent_id':_0x5cc2e1[_0x2c4b5e(0xbc)]}),_0x24f59f=await customer['aggregate']([{'$match':{'agent_id':_0x5cc2e1[_0x2c4b5e(0xbc)][_0x2c4b5e(0x82)]()}},{'$lookup':{'from':_0x2c4b5e(0x6c),'localField':_0x2c4b5e(0xc2),'foreignField':_0x2c4b5e(0x83),'as':_0x2c4b5e(0x91)}}]),_0x291574=_0x24f59f['map'](_0x12f677=>{const _0x21dec2=_0x2c4b5e;console[_0x21dec2(0xcc)](_0x21dec2(0x96),_0x12f677);var _0xdb02f8=0x0,_0x28c6f6=0x0;return _0x12f677['customer_docs'][_0x21dec2(0xb7)](_0x2a06ef=>{const _0x4cd9d1=_0x21dec2;console[_0x4cd9d1(0xcc)](_0x4cd9d1(0xb2),_0x2a06ef),_0x2a06ef['reason']=='Sale'?_0xdb02f8+=_0x2a06ef[_0x4cd9d1(0xae)]:_0x28c6f6+=_0x2a06ef['amount'];}),_0x12f677[_0x21dec2(0x86)]=parseFloat(_0xdb02f8)+0x0,_0x12f677[_0x21dec2(0x74)]=parseFloat(_0x28c6f6)+0x0,_0x12f677;});if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]=='English\x20(US)'){var _0x47176e=users['English'];console['log'](_0x47176e);}else{if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]==_0x2c4b5e(0xa7))var _0x47176e=users[_0x2c4b5e(0xa7)];else{if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]==_0x2c4b5e(0xb4))var _0x47176e=users[_0x2c4b5e(0xb4)];else{if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]==_0x2c4b5e(0xcb))var _0x47176e=users[_0x2c4b5e(0xcb)];else{if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]=='French')var _0x47176e=users['French'];else{if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]==_0x2c4b5e(0x6b))var _0x47176e=users[_0x2c4b5e(0xaa)];else{if(_0x1e46e2[0x0]['language']==_0x2c4b5e(0xab))var _0x47176e=users[_0x2c4b5e(0xab)];else{if(_0x1e46e2[0x0][_0x2c4b5e(0x6a)]==_0x2c4b5e(0xc3))var _0x47176e=users[_0x2c4b5e(0xcf)];}}}}}}}_0x360eee[_0x2c4b5e(0x9e)](_0x2c4b5e(0x9d),{'success':_0x4b374d[_0x2c4b5e(0x7d)]('success'),'errors':_0x4b374d[_0x2c4b5e(0x7d)](_0x2c4b5e(0xc7)),'user':_0x41df78,'role':_0x13b7ff,'profile':_0x29d53e,'master_shop':_0x1e46e2,'language':_0x47176e,'agent_id':_0x5cc2e1[_0x2c4b5e(0xbc)],'payment':_0x291574,'staff_arr':_0x5cc2e1});}catch(_0x399d4f){console[_0x2c4b5e(0xcc)](_0x399d4f);}}),router['post'](a0_0x592062(0xbb),auth,async(_0x9a122c,_0xeffa82)=>{const _0x18d863=a0_0x592062;try{const {name:_0x3027f3,address:_0x19464a,mobile:_0x5a64ea,email:_0x134a7c,receivable:_0x1f0a07,payable:_0xbabd55,contactperson:_0x3a4913,landline:_0x12cad5,agent_id:_0x53350d,less_percent:_0x4bc9f6,type_org:_0x45c698,res_address:_0x1e3d7b,business_start_year:_0xdbda5f,credit_limit:_0x24a3e5,term_pay:_0x2bbfb8}=_0x9a122c[_0x18d863(0xc6)];if(typeof _0x4bc9f6==_0x18d863(0x7a))var _0x169c79=[_0x9a122c[_0x18d863(0xc6)][_0x18d863(0xd1)]];else var _0x169c79=[..._0x9a122c[_0x18d863(0xc6)][_0x18d863(0xd1)]];const _0x35e0ae=_0x169c79[_0x18d863(0xa5)](_0x287df4=>{return _0x287df4={'less':_0x287df4};}),_0x3631eb=new customer({'name':_0x3027f3,'address':_0x19464a,'mobile':_0x5a64ea,'email':_0x134a7c,'receivable':_0x1f0a07,'payable':_0xbabd55,'customer_discount':_0x35e0ae,'contactperson':_0x3a4913,'landline':_0x12cad5,'agent_id':_0x53350d,'res_address':_0x1e3d7b,'type_organization':_0x45c698,'business_start_year':_0xdbda5f,'credit_limit':_0x24a3e5,'terms_of_payments':_0x2bbfb8}),_0x975b5e=await _0x3631eb['save']();_0x9a122c[_0x18d863(0x7d)]('success',_0x18d863(0x7f)),_0xeffa82[_0x18d863(0xc4)](_0x18d863(0x88));}catch(_0xeb01ef){console['log'](_0xeb01ef);}}),router['get'](a0_0x592062(0x80),auth,async(_0x4ea31b,_0x2bb172)=>{const _0x34f135=a0_0x592062;try{const {username:_0x5db382,email:_0x1435cb,role:_0x1129e1}=_0x4ea31b['user'],_0x327ed0=_0x4ea31b[_0x34f135(0xb3)],_0x11586f=await profile[_0x34f135(0x95)]({'email':_0x327ed0[_0x34f135(0x85)]}),_0x2973fe=await master_shop[_0x34f135(0xbd)]();console[_0x34f135(0xcc)]('master',_0x2973fe);const _0x337590=_0x4ea31b[_0x34f135(0xb6)]['id'],_0x10f372=await customer[_0x34f135(0xc5)](_0x337590);console[_0x34f135(0xcc)](_0x10f372);if(_0x2973fe[0x0][_0x34f135(0x6a)]=='English\x20(US)'){var _0x232f1b=users['English'];console['log'](_0x232f1b);}else{if(_0x2973fe[0x0][_0x34f135(0x6a)]==_0x34f135(0xa7))var _0x232f1b=users[_0x34f135(0xa7)];else{if(_0x2973fe[0x0][_0x34f135(0x6a)]==_0x34f135(0xb4))var _0x232f1b=users[_0x34f135(0xb4)];else{if(_0x2973fe[0x0]['language']=='Spanish')var _0x232f1b=users[_0x34f135(0xcb)];else{if(_0x2973fe[0x0][_0x34f135(0x6a)]==_0x34f135(0x8c))var _0x232f1b=users[_0x34f135(0x8c)];else{if(_0x2973fe[0x0][_0x34f135(0x6a)]==_0x34f135(0x6b))var _0x232f1b=users[_0x34f135(0xaa)];else{if(_0x2973fe[0x0][_0x34f135(0x6a)]==_0x34f135(0xab))var _0x232f1b=users['Chinese'];else{if(_0x2973fe[0x0]['language']==_0x34f135(0xc3))var _0x232f1b=users[_0x34f135(0xcf)];}}}}}}}_0x2bb172[_0x34f135(0x9e)]('customer_sa',{'success':_0x4ea31b[_0x34f135(0x7d)]('success'),'errors':_0x4ea31b[_0x34f135(0x7d)](_0x34f135(0xc7)),'role':_0x327ed0,'profile':_0x11586f,'user':_0x10f372,'master_shop':_0x2973fe,'language':_0x232f1b});}catch(_0x2d893e){console[_0x34f135(0xcc)](_0x2d893e);}}),router[a0_0x592062(0x92)](a0_0x592062(0x80),auth,async(_0x1a8e48,_0x30ffa6)=>{const _0x2848cc=a0_0x592062;try{const _0x1922c8=_0x1a8e48[_0x2848cc(0xb6)]['id'],_0x1fe152=await customer[_0x2848cc(0xc5)](_0x1922c8),{name:_0x47e91d,address:_0x9bb8fe,mobile:_0x3bc785,email:_0x8e20ee,receivable:_0xbf317b,payable:_0x4671e2,contactperson:_0x5e815e,landline:_0x482def,less_percent_edit:_0x4e2821,edit_type_org:_0x359fd9,edit_res_address:_0xf97242,edit_business_start_year:_0x35a1b9,edit_credit_limit:_0xccd623,edit_term_pay:_0x42ee76}=_0x1a8e48['body'];if(typeof _0x4e2821==_0x2848cc(0x7a))var _0xfc76d1=[_0x1a8e48[_0x2848cc(0xc6)][_0x2848cc(0x94)]];else var _0xfc76d1=[..._0x1a8e48[_0x2848cc(0xc6)]['less_percent_edit']];const _0x25c3ba=_0xfc76d1[_0x2848cc(0xa5)](_0x344b82=>{return _0x344b82={'less':_0x344b82};});_0x1fe152[_0x2848cc(0xc2)]=_0x47e91d,_0x1fe152['address']=_0x9bb8fe,_0x1fe152[_0x2848cc(0x6f)]=_0x3bc785,_0x1fe152['email']=_0x8e20ee,_0x1fe152[_0x2848cc(0x81)]=_0xbf317b,_0x1fe152[_0x2848cc(0xac)]=_0x4671e2,_0x1fe152['contactperson']=_0x5e815e,_0x1fe152[_0x2848cc(0xc0)]=_0x482def,_0x1fe152[_0x2848cc(0xcd)]=_0x25c3ba,_0x1fe152[_0x2848cc(0x66)]=_0x359fd9,_0x1fe152['business_start_year']=_0x35a1b9,_0x1fe152['credit_limit']=_0xccd623,_0x1fe152[_0x2848cc(0xa1)]=_0x42ee76,_0x1fe152[_0x2848cc(0xca)]=_0xf97242;const _0x46a91e=await _0x1fe152[_0x2848cc(0x84)]();_0x1a8e48[_0x2848cc(0x7d)](_0x2848cc(0x9f),_0x2848cc(0xa8)),_0x30ffa6[_0x2848cc(0xc4)](_0x2848cc(0x88));}catch(_0x190785){console['log'](_0x190785);}}),router[a0_0x592062(0xaf)]('/view/payment/:id',auth,async(_0x265a2e,_0x3060bc)=>{const _0x42addd=a0_0x592062;try{const {username:_0x2ef0c1,email:_0x40e541,role:_0x4566a6}=_0x265a2e['user'],_0x371a94=_0x265a2e[_0x42addd(0xb3)],_0x5512cf=await profile['findOne']({'email':_0x371a94['email']}),_0x59fa09=await master_shop[_0x42addd(0xbd)]();console[_0x42addd(0xcc)]('master',_0x59fa09),console['log'](_0x265a2e['params']['id']);const _0x5a8abd=await customer[_0x42addd(0x95)]({'_id':_0x265a2e[_0x42addd(0xb6)]['id']});console[_0x42addd(0xcc)](_0x42addd(0x77),_0x5a8abd);const _0x312a4f=await c_payment_data[_0x42addd(0xbd)]({'customer':_0x5a8abd[_0x42addd(0xc2)]});console[_0x42addd(0xcc)](_0x312a4f);const _0x2fd6a8=await c_payment_data['aggregate']([{'$match':{'customer':_0x5a8abd[_0x42addd(0xc2)]}},{'$match':{'reason':'Sale'}},{'$group':{'_id':_0x42addd(0x8a),'sum':{'$sum':_0x42addd(0xb8)}}}]);console[_0x42addd(0xcc)](_0x42addd(0xbe),_0x2fd6a8);const _0x3a1e43=await c_payment_data[_0x42addd(0xad)]([{'$match':{'customer':_0x5a8abd['name']}},{'$match':{'reason':_0x42addd(0xba)}},{'$group':{'_id':_0x42addd(0x8a),'sum':{'$sum':_0x42addd(0xb8)}}}]);console[_0x42addd(0xcc)](_0x42addd(0xd3),_0x3a1e43);if(_0x59fa09[0x0]['language']==_0x42addd(0x9c)){var _0x29ba56=users[_0x42addd(0xa2)];console['log'](_0x29ba56);}else{if(_0x59fa09[0x0][_0x42addd(0x6a)]==_0x42addd(0xa7))var _0x29ba56=users[_0x42addd(0xa7)];else{if(_0x59fa09[0x0]['language']=='German')var _0x29ba56=users[_0x42addd(0xb4)];else{if(_0x59fa09[0x0][_0x42addd(0x6a)]=='Spanish')var _0x29ba56=users[_0x42addd(0xcb)];else{if(_0x59fa09[0x0]['language']==_0x42addd(0x8c))var _0x29ba56=users[_0x42addd(0x8c)];else{if(_0x59fa09[0x0][_0x42addd(0x6a)]==_0x42addd(0x6b))var _0x29ba56=users[_0x42addd(0xaa)];else{if(_0x59fa09[0x0][_0x42addd(0x6a)]==_0x42addd(0xab))var _0x29ba56=users[_0x42addd(0xab)];else{if(_0x59fa09[0x0][_0x42addd(0x6a)]==_0x42addd(0xc3))var _0x29ba56=users['Arabic'];}}}}}}}_0x3060bc[_0x42addd(0x9e)](_0x42addd(0x79),{'success':_0x265a2e[_0x42addd(0x7d)]('success'),'errors':_0x265a2e[_0x42addd(0x7d)]('errors'),'role':_0x371a94,'profile':_0x5512cf,'payment':_0x312a4f,'payable':_0x2fd6a8,'receivable':_0x3a1e43,'master_shop':_0x59fa09,'language':_0x29ba56});}catch(_0x570ff4){console['log'](_0x570ff4);}}),router[a0_0x592062(0xaf)](a0_0x592062(0x9b),auth,async(_0x3f7965,_0x402400)=>{const _0xaa0845=a0_0x592062;try{const _0x388b8a=new excelJS[(_0xaa0845(0xa6))](),_0x965431=_0x388b8a[_0xaa0845(0x72)]('Customers');return _0x965431[_0xaa0845(0x8b)]=[{'header':'ID','key':_0xaa0845(0x7b),'width':0xa},{'header':'Name','key':'PBrands','width':0xa},{'header':_0xaa0845(0x8d),'key':_0xaa0845(0x70),'width':0xa},{'header':_0xaa0845(0xb5),'key':_0xaa0845(0xb5),'width':0xa},{'header':'address','key':_0xaa0845(0x6d),'width':0xa},{'header':'mobile','key':_0xaa0845(0x6f),'width':0xa},{'header':'email','key':_0xaa0845(0x85),'width':0xa}],_0x402400[_0xaa0845(0xa3)](_0xaa0845(0x97),_0xaa0845(0x93)),_0x402400[_0xaa0845(0xa3)]('Content-Disposition',_0xaa0845(0x71)),_0x388b8a[_0xaa0845(0x7c)]['write'](_0x402400)[_0xaa0845(0x89)](()=>{const _0x54e994=_0xaa0845;_0x402400[_0x54e994(0x8e)](0xc8);});}catch(_0x54b90b){_0x402400[_0xaa0845(0x8e)](0x190)['send']({'errors':_0x54b90b['message']});}});const storage1=multer['diskStorage']({'destination':(_0x56e658,_0x3accd0,_0x635ce5)=>{_0x635ce5(null,'public/Migration');},'filename':(_0x56150b,_0x151bc1,_0x5add14)=>{const _0x3a3bcf=a0_0x592062;_0x5add14(null,Date[_0x3a3bcf(0xb1)]()+_0x151bc1['originalname']);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x592062(0x92)](a0_0x592062(0x87),auth,uploadMigrate['single'](a0_0x592062(0x98)),async(_0x555d91,_0x57b93e)=>{const _0x498aad=a0_0x592062,_0x3da46b=_0x555d91[_0x498aad(0x8f)]['filename'],_0x20258b=await xlsx[_0x498aad(0xd4)]('public/Migration/'+_0x3da46b);let _0x504ec6=_0x20258b[_0x498aad(0xc9)],_0x2842e9=xlsx['utils'][_0x498aad(0x7e)](_0x20258b['Sheets'][_0x504ec6[0x0]]);for(const _0x54a96e of _0x2842e9){const _0x4f9652=_0x54a96e['ID'],_0x186e8=_0x54a96e[_0x498aad(0xa4)],_0xf69806=_0x54a96e['SalesmanCode'],_0xb4ae57=_0x54a96e['SalesmanName'],_0x368a6c=_0x54a96e[_0x498aad(0x6d)],_0x2ad2e6=_0x54a96e[_0x498aad(0x6f)],_0x4b1487=_0x54a96e[_0x498aad(0x85)];try{let _0x542653=await customer[_0x498aad(0x95)]({'name':_0x186e8});if(!_0x542653){const _0x55ba41=new customer({'name':_0x186e8,'ID':_0x4f9652,'SalesmanCode':_0xf69806,'SalesmanName':_0xb4ae57,'address':_0x368a6c,'mobile':_0x2ad2e6,'email':_0x4b1487});_0x542653=await _0x55ba41[_0x498aad(0x84)](),_0x555d91[_0x498aad(0x7d)](_0x498aad(0x9f),_0x186e8+'\x20added\x20successfully');}else _0x555d91['flash'](_0x498aad(0x78),_0x186e8+_0x498aad(0x9a));}catch(_0x5ccea4){_0x57b93e[_0x498aad(0x8e)](0x1f4)[_0x498aad(0xb0)]({'proderror':_0x5ccea4['message'],'aproduct':ProductName});}}_0x57b93e[_0x498aad(0xc4)](_0x498aad(0x88));}),module[a0_0x592062(0xb9)]=router;