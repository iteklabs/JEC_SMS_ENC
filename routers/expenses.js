function a0_0x2d15(){const _0x67a554=['/all_expenses/view','40tuAuOI','English\x20(US)','params','Portuguese\x20(BR)','map','../middleware/auth','Portuguese','post','save','express','findByIdAndDelete','redirect','/type','446820QGuuPC','306566jjJuEi','findByIdAndUpdate','name','expenses\x20data\x20update\x20successfully','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','Hindi','find','get','291933mbwOfx','../models/all_models','Arabic','\x20expenses\x20is\x20add\x20successfully','language','/type/delete/:id','success','97855aqJpTX','findById','email','body','findOne','user','Chinese','master','toJSON','errors','expenses_type','exports','250DCZJEk','Spanish','/view','Arabic\x20(ae)','English','194136BMEOZE','edit_expenses','flash','35DnhjWB','render','German','all','50845SJiTiP','14655hvtnlw','log','/view/add_expenses','/type/:id','../public/language/languages.json','/all_expenses/type','/view/:id','French','updateMany'];a0_0x2d15=function(){return _0x67a554;};return a0_0x2d15();}const a0_0x57619d=a0_0x9b02;function a0_0x9b02(_0x41d308,_0x3c4954){const _0x2d1555=a0_0x2d15();return a0_0x9b02=function(_0x9b02a1,_0xe071c9){_0x9b02a1=_0x9b02a1-0x182;let _0x22f29f=_0x2d1555[_0x9b02a1];return _0x22f29f;},a0_0x9b02(_0x41d308,_0x3c4954);}(function(_0x542166,_0xe215d6){const _0x13cb2e=a0_0x9b02,_0x1da483=_0x542166();while(!![]){try{const _0x3b8658=-parseInt(_0x13cb2e(0x186))/0x1+parseInt(_0x13cb2e(0x19f))/0x2+-parseInt(_0x13cb2e(0x187))/0x3+-parseInt(_0x13cb2e(0x191))/0x4*(parseInt(_0x13cb2e(0x1ae))/0x5)+-parseInt(_0x13cb2e(0x19e))/0x6*(parseInt(_0x13cb2e(0x182))/0x7)+parseInt(_0x13cb2e(0x1bf))/0x8+parseInt(_0x13cb2e(0x1a7))/0x9*(parseInt(_0x13cb2e(0x1ba))/0xa);if(_0x3b8658===_0xe215d6)break;else _0x1da483['push'](_0x1da483['shift']());}catch(_0x5edb6a){_0x1da483['push'](_0x1da483['shift']());}}}(a0_0x2d15,0x5908d));const express=require(a0_0x57619d(0x19a)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x57619d(0x1a8)),auth=require(a0_0x57619d(0x196)),users=require(a0_0x57619d(0x18b));router[a0_0x57619d(0x1a6)](a0_0x57619d(0x19d),auth,async(_0x15a8f8,_0x55dbdc)=>{const _0x16e706=a0_0x57619d;try{const {username:_0x25f517,email:_0x2d6bf8,role:_0x5e6844}=_0x15a8f8['user'],_0x473abc=_0x15a8f8[_0x16e706(0x1b3)],_0x5c757f=await profile[_0x16e706(0x1b2)]({'email':_0x473abc[_0x16e706(0x1b0)]}),_0x4f5034=await master_shop['find']();if(_0x4f5034[0x0][_0x16e706(0x1ab)]=='English\x20(US)'){var _0x168d9d=users[_0x16e706(0x1be)];console[_0x16e706(0x188)](_0x168d9d);}else{if(_0x4f5034[0x0][_0x16e706(0x1ab)]=='Hindi')var _0x168d9d=users[_0x16e706(0x1a4)];else{if(_0x4f5034[0x0][_0x16e706(0x1ab)]=='German')var _0x168d9d=users[_0x16e706(0x184)];else{if(_0x4f5034[0x0][_0x16e706(0x1ab)]==_0x16e706(0x1bb))var _0x168d9d=users['Spanish'];else{if(_0x4f5034[0x0]['language']==_0x16e706(0x18e))var _0x168d9d=users[_0x16e706(0x18e)];else{if(_0x4f5034[0x0][_0x16e706(0x1ab)]==_0x16e706(0x194))var _0x168d9d=users[_0x16e706(0x197)];else{if(_0x4f5034[0x0]['language']==_0x16e706(0x1b4))var _0x168d9d=users[_0x16e706(0x1b4)];else{if(_0x4f5034[0x0][_0x16e706(0x1ab)]==_0x16e706(0x1bd))var _0x168d9d=users[_0x16e706(0x1a9)];}}}}}}}const _0x21ee5b=await expenses_type[_0x16e706(0x1a5)]({}),_0x34db2e=await Promise[_0x16e706(0x185)](_0x21ee5b[_0x16e706(0x195)](async _0x527293=>{const _0x142145=_0x16e706,_0x1e672d=await all_expenses['countDocuments']({'type':_0x527293[_0x142145(0x1a1)]});return{..._0x527293[_0x142145(0x1b6)](),'count':_0x1e672d};}));_0x55dbdc[_0x16e706(0x183)](_0x16e706(0x1b8),{'success':_0x15a8f8[_0x16e706(0x1c1)]('success'),'errors':_0x15a8f8[_0x16e706(0x1c1)](_0x16e706(0x1b7)),'role':_0x473abc,'profile':_0x5c757f,'master_shop':_0x4f5034,'language':_0x168d9d,'expensesData':_0x34db2e});}catch(_0x4f2d13){console[_0x16e706(0x188)](_0x4f2d13);}}),router['post'](a0_0x57619d(0x19d),auth,async(_0x2c8468,_0x4a6ac2)=>{const _0x3408c3=a0_0x57619d;try{const {name:_0xa5b4f0}=_0x2c8468[_0x3408c3(0x1b1)],_0x58757a=new expenses_type({'name':_0xa5b4f0}),_0x4b72bd=await expenses_type[_0x3408c3(0x1b2)]({'name':_0xa5b4f0});if(_0x4b72bd)_0x2c8468['flash'](_0x3408c3(0x1b7),_0xa5b4f0+_0x3408c3(0x1a3));else{_0x2c8468['flash'](_0x3408c3(0x1ad),_0xa5b4f0+_0x3408c3(0x1aa));const _0x411cba=await _0x58757a[_0x3408c3(0x199)]();}_0x4a6ac2[_0x3408c3(0x19c)](_0x3408c3(0x18c));}catch(_0x1e7bcf){console[_0x3408c3(0x188)](_0x1e7bcf);}}),router[a0_0x57619d(0x198)](a0_0x57619d(0x18a),auth,async(_0x24508a,_0x4d1b78)=>{const _0x4b9495=a0_0x57619d;try{const _0x33d229=_0x24508a[_0x4b9495(0x193)]['id'],_0x117053=await expenses_type[_0x4b9495(0x1af)](_0x33d229),_0x516055=await expenses_type[_0x4b9495(0x1a0)](_0x33d229,_0x24508a[_0x4b9495(0x1b1)]),_0x15409a=await all_expenses[_0x4b9495(0x18f)]({'type':_0x117053[_0x4b9495(0x1a1)]},{'$set':{'type':_0x24508a[_0x4b9495(0x1b1)]['name']}});_0x24508a[_0x4b9495(0x1c1)](_0x4b9495(0x1ad),'expenses\x20data\x20update\x20successfully'),_0x4d1b78[_0x4b9495(0x19c)](_0x4b9495(0x18c));}catch(_0x4dad75){console[_0x4b9495(0x188)](_0x4dad75);}}),router[a0_0x57619d(0x1a6)](a0_0x57619d(0x1ac),auth,async(_0x3e66a3,_0x2adac2)=>{const _0x5bce1f=a0_0x57619d;try{const _0x426565=_0x3e66a3[_0x5bce1f(0x193)]['id'],_0x583ec5=await expenses_type[_0x5bce1f(0x19b)](_0x426565);_0x3e66a3[_0x5bce1f(0x1c1)](_0x5bce1f(0x1ad),'Expenses\x20data\x20delete\x20successfully'),_0x2adac2[_0x5bce1f(0x19c)](_0x5bce1f(0x18c));}catch(_0x278ad4){console[_0x5bce1f(0x188)](_0x278ad4);}}),router[a0_0x57619d(0x1a6)](a0_0x57619d(0x1bc),auth,async(_0x2ec360,_0x4fd625)=>{const _0x39795a=a0_0x57619d;try{const {username:_0x18d6cf,email:_0x319127,role:_0x36f57f}=_0x2ec360[_0x39795a(0x1b3)],_0x2eacf2=_0x2ec360['user'],_0x5c8683=await profile[_0x39795a(0x1b2)]({'email':_0x2eacf2[_0x39795a(0x1b0)]}),_0x3b01c2=await master_shop[_0x39795a(0x1a5)]();console['log'](_0x39795a(0x1b5),_0x3b01c2);const _0xed6f8f=await expenses_type[_0x39795a(0x1a5)]({}),_0x1abb6a=await all_expenses[_0x39795a(0x1a5)]({});console['log'](_0x1abb6a);if(_0x3b01c2[0x0][_0x39795a(0x1ab)]==_0x39795a(0x192)){var _0x7521eb=users['English'];console[_0x39795a(0x188)](_0x7521eb);}else{if(_0x3b01c2[0x0][_0x39795a(0x1ab)]=='Hindi')var _0x7521eb=users[_0x39795a(0x1a4)];else{if(_0x3b01c2[0x0][_0x39795a(0x1ab)]=='German')var _0x7521eb=users[_0x39795a(0x184)];else{if(_0x3b01c2[0x0][_0x39795a(0x1ab)]==_0x39795a(0x1bb))var _0x7521eb=users[_0x39795a(0x1bb)];else{if(_0x3b01c2[0x0][_0x39795a(0x1ab)]==_0x39795a(0x18e))var _0x7521eb=users[_0x39795a(0x18e)];else{if(_0x3b01c2[0x0][_0x39795a(0x1ab)]==_0x39795a(0x194))var _0x7521eb=users['Portuguese'];else{if(_0x3b01c2[0x0][_0x39795a(0x1ab)]==_0x39795a(0x1b4))var _0x7521eb=users[_0x39795a(0x1b4)];else{if(_0x3b01c2[0x0]['language']=='Arabic\x20(ae)')var _0x7521eb=users[_0x39795a(0x1a9)];}}}}}}}_0x4fd625[_0x39795a(0x183)]('expenses',{'success':_0x2ec360[_0x39795a(0x1c1)](_0x39795a(0x1ad)),'errors':_0x2ec360[_0x39795a(0x1c1)]('errors'),'role':_0x2eacf2,'profile':_0x5c8683,'data':_0xed6f8f,'expenses_data':_0x1abb6a,'master_shop':_0x3b01c2,'language':_0x7521eb});}catch(_0x5ef10f){console[_0x39795a(0x188)](_0x5ef10f);}}),router[a0_0x57619d(0x1a6)]('/view/add_expenses',auth,async(_0x249ea2,_0x188dfe)=>{const _0x341b42=a0_0x57619d;try{const {username:_0x18626b,email:_0x4a4a8c,role:_0x1361b4}=_0x249ea2[_0x341b42(0x1b3)],_0xd5ea2c=_0x249ea2[_0x341b42(0x1b3)],_0x5874fd=await profile[_0x341b42(0x1b2)]({'email':_0xd5ea2c['email']}),_0x1a0728=await master_shop[_0x341b42(0x1a5)]();console['log']('master',_0x1a0728);const _0x5a2727=await expenses_type[_0x341b42(0x1a5)]({});if(_0x1a0728[0x0]['language']==_0x341b42(0x192)){var _0x557351=users[_0x341b42(0x1be)];console[_0x341b42(0x188)](_0x557351);}else{if(_0x1a0728[0x0][_0x341b42(0x1ab)]==_0x341b42(0x1a4))var _0x557351=users['Hindi'];else{if(_0x1a0728[0x0]['language']=='German')var _0x557351=users[_0x341b42(0x184)];else{if(_0x1a0728[0x0][_0x341b42(0x1ab)]=='Spanish')var _0x557351=users[_0x341b42(0x1bb)];else{if(_0x1a0728[0x0][_0x341b42(0x1ab)]==_0x341b42(0x18e))var _0x557351=users['French'];else{if(_0x1a0728[0x0][_0x341b42(0x1ab)]=='Portuguese\x20(BR)')var _0x557351=users[_0x341b42(0x197)];else{if(_0x1a0728[0x0][_0x341b42(0x1ab)]==_0x341b42(0x1b4))var _0x557351=users['Chinese'];else{if(_0x1a0728[0x0][_0x341b42(0x1ab)]==_0x341b42(0x1bd))var _0x557351=users[_0x341b42(0x1a9)];}}}}}}}_0x188dfe[_0x341b42(0x183)]('add_expenses',{'success':_0x249ea2[_0x341b42(0x1c1)](_0x341b42(0x1ad)),'errors':_0x249ea2[_0x341b42(0x1c1)](_0x341b42(0x1b7)),'role':_0xd5ea2c,'profile':_0x5874fd,'data':_0x5a2727,'master_shop':_0x1a0728,'language':_0x557351});}catch(_0x527658){console[_0x341b42(0x188)](_0x527658);}}),router[a0_0x57619d(0x198)](a0_0x57619d(0x189),auth,async(_0x357f77,_0x49545f)=>{const _0x5d1abd=a0_0x57619d;try{const {type:_0xb30430,date:_0x149002,amount:_0x58e700,note:_0x462c96}=_0x357f77[_0x5d1abd(0x1b1)],_0x2f014a=new all_expenses({'type':_0xb30430,'date':_0x149002,'amount':_0x58e700,'note':_0x462c96}),_0x895c94=await _0x2f014a[_0x5d1abd(0x199)]();_0x49545f[_0x5d1abd(0x19c)](_0x5d1abd(0x190));}catch(_0x3cac9a){console[_0x5d1abd(0x188)](_0x3cac9a);}}),router[a0_0x57619d(0x1a6)](a0_0x57619d(0x18d),auth,async(_0x1b7847,_0x14e063)=>{const _0x361203=a0_0x57619d;try{const {username:_0x5cf9b3,email:_0x4b3f6d,role:_0x1e3907}=_0x1b7847[_0x361203(0x1b3)],_0x154de3=_0x1b7847['user'],_0x370999=await profile[_0x361203(0x1b2)]({'email':_0x154de3[_0x361203(0x1b0)]}),_0x1912bb=await master_shop[_0x361203(0x1a5)]();console['log'](_0x361203(0x1b5),_0x1912bb);const _0x487bac=await expenses_type[_0x361203(0x1a5)]({});console[_0x361203(0x188)](_0x487bac);const _0x3c641b=await all_expenses[_0x361203(0x1af)](_0x1b7847[_0x361203(0x193)]['id']);console[_0x361203(0x188)](_0x3c641b);if(_0x1912bb[0x0]['language']==_0x361203(0x192)){var _0x5b5a4a=users[_0x361203(0x1be)];console['log'](_0x5b5a4a);}else{if(_0x1912bb[0x0][_0x361203(0x1ab)]==_0x361203(0x1a4))var _0x5b5a4a=users['Hindi'];else{if(_0x1912bb[0x0][_0x361203(0x1ab)]=='German')var _0x5b5a4a=users['German'];else{if(_0x1912bb[0x0][_0x361203(0x1ab)]==_0x361203(0x1bb))var _0x5b5a4a=users[_0x361203(0x1bb)];else{if(_0x1912bb[0x0]['language']==_0x361203(0x18e))var _0x5b5a4a=users[_0x361203(0x18e)];else{if(_0x1912bb[0x0][_0x361203(0x1ab)]=='Portuguese\x20(BR)')var _0x5b5a4a=users['Portuguese'];else{if(_0x1912bb[0x0]['language']==_0x361203(0x1b4))var _0x5b5a4a=users[_0x361203(0x1b4)];else{if(_0x1912bb[0x0][_0x361203(0x1ab)]==_0x361203(0x1bd))var _0x5b5a4a=users[_0x361203(0x1a9)];}}}}}}}_0x14e063['render'](_0x361203(0x1c0),{'success':_0x1b7847[_0x361203(0x1c1)](_0x361203(0x1ad)),'errors':_0x1b7847['flash'](_0x361203(0x1b7)),'role':_0x154de3,'profile':_0x370999,'data':_0x487bac,'expenses_data':_0x3c641b,'master_shop':_0x1912bb,'language':_0x5b5a4a});}catch(_0xb4c29){console[_0x361203(0x188)](_0xb4c29);}}),router['post'](a0_0x57619d(0x18d),auth,async(_0x19b2ee,_0x4a2946)=>{const _0x22790c=a0_0x57619d;try{const _0x4249da=_0x19b2ee[_0x22790c(0x193)]['id'];console['log'](_0x4249da);const _0x266aa0=await all_expenses[_0x22790c(0x1a0)](_0x4249da,_0x19b2ee[_0x22790c(0x1b1)]);console[_0x22790c(0x188)](_0x266aa0),_0x19b2ee[_0x22790c(0x1c1)](_0x22790c(0x1ad),_0x22790c(0x1a2)),_0x4a2946[_0x22790c(0x19c)](_0x22790c(0x190));}catch(_0x76d4d7){console['log'](_0x76d4d7);}}),module[a0_0x57619d(0x1b9)]=router;