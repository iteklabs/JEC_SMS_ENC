var a0_0x42d329=a0_0x5512;function a0_0x5512(_0x164ea7,_0x37f0aa){var _0x5df645=a0_0x5df6();return a0_0x5512=function(_0x551232,_0x10ad74){_0x551232=_0x551232-0x159;var _0x55d556=_0x5df645[_0x551232];return _0x55d556;},a0_0x5512(_0x164ea7,_0x37f0aa);}function a0_0x5df6(){var _0x17eaac=['express','wms_data','prod_cat','<a\x20style=\x22background-color:\x20#007bff;\x20color:\x20#ffffff;\x20border:\x20none;\x20padding:\x2010px\x2020px;\x20border-radius:\x205px;\x22\x20href=\x22','$wms_data','exports','no_per_unit','staffs','createTransport','/view_sales/:id','accounting_account_id','account_data','/add_sales','Error\x20Occurs','$wms_account_id','post','Arabic\x20(ae)','price','conversion_unit','Spanish','all_sales_order','language','$customer','invoice','French','$head_id_staff','product_id','/upload/','</td>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>','mongodb','aggregate','</tbody>','$accounting_account_confirm','email','<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\x22\x20integrity=\x22sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\x22\x20crossorigin=\x22anonymous\x22></script>','1288280ZHbPRk','<span>\x20Dear\x20<b>','<br><br><span>\x20The\x20total\x20quantity\x20for\x20these\x20items\x20is\x20<b>','German','10sSIiax','<span>\x20Thank\x20you\x20for\x20your\x20prompt\x20attention\x20to\x20this\x20matter.\x20</span>','<div\x20style=\x22text-align:\x20center;\x22>','product_code','</head><body>','Router','body','Logo.png','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','/sales_order/view_sales/','Types','totalprice','4204911FAFWlY','_id','find','Email\x20sent\x20successfully','Arabic','</thead>','</div>','save','json','<div>','totalPrice','Chinese','$_id','English\x20(US)','params','conversion_data','../public/language/languages.json','$sale_product','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','invoice_init','<span>\x20Requested\x20By:\x20<b>','get','head_id_staff_id','<span>\x20Request\x20Date:\x20<b>','logo','/product_list','<strong>\x20Regards\x20</strong>','dicount_price','errors','Portuguese','<tbody\x20style=\x22text-align:\x20center;\x22>','port','render','5510nKBLna','://','isFG','user','xlsx','$JD','/product_data','<br><br><br>','valueOf','English','307079zeKYPY','$member','</table>','exceljs','product_name','<html><head><title></title>','/../public',';christian.villamer@jakagroup.com','unit','log','tmpisFG','/accounting_approval/','head_staff_info','../middleware/auth','image','$invoice','\x22>Change\x20Status</a>','forEach','</b>,\x20</span><br>','ObjectId','Portuguese\x20(BR)','$wms_account_confirm','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','toString','findById','head_id_staff','</b></span>\x20<br>','$head_staff_info','string','3232DkFFSo','<tr>','real_qty_unit_val','secondary_unit','prod_name','<table\x20style=\x22width:\x20100%\x20!important;\x22>','prod_code','$date','4371941uOVCUh','5107758NVxZcR','primary_code','<h2>\x20JEC\x20SMS\x20</h2>','success','</tr>','2GyWvYq','getPrimUnitNo','12783033iNRWhI','sttaff_id','true','flash','quantity','dicount_price_adjust','../models/all_models','Hindi','findOne','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','sendMail','$accounting_account_id','name'];a0_0x5df6=function(){return _0x17eaac;};return a0_0x5df6();}(function(_0x270ab4,_0x15f6be){var _0x39cf2e=a0_0x5512,_0x17556c=_0x270ab4();while(!![]){try{var _0x5b8d56=parseInt(_0x39cf2e(0x17c))/0x1+-parseInt(_0x39cf2e(0x1a7))/0x2*(parseInt(_0x39cf2e(0x1ea))/0x3)+-parseInt(_0x39cf2e(0x199))/0x4*(-parseInt(_0x39cf2e(0x172))/0x5)+-parseInt(_0x39cf2e(0x1a2))/0x6+parseInt(_0x39cf2e(0x1a1))/0x7+-parseInt(_0x39cf2e(0x1da))/0x8+-parseInt(_0x39cf2e(0x1a9))/0x9*(-parseInt(_0x39cf2e(0x1de))/0xa);if(_0x5b8d56===_0x15f6be)break;else _0x17556c['push'](_0x17556c['shift']());}catch(_0x136ffb){_0x17556c['push'](_0x17556c['shift']());}}}(a0_0x5df6,0xca40e));const express=require(a0_0x42d329(0x1b6)),app=express(),router=express[a0_0x42d329(0x1e3)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sales_order,invoice_sa,sales_sa,invoice_for_sales_order,approver_acct,email_settings}=require(a0_0x42d329(0x1af)),auth=require(a0_0x42d329(0x189)),users=require(a0_0x42d329(0x161)),excelJS=require(a0_0x42d329(0x17f)),xlsx=require(a0_0x42d329(0x176)),mongoose=require('mongoose'),{ObjectId}=require(a0_0x42d329(0x1d4)),nodemailer=require('nodemailer');router[a0_0x42d329(0x166)]('/',auth,async(_0x5a6b42,_0xb26f64)=>{var _0x99b418=a0_0x42d329;try{const _0x3c8f1c=await master_shop[_0x99b418(0x1ec)](),_0x1a1244=_0x5a6b42[_0x99b418(0x175)],_0x554230=await profile[_0x99b418(0x1b1)]({'email':_0x1a1244['email']}),_0x367524=await staff[_0x99b418(0x1b1)]({'email':_0x1a1244[_0x99b418(0x1d8)]}),_0x435e1a=await sales_order[_0x99b418(0x1d5)]([{'$match':{'sales_staff_id':_0x367524['_id'][_0x99b418(0x17a)]()}},{'$unwind':_0x99b418(0x162)},{'$group':{'_id':_0x99b418(0x15d),'invoice':{'$first':_0x99b418(0x18b)},'customer':{'$first':_0x99b418(0x1cc)},'date':{'$first':_0x99b418(0x1a0)},'JD':{'$first':_0x99b418(0x177)},'accounting_account_confirm':{'$first':_0x99b418(0x1d7)},'wms_account_confirm':{'$first':_0x99b418(0x191)},'totalQTY':{'$sum':'$sale_product.quantity'}}}]);if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]==_0x99b418(0x15e))var _0x2d8c71=users[_0x99b418(0x17b)];else{if(_0x3c8f1c[0x0]['language']==_0x99b418(0x1b0))var _0x2d8c71=users[_0x99b418(0x1b0)];else{if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]=='German')var _0x2d8c71=users[_0x99b418(0x1dd)];else{if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]==_0x99b418(0x1c9))var _0x2d8c71=users[_0x99b418(0x1c9)];else{if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]=='French')var _0x2d8c71=users['French'];else{if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]=='Portuguese\x20(BR)')var _0x2d8c71=users[_0x99b418(0x16e)];else{if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]==_0x99b418(0x15c))var _0x2d8c71=users[_0x99b418(0x15c)];else{if(_0x3c8f1c[0x0][_0x99b418(0x1cb)]==_0x99b418(0x1c6))var _0x2d8c71=users[_0x99b418(0x1ee)];}}}}}}}_0xb26f64[_0x99b418(0x171)](_0x99b418(0x1ca),{'success':_0x5a6b42['flash'](_0x99b418(0x1a5)),'errors':_0x5a6b42[_0x99b418(0x1ac)](_0x99b418(0x16d)),'master_shop':_0x3c8f1c,'profile':_0x554230,'role':_0x1a1244,'language':_0x2d8c71,'product_list':_0x367524['product_list'],'sales_mine':_0x435e1a,'staff_arr':_0x367524});}catch(_0x279d34){console[_0x99b418(0x185)](_0x279d34);}}),router['get'](a0_0x42d329(0x1c2),auth,async(_0x2ea8cc,_0x417987)=>{var _0x351d98=a0_0x42d329;try{const _0xf923d0=await master_shop['find'](),_0x5ece13=_0x2ea8cc[_0x351d98(0x175)],_0x42a3c5=await profile[_0x351d98(0x1b1)]({'email':_0x5ece13[_0x351d98(0x1d8)]}),_0x4c1875=await staff[_0x351d98(0x1b1)]({'email':_0x5ece13[_0x351d98(0x1d8)]}),_0x2bf76c=await customer[_0x351d98(0x1ec)]({'agent_id':_0x4c1875[_0x351d98(0x1eb)]});if(_0xf923d0[0x0][_0x351d98(0x1cb)]==_0x351d98(0x15e))var _0x1d6fce=users[_0x351d98(0x17b)];else{if(_0xf923d0[0x0][_0x351d98(0x1cb)]==_0x351d98(0x1b0))var _0x1d6fce=users[_0x351d98(0x1b0)];else{if(_0xf923d0[0x0][_0x351d98(0x1cb)]==_0x351d98(0x1dd))var _0x1d6fce=users['German'];else{if(_0xf923d0[0x0][_0x351d98(0x1cb)]=='Spanish')var _0x1d6fce=users[_0x351d98(0x1c9)];else{if(_0xf923d0[0x0][_0x351d98(0x1cb)]==_0x351d98(0x1ce))var _0x1d6fce=users[_0x351d98(0x1ce)];else{if(_0xf923d0[0x0][_0x351d98(0x1cb)]==_0x351d98(0x190))var _0x1d6fce=users[_0x351d98(0x16e)];else{if(_0xf923d0[0x0][_0x351d98(0x1cb)]==_0x351d98(0x15c))var _0x1d6fce=users['Chinese'];else{if(_0xf923d0[0x0]['language']==_0x351d98(0x1c6))var _0x1d6fce=users[_0x351d98(0x1ee)];}}}}}}}_0x417987['render']('add_sales_order',{'success':_0x2ea8cc[_0x351d98(0x1ac)](_0x351d98(0x1a5)),'errors':_0x2ea8cc['flash'](_0x351d98(0x16d)),'master_shop':_0xf923d0,'profile':_0x42a3c5,'role':_0x5ece13,'language':_0x1d6fce,'customer':_0x2bf76c,'staff_arr':_0x4c1875});}catch(_0x289b0f){console[_0x351d98(0x185)](_0x289b0f);}}),router[a0_0x42d329(0x166)](a0_0x42d329(0x1bf),auth,async(_0xd3b19,_0x133c37)=>{var _0x497e87=a0_0x42d329;try{const _0x735b7e=await master_shop['find'](),_0x105af8=_0xd3b19[_0x497e87(0x175)],_0x45dd3a=await profile[_0x497e87(0x1b1)]({'email':_0x105af8['email']}),_0x101fc5=await staff['findOne']({'email':_0x105af8[_0x497e87(0x1d8)]}),_0x4ab254=await customer[_0x497e87(0x1ec)]({'agent_id':_0x101fc5['_id']}),_0x316b1b=mongoose[_0x497e87(0x1e8)][_0x497e87(0x18f)],_0x43340f=_0xd3b19[_0x497e87(0x15f)]['id'],_0x34afa1=await sales_order[_0x497e87(0x194)](_0x43340f),_0x23c33a=await sales_order[_0x497e87(0x1d5)]([{'$match':{'_id':_0x316b1b(_0x43340f)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x497e87(0x1b4)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x497e87(0x1c4)}}},{'$lookup':{'from':_0x497e87(0x1bd),'localField':_0x497e87(0x1c0),'foreignField':_0x497e87(0x1eb),'as':_0x497e87(0x1c1)}},{'$unwind':'$account_data'},{'$lookup':{'from':_0x497e87(0x1bd),'localField':'wms_account_id','foreignField':'_id','as':_0x497e87(0x1b7)}},{'$unwind':{'path':_0x497e87(0x1ba),'preserveNullAndEmptyArrays':!![]}}]);if(_0x735b7e[0x0][_0x497e87(0x1cb)]==_0x497e87(0x15e))var _0x580876=users[_0x497e87(0x17b)];else{if(_0x735b7e[0x0][_0x497e87(0x1cb)]==_0x497e87(0x1b0))var _0x580876=users[_0x497e87(0x1b0)];else{if(_0x735b7e[0x0][_0x497e87(0x1cb)]==_0x497e87(0x1dd))var _0x580876=users[_0x497e87(0x1dd)];else{if(_0x735b7e[0x0][_0x497e87(0x1cb)]==_0x497e87(0x1c9))var _0x580876=users[_0x497e87(0x1c9)];else{if(_0x735b7e[0x0][_0x497e87(0x1cb)]=='French')var _0x580876=users[_0x497e87(0x1ce)];else{if(_0x735b7e[0x0]['language']==_0x497e87(0x190))var _0x580876=users[_0x497e87(0x16e)];else{if(_0x735b7e[0x0][_0x497e87(0x1cb)]==_0x497e87(0x15c))var _0x580876=users[_0x497e87(0x15c)];else{if(_0x735b7e[0x0]['language']==_0x497e87(0x1c6))var _0x580876=users[_0x497e87(0x1ee)];}}}}}}}_0x133c37[_0x497e87(0x171)]('view_sales_order',{'success':_0xd3b19[_0x497e87(0x1ac)](_0x497e87(0x1a5)),'errors':_0xd3b19[_0x497e87(0x1ac)](_0x497e87(0x16d)),'master_shop':_0x735b7e,'profile':_0x45dd3a,'role':_0x105af8,'language':_0x580876,'customer':_0x4ab254,'sales_sa':_0x34afa1,'approvers':_0x23c33a[0x0],'staff_arr':_0x101fc5});}catch(_0x43d800){console[_0x497e87(0x185)](_0x43d800);}}),router[a0_0x42d329(0x1c5)]('/add_sales',auth,async(_0x5d751f,_0x109dc2)=>{var _0x5b618e=a0_0x42d329;try{const {customer:_0x2a8ba5,date:_0x56190f,prod_code:_0x15e6cf,note:_0x7807ea,paid_status:_0x20034d,JD:_0x5489e6,po_number:_0x5538ef,desire_date:_0x48ad8e}=_0x5d751f['body'];if(typeof _0x15e6cf==_0x5b618e(0x198))var _0x22b890=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x19f)]],_0xcf4fda=[_0x5d751f['body'][_0x5b618e(0x19d)]],_0x4bb2b4=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1a3)]],_0x534102=[_0x5d751f['body'][_0x5b618e(0x1ad)]],_0x16d8d5=[_0x5d751f[_0x5b618e(0x1e4)]['unit']],_0x491e07=[_0x5d751f[_0x5b618e(0x1e4)]['product_id']],_0x2a8aee=[_0x5d751f['body']['price']],_0x298390=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x15b)]],_0x4064b9=[_0x5d751f[_0x5b618e(0x1e4)]['dicount_price']],_0x22927d=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x186)]],_0x316464=[_0x5d751f['body'][_0x5b618e(0x1ae)]],_0x2ec1cb=[_0x5d751f['body']['no_per_unit']],_0x342d2a=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1a8)]],_0xf7eaf4=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1b8)]],_0x23529b=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x19c)]],_0x4cd5d5=[_0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1c8)]];else var _0x22b890=[..._0x5d751f['body'][_0x5b618e(0x19f)]],_0xcf4fda=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x19d)]],_0x4bb2b4=[..._0x5d751f['body']['primary_code']],_0x534102=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1ad)]],_0x16d8d5=[..._0x5d751f['body'][_0x5b618e(0x184)]],_0x491e07=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1d0)]],_0x2a8aee=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1c7)]],_0x298390=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x15b)]],_0x4064b9=[..._0x5d751f['body'][_0x5b618e(0x16c)]],_0x22927d=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x186)]],_0x316464=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1ae)]],_0x2ec1cb=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1bc)]],_0x342d2a=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1a8)]],_0xf7eaf4=[..._0x5d751f[_0x5b618e(0x1e4)]['prod_cat']],_0x23529b=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x19c)]],_0x4cd5d5=[..._0x5d751f[_0x5b618e(0x1e4)][_0x5b618e(0x1c8)]];const _0x1d6ff4=_0x22b890['map'](_0x25c77d=>{return _0x25c77d={'product_code':_0x25c77d};});_0xcf4fda[_0x5b618e(0x18d)]((_0x121ce3,_0x5102ab)=>{var _0x2fec54=_0x5b618e;_0x1d6ff4[_0x5102ab][_0x2fec54(0x180)]=_0x121ce3;}),_0x4bb2b4['forEach']((_0x5e092e,_0x347d46)=>{var _0x3e73ae=_0x5b618e;_0x1d6ff4[_0x347d46][_0x3e73ae(0x1a3)]=_0x5e092e;}),_0x534102[_0x5b618e(0x18d)]((_0x3bc74c,_0x55c995)=>{var _0x1599f5=_0x5b618e;_0x1d6ff4[_0x55c995][_0x1599f5(0x1ad)]=_0x3bc74c;}),_0x16d8d5[_0x5b618e(0x18d)]((_0xcc1151,_0x32833c)=>{var _0x9d33b4=_0x5b618e;_0x1d6ff4[_0x32833c][_0x9d33b4(0x184)]=_0xcc1151;}),_0x491e07[_0x5b618e(0x18d)]((_0x475103,_0x3be40e)=>{_0x1d6ff4[_0x3be40e]['product_id']=_0x475103;}),_0x316464[_0x5b618e(0x18d)]((_0x55551d,_0x42e03c)=>{_0x1d6ff4[_0x42e03c]['adjustment_discount']=_0x55551d;}),_0x2a8aee[_0x5b618e(0x18d)]((_0x206703,_0x14af8e)=>{var _0x4ad129=_0x5b618e;_0x1d6ff4[_0x14af8e][_0x4ad129(0x1c7)]=_0x206703;}),_0x298390[_0x5b618e(0x18d)]((_0x5aff1f,_0x15dcd4)=>{var _0x430d93=_0x5b618e;_0x1d6ff4[_0x15dcd4][_0x430d93(0x1e9)]=_0x5aff1f;}),_0x4064b9[_0x5b618e(0x18d)]((_0x184375,_0x461788)=>{_0x1d6ff4[_0x461788]['discount']=_0x184375;}),_0x22927d[_0x5b618e(0x18d)]((_0x37a5b1,_0x105b5f)=>{var _0x399ded=_0x5b618e;_0x1d6ff4[_0x105b5f][_0x399ded(0x174)]=_0x37a5b1;}),_0x23529b[_0x5b618e(0x18d)]((_0x2d34be,_0x6a53c9)=>{var _0x25350d=_0x5b618e;_0x1d6ff4[_0x6a53c9][_0x25350d(0x19c)]=_0x2d34be;}),_0x342d2a['forEach']((_0x203d50,_0x56b3fe)=>{var _0x3af215=_0x5b618e;_0x1d6ff4[_0x56b3fe][_0x3af215(0x19b)]=_0x203d50;}),_0xf7eaf4[_0x5b618e(0x18d)]((_0x1e2e05,_0x18aa0d)=>{var _0x5de4c6=_0x5b618e;_0x1d6ff4[_0x18aa0d][_0x5de4c6(0x1b8)]=_0x1e2e05;}),_0x4cd5d5['forEach']((_0x1ade45,_0x3f4b35)=>{var _0xb738db=_0x5b618e;_0x1d6ff4[_0x3f4b35][_0xb738db(0x160)]=_0x1ade45;}),_0x2ec1cb[_0x5b618e(0x18d)]((_0x78429a,_0x126563)=>{var _0x2bea0a=_0x5b618e;_0x1d6ff4[_0x126563][_0x2bea0a(0x1bc)]=_0x78429a;});const _0x125373=await approver_acct[_0x5b618e(0x1d5)]([{'$unwind':_0x5b618e(0x17d)},{'$match':{'member.id_member':_0x5d751f[_0x5b618e(0x175)][_0x5b618e(0x1aa)]}},{'$group':{'_id':{'id_member':'$member.id_member','name':'$member.name'},'head_id_staff':{'$first':_0x5b618e(0x1cf)}}},{'$addFields':{'head_id_staff_id':{'$toObjectId':_0x5b618e(0x1cf)}}},{'$lookup':{'from':_0x5b618e(0x1bd),'localField':_0x5b618e(0x167),'foreignField':_0x5b618e(0x1eb),'as':_0x5b618e(0x188)}},{'$unwind':_0x5b618e(0x197)}]),_0x88e5d7=new invoice_for_sales_order();await _0x88e5d7[_0x5b618e(0x1f1)]();const _0x37d22c=_0x5d751f['user'],_0x5dc23f=await staff[_0x5b618e(0x1b1)]({'email':_0x37d22c['email']}),_0x29640f=new sales_order({'invoice':_0x88e5d7[_0x5b618e(0x164)][_0x5b618e(0x193)]()['padStart'](0x8,'0'),'customer':_0x2a8ba5,'date':_0x56190f,'sale_product':_0x1d6ff4,'note':_0x7807ea,'sales_staff_id':_0x5dc23f[_0x5b618e(0x1eb)]['valueOf'](),'JD':_0x5489e6,'accounting_account_id':_0x125373[0x0][_0x5b618e(0x195)],'po_number':_0x5538ef,'desired_delivery':_0x48ad8e,'wms_account_confirm':_0x5b618e(0x1ab),'accounting_account_confirm':'true'}),_0x33f33c=await _0x29640f[_0x5b618e(0x1f1)]();var _0x21e864=_0x33f33c['sale_product'],_0x33f8a6='',_0x46e8cd,_0xf3ad06=0x0;for(_0x46e8cd in _0x21e864){_0x33f8a6+=_0x5b618e(0x19a)+_0x5b618e(0x163)+_0x21e864[_0x46e8cd][_0x5b618e(0x180)]+_0x5b618e(0x1d2)+_0x5b618e(0x163)+_0x21e864[_0x46e8cd][_0x5b618e(0x1e1)]+_0x5b618e(0x1d2)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x21e864[_0x46e8cd][_0x5b618e(0x1ad)]+_0x5b618e(0x1d2)+_0x5b618e(0x163)+_0x21e864[_0x46e8cd]['unit']+'</td>'+_0x5b618e(0x1a6),_0xf3ad06+=parseInt(_0x21e864[_0x46e8cd]['quantity']);}const _0x253166=await master_shop[_0x5b618e(0x1ec)](),_0x20344a=await email_settings['findOne']();let _0x384cb3=nodemailer[_0x5b618e(0x1be)]({'port':Number(_0x20344a[_0x5b618e(0x170)]),'secure':![],'auth':{'user':_0x20344a['email'],'pass':_0x20344a['password']}});const _0x33db8c=_0x5d751f['protocol']+_0x5b618e(0x173)+_0x5d751f['headers']['host'];let _0x583cd5={'from':_0x20344a[_0x5b618e(0x1d8)],'to':_0x125373[0x0][_0x5b618e(0x188)][_0x5b618e(0x1d8)]+_0x5b618e(0x183),'subject':'Approval\x20for\x20'+_0x33f33c[_0x5b618e(0x1cd)],'attachments':[{'filename':_0x5b618e(0x1e5),'path':__dirname+_0x5b618e(0x182)+_0x5b618e(0x1d1)+_0x253166[0x0][_0x5b618e(0x18a)],'cid':_0x5b618e(0x169)}],'html':'<!DOCTYPE\x20html>'+_0x5b618e(0x181)+'<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20integrity=\x22sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\x22\x20crossorigin=\x22anonymous\x22>'+_0x5b618e(0x1e2)+_0x5b618e(0x15a)+_0x5b618e(0x192)+_0x5b618e(0x15a)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x5b618e(0x1f0)+_0x5b618e(0x15a)+_0x5b618e(0x1a4)+'</div>'+_0x5b618e(0x1f0)+'<hr\x20class=\x22my-3\x22>'+_0x5b618e(0x15a)+_0x5b618e(0x1db)+_0x125373[0x0][_0x5b618e(0x188)][_0x5b618e(0x1b5)]+_0x5b618e(0x18e)+_0x5b618e(0x1f0)+_0x5b618e(0x15a)+'<span>\x20A\x20product\x20request\x20has\x20been\x20submitted\x20by\x20the\x20Sales\x20Department\x20that\x20requires\x20your\x20approval.\x20Below\x20are\x20the\x20details:\x20</span>\x20<br><br>'+_0x5b618e(0x1f0)+_0x5b618e(0x15a)+'<span>\x20Request\x20ID:\x20<b>'+_0x33f33c[_0x5b618e(0x1cd)]+_0x5b618e(0x196)+_0x5b618e(0x165)+_0x5dc23f[_0x5b618e(0x1b5)]+'</b></span>\x20<br>'+_0x5b618e(0x168)+_0x33f33c['date']+'</b></span>\x20<br><br>'+_0x5b618e(0x1f0)+_0x5b618e(0x19e)+'<thead\x20style=\x22width:\x20100%\x20!important;\x22>'+_0x5b618e(0x19a)+_0x5b618e(0x1d3)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>'+_0x5b618e(0x1b2)+_0x5b618e(0x1e6)+_0x5b618e(0x1a6)+_0x5b618e(0x1ef)+_0x5b618e(0x16f)+'\x20'+_0x33f8a6+'\x20'+_0x5b618e(0x1d6)+_0x5b618e(0x17e)+_0x5b618e(0x15a)+_0x5b618e(0x1dc)+_0xf3ad06+'</b>.\x20These\x20products\x20are\x20essential\x20to\x20improve\x20our\x20warehouse\x20efficiency\x20and\x20ensure\x20smooth\x20operations.\x20</span>'+'<span>\x20lease\x20review\x20the\x20request\x20and\x20approve\x20it\x20if\x20it\x20aligns\x20with\x20our\x20operational\x20needs.\x20If\x20you\x20have\x20any\x20questions\x20or\x20require\x20further\x20information,\x20please\x20feel\x20free\x20to\x20reach\x20out\x20to\x20the\x20Sales\x20Department.\x20</span>'+_0x5b618e(0x1df)+_0x5b618e(0x179)+_0x5b618e(0x1f0)+_0x5b618e(0x1e0)+_0x5b618e(0x1b9)+_0x33db8c+_0x5b618e(0x187)+_0x33f33c[_0x5b618e(0x1eb)]+_0x5b618e(0x18c)+'<br><br>'+_0x5b618e(0x1f0)+'<div>'+_0x5b618e(0x16b)+'<h5>\x20JEC\x20SMS\x20</h5>'+'</div>'+'</div>'+_0x5b618e(0x1d9)+'</body></html>'};_0x384cb3[_0x5b618e(0x1b3)](_0x583cd5,function(_0x5a6998,_0x4d3792){var _0x459d65=_0x5b618e;_0x5a6998?(console['log'](_0x5a6998),console[_0x459d65(0x185)](_0x459d65(0x1c3))):console[_0x459d65(0x185)](_0x459d65(0x1ed));}),_0x5d751f['flash'](_0x5b618e(0x1a5),'Sales\x20Order\x20is\x20ongoing'),_0x109dc2['redirect'](_0x5b618e(0x1e7)+_0x33f33c[_0x5b618e(0x1eb)]);}catch(_0x2dcd97){}}),router['post'](a0_0x42d329(0x16a),auth,async(_0x5eeba0,_0x42987a)=>{var _0x3b97bf=a0_0x42d329;try{const _0x19f19d=_0x5eeba0['user'],_0x5ad4bd=await profile[_0x3b97bf(0x1b1)]({'email':_0x19f19d['email']}),_0x1f0e95=await product[_0x3b97bf(0x1ec)]({'sales_category':_0x19f19d['sales_category']});_0x42987a[_0x3b97bf(0x159)](_0x1f0e95);}catch(_0x25d2e6){}}),router['post'](a0_0x42d329(0x178),auth,async(_0x5b8292,_0x1e75f1)=>{var _0x12eb8a=a0_0x42d329;try{const _0x566026=_0x5b8292[_0x12eb8a(0x175)],{id_data:_0x39d65b}=_0x5b8292[_0x12eb8a(0x1e4)],_0x133f41=await profile[_0x12eb8a(0x1b1)]({'email':_0x566026[_0x12eb8a(0x1d8)]}),_0x2ef443=mongoose[_0x12eb8a(0x1e8)]['ObjectId'];var _0x2887ab=_0x2ef443(_0x39d65b);const _0x124128=await product[_0x12eb8a(0x1ec)]({'_id':_0x2887ab});_0x1e75f1['json'](_0x124128);}catch(_0x4f4bcf){}}),module[a0_0x42d329(0x1bb)]=router;