const a0_0x41da37=a0_0x908f;(function(_0x373460,_0x155d8f){const _0x5bb277=a0_0x908f,_0x46d418=_0x373460();while(!![]){try{const _0x198420=parseInt(_0x5bb277(0x89))/0x1+parseInt(_0x5bb277(0xab))/0x2+-parseInt(_0x5bb277(0xad))/0x3*(-parseInt(_0x5bb277(0xa6))/0x4)+-parseInt(_0x5bb277(0xa0))/0x5*(parseInt(_0x5bb277(0x9e))/0x6)+parseInt(_0x5bb277(0x93))/0x7*(parseInt(_0x5bb277(0x9a))/0x8)+parseInt(_0x5bb277(0xa5))/0x9*(parseInt(_0x5bb277(0x9d))/0xa)+parseInt(_0x5bb277(0x8a))/0xb*(-parseInt(_0x5bb277(0x85))/0xc);if(_0x198420===_0x155d8f)break;else _0x46d418['push'](_0x46d418['shift']());}catch(_0x180275){_0x46d418['push'](_0x46d418['shift']());}}}(a0_0x476b,0x831b9));function a0_0x476b(){const _0x312e6d=['441999XmZdst','8156KwrXJU','errors','success','render','express','443268XBgCXe','../middleware/auth','849lLNZKN','compare','find','warehouse_category','../models/all_models','secret_key','/login','cookie','email','jwt','log','login\x20master','exports','/staff/view','jsonwebtoken','env','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','post','staff','14929116nuIYEA','your\x20email\x20is\x20not\x20register','/staff/:id','clearCookie','252331CwHMmc','11CVzRgi','get','body','/index','findOne','flash','redirect','password','login\x20successfully','91EVSrNI','type_of_acc_cat','warehouse','login','bcryptjs','/validate','username','271272TQvlUR','validate','role','70OaiJGw','6jkOYtU','Disabled','272430vBwBXM','sign','your\x20password\x20is\x20wrong','Router','_id'];a0_0x476b=function(){return _0x312e6d;};return a0_0x476b();}function a0_0x908f(_0xf68c28,_0x649d85){const _0x476b56=a0_0x476b();return a0_0x908f=function(_0x908f12,_0x1ca62f){_0x908f12=_0x908f12-0x79;let _0x2722fe=_0x476b56[_0x908f12];return _0x2722fe;},a0_0x908f(_0xf68c28,_0x649d85);}const express=require(a0_0x41da37(0xaa)),app=express(),router=express[a0_0x41da37(0xa3)](),{sing_up,staff,profile,master_shop}=require(a0_0x41da37(0xb1)),bcrypt=require(a0_0x41da37(0x97)),jwt=require(a0_0x41da37(0x80)),auth=require(a0_0x41da37(0xac));router[a0_0x41da37(0x8b)]('/',async(_0x4cd7b6,_0x57643e)=>{const _0x1400e9=a0_0x41da37;try{const _0x543e38=await master_shop[_0x1400e9(0xaf)]();_0x57643e[_0x1400e9(0xa9)](_0x1400e9(0x96),{'success':_0x4cd7b6['flash']('success'),'errors':_0x4cd7b6['flash'](_0x1400e9(0xa7)),'master_shop':_0x543e38});}catch(_0x5ad141){console[_0x1400e9(0x7c)](_0x5ad141);}}),router['get'](a0_0x41da37(0x98),async(_0x130eda,_0xac942a)=>{const _0x1d904f=a0_0x41da37;try{const _0x1a0b5c=await master_shop['find']();_0xac942a[_0x1d904f(0xa9)](_0x1d904f(0x9b),{'success':_0x130eda[_0x1d904f(0x8f)](_0x1d904f(0xa8)),'errors':_0x130eda['flash'](_0x1d904f(0xa7)),'master_shop':_0x1a0b5c});}catch(_0x26eb3a){console[_0x1d904f(0x7c)](_0x26eb3a);}}),router[a0_0x41da37(0x8b)](a0_0x41da37(0xb3),async(_0x286f25,_0x16c35b)=>{const _0x5d7f65=a0_0x41da37;try{const _0x1db0d=await master_shop[_0x5d7f65(0xaf)]();console[_0x5d7f65(0x7c)](_0x5d7f65(0x7d),_0x1db0d),_0x16c35b[_0x5d7f65(0xa9)](_0x5d7f65(0x96),{'success':_0x286f25[_0x5d7f65(0x8f)](_0x5d7f65(0xa8)),'errors':_0x286f25['flash'](_0x5d7f65(0xa7)),'master_shop':_0x1db0d});}catch(_0x5d8ebd){console[_0x5d7f65(0x7c)](_0x5d8ebd);}}),router[a0_0x41da37(0x83)](a0_0x41da37(0xb3),async(_0x5e9edf,_0x490f23)=>{const _0x1eaea3=a0_0x41da37;try{const _0x65330c=_0x5e9edf['body'][_0x1eaea3(0x7a)],_0x4e3645=await sing_up[_0x1eaea3(0x8e)]({'email':_0x65330c});if(!_0x4e3645)return _0x5e9edf[_0x1eaea3(0x8f)](_0x1eaea3(0xa7),_0x1eaea3(0x86)),_0x490f23[_0x1eaea3(0x90)](_0x1eaea3(0xb3));const _0x4ec016=await staff['findOne']({'email':_0x4e3645[_0x1eaea3(0x7a)]});var _0x2b68a1=_0x4ec016['account_category'],_0x3d0b9a=_0x4ec016[_0x1eaea3(0x94)],_0x2f2db1=_0x4ec016[_0x1eaea3(0xa4)],_0x2dcd31=_0x4ec016[_0x1eaea3(0x95)];if(_0x4e3645[_0x1eaea3(0x9c)]==_0x1eaea3(0x84)){const _0x14bc8d=await staff[_0x1eaea3(0x8e)]({'email':_0x4e3645[_0x1eaea3(0x7a)]});if(_0x14bc8d['status']==_0x1eaea3(0x9f))return _0x5e9edf['flash'](_0x1eaea3(0xa7),_0x1eaea3(0x82)),_0x490f23[_0x1eaea3(0x90)](_0x1eaea3(0xb3));_0x2b68a1=_0x14bc8d['account_category'],_0x3d0b9a=_0x14bc8d[_0x1eaea3(0x94)],_0x2f2db1=_0x14bc8d[_0x1eaea3(0xa4)],_0x2dcd31=_0x14bc8d[_0x1eaea3(0x95)];}const _0x48f330=_0x5e9edf[_0x1eaea3(0x8c)][_0x1eaea3(0x91)],_0x5f2914=await bcrypt[_0x1eaea3(0xae)](_0x48f330,_0x4e3645[_0x1eaea3(0x91)]);if(_0x5f2914==![])return _0x5e9edf[_0x1eaea3(0x8f)](_0x1eaea3(0xa7),_0x1eaea3(0xa2)),_0x490f23[_0x1eaea3(0x90)](_0x1eaea3(0xb3));const _0x4330a6=jwt[_0x1eaea3(0xa1)]({'username':_0x4e3645[_0x1eaea3(0x99)],'email':_0x4e3645[_0x1eaea3(0x7a)],'role':_0x4e3645['role'],'account_category':_0x2b68a1,'sales_category':_0x3d0b9a,'sttaff_id':_0x2f2db1,'warehouse':_0x2dcd31},process[_0x1eaea3(0x81)]['secret_key']);_0x490f23['cookie'](_0x1eaea3(0x7b),_0x4330a6,{'expires':new Date(0xe677d213a700)}),_0x5e9edf['flash']('success','login\x20successfully'),_0x490f23['redirect'](_0x1eaea3(0x8d));}catch(_0x39b13c){console['log'](_0x39b13c);}}),router[a0_0x41da37(0x8b)](a0_0x41da37(0x87),async(_0x134b76,_0x41e73b)=>{const _0x537092=a0_0x41da37;try{const _0xce13c4=_0x134b76['params']['id'],_0x32e07f=await staff['findById']({'_id':_0xce13c4});_0x32e07f['status']==_0x537092(0x9f)&&(_0x134b76[_0x537092(0x8f)](_0x537092(0xa7),'Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.'),_0x41e73b['redirect'](_0x537092(0x7f)));const _0x4970c2=await sing_up['findOne']({'email':_0x32e07f[_0x537092(0x7a)]});var _0x3967dc=_0x32e07f[_0x537092(0xb0)];if(_0x4970c2[_0x537092(0x9c)]==_0x537092(0x84)){const _0x5da82d=await staff['findOne']({'name':_0x4970c2['name']});_0x3967dc=_0x5da82d[_0x537092(0xb0)];}const _0x1423cb=jwt[_0x537092(0xa1)]({'username':_0x4970c2['username'],'email':_0x4970c2[_0x537092(0x7a)],'role':_0x4970c2[_0x537092(0x9c)],'warehouse_category':_0x3967dc},process[_0x537092(0x81)][_0x537092(0xb2)]);_0x41e73b[_0x537092(0x79)](_0x537092(0x7b),_0x1423cb,{'expires':new Date(0xe677d213a700)}),_0x134b76[_0x537092(0x8f)](_0x537092(0xa8),_0x537092(0x92)),_0x41e73b['redirect'](_0x537092(0x8d));}catch(_0x36a862){console[_0x537092(0x7c)](_0x36a862);}}),router[a0_0x41da37(0x8b)]('/logout',(_0x3c2f89,_0x488bd8)=>{const _0x56eb86=a0_0x41da37;_0x488bd8[_0x56eb86(0x88)](_0x56eb86(0x7b)),_0x488bd8['redirect']('/login');}),module[a0_0x41da37(0x7e)]=router;