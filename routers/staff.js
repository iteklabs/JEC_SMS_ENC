function a0_0x10ad(){const _0x38b98b=['Enabled','Chinese','$name','Email\x20','name','Portuguese','success','log','findById','Portuguese\x20(BR)','sales_man_code','1lFMaCd','master','json','Arabic\x20(ae)','body','back','772285lmBIHB','Finished\x20Goods','Arabic','10JiZtUL','French','/view','post','60824ZEhYgG','1953408BMxTYQ','54WyEuBZ','Router','54899735BctpHU','flash','position','5947655QLRoTW','1053lXnYvM','express','user','English','bcryptjs','4177695joWCxw','get','language','email','Spanish','German','redirect','1825844iaXeaE','findOne','aggregate','\x20is\x20add\x20successfully','/staff/view','params','English\x20(US)','status','Hindi','/view/:id','errors','save','staff','find','render'];a0_0x10ad=function(){return _0x38b98b;};return a0_0x10ad();}const a0_0x1f5a82=a0_0x1136;(function(_0x42c0d8,_0x53acb0){const _0x569052=a0_0x1136,_0x35d215=_0x42c0d8();while(!![]){try{const _0xc0c1e4=-parseInt(_0x569052(0x1c9))/0x1*(parseInt(_0x569052(0x1af))/0x2)+-parseInt(_0x569052(0x1a8))/0x3+-parseInt(_0x569052(0x1d7))/0x4+parseInt(_0x569052(0x1cf))/0x5*(-parseInt(_0x569052(0x1d8))/0x6)+parseInt(_0x569052(0x1dd))/0x7+parseInt(_0x569052(0x1d6))/0x8*(-parseInt(_0x569052(0x1de))/0x9)+-parseInt(_0x569052(0x1d2))/0xa*(-parseInt(_0x569052(0x1da))/0xb);if(_0xc0c1e4===_0x53acb0)break;else _0x35d215['push'](_0x35d215['shift']());}catch(_0x3399b2){_0x35d215['push'](_0x35d215['shift']());}}}(a0_0x10ad,0xbb447));const express=require(a0_0x1f5a82(0x1df)),app=express(),router=express[a0_0x1f5a82(0x1d9)](),bcrypt=require(a0_0x1f5a82(0x1a7)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require('../models/all_models'),auth=require('../middleware/auth'),users=require('../public/language/languages.json');function a0_0x1136(_0x4a4119,_0x5c1574){const _0x10ad8d=a0_0x10ad();return a0_0x1136=function(_0x113658,_0x15b5f4){_0x113658=_0x113658-0x1a6;let _0x4d94cd=_0x10ad8d[_0x113658];return _0x4d94cd;},a0_0x1136(_0x4a4119,_0x5c1574);}router['get'](a0_0x1f5a82(0x1d4),auth,async(_0x45b4d8,_0x14d3b0)=>{const _0x38ec9=a0_0x1f5a82;try{const {username:_0xda9100,email:_0x2871c0,role:_0x3ebee0}=_0x45b4d8[_0x38ec9(0x1e0)],_0x3bbfea=_0x45b4d8[_0x38ec9(0x1e0)],_0x5a9d65=await profile[_0x38ec9(0x1b0)]({'email':_0x3bbfea['email']}),_0x12fc65=await master_shop[_0x38ec9(0x1bc)]();console[_0x38ec9(0x1c5)](_0x38ec9(0x1ca),_0x12fc65),warehouse_data=await warehouse[_0x38ec9(0x1b1)]([{'$match':{'status':_0x38ec9(0x1be)}},{'$group':{'_id':_0x38ec9(0x1c0),'name':{'$first':_0x38ec9(0x1c0)}}}]);const _0x241d2e=await staff['find']();console[_0x38ec9(0x1c5)](_0x241d2e);if(_0x12fc65[0x0][_0x38ec9(0x1aa)]==_0x38ec9(0x1b5)){var _0x150003=users[_0x38ec9(0x1a6)];console[_0x38ec9(0x1c5)](_0x150003);}else{if(_0x12fc65[0x0]['language']==_0x38ec9(0x1b7))var _0x150003=users[_0x38ec9(0x1b7)];else{if(_0x12fc65[0x0][_0x38ec9(0x1aa)]==_0x38ec9(0x1ad))var _0x150003=users[_0x38ec9(0x1ad)];else{if(_0x12fc65[0x0][_0x38ec9(0x1aa)]==_0x38ec9(0x1ac))var _0x150003=users[_0x38ec9(0x1ac)];else{if(_0x12fc65[0x0][_0x38ec9(0x1aa)]=='French')var _0x150003=users['French'];else{if(_0x12fc65[0x0][_0x38ec9(0x1aa)]==_0x38ec9(0x1c7))var _0x150003=users[_0x38ec9(0x1c3)];else{if(_0x12fc65[0x0][_0x38ec9(0x1aa)]==_0x38ec9(0x1bf))var _0x150003=users[_0x38ec9(0x1bf)];else{if(_0x12fc65[0x0][_0x38ec9(0x1aa)]=='Arabic\x20(ae)')var _0x150003=users[_0x38ec9(0x1d1)];}}}}}}}let _0x30631b=['Raw\x20Materials',_0x38ec9(0x1d0)];_0x14d3b0[_0x38ec9(0x1bd)](_0x38ec9(0x1bb),{'success':_0x45b4d8[_0x38ec9(0x1db)](_0x38ec9(0x1c4)),'errors':_0x45b4d8[_0x38ec9(0x1db)]('errors'),'role':_0x3bbfea,'profile':_0x5a9d65,'master_shop':_0x12fc65,'user':_0x241d2e,'language':_0x150003,'warehouse':warehouse_data,'warehouse_cat':_0x30631b});}catch(_0x234400){console[_0x38ec9(0x1c5)](_0x234400);}}),router[a0_0x1f5a82(0x1d5)]('/view',auth,async(_0xfc3795,_0x1120e2)=>{const _0x30c1a7=a0_0x1f5a82;try{const {name:_0x16db81,email:_0x508811,mobile:_0x3610d4,password:_0x5261bb,status:_0x1fea87,warehouse:_0x4f799f,position:_0x33478d,warehouse_cat:_0x489012,account_cat:_0x37b942,sales_cat:_0x7d8d46,sales_man_code:_0x8c1e0,district:_0x4f57c8}=_0xfc3795[_0x30c1a7(0x1cd)],_0x5bd792=await bcrypt['hash'](_0x5261bb,0xa),_0x2b6745=new staff({'name':_0x16db81,'email':_0x508811,'mobile':_0x3610d4,'status':_0x1fea87,'warehouse':_0x4f799f,'position':_0x33478d,'account_category':_0x37b942,'type_of_acc_cat':_0x7d8d46,'sales_man_code':_0x8c1e0,'district':_0x4f57c8}),_0x531542=await staff['findOne']({'email':_0x508811});if(_0x531542)return _0xfc3795[_0x30c1a7(0x1db)](_0x30c1a7(0x1b9),_0x30c1a7(0x1c1)+_0x508811+'\x20is\x20alredy\x20added.\x20please\x20choose\x20another'),_0x1120e2[_0x30c1a7(0x1ae)](_0x30c1a7(0x1ce)),![];const _0xa8ade1=await _0x2b6745[_0x30c1a7(0x1ba)](),_0x49917a=new sing_up({'name':_0x16db81,'email':_0x508811,'password':_0x5bd792,'role':_0x30c1a7(0x1bb)}),_0x48b44e=await _0x49917a[_0x30c1a7(0x1ba)](),_0x35736d=new profile({'firstname':_0x16db81,'email':_0x508811}),_0x1a6e3d=await _0x35736d[_0x30c1a7(0x1ba)]();_0xfc3795['flash'](_0x30c1a7(0x1c4),_0x16db81+_0x30c1a7(0x1b2)),_0x1120e2['redirect']('/staff/view');}catch(_0x2b2416){console[_0x30c1a7(0x1c5)](_0x2b2416);}}),router[a0_0x1f5a82(0x1a9)](a0_0x1f5a82(0x1b8),auth,async(_0x464b0b,_0x7be60b)=>{const _0x260016=a0_0x1f5a82;try{const _0x46901d=_0x464b0b[_0x260016(0x1b4)]['id'],_0x476b02=await master_shop[_0x260016(0x1bc)](),_0x3508aa=await staff[_0x260016(0x1c6)](_0x46901d);if(_0x476b02[0x0][_0x260016(0x1aa)]==_0x260016(0x1b5)){var _0x1ed537=users[_0x260016(0x1a6)];console['log'](_0x1ed537);}else{if(_0x476b02[0x0][_0x260016(0x1aa)]=='Hindi')var _0x1ed537=users[_0x260016(0x1b7)];else{if(_0x476b02[0x0][_0x260016(0x1aa)]==_0x260016(0x1ad))var _0x1ed537=users[_0x260016(0x1ad)];else{if(_0x476b02[0x0][_0x260016(0x1aa)]==_0x260016(0x1ac))var _0x1ed537=users[_0x260016(0x1ac)];else{if(_0x476b02[0x0][_0x260016(0x1aa)]=='French')var _0x1ed537=users[_0x260016(0x1d3)];else{if(_0x476b02[0x0][_0x260016(0x1aa)]==_0x260016(0x1c7))var _0x1ed537=users[_0x260016(0x1c3)];else{if(_0x476b02[0x0][_0x260016(0x1aa)]==_0x260016(0x1bf))var _0x1ed537=users['Chinese'];else{if(_0x476b02[0x0][_0x260016(0x1aa)]==_0x260016(0x1cc))var _0x1ed537=users[_0x260016(0x1d1)];}}}}}}}let _0x13711b=['Raw\x20Materials',_0x260016(0x1d0)];_0x7be60b[_0x260016(0x1bd)](_0x260016(0x1bb),{'success':_0x464b0b[_0x260016(0x1db)](_0x260016(0x1c4)),'errors':_0x464b0b['flash']('errors'),'master_shop':_0x476b02,'user':_0x3508aa,'language':_0x1ed537,'warehouse_cat':_0x13711b});}catch(_0x379721){console[_0x260016(0x1c5)](_0x379721);}}),router['post'](a0_0x1f5a82(0x1b8),auth,async(_0x5d0067,_0x10644e)=>{const _0x32365c=a0_0x1f5a82;try{const _0xc3a498=_0x5d0067['params']['id'],_0x8e38ef=await staff['findById'](_0xc3a498),{name:_0x38042d,email:_0x599138,mobile:_0x1329d8,password:_0x344f84,status:_0x4e204b,warehouse:_0x5d6235,position:_0x14f4f0,account_edit_cat:_0x6f1b86,sales_cat2:_0x381261,sales_man_code2:_0x2447dc,district_edit:_0x3e3ad0}=_0x5d0067[_0x32365c(0x1cd)];_0x8e38ef[_0x32365c(0x1c2)]=_0x38042d,_0x8e38ef[_0x32365c(0x1ab)]=_0x599138,_0x8e38ef['mobile']=_0x1329d8,_0x8e38ef['password']=_0x344f84,_0x8e38ef[_0x32365c(0x1b6)]=_0x4e204b,_0x8e38ef['warehouse']=_0x5d6235,_0x8e38ef[_0x32365c(0x1dc)]=_0x14f4f0,_0x8e38ef['account_category']=_0x6f1b86,_0x8e38ef['type_of_acc_cat']=_0x381261,_0x8e38ef[_0x32365c(0x1c8)]=_0x2447dc,_0x8e38ef['district']=_0x3e3ad0;const _0x5d0bdf=await _0x8e38ef['save'](),_0x52c0fe=await profile[_0x32365c(0x1b0)]({'email':_0x599138});_0x52c0fe['firstname']=_0x38042d,_0x52c0fe[_0x32365c(0x1ab)]=_0x599138,await _0x52c0fe[_0x32365c(0x1ba)](),_0x5d0067[_0x32365c(0x1db)](_0x32365c(0x1c4),'staff\x20data\x20update\x20successfully'),_0x10644e[_0x32365c(0x1ae)](_0x32365c(0x1b3));}catch(_0x3c78fe){console[_0x32365c(0x1c5)](_0x3c78fe),_0x10644e[_0x32365c(0x1b6)](0xc8)[_0x32365c(0x1cb)](_0x3c78fe);}}),module['exports']=router;