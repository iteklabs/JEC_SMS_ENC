function a0_0x5da9(_0x5d21b9,_0x17a51b){const _0x38340e=a0_0x3834();return a0_0x5da9=function(_0x5da935,_0x28462f){_0x5da935=_0x5da935-0x10a;let _0x7f9725=_0x38340e[_0x5da935];return _0x7f9725;},a0_0x5da9(_0x5d21b9,_0x17a51b);}const a0_0x2f2055=a0_0x5da9;function a0_0x3834(){const _0x5b6fb0=['get','Portuguese','9898378FDzKbL','6342084FjmJWn','1399773VPnSBU','40354rWOkem','gross_price','render','email','_id','Spanish','find','Chinese','user','3200270FDhVaf','2516988pkKCTx','Arabic\x20(ae)','save','../public/language/languages.json','findOne','French','86JUavcy','../middleware/auth','German','6133288yGbGDH','post','Router','log','json','/save','success','English','language','../models/all_models','English\x20(US)','flash','xlsx','Hindi','product_list','express'];a0_0x3834=function(){return _0x5b6fb0;};return a0_0x3834();}(function(_0x3afcc6,_0x300caa){const _0x53d7c2=a0_0x5da9,_0x23d14a=_0x3afcc6();while(!![]){try{const _0x27d55a=parseInt(_0x53d7c2(0x12b))/0x1*(parseInt(_0x53d7c2(0x113))/0x2)+-parseInt(_0x53d7c2(0x12a))/0x3+-parseInt(_0x53d7c2(0x10d))/0x4+parseInt(_0x53d7c2(0x10c))/0x5+-parseInt(_0x53d7c2(0x129))/0x6+parseInt(_0x53d7c2(0x128))/0x7+-parseInt(_0x53d7c2(0x116))/0x8;if(_0x27d55a===_0x300caa)break;else _0x23d14a['push'](_0x23d14a['shift']());}catch(_0x1155e0){_0x23d14a['push'](_0x23d14a['shift']());}}}(a0_0x3834,0xd45b9));const express=require(a0_0x2f2055(0x125)),app=express(),router=express[a0_0x2f2055(0x118)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require(a0_0x2f2055(0x11f)),auth=require(a0_0x2f2055(0x114)),users=require(a0_0x2f2055(0x110)),excelJS=require('exceljs'),xlsx=require(a0_0x2f2055(0x122)),mongoose=require('mongoose');router[a0_0x2f2055(0x126)]('/',auth,async(_0x175f46,_0x29be6f)=>{const _0x25362e=a0_0x2f2055;try{const _0x53832e=await master_shop['find'](),_0x841e59=_0x175f46[_0x25362e(0x10b)],_0x3db3e2=await profile['findOne']({'email':_0x841e59[_0x25362e(0x12e)]}),_0x6bf450=await staff[_0x25362e(0x111)]({'email':_0x841e59['email']}),_0x2a2abb=await sales_sa[_0x25362e(0x131)]({'sales_staff_id':_0x6bf450[_0x25362e(0x12f)]}),_0x30f79a=await product[_0x25362e(0x131)]();if(_0x53832e[0x0]['language']==_0x25362e(0x120))var _0x1449de=users[_0x25362e(0x11d)];else{if(_0x53832e[0x0][_0x25362e(0x11e)]==_0x25362e(0x123))var _0x1449de=users[_0x25362e(0x123)];else{if(_0x53832e[0x0][_0x25362e(0x11e)]==_0x25362e(0x115))var _0x1449de=users['German'];else{if(_0x53832e[0x0][_0x25362e(0x11e)]==_0x25362e(0x130))var _0x1449de=users['Spanish'];else{if(_0x53832e[0x0][_0x25362e(0x11e)]==_0x25362e(0x112))var _0x1449de=users[_0x25362e(0x112)];else{if(_0x53832e[0x0]['language']=='Portuguese\x20(BR)')var _0x1449de=users[_0x25362e(0x127)];else{if(_0x53832e[0x0][_0x25362e(0x11e)]==_0x25362e(0x10a))var _0x1449de=users[_0x25362e(0x10a)];else{if(_0x53832e[0x0][_0x25362e(0x11e)]==_0x25362e(0x10e))var _0x1449de=users['Arabic'];}}}}}}}_0x29be6f[_0x25362e(0x12d)](_0x25362e(0x12c),{'success':_0x175f46[_0x25362e(0x121)](_0x25362e(0x11c)),'errors':_0x175f46[_0x25362e(0x121)]('errors'),'master_shop':_0x53832e,'profile':_0x3db3e2,'role':_0x841e59,'language':_0x1449de,'product_list':_0x6bf450[_0x25362e(0x124)],'sales_mine':_0x2a2abb,'product_data':_0x30f79a,'staff_arr':_0x6bf450});}catch(_0x110c4a){console[_0x25362e(0x119)](_0x110c4a);}}),router[a0_0x2f2055(0x117)](a0_0x2f2055(0x11b),auth,async(_0xad46e0,_0x28c0ed)=>{const _0x31368f=a0_0x2f2055;try{const {id_data:_0x51d43a,price:_0x1c6836}=_0xad46e0['body'],_0x16242e=await product['findById'](_0x51d43a);_0x16242e['gross_price']=_0x1c6836;const _0x10fe6d=await _0x16242e[_0x31368f(0x10f)]();_0x28c0ed[_0x31368f(0x11a)]({'data':_0x10fe6d,'isChange':!![],'price':_0x1c6836});}catch(_0x3ba2ac){}}),module['exports']=router;