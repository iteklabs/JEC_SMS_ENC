const a0_0x56d657=a0_0x2910;(function(_0x47b6d7,_0x3e4a3d){const _0x3022cd=a0_0x2910,_0x341889=_0x47b6d7();while(!![]){try{const _0x2b75b4=-parseInt(_0x3022cd(0x18e))/0x1+parseInt(_0x3022cd(0x1ab))/0x2+parseInt(_0x3022cd(0x19b))/0x3+-parseInt(_0x3022cd(0x18b))/0x4*(parseInt(_0x3022cd(0x1b3))/0x5)+-parseInt(_0x3022cd(0x1a6))/0x6+-parseInt(_0x3022cd(0x1bc))/0x7*(-parseInt(_0x3022cd(0x1a9))/0x8)+-parseInt(_0x3022cd(0x184))/0x9*(-parseInt(_0x3022cd(0x181))/0xa);if(_0x2b75b4===_0x3e4a3d)break;else _0x341889['push'](_0x341889['shift']());}catch(_0x4e183c){_0x341889['push'](_0x341889['shift']());}}}(a0_0x3505,0x4ef9d));const express=require(a0_0x56d657(0x1b8)),app=express(),router=express[a0_0x56d657(0x189)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x56d657(0x18c)),auth=require(a0_0x56d657(0x18a)),users=require(a0_0x56d657(0x1b0));function a0_0x3505(){const _0x2f093e=['language','Chinese','216315NpSHnZ','user','Hindi','English','findById','expenses_type','params','countDocuments','findByIdAndUpdate','/all_expenses/view','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','3519096mCWBQy','Spanish','success','857656mkNDGg','master','855650nwcqhb','German','Portuguese\x20(BR)','add_expenses','/all_expenses/type','../public/language/languages.json','find','name','35HMFAVv','Portuguese','/view/:id','expenses\x20data\x20update\x20successfully','save','express','French','flash','email','21kLspYz','body','Arabic\x20(ae)','redirect','2264370aujHQH','/view/add_expenses','/type','18uqMFdl','render','updateMany','log','get','Router','../middleware/auth','38664sOSSEL','../models/all_models','findOne','296762JlbrfI','English\x20(US)','Arabic','errors','\x20expenses\x20is\x20add\x20successfully','/view','/type/:id','post','all','findByIdAndDelete','map'];a0_0x3505=function(){return _0x2f093e;};return a0_0x3505();}function a0_0x2910(_0x11d2d6,_0x3b70c9){const _0x35059d=a0_0x3505();return a0_0x2910=function(_0x291085,_0x159a0e){_0x291085=_0x291085-0x181;let _0x277334=_0x35059d[_0x291085];return _0x277334;},a0_0x2910(_0x11d2d6,_0x3b70c9);}router[a0_0x56d657(0x188)](a0_0x56d657(0x183),auth,async(_0x3e8cad,_0x501ad1)=>{const _0x291e4e=a0_0x56d657;try{const {username:_0x587d78,email:_0x17bede,role:_0x258d67}=_0x3e8cad['user'],_0x3ad3a4=_0x3e8cad[_0x291e4e(0x19c)],_0x23f1f7=await profile[_0x291e4e(0x18d)]({'email':_0x3ad3a4[_0x291e4e(0x1bb)]}),_0x700f24=await master_shop['find']();if(_0x700f24[0x0][_0x291e4e(0x199)]=='English\x20(US)'){var _0x27b589=users[_0x291e4e(0x19e)];console[_0x291e4e(0x187)](_0x27b589);}else{if(_0x700f24[0x0][_0x291e4e(0x199)]=='Hindi')var _0x27b589=users[_0x291e4e(0x19d)];else{if(_0x700f24[0x0]['language']==_0x291e4e(0x1ac))var _0x27b589=users['German'];else{if(_0x700f24[0x0]['language']=='Spanish')var _0x27b589=users[_0x291e4e(0x1a7)];else{if(_0x700f24[0x0][_0x291e4e(0x199)]==_0x291e4e(0x1b9))var _0x27b589=users[_0x291e4e(0x1b9)];else{if(_0x700f24[0x0]['language']==_0x291e4e(0x1ad))var _0x27b589=users[_0x291e4e(0x1b4)];else{if(_0x700f24[0x0][_0x291e4e(0x199)]==_0x291e4e(0x19a))var _0x27b589=users[_0x291e4e(0x19a)];else{if(_0x700f24[0x0]['language']==_0x291e4e(0x1be))var _0x27b589=users[_0x291e4e(0x190)];}}}}}}}const _0x502f56=await expenses_type['find']({}),_0x12a4b9=await Promise[_0x291e4e(0x196)](_0x502f56[_0x291e4e(0x198)](async _0x5636ad=>{const _0x5455b6=_0x291e4e,_0x16f1dc=await all_expenses[_0x5455b6(0x1a2)]({'type':_0x5636ad[_0x5455b6(0x1b2)]});return{..._0x5636ad['toJSON'](),'count':_0x16f1dc};}));_0x501ad1[_0x291e4e(0x185)](_0x291e4e(0x1a0),{'success':_0x3e8cad[_0x291e4e(0x1ba)]('success'),'errors':_0x3e8cad[_0x291e4e(0x1ba)](_0x291e4e(0x191)),'role':_0x3ad3a4,'profile':_0x23f1f7,'master_shop':_0x700f24,'language':_0x27b589,'expensesData':_0x12a4b9});}catch(_0x3d6ab7){console[_0x291e4e(0x187)](_0x3d6ab7);}}),router[a0_0x56d657(0x195)](a0_0x56d657(0x183),auth,async(_0x3b9c61,_0x3b1e0d)=>{const _0x35b71=a0_0x56d657;try{const {name:_0x44e3d3}=_0x3b9c61[_0x35b71(0x1bd)],_0x53225e=new expenses_type({'name':_0x44e3d3}),_0x3da54c=await expenses_type['findOne']({'name':_0x44e3d3});if(_0x3da54c)_0x3b9c61['flash'](_0x35b71(0x191),_0x44e3d3+_0x35b71(0x1a5));else{_0x3b9c61['flash']('success',_0x44e3d3+_0x35b71(0x192));const _0x454856=await _0x53225e['save']();}_0x3b1e0d[_0x35b71(0x1bf)](_0x35b71(0x1af));}catch(_0x54f8cc){console[_0x35b71(0x187)](_0x54f8cc);}}),router['post'](a0_0x56d657(0x194),auth,async(_0x43e548,_0xd314a8)=>{const _0x504f2c=a0_0x56d657;try{const _0x2ac474=_0x43e548[_0x504f2c(0x1a1)]['id'],_0x49802d=await expenses_type[_0x504f2c(0x19f)](_0x2ac474),_0x530282=await expenses_type[_0x504f2c(0x1a3)](_0x2ac474,_0x43e548['body']),_0x5ad839=await all_expenses[_0x504f2c(0x186)]({'type':_0x49802d[_0x504f2c(0x1b2)]},{'$set':{'type':_0x43e548[_0x504f2c(0x1bd)][_0x504f2c(0x1b2)]}});_0x43e548[_0x504f2c(0x1ba)](_0x504f2c(0x1a8),_0x504f2c(0x1b6)),_0xd314a8[_0x504f2c(0x1bf)](_0x504f2c(0x1af));}catch(_0x1f27a1){console[_0x504f2c(0x187)](_0x1f27a1);}}),router['get']('/type/delete/:id',auth,async(_0x7d0359,_0x48f948)=>{const _0x5e9743=a0_0x56d657;try{const _0x574c49=_0x7d0359['params']['id'],_0x471b8b=await expenses_type[_0x5e9743(0x197)](_0x574c49);_0x7d0359[_0x5e9743(0x1ba)](_0x5e9743(0x1a8),'Expenses\x20data\x20delete\x20successfully'),_0x48f948[_0x5e9743(0x1bf)](_0x5e9743(0x1af));}catch(_0x2e9a2c){console[_0x5e9743(0x187)](_0x2e9a2c);}}),router[a0_0x56d657(0x188)](a0_0x56d657(0x193),auth,async(_0x565897,_0x47b9dd)=>{const _0x11fc93=a0_0x56d657;try{const {username:_0x58495f,email:_0x4586b2,role:_0x5d9899}=_0x565897[_0x11fc93(0x19c)],_0x4a6642=_0x565897[_0x11fc93(0x19c)],_0x5ccec5=await profile[_0x11fc93(0x18d)]({'email':_0x4a6642[_0x11fc93(0x1bb)]}),_0x1525f0=await master_shop['find']();console[_0x11fc93(0x187)](_0x11fc93(0x1aa),_0x1525f0);const _0x47f3fa=await expenses_type['find']({}),_0x8151eb=await all_expenses['find']({});console[_0x11fc93(0x187)](_0x8151eb);if(_0x1525f0[0x0]['language']==_0x11fc93(0x18f)){var _0x5960e3=users[_0x11fc93(0x19e)];console[_0x11fc93(0x187)](_0x5960e3);}else{if(_0x1525f0[0x0][_0x11fc93(0x199)]=='Hindi')var _0x5960e3=users[_0x11fc93(0x19d)];else{if(_0x1525f0[0x0][_0x11fc93(0x199)]==_0x11fc93(0x1ac))var _0x5960e3=users[_0x11fc93(0x1ac)];else{if(_0x1525f0[0x0][_0x11fc93(0x199)]=='Spanish')var _0x5960e3=users['Spanish'];else{if(_0x1525f0[0x0][_0x11fc93(0x199)]=='French')var _0x5960e3=users[_0x11fc93(0x1b9)];else{if(_0x1525f0[0x0][_0x11fc93(0x199)]==_0x11fc93(0x1ad))var _0x5960e3=users[_0x11fc93(0x1b4)];else{if(_0x1525f0[0x0][_0x11fc93(0x199)]==_0x11fc93(0x19a))var _0x5960e3=users[_0x11fc93(0x19a)];else{if(_0x1525f0[0x0][_0x11fc93(0x199)]==_0x11fc93(0x1be))var _0x5960e3=users[_0x11fc93(0x190)];}}}}}}}_0x47b9dd[_0x11fc93(0x185)]('expenses',{'success':_0x565897[_0x11fc93(0x1ba)]('success'),'errors':_0x565897['flash'](_0x11fc93(0x191)),'role':_0x4a6642,'profile':_0x5ccec5,'data':_0x47f3fa,'expenses_data':_0x8151eb,'master_shop':_0x1525f0,'language':_0x5960e3});}catch(_0x177cba){console[_0x11fc93(0x187)](_0x177cba);}}),router['get'](a0_0x56d657(0x182),auth,async(_0x277dac,_0x4f3e33)=>{const _0x313d08=a0_0x56d657;try{const {username:_0x45733a,email:_0x1aef84,role:_0xe1167a}=_0x277dac[_0x313d08(0x19c)],_0x5449c1=_0x277dac[_0x313d08(0x19c)],_0xeca961=await profile[_0x313d08(0x18d)]({'email':_0x5449c1[_0x313d08(0x1bb)]}),_0x3d0947=await master_shop[_0x313d08(0x1b1)]();console['log'](_0x313d08(0x1aa),_0x3d0947);const _0x551a2a=await expenses_type[_0x313d08(0x1b1)]({});if(_0x3d0947[0x0][_0x313d08(0x199)]==_0x313d08(0x18f)){var _0x20522c=users[_0x313d08(0x19e)];console[_0x313d08(0x187)](_0x20522c);}else{if(_0x3d0947[0x0]['language']==_0x313d08(0x19d))var _0x20522c=users['Hindi'];else{if(_0x3d0947[0x0]['language']==_0x313d08(0x1ac))var _0x20522c=users[_0x313d08(0x1ac)];else{if(_0x3d0947[0x0][_0x313d08(0x199)]==_0x313d08(0x1a7))var _0x20522c=users[_0x313d08(0x1a7)];else{if(_0x3d0947[0x0][_0x313d08(0x199)]=='French')var _0x20522c=users[_0x313d08(0x1b9)];else{if(_0x3d0947[0x0][_0x313d08(0x199)]=='Portuguese\x20(BR)')var _0x20522c=users[_0x313d08(0x1b4)];else{if(_0x3d0947[0x0][_0x313d08(0x199)]==_0x313d08(0x19a))var _0x20522c=users[_0x313d08(0x19a)];else{if(_0x3d0947[0x0]['language']==_0x313d08(0x1be))var _0x20522c=users[_0x313d08(0x190)];}}}}}}}_0x4f3e33['render'](_0x313d08(0x1ae),{'success':_0x277dac[_0x313d08(0x1ba)](_0x313d08(0x1a8)),'errors':_0x277dac[_0x313d08(0x1ba)](_0x313d08(0x191)),'role':_0x5449c1,'profile':_0xeca961,'data':_0x551a2a,'master_shop':_0x3d0947,'language':_0x20522c});}catch(_0x3f7710){console['log'](_0x3f7710);}}),router['post'](a0_0x56d657(0x182),auth,async(_0x3e84a3,_0xd70acd)=>{const _0x324ad3=a0_0x56d657;try{const {type:_0x36ece0,date:_0x5f09f1,amount:_0x1db772,note:_0x31d0b4}=_0x3e84a3['body'],_0x2672c4=new all_expenses({'type':_0x36ece0,'date':_0x5f09f1,'amount':_0x1db772,'note':_0x31d0b4}),_0x57f513=await _0x2672c4[_0x324ad3(0x1b7)]();_0xd70acd[_0x324ad3(0x1bf)](_0x324ad3(0x1a4));}catch(_0x2406c8){console[_0x324ad3(0x187)](_0x2406c8);}}),router[a0_0x56d657(0x188)]('/view/:id',auth,async(_0xe8ae9,_0x1076c4)=>{const _0x5d90ba=a0_0x56d657;try{const {username:_0x3b794e,email:_0x214c22,role:_0x10e134}=_0xe8ae9[_0x5d90ba(0x19c)],_0x7d2bea=_0xe8ae9[_0x5d90ba(0x19c)],_0x2ae19f=await profile[_0x5d90ba(0x18d)]({'email':_0x7d2bea[_0x5d90ba(0x1bb)]}),_0x8473fc=await master_shop[_0x5d90ba(0x1b1)]();console[_0x5d90ba(0x187)](_0x5d90ba(0x1aa),_0x8473fc);const _0x44d8f2=await expenses_type[_0x5d90ba(0x1b1)]({});console[_0x5d90ba(0x187)](_0x44d8f2);const _0x33dab2=await all_expenses[_0x5d90ba(0x19f)](_0xe8ae9['params']['id']);console[_0x5d90ba(0x187)](_0x33dab2);if(_0x8473fc[0x0][_0x5d90ba(0x199)]=='English\x20(US)'){var _0x3696f5=users[_0x5d90ba(0x19e)];console['log'](_0x3696f5);}else{if(_0x8473fc[0x0][_0x5d90ba(0x199)]=='Hindi')var _0x3696f5=users['Hindi'];else{if(_0x8473fc[0x0][_0x5d90ba(0x199)]==_0x5d90ba(0x1ac))var _0x3696f5=users[_0x5d90ba(0x1ac)];else{if(_0x8473fc[0x0][_0x5d90ba(0x199)]=='Spanish')var _0x3696f5=users[_0x5d90ba(0x1a7)];else{if(_0x8473fc[0x0][_0x5d90ba(0x199)]==_0x5d90ba(0x1b9))var _0x3696f5=users[_0x5d90ba(0x1b9)];else{if(_0x8473fc[0x0]['language']=='Portuguese\x20(BR)')var _0x3696f5=users[_0x5d90ba(0x1b4)];else{if(_0x8473fc[0x0][_0x5d90ba(0x199)]==_0x5d90ba(0x19a))var _0x3696f5=users[_0x5d90ba(0x19a)];else{if(_0x8473fc[0x0][_0x5d90ba(0x199)]==_0x5d90ba(0x1be))var _0x3696f5=users['Arabic'];}}}}}}}_0x1076c4[_0x5d90ba(0x185)]('edit_expenses',{'success':_0xe8ae9[_0x5d90ba(0x1ba)](_0x5d90ba(0x1a8)),'errors':_0xe8ae9[_0x5d90ba(0x1ba)]('errors'),'role':_0x7d2bea,'profile':_0x2ae19f,'data':_0x44d8f2,'expenses_data':_0x33dab2,'master_shop':_0x8473fc,'language':_0x3696f5});}catch(_0x3dbace){console[_0x5d90ba(0x187)](_0x3dbace);}}),router[a0_0x56d657(0x195)](a0_0x56d657(0x1b5),auth,async(_0xd672ed,_0x2b7c47)=>{const _0x27b7f9=a0_0x56d657;try{const _0xe54cff=_0xd672ed[_0x27b7f9(0x1a1)]['id'];console[_0x27b7f9(0x187)](_0xe54cff);const _0x43244c=await all_expenses[_0x27b7f9(0x1a3)](_0xe54cff,_0xd672ed[_0x27b7f9(0x1bd)]);console['log'](_0x43244c),_0xd672ed[_0x27b7f9(0x1ba)](_0x27b7f9(0x1a8),'expenses\x20data\x20update\x20successfully'),_0x2b7c47[_0x27b7f9(0x1bf)](_0x27b7f9(0x1a4));}catch(_0x8d248b){console['log'](_0x8d248b);}}),module['exports']=router;