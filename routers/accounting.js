function a0_0x5601(_0x529e7d,_0x18bbc9){const _0x4fec36=a0_0x4fec();return a0_0x5601=function(_0x5601ba,_0x5bd6d0){_0x5601ba=_0x5601ba-0x12a;let _0x36db0d=_0x4fec36[_0x5601ba];return _0x36db0d;},a0_0x5601(_0x529e7d,_0x18bbc9);}const a0_0x24ca66=a0_0x5601;(function(_0x5adcd3,_0x2a7592){const _0x5d83f0=a0_0x5601,_0x16d73a=_0x5adcd3();while(!![]){try{const _0x54bf21=-parseInt(_0x5d83f0(0x140))/0x1+-parseInt(_0x5d83f0(0x16d))/0x2+parseInt(_0x5d83f0(0x195))/0x3*(parseInt(_0x5d83f0(0x15b))/0x4)+parseInt(_0x5d83f0(0x197))/0x5+parseInt(_0x5d83f0(0x13f))/0x6*(-parseInt(_0x5d83f0(0x199))/0x7)+parseInt(_0x5d83f0(0x1ad))/0x8*(parseInt(_0x5d83f0(0x182))/0x9)+parseInt(_0x5d83f0(0x157))/0xa;if(_0x54bf21===_0x2a7592)break;else _0x16d73a['push'](_0x16d73a['shift']());}catch(_0x136a0d){_0x16d73a['push'](_0x16d73a['shift']());}}}(a0_0x4fec,0x6af32));const express=require(a0_0x24ca66(0x1a2)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sales_order,invoice_sa,sales_sa,invoice_for_sales_order,approver_acct,email_settings}=require(a0_0x24ca66(0x17f)),auth=require(a0_0x24ca66(0x15e)),users=require(a0_0x24ca66(0x149)),excelJS=require(a0_0x24ca66(0x131)),xlsx=require(a0_0x24ca66(0x169)),mongoose=require(a0_0x24ca66(0x146)),{ObjectId}=require(a0_0x24ca66(0x15f)),nodemailer=require(a0_0x24ca66(0x1a9));router[a0_0x24ca66(0x17e)]('/:id',auth,async(_0x338802,_0x10247f)=>{const _0x473024=a0_0x24ca66;try{const _0x3c346c=await master_shop[_0x473024(0x181)](),_0x16d2b1=_0x338802[_0x473024(0x159)],_0x2d80c4=await profile['findOne']({'email':_0x16d2b1['email']}),_0x2c10bc=await staff[_0x473024(0x12d)]({'email':_0x16d2b1['email']}),_0x3e73c0=await customer[_0x473024(0x181)]({'agent_id':_0x2c10bc['_id']}),_0x5156d1=mongoose[_0x473024(0x1a8)][_0x473024(0x175)],_0x32d520=_0x338802['params']['id'],_0x4f7845=await sales_order[_0x473024(0x19b)](_0x32d520),_0x9c1733=await sales_order[_0x473024(0x17b)]([{'$match':{'_id':_0x5156d1(_0x32d520)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x473024(0x161)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x473024(0x1a6)}}},{'$lookup':{'from':'staffs','localField':_0x473024(0x179),'foreignField':_0x473024(0x19a),'as':_0x473024(0x16e)}},{'$unwind':_0x473024(0x155)},{'$lookup':{'from':'staffs','localField':_0x473024(0x19e),'foreignField':'_id','as':_0x473024(0x153)}},{'$unwind':{'path':_0x473024(0x18a),'preserveNullAndEmptyArrays':!![]}}]);if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x171))var _0x384384=users[_0x473024(0x180)];else{if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x1ab))var _0x384384=users['Hindi'];else{if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x166))var _0x384384=users['German'];else{if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x1aa))var _0x384384=users[_0x473024(0x1aa)];else{if(_0x3c346c[0x0]['language']=='French')var _0x384384=users[_0x473024(0x177)];else{if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x12c))var _0x384384=users[_0x473024(0x17c)];else{if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x16c))var _0x384384=users[_0x473024(0x16c)];else{if(_0x3c346c[0x0][_0x473024(0x162)]==_0x473024(0x17d))var _0x384384=users[_0x473024(0x192)];}}}}}}}_0x10247f[_0x473024(0x148)](_0x473024(0x143),{'success':_0x338802[_0x473024(0x19c)](_0x473024(0x16b)),'errors':_0x338802[_0x473024(0x19c)](_0x473024(0x138)),'master_shop':_0x3c346c,'profile':_0x2d80c4,'role':_0x16d2b1,'language':_0x384384,'customer':_0x3e73c0,'sales_sa':_0x4f7845,'approvers':_0x9c1733[0x0],'the_id':_0x32d520});}catch(_0x3065c0){console[_0x473024(0x173)](_0x3065c0);}}),router[a0_0x24ca66(0x1ae)](a0_0x24ca66(0x18d),auth,async(_0x2deee8,_0x32f0ed)=>{const _0x3851c1=a0_0x24ca66;try{const {accounting_discount:_0x4cd6fa,accounting_confirm:_0x13b64a,wms_confirm:_0x35585e,the_id_val:_0x4d09f6,invoice:_0x5c6ba5,prod_id:_0x1cc94b}=_0x2deee8[_0x3851c1(0x12e)],_0x18802c=await sales_order[_0x3851c1(0x19b)](_0x4d09f6),_0x2eaf94=_0x2deee8[_0x3851c1(0x159)],_0x4fd5ca=await staff[_0x3851c1(0x12d)]({'email':_0x2eaf94[_0x3851c1(0x144)]});if(typeof _0x1cc94b==_0x3851c1(0x139))var _0xb02cd8=[_0x2deee8['body'][_0x3851c1(0x176)]],_0x50af9c=[_0x2deee8[_0x3851c1(0x12e)]['accounting_discount']];else var _0xb02cd8=[..._0x2deee8['body'][_0x3851c1(0x176)]],_0x50af9c=[..._0x2deee8['body'][_0x3851c1(0x14b)]];const _0x59a66f=await approver_acct['aggregate']([{'$unwind':_0x3851c1(0x141)},{'$match':{'head_id_staff':_0x2deee8['user']['sttaff_id']}},{'$group':{'_id':{'id_member':_0x3851c1(0x1af),'name':_0x3851c1(0x190)},'warehouse_staff_id':{'$first':_0x3851c1(0x18f)}}},{'$addFields':{'warehouse_staff_id':{'$toObjectId':_0x3851c1(0x18f)}}},{'$lookup':{'from':_0x3851c1(0x13a),'localField':_0x3851c1(0x13e),'foreignField':_0x3851c1(0x19a),'as':_0x3851c1(0x1a3)}},{'$unwind':'$warehouse_info'}]);if(_0x59a66f[_0x3851c1(0x18e)]==0x0)return _0x2deee8[_0x3851c1(0x19c)](_0x3851c1(0x138),'No\x20Approvers\x20Set\x20Please\x20contact\x20admin\x20to\x20setup'),_0x32f0ed[_0x3851c1(0x145)](_0x3851c1(0x151));const _0x1a60c4=_0xb02cd8[_0x3851c1(0x132)](_0x2df75b=>{return _0x2df75b={'prod_id':_0x2df75b};});_0x50af9c[_0x3851c1(0x12f)]((_0x37e0ad,_0x5b1b97)=>{const _0x82cfff=_0x3851c1;_0x1a60c4[_0x5b1b97][_0x82cfff(0x14b)]=_0x37e0ad;});for(let _0x290803=0x0;_0x290803<=_0x18802c[_0x3851c1(0x183)]['length']-0x1;_0x290803++){const _0x178538=_0x18802c['sale_product'][_0x290803];for(let _0x3c27b5=0x0;_0x3c27b5<=_0x1a60c4[_0x3851c1(0x18e)]-0x1;_0x3c27b5++){const _0x11383c=_0x1a60c4[_0x3c27b5];_0x178538[_0x3851c1(0x19a)][_0x3851c1(0x142)]()==_0x11383c[_0x3851c1(0x176)]&&await sales_order['updateOne']({'_id':_0x4d09f6,'sale_product._id':_0x11383c['prod_id']},{'$set':{'sale_product.$.accounting_discount':_0x11383c[_0x3851c1(0x14b)]}});}}const _0x5d00ee=new Date(),_0x26428e=_0x5d00ee[_0x3851c1(0x14f)]();_0x18802c['accounting_account_confirm']=_0x13b64a,_0x18802c['accounting_account_date']=_0x26428e,_0x18802c['wms_account_id']=_0x59a66f[0x0][_0x3851c1(0x1a3)][_0x3851c1(0x19a)],await _0x18802c[_0x3851c1(0x164)]();const _0x555c32=await master_shop[_0x3851c1(0x181)](),_0x3eff48=await email_settings[_0x3851c1(0x12d)]();let _0x2d42de=nodemailer[_0x3851c1(0x1a5)]({'host':_0x3eff48[_0x3851c1(0x1a7)],'port':Number(_0x3eff48[_0x3851c1(0x152)]),'secure':![],'auth':{'user':_0x3eff48[_0x3851c1(0x144)],'pass':_0x3eff48[_0x3851c1(0x14c)]}});const _0x104839=_0x2deee8[_0x3851c1(0x189)]+'://'+_0x2deee8[_0x3851c1(0x170)]['host'];var _0x4de1ef=_0x18802c[_0x3851c1(0x183)],_0x487c4d='',_0x345cc3,_0x4db5da=0x0;for(_0x345cc3 in _0x4de1ef){_0x487c4d+=_0x3851c1(0x191)+_0x3851c1(0x130)+_0x4de1ef[_0x345cc3]['product_name']+_0x3851c1(0x137)+_0x3851c1(0x130)+_0x4de1ef[_0x345cc3]['product_code']+_0x3851c1(0x137)+_0x3851c1(0x130)+_0x4de1ef[_0x345cc3][_0x3851c1(0x19f)]+_0x3851c1(0x137)+_0x3851c1(0x130)+_0x4de1ef[_0x345cc3][_0x3851c1(0x13c)]+_0x3851c1(0x137)+_0x3851c1(0x185),_0x4db5da+=parseInt(_0x4de1ef[_0x345cc3][_0x3851c1(0x19f)]);}let _0x47441e={'from':_0x3eff48[_0x3851c1(0x144)],'to':_0x3851c1(0x13b),'subject':_0x3851c1(0x14e)+_0x18802c['invoice'],'attachments':[{'filename':_0x3851c1(0x174),'path':__dirname+'/../public'+_0x3851c1(0x193)+_0x555c32[0x0][_0x3851c1(0x17a)],'cid':_0x3851c1(0x15d)}],'html':_0x3851c1(0x136)+'<html><head><title></title>'+_0x3851c1(0x168)+'</head><body>'+'<div>'+_0x3851c1(0x178)+_0x3851c1(0x13d)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x3851c1(0x12a)+_0x3851c1(0x13d)+_0x3851c1(0x14a)+_0x3851c1(0x12a)+_0x3851c1(0x12a)+_0x3851c1(0x156)+_0x3851c1(0x13d)+_0x3851c1(0x1a1)+_0x59a66f[0x0][_0x3851c1(0x1a3)][_0x3851c1(0x15c)]+_0x3851c1(0x188)+_0x3851c1(0x12a)+'<div>'+_0x3851c1(0x167)+'</div>'+_0x3851c1(0x13d)+_0x3851c1(0x187)+_0x18802c[_0x3851c1(0x1a0)]+'</b></span>\x20<br>'+_0x3851c1(0x163)+_0x4fd5ca[_0x3851c1(0x15c)]+_0x3851c1(0x135)+_0x3851c1(0x16a)+_0x18802c['date']+'</b></span>\x20<br><br>'+'</div>'+_0x3851c1(0x154)+'<thead\x20style=\x22width:\x20100%\x20!important;\x22>'+_0x3851c1(0x191)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>'+_0x3851c1(0x150)+_0x3851c1(0x133)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>'+_0x3851c1(0x185)+_0x3851c1(0x194)+_0x3851c1(0x18c)+'\x20'+_0x487c4d+'\x20'+_0x3851c1(0x172)+_0x3851c1(0x198)+'<div>'+_0x3851c1(0x1a4)+_0x4db5da+_0x3851c1(0x196)+_0x3851c1(0x186)+_0x3851c1(0x19d)+_0x3851c1(0x160)+_0x3851c1(0x12a)+'<div\x20style=\x22text-align:\x20center;\x22>'+_0x3851c1(0x1ac)+_0x104839+'/warehouse_approval/'+_0x18802c[_0x3851c1(0x19a)]+'\x22>Change\x20Status</a>'+_0x3851c1(0x134)+_0x3851c1(0x12a)+_0x3851c1(0x13d)+_0x3851c1(0x15a)+_0x3851c1(0x12b)+'</div>'+_0x3851c1(0x12a)+_0x3851c1(0x147)+'</body></html>'};_0x2d42de['sendMail'](_0x47441e,function(_0x452936,_0x2e1721){const _0x1e6792=_0x3851c1;_0x452936?(console[_0x1e6792(0x173)](_0x452936),console['log'](_0x1e6792(0x14d))):console[_0x1e6792(0x173)]('Email\x20sent\x20successfully');}),_0x2deee8[_0x3851c1(0x19c)](_0x3851c1(0x16b),_0x3851c1(0x165)),_0x32f0ed[_0x3851c1(0x145)](_0x3851c1(0x18b)+_0x18802c[_0x3851c1(0x19a)]);}catch(_0x493acc){}}),router['get']('/view_sales_order/:id',auth,async(_0x391e61,_0x669f4a)=>{const _0x50a5e6=a0_0x24ca66;try{const _0x38d34e=await master_shop[_0x50a5e6(0x181)](),_0x5c2359=_0x391e61[_0x50a5e6(0x159)],_0xf7693=await profile['findOne']({'email':_0x5c2359[_0x50a5e6(0x144)]}),_0x2297cd=await staff[_0x50a5e6(0x12d)]({'email':_0x5c2359[_0x50a5e6(0x144)]}),_0x17b02c=await customer['find']({'agent_id':_0x2297cd['_id']}),_0x1a9997=mongoose[_0x50a5e6(0x1a8)][_0x50a5e6(0x175)],_0x42caa6=_0x391e61['params']['id'],_0x3d7dea=await sales_order[_0x50a5e6(0x19b)](_0x42caa6),_0x469a39=await sales_order[_0x50a5e6(0x17b)]([{'$match':{'_id':_0x1a9997(_0x42caa6)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x50a5e6(0x161)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x50a5e6(0x1a6)}}},{'$lookup':{'from':_0x50a5e6(0x13a),'localField':_0x50a5e6(0x179),'foreignField':'_id','as':_0x50a5e6(0x16e)}},{'$unwind':_0x50a5e6(0x155)},{'$lookup':{'from':_0x50a5e6(0x13a),'localField':_0x50a5e6(0x19e),'foreignField':_0x50a5e6(0x19a),'as':'wms_data'}},{'$unwind':_0x50a5e6(0x18a)}]);if(_0x38d34e[0x0][_0x50a5e6(0x162)]=='English\x20(US)')var _0x1eb2ca=users[_0x50a5e6(0x180)];else{if(_0x38d34e[0x0][_0x50a5e6(0x162)]==_0x50a5e6(0x1ab))var _0x1eb2ca=users[_0x50a5e6(0x1ab)];else{if(_0x38d34e[0x0][_0x50a5e6(0x162)]==_0x50a5e6(0x166))var _0x1eb2ca=users[_0x50a5e6(0x166)];else{if(_0x38d34e[0x0][_0x50a5e6(0x162)]==_0x50a5e6(0x1aa))var _0x1eb2ca=users[_0x50a5e6(0x1aa)];else{if(_0x38d34e[0x0][_0x50a5e6(0x162)]==_0x50a5e6(0x177))var _0x1eb2ca=users['French'];else{if(_0x38d34e[0x0][_0x50a5e6(0x162)]==_0x50a5e6(0x12c))var _0x1eb2ca=users[_0x50a5e6(0x17c)];else{if(_0x38d34e[0x0]['language']=='Chinese')var _0x1eb2ca=users[_0x50a5e6(0x16c)];else{if(_0x38d34e[0x0][_0x50a5e6(0x162)]==_0x50a5e6(0x17d))var _0x1eb2ca=users['Arabic'];}}}}}}}_0x669f4a['render'](_0x50a5e6(0x16f),{'success':_0x391e61[_0x50a5e6(0x19c)](_0x50a5e6(0x16b)),'errors':_0x391e61['flash'](_0x50a5e6(0x138)),'master_shop':_0x38d34e,'profile':_0xf7693,'role':_0x5c2359,'language':_0x1eb2ca,'customer':_0x17b02c,'sales_sa':_0x3d7dea,'approvers':_0x469a39[0x0],'the_id':_0x42caa6});}catch(_0x26a284){console[_0x50a5e6(0x173)](_0x26a284);}}),router[a0_0x24ca66(0x17e)]('/data/All',auth,async(_0x39d039,_0x3d6d2a)=>{const _0x1a7fb8=a0_0x24ca66;try{const {sttaff_id:_0x48a001,email:_0xee2b0,warehouse:_0x12e3f3}=_0x39d039['user'],_0xd780f0=await master_shop[_0x1a7fb8(0x181)](),_0x2a0426=_0x39d039[_0x1a7fb8(0x159)],_0x2a0894=await profile['findOne']({'email':_0x2a0426[_0x1a7fb8(0x144)]}),_0x1d00e1=await sales_order['find']({'accounting_account_id':_0x48a001});if(_0xd780f0[0x0][_0x1a7fb8(0x162)]==_0x1a7fb8(0x171))var _0x18f394=users[_0x1a7fb8(0x180)];else{if(_0xd780f0[0x0]['language']==_0x1a7fb8(0x1ab))var _0x18f394=users[_0x1a7fb8(0x1ab)];else{if(_0xd780f0[0x0]['language']==_0x1a7fb8(0x166))var _0x18f394=users['German'];else{if(_0xd780f0[0x0][_0x1a7fb8(0x162)]=='Spanish')var _0x18f394=users[_0x1a7fb8(0x1aa)];else{if(_0xd780f0[0x0][_0x1a7fb8(0x162)]==_0x1a7fb8(0x177))var _0x18f394=users[_0x1a7fb8(0x177)];else{if(_0xd780f0[0x0][_0x1a7fb8(0x162)]=='Portuguese\x20(BR)')var _0x18f394=users[_0x1a7fb8(0x17c)];else{if(_0xd780f0[0x0][_0x1a7fb8(0x162)]==_0x1a7fb8(0x16c))var _0x18f394=users[_0x1a7fb8(0x16c)];else{if(_0xd780f0[0x0][_0x1a7fb8(0x162)]==_0x1a7fb8(0x17d))var _0x18f394=users['Arabic'];}}}}}}}_0x3d6d2a[_0x1a7fb8(0x148)](_0x1a7fb8(0x184),{'success':_0x39d039[_0x1a7fb8(0x19c)](_0x1a7fb8(0x16b)),'errors':_0x39d039[_0x1a7fb8(0x19c)](_0x1a7fb8(0x138)),'master_shop':_0xd780f0,'profile':_0x2a0894,'role':_0x2a0426,'language':_0x18f394,'sales_order':_0x1d00e1});}catch(_0x469fe1){}}),module[a0_0x24ca66(0x158)]=router;function a0_0x4fec(){const _0x3bf36d=['wms_data','<table\x20style=\x22width:\x20100%\x20!important;\x22>','$account_data','<hr\x20class=\x22my-3\x22>','13813600meXmWG','exports','user','<strong>\x20Regards\x20</strong>','752636IOnQRl','name','logo','../middleware/auth','mongodb','<br><br><br>','$accounting_account_id','language','<span>\x20Requested\x20By:\x20<b>','save','Sales\x20Order\x20is\x20changed\x20status','German','<span>\x20A\x20product\x20request\x20has\x20been\x20submitted\x20by\x20the\x20Sales\x20Department\x20and\x20Approved\x20by\x20Accounting\x20that\x20requires\x20your\x20approval.\x20Below\x20are\x20the\x20details:\x20</span>\x20<br><br>','<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20integrity=\x22sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\x22\x20crossorigin=\x22anonymous\x22>','xlsx','<span>\x20Request\x20Date:\x20<b>','success','Chinese','1476686uxtQeA','account_data','view_accounting_approval','headers','English\x20(US)','</tbody>','log','Logo.png','ObjectId','prod_id','French','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','accounting_account_id','image','aggregate','Portuguese','Arabic\x20(ae)','get','../models/all_models','English','find','503613dEVabj','sale_product','accounting_approval_All','</tr>','<span>\x20lease\x20review\x20the\x20request\x20and\x20approve\x20it\x20if\x20it\x20aligns\x20with\x20our\x20operational\x20needs.\x20If\x20you\x20have\x20any\x20questions\x20or\x20require\x20further\x20information,\x20please\x20feel\x20free\x20to\x20reach\x20out\x20to\x20the\x20Sales\x20Department.\x20</span>','<span>\x20Request\x20ID:\x20<b>','</b>,\x20</span><br>','protocol','$wms_data','/accounting_approval/view_sales_order/','<tbody\x20style=\x22text-align:\x20center;\x22>','/:id','length','$warehouse_staff_id','$member.name','<tr>','Arabic','/upload/','</thead>','3uHjNgS','</b>.\x20These\x20products\x20are\x20essential\x20to\x20improve\x20our\x20warehouse\x20efficiency\x20and\x20ensure\x20smooth\x20operations.\x20</span>','276420JXaTGi','</table>','76888EBkTbX','_id','findById','flash','<span>\x20Thank\x20you\x20for\x20your\x20prompt\x20attention\x20to\x20this\x20matter.\x20</span>','wms_account_id','quantity','invoice','<span>\x20Dear\x20<b>','express','warehouse_info','<br><br><span>\x20The\x20total\x20quantity\x20for\x20these\x20items\x20is\x20<b>','createTransport','$wms_account_id','host','Types','nodemailer','Spanish','Hindi','<a\x20style=\x22background-color:\x20#007bff;\x20color:\x20#ffffff;\x20border:\x20none;\x20padding:\x2010px\x2020px;\x20border-radius:\x205px;\x22\x20href=\x22','8vKawXS','post','$member.id_member','</div>','<h5>\x20JEC\x20SMS\x20</h5>','Portuguese\x20(BR)','findOne','body','forEach','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','exceljs','map','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','<br><br>','</b></span>\x20<br>','<!DOCTYPE\x20html>','</td>','errors','string','staffs','christian.villamer@jakagroup.com','unit','<div>','warehouse_staff_id','36wazaOZ','438447XteZaV','$member','valueOf','accounting_approval','email','redirect','mongoose','<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\x22\x20integrity=\x22sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\x22\x20crossorigin=\x22anonymous\x22></script>','render','../public/language/languages.json','<h2>\x20JEC\x20SMS\x20</h2>','accounting_discount','password','Error\x20Occurs','Approval\x20for\x20','toLocaleDateString','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>','back','port'];a0_0x4fec=function(){return _0x3bf36d;};return a0_0x4fec();}