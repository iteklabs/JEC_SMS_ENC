var a0_0x448b69=a0_0xb90a;(function(_0x2e6e69,_0xd4d118){var _0x5e04ae=a0_0xb90a,_0x32638b=_0x2e6e69();while(!![]){try{var _0x33c9a1=-parseInt(_0x5e04ae(0x1b1))/0x1*(parseInt(_0x5e04ae(0x1c8))/0x2)+parseInt(_0x5e04ae(0x19a))/0x3*(parseInt(_0x5e04ae(0x1af))/0x4)+parseInt(_0x5e04ae(0x1ca))/0x5*(parseInt(_0x5e04ae(0x1dd))/0x6)+parseInt(_0x5e04ae(0x1bc))/0x7*(-parseInt(_0x5e04ae(0x1a7))/0x8)+-parseInt(_0x5e04ae(0x16f))/0x9+parseInt(_0x5e04ae(0x199))/0xa*(parseInt(_0x5e04ae(0x1d7))/0xb)+parseInt(_0x5e04ae(0x198))/0xc;if(_0x33c9a1===_0xd4d118)break;else _0x32638b['push'](_0x32638b['shift']());}catch(_0x2efb19){_0x32638b['push'](_0x32638b['shift']());}}}(a0_0x2a38,0x82702));function a0_0xb90a(_0x38cf0f,_0x5951e3){var _0x2a38ef=a0_0x2a38();return a0_0xb90a=function(_0xb90a2b,_0x40704e){_0xb90a2b=_0xb90a2b-0x16e;var _0x4bf8a0=_0x2a38ef[_0xb90a2b];return _0x4bf8a0;},a0_0xb90a(_0x38cf0f,_0x5951e3);}function a0_0x2a38(){var _0x10d10e=['$note','status','old_warehouse_data','string','old_data','email','1962346dtbqyK','to_room','4590ieVsiy','$product_details.secondary_code','Arabic\x20(ae)','$product_details._id','slice','stock_data','$name','to_Room_name','exports','getDate','payment\x20successfull','purchases_return','$_id','154OBTagL','due_amount','$product_details.product_code','../public/language/languages.json','language','master','660AbCwTW','redirect','$supplier_docs.address','render','English\x20(US)','French','forEach','Enabled','Arabic','pallet','$date','received','Spanish','/view','25596FVbIpJ','bin','$discount','flash','/receive_payment/:id','findOne','return_qty','post','find','get','warehouse_name','bay','$supplier_docs.mobile','Chinese','save','purchase_quantity','primary_code_hide','German','aggregate','name','product_name','findById','Portuguese\x20(BR)','product_code_hide','../models/all_models','room','express','$received','$total_amount','log','return_product','date','body','Purchase\x20Return','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','$product_details.bin','$warehouse_name','getMonth','product_code','user','success','11550600TdFFGS','465130QxHitF','48VQkygh','types','Portuguese','Return\x20Goods','note','$product_details','floorlevel','to_warehouse_name','$product_details.storage','stocks','secondary_code_hide','$invoice','level','8gjgpjQ','json','suppliers','Hindi','params','errors','/purchases_return/view','product_stock','67124rhEBvx','$product_details.product_name','1NWxNLb','$return_product.product_name','map','amount','primary_code','foreach\x20newproduct','$supplier_docs.email','English','invoice','secondary_code','supplier_docs','3254419fdWuZY','return_purchase_edit','type','$product_details.bay','product_details','Router'];a0_0x2a38=function(){return _0x10d10e;};return a0_0x2a38();}const express=require(a0_0x448b69(0x189)),app=express(),router=express[a0_0x448b69(0x1c1)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require(a0_0x448b69(0x187)),auth=require('../middleware/auth'),users=require(a0_0x448b69(0x1da));router[a0_0x448b69(0x178)](a0_0x448b69(0x16e),auth,async(_0x524c96,_0xc50efc)=>{var _0x3280e2=a0_0x448b69;try{const {username:_0x88a0e4,email:_0x47fc41,role:_0x3489e8}=_0x524c96[_0x3280e2(0x196)],_0x15ad02=_0x524c96[_0x3280e2(0x196)],_0x1cd9fd=await profile[_0x3280e2(0x174)]({'email':_0x15ad02[_0x3280e2(0x1c7)]}),_0x439227=await master_shop[_0x3280e2(0x177)]();console[_0x3280e2(0x18c)](_0x3280e2(0x1dc),_0x439227);const _0x4f4c85=await purchases_return['aggregate']([{'$lookup':{'from':_0x3280e2(0x1a9),'localField':'suppliers','foreignField':_0x3280e2(0x182),'as':_0x3280e2(0x1bb)}},{'$unwind':'$return_product'},{'$unwind':'$supplier_docs'},{'$group':{'_id':_0x3280e2(0x1d6),'invoice':{'$first':_0x3280e2(0x1a5)},'date':{'$first':_0x3280e2(0x1e7)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':_0x3280e2(0x193)},'product_name':{'$first':_0x3280e2(0x1b2)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':'$return_product.price'},'total':{'$sum':'$return_product.total'},'note':{'$first':_0x3280e2(0x1c2)},'total_amount':{'$first':_0x3280e2(0x18b)},'discount':{'$first':_0x3280e2(0x171)},'receivable':{'$first':'$receivable'},'received':{'$first':_0x3280e2(0x18a)},'due_amount':{'$first':'$due_amount'},'mobile':{'$first':_0x3280e2(0x17b)},'email':{'$first':_0x3280e2(0x1b7)},'address':{'$first':_0x3280e2(0x1df)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console['log'](_0x4f4c85);if(_0x439227[0x0][_0x3280e2(0x1db)]==_0x3280e2(0x1e1)){var _0x12e015=users['English'];console['log'](_0x12e015);}else{if(_0x439227[0x0][_0x3280e2(0x1db)]==_0x3280e2(0x1aa))var _0x12e015=users[_0x3280e2(0x1aa)];else{if(_0x439227[0x0]['language']==_0x3280e2(0x180))var _0x12e015=users[_0x3280e2(0x180)];else{if(_0x439227[0x0][_0x3280e2(0x1db)]==_0x3280e2(0x1e9))var _0x12e015=users[_0x3280e2(0x1e9)];else{if(_0x439227[0x0]['language']=='French')var _0x12e015=users[_0x3280e2(0x1e2)];else{if(_0x439227[0x0][_0x3280e2(0x1db)]==_0x3280e2(0x185))var _0x12e015=users[_0x3280e2(0x19c)];else{if(_0x439227[0x0]['language']==_0x3280e2(0x17c))var _0x12e015=users[_0x3280e2(0x17c)];else{if(_0x439227[0x0][_0x3280e2(0x1db)]==_0x3280e2(0x1cc))var _0x12e015=users[_0x3280e2(0x1e5)];}}}}}}}_0xc50efc['render'](_0x3280e2(0x1d5),{'success':_0x524c96[_0x3280e2(0x172)]('success'),'errors':_0x524c96[_0x3280e2(0x172)]('errors'),'role':_0x15ad02,'profile':_0x1cd9fd,'master_shop':_0x439227,'user':_0x4f4c85,'language':_0x12e015});}catch(_0x2df6b1){console[_0x3280e2(0x18c)](_0x2df6b1);}}),router['get']('/view/:id',auth,async(_0x48a085,_0x442117)=>{var _0x304cb6=a0_0x448b69;try{const {username:_0x3fe56e,email:_0x38d741,role:_0x40ebc1}=_0x48a085[_0x304cb6(0x196)],_0x22b195=_0x48a085[_0x304cb6(0x196)],_0x2a5632=await profile[_0x304cb6(0x174)]({'email':_0x22b195[_0x304cb6(0x1c7)]}),_0x5eab5c=await product[_0x304cb6(0x177)]({}),_0x46caa8=await master_shop[_0x304cb6(0x177)]();console[_0x304cb6(0x18c)](_0x304cb6(0x1dc),_0x46caa8),console[_0x304cb6(0x18c)](_0x48a085[_0x304cb6(0x18f)]);const _0x4dd9e7=_0x48a085[_0x304cb6(0x1ab)]['id'],_0x4b7cb6=await purchases_return[_0x304cb6(0x184)](_0x4dd9e7);console[_0x304cb6(0x18c)](_0x4b7cb6);const _0x31039e=await warehouse[_0x304cb6(0x181)]([{'$match':{'name':_0x4b7cb6[_0x304cb6(0x179)],'room':_0x4b7cb6[_0x304cb6(0x188)]}},{'$unwind':_0x304cb6(0x19f)},{'$group':{'_id':_0x304cb6(0x1cd),'name':{'$first':_0x304cb6(0x1b0)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x304cb6(0x1bf)},'bin':{'$first':_0x304cb6(0x192)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x304cb6(0x1cb)},'product_code':{'$first':_0x304cb6(0x1d9)},'storage':{'$first':_0x304cb6(0x1a2)},'rack':{'$first':'$product_details.rack'}}}]);warehouse_data=await warehouse[_0x304cb6(0x181)]([{'$match':{'status':_0x304cb6(0x1e4),'name':_0x304cb6(0x19d),'warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':_0x304cb6(0x1d0),'name':{'$first':_0x304cb6(0x1d0)}}},{'$sort':{'name':0x1}}]),console[_0x304cb6(0x18c)](_0x304cb6(0x1cf),_0x31039e);if(_0x46caa8[0x0][_0x304cb6(0x1db)]==_0x304cb6(0x1e1)){var _0x35511d=users['English'];console[_0x304cb6(0x18c)](_0x35511d);}else{if(_0x46caa8[0x0]['language']=='Hindi')var _0x35511d=users[_0x304cb6(0x1aa)];else{if(_0x46caa8[0x0]['language']==_0x304cb6(0x180))var _0x35511d=users[_0x304cb6(0x180)];else{if(_0x46caa8[0x0][_0x304cb6(0x1db)]==_0x304cb6(0x1e9))var _0x35511d=users[_0x304cb6(0x1e9)];else{if(_0x46caa8[0x0][_0x304cb6(0x1db)]=='French')var _0x35511d=users[_0x304cb6(0x1e2)];else{if(_0x46caa8[0x0][_0x304cb6(0x1db)]==_0x304cb6(0x185))var _0x35511d=users[_0x304cb6(0x19c)];else{if(_0x46caa8[0x0][_0x304cb6(0x1db)]=='Chinese')var _0x35511d=users[_0x304cb6(0x17c)];else{if(_0x46caa8[0x0][_0x304cb6(0x1db)]==_0x304cb6(0x1cc))var _0x35511d=users[_0x304cb6(0x1e5)];}}}}}}}_0x442117[_0x304cb6(0x1e0)](_0x304cb6(0x1bd),{'success':_0x48a085[_0x304cb6(0x172)](_0x304cb6(0x197)),'errors':_0x48a085[_0x304cb6(0x172)](_0x304cb6(0x1ac)),'role':_0x22b195,'master_shop':_0x46caa8,'profile':_0x2a5632,'user':_0x4b7cb6,'stock':_0x31039e,'product':_0x5eab5c,'language':_0x35511d,'warehouse':warehouse_data});}catch(_0x5b54ba){console[_0x304cb6(0x18c)](_0x5b54ba);}}),router[a0_0x448b69(0x176)]('/view/:id',auth,async(_0x205cf9,_0x556672)=>{var _0x47556b=a0_0x448b69;try{const _0x127d26=_0x205cf9[_0x47556b(0x1ab)]['id'];console[_0x47556b(0x18c)](_0x127d26);const _0xf66906=await purchases_return[_0x47556b(0x174)]({'invoice':_0x205cf9[_0x47556b(0x18f)][_0x47556b(0x1b9)]});console[_0x47556b(0x18c)](_0x47556b(0x1c6),_0xf66906);const _0xdeed03=await warehouse[_0x47556b(0x174)]({'name':_0xf66906[_0x47556b(0x1a1)],'room':_0xf66906['to_room']});console[_0x47556b(0x18c)](_0x47556b(0x1c4),_0xdeed03);const {invoice:_0x5a9e04,suppliers:_0x17e0bc,date:_0x1da058,warehouse_name:_0x1a0745,product_name:_0x58e776,purchase_quantity:_0x3e274b,stocks:_0x5a43e0,return_qty:_0x323948,note:_0x2bb7f5,Room_name:_0x51a8a6,level:_0xf9beb0,isle:_0xa0df2b,pallet:_0x4c6097,to_warehouse_name:_0x4440cb,to_Room_name:_0x2fb500}=_0x205cf9[_0x47556b(0x18f)];if(typeof _0x58e776==_0x47556b(0x1c5))var _0x53979f=[_0x205cf9[_0x47556b(0x18f)][_0x47556b(0x183)]],_0x355171=[_0x205cf9[_0x47556b(0x18f)]['purchase_quantity']],_0x4b4a6a=[_0x205cf9['body']['stocks']],_0x32b8ee=[_0x205cf9['body'][_0x47556b(0x175)]],_0x2c5058=[_0x205cf9[_0x47556b(0x18f)]['level']],_0x127f0d=[_0x205cf9[_0x47556b(0x18f)]['isle']],_0xddb96e=[_0x205cf9[_0x47556b(0x18f)]['pallet']],_0x57d566=[_0x205cf9[_0x47556b(0x18f)][_0x47556b(0x19b)]],_0x424850=[_0x205cf9['body'][_0x47556b(0x186)]],_0xb64845=[_0x205cf9[_0x47556b(0x18f)][_0x47556b(0x17f)]],_0x32852c=[_0x205cf9[_0x47556b(0x18f)]['secondary_code_hide']];else var _0x53979f=[..._0x205cf9[_0x47556b(0x18f)]['product_name']],_0x355171=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x17e)]],_0x4b4a6a=[..._0x205cf9['body'][_0x47556b(0x1a3)]],_0x32b8ee=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x175)]],_0x2c5058=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x1a6)]],_0x127f0d=[..._0x205cf9[_0x47556b(0x18f)]['isle']],_0xddb96e=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x1e6)]],_0x424850=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x186)]],_0xb64845=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x17f)]],_0x32852c=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x1a4)]],_0x57d566=[..._0x205cf9[_0x47556b(0x18f)][_0x47556b(0x19b)]];const _0x14afc2=_0x53979f[_0x47556b(0x1b3)](_0x451d63=>{return _0x451d63={'product_name':_0x451d63};});_0x355171['forEach']((_0x3178ca,_0x1628f1)=>{var _0x4f988=_0x47556b;_0x14afc2[_0x1628f1][_0x4f988(0x17e)]=_0x3178ca;}),_0x4b4a6a['forEach']((_0x4fd350,_0x21c136)=>{_0x14afc2[_0x21c136]['stock_quantity']=_0x4fd350;}),_0x32b8ee[_0x47556b(0x1e3)]((_0x2dcb80,_0x24e83a)=>{var _0x8488ea=_0x47556b;_0x14afc2[_0x24e83a][_0x8488ea(0x175)]=_0x2dcb80;}),_0x2c5058['forEach']((_0x4a7bf7,_0x32c853)=>{var _0x265469=_0x47556b;_0x14afc2[_0x32c853][_0x265469(0x17a)]=_0x4a7bf7;}),_0x127f0d[_0x47556b(0x1e3)]((_0x52f03b,_0x4e345d)=>{_0x14afc2[_0x4e345d]['bin']=_0x52f03b;}),_0xddb96e[_0x47556b(0x1e3)]((_0x2a18de,_0x104180)=>{_0x14afc2[_0x104180]['floorlevel']=_0x2a18de;}),_0x424850[_0x47556b(0x1e3)]((_0x531c65,_0x1c3cd5)=>{var _0x11ff61=_0x47556b;_0x14afc2[_0x1c3cd5][_0x11ff61(0x195)]=_0x531c65;}),_0xb64845[_0x47556b(0x1e3)]((_0x16d120,_0x4b45db)=>{var _0x361db4=_0x47556b;_0x14afc2[_0x4b45db][_0x361db4(0x1b5)]=_0x16d120;}),_0x32852c[_0x47556b(0x1e3)]((_0x3558a7,_0x23c4d5)=>{var _0x29abdb=_0x47556b;_0x14afc2[_0x23c4d5][_0x29abdb(0x1ba)]=_0x3558a7;}),_0x57d566[_0x47556b(0x1e3)]((_0x16361e,_0x3fec69)=>{var _0x3fb32d=_0x47556b;_0x14afc2[_0x3fec69][_0x3fb32d(0x1be)]=_0x16361e;});var _0x1bcf93=0x0;_0x14afc2[_0x47556b(0x1e3)](_0xb6ddcb=>{var _0x87d756=_0x47556b;console[_0x87d756(0x18c)](_0x87d756(0x1b6),_0xb6ddcb),(parseInt(_0xb6ddcb['purchase_quantity'])<parseInt(_0xb6ddcb[_0x87d756(0x175)])||parseInt(_0xb6ddcb['stock_quantity'])<parseInt(_0xb6ddcb[_0x87d756(0x175)])||parseInt(_0xb6ddcb['return_qty'])==0x0)&&_0x1bcf93++;});if(_0x1bcf93!=0x0)return _0x205cf9['flash'](_0x47556b(0x1ac),_0x47556b(0x191)),_0x556672[_0x47556b(0x1de)]('back');_0xf66906[_0x47556b(0x18d)][_0x47556b(0x1e3)](_0x354b4d=>{var _0x18c48e=_0x47556b;const _0x3b3c23=_0xdeed03[_0x18c48e(0x1c0)][_0x18c48e(0x1b3)](_0x79982e=>{var _0x149fce=_0x18c48e;_0x79982e['product_name']==_0x354b4d['product_name']&&_0x79982e[_0x149fce(0x1a0)]==_0x354b4d[_0x149fce(0x1a0)]&&_0x79982e[_0x149fce(0x1be)]==_0x354b4d[_0x149fce(0x1be)]&&_0x79982e[_0x149fce(0x170)]==_0x354b4d['bin']&&_0x79982e[_0x149fce(0x17a)]==_0x354b4d['bay']&&(_0x79982e[_0x149fce(0x1ae)]=parseInt(_0x79982e[_0x149fce(0x1ae)])+parseInt(_0x354b4d['return_qty']));});}),console['log']('old_warehouse_data',_0xdeed03),await _0xdeed03[_0x47556b(0x17d)](),_0xf66906[_0x47556b(0x1b9)]=_0x5a9e04,_0xf66906[_0x47556b(0x1a9)]=_0x17e0bc,_0xf66906[_0x47556b(0x18e)]=_0x1da058,_0xf66906['warehouse_name']=_0x1a0745,_0xf66906[_0x47556b(0x18d)]=_0x14afc2,_0xf66906[_0x47556b(0x19e)]=_0x2bb7f5,_0xf66906[_0x47556b(0x188)]=_0x51a8a6,_0xf66906[_0x47556b(0x1a1)]=_0x4440cb,_0xf66906[_0x47556b(0x1c9)]=_0x2fb500;const _0x166f34=await _0xf66906[_0x47556b(0x17d)](),_0xeaf732=await purchases_return[_0x47556b(0x174)]({'invoice':_0x205cf9['body'][_0x47556b(0x1b9)]}),_0x384334=await warehouse[_0x47556b(0x174)]({'name':_0x205cf9[_0x47556b(0x18f)][_0x47556b(0x1a1)],'room':_0x205cf9['body'][_0x47556b(0x1d1)]});_0xeaf732[_0x47556b(0x18d)][_0x47556b(0x1e3)](_0x306a49=>{var _0x41d011=_0x47556b;_0x384334[_0x41d011(0x1c0)][_0x41d011(0x1b3)](_0x56d7f3=>{var _0x5116c7=_0x41d011;_0x56d7f3[_0x5116c7(0x183)]==_0x306a49['product_name']&&_0x56d7f3[_0x5116c7(0x1e6)]==_0x306a49['pallet']&&(_0x56d7f3[_0x5116c7(0x1ae)]=parseInt(_0x56d7f3['product_stock'])-parseInt(_0x306a49[_0x5116c7(0x175)]),console[_0x5116c7(0x18c)]('product_details.return_qtyproduct_details.return_qty',_0x306a49[_0x5116c7(0x175)]));});}),console[_0x47556b(0x18c)]('final',_0x384334),await _0x384334[_0x47556b(0x17d)]();const _0x104c93=await s_payment_data[_0x47556b(0x174)]({'invoice':_0x205cf9['body'][_0x47556b(0x1b9)],'reason':_0x47556b(0x190)});await _0x104c93[_0x47556b(0x17d)](),_0x205cf9[_0x47556b(0x172)](_0x47556b(0x197),'purchase\x20return\x20successfully'),_0x556672[_0x47556b(0x1de)](_0x47556b(0x1ad));}catch(_0x3ac781){console['log'](_0x3ac781),_0x556672[_0x47556b(0x1c3)](0xc8)[_0x47556b(0x1a8)]({'message':_0x3ac781['message']});}}),router[a0_0x448b69(0x178)]('/invoice/:id',auth,async(_0x542943,_0x192325)=>{var _0x30ec4c=a0_0x448b69;try{const {username:_0x44d0c5,email:_0x290b9b,role:_0x458b4f}=_0x542943[_0x30ec4c(0x196)],_0x14050f=_0x542943['user'],_0x2d88c7=await profile[_0x30ec4c(0x174)]({'email':_0x14050f[_0x30ec4c(0x1c7)]}),_0x5dce84=await master_shop['find']();console['log']('master',_0x5dce84);const _0x4d509a=_0x542943[_0x30ec4c(0x1ab)]['id'],_0x50dd5f=await purchases_return['findById'](_0x4d509a);console['log'](_0x50dd5f);const _0x39bf31=await suppliers[_0x30ec4c(0x174)]({'name':_0x50dd5f[_0x30ec4c(0x1a9)]});console[_0x30ec4c(0x18c)](_0x39bf31);if(_0x5dce84[0x0][_0x30ec4c(0x1db)]==_0x30ec4c(0x1e1)){var _0x373d52=users[_0x30ec4c(0x1b8)];console[_0x30ec4c(0x18c)](_0x373d52);}else{if(_0x5dce84[0x0][_0x30ec4c(0x1db)]==_0x30ec4c(0x1aa))var _0x373d52=users[_0x30ec4c(0x1aa)];else{if(_0x5dce84[0x0][_0x30ec4c(0x1db)]=='German')var _0x373d52=users[_0x30ec4c(0x180)];else{if(_0x5dce84[0x0][_0x30ec4c(0x1db)]==_0x30ec4c(0x1e9))var _0x373d52=users[_0x30ec4c(0x1e9)];else{if(_0x5dce84[0x0]['language']==_0x30ec4c(0x1e2))var _0x373d52=users[_0x30ec4c(0x1e2)];else{if(_0x5dce84[0x0][_0x30ec4c(0x1db)]==_0x30ec4c(0x185))var _0x373d52=users['Portuguese'];else{if(_0x5dce84[0x0][_0x30ec4c(0x1db)]==_0x30ec4c(0x17c))var _0x373d52=users[_0x30ec4c(0x17c)];else{if(_0x5dce84[0x0][_0x30ec4c(0x1db)]==_0x30ec4c(0x1cc))var _0x373d52=users['Arabic'];}}}}}}}_0x192325[_0x30ec4c(0x1e0)]('return_purchase_invoice',{'success':_0x542943[_0x30ec4c(0x172)](_0x30ec4c(0x197)),'errors':_0x542943[_0x30ec4c(0x172)](_0x30ec4c(0x1ac)),'role':_0x14050f,'profile':_0x2d88c7,'master_shop':_0x5dce84,'supplier':_0x39bf31,'purchase':_0x50dd5f,'language':_0x373d52});}catch(_0x343a0){console[_0x30ec4c(0x18c)](_0x343a0);}}),router[a0_0x448b69(0x176)](a0_0x448b69(0x173),auth,async(_0x184e68,_0x1faa02)=>{var _0x1dc3c6=a0_0x448b69;try{const _0x2bd9b3=_0x184e68['params']['id'],{invoice:_0x999589,suppliers:_0x1190e4,receivable_amount:_0x1ccc9f,received_amount:_0x1fcdb1}=_0x184e68['body'],_0x5ec4dc=await purchases_return[_0x1dc3c6(0x184)](_0x2bd9b3);console['log'](_0x5ec4dc);var _0x3018a8=_0x1ccc9f-_0x1fcdb1;console[_0x1dc3c6(0x18c)](_0x1fcdb1),_0x5ec4dc['received']=parseFloat(_0x1fcdb1)+parseFloat(_0x5ec4dc[_0x1dc3c6(0x1e8)]),_0x5ec4dc[_0x1dc3c6(0x1d8)]=_0x3018a8,console[_0x1dc3c6(0x18c)](_0x5ec4dc);const _0x505112=await _0x5ec4dc['save'](),_0x279055=await s_payment_data[_0x1dc3c6(0x174)]({'invoice':_0x184e68[_0x1dc3c6(0x18f)][_0x1dc3c6(0x1b9)],'reason':'Purchase\x20Return'});_0x279055[_0x1dc3c6(0x1b4)]=_0x3018a8,await _0x279055['save']();let _0x3c823e=new Date(),_0x29bdd2=('0'+_0x3c823e[_0x1dc3c6(0x1d3)]())['slice'](-0x2),_0x31c247=('0'+(_0x3c823e[_0x1dc3c6(0x194)]()+0x1))[_0x1dc3c6(0x1ce)](-0x2),_0x2c4363=_0x3c823e['getFullYear'](),_0x17e5d9=_0x2c4363+'-'+_0x31c247+'-'+_0x29bdd2;const _0x1ea86b=new suppliers_payment({'invoice':_0x999589,'date':_0x2c4363+'-'+_0x31c247+'-'+_0x29bdd2,'suppliers':_0x1190e4,'reason':'Received\x20For\x20Purchase\x20Return','amount':_0x1fcdb1}),_0x53a17a=await _0x1ea86b['save']();_0x184e68[_0x1dc3c6(0x172)](_0x1dc3c6(0x197),_0x1dc3c6(0x1d4)),_0x1faa02[_0x1dc3c6(0x1de)]('/purchases_return/view');}catch(_0x2313bd){console[_0x1dc3c6(0x18c)](_0x2313bd);}}),module[a0_0x448b69(0x1d2)]=router;