var a0_0x34feba=a0_0x1717;(function(_0x5e685c,_0x12f470){var _0x52053a=a0_0x1717,_0x3d432=_0x5e685c();while(!![]){try{var _0x50618b=-parseInt(_0x52053a(0x1b7))/0x1*(parseInt(_0x52053a(0x1c1))/0x2)+-parseInt(_0x52053a(0x1ba))/0x3+parseInt(_0x52053a(0x1e3))/0x4*(-parseInt(_0x52053a(0x1c3))/0x5)+-parseInt(_0x52053a(0x238))/0x6+-parseInt(_0x52053a(0x1c0))/0x7*(parseInt(_0x52053a(0x1e9))/0x8)+-parseInt(_0x52053a(0x223))/0x9+parseInt(_0x52053a(0x249))/0xa*(parseInt(_0x52053a(0x1f3))/0xb);if(_0x50618b===_0x12f470)break;else _0x3d432['push'](_0x3d432['shift']());}catch(_0x31a245){_0x3d432['push'](_0x3d432['shift']());}}}(a0_0x57fa,0x9aa0c));function a0_0x1717(_0xda6506,_0x57e077){var _0x57fa7f=a0_0x57fa();return a0_0x1717=function(_0x1717b1,_0x897449){_0x1717b1=_0x1717b1-0x1b3;var _0xff3946=_0x57fa7f[_0x1717b1];return _0xff3946;},a0_0x1717(_0xda6506,_0x57e077);}const express=require('express'),app=express(),router=express[a0_0x34feba(0x236)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,invoice_for_outgoing,customer_payment,c_payment_data,sales_order,invoice_sa,sales_sa,invoice_for_sales_order,approver_acct,email_settings,sales_finished}=require(a0_0x34feba(0x1f7)),auth=require('../middleware/auth'),users=require('../public/language/languages.json'),excelJS=require(a0_0x34feba(0x23b)),xlsx=require('xlsx'),mongoose=require(a0_0x34feba(0x23c)),{ObjectId}=require('mongodb'),nodemailer=require(a0_0x34feba(0x1d3));function a0_0x57fa(){var _0x4b2ede=['production_date','maxPerUnit','/view_sales_order/:id','exports','json','973pNtiJQ','34UqqnzG','_id','5JVDsiu','date_data','room','</body></html>','christian.villamer@jakagroup.com','post','<span>\x20lease\x20review\x20the\x20request\x20and\x20approve\x20it\x20if\x20it\x20aligns\x20with\x20our\x20operational\x20needs.\x20If\x20you\x20have\x20any\x20questions\x20or\x20require\x20further\x20information,\x20please\x20feel\x20free\x20to\x20reach\x20out\x20to\x20the\x20Sales\x20Department.\x20</span>','filter','document_number_out','/data/data_loc','Email\x20for\x20Customer','<h5>\x20JEC\x20SMS\x20</h5>','accounting_account_id','English','params','data_loc','nodemailer','wms_account_id','Arabic','gross_price','redirect','host','English\x20(US)','wms_account_date','<h2>\x20JEC\x20SMS\x20</h2>','</div>','Types','invoice','image','<span>\x20Thank\x20you\x20for\x20your\x20prompt\x20attention\x20to\x20this\x20matter.\x20</span>','/data/data_rack','log','83152DqBuCK','toLocaleDateString','port','request_qty','errors','unit','23336UErimw','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','$product_details','$wms_account_id','ObjectId','$product_details.product_name','toString','account_data','</td>','string','1538383ZxUxdU','body','<thead\x20style=\x22width:\x20100%\x20!important;\x22>','$wms_data','../models/all_models','maxperunit','warehouse_id','map','find','password','level','primary_code','secondary_code','$room','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','Chinese','aggregate','headers','uuid','prod_id','room_name','$_id','product_stock','email','<tbody\x20style=\x22text-align:\x20center;\x22>','id_transaction_from','secondary_unit','</head><body>','<div>','stock','product_code','<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\x22\x20integrity=\x22sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\x22\x20crossorigin=\x22anonymous\x22></script>','$accounting_account_id','forEach','$product_details.product_stock','French','quantity','<span>\x20Request\x20Date:\x20<b>','abs','<tr>','prod_cat','Portuguese','sendMail','product_name','batch_code','Arabic\x20(ae)','Sales\x20Add\x20successfully','padStart','6413985xyXYuh','createTransport','</thead>','warehouse_approval','outgoing_id','get','OUT-','</tbody>','findOne','push','language','qty','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','$product_details.level','Hindi','/data/All','view_accounting_approval','success','<link\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\x22\x20rel=\x22stylesheet\x22\x20integrity=\x22sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\x22\x20crossorigin=\x22anonymous\x22>','Router','logo','5742624HHhapu','<strong>\x20Regards\x20</strong>','split','exceljs','mongoose','Portuguese\x20(BR)','<span>\x20A\x20product\x20request\x20has\x20been\x20submitted\x20by\x20the\x20Sales\x20Department\x20and\x20Approved\x20by\x20Accounting\x20that\x20requires\x20your\x20approval.\x20Below\x20are\x20the\x20details:\x20</span>\x20<br><br>','render','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','$account_data','</tr>','flash','outgoing_invoice','warehouse_detl','Must\x20not\x20be\x20greater\x20than\x20stock\x20Qty','$product_details._id','German','280xGKpWM','Error\x20Occurs','user','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>','</b></span>\x20<br><br>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','save','<html><head><title></title>','Spanish','staffs','findById','<hr\x20class=\x22my-3\x22>','length','<!DOCTYPE\x20html>','25431dKFTtI','</b></span>\x20<br>','product_details','2262543RUyMdv'];a0_0x57fa=function(){return _0x4b2ede;};return a0_0x57fa();}router[a0_0x34feba(0x228)]('/:id',auth,async(_0x4f932b,_0x2177f0)=>{var _0x30927e=a0_0x34feba;try{const _0x4c14da=await master_shop[_0x30927e(0x1fb)](),_0xa2eda1=_0x4f932b['user'],_0x57df40=await profile[_0x30927e(0x22b)]({'email':_0xa2eda1[_0x30927e(0x20a)]}),_0x161208=await staff[_0x30927e(0x22b)]({'email':_0xa2eda1[_0x30927e(0x20a)]}),_0x2ec336=await customer[_0x30927e(0x1fb)]({'agent_id':_0x161208[_0x30927e(0x1c2)]}),_0x15ac07=mongoose['Types']['ObjectId'],_0x3edeae=_0x4f932b[_0x30927e(0x1d1)]['id'],_0x14ed87=await sales_order[_0x30927e(0x1b3)](_0x3edeae),_0x36b10c=await sales_order[_0x30927e(0x203)]([{'$match':{'_id':_0x15ac07(_0x3edeae)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x30927e(0x213)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x30927e(0x1ec)}}},{'$lookup':{'from':'staffs','localField':_0x30927e(0x1cf),'foreignField':_0x30927e(0x1c2),'as':_0x30927e(0x1f0)}},{'$unwind':_0x30927e(0x241)},{'$lookup':{'from':'staffs','localField':_0x30927e(0x1d4),'foreignField':_0x30927e(0x1c2),'as':'wms_data'}},{'$unwind':_0x30927e(0x1f6)}]);if(_0x4c14da[0x0][_0x30927e(0x22d)]==_0x30927e(0x1d9))var _0x192273=users[_0x30927e(0x1d0)];else{if(_0x4c14da[0x0][_0x30927e(0x22d)]==_0x30927e(0x231))var _0x192273=users[_0x30927e(0x231)];else{if(_0x4c14da[0x0][_0x30927e(0x22d)]==_0x30927e(0x248))var _0x192273=users[_0x30927e(0x248)];else{if(_0x4c14da[0x0][_0x30927e(0x22d)]==_0x30927e(0x251))var _0x192273=users[_0x30927e(0x251)];else{if(_0x4c14da[0x0][_0x30927e(0x22d)]==_0x30927e(0x216))var _0x192273=users[_0x30927e(0x216)];else{if(_0x4c14da[0x0]['language']==_0x30927e(0x23d))var _0x192273=users[_0x30927e(0x21c)];else{if(_0x4c14da[0x0][_0x30927e(0x22d)]=='Chinese')var _0x192273=users[_0x30927e(0x202)];else{if(_0x4c14da[0x0]['language']==_0x30927e(0x220))var _0x192273=users['Arabic'];}}}}}}}_0x2177f0[_0x30927e(0x23f)](_0x30927e(0x226),{'success':_0x4f932b[_0x30927e(0x243)](_0x30927e(0x234)),'errors':_0x4f932b[_0x30927e(0x243)]('errors'),'master_shop':_0x4c14da,'profile':_0x57df40,'role':_0xa2eda1,'language':_0x192273,'customer':_0x2ec336,'sales_sa':_0x14ed87,'approvers':_0x36b10c[0x0],'the_id':_0x3edeae});}catch(_0x2866c8){console[_0x30927e(0x1e2)](_0x2866c8);}}),router[a0_0x34feba(0x1c8)]('/:id',auth,async(_0x56d79c,_0x1cb1cd)=>{var _0x1efdeb=a0_0x34feba;try{const {date:_0x42ebc4,invoice_data:_0x14d1ce,wms_confirm:_0x52270,the_id_val:_0x45c5a8,prod_id:_0xab8ef8,SCRN:_0x409d82,ReqBy:_0x196292,dateofreq:_0x5c5ae5,PO_number:_0x58b135,warehouse_name:_0xaf03b4,typeservicesData:_0x44ac2a,typevehicle:_0x251657,destination:_0x12ad48,deliverydate:_0x2f65cd,driver:_0x2b5fe5,plate:_0x21ae73,van:_0x40020c,DRSI:_0x5c3583,TSU:_0x1fb14c,TFU:_0x495690,note:_0x27728f}=_0x56d79c[_0x1efdeb(0x1f4)],_0x3c75f8=await sales_order[_0x1efdeb(0x1b3)](_0x45c5a8);if(typeof _0xab8ef8==_0x1efdeb(0x1f2))var _0x567ae6=[_0x56d79c['body'][_0x1efdeb(0x206)]],_0x5a0754=[_0x56d79c[_0x1efdeb(0x1f4)][_0x1efdeb(0x22e)]],_0x41b946=[_0x56d79c['body'][_0x1efdeb(0x1d2)]];else var _0x567ae6=[..._0x56d79c[_0x1efdeb(0x1f4)][_0x1efdeb(0x206)]],_0x5a0754=[..._0x56d79c[_0x1efdeb(0x1f4)][_0x1efdeb(0x22e)]],_0x41b946=[..._0x56d79c[_0x1efdeb(0x1f4)][_0x1efdeb(0x1d2)]];const _0x221206=_0x567ae6[_0x1efdeb(0x1fa)](_0x55681b=>{return _0x55681b={'prod_id':_0x55681b};});_0x41b946[_0x1efdeb(0x214)]((_0x37bc46,_0x4e1f83)=>{var _0x309964=_0x1efdeb,_0x2c5a21=_0x37bc46[_0x309964(0x23a)]('~');_0x221206[_0x4e1f83][_0x309964(0x1f9)]=_0x2c5a21[0x0],_0x221206[_0x4e1f83][_0x309964(0x245)]=_0x2c5a21[0x1];}),_0x5a0754[_0x1efdeb(0x214)]((_0x15551d,_0x3456df)=>{var _0x1ca7f0=_0x1efdeb;_0x221206[_0x3456df][_0x1ca7f0(0x1e6)]=_0x15551d;});var _0x4b83e1=[],_0x3cfe37=[],_0x30defe=[],_0x1e4347=[],_0x586c4f=[],_0x326421=[],_0x2a6372=[],_0x59bbc5=[],_0x2f1209=[],_0x3392d1=[],_0x2deaef=[],_0x174599=[],_0x189872=[],_0x4ba32e=[],_0x54c315=[],_0x1e338e=[],_0x169999=[],_0x796846=[],_0x1003f8=[],_0x497399=[];for(let _0x2d816e=0x0;_0x2d816e<=_0x221206['length']-0x1;_0x2d816e++){const _0x13f4fa=_0x221206[_0x2d816e],_0x450968=mongoose[_0x1efdeb(0x1dd)][_0x1efdeb(0x1ed)];var _0x1c62de=await warehouse[_0x1efdeb(0x203)]([{'$match':{'_id':_0x450968(_0x13f4fa['warehouse_id'])}},{'$unwind':_0x1efdeb(0x1eb)},{'$match':{'product_details._id':_0x450968(_0x13f4fa['warehouse_detl'])}}]),_0x57dc70=0x0;for(let _0x483b7d=0x0;_0x483b7d<=_0x1c62de['length']-0x1;_0x483b7d++){var _0x59d718=_0x1c62de[_0x483b7d];_0x59d718[_0x1efdeb(0x1b9)]['product_stock']<_0x13f4fa[_0x1efdeb(0x1e6)]&&_0x57dc70++;}if(_0x57dc70>0x0)return _0x56d79c[_0x1efdeb(0x243)](_0x1efdeb(0x1e7),_0x1efdeb(0x246)),_0x1cb1cd[_0x1efdeb(0x1d7)]('back');var _0x385ef6=0x0;for(let _0x4231bc=0x0;_0x4231bc<=_0x1c62de[_0x1efdeb(0x1b5)]-0x1;_0x4231bc++){var _0x59d718=_0x1c62de[_0x4231bc];_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x209)]>_0x13f4fa['request_qty']&&(_0x4b83e1[_0x1efdeb(0x22c)](_0x59d718['product_details'][_0x1efdeb(0x21e)]),_0x3cfe37['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x209)]),_0x30defe[_0x1efdeb(0x22c)](_0x13f4fa['request_qty']),_0x1e4347[_0x1efdeb(0x22c)](_0x59d718['product_details'][_0x1efdeb(0x1fe)]),_0x586c4f['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1ff)]),_0x326421['push'](_0x59d718[_0x1efdeb(0x1b9)]['product_code']),_0x2a6372['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1fd)]),_0x59bbc5['push'](_0x59d718[_0x1efdeb(0x1b9)]['bay']),_0x2f1209['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1e8)]),_0x3392d1[_0x1efdeb(0x22c)](_0x59d718[_0x1efdeb(0x1b9)]['secondary_unit']),_0x2deaef['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x21f)]),_0x174599[_0x1efdeb(0x22c)](_0x59d718['product_details']['expiry_date']),_0x189872[_0x1efdeb(0x22c)](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1bb)]),_0x4ba32e['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1bc)]),_0x54c315[_0x1efdeb(0x22c)](_0x59d718['product_details']['product_cat']),_0x1e338e['push'](_0x59d718[_0x1efdeb(0x1c5)]),_0x169999['push'](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1de)]),_0x796846[_0x1efdeb(0x22c)](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1c2)]),_0x1003f8[_0x1efdeb(0x22c)](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x205)]),_0x497399[_0x1efdeb(0x22c)](_0x59d718[_0x1efdeb(0x1b9)][_0x1efdeb(0x1d6)]),_0x385ef6++);}}const _0x42ef5c=_0x4b83e1[_0x1efdeb(0x1fa)](_0x49a0dd=>{return _0x49a0dd={'product_name':_0x49a0dd};});_0x3cfe37[_0x1efdeb(0x214)]((_0x21b595,_0x4c2d1e)=>{var _0x55b2f4=_0x1efdeb;_0x42ef5c[_0x4c2d1e][_0x55b2f4(0x210)]=_0x21b595;}),_0x30defe['forEach']((_0x2532f1,_0x28edc7)=>{var _0x4c061a=_0x1efdeb;_0x42ef5c[_0x28edc7][_0x4c061a(0x217)]=Math[_0x4c061a(0x219)](_0x2532f1);}),_0x497399[_0x1efdeb(0x214)]((_0x46cc19,_0x49eff8)=>{_0x42ef5c[_0x49eff8]['gross_price']=_0x46cc19;}),_0x1003f8[_0x1efdeb(0x214)]((_0x5aff30,_0x1b9ece)=>{var _0x5b5497=_0x1efdeb;_0x42ef5c[_0x1b9ece][_0x5b5497(0x205)]=_0x5aff30;}),_0x796846[_0x1efdeb(0x214)]((_0x3a1960,_0x340503)=>{var _0x2f1e7a=_0x1efdeb;_0x42ef5c[_0x340503][_0x2f1e7a(0x20c)]=_0x3a1960;}),_0x1e4347[_0x1efdeb(0x214)]((_0xf902d7,_0x4820d4)=>{var _0x56690=_0x1efdeb;_0x42ef5c[_0x4820d4][_0x56690(0x1fe)]=_0xf902d7;}),_0x586c4f['forEach']((_0x4d42e0,_0x143de0)=>{var _0x26c718=_0x1efdeb;_0x42ef5c[_0x143de0][_0x26c718(0x1ff)]=_0x4d42e0;}),_0x326421[_0x1efdeb(0x214)]((_0x4a4723,_0x2a17cc)=>{var _0x14b018=_0x1efdeb;_0x42ef5c[_0x2a17cc][_0x14b018(0x211)]=_0x4a4723;}),_0x2a6372['forEach']((_0x184fcb,_0x233261)=>{var _0xa86f1=_0x1efdeb;_0x42ef5c[_0x233261][_0xa86f1(0x1fd)]=_0x184fcb;}),_0x59bbc5['forEach']((_0x4eb267,_0x30b9e8)=>{_0x42ef5c[_0x30b9e8]['bay']=_0x4eb267;}),_0x2f1209[_0x1efdeb(0x214)]((_0x3ead3b,_0x4a51af)=>{var _0x49062a=_0x1efdeb;_0x42ef5c[_0x4a51af][_0x49062a(0x1e8)]=_0x3ead3b;}),_0x3392d1['forEach']((_0x528793,_0x304d0c)=>{var _0x24333d=_0x1efdeb;_0x42ef5c[_0x304d0c][_0x24333d(0x20d)]=_0x528793;}),_0x2deaef[_0x1efdeb(0x214)]((_0x2805ee,_0x3fb898)=>{var _0x16d0bc=_0x1efdeb;_0x42ef5c[_0x3fb898][_0x16d0bc(0x21f)]=_0x2805ee;}),_0x174599['forEach']((_0x425fd9,_0xdc9347)=>{_0x42ef5c[_0xdc9347]['expiry_date']=_0x425fd9;}),_0x189872['forEach']((_0x1740d6,_0x5d6ba5)=>{var _0x54d0ed=_0x1efdeb;_0x42ef5c[_0x5d6ba5][_0x54d0ed(0x1bb)]=_0x1740d6;}),_0x4ba32e[_0x1efdeb(0x214)]((_0x41c4b6,_0x20e9fb)=>{var _0xf26de2=_0x1efdeb;_0x42ef5c[_0x20e9fb][_0xf26de2(0x1f8)]=_0x41c4b6;}),_0x54c315[_0x1efdeb(0x214)]((_0x2b155b,_0x1a4589)=>{var _0x5ac8a5=_0x1efdeb;_0x42ef5c[_0x1a4589][_0x5ac8a5(0x21b)]=_0x2b155b;}),_0x1e338e[_0x1efdeb(0x214)]((_0x5ce67b,_0x3a9b12)=>{var _0x20f8cd=_0x1efdeb;_0x42ef5c[_0x3a9b12][_0x20f8cd(0x207)]=_0x5ce67b;}),_0x169999['forEach']((_0x395ee2,_0x3cec0c)=>{var _0x1c04a7=_0x1efdeb;_0x42ef5c[_0x3cec0c]['invoice']=_0x395ee2,_0x42ef5c[_0x3cec0c][_0x1c04a7(0x1c4)]=_0x42ebc4;});const _0x58a79c=new invoice_for_outgoing();await _0x58a79c['save'](),_0x169999['forEach']((_0x1bfff4,_0x10ff49)=>{var _0x1a2d95=_0x1efdeb;_0x42ef5c[_0x10ff49][_0x1a2d95(0x244)]=_0x1a2d95(0x229)+_0x58a79c['invoice_init'][_0x1a2d95(0x1ef)]()[_0x1a2d95(0x222)](0x8,'0');});const _0x42cdf3=_0x42ef5c[_0x1efdeb(0x1ca)](_0x3a24e1=>_0x3a24e1[_0x1efdeb(0x217)]!=='0'&&_0x3a24e1[_0x1efdeb(0x217)]!==''),_0x196894=new sales_finished({'invoice':'OUT-'+_0x58a79c['invoice_init']['toString']()[_0x1efdeb(0x222)](0x8,'0'),'date':_0x42ebc4,'warehouse_name':_0xaf03b4,'sale_product':_0x42cdf3,'note':_0x27728f,'SCRN':_0x409d82,'finalize':'False','ReqBy':_0x196292,'dateofreq':_0x5c5ae5,'PO_number':_0x58b135,'typeservicesData':_0x44ac2a,'typevehicle':_0x251657,'destination':_0x12ad48,'deliverydate':_0x2f65cd,'driver':_0x2b5fe5,'plate':_0x21ae73,'van':_0x40020c,'DRSI':_0x5c3583,'TSU':_0x1fb14c,'TFU':_0x495690}),_0x14e1dc=await _0x196894[_0x1efdeb(0x24f)](),_0xf6fee=new Date(),_0x1d418b=_0xf6fee[_0x1efdeb(0x1e4)]();_0x3c75f8['wms_account_confirm']=_0x52270,_0x3c75f8[_0x1efdeb(0x1da)]=_0x1d418b,_0x3c75f8[_0x1efdeb(0x1cb)]=_0x1efdeb(0x229)+_0x58a79c['invoice_init'][_0x1efdeb(0x1ef)]()[_0x1efdeb(0x222)](0x8,'0'),_0x3c75f8[_0x1efdeb(0x227)]=_0x14e1dc[_0x1efdeb(0x1c2)],await _0x3c75f8[_0x1efdeb(0x24f)]();const _0x487cf1=await master_shop[_0x1efdeb(0x1fb)](),_0x275a36=await email_settings['findOne']();let _0x4450f1=nodemailer[_0x1efdeb(0x224)]({'host':_0x275a36[_0x1efdeb(0x1d8)],'port':Number(_0x275a36[_0x1efdeb(0x1e5)]),'secure':![],'auth':{'user':_0x275a36[_0x1efdeb(0x20a)],'pass':_0x275a36[_0x1efdeb(0x1fc)]}});const _0x9494d2=_0x56d79c['protocol']+'://'+_0x56d79c[_0x1efdeb(0x204)][_0x1efdeb(0x1d8)];var _0x44a287=_0x3c75f8['sale_product'],_0x360c60='',_0x52b1f9,_0x35ef00=0x0;for(_0x52b1f9 in _0x44a287){_0x360c60+=_0x1efdeb(0x21a)+_0x1efdeb(0x1ea)+_0x44a287[_0x52b1f9][_0x1efdeb(0x21e)]+_0x1efdeb(0x1f1)+_0x1efdeb(0x1ea)+_0x44a287[_0x52b1f9][_0x1efdeb(0x211)]+_0x1efdeb(0x1f1)+_0x1efdeb(0x1ea)+_0x44a287[_0x52b1f9][_0x1efdeb(0x217)]+_0x1efdeb(0x1f1)+_0x1efdeb(0x1ea)+_0x44a287[_0x52b1f9][_0x1efdeb(0x1e8)]+_0x1efdeb(0x1f1)+'</tr>',_0x35ef00+=parseInt(_0x44a287[_0x52b1f9][_0x1efdeb(0x217)]);}let _0x6b73ab={'from':_0x275a36[_0x1efdeb(0x20a)],'to':_0x1efdeb(0x1c7),'subject':_0x1efdeb(0x1cd),'attachments':[{'filename':'Logo.png','path':__dirname+'/../public'+'/upload/'+_0x487cf1[0x0][_0x1efdeb(0x1df)],'cid':_0x1efdeb(0x237)}],'html':_0x1efdeb(0x1b6)+_0x1efdeb(0x250)+_0x1efdeb(0x235)+_0x1efdeb(0x20e)+_0x1efdeb(0x20f)+_0x1efdeb(0x201)+_0x1efdeb(0x20f)+_0x1efdeb(0x240)+_0x1efdeb(0x1dc)+_0x1efdeb(0x20f)+_0x1efdeb(0x1db)+'</div>'+_0x1efdeb(0x1dc)+_0x1efdeb(0x1b4)+_0x1efdeb(0x20f)+_0x1efdeb(0x1dc)+_0x1efdeb(0x20f)+_0x1efdeb(0x23e)+_0x1efdeb(0x1dc)+_0x1efdeb(0x20f)+'<span>\x20Request\x20ID:\x20<b>'+_0x3c75f8[_0x1efdeb(0x1de)]+_0x1efdeb(0x1b8)+_0x1efdeb(0x218)+_0x3c75f8['date']+_0x1efdeb(0x24d)+_0x1efdeb(0x1dc)+'<table\x20style=\x22width:\x20100%\x20!important;\x22>'+_0x1efdeb(0x1f5)+_0x1efdeb(0x21a)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>'+_0x1efdeb(0x24c)+_0x1efdeb(0x22f)+_0x1efdeb(0x24e)+_0x1efdeb(0x242)+_0x1efdeb(0x225)+_0x1efdeb(0x20b)+'\x20'+_0x360c60+'\x20'+_0x1efdeb(0x22a)+'</table>'+_0x1efdeb(0x20f)+_0x1efdeb(0x1c9)+_0x1efdeb(0x1e0)+'<br><br><br>'+_0x1efdeb(0x1dc)+_0x1efdeb(0x20f)+_0x1efdeb(0x239)+_0x1efdeb(0x1ce)+_0x1efdeb(0x1dc)+_0x1efdeb(0x1dc)+_0x1efdeb(0x212)+_0x1efdeb(0x1c6)};_0x4450f1[_0x1efdeb(0x21d)](_0x6b73ab,function(_0x356172,_0x40a65b){var _0x302d40=_0x1efdeb;_0x356172?(console[_0x302d40(0x1e2)](_0x356172),console[_0x302d40(0x1e2)](_0x302d40(0x24a))):console[_0x302d40(0x1e2)]('Email\x20sent\x20successfully');}),_0x56d79c[_0x1efdeb(0x243)](_0x1efdeb(0x234),_0x1efdeb(0x221)),_0x1cb1cd[_0x1efdeb(0x1d7)]('/all_sales_finished/preview/'+_0x14e1dc[_0x1efdeb(0x1c2)]),_0x1cb1cd[_0x1efdeb(0x1bf)](_0x42cdf3);return;}catch(_0x3894aa){}}),router['get'](a0_0x34feba(0x1bd),auth,async(_0x5c8a2d,_0x971dca)=>{var _0x763133=a0_0x34feba;try{const _0x2deccd=await master_shop['find'](),_0xa91c9b=_0x5c8a2d['user'],_0x2e5a88=await profile[_0x763133(0x22b)]({'email':_0xa91c9b[_0x763133(0x20a)]}),_0x352693=await staff[_0x763133(0x22b)]({'email':_0xa91c9b[_0x763133(0x20a)]}),_0x447489=await customer[_0x763133(0x1fb)]({'agent_id':_0x352693['_id']}),_0x1b43f9=mongoose[_0x763133(0x1dd)][_0x763133(0x1ed)],_0x2a4afe=_0x5c8a2d[_0x763133(0x1d1)]['id'],_0x4a33a0=await sales_order[_0x763133(0x1b3)](_0x2a4afe),_0x557e8d=await sales_order[_0x763133(0x203)]([{'$match':{'_id':_0x1b43f9(_0x2a4afe)}},{'$addFields':{'accounting_account_id':{'$toObjectId':_0x763133(0x213)}}},{'$addFields':{'wms_account_id':{'$toObjectId':_0x763133(0x1ec)}}},{'$lookup':{'from':_0x763133(0x252),'localField':_0x763133(0x1cf),'foreignField':_0x763133(0x1c2),'as':'account_data'}},{'$unwind':_0x763133(0x241)},{'$lookup':{'from':'staffs','localField':_0x763133(0x1d4),'foreignField':_0x763133(0x1c2),'as':'wms_data'}},{'$unwind':_0x763133(0x1f6)}]);if(_0x2deccd[0x0][_0x763133(0x22d)]=='English\x20(US)')var _0x1b6b92=users[_0x763133(0x1d0)];else{if(_0x2deccd[0x0][_0x763133(0x22d)]==_0x763133(0x231))var _0x1b6b92=users[_0x763133(0x231)];else{if(_0x2deccd[0x0][_0x763133(0x22d)]==_0x763133(0x248))var _0x1b6b92=users[_0x763133(0x248)];else{if(_0x2deccd[0x0][_0x763133(0x22d)]==_0x763133(0x251))var _0x1b6b92=users[_0x763133(0x251)];else{if(_0x2deccd[0x0]['language']==_0x763133(0x216))var _0x1b6b92=users[_0x763133(0x216)];else{if(_0x2deccd[0x0][_0x763133(0x22d)]==_0x763133(0x23d))var _0x1b6b92=users[_0x763133(0x21c)];else{if(_0x2deccd[0x0][_0x763133(0x22d)]==_0x763133(0x202))var _0x1b6b92=users[_0x763133(0x202)];else{if(_0x2deccd[0x0][_0x763133(0x22d)]==_0x763133(0x220))var _0x1b6b92=users[_0x763133(0x1d5)];}}}}}}}_0x971dca[_0x763133(0x23f)](_0x763133(0x233),{'success':_0x5c8a2d[_0x763133(0x243)](_0x763133(0x234)),'errors':_0x5c8a2d[_0x763133(0x243)](_0x763133(0x1e7)),'master_shop':_0x2deccd,'profile':_0x2e5a88,'role':_0xa91c9b,'language':_0x1b6b92,'customer':_0x447489,'sales_sa':_0x4a33a0,'approvers':_0x557e8d[0x0],'the_id':_0x2a4afe});}catch(_0x34decd){console[_0x763133(0x1e2)](_0x34decd);}}),router[a0_0x34feba(0x1c8)](a0_0x34feba(0x1e1),auth,async(_0x1fe7d3,_0x3a287a)=>{var _0x29b319=a0_0x34feba;try{const {warehouse_name:_0x3e60fe,product_code:_0x1c291e}=_0x1fe7d3[_0x29b319(0x1f4)],_0x5b7b26=await warehouse[_0x29b319(0x203)]([{'$match':{'name':_0x3e60fe}},{'$unwind':_0x29b319(0x1eb)},{'$match':{'product_details.product_code':_0x1c291e}},{'$group':{'_id':{'room':_0x29b319(0x200),'_id':_0x29b319(0x208)}}}]);_0x3a287a[_0x29b319(0x1bf)](_0x5b7b26);}catch(_0x9abdfb){}}),router[a0_0x34feba(0x1c8)](a0_0x34feba(0x1cc),auth,async(_0x18090e,_0x4acc04)=>{var _0xf2cdd2=a0_0x34feba;try{const {warehouse_name:_0x515147,product_code:_0x9815e7,room_name:_0x23869c}=_0x18090e['body'];console[_0xf2cdd2(0x1e2)](_0x18090e[_0xf2cdd2(0x1f4)]);const _0x1e4340=await warehouse['aggregate']([{'$match':{'name':_0x515147,'room':_0x23869c}},{'$unwind':_0xf2cdd2(0x1eb)},{'$match':{'product_details.product_code':_0x9815e7}},{'$group':{'_id':{'main_id':_0xf2cdd2(0x208),'detl_id':_0xf2cdd2(0x247),'product_name':_0xf2cdd2(0x1ee),'product_code':'$product_details.product_code','level':_0xf2cdd2(0x230),'bay':'$product_details.bay','stocks':_0xf2cdd2(0x215)}}}]);_0x4acc04['json'](_0x1e4340);}catch(_0x573f0f){}}),router[a0_0x34feba(0x228)](a0_0x34feba(0x232),auth,async(_0x48f650,_0x38356b)=>{var _0x2fea47=a0_0x34feba;try{const {sttaff_id:_0x48f182,email:_0x4a06b6,warehouse:_0xdb224e}=_0x48f650[_0x2fea47(0x24b)],_0x541704=await master_shop[_0x2fea47(0x1fb)](),_0x4f5349=_0x48f650['user'],_0x144c17=await profile[_0x2fea47(0x22b)]({'email':_0x4f5349['email']}),_0xca5a95=await sales_order[_0x2fea47(0x1fb)]({'wms_account_id':_0x48f182});if(_0x541704[0x0][_0x2fea47(0x22d)]==_0x2fea47(0x1d9))var _0x2b16fd=users['English'];else{if(_0x541704[0x0][_0x2fea47(0x22d)]==_0x2fea47(0x231))var _0x2b16fd=users[_0x2fea47(0x231)];else{if(_0x541704[0x0]['language']=='German')var _0x2b16fd=users['German'];else{if(_0x541704[0x0][_0x2fea47(0x22d)]==_0x2fea47(0x251))var _0x2b16fd=users[_0x2fea47(0x251)];else{if(_0x541704[0x0]['language']==_0x2fea47(0x216))var _0x2b16fd=users[_0x2fea47(0x216)];else{if(_0x541704[0x0][_0x2fea47(0x22d)]==_0x2fea47(0x23d))var _0x2b16fd=users[_0x2fea47(0x21c)];else{if(_0x541704[0x0][_0x2fea47(0x22d)]==_0x2fea47(0x202))var _0x2b16fd=users[_0x2fea47(0x202)];else{if(_0x541704[0x0]['language']==_0x2fea47(0x220))var _0x2b16fd=users[_0x2fea47(0x1d5)];}}}}}}}_0x38356b['render']('warehouse_approval_All',{'success':_0x48f650[_0x2fea47(0x243)](_0x2fea47(0x234)),'errors':_0x48f650['flash']('errors'),'master_shop':_0x541704,'profile':_0x144c17,'role':_0x4f5349,'language':_0x2b16fd,'sales_order':_0xca5a95});}catch(_0x47cfe4){}}),module[a0_0x34feba(0x1be)]=router;