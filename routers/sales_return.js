var a0_0x337b41=a0_0x441a;(function(_0x41d4f1,_0x4b11e5){var _0x1a50ea=a0_0x441a,_0x300c25=_0x41d4f1();while(!![]){try{var _0x1c178c=parseInt(_0x1a50ea(0x1b0))/0x1+parseInt(_0x1a50ea(0x1aa))/0x2+parseInt(_0x1a50ea(0x1c1))/0x3*(parseInt(_0x1a50ea(0x1b4))/0x4)+parseInt(_0x1a50ea(0x20e))/0x5*(-parseInt(_0x1a50ea(0x1d8))/0x6)+parseInt(_0x1a50ea(0x1c9))/0x7+-parseInt(_0x1a50ea(0x1dd))/0x8+parseInt(_0x1a50ea(0x1d2))/0x9*(-parseInt(_0x1a50ea(0x1a7))/0xa);if(_0x1c178c===_0x4b11e5)break;else _0x300c25['push'](_0x300c25['shift']());}catch(_0xe11fca){_0x300c25['push'](_0x300c25['shift']());}}}(a0_0x13aa,0xaf221));function a0_0x13aa(){var _0x316fc0=['/sales_return/view','ToRoom','$product_details.primary_code','subtract','secondary_code','render','invoice','forEach','stocks','name','email','redirect','master','getDate','Enabled','findById','bin','Return\x20Rooms','Sale\x20Return','customers','old_warehouse_data','English','payment\x20successfull','new\x20new_data','Returned\x20Payment\x20For\x20Sale\x20Return','message','success','$product_details.bin','primary_code','5gNNvyq','date','stock','types','suppliers','customer','params','Arabic','1180ZfLMCM','customer_docs','string','231222uZgGuM','Hindi','$product_details.product_name','English\x20(US)','sale_qty','$name','681651LzbCtb','save','sales_return','Chinese','11828fGubzT','Portuguese\x20(BR)','$customer_docs','Arabic\x20(ae)','body','$product_details.rack','slice','old_data','aggregate','Portuguese','flash','find','product_code','1038CyqYYe','get','German','French','log','purchase\x20return\x20successfully','$product_details.storage','$product_details.secondary_code','5471858ZXfrvJ','map','$product_details.product_code','/invoice/:id','return_sale','due_amount','product_stock','sales_return_invoice','../models/all_models','121077abbrNR','Raw\x20Materials','Spanish','data','$product_details._id','paid_amount','850386kmejwp','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','/view/:id','getFullYear','product_name','1244384xKEdHU','../middleware/auth','note','language','type','user','sales_quantity','return_qty','errors','ToWarehouse','bay','post','floorlevel','return_sale_edit','/give_payment/:id','warehouse_name','exports','$product_details.type','status','findOne'];a0_0x13aa=function(){return _0x316fc0;};return a0_0x13aa();}function a0_0x441a(_0x374557,_0x18fd42){var _0x13aa07=a0_0x13aa();return a0_0x441a=function(_0x441a5c,_0x468d8f){_0x441a5c=_0x441a5c-0x1a4;var _0x50175d=_0x13aa07[_0x441a5c];return _0x50175d;},a0_0x441a(_0x374557,_0x18fd42);}const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x337b41(0x1d1)),auth=require(a0_0x337b41(0x1de)),users=require('../public/language/languages.json');router['get']('/view',auth,async(_0x16af21,_0xdf5488)=>{var _0x511a56=a0_0x337b41;try{const {username:_0x45e4b5,email:_0x3cf99d,role:_0x3be684}=_0x16af21[_0x511a56(0x1e2)],_0x55d1de=_0x16af21['user'],_0x57fa5a=await profile[_0x511a56(0x1f0)]({'email':_0x55d1de[_0x511a56(0x1fb)]}),_0xe67555=await master_shop[_0x511a56(0x1bf)]();console[_0x511a56(0x1c5)](_0x511a56(0x1fd),_0xe67555);const _0x3a0917=await sales_return['aggregate']([{'$lookup':{'from':_0x511a56(0x204),'localField':_0x511a56(0x1a4),'foreignField':_0x511a56(0x1fa),'as':_0x511a56(0x1a8)}},{'$unwind':_0x511a56(0x1b6)}]);console[_0x511a56(0x1c5)]('all_data',_0x3a0917);if(_0xe67555[0x0]['language']==_0x511a56(0x1ad)){var _0x4f9f18=users[_0x511a56(0x206)];console[_0x511a56(0x1c5)](_0x4f9f18);}else{if(_0xe67555[0x0][_0x511a56(0x1e0)]=='Hindi')var _0x4f9f18=users[_0x511a56(0x1ab)];else{if(_0xe67555[0x0][_0x511a56(0x1e0)]==_0x511a56(0x1c3))var _0x4f9f18=users['German'];else{if(_0xe67555[0x0][_0x511a56(0x1e0)]==_0x511a56(0x1d4))var _0x4f9f18=users[_0x511a56(0x1d4)];else{if(_0xe67555[0x0][_0x511a56(0x1e0)]==_0x511a56(0x1c4))var _0x4f9f18=users[_0x511a56(0x1c4)];else{if(_0xe67555[0x0][_0x511a56(0x1e0)]==_0x511a56(0x1b5))var _0x4f9f18=users[_0x511a56(0x1bd)];else{if(_0xe67555[0x0][_0x511a56(0x1e0)]==_0x511a56(0x1b3))var _0x4f9f18=users[_0x511a56(0x1b3)];else{if(_0xe67555[0x0]['language']==_0x511a56(0x1b7))var _0x4f9f18=users[_0x511a56(0x1a6)];}}}}}}}_0xdf5488['render'](_0x511a56(0x1b2),{'success':_0x16af21['flash']('success'),'errors':_0x16af21[_0x511a56(0x1be)](_0x511a56(0x1e5)),'role':_0x55d1de,'profile':_0x57fa5a,'master_shop':_0xe67555,'user':_0x3a0917,'language':_0x4f9f18});}catch(_0x5a8dac){console[_0x511a56(0x1c5)](_0x5a8dac);}}),router[a0_0x337b41(0x1c2)](a0_0x337b41(0x1da),auth,async(_0x1aaa28,_0x4da30c)=>{var _0x3ec207=a0_0x337b41;try{const {username:_0x509471,email:_0x95590,role:_0x8e7206}=_0x1aaa28['user'],_0x1f5698=_0x1aaa28[_0x3ec207(0x1e2)],_0x37b893=await profile[_0x3ec207(0x1f0)]({'email':_0x1f5698[_0x3ec207(0x1fb)]}),_0x14d9cc=await master_shop[_0x3ec207(0x1bf)]();console[_0x3ec207(0x1c5)](_0x3ec207(0x1fd),_0x14d9cc);const _0x1fe91f=_0x1aaa28[_0x3ec207(0x1a5)]['id'];console[_0x3ec207(0x1c5)](_0x1fe91f);var _0x53ff9f=[_0x3ec207(0x202)];const _0x39c2d5=await sales_return[_0x3ec207(0x200)](_0x1fe91f),_0x203777=await warehouse[_0x3ec207(0x1bc)]([{'$match':{'name':_0x39c2d5[_0x3ec207(0x1e6)],'room':_0x39c2d5[_0x3ec207(0x1f2)]}},{'$unwind':'$product_details'},{'$group':{'_id':_0x3ec207(0x1d6),'name':{'$first':_0x3ec207(0x1ac)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x3ec207(0x20c)},'type':{'$first':_0x3ec207(0x1ee)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x3ec207(0x1f3)},'secondary_code':{'$first':_0x3ec207(0x1c8)},'product_code':{'$first':_0x3ec207(0x1cb)},'storage':{'$first':_0x3ec207(0x1c7)},'rack':{'$first':_0x3ec207(0x1b9)}}}]);console[_0x3ec207(0x1c5)](_0x203777);const _0xdffdcd=await warehouse[_0x3ec207(0x1bc)]([{'$match':{'status':_0x3ec207(0x1ff),'name':'Return\x20Goods','warehouse_category':_0x3ec207(0x1d3)}},{'$group':{'_id':_0x3ec207(0x1af),'name':{'$first':_0x3ec207(0x1af)}}},{'$sort':{'name':0x1}}]),_0x397b08=await product['find']({});if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1ad)){var _0x46749c=users[_0x3ec207(0x206)];console[_0x3ec207(0x1c5)](_0x46749c);}else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1ab))var _0x46749c=users[_0x3ec207(0x1ab)];else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1c3))var _0x46749c=users[_0x3ec207(0x1c3)];else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]=='Spanish')var _0x46749c=users['Spanish'];else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1c4))var _0x46749c=users[_0x3ec207(0x1c4)];else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1b5))var _0x46749c=users[_0x3ec207(0x1bd)];else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1b3))var _0x46749c=users[_0x3ec207(0x1b3)];else{if(_0x14d9cc[0x0][_0x3ec207(0x1e0)]==_0x3ec207(0x1b7))var _0x46749c=users['Arabic'];}}}}}}}_0x4da30c[_0x3ec207(0x1f6)](_0x3ec207(0x1ea),{'success':_0x1aaa28['flash'](_0x3ec207(0x20b)),'errors':_0x1aaa28['flash'](_0x3ec207(0x1e5)),'role':_0x1f5698,'profile':_0x37b893,'master_shop':_0x14d9cc,'user':_0x39c2d5,'stock':_0x203777,'unit':_0x397b08,'language':_0x46749c,'warehouses':_0xdffdcd,'rooms':_0x53ff9f});}catch(_0x415f27){console[_0x3ec207(0x1c5)](_0x415f27);}}),router[a0_0x337b41(0x1e8)](a0_0x337b41(0x1da),auth,async(_0x1b42b4,_0x183d28)=>{var _0x2cbc33=a0_0x337b41;try{const _0x12faf3=_0x1b42b4[_0x2cbc33(0x1a5)]['id'];console[_0x2cbc33(0x1c5)](_0x12faf3);const _0x292322=await sales_return[_0x2cbc33(0x1f0)]({'invoice':_0x1b42b4[_0x2cbc33(0x1b8)]['invoice']});console[_0x2cbc33(0x1c5)](_0x2cbc33(0x1bb),_0x292322);const _0x2abce6=await warehouse[_0x2cbc33(0x1f0)]({'name':_0x292322[_0x2cbc33(0x1e6)],'room':_0x292322[_0x2cbc33(0x1f2)]});console[_0x2cbc33(0x1c5)](_0x2cbc33(0x205),_0x2abce6);const {invoice:_0x13ee44,customer:_0x2c8275,date:_0x374116,warehouse_name:_0x1039cf,product_name:_0x10dda6,primary_code:_0xbd90e3,secondary_code:_0x35f037,product_code:_0xf96898,sales_quantity:_0x521c6b,stocks:_0x4a981d,return_qty:_0x4c9574,note:_0x27fe8,to_warehouse_name:_0x148a6f,to_Room_name:_0xa68691}=_0x1b42b4['body'];console[_0x2cbc33(0x1c5)](_0x1b42b4[_0x2cbc33(0x1b8)]);if(typeof _0x10dda6==_0x2cbc33(0x1a9))var _0x1b08a6=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1dc)]],_0x4de843=[_0x1b42b4[_0x2cbc33(0x1b8)]['primary_code']],_0x997ee4=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1f5)]],_0x36f3cc=[_0x1b42b4['body'][_0x2cbc33(0x1c0)]],_0x2ed7ad=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1e3)]],_0x3965f8=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1f9)]],_0x51633a=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1e4)]],_0xf34f75=[_0x1b42b4['body'][_0x2cbc33(0x1e7)]],_0x5d3bc9=[_0x1b42b4['body']['bin']],_0x5e0b2b=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x211)]],_0x21525e=[_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1e9)]];else var _0x1b08a6=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1dc)]],_0x4de843=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x20d)]],_0x997ee4=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1f5)]],_0x36f3cc=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1c0)]],_0x2ed7ad=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1e3)]],_0x3965f8=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1f9)]],_0x51633a=[..._0x1b42b4[_0x2cbc33(0x1b8)]['return_qty']],_0xf34f75=[..._0x1b42b4['body'][_0x2cbc33(0x1e7)]],_0x5d3bc9=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x201)]],_0x5e0b2b=[..._0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x211)]],_0x21525e=[..._0x1b42b4[_0x2cbc33(0x1b8)]['floorlevel']];const _0x19b25c=_0x1b08a6['map'](_0x1ff653=>{return _0x1ff653={'product_name':_0x1ff653};});_0x4de843['forEach']((_0x5ce0e7,_0x23bc22)=>{var _0x31a36=_0x2cbc33;_0x19b25c[_0x23bc22][_0x31a36(0x20d)]=_0x5ce0e7;}),_0x997ee4['forEach']((_0x59f584,_0x442624)=>{var _0x3a2947=_0x2cbc33;_0x19b25c[_0x442624][_0x3a2947(0x1f5)]=_0x59f584;}),_0x36f3cc[_0x2cbc33(0x1f8)]((_0x25e656,_0x202efc)=>{_0x19b25c[_0x202efc]['product_code']=_0x25e656;}),_0x2ed7ad[_0x2cbc33(0x1f8)]((_0x5e003b,_0x135e1c)=>{_0x19b25c[_0x135e1c]['sale_qty']=_0x5e003b;}),_0x3965f8['forEach']((_0x537558,_0x30e09c)=>{var _0xcb2db8=_0x2cbc33;_0x19b25c[_0x30e09c][_0xcb2db8(0x210)]=_0x537558;}),_0x51633a[_0x2cbc33(0x1f8)]((_0x46373d,_0x40b740)=>{_0x19b25c[_0x40b740]['return_qty']=_0x46373d;}),_0xf34f75[_0x2cbc33(0x1f8)]((_0x1d0f0e,_0x2f0131)=>{_0x19b25c[_0x2f0131]['bay']=_0x1d0f0e;}),_0x5d3bc9[_0x2cbc33(0x1f8)]((_0x5cb982,_0x11c2a4)=>{var _0x488846=_0x2cbc33;_0x19b25c[_0x11c2a4][_0x488846(0x201)]=_0x5cb982;}),_0x5e0b2b[_0x2cbc33(0x1f8)]((_0x293c51,_0x768ea7)=>{_0x19b25c[_0x768ea7]['type']=_0x293c51;}),_0x21525e['forEach']((_0x465280,_0x169a2d)=>{var _0x244a2b=_0x2cbc33;_0x19b25c[_0x169a2d][_0x244a2b(0x1e9)]=_0x465280;});var _0x29737d=0x0;_0x19b25c[_0x2cbc33(0x1f8)](_0x4b8d36=>{var _0x67e648=_0x2cbc33;console['log']('foreach\x20newproduct',_0x4b8d36),(parseInt(_0x4b8d36[_0x67e648(0x1ae)])<parseInt(_0x4b8d36['return_qty'])||parseInt(_0x4b8d36['stock'])<parseInt(_0x4b8d36['return_qty'])&&parseInt(_0x4b8d36[_0x67e648(0x1ae)])>parseInt(_0x4b8d36[_0x67e648(0x1e4)])||parseInt(_0x4b8d36[_0x67e648(0x1e4)])==0x0)&&_0x29737d++;});if(_0x29737d!=0x0)return _0x1b42b4[_0x2cbc33(0x1be)](_0x2cbc33(0x1e5),_0x2cbc33(0x1d9)),_0x183d28[_0x2cbc33(0x1fc)]('back');_0x292322['return_sale'][_0x2cbc33(0x1f8)](_0x302f70=>{var _0x3c40db=_0x2cbc33;const _0xdc32cd=_0x2abce6['product_details'][_0x3c40db(0x1ca)](_0x596014=>{var _0x5a24cb=_0x3c40db;_0x596014['product_name']==_0x302f70['product_name']&&_0x596014[_0x5a24cb(0x1e9)]==_0x302f70['floorlevel']&&_0x596014['type']==_0x302f70[_0x5a24cb(0x1e1)]&&_0x596014['bin']==_0x302f70[_0x5a24cb(0x201)]&&_0x596014[_0x5a24cb(0x1e7)]==_0x302f70['bay']&&(_0x596014[_0x5a24cb(0x1cf)]=parseInt(_0x596014[_0x5a24cb(0x1cf)])+parseInt(_0x302f70[_0x5a24cb(0x1e4)]));});}),console[_0x2cbc33(0x1c5)]('old_warehouse_data',_0x2abce6),await _0x2abce6[_0x2cbc33(0x1b1)](),_0x292322['invoice']=_0x13ee44,_0x292322['customer']=_0x2c8275,_0x292322[_0x2cbc33(0x20f)]=_0x374116,_0x292322[_0x2cbc33(0x1ec)]=_0x1039cf,_0x292322[_0x2cbc33(0x1cd)]=_0x19b25c,_0x292322[_0x2cbc33(0x1df)]=_0x27fe8,_0x292322['ToWarehouse']=_0x148a6f,_0x292322[_0x2cbc33(0x1f2)]=_0xa68691;const _0x398db6=await _0x292322[_0x2cbc33(0x1b1)]();console[_0x2cbc33(0x1c5)](_0x2cbc33(0x208),_0x398db6);const _0x3586c6=await c_payment_data[_0x2cbc33(0x1f0)]({'invoice':_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x1f7)],'reason':_0x2cbc33(0x203)});_0x3586c6[_0x2cbc33(0x212)]=_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x212)],_0x3586c6[_0x2cbc33(0x20f)]=_0x1b42b4[_0x2cbc33(0x1b8)][_0x2cbc33(0x20f)],await _0x3586c6[_0x2cbc33(0x1b1)](),_0x1b42b4[_0x2cbc33(0x1be)](_0x2cbc33(0x20b),_0x2cbc33(0x1c6)),_0x183d28['redirect'](_0x2cbc33(0x1f1));}catch(_0x4d139c){console[_0x2cbc33(0x1c5)](_0x4d139c),_0x183d28[_0x2cbc33(0x1ef)](0xc8)['json']({'message':_0x4d139c[_0x2cbc33(0x20a)]});}}),router[a0_0x337b41(0x1e8)](a0_0x337b41(0x1eb),auth,async(_0x3e31ee,_0x3ae7f3)=>{var _0x7b6642=a0_0x337b41;try{const _0x493843=_0x3e31ee['params']['id'],{invoice:_0x48cf4a,customer:_0xc60f74,payable_to_customer:_0x4fa6b1,paid_amount:_0x6e4e3c}=_0x3e31ee[_0x7b6642(0x1b8)],_0x401cea=await sales_return[_0x7b6642(0x200)](_0x493843);console[_0x7b6642(0x1c5)](_0x7b6642(0x1d5),_0x401cea),console['log'](_0x4fa6b1),console['log'](_0x6e4e3c);var _0x3abdbf=_0x4fa6b1-_0x6e4e3c;console[_0x7b6642(0x1c5)](_0x7b6642(0x1f4),_0x3abdbf),_0x401cea[_0x7b6642(0x1d7)]=parseFloat(_0x6e4e3c)+parseFloat(_0x401cea[_0x7b6642(0x1d7)]),_0x401cea[_0x7b6642(0x1ce)]=_0x3abdbf,console['log'](_0x401cea);const _0x22eb9b=await _0x401cea[_0x7b6642(0x1b1)]();console[_0x7b6642(0x1c5)](0x1b207);const _0x578f4c=await c_payment_data[_0x7b6642(0x1f0)]({'invoice':_0x3e31ee[_0x7b6642(0x1b8)][_0x7b6642(0x1f7)],'reason':_0x7b6642(0x203)});console[_0x7b6642(0x1c5)]('c_payment',_0x578f4c),_0x578f4c['amount']=_0x3abdbf,await _0x578f4c[_0x7b6642(0x1b1)]();let _0x235191=new Date(),_0x4b471d=('0'+_0x235191[_0x7b6642(0x1fe)]())[_0x7b6642(0x1ba)](-0x2),_0x2cff6b=('0'+(_0x235191['getMonth']()+0x1))[_0x7b6642(0x1ba)](-0x2),_0x1011d2=_0x235191[_0x7b6642(0x1db)](),_0x969529=_0x1011d2+'-'+_0x2cff6b+'-'+_0x4b471d;const _0x671147=new customer_payment({'invoice':_0x48cf4a,'date':_0x1011d2+'-'+_0x2cff6b+'-'+_0x4b471d,'customer':_0xc60f74,'reason':_0x7b6642(0x209),'amount':_0x6e4e3c}),_0x374795=await _0x671147['save']();_0x3e31ee[_0x7b6642(0x1be)](_0x7b6642(0x20b),_0x7b6642(0x207)),_0x3ae7f3[_0x7b6642(0x1fc)](_0x7b6642(0x1f1));}catch(_0x4eaaa4){console['log'](_0x4eaaa4);}}),router[a0_0x337b41(0x1c2)](a0_0x337b41(0x1cc),auth,async(_0x56f0e8,_0x17e799)=>{var _0xf344cf=a0_0x337b41;try{const {username:_0x57cff1,email:_0x45d5fc,role:_0xbd8fdb}=_0x56f0e8[_0xf344cf(0x1e2)],_0x566159=_0x56f0e8[_0xf344cf(0x1e2)],_0x3eb83f=await profile['findOne']({'email':_0x566159[_0xf344cf(0x1fb)]}),_0xa8c6ac=await master_shop[_0xf344cf(0x1bf)]();console['log'](_0xf344cf(0x1fd),_0xa8c6ac);const _0x4f19b3=_0x56f0e8['params']['id'],_0x21492e=await sales_return[_0xf344cf(0x200)](_0x4f19b3);console[_0xf344cf(0x1c5)](_0x21492e);const _0x1b00bc=await customer[_0xf344cf(0x1f0)]({'name':_0x21492e['customer']});console[_0xf344cf(0x1c5)](_0x1b00bc);if(_0xa8c6ac[0x0][_0xf344cf(0x1e0)]==_0xf344cf(0x1ad)){var _0x57c541=users[_0xf344cf(0x206)];console['log'](_0x57c541);}else{if(_0xa8c6ac[0x0][_0xf344cf(0x1e0)]==_0xf344cf(0x1ab))var _0x57c541=users['Hindi'];else{if(_0xa8c6ac[0x0][_0xf344cf(0x1e0)]==_0xf344cf(0x1c3))var _0x57c541=users['German'];else{if(_0xa8c6ac[0x0][_0xf344cf(0x1e0)]==_0xf344cf(0x1d4))var _0x57c541=users[_0xf344cf(0x1d4)];else{if(_0xa8c6ac[0x0]['language']=='French')var _0x57c541=users[_0xf344cf(0x1c4)];else{if(_0xa8c6ac[0x0][_0xf344cf(0x1e0)]==_0xf344cf(0x1b5))var _0x57c541=users[_0xf344cf(0x1bd)];else{if(_0xa8c6ac[0x0][_0xf344cf(0x1e0)]==_0xf344cf(0x1b3))var _0x57c541=users[_0xf344cf(0x1b3)];else{if(_0xa8c6ac[0x0]['language']==_0xf344cf(0x1b7))var _0x57c541=users['Arabic'];}}}}}}}_0x17e799[_0xf344cf(0x1f6)](_0xf344cf(0x1d0),{'success':_0x56f0e8[_0xf344cf(0x1be)]('success'),'errors':_0x56f0e8[_0xf344cf(0x1be)](_0xf344cf(0x1e5)),'role':_0x566159,'profile':_0x3eb83f,'master_shop':_0xa8c6ac,'customers':_0x1b00bc,'sales':_0x21492e,'language':_0x57c541});}catch(_0x18bd70){console[_0xf344cf(0x1c5)](_0x18bd70);}}),module[a0_0x337b41(0x1ed)]=router;