function a0_0xa57b(){const _0x2a612e=['quantity','all_sales_sa','diskStorage','3205535bDonNB','multer','French','/add_sales_notes','product_list','../public/language/languages.json','Chinese','14673wMXmke','user','/view_sales/:id','now','true','forEach','view_sales_sa','Router','params','image','$product_list','Sales\x20add\x20successfully','4114068VYkJlL','4EPSrus','German','Hindi','map','findOne','168764aZGooX','add_sales_sa','mongoose','render','aggregate','post','isFG','Spanish','adj_dicount_price','/add_sales','json','totalPrice','find','/sales_sa/view_sales/','language','express','primary_code','Portuguese','valueOf','body','/product_data','Invoice\x20created\x20with\x20incremented\x20start\x20value:','ObjectId','conversion_data','save','secondary_unit','Arabic\x20(ae)','4WWHhae','originalname','invoice_starts','errors','log','totalprice','success','toString','prod_name','xlsx','adj_discount','findById','5797392UkXUfn','padStart','15986550ixwtSF','filename','/getProductData','tmpisFG','price','_id','single','Types','English','Portuguese\x20(BR)','flash','email','prod_cat','9LXOGLq','English\x20(US)','real_qty_unit_val','unit','prod_code','redirect','id_transaction','conversion_unit','2453682dPqsEC','exports','no_per_unit','Arabic','get','/customer_data','id_transaction_from'];a0_0xa57b=function(){return _0x2a612e;};return a0_0xa57b();}const a0_0x2bacc4=a0_0x2f8c;(function(_0x42c577,_0x3fb242){const _0x5c3da8=a0_0x2f8c,_0x2b4065=_0x42c577();while(!![]){try{const _0x228681=-parseInt(_0x5c3da8(0x13c))/0x1*(-parseInt(_0x5c3da8(0x121))/0x2)+-parseInt(_0x5c3da8(0x10f))/0x3+parseInt(_0x5c3da8(0x11c))/0x4*(parseInt(_0x5c3da8(0x169))/0x5)+parseInt(_0x5c3da8(0x11b))/0x6+-parseInt(_0x5c3da8(0x15f))/0x7+parseInt(_0x5c3da8(0x148))/0x8*(parseInt(_0x5c3da8(0x157))/0x9)+-parseInt(_0x5c3da8(0x14a))/0xa;if(_0x228681===_0x3fb242)break;else _0x2b4065['push'](_0x2b4065['shift']());}catch(_0x24a719){_0x2b4065['push'](_0x2b4065['shift']());}}}(a0_0xa57b,0x6a2e3));const express=require(a0_0x2bacc4(0x130)),app=express(),router=express[a0_0x2bacc4(0x116)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa,discount_volume_db}=require('../models/all_models'),auth=require('../middleware/auth'),users=require(a0_0x2bacc4(0x16e)),excelJS=require('exceljs'),xlsx=require(a0_0x2bacc4(0x145)),mongoose=require(a0_0x2bacc4(0x123)),multer=require(a0_0x2bacc4(0x16a)),storage=multer[a0_0x2bacc4(0x168)]({'destination':(_0x550d9a,_0x58b4db,_0x70d6dd)=>{_0x70d6dd(null,'./public/sales_invoice');},'filename':(_0x1b7e31,_0x5b49bd,_0x43919d)=>{const _0x46fa1e=a0_0x2bacc4;_0x43919d(null,Date[_0x46fa1e(0x112)]()+'~'+_0x5b49bd[_0x46fa1e(0x13d)]);}}),upload=multer({'storage':storage});function a0_0x2f8c(_0x5e82ec,_0x48e11e){const _0xa57b51=a0_0xa57b();return a0_0x2f8c=function(_0x2f8c65,_0x3afeb5){_0x2f8c65=_0x2f8c65-0x10e;let _0xb06f46=_0xa57b51[_0x2f8c65];return _0xb06f46;},a0_0x2f8c(_0x5e82ec,_0x48e11e);}router[a0_0x2bacc4(0x163)]('/',auth,async(_0x4ed8a1,_0x5087fa)=>{const _0x2a28fc=a0_0x2bacc4;try{const _0x51bfdc=await master_shop[_0x2a28fc(0x12d)](),_0x400a72=_0x4ed8a1['user'],_0x454585=await profile[_0x2a28fc(0x120)]({'email':_0x400a72[_0x2a28fc(0x155)]}),_0x48c11b=await staff[_0x2a28fc(0x120)]({'email':_0x400a72[_0x2a28fc(0x155)]}),_0x1a5a69=await sales_sa[_0x2a28fc(0x12d)]({'sales_staff_id':_0x48c11b[_0x2a28fc(0x14f)]});if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]==_0x2a28fc(0x158))var _0x42262c=users[_0x2a28fc(0x152)];else{if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]=='Hindi')var _0x42262c=users[_0x2a28fc(0x11e)];else{if(_0x51bfdc[0x0]['language']==_0x2a28fc(0x11d))var _0x42262c=users[_0x2a28fc(0x11d)];else{if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]==_0x2a28fc(0x128))var _0x42262c=users['Spanish'];else{if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]==_0x2a28fc(0x16b))var _0x42262c=users['French'];else{if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]=='Portuguese\x20(BR)')var _0x42262c=users['Portuguese'];else{if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]==_0x2a28fc(0x10e))var _0x42262c=users[_0x2a28fc(0x10e)];else{if(_0x51bfdc[0x0][_0x2a28fc(0x12f)]==_0x2a28fc(0x13b))var _0x42262c=users[_0x2a28fc(0x162)];}}}}}}}_0x5087fa[_0x2a28fc(0x124)](_0x2a28fc(0x167),{'success':_0x4ed8a1[_0x2a28fc(0x154)](_0x2a28fc(0x142)),'errors':_0x4ed8a1[_0x2a28fc(0x154)](_0x2a28fc(0x13f)),'master_shop':_0x51bfdc,'profile':_0x454585,'role':_0x400a72,'language':_0x42262c,'product_list':_0x48c11b[_0x2a28fc(0x16d)],'sales_mine':_0x1a5a69,'staff_arr':_0x48c11b});}catch(_0x313a3c){console[_0x2a28fc(0x140)](_0x313a3c);}}),router['get'](a0_0x2bacc4(0x12a),auth,async(_0x1dea87,_0x128b0d)=>{const _0x3205b4=a0_0x2bacc4;try{const _0x3ee358=await master_shop[_0x3205b4(0x12d)](),_0x19f3a9=_0x1dea87[_0x3205b4(0x110)],_0x3d103c=await profile[_0x3205b4(0x120)]({'email':_0x19f3a9[_0x3205b4(0x155)]}),_0x51abb9=await staff[_0x3205b4(0x120)]({'email':_0x19f3a9['email']}),_0x598c9e=await customer[_0x3205b4(0x12d)]({'agent_id':_0x51abb9['_id']});if(_0x3ee358[0x0][_0x3205b4(0x12f)]=='English\x20(US)')var _0x56ddad=users['English'];else{if(_0x3ee358[0x0][_0x3205b4(0x12f)]=='Hindi')var _0x56ddad=users[_0x3205b4(0x11e)];else{if(_0x3ee358[0x0]['language']==_0x3205b4(0x11d))var _0x56ddad=users[_0x3205b4(0x11d)];else{if(_0x3ee358[0x0][_0x3205b4(0x12f)]=='Spanish')var _0x56ddad=users[_0x3205b4(0x128)];else{if(_0x3ee358[0x0][_0x3205b4(0x12f)]==_0x3205b4(0x16b))var _0x56ddad=users['French'];else{if(_0x3ee358[0x0]['language']=='Portuguese\x20(BR)')var _0x56ddad=users['Portuguese'];else{if(_0x3ee358[0x0][_0x3205b4(0x12f)]=='Chinese')var _0x56ddad=users[_0x3205b4(0x10e)];else{if(_0x3ee358[0x0][_0x3205b4(0x12f)]=='Arabic\x20(ae)')var _0x56ddad=users[_0x3205b4(0x162)];}}}}}}}_0x128b0d[_0x3205b4(0x124)](_0x3205b4(0x122),{'success':_0x1dea87['flash'](_0x3205b4(0x142)),'errors':_0x1dea87[_0x3205b4(0x154)](_0x3205b4(0x13f)),'master_shop':_0x3ee358,'profile':_0x3d103c,'role':_0x19f3a9,'language':_0x56ddad,'customer':_0x598c9e,'staff_arr':_0x51abb9});}catch(_0x1a73d0){console[_0x3205b4(0x140)](_0x1a73d0);}}),router[a0_0x2bacc4(0x163)](a0_0x2bacc4(0x111),auth,async(_0x208b54,_0x4f67d5)=>{const _0x5b0587=a0_0x2bacc4;try{const _0x32b749=await master_shop[_0x5b0587(0x12d)](),_0x3a5108=_0x208b54[_0x5b0587(0x110)],_0x4f032f=await profile[_0x5b0587(0x120)]({'email':_0x3a5108[_0x5b0587(0x155)]}),_0x529ca3=await staff[_0x5b0587(0x120)]({'email':_0x3a5108[_0x5b0587(0x155)]}),_0x48a6ab=await customer[_0x5b0587(0x12d)]({'agent_id':_0x529ca3[_0x5b0587(0x14f)]}),_0x5b008b=_0x208b54[_0x5b0587(0x117)]['id'],_0x18c9ba=await sales_sa[_0x5b0587(0x147)](_0x5b008b);if(_0x32b749[0x0][_0x5b0587(0x12f)]==_0x5b0587(0x158))var _0x19d36c=users['English'];else{if(_0x32b749[0x0][_0x5b0587(0x12f)]==_0x5b0587(0x11e))var _0x19d36c=users[_0x5b0587(0x11e)];else{if(_0x32b749[0x0][_0x5b0587(0x12f)]==_0x5b0587(0x11d))var _0x19d36c=users[_0x5b0587(0x11d)];else{if(_0x32b749[0x0]['language']==_0x5b0587(0x128))var _0x19d36c=users[_0x5b0587(0x128)];else{if(_0x32b749[0x0][_0x5b0587(0x12f)]==_0x5b0587(0x16b))var _0x19d36c=users[_0x5b0587(0x16b)];else{if(_0x32b749[0x0][_0x5b0587(0x12f)]==_0x5b0587(0x153))var _0x19d36c=users[_0x5b0587(0x132)];else{if(_0x32b749[0x0][_0x5b0587(0x12f)]==_0x5b0587(0x10e))var _0x19d36c=users['Chinese'];else{if(_0x32b749[0x0][_0x5b0587(0x12f)]=='Arabic\x20(ae)')var _0x19d36c=users[_0x5b0587(0x162)];}}}}}}}_0x4f67d5[_0x5b0587(0x124)](_0x5b0587(0x115),{'success':_0x208b54['flash'](_0x5b0587(0x142)),'errors':_0x208b54[_0x5b0587(0x154)]('errors'),'master_shop':_0x32b749,'profile':_0x4f032f,'role':_0x3a5108,'language':_0x19d36c,'customer':_0x48a6ab,'sales_sa':_0x18c9ba,'staff_arr':_0x529ca3});}catch(_0x3c3f9e){console[_0x5b0587(0x140)](_0x3c3f9e);}}),router[a0_0x2bacc4(0x126)](a0_0x2bacc4(0x12a),auth,upload[a0_0x2bacc4(0x150)](a0_0x2bacc4(0x118)),async(_0x1f0b45,_0x354ef9)=>{const _0x5a1196=a0_0x2bacc4;try{const {customer:_0x4f34fe,date:_0x34475b,prod_code:_0x540166,note:_0x36a25e,paid_status:_0x4153fe,DSI:_0xad47e9,cash_amount:_0x54a113,amount_data:_0x2df936,bank_data:_0x3964de,check_no:_0x37d760,due_date:_0x25d0a8}=_0x1f0b45[_0x5a1196(0x134)],_0x4af6aa=_0x1f0b45['file'][_0x5a1196(0x14b)];if(typeof _0x540166=='string')var _0x2ee03e=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x15b)]],_0x5c4add=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x144)]],_0x418653=[_0x1f0b45[_0x5a1196(0x134)]['primary_code']],_0x1d1702=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x166)]],_0x8d476f=[_0x1f0b45['body'][_0x5a1196(0x15a)]],_0x4ad439=[_0x1f0b45['body'][_0x5a1196(0x14e)]],_0x4f9982=[_0x1f0b45['body']['totalPrice']],_0x2167d6=[_0x1f0b45['body'][_0x5a1196(0x15d)]],_0x1182db=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x129)]],_0x590e6e=[_0x1f0b45['body']['tmpisFG']],_0x3dbbef=[_0x1f0b45['body'][_0x5a1196(0x161)]],_0x152b37=[_0x1f0b45['body']['getPrimUnitNo']],_0x4dd5fb=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x156)]],_0x48331c=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x13a)]],_0x5d601b=[_0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x15e)]];else var _0x2ee03e=[..._0x1f0b45[_0x5a1196(0x134)]['prod_code']],_0x5c4add=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x144)]],_0x418653=[..._0x1f0b45['body']['primary_code']],_0x1d1702=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x166)]],_0x8d476f=[..._0x1f0b45[_0x5a1196(0x134)]['unit']],_0x4ad439=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x14e)]],_0x4f9982=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x12c)]],_0x2167d6=[..._0x1f0b45[_0x5a1196(0x134)]['id_transaction']],_0x1182db=[..._0x1f0b45['body']['adj_dicount_price']],_0x590e6e=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x14d)]],_0x3dbbef=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x161)]],_0x152b37=[..._0x1f0b45['body']['getPrimUnitNo']],_0x4dd5fb=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x156)]],_0x48331c=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x13a)]],_0x5d601b=[..._0x1f0b45[_0x5a1196(0x134)][_0x5a1196(0x15e)]];const _0x535eab=_0x2ee03e[_0x5a1196(0x11f)](_0x3a4f8e=>{return _0x3a4f8e={'product_code':_0x3a4f8e};});_0x5c4add[_0x5a1196(0x114)]((_0x195c75,_0x1e3619)=>{_0x535eab[_0x1e3619]['product_name']=_0x195c75;}),_0x418653[_0x5a1196(0x114)]((_0x16a3ba,_0x1503d7)=>{const _0x32e20b=_0x5a1196;_0x535eab[_0x1503d7][_0x32e20b(0x131)]=_0x16a3ba;}),_0x3dbbef[_0x5a1196(0x114)]((_0x45f30c,_0x281fc4)=>{const _0x64c7af=_0x5a1196;_0x535eab[_0x281fc4][_0x64c7af(0x161)]=_0x45f30c;}),_0x1d1702[_0x5a1196(0x114)]((_0x3d51bd,_0x391c69)=>{const _0x88326b=_0x5a1196;_0x535eab[_0x391c69][_0x88326b(0x166)]=_0x3d51bd;}),_0x8d476f['forEach']((_0x336d87,_0x290234)=>{const _0x1bf094=_0x5a1196;_0x535eab[_0x290234][_0x1bf094(0x15a)]=_0x336d87;}),_0x4ad439[_0x5a1196(0x114)]((_0x399e96,_0x4685bd)=>{_0x535eab[_0x4685bd]['price']=_0x399e96;}),_0x4f9982['forEach']((_0x264154,_0x1ac5df)=>{const _0x142de6=_0x5a1196;_0x535eab[_0x1ac5df][_0x142de6(0x141)]=_0x264154;}),_0x2167d6['forEach']((_0x2b62d1,_0x234671)=>{const _0x41e25a=_0x5a1196;_0x535eab[_0x234671][_0x41e25a(0x165)]=_0x2b62d1;}),_0x1182db['forEach']((_0x3bd566,_0x1d1172)=>{const _0x8e16b3=_0x5a1196;_0x535eab[_0x1d1172][_0x8e16b3(0x146)]=_0x3bd566;}),_0x590e6e[_0x5a1196(0x114)]((_0x2f2f29,_0x1c7749)=>{const _0x3c681c=_0x5a1196;_0x535eab[_0x1c7749][_0x3c681c(0x127)]=_0x2f2f29;}),_0x48331c['forEach']((_0x3df6c6,_0x198599)=>{const _0x6e6e47=_0x5a1196;_0x535eab[_0x198599][_0x6e6e47(0x13a)]=_0x3df6c6;}),_0x152b37[_0x5a1196(0x114)]((_0x4cd9e7,_0xb6a9cd)=>{const _0x3287dc=_0x5a1196;_0x535eab[_0xb6a9cd][_0x3287dc(0x159)]=_0x4cd9e7;}),_0x4dd5fb['forEach']((_0xa209b1,_0x541a2d)=>{const _0x10df78=_0x5a1196;_0x535eab[_0x541a2d][_0x10df78(0x156)]=_0xa209b1;}),_0x5d601b[_0x5a1196(0x114)]((_0x39ece3,_0x17597e)=>{const _0x1a121c=_0x5a1196;_0x535eab[_0x17597e][_0x1a121c(0x138)]=_0x39ece3;});const _0x3002df=new invoice_sa();await _0x3002df[_0x5a1196(0x139)]();const _0xd481b=_0x1f0b45[_0x5a1196(0x110)],_0x4c94f3=await staff['findOne']({'email':_0xd481b[_0x5a1196(0x155)]}),_0x6968b6=new sales_sa({'invoice':_0x3002df[_0x5a1196(0x13e)][_0x5a1196(0x143)]()[_0x5a1196(0x149)](0x8,'0'),'customer':_0x4f34fe,'file':_0x4af6aa,'date':_0x34475b,'sale_product':_0x535eab,'note':_0x36a25e,'sales_staff_id':_0x4c94f3[_0x5a1196(0x14f)][_0x5a1196(0x133)](),'paid':_0x4153fe,'dsi':_0xad47e9,'cash':_0x54a113,'amount':_0x2df936,'bank':_0x3964de,'check_no':_0x37d760,'due_date':_0x25d0a8}),_0x3c0af6=await _0x6968b6[_0x5a1196(0x139)]();console['log']('Invoice\x20created\x20with\x20incremented\x20start\x20value:',_0x3002df[_0x5a1196(0x13e)][_0x5a1196(0x143)]()['padStart'](0x8,'0'));const _0x3d5089=mongoose[_0x5a1196(0x151)]['ObjectId'];_0x1f0b45[_0x5a1196(0x154)]('success',_0x5a1196(0x11a)),_0x354ef9['redirect'](_0x5a1196(0x12e)+_0x3c0af6[_0x5a1196(0x14f)]);}catch(_0x2d0037){console['log'](_0x2d0037);}}),router['post'](a0_0x2bacc4(0x16c),auth,async(_0x265033,_0x4efab7)=>{const _0x23c49b=a0_0x2bacc4;try{const {date_data:_0x504cb9,note_data:_0x25da6c,status_data:_0x2d101c}=_0x265033['body'],_0x3999d5=new invoice_sa();await _0x3999d5[_0x23c49b(0x139)]();const _0x1b19f6=_0x265033[_0x23c49b(0x110)],_0x10abcf=await staff['findOne']({'email':_0x1b19f6[_0x23c49b(0x155)]}),_0x58fd79=new sales_sa({'invoice':_0x3999d5[_0x23c49b(0x13e)][_0x23c49b(0x143)]()['padStart'](0x8,'0'),'status_data':_0x2d101c,'date':_0x504cb9,'note':_0x25da6c,'sales_staff_id':_0x10abcf['_id']['valueOf']()}),_0x4e8dff=await _0x58fd79[_0x23c49b(0x139)]();console[_0x23c49b(0x140)](_0x23c49b(0x136),_0x3999d5[_0x23c49b(0x13e)]['toString']()[_0x23c49b(0x149)](0x8,'0'));const _0x4eaaa7=mongoose[_0x23c49b(0x151)][_0x23c49b(0x137)];_0x265033['flash'](_0x23c49b(0x142),_0x23c49b(0x11a)),_0x4efab7[_0x23c49b(0x15c)](_0x23c49b(0x12e)+_0x4e8dff[_0x23c49b(0x14f)]);}catch(_0x16712a){console[_0x23c49b(0x140)](_0x16712a);}}),router[a0_0x2bacc4(0x126)]('/product_list',auth,async(_0x1cc20d,_0x1485ee)=>{const _0x391f52=a0_0x2bacc4;try{const _0x132932=_0x1cc20d['user'],_0x1ab274=await profile[_0x391f52(0x120)]({'email':_0x132932[_0x391f52(0x155)]}),_0x4637fe=await staff['aggregate']([{'$match':{'email':_0x132932[_0x391f52(0x155)]}},{'$unwind':_0x391f52(0x119)},{'$match':{'product_list.isConfirm':_0x391f52(0x113)}}]);_0x1485ee[_0x391f52(0x12b)](_0x4637fe);}catch(_0x1efde8){}}),router[a0_0x2bacc4(0x126)](a0_0x2bacc4(0x164),auth,async(_0x568f12,_0x11fe8b)=>{const _0x5d320b=a0_0x2bacc4;try{const {customer_name:_0x23a5a6}=_0x568f12[_0x5d320b(0x134)],_0x4865b1=await customer[_0x5d320b(0x120)]({'name':_0x23a5a6});_0x11fe8b[_0x5d320b(0x12b)](_0x4865b1);}catch(_0x534084){}}),router['post'](a0_0x2bacc4(0x135),auth,async(_0x4b2531,_0x266525)=>{const _0x2cde3f=a0_0x2bacc4;try{const _0xca3a7b=_0x4b2531[_0x2cde3f(0x110)],{id_data:_0x4fd90f}=_0x4b2531['body'],_0x3786de=await profile[_0x2cde3f(0x120)]({'email':_0xca3a7b['email']}),_0x209526=mongoose['Types'][_0x2cde3f(0x137)];console[_0x2cde3f(0x140)](_0x209526(_0x4fd90f));var _0x2ad9c9=_0x209526(_0x4fd90f);const _0x1afddb=await staff[_0x2cde3f(0x125)]([{'$match':{'email':_0xca3a7b['email']}},{'$unwind':_0x2cde3f(0x119)},{'$match':{'product_list.isConfirm':'true','product_list._id':_0x2ad9c9}}]);_0x266525['json'](_0x1afddb);}catch(_0x2e65f9){}}),router['post']('/volume_setup',auth,async(_0x59aa20,_0x1a7990)=>{const _0x59ac89=a0_0x2bacc4;try{const _0xa09217=await discount_volume_db[_0x59ac89(0x120)]();_0x1a7990[_0x59ac89(0x12b)](_0xa09217);}catch(_0x8d102f){}}),router[a0_0x2bacc4(0x126)](a0_0x2bacc4(0x14c),auth,async(_0x287244,_0x31be81)=>{const _0xde41a8=a0_0x2bacc4;try{const _0x281bba=await product[_0xde41a8(0x12d)]();_0x31be81['json'](_0x281bba);}catch(_0x7028be){}}),router[a0_0x2bacc4(0x126)]('/product_data_id',auth,async(_0x54806a,_0x114f84)=>{const _0x1142c3=a0_0x2bacc4;try{const {id_data:_0x1e3814}=_0x54806a['body'],_0x54fc4d=await product[_0x1142c3(0x147)](_0x1e3814);_0x114f84[_0x1142c3(0x12b)](_0x54fc4d);}catch(_0x1ab8f4){}}),module[a0_0x2bacc4(0x160)]=router;