function a0_0x4db9(){const _0x282787=['exceljs','gross_price','json','../models/all_models','2MsXWCj','Arabic','email','get','/save','user','success','findOne','Arabic\x20(ae)','German','flash','product_list','save','exports','Router','../public/language/languages.json','2873079hCYDhk','language','214260bIHUmM','Portuguese','13905qiUHKq','find','mongoose','36063JpXOPS','498858ekoxJS','express','French','48ncFOkZ','English','findById','256335MqcmCA','_id','log','Hindi','Chinese','9qCbHtD','body','7gtqwpj','1927350LzWieL'];a0_0x4db9=function(){return _0x282787;};return a0_0x4db9();}function a0_0x5e4f(_0x46a8ef,_0x13ae69){const _0x4db978=a0_0x4db9();return a0_0x5e4f=function(_0x5e4f11,_0xcac91b){_0x5e4f11=_0x5e4f11-0x166;let _0x43316=_0x4db978[_0x5e4f11];return _0x43316;},a0_0x5e4f(_0x46a8ef,_0x13ae69);}const a0_0x2602c2=a0_0x5e4f;(function(_0x18dafb,_0x867157){const _0x703694=a0_0x5e4f,_0x1280de=_0x18dafb();while(!![]){try{const _0x9b6a2e=-parseInt(_0x703694(0x18a))/0x1*(parseInt(_0x703694(0x176))/0x2)+-parseInt(_0x703694(0x16e))/0x3*(-parseInt(_0x703694(0x188))/0x4)+-parseInt(_0x703694(0x169))/0x5+parseInt(_0x703694(0x18e))/0x6*(-parseInt(_0x703694(0x170))/0x7)+parseInt(_0x703694(0x166))/0x8*(parseInt(_0x703694(0x18d))/0x9)+-parseInt(_0x703694(0x171))/0xa+parseInt(_0x703694(0x186))/0xb;if(_0x9b6a2e===_0x867157)break;else _0x1280de['push'](_0x1280de['shift']());}catch(_0x3daad7){_0x1280de['push'](_0x1280de['shift']());}}}(a0_0x4db9,0x199ac));const express=require(a0_0x2602c2(0x18f)),app=express(),router=express[a0_0x2602c2(0x184)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require(a0_0x2602c2(0x175)),auth=require('../middleware/auth'),users=require(a0_0x2602c2(0x185)),excelJS=require(a0_0x2602c2(0x172)),xlsx=require('xlsx'),mongoose=require(a0_0x2602c2(0x18c));router[a0_0x2602c2(0x179)]('/',auth,async(_0x307c3a,_0x5127ab)=>{const _0x59bf79=a0_0x2602c2;try{const _0x9dde0b=await master_shop[_0x59bf79(0x18b)](),_0x26ecf0=_0x307c3a[_0x59bf79(0x17b)],_0x518b02=await profile[_0x59bf79(0x17d)]({'email':_0x26ecf0[_0x59bf79(0x178)]}),_0x44d451=await staff['findOne']({'email':_0x26ecf0[_0x59bf79(0x178)]}),_0xd442c2=await sales_sa['find']({'sales_staff_id':_0x44d451[_0x59bf79(0x16a)]}),_0x53a920=await product[_0x59bf79(0x18b)]();if(_0x9dde0b[0x0][_0x59bf79(0x187)]=='English\x20(US)')var _0x10e716=users[_0x59bf79(0x167)];else{if(_0x9dde0b[0x0]['language']=='Hindi')var _0x10e716=users[_0x59bf79(0x16c)];else{if(_0x9dde0b[0x0]['language']=='German')var _0x10e716=users[_0x59bf79(0x17f)];else{if(_0x9dde0b[0x0][_0x59bf79(0x187)]=='Spanish')var _0x10e716=users['Spanish'];else{if(_0x9dde0b[0x0]['language']==_0x59bf79(0x190))var _0x10e716=users[_0x59bf79(0x190)];else{if(_0x9dde0b[0x0][_0x59bf79(0x187)]=='Portuguese\x20(BR)')var _0x10e716=users[_0x59bf79(0x189)];else{if(_0x9dde0b[0x0]['language']==_0x59bf79(0x16d))var _0x10e716=users[_0x59bf79(0x16d)];else{if(_0x9dde0b[0x0][_0x59bf79(0x187)]==_0x59bf79(0x17e))var _0x10e716=users[_0x59bf79(0x177)];}}}}}}}_0x5127ab['render']('gross_price',{'success':_0x307c3a[_0x59bf79(0x180)](_0x59bf79(0x17c)),'errors':_0x307c3a[_0x59bf79(0x180)]('errors'),'master_shop':_0x9dde0b,'profile':_0x518b02,'role':_0x26ecf0,'language':_0x10e716,'product_list':_0x44d451[_0x59bf79(0x181)],'sales_mine':_0xd442c2,'product_data':_0x53a920,'staff_arr':_0x44d451});}catch(_0x4779d3){console[_0x59bf79(0x16b)](_0x4779d3);}}),router['post'](a0_0x2602c2(0x17a),auth,async(_0x8d90af,_0x541e4b)=>{const _0x1f5b79=a0_0x2602c2;try{const {id_data:_0x38c970,price:_0x220f7a}=_0x8d90af[_0x1f5b79(0x16f)],_0x436400=await product[_0x1f5b79(0x168)](_0x38c970);_0x436400[_0x1f5b79(0x173)]=_0x220f7a;const _0x3bea01=await _0x436400[_0x1f5b79(0x182)]();_0x541e4b[_0x1f5b79(0x174)]({'data':_0x3bea01,'isChange':!![],'price':_0x220f7a});}catch(_0x295a26){}}),module[a0_0x2602c2(0x183)]=router;