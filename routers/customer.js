const a0_0x55e581=a0_0x572b;(function(_0x22a013,_0x4878d2){const _0x176f30=a0_0x572b,_0x11f12f=_0x22a013();while(!![]){try{const _0x508a46=parseInt(_0x176f30(0x141))/0x1*(parseInt(_0x176f30(0x146))/0x2)+-parseInt(_0x176f30(0x15f))/0x3*(-parseInt(_0x176f30(0x140))/0x4)+-parseInt(_0x176f30(0x186))/0x5+parseInt(_0x176f30(0x18a))/0x6+-parseInt(_0x176f30(0x12e))/0x7+-parseInt(_0x176f30(0x16e))/0x8+parseInt(_0x176f30(0x174))/0x9;if(_0x508a46===_0x4878d2)break;else _0x11f12f['push'](_0x11f12f['shift']());}catch(_0x55c25c){_0x11f12f['push'](_0x11f12f['shift']());}}}(a0_0x3baf,0xb239d));const express=require(a0_0x55e581(0x138)),app=express(),router=express[a0_0x55e581(0x180)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x55e581(0x133)),auth=require('../middleware/auth'),users=require(a0_0x55e581(0x187)),excelJS=require(a0_0x55e581(0x17a)),xlsx=require(a0_0x55e581(0x156)),multer=require(a0_0x55e581(0x17b));router[a0_0x55e581(0x161)](a0_0x55e581(0x18d),auth,async(_0x1460ee,_0x4fe05d)=>{const _0x2b1052=a0_0x55e581;try{const {username:_0x73675d,email:_0x1a29a6,role:_0x35ab3f}=_0x1460ee[_0x2b1052(0x188)],_0xdd103a=_0x1460ee[_0x2b1052(0x188)],_0x9cc990=await profile[_0x2b1052(0x16f)]({'email':_0xdd103a['email']}),_0x364ac0=await master_shop[_0x2b1052(0x189)]();console[_0x2b1052(0x181)]('master',_0x364ac0);const _0x20c3ab=await customer['find'](),_0x419901=await customer[_0x2b1052(0x149)]([{'$lookup':{'from':'c_payments','localField':_0x2b1052(0x167),'foreignField':_0x2b1052(0x171),'as':_0x2b1052(0x151)}}]);console[_0x2b1052(0x181)](_0x419901);const _0x1d6970=_0x419901[_0x2b1052(0x158)](_0x395d6b=>{const _0x27273c=_0x2b1052;console[_0x27273c(0x181)](_0x27273c(0x137),_0x395d6b);var _0x448d0f=0x0,_0x384487=0x0;return _0x395d6b[_0x27273c(0x151)][_0x27273c(0x177)](_0x21dfad=>{const _0xa6578c=_0x27273c;console[_0xa6578c(0x181)](_0xa6578c(0x13f),_0x21dfad),_0x21dfad[_0xa6578c(0x175)]==_0xa6578c(0x135)?_0x448d0f+=_0x21dfad[_0xa6578c(0x183)]:_0x384487+=_0x21dfad['amount'];}),_0x395d6b[_0x27273c(0x172)]=parseFloat(_0x448d0f)+0x0,_0x395d6b[_0x27273c(0x13d)]=parseFloat(_0x384487)+0x0,_0x395d6b;});console[_0x2b1052(0x181)](_0x2b1052(0x182),_0x1d6970);if(_0x364ac0[0x0][_0x2b1052(0x164)]==_0x2b1052(0x132)){var _0x49af7c=users[_0x2b1052(0x18e)];console[_0x2b1052(0x181)](_0x49af7c);}else{if(_0x364ac0[0x0]['language']==_0x2b1052(0x15a))var _0x49af7c=users[_0x2b1052(0x15a)];else{if(_0x364ac0[0x0][_0x2b1052(0x164)]==_0x2b1052(0x139))var _0x49af7c=users[_0x2b1052(0x139)];else{if(_0x364ac0[0x0]['language']==_0x2b1052(0x169))var _0x49af7c=users[_0x2b1052(0x169)];else{if(_0x364ac0[0x0]['language']==_0x2b1052(0x18c))var _0x49af7c=users['French'];else{if(_0x364ac0[0x0][_0x2b1052(0x164)]==_0x2b1052(0x178))var _0x49af7c=users[_0x2b1052(0x155)];else{if(_0x364ac0[0x0][_0x2b1052(0x164)]=='Chinese')var _0x49af7c=users[_0x2b1052(0x17f)];else{if(_0x364ac0[0x0]['language']==_0x2b1052(0x193))var _0x49af7c=users[_0x2b1052(0x13a)];}}}}}}}_0x4fe05d['render'](_0x2b1052(0x171),{'success':_0x1460ee[_0x2b1052(0x15e)](_0x2b1052(0x148)),'errors':_0x1460ee[_0x2b1052(0x15e)](_0x2b1052(0x18f)),'user':_0x20c3ab,'role':_0xdd103a,'profile':_0x9cc990,'payment':_0x1d6970,'master_shop':_0x364ac0,'language':_0x49af7c});}catch(_0x9c4e5d){console[_0x2b1052(0x181)](_0x9c4e5d);}}),router[a0_0x55e581(0x152)](a0_0x55e581(0x18d),auth,async(_0x5bc501,_0x4fa5b1)=>{const _0x581fb9=a0_0x55e581;try{const {name:_0x51a66e,address:_0x630f00,mobile:_0x22dfa7,email:_0x5bef86,receivable:_0x2d884f,payable:_0x477e17,contactperson:_0x1d2b9c,landline:_0x35e887}=_0x5bc501[_0x581fb9(0x14a)],_0x5ccb72=new customer({'name':_0x51a66e,'address':_0x630f00,'mobile':_0x22dfa7,'email':_0x5bef86,'receivable':_0x2d884f,'payable':_0x477e17,'contactperson':_0x1d2b9c,'landline':_0x35e887}),_0x1d4404=await _0x5ccb72[_0x581fb9(0x170)]();_0x5bc501[_0x581fb9(0x15e)](_0x581fb9(0x148),'customer\x20add\x20successfully'),_0x4fa5b1['redirect'](_0x581fb9(0x166));}catch(_0x5aab3d){console[_0x581fb9(0x181)](_0x5aab3d);}}),router[a0_0x55e581(0x161)](a0_0x55e581(0x17e),auth,async(_0x25ad5a,_0x134942)=>{const _0x4cdf40=a0_0x55e581;try{const {username:_0x437703,email:_0x3db775,role:_0x332604}=_0x25ad5a['user'],_0x4b60e5=_0x25ad5a[_0x4cdf40(0x188)],_0x2a48fd=await profile['findOne']({'email':_0x4b60e5[_0x4cdf40(0x130)]}),_0xd9b704=await master_shop['find']();console['log'](_0x4cdf40(0x142),_0xd9b704);const _0x4845ff=_0x25ad5a[_0x4cdf40(0x179)]['id'],_0x2dfd67=await customer[_0x4cdf40(0x14d)](_0x4845ff);if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x132)){var _0x336949=users[_0x4cdf40(0x18e)];console[_0x4cdf40(0x181)](_0x336949);}else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x15a))var _0x336949=users[_0x4cdf40(0x15a)];else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x139))var _0x336949=users[_0x4cdf40(0x139)];else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x169))var _0x336949=users[_0x4cdf40(0x169)];else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x18c))var _0x336949=users[_0x4cdf40(0x18c)];else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x178))var _0x336949=users['Portuguese'];else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]==_0x4cdf40(0x17f))var _0x336949=users[_0x4cdf40(0x17f)];else{if(_0xd9b704[0x0][_0x4cdf40(0x164)]=='Arabic\x20(ae)')var _0x336949=users[_0x4cdf40(0x13a)];}}}}}}}_0x134942['render']('customer',{'success':_0x25ad5a[_0x4cdf40(0x15e)](_0x4cdf40(0x148)),'errors':_0x25ad5a[_0x4cdf40(0x15e)](_0x4cdf40(0x18f)),'role':_0x4b60e5,'profile':_0x2a48fd,'user':_0x2dfd67,'master_shop':_0xd9b704,'language':_0x336949});}catch(_0x56d251){console['log'](_0x56d251);}}),router['post']('/view/:id',auth,async(_0x5611e8,_0x12a353)=>{const _0x25e79c=a0_0x55e581;try{const _0x1ae335=_0x5611e8[_0x25e79c(0x179)]['id'],_0x56b7da=await customer[_0x25e79c(0x14d)](_0x1ae335),{name:_0x2e3733,address:_0x74c5b7,mobile:_0x756e4c,email:_0x1a9b10,receivable:_0x285bb8,payable:_0x58933d,contactperson:_0x327d67,landline:_0x433f7b}=_0x5611e8[_0x25e79c(0x14a)];_0x56b7da[_0x25e79c(0x167)]=_0x2e3733,_0x56b7da[_0x25e79c(0x150)]=_0x74c5b7,_0x56b7da[_0x25e79c(0x134)]=_0x756e4c,_0x56b7da[_0x25e79c(0x130)]=_0x1a9b10,_0x56b7da[_0x25e79c(0x194)]=_0x285bb8,_0x56b7da[_0x25e79c(0x18b)]=_0x58933d,_0x56b7da[_0x25e79c(0x192)]=_0x327d67,_0x56b7da['landline']=_0x433f7b;const _0x2970f6=await _0x56b7da[_0x25e79c(0x170)]();_0x5611e8[_0x25e79c(0x15e)](_0x25e79c(0x148),_0x25e79c(0x176)),_0x12a353[_0x25e79c(0x16c)](_0x25e79c(0x166));}catch(_0x5603db){console['log'](_0x5603db);}}),router[a0_0x55e581(0x161)]('/view/payment/:id',auth,async(_0x51d14b,_0x4560b6)=>{const _0x36abaa=a0_0x55e581;try{const {username:_0x352b18,email:_0x306642,role:_0x52c452}=_0x51d14b[_0x36abaa(0x188)],_0x8f2f9=_0x51d14b[_0x36abaa(0x188)],_0x5d1574=await profile[_0x36abaa(0x16f)]({'email':_0x8f2f9[_0x36abaa(0x130)]}),_0x33c0dd=await master_shop[_0x36abaa(0x189)]();console[_0x36abaa(0x181)](_0x36abaa(0x142),_0x33c0dd),console['log'](_0x51d14b[_0x36abaa(0x179)]['id']);const _0x47bfac=await customer[_0x36abaa(0x16f)]({'_id':_0x51d14b[_0x36abaa(0x179)]['id']});console['log']('customer_data',_0x47bfac);const _0x21b6d8=await c_payment_data[_0x36abaa(0x189)]({'customer':_0x47bfac['name']});console['log'](_0x21b6d8);const _0x5dea7b=await c_payment_data[_0x36abaa(0x149)]([{'$match':{'customer':_0x47bfac[_0x36abaa(0x167)]}},{'$match':{'reason':_0x36abaa(0x135)}},{'$group':{'_id':_0x36abaa(0x13b),'sum':{'$sum':_0x36abaa(0x16b)}}}]);console['log'](_0x36abaa(0x14c),_0x5dea7b);const _0x4a6876=await c_payment_data['aggregate']([{'$match':{'customer':_0x47bfac[_0x36abaa(0x167)]}},{'$match':{'reason':_0x36abaa(0x191)}},{'$group':{'_id':_0x36abaa(0x13b),'sum':{'$sum':_0x36abaa(0x16b)}}}]);console[_0x36abaa(0x181)]('receivable_sum',_0x4a6876);if(_0x33c0dd[0x0][_0x36abaa(0x164)]==_0x36abaa(0x132)){var _0x12fa3d=users[_0x36abaa(0x18e)];console[_0x36abaa(0x181)](_0x12fa3d);}else{if(_0x33c0dd[0x0][_0x36abaa(0x164)]==_0x36abaa(0x15a))var _0x12fa3d=users[_0x36abaa(0x15a)];else{if(_0x33c0dd[0x0][_0x36abaa(0x164)]=='German')var _0x12fa3d=users[_0x36abaa(0x139)];else{if(_0x33c0dd[0x0][_0x36abaa(0x164)]==_0x36abaa(0x169))var _0x12fa3d=users['Spanish'];else{if(_0x33c0dd[0x0][_0x36abaa(0x164)]==_0x36abaa(0x18c))var _0x12fa3d=users[_0x36abaa(0x18c)];else{if(_0x33c0dd[0x0][_0x36abaa(0x164)]=='Portuguese\x20(BR)')var _0x12fa3d=users[_0x36abaa(0x155)];else{if(_0x33c0dd[0x0][_0x36abaa(0x164)]==_0x36abaa(0x17f))var _0x12fa3d=users[_0x36abaa(0x17f)];else{if(_0x33c0dd[0x0]['language']==_0x36abaa(0x193))var _0x12fa3d=users[_0x36abaa(0x13a)];}}}}}}}_0x4560b6[_0x36abaa(0x14e)](_0x36abaa(0x168),{'success':_0x51d14b[_0x36abaa(0x15e)]('success'),'errors':_0x51d14b[_0x36abaa(0x15e)](_0x36abaa(0x18f)),'role':_0x8f2f9,'profile':_0x5d1574,'payment':_0x21b6d8,'payable':_0x5dea7b,'receivable':_0x4a6876,'master_shop':_0x33c0dd,'language':_0x12fa3d});}catch(_0x56546e){console['log'](_0x56546e);}}),router['get']('/products_export_migrate_file',auth,async(_0x4c938c,_0x549dcd)=>{const _0x3b321b=a0_0x55e581;try{const _0x48ca9a=new excelJS['Workbook'](),_0x8e385c=_0x48ca9a[_0x3b321b(0x144)](_0x3b321b(0x160));return _0x8e385c['columns']=[{'header':'ID','key':_0x3b321b(0x153),'width':0xa},{'header':_0x3b321b(0x154),'key':'PBrands','width':0xa},{'header':'SalesmanCode','key':_0x3b321b(0x12f),'width':0xa},{'header':'SalesmanName','key':_0x3b321b(0x14f),'width':0xa},{'header':'address','key':'address','width':0xa},{'header':'mobile','key':'mobile','width':0xa},{'header':_0x3b321b(0x130),'key':_0x3b321b(0x130),'width':0xa}],_0x549dcd[_0x3b321b(0x184)]('Content-Type',_0x3b321b(0x13e)),_0x549dcd[_0x3b321b(0x184)](_0x3b321b(0x185),_0x3b321b(0x16a)),_0x48ca9a[_0x3b321b(0x156)]['write'](_0x549dcd)[_0x3b321b(0x159)](()=>{const _0x2a8b14=_0x3b321b;_0x549dcd[_0x2a8b14(0x136)](0xc8);});}catch(_0x5d868f){_0x549dcd[_0x3b321b(0x136)](0x190)[_0x3b321b(0x143)]({'errors':_0x5d868f['message']});}});function a0_0x572b(_0x264931,_0xb0f60f){const _0x3baf5a=a0_0x3baf();return a0_0x572b=function(_0x572ba9,_0xffe436){_0x572ba9=_0x572ba9-0x12e;let _0x5de567=_0x3baf5a[_0x572ba9];return _0x5de567;},a0_0x572b(_0x264931,_0xb0f60f);}const storage1=multer[a0_0x55e581(0x17d)]({'destination':(_0x356c7a,_0x28fe48,_0x552e6c)=>{const _0x3a7a2a=a0_0x55e581;_0x552e6c(null,_0x3a7a2a(0x15c));},'filename':(_0x8310da,_0x1c21d2,_0x95c468)=>{const _0xb98535=a0_0x55e581;_0x95c468(null,Date[_0xb98535(0x17c)]()+_0x1c21d2[_0xb98535(0x14b)]);}}),uploadMigrate=multer({'storage':storage1});function a0_0x3baf(){const _0x34b6f3=['address','customer_docs','post','PName','Name','Portuguese','xlsx','sheet_to_json','map','then','Hindi','utils','public/Migration','public/Migration/','flash','420Vdyjqc','Customers','get','SheetNames','exports','language','\x20Failed','/customer/view','name','customer_payment','Spanish','attachment;\x20filename=customer_Migration_File.xlsx','$amount','redirect','SalesmanCode','7049648ARRhBq','findOne','save','customer','sale','Sheets','23650668lfQxrk','reason','customer\x20update\x20successfully','forEach','Portuguese\x20(BR)','params','exceljs','multer','now','diskStorage','/view/:id','Chinese','Router','log','payment_data','amount','setHeader','Content-Disposition','3315285XnCMsy','../public/language/languages.json','user','find','646080UOTINf','payable','French','/view','English','errors','file','Sale\x20Return','contactperson','Arabic\x20(ae)','receivable','9249338KENmeG','PUnits','email','filename','English\x20(US)','../models/all_models','mobile','Sale','status','data','express','German','Arabic','$reason','customer_product_fule','sale_return','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','element','9524OlDSNQ','2sCaoWd','master','send','addWorksheet','readFile','526738xHQbci','single','success','aggregate','body','originalname','payable_sum','findById','render','SalesmanName'];a0_0x3baf=function(){return _0x34b6f3;};return a0_0x3baf();}router['post']('/customer_import_migrate_file',auth,uploadMigrate[a0_0x55e581(0x147)](a0_0x55e581(0x13c)),async(_0xb144ad,_0x45f788)=>{const _0x5ab857=a0_0x55e581,_0x54dd81=_0xb144ad[_0x5ab857(0x190)][_0x5ab857(0x131)],_0x529b7d=await xlsx[_0x5ab857(0x145)](_0x5ab857(0x15d)+_0x54dd81);let _0x3bd8b=_0x529b7d[_0x5ab857(0x162)],_0x1a378c=xlsx[_0x5ab857(0x15b)][_0x5ab857(0x157)](_0x529b7d[_0x5ab857(0x173)][_0x3bd8b[0x0]]);for(const _0x436034 of _0x1a378c){const _0x5cff33=_0x436034['ID'],_0x21b780=_0x436034['Name'],_0x4dd867=_0x436034[_0x5ab857(0x16d)],_0x2f7feb=_0x436034['SalesmanName'],_0x585a5f=_0x436034[_0x5ab857(0x150)],_0x1d32af=_0x436034[_0x5ab857(0x134)],_0x323f70=_0x436034['email'];try{let _0x5d2fb2=await customer[_0x5ab857(0x16f)]({'name':_0x21b780});if(!_0x5d2fb2){const _0x17066d=new customer({'name':_0x21b780,'ID':_0x5cff33,'SalesmanCode':_0x4dd867,'SalesmanName':_0x2f7feb,'address':_0x585a5f,'mobile':_0x1d32af,'email':_0x323f70});_0x5d2fb2=await _0x17066d[_0x5ab857(0x170)](),_0xb144ad['flash'](_0x5ab857(0x148),_0x21b780+'\x20added\x20successfully');}else _0xb144ad[_0x5ab857(0x15e)]('error',_0x21b780+_0x5ab857(0x165));}catch(_0x50f42f){_0x45f788[_0x5ab857(0x136)](0x1f4)['json']({'proderror':_0x50f42f['message'],'aproduct':ProductName});}}_0x45f788[_0x5ab857(0x16c)](_0x5ab857(0x166));}),module[a0_0x55e581(0x163)]=router;