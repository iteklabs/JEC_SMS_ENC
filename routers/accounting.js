const a0_0x57bbec=a0_0xd615;function a0_0x2709(){const _0x1ec61a=['/data/All','/warehouse_approval/','1464304mMJrOe','save','227169EjArPF','<span>\x20lease\x20review\x20the\x20request\x20and\x20approve\x20it\x20if\x20it\x20aligns\x20with\x20our\x20operational\x20needs.\x20If\x20you\x20have\x20any\x20questions\x20or\x20require\x20further\x20information,\x20please\x20feel\x20free\x20to\x20reach\x20out\x20to\x20the\x20Sales\x20Department.\x20</span>','Sales\x20Order\x20is\x20changed\x20status','accounting_account_id','product_name','sttaff_id','protocol','host','Arabic\x20(ae)','length','7297608nhEDLG','product_code','</div>','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','find','createTransport','Spanish','<br><br><br>','<thead\x20style=\x22width:\x20100%\x20!important;\x22>','/upload/','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>','<h2>\x20JEC\x20SMS\x20</h2>','findById','body','staffs','English','<!DOCTYPE\x20html>','date','log','port','Approval\x20for\x20','</td>','accounting_discount','$warehouse_info','1513400lwOsHQ','://','warehouse_info','French','9HDiDhc','accounting_account_date','933614yXSTda','success','$member','German','nodemailer','_id','/accounting_approval/view_sales_order/','user','</b></span>\x20<br>','Error\x20Occurs','</tbody>','language','</b>.\x20These\x20products\x20are\x20essential\x20to\x20improve\x20our\x20warehouse\x20efficiency\x20and\x20ensure\x20smooth\x20operations.\x20</span>','string','post','wms_account_id','$warehouse_staff_id','Portuguese','</thead>','../models/all_models','../middleware/auth','map','prod_id','/:id','render','Portuguese\x20(BR)','</tr>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','wms_data','<span>\x20Dear\x20<b>','findOne','exports','xlsx','<strong>\x20Regards\x20</strong>','$wms_data','logo','accounting_approval_All','Types','189540RoYpUz','554910TbEqJI','$member.id_member','</table>','account_data','$accounting_account_id','60wgcRGA','<div\x20style=\x22text-align:\x20center;\x22>','<span>\x20Requested\x20By:\x20<b>','/../public','<span>\x20Thank\x20you\x20for\x20your\x20prompt\x20attention\x20to\x20this\x20matter.\x20</span>','invoice','Hindi','$account_data','sendMail','forEach','christian.villamer@jakagroup.com','warehouse_staff_id','mongoose','accounting_account_confirm','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\x22\x20integrity=\x22sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\x22\x20crossorigin=\x22anonymous\x22></script>','express','<html><head><title></title>','accounting_approval','name','valueOf','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','exceljs','<div>','back','ObjectId','mongodb','Logo.png','email','English\x20(US)','<tr>','</body></html>','<br><br>','Arabic','8shtvDX','../public/language/languages.json','get','sale_product','Chinese','aggregate','56rvUGnY','flash','errors','<hr\x20class=\x22my-3\x22>','params','No\x20Approvers\x20Set\x20Please\x20contact\x20admin\x20to\x20setup'];a0_0x2709=function(){return _0x1ec61a;};return a0_0x2709();}(function(_0x47ad1a,_0x7488f1){const _0x593c89=a0_0xd615,_0x2f123c=_0x47ad1a();while(!![]){try{const _0x53ab1a=-parseInt(_0x593c89(0x200))/0x1+-parseInt(_0x593c89(0x1fe))/0x2+-parseInt(_0x593c89(0x1c8))/0x3+parseInt(_0x593c89(0x1f0))/0x4*(-parseInt(_0x593c89(0x222))/0x5)+parseInt(_0x593c89(0x1c9))/0x6*(parseInt(_0x593c89(0x1f6))/0x7)+parseInt(_0x593c89(0x20a))/0x8*(parseInt(_0x593c89(0x226))/0x9)+parseInt(_0x593c89(0x1ce))/0xa*(parseInt(_0x593c89(0x228))/0xb);if(_0x53ab1a===_0x7488f1)break;else _0x2f123c['push'](_0x2f123c['shift']());}catch(_0x12383c){_0x2f123c['push'](_0x2f123c['shift']());}}}(a0_0x2709,0x823d8));const express=require(a0_0x57bbec(0x1de)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sales_order,invoice_sa,sales_sa,invoice_for_sales_order,approver_acct,email_settings}=require(a0_0x57bbec(0x23b)),auth=require(a0_0x57bbec(0x23c)),users=require(a0_0x57bbec(0x1f1)),excelJS=require(a0_0x57bbec(0x1e4)),xlsx=require(a0_0x57bbec(0x1c2)),mongoose=require(a0_0x57bbec(0x1da)),{ObjectId}=require(a0_0x57bbec(0x1e8)),nodemailer=require(a0_0x57bbec(0x22c));function a0_0xd615(_0x4bb1a2,_0x272191){const _0x27090b=a0_0x2709();return a0_0xd615=function(_0xd615a2,_0x1f3bf4){_0xd615a2=_0xd615a2-0x1b9;let _0x327bde=_0x27090b[_0xd615a2];return _0x327bde;},a0_0xd615(_0x4bb1a2,_0x272191);}router['get'](a0_0x57bbec(0x1b9),auth,async(_0x30c214,_0xbb081e)=>{const _0x29409e=a0_0x57bbec;try{const _0x33d6d3=await master_shop[_0x29409e(0x20e)](),_0x286860=_0x30c214['user'],_0x2a47d3=await profile[_0x29409e(0x1c0)]({'email':_0x286860[_0x29409e(0x1ea)]}),_0x46bc2b=await staff[_0x29409e(0x1c0)]({'email':_0x286860[_0x29409e(0x1ea)]}),_0x193af0=await customer[_0x29409e(0x20e)]({'agent_id':_0x46bc2b[_0x29409e(0x22d)]}),_0x143423=mongoose['Types']['ObjectId'],_0x11f735=_0x30c214[_0x29409e(0x1fa)]['id'],_0xc57cb6=await sales_order[_0x29409e(0x216)](_0x11f735),_0x34e180=await sales_order[_0x29409e(0x1f5)]([{'$match':{'_id':_0x143423(_0x11f735)}},{'$addFields':{'accounting_account_id':{'$toObjectId':'$accounting_account_id'}}},{'$addFields':{'wms_account_id':{'$toObjectId':'$wms_account_id'}}},{'$lookup':{'from':_0x29409e(0x218),'localField':_0x29409e(0x203),'foreignField':'_id','as':_0x29409e(0x1cc)}},{'$unwind':_0x29409e(0x1d5)},{'$lookup':{'from':_0x29409e(0x218),'localField':_0x29409e(0x237),'foreignField':_0x29409e(0x22d),'as':_0x29409e(0x1be)}},{'$unwind':{'path':_0x29409e(0x1c4),'preserveNullAndEmptyArrays':!![]}}]);if(_0x33d6d3[0x0][_0x29409e(0x233)]==_0x29409e(0x1eb))var _0x52f6b0=users[_0x29409e(0x219)];else{if(_0x33d6d3[0x0]['language']==_0x29409e(0x1d4))var _0x52f6b0=users[_0x29409e(0x1d4)];else{if(_0x33d6d3[0x0]['language']==_0x29409e(0x22b))var _0x52f6b0=users['German'];else{if(_0x33d6d3[0x0][_0x29409e(0x233)]==_0x29409e(0x210))var _0x52f6b0=users[_0x29409e(0x210)];else{if(_0x33d6d3[0x0]['language']==_0x29409e(0x225))var _0x52f6b0=users['French'];else{if(_0x33d6d3[0x0]['language']==_0x29409e(0x1bb))var _0x52f6b0=users[_0x29409e(0x239)];else{if(_0x33d6d3[0x0][_0x29409e(0x233)]=='Chinese')var _0x52f6b0=users['Chinese'];else{if(_0x33d6d3[0x0][_0x29409e(0x233)]==_0x29409e(0x208))var _0x52f6b0=users[_0x29409e(0x1ef)];}}}}}}}_0xbb081e[_0x29409e(0x1ba)](_0x29409e(0x1e0),{'success':_0x30c214['flash'](_0x29409e(0x229)),'errors':_0x30c214[_0x29409e(0x1f7)](_0x29409e(0x1f8)),'master_shop':_0x33d6d3,'profile':_0x2a47d3,'role':_0x286860,'language':_0x52f6b0,'customer':_0x193af0,'sales_sa':_0xc57cb6,'approvers':_0x34e180[0x0],'the_id':_0x11f735});}catch(_0x340118){console[_0x29409e(0x21c)](_0x340118);}}),router[a0_0x57bbec(0x236)](a0_0x57bbec(0x1b9),auth,async(_0x2605c8,_0x26e65f)=>{const _0xd5f30=a0_0x57bbec;try{const {accounting_discount:_0x50bcb9,accounting_confirm:_0x100fe9,wms_confirm:_0x4cc668,the_id_val:_0x46d371,invoice:_0x151360,prod_id:_0x3b7502}=_0x2605c8[_0xd5f30(0x217)],_0x252c0c=await sales_order[_0xd5f30(0x216)](_0x46d371),_0x5b2c62=_0x2605c8[_0xd5f30(0x22f)],_0x147111=await staff[_0xd5f30(0x1c0)]({'email':_0x5b2c62[_0xd5f30(0x1ea)]});if(typeof _0x3b7502==_0xd5f30(0x235))var _0x2e27c5=[_0x2605c8[_0xd5f30(0x217)]['prod_id']],_0x59b240=[_0x2605c8[_0xd5f30(0x217)]['accounting_discount']];else var _0x2e27c5=[..._0x2605c8[_0xd5f30(0x217)][_0xd5f30(0x23e)]],_0x59b240=[..._0x2605c8[_0xd5f30(0x217)][_0xd5f30(0x220)]];const _0x308452=await approver_acct[_0xd5f30(0x1f5)]([{'$unwind':_0xd5f30(0x22a)},{'$match':{'head_id_staff':_0x2605c8['user'][_0xd5f30(0x205)]}},{'$group':{'_id':{'id_member':_0xd5f30(0x1ca),'name':'$member.name'},'warehouse_staff_id':{'$first':_0xd5f30(0x238)}}},{'$addFields':{'warehouse_staff_id':{'$toObjectId':_0xd5f30(0x238)}}},{'$lookup':{'from':'staffs','localField':_0xd5f30(0x1d9),'foreignField':'_id','as':_0xd5f30(0x224)}},{'$unwind':_0xd5f30(0x221)}]);if(_0x308452['length']==0x0)return _0x2605c8[_0xd5f30(0x1f7)](_0xd5f30(0x1f8),_0xd5f30(0x1fb)),_0x26e65f['redirect'](_0xd5f30(0x1e6));const _0x1f6bc6=_0x2e27c5[_0xd5f30(0x23d)](_0x473fc6=>{return _0x473fc6={'prod_id':_0x473fc6};});_0x59b240[_0xd5f30(0x1d7)]((_0x59510a,_0xa279e2)=>{const _0x165583=_0xd5f30;_0x1f6bc6[_0xa279e2][_0x165583(0x220)]=_0x59510a;});for(let _0x135057=0x0;_0x135057<=_0x252c0c[_0xd5f30(0x1f3)][_0xd5f30(0x209)]-0x1;_0x135057++){const _0x3d48f1=_0x252c0c[_0xd5f30(0x1f3)][_0x135057];for(let _0x22b204=0x0;_0x22b204<=_0x1f6bc6[_0xd5f30(0x209)]-0x1;_0x22b204++){const _0x2d39ef=_0x1f6bc6[_0x22b204];_0x3d48f1[_0xd5f30(0x22d)][_0xd5f30(0x1e2)]()==_0x2d39ef[_0xd5f30(0x23e)]&&await sales_order['updateOne']({'_id':_0x46d371,'sale_product._id':_0x2d39ef[_0xd5f30(0x23e)]},{'$set':{'sale_product.$.accounting_discount':_0x2d39ef['accounting_discount']}});}}const _0x4b1877=new Date(),_0x1c962d=_0x4b1877['toLocaleDateString']();_0x252c0c[_0xd5f30(0x1db)]=_0x100fe9,_0x252c0c[_0xd5f30(0x227)]=_0x1c962d,_0x252c0c['wms_account_id']=_0x308452[0x0]['warehouse_info']['_id'],await _0x252c0c[_0xd5f30(0x1ff)]();const _0x4e1753=await master_shop[_0xd5f30(0x20e)](),_0x492c5a=await email_settings['findOne']();let _0x4d48c5=nodemailer[_0xd5f30(0x20f)]({'host':_0x492c5a[_0xd5f30(0x207)],'port':Number(_0x492c5a[_0xd5f30(0x21d)]),'secure':![],'auth':{'user':_0x492c5a[_0xd5f30(0x1ea)],'pass':_0x492c5a['password']}});const _0x26c142=_0x2605c8[_0xd5f30(0x206)]+_0xd5f30(0x223)+_0x2605c8['headers'][_0xd5f30(0x207)];var _0x2692d0=_0x252c0c[_0xd5f30(0x1f3)],_0x34aca8='',_0x18902f,_0xeb6ebd=0x0;for(_0x18902f in _0x2692d0){_0x34aca8+=_0xd5f30(0x1ec)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x2692d0[_0x18902f][_0xd5f30(0x204)]+_0xd5f30(0x21f)+_0xd5f30(0x1dc)+_0x2692d0[_0x18902f][_0xd5f30(0x20b)]+_0xd5f30(0x21f)+_0xd5f30(0x1dc)+_0x2692d0[_0x18902f]['quantity']+'</td>'+_0xd5f30(0x1dc)+_0x2692d0[_0x18902f]['unit']+'</td>'+_0xd5f30(0x1bc),_0xeb6ebd+=parseInt(_0x2692d0[_0x18902f]['quantity']);}let _0x325898={'from':_0x492c5a[_0xd5f30(0x1ea)],'to':_0xd5f30(0x1d8),'subject':_0xd5f30(0x21e)+_0x252c0c[_0xd5f30(0x1d3)],'attachments':[{'filename':_0xd5f30(0x1e9),'path':__dirname+_0xd5f30(0x1d1)+_0xd5f30(0x213)+_0x4e1753[0x0]['image'],'cid':_0xd5f30(0x1c5)}],'html':_0xd5f30(0x21a)+_0xd5f30(0x1df)+'<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20integrity=\x22sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\x22\x20crossorigin=\x22anonymous\x22>'+'</head><body>'+_0xd5f30(0x1e5)+_0xd5f30(0x1e3)+'<div>'+_0xd5f30(0x20d)+_0xd5f30(0x20c)+_0xd5f30(0x1e5)+_0xd5f30(0x215)+_0xd5f30(0x20c)+_0xd5f30(0x20c)+_0xd5f30(0x1f9)+'<div>'+_0xd5f30(0x1bf)+_0x308452[0x0]['warehouse_info'][_0xd5f30(0x1e1)]+'</b>,\x20</span><br>'+_0xd5f30(0x20c)+_0xd5f30(0x1e5)+'<span>\x20A\x20product\x20request\x20has\x20been\x20submitted\x20by\x20the\x20Sales\x20Department\x20and\x20Approved\x20by\x20Accounting\x20that\x20requires\x20your\x20approval.\x20Below\x20are\x20the\x20details:\x20</span>\x20<br><br>'+_0xd5f30(0x20c)+_0xd5f30(0x1e5)+'<span>\x20Request\x20ID:\x20<b>'+_0x252c0c['invoice']+_0xd5f30(0x230)+_0xd5f30(0x1d0)+_0x147111[_0xd5f30(0x1e1)]+_0xd5f30(0x230)+'<span>\x20Request\x20Date:\x20<b>'+_0x252c0c[_0xd5f30(0x21b)]+'</b></span>\x20<br><br>'+_0xd5f30(0x20c)+'<table\x20style=\x22width:\x20100%\x20!important;\x22>'+_0xd5f30(0x212)+_0xd5f30(0x1ec)+_0xd5f30(0x214)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>'+_0xd5f30(0x1bd)+_0xd5f30(0x1bc)+_0xd5f30(0x23a)+'<tbody\x20style=\x22text-align:\x20center;\x22>'+'\x20'+_0x34aca8+'\x20'+_0xd5f30(0x232)+_0xd5f30(0x1cb)+_0xd5f30(0x1e5)+'<br><br><span>\x20The\x20total\x20quantity\x20for\x20these\x20items\x20is\x20<b>'+_0xeb6ebd+_0xd5f30(0x234)+_0xd5f30(0x201)+_0xd5f30(0x1d2)+_0xd5f30(0x211)+_0xd5f30(0x20c)+_0xd5f30(0x1cf)+'<a\x20style=\x22background-color:\x20#007bff;\x20color:\x20#ffffff;\x20border:\x20none;\x20padding:\x2010px\x2020px;\x20border-radius:\x205px;\x22\x20href=\x22'+_0x26c142+_0xd5f30(0x1fd)+_0x252c0c[_0xd5f30(0x22d)]+'\x22>Change\x20Status</a>'+_0xd5f30(0x1ee)+_0xd5f30(0x20c)+_0xd5f30(0x1e5)+_0xd5f30(0x1c3)+'<h5>\x20JEC\x20SMS\x20</h5>'+'</div>'+_0xd5f30(0x20c)+_0xd5f30(0x1dd)+_0xd5f30(0x1ed)};_0x4d48c5[_0xd5f30(0x1d6)](_0x325898,function(_0x284bc6,_0x582ca9){const _0x104735=_0xd5f30;_0x284bc6?(console[_0x104735(0x21c)](_0x284bc6),console[_0x104735(0x21c)](_0x104735(0x231))):console[_0x104735(0x21c)]('Email\x20sent\x20successfully');}),_0x2605c8[_0xd5f30(0x1f7)]('success',_0xd5f30(0x202)),_0x26e65f['redirect'](_0xd5f30(0x22e)+_0x252c0c[_0xd5f30(0x22d)]);}catch(_0x1c8165){}}),router[a0_0x57bbec(0x1f2)]('/view_sales_order/:id',auth,async(_0x565f6c,_0x54acc7)=>{const _0x4d1688=a0_0x57bbec;try{const _0x83fa95=await master_shop[_0x4d1688(0x20e)](),_0x480948=_0x565f6c['user'],_0x1ce0ff=await profile['findOne']({'email':_0x480948[_0x4d1688(0x1ea)]}),_0xc84c44=await staff['findOne']({'email':_0x480948[_0x4d1688(0x1ea)]}),_0x126084=await customer['find']({'agent_id':_0xc84c44[_0x4d1688(0x22d)]}),_0x4662b9=mongoose[_0x4d1688(0x1c7)][_0x4d1688(0x1e7)],_0xcf8257=_0x565f6c[_0x4d1688(0x1fa)]['id'],_0x39c02c=await sales_order[_0x4d1688(0x216)](_0xcf8257),_0x4572a9=await sales_order[_0x4d1688(0x1f5)]([{'$match':{'_id':_0x4662b9(_0xcf8257)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x4d1688(0x1cd)}}},{'$addFields':{'wms_account_id':{'$toObjectId':'$wms_account_id'}}},{'$lookup':{'from':_0x4d1688(0x218),'localField':_0x4d1688(0x203),'foreignField':_0x4d1688(0x22d),'as':_0x4d1688(0x1cc)}},{'$unwind':_0x4d1688(0x1d5)},{'$lookup':{'from':'staffs','localField':_0x4d1688(0x237),'foreignField':'_id','as':_0x4d1688(0x1be)}},{'$unwind':'$wms_data'}]);if(_0x83fa95[0x0]['language']=='English\x20(US)')var _0xb72bc7=users['English'];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]==_0x4d1688(0x1d4))var _0xb72bc7=users[_0x4d1688(0x1d4)];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]==_0x4d1688(0x22b))var _0xb72bc7=users[_0x4d1688(0x22b)];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]=='Spanish')var _0xb72bc7=users[_0x4d1688(0x210)];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]==_0x4d1688(0x225))var _0xb72bc7=users['French'];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]==_0x4d1688(0x1bb))var _0xb72bc7=users[_0x4d1688(0x239)];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]==_0x4d1688(0x1f4))var _0xb72bc7=users[_0x4d1688(0x1f4)];else{if(_0x83fa95[0x0][_0x4d1688(0x233)]==_0x4d1688(0x208))var _0xb72bc7=users[_0x4d1688(0x1ef)];}}}}}}}_0x54acc7['render']('view_accounting_approval',{'success':_0x565f6c[_0x4d1688(0x1f7)]('success'),'errors':_0x565f6c[_0x4d1688(0x1f7)](_0x4d1688(0x1f8)),'master_shop':_0x83fa95,'profile':_0x1ce0ff,'role':_0x480948,'language':_0xb72bc7,'customer':_0x126084,'sales_sa':_0x39c02c,'approvers':_0x4572a9[0x0],'the_id':_0xcf8257});}catch(_0x2e9b6c){console[_0x4d1688(0x21c)](_0x2e9b6c);}}),router[a0_0x57bbec(0x1f2)](a0_0x57bbec(0x1fc),auth,async(_0x13e236,_0xa9b76f)=>{const _0x104272=a0_0x57bbec;try{const {sttaff_id:_0x1eea6c,email:_0x519ae2,warehouse:_0x5a98db}=_0x13e236['user'],_0x21b347=await master_shop[_0x104272(0x20e)](),_0x6aade7=_0x13e236['user'],_0x3a1138=await profile['findOne']({'email':_0x6aade7[_0x104272(0x1ea)]}),_0xd7aaa4=await sales_order['find']({'accounting_account_id':_0x1eea6c});if(_0x21b347[0x0]['language']==_0x104272(0x1eb))var _0x13eff9=users[_0x104272(0x219)];else{if(_0x21b347[0x0]['language']==_0x104272(0x1d4))var _0x13eff9=users['Hindi'];else{if(_0x21b347[0x0][_0x104272(0x233)]==_0x104272(0x22b))var _0x13eff9=users[_0x104272(0x22b)];else{if(_0x21b347[0x0][_0x104272(0x233)]==_0x104272(0x210))var _0x13eff9=users[_0x104272(0x210)];else{if(_0x21b347[0x0][_0x104272(0x233)]==_0x104272(0x225))var _0x13eff9=users['French'];else{if(_0x21b347[0x0][_0x104272(0x233)]==_0x104272(0x1bb))var _0x13eff9=users[_0x104272(0x239)];else{if(_0x21b347[0x0][_0x104272(0x233)]==_0x104272(0x1f4))var _0x13eff9=users[_0x104272(0x1f4)];else{if(_0x21b347[0x0][_0x104272(0x233)]==_0x104272(0x208))var _0x13eff9=users[_0x104272(0x1ef)];}}}}}}}_0xa9b76f['render'](_0x104272(0x1c6),{'success':_0x13e236['flash'](_0x104272(0x229)),'errors':_0x13e236[_0x104272(0x1f7)](_0x104272(0x1f8)),'master_shop':_0x21b347,'profile':_0x3a1138,'role':_0x6aade7,'language':_0x13eff9,'sales_order':_0xd7aaa4});}catch(_0x56da26){}}),module[a0_0x57bbec(0x1c1)]=router;