const a0_0x1d9d46=a0_0x2189;function a0_0x2189(_0x3ef495,_0x315f3d){const _0x117041=a0_0x1170();return a0_0x2189=function(_0x218906,_0x258135){_0x218906=_0x218906-0x1c4;let _0x9a942=_0x117041[_0x218906];return _0x9a942;},a0_0x2189(_0x3ef495,_0x315f3d);}(function(_0x335353,_0x36af91){const _0x1c0b0e=a0_0x2189,_0x2bf332=_0x335353();while(!![]){try{const _0x4f01fa=-parseInt(_0x1c0b0e(0x1cb))/0x1+parseInt(_0x1c0b0e(0x1d8))/0x2*(-parseInt(_0x1c0b0e(0x1db))/0x3)+parseInt(_0x1c0b0e(0x1ec))/0x4*(parseInt(_0x1c0b0e(0x1df))/0x5)+-parseInt(_0x1c0b0e(0x1c9))/0x6+parseInt(_0x1c0b0e(0x1e6))/0x7*(parseInt(_0x1c0b0e(0x1de))/0x8)+-parseInt(_0x1c0b0e(0x1d6))/0x9*(parseInt(_0x1c0b0e(0x1e7))/0xa)+parseInt(_0x1c0b0e(0x1c6))/0xb;if(_0x4f01fa===_0x36af91)break;else _0x2bf332['push'](_0x2bf332['shift']());}catch(_0x1a952b){_0x2bf332['push'](_0x2bf332['shift']());}}}(a0_0x1170,0xce29c));const express=require(a0_0x1d9d46(0x1ca)),app=express(),router=express[a0_0x1d9d46(0x1c8)](),{sing_up,staff,profile,master_shop}=require(a0_0x1d9d46(0x1d4)),bcrypt=require(a0_0x1d9d46(0x1cd)),jwt=require(a0_0x1d9d46(0x1c5)),auth=require(a0_0x1d9d46(0x1e3));function a0_0x1170(){const _0xdec93c=['clearCookie','jwt','log','../models/all_models','post','749457HIFByU','username','102cDVXGM','exports','env','52458yBILmC','body','get','112mqgJtV','5ViGyZO','cookie','redirect','secret_key','../middleware/auth','findOne','staff','600789qiiqEB','140QvoYDg','password','sign','warehouse_category','role','5156724clCuxT','login\x20failed.','jsonwebtoken','25630924QKBETz','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','Router','8436324vevefS','express','512737YZJiBW','json','bcryptjs','login\x20successfully.','email','/logout'];a0_0x1170=function(){return _0xdec93c;};return a0_0x1170();}router[a0_0x1d9d46(0x1d5)]('/login',async(_0x2c9540,_0x530c51)=>{const _0x35c7c5=a0_0x1d9d46;try{const _0x350df7=_0x2c9540[_0x35c7c5(0x1dc)]['email'],_0x199f1e=await sing_up[_0x35c7c5(0x1e4)]({'email':_0x350df7});!_0x199f1e&&_0x530c51['json']({'msgbox':'your\x20email\x20is\x20not\x20register'});const _0x5193bf=await staff[_0x35c7c5(0x1e4)]({'email':_0x199f1e[_0x35c7c5(0x1cf)]});var _0x3f4c0c=_0x5193bf[_0x35c7c5(0x1ea)];if(_0x199f1e['role']==_0x35c7c5(0x1e5)){const _0x504650=await staff[_0x35c7c5(0x1e4)]({'email':_0x199f1e['email']});_0x504650['status']=='Disabled'&&_0x530c51[_0x35c7c5(0x1cc)]({'msgbox':_0x35c7c5(0x1c7),'data':_0x5193bf}),_0x3f4c0c=_0x504650[_0x35c7c5(0x1ea)];}const _0x3686b3=_0x2c9540[_0x35c7c5(0x1dc)][_0x35c7c5(0x1e8)],_0x3f1643=await bcrypt['compare'](_0x3686b3,_0x199f1e[_0x35c7c5(0x1e8)]);_0x3f1643==![]&&_0x530c51[_0x35c7c5(0x1cc)]({'msgbox':_0x35c7c5(0x1c4),'token':null,'isValid':_0x3f1643,'data':null});const _0x22d2ec=jwt[_0x35c7c5(0x1e9)]({'username':_0x199f1e[_0x35c7c5(0x1d7)],'email':_0x199f1e[_0x35c7c5(0x1cf)],'role':_0x199f1e[_0x35c7c5(0x1eb)],'warehouse_category':_0x3f4c0c},process[_0x35c7c5(0x1da)][_0x35c7c5(0x1e2)]);_0x530c51[_0x35c7c5(0x1e0)](_0x35c7c5(0x1d2),_0x22d2ec,{'expires':new Date(0xe677d213a700)}),_0x530c51['json']({'msgbox':_0x35c7c5(0x1ce),'token':_0x22d2ec,'isValid':_0x3f1643,'data':_0x5193bf});}catch(_0x1d1b6b){console[_0x35c7c5(0x1d3)](_0x1d1b6b);}}),router[a0_0x1d9d46(0x1dd)](a0_0x1d9d46(0x1d0),(_0x335665,_0x436be7)=>{const _0x4ed281=a0_0x1d9d46;_0x436be7[_0x4ed281(0x1d1)]('jwt'),_0x436be7[_0x4ed281(0x1e1)]('/login');}),module[a0_0x1d9d46(0x1d9)]=router;