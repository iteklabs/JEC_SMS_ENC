function a0_0x3aaa(_0x28fae8,_0x7fd97e){const _0x439bc2=a0_0x439b();return a0_0x3aaa=function(_0x3aaa7d,_0x569212){_0x3aaa7d=_0x3aaa7d-0x98;let _0x357b38=_0x439bc2[_0x3aaa7d];return _0x357b38;},a0_0x3aaa(_0x28fae8,_0x7fd97e);}const a0_0x8be8f1=a0_0x3aaa;function a0_0x439b(){const _0x2f7447=['hash','Disabled','/login','welcome\x20','success','staff','21hkAbSO','log','7689215CHmdIw','../models/all_models','/sing_up','5106417yhoOQH','express','admin','639Dlfgyd','save','login\x20master','exports','158DTWGKq','/sing_up_staff','redirect','23207CaKgjJ','post','errors','render','306970XtiZxJ','sing_up_staff','Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!','sing_up','flash','4406080zlKLXt','3263208USCXXh','body','447510RKzKhb'];a0_0x439b=function(){return _0x2f7447;};return a0_0x439b();}(function(_0x349136,_0x4c5e89){const _0x1c1a35=a0_0x3aaa,_0x4f2cd8=_0x349136();while(!![]){try{const _0x1f2bcf=-parseInt(_0x1c1a35(0xaf))/0x1*(parseInt(_0x1c1a35(0xac))/0x2)+parseInt(_0x1c1a35(0xa5))/0x3+parseInt(_0x1c1a35(0xb8))/0x4+-parseInt(_0x1c1a35(0xa2))/0x5+parseInt(_0x1c1a35(0x99))/0x6*(-parseInt(_0x1c1a35(0xa0))/0x7)+-parseInt(_0x1c1a35(0xb9))/0x8+parseInt(_0x1c1a35(0xa8))/0x9*(parseInt(_0x1c1a35(0xb3))/0xa);if(_0x1f2bcf===_0x4c5e89)break;else _0x4f2cd8['push'](_0x4f2cd8['shift']());}catch(_0x190f5f){_0x4f2cd8['push'](_0x4f2cd8['shift']());}}}(a0_0x439b,0xef546));const express=require(a0_0x8be8f1(0xa6)),app=express(),router=express['Router'](),bcrypt=require('bcryptjs'),{sing_up,staff,profile,master_shop}=require(a0_0x8be8f1(0xa3)),auth=require('../middleware/auth');router['get']('/sing_up',(_0x3bee34,_0x46add0)=>{const _0x37ead2=a0_0x8be8f1;_0x46add0[_0x37ead2(0xb2)](_0x37ead2(0xb6),{'success':_0x3bee34['flash'](_0x37ead2(0x9e)),'errors':_0x3bee34[_0x37ead2(0xb7)](_0x37ead2(0xb1))});}),router[a0_0x8be8f1(0xb0)](a0_0x8be8f1(0xa4),async(_0x130268,_0x448abc)=>{const _0x130571=a0_0x8be8f1;try{console['log'](_0x130268[_0x130571(0x98)]);const {name:_0x47636d,email:_0x1d4db5,password:_0x151b85,role:_0x24f9d8}=_0x130268[_0x130571(0x98)];console[_0x130571(0xa1)](_0x24f9d8);const _0x3311a6=await bcrypt[_0x130571(0x9a)](_0x151b85,0xa),_0x430b3d=new sing_up({'name':_0x47636d,'email':_0x1d4db5,'password':_0x3311a6,'role':_0x130571(0xa7)}),_0xa574c7=await _0x430b3d[_0x130571(0xa9)](),_0xb0344f=new profile({'firstname':_0x47636d,'email':_0x1d4db5}),_0x4c246b=await _0xb0344f['save']();_0x130268[_0x130571(0xb7)](_0x130571(0x9e),_0x130571(0x9d)+_0x47636d),_0x448abc[_0x130571(0xae)](_0x130571(0x9c));}catch(_0x34725a){console['log'](_0x34725a);}}),router['get'](a0_0x8be8f1(0xad),async(_0x8940d4,_0x552c13)=>{const _0x54097b=a0_0x8be8f1;try{const _0x120287=await master_shop['find']();console['log'](_0x54097b(0xaa),_0x120287),_0x552c13[_0x54097b(0xb2)](_0x54097b(0xb4),{'success':_0x8940d4['flash'](_0x54097b(0x9e)),'errors':_0x8940d4['flash'](_0x54097b(0xb1)),'master_shop':_0x120287});}catch(_0xe9f889){console[_0x54097b(0xa1)](_0xe9f889);}}),router[a0_0x8be8f1(0xb0)](a0_0x8be8f1(0xad),async(_0x418fcc,_0x594d59)=>{const _0x424f8a=a0_0x8be8f1;try{console[_0x424f8a(0xa1)](_0x418fcc['body']);const {name:_0x813340,email:_0x4ced7c,password:_0x333328,mobile:_0x31fc16}=_0x418fcc[_0x424f8a(0x98)],_0x575392=await bcrypt[_0x424f8a(0x9a)](_0x333328,0xa),_0x465976=new sing_up({'name':_0x813340,'email':_0x4ced7c,'password':_0x575392,'mobile':_0x31fc16,'role':_0x424f8a(0x9f)}),_0x5d4948=await _0x465976[_0x424f8a(0xa9)](),_0x4c637a=new staff({'name':_0x813340,'email':_0x4ced7c,'mobile':_0x31fc16,'status':_0x424f8a(0x9b)}),_0x4890a1=await _0x4c637a['save'](),_0x6cd809=new profile({'firstname':_0x813340,'email':_0x4ced7c}),_0x16dd59=await _0x6cd809[_0x424f8a(0xa9)]();_0x418fcc[_0x424f8a(0xb7)]('success',_0x424f8a(0xb5)),_0x594d59[_0x424f8a(0xae)](_0x424f8a(0xad));}catch(_0x426b76){console[_0x424f8a(0xa1)](_0x426b76);}}),module[a0_0x8be8f1(0xab)]=router;