const a0_0x437b6c=a0_0x2f00;function a0_0x2f00(_0x493eaa,_0x291789){const _0x529b01=a0_0x529b();return a0_0x2f00=function(_0x2f004a,_0x54139c){_0x2f004a=_0x2f004a-0x128;let _0x4ec828=_0x529b01[_0x2f004a];return _0x4ec828;},a0_0x2f00(_0x493eaa,_0x291789);}(function(_0x214bbb,_0x5ed01c){const _0x2f7a2f=a0_0x2f00,_0x28bfe6=_0x214bbb();while(!![]){try{const _0x2d7a19=parseInt(_0x2f7a2f(0x15e))/0x1+parseInt(_0x2f7a2f(0x14a))/0x2*(parseInt(_0x2f7a2f(0x176))/0x3)+-parseInt(_0x2f7a2f(0x13f))/0x4+-parseInt(_0x2f7a2f(0x16b))/0x5+parseInt(_0x2f7a2f(0x150))/0x6*(parseInt(_0x2f7a2f(0x161))/0x7)+parseInt(_0x2f7a2f(0x158))/0x8+-parseInt(_0x2f7a2f(0x143))/0x9;if(_0x2d7a19===_0x5ed01c)break;else _0x28bfe6['push'](_0x28bfe6['shift']());}catch(_0x33d913){_0x28bfe6['push'](_0x28bfe6['shift']());}}}(a0_0x529b,0x27805));function a0_0x529b(){const _0x48011f=['Arabic','email','master','../models/all_models','params','customer_data','Sale','forEach','PBrands','json','Router','public/Migration','message','German','\x20Failed','originalname','reason','/customer/view','Sale\x20Return','Spanish','find','/view','466584EioRba','SalesmanCode','single','$amount','1866627vTiAFq','../public/language/languages.json','Hindi','success','PUnits','customer_payment','name','2NxIWSc','mobile','aggregate','c_payments','/view/payment/:id','map','1848UBhcKl','file','/products_export_migrate_file','redirect','render','address','$reason','Chinese','1693688yKDAiS','English\x20(US)','Content-Type','get','English','multer','213659pzgKuj','receivable','language','6650JVFYQx','/view/:id','readFile','log','customer_docs','Portuguese','element','findOne','/customer_import_migrate_file','customer\x20add\x20successfully','1203675Iaonni','payable_sum','errors','Arabic\x20(ae)','customer','flash','then','sheet_to_json','customer\x20update\x20successfully','user','receivable_sum','25833NGgZMM','columns','amount','filename','French','xlsx','now','findById','PName','contactperson','Portuguese\x20(BR)','setHeader','send','SalesmanName','post','\x20added\x20successfully','status'];a0_0x529b=function(){return _0x48011f;};return a0_0x529b();}const express=require('express'),app=express(),router=express[a0_0x437b6c(0x133)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x437b6c(0x12c)),auth=require('../middleware/auth'),users=require(a0_0x437b6c(0x144)),excelJS=require('exceljs'),xlsx=require(a0_0x437b6c(0x17b)),multer=require(a0_0x437b6c(0x15d));router[a0_0x437b6c(0x15b)](a0_0x437b6c(0x13e),auth,async(_0x145a2f,_0x20d09b)=>{const _0xd2bef5=a0_0x437b6c;try{const {username:_0x3d4dab,email:_0x276f42,role:_0x5dac64}=_0x145a2f['user'],_0x2eb15d=_0x145a2f[_0xd2bef5(0x174)],_0x323cf4=await profile[_0xd2bef5(0x168)]({'email':_0x2eb15d[_0xd2bef5(0x12a)]}),_0x9da0e9=await master_shop[_0xd2bef5(0x13d)]();console[_0xd2bef5(0x164)](_0xd2bef5(0x12b),_0x9da0e9);const _0x1eb391=await customer[_0xd2bef5(0x13d)](),_0x1c6fc5=await customer[_0xd2bef5(0x14c)]([{'$lookup':{'from':_0xd2bef5(0x14d),'localField':'name','foreignField':'customer','as':_0xd2bef5(0x165)}}]);console[_0xd2bef5(0x164)](_0x1c6fc5);const _0x4cc8d4=_0x1c6fc5[_0xd2bef5(0x14f)](_0x24818c=>{const _0x386f72=_0xd2bef5;console[_0x386f72(0x164)]('data',_0x24818c);var _0x82144e=0x0,_0x43378b=0x0;return _0x24818c[_0x386f72(0x165)][_0x386f72(0x130)](_0x17e018=>{const _0x2ee803=_0x386f72;console[_0x2ee803(0x164)](_0x2ee803(0x167),_0x17e018),_0x17e018[_0x2ee803(0x139)]==_0x2ee803(0x12f)?_0x82144e+=_0x17e018[_0x2ee803(0x178)]:_0x43378b+=_0x17e018['amount'];}),_0x24818c['sale']=parseFloat(_0x82144e)+0x0,_0x24818c['sale_return']=parseFloat(_0x43378b)+0x0,_0x24818c;});console[_0xd2bef5(0x164)]('payment_data',_0x4cc8d4);if(_0x9da0e9[0x0][_0xd2bef5(0x160)]=='English\x20(US)'){var _0x59417d=users[_0xd2bef5(0x15c)];console['log'](_0x59417d);}else{if(_0x9da0e9[0x0]['language']=='Hindi')var _0x59417d=users[_0xd2bef5(0x145)];else{if(_0x9da0e9[0x0][_0xd2bef5(0x160)]==_0xd2bef5(0x136))var _0x59417d=users[_0xd2bef5(0x136)];else{if(_0x9da0e9[0x0][_0xd2bef5(0x160)]==_0xd2bef5(0x13c))var _0x59417d=users[_0xd2bef5(0x13c)];else{if(_0x9da0e9[0x0][_0xd2bef5(0x160)]==_0xd2bef5(0x17a))var _0x59417d=users[_0xd2bef5(0x17a)];else{if(_0x9da0e9[0x0]['language']==_0xd2bef5(0x180))var _0x59417d=users[_0xd2bef5(0x166)];else{if(_0x9da0e9[0x0][_0xd2bef5(0x160)]=='Chinese')var _0x59417d=users['Chinese'];else{if(_0x9da0e9[0x0][_0xd2bef5(0x160)]==_0xd2bef5(0x16e))var _0x59417d=users[_0xd2bef5(0x129)];}}}}}}}_0x20d09b[_0xd2bef5(0x154)](_0xd2bef5(0x16f),{'success':_0x145a2f[_0xd2bef5(0x170)](_0xd2bef5(0x146)),'errors':_0x145a2f[_0xd2bef5(0x170)](_0xd2bef5(0x16d)),'user':_0x1eb391,'role':_0x2eb15d,'profile':_0x323cf4,'payment':_0x4cc8d4,'master_shop':_0x9da0e9,'language':_0x59417d});}catch(_0x158f7a){console[_0xd2bef5(0x164)](_0x158f7a);}}),router[a0_0x437b6c(0x184)]('/view',auth,async(_0x3baf2b,_0x15639a)=>{const _0x885532=a0_0x437b6c;try{const {name:_0x9b488b,address:_0x399be6,mobile:_0x5b738f,email:_0x4804e8,receivable:_0x23177d,payable:_0x216ead,contactperson:_0x308b2b,landline:_0x173756}=_0x3baf2b['body'],_0x1e0de1=new customer({'name':_0x9b488b,'address':_0x399be6,'mobile':_0x5b738f,'email':_0x4804e8,'receivable':_0x23177d,'payable':_0x216ead,'contactperson':_0x308b2b,'landline':_0x173756}),_0x24e13e=await _0x1e0de1['save']();_0x3baf2b[_0x885532(0x170)](_0x885532(0x146),_0x885532(0x16a)),_0x15639a[_0x885532(0x153)](_0x885532(0x13a));}catch(_0x1ecd7b){console[_0x885532(0x164)](_0x1ecd7b);}}),router[a0_0x437b6c(0x15b)](a0_0x437b6c(0x162),auth,async(_0x256390,_0x1e6c8a)=>{const _0x299134=a0_0x437b6c;try{const {username:_0x5599c7,email:_0x598ab0,role:_0x2e39d4}=_0x256390[_0x299134(0x174)],_0x14af85=_0x256390[_0x299134(0x174)],_0x517d47=await profile['findOne']({'email':_0x14af85[_0x299134(0x12a)]}),_0x4294b9=await master_shop['find']();console[_0x299134(0x164)](_0x299134(0x12b),_0x4294b9);const _0x7e184a=_0x256390['params']['id'],_0x1491ab=await customer[_0x299134(0x17d)](_0x7e184a);if(_0x4294b9[0x0]['language']==_0x299134(0x159)){var _0x3787b9=users[_0x299134(0x15c)];console['log'](_0x3787b9);}else{if(_0x4294b9[0x0]['language']==_0x299134(0x145))var _0x3787b9=users[_0x299134(0x145)];else{if(_0x4294b9[0x0][_0x299134(0x160)]==_0x299134(0x136))var _0x3787b9=users[_0x299134(0x136)];else{if(_0x4294b9[0x0][_0x299134(0x160)]==_0x299134(0x13c))var _0x3787b9=users['Spanish'];else{if(_0x4294b9[0x0][_0x299134(0x160)]=='French')var _0x3787b9=users['French'];else{if(_0x4294b9[0x0][_0x299134(0x160)]==_0x299134(0x180))var _0x3787b9=users[_0x299134(0x166)];else{if(_0x4294b9[0x0]['language']==_0x299134(0x157))var _0x3787b9=users[_0x299134(0x157)];else{if(_0x4294b9[0x0][_0x299134(0x160)]==_0x299134(0x16e))var _0x3787b9=users[_0x299134(0x129)];}}}}}}}_0x1e6c8a[_0x299134(0x154)](_0x299134(0x16f),{'success':_0x256390[_0x299134(0x170)](_0x299134(0x146)),'errors':_0x256390[_0x299134(0x170)]('errors'),'role':_0x14af85,'profile':_0x517d47,'user':_0x1491ab,'master_shop':_0x4294b9,'language':_0x3787b9});}catch(_0x3f735a){console[_0x299134(0x164)](_0x3f735a);}}),router[a0_0x437b6c(0x184)]('/view/:id',auth,async(_0x283c2a,_0x4e29c2)=>{const _0x5f281f=a0_0x437b6c;try{const _0x1d5c96=_0x283c2a[_0x5f281f(0x12d)]['id'],_0x116c97=await customer[_0x5f281f(0x17d)](_0x1d5c96),{name:_0x4833c6,address:_0x29ced3,mobile:_0x4fe5af,email:_0x37a70a,receivable:_0x277304,payable:_0x25706b,contactperson:_0x9297e7,landline:_0x1ec06f}=_0x283c2a['body'];_0x116c97[_0x5f281f(0x149)]=_0x4833c6,_0x116c97[_0x5f281f(0x155)]=_0x29ced3,_0x116c97[_0x5f281f(0x14b)]=_0x4fe5af,_0x116c97[_0x5f281f(0x12a)]=_0x37a70a,_0x116c97[_0x5f281f(0x15f)]=_0x277304,_0x116c97['payable']=_0x25706b,_0x116c97[_0x5f281f(0x17f)]=_0x9297e7,_0x116c97['landline']=_0x1ec06f;const _0x28984e=await _0x116c97['save']();_0x283c2a[_0x5f281f(0x170)](_0x5f281f(0x146),_0x5f281f(0x173)),_0x4e29c2['redirect'](_0x5f281f(0x13a));}catch(_0x49fce9){console[_0x5f281f(0x164)](_0x49fce9);}}),router['get'](a0_0x437b6c(0x14e),auth,async(_0x4f96d3,_0x1546a9)=>{const _0x5cf3d9=a0_0x437b6c;try{const {username:_0xfa738e,email:_0x434337,role:_0x415f69}=_0x4f96d3[_0x5cf3d9(0x174)],_0x3b48bd=_0x4f96d3[_0x5cf3d9(0x174)],_0x21e715=await profile['findOne']({'email':_0x3b48bd[_0x5cf3d9(0x12a)]}),_0x80bf94=await master_shop[_0x5cf3d9(0x13d)]();console[_0x5cf3d9(0x164)](_0x5cf3d9(0x12b),_0x80bf94),console[_0x5cf3d9(0x164)](_0x4f96d3[_0x5cf3d9(0x12d)]['id']);const _0x490e02=await customer[_0x5cf3d9(0x168)]({'_id':_0x4f96d3[_0x5cf3d9(0x12d)]['id']});console['log'](_0x5cf3d9(0x12e),_0x490e02);const _0x429434=await c_payment_data['find']({'customer':_0x490e02[_0x5cf3d9(0x149)]});console['log'](_0x429434);const _0x55fa52=await c_payment_data[_0x5cf3d9(0x14c)]([{'$match':{'customer':_0x490e02['name']}},{'$match':{'reason':_0x5cf3d9(0x12f)}},{'$group':{'_id':_0x5cf3d9(0x156),'sum':{'$sum':'$amount'}}}]);console[_0x5cf3d9(0x164)](_0x5cf3d9(0x16c),_0x55fa52);const _0xf5bfbf=await c_payment_data[_0x5cf3d9(0x14c)]([{'$match':{'customer':_0x490e02[_0x5cf3d9(0x149)]}},{'$match':{'reason':_0x5cf3d9(0x13b)}},{'$group':{'_id':_0x5cf3d9(0x156),'sum':{'$sum':_0x5cf3d9(0x142)}}}]);console[_0x5cf3d9(0x164)](_0x5cf3d9(0x175),_0xf5bfbf);if(_0x80bf94[0x0][_0x5cf3d9(0x160)]=='English\x20(US)'){var _0x273f64=users['English'];console[_0x5cf3d9(0x164)](_0x273f64);}else{if(_0x80bf94[0x0]['language']==_0x5cf3d9(0x145))var _0x273f64=users[_0x5cf3d9(0x145)];else{if(_0x80bf94[0x0][_0x5cf3d9(0x160)]==_0x5cf3d9(0x136))var _0x273f64=users[_0x5cf3d9(0x136)];else{if(_0x80bf94[0x0][_0x5cf3d9(0x160)]==_0x5cf3d9(0x13c))var _0x273f64=users[_0x5cf3d9(0x13c)];else{if(_0x80bf94[0x0][_0x5cf3d9(0x160)]==_0x5cf3d9(0x17a))var _0x273f64=users['French'];else{if(_0x80bf94[0x0][_0x5cf3d9(0x160)]=='Portuguese\x20(BR)')var _0x273f64=users['Portuguese'];else{if(_0x80bf94[0x0][_0x5cf3d9(0x160)]=='Chinese')var _0x273f64=users[_0x5cf3d9(0x157)];else{if(_0x80bf94[0x0]['language']=='Arabic\x20(ae)')var _0x273f64=users[_0x5cf3d9(0x129)];}}}}}}}_0x1546a9[_0x5cf3d9(0x154)](_0x5cf3d9(0x148),{'success':_0x4f96d3[_0x5cf3d9(0x170)](_0x5cf3d9(0x146)),'errors':_0x4f96d3[_0x5cf3d9(0x170)](_0x5cf3d9(0x16d)),'role':_0x3b48bd,'profile':_0x21e715,'payment':_0x429434,'payable':_0x55fa52,'receivable':_0xf5bfbf,'master_shop':_0x80bf94,'language':_0x273f64});}catch(_0x495e35){console[_0x5cf3d9(0x164)](_0x495e35);}}),router[a0_0x437b6c(0x15b)](a0_0x437b6c(0x152),auth,async(_0x200bdf,_0x4e6d6e)=>{const _0x338bb8=a0_0x437b6c;try{const _0x1ada5c=new excelJS['Workbook'](),_0x577e87=_0x1ada5c['addWorksheet']('Customers');return _0x577e87[_0x338bb8(0x177)]=[{'header':'ID','key':_0x338bb8(0x17e),'width':0xa},{'header':'Name','key':_0x338bb8(0x131),'width':0xa},{'header':'SalesmanCode','key':_0x338bb8(0x147),'width':0xa},{'header':_0x338bb8(0x183),'key':'SalesmanName','width':0xa},{'header':_0x338bb8(0x155),'key':_0x338bb8(0x155),'width':0xa},{'header':'mobile','key':'mobile','width':0xa},{'header':_0x338bb8(0x12a),'key':_0x338bb8(0x12a),'width':0xa}],_0x4e6d6e[_0x338bb8(0x181)](_0x338bb8(0x15a),'application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x4e6d6e[_0x338bb8(0x181)]('Content-Disposition','attachment;\x20filename=customer_Migration_File.xlsx'),_0x1ada5c['xlsx']['write'](_0x4e6d6e)[_0x338bb8(0x171)](()=>{const _0x7c4205=_0x338bb8;_0x4e6d6e[_0x7c4205(0x128)](0xc8);});}catch(_0x1d9a8d){_0x4e6d6e['status'](0x190)[_0x338bb8(0x182)]({'errors':_0x1d9a8d['message']});}});const storage1=multer['diskStorage']({'destination':(_0x1c1dbe,_0x110201,_0x1dda58)=>{const _0x357a86=a0_0x437b6c;_0x1dda58(null,_0x357a86(0x134));},'filename':(_0x20597a,_0x3f8f74,_0x1676e0)=>{const _0x450cac=a0_0x437b6c;_0x1676e0(null,Date[_0x450cac(0x17c)]()+_0x3f8f74[_0x450cac(0x138)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x437b6c(0x184)](a0_0x437b6c(0x169),auth,uploadMigrate[a0_0x437b6c(0x141)]('customer_product_fule'),async(_0x385dc3,_0x2d1b12)=>{const _0x17414d=a0_0x437b6c,_0x43d97c=_0x385dc3[_0x17414d(0x151)][_0x17414d(0x179)],_0x1be5cc=await xlsx[_0x17414d(0x163)]('public/Migration/'+_0x43d97c);let _0xa6e0b5=_0x1be5cc['SheetNames'],_0x6d8f8d=xlsx['utils'][_0x17414d(0x172)](_0x1be5cc['Sheets'][_0xa6e0b5[0x0]]);for(const _0x4887d6 of _0x6d8f8d){const _0x295ddf=_0x4887d6['ID'],_0x4a25d6=_0x4887d6['Name'],_0x28917b=_0x4887d6[_0x17414d(0x140)],_0x44f201=_0x4887d6[_0x17414d(0x183)],_0x4a6807=_0x4887d6[_0x17414d(0x155)],_0x23243d=_0x4887d6['mobile'],_0x3d09a5=_0x4887d6[_0x17414d(0x12a)];try{let _0x4b496b=await customer[_0x17414d(0x168)]({'name':_0x4a25d6});if(!_0x4b496b){const _0x2607ab=new customer({'name':_0x4a25d6,'ID':_0x295ddf,'SalesmanCode':_0x28917b,'SalesmanName':_0x44f201,'address':_0x4a6807,'mobile':_0x23243d,'email':_0x3d09a5});_0x4b496b=await _0x2607ab['save'](),_0x385dc3[_0x17414d(0x170)](_0x17414d(0x146),_0x4a25d6+_0x17414d(0x185));}else _0x385dc3['flash']('error',_0x4a25d6+_0x17414d(0x137));}catch(_0x1acae4){_0x2d1b12[_0x17414d(0x128)](0x1f4)[_0x17414d(0x132)]({'proderror':_0x1acae4[_0x17414d(0x135)],'aproduct':ProductName});}}_0x2d1b12[_0x17414d(0x153)](_0x17414d(0x13a));}),module['exports']=router;