function a0_0x510f(_0x265721,_0x46bf29){var _0x3365e2=a0_0x3365();return a0_0x510f=function(_0x510f7c,_0x14c633){_0x510f7c=_0x510f7c-0x6f;var _0x4a4c87=_0x3365e2[_0x510f7c];return _0x4a4c87;},a0_0x510f(_0x265721,_0x46bf29);}function a0_0x3365(){var _0x19f4bf=['English\x20(US)','Portuguese\x20(BR)','$return_product.product_name','purchases_return_report','12vaRlJb','1032LyYdyH','purchases_report','/supplier','23945sjIuqg','expense_report','success','sales_report','get','findOne','customer_report','user','French','/expense','sales_return_report','find','German','master','Arabic','purchases\x20report','/sale_return','/purchase_return','transfer_report','/purchases','exports','918703zrGcTW','/transfer','$product.product_name','Chinese','email','../middleware/auth','render','Arabic\x20(ae)','language','aggregate','941937OQTznV','13162743ABdNCD','Portuguese','11483688qgtvTy','English','Spanish','log','errors','flash','11779020RDCXSP','12196566ORrGzS','/sale','../models/all_models','Hindi','/adjustment','2ceBAyK','7gIsjdG','Router','$return_sale.product_name'];a0_0x3365=function(){return _0x19f4bf;};return a0_0x3365();}var a0_0x48e0d5=a0_0x510f;(function(_0x39f7de,_0x88f873){var _0x32f343=a0_0x510f,_0x4147ae=_0x39f7de();while(!![]){try{var _0xaa86ee=-parseInt(_0x32f343(0x92))/0x1*(parseInt(_0x32f343(0x71))/0x2)+-parseInt(_0x32f343(0x9c))/0x3*(-parseInt(_0x32f343(0x79))/0x4)+parseInt(_0x32f343(0x7d))/0x5*(parseInt(_0x32f343(0x7a))/0x6)+-parseInt(_0x32f343(0x72))/0x7*(parseInt(_0x32f343(0x9f))/0x8)+parseInt(_0x32f343(0xa6))/0x9+parseInt(_0x32f343(0xa5))/0xa+-parseInt(_0x32f343(0x9d))/0xb;if(_0xaa86ee===_0x88f873)break;else _0x4147ae['push'](_0x4147ae['shift']());}catch(_0x4885a5){_0x4147ae['push'](_0x4147ae['shift']());}}}(a0_0x3365,0xb69a8));const express=require('express'),app=express(),router=express[a0_0x48e0d5(0x73)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x48e0d5(0xa8)),auth=require(a0_0x48e0d5(0x97)),users=require('../public/language/languages.json');router[a0_0x48e0d5(0x81)]('/product',auth,async(_0x416769,_0x465873)=>{var _0x5a8994=a0_0x48e0d5;try{const {username:_0x1ceaaa,email:_0x3f5783,role:_0x43279d}=_0x416769[_0x5a8994(0x84)],_0x3a3d2a=_0x416769['user'],_0x350a9b=await profile[_0x5a8994(0x82)]({'email':_0x3a3d2a[_0x5a8994(0x96)]}),_0x2928c6=await master_shop['find']();console[_0x5a8994(0xa2)](_0x5a8994(0x8a),_0x2928c6);const _0x7081a3=await product[_0x5a8994(0x88)]();console[_0x5a8994(0xa2)](_0x7081a3);if(_0x2928c6[0x0]['language']==_0x5a8994(0x75)){var _0x8f5e89=users[_0x5a8994(0xa0)];console['log'](_0x8f5e89);}else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]==_0x5a8994(0x6f))var _0x8f5e89=users[_0x5a8994(0x6f)];else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]==_0x5a8994(0x89))var _0x8f5e89=users[_0x5a8994(0x89)];else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]==_0x5a8994(0xa1))var _0x8f5e89=users[_0x5a8994(0xa1)];else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]==_0x5a8994(0x85))var _0x8f5e89=users[_0x5a8994(0x85)];else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]==_0x5a8994(0x76))var _0x8f5e89=users[_0x5a8994(0x9e)];else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]==_0x5a8994(0x95))var _0x8f5e89=users[_0x5a8994(0x95)];else{if(_0x2928c6[0x0][_0x5a8994(0x9a)]=='Arabic\x20(ae)')var _0x8f5e89=users[_0x5a8994(0x8b)];}}}}}}}_0x465873[_0x5a8994(0x98)]('product_report',{'success':_0x416769[_0x5a8994(0xa4)](_0x5a8994(0x7f)),'errors':_0x416769[_0x5a8994(0xa4)]('errors'),'role':_0x3a3d2a,'profile':_0x350a9b,'master_shop':_0x2928c6,'alldata':_0x7081a3,'language':_0x8f5e89});}catch(_0x526e87){console[_0x5a8994(0xa2)](_0x526e87);}}),router['get']('/customer',auth,async(_0x37b50b,_0x373203)=>{var _0x41bec5=a0_0x48e0d5;try{const {username:_0x43c870,email:_0x55a149,role:_0x28cacd}=_0x37b50b[_0x41bec5(0x84)],_0x166f4a=_0x37b50b[_0x41bec5(0x84)],_0x1284f8=await profile[_0x41bec5(0x82)]({'email':_0x166f4a['email']}),_0x55255c=await master_shop[_0x41bec5(0x88)]();console['log'](_0x41bec5(0x8a),_0x55255c);const _0x4f7854=await customer[_0x41bec5(0x88)]();console['log'](_0x4f7854);if(_0x55255c[0x0]['language']=='English\x20(US)'){var _0x336d7e=users[_0x41bec5(0xa0)];console['log'](_0x336d7e);}else{if(_0x55255c[0x0]['language']=='Hindi')var _0x336d7e=users[_0x41bec5(0x6f)];else{if(_0x55255c[0x0]['language']==_0x41bec5(0x89))var _0x336d7e=users[_0x41bec5(0x89)];else{if(_0x55255c[0x0]['language']=='Spanish')var _0x336d7e=users['Spanish'];else{if(_0x55255c[0x0][_0x41bec5(0x9a)]==_0x41bec5(0x85))var _0x336d7e=users[_0x41bec5(0x85)];else{if(_0x55255c[0x0]['language']==_0x41bec5(0x76))var _0x336d7e=users[_0x41bec5(0x9e)];else{if(_0x55255c[0x0][_0x41bec5(0x9a)]==_0x41bec5(0x95))var _0x336d7e=users[_0x41bec5(0x95)];else{if(_0x55255c[0x0][_0x41bec5(0x9a)]==_0x41bec5(0x99))var _0x336d7e=users[_0x41bec5(0x8b)];}}}}}}}_0x373203[_0x41bec5(0x98)](_0x41bec5(0x83),{'success':_0x37b50b[_0x41bec5(0xa4)](_0x41bec5(0x7f)),'errors':_0x37b50b[_0x41bec5(0xa4)]('errors'),'role':_0x166f4a,'profile':_0x1284f8,'master_shop':_0x55255c,'alldata':_0x4f7854,'language':_0x336d7e});}catch(_0x2990e0){console[_0x41bec5(0xa2)](_0x2990e0);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x7c),auth,async(_0x76b944,_0x4b729d)=>{var _0x29d53c=a0_0x48e0d5;try{const {username:_0x6cef56,email:_0x466dd9,role:_0x2658db}=_0x76b944[_0x29d53c(0x84)],_0x4a0401=_0x76b944[_0x29d53c(0x84)],_0x46b7bc=await profile[_0x29d53c(0x82)]({'email':_0x4a0401[_0x29d53c(0x96)]}),_0xed2d0f=await master_shop[_0x29d53c(0x88)]();console['log']('master',_0xed2d0f);const _0x5f4a5d=await suppliers[_0x29d53c(0x88)]();console[_0x29d53c(0xa2)](_0x5f4a5d);if(_0xed2d0f[0x0][_0x29d53c(0x9a)]==_0x29d53c(0x75)){var _0x40a57d=users['English'];console['log'](_0x40a57d);}else{if(_0xed2d0f[0x0]['language']==_0x29d53c(0x6f))var _0x40a57d=users[_0x29d53c(0x6f)];else{if(_0xed2d0f[0x0]['language']=='German')var _0x40a57d=users[_0x29d53c(0x89)];else{if(_0xed2d0f[0x0][_0x29d53c(0x9a)]==_0x29d53c(0xa1))var _0x40a57d=users['Spanish'];else{if(_0xed2d0f[0x0][_0x29d53c(0x9a)]=='French')var _0x40a57d=users[_0x29d53c(0x85)];else{if(_0xed2d0f[0x0][_0x29d53c(0x9a)]=='Portuguese\x20(BR)')var _0x40a57d=users[_0x29d53c(0x9e)];else{if(_0xed2d0f[0x0]['language']=='Chinese')var _0x40a57d=users[_0x29d53c(0x95)];else{if(_0xed2d0f[0x0][_0x29d53c(0x9a)]==_0x29d53c(0x99))var _0x40a57d=users['Arabic'];}}}}}}}_0x4b729d[_0x29d53c(0x98)]('supplier_report',{'success':_0x76b944['flash']('success'),'errors':_0x76b944[_0x29d53c(0xa4)](_0x29d53c(0xa3)),'role':_0x4a0401,'profile':_0x46b7bc,'master_shop':_0xed2d0f,'alldata':_0x5f4a5d,'language':_0x40a57d});}catch(_0x531cd5){console[_0x29d53c(0xa2)](_0x531cd5);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x90),auth,async(_0xcd0339,_0x510e73)=>{var _0x1c6e12=a0_0x48e0d5;try{const {username:_0x48e314,email:_0x5b1cd6,role:_0x23755e}=_0xcd0339['user'],_0x342fed=_0xcd0339[_0x1c6e12(0x84)],_0x522b9a=await profile['findOne']({'email':_0x342fed[_0x1c6e12(0x96)]}),_0x1ef4ee=await master_shop['find']();console[_0x1c6e12(0xa2)](_0x1c6e12(0x8a),_0x1ef4ee);const _0x424c16=await purchases[_0x1c6e12(0x9b)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x1c6e12(0x94),'payable':0x1}}]);console[_0x1c6e12(0xa2)](_0x1c6e12(0x8c),_0x424c16);if(_0x1ef4ee[0x0]['language']==_0x1c6e12(0x75)){var _0x8451ca=users[_0x1c6e12(0xa0)];console[_0x1c6e12(0xa2)](_0x8451ca);}else{if(_0x1ef4ee[0x0][_0x1c6e12(0x9a)]=='Hindi')var _0x8451ca=users[_0x1c6e12(0x6f)];else{if(_0x1ef4ee[0x0][_0x1c6e12(0x9a)]==_0x1c6e12(0x89))var _0x8451ca=users[_0x1c6e12(0x89)];else{if(_0x1ef4ee[0x0][_0x1c6e12(0x9a)]==_0x1c6e12(0xa1))var _0x8451ca=users['Spanish'];else{if(_0x1ef4ee[0x0]['language']==_0x1c6e12(0x85))var _0x8451ca=users[_0x1c6e12(0x85)];else{if(_0x1ef4ee[0x0]['language']=='Portuguese\x20(BR)')var _0x8451ca=users[_0x1c6e12(0x9e)];else{if(_0x1ef4ee[0x0][_0x1c6e12(0x9a)]==_0x1c6e12(0x95))var _0x8451ca=users['Chinese'];else{if(_0x1ef4ee[0x0][_0x1c6e12(0x9a)]=='Arabic\x20(ae)')var _0x8451ca=users[_0x1c6e12(0x8b)];}}}}}}}_0x510e73[_0x1c6e12(0x98)](_0x1c6e12(0x7b),{'success':_0xcd0339[_0x1c6e12(0xa4)](_0x1c6e12(0x7f)),'errors':_0xcd0339['flash'](_0x1c6e12(0xa3)),'role':_0x342fed,'profile':_0x522b9a,'master_shop':_0x1ef4ee,'alldata':_0x424c16,'language':_0x8451ca});}catch(_0x29d910){console[_0x1c6e12(0xa2)](_0x29d910);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x8e),auth,async(_0xa563bf,_0x246bd7)=>{var _0x2307c4=a0_0x48e0d5;try{const {username:_0x10370c,email:_0x54043a,role:_0x38de70}=_0xa563bf[_0x2307c4(0x84)],_0x56b95d=_0xa563bf[_0x2307c4(0x84)],_0x514897=await profile['findOne']({'email':_0x56b95d[_0x2307c4(0x96)]}),_0x1ea454=await master_shop[_0x2307c4(0x88)]();console['log'](_0x2307c4(0x8a),_0x1ea454);const _0x5debb6=await purchases_return['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x2307c4(0x77),'receivable':0x1}}]);console[_0x2307c4(0xa2)](_0x2307c4(0x78),_0x5debb6);if(_0x1ea454[0x0][_0x2307c4(0x9a)]=='English\x20(US)'){var _0x33f7a4=users['English'];console[_0x2307c4(0xa2)](_0x33f7a4);}else{if(_0x1ea454[0x0][_0x2307c4(0x9a)]=='Hindi')var _0x33f7a4=users['Hindi'];else{if(_0x1ea454[0x0][_0x2307c4(0x9a)]==_0x2307c4(0x89))var _0x33f7a4=users[_0x2307c4(0x89)];else{if(_0x1ea454[0x0]['language']==_0x2307c4(0xa1))var _0x33f7a4=users[_0x2307c4(0xa1)];else{if(_0x1ea454[0x0][_0x2307c4(0x9a)]==_0x2307c4(0x85))var _0x33f7a4=users[_0x2307c4(0x85)];else{if(_0x1ea454[0x0][_0x2307c4(0x9a)]==_0x2307c4(0x76))var _0x33f7a4=users['Portuguese'];else{if(_0x1ea454[0x0][_0x2307c4(0x9a)]==_0x2307c4(0x95))var _0x33f7a4=users[_0x2307c4(0x95)];else{if(_0x1ea454[0x0]['language']=='Arabic\x20(ae)')var _0x33f7a4=users[_0x2307c4(0x8b)];}}}}}}}_0x246bd7[_0x2307c4(0x98)]('purchases_return_report',{'success':_0xa563bf[_0x2307c4(0xa4)](_0x2307c4(0x7f)),'errors':_0xa563bf['flash'](_0x2307c4(0xa3)),'role':_0x56b95d,'profile':_0x514897,'master_shop':_0x1ea454,'alldata':_0x5debb6,'language':_0x33f7a4});}catch(_0x13cc77){console['log'](_0x13cc77);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0xa7),auth,async(_0xba99bb,_0x57b518)=>{var _0x354c63=a0_0x48e0d5;try{const {username:_0x3e73cd,email:_0x28e6bd,role:_0x25b60b}=_0xba99bb['user'],_0x3e33a8=_0xba99bb[_0x354c63(0x84)],_0x37ee6b=await profile['findOne']({'email':_0x3e33a8['email']}),_0x1c2bd2=await master_shop[_0x354c63(0x88)]();console['log'](_0x354c63(0x8a),_0x1c2bd2);const _0xebd2f8=await sales[_0x354c63(0x9b)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':'$sale_product.product_name','receivable_amount':0x1}}]);console[_0x354c63(0xa2)](_0xebd2f8);if(_0x1c2bd2[0x0][_0x354c63(0x9a)]==_0x354c63(0x75)){var _0x3b6751=users['English'];console[_0x354c63(0xa2)](_0x3b6751);}else{if(_0x1c2bd2[0x0][_0x354c63(0x9a)]=='Hindi')var _0x3b6751=users[_0x354c63(0x6f)];else{if(_0x1c2bd2[0x0]['language']=='German')var _0x3b6751=users['German'];else{if(_0x1c2bd2[0x0][_0x354c63(0x9a)]=='Spanish')var _0x3b6751=users[_0x354c63(0xa1)];else{if(_0x1c2bd2[0x0][_0x354c63(0x9a)]=='French')var _0x3b6751=users[_0x354c63(0x85)];else{if(_0x1c2bd2[0x0][_0x354c63(0x9a)]==_0x354c63(0x76))var _0x3b6751=users[_0x354c63(0x9e)];else{if(_0x1c2bd2[0x0][_0x354c63(0x9a)]=='Chinese')var _0x3b6751=users[_0x354c63(0x95)];else{if(_0x1c2bd2[0x0][_0x354c63(0x9a)]==_0x354c63(0x99))var _0x3b6751=users[_0x354c63(0x8b)];}}}}}}}_0x57b518[_0x354c63(0x98)](_0x354c63(0x80),{'success':_0xba99bb[_0x354c63(0xa4)]('success'),'errors':_0xba99bb[_0x354c63(0xa4)](_0x354c63(0xa3)),'role':_0x3e33a8,'profile':_0x37ee6b,'master_shop':_0x1c2bd2,'alldata':_0xebd2f8,'language':_0x3b6751});}catch(_0x4c6747){console[_0x354c63(0xa2)](_0x4c6747);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x8d),auth,async(_0x52aa96,_0x29cf7e)=>{var _0x8f2478=a0_0x48e0d5;try{const {username:_0x32fd00,email:_0x158483,role:_0x4a499b}=_0x52aa96[_0x8f2478(0x84)],_0x2b3263=_0x52aa96[_0x8f2478(0x84)],_0x3189fa=await profile[_0x8f2478(0x82)]({'email':_0x2b3263[_0x8f2478(0x96)]}),_0x58d7ce=await master_shop[_0x8f2478(0x88)]();console[_0x8f2478(0xa2)](_0x8f2478(0x8a),_0x58d7ce);const _0x53037b=await sales_return[_0x8f2478(0x9b)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x8f2478(0x74),'payable_to_customer':0x1}}]);console['log'](_0x53037b);if(_0x58d7ce[0x0][_0x8f2478(0x9a)]=='English\x20(US)'){var _0x50a530=users['English'];console[_0x8f2478(0xa2)](_0x50a530);}else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]==_0x8f2478(0x6f))var _0x50a530=users[_0x8f2478(0x6f)];else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]==_0x8f2478(0x89))var _0x50a530=users['German'];else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]=='Spanish')var _0x50a530=users['Spanish'];else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]==_0x8f2478(0x85))var _0x50a530=users['French'];else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]==_0x8f2478(0x76))var _0x50a530=users[_0x8f2478(0x9e)];else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]==_0x8f2478(0x95))var _0x50a530=users[_0x8f2478(0x95)];else{if(_0x58d7ce[0x0][_0x8f2478(0x9a)]==_0x8f2478(0x99))var _0x50a530=users[_0x8f2478(0x8b)];}}}}}}}_0x29cf7e[_0x8f2478(0x98)](_0x8f2478(0x87),{'success':_0x52aa96[_0x8f2478(0xa4)]('success'),'errors':_0x52aa96[_0x8f2478(0xa4)](_0x8f2478(0xa3)),'role':_0x2b3263,'profile':_0x3189fa,'master_shop':_0x58d7ce,'alldata':_0x53037b,'language':_0x50a530});}catch(_0x33fc35){console[_0x8f2478(0xa2)](_0x33fc35);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x70),auth,async(_0x303de8,_0x5b09f2)=>{var _0x392245=a0_0x48e0d5;try{const {username:_0x4e29e9,email:_0x2332a4,role:_0x20f86f}=_0x303de8[_0x392245(0x84)],_0x358c03=_0x303de8[_0x392245(0x84)],_0x577d65=await profile[_0x392245(0x82)]({'email':_0x358c03[_0x392245(0x96)]}),_0x37615c=await master_shop[_0x392245(0x88)]();console[_0x392245(0xa2)]('master',_0x37615c);const _0x490e6e=await adjustment[_0x392245(0x88)]();console[_0x392245(0xa2)](_0x490e6e);if(_0x37615c[0x0][_0x392245(0x9a)]=='English\x20(US)'){var _0x1d35a3=users[_0x392245(0xa0)];console[_0x392245(0xa2)](_0x1d35a3);}else{if(_0x37615c[0x0][_0x392245(0x9a)]=='Hindi')var _0x1d35a3=users['Hindi'];else{if(_0x37615c[0x0][_0x392245(0x9a)]==_0x392245(0x89))var _0x1d35a3=users['German'];else{if(_0x37615c[0x0][_0x392245(0x9a)]==_0x392245(0xa1))var _0x1d35a3=users['Spanish'];else{if(_0x37615c[0x0]['language']==_0x392245(0x85))var _0x1d35a3=users[_0x392245(0x85)];else{if(_0x37615c[0x0][_0x392245(0x9a)]==_0x392245(0x76))var _0x1d35a3=users[_0x392245(0x9e)];else{if(_0x37615c[0x0][_0x392245(0x9a)]==_0x392245(0x95))var _0x1d35a3=users['Chinese'];else{if(_0x37615c[0x0][_0x392245(0x9a)]=='Arabic\x20(ae)')var _0x1d35a3=users[_0x392245(0x8b)];}}}}}}}_0x5b09f2[_0x392245(0x98)]('adjustment_report',{'success':_0x303de8[_0x392245(0xa4)](_0x392245(0x7f)),'errors':_0x303de8[_0x392245(0xa4)](_0x392245(0xa3)),'role':_0x358c03,'profile':_0x577d65,'master_shop':_0x37615c,'alldata':_0x490e6e,'language':_0x1d35a3});}catch(_0x3c9bf6){console['log'](_0x3c9bf6);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x93),auth,async(_0x2c99f9,_0x189551)=>{var _0x2ad352=a0_0x48e0d5;try{const {username:_0x14cc78,email:_0x5cea97,role:_0x4d3a81}=_0x2c99f9['user'],_0x446cfb=_0x2c99f9[_0x2ad352(0x84)],_0x2464fc=await profile[_0x2ad352(0x82)]({'email':_0x446cfb[_0x2ad352(0x96)]}),_0x1895cf=await master_shop[_0x2ad352(0x88)]();console[_0x2ad352(0xa2)](_0x2ad352(0x8a),_0x1895cf);const _0x5ba7d3=await transfers[_0x2ad352(0x88)]();console[_0x2ad352(0xa2)](_0x5ba7d3);if(_0x1895cf[0x0][_0x2ad352(0x9a)]==_0x2ad352(0x75)){var _0x5d94c5=users[_0x2ad352(0xa0)];console[_0x2ad352(0xa2)](_0x5d94c5);}else{if(_0x1895cf[0x0][_0x2ad352(0x9a)]==_0x2ad352(0x6f))var _0x5d94c5=users[_0x2ad352(0x6f)];else{if(_0x1895cf[0x0][_0x2ad352(0x9a)]==_0x2ad352(0x89))var _0x5d94c5=users[_0x2ad352(0x89)];else{if(_0x1895cf[0x0][_0x2ad352(0x9a)]==_0x2ad352(0xa1))var _0x5d94c5=users['Spanish'];else{if(_0x1895cf[0x0][_0x2ad352(0x9a)]==_0x2ad352(0x85))var _0x5d94c5=users[_0x2ad352(0x85)];else{if(_0x1895cf[0x0][_0x2ad352(0x9a)]=='Portuguese\x20(BR)')var _0x5d94c5=users['Portuguese'];else{if(_0x1895cf[0x0]['language']=='Chinese')var _0x5d94c5=users[_0x2ad352(0x95)];else{if(_0x1895cf[0x0][_0x2ad352(0x9a)]==_0x2ad352(0x99))var _0x5d94c5=users[_0x2ad352(0x8b)];}}}}}}}_0x189551[_0x2ad352(0x98)](_0x2ad352(0x8f),{'success':_0x2c99f9['flash'](_0x2ad352(0x7f)),'errors':_0x2c99f9[_0x2ad352(0xa4)](_0x2ad352(0xa3)),'role':_0x446cfb,'profile':_0x2464fc,'master_shop':_0x1895cf,'alldata':_0x5ba7d3,'language':_0x5d94c5});}catch(_0x4b4393){console[_0x2ad352(0xa2)](_0x4b4393);}}),router[a0_0x48e0d5(0x81)](a0_0x48e0d5(0x86),auth,async(_0x4b2ffe,_0x1d0ad6)=>{var _0x5e0872=a0_0x48e0d5;try{const {username:_0x305bd3,email:_0x2629a6,role:_0x5c4644}=_0x4b2ffe['user'],_0x25b7bc=_0x4b2ffe[_0x5e0872(0x84)],_0x115872=await profile[_0x5e0872(0x82)]({'email':_0x25b7bc[_0x5e0872(0x96)]}),_0x33c491=await master_shop[_0x5e0872(0x88)]();console[_0x5e0872(0xa2)](_0x5e0872(0x8a),_0x33c491);const _0x4040fc=await all_expenses[_0x5e0872(0x88)]();console[_0x5e0872(0xa2)](_0x4040fc);if(_0x33c491[0x0][_0x5e0872(0x9a)]==_0x5e0872(0x75)){var _0x4b1453=users['English'];console[_0x5e0872(0xa2)](_0x4b1453);}else{if(_0x33c491[0x0][_0x5e0872(0x9a)]==_0x5e0872(0x6f))var _0x4b1453=users[_0x5e0872(0x6f)];else{if(_0x33c491[0x0][_0x5e0872(0x9a)]==_0x5e0872(0x89))var _0x4b1453=users[_0x5e0872(0x89)];else{if(_0x33c491[0x0][_0x5e0872(0x9a)]=='Spanish')var _0x4b1453=users[_0x5e0872(0xa1)];else{if(_0x33c491[0x0]['language']==_0x5e0872(0x85))var _0x4b1453=users['French'];else{if(_0x33c491[0x0][_0x5e0872(0x9a)]==_0x5e0872(0x76))var _0x4b1453=users[_0x5e0872(0x9e)];else{if(_0x33c491[0x0][_0x5e0872(0x9a)]=='Chinese')var _0x4b1453=users[_0x5e0872(0x95)];else{if(_0x33c491[0x0]['language']==_0x5e0872(0x99))var _0x4b1453=users['Arabic'];}}}}}}}_0x1d0ad6[_0x5e0872(0x98)](_0x5e0872(0x7e),{'success':_0x4b2ffe[_0x5e0872(0xa4)](_0x5e0872(0x7f)),'errors':_0x4b2ffe[_0x5e0872(0xa4)](_0x5e0872(0xa3)),'role':_0x25b7bc,'profile':_0x115872,'master_shop':_0x33c491,'alldata':_0x4040fc,'language':_0x4b1453});}catch(_0x53d748){console[_0x5e0872(0xa2)](_0x53d748);}}),module[a0_0x48e0d5(0x91)]=router;