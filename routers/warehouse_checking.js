const a0_0x5d9acb=a0_0x4759;function a0_0x1dbb(){const _0x5e0746=['_id','Arabic','errors','French','exports','json','split','Hindi','5129192qsJOxj','unit','bay','length','Portuguese','../models/all_models','cancel','nodemailer','body','inc','product_stock','5DdrIUT','room_name','production_date','72187yUvtlg','email','post','product_code','out','Spanish','sort','isUsed','/view/','English','../middleware/auth','product_name','Router','level','date_time','897324nMIsdl','3679998yJqWBZ','isConfirm','language','true','10LpHJYX','primary_code','isAvailable','false','/cancel_data','/view_data_all','batch_code','user','14OTvVEa','confirm_by','4240539wGidOm','warehouse','ejs','success','find','data_type','Portuguese\x20(BR)','maxperunit','Chinese','secondary_code','map','invoice','log','alertQTY','4877124CBTrRT','product_details','save','3568080GHYUvr','findOne','date_recieved','maxStocks','English\x20(US)'];a0_0x1dbb=function(){return _0x5e0746;};return a0_0x1dbb();}(function(_0x6020e6,_0x7ce138){const _0x3e4524=a0_0x4759,_0x4eef48=_0x6020e6();while(!![]){try{const _0x254e88=parseInt(_0x3e4524(0x90))/0x1*(parseInt(_0x3e4524(0xac))/0x2)+-parseInt(_0x3e4524(0x9f))/0x3+-parseInt(_0x3e4524(0xbf))/0x4+-parseInt(_0x3e4524(0x8d))/0x5*(-parseInt(_0x3e4524(0xbc))/0x6)+parseInt(_0x3e4524(0xa0))/0x7+-parseInt(_0x3e4524(0x82))/0x8+-parseInt(_0x3e4524(0xae))/0x9*(-parseInt(_0x3e4524(0xa4))/0xa);if(_0x254e88===_0x7ce138)break;else _0x4eef48['push'](_0x4eef48['shift']());}catch(_0x5b068b){_0x4eef48['push'](_0x4eef48['shift']());}}}(a0_0x1dbb,0x75dd3));const express=require('express'),app=express(),router=express[a0_0x5d9acb(0x9c)](),{warehouse_validation_setup,master_shop,profile,warehouse,warehouse_temporary}=require(a0_0x5d9acb(0x87)),auth=require(a0_0x5d9acb(0x9a)),nodemailer=require(a0_0x5d9acb(0x89));var ejs=require(a0_0x5d9acb(0xb0));function a0_0x4759(_0x2143a4,_0x1a4120){const _0x1dbb2f=a0_0x1dbb();return a0_0x4759=function(_0x4759c2,_0x15ef15){_0x4759c2=_0x4759c2-0x81;let _0x280c41=_0x1dbb2f[_0x4759c2];return _0x280c41;},a0_0x4759(_0x2143a4,_0x1a4120);}const path=require('path'),users=require('../public/language/languages.json');router['get'](a0_0x5d9acb(0x98),auth,async(_0x58bb36,_0x42abcd)=>{const _0x2822f0=a0_0x5d9acb;try{const {username:_0x203f10,email:_0x5779b7,role:_0x473c8f}=_0x58bb36['user'],_0x37d552=_0x58bb36[_0x2822f0(0xab)],_0x58d699=await profile['findOne']({'email':_0x37d552[_0x2822f0(0x91)]}),_0x12959b=await master_shop[_0x2822f0(0xb2)]();if(_0x12959b[0x0]['language']==_0x2822f0(0xc3))var _0x20ee7d=users[_0x2822f0(0x99)];else{if(_0x12959b[0x0][_0x2822f0(0xa2)]==_0x2822f0(0x81))var _0x20ee7d=users[_0x2822f0(0x81)];else{if(_0x12959b[0x0][_0x2822f0(0xa2)]=='German')var _0x20ee7d=users['German'];else{if(_0x12959b[0x0][_0x2822f0(0xa2)]==_0x2822f0(0x95))var _0x20ee7d=users[_0x2822f0(0x95)];else{if(_0x12959b[0x0][_0x2822f0(0xa2)]==_0x2822f0(0xc7))var _0x20ee7d=users[_0x2822f0(0xc7)];else{if(_0x12959b[0x0][_0x2822f0(0xa2)]==_0x2822f0(0xb4))var _0x20ee7d=users[_0x2822f0(0x86)];else{if(_0x12959b[0x0]['language']=='Chinese')var _0x20ee7d=users[_0x2822f0(0xb6)];else{if(_0x12959b[0x0][_0x2822f0(0xa2)]=='Arabic\x20(ae)')var _0x20ee7d=users[_0x2822f0(0xc5)];}}}}}}}_0x42abcd['render']('warehouse_checking',{'success':_0x58bb36['flash'](_0x2822f0(0xb1)),'errors':_0x58bb36['flash'](_0x2822f0(0xc6)),'profile':_0x58d699,'master_shop':_0x12959b,'role':_0x37d552,'language':_0x20ee7d});}catch(_0x307612){console[_0x2822f0(0xba)](_0x307612);}}),router['post']('/check_to_confirm',auth,async(_0xffaa69,_0x458eb2)=>{const _0xc3b2d3=a0_0x5d9acb;try{const {product_code:_0x4eae4e,type_of_process:_0x3bd2b7}=_0xffaa69[_0xc3b2d3(0x8a)];var _0x4f522e=_0x4eae4e[_0xc3b2d3(0xca)]('~');const _0x345188=_0x4f522e[0x0],_0xdc4185=_0x4f522e[0x1],_0x10310f=_0x4f522e[0x2],_0x2afce3=_0x4f522e[0x3],_0x32ac47=await warehouse_temporary[_0xc3b2d3(0xb2)]({'warehouse':_0x345188,'room_name':_0xdc4185,'level':_0x10310f,'bay':_0x2afce3,'data_type':_0x3bd2b7,'isConfirm':_0xc3b2d3(0xa7)});_0x458eb2[_0xc3b2d3(0xc9)](_0x32ac47);}catch(_0x3f5c59){console[_0xc3b2d3(0xba)](_0x3f5c59);}}),router['post']('/confirm_data',auth,async(_0xeea9cc,_0x2d64de)=>{const _0x54bb39=a0_0x5d9acb;try{const {id_data:_0x566441}=_0xeea9cc[_0x54bb39(0x8a)],_0x56fe91=await warehouse_temporary[_0x54bb39(0xb2)]({'_id':_0x566441}),_0x3d215a=_0xeea9cc[_0x54bb39(0xab)],_0x216f1a=new Date();for(let _0x352adb=0x0;_0x352adb<=_0x56fe91[_0x54bb39(0x85)]-0x1;_0x352adb++){const _0x5e9d40=_0x56fe91[_0x352adb];var _0x551ae1=0x0;if(_0x5e9d40[_0x54bb39(0xb3)]==_0x54bb39(0x8b)){var _0x168d97=await warehouse[_0x54bb39(0xc0)]({'name':_0x5e9d40['warehouse'],'room':_0x5e9d40[_0x54bb39(0x8e)]});const _0x4a1de3=_0x168d97['product_details'][_0x54bb39(0xb8)](_0x5ea177=>{const _0x587ae2=_0x54bb39;_0x5ea177[_0x587ae2(0x9b)]==_0x5e9d40[_0x587ae2(0x9b)]&&_0x5ea177['primary_code']==_0x5e9d40[_0x587ae2(0xa5)]&&_0x5ea177[_0x587ae2(0xb7)]==_0x5e9d40[_0x587ae2(0xb7)]&&_0x5ea177[_0x587ae2(0x93)]==_0x5e9d40['product_code']&&_0x5ea177['bay']==_0x5e9d40[_0x587ae2(0x84)]&&_0x5ea177[_0x587ae2(0x9d)]==_0x5e9d40[_0x587ae2(0x9d)]&&_0x5ea177['date_recieved']==_0x5e9d40[_0x587ae2(0xc1)]&&(_0x5ea177[_0x587ae2(0x8c)]=parseInt(_0x5ea177[_0x587ae2(0x8c)])+parseInt(_0x5e9d40[_0x587ae2(0x8c)]),_0x551ae1++);});_0x551ae1=='0'&&(_0x168d97['product_details']=_0x168d97[_0x54bb39(0xbd)]['concat']({'product_name':_0x5e9d40[_0x54bb39(0x9b)],'product_stock':_0x5e9d40[_0x54bb39(0x8c)],'primary_code':_0x5e9d40[_0x54bb39(0xa5)],'secondary_code':_0x5e9d40[_0x54bb39(0xb7)],'product_code':_0x5e9d40[_0x54bb39(0x93)],'bay':_0x5e9d40[_0x54bb39(0x84)],'level':_0x5e9d40['level'],'maxProducts':_0x5e9d40[_0x54bb39(0xc2)],'unit':_0x5e9d40[_0x54bb39(0x83)],'secondary_unit':_0x5e9d40['secondary_unit'],'maxPerUnit':_0x5e9d40[_0x54bb39(0xb5)],'alertQTY':_0x5e9d40[_0x54bb39(0xbb)],'production_date':_0x5e9d40[_0x54bb39(0x8f)],'expiry_date':_0x5e9d40['expiry_date'],'batch_code':_0x5e9d40[_0x54bb39(0xaa)],'invoice':_0x5e9d40[_0x54bb39(0xb9)],'product_cat':_0x5e9d40['product_cat'],'uuid':_0x5e9d40['uuid'],'gross_price':_0x5e9d40['gross_price'],'date_recieved':_0x5e9d40[_0x54bb39(0xc1)],'isAvailable':_0x54bb39(0xa3),'isUsed':_0x54bb39(0xa7),'warehouse_id_temp_inc':_0x5e9d40['_id']})),_0x56fe91[_0x352adb][_0x54bb39(0xa1)]='true',_0x56fe91[_0x352adb][_0x54bb39(0xad)]=_0x3d215a[_0x54bb39(0x91)],_0x56fe91[_0x352adb][_0x54bb39(0x9e)]=_0x216f1a,await _0x56fe91[_0x352adb]['save'](),await _0x168d97['save']();}else{if(_0x5e9d40[_0x54bb39(0xb3)]==_0x54bb39(0x94)){var _0x168d97=await warehouse[_0x54bb39(0xc0)]({'name':_0x5e9d40[_0x54bb39(0xaf)],'room':_0x5e9d40[_0x54bb39(0x8e)]});const _0x49db8b=_0x168d97[_0x54bb39(0xbd)][_0x54bb39(0xb8)](_0x463fe6=>{const _0x4c2681=_0x54bb39;_0x463fe6[_0x4c2681(0x9b)]==_0x5e9d40[_0x4c2681(0x9b)]&&_0x463fe6['primary_code']==_0x5e9d40[_0x4c2681(0xa5)]&&_0x463fe6['secondary_code']==_0x5e9d40['secondary_code']&&_0x463fe6[_0x4c2681(0x93)]==_0x5e9d40['product_code']&&_0x463fe6[_0x4c2681(0xc4)]==_0x5e9d40['warehouse_id_detl']&&(_0x463fe6[_0x4c2681(0x8c)]=parseInt(_0x463fe6[_0x4c2681(0x8c)])-parseInt(_0x5e9d40[_0x4c2681(0x8c)]),_0x463fe6[_0x4c2681(0x8c)]==0x0?(_0x463fe6[_0x4c2681(0xa6)]=_0x4c2681(0xa7),_0x56fe91[_0x352adb][_0x4c2681(0xa6)]=_0x4c2681(0xa7),_0x56fe91[_0x352adb]['isUsed']='true'):_0x56fe91[_0x352adb][_0x4c2681(0x97)]=_0x4c2681(0xa7),_0x463fe6['isUsed']='false',_0x551ae1++);});_0x56fe91[_0x352adb][_0x54bb39(0xa1)]='true',_0x56fe91[_0x352adb][_0x54bb39(0xad)]=_0x3d215a[_0x54bb39(0x91)],_0x56fe91[_0x352adb]['date_time']=_0x216f1a,await _0x56fe91[_0x352adb]['save'](),await _0x168d97[_0x54bb39(0xbe)]();}}}_0x2d64de[_0x54bb39(0xc9)]({'data_main':_0x56fe91,'data_warehouse':_0x168d97});}catch(_0x2b4680){console[_0x54bb39(0xba)](_0x2b4680);}}),router[a0_0x5d9acb(0x92)](a0_0x5d9acb(0xa8),auth,async(_0x28528c,_0x1550c0)=>{const _0x56840c=a0_0x5d9acb;try{const {id_data:_0x46cdf9}=_0x28528c[_0x56840c(0x8a)],_0xada58f=await warehouse_temporary[_0x56840c(0xb2)]({'_id':_0x46cdf9}),_0x5e058f=_0x28528c[_0x56840c(0xab)],_0x3279f4=new Date();for(let _0x3fe71e=0x0;_0x3fe71e<=_0xada58f['length']-0x1;_0x3fe71e++){const _0x348e52=_0xada58f[_0x3fe71e];var _0x36ec03=0x0;if(_0x348e52['data_type']==_0x56840c(0x94)){var _0x5e0d34=await warehouse[_0x56840c(0xc0)]({'name':_0x348e52['warehouse'],'room':_0x348e52[_0x56840c(0x8e)]});const _0x5e7e26=_0x5e0d34[_0x56840c(0xbd)][_0x56840c(0xb8)](_0x139006=>{const _0x39e0cd=_0x56840c;_0x139006[_0x39e0cd(0x9b)]==_0x348e52['product_name']&&_0x139006[_0x39e0cd(0xa5)]==_0x348e52[_0x39e0cd(0xa5)]&&_0x139006[_0x39e0cd(0xb7)]==_0x348e52[_0x39e0cd(0xb7)]&&_0x139006[_0x39e0cd(0x93)]==_0x348e52[_0x39e0cd(0x93)]&&_0x139006[_0x39e0cd(0xc4)]==_0x348e52['warehouse_id_detl']&&(_0x139006[_0x39e0cd(0xa6)]=_0x39e0cd(0xa3),_0xada58f[_0x3fe71e][_0x39e0cd(0xa6)]=_0x39e0cd(0x88),_0xada58f[_0x3fe71e][_0x39e0cd(0x97)]='true',_0xada58f[_0x3fe71e][_0x39e0cd(0xad)]=_0x5e058f['email'],_0xada58f[_0x3fe71e]['date_time']=_0x3279f4,_0x139006[_0x39e0cd(0x97)]=_0x39e0cd(0xa7),_0x36ec03++);});_0xada58f[_0x3fe71e][_0x56840c(0xa1)]=_0x56840c(0xa3),await _0xada58f[_0x3fe71e]['save'](),await _0x5e0d34[_0x56840c(0xbe)]();}}_0x1550c0['json']({'data_main':_0xada58f,'data_warehouse':_0x5e0d34});}catch(_0x4265b5){console[_0x56840c(0xba)](_0x4265b5);}}),router['post'](a0_0x5d9acb(0xa9),auth,async(_0x4a5bf8,_0x4e8ee3)=>{const _0x5c3f12=a0_0x5d9acb;try{const {data_show:_0x4d73ec,type_proc:_0x54ce4a}=_0x4a5bf8['body'];if(_0x4d73ec=='All'){const _0x25e4a8=await warehouse_temporary['find']({'isConfirm':_0x5c3f12(0xa3),'data_type':_0x54ce4a})[_0x5c3f12(0x96)]({'level':0x1,'bin':0x1});_0x4e8ee3['json'](_0x25e4a8);}else{const _0x50142b=await warehouse_temporary[_0x5c3f12(0xb2)]({'isConfirm':_0x4d73ec,'data_type':_0x54ce4a})[_0x5c3f12(0x96)]({'level':0x1,'bin':0x1});_0x4e8ee3[_0x5c3f12(0xc9)](_0x50142b);}}catch(_0x4581d2){console[_0x5c3f12(0xba)](_0x4581d2);}}),module[a0_0x5d9acb(0xc8)]=router;