function a0_0x3e11(_0x589d12,_0x4a4fe5){const _0x393560=a0_0x3935();return a0_0x3e11=function(_0x3e1142,_0x34f944){_0x3e1142=_0x3e1142-0x68;let _0x1e50a7=_0x393560[_0x3e1142];return _0x1e50a7;},a0_0x3e11(_0x589d12,_0x4a4fe5);}const a0_0x1232de=a0_0x3e11;function a0_0x3935(){const _0x51bd28=['body','login\x20master','2913iZHoDp','hash','Router','find','express','/sing_up','53364350LNfaml','save','3981116vFgYhc','success','errors','flash','get','24guoULO','../middleware/auth','3964191SVPOOA','log','5953736HrkKmH','7NcRzDb','Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!','redirect','Disabled','bcryptjs','post','sing_up','render','1850370arnzsa','6776046AJBeGa','502BDWYXF','/login','/sing_up_staff','exports'];a0_0x3935=function(){return _0x51bd28;};return a0_0x3935();}(function(_0xe7cee1,_0x387b49){const _0x5a3aff=a0_0x3e11,_0x486ef3=_0xe7cee1();while(!![]){try{const _0x12c486=-parseInt(_0x5a3aff(0x87))/0x1*(parseInt(_0x5a3aff(0x81))/0x2)+-parseInt(_0x5a3aff(0x74))/0x3+-parseInt(_0x5a3aff(0x6d))/0x4+parseInt(_0x5a3aff(0x7f))/0x5*(-parseInt(_0x5a3aff(0x72))/0x6)+parseInt(_0x5a3aff(0x77))/0x7*(-parseInt(_0x5a3aff(0x76))/0x8)+parseInt(_0x5a3aff(0x80))/0x9+parseInt(_0x5a3aff(0x6b))/0xa;if(_0x12c486===_0x387b49)break;else _0x486ef3['push'](_0x486ef3['shift']());}catch(_0xde7b20){_0x486ef3['push'](_0x486ef3['shift']());}}}(a0_0x3935,0xc7751));const express=require(a0_0x1232de(0x69)),app=express(),router=express[a0_0x1232de(0x89)](),bcrypt=require(a0_0x1232de(0x7b)),{sing_up,staff,profile,master_shop}=require('../models/all_models'),auth=require(a0_0x1232de(0x73));router['get'](a0_0x1232de(0x6a),(_0x345348,_0x665e7e)=>{const _0x141307=a0_0x1232de;_0x665e7e['render'](_0x141307(0x7d),{'success':_0x345348[_0x141307(0x70)](_0x141307(0x6e)),'errors':_0x345348[_0x141307(0x70)](_0x141307(0x6f))});}),router[a0_0x1232de(0x7c)](a0_0x1232de(0x6a),async(_0x4ca68e,_0x115c28)=>{const _0x2323de=a0_0x1232de;try{console[_0x2323de(0x75)](_0x4ca68e['body']);const {name:_0x29839a,email:_0x3a45d5,password:_0x362342,role:_0x20f21c}=_0x4ca68e[_0x2323de(0x85)];console[_0x2323de(0x75)](_0x20f21c);const _0x24a0c0=await bcrypt[_0x2323de(0x88)](_0x362342,0xa),_0x57f200=new sing_up({'name':_0x29839a,'email':_0x3a45d5,'password':_0x24a0c0,'role':'admin'}),_0x32f9c1=await _0x57f200[_0x2323de(0x6c)](),_0x2cb604=new profile({'firstname':_0x29839a,'email':_0x3a45d5}),_0x2cef46=await _0x2cb604[_0x2323de(0x6c)]();_0x4ca68e['flash'](_0x2323de(0x6e),'welcome\x20'+_0x29839a),_0x115c28[_0x2323de(0x79)](_0x2323de(0x82));}catch(_0x261ed6){console['log'](_0x261ed6);}}),router[a0_0x1232de(0x71)](a0_0x1232de(0x83),async(_0x43e688,_0x5ee4ac)=>{const _0x4fa1b4=a0_0x1232de;try{const _0x262ea5=await master_shop[_0x4fa1b4(0x68)]();console[_0x4fa1b4(0x75)](_0x4fa1b4(0x86),_0x262ea5),_0x5ee4ac[_0x4fa1b4(0x7e)]('sing_up_staff',{'success':_0x43e688[_0x4fa1b4(0x70)](_0x4fa1b4(0x6e)),'errors':_0x43e688[_0x4fa1b4(0x70)]('errors'),'master_shop':_0x262ea5});}catch(_0x1ddfd5){console['log'](_0x1ddfd5);}}),router[a0_0x1232de(0x7c)](a0_0x1232de(0x83),async(_0x6210b8,_0x150966)=>{const _0x566edc=a0_0x1232de;try{console[_0x566edc(0x75)](_0x6210b8[_0x566edc(0x85)]);const {name:_0x20d757,email:_0x3c9cba,password:_0x13538f,mobile:_0x13ac89}=_0x6210b8['body'],_0x432752=await bcrypt['hash'](_0x13538f,0xa),_0x258ec6=new sing_up({'name':_0x20d757,'email':_0x3c9cba,'password':_0x432752,'mobile':_0x13ac89,'role':'staff'}),_0x673b52=await _0x258ec6[_0x566edc(0x6c)](),_0x529dad=new staff({'name':_0x20d757,'email':_0x3c9cba,'mobile':_0x13ac89,'status':_0x566edc(0x7a)}),_0x524990=await _0x529dad[_0x566edc(0x6c)](),_0x468343=new profile({'firstname':_0x20d757,'email':_0x3c9cba}),_0x11b152=await _0x468343[_0x566edc(0x6c)]();_0x6210b8[_0x566edc(0x70)](_0x566edc(0x6e),_0x566edc(0x78)),_0x150966[_0x566edc(0x79)](_0x566edc(0x83));}catch(_0x254139){console['log'](_0x254139);}}),module[a0_0x1232de(0x84)]=router;