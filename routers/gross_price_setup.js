const a0_0x5377b7=a0_0x58bb;(function(_0xe21302,_0x26cb10){const _0x3f94bf=a0_0x58bb,_0x59febc=_0xe21302();while(!![]){try{const _0x509ad1=-parseInt(_0x3f94bf(0x143))/0x1+parseInt(_0x3f94bf(0x154))/0x2+-parseInt(_0x3f94bf(0x13e))/0x3*(parseInt(_0x3f94bf(0x130))/0x4)+parseInt(_0x3f94bf(0x138))/0x5*(parseInt(_0x3f94bf(0x136))/0x6)+-parseInt(_0x3f94bf(0x150))/0x7*(parseInt(_0x3f94bf(0x144))/0x8)+parseInt(_0x3f94bf(0x14c))/0x9*(-parseInt(_0x3f94bf(0x13d))/0xa)+parseInt(_0x3f94bf(0x13a))/0xb;if(_0x509ad1===_0x26cb10)break;else _0x59febc['push'](_0x59febc['shift']());}catch(_0x220b11){_0x59febc['push'](_0x59febc['shift']());}}}(a0_0x1eb0,0xcd800));const express=require(a0_0x5377b7(0x14b)),app=express(),router=express[a0_0x5377b7(0x135)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require(a0_0x5377b7(0x12a)),auth=require('../middleware/auth'),users=require(a0_0x5377b7(0x151)),excelJS=require(a0_0x5377b7(0x12e)),xlsx=require(a0_0x5377b7(0x14a)),mongoose=require(a0_0x5377b7(0x153));router[a0_0x5377b7(0x133)]('/',auth,async(_0x44db03,_0x58b5ca)=>{const _0xaea934=a0_0x5377b7;try{const _0x528d6d=await master_shop['find'](),_0x3c29fb=_0x44db03[_0xaea934(0x152)],_0x38efad=await profile[_0xaea934(0x14d)]({'email':_0x3c29fb[_0xaea934(0x140)]}),_0x1be4d4=await staff[_0xaea934(0x14d)]({'email':_0x3c29fb['email']}),_0x15eafe=await sales_sa['find']({'sales_staff_id':_0x1be4d4[_0xaea934(0x14e)]}),_0x26df22=await product['find']();if(_0x528d6d[0x0]['language']==_0xaea934(0x14f))var _0x425356=users[_0xaea934(0x146)];else{if(_0x528d6d[0x0][_0xaea934(0x13c)]==_0xaea934(0x13f))var _0x425356=users[_0xaea934(0x13f)];else{if(_0x528d6d[0x0][_0xaea934(0x13c)]==_0xaea934(0x139))var _0x425356=users[_0xaea934(0x139)];else{if(_0x528d6d[0x0][_0xaea934(0x13c)]==_0xaea934(0x12d))var _0x425356=users[_0xaea934(0x12d)];else{if(_0x528d6d[0x0]['language']==_0xaea934(0x141))var _0x425356=users[_0xaea934(0x141)];else{if(_0x528d6d[0x0][_0xaea934(0x13c)]==_0xaea934(0x137))var _0x425356=users[_0xaea934(0x142)];else{if(_0x528d6d[0x0][_0xaea934(0x13c)]==_0xaea934(0x134))var _0x425356=users[_0xaea934(0x134)];else{if(_0x528d6d[0x0][_0xaea934(0x13c)]==_0xaea934(0x149))var _0x425356=users['Arabic'];}}}}}}}_0x58b5ca['render'](_0xaea934(0x12b),{'success':_0x44db03[_0xaea934(0x145)](_0xaea934(0x147)),'errors':_0x44db03[_0xaea934(0x145)](_0xaea934(0x131)),'master_shop':_0x528d6d,'profile':_0x38efad,'role':_0x3c29fb,'language':_0x425356,'product_list':_0x1be4d4[_0xaea934(0x13b)],'sales_mine':_0x15eafe,'product_data':_0x26df22,'staff_arr':_0x1be4d4});}catch(_0x246033){console[_0xaea934(0x12f)](_0x246033);}}),router[a0_0x5377b7(0x132)](a0_0x5377b7(0x128),auth,async(_0x2a50cf,_0x2aa93a)=>{const _0x596585=a0_0x5377b7;try{const {id_data:_0x2c5ab3,price:_0x1856d6}=_0x2a50cf[_0x596585(0x148)],_0x322e2e=await product['findById'](_0x2c5ab3);_0x322e2e[_0x596585(0x12b)]=_0x1856d6;const _0x294e55=await _0x322e2e['save']();_0x2aa93a[_0x596585(0x12c)]({'data':_0x294e55,'isChange':!![],'price':_0x1856d6});}catch(_0x2abd49){}}),module[a0_0x5377b7(0x129)]=router;function a0_0x58bb(_0x10cafc,_0x4938ce){const _0x1eb068=a0_0x1eb0();return a0_0x58bb=function(_0x58bba2,_0xb3a073){_0x58bba2=_0x58bba2-0x128;let _0x294b40=_0x1eb068[_0x58bba2];return _0x294b40;},a0_0x58bb(_0x10cafc,_0x4938ce);}function a0_0x1eb0(){const _0x546f80=['json','Spanish','exceljs','log','14972WUImaX','errors','post','get','Chinese','Router','319866puILqv','Portuguese\x20(BR)','55tLhCrQ','German','32549121LOPKrB','product_list','language','1048610EkHQEv','75aGwRpI','Hindi','email','French','Portuguese','1391326HGqTWq','88fTGQZU','flash','English','success','body','Arabic\x20(ae)','xlsx','express','36npFfmU','findOne','_id','English\x20(US)','1029343Bwcgya','../public/language/languages.json','user','mongoose','1636360UwaFsr','/save','exports','../models/all_models','gross_price'];a0_0x1eb0=function(){return _0x546f80;};return a0_0x1eb0();}