function a0_0x526a(_0x27481f,_0x22bb37){const _0x2cd037=a0_0x2cd0();return a0_0x526a=function(_0x526a4a,_0x5229b2){_0x526a4a=_0x526a4a-0x17e;let _0x39e34d=_0x2cd037[_0x526a4a];return _0x39e34d;},a0_0x526a(_0x27481f,_0x22bb37);}const a0_0x35073d=a0_0x526a;(function(_0x2fa747,_0x7bc0e){const _0xc21555=a0_0x526a,_0x3182bc=_0x2fa747();while(!![]){try{const _0x5a9b64=parseInt(_0xc21555(0x18b))/0x1*(-parseInt(_0xc21555(0x196))/0x2)+parseInt(_0xc21555(0x1b4))/0x3+-parseInt(_0xc21555(0x18e))/0x4*(parseInt(_0xc21555(0x180))/0x5)+-parseInt(_0xc21555(0x1a3))/0x6+parseInt(_0xc21555(0x1b8))/0x7+parseInt(_0xc21555(0x18f))/0x8+parseInt(_0xc21555(0x1af))/0x9;if(_0x5a9b64===_0x7bc0e)break;else _0x3182bc['push'](_0x3182bc['shift']());}catch(_0x288620){_0x3182bc['push'](_0x3182bc['shift']());}}}(a0_0x2cd0,0xc80ed));function a0_0x2cd0(){const _0x552f6f=['English\x20(US)','/view/add_expenses','65tYOWAF','master','Spanish','\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another','log','flash','express','user','updateMany','language','/all_expenses/type','17lMNedK','save','expenses\x20data\x20update\x20successfully','442028hzHAjX','11323608tvNUtJ','success','findById','get','expenses_type','../public/language/languages.json','findOne','113782VxZtug','add_expenses','findByIdAndDelete','body','Portuguese','Arabic\x20(ae)','render','find','expenses','Hindi','name','Chinese','../middleware/auth','4013142TeORJg','/type','German','params','map','toJSON','email','errors','English','edit_expenses','post','\x20expenses\x20is\x20add\x20successfully','13609296WluDXo','/type/delete/:id','Expenses\x20data\x20delete\x20successfully','Router','all','1819365pAISrV','/view/:id','../models/all_models','Portuguese\x20(BR)','2505874eaFnWj','French','findByIdAndUpdate','redirect'];a0_0x2cd0=function(){return _0x552f6f;};return a0_0x2cd0();}const express=require(a0_0x35073d(0x186)),app=express(),router=express[a0_0x35073d(0x1b2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x35073d(0x1b6)),auth=require(a0_0x35073d(0x1a2)),users=require(a0_0x35073d(0x194));router[a0_0x35073d(0x192)](a0_0x35073d(0x1a4),auth,async(_0x599a61,_0x555b88)=>{const _0x480fa5=a0_0x35073d;try{const {username:_0x145b19,email:_0x57d772,role:_0x45a629}=_0x599a61['user'],_0xc5f55d=_0x599a61[_0x480fa5(0x187)],_0x7cd2f3=await profile[_0x480fa5(0x195)]({'email':_0xc5f55d[_0x480fa5(0x1a9)]}),_0x2e720a=await master_shop[_0x480fa5(0x19d)]();if(_0x2e720a[0x0]['language']=='English\x20(US)'){var _0x10e8f2=users[_0x480fa5(0x1ab)];console[_0x480fa5(0x184)](_0x10e8f2);}else{if(_0x2e720a[0x0]['language']==_0x480fa5(0x19f))var _0x10e8f2=users[_0x480fa5(0x19f)];else{if(_0x2e720a[0x0][_0x480fa5(0x189)]=='German')var _0x10e8f2=users[_0x480fa5(0x1a5)];else{if(_0x2e720a[0x0][_0x480fa5(0x189)]=='Spanish')var _0x10e8f2=users[_0x480fa5(0x182)];else{if(_0x2e720a[0x0]['language']=='French')var _0x10e8f2=users['French'];else{if(_0x2e720a[0x0][_0x480fa5(0x189)]=='Portuguese\x20(BR)')var _0x10e8f2=users['Portuguese'];else{if(_0x2e720a[0x0][_0x480fa5(0x189)]==_0x480fa5(0x1a1))var _0x10e8f2=users[_0x480fa5(0x1a1)];else{if(_0x2e720a[0x0][_0x480fa5(0x189)]==_0x480fa5(0x19b))var _0x10e8f2=users['Arabic'];}}}}}}}const _0x154a41=await expenses_type[_0x480fa5(0x19d)]({}),_0x50ca15=await Promise[_0x480fa5(0x1b3)](_0x154a41[_0x480fa5(0x1a7)](async _0x40f07a=>{const _0x1d0195=_0x480fa5,_0x22b554=await all_expenses['countDocuments']({'type':_0x40f07a['name']});return{..._0x40f07a[_0x1d0195(0x1a8)](),'count':_0x22b554};}));_0x555b88['render'](_0x480fa5(0x193),{'success':_0x599a61[_0x480fa5(0x185)](_0x480fa5(0x190)),'errors':_0x599a61[_0x480fa5(0x185)](_0x480fa5(0x1aa)),'role':_0xc5f55d,'profile':_0x7cd2f3,'master_shop':_0x2e720a,'language':_0x10e8f2,'expensesData':_0x50ca15});}catch(_0x35ef7){console[_0x480fa5(0x184)](_0x35ef7);}}),router['post'](a0_0x35073d(0x1a4),auth,async(_0x5e74e1,_0x537093)=>{const _0x15c437=a0_0x35073d;try{const {name:_0x3c41ce}=_0x5e74e1[_0x15c437(0x199)],_0x49d74b=new expenses_type({'name':_0x3c41ce}),_0x5280df=await expenses_type[_0x15c437(0x195)]({'name':_0x3c41ce});if(_0x5280df)_0x5e74e1[_0x15c437(0x185)](_0x15c437(0x1aa),_0x3c41ce+_0x15c437(0x183));else{_0x5e74e1[_0x15c437(0x185)](_0x15c437(0x190),_0x3c41ce+_0x15c437(0x1ae));const _0x358f34=await _0x49d74b[_0x15c437(0x18c)]();}_0x537093[_0x15c437(0x1bb)]('/all_expenses/type');}catch(_0x39772f){console[_0x15c437(0x184)](_0x39772f);}}),router[a0_0x35073d(0x1ad)]('/type/:id',auth,async(_0xba4349,_0x422a2e)=>{const _0x4ada75=a0_0x35073d;try{const _0x3eae35=_0xba4349[_0x4ada75(0x1a6)]['id'],_0x5898b2=await expenses_type[_0x4ada75(0x191)](_0x3eae35),_0x48b6c7=await expenses_type['findByIdAndUpdate'](_0x3eae35,_0xba4349[_0x4ada75(0x199)]),_0x1ce077=await all_expenses[_0x4ada75(0x188)]({'type':_0x5898b2['name']},{'$set':{'type':_0xba4349[_0x4ada75(0x199)][_0x4ada75(0x1a0)]}});_0xba4349['flash'](_0x4ada75(0x190),_0x4ada75(0x18d)),_0x422a2e['redirect'](_0x4ada75(0x18a));}catch(_0x133591){console[_0x4ada75(0x184)](_0x133591);}}),router['get'](a0_0x35073d(0x1b0),auth,async(_0x46dc77,_0x3efb50)=>{const _0xe993b4=a0_0x35073d;try{const _0xf7b8ce=_0x46dc77[_0xe993b4(0x1a6)]['id'],_0x24ccb4=await expenses_type[_0xe993b4(0x198)](_0xf7b8ce);_0x46dc77[_0xe993b4(0x185)](_0xe993b4(0x190),_0xe993b4(0x1b1)),_0x3efb50['redirect'](_0xe993b4(0x18a));}catch(_0x112a6d){console[_0xe993b4(0x184)](_0x112a6d);}}),router[a0_0x35073d(0x192)]('/view',auth,async(_0x3a1f05,_0x479fe7)=>{const _0x352adf=a0_0x35073d;try{const {username:_0x4e61d7,email:_0x26faf0,role:_0x3be371}=_0x3a1f05[_0x352adf(0x187)],_0x54648e=_0x3a1f05['user'],_0x4ff2f9=await profile[_0x352adf(0x195)]({'email':_0x54648e[_0x352adf(0x1a9)]}),_0x6ea8d2=await master_shop[_0x352adf(0x19d)]();console['log'](_0x352adf(0x181),_0x6ea8d2);const _0x2ed99c=await expenses_type['find']({}),_0x55c3f6=await all_expenses[_0x352adf(0x19d)]({});console[_0x352adf(0x184)](_0x55c3f6);if(_0x6ea8d2[0x0][_0x352adf(0x189)]==_0x352adf(0x17e)){var _0x544377=users[_0x352adf(0x1ab)];console[_0x352adf(0x184)](_0x544377);}else{if(_0x6ea8d2[0x0]['language']=='Hindi')var _0x544377=users['Hindi'];else{if(_0x6ea8d2[0x0][_0x352adf(0x189)]==_0x352adf(0x1a5))var _0x544377=users[_0x352adf(0x1a5)];else{if(_0x6ea8d2[0x0]['language']==_0x352adf(0x182))var _0x544377=users[_0x352adf(0x182)];else{if(_0x6ea8d2[0x0][_0x352adf(0x189)]==_0x352adf(0x1b9))var _0x544377=users['French'];else{if(_0x6ea8d2[0x0][_0x352adf(0x189)]=='Portuguese\x20(BR)')var _0x544377=users[_0x352adf(0x19a)];else{if(_0x6ea8d2[0x0][_0x352adf(0x189)]==_0x352adf(0x1a1))var _0x544377=users['Chinese'];else{if(_0x6ea8d2[0x0][_0x352adf(0x189)]=='Arabic\x20(ae)')var _0x544377=users['Arabic'];}}}}}}}_0x479fe7[_0x352adf(0x19c)](_0x352adf(0x19e),{'success':_0x3a1f05['flash'](_0x352adf(0x190)),'errors':_0x3a1f05[_0x352adf(0x185)](_0x352adf(0x1aa)),'role':_0x54648e,'profile':_0x4ff2f9,'data':_0x2ed99c,'expenses_data':_0x55c3f6,'master_shop':_0x6ea8d2,'language':_0x544377});}catch(_0x5c0d64){console[_0x352adf(0x184)](_0x5c0d64);}}),router[a0_0x35073d(0x192)](a0_0x35073d(0x17f),auth,async(_0x27081a,_0x4dfbf8)=>{const _0x2e3284=a0_0x35073d;try{const {username:_0x324ba9,email:_0x31e6ed,role:_0x2f4b9c}=_0x27081a[_0x2e3284(0x187)],_0x2e23aa=_0x27081a['user'],_0xd7e333=await profile[_0x2e3284(0x195)]({'email':_0x2e23aa[_0x2e3284(0x1a9)]}),_0x20e15f=await master_shop['find']();console[_0x2e3284(0x184)]('master',_0x20e15f);const _0xd4a7d6=await expenses_type[_0x2e3284(0x19d)]({});if(_0x20e15f[0x0][_0x2e3284(0x189)]==_0x2e3284(0x17e)){var _0x3a276e=users['English'];console[_0x2e3284(0x184)](_0x3a276e);}else{if(_0x20e15f[0x0]['language']=='Hindi')var _0x3a276e=users[_0x2e3284(0x19f)];else{if(_0x20e15f[0x0][_0x2e3284(0x189)]==_0x2e3284(0x1a5))var _0x3a276e=users[_0x2e3284(0x1a5)];else{if(_0x20e15f[0x0][_0x2e3284(0x189)]=='Spanish')var _0x3a276e=users[_0x2e3284(0x182)];else{if(_0x20e15f[0x0][_0x2e3284(0x189)]==_0x2e3284(0x1b9))var _0x3a276e=users[_0x2e3284(0x1b9)];else{if(_0x20e15f[0x0][_0x2e3284(0x189)]==_0x2e3284(0x1b7))var _0x3a276e=users[_0x2e3284(0x19a)];else{if(_0x20e15f[0x0][_0x2e3284(0x189)]=='Chinese')var _0x3a276e=users[_0x2e3284(0x1a1)];else{if(_0x20e15f[0x0][_0x2e3284(0x189)]==_0x2e3284(0x19b))var _0x3a276e=users['Arabic'];}}}}}}}_0x4dfbf8[_0x2e3284(0x19c)](_0x2e3284(0x197),{'success':_0x27081a[_0x2e3284(0x185)]('success'),'errors':_0x27081a[_0x2e3284(0x185)]('errors'),'role':_0x2e23aa,'profile':_0xd7e333,'data':_0xd4a7d6,'master_shop':_0x20e15f,'language':_0x3a276e});}catch(_0x4c5f05){console[_0x2e3284(0x184)](_0x4c5f05);}}),router[a0_0x35073d(0x1ad)](a0_0x35073d(0x17f),auth,async(_0x3baefb,_0x49e13b)=>{const _0x1cda40=a0_0x35073d;try{const {type:_0x2fbbb7,date:_0x29e05f,amount:_0x1e2eca,note:_0x5bd8b2}=_0x3baefb[_0x1cda40(0x199)],_0x4544df=new all_expenses({'type':_0x2fbbb7,'date':_0x29e05f,'amount':_0x1e2eca,'note':_0x5bd8b2}),_0x246fd6=await _0x4544df[_0x1cda40(0x18c)]();_0x49e13b[_0x1cda40(0x1bb)]('/all_expenses/view');}catch(_0x2d3b49){console[_0x1cda40(0x184)](_0x2d3b49);}}),router[a0_0x35073d(0x192)](a0_0x35073d(0x1b5),auth,async(_0x4afcdf,_0x60c2c2)=>{const _0x2cfb85=a0_0x35073d;try{const {username:_0x5ae789,email:_0x8e3d3b,role:_0x18c6b3}=_0x4afcdf[_0x2cfb85(0x187)],_0x34dfdd=_0x4afcdf['user'],_0x41dbfe=await profile[_0x2cfb85(0x195)]({'email':_0x34dfdd[_0x2cfb85(0x1a9)]}),_0x52c786=await master_shop['find']();console[_0x2cfb85(0x184)](_0x2cfb85(0x181),_0x52c786);const _0x4240b7=await expenses_type[_0x2cfb85(0x19d)]({});console['log'](_0x4240b7);const _0x3cb9e0=await all_expenses[_0x2cfb85(0x191)](_0x4afcdf[_0x2cfb85(0x1a6)]['id']);console[_0x2cfb85(0x184)](_0x3cb9e0);if(_0x52c786[0x0][_0x2cfb85(0x189)]==_0x2cfb85(0x17e)){var _0x496910=users[_0x2cfb85(0x1ab)];console[_0x2cfb85(0x184)](_0x496910);}else{if(_0x52c786[0x0][_0x2cfb85(0x189)]==_0x2cfb85(0x19f))var _0x496910=users['Hindi'];else{if(_0x52c786[0x0]['language']==_0x2cfb85(0x1a5))var _0x496910=users[_0x2cfb85(0x1a5)];else{if(_0x52c786[0x0]['language']==_0x2cfb85(0x182))var _0x496910=users[_0x2cfb85(0x182)];else{if(_0x52c786[0x0][_0x2cfb85(0x189)]==_0x2cfb85(0x1b9))var _0x496910=users[_0x2cfb85(0x1b9)];else{if(_0x52c786[0x0]['language']=='Portuguese\x20(BR)')var _0x496910=users[_0x2cfb85(0x19a)];else{if(_0x52c786[0x0][_0x2cfb85(0x189)]==_0x2cfb85(0x1a1))var _0x496910=users[_0x2cfb85(0x1a1)];else{if(_0x52c786[0x0][_0x2cfb85(0x189)]==_0x2cfb85(0x19b))var _0x496910=users['Arabic'];}}}}}}}_0x60c2c2[_0x2cfb85(0x19c)](_0x2cfb85(0x1ac),{'success':_0x4afcdf[_0x2cfb85(0x185)](_0x2cfb85(0x190)),'errors':_0x4afcdf[_0x2cfb85(0x185)]('errors'),'role':_0x34dfdd,'profile':_0x41dbfe,'data':_0x4240b7,'expenses_data':_0x3cb9e0,'master_shop':_0x52c786,'language':_0x496910});}catch(_0x3c1a0d){console[_0x2cfb85(0x184)](_0x3c1a0d);}}),router['post']('/view/:id',auth,async(_0x2139de,_0x3dabbc)=>{const _0x8a4931=a0_0x35073d;try{const _0x2df44f=_0x2139de[_0x8a4931(0x1a6)]['id'];console['log'](_0x2df44f);const _0x19533a=await all_expenses[_0x8a4931(0x1ba)](_0x2df44f,_0x2139de[_0x8a4931(0x199)]);console['log'](_0x19533a),_0x2139de[_0x8a4931(0x185)](_0x8a4931(0x190),_0x8a4931(0x18d)),_0x3dabbc[_0x8a4931(0x1bb)]('/all_expenses/view');}catch(_0x5cc162){console['log'](_0x5cc162);}}),module['exports']=router;