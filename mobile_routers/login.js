const a0_0x258a66=a0_0x37c9;function a0_0x37c9(_0x4efafc,_0x1c156b){const _0xf1a64c=a0_0xf1a6();return a0_0x37c9=function(_0x37c9ad,_0xf3690c){_0x37c9ad=_0x37c9ad-0x15f;let _0x370529=_0xf1a64c[_0x37c9ad];return _0x370529;},a0_0x37c9(_0x4efafc,_0x1c156b);}function a0_0xf1a6(){const _0x5f1660=['get','jwt','/logout','login\x20successfully.','secret_key','671672zqWsMc','json','email','clearCookie','status','compare','env','978834NSntyI','redirect','login\x20failed.','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','role','bcryptjs','sign','post','Router','cookie','password','2jWjvfr','3514068kVVhyv','4819465flfMEh','../middleware/auth','712612SqfNhn','4114536gFOxZW','/login','189ZlRyId','5YSwYta','../models/all_models','warehouse_category','body','566570WwxVkz','jsonwebtoken','findOne'];a0_0xf1a6=function(){return _0x5f1660;};return a0_0xf1a6();}(function(_0xcc0fb4,_0x27463c){const _0x28ff6f=a0_0x37c9,_0x318c3c=_0xcc0fb4();while(!![]){try{const _0x2dbd75=parseInt(_0x28ff6f(0x166))/0x1*(parseInt(_0x28ff6f(0x162))/0x2)+-parseInt(_0x28ff6f(0x17d))/0x3+-parseInt(_0x28ff6f(0x163))/0x4*(parseInt(_0x28ff6f(0x16a))/0x5)+-parseInt(_0x28ff6f(0x167))/0x6+parseInt(_0x28ff6f(0x164))/0x7+parseInt(_0x28ff6f(0x176))/0x8+-parseInt(_0x28ff6f(0x169))/0x9*(-parseInt(_0x28ff6f(0x16e))/0xa);if(_0x2dbd75===_0x27463c)break;else _0x318c3c['push'](_0x318c3c['shift']());}catch(_0x3d8307){_0x318c3c['push'](_0x318c3c['shift']());}}}(a0_0xf1a6,0xbf7b8));const express=require('express'),app=express(),router=express[a0_0x258a66(0x15f)](),{sing_up,staff,profile,master_shop}=require(a0_0x258a66(0x16b)),bcrypt=require(a0_0x258a66(0x182)),jwt=require(a0_0x258a66(0x16f)),auth=require(a0_0x258a66(0x165));router[a0_0x258a66(0x184)](a0_0x258a66(0x168),async(_0x30f20b,_0x4252c2)=>{const _0x37ee19=a0_0x258a66;try{const _0x538012=_0x30f20b[_0x37ee19(0x16d)][_0x37ee19(0x178)],_0x5ee721=await sing_up[_0x37ee19(0x170)]({'email':_0x538012});!_0x5ee721&&_0x4252c2[_0x37ee19(0x177)]({'msgbox':'your\x20email\x20is\x20not\x20register'});const _0x20c214=await staff[_0x37ee19(0x170)]({'email':_0x5ee721[_0x37ee19(0x178)]});var _0x756fda=_0x20c214['warehouse_category'];if(_0x5ee721[_0x37ee19(0x181)]=='staff'){const _0x544def=await staff[_0x37ee19(0x170)]({'email':_0x5ee721[_0x37ee19(0x178)]});_0x544def[_0x37ee19(0x17a)]=='Disabled'&&_0x4252c2[_0x37ee19(0x177)]({'msgbox':_0x37ee19(0x180),'data':_0x20c214}),_0x756fda=_0x544def[_0x37ee19(0x16c)];}const _0x5ecbf9=_0x30f20b[_0x37ee19(0x16d)][_0x37ee19(0x161)],_0x332737=await bcrypt[_0x37ee19(0x17b)](_0x5ecbf9,_0x5ee721['password']);_0x332737==![]&&_0x4252c2[_0x37ee19(0x177)]({'msgbox':_0x37ee19(0x17f),'token':null,'isValid':_0x332737,'data':null});const _0x2147d5=jwt[_0x37ee19(0x183)]({'username':_0x5ee721['username'],'email':_0x5ee721['email'],'role':_0x5ee721[_0x37ee19(0x181)],'warehouse_category':_0x756fda},process[_0x37ee19(0x17c)][_0x37ee19(0x175)]);_0x4252c2[_0x37ee19(0x160)](_0x37ee19(0x172),_0x2147d5,{'expires':new Date(0xe677d213a700)}),_0x4252c2[_0x37ee19(0x177)]({'msgbox':_0x37ee19(0x174),'token':_0x2147d5,'isValid':_0x332737,'data':_0x20c214});}catch(_0x125e1a){console['log'](_0x125e1a);}}),router[a0_0x258a66(0x171)](a0_0x258a66(0x173),(_0x1ae4a3,_0x3ec25a)=>{const _0x383fce=a0_0x258a66;_0x3ec25a[_0x383fce(0x179)](_0x383fce(0x172)),_0x3ec25a[_0x383fce(0x17e)]('/login');}),module['exports']=router;