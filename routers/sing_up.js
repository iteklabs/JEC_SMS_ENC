const a0_0xd0de03=a0_0x43f7;function a0_0x4364(){const _0xfe14a6=['839889ELBBJs','save','5MBBovZ','sing_up','Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!','express','login\x20master','errors','/sing_up_staff','exports','redirect','70XoBSRI','Router','2104842aRHhmM','render','hash','get','bcryptjs','7xfVhna','4158081yrwfCM','455039gLGRjm','success','377864ahHZZg','4rbAqth','Disabled','admin','/login','log','welcome\x20','post','923578EqhQgP','sing_up_staff','flash','578710tBBXWO','body','/sing_up'];a0_0x4364=function(){return _0xfe14a6;};return a0_0x4364();}function a0_0x43f7(_0x3b2d16,_0x55e9a6){const _0x4364d6=a0_0x4364();return a0_0x43f7=function(_0x43f72f,_0x16df95){_0x43f72f=_0x43f72f-0xd7;let _0x58ff21=_0x4364d6[_0x43f72f];return _0x58ff21;},a0_0x43f7(_0x3b2d16,_0x55e9a6);}(function(_0xab2306,_0x5e6103){const _0x27eaaa=a0_0x43f7,_0x1d2930=_0xab2306();while(!![]){try{const _0x4504dd=parseInt(_0x27eaaa(0xf6))/0x1+parseInt(_0x27eaaa(0xdc))/0x2+parseInt(_0x27eaaa(0xe2))/0x3*(-parseInt(_0x27eaaa(0xf9))/0x4)+parseInt(_0x27eaaa(0xe4))/0x5*(-parseInt(_0x27eaaa(0xef))/0x6)+-parseInt(_0x27eaaa(0xf4))/0x7*(-parseInt(_0x27eaaa(0xf8))/0x8)+-parseInt(_0x27eaaa(0xf5))/0x9+parseInt(_0x27eaaa(0xed))/0xa*(parseInt(_0x27eaaa(0xdf))/0xb);if(_0x4504dd===_0x5e6103)break;else _0x1d2930['push'](_0x1d2930['shift']());}catch(_0x4935d5){_0x1d2930['push'](_0x1d2930['shift']());}}}(a0_0x4364,0x3a7c0));const express=require(a0_0xd0de03(0xe7)),app=express(),router=express[a0_0xd0de03(0xee)](),bcrypt=require(a0_0xd0de03(0xf3)),{sing_up,staff,profile,master_shop}=require('../models/all_models'),auth=require('../middleware/auth');router['get'](a0_0xd0de03(0xe1),(_0x5e1bff,_0x5b32df)=>{const _0x531a00=a0_0xd0de03;_0x5b32df[_0x531a00(0xf0)](_0x531a00(0xe5),{'success':_0x5e1bff['flash'](_0x531a00(0xf7)),'errors':_0x5e1bff[_0x531a00(0xde)]('errors')});}),router[a0_0xd0de03(0xdb)]('/sing_up',async(_0x5d6bbd,_0x2e89f7)=>{const _0x53ad71=a0_0xd0de03;try{console[_0x53ad71(0xd9)](_0x5d6bbd[_0x53ad71(0xe0)]);const {name:_0x1c1812,email:_0x508eb8,password:_0x45954f,role:_0x50dba3}=_0x5d6bbd[_0x53ad71(0xe0)];console['log'](_0x50dba3);const _0x23afaa=await bcrypt[_0x53ad71(0xf1)](_0x45954f,0xa),_0x2ed612=new sing_up({'name':_0x1c1812,'email':_0x508eb8,'password':_0x23afaa,'role':_0x53ad71(0xd7)}),_0x41dc33=await _0x2ed612[_0x53ad71(0xe3)](),_0x2d0112=new profile({'firstname':_0x1c1812,'email':_0x508eb8}),_0x37c701=await _0x2d0112[_0x53ad71(0xe3)]();_0x5d6bbd['flash'](_0x53ad71(0xf7),_0x53ad71(0xda)+_0x1c1812),_0x2e89f7[_0x53ad71(0xec)](_0x53ad71(0xd8));}catch(_0x4cce2d){console[_0x53ad71(0xd9)](_0x4cce2d);}}),router[a0_0xd0de03(0xf2)]('/sing_up_staff',async(_0x8e10ea,_0x46fc16)=>{const _0x3604fa=a0_0xd0de03;try{const _0x8474a5=await master_shop['find']();console[_0x3604fa(0xd9)](_0x3604fa(0xe8),_0x8474a5),_0x46fc16[_0x3604fa(0xf0)](_0x3604fa(0xdd),{'success':_0x8e10ea['flash'](_0x3604fa(0xf7)),'errors':_0x8e10ea['flash'](_0x3604fa(0xe9)),'master_shop':_0x8474a5});}catch(_0x2ab422){console['log'](_0x2ab422);}}),router[a0_0xd0de03(0xdb)](a0_0xd0de03(0xea),async(_0x20f635,_0x2c0af6)=>{const _0x217710=a0_0xd0de03;try{console[_0x217710(0xd9)](_0x20f635['body']);const {name:_0x2efea0,email:_0x15ca9f,password:_0x4adbe5,mobile:_0x14cb0b}=_0x20f635[_0x217710(0xe0)],_0x2d1e4e=await bcrypt[_0x217710(0xf1)](_0x4adbe5,0xa),_0x444259=new sing_up({'name':_0x2efea0,'email':_0x15ca9f,'password':_0x2d1e4e,'mobile':_0x14cb0b,'role':'staff'}),_0x360d9a=await _0x444259[_0x217710(0xe3)](),_0x500163=new staff({'name':_0x2efea0,'email':_0x15ca9f,'mobile':_0x14cb0b,'status':_0x217710(0xfa)}),_0x24df74=await _0x500163[_0x217710(0xe3)](),_0x2b30c2=new profile({'firstname':_0x2efea0,'email':_0x15ca9f}),_0xca91e7=await _0x2b30c2[_0x217710(0xe3)]();_0x20f635[_0x217710(0xde)](_0x217710(0xf7),_0x217710(0xe6)),_0x2c0af6[_0x217710(0xec)](_0x217710(0xea));}catch(_0x21ad2b){console[_0x217710(0xd9)](_0x21ad2b);}}),module[a0_0xd0de03(0xeb)]=router;