const a0_0x45dc42=a0_0xb8a5;function a0_0xb8a5(_0xb95ec5,_0x421478){const _0x2bf0f2=a0_0x2bf0();return a0_0xb8a5=function(_0xb8a5ef,_0x46eedf){_0xb8a5ef=_0xb8a5ef-0x6d;let _0x4857fb=_0x2bf0f2[_0xb8a5ef];return _0x4857fb;},a0_0xb8a5(_0xb95ec5,_0x421478);}(function(_0x387dda,_0x1f36d2){const _0x19b9b6=a0_0xb8a5,_0xede489=_0x387dda();while(!![]){try{const _0xc6a0d8=parseInt(_0x19b9b6(0x8c))/0x1*(-parseInt(_0x19b9b6(0x86))/0x2)+parseInt(_0x19b9b6(0x74))/0x3+parseInt(_0x19b9b6(0x77))/0x4*(parseInt(_0x19b9b6(0x8b))/0x5)+-parseInt(_0x19b9b6(0x8e))/0x6+parseInt(_0x19b9b6(0x8d))/0x7*(parseInt(_0x19b9b6(0x79))/0x8)+parseInt(_0x19b9b6(0x93))/0x9*(-parseInt(_0x19b9b6(0x91))/0xa)+parseInt(_0x19b9b6(0x7a))/0xb;if(_0xc6a0d8===_0x1f36d2)break;else _0xede489['push'](_0xede489['shift']());}catch(_0x4c2b39){_0xede489['push'](_0xede489['shift']());}}}(a0_0x2bf0,0x9cbf4));const express=require(a0_0x45dc42(0x7b)),app=express(),router=express[a0_0x45dc42(0x95)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require('../models/all_models'),auth=require(a0_0x45dc42(0x87)),users=require('../public/language/languages.json'),excelJS=require(a0_0x45dc42(0x96)),xlsx=require(a0_0x45dc42(0x81)),mongoose=require(a0_0x45dc42(0x6d));router[a0_0x45dc42(0x6f)](a0_0x45dc42(0x85),auth,async(_0x4dc141,_0x2169d6)=>{const _0x5c3dd4=a0_0x45dc42;try{const _0x33bf99=await master_shop['find'](),_0x3f5755=_0x4dc141[_0x5c3dd4(0x92)],_0x50d3c5=await profile[_0x5c3dd4(0x73)]({'email':_0x3f5755[_0x5c3dd4(0x8a)]}),_0x554a25=await staff['findOne']({'email':_0x3f5755['email']}),_0x875408=await sales_sa[_0x5c3dd4(0x7f)]({'sales_staff_id':_0x554a25[_0x5c3dd4(0x70)]});if(_0x33bf99[0x0][_0x5c3dd4(0x8f)]==_0x5c3dd4(0x84))var _0x520f8c=users[_0x5c3dd4(0x76)];else{if(_0x33bf99[0x0][_0x5c3dd4(0x8f)]==_0x5c3dd4(0x94))var _0x520f8c=users[_0x5c3dd4(0x94)];else{if(_0x33bf99[0x0]['language']==_0x5c3dd4(0x83))var _0x520f8c=users[_0x5c3dd4(0x83)];else{if(_0x33bf99[0x0]['language']==_0x5c3dd4(0x72))var _0x520f8c=users[_0x5c3dd4(0x72)];else{if(_0x33bf99[0x0][_0x5c3dd4(0x8f)]==_0x5c3dd4(0x88))var _0x520f8c=users[_0x5c3dd4(0x88)];else{if(_0x33bf99[0x0]['language']==_0x5c3dd4(0x75))var _0x520f8c=users['Portuguese'];else{if(_0x33bf99[0x0]['language']=='Chinese')var _0x520f8c=users[_0x5c3dd4(0x90)];else{if(_0x33bf99[0x0][_0x5c3dd4(0x8f)]==_0x5c3dd4(0x80))var _0x520f8c=users[_0x5c3dd4(0x6e)];}}}}}}}_0x2169d6[_0x5c3dd4(0x89)](_0x5c3dd4(0x7d),{'success':_0x4dc141[_0x5c3dd4(0x82)](_0x5c3dd4(0x7c)),'errors':_0x4dc141[_0x5c3dd4(0x82)](_0x5c3dd4(0x71)),'master_shop':_0x33bf99,'profile':_0x50d3c5,'role':_0x3f5755,'language':_0x520f8c,'product_list':_0x554a25[_0x5c3dd4(0x7e)],'sales_mine':_0x875408});}catch(_0x5a8163){console['log'](_0x5a8163);}}),module[a0_0x45dc42(0x78)]=router;function a0_0x2bf0(){const _0x4ffa89=['English','28436YdqklP','exports','8uaAgMQ','6461257FIHKXM','express','success','reports_sa','product_list','find','Arabic\x20(ae)','xlsx','flash','German','English\x20(US)','/view','2yMBXcd','../middleware/auth','French','render','email','365vLlEqo','223723MhoPZG','2140411xsSvFR','126582aMVITk','language','Chinese','330sgiEmV','user','208899LBWFvu','Hindi','Router','exceljs','mongoose','Arabic','get','_id','errors','Spanish','findOne','722106hEjeud','Portuguese\x20(BR)'];a0_0x2bf0=function(){return _0x4ffa89;};return a0_0x2bf0();}