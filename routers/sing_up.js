const a0_0x39a27b=a0_0x1c3b;(function(_0x22db40,_0x3de835){const _0x379190=a0_0x1c3b,_0x5421b3=_0x22db40();while(!![]){try{const _0x499eee=-parseInt(_0x379190(0x94))/0x1+parseInt(_0x379190(0x81))/0x2+-parseInt(_0x379190(0x7d))/0x3+-parseInt(_0x379190(0x92))/0x4*(parseInt(_0x379190(0x7a))/0x5)+parseInt(_0x379190(0x7c))/0x6+parseInt(_0x379190(0x8c))/0x7+-parseInt(_0x379190(0x84))/0x8;if(_0x499eee===_0x3de835)break;else _0x5421b3['push'](_0x5421b3['shift']());}catch(_0x4a6620){_0x5421b3['push'](_0x5421b3['shift']());}}}(a0_0x50ea,0x79f99));function a0_0x50ea(){const _0x1bfdc9=['save','4253053gSAimo','staff','get','find','/sing_up_staff','redirect','28ysXfmY','/sing_up','721707eyRbYf','express','flash','success','log','errors','Router','admin','250565BEtyVk','/login','5084598LwuAmo','824550jLPdBM','render','welcome\x20','sing_up_staff','1074838ChAuFP','post','../models/all_models','1163792QVlWdR','hash','sing_up','Disabled','bcryptjs','body','exports'];a0_0x50ea=function(){return _0x1bfdc9;};return a0_0x50ea();}function a0_0x1c3b(_0x3aa4b9,_0x5c6e6f){const _0x50ea26=a0_0x50ea();return a0_0x1c3b=function(_0x1c3bc1,_0x54397a){_0x1c3bc1=_0x1c3bc1-0x75;let _0x5bcca5=_0x50ea26[_0x1c3bc1];return _0x5bcca5;},a0_0x1c3b(_0x3aa4b9,_0x5c6e6f);}const express=require(a0_0x39a27b(0x95)),app=express(),router=express[a0_0x39a27b(0x78)](),bcrypt=require(a0_0x39a27b(0x88)),{sing_up,staff,profile,master_shop}=require(a0_0x39a27b(0x83)),auth=require('../middleware/auth');router[a0_0x39a27b(0x8e)](a0_0x39a27b(0x93),(_0x4f9409,_0x5b7f4a)=>{const _0x40e2f2=a0_0x39a27b;_0x5b7f4a[_0x40e2f2(0x7e)](_0x40e2f2(0x86),{'success':_0x4f9409[_0x40e2f2(0x96)](_0x40e2f2(0x75)),'errors':_0x4f9409[_0x40e2f2(0x96)](_0x40e2f2(0x77))});}),router[a0_0x39a27b(0x82)](a0_0x39a27b(0x93),async(_0x51bc54,_0x1651e5)=>{const _0x11bc33=a0_0x39a27b;try{console['log'](_0x51bc54['body']);const {name:_0x3ad75a,email:_0x2b0359,password:_0x33a0f1,role:_0x2d0ba0}=_0x51bc54['body'];console['log'](_0x2d0ba0);const _0x21dfa2=await bcrypt[_0x11bc33(0x85)](_0x33a0f1,0xa),_0x3b8a7e=new sing_up({'name':_0x3ad75a,'email':_0x2b0359,'password':_0x21dfa2,'role':_0x11bc33(0x79)}),_0x382a3a=await _0x3b8a7e[_0x11bc33(0x8b)](),_0x51a9d5=new profile({'firstname':_0x3ad75a,'email':_0x2b0359}),_0xc489b9=await _0x51a9d5[_0x11bc33(0x8b)]();_0x51bc54[_0x11bc33(0x96)]('success',_0x11bc33(0x7f)+_0x3ad75a),_0x1651e5[_0x11bc33(0x91)](_0x11bc33(0x7b));}catch(_0x2dfebb){console[_0x11bc33(0x76)](_0x2dfebb);}}),router[a0_0x39a27b(0x8e)](a0_0x39a27b(0x90),async(_0x572893,_0x802583)=>{const _0x225237=a0_0x39a27b;try{const _0x5385db=await master_shop[_0x225237(0x8f)]();console[_0x225237(0x76)]('login\x20master',_0x5385db),_0x802583[_0x225237(0x7e)](_0x225237(0x80),{'success':_0x572893[_0x225237(0x96)](_0x225237(0x75)),'errors':_0x572893[_0x225237(0x96)]('errors'),'master_shop':_0x5385db});}catch(_0x5bf79e){console[_0x225237(0x76)](_0x5bf79e);}}),router['post'](a0_0x39a27b(0x90),async(_0x1762d5,_0xd83fd6)=>{const _0x35d577=a0_0x39a27b;try{console[_0x35d577(0x76)](_0x1762d5['body']);const {name:_0x21ee8c,email:_0x198a29,password:_0x35c60f,mobile:_0x597320}=_0x1762d5[_0x35d577(0x89)],_0x589172=await bcrypt['hash'](_0x35c60f,0xa),_0x176d72=new sing_up({'name':_0x21ee8c,'email':_0x198a29,'password':_0x589172,'mobile':_0x597320,'role':_0x35d577(0x8d)}),_0x59e58f=await _0x176d72[_0x35d577(0x8b)](),_0x30993d=new staff({'name':_0x21ee8c,'email':_0x198a29,'mobile':_0x597320,'status':_0x35d577(0x87)}),_0x14e25a=await _0x30993d[_0x35d577(0x8b)](),_0xc22ed8=new profile({'firstname':_0x21ee8c,'email':_0x198a29}),_0x5ec9c1=await _0xc22ed8[_0x35d577(0x8b)]();_0x1762d5[_0x35d577(0x96)](_0x35d577(0x75),'Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!'),_0xd83fd6[_0x35d577(0x91)](_0x35d577(0x90));}catch(_0x4ffdfc){console['log'](_0x4ffdfc);}}),module[a0_0x39a27b(0x8a)]=router;