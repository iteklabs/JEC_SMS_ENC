const a0_0x25b97e=a0_0x2e73;(function(_0x26b477,_0x105cf9){const _0x36b682=a0_0x2e73,_0x2d5ecb=_0x26b477();while(!![]){try{const _0x2d8640=parseInt(_0x36b682(0x154))/0x1*(parseInt(_0x36b682(0x171))/0x2)+parseInt(_0x36b682(0x17b))/0x3*(-parseInt(_0x36b682(0x152))/0x4)+parseInt(_0x36b682(0x173))/0x5*(parseInt(_0x36b682(0x160))/0x6)+parseInt(_0x36b682(0x16e))/0x7*(-parseInt(_0x36b682(0x166))/0x8)+parseInt(_0x36b682(0x167))/0x9*(parseInt(_0x36b682(0x165))/0xa)+-parseInt(_0x36b682(0x151))/0xb+parseInt(_0x36b682(0x155))/0xc*(parseInt(_0x36b682(0x16b))/0xd);if(_0x2d8640===_0x105cf9)break;else _0x2d5ecb['push'](_0x2d5ecb['shift']());}catch(_0x327059){_0x2d5ecb['push'](_0x2d5ecb['shift']());}}}(a0_0x3bb0,0xedfd7));const express=require(a0_0x25b97e(0x174)),app=express(),router=express[a0_0x25b97e(0x170)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require(a0_0x25b97e(0x169)),auth=require(a0_0x25b97e(0x16a)),users=require(a0_0x25b97e(0x178)),excelJS=require('exceljs'),xlsx=require('xlsx'),mongoose=require(a0_0x25b97e(0x15d));function a0_0x3bb0(){const _0x1fe960=['German','495789kuGISI','Portuguese\x20(BR)','gross_price','log','errors','19914202bmzTcK','36HIZcGb','find','49hTQGuk','251376iUMvcX','Hindi','findById','English','Arabic','flash','language','render','mongoose','findOne','Spanish','5614842SBEbMU','Chinese','_id','user','French','39090UTEsZp','3533176ThPFjK','279Bvctwr','Portuguese','../models/all_models','../middleware/auth','2015aWcWWp','product_list','body','7fgexqS','post','Router','16746hfGMXF','save','5GHnkIG','express','/save','English\x20(US)','exports','../public/language/languages.json','Arabic\x20(ae)'];a0_0x3bb0=function(){return _0x1fe960;};return a0_0x3bb0();}function a0_0x2e73(_0xa1ba7,_0x5394dc){const _0x3bb08b=a0_0x3bb0();return a0_0x2e73=function(_0x2e7340,_0x37646c){_0x2e7340=_0x2e7340-0x151;let _0x18f42b=_0x3bb08b[_0x2e7340];return _0x18f42b;},a0_0x2e73(_0xa1ba7,_0x5394dc);}router['get']('/',auth,async(_0x4183a1,_0x13e1a9)=>{const _0x431dee=a0_0x25b97e;try{const _0x2b0f8a=await master_shop[_0x431dee(0x153)](),_0x1add3a=_0x4183a1[_0x431dee(0x163)],_0x3bb4d1=await profile[_0x431dee(0x15e)]({'email':_0x1add3a['email']}),_0x532d15=await staff[_0x431dee(0x15e)]({'email':_0x1add3a['email']}),_0x283494=await sales_sa[_0x431dee(0x153)]({'sales_staff_id':_0x532d15[_0x431dee(0x162)]}),_0x5c12d0=await product[_0x431dee(0x153)]();if(_0x2b0f8a[0x0][_0x431dee(0x15b)]==_0x431dee(0x176))var _0x39cdf5=users[_0x431dee(0x158)];else{if(_0x2b0f8a[0x0][_0x431dee(0x15b)]=='Hindi')var _0x39cdf5=users[_0x431dee(0x156)];else{if(_0x2b0f8a[0x0][_0x431dee(0x15b)]=='German')var _0x39cdf5=users[_0x431dee(0x17a)];else{if(_0x2b0f8a[0x0][_0x431dee(0x15b)]==_0x431dee(0x15f))var _0x39cdf5=users[_0x431dee(0x15f)];else{if(_0x2b0f8a[0x0][_0x431dee(0x15b)]==_0x431dee(0x164))var _0x39cdf5=users[_0x431dee(0x164)];else{if(_0x2b0f8a[0x0]['language']==_0x431dee(0x17c))var _0x39cdf5=users[_0x431dee(0x168)];else{if(_0x2b0f8a[0x0][_0x431dee(0x15b)]=='Chinese')var _0x39cdf5=users[_0x431dee(0x161)];else{if(_0x2b0f8a[0x0]['language']==_0x431dee(0x179))var _0x39cdf5=users[_0x431dee(0x159)];}}}}}}}_0x13e1a9[_0x431dee(0x15c)](_0x431dee(0x17d),{'success':_0x4183a1[_0x431dee(0x15a)]('success'),'errors':_0x4183a1['flash'](_0x431dee(0x17f)),'master_shop':_0x2b0f8a,'profile':_0x3bb4d1,'role':_0x1add3a,'language':_0x39cdf5,'product_list':_0x532d15[_0x431dee(0x16c)],'sales_mine':_0x283494,'product_data':_0x5c12d0,'staff_arr':_0x532d15});}catch(_0x1ef955){console[_0x431dee(0x17e)](_0x1ef955);}}),router[a0_0x25b97e(0x16f)](a0_0x25b97e(0x175),auth,async(_0x7e580e,_0x4abd0b)=>{const _0x2b61d7=a0_0x25b97e;try{const {id_data:_0x544b2a,price:_0x14ecbf}=_0x7e580e[_0x2b61d7(0x16d)],_0x21ea3b=await product[_0x2b61d7(0x157)](_0x544b2a);_0x21ea3b[_0x2b61d7(0x17d)]=_0x14ecbf;const _0xf9a1e7=await _0x21ea3b[_0x2b61d7(0x172)]();_0x4abd0b['json']({'data':_0xf9a1e7,'isChange':!![],'price':_0x14ecbf});}catch(_0x1476be){}}),module[a0_0x25b97e(0x177)]=router;