const a0_0x1b82bc=a0_0x4a12;function a0_0x4a12(_0x2d2e9b,_0x47a40b){const _0x4a585c=a0_0x4a58();return a0_0x4a12=function(_0x4a1231,_0x3b7913){_0x4a1231=_0x4a1231-0x1e1;let _0x4db5ee=_0x4a585c[_0x4a1231];return _0x4db5ee;},a0_0x4a12(_0x2d2e9b,_0x47a40b);}(function(_0x17876f,_0xed2637){const _0x19627d=a0_0x4a12,_0x5107d6=_0x17876f();while(!![]){try{const _0x4a5747=parseInt(_0x19627d(0x203))/0x1*(-parseInt(_0x19627d(0x214))/0x2)+parseInt(_0x19627d(0x1ed))/0x3*(parseInt(_0x19627d(0x1f6))/0x4)+parseInt(_0x19627d(0x1f5))/0x5+-parseInt(_0x19627d(0x210))/0x6+-parseInt(_0x19627d(0x206))/0x7+parseInt(_0x19627d(0x20a))/0x8+parseInt(_0x19627d(0x1f8))/0x9;if(_0x4a5747===_0xed2637)break;else _0x5107d6['push'](_0x5107d6['shift']());}catch(_0x5b061c){_0x5107d6['push'](_0x5107d6['shift']());}}}(a0_0x4a58,0x48deb));const express=require(a0_0x1b82bc(0x1e4)),app=express(),router=express[a0_0x1b82bc(0x1e1)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x1b82bc(0x1f0)),auth=require('../middleware/auth'),users=require(a0_0x1b82bc(0x215));router[a0_0x1b82bc(0x1f1)](a0_0x1b82bc(0x1e7),auth,async(_0x2a9ef4,_0x395699)=>{const _0x5d36bd=a0_0x1b82bc;try{const {username:_0x2092a9,email:_0x3ff0fe,role:_0x4b35ec}=_0x2a9ef4[_0x5d36bd(0x1f3)],_0x1334af=_0x2a9ef4[_0x5d36bd(0x1f3)],_0x14a271=await profile[_0x5d36bd(0x1ff)]({'email':_0x1334af[_0x5d36bd(0x1fc)]}),_0x2841f9=await master_shop[_0x5d36bd(0x1f9)]();if(_0x2841f9[0x0][_0x5d36bd(0x219)]==_0x5d36bd(0x20b)){var _0x34fb8c=users[_0x5d36bd(0x21a)];console[_0x5d36bd(0x1ee)](_0x34fb8c);}else{if(_0x2841f9[0x0][_0x5d36bd(0x219)]==_0x5d36bd(0x1fe))var _0x34fb8c=users[_0x5d36bd(0x1fe)];else{if(_0x2841f9[0x0][_0x5d36bd(0x219)]==_0x5d36bd(0x20f))var _0x34fb8c=users[_0x5d36bd(0x20f)];else{if(_0x2841f9[0x0]['language']==_0x5d36bd(0x1fa))var _0x34fb8c=users[_0x5d36bd(0x1fa)];else{if(_0x2841f9[0x0][_0x5d36bd(0x219)]==_0x5d36bd(0x20d))var _0x34fb8c=users['French'];else{if(_0x2841f9[0x0][_0x5d36bd(0x219)]==_0x5d36bd(0x1ef))var _0x34fb8c=users[_0x5d36bd(0x202)];else{if(_0x2841f9[0x0]['language']==_0x5d36bd(0x20c))var _0x34fb8c=users['Chinese'];else{if(_0x2841f9[0x0]['language']=='Arabic\x20(ae)')var _0x34fb8c=users[_0x5d36bd(0x1f4)];}}}}}}}const _0x3f1ad9=await expenses_type[_0x5d36bd(0x1f9)]({}),_0x466325=await Promise[_0x5d36bd(0x1f2)](_0x3f1ad9[_0x5d36bd(0x211)](async _0x26d14f=>{const _0x234297=_0x5d36bd,_0x4bafa7=await all_expenses[_0x234297(0x1e3)]({'type':_0x26d14f[_0x234297(0x200)]});return{..._0x26d14f[_0x234297(0x1e2)](),'count':_0x4bafa7};}));_0x395699[_0x5d36bd(0x21b)]('expenses_type',{'success':_0x2a9ef4[_0x5d36bd(0x1e6)](_0x5d36bd(0x21c)),'errors':_0x2a9ef4[_0x5d36bd(0x1e6)](_0x5d36bd(0x20e)),'role':_0x1334af,'profile':_0x14a271,'master_shop':_0x2841f9,'language':_0x34fb8c,'expensesData':_0x466325});}catch(_0x572c11){console[_0x5d36bd(0x1ee)](_0x572c11);}}),router[a0_0x1b82bc(0x201)](a0_0x1b82bc(0x1e7),auth,async(_0x28a383,_0x45e3f8)=>{const _0x280f6f=a0_0x1b82bc;try{const {name:_0x259c8e}=_0x28a383[_0x280f6f(0x1eb)],_0x424182=new expenses_type({'name':_0x259c8e}),_0x564595=await expenses_type[_0x280f6f(0x1ff)]({'name':_0x259c8e});if(_0x564595)_0x28a383[_0x280f6f(0x1e6)](_0x280f6f(0x20e),_0x259c8e+_0x280f6f(0x1ea));else{_0x28a383[_0x280f6f(0x1e6)]('success',_0x259c8e+_0x280f6f(0x218));const _0x40e9d9=await _0x424182[_0x280f6f(0x209)]();}_0x45e3f8[_0x280f6f(0x205)]('/all_expenses/type');}catch(_0x1fa115){console['log'](_0x1fa115);}}),router['post'](a0_0x1b82bc(0x1fb),auth,async(_0x1d6a51,_0x1f4009)=>{const _0x58ae41=a0_0x1b82bc;try{const _0x2f6ea7=_0x1d6a51['params']['id'],_0x3f412f=await expenses_type[_0x58ae41(0x204)](_0x2f6ea7),_0x53bd97=await expenses_type[_0x58ae41(0x1e8)](_0x2f6ea7,_0x1d6a51[_0x58ae41(0x1eb)]),_0x323e07=await all_expenses[_0x58ae41(0x1f7)]({'type':_0x3f412f[_0x58ae41(0x200)]},{'$set':{'type':_0x1d6a51['body'][_0x58ae41(0x200)]}});_0x1d6a51[_0x58ae41(0x1e6)](_0x58ae41(0x21c),'expenses\x20data\x20update\x20successfully'),_0x1f4009[_0x58ae41(0x205)](_0x58ae41(0x1e9));}catch(_0x4c2302){console[_0x58ae41(0x1ee)](_0x4c2302);}}),router[a0_0x1b82bc(0x1f1)](a0_0x1b82bc(0x207),auth,async(_0x1ce299,_0x542c0d)=>{const _0x510e56=a0_0x1b82bc;try{const _0x42259b=_0x1ce299[_0x510e56(0x208)]['id'],_0x55b7a1=await expenses_type['findByIdAndDelete'](_0x42259b);_0x1ce299['flash'](_0x510e56(0x21c),'Expenses\x20data\x20delete\x20successfully'),_0x542c0d[_0x510e56(0x205)](_0x510e56(0x1e9));}catch(_0xc490af){console[_0x510e56(0x1ee)](_0xc490af);}}),router[a0_0x1b82bc(0x1f1)](a0_0x1b82bc(0x216),auth,async(_0x541457,_0xeff34e)=>{const _0x612677=a0_0x1b82bc;try{const {username:_0x1c035b,email:_0x1521eb,role:_0x38883b}=_0x541457[_0x612677(0x1f3)],_0x283905=_0x541457[_0x612677(0x1f3)],_0x5a5404=await profile[_0x612677(0x1ff)]({'email':_0x283905[_0x612677(0x1fc)]}),_0x4a89f6=await master_shop[_0x612677(0x1f9)]();console[_0x612677(0x1ee)](_0x612677(0x1fd),_0x4a89f6);const _0x1d9856=await expenses_type['find']({}),_0x16f99b=await all_expenses['find']({});console[_0x612677(0x1ee)](_0x16f99b);if(_0x4a89f6[0x0][_0x612677(0x219)]==_0x612677(0x20b)){var _0x57f5db=users[_0x612677(0x21a)];console[_0x612677(0x1ee)](_0x57f5db);}else{if(_0x4a89f6[0x0][_0x612677(0x219)]==_0x612677(0x1fe))var _0x57f5db=users[_0x612677(0x1fe)];else{if(_0x4a89f6[0x0][_0x612677(0x219)]=='German')var _0x57f5db=users['German'];else{if(_0x4a89f6[0x0][_0x612677(0x219)]==_0x612677(0x1fa))var _0x57f5db=users['Spanish'];else{if(_0x4a89f6[0x0][_0x612677(0x219)]==_0x612677(0x20d))var _0x57f5db=users[_0x612677(0x20d)];else{if(_0x4a89f6[0x0]['language']==_0x612677(0x1ef))var _0x57f5db=users[_0x612677(0x202)];else{if(_0x4a89f6[0x0][_0x612677(0x219)]==_0x612677(0x20c))var _0x57f5db=users['Chinese'];else{if(_0x4a89f6[0x0][_0x612677(0x219)]==_0x612677(0x213))var _0x57f5db=users[_0x612677(0x1f4)];}}}}}}}_0xeff34e[_0x612677(0x21b)](_0x612677(0x212),{'success':_0x541457[_0x612677(0x1e6)](_0x612677(0x21c)),'errors':_0x541457[_0x612677(0x1e6)](_0x612677(0x20e)),'role':_0x283905,'profile':_0x5a5404,'data':_0x1d9856,'expenses_data':_0x16f99b,'master_shop':_0x4a89f6,'language':_0x57f5db});}catch(_0x38b16a){console[_0x612677(0x1ee)](_0x38b16a);}}),router[a0_0x1b82bc(0x1f1)]('/view/add_expenses',auth,async(_0x4b52ff,_0x2c1856)=>{const _0x1d6ca6=a0_0x1b82bc;try{const {username:_0x590765,email:_0x5f34a1,role:_0x35bfc9}=_0x4b52ff[_0x1d6ca6(0x1f3)],_0x67a9eb=_0x4b52ff[_0x1d6ca6(0x1f3)],_0xa379c9=await profile[_0x1d6ca6(0x1ff)]({'email':_0x67a9eb[_0x1d6ca6(0x1fc)]}),_0x4df9fa=await master_shop[_0x1d6ca6(0x1f9)]();console[_0x1d6ca6(0x1ee)](_0x1d6ca6(0x1fd),_0x4df9fa);const _0x12ad92=await expenses_type[_0x1d6ca6(0x1f9)]({});if(_0x4df9fa[0x0][_0x1d6ca6(0x219)]==_0x1d6ca6(0x20b)){var _0x2df714=users[_0x1d6ca6(0x21a)];console['log'](_0x2df714);}else{if(_0x4df9fa[0x0][_0x1d6ca6(0x219)]=='Hindi')var _0x2df714=users[_0x1d6ca6(0x1fe)];else{if(_0x4df9fa[0x0]['language']==_0x1d6ca6(0x20f))var _0x2df714=users[_0x1d6ca6(0x20f)];else{if(_0x4df9fa[0x0]['language']==_0x1d6ca6(0x1fa))var _0x2df714=users[_0x1d6ca6(0x1fa)];else{if(_0x4df9fa[0x0][_0x1d6ca6(0x219)]==_0x1d6ca6(0x20d))var _0x2df714=users[_0x1d6ca6(0x20d)];else{if(_0x4df9fa[0x0][_0x1d6ca6(0x219)]==_0x1d6ca6(0x1ef))var _0x2df714=users[_0x1d6ca6(0x202)];else{if(_0x4df9fa[0x0]['language']==_0x1d6ca6(0x20c))var _0x2df714=users['Chinese'];else{if(_0x4df9fa[0x0]['language']==_0x1d6ca6(0x213))var _0x2df714=users[_0x1d6ca6(0x1f4)];}}}}}}}_0x2c1856[_0x1d6ca6(0x21b)]('add_expenses',{'success':_0x4b52ff[_0x1d6ca6(0x1e6)](_0x1d6ca6(0x21c)),'errors':_0x4b52ff[_0x1d6ca6(0x1e6)]('errors'),'role':_0x67a9eb,'profile':_0xa379c9,'data':_0x12ad92,'master_shop':_0x4df9fa,'language':_0x2df714});}catch(_0x4a1250){console['log'](_0x4a1250);}}),router[a0_0x1b82bc(0x201)]('/view/add_expenses',auth,async(_0x1fdd3f,_0x5d82c9)=>{const _0x3f3801=a0_0x1b82bc;try{const {type:_0x584dc6,date:_0x4628a2,amount:_0x4bdb68,note:_0x236a1c}=_0x1fdd3f[_0x3f3801(0x1eb)],_0x2fc8a1=new all_expenses({'type':_0x584dc6,'date':_0x4628a2,'amount':_0x4bdb68,'note':_0x236a1c}),_0x5acee7=await _0x2fc8a1['save']();_0x5d82c9[_0x3f3801(0x205)]('/all_expenses/view');}catch(_0x5eeff3){console[_0x3f3801(0x1ee)](_0x5eeff3);}}),router[a0_0x1b82bc(0x1f1)]('/view/:id',auth,async(_0x1cd4f4,_0x58b0e5)=>{const _0x490a1d=a0_0x1b82bc;try{const {username:_0x24ea6d,email:_0x10e869,role:_0x207658}=_0x1cd4f4['user'],_0x278514=_0x1cd4f4[_0x490a1d(0x1f3)],_0x40c156=await profile[_0x490a1d(0x1ff)]({'email':_0x278514[_0x490a1d(0x1fc)]}),_0x3419fa=await master_shop['find']();console[_0x490a1d(0x1ee)](_0x490a1d(0x1fd),_0x3419fa);const _0x401f2c=await expenses_type[_0x490a1d(0x1f9)]({});console[_0x490a1d(0x1ee)](_0x401f2c);const _0x3e61de=await all_expenses[_0x490a1d(0x204)](_0x1cd4f4['params']['id']);console[_0x490a1d(0x1ee)](_0x3e61de);if(_0x3419fa[0x0][_0x490a1d(0x219)]=='English\x20(US)'){var _0x35bc66=users[_0x490a1d(0x21a)];console[_0x490a1d(0x1ee)](_0x35bc66);}else{if(_0x3419fa[0x0][_0x490a1d(0x219)]==_0x490a1d(0x1fe))var _0x35bc66=users[_0x490a1d(0x1fe)];else{if(_0x3419fa[0x0][_0x490a1d(0x219)]==_0x490a1d(0x20f))var _0x35bc66=users[_0x490a1d(0x20f)];else{if(_0x3419fa[0x0][_0x490a1d(0x219)]==_0x490a1d(0x1fa))var _0x35bc66=users[_0x490a1d(0x1fa)];else{if(_0x3419fa[0x0][_0x490a1d(0x219)]==_0x490a1d(0x20d))var _0x35bc66=users[_0x490a1d(0x20d)];else{if(_0x3419fa[0x0][_0x490a1d(0x219)]=='Portuguese\x20(BR)')var _0x35bc66=users[_0x490a1d(0x202)];else{if(_0x3419fa[0x0][_0x490a1d(0x219)]==_0x490a1d(0x20c))var _0x35bc66=users[_0x490a1d(0x20c)];else{if(_0x3419fa[0x0][_0x490a1d(0x219)]==_0x490a1d(0x213))var _0x35bc66=users[_0x490a1d(0x1f4)];}}}}}}}_0x58b0e5['render']('edit_expenses',{'success':_0x1cd4f4['flash'](_0x490a1d(0x21c)),'errors':_0x1cd4f4[_0x490a1d(0x1e6)](_0x490a1d(0x20e)),'role':_0x278514,'profile':_0x40c156,'data':_0x401f2c,'expenses_data':_0x3e61de,'master_shop':_0x3419fa,'language':_0x35bc66});}catch(_0x2877ad){console['log'](_0x2877ad);}}),router['post'](a0_0x1b82bc(0x217),auth,async(_0x58a43c,_0x267c42)=>{const _0x585e08=a0_0x1b82bc;try{const _0x5c8564=_0x58a43c[_0x585e08(0x208)]['id'];console[_0x585e08(0x1ee)](_0x5c8564);const _0x5ab9a9=await all_expenses[_0x585e08(0x1e8)](_0x5c8564,_0x58a43c[_0x585e08(0x1eb)]);console[_0x585e08(0x1ee)](_0x5ab9a9),_0x58a43c[_0x585e08(0x1e6)](_0x585e08(0x21c),_0x585e08(0x1ec)),_0x267c42[_0x585e08(0x205)](_0x585e08(0x1e5));}catch(_0x17a3f6){console['log'](_0x17a3f6);}}),module['exports']=router;function a0_0x4a58(){const _0x4a9b34=['512617QZWgdy','/type/delete/:id','params','save','3071352EEsofD','English\x20(US)','Chinese','French','errors','German','1734252wiNJyW','map','expenses','Arabic\x20(ae)','919164VkhUyB','../public/language/languages.json','/view','/view/:id','\x20expenses\x20is\x20add\x20successfully','language','English','render','success','Router','toJSON','countDocuments','express','/all_expenses/view','flash','/type','findByIdAndUpdate','/all_expenses/type','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','body','expenses\x20data\x20update\x20successfully','6SVfgBo','log','Portuguese\x20(BR)','../models/all_models','get','all','user','Arabic','360655kILeoq','929108XmtrpK','updateMany','1797534YhVJCb','find','Spanish','/type/:id','email','master','Hindi','findOne','name','post','Portuguese','1kRqsoj','findById','redirect'];a0_0x4a58=function(){return _0x4a9b34;};return a0_0x4a58();}