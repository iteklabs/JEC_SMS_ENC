var a0_0x48509f=a0_0x59d2;(function(_0x48ff71,_0x4959d4){var _0x507326=a0_0x59d2,_0x583e7f=_0x48ff71();while(!![]){try{var _0xc00083=-parseInt(_0x507326(0xca))/0x1*(parseInt(_0x507326(0xb7))/0x2)+-parseInt(_0x507326(0xc7))/0x3*(-parseInt(_0x507326(0x112))/0x4)+-parseInt(_0x507326(0x120))/0x5+parseInt(_0x507326(0x11e))/0x6*(-parseInt(_0x507326(0xee))/0x7)+-parseInt(_0x507326(0xfd))/0x8+parseInt(_0x507326(0x108))/0x9+-parseInt(_0x507326(0xe6))/0xa*(-parseInt(_0x507326(0xf8))/0xb);if(_0xc00083===_0x4959d4)break;else _0x583e7f['push'](_0x583e7f['shift']());}catch(_0x205146){_0x583e7f['push'](_0x583e7f['shift']());}}}(a0_0x56de,0xbccdf));function a0_0x56de(){var _0x3e4b31=['findOne','1269724qEmObD','$product_details.floorlevel','getDate','stock','Arabic','render','success','/invoice/:id','$product_details.secondary_code','date','getMonth','log','customer_docs','/view','findById','params','33663uHwzxR','Hindi','bay','1VwEfcj','sale_qty','return_sale_edit','user','language','primary_code','ToRoom','$product_details','English\x20(US)','redirect','payment\x20successfull','body','customers','$product_details.type','$product_details.primary_code','Portuguese\x20(BR)','$product_details.product_stock','back','ToWarehouse','Return\x20Goods','forEach','data','customer','master','../public/language/languages.json','$name','paid_amount','stocks','138630pCtOsZ','$product_details.product_code','flash','$product_details._id','Returned\x20Payment\x20For\x20Sale\x20Return','Arabic\x20(ae)','types','German','5772697Vcimsq','purchase\x20return\x20successfully','Raw\x20Materials','suppliers','French','floorlevel','amount','all_data','Chinese','exports','1001RWuhiN','post','Spanish','product_name','due_amount','75576PyOZio','new\x20new_data','map','$product_details.product_name','Sale\x20Return','secondary_code','errors','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','invoice','return_sale','get','12297456AgoJAT','sales_quantity','English','../middleware/auth','$product_details.bin','note','return_qty','getFullYear','old_data','slice','68dgTVTa','warehouse_name','Router','aggregate','find','product_details','email','type','bin','status','/view/:id','save','6eMOUAj','sales_return_invoice','2881755hxIEaX','../models/all_models','Portuguese','$product_details.storage','product_code','old_warehouse_data','string','product_stock'];a0_0x56de=function(){return _0x3e4b31;};return a0_0x56de();}const express=require('express'),app=express(),router=express[a0_0x48509f(0x114)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x48509f(0xaf)),auth=require(a0_0x48509f(0x10b)),users=require(a0_0x48509f(0xe2));function a0_0x59d2(_0x3c1be6,_0x1ebe28){var _0x56de5f=a0_0x56de();return a0_0x59d2=function(_0x59d2b6,_0xfa1a6f){_0x59d2b6=_0x59d2b6-0xaf;var _0x1624f3=_0x56de5f[_0x59d2b6];return _0x1624f3;},a0_0x59d2(_0x3c1be6,_0x1ebe28);}router[a0_0x48509f(0x107)](a0_0x48509f(0xc4),auth,async(_0x4f4b57,_0x4920b8)=>{var _0x25b72f=a0_0x48509f;try{const {username:_0xb110f1,email:_0x3cb53f,role:_0x10d26b}=_0x4f4b57[_0x25b72f(0xcd)],_0x586e06=_0x4f4b57[_0x25b72f(0xcd)],_0x5824ac=await profile[_0x25b72f(0xb6)]({'email':_0x586e06['email']}),_0x9c39ef=await master_shop[_0x25b72f(0x116)]();console[_0x25b72f(0xc2)](_0x25b72f(0xe1),_0x9c39ef);const _0x18cf98=await sales_return['aggregate']([{'$lookup':{'from':_0x25b72f(0xd6),'localField':'customer','foreignField':'name','as':_0x25b72f(0xc3)}},{'$unwind':'$customer_docs'}]);console[_0x25b72f(0xc2)](_0x25b72f(0xf5),_0x18cf98);if(_0x9c39ef[0x0][_0x25b72f(0xce)]=='English\x20(US)'){var _0x2b570c=users[_0x25b72f(0x10a)];console[_0x25b72f(0xc2)](_0x2b570c);}else{if(_0x9c39ef[0x0]['language']==_0x25b72f(0xc8))var _0x2b570c=users['Hindi'];else{if(_0x9c39ef[0x0][_0x25b72f(0xce)]=='German')var _0x2b570c=users[_0x25b72f(0xed)];else{if(_0x9c39ef[0x0][_0x25b72f(0xce)]==_0x25b72f(0xfa))var _0x2b570c=users[_0x25b72f(0xfa)];else{if(_0x9c39ef[0x0][_0x25b72f(0xce)]==_0x25b72f(0xf2))var _0x2b570c=users[_0x25b72f(0xf2)];else{if(_0x9c39ef[0x0][_0x25b72f(0xce)]==_0x25b72f(0xd9))var _0x2b570c=users[_0x25b72f(0xb0)];else{if(_0x9c39ef[0x0][_0x25b72f(0xce)]=='Chinese')var _0x2b570c=users[_0x25b72f(0xf6)];else{if(_0x9c39ef[0x0][_0x25b72f(0xce)]=='Arabic\x20(ae)')var _0x2b570c=users['Arabic'];}}}}}}}_0x4920b8[_0x25b72f(0xbc)]('sales_return',{'success':_0x4f4b57[_0x25b72f(0xe8)](_0x25b72f(0xbd)),'errors':_0x4f4b57[_0x25b72f(0xe8)](_0x25b72f(0x103)),'role':_0x586e06,'profile':_0x5824ac,'master_shop':_0x9c39ef,'user':_0x18cf98,'language':_0x2b570c});}catch(_0x24ee12){console['log'](_0x24ee12);}}),router[a0_0x48509f(0x107)](a0_0x48509f(0x11c),auth,async(_0x29599a,_0x1accde)=>{var _0x221960=a0_0x48509f;try{const {username:_0x1c377f,email:_0x4ff117,role:_0x427f5c}=_0x29599a[_0x221960(0xcd)],_0x24a601=_0x29599a[_0x221960(0xcd)],_0x51f447=await profile[_0x221960(0xb6)]({'email':_0x24a601[_0x221960(0x118)]}),_0x3a8baa=await master_shop[_0x221960(0x116)]();console[_0x221960(0xc2)](_0x221960(0xe1),_0x3a8baa);const _0x4fd467=_0x29599a[_0x221960(0xc6)]['id'];console['log'](_0x4fd467);var _0x4cfc74=['Return\x20Rooms'];const _0x69af62=await sales_return[_0x221960(0xc5)](_0x4fd467),_0x3b1d33=await warehouse[_0x221960(0x115)]([{'$match':{'name':_0x69af62['ToWarehouse'],'room':_0x69af62['ToRoom']}},{'$unwind':_0x221960(0xd1)},{'$group':{'_id':_0x221960(0xe9),'name':{'$first':_0x221960(0x100)},'product_stock':{'$first':_0x221960(0xda)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x221960(0x10c)},'type':{'$first':_0x221960(0xd7)},'floorlevel':{'$first':_0x221960(0xb8)},'primary_code':{'$first':_0x221960(0xd8)},'secondary_code':{'$first':_0x221960(0xbf)},'product_code':{'$first':_0x221960(0xe7)},'storage':{'$first':_0x221960(0xb1)},'rack':{'$first':'$product_details.rack'}}}]);console[_0x221960(0xc2)](_0x3b1d33);const _0x53380d=await warehouse['aggregate']([{'$match':{'status':'Enabled','name':_0x221960(0xdd),'warehouse_category':_0x221960(0xf0)}},{'$group':{'_id':'$name','name':{'$first':_0x221960(0xe3)}}},{'$sort':{'name':0x1}}]),_0x70f44b=await product['find']({});if(_0x3a8baa[0x0]['language']=='English\x20(US)'){var _0x26eb00=users[_0x221960(0x10a)];console[_0x221960(0xc2)](_0x26eb00);}else{if(_0x3a8baa[0x0][_0x221960(0xce)]==_0x221960(0xc8))var _0x26eb00=users[_0x221960(0xc8)];else{if(_0x3a8baa[0x0]['language']==_0x221960(0xed))var _0x26eb00=users[_0x221960(0xed)];else{if(_0x3a8baa[0x0][_0x221960(0xce)]=='Spanish')var _0x26eb00=users['Spanish'];else{if(_0x3a8baa[0x0][_0x221960(0xce)]=='French')var _0x26eb00=users[_0x221960(0xf2)];else{if(_0x3a8baa[0x0][_0x221960(0xce)]==_0x221960(0xd9))var _0x26eb00=users['Portuguese'];else{if(_0x3a8baa[0x0][_0x221960(0xce)]==_0x221960(0xf6))var _0x26eb00=users[_0x221960(0xf6)];else{if(_0x3a8baa[0x0]['language']==_0x221960(0xeb))var _0x26eb00=users[_0x221960(0xbb)];}}}}}}}_0x1accde[_0x221960(0xbc)](_0x221960(0xcc),{'success':_0x29599a[_0x221960(0xe8)](_0x221960(0xbd)),'errors':_0x29599a[_0x221960(0xe8)](_0x221960(0x103)),'role':_0x24a601,'profile':_0x51f447,'master_shop':_0x3a8baa,'user':_0x69af62,'stock':_0x3b1d33,'unit':_0x70f44b,'language':_0x26eb00,'warehouses':_0x53380d,'rooms':_0x4cfc74});}catch(_0x20294b){console['log'](_0x20294b);}}),router[a0_0x48509f(0xf9)]('/view/:id',auth,async(_0x21576a,_0x453c82)=>{var _0x343281=a0_0x48509f;try{const _0x57b03b=_0x21576a['params']['id'];console['log'](_0x57b03b);const _0x539b12=await sales_return[_0x343281(0xb6)]({'invoice':_0x21576a[_0x343281(0xd5)][_0x343281(0x105)]});console[_0x343281(0xc2)](_0x343281(0x110),_0x539b12);const _0x4355b9=await warehouse[_0x343281(0xb6)]({'name':_0x539b12[_0x343281(0xdc)],'room':_0x539b12[_0x343281(0xd0)]});console[_0x343281(0xc2)](_0x343281(0xb3),_0x4355b9);const {invoice:_0x463284,customer:_0x491464,date:_0x386891,warehouse_name:_0x4d0c86,product_name:_0x38ce7d,primary_code:_0x4bb364,secondary_code:_0x4ef410,product_code:_0xf82996,sales_quantity:_0x50adad,stocks:_0x319e97,return_qty:_0xd4a377,note:_0x50ffe1,to_warehouse_name:_0x47eee4,to_Room_name:_0x2b772f}=_0x21576a[_0x343281(0xd5)];console[_0x343281(0xc2)](_0x21576a['body']);if(typeof _0x38ce7d==_0x343281(0xb4))var _0x42b8b5=[_0x21576a[_0x343281(0xd5)]['product_name']],_0x4d6f94=[_0x21576a[_0x343281(0xd5)][_0x343281(0xcf)]],_0x2b2996=[_0x21576a[_0x343281(0xd5)][_0x343281(0x102)]],_0x438609=[_0x21576a[_0x343281(0xd5)][_0x343281(0xb2)]],_0x2a5830=[_0x21576a['body']['sales_quantity']],_0x33edbb=[_0x21576a['body'][_0x343281(0xe5)]],_0x306db9=[_0x21576a['body']['return_qty']],_0x5b1a05=[_0x21576a[_0x343281(0xd5)][_0x343281(0xc9)]],_0x24daad=[_0x21576a[_0x343281(0xd5)][_0x343281(0x11a)]],_0x5da84d=[_0x21576a[_0x343281(0xd5)][_0x343281(0xec)]],_0x103da9=[_0x21576a['body'][_0x343281(0xf3)]];else var _0x42b8b5=[..._0x21576a[_0x343281(0xd5)]['product_name']],_0x4d6f94=[..._0x21576a[_0x343281(0xd5)][_0x343281(0xcf)]],_0x2b2996=[..._0x21576a[_0x343281(0xd5)][_0x343281(0x102)]],_0x438609=[..._0x21576a[_0x343281(0xd5)][_0x343281(0xb2)]],_0x2a5830=[..._0x21576a['body'][_0x343281(0x109)]],_0x33edbb=[..._0x21576a['body'][_0x343281(0xe5)]],_0x306db9=[..._0x21576a[_0x343281(0xd5)][_0x343281(0x10e)]],_0x5b1a05=[..._0x21576a[_0x343281(0xd5)][_0x343281(0xc9)]],_0x24daad=[..._0x21576a[_0x343281(0xd5)][_0x343281(0x11a)]],_0x5da84d=[..._0x21576a['body'][_0x343281(0xec)]],_0x103da9=[..._0x21576a[_0x343281(0xd5)][_0x343281(0xf3)]];const _0x291d6f=_0x42b8b5[_0x343281(0xff)](_0x6b6ff9=>{return _0x6b6ff9={'product_name':_0x6b6ff9};});_0x4d6f94[_0x343281(0xde)]((_0x51ea6e,_0x22ccdf)=>{_0x291d6f[_0x22ccdf]['primary_code']=_0x51ea6e;}),_0x2b2996[_0x343281(0xde)]((_0x2f5c50,_0x3dbb8b)=>{_0x291d6f[_0x3dbb8b]['secondary_code']=_0x2f5c50;}),_0x438609[_0x343281(0xde)]((_0x160f45,_0x243964)=>{var _0x5fab73=_0x343281;_0x291d6f[_0x243964][_0x5fab73(0xb2)]=_0x160f45;}),_0x2a5830[_0x343281(0xde)]((_0x5c0a3f,_0x3bdb71)=>{var _0x5a478c=_0x343281;_0x291d6f[_0x3bdb71][_0x5a478c(0xcb)]=_0x5c0a3f;}),_0x33edbb[_0x343281(0xde)]((_0x38893d,_0x74b69)=>{var _0x231978=_0x343281;_0x291d6f[_0x74b69][_0x231978(0xba)]=_0x38893d;}),_0x306db9[_0x343281(0xde)]((_0x263d0c,_0x23edea)=>{var _0x4549dc=_0x343281;_0x291d6f[_0x23edea][_0x4549dc(0x10e)]=_0x263d0c;}),_0x5b1a05[_0x343281(0xde)]((_0x1f3c3a,_0x13893f)=>{var _0x527853=_0x343281;_0x291d6f[_0x13893f][_0x527853(0xc9)]=_0x1f3c3a;}),_0x24daad[_0x343281(0xde)]((_0x2e83dc,_0x15eb38)=>{var _0x12d9da=_0x343281;_0x291d6f[_0x15eb38][_0x12d9da(0x11a)]=_0x2e83dc;}),_0x5da84d[_0x343281(0xde)]((_0x403060,_0x5ea7a0)=>{_0x291d6f[_0x5ea7a0]['type']=_0x403060;}),_0x103da9[_0x343281(0xde)]((_0x1b9298,_0x4c98b5)=>{var _0x336311=_0x343281;_0x291d6f[_0x4c98b5][_0x336311(0xf3)]=_0x1b9298;});var _0x4427de=0x0;_0x291d6f[_0x343281(0xde)](_0x5d5336=>{var _0x348d8d=_0x343281;console[_0x348d8d(0xc2)]('foreach\x20newproduct',_0x5d5336),(parseInt(_0x5d5336['sale_qty'])<parseInt(_0x5d5336[_0x348d8d(0x10e)])||parseInt(_0x5d5336[_0x348d8d(0xba)])<parseInt(_0x5d5336[_0x348d8d(0x10e)])&&parseInt(_0x5d5336[_0x348d8d(0xcb)])>parseInt(_0x5d5336['return_qty'])||parseInt(_0x5d5336['return_qty'])==0x0)&&_0x4427de++;});if(_0x4427de!=0x0)return _0x21576a[_0x343281(0xe8)](_0x343281(0x103),_0x343281(0x104)),_0x453c82['redirect'](_0x343281(0xdb));_0x539b12[_0x343281(0x106)][_0x343281(0xde)](_0x349ccf=>{var _0x100f8c=_0x343281;const _0xe46e1e=_0x4355b9[_0x100f8c(0x117)][_0x100f8c(0xff)](_0x17a727=>{var _0x148815=_0x100f8c;_0x17a727[_0x148815(0xfb)]==_0x349ccf[_0x148815(0xfb)]&&_0x17a727['floorlevel']==_0x349ccf[_0x148815(0xf3)]&&_0x17a727[_0x148815(0x119)]==_0x349ccf[_0x148815(0x119)]&&_0x17a727['bin']==_0x349ccf[_0x148815(0x11a)]&&_0x17a727[_0x148815(0xc9)]==_0x349ccf['bay']&&(_0x17a727[_0x148815(0xb5)]=parseInt(_0x17a727[_0x148815(0xb5)])+parseInt(_0x349ccf[_0x148815(0x10e)]));});}),console[_0x343281(0xc2)](_0x343281(0xb3),_0x4355b9),await _0x4355b9[_0x343281(0x11d)](),_0x539b12[_0x343281(0x105)]=_0x463284,_0x539b12[_0x343281(0xe0)]=_0x491464,_0x539b12[_0x343281(0xc0)]=_0x386891,_0x539b12[_0x343281(0x113)]=_0x4d0c86,_0x539b12[_0x343281(0x106)]=_0x291d6f,_0x539b12[_0x343281(0x10d)]=_0x50ffe1,_0x539b12['ToWarehouse']=_0x47eee4,_0x539b12['ToRoom']=_0x2b772f;const _0x219586=await _0x539b12[_0x343281(0x11d)]();console['log'](_0x343281(0xfe),_0x219586);const _0x17a5b5=await c_payment_data[_0x343281(0xb6)]({'invoice':_0x21576a[_0x343281(0xd5)]['invoice'],'reason':'Sale\x20Return'});_0x17a5b5[_0x343281(0xf1)]=_0x21576a['body']['suppliers'],_0x17a5b5[_0x343281(0xc0)]=_0x21576a[_0x343281(0xd5)][_0x343281(0xc0)],await _0x17a5b5[_0x343281(0x11d)](),_0x21576a[_0x343281(0xe8)](_0x343281(0xbd),_0x343281(0xef)),_0x453c82['redirect']('/sales_return/view');}catch(_0x1fd9c7){console[_0x343281(0xc2)](_0x1fd9c7),_0x453c82[_0x343281(0x11b)](0xc8)['json']({'message':_0x1fd9c7['message']});}}),router[a0_0x48509f(0xf9)]('/give_payment/:id',auth,async(_0x562a47,_0xd7e282)=>{var _0x1a4ee0=a0_0x48509f;try{const _0x261fb3=_0x562a47[_0x1a4ee0(0xc6)]['id'],{invoice:_0x5b9ca4,customer:_0x19a096,payable_to_customer:_0x181907,paid_amount:_0x47e2c3}=_0x562a47[_0x1a4ee0(0xd5)],_0x5c94ef=await sales_return[_0x1a4ee0(0xc5)](_0x261fb3);console[_0x1a4ee0(0xc2)](_0x1a4ee0(0xdf),_0x5c94ef),console[_0x1a4ee0(0xc2)](_0x181907),console[_0x1a4ee0(0xc2)](_0x47e2c3);var _0x4fdad0=_0x181907-_0x47e2c3;console[_0x1a4ee0(0xc2)]('subtract',_0x4fdad0),_0x5c94ef[_0x1a4ee0(0xe4)]=parseFloat(_0x47e2c3)+parseFloat(_0x5c94ef['paid_amount']),_0x5c94ef[_0x1a4ee0(0xfc)]=_0x4fdad0,console[_0x1a4ee0(0xc2)](_0x5c94ef);const _0x5a23c5=await _0x5c94ef[_0x1a4ee0(0x11d)]();console['log'](0x1b207);const _0x1422bc=await c_payment_data['findOne']({'invoice':_0x562a47[_0x1a4ee0(0xd5)][_0x1a4ee0(0x105)],'reason':_0x1a4ee0(0x101)});console[_0x1a4ee0(0xc2)]('c_payment',_0x1422bc),_0x1422bc[_0x1a4ee0(0xf4)]=_0x4fdad0,await _0x1422bc['save']();let _0x35e3f3=new Date(),_0x369aea=('0'+_0x35e3f3[_0x1a4ee0(0xb9)]())[_0x1a4ee0(0x111)](-0x2),_0xa3f438=('0'+(_0x35e3f3[_0x1a4ee0(0xc1)]()+0x1))[_0x1a4ee0(0x111)](-0x2),_0x450d1e=_0x35e3f3[_0x1a4ee0(0x10f)](),_0x22855f=_0x450d1e+'-'+_0xa3f438+'-'+_0x369aea;const _0x3e3b00=new customer_payment({'invoice':_0x5b9ca4,'date':_0x450d1e+'-'+_0xa3f438+'-'+_0x369aea,'customer':_0x19a096,'reason':_0x1a4ee0(0xea),'amount':_0x47e2c3}),_0x798d70=await _0x3e3b00[_0x1a4ee0(0x11d)]();_0x562a47[_0x1a4ee0(0xe8)](_0x1a4ee0(0xbd),_0x1a4ee0(0xd4)),_0xd7e282[_0x1a4ee0(0xd3)]('/sales_return/view');}catch(_0x11e9d0){console[_0x1a4ee0(0xc2)](_0x11e9d0);}}),router['get'](a0_0x48509f(0xbe),auth,async(_0x1533e8,_0x5c30d9)=>{var _0x275754=a0_0x48509f;try{const {username:_0x47f08f,email:_0xfe6315,role:_0x283f61}=_0x1533e8[_0x275754(0xcd)],_0xe48037=_0x1533e8[_0x275754(0xcd)],_0x5aeadc=await profile[_0x275754(0xb6)]({'email':_0xe48037[_0x275754(0x118)]}),_0x4d8d45=await master_shop['find']();console['log'](_0x275754(0xe1),_0x4d8d45);const _0x29eff6=_0x1533e8[_0x275754(0xc6)]['id'],_0x51e4fe=await sales_return[_0x275754(0xc5)](_0x29eff6);console['log'](_0x51e4fe);const _0x1542cf=await customer[_0x275754(0xb6)]({'name':_0x51e4fe[_0x275754(0xe0)]});console[_0x275754(0xc2)](_0x1542cf);if(_0x4d8d45[0x0]['language']==_0x275754(0xd2)){var _0x175919=users[_0x275754(0x10a)];console[_0x275754(0xc2)](_0x175919);}else{if(_0x4d8d45[0x0]['language']==_0x275754(0xc8))var _0x175919=users[_0x275754(0xc8)];else{if(_0x4d8d45[0x0][_0x275754(0xce)]==_0x275754(0xed))var _0x175919=users[_0x275754(0xed)];else{if(_0x4d8d45[0x0]['language']=='Spanish')var _0x175919=users[_0x275754(0xfa)];else{if(_0x4d8d45[0x0]['language']==_0x275754(0xf2))var _0x175919=users[_0x275754(0xf2)];else{if(_0x4d8d45[0x0][_0x275754(0xce)]==_0x275754(0xd9))var _0x175919=users[_0x275754(0xb0)];else{if(_0x4d8d45[0x0][_0x275754(0xce)]==_0x275754(0xf6))var _0x175919=users[_0x275754(0xf6)];else{if(_0x4d8d45[0x0][_0x275754(0xce)]==_0x275754(0xeb))var _0x175919=users[_0x275754(0xbb)];}}}}}}}_0x5c30d9[_0x275754(0xbc)](_0x275754(0x11f),{'success':_0x1533e8[_0x275754(0xe8)](_0x275754(0xbd)),'errors':_0x1533e8[_0x275754(0xe8)](_0x275754(0x103)),'role':_0xe48037,'profile':_0x5aeadc,'master_shop':_0x4d8d45,'customers':_0x1542cf,'sales':_0x51e4fe,'language':_0x175919});}catch(_0x47d100){console[_0x275754(0xc2)](_0x47d100);}}),module[a0_0x48509f(0xf7)]=router;