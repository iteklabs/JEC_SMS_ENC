const a0_0x8515c6=a0_0x16b6;(function(_0x46405e,_0x2fd04c){const _0x569391=a0_0x16b6,_0x4a4430=_0x46405e();while(!![]){try{const _0x12a7de=parseInt(_0x569391(0x1ab))/0x1*(parseInt(_0x569391(0x190))/0x2)+parseInt(_0x569391(0x172))/0x3+-parseInt(_0x569391(0x18a))/0x4+-parseInt(_0x569391(0x179))/0x5*(-parseInt(_0x569391(0x173))/0x6)+parseInt(_0x569391(0x17f))/0x7+parseInt(_0x569391(0x181))/0x8*(parseInt(_0x569391(0x18c))/0x9)+parseInt(_0x569391(0x189))/0xa*(parseInt(_0x569391(0x1a1))/0xb);if(_0x12a7de===_0x2fd04c)break;else _0x4a4430['push'](_0x4a4430['shift']());}catch(_0x3efcf5){_0x4a4430['push'](_0x4a4430['shift']());}}}(a0_0x3b81,0x5e139));const express=require(a0_0x8515c6(0x17b)),app=express(),router=express[a0_0x8515c6(0x188)](),auth=require(a0_0x8515c6(0x186)),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0x8515c6(0x170)),users=require('../public/language/languages.json'),nodemailer=require(a0_0x8515c6(0x191));function a0_0x16b6(_0x5b76e0,_0x123eb2){const _0x3b8194=a0_0x3b81();return a0_0x16b6=function(_0x16b6be,_0xb390f4){_0x16b6be=_0x16b6be-0x16e;let _0x274be2=_0x3b8194[_0x16b6be];return _0x274be2;},a0_0x16b6(_0x5b76e0,_0x123eb2);}function a0_0x3b81(){const _0x23bfec=['adj','Outgoing\x20Raw\x20materials','json','4829OSjaQD','save','findOne','email','errors','Hindi','flash','find','/transfer','render','4135XRqWtT','Adjustment\x20Finished\x20Goods','outF','French','English\x20(US)','language','../models/all_models','user','927999dNozwO','418578pWiukM','get','log','edit_approvals_view','/outgoing','Spanish','5DIIyDb','English','express','Portuguese','post','False','1767388RgaPtg','approvals_view','56BoScWG','Portuguese\x20(BR)','Transfer\x20Raw\x20materials','/transfer_finished','Arabic','../middleware/auth','trff','Router','2570HhBtvX','2412348eMokgp','isAllowEdit','37287ONAfJq','/adjustment','/outgoing_finished','success','104OGpFuI','nodemailer','German','/adjustment_finished','message','body','trf','Outgoing\x20Finished\x20Goods','Adjustment\x20Raw\x20materials','Chinese','out','Arabic\x20(ae)','invoice','Transfer\x20Finished\x20Goods'];a0_0x3b81=function(){return _0x23bfec;};return a0_0x3b81();}router[a0_0x8515c6(0x174)]('/view',auth,async(_0x3e2a15,_0x4a5f27)=>{const _0x5d5237=a0_0x8515c6;try{const {username:_0x4f4465,email:_0x1db9a2,role:_0x45fd6a}=_0x3e2a15['user'],_0x205786=_0x3e2a15[_0x5d5237(0x171)],_0x445648=await profile[_0x5d5237(0x1a3)]({'email':_0x205786[_0x5d5237(0x1a4)]}),_0x1bfb34=await master_shop['find'](),_0x2cb76c=await sales[_0x5d5237(0x1a8)]({'finalize':_0x5d5237(0x17e)}),_0x3eb0aa=await adjustment[_0x5d5237(0x1a8)]({'finalize':_0x5d5237(0x17e)}),_0x3c977d=await transfers[_0x5d5237(0x1a8)]({'finalize':_0x5d5237(0x17e)});if(_0x1bfb34[0x0][_0x5d5237(0x16f)]==_0x5d5237(0x16e))var _0x4cb7a9=users[_0x5d5237(0x17a)];else{if(_0x1bfb34[0x0]['language']=='Hindi')var _0x4cb7a9=users[_0x5d5237(0x1a6)];else{if(_0x1bfb34[0x0][_0x5d5237(0x16f)]=='German')var _0x4cb7a9=users[_0x5d5237(0x192)];else{if(_0x1bfb34[0x0]['language']==_0x5d5237(0x178))var _0x4cb7a9=users[_0x5d5237(0x178)];else{if(_0x1bfb34[0x0][_0x5d5237(0x16f)]==_0x5d5237(0x1ae))var _0x4cb7a9=users[_0x5d5237(0x1ae)];else{if(_0x1bfb34[0x0][_0x5d5237(0x16f)]==_0x5d5237(0x182))var _0x4cb7a9=users['Portuguese'];else{if(_0x1bfb34[0x0][_0x5d5237(0x16f)]==_0x5d5237(0x199))var _0x4cb7a9=users['Chinese'];else{if(_0x1bfb34[0x0][_0x5d5237(0x16f)]=='Arabic\x20(ae)')var _0x4cb7a9=users['Arabic'];}}}}}}}_0x4a5f27['render'](_0x5d5237(0x176),{'success':_0x3e2a15[_0x5d5237(0x1a7)](_0x5d5237(0x18f)),'errors':_0x3e2a15[_0x5d5237(0x1a7)](_0x5d5237(0x1a5)),'role':_0x205786,'profile':_0x445648,'master_shop':_0x1bfb34,'language':_0x4cb7a9,'sales':_0x2cb76c,'adjustment':_0x3eb0aa,'transfer':_0x3c977d});}catch(_0x399ae2){console[_0x5d5237(0x175)](_0x399ae2);}}),router['get'](a0_0x8515c6(0x177),auth,async(_0x376706,_0x3e6de7)=>{const _0x380fd6=a0_0x8515c6;try{const {username:_0x36f910,email:_0x4b44ce,role:_0xe485c2}=_0x376706['user'],_0x4627e6=_0x376706[_0x380fd6(0x171)],_0x335b6e=await profile['findOne']({'email':_0x4627e6['email']}),_0x374a35=await master_shop[_0x380fd6(0x1a8)](),_0x4a3a53=await sales[_0x380fd6(0x1a8)]({'finalize':'False'}),_0x48804f={'name':_0x380fd6(0x19f),'code':_0x380fd6(0x19a)};if(_0x374a35[0x0]['language']=='English\x20(US)')var _0x1f9f2d=users['English'];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]==_0x380fd6(0x1a6))var _0x1f9f2d=users[_0x380fd6(0x1a6)];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]==_0x380fd6(0x192))var _0x1f9f2d=users[_0x380fd6(0x192)];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]==_0x380fd6(0x178))var _0x1f9f2d=users[_0x380fd6(0x178)];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]==_0x380fd6(0x1ae))var _0x1f9f2d=users['French'];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]==_0x380fd6(0x182))var _0x1f9f2d=users[_0x380fd6(0x17c)];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]=='Chinese')var _0x1f9f2d=users[_0x380fd6(0x199)];else{if(_0x374a35[0x0][_0x380fd6(0x16f)]==_0x380fd6(0x19b))var _0x1f9f2d=users['Arabic'];}}}}}}}_0x3e6de7[_0x380fd6(0x1aa)](_0x380fd6(0x180),{'success':_0x376706[_0x380fd6(0x1a7)](_0x380fd6(0x18f)),'errors':_0x376706[_0x380fd6(0x1a7)](_0x380fd6(0x1a5)),'role':_0x4627e6,'profile':_0x335b6e,'master_shop':_0x374a35,'language':_0x1f9f2d,'data':_0x4a3a53,'titleName':_0x48804f});}catch(_0x220f49){console[_0x380fd6(0x175)](_0x220f49);}}),router[a0_0x8515c6(0x17d)](a0_0x8515c6(0x177),auth,async(_0x536b96,_0x1773ab)=>{const _0x2be04b=a0_0x8515c6;try{const {id:_0xfbb67c,invoice:_0x20d7df,value:_0xdfa023}=_0x536b96[_0x2be04b(0x195)],_0x3973ab=await sales[_0x2be04b(0x1a3)]({'_id':_0xfbb67c,'invoice':_0x20d7df});_0x3973ab['isAllowEdit']=_0xdfa023;const _0x182d52=await _0x3973ab[_0x2be04b(0x1a2)]();_0x1773ab[_0x2be04b(0x1a0)]({'status':0xc8,'data':{'BoolData':_0x182d52[_0x2be04b(0x18b)],'InvoiceNum':_0x182d52[_0x2be04b(0x19c)]}});}catch(_0x1ec8b6){return console[_0x2be04b(0x175)](_0x1ec8b6),{'status':0x194,'data':_0x1ec8b6[_0x2be04b(0x194)]};}}),router[a0_0x8515c6(0x174)]('/adjustment',auth,async(_0x2729eb,_0x112f82)=>{const _0x44d691=a0_0x8515c6;try{const {username:_0x3b36fb,email:_0x4bc087,role:_0x264800}=_0x2729eb['user'],_0x1b763d=_0x2729eb[_0x44d691(0x171)],_0x48e952=await profile[_0x44d691(0x1a3)]({'email':_0x1b763d[_0x44d691(0x1a4)]}),_0x3732d3=await master_shop['find'](),_0x497c0c=await adjustment[_0x44d691(0x1a8)]({'finalize':'False'}),_0x13f15b={'name':_0x44d691(0x198),'code':_0x44d691(0x19e)};if(_0x3732d3[0x0][_0x44d691(0x16f)]==_0x44d691(0x16e))var _0x32ae61=users[_0x44d691(0x17a)];else{if(_0x3732d3[0x0]['language']==_0x44d691(0x1a6))var _0x32ae61=users[_0x44d691(0x1a6)];else{if(_0x3732d3[0x0][_0x44d691(0x16f)]==_0x44d691(0x192))var _0x32ae61=users[_0x44d691(0x192)];else{if(_0x3732d3[0x0][_0x44d691(0x16f)]=='Spanish')var _0x32ae61=users[_0x44d691(0x178)];else{if(_0x3732d3[0x0][_0x44d691(0x16f)]==_0x44d691(0x1ae))var _0x32ae61=users[_0x44d691(0x1ae)];else{if(_0x3732d3[0x0][_0x44d691(0x16f)]==_0x44d691(0x182))var _0x32ae61=users['Portuguese'];else{if(_0x3732d3[0x0]['language']==_0x44d691(0x199))var _0x32ae61=users[_0x44d691(0x199)];else{if(_0x3732d3[0x0][_0x44d691(0x16f)]=='Arabic\x20(ae)')var _0x32ae61=users[_0x44d691(0x185)];}}}}}}}_0x112f82[_0x44d691(0x1aa)]('approvals_view',{'success':_0x2729eb['flash'](_0x44d691(0x18f)),'errors':_0x2729eb['flash'](_0x44d691(0x1a5)),'role':_0x1b763d,'profile':_0x48e952,'master_shop':_0x3732d3,'language':_0x32ae61,'data':_0x497c0c,'titleName':_0x13f15b});}catch(_0x2e3ef3){console[_0x44d691(0x175)](_0x2e3ef3);}}),router['post'](a0_0x8515c6(0x18d),auth,async(_0x9793a1,_0x31cd72)=>{const _0x3499c1=a0_0x8515c6;try{const {id:_0x1a4116,invoice:_0x1066cb,value:_0x105d3d}=_0x9793a1[_0x3499c1(0x195)],_0x4c9c06=await adjustment[_0x3499c1(0x1a3)]({'_id':_0x1a4116,'invoice':_0x1066cb});_0x4c9c06[_0x3499c1(0x18b)]=_0x105d3d;const _0x385591=await _0x4c9c06[_0x3499c1(0x1a2)]();_0x31cd72[_0x3499c1(0x1a0)]({'status':0xc8,'data':{'BoolData':_0x385591['isAllowEdit'],'InvoiceNum':_0x385591[_0x3499c1(0x19c)]}});}catch(_0x34888d){return{'status':0x194,'data':_0x34888d['message']};}}),router[a0_0x8515c6(0x174)](a0_0x8515c6(0x1a9),auth,async(_0x5ce5fd,_0x26401)=>{const _0x5dd077=a0_0x8515c6;try{const {username:_0x4f3594,email:_0x5484e9,role:_0x1e99c7}=_0x5ce5fd[_0x5dd077(0x171)],_0x387878=_0x5ce5fd['user'],_0xf6e4ba=await profile['findOne']({'email':_0x387878[_0x5dd077(0x1a4)]}),_0x3dc06e=await master_shop[_0x5dd077(0x1a8)](),_0x2d6d13=await transfers['find']({'finalize':_0x5dd077(0x17e)}),_0x551111={'name':_0x5dd077(0x183),'code':_0x5dd077(0x196)};if(_0x3dc06e[0x0][_0x5dd077(0x16f)]=='English\x20(US)')var _0x5f07a2=users[_0x5dd077(0x17a)];else{if(_0x3dc06e[0x0][_0x5dd077(0x16f)]==_0x5dd077(0x1a6))var _0x5f07a2=users[_0x5dd077(0x1a6)];else{if(_0x3dc06e[0x0]['language']==_0x5dd077(0x192))var _0x5f07a2=users[_0x5dd077(0x192)];else{if(_0x3dc06e[0x0]['language']=='Spanish')var _0x5f07a2=users[_0x5dd077(0x178)];else{if(_0x3dc06e[0x0]['language']=='French')var _0x5f07a2=users[_0x5dd077(0x1ae)];else{if(_0x3dc06e[0x0][_0x5dd077(0x16f)]==_0x5dd077(0x182))var _0x5f07a2=users[_0x5dd077(0x17c)];else{if(_0x3dc06e[0x0][_0x5dd077(0x16f)]=='Chinese')var _0x5f07a2=users[_0x5dd077(0x199)];else{if(_0x3dc06e[0x0][_0x5dd077(0x16f)]==_0x5dd077(0x19b))var _0x5f07a2=users[_0x5dd077(0x185)];}}}}}}}_0x26401[_0x5dd077(0x1aa)](_0x5dd077(0x180),{'success':_0x5ce5fd[_0x5dd077(0x1a7)]('success'),'errors':_0x5ce5fd['flash'](_0x5dd077(0x1a5)),'role':_0x387878,'profile':_0xf6e4ba,'master_shop':_0x3dc06e,'language':_0x5f07a2,'data':_0x2d6d13,'titleName':_0x551111});}catch(_0x2deeaa){console[_0x5dd077(0x175)](_0x2deeaa);}}),router['post'](a0_0x8515c6(0x1a9),auth,async(_0x5d7754,_0x3b2fb6)=>{const _0x2d454e=a0_0x8515c6;try{const {id:_0x3a794e,invoice:_0x1989f4,value:_0x33eb2d}=_0x5d7754[_0x2d454e(0x195)],_0x559833=await transfers[_0x2d454e(0x1a3)]({'_id':_0x3a794e,'invoice':_0x1989f4});_0x559833[_0x2d454e(0x18b)]=_0x33eb2d;const _0x4e95d9=await _0x559833[_0x2d454e(0x1a2)]();_0x3b2fb6[_0x2d454e(0x1a0)]({'status':0xc8,'data':{'BoolData':_0x4e95d9[_0x2d454e(0x18b)],'InvoiceNum':_0x4e95d9[_0x2d454e(0x19c)]}});}catch(_0x3bbe08){return{'status':0x194,'data':_0x3bbe08['message']};}}),router[a0_0x8515c6(0x174)](a0_0x8515c6(0x18e),auth,async(_0x3dd37c,_0x622557)=>{const _0x43ff51=a0_0x8515c6;try{const {username:_0x21f589,email:_0x35c9a7,role:_0x8bc2c6}=_0x3dd37c[_0x43ff51(0x171)],_0x52eb23=_0x3dd37c[_0x43ff51(0x171)],_0x45b54e=await profile[_0x43ff51(0x1a3)]({'email':_0x52eb23[_0x43ff51(0x1a4)]}),_0x2cf3ee=await master_shop['find'](),_0x3616be=await sales_finished[_0x43ff51(0x1a8)]({'finalize':_0x43ff51(0x17e)}),_0x41a4db={'name':_0x43ff51(0x197),'code':_0x43ff51(0x1ad)};if(_0x2cf3ee[0x0][_0x43ff51(0x16f)]=='English\x20(US)')var _0x5736e1=users[_0x43ff51(0x17a)];else{if(_0x2cf3ee[0x0]['language']==_0x43ff51(0x1a6))var _0x5736e1=users['Hindi'];else{if(_0x2cf3ee[0x0][_0x43ff51(0x16f)]==_0x43ff51(0x192))var _0x5736e1=users['German'];else{if(_0x2cf3ee[0x0][_0x43ff51(0x16f)]==_0x43ff51(0x178))var _0x5736e1=users['Spanish'];else{if(_0x2cf3ee[0x0][_0x43ff51(0x16f)]=='French')var _0x5736e1=users[_0x43ff51(0x1ae)];else{if(_0x2cf3ee[0x0]['language']==_0x43ff51(0x182))var _0x5736e1=users[_0x43ff51(0x17c)];else{if(_0x2cf3ee[0x0][_0x43ff51(0x16f)]=='Chinese')var _0x5736e1=users[_0x43ff51(0x199)];else{if(_0x2cf3ee[0x0][_0x43ff51(0x16f)]==_0x43ff51(0x19b))var _0x5736e1=users[_0x43ff51(0x185)];}}}}}}}_0x622557[_0x43ff51(0x1aa)]('approvals_view',{'success':_0x3dd37c[_0x43ff51(0x1a7)](_0x43ff51(0x18f)),'errors':_0x3dd37c[_0x43ff51(0x1a7)](_0x43ff51(0x1a5)),'role':_0x52eb23,'profile':_0x45b54e,'master_shop':_0x2cf3ee,'language':_0x5736e1,'data':_0x3616be,'titleName':_0x41a4db});}catch(_0x5e36a5){console[_0x43ff51(0x175)](_0x5e36a5);}}),router[a0_0x8515c6(0x17d)](a0_0x8515c6(0x18e),auth,async(_0x571dd7,_0x265743)=>{const _0x3eb5e3=a0_0x8515c6;try{const {id:_0x24a922,invoice:_0x24c865,value:_0x3d7201}=_0x571dd7[_0x3eb5e3(0x195)],_0x5f5c2a=await sales_finished[_0x3eb5e3(0x1a3)]({'_id':_0x24a922,'invoice':_0x24c865});_0x5f5c2a[_0x3eb5e3(0x18b)]=_0x3d7201;const _0x37ec3b=await _0x5f5c2a[_0x3eb5e3(0x1a2)]();_0x265743[_0x3eb5e3(0x1a0)]({'status':0xc8,'data':{'BoolData':_0x37ec3b[_0x3eb5e3(0x18b)],'InvoiceNum':_0x37ec3b[_0x3eb5e3(0x19c)]}});}catch(_0x5bae50){return console[_0x3eb5e3(0x175)](_0x5bae50),{'status':0x194,'data':_0x5bae50[_0x3eb5e3(0x194)]};}}),router[a0_0x8515c6(0x174)](a0_0x8515c6(0x193),auth,async(_0x3eb2e1,_0x578d0f)=>{const _0x4370c7=a0_0x8515c6;try{const {username:_0x2f1084,email:_0x4e55d6,role:_0x3a95db}=_0x3eb2e1[_0x4370c7(0x171)],_0x5a4608=_0x3eb2e1[_0x4370c7(0x171)],_0x393be9=await profile['findOne']({'email':_0x5a4608[_0x4370c7(0x1a4)]}),_0x48171f=await master_shop[_0x4370c7(0x1a8)](),_0x4c2572=await adjustment_finished[_0x4370c7(0x1a8)]({'finalize':_0x4370c7(0x17e)}),_0x4379d2={'name':_0x4370c7(0x1ac),'code':'adjf'};if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x16e))var _0x49607f=users['English'];else{if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x1a6))var _0x49607f=users[_0x4370c7(0x1a6)];else{if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x192))var _0x49607f=users[_0x4370c7(0x192)];else{if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x178))var _0x49607f=users[_0x4370c7(0x178)];else{if(_0x48171f[0x0]['language']==_0x4370c7(0x1ae))var _0x49607f=users[_0x4370c7(0x1ae)];else{if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x182))var _0x49607f=users[_0x4370c7(0x17c)];else{if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x199))var _0x49607f=users[_0x4370c7(0x199)];else{if(_0x48171f[0x0][_0x4370c7(0x16f)]==_0x4370c7(0x19b))var _0x49607f=users[_0x4370c7(0x185)];}}}}}}}_0x578d0f[_0x4370c7(0x1aa)](_0x4370c7(0x180),{'success':_0x3eb2e1[_0x4370c7(0x1a7)](_0x4370c7(0x18f)),'errors':_0x3eb2e1[_0x4370c7(0x1a7)]('errors'),'role':_0x5a4608,'profile':_0x393be9,'master_shop':_0x48171f,'language':_0x49607f,'data':_0x4c2572,'titleName':_0x4379d2});}catch(_0x5b3014){console[_0x4370c7(0x175)](_0x5b3014);}}),router[a0_0x8515c6(0x17d)](a0_0x8515c6(0x193),auth,async(_0x397e0c,_0x48aa54)=>{const _0x2f7e6e=a0_0x8515c6;try{const {id:_0x56de35,invoice:_0x122f54,value:_0x58f9c2}=_0x397e0c[_0x2f7e6e(0x195)],_0x79715a=await adjustment_finished[_0x2f7e6e(0x1a3)]({'_id':_0x56de35,'invoice':_0x122f54});_0x79715a[_0x2f7e6e(0x18b)]=_0x58f9c2;const _0x3b9aa6=await _0x79715a[_0x2f7e6e(0x1a2)]();_0x48aa54['json']({'status':0xc8,'data':{'BoolData':_0x3b9aa6[_0x2f7e6e(0x18b)],'InvoiceNum':_0x3b9aa6[_0x2f7e6e(0x19c)]}});}catch(_0x363f53){return{'status':0x194,'data':_0x363f53['message']};}}),router['get'](a0_0x8515c6(0x184),auth,async(_0x35f06d,_0x3dd74c)=>{const _0x3244c9=a0_0x8515c6;try{const {username:_0x4098a,email:_0x582a53,role:_0x28599e}=_0x35f06d[_0x3244c9(0x171)],_0x267f0b=_0x35f06d[_0x3244c9(0x171)],_0x475841=await profile[_0x3244c9(0x1a3)]({'email':_0x267f0b[_0x3244c9(0x1a4)]}),_0x226c42=await master_shop[_0x3244c9(0x1a8)](),_0x53ab04=await transfers_finished['find']({'finalize':'False'}),_0x253db6={'name':_0x3244c9(0x19d),'code':_0x3244c9(0x187)};if(_0x226c42[0x0][_0x3244c9(0x16f)]==_0x3244c9(0x16e))var _0x16947d=users[_0x3244c9(0x17a)];else{if(_0x226c42[0x0]['language']=='Hindi')var _0x16947d=users[_0x3244c9(0x1a6)];else{if(_0x226c42[0x0][_0x3244c9(0x16f)]=='German')var _0x16947d=users[_0x3244c9(0x192)];else{if(_0x226c42[0x0]['language']==_0x3244c9(0x178))var _0x16947d=users['Spanish'];else{if(_0x226c42[0x0][_0x3244c9(0x16f)]==_0x3244c9(0x1ae))var _0x16947d=users[_0x3244c9(0x1ae)];else{if(_0x226c42[0x0]['language']==_0x3244c9(0x182))var _0x16947d=users['Portuguese'];else{if(_0x226c42[0x0][_0x3244c9(0x16f)]==_0x3244c9(0x199))var _0x16947d=users[_0x3244c9(0x199)];else{if(_0x226c42[0x0][_0x3244c9(0x16f)]==_0x3244c9(0x19b))var _0x16947d=users['Arabic'];}}}}}}}_0x3dd74c['render'](_0x3244c9(0x180),{'success':_0x35f06d[_0x3244c9(0x1a7)](_0x3244c9(0x18f)),'errors':_0x35f06d[_0x3244c9(0x1a7)]('errors'),'role':_0x267f0b,'profile':_0x475841,'master_shop':_0x226c42,'language':_0x16947d,'data':_0x53ab04,'titleName':_0x253db6});}catch(_0xc50b){console['log'](_0xc50b);}}),router[a0_0x8515c6(0x17d)]('/transfer_finished',auth,async(_0x16ab5e,_0x5303fc)=>{const _0x4e74ae=a0_0x8515c6;try{const {id:_0x26a683,invoice:_0x3a6133,value:_0x592b6d}=_0x16ab5e['body'],_0x306325=await transfers_finished[_0x4e74ae(0x1a3)]({'_id':_0x26a683,'invoice':_0x3a6133});_0x306325[_0x4e74ae(0x18b)]=_0x592b6d;const _0x1cc80f=await _0x306325[_0x4e74ae(0x1a2)]();_0x5303fc[_0x4e74ae(0x1a0)]({'status':0xc8,'data':{'BoolData':_0x1cc80f[_0x4e74ae(0x18b)],'InvoiceNum':_0x1cc80f[_0x4e74ae(0x19c)]}});}catch(_0x12b93d){return{'status':0x194,'data':_0x12b93d['message']};}}),module['exports']=router;