var a0_0x41201a=a0_0xa1ea;(function(_0x579a07,_0x1ef6b5){var _0x5e31fb=a0_0xa1ea,_0x1934e0=_0x579a07();while(!![]){try{var _0x5edfaf=-parseInt(_0x5e31fb(0xc1))/0x1*(parseInt(_0x5e31fb(0xed))/0x2)+parseInt(_0x5e31fb(0xc2))/0x3+parseInt(_0x5e31fb(0xd6))/0x4+-parseInt(_0x5e31fb(0xb7))/0x5+parseInt(_0x5e31fb(0xd8))/0x6*(-parseInt(_0x5e31fb(0xd5))/0x7)+-parseInt(_0x5e31fb(0xcf))/0x8+parseInt(_0x5e31fb(0x9e))/0x9*(parseInt(_0x5e31fb(0xb5))/0xa);if(_0x5edfaf===_0x1ef6b5)break;else _0x1934e0['push'](_0x1934e0['shift']());}catch(_0x4ddb9f){_0x1934e0['push'](_0x1934e0['shift']());}}}(a0_0x4be7,0x54dd2));function a0_0x4be7(){var _0x810e11=['updateOne','user','/view_so_xt/:id','41787pGoOme','/view_xt/:id','findById','mongoose','/so_x','view_collections','Router','Collection\x20Update\x20successfully','exports','/collection/view/','get','_id','Hindi','exceljs','bo_disc','language','collection_sox','collection_so_xt','totalNewPrice','../middleware/auth','view_collections_xt','save','collectionnumber','3160RtsTjs','spwp','1878550lQcvWe','Chinese','forEach','/x_so','multer','type_of_payment','collection_price','English\x20(US)','/collection/view_so_xt/','findOne','5477UpAXuf','447501RaNkHa','map','find','express','params','ewt','log','Portuguese\x20(BR)','English','body','Spanish','German','vol_deals','3571624MeOzQQ','totalcollection','render','Types','typeofprocess','string','14497AbjCMt','1936024pXHhDX','paid','1506NApYPa','Arabic\x20(ae)','cash_date','collection_xt','../public/language/languages.json','../models/all_models','success','id_detl','fin_disc','Arabic','valueOf','ObjectId','email','French','errors','flash','Portuguese','redirect','/view/:id','/view_sox/:id','view_collections_sox','150WPdcEC','True','json','length'];a0_0x4be7=function(){return _0x810e11;};return a0_0x4be7();}function a0_0xa1ea(_0x595f13,_0x486cea){var _0x4be7aa=a0_0x4be7();return a0_0xa1ea=function(_0xa1ea48,_0x378c46){_0xa1ea48=_0xa1ea48-0x98;var _0x47c61c=_0x4be7aa[_0xa1ea48];return _0x47c61c;},a0_0xa1ea(_0x595f13,_0x486cea);}const express=require(a0_0x41201a(0xc5)),app=express(),router=express[a0_0x41201a(0xa4)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sales_sa,sales_order}=require(a0_0x41201a(0xdd)),auth=require(a0_0x41201a(0xb1)),users=require(a0_0x41201a(0xdc)),excelJS=require(a0_0x41201a(0xab)),xlsx=require('xlsx'),multer=require(a0_0x41201a(0xbb)),mongoose=require(a0_0x41201a(0xa1));router[a0_0x41201a(0xa8)]('/view',auth,async(_0x5a73e3,_0x58c477)=>{var _0x147aaa=a0_0x41201a;try{const _0x4075d6=await master_shop[_0x147aaa(0xc4)](),_0x263ef3=_0x5a73e3[_0x147aaa(0x9c)],_0x1d19a6=await profile['findOne']({'email':_0x263ef3[_0x147aaa(0xe4)]}),_0x34ea12=await staff[_0x147aaa(0xc0)]({'email':_0x263ef3[_0x147aaa(0xe4)],'type_of_acc_cat':'2'});let _0xeedf95=[];_0x34ea12!=null&&(_0xeedf95=await sales_order[_0x147aaa(0xc4)]({'sales_staff_id':_0x34ea12['_id']}));if(_0x4075d6[0x0]['language']==_0x147aaa(0xbe))var _0x373de7=users['English'];else{if(_0x4075d6[0x0][_0x147aaa(0xad)]=='Hindi')var _0x373de7=users['Hindi'];else{if(_0x4075d6[0x0][_0x147aaa(0xad)]==_0x147aaa(0xcd))var _0x373de7=users['German'];else{if(_0x4075d6[0x0][_0x147aaa(0xad)]=='Spanish')var _0x373de7=users['Spanish'];else{if(_0x4075d6[0x0]['language']=='French')var _0x373de7=users[_0x147aaa(0xe5)];else{if(_0x4075d6[0x0]['language']=='Portuguese\x20(BR)')var _0x373de7=users['Portuguese'];else{if(_0x4075d6[0x0]['language']==_0x147aaa(0xb8))var _0x373de7=users[_0x147aaa(0xb8)];else{if(_0x4075d6[0x0]['language']==_0x147aaa(0xd9))var _0x373de7=users[_0x147aaa(0xe1)];}}}}}}}_0x58c477[_0x147aaa(0xd1)]('collection',{'success':_0x5a73e3[_0x147aaa(0xe7)](_0x147aaa(0xde)),'errors':_0x5a73e3[_0x147aaa(0xe7)](_0x147aaa(0xe6)),'master_shop':_0x4075d6,'profile':_0x1d19a6,'role':_0x263ef3,'language':_0x373de7,'sales_mine':_0xeedf95,'staff_arr':_0x34ea12});}catch(_0x2f6e23){console[_0x147aaa(0xc8)](_0x2f6e23);}}),router[a0_0x41201a(0xa8)](a0_0x41201a(0xea),auth,async(_0x3c8237,_0x1ffdbb)=>{var _0x437605=a0_0x41201a;try{const _0x237dc9=await master_shop[_0x437605(0xc4)](),_0x5d62d0=_0x3c8237[_0x437605(0x9c)],_0x239894=await profile[_0x437605(0xc0)]({'email':_0x5d62d0['email']}),_0x290210=await staff['findOne']({'email':_0x5d62d0[_0x437605(0xe4)]}),_0x3b2657=await customer['find']({'agent_id':_0x290210[_0x437605(0xa9)]}),_0x489d50=_0x3c8237['params']['id'],_0x188909=await sales_sa['findById'](_0x489d50);if(_0x237dc9[0x0][_0x437605(0xad)]==_0x437605(0xbe))var _0xf3b3f5=users['English'];else{if(_0x237dc9[0x0][_0x437605(0xad)]=='Hindi')var _0xf3b3f5=users[_0x437605(0xaa)];else{if(_0x237dc9[0x0][_0x437605(0xad)]==_0x437605(0xcd))var _0xf3b3f5=users[_0x437605(0xcd)];else{if(_0x237dc9[0x0][_0x437605(0xad)]=='Spanish')var _0xf3b3f5=users[_0x437605(0xcc)];else{if(_0x237dc9[0x0][_0x437605(0xad)]==_0x437605(0xe5))var _0xf3b3f5=users[_0x437605(0xe5)];else{if(_0x237dc9[0x0][_0x437605(0xad)]=='Portuguese\x20(BR)')var _0xf3b3f5=users[_0x437605(0xe8)];else{if(_0x237dc9[0x0]['language']=='Chinese')var _0xf3b3f5=users[_0x437605(0xb8)];else{if(_0x237dc9[0x0][_0x437605(0xad)]=='Arabic\x20(ae)')var _0xf3b3f5=users[_0x437605(0xe1)];}}}}}}}_0x1ffdbb[_0x437605(0xd1)](_0x437605(0xa3),{'success':_0x3c8237[_0x437605(0xe7)](_0x437605(0xde)),'errors':_0x3c8237['flash'](_0x437605(0xe6)),'master_shop':_0x237dc9,'profile':_0x239894,'role':_0x5d62d0,'language':_0xf3b3f5,'customer':_0x3b2657,'sales_sa':_0x188909,'staff_arr':_0x290210});}catch(_0xc1198c){console[_0x437605(0xc8)](_0xc1198c);}}),router['post']('/view/:id',auth,async(_0x5d4fb0,_0x358e54)=>{var _0x3edf4b=a0_0x41201a;try{const _0x3d0b37=_0x5d4fb0[_0x3edf4b(0xc6)]['id'],_0x2c8c12=await sales_sa['findById'](_0x3d0b37),{collection:_0x50f32b,invoicemoney:_0x3b87d2,collectionnumber:_0x5d1ab8,typeofpayment:_0x34a690,cashdate:_0x222159,id_detl:_0xf8fd8f}=_0x5d4fb0[_0x3edf4b(0xcb)];_0x358e54[_0x3edf4b(0x99)](_0x2c8c12);return;if(typeof _0xf8fd8f=='string')var _0x5043d6=[_0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xdf)]],_0x254b19=[_0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xc7)]],_0x10cb32=[_0x5d4fb0['body'][_0x3edf4b(0xb6)]],_0x4d986b=[_0x5d4fb0['body'][_0x3edf4b(0xe0)]],_0x4b2cdc=[_0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xce)]],_0xbe43b=[_0x5d4fb0[_0x3edf4b(0xcb)]['bo_disc']],_0x54b197=[_0x5d4fb0['body'][_0x3edf4b(0xb0)]];else var _0x5043d6=[..._0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xdf)]],_0x254b19=[..._0x5d4fb0['body'][_0x3edf4b(0xc7)]],_0x10cb32=[..._0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xb6)]],_0x4d986b=[..._0x5d4fb0[_0x3edf4b(0xcb)]['fin_disc']],_0x4b2cdc=[..._0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xce)]],_0xbe43b=[..._0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xac)]],_0x54b197=[..._0x5d4fb0[_0x3edf4b(0xcb)][_0x3edf4b(0xb0)]];const _0x5ead0f=_0x5043d6[_0x3edf4b(0xc3)](_0x59af6f=>{return _0x59af6f={'id_detl':_0x59af6f};});_0x254b19[_0x3edf4b(0xb9)]((_0x5a1cd9,_0x51911c)=>{_0x5ead0f[_0x51911c]['ewt']=_0x5a1cd9;}),_0x10cb32[_0x3edf4b(0xb9)]((_0x58b2ea,_0x227c72)=>{var _0x364712=_0x3edf4b;_0x5ead0f[_0x227c72][_0x364712(0xb6)]=_0x58b2ea;}),_0x4d986b[_0x3edf4b(0xb9)]((_0x3662f9,_0x1edabf)=>{var _0x420937=_0x3edf4b;_0x5ead0f[_0x1edabf][_0x420937(0xe0)]=_0x3662f9;}),_0x4b2cdc['forEach']((_0x299b25,_0x25f538)=>{_0x5ead0f[_0x25f538]['vol_deals']=_0x299b25;}),_0xbe43b['forEach']((_0x4647d3,_0x41f789)=>{_0x5ead0f[_0x41f789]['bo_disc']=_0x4647d3;}),_0x54b197[_0x3edf4b(0xb9)]((_0x2208aa,_0xd3fb80)=>{var _0x24d47d=_0x3edf4b;_0x5ead0f[_0xd3fb80][_0x24d47d(0xd0)]=_0x2208aa;}),_0x2c8c12[_0x3edf4b(0xbd)]=_0x50f32b,_0x2c8c12[_0x3edf4b(0xb4)]=_0x5d1ab8,_0x2c8c12[_0x3edf4b(0xbc)]=_0x34a690,_0x2c8c12[_0x3edf4b(0xda)]=_0x222159,_0x2c8c12[_0x3edf4b(0xd7)]='True';const _0x60160a=await _0x2c8c12[_0x3edf4b(0xb3)]();if(_0x60160a[_0x3edf4b(0xd7)]=='True')for(let _0x5443ab=0x0;_0x5443ab<=_0x5ead0f['length']-0x1;_0x5443ab++){const _0x7d9eac=_0x5ead0f[_0x5443ab],_0x87a6aa=mongoose[_0x3edf4b(0xd2)][_0x3edf4b(0xe3)];console[_0x3edf4b(0xc8)](_0x7d9eac);const _0x464003=await sales_sa[_0x3edf4b(0x9b)]({'_id':_0x87a6aa(_0x3d0b37['valueOf']()),'sale_product._id':_0x87a6aa(_0x7d9eac['id_detl'][_0x3edf4b(0xe2)]())},{'$set':{'sale_product.$.ewt':_0x7d9eac[_0x3edf4b(0xc7)],'sale_product.$.spwp':_0x7d9eac[_0x3edf4b(0xb6)],'sale_product.$.fin_disc':_0x7d9eac[_0x3edf4b(0xe0)],'sale_product.$.vol_deals':_0x7d9eac[_0x3edf4b(0xce)],'sale_product.$.bo_disc':_0x7d9eac[_0x3edf4b(0xac)],'sale_product.$.totalprice':parseFloat(_0x7d9eac['totalcollection'])}});}_0x5d4fb0[_0x3edf4b(0xe7)](_0x3edf4b(0xde),_0x3edf4b(0xa5)),_0x358e54['redirect']('/collection/view/'+_0x3d0b37);}catch(_0x5d8e23){console[_0x3edf4b(0xc8)](_0x5d8e23);}}),router[a0_0x41201a(0xa8)](a0_0x41201a(0xba),auth,async(_0x21a189,_0x38cbfb)=>{var _0x58835d=a0_0x41201a;try{const _0x5cc265=await master_shop[_0x58835d(0xc4)](),_0x5a9cc9=_0x21a189[_0x58835d(0x9c)],_0x11d04b=await profile[_0x58835d(0xc0)]({'email':_0x5a9cc9[_0x58835d(0xe4)]}),_0x5745c9=await staff[_0x58835d(0xc0)]({'email':_0x5a9cc9['email'],'type_of_acc_cat':'2'});let _0x40af1f=[];_0x5745c9!=null&&(_0x40af1f=await sales_order[_0x58835d(0xc4)]({'sales_staff_id':_0x5745c9[_0x58835d(0xa9)]}));console[_0x58835d(0xc8)](_0x40af1f);if(_0x5cc265[0x0]['language']=='English\x20(US)')var _0x3fc2f4=users[_0x58835d(0xca)];else{if(_0x5cc265[0x0]['language']==_0x58835d(0xaa))var _0x3fc2f4=users[_0x58835d(0xaa)];else{if(_0x5cc265[0x0]['language']==_0x58835d(0xcd))var _0x3fc2f4=users[_0x58835d(0xcd)];else{if(_0x5cc265[0x0][_0x58835d(0xad)]==_0x58835d(0xcc))var _0x3fc2f4=users[_0x58835d(0xcc)];else{if(_0x5cc265[0x0][_0x58835d(0xad)]==_0x58835d(0xe5))var _0x3fc2f4=users[_0x58835d(0xe5)];else{if(_0x5cc265[0x0][_0x58835d(0xad)]==_0x58835d(0xc9))var _0x3fc2f4=users[_0x58835d(0xe8)];else{if(_0x5cc265[0x0]['language']==_0x58835d(0xb8))var _0x3fc2f4=users[_0x58835d(0xb8)];else{if(_0x5cc265[0x0][_0x58835d(0xad)]=='Arabic\x20(ae)')var _0x3fc2f4=users[_0x58835d(0xe1)];}}}}}}}_0x38cbfb[_0x58835d(0xd1)](_0x58835d(0xae),{'success':_0x21a189[_0x58835d(0xe7)](_0x58835d(0xde)),'errors':_0x21a189[_0x58835d(0xe7)](_0x58835d(0xe6)),'master_shop':_0x5cc265,'profile':_0x11d04b,'role':_0x5a9cc9,'language':_0x3fc2f4,'sales_mine':_0x40af1f,'staff_arr':_0x5745c9});}catch(_0x2c27dd){console[_0x58835d(0xc8)](_0x2c27dd);}}),router[a0_0x41201a(0xa8)](a0_0x41201a(0xeb),auth,async(_0x45261e,_0x3a7ef0)=>{var _0x56d24b=a0_0x41201a;try{const _0x14d4c7=await master_shop['find'](),_0x1362c7=_0x45261e[_0x56d24b(0x9c)],_0x50d0bc=await profile['findOne']({'email':_0x1362c7[_0x56d24b(0xe4)]}),_0x8307a1=await staff['findOne']({'email':_0x1362c7[_0x56d24b(0xe4)]}),_0x5a559b=await customer[_0x56d24b(0xc4)]({'agent_id':_0x8307a1[_0x56d24b(0xa9)]}),_0x23b7e9=_0x45261e['params']['id'],_0x2c036d=await sales_order[_0x56d24b(0xa0)](_0x23b7e9);if(_0x14d4c7[0x0][_0x56d24b(0xad)]==_0x56d24b(0xbe))var _0x20acb9=users['English'];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]=='Hindi')var _0x20acb9=users[_0x56d24b(0xaa)];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]==_0x56d24b(0xcd))var _0x20acb9=users[_0x56d24b(0xcd)];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]==_0x56d24b(0xcc))var _0x20acb9=users[_0x56d24b(0xcc)];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]=='French')var _0x20acb9=users[_0x56d24b(0xe5)];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]==_0x56d24b(0xc9))var _0x20acb9=users['Portuguese'];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]==_0x56d24b(0xb8))var _0x20acb9=users[_0x56d24b(0xb8)];else{if(_0x14d4c7[0x0][_0x56d24b(0xad)]=='Arabic\x20(ae)')var _0x20acb9=users[_0x56d24b(0xe1)];}}}}}}}_0x3a7ef0['render'](_0x56d24b(0xec),{'success':_0x45261e[_0x56d24b(0xe7)]('success'),'errors':_0x45261e[_0x56d24b(0xe7)](_0x56d24b(0xe6)),'master_shop':_0x14d4c7,'profile':_0x50d0bc,'role':_0x1362c7,'language':_0x20acb9,'customer':_0x5a559b,'sales_sa':_0x2c036d});}catch(_0x2c53b4){console[_0x56d24b(0xc8)](_0x2c53b4);}}),router['get']('/view_x',auth,async(_0x419e30,_0x490843)=>{var _0x297322=a0_0x41201a;try{const _0x3497e8=await master_shop['find'](),_0x4e0f00=_0x419e30[_0x297322(0x9c)],_0x385ac7=await profile['findOne']({'email':_0x4e0f00[_0x297322(0xe4)]}),_0x51a032=await staff[_0x297322(0xc0)]({'email':_0x4e0f00[_0x297322(0xe4)],'type_of_acc_cat':'1'});let _0x55a248=[];_0x51a032!=null&&(_0x55a248=await sales_sa[_0x297322(0xc4)]({'sales_staff_id':_0x51a032[_0x297322(0xa9)]}));if(_0x3497e8[0x0][_0x297322(0xad)]==_0x297322(0xbe))var _0x3c4c8b=users[_0x297322(0xca)];else{if(_0x3497e8[0x0][_0x297322(0xad)]=='Hindi')var _0x3c4c8b=users[_0x297322(0xaa)];else{if(_0x3497e8[0x0]['language']==_0x297322(0xcd))var _0x3c4c8b=users[_0x297322(0xcd)];else{if(_0x3497e8[0x0][_0x297322(0xad)]==_0x297322(0xcc))var _0x3c4c8b=users[_0x297322(0xcc)];else{if(_0x3497e8[0x0][_0x297322(0xad)]==_0x297322(0xe5))var _0x3c4c8b=users['French'];else{if(_0x3497e8[0x0][_0x297322(0xad)]==_0x297322(0xc9))var _0x3c4c8b=users['Portuguese'];else{if(_0x3497e8[0x0][_0x297322(0xad)]==_0x297322(0xb8))var _0x3c4c8b=users['Chinese'];else{if(_0x3497e8[0x0][_0x297322(0xad)]==_0x297322(0xd9))var _0x3c4c8b=users[_0x297322(0xe1)];}}}}}}}_0x490843[_0x297322(0xd1)](_0x297322(0xdb),{'success':_0x419e30[_0x297322(0xe7)](_0x297322(0xde)),'errors':_0x419e30['flash'](_0x297322(0xe6)),'master_shop':_0x3497e8,'profile':_0x385ac7,'role':_0x4e0f00,'language':_0x3c4c8b,'sales_mine':_0x55a248,'staff_arr':_0x51a032});}catch(_0x1f24ab){console[_0x297322(0xc8)](_0x1f24ab);}}),router[a0_0x41201a(0xa8)](a0_0x41201a(0x9f),auth,async(_0x100a58,_0x2c6d5d)=>{var _0x572eb1=a0_0x41201a;try{const _0x90bae9=await master_shop['find'](),_0xeb55ce=_0x100a58[_0x572eb1(0x9c)],_0x2a88a6=await profile[_0x572eb1(0xc0)]({'email':_0xeb55ce['email']}),_0x1478c1=await staff[_0x572eb1(0xc0)]({'email':_0xeb55ce[_0x572eb1(0xe4)]}),_0x5b36d3=await customer[_0x572eb1(0xc4)]({'agent_id':_0x1478c1[_0x572eb1(0xa9)]}),_0x205142=_0x100a58[_0x572eb1(0xc6)]['id'],_0x4f74a2=await sales_sa['findById'](_0x205142);if(_0x90bae9[0x0]['language']==_0x572eb1(0xbe))var _0x280db7=users['English'];else{if(_0x90bae9[0x0][_0x572eb1(0xad)]==_0x572eb1(0xaa))var _0x280db7=users[_0x572eb1(0xaa)];else{if(_0x90bae9[0x0][_0x572eb1(0xad)]==_0x572eb1(0xcd))var _0x280db7=users['German'];else{if(_0x90bae9[0x0][_0x572eb1(0xad)]==_0x572eb1(0xcc))var _0x280db7=users[_0x572eb1(0xcc)];else{if(_0x90bae9[0x0][_0x572eb1(0xad)]==_0x572eb1(0xe5))var _0x280db7=users[_0x572eb1(0xe5)];else{if(_0x90bae9[0x0][_0x572eb1(0xad)]==_0x572eb1(0xc9))var _0x280db7=users[_0x572eb1(0xe8)];else{if(_0x90bae9[0x0]['language']==_0x572eb1(0xb8))var _0x280db7=users[_0x572eb1(0xb8)];else{if(_0x90bae9[0x0][_0x572eb1(0xad)]==_0x572eb1(0xd9))var _0x280db7=users[_0x572eb1(0xe1)];}}}}}}}_0x2c6d5d[_0x572eb1(0xd1)](_0x572eb1(0xb2),{'success':_0x100a58[_0x572eb1(0xe7)]('success'),'errors':_0x100a58[_0x572eb1(0xe7)](_0x572eb1(0xe6)),'master_shop':_0x90bae9,'profile':_0x2a88a6,'role':_0xeb55ce,'language':_0x280db7,'customer':_0x5b36d3,'sales_sa':_0x4f74a2,'staff_arr':_0x1478c1});}catch(_0x4490dc){console[_0x572eb1(0xc8)](_0x4490dc);}}),router['post'](a0_0x41201a(0x9f),auth,async(_0x9e9a89,_0x15cb19)=>{var _0x36e344=a0_0x41201a;try{const _0x2bed10=_0x9e9a89['params']['id'],_0x10ab66=await sales_sa[_0x36e344(0xa0)](_0x2bed10),{collection:_0x5cf03f,invoicemoney:_0x7a29d,collectionnumber:_0x3b56ad,typeofpayment:_0x32b596,cashdate:_0x544ba6,id_detl:_0x3ee2d5}=_0x9e9a89['body'];if(typeof _0x3ee2d5==_0x36e344(0xd4))var _0x2b8538=[_0x9e9a89[_0x36e344(0xcb)]['id_detl']],_0x34081d=[_0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xc7)]],_0x165254=[_0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xb6)]],_0x5ab0ae=[_0x9e9a89['body'][_0x36e344(0xe0)]],_0x31f716=[_0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xce)]],_0x51af9d=[_0x9e9a89['body'][_0x36e344(0xac)]],_0x44206c=[_0x9e9a89['body']['totalNewPrice']];else var _0x2b8538=[..._0x9e9a89[_0x36e344(0xcb)]['id_detl']],_0x34081d=[..._0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xc7)]],_0x165254=[..._0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xb6)]],_0x5ab0ae=[..._0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xe0)]],_0x31f716=[..._0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xce)]],_0x51af9d=[..._0x9e9a89['body']['bo_disc']],_0x44206c=[..._0x9e9a89[_0x36e344(0xcb)][_0x36e344(0xb0)]];const _0x48ad64=_0x2b8538[_0x36e344(0xc3)](_0x111e17=>{return _0x111e17={'id_detl':_0x111e17};});_0x34081d['forEach']((_0x2b4a8a,_0x2b06f8)=>{var _0x1592d4=_0x36e344;_0x48ad64[_0x2b06f8][_0x1592d4(0xc7)]=_0x2b4a8a;}),_0x165254[_0x36e344(0xb9)]((_0x3c4770,_0x45862e)=>{_0x48ad64[_0x45862e]['spwp']=_0x3c4770;}),_0x5ab0ae[_0x36e344(0xb9)]((_0x4222e0,_0x503201)=>{var _0x54661c=_0x36e344;_0x48ad64[_0x503201][_0x54661c(0xe0)]=_0x4222e0;}),_0x31f716[_0x36e344(0xb9)]((_0xabafc8,_0x31b25f)=>{var _0x1c726c=_0x36e344;_0x48ad64[_0x31b25f][_0x1c726c(0xce)]=_0xabafc8;}),_0x51af9d[_0x36e344(0xb9)]((_0x39b27e,_0x339a93)=>{var _0x119a03=_0x36e344;_0x48ad64[_0x339a93][_0x119a03(0xac)]=_0x39b27e;}),_0x44206c[_0x36e344(0xb9)]((_0x42147d,_0x16b3c3)=>{var _0x4557e0=_0x36e344;_0x48ad64[_0x16b3c3][_0x4557e0(0xd0)]=_0x42147d;}),_0x10ab66[_0x36e344(0xbd)]=_0x5cf03f,_0x10ab66['collectionnumber']=_0x3b56ad,_0x10ab66[_0x36e344(0xbc)]=_0x32b596,_0x10ab66[_0x36e344(0xda)]=_0x544ba6,_0x10ab66['paid']=_0x36e344(0x98),_0x10ab66[_0x36e344(0xd3)]='1';const _0x422c71=await _0x10ab66[_0x36e344(0xb3)]();if(_0x422c71[_0x36e344(0xd7)]==_0x36e344(0x98))for(let _0x2be963=0x0;_0x2be963<=_0x48ad64[_0x36e344(0x9a)]-0x1;_0x2be963++){const _0x5c548b=_0x48ad64[_0x2be963],_0x4aff94=mongoose[_0x36e344(0xd2)][_0x36e344(0xe3)];console[_0x36e344(0xc8)](_0x5c548b);const _0x1d4780=await sales_sa[_0x36e344(0x9b)]({'_id':_0x4aff94(_0x2bed10[_0x36e344(0xe2)]()),'sale_product._id':_0x4aff94(_0x5c548b['id_detl'][_0x36e344(0xe2)]())},{'$set':{'sale_product.$.ewt':_0x5c548b[_0x36e344(0xc7)],'sale_product.$.spwp':_0x5c548b[_0x36e344(0xb6)],'sale_product.$.fin_disc':_0x5c548b[_0x36e344(0xe0)],'sale_product.$.vol_deals':_0x5c548b[_0x36e344(0xce)],'sale_product.$.bo_disc':_0x5c548b['bo_disc'],'sale_product.$.totalprice':parseFloat(_0x5c548b[_0x36e344(0xd0)])}});}_0x9e9a89[_0x36e344(0xe7)]('success',_0x36e344(0xa5)),_0x15cb19[_0x36e344(0xe9)](_0x36e344(0xa7)+_0x2bed10);}catch(_0x510a40){console[_0x36e344(0xc8)](_0x510a40);}}),router['get'](a0_0x41201a(0xa2),auth,async(_0xb0f34b,_0x5cc3c4)=>{var _0x237b9d=a0_0x41201a;try{const _0x145fa1=await master_shop[_0x237b9d(0xc4)](),_0x4f53a3=_0xb0f34b[_0x237b9d(0x9c)],_0x2c74c2=await profile[_0x237b9d(0xc0)]({'email':_0x4f53a3[_0x237b9d(0xe4)]}),_0xb2d0cb=await staff[_0x237b9d(0xc0)]({'email':_0x4f53a3[_0x237b9d(0xe4)],'type_of_acc_cat':'1'});let _0x2026e0=[];_0xb2d0cb!=null&&(_0x2026e0=await sales_order['find']({'sales_staff_id':_0xb2d0cb['_id']}));if(_0x145fa1[0x0][_0x237b9d(0xad)]=='English\x20(US)')var _0x3b2374=users['English'];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]=='Hindi')var _0x3b2374=users[_0x237b9d(0xaa)];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]==_0x237b9d(0xcd))var _0x3b2374=users[_0x237b9d(0xcd)];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]==_0x237b9d(0xcc))var _0x3b2374=users[_0x237b9d(0xcc)];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]=='French')var _0x3b2374=users[_0x237b9d(0xe5)];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]==_0x237b9d(0xc9))var _0x3b2374=users[_0x237b9d(0xe8)];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]==_0x237b9d(0xb8))var _0x3b2374=users[_0x237b9d(0xb8)];else{if(_0x145fa1[0x0][_0x237b9d(0xad)]==_0x237b9d(0xd9))var _0x3b2374=users[_0x237b9d(0xe1)];}}}}}}}_0x5cc3c4['render'](_0x237b9d(0xaf),{'success':_0xb0f34b['flash'](_0x237b9d(0xde)),'errors':_0xb0f34b[_0x237b9d(0xe7)](_0x237b9d(0xe6)),'master_shop':_0x145fa1,'profile':_0x2c74c2,'role':_0x4f53a3,'language':_0x3b2374,'sales_mine':_0x2026e0,'staff_arr':_0xb2d0cb});}catch(_0x1e9c3e){console[_0x237b9d(0xc8)](_0x1e9c3e);}}),router['get']('/view_so_xt/:id',auth,async(_0x275762,_0x37df12)=>{var _0x331ed7=a0_0x41201a;try{const _0xdf3063=await master_shop[_0x331ed7(0xc4)](),_0x2b7a50=_0x275762[_0x331ed7(0x9c)],_0x50cbff=await profile['findOne']({'email':_0x2b7a50[_0x331ed7(0xe4)]}),_0x4d83af=await staff[_0x331ed7(0xc0)]({'email':_0x2b7a50['email']}),_0x1d5563=await customer[_0x331ed7(0xc4)]({'agent_id':_0x4d83af[_0x331ed7(0xa9)]}),_0x2cd103=_0x275762[_0x331ed7(0xc6)]['id'],_0xedab2c=await sales_order['findById'](_0x2cd103);if(_0xdf3063[0x0][_0x331ed7(0xad)]==_0x331ed7(0xbe))var _0x41df95=users[_0x331ed7(0xca)];else{if(_0xdf3063[0x0]['language']=='Hindi')var _0x41df95=users[_0x331ed7(0xaa)];else{if(_0xdf3063[0x0]['language']==_0x331ed7(0xcd))var _0x41df95=users[_0x331ed7(0xcd)];else{if(_0xdf3063[0x0][_0x331ed7(0xad)]==_0x331ed7(0xcc))var _0x41df95=users[_0x331ed7(0xcc)];else{if(_0xdf3063[0x0]['language']==_0x331ed7(0xe5))var _0x41df95=users[_0x331ed7(0xe5)];else{if(_0xdf3063[0x0]['language']=='Portuguese\x20(BR)')var _0x41df95=users[_0x331ed7(0xe8)];else{if(_0xdf3063[0x0]['language']==_0x331ed7(0xb8))var _0x41df95=users[_0x331ed7(0xb8)];else{if(_0xdf3063[0x0][_0x331ed7(0xad)]==_0x331ed7(0xd9))var _0x41df95=users[_0x331ed7(0xe1)];}}}}}}}_0x37df12[_0x331ed7(0xd1)]('view_collections_so_xt',{'success':_0x275762[_0x331ed7(0xe7)](_0x331ed7(0xde)),'errors':_0x275762[_0x331ed7(0xe7)]('errors'),'master_shop':_0xdf3063,'profile':_0x50cbff,'role':_0x2b7a50,'language':_0x41df95,'customer':_0x1d5563,'sales_sa':_0xedab2c,'staff_arr':_0x4d83af});}catch(_0x2532c4){console['log'](_0x2532c4);}}),router['post'](a0_0x41201a(0x9d),auth,async(_0x20e1bc,_0x4826a3)=>{var _0x2f48c0=a0_0x41201a;try{const _0x57db99=_0x20e1bc['params']['id'],_0x4c5867=await sales_order[_0x2f48c0(0xa0)](_0x57db99),{collection:_0x1ac481,invoicemoney:_0x42319c,collectionnumber:_0x15beab,typeofpayment:_0x4765dc,cashdate:_0x1728fc,id_detl:_0x2ee1b3}=_0x20e1bc[_0x2f48c0(0xcb)];_0x4c5867[_0x2f48c0(0xbd)]=_0x1ac481,_0x4c5867['type_of_payment']=_0x4765dc,_0x4c5867[_0x2f48c0(0xda)]=_0x1728fc,_0x4c5867[_0x2f48c0(0xd7)]=_0x2f48c0(0x98),_0x4c5867[_0x2f48c0(0xd3)]='1';const _0x50b913=await _0x4c5867['save']();_0x20e1bc[_0x2f48c0(0xe7)](_0x2f48c0(0xde),_0x2f48c0(0xa5)),_0x4826a3[_0x2f48c0(0xe9)](_0x2f48c0(0xbf)+_0x57db99);}catch(_0x2c8a){console[_0x2f48c0(0xc8)](_0x2c8a);}}),module[a0_0x41201a(0xa6)]=router;