function a0_0xf67a(){const _0x682de1=['9xhqvEK','find','2491742QRTevH','findById','_id','78RVFszp','login\x20successfully','/logout','log','status','findOne','body','26031YHhOPH','username','env','post','Disabled','secret_key','redirect','email','staff','success','jwt','get','login','express','type_of_acc_cat','compare','1563087YbUoEe','1291228LVoVUT','/staff/view','name','593481ZGENXd','cookie','password','/login','your\x20password\x20is\x20wrong','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','clearCookie','20UFziBi','sign','render','Router','warehouse_category','warehouse','76398072yvuGgg','flash','6840976HCtuPv','errors','/index','role','validate','30LXkkpA','6hGizpU','account_category'];a0_0xf67a=function(){return _0x682de1;};return a0_0xf67a();}const a0_0x301aac=a0_0x5836;(function(_0x10b0b6,_0x2ff2dc){const _0x3cdc5e=a0_0x5836,_0x142c95=_0x10b0b6();while(!![]){try{const _0x343a58=-parseInt(_0x3cdc5e(0x139))/0x1+parseInt(_0x3cdc5e(0x11b))/0x2*(-parseInt(_0x3cdc5e(0x129))/0x3)+parseInt(_0x3cdc5e(0x13a))/0x4*(-parseInt(_0x3cdc5e(0x144))/0x5)+-parseInt(_0x3cdc5e(0x122))/0x6*(parseInt(_0x3cdc5e(0x13d))/0x7)+parseInt(_0x3cdc5e(0x115))/0x8*(-parseInt(_0x3cdc5e(0x11d))/0x9)+parseInt(_0x3cdc5e(0x11a))/0xa*(-parseInt(_0x3cdc5e(0x11f))/0xb)+parseInt(_0x3cdc5e(0x113))/0xc;if(_0x343a58===_0x2ff2dc)break;else _0x142c95['push'](_0x142c95['shift']());}catch(_0x3dd966){_0x142c95['push'](_0x142c95['shift']());}}}(a0_0xf67a,0xcf58d));const express=require(a0_0x301aac(0x136)),app=express(),router=express[a0_0x301aac(0x147)](),{sing_up,staff,profile,master_shop}=require('../models/all_models'),bcrypt=require('bcryptjs'),jwt=require('jsonwebtoken'),auth=require('../middleware/auth');function a0_0x5836(_0xb87af1,_0x5a90bf){const _0xf67ada=a0_0xf67a();return a0_0x5836=function(_0x5836c2,_0x3cd885){_0x5836c2=_0x5836c2-0x113;let _0x371142=_0xf67ada[_0x5836c2];return _0x371142;},a0_0x5836(_0xb87af1,_0x5a90bf);}router[a0_0x301aac(0x134)]('/',async(_0x55ade7,_0x54e2f5)=>{const _0x3e3e85=a0_0x301aac;try{const _0x4c81aa=await master_shop[_0x3e3e85(0x11e)]();_0x54e2f5['render'](_0x3e3e85(0x135),{'success':_0x55ade7[_0x3e3e85(0x114)](_0x3e3e85(0x132)),'errors':_0x55ade7[_0x3e3e85(0x114)](_0x3e3e85(0x116)),'master_shop':_0x4c81aa});}catch(_0x21e7a9){console[_0x3e3e85(0x125)](_0x21e7a9);}}),router[a0_0x301aac(0x134)]('/validate',async(_0x3846ec,_0x481de0)=>{const _0x3b8bc4=a0_0x301aac;try{const _0x4bb7ca=await master_shop[_0x3b8bc4(0x11e)]();_0x481de0[_0x3b8bc4(0x146)](_0x3b8bc4(0x119),{'success':_0x3846ec[_0x3b8bc4(0x114)](_0x3b8bc4(0x132)),'errors':_0x3846ec[_0x3b8bc4(0x114)]('errors'),'master_shop':_0x4bb7ca});}catch(_0xcfe5ad){console[_0x3b8bc4(0x125)](_0xcfe5ad);}}),router[a0_0x301aac(0x134)](a0_0x301aac(0x140),async(_0x1b07dc,_0x22e4a7)=>{const _0xcd0d59=a0_0x301aac;try{const _0x2ed6e1=await master_shop[_0xcd0d59(0x11e)]();console['log']('login\x20master',_0x2ed6e1),_0x22e4a7[_0xcd0d59(0x146)]('login',{'success':_0x1b07dc[_0xcd0d59(0x114)](_0xcd0d59(0x132)),'errors':_0x1b07dc[_0xcd0d59(0x114)](_0xcd0d59(0x116)),'master_shop':_0x2ed6e1});}catch(_0x47f885){console[_0xcd0d59(0x125)](_0x47f885);}}),router[a0_0x301aac(0x12c)](a0_0x301aac(0x140),async(_0x52e03d,_0x382028)=>{const _0x34e481=a0_0x301aac;try{const _0x3fd2a6=_0x52e03d['body'][_0x34e481(0x130)],_0x595d0a=await sing_up[_0x34e481(0x127)]({'email':_0x3fd2a6});if(!_0x595d0a)return _0x52e03d['flash'](_0x34e481(0x116),'your\x20email\x20is\x20not\x20register'),_0x382028[_0x34e481(0x12f)](_0x34e481(0x140));const _0x5cc3dc=await staff[_0x34e481(0x127)]({'email':_0x595d0a[_0x34e481(0x130)]});var _0x14078e=_0x5cc3dc[_0x34e481(0x11c)],_0xb8c6d3=_0x5cc3dc['type_of_acc_cat'],_0x527af4=_0x5cc3dc[_0x34e481(0x121)],_0x4bdd07=_0x5cc3dc[_0x34e481(0x149)];if(_0x595d0a[_0x34e481(0x118)]==_0x34e481(0x131)){const _0x33e6ff=await staff[_0x34e481(0x127)]({'email':_0x595d0a['email']});if(_0x33e6ff[_0x34e481(0x126)]==_0x34e481(0x12d))return _0x52e03d['flash'](_0x34e481(0x116),_0x34e481(0x142)),_0x382028[_0x34e481(0x12f)](_0x34e481(0x140));_0x14078e=_0x33e6ff[_0x34e481(0x11c)],_0xb8c6d3=_0x33e6ff[_0x34e481(0x137)],_0x527af4=_0x33e6ff[_0x34e481(0x121)],_0x4bdd07=_0x33e6ff[_0x34e481(0x149)];}const _0x5a95ad=_0x52e03d[_0x34e481(0x128)][_0x34e481(0x13f)],_0x2827d3=await bcrypt[_0x34e481(0x138)](_0x5a95ad,_0x595d0a[_0x34e481(0x13f)]);if(_0x2827d3==![])return _0x52e03d[_0x34e481(0x114)](_0x34e481(0x116),_0x34e481(0x141)),_0x382028[_0x34e481(0x12f)](_0x34e481(0x140));const _0x29650d=jwt['sign']({'username':_0x595d0a[_0x34e481(0x12a)],'email':_0x595d0a[_0x34e481(0x130)],'role':_0x595d0a[_0x34e481(0x118)],'account_category':_0x14078e,'sales_category':_0xb8c6d3,'sttaff_id':_0x527af4,'warehouse':_0x4bdd07},process[_0x34e481(0x12b)][_0x34e481(0x12e)]);_0x382028[_0x34e481(0x13e)](_0x34e481(0x133),_0x29650d,{'expires':new Date(0xe677d213a700)}),_0x52e03d[_0x34e481(0x114)](_0x34e481(0x132),_0x34e481(0x123)),_0x382028[_0x34e481(0x12f)](_0x34e481(0x117));}catch(_0x1763ca){console[_0x34e481(0x125)](_0x1763ca);}}),router['get']('/staff/:id',async(_0x47f5c4,_0xfdef2a)=>{const _0x5c751e=a0_0x301aac;try{const _0x4a33e7=_0x47f5c4['params']['id'],_0x30d205=await staff[_0x5c751e(0x120)]({'_id':_0x4a33e7});_0x30d205[_0x5c751e(0x126)]==_0x5c751e(0x12d)&&(_0x47f5c4['flash'](_0x5c751e(0x116),_0x5c751e(0x142)),_0xfdef2a['redirect'](_0x5c751e(0x13b)));const _0x1cc9b8=await sing_up[_0x5c751e(0x127)]({'email':_0x30d205[_0x5c751e(0x130)]});var _0x2ebcfa=_0x30d205[_0x5c751e(0x148)];if(_0x1cc9b8[_0x5c751e(0x118)]=='staff'){const _0x57ba4a=await staff[_0x5c751e(0x127)]({'name':_0x1cc9b8[_0x5c751e(0x13c)]});_0x2ebcfa=_0x57ba4a['warehouse_category'];}const _0x30356b=jwt[_0x5c751e(0x145)]({'username':_0x1cc9b8[_0x5c751e(0x12a)],'email':_0x1cc9b8[_0x5c751e(0x130)],'role':_0x1cc9b8['role'],'warehouse_category':_0x2ebcfa},process[_0x5c751e(0x12b)][_0x5c751e(0x12e)]);_0xfdef2a['cookie']('jwt',_0x30356b,{'expires':new Date(0xe677d213a700)}),_0x47f5c4[_0x5c751e(0x114)](_0x5c751e(0x132),'login\x20successfully'),_0xfdef2a[_0x5c751e(0x12f)](_0x5c751e(0x117));}catch(_0x3b9708){console[_0x5c751e(0x125)](_0x3b9708);}}),router[a0_0x301aac(0x134)](a0_0x301aac(0x124),(_0x235359,_0x44dd8c)=>{const _0x246807=a0_0x301aac;_0x44dd8c[_0x246807(0x143)](_0x246807(0x133)),_0x44dd8c[_0x246807(0x12f)]('/login');}),module['exports']=router;