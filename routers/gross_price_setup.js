function a0_0x1ceb(_0x41bae0,_0x271bd3){const _0x18a945=a0_0x18a9();return a0_0x1ceb=function(_0x1ceb9e,_0x50e86a){_0x1ceb9e=_0x1ceb9e-0x145;let _0x5cd718=_0x18a945[_0x1ceb9e];return _0x5cd718;},a0_0x1ceb(_0x41bae0,_0x271bd3);}const a0_0x8fba47=a0_0x1ceb;(function(_0xcdde26,_0x4a3f95){const _0x201499=a0_0x1ceb,_0x1d88ac=_0xcdde26();while(!![]){try{const _0x3213d0=-parseInt(_0x201499(0x15c))/0x1+-parseInt(_0x201499(0x166))/0x2+parseInt(_0x201499(0x153))/0x3*(-parseInt(_0x201499(0x14d))/0x4)+parseInt(_0x201499(0x150))/0x5*(-parseInt(_0x201499(0x164))/0x6)+parseInt(_0x201499(0x161))/0x7+-parseInt(_0x201499(0x16b))/0x8*(-parseInt(_0x201499(0x148))/0x9)+parseInt(_0x201499(0x14f))/0xa*(parseInt(_0x201499(0x15d))/0xb);if(_0x3213d0===_0x4a3f95)break;else _0x1d88ac['push'](_0x1d88ac['shift']());}catch(_0x2a4eb6){_0x1d88ac['push'](_0x1d88ac['shift']());}}}(a0_0x18a9,0x44575));const express=require(a0_0x8fba47(0x157)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require(a0_0x8fba47(0x158)),auth=require('../middleware/auth'),users=require(a0_0x8fba47(0x165)),excelJS=require(a0_0x8fba47(0x151)),xlsx=require(a0_0x8fba47(0x156)),mongoose=require(a0_0x8fba47(0x154));router[a0_0x8fba47(0x160)]('/',auth,async(_0x275f0c,_0x37a282)=>{const _0x1262d8=a0_0x8fba47;try{const _0x2d9792=await master_shop[_0x1262d8(0x149)](),_0xcb511c=_0x275f0c['user'],_0x11090a=await profile[_0x1262d8(0x14a)]({'email':_0xcb511c[_0x1262d8(0x15a)]}),_0x168eb9=await staff[_0x1262d8(0x14a)]({'email':_0xcb511c[_0x1262d8(0x15a)]}),_0x12d891=await sales_sa[_0x1262d8(0x149)]({'sales_staff_id':_0x168eb9['_id']}),_0x19afcd=await product[_0x1262d8(0x149)]();if(_0x2d9792[0x0][_0x1262d8(0x169)]==_0x1262d8(0x15e))var _0x190978=users['English'];else{if(_0x2d9792[0x0][_0x1262d8(0x169)]==_0x1262d8(0x147))var _0x190978=users[_0x1262d8(0x147)];else{if(_0x2d9792[0x0][_0x1262d8(0x169)]=='German')var _0x190978=users['German'];else{if(_0x2d9792[0x0][_0x1262d8(0x169)]=='Spanish')var _0x190978=users[_0x1262d8(0x167)];else{if(_0x2d9792[0x0]['language']==_0x1262d8(0x14b))var _0x190978=users[_0x1262d8(0x14b)];else{if(_0x2d9792[0x0]['language']==_0x1262d8(0x155))var _0x190978=users['Portuguese'];else{if(_0x2d9792[0x0][_0x1262d8(0x169)]=='Chinese')var _0x190978=users[_0x1262d8(0x16a)];else{if(_0x2d9792[0x0][_0x1262d8(0x169)]==_0x1262d8(0x163))var _0x190978=users['Arabic'];}}}}}}}_0x37a282[_0x1262d8(0x168)](_0x1262d8(0x145),{'success':_0x275f0c['flash']('success'),'errors':_0x275f0c['flash'](_0x1262d8(0x15f)),'master_shop':_0x2d9792,'profile':_0x11090a,'role':_0xcb511c,'language':_0x190978,'product_list':_0x168eb9[_0x1262d8(0x14c)],'sales_mine':_0x12d891,'product_data':_0x19afcd,'staff_arr':_0x168eb9});}catch(_0x4afde0){console[_0x1262d8(0x162)](_0x4afde0);}}),router[a0_0x8fba47(0x14e)](a0_0x8fba47(0x146),auth,async(_0x28b3b9,_0x17261b)=>{const _0x3e4efd=a0_0x8fba47;try{const {id_data:_0x25b075,price:_0x1d9976}=_0x28b3b9[_0x3e4efd(0x159)],_0x225e9e=await product['findById'](_0x25b075);_0x225e9e[_0x3e4efd(0x145)]=_0x1d9976;const _0x50ed94=await _0x225e9e[_0x3e4efd(0x152)]();_0x17261b[_0x3e4efd(0x15b)]({'data':_0x50ed94,'isChange':!![],'price':_0x1d9976});}catch(_0x542750){}}),module['exports']=router;function a0_0x18a9(){const _0x102b42=['Arabic\x20(ae)','307722VmHJkd','../public/language/languages.json','275590ZOMCWY','Spanish','render','language','Chinese','104rZHuDU','gross_price','/save','Hindi','305127FduCsT','find','findOne','French','product_list','66828oyvHap','post','1517870gcpidj','25xgGsMu','exceljs','save','39yaNdJL','mongoose','Portuguese\x20(BR)','xlsx','express','../models/all_models','body','email','json','483705grdJCm','44ypOJHh','English\x20(US)','errors','get','2290148SXiIxp','log'];a0_0x18a9=function(){return _0x102b42;};return a0_0x18a9();}