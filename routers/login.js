const a0_0x698305=a0_0x4d0b;function a0_0x4d0b(_0x31cf5f,_0x3f3d69){const _0x249f5f=a0_0x249f();return a0_0x4d0b=function(_0x4d0b29,_0x437b8e){_0x4d0b29=_0x4d0b29-0x17d;let _0x5dd0f3=_0x249f5f[_0x4d0b29];return _0x5dd0f3;},a0_0x4d0b(_0x31cf5f,_0x3f3d69);}function a0_0x249f(){const _0x2bfe35=['login\x20staff','5102187SNrfoD','5225NxBvzo','16HBGJcM','status','log','body','/staff/:id','email','/staff/view','sign','env','/validate','/index','215210AEFUCl','/logout','type_of_acc_cat','staff','login\x20master','cookie','get','8274QYXFHH','../middleware/auth','clearCookie','637080osCUGL','jwt','_id','4809IVNXVW','render','role','express','params','Router','login\x20successfully','errors','compare','your\x20email\x20is\x20not\x20register','account_category','6410mZfrEk','Disabled','warehouse','jsonwebtoken','login','findOne','8811657VxdODr','redirect','username','validate','32718708tQCXLc','flash','success','2wotvdN','8BcXCjY','/login','find','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','your\x20password\x20is\x20wrong'];a0_0x249f=function(){return _0x2bfe35;};return a0_0x249f();}(function(_0x495525,_0x40ee0){const _0x42ac06=a0_0x4d0b,_0x572a3d=_0x495525();while(!![]){try{const _0x1c7a33=-parseInt(_0x42ac06(0x196))/0x1*(-parseInt(_0x42ac06(0x182))/0x2)+parseInt(_0x42ac06(0x189))/0x3+parseInt(_0x42ac06(0x18b))/0x4*(-parseInt(_0x42ac06(0x1a0))/0x5)+-parseInt(_0x42ac06(0x19d))/0x6*(-parseInt(_0x42ac06(0x1a3))/0x7)+-parseInt(_0x42ac06(0x183))/0x8*(-parseInt(_0x42ac06(0x1b4))/0x9)+-parseInt(_0x42ac06(0x1ae))/0xa*(-parseInt(_0x42ac06(0x18a))/0xb)+-parseInt(_0x42ac06(0x17f))/0xc;if(_0x1c7a33===_0x40ee0)break;else _0x572a3d['push'](_0x572a3d['shift']());}catch(_0x343eb9){_0x572a3d['push'](_0x572a3d['shift']());}}}(a0_0x249f,0xde52d));const express=require(a0_0x698305(0x1a6)),app=express(),router=express[a0_0x698305(0x1a8)](),{sing_up,staff,profile,master_shop}=require('../models/all_models'),bcrypt=require('bcryptjs'),jwt=require(a0_0x698305(0x1b1)),auth=require(a0_0x698305(0x19e));router[a0_0x698305(0x19c)]('/',async(_0x54fc75,_0x4f9cb0)=>{const _0x583833=a0_0x698305;try{const _0x3d751c=await master_shop[_0x583833(0x185)]();_0x4f9cb0[_0x583833(0x1a4)](_0x583833(0x1b2),{'success':_0x54fc75[_0x583833(0x180)](_0x583833(0x181)),'errors':_0x54fc75['flash']('errors'),'master_shop':_0x3d751c});}catch(_0xd39645){console[_0x583833(0x18d)](_0xd39645);}}),router[a0_0x698305(0x19c)](a0_0x698305(0x194),async(_0x1d649f,_0x17c026)=>{const _0x5c5f27=a0_0x698305;try{const _0xf5ce1=await master_shop['find']();_0x17c026[_0x5c5f27(0x1a4)](_0x5c5f27(0x17e),{'success':_0x1d649f[_0x5c5f27(0x180)](_0x5c5f27(0x181)),'errors':_0x1d649f[_0x5c5f27(0x180)](_0x5c5f27(0x1aa)),'master_shop':_0xf5ce1});}catch(_0x3699bf){console[_0x5c5f27(0x18d)](_0x3699bf);}}),router[a0_0x698305(0x19c)]('/login',async(_0x5c3015,_0x41a0aa)=>{const _0x3c07df=a0_0x698305;try{const _0xc4b0de=await master_shop[_0x3c07df(0x185)]();console[_0x3c07df(0x18d)](_0x3c07df(0x19a),_0xc4b0de),_0x41a0aa[_0x3c07df(0x1a4)](_0x3c07df(0x1b2),{'success':_0x5c3015['flash'](_0x3c07df(0x181)),'errors':_0x5c3015[_0x3c07df(0x180)](_0x3c07df(0x1aa)),'master_shop':_0xc4b0de});}catch(_0x4431a5){console[_0x3c07df(0x18d)](_0x4431a5);}}),router['post'](a0_0x698305(0x184),async(_0x109fba,_0x1b9ef1)=>{const _0x4c8e22=a0_0x698305;try{const _0x50a57d=_0x109fba['body'][_0x4c8e22(0x190)],_0x4100a1=await sing_up[_0x4c8e22(0x1b3)]({'email':_0x50a57d});if(!_0x4100a1)return _0x109fba['flash'](_0x4c8e22(0x1aa),_0x4c8e22(0x1ac)),_0x1b9ef1[_0x4c8e22(0x1b5)]('/login');const _0x1630f0=await staff[_0x4c8e22(0x1b3)]({'email':_0x4100a1['email']});var _0xa9caa5=_0x1630f0['account_category'],_0x3fbb0e=_0x1630f0[_0x4c8e22(0x198)],_0x1d173d=_0x1630f0['_id'],_0x26c7e3=_0x1630f0[_0x4c8e22(0x1b0)];if(_0x4100a1[_0x4c8e22(0x1a5)]==_0x4c8e22(0x199)){const _0x562674=await staff[_0x4c8e22(0x1b3)]({'email':_0x4100a1[_0x4c8e22(0x190)]});if(_0x562674[_0x4c8e22(0x18c)]==_0x4c8e22(0x1af))return _0x109fba['flash'](_0x4c8e22(0x1aa),'Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.'),_0x1b9ef1[_0x4c8e22(0x1b5)](_0x4c8e22(0x184));_0xa9caa5=_0x562674[_0x4c8e22(0x1ad)],_0x3fbb0e=_0x562674[_0x4c8e22(0x198)],_0x1d173d=_0x562674[_0x4c8e22(0x1a2)],_0x26c7e3=_0x562674[_0x4c8e22(0x1b0)];}const _0x17e02d=_0x109fba[_0x4c8e22(0x18e)]['password'],_0x2f5ec1=await bcrypt[_0x4c8e22(0x1ab)](_0x17e02d,_0x4100a1['password']);if(_0x2f5ec1==![])return _0x109fba[_0x4c8e22(0x180)](_0x4c8e22(0x1aa),_0x4c8e22(0x187)),_0x1b9ef1[_0x4c8e22(0x1b5)]('/login');const _0x219b2e=jwt[_0x4c8e22(0x192)]({'username':_0x4100a1[_0x4c8e22(0x17d)],'email':_0x4100a1[_0x4c8e22(0x190)],'role':_0x4100a1[_0x4c8e22(0x1a5)],'account_category':_0xa9caa5,'sales_category':_0x3fbb0e,'sttaff_id':_0x1d173d,'warehouse':_0x26c7e3},process[_0x4c8e22(0x193)]['secret_key']);_0x1b9ef1[_0x4c8e22(0x19b)](_0x4c8e22(0x1a1),_0x219b2e,{'expires':new Date(0xe677d213a700)}),_0x109fba[_0x4c8e22(0x180)](_0x4c8e22(0x181),'login\x20successfully'),_0x1b9ef1[_0x4c8e22(0x1b5)](_0x4c8e22(0x195));}catch(_0x4643ed){console[_0x4c8e22(0x18d)](_0x4643ed);}}),router[a0_0x698305(0x19c)](a0_0x698305(0x18f),async(_0x5466a5,_0x4caec4)=>{const _0xaec28e=a0_0x698305;try{const _0x1e8ca7=_0x5466a5[_0xaec28e(0x1a7)]['id'],_0x388bcc=await staff['findById']({'_id':_0x1e8ca7});console[_0xaec28e(0x18d)](_0xaec28e(0x188),_0x388bcc);const _0x2860b2=await staff[_0xaec28e(0x1b3)]({'email':_0x388bcc[_0xaec28e(0x190)]}),_0x5b2870=await sing_up[_0xaec28e(0x1b3)]({'email':_0x388bcc[_0xaec28e(0x190)]});var _0x2ca6b6=_0x2860b2['account_category'],_0x3f2697=_0x2860b2[_0xaec28e(0x198)],_0x5de7ff=_0x2860b2['_id'],_0x27d057=_0x2860b2[_0xaec28e(0x1b0)];if(_0x5b2870['role']==_0xaec28e(0x199)){const _0x2f71c4=await staff['findOne']({'email':_0x5b2870[_0xaec28e(0x190)]});if(_0x2f71c4[_0xaec28e(0x18c)]=='Disabled')return _0x5466a5['flash'](_0xaec28e(0x1aa),_0xaec28e(0x186)),_0x4caec4['redirect'](_0xaec28e(0x191));_0x2ca6b6=_0x2f71c4[_0xaec28e(0x1ad)],_0x3f2697=_0x2f71c4[_0xaec28e(0x198)],_0x5de7ff=_0x2f71c4['_id'],_0x27d057=_0x2f71c4[_0xaec28e(0x1b0)];}const _0x58efd3=jwt[_0xaec28e(0x192)]({'username':_0x5b2870[_0xaec28e(0x17d)],'email':_0x5b2870['email'],'role':_0x5b2870[_0xaec28e(0x1a5)],'account_category':_0x2ca6b6,'sales_category':_0x3f2697,'sttaff_id':_0x5de7ff,'warehouse':_0x27d057},process[_0xaec28e(0x193)]['secret_key']);_0x4caec4[_0xaec28e(0x19b)]('jwt',_0x58efd3,{'expires':new Date(0xe677d213a700)}),_0x5466a5[_0xaec28e(0x180)](_0xaec28e(0x181),_0xaec28e(0x1a9)),_0x4caec4[_0xaec28e(0x1b5)](_0xaec28e(0x195));}catch(_0x134b2b){console[_0xaec28e(0x18d)](_0x134b2b);}}),router[a0_0x698305(0x19c)](a0_0x698305(0x197),(_0x14fc31,_0x4961a3)=>{const _0x1c4b43=a0_0x698305;_0x4961a3[_0x1c4b43(0x19f)](_0x1c4b43(0x1a1)),_0x4961a3[_0x1c4b43(0x1b5)]('/login');}),module['exports']=router;