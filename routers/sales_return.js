var a0_0x26a138=a0_0xdbea;function a0_0x2a64(){var _0xdf606b=['bay','$product_details.secondary_code','ToRoom','flash','214975aVRlkY','email','slice','date','data','errors','sale_qty','$product_details.type','../models/all_models','redirect','4395568xtzsTW','language','findById','524094eWDAjt','getDate','Arabic\x20(ae)','findOne','Spanish','Chinese','$customer_docs','success','product_name','$product_details.bay','floorlevel','message','types','params','../public/language/languages.json','log','save','English\x20(US)','due_amount','English','customers','92298PvMyqi','user','4454968tsUGkE','back','French','../middleware/auth','body','string','product_code','foreach\x20newproduct','primary_code','stocks','old_data','invoice','c_payment','exports','render','bin','return_qty','sales_return','post','527302WLcbPV','Enabled','/sales_return/view','Portuguese\x20(BR)','paid_amount','$product_details.floorlevel','product_details','Returned\x20Payment\x20For\x20Sale\x20Return','secondary_code','/view','payment\x20successfull','Arabic','sales_quantity','German','aggregate','Raw\x20Materials','$product_details.bin','$product_details.product_name','amount','old_warehouse_data','$name','type','$product_details.product_code','/view/:id','$product_details.product_stock','subtract','map','$product_details.rack','note','1RcAsbi','ToWarehouse','Hindi','master','new\x20new_data','1592532NKPDbL','customer','Router','Return\x20Goods','Sale\x20Return','forEach','stock','suppliers','warehouse_name','json','find','Portuguese','product_stock','return_sale_edit'];a0_0x2a64=function(){return _0xdf606b;};return a0_0x2a64();}(function(_0x3ef475,_0x50f01c){var _0x3557b1=a0_0xdbea,_0x7b9593=_0x3ef475();while(!![]){try{var _0x1fa2de=parseInt(_0x3557b1(0x1f0))/0x1*(parseInt(_0x3557b1(0x1d3))/0x2)+-parseInt(_0x3557b1(0x229))/0x3+parseInt(_0x3557b1(0x1f5))/0x4+-parseInt(_0x3557b1(0x207))/0x5+-parseInt(_0x3557b1(0x214))/0x6+-parseInt(_0x3557b1(0x22b))/0x7+parseInt(_0x3557b1(0x211))/0x8;if(_0x1fa2de===_0x50f01c)break;else _0x7b9593['push'](_0x7b9593['shift']());}catch(_0x650e3f){_0x7b9593['push'](_0x7b9593['shift']());}}}(a0_0x2a64,0x65000));function a0_0xdbea(_0x1bee53,_0x1a039b){var _0x2a6455=a0_0x2a64();return a0_0xdbea=function(_0xdbea1b,_0x2cf221){_0xdbea1b=_0xdbea1b-0x1c3;var _0x596f0b=_0x2a6455[_0xdbea1b];return _0x596f0b;},a0_0xdbea(_0x1bee53,_0x1a039b);}const express=require('express'),app=express(),router=express[a0_0x26a138(0x1f7)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x26a138(0x20f)),auth=require(a0_0x26a138(0x1c3)),users=require(a0_0x26a138(0x222));router['get'](a0_0x26a138(0x1dc),auth,async(_0xec5c7a,_0x44ff8c)=>{var _0x151099=a0_0x26a138;try{const {username:_0x2ab83a,email:_0x564681,role:_0x23874e}=_0xec5c7a[_0x151099(0x22a)],_0x463b0d=_0xec5c7a['user'],_0x3377ce=await profile[_0x151099(0x217)]({'email':_0x463b0d[_0x151099(0x208)]}),_0x3af321=await master_shop[_0x151099(0x1ff)]();console['log'](_0x151099(0x1f3),_0x3af321);const _0x7a8805=await sales_return[_0x151099(0x1e1)]([{'$lookup':{'from':_0x151099(0x228),'localField':_0x151099(0x1f6),'foreignField':'name','as':'customer_docs'}},{'$unwind':_0x151099(0x21a)}]);console[_0x151099(0x223)]('all_data',_0x7a8805);if(_0x3af321[0x0]['language']=='English\x20(US)'){var _0x2b9293=users[_0x151099(0x227)];console[_0x151099(0x223)](_0x2b9293);}else{if(_0x3af321[0x0]['language']==_0x151099(0x1f2))var _0x2b9293=users[_0x151099(0x1f2)];else{if(_0x3af321[0x0][_0x151099(0x212)]==_0x151099(0x1e0))var _0x2b9293=users[_0x151099(0x1e0)];else{if(_0x3af321[0x0][_0x151099(0x212)]==_0x151099(0x218))var _0x2b9293=users[_0x151099(0x218)];else{if(_0x3af321[0x0][_0x151099(0x212)]==_0x151099(0x22d))var _0x2b9293=users[_0x151099(0x22d)];else{if(_0x3af321[0x0][_0x151099(0x212)]==_0x151099(0x1d6))var _0x2b9293=users[_0x151099(0x200)];else{if(_0x3af321[0x0][_0x151099(0x212)]==_0x151099(0x219))var _0x2b9293=users[_0x151099(0x219)];else{if(_0x3af321[0x0]['language']==_0x151099(0x216))var _0x2b9293=users[_0x151099(0x1de)];}}}}}}}_0x44ff8c[_0x151099(0x1ce)](_0x151099(0x1d1),{'success':_0xec5c7a['flash'](_0x151099(0x21b)),'errors':_0xec5c7a['flash'](_0x151099(0x20c)),'role':_0x463b0d,'profile':_0x3377ce,'master_shop':_0x3af321,'user':_0x7a8805,'language':_0x2b9293});}catch(_0x452996){console[_0x151099(0x223)](_0x452996);}}),router['get'](a0_0x26a138(0x1ea),auth,async(_0x29a954,_0x294c0c)=>{var _0x498d1a=a0_0x26a138;try{const {username:_0x503ab6,email:_0x389587,role:_0x49b903}=_0x29a954[_0x498d1a(0x22a)],_0x491c7f=_0x29a954['user'],_0x4aadc7=await profile[_0x498d1a(0x217)]({'email':_0x491c7f[_0x498d1a(0x208)]}),_0x38d1b8=await master_shop[_0x498d1a(0x1ff)]();console['log']('master',_0x38d1b8);const _0x417cdd=_0x29a954[_0x498d1a(0x221)]['id'];console[_0x498d1a(0x223)](_0x417cdd);var _0x4d5c55=['Return\x20Rooms'];const _0x191abe=await sales_return[_0x498d1a(0x213)](_0x417cdd),_0x22892d=await warehouse[_0x498d1a(0x1e1)]([{'$match':{'name':_0x191abe[_0x498d1a(0x1f1)],'room':_0x191abe[_0x498d1a(0x205)]}},{'$unwind':'$product_details'},{'$group':{'_id':'$product_details._id','name':{'$first':_0x498d1a(0x1e4)},'product_stock':{'$first':_0x498d1a(0x1eb)},'bay':{'$first':_0x498d1a(0x21d)},'bin':{'$first':_0x498d1a(0x1e3)},'type':{'$first':_0x498d1a(0x20e)},'floorlevel':{'$first':_0x498d1a(0x1d8)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x498d1a(0x204)},'product_code':{'$first':_0x498d1a(0x1e9)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x498d1a(0x1ee)}}}]);console[_0x498d1a(0x223)](_0x22892d);const _0x2a399b=await warehouse['aggregate']([{'$match':{'status':_0x498d1a(0x1d4),'name':_0x498d1a(0x1f8),'warehouse_category':_0x498d1a(0x1e2)}},{'$group':{'_id':_0x498d1a(0x1e7),'name':{'$first':_0x498d1a(0x1e7)}}},{'$sort':{'name':0x1}}]),_0x264d4c=await product[_0x498d1a(0x1ff)]({});if(_0x38d1b8[0x0]['language']==_0x498d1a(0x225)){var _0x3c444b=users['English'];console['log'](_0x3c444b);}else{if(_0x38d1b8[0x0]['language']==_0x498d1a(0x1f2))var _0x3c444b=users['Hindi'];else{if(_0x38d1b8[0x0][_0x498d1a(0x212)]==_0x498d1a(0x1e0))var _0x3c444b=users[_0x498d1a(0x1e0)];else{if(_0x38d1b8[0x0][_0x498d1a(0x212)]=='Spanish')var _0x3c444b=users[_0x498d1a(0x218)];else{if(_0x38d1b8[0x0][_0x498d1a(0x212)]==_0x498d1a(0x22d))var _0x3c444b=users[_0x498d1a(0x22d)];else{if(_0x38d1b8[0x0][_0x498d1a(0x212)]==_0x498d1a(0x1d6))var _0x3c444b=users['Portuguese'];else{if(_0x38d1b8[0x0][_0x498d1a(0x212)]==_0x498d1a(0x219))var _0x3c444b=users['Chinese'];else{if(_0x38d1b8[0x0][_0x498d1a(0x212)]==_0x498d1a(0x216))var _0x3c444b=users[_0x498d1a(0x1de)];}}}}}}}_0x294c0c[_0x498d1a(0x1ce)](_0x498d1a(0x202),{'success':_0x29a954[_0x498d1a(0x206)](_0x498d1a(0x21b)),'errors':_0x29a954['flash'](_0x498d1a(0x20c)),'role':_0x491c7f,'profile':_0x4aadc7,'master_shop':_0x38d1b8,'user':_0x191abe,'stock':_0x22892d,'unit':_0x264d4c,'language':_0x3c444b,'warehouses':_0x2a399b,'rooms':_0x4d5c55});}catch(_0x433687){console[_0x498d1a(0x223)](_0x433687);}}),router[a0_0x26a138(0x1d2)](a0_0x26a138(0x1ea),auth,async(_0x221c53,_0xce7b73)=>{var _0x159144=a0_0x26a138;try{const _0x142769=_0x221c53[_0x159144(0x221)]['id'];console['log'](_0x142769);const _0x43e27e=await sales_return[_0x159144(0x217)]({'invoice':_0x221c53[_0x159144(0x1c4)][_0x159144(0x1cb)]});console[_0x159144(0x223)](_0x159144(0x1ca),_0x43e27e);const _0xe7f5a5=await warehouse[_0x159144(0x217)]({'name':_0x43e27e['ToWarehouse'],'room':_0x43e27e[_0x159144(0x205)]});console[_0x159144(0x223)](_0x159144(0x1e6),_0xe7f5a5);const {invoice:_0x526226,customer:_0xa15b5a,date:_0x372893,warehouse_name:_0xe4e9d6,product_name:_0x468dcc,primary_code:_0x364eb9,secondary_code:_0x2eaf4d,product_code:_0x44b560,sales_quantity:_0x1e9c3d,stocks:_0x4c97d7,return_qty:_0x5a7fa0,note:_0xfa1b17,to_warehouse_name:_0x60d5d8,to_Room_name:_0x3f6919}=_0x221c53[_0x159144(0x1c4)];console[_0x159144(0x223)](_0x221c53[_0x159144(0x1c4)]);if(typeof _0x468dcc==_0x159144(0x1c5))var _0x4df22f=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x21c)]],_0x3285ec=[_0x221c53['body']['primary_code']],_0x1c33c9=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x1db)]],_0x81880a=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x1c6)]],_0x5e96f7=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x1df)]],_0x4f5f86=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x1c9)]],_0xc31aa5=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x1d0)]],_0x4b810f=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x203)]],_0x285cad=[_0x221c53['body'][_0x159144(0x1cf)]],_0x184fba=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x220)]],_0x50cd6d=[_0x221c53[_0x159144(0x1c4)][_0x159144(0x21e)]];else var _0x4df22f=[..._0x221c53[_0x159144(0x1c4)][_0x159144(0x21c)]],_0x3285ec=[..._0x221c53[_0x159144(0x1c4)][_0x159144(0x1c8)]],_0x1c33c9=[..._0x221c53[_0x159144(0x1c4)][_0x159144(0x1db)]],_0x81880a=[..._0x221c53['body']['product_code']],_0x5e96f7=[..._0x221c53['body'][_0x159144(0x1df)]],_0x4f5f86=[..._0x221c53['body']['stocks']],_0xc31aa5=[..._0x221c53[_0x159144(0x1c4)]['return_qty']],_0x4b810f=[..._0x221c53[_0x159144(0x1c4)][_0x159144(0x203)]],_0x285cad=[..._0x221c53[_0x159144(0x1c4)][_0x159144(0x1cf)]],_0x184fba=[..._0x221c53[_0x159144(0x1c4)][_0x159144(0x220)]],_0x50cd6d=[..._0x221c53['body'][_0x159144(0x21e)]];const _0x43d386=_0x4df22f[_0x159144(0x1ed)](_0x2a6e77=>{return _0x2a6e77={'product_name':_0x2a6e77};});_0x3285ec['forEach']((_0x532a46,_0x1cb620)=>{_0x43d386[_0x1cb620]['primary_code']=_0x532a46;}),_0x1c33c9['forEach']((_0x2adc49,_0x5e970a)=>{_0x43d386[_0x5e970a]['secondary_code']=_0x2adc49;}),_0x81880a[_0x159144(0x1fa)]((_0xc207ba,_0x115225)=>{_0x43d386[_0x115225]['product_code']=_0xc207ba;}),_0x5e96f7['forEach']((_0x1d7b6d,_0xddc7a3)=>{_0x43d386[_0xddc7a3]['sale_qty']=_0x1d7b6d;}),_0x4f5f86[_0x159144(0x1fa)]((_0x1ff21d,_0x3e4302)=>{_0x43d386[_0x3e4302]['stock']=_0x1ff21d;}),_0xc31aa5['forEach']((_0xb6e28b,_0x22ebf6)=>{var _0x3d5aac=_0x159144;_0x43d386[_0x22ebf6][_0x3d5aac(0x1d0)]=_0xb6e28b;}),_0x4b810f[_0x159144(0x1fa)]((_0x392be9,_0x5dfeb8)=>{var _0x2ca25e=_0x159144;_0x43d386[_0x5dfeb8][_0x2ca25e(0x203)]=_0x392be9;}),_0x285cad[_0x159144(0x1fa)]((_0x4ea84e,_0x289e13)=>{_0x43d386[_0x289e13]['bin']=_0x4ea84e;}),_0x184fba[_0x159144(0x1fa)]((_0x2d06e0,_0x301a83)=>{var _0x378bdb=_0x159144;_0x43d386[_0x301a83][_0x378bdb(0x1e8)]=_0x2d06e0;}),_0x50cd6d[_0x159144(0x1fa)]((_0x40d6a9,_0x274772)=>{var _0x30978c=_0x159144;_0x43d386[_0x274772][_0x30978c(0x21e)]=_0x40d6a9;});var _0x1ce3d2=0x0;_0x43d386['forEach'](_0xaeacab=>{var _0x5e03d5=_0x159144;console[_0x5e03d5(0x223)](_0x5e03d5(0x1c7),_0xaeacab),(parseInt(_0xaeacab[_0x5e03d5(0x20d)])<parseInt(_0xaeacab[_0x5e03d5(0x1d0)])||parseInt(_0xaeacab[_0x5e03d5(0x1fb)])<parseInt(_0xaeacab[_0x5e03d5(0x1d0)])&&parseInt(_0xaeacab[_0x5e03d5(0x20d)])>parseInt(_0xaeacab[_0x5e03d5(0x1d0)])||parseInt(_0xaeacab['return_qty'])==0x0)&&_0x1ce3d2++;});if(_0x1ce3d2!=0x0)return _0x221c53[_0x159144(0x206)](_0x159144(0x20c),'Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0xce7b73[_0x159144(0x210)](_0x159144(0x22c));_0x43e27e['return_sale'][_0x159144(0x1fa)](_0x28528e=>{var _0x45b574=_0x159144;const _0x229470=_0xe7f5a5[_0x45b574(0x1d9)][_0x45b574(0x1ed)](_0x92dd12=>{var _0x2a6fd5=_0x45b574;_0x92dd12['product_name']==_0x28528e['product_name']&&_0x92dd12[_0x2a6fd5(0x21e)]==_0x28528e[_0x2a6fd5(0x21e)]&&_0x92dd12[_0x2a6fd5(0x1e8)]==_0x28528e[_0x2a6fd5(0x1e8)]&&_0x92dd12[_0x2a6fd5(0x1cf)]==_0x28528e['bin']&&_0x92dd12[_0x2a6fd5(0x203)]==_0x28528e['bay']&&(_0x92dd12[_0x2a6fd5(0x201)]=parseInt(_0x92dd12[_0x2a6fd5(0x201)])+parseInt(_0x28528e[_0x2a6fd5(0x1d0)]));});}),console[_0x159144(0x223)](_0x159144(0x1e6),_0xe7f5a5),await _0xe7f5a5[_0x159144(0x224)](),_0x43e27e[_0x159144(0x1cb)]=_0x526226,_0x43e27e[_0x159144(0x1f6)]=_0xa15b5a,_0x43e27e[_0x159144(0x20a)]=_0x372893,_0x43e27e[_0x159144(0x1fd)]=_0xe4e9d6,_0x43e27e['return_sale']=_0x43d386,_0x43e27e[_0x159144(0x1ef)]=_0xfa1b17,_0x43e27e[_0x159144(0x1f1)]=_0x60d5d8,_0x43e27e['ToRoom']=_0x3f6919;const _0x39cc43=await _0x43e27e[_0x159144(0x224)]();console[_0x159144(0x223)](_0x159144(0x1f4),_0x39cc43);const _0x50f2eb=await c_payment_data[_0x159144(0x217)]({'invoice':_0x221c53[_0x159144(0x1c4)][_0x159144(0x1cb)],'reason':'Sale\x20Return'});_0x50f2eb[_0x159144(0x1fc)]=_0x221c53[_0x159144(0x1c4)][_0x159144(0x1fc)],_0x50f2eb[_0x159144(0x20a)]=_0x221c53[_0x159144(0x1c4)][_0x159144(0x20a)],await _0x50f2eb[_0x159144(0x224)](),_0x221c53[_0x159144(0x206)](_0x159144(0x21b),'purchase\x20return\x20successfully'),_0xce7b73[_0x159144(0x210)](_0x159144(0x1d5));}catch(_0x24dc03){console[_0x159144(0x223)](_0x24dc03),_0xce7b73['status'](0xc8)[_0x159144(0x1fe)]({'message':_0x24dc03[_0x159144(0x21f)]});}}),router['post']('/give_payment/:id',auth,async(_0x4c413b,_0x2ad1bb)=>{var _0x17f513=a0_0x26a138;try{const _0x51c4e5=_0x4c413b[_0x17f513(0x221)]['id'],{invoice:_0x402529,customer:_0x26e25e,payable_to_customer:_0x86b0ca,paid_amount:_0x5141e9}=_0x4c413b[_0x17f513(0x1c4)],_0x2addbb=await sales_return[_0x17f513(0x213)](_0x51c4e5);console['log'](_0x17f513(0x20b),_0x2addbb),console[_0x17f513(0x223)](_0x86b0ca),console[_0x17f513(0x223)](_0x5141e9);var _0x5e52a5=_0x86b0ca-_0x5141e9;console[_0x17f513(0x223)](_0x17f513(0x1ec),_0x5e52a5),_0x2addbb[_0x17f513(0x1d7)]=parseFloat(_0x5141e9)+parseFloat(_0x2addbb[_0x17f513(0x1d7)]),_0x2addbb[_0x17f513(0x226)]=_0x5e52a5,console[_0x17f513(0x223)](_0x2addbb);const _0x55d543=await _0x2addbb[_0x17f513(0x224)]();console[_0x17f513(0x223)](0x1b207);const _0xc3fd49=await c_payment_data['findOne']({'invoice':_0x4c413b[_0x17f513(0x1c4)][_0x17f513(0x1cb)],'reason':_0x17f513(0x1f9)});console[_0x17f513(0x223)](_0x17f513(0x1cc),_0xc3fd49),_0xc3fd49[_0x17f513(0x1e5)]=_0x5e52a5,await _0xc3fd49[_0x17f513(0x224)]();let _0x36b8e9=new Date(),_0x1aeac8=('0'+_0x36b8e9[_0x17f513(0x215)]())[_0x17f513(0x209)](-0x2),_0x27c535=('0'+(_0x36b8e9['getMonth']()+0x1))[_0x17f513(0x209)](-0x2),_0xdf06bf=_0x36b8e9['getFullYear'](),_0x20e1ff=_0xdf06bf+'-'+_0x27c535+'-'+_0x1aeac8;const _0x4dcf7e=new customer_payment({'invoice':_0x402529,'date':_0xdf06bf+'-'+_0x27c535+'-'+_0x1aeac8,'customer':_0x26e25e,'reason':_0x17f513(0x1da),'amount':_0x5141e9}),_0x251f51=await _0x4dcf7e[_0x17f513(0x224)]();_0x4c413b[_0x17f513(0x206)]('success',_0x17f513(0x1dd)),_0x2ad1bb['redirect'](_0x17f513(0x1d5));}catch(_0x89963f){console['log'](_0x89963f);}}),router['get']('/invoice/:id',auth,async(_0xe1ab7a,_0x4d6ae3)=>{var _0x2e1fb8=a0_0x26a138;try{const {username:_0x514deb,email:_0x20542d,role:_0xe4cb6a}=_0xe1ab7a[_0x2e1fb8(0x22a)],_0x16f8a9=_0xe1ab7a[_0x2e1fb8(0x22a)],_0x412376=await profile[_0x2e1fb8(0x217)]({'email':_0x16f8a9[_0x2e1fb8(0x208)]}),_0x250c51=await master_shop[_0x2e1fb8(0x1ff)]();console['log'](_0x2e1fb8(0x1f3),_0x250c51);const _0x4299ca=_0xe1ab7a['params']['id'],_0x44ab03=await sales_return[_0x2e1fb8(0x213)](_0x4299ca);console[_0x2e1fb8(0x223)](_0x44ab03);const _0x2e6604=await customer[_0x2e1fb8(0x217)]({'name':_0x44ab03['customer']});console[_0x2e1fb8(0x223)](_0x2e6604);if(_0x250c51[0x0][_0x2e1fb8(0x212)]==_0x2e1fb8(0x225)){var _0x5f0d2c=users[_0x2e1fb8(0x227)];console['log'](_0x5f0d2c);}else{if(_0x250c51[0x0][_0x2e1fb8(0x212)]==_0x2e1fb8(0x1f2))var _0x5f0d2c=users[_0x2e1fb8(0x1f2)];else{if(_0x250c51[0x0][_0x2e1fb8(0x212)]=='German')var _0x5f0d2c=users[_0x2e1fb8(0x1e0)];else{if(_0x250c51[0x0]['language']==_0x2e1fb8(0x218))var _0x5f0d2c=users[_0x2e1fb8(0x218)];else{if(_0x250c51[0x0]['language']=='French')var _0x5f0d2c=users[_0x2e1fb8(0x22d)];else{if(_0x250c51[0x0]['language']=='Portuguese\x20(BR)')var _0x5f0d2c=users[_0x2e1fb8(0x200)];else{if(_0x250c51[0x0][_0x2e1fb8(0x212)]==_0x2e1fb8(0x219))var _0x5f0d2c=users['Chinese'];else{if(_0x250c51[0x0][_0x2e1fb8(0x212)]==_0x2e1fb8(0x216))var _0x5f0d2c=users['Arabic'];}}}}}}}_0x4d6ae3[_0x2e1fb8(0x1ce)]('sales_return_invoice',{'success':_0xe1ab7a['flash'](_0x2e1fb8(0x21b)),'errors':_0xe1ab7a[_0x2e1fb8(0x206)](_0x2e1fb8(0x20c)),'role':_0x16f8a9,'profile':_0x412376,'master_shop':_0x250c51,'customers':_0x2e6604,'sales':_0x44ab03,'language':_0x5f0d2c});}catch(_0x532c24){console[_0x2e1fb8(0x223)](_0x532c24);}}),module[a0_0x26a138(0x1cd)]=router;