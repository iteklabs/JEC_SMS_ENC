var a0_0x4aa6bd=a0_0x9f5e;(function(_0x296892,_0x5d73c6){var _0x4afd48=a0_0x9f5e,_0x3cdbfc=_0x296892();while(!![]){try{var _0x5541db=-parseInt(_0x4afd48(0x13f))/0x1*(-parseInt(_0x4afd48(0xfd))/0x2)+parseInt(_0x4afd48(0xde))/0x3*(-parseInt(_0x4afd48(0xfa))/0x4)+parseInt(_0x4afd48(0x14f))/0x5+-parseInt(_0x4afd48(0xc3))/0x6*(-parseInt(_0x4afd48(0x139))/0x7)+-parseInt(_0x4afd48(0x13d))/0x8*(parseInt(_0x4afd48(0x12c))/0x9)+parseInt(_0x4afd48(0x15e))/0xa+-parseInt(_0x4afd48(0x108))/0xb*(parseInt(_0x4afd48(0x15f))/0xc);if(_0x5541db===_0x5d73c6)break;else _0x3cdbfc['push'](_0x3cdbfc['shift']());}catch(_0x86bd29){_0x3cdbfc['push'](_0x3cdbfc['shift']());}}}(a0_0x55d8,0xac8f3));const express=require(a0_0x4aa6bd(0x150)),app=express(),router=express[a0_0x4aa6bd(0x145)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sales_order,invoice_sa,sales_sa,invoice_for_sales_order,approver_acct,email_settings}=require(a0_0x4aa6bd(0xfc)),auth=require(a0_0x4aa6bd(0x103)),users=require(a0_0x4aa6bd(0x164)),excelJS=require('exceljs'),xlsx=require(a0_0x4aa6bd(0x14d)),mongoose=require(a0_0x4aa6bd(0x125)),{ObjectId}=require('mongodb'),nodemailer=require(a0_0x4aa6bd(0x128));function a0_0x9f5e(_0x52f7a9,_0xd2ad5a){var _0x55d8bd=a0_0x55d8();return a0_0x9f5e=function(_0x9f5eeb,_0x15a8f4){_0x9f5eeb=_0x9f5eeb-0xbd;var _0x230f38=_0x55d8bd[_0x9f5eeb];return _0x230f38;},a0_0x9f5e(_0x52f7a9,_0xd2ad5a);}router['get']('/',auth,async(_0x346252,_0x4e128d)=>{var _0x31673b=a0_0x4aa6bd;try{const _0x418278=await master_shop[_0x31673b(0x163)](),_0x253682=_0x346252[_0x31673b(0x109)],_0x217ee6=await profile[_0x31673b(0xef)]({'email':_0x253682[_0x31673b(0xd3)]}),_0x43caa6=await staff[_0x31673b(0xef)]({'email':_0x253682[_0x31673b(0xd3)]}),_0x1a7a79=await sales_order[_0x31673b(0xf7)]([{'$match':{'sales_staff_id':_0x43caa6[_0x31673b(0xe8)][_0x31673b(0x14e)]()}},{'$unwind':_0x31673b(0x133)},{'$group':{'_id':_0x31673b(0x165),'invoice':{'$first':'$invoice'},'customer':{'$first':_0x31673b(0xca)},'date':{'$first':_0x31673b(0xc7)},'JD':{'$first':_0x31673b(0x153)},'accounting_account_confirm':{'$first':_0x31673b(0xdd)},'wms_account_confirm':{'$first':_0x31673b(0x12d)},'totalQTY':{'$sum':_0x31673b(0x10c)}}}]);if(_0x418278[0x0]['language']=='English\x20(US)')var _0x3346f1=users['English'];else{if(_0x418278[0x0][_0x31673b(0x13b)]=='Hindi')var _0x3346f1=users[_0x31673b(0x14a)];else{if(_0x418278[0x0][_0x31673b(0x13b)]==_0x31673b(0x15a))var _0x3346f1=users['German'];else{if(_0x418278[0x0][_0x31673b(0x13b)]=='Spanish')var _0x3346f1=users[_0x31673b(0x166)];else{if(_0x418278[0x0][_0x31673b(0x13b)]=='French')var _0x3346f1=users['French'];else{if(_0x418278[0x0][_0x31673b(0x13b)]==_0x31673b(0xcc))var _0x3346f1=users['Portuguese'];else{if(_0x418278[0x0]['language']==_0x31673b(0xdf))var _0x3346f1=users[_0x31673b(0xdf)];else{if(_0x418278[0x0][_0x31673b(0x13b)]=='Arabic\x20(ae)')var _0x3346f1=users[_0x31673b(0x138)];}}}}}}}_0x4e128d[_0x31673b(0xc4)](_0x31673b(0xd1),{'success':_0x346252[_0x31673b(0x110)](_0x31673b(0x132)),'errors':_0x346252[_0x31673b(0x110)](_0x31673b(0x100)),'master_shop':_0x418278,'profile':_0x217ee6,'role':_0x253682,'language':_0x3346f1,'product_list':_0x43caa6[_0x31673b(0x152)],'sales_mine':_0x1a7a79,'staff_arr':_0x43caa6});}catch(_0x4016e2){console[_0x31673b(0x121)](_0x4016e2);}}),router[a0_0x4aa6bd(0x135)](a0_0x4aa6bd(0xd5),auth,async(_0x403689,_0x365f2b)=>{var _0x2fc47f=a0_0x4aa6bd;try{const _0x112d10=await master_shop[_0x2fc47f(0x163)](),_0x2006ba=_0x403689[_0x2fc47f(0x109)],_0x2a393e=await profile[_0x2fc47f(0xef)]({'email':_0x2006ba['email']}),_0x25ba18=await staff[_0x2fc47f(0xef)]({'email':_0x2006ba['email']}),_0x5217f5=await customer[_0x2fc47f(0x163)]({'agent_id':_0x25ba18['_id']});if(_0x112d10[0x0][_0x2fc47f(0x13b)]==_0x2fc47f(0x10f))var _0x8fc338=users[_0x2fc47f(0x161)];else{if(_0x112d10[0x0][_0x2fc47f(0x13b)]=='Hindi')var _0x8fc338=users['Hindi'];else{if(_0x112d10[0x0]['language']==_0x2fc47f(0x15a))var _0x8fc338=users['German'];else{if(_0x112d10[0x0][_0x2fc47f(0x13b)]==_0x2fc47f(0x166))var _0x8fc338=users[_0x2fc47f(0x166)];else{if(_0x112d10[0x0][_0x2fc47f(0x13b)]==_0x2fc47f(0xbd))var _0x8fc338=users[_0x2fc47f(0xbd)];else{if(_0x112d10[0x0][_0x2fc47f(0x13b)]=='Portuguese\x20(BR)')var _0x8fc338=users[_0x2fc47f(0x11d)];else{if(_0x112d10[0x0][_0x2fc47f(0x13b)]==_0x2fc47f(0xdf))var _0x8fc338=users['Chinese'];else{if(_0x112d10[0x0][_0x2fc47f(0x13b)]=='Arabic\x20(ae)')var _0x8fc338=users[_0x2fc47f(0x138)];}}}}}}}_0x365f2b[_0x2fc47f(0xc4)](_0x2fc47f(0x120),{'success':_0x403689[_0x2fc47f(0x110)]('success'),'errors':_0x403689[_0x2fc47f(0x110)]('errors'),'master_shop':_0x112d10,'profile':_0x2a393e,'role':_0x2006ba,'language':_0x8fc338,'customer':_0x5217f5,'staff_arr':_0x25ba18});}catch(_0x5d91d9){console[_0x2fc47f(0x121)](_0x5d91d9);}}),router[a0_0x4aa6bd(0x135)](a0_0x4aa6bd(0x114),auth,async(_0x44e4e6,_0xe988e8)=>{var _0x44ec22=a0_0x4aa6bd;try{const _0x581744=await master_shop[_0x44ec22(0x163)](),_0x8661ed=_0x44e4e6['user'],_0x1bdf8b=await profile[_0x44ec22(0xef)]({'email':_0x8661ed[_0x44ec22(0xd3)]}),_0x1434ea=await staff[_0x44ec22(0xef)]({'email':_0x8661ed['email']}),_0x5a3c36=await customer[_0x44ec22(0x163)]({'agent_id':_0x1434ea['_id']}),_0x5bafb9=mongoose[_0x44ec22(0xf6)][_0x44ec22(0x156)],_0x4da6f3=_0x44e4e6['params']['id'],_0x38549b=await sales_order[_0x44ec22(0xf5)](_0x4da6f3),_0x2710a0=await sales_order[_0x44ec22(0xf7)]([{'$match':{'_id':_0x5bafb9(_0x4da6f3)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x44ec22(0x12e)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x44ec22(0x106)}}},{'$lookup':{'from':_0x44ec22(0xf2),'localField':_0x44ec22(0x113),'foreignField':_0x44ec22(0xe8),'as':'account_data'}},{'$unwind':_0x44ec22(0xf1)},{'$lookup':{'from':_0x44ec22(0xf2),'localField':_0x44ec22(0xff),'foreignField':_0x44ec22(0xe8),'as':_0x44ec22(0x134)}},{'$unwind':{'path':_0x44ec22(0x107),'preserveNullAndEmptyArrays':!![]}}]);if(_0x581744[0x0][_0x44ec22(0x13b)]==_0x44ec22(0x10f))var _0x29e862=users[_0x44ec22(0x161)];else{if(_0x581744[0x0][_0x44ec22(0x13b)]=='Hindi')var _0x29e862=users[_0x44ec22(0x14a)];else{if(_0x581744[0x0][_0x44ec22(0x13b)]=='German')var _0x29e862=users[_0x44ec22(0x15a)];else{if(_0x581744[0x0][_0x44ec22(0x13b)]==_0x44ec22(0x166))var _0x29e862=users['Spanish'];else{if(_0x581744[0x0][_0x44ec22(0x13b)]==_0x44ec22(0xbd))var _0x29e862=users['French'];else{if(_0x581744[0x0][_0x44ec22(0x13b)]=='Portuguese\x20(BR)')var _0x29e862=users[_0x44ec22(0x11d)];else{if(_0x581744[0x0]['language']=='Chinese')var _0x29e862=users[_0x44ec22(0xdf)];else{if(_0x581744[0x0][_0x44ec22(0x13b)]==_0x44ec22(0x137))var _0x29e862=users[_0x44ec22(0x138)];}}}}}}}_0xe988e8['render'](_0x44ec22(0xc8),{'success':_0x44e4e6['flash'](_0x44ec22(0x132)),'errors':_0x44e4e6[_0x44ec22(0x110)](_0x44ec22(0x100)),'master_shop':_0x581744,'profile':_0x1bdf8b,'role':_0x8661ed,'language':_0x29e862,'customer':_0x5a3c36,'sales_sa':_0x38549b,'approvers':_0x2710a0[0x0],'staff_arr':_0x1434ea});}catch(_0x1cee26){console[_0x44ec22(0x121)](_0x1cee26);}}),router[a0_0x4aa6bd(0x10d)](a0_0x4aa6bd(0xd5),auth,async(_0x213460,_0x48c3a2)=>{var _0x176356=a0_0x4aa6bd;try{const {customer:_0x6d92dc,date:_0x4b654d,prod_code:_0x18dab0,note:_0x2fb666,paid_status:_0x206f9d,JD:_0x288cf3,po_number:_0x5aee3e,desire_date:_0x1a6931}=_0x213460[_0x176356(0xe2)];if(typeof _0x18dab0=='string')var _0x35cf0=[_0x213460[_0x176356(0xe2)][_0x176356(0x136)]],_0x34c71f=[_0x213460['body'][_0x176356(0x122)]],_0x260b59=[_0x213460[_0x176356(0xe2)][_0x176356(0x112)]],_0x13ffc4=[_0x213460[_0x176356(0xe2)][_0x176356(0xbe)]],_0x4c0a7d=[_0x213460[_0x176356(0xe2)][_0x176356(0x15d)]],_0x3cacab=[_0x213460['body'][_0x176356(0xd7)]],_0x3b1baf=[_0x213460['body'][_0x176356(0xc1)]],_0xebb19f=[_0x213460[_0x176356(0xe2)]['totalPrice']],_0x2adeda=[_0x213460[_0x176356(0xe2)][_0x176356(0xeb)]],_0x188464=[_0x213460['body'][_0x176356(0xec)]],_0x3f1eb1=[_0x213460['body'][_0x176356(0xf3)]],_0x360e65=[_0x213460['body'][_0x176356(0x14b)]],_0x4474c5=[_0x213460[_0x176356(0xe2)][_0x176356(0x11c)]],_0x1c3410=[_0x213460[_0x176356(0xe2)][_0x176356(0x14c)]],_0x4b210d=[_0x213460[_0x176356(0xe2)]['secondary_unit']],_0x129eec=[_0x213460[_0x176356(0xe2)][_0x176356(0xf9)]];else var _0x35cf0=[..._0x213460[_0x176356(0xe2)][_0x176356(0x136)]],_0x34c71f=[..._0x213460[_0x176356(0xe2)][_0x176356(0x122)]],_0x260b59=[..._0x213460[_0x176356(0xe2)][_0x176356(0x112)]],_0x13ffc4=[..._0x213460['body'][_0x176356(0xbe)]],_0x4c0a7d=[..._0x213460[_0x176356(0xe2)]['unit']],_0x3cacab=[..._0x213460[_0x176356(0xe2)][_0x176356(0xd7)]],_0x3b1baf=[..._0x213460[_0x176356(0xe2)][_0x176356(0xc1)]],_0xebb19f=[..._0x213460[_0x176356(0xe2)][_0x176356(0x158)]],_0x2adeda=[..._0x213460[_0x176356(0xe2)][_0x176356(0xeb)]],_0x188464=[..._0x213460[_0x176356(0xe2)][_0x176356(0xec)]],_0x3f1eb1=[..._0x213460[_0x176356(0xe2)]['dicount_price_adjust']],_0x360e65=[..._0x213460[_0x176356(0xe2)][_0x176356(0x14b)]],_0x4474c5=[..._0x213460['body']['getPrimUnitNo']],_0x1c3410=[..._0x213460[_0x176356(0xe2)][_0x176356(0x14c)]],_0x4b210d=[..._0x213460[_0x176356(0xe2)][_0x176356(0xc6)]],_0x129eec=[..._0x213460[_0x176356(0xe2)]['conversion_unit']];const _0x162675=_0x35cf0[_0x176356(0x115)](_0x590af5=>{return _0x590af5={'product_code':_0x590af5};});_0x34c71f[_0x176356(0x155)]((_0x1f7d68,_0xdb7b83)=>{_0x162675[_0xdb7b83]['product_name']=_0x1f7d68;}),_0x260b59[_0x176356(0x155)]((_0x18041d,_0x48f645)=>{_0x162675[_0x48f645]['primary_code']=_0x18041d;}),_0x13ffc4[_0x176356(0x155)]((_0x342b91,_0x19a5fd)=>{var _0x3cac69=_0x176356;_0x162675[_0x19a5fd][_0x3cac69(0xbe)]=_0x342b91;}),_0x4c0a7d[_0x176356(0x155)]((_0x4a1993,_0x27ed2b)=>{var _0x4b5dc6=_0x176356;_0x162675[_0x27ed2b][_0x4b5dc6(0x15d)]=_0x4a1993;}),_0x3cacab[_0x176356(0x155)]((_0x238e9d,_0x428d5f)=>{_0x162675[_0x428d5f]['product_id']=_0x238e9d;}),_0x3f1eb1[_0x176356(0x155)]((_0x862ad9,_0x2ee08f)=>{var _0x2c5510=_0x176356;_0x162675[_0x2ee08f][_0x2c5510(0x15b)]=_0x862ad9;}),_0x3b1baf['forEach']((_0x27f851,_0x572bcb)=>{var _0x1569b3=_0x176356;_0x162675[_0x572bcb][_0x1569b3(0xc1)]=_0x27f851;}),_0xebb19f[_0x176356(0x155)]((_0x2b645d,_0xec97bf)=>{var _0x1f4106=_0x176356;_0x162675[_0xec97bf][_0x1f4106(0xe4)]=_0x2b645d;}),_0x2adeda[_0x176356(0x155)]((_0x364ce8,_0x2603ca)=>{var _0x407b0b=_0x176356;_0x162675[_0x2603ca][_0x407b0b(0x151)]=_0x364ce8;}),_0x188464[_0x176356(0x155)]((_0x4aaa98,_0x558dfb)=>{_0x162675[_0x558dfb]['isFG']=_0x4aaa98;}),_0x4b210d[_0x176356(0x155)]((_0xbce5fa,_0x231c72)=>{var _0x6fbf79=_0x176356;_0x162675[_0x231c72][_0x6fbf79(0xc6)]=_0xbce5fa;}),_0x4474c5['forEach']((_0x2ea734,_0x2f5cd4)=>{var _0x260874=_0x176356;_0x162675[_0x2f5cd4][_0x260874(0xfe)]=_0x2ea734;}),_0x1c3410[_0x176356(0x155)]((_0x47da01,_0x27f3a6)=>{var _0xb28dd8=_0x176356;_0x162675[_0x27f3a6][_0xb28dd8(0x14c)]=_0x47da01;}),_0x129eec[_0x176356(0x155)]((_0x4f51e7,_0xc8fb71)=>{var _0x2d758b=_0x176356;_0x162675[_0xc8fb71][_0x2d758b(0x144)]=_0x4f51e7;}),_0x360e65['forEach']((_0x179411,_0x33c5cd)=>{var _0x4b0b9b=_0x176356;_0x162675[_0x33c5cd][_0x4b0b9b(0x14b)]=_0x179411;});const _0x9863fa=await approver_acct[_0x176356(0xf7)]([{'$unwind':'$member'},{'$match':{'member.id_member':_0x213460[_0x176356(0x109)]['sttaff_id']}},{'$group':{'_id':{'id_member':_0x176356(0x123),'name':_0x176356(0x10e)},'head_id_staff':{'$first':'$head_id_staff'}}},{'$addFields':{'head_id_staff_id':{'$toObjectId':_0x176356(0x147)}}},{'$lookup':{'from':'staffs','localField':_0x176356(0xd8),'foreignField':'_id','as':_0x176356(0x11f)}},{'$unwind':_0x176356(0x11b)}]),_0x500c87=new invoice_for_sales_order();await _0x500c87['save']();const _0x1bd599=_0x213460[_0x176356(0x109)],_0x559161=await staff[_0x176356(0xef)]({'email':_0x1bd599[_0x176356(0xd3)]}),_0x3ca07a=new sales_order({'invoice':_0x500c87[_0x176356(0xee)]['toString']()['padStart'](0x8,'0'),'customer':_0x6d92dc,'date':_0x4b654d,'sale_product':_0x162675,'note':_0x2fb666,'sales_staff_id':_0x559161[_0x176356(0xe8)][_0x176356(0x14e)](),'JD':_0x288cf3,'accounting_account_id':_0x9863fa[0x0][_0x176356(0xfb)],'po_number':_0x5aee3e,'desired_delivery':_0x1a6931,'wms_account_confirm':_0x176356(0xd2),'accounting_account_confirm':'true'}),_0x1ef97e=await _0x3ca07a['save']();var _0x304c77=_0x1ef97e[_0x176356(0x12b)],_0x499b38='',_0x2ab0ff,_0x1bb995=0x0;for(_0x2ab0ff in _0x304c77){_0x499b38+=_0x176356(0xe0)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x304c77[_0x2ab0ff][_0x176356(0x118)]+_0x176356(0x111)+_0x176356(0x12f)+_0x304c77[_0x2ab0ff][_0x176356(0xe3)]+_0x176356(0x111)+_0x176356(0x12f)+_0x304c77[_0x2ab0ff][_0x176356(0xbe)]+_0x176356(0x111)+_0x176356(0x12f)+_0x304c77[_0x2ab0ff][_0x176356(0x15d)]+_0x176356(0x111)+_0x176356(0x129),_0x1bb995+=parseInt(_0x304c77[_0x2ab0ff][_0x176356(0xbe)]);}const _0x35080a=await master_shop['find'](),_0x25b23a=await email_settings[_0x176356(0xef)]();let _0x56f07c=nodemailer[_0x176356(0xd0)]({'port':Number(_0x25b23a[_0x176356(0xf8)]),'secure':![],'auth':{'user':_0x25b23a[_0x176356(0xd3)],'pass':_0x25b23a[_0x176356(0xdc)]}});const _0x3b1738=_0x213460[_0x176356(0xea)]+'://'+_0x213460[_0x176356(0x127)][_0x176356(0xd9)];let _0xf08bea={'from':_0x25b23a[_0x176356(0xd3)],'to':_0x9863fa[0x0]['head_staff_info'][_0x176356(0xd3)]+';christian.villamer@jakagroup.com','subject':'Approval\x20for\x20'+_0x1ef97e[_0x176356(0x160)],'attachments':[{'filename':_0x176356(0xd6),'path':__dirname+_0x176356(0x149)+_0x176356(0xcb)+_0x35080a[0x0][_0x176356(0x11a)],'cid':_0x176356(0x119)}],'html':_0x176356(0x13e)+_0x176356(0x124)+_0x176356(0x116)+_0x176356(0xcf)+_0x176356(0x157)+_0x176356(0xe6)+'<div>'+_0x176356(0x140)+'</div>'+_0x176356(0x157)+'<h2>\x20JEC\x20SMS\x20</h2>'+_0x176356(0xce)+_0x176356(0xce)+_0x176356(0xd4)+_0x176356(0x157)+_0x176356(0x11e)+_0x9863fa[0x0][_0x176356(0x11f)][_0x176356(0xe9)]+_0x176356(0x12a)+'</div>'+_0x176356(0x157)+_0x176356(0x154)+_0x176356(0xce)+_0x176356(0x157)+_0x176356(0xc5)+_0x1ef97e['invoice']+_0x176356(0xc2)+_0x176356(0x148)+_0x559161[_0x176356(0xe9)]+_0x176356(0xc2)+_0x176356(0x15c)+_0x1ef97e[_0x176356(0x101)]+'</b></span>\x20<br><br>'+_0x176356(0xce)+_0x176356(0xc0)+_0x176356(0xe7)+_0x176356(0xe0)+_0x176356(0x142)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>'+_0x176356(0x141)+_0x176356(0x159)+_0x176356(0x129)+_0x176356(0xe1)+_0x176356(0x102)+'\x20'+_0x499b38+'\x20'+_0x176356(0x10b)+_0x176356(0x104)+'<div>'+_0x176356(0xda)+_0x1bb995+_0x176356(0x117)+_0x176356(0xcd)+_0x176356(0x126)+_0x176356(0xed)+_0x176356(0xce)+_0x176356(0x162)+_0x176356(0x146)+_0x3b1738+'/accounting_approval/'+_0x1ef97e[_0x176356(0xe8)]+_0x176356(0xbf)+_0x176356(0xdb)+_0x176356(0xce)+_0x176356(0x157)+'<strong>\x20Regards\x20</strong>'+'<h5>\x20JEC\x20SMS\x20</h5>'+_0x176356(0xce)+_0x176356(0xce)+'<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\x22\x20integrity=\x22sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\x22\x20crossorigin=\x22anonymous\x22></script>'+_0x176356(0x13c)};_0x56f07c[_0x176356(0x13a)](_0xf08bea,function(_0x110a4a,_0x262ef6){var _0x5914ec=_0x176356;_0x110a4a?(console[_0x5914ec(0x121)](_0x110a4a),console[_0x5914ec(0x121)](_0x5914ec(0x131))):console[_0x5914ec(0x121)](_0x5914ec(0x143));}),_0x213460[_0x176356(0x110)](_0x176356(0x132),_0x176356(0x105)),_0x48c3a2['redirect'](_0x176356(0xf4)+_0x1ef97e['_id']);}catch(_0x2e43bb){}}),router[a0_0x4aa6bd(0x10d)](a0_0x4aa6bd(0xe5),auth,async(_0x59004e,_0x17b5d0)=>{var _0x35cbe2=a0_0x4aa6bd;try{const _0x2379b4=_0x59004e['user'],_0x461784=await profile[_0x35cbe2(0xef)]({'email':_0x2379b4[_0x35cbe2(0xd3)]}),_0x4c7ec0=await product[_0x35cbe2(0x163)]({'sales_category':_0x2379b4[_0x35cbe2(0xc9)]});_0x17b5d0[_0x35cbe2(0x10a)](_0x4c7ec0);}catch(_0x13dcfb){}}),router['post'](a0_0x4aa6bd(0x130),auth,async(_0x184ff8,_0x36b411)=>{var _0x2b23d7=a0_0x4aa6bd;try{const _0x3555ca=_0x184ff8[_0x2b23d7(0x109)],{id_data:_0x41c91c}=_0x184ff8[_0x2b23d7(0xe2)],_0x4e4816=await profile[_0x2b23d7(0xef)]({'email':_0x3555ca['email']}),_0x443741=mongoose[_0x2b23d7(0xf6)][_0x2b23d7(0x156)];var _0x2fc1a1=_0x443741(_0x41c91c);const _0xd85a47=await product[_0x2b23d7(0x163)]({'_id':_0x2fc1a1});_0x36b411[_0x2b23d7(0x10a)](_0xd85a47);}catch(_0x585945){}}),module[a0_0x4aa6bd(0xf0)]=router;function a0_0x55d8(){var _0x5cbeba=['<span>\x20A\x20product\x20request\x20has\x20been\x20submitted\x20by\x20the\x20Sales\x20Department\x20that\x20requires\x20your\x20approval.\x20Below\x20are\x20the\x20details:\x20</span>\x20<br><br>','forEach','ObjectId','<div>','totalPrice','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','German','adjustment_discount','<span>\x20Request\x20Date:\x20<b>','unit','13500330GdijuV','6707532dKgYNd','invoice','English','<div\x20style=\x22text-align:\x20center;\x22>','find','../public/language/languages.json','$_id','Spanish','French','quantity','\x22>Change\x20Status</a>','<table\x20style=\x22width:\x20100%\x20!important;\x22>','price','</b></span>\x20<br>','348nIWIWV','render','<span>\x20Request\x20ID:\x20<b>','secondary_unit','$date','view_sales_order','sales_category','$customer','/upload/','Portuguese\x20(BR)','<span>\x20lease\x20review\x20the\x20request\x20and\x20approve\x20it\x20if\x20it\x20aligns\x20with\x20our\x20operational\x20needs.\x20If\x20you\x20have\x20any\x20questions\x20or\x20require\x20further\x20information,\x20please\x20feel\x20free\x20to\x20reach\x20out\x20to\x20the\x20Sales\x20Department.\x20</span>','</div>','</head><body>','createTransport','all_sales_order','true','email','<hr\x20class=\x22my-3\x22>','/add_sales','Logo.png','product_id','head_id_staff_id','host','<br><br><span>\x20The\x20total\x20quantity\x20for\x20these\x20items\x20is\x20<b>','<br><br>','password','$accounting_account_confirm','3ouTFRz','Chinese','<tr>','</thead>','body','product_code','totalprice','/product_list','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','<thead\x20style=\x22width:\x20100%\x20!important;\x22>','_id','name','protocol','dicount_price','tmpisFG','<br><br><br>','invoice_init','findOne','exports','$account_data','staffs','dicount_price_adjust','/sales_order/view_sales/','findById','Types','aggregate','port','conversion_unit','789920EJKWxN','head_id_staff','../models/all_models','4964YvzUQd','real_qty_unit_val','wms_account_id','errors','date','<tbody\x20style=\x22text-align:\x20center;\x22>','../middleware/auth','</table>','Sales\x20Order\x20is\x20ongoing','$wms_account_id','$wms_data','33VWYVMB','user','json','</tbody>','$sale_product.quantity','post','$member.name','English\x20(US)','flash','</td>','primary_code','accounting_account_id','/view_sales/:id','map','<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20integrity=\x22sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\x22\x20crossorigin=\x22anonymous\x22>','</b>.\x20These\x20products\x20are\x20essential\x20to\x20improve\x20our\x20warehouse\x20efficiency\x20and\x20ensure\x20smooth\x20operations.\x20</span>','product_name','logo','image','$head_staff_info','getPrimUnitNo','Portuguese','<span>\x20Dear\x20<b>','head_staff_info','add_sales_order','log','prod_name','$member.id_member','<html><head><title></title>','mongoose','<span>\x20Thank\x20you\x20for\x20your\x20prompt\x20attention\x20to\x20this\x20matter.\x20</span>','headers','nodemailer','</tr>','</b>,\x20</span><br>','sale_product','9fJknzA','$wms_account_confirm','$accounting_account_id','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','/product_data','Error\x20Occurs','success','$sale_product','wms_data','get','prod_code','Arabic\x20(ae)','Arabic','136605FUESOp','sendMail','language','</body></html>','8745856ruXCUQ','<!DOCTYPE\x20html>','239UukZrz','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>','Email\x20sent\x20successfully','conversion_data','Router','<a\x20style=\x22background-color:\x20#007bff;\x20color:\x20#ffffff;\x20border:\x20none;\x20padding:\x2010px\x2020px;\x20border-radius:\x205px;\x22\x20href=\x22','$head_id_staff','<span>\x20Requested\x20By:\x20<b>','/../public','Hindi','no_per_unit','prod_cat','xlsx','valueOf','2996485dwWAQz','express','discount','product_list','$JD'];a0_0x55d8=function(){return _0x5cbeba;};return a0_0x55d8();}