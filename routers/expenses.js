const a0_0x326e8c=a0_0x5cca;(function(_0x2e9137,_0x20cb65){const _0x2c7313=a0_0x5cca,_0x3a5567=_0x2e9137();while(!![]){try{const _0x2b1fba=parseInt(_0x2c7313(0x217))/0x1+-parseInt(_0x2c7313(0x20d))/0x2*(parseInt(_0x2c7313(0x212))/0x3)+parseInt(_0x2c7313(0x1f9))/0x4+parseInt(_0x2c7313(0x225))/0x5*(parseInt(_0x2c7313(0x215))/0x6)+parseInt(_0x2c7313(0x21e))/0x7+parseInt(_0x2c7313(0x1fc))/0x8*(-parseInt(_0x2c7313(0x204))/0x9)+-parseInt(_0x2c7313(0x1f5))/0xa;if(_0x2b1fba===_0x20cb65)break;else _0x3a5567['push'](_0x3a5567['shift']());}catch(_0x1b9135){_0x3a5567['push'](_0x3a5567['shift']());}}}(a0_0x8274,0x5d12f));function a0_0x5cca(_0x574c60,_0x40cf94){const _0x827432=a0_0x8274();return a0_0x5cca=function(_0x5ccab4,_0x583806){_0x5ccab4=_0x5ccab4-0x1ef;let _0x4baae0=_0x827432[_0x5ccab4];return _0x4baae0;},a0_0x5cca(_0x574c60,_0x40cf94);}function a0_0x8274(){const _0xe032e9=['all','email','2NYahkW','language','log','Hindi','body','1535061mJjykM','findOne','/view','3805950wxhMpm','find','176175XtfNHE','expenses_type','render','findByIdAndUpdate','/view/:id','findById','/type/:id','275219nYTekW','errors','get','/all_expenses/view','toJSON','redirect','../models/all_models','5LIxIpN','Router','flash','name','../middleware/auth','add_expenses','German','params','/type','express','Portuguese\x20(BR)','success','747760eQnuXM','master','English','save','2664612jCdCIq','post','Arabic','904ynhsxj','user','English\x20(US)','/view/add_expenses','findByIdAndDelete','Arabic\x20(ae)','/all_expenses/type','Spanish','43668NLCnQR','Chinese','\x20expenses\x20is\x20add\x20successfully','French','map','edit_expenses','Portuguese'];a0_0x8274=function(){return _0xe032e9;};return a0_0x8274();}const express=require(a0_0x326e8c(0x1f2)),app=express(),router=express[a0_0x326e8c(0x226)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses}=require(a0_0x326e8c(0x224)),auth=require(a0_0x326e8c(0x229)),users=require('../public/language/languages.json');router[a0_0x326e8c(0x220)]('/type',auth,async(_0x2f50cd,_0x43a1a0)=>{const _0x49ca9f=a0_0x326e8c;try{const {username:_0x5ced51,email:_0x2e655d,role:_0x3c5503}=_0x2f50cd['user'],_0x31bdbb=_0x2f50cd[_0x49ca9f(0x1fd)],_0x4e9f37=await profile[_0x49ca9f(0x213)]({'email':_0x31bdbb[_0x49ca9f(0x20c)]}),_0x50e64e=await master_shop[_0x49ca9f(0x216)]();if(_0x50e64e[0x0][_0x49ca9f(0x20e)]==_0x49ca9f(0x1fe)){var _0x51b0b4=users['English'];console[_0x49ca9f(0x20f)](_0x51b0b4);}else{if(_0x50e64e[0x0][_0x49ca9f(0x20e)]==_0x49ca9f(0x210))var _0x51b0b4=users['Hindi'];else{if(_0x50e64e[0x0][_0x49ca9f(0x20e)]=='German')var _0x51b0b4=users[_0x49ca9f(0x1ef)];else{if(_0x50e64e[0x0]['language']=='Spanish')var _0x51b0b4=users[_0x49ca9f(0x203)];else{if(_0x50e64e[0x0][_0x49ca9f(0x20e)]=='French')var _0x51b0b4=users['French'];else{if(_0x50e64e[0x0]['language']==_0x49ca9f(0x1f3))var _0x51b0b4=users[_0x49ca9f(0x20a)];else{if(_0x50e64e[0x0][_0x49ca9f(0x20e)]==_0x49ca9f(0x205))var _0x51b0b4=users[_0x49ca9f(0x205)];else{if(_0x50e64e[0x0]['language']==_0x49ca9f(0x201))var _0x51b0b4=users[_0x49ca9f(0x1fb)];}}}}}}}const _0x1addc6=await expenses_type['find']({}),_0x5d7fb3=await Promise[_0x49ca9f(0x20b)](_0x1addc6[_0x49ca9f(0x208)](async _0x47c106=>{const _0x25c906=_0x49ca9f,_0x5a8f50=await all_expenses['countDocuments']({'type':_0x47c106[_0x25c906(0x228)]});return{..._0x47c106[_0x25c906(0x222)](),'count':_0x5a8f50};}));_0x43a1a0['render'](_0x49ca9f(0x218),{'success':_0x2f50cd[_0x49ca9f(0x227)](_0x49ca9f(0x1f4)),'errors':_0x2f50cd['flash'](_0x49ca9f(0x21f)),'role':_0x31bdbb,'profile':_0x4e9f37,'master_shop':_0x50e64e,'language':_0x51b0b4,'expensesData':_0x5d7fb3});}catch(_0x50a026){console[_0x49ca9f(0x20f)](_0x50a026);}}),router[a0_0x326e8c(0x1fa)](a0_0x326e8c(0x1f1),auth,async(_0x37d08c,_0x534705)=>{const _0x4cc49e=a0_0x326e8c;try{const {name:_0x2eef9b}=_0x37d08c['body'],_0x4ff370=new expenses_type({'name':_0x2eef9b}),_0x2fcd5b=await expenses_type[_0x4cc49e(0x213)]({'name':_0x2eef9b});if(_0x2fcd5b)_0x37d08c[_0x4cc49e(0x227)](_0x4cc49e(0x21f),_0x2eef9b+'\x20expenses\x20is\x20alredy\x20added.\x20please\x20choose\x20another');else{_0x37d08c[_0x4cc49e(0x227)](_0x4cc49e(0x1f4),_0x2eef9b+_0x4cc49e(0x206));const _0x265518=await _0x4ff370[_0x4cc49e(0x1f8)]();}_0x534705[_0x4cc49e(0x223)](_0x4cc49e(0x202));}catch(_0xc9c5b1){console[_0x4cc49e(0x20f)](_0xc9c5b1);}}),router[a0_0x326e8c(0x1fa)](a0_0x326e8c(0x21d),auth,async(_0x374054,_0x1ab7ce)=>{const _0x9bb2c3=a0_0x326e8c;try{const _0x2b8e6b=_0x374054['params']['id'],_0x4fa637=await expenses_type[_0x9bb2c3(0x21c)](_0x2b8e6b),_0x4dc423=await expenses_type[_0x9bb2c3(0x21a)](_0x2b8e6b,_0x374054[_0x9bb2c3(0x211)]),_0x1ca128=await all_expenses['updateMany']({'type':_0x4fa637[_0x9bb2c3(0x228)]},{'$set':{'type':_0x374054[_0x9bb2c3(0x211)][_0x9bb2c3(0x228)]}});_0x374054[_0x9bb2c3(0x227)](_0x9bb2c3(0x1f4),'expenses\x20data\x20update\x20successfully'),_0x1ab7ce[_0x9bb2c3(0x223)](_0x9bb2c3(0x202));}catch(_0x4d15c8){console[_0x9bb2c3(0x20f)](_0x4d15c8);}}),router[a0_0x326e8c(0x220)]('/type/delete/:id',auth,async(_0xbbbbd2,_0x2f28ef)=>{const _0x2553ff=a0_0x326e8c;try{const _0x41e576=_0xbbbbd2[_0x2553ff(0x1f0)]['id'],_0x50b771=await expenses_type[_0x2553ff(0x200)](_0x41e576);_0xbbbbd2[_0x2553ff(0x227)](_0x2553ff(0x1f4),'Expenses\x20data\x20delete\x20successfully'),_0x2f28ef['redirect'](_0x2553ff(0x202));}catch(_0x32304c){console[_0x2553ff(0x20f)](_0x32304c);}}),router['get'](a0_0x326e8c(0x214),auth,async(_0x424b68,_0x46bf10)=>{const _0x46a44b=a0_0x326e8c;try{const {username:_0x32665f,email:_0x594a86,role:_0x3042a7}=_0x424b68[_0x46a44b(0x1fd)],_0x40e5f1=_0x424b68['user'],_0x2abf25=await profile[_0x46a44b(0x213)]({'email':_0x40e5f1[_0x46a44b(0x20c)]}),_0x2663a4=await master_shop[_0x46a44b(0x216)]();console[_0x46a44b(0x20f)](_0x46a44b(0x1f6),_0x2663a4);const _0xe5ca97=await expenses_type[_0x46a44b(0x216)]({}),_0x285c3b=await all_expenses[_0x46a44b(0x216)]({});console['log'](_0x285c3b);if(_0x2663a4[0x0]['language']==_0x46a44b(0x1fe)){var _0x52645f=users['English'];console[_0x46a44b(0x20f)](_0x52645f);}else{if(_0x2663a4[0x0][_0x46a44b(0x20e)]==_0x46a44b(0x210))var _0x52645f=users[_0x46a44b(0x210)];else{if(_0x2663a4[0x0][_0x46a44b(0x20e)]==_0x46a44b(0x1ef))var _0x52645f=users[_0x46a44b(0x1ef)];else{if(_0x2663a4[0x0][_0x46a44b(0x20e)]==_0x46a44b(0x203))var _0x52645f=users[_0x46a44b(0x203)];else{if(_0x2663a4[0x0][_0x46a44b(0x20e)]=='French')var _0x52645f=users[_0x46a44b(0x207)];else{if(_0x2663a4[0x0][_0x46a44b(0x20e)]==_0x46a44b(0x1f3))var _0x52645f=users[_0x46a44b(0x20a)];else{if(_0x2663a4[0x0][_0x46a44b(0x20e)]=='Chinese')var _0x52645f=users['Chinese'];else{if(_0x2663a4[0x0]['language']==_0x46a44b(0x201))var _0x52645f=users[_0x46a44b(0x1fb)];}}}}}}}_0x46bf10[_0x46a44b(0x219)]('expenses',{'success':_0x424b68[_0x46a44b(0x227)](_0x46a44b(0x1f4)),'errors':_0x424b68['flash'](_0x46a44b(0x21f)),'role':_0x40e5f1,'profile':_0x2abf25,'data':_0xe5ca97,'expenses_data':_0x285c3b,'master_shop':_0x2663a4,'language':_0x52645f});}catch(_0x21f89e){console[_0x46a44b(0x20f)](_0x21f89e);}}),router[a0_0x326e8c(0x220)](a0_0x326e8c(0x1ff),auth,async(_0x49f594,_0x46ab5a)=>{const _0xb217a9=a0_0x326e8c;try{const {username:_0x504a31,email:_0x189e6d,role:_0x5d78d3}=_0x49f594[_0xb217a9(0x1fd)],_0x3a7cd8=_0x49f594[_0xb217a9(0x1fd)],_0x4f8bf3=await profile[_0xb217a9(0x213)]({'email':_0x3a7cd8['email']}),_0x391539=await master_shop['find']();console[_0xb217a9(0x20f)](_0xb217a9(0x1f6),_0x391539);const _0x30a536=await expenses_type[_0xb217a9(0x216)]({});if(_0x391539[0x0]['language']==_0xb217a9(0x1fe)){var _0x2e2d39=users[_0xb217a9(0x1f7)];console['log'](_0x2e2d39);}else{if(_0x391539[0x0][_0xb217a9(0x20e)]==_0xb217a9(0x210))var _0x2e2d39=users[_0xb217a9(0x210)];else{if(_0x391539[0x0][_0xb217a9(0x20e)]=='German')var _0x2e2d39=users['German'];else{if(_0x391539[0x0][_0xb217a9(0x20e)]==_0xb217a9(0x203))var _0x2e2d39=users[_0xb217a9(0x203)];else{if(_0x391539[0x0][_0xb217a9(0x20e)]=='French')var _0x2e2d39=users[_0xb217a9(0x207)];else{if(_0x391539[0x0][_0xb217a9(0x20e)]==_0xb217a9(0x1f3))var _0x2e2d39=users[_0xb217a9(0x20a)];else{if(_0x391539[0x0]['language']==_0xb217a9(0x205))var _0x2e2d39=users[_0xb217a9(0x205)];else{if(_0x391539[0x0][_0xb217a9(0x20e)]=='Arabic\x20(ae)')var _0x2e2d39=users[_0xb217a9(0x1fb)];}}}}}}}_0x46ab5a[_0xb217a9(0x219)](_0xb217a9(0x22a),{'success':_0x49f594[_0xb217a9(0x227)](_0xb217a9(0x1f4)),'errors':_0x49f594[_0xb217a9(0x227)](_0xb217a9(0x21f)),'role':_0x3a7cd8,'profile':_0x4f8bf3,'data':_0x30a536,'master_shop':_0x391539,'language':_0x2e2d39});}catch(_0x2f20b6){console['log'](_0x2f20b6);}}),router['post']('/view/add_expenses',auth,async(_0x4f31c2,_0x44738f)=>{const _0x2b9440=a0_0x326e8c;try{const {type:_0x4f47db,date:_0x29d961,amount:_0x3e610c,note:_0x31acf1}=_0x4f31c2[_0x2b9440(0x211)],_0x2ce943=new all_expenses({'type':_0x4f47db,'date':_0x29d961,'amount':_0x3e610c,'note':_0x31acf1}),_0x25eca9=await _0x2ce943[_0x2b9440(0x1f8)]();_0x44738f[_0x2b9440(0x223)](_0x2b9440(0x221));}catch(_0x97c05a){console[_0x2b9440(0x20f)](_0x97c05a);}}),router['get'](a0_0x326e8c(0x21b),auth,async(_0x38529d,_0x6faf51)=>{const _0x48784a=a0_0x326e8c;try{const {username:_0x6f6f3f,email:_0x9cc4e,role:_0x59e6f4}=_0x38529d[_0x48784a(0x1fd)],_0x3af95f=_0x38529d['user'],_0x4cccc4=await profile[_0x48784a(0x213)]({'email':_0x3af95f[_0x48784a(0x20c)]}),_0x19356e=await master_shop[_0x48784a(0x216)]();console['log'](_0x48784a(0x1f6),_0x19356e);const _0x267d09=await expenses_type[_0x48784a(0x216)]({});console[_0x48784a(0x20f)](_0x267d09);const _0x316cc6=await all_expenses['findById'](_0x38529d[_0x48784a(0x1f0)]['id']);console[_0x48784a(0x20f)](_0x316cc6);if(_0x19356e[0x0][_0x48784a(0x20e)]==_0x48784a(0x1fe)){var _0x5e8306=users[_0x48784a(0x1f7)];console[_0x48784a(0x20f)](_0x5e8306);}else{if(_0x19356e[0x0][_0x48784a(0x20e)]==_0x48784a(0x210))var _0x5e8306=users[_0x48784a(0x210)];else{if(_0x19356e[0x0][_0x48784a(0x20e)]==_0x48784a(0x1ef))var _0x5e8306=users[_0x48784a(0x1ef)];else{if(_0x19356e[0x0][_0x48784a(0x20e)]==_0x48784a(0x203))var _0x5e8306=users[_0x48784a(0x203)];else{if(_0x19356e[0x0]['language']=='French')var _0x5e8306=users[_0x48784a(0x207)];else{if(_0x19356e[0x0][_0x48784a(0x20e)]=='Portuguese\x20(BR)')var _0x5e8306=users[_0x48784a(0x20a)];else{if(_0x19356e[0x0]['language']==_0x48784a(0x205))var _0x5e8306=users[_0x48784a(0x205)];else{if(_0x19356e[0x0][_0x48784a(0x20e)]==_0x48784a(0x201))var _0x5e8306=users[_0x48784a(0x1fb)];}}}}}}}_0x6faf51[_0x48784a(0x219)](_0x48784a(0x209),{'success':_0x38529d['flash'](_0x48784a(0x1f4)),'errors':_0x38529d['flash'](_0x48784a(0x21f)),'role':_0x3af95f,'profile':_0x4cccc4,'data':_0x267d09,'expenses_data':_0x316cc6,'master_shop':_0x19356e,'language':_0x5e8306});}catch(_0x504036){console[_0x48784a(0x20f)](_0x504036);}}),router['post'](a0_0x326e8c(0x21b),auth,async(_0x52f50d,_0x5e0fb5)=>{const _0x9aa736=a0_0x326e8c;try{const _0x1678f8=_0x52f50d[_0x9aa736(0x1f0)]['id'];console[_0x9aa736(0x20f)](_0x1678f8);const _0x346243=await all_expenses[_0x9aa736(0x21a)](_0x1678f8,_0x52f50d[_0x9aa736(0x211)]);console[_0x9aa736(0x20f)](_0x346243),_0x52f50d[_0x9aa736(0x227)](_0x9aa736(0x1f4),'expenses\x20data\x20update\x20successfully'),_0x5e0fb5['redirect']('/all_expenses/view');}catch(_0x1bac59){console['log'](_0x1bac59);}}),module['exports']=router;