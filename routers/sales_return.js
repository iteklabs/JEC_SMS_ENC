var a0_0x349a86=a0_0x31a1;function a0_0x26b5(){var _0x294982=['secondary_code','297wQyPnD','invoice','customers','/view/:id','amount','Hindi','types','$product_details.floorlevel','warehouse_name','Chinese','2322010ryDqGv','18732BPyKkI','3784RxYPuJ','Raw\x20Materials','bin','purchase\x20return\x20successfully','540378zxoBki','Portuguese\x20(BR)','json','$product_details.product_name','16LXsZZT','German','2175430ynjmSj','exports','$product_details.type','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','note','flash','/give_payment/:id','stocks','redirect','old_warehouse_data','Return\x20Rooms','paid_amount','Arabic','English','language','getDate','getMonth','Spanish','findOne','Portuguese','find','stock','/view','ToRoom','7100YVIvhd','type','data','email','/sales_return/view','1175839Emasku','sales_return_invoice','6YxbSQA','return_qty','Arabic\x20(ae)','suppliers','Returned\x20Payment\x20For\x20Sale\x20Return','params','render','sales_return','bay','$product_details','findById','body','forEach','errors','57201mPzMah','$product_details.secondary_code','getFullYear','foreach\x20newproduct','Return\x20Goods','slice','new\x20new_data','English\x20(US)','Sale\x20Return','ToWarehouse','French','product_code','aggregate','get','floorlevel','name','../middleware/auth','customer_docs','all_data','string','9NTupSl','express','../public/language/languages.json','$name','return_sale','map','../models/all_models','post','customer','success','sale_qty','sales_quantity','save','$product_details.product_stock','status','$product_details.storage','product_name','message','primary_code','$product_details.primary_code','master','date','user','product_stock','log'];a0_0x26b5=function(){return _0x294982;};return a0_0x26b5();}(function(_0x4ed85f,_0x1f5e76){var _0x1c3718=a0_0x31a1,_0x3f83e1=_0x4ed85f();while(!![]){try{var _0x58bcad=-parseInt(_0x1c3718(0x12d))/0x1+-parseInt(_0x1c3718(0x16b))/0x2+-parseInt(_0x1c3718(0x15b))/0x3*(-parseInt(_0x1c3718(0x189))/0x4)+-parseInt(_0x1c3718(0x171))/0x5*(-parseInt(_0x1c3718(0x190))/0x6)+parseInt(_0x1c3718(0x18e))/0x7*(-parseInt(_0x1c3718(0x16f))/0x8)+-parseInt(_0x1c3718(0x141))/0x9*(parseInt(_0x1c3718(0x165))/0xa)+parseInt(_0x1c3718(0x167))/0xb*(parseInt(_0x1c3718(0x166))/0xc);if(_0x58bcad===_0x1f5e76)break;else _0x3f83e1['push'](_0x3f83e1['shift']());}catch(_0x364221){_0x3f83e1['push'](_0x3f83e1['shift']());}}}(a0_0x26b5,0x3d95a));const express=require(a0_0x349a86(0x142)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x349a86(0x147)),auth=require(a0_0x349a86(0x13d)),users=require(a0_0x349a86(0x143));function a0_0x31a1(_0x4e391b,_0x48ee99){var _0x26b5c7=a0_0x26b5();return a0_0x31a1=function(_0x31a1ee,_0x597d92){_0x31a1ee=_0x31a1ee-0x12b;var _0x38749b=_0x26b5c7[_0x31a1ee];return _0x38749b;},a0_0x31a1(_0x4e391b,_0x48ee99);}router[a0_0x349a86(0x13a)](a0_0x349a86(0x187),auth,async(_0x351459,_0x26ad00)=>{var _0x4f712e=a0_0x349a86;try{const {username:_0x199fc3,email:_0xd1dc94,role:_0x223820}=_0x351459['user'],_0x3ae91b=_0x351459[_0x4f712e(0x157)],_0x177f75=await profile[_0x4f712e(0x183)]({'email':_0x3ae91b['email']}),_0x550e28=await master_shop['find']();console['log'](_0x4f712e(0x155),_0x550e28);const _0x384bb3=await sales_return[_0x4f712e(0x139)]([{'$lookup':{'from':_0x4f712e(0x15d),'localField':'customer','foreignField':_0x4f712e(0x13c),'as':_0x4f712e(0x13e)}},{'$unwind':'$customer_docs'}]);console[_0x4f712e(0x159)](_0x4f712e(0x13f),_0x384bb3);if(_0x550e28[0x0][_0x4f712e(0x17f)]=='English\x20(US)'){var _0x134c9d=users[_0x4f712e(0x17e)];console['log'](_0x134c9d);}else{if(_0x550e28[0x0][_0x4f712e(0x17f)]=='Hindi')var _0x134c9d=users[_0x4f712e(0x160)];else{if(_0x550e28[0x0]['language']==_0x4f712e(0x170))var _0x134c9d=users[_0x4f712e(0x170)];else{if(_0x550e28[0x0]['language']==_0x4f712e(0x182))var _0x134c9d=users[_0x4f712e(0x182)];else{if(_0x550e28[0x0]['language']==_0x4f712e(0x137))var _0x134c9d=users[_0x4f712e(0x137)];else{if(_0x550e28[0x0][_0x4f712e(0x17f)]==_0x4f712e(0x16c))var _0x134c9d=users[_0x4f712e(0x184)];else{if(_0x550e28[0x0][_0x4f712e(0x17f)]==_0x4f712e(0x164))var _0x134c9d=users[_0x4f712e(0x164)];else{if(_0x550e28[0x0][_0x4f712e(0x17f)]==_0x4f712e(0x192))var _0x134c9d=users[_0x4f712e(0x17d)];}}}}}}}_0x26ad00[_0x4f712e(0x196)](_0x4f712e(0x197),{'success':_0x351459[_0x4f712e(0x176)](_0x4f712e(0x14a)),'errors':_0x351459[_0x4f712e(0x176)](_0x4f712e(0x12c)),'role':_0x3ae91b,'profile':_0x177f75,'master_shop':_0x550e28,'user':_0x384bb3,'language':_0x134c9d});}catch(_0x5bb364){console[_0x4f712e(0x159)](_0x5bb364);}}),router[a0_0x349a86(0x13a)](a0_0x349a86(0x15e),auth,async(_0x44b45b,_0x4dc7ea)=>{var _0x40bb1b=a0_0x349a86;try{const {username:_0x5aeb1e,email:_0x2a4b7f,role:_0x3b7484}=_0x44b45b['user'],_0x4eec19=_0x44b45b[_0x40bb1b(0x157)],_0x161244=await profile['findOne']({'email':_0x4eec19[_0x40bb1b(0x18c)]}),_0x400883=await master_shop[_0x40bb1b(0x185)]();console[_0x40bb1b(0x159)]('master',_0x400883);const _0x8c1d0a=_0x44b45b[_0x40bb1b(0x195)]['id'];console[_0x40bb1b(0x159)](_0x8c1d0a);var _0x41830c=[_0x40bb1b(0x17b)];const _0x3bbe30=await sales_return[_0x40bb1b(0x19a)](_0x8c1d0a),_0x507c0c=await warehouse[_0x40bb1b(0x139)]([{'$match':{'name':_0x3bbe30[_0x40bb1b(0x136)],'room':_0x3bbe30[_0x40bb1b(0x188)]}},{'$unwind':_0x40bb1b(0x199)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x40bb1b(0x16e)},'product_stock':{'$first':_0x40bb1b(0x14e)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x40bb1b(0x173)},'floorlevel':{'$first':_0x40bb1b(0x162)},'primary_code':{'$first':_0x40bb1b(0x154)},'secondary_code':{'$first':_0x40bb1b(0x12e)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x40bb1b(0x150)},'rack':{'$first':'$product_details.rack'}}}]);console['log'](_0x507c0c);const _0x3a8b81=await warehouse[_0x40bb1b(0x139)]([{'$match':{'status':'Enabled','name':_0x40bb1b(0x131),'warehouse_category':_0x40bb1b(0x168)}},{'$group':{'_id':'$name','name':{'$first':_0x40bb1b(0x144)}}},{'$sort':{'name':0x1}}]),_0x94bb5f=await product['find']({});if(_0x400883[0x0][_0x40bb1b(0x17f)]=='English\x20(US)'){var _0x1a6242=users['English'];console[_0x40bb1b(0x159)](_0x1a6242);}else{if(_0x400883[0x0][_0x40bb1b(0x17f)]==_0x40bb1b(0x160))var _0x1a6242=users[_0x40bb1b(0x160)];else{if(_0x400883[0x0][_0x40bb1b(0x17f)]==_0x40bb1b(0x170))var _0x1a6242=users[_0x40bb1b(0x170)];else{if(_0x400883[0x0][_0x40bb1b(0x17f)]==_0x40bb1b(0x182))var _0x1a6242=users[_0x40bb1b(0x182)];else{if(_0x400883[0x0]['language']=='French')var _0x1a6242=users[_0x40bb1b(0x137)];else{if(_0x400883[0x0][_0x40bb1b(0x17f)]==_0x40bb1b(0x16c))var _0x1a6242=users['Portuguese'];else{if(_0x400883[0x0][_0x40bb1b(0x17f)]==_0x40bb1b(0x164))var _0x1a6242=users['Chinese'];else{if(_0x400883[0x0][_0x40bb1b(0x17f)]==_0x40bb1b(0x192))var _0x1a6242=users['Arabic'];}}}}}}}_0x4dc7ea['render']('return_sale_edit',{'success':_0x44b45b[_0x40bb1b(0x176)](_0x40bb1b(0x14a)),'errors':_0x44b45b['flash']('errors'),'role':_0x4eec19,'profile':_0x161244,'master_shop':_0x400883,'user':_0x3bbe30,'stock':_0x507c0c,'unit':_0x94bb5f,'language':_0x1a6242,'warehouses':_0x3a8b81,'rooms':_0x41830c});}catch(_0x5ae20e){console[_0x40bb1b(0x159)](_0x5ae20e);}}),router[a0_0x349a86(0x148)](a0_0x349a86(0x15e),auth,async(_0xa437a3,_0x505aa7)=>{var _0x44a4e8=a0_0x349a86;try{const _0x1993e6=_0xa437a3[_0x44a4e8(0x195)]['id'];console[_0x44a4e8(0x159)](_0x1993e6);const _0x5273ab=await sales_return['findOne']({'invoice':_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x15c)]});console['log']('old_data',_0x5273ab);const _0x5de4b6=await warehouse[_0x44a4e8(0x183)]({'name':_0x5273ab[_0x44a4e8(0x136)],'room':_0x5273ab[_0x44a4e8(0x188)]});console[_0x44a4e8(0x159)](_0x44a4e8(0x17a),_0x5de4b6);const {invoice:_0x246415,customer:_0x1750b5,date:_0x3efd2d,warehouse_name:_0x4a8a69,product_name:_0x272c09,primary_code:_0x1e8815,secondary_code:_0x54297f,product_code:_0x105164,sales_quantity:_0x4b1baa,stocks:_0x26496c,return_qty:_0x21659c,note:_0x2ca850,to_warehouse_name:_0x31e4de,to_Room_name:_0x15749e}=_0xa437a3['body'];console[_0x44a4e8(0x159)](_0xa437a3['body']);if(typeof _0x272c09==_0x44a4e8(0x140))var _0xf251af=[_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x151)]],_0x2e3f6f=[_0xa437a3['body'][_0x44a4e8(0x153)]],_0x3e4fec=[_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x15a)]],_0x360fb2=[_0xa437a3['body'][_0x44a4e8(0x138)]],_0x2cffec=[_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x14c)]],_0x169021=[_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x178)]],_0x599ed1=[_0xa437a3['body'][_0x44a4e8(0x191)]],_0x23d77b=[_0xa437a3[_0x44a4e8(0x19b)]['bay']],_0x35bc5f=[_0xa437a3[_0x44a4e8(0x19b)]['bin']],_0x352b5f=[_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x161)]],_0x112dbd=[_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x13b)]];else var _0xf251af=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x151)]],_0x2e3f6f=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x153)]],_0x3e4fec=[..._0xa437a3['body']['secondary_code']],_0x360fb2=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x138)]],_0x2cffec=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x14c)]],_0x169021=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x178)]],_0x599ed1=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x191)]],_0x23d77b=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x198)]],_0x35bc5f=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x169)]],_0x352b5f=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x161)]],_0x112dbd=[..._0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x13b)]];const _0x3ddc93=_0xf251af[_0x44a4e8(0x146)](_0x8aa5c1=>{return _0x8aa5c1={'product_name':_0x8aa5c1};});_0x2e3f6f['forEach']((_0x428498,_0x154631)=>{var _0x4246d9=_0x44a4e8;_0x3ddc93[_0x154631][_0x4246d9(0x153)]=_0x428498;}),_0x3e4fec['forEach']((_0x1390a0,_0x42418f)=>{var _0x223181=_0x44a4e8;_0x3ddc93[_0x42418f][_0x223181(0x15a)]=_0x1390a0;}),_0x360fb2[_0x44a4e8(0x12b)]((_0x48af08,_0x5e7f21)=>{var _0x2c173e=_0x44a4e8;_0x3ddc93[_0x5e7f21][_0x2c173e(0x138)]=_0x48af08;}),_0x2cffec[_0x44a4e8(0x12b)]((_0xd95cdf,_0x38dd0d)=>{var _0x205b45=_0x44a4e8;_0x3ddc93[_0x38dd0d][_0x205b45(0x14b)]=_0xd95cdf;}),_0x169021[_0x44a4e8(0x12b)]((_0x1eaad9,_0x4f48fa)=>{var _0x5d5216=_0x44a4e8;_0x3ddc93[_0x4f48fa][_0x5d5216(0x186)]=_0x1eaad9;}),_0x599ed1[_0x44a4e8(0x12b)]((_0x2639ac,_0x3f0224)=>{var _0x574db1=_0x44a4e8;_0x3ddc93[_0x3f0224][_0x574db1(0x191)]=_0x2639ac;}),_0x23d77b[_0x44a4e8(0x12b)]((_0xe9b23d,_0x330de3)=>{var _0x26064c=_0x44a4e8;_0x3ddc93[_0x330de3][_0x26064c(0x198)]=_0xe9b23d;}),_0x35bc5f[_0x44a4e8(0x12b)]((_0x282712,_0xde0db9)=>{var _0x4d0f52=_0x44a4e8;_0x3ddc93[_0xde0db9][_0x4d0f52(0x169)]=_0x282712;}),_0x352b5f[_0x44a4e8(0x12b)]((_0x457bdf,_0x587f53)=>{var _0xe096b=_0x44a4e8;_0x3ddc93[_0x587f53][_0xe096b(0x18a)]=_0x457bdf;}),_0x112dbd[_0x44a4e8(0x12b)]((_0x5c4fd8,_0x4a914c)=>{var _0x1ea0cf=_0x44a4e8;_0x3ddc93[_0x4a914c][_0x1ea0cf(0x13b)]=_0x5c4fd8;});var _0x47f50c=0x0;_0x3ddc93['forEach'](_0x4bde62=>{var _0x1cc20a=_0x44a4e8;console[_0x1cc20a(0x159)](_0x1cc20a(0x130),_0x4bde62),(parseInt(_0x4bde62[_0x1cc20a(0x14b)])<parseInt(_0x4bde62[_0x1cc20a(0x191)])||parseInt(_0x4bde62[_0x1cc20a(0x186)])<parseInt(_0x4bde62[_0x1cc20a(0x191)])&&parseInt(_0x4bde62[_0x1cc20a(0x14b)])>parseInt(_0x4bde62['return_qty'])||parseInt(_0x4bde62['return_qty'])==0x0)&&_0x47f50c++;});if(_0x47f50c!=0x0)return _0xa437a3['flash'](_0x44a4e8(0x12c),_0x44a4e8(0x174)),_0x505aa7['redirect']('back');_0x5273ab[_0x44a4e8(0x145)][_0x44a4e8(0x12b)](_0x247798=>{var _0x23423f=_0x44a4e8;const _0x2880f4=_0x5de4b6['product_details'][_0x23423f(0x146)](_0x59e9b2=>{var _0x333298=_0x23423f;_0x59e9b2['product_name']==_0x247798['product_name']&&_0x59e9b2[_0x333298(0x13b)]==_0x247798['floorlevel']&&_0x59e9b2['type']==_0x247798['type']&&_0x59e9b2[_0x333298(0x169)]==_0x247798[_0x333298(0x169)]&&_0x59e9b2[_0x333298(0x198)]==_0x247798[_0x333298(0x198)]&&(_0x59e9b2[_0x333298(0x158)]=parseInt(_0x59e9b2[_0x333298(0x158)])+parseInt(_0x247798[_0x333298(0x191)]));});}),console[_0x44a4e8(0x159)](_0x44a4e8(0x17a),_0x5de4b6),await _0x5de4b6['save'](),_0x5273ab[_0x44a4e8(0x15c)]=_0x246415,_0x5273ab[_0x44a4e8(0x149)]=_0x1750b5,_0x5273ab[_0x44a4e8(0x156)]=_0x3efd2d,_0x5273ab[_0x44a4e8(0x163)]=_0x4a8a69,_0x5273ab['return_sale']=_0x3ddc93,_0x5273ab[_0x44a4e8(0x175)]=_0x2ca850,_0x5273ab[_0x44a4e8(0x136)]=_0x31e4de,_0x5273ab['ToRoom']=_0x15749e;const _0x3bc077=await _0x5273ab[_0x44a4e8(0x14d)]();console[_0x44a4e8(0x159)](_0x44a4e8(0x133),_0x3bc077);const _0x29518c=await c_payment_data['findOne']({'invoice':_0xa437a3[_0x44a4e8(0x19b)]['invoice'],'reason':_0x44a4e8(0x135)});_0x29518c['suppliers']=_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x193)],_0x29518c[_0x44a4e8(0x156)]=_0xa437a3[_0x44a4e8(0x19b)][_0x44a4e8(0x156)],await _0x29518c[_0x44a4e8(0x14d)](),_0xa437a3[_0x44a4e8(0x176)](_0x44a4e8(0x14a),_0x44a4e8(0x16a)),_0x505aa7[_0x44a4e8(0x179)](_0x44a4e8(0x18d));}catch(_0x1c1fff){console[_0x44a4e8(0x159)](_0x1c1fff),_0x505aa7[_0x44a4e8(0x14f)](0xc8)[_0x44a4e8(0x16d)]({'message':_0x1c1fff[_0x44a4e8(0x152)]});}}),router[a0_0x349a86(0x148)](a0_0x349a86(0x177),auth,async(_0x321ab1,_0x4ea437)=>{var _0x3e3798=a0_0x349a86;try{const _0x18c824=_0x321ab1['params']['id'],{invoice:_0x9c1416,customer:_0x1649ae,payable_to_customer:_0x440d4f,paid_amount:_0xd94d6d}=_0x321ab1[_0x3e3798(0x19b)],_0x988cfb=await sales_return[_0x3e3798(0x19a)](_0x18c824);console[_0x3e3798(0x159)](_0x3e3798(0x18b),_0x988cfb),console[_0x3e3798(0x159)](_0x440d4f),console[_0x3e3798(0x159)](_0xd94d6d);var _0x1aa68a=_0x440d4f-_0xd94d6d;console[_0x3e3798(0x159)]('subtract',_0x1aa68a),_0x988cfb[_0x3e3798(0x17c)]=parseFloat(_0xd94d6d)+parseFloat(_0x988cfb[_0x3e3798(0x17c)]),_0x988cfb['due_amount']=_0x1aa68a,console[_0x3e3798(0x159)](_0x988cfb);const _0x1f650a=await _0x988cfb['save']();console[_0x3e3798(0x159)](0x1b207);const _0x7368b2=await c_payment_data[_0x3e3798(0x183)]({'invoice':_0x321ab1['body'][_0x3e3798(0x15c)],'reason':'Sale\x20Return'});console[_0x3e3798(0x159)]('c_payment',_0x7368b2),_0x7368b2[_0x3e3798(0x15f)]=_0x1aa68a,await _0x7368b2[_0x3e3798(0x14d)]();let _0x3b7374=new Date(),_0x5423a9=('0'+_0x3b7374[_0x3e3798(0x180)]())[_0x3e3798(0x132)](-0x2),_0x2e0ca2=('0'+(_0x3b7374[_0x3e3798(0x181)]()+0x1))['slice'](-0x2),_0x23332d=_0x3b7374[_0x3e3798(0x12f)](),_0x5a04c5=_0x23332d+'-'+_0x2e0ca2+'-'+_0x5423a9;const _0x360fe1=new customer_payment({'invoice':_0x9c1416,'date':_0x23332d+'-'+_0x2e0ca2+'-'+_0x5423a9,'customer':_0x1649ae,'reason':_0x3e3798(0x194),'amount':_0xd94d6d}),_0x221fff=await _0x360fe1[_0x3e3798(0x14d)]();_0x321ab1[_0x3e3798(0x176)]('success','payment\x20successfull'),_0x4ea437[_0x3e3798(0x179)]('/sales_return/view');}catch(_0x505739){console['log'](_0x505739);}}),router[a0_0x349a86(0x13a)]('/invoice/:id',auth,async(_0x19116d,_0x2594c2)=>{var _0x5eb152=a0_0x349a86;try{const {username:_0x4c9169,email:_0x3c8040,role:_0x195cb8}=_0x19116d[_0x5eb152(0x157)],_0x2f1957=_0x19116d[_0x5eb152(0x157)],_0x771c92=await profile[_0x5eb152(0x183)]({'email':_0x2f1957[_0x5eb152(0x18c)]}),_0x27965e=await master_shop[_0x5eb152(0x185)]();console[_0x5eb152(0x159)](_0x5eb152(0x155),_0x27965e);const _0x3ba3df=_0x19116d['params']['id'],_0x3448ee=await sales_return[_0x5eb152(0x19a)](_0x3ba3df);console[_0x5eb152(0x159)](_0x3448ee);const _0x591b4b=await customer[_0x5eb152(0x183)]({'name':_0x3448ee[_0x5eb152(0x149)]});console[_0x5eb152(0x159)](_0x591b4b);if(_0x27965e[0x0][_0x5eb152(0x17f)]==_0x5eb152(0x134)){var _0x128cc6=users[_0x5eb152(0x17e)];console[_0x5eb152(0x159)](_0x128cc6);}else{if(_0x27965e[0x0][_0x5eb152(0x17f)]==_0x5eb152(0x160))var _0x128cc6=users[_0x5eb152(0x160)];else{if(_0x27965e[0x0][_0x5eb152(0x17f)]=='German')var _0x128cc6=users['German'];else{if(_0x27965e[0x0][_0x5eb152(0x17f)]==_0x5eb152(0x182))var _0x128cc6=users[_0x5eb152(0x182)];else{if(_0x27965e[0x0][_0x5eb152(0x17f)]==_0x5eb152(0x137))var _0x128cc6=users[_0x5eb152(0x137)];else{if(_0x27965e[0x0][_0x5eb152(0x17f)]==_0x5eb152(0x16c))var _0x128cc6=users[_0x5eb152(0x184)];else{if(_0x27965e[0x0][_0x5eb152(0x17f)]=='Chinese')var _0x128cc6=users[_0x5eb152(0x164)];else{if(_0x27965e[0x0]['language']==_0x5eb152(0x192))var _0x128cc6=users[_0x5eb152(0x17d)];}}}}}}}_0x2594c2[_0x5eb152(0x196)](_0x5eb152(0x18f),{'success':_0x19116d[_0x5eb152(0x176)](_0x5eb152(0x14a)),'errors':_0x19116d[_0x5eb152(0x176)](_0x5eb152(0x12c)),'role':_0x2f1957,'profile':_0x771c92,'master_shop':_0x27965e,'customers':_0x591b4b,'sales':_0x3448ee,'language':_0x128cc6});}catch(_0x240a43){console['log'](_0x240a43);}}),module[a0_0x349a86(0x172)]=router;