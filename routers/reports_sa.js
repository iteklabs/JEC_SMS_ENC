function a0_0x5577(){const _0x3ba2d0=['102rWJTKd','Router','5816200wXwVuo','12ZDZLPo','express','flash','../models/all_models','Chinese','English\x20(US)','Arabic','exceljs','20317TbGmBo','find','French','211758KhOrWO','product_list','7987609BvHOfV','exports','3012gmURRn','219980WMvOeo','4370vbLufN','../middleware/auth','3343572KYEzNm','Portuguese','German','language','Hindi','findOne','reports_sa','xlsx','1623CgjGew','errors','user','log','../public/language/languages.json','/view','Spanish','_id'];a0_0x5577=function(){return _0x3ba2d0;};return a0_0x5577();}const a0_0x52cc02=a0_0x4cc2;function a0_0x4cc2(_0x7e8f7e,_0x3ac2fc){const _0x55776b=a0_0x5577();return a0_0x4cc2=function(_0x4cc209,_0x54ea87){_0x4cc209=_0x4cc209-0xed;let _0x30da9c=_0x55776b[_0x4cc209];return _0x30da9c;},a0_0x4cc2(_0x7e8f7e,_0x3ac2fc);}(function(_0x416b8e,_0x5e4715){const _0x4f736d=a0_0x4cc2,_0x28dc7c=_0x416b8e();while(!![]){try{const _0x5d1db7=parseInt(_0x4f736d(0x106))/0x1*(-parseInt(_0x4f736d(0xfb))/0x2)+-parseInt(_0x4f736d(0xf0))/0x3*(-parseInt(_0x4f736d(0x10a))/0x4)+parseInt(_0x4f736d(0x10b))/0x5*(parseInt(_0x4f736d(0xf8))/0x6)+parseInt(_0x4f736d(0x108))/0x7+-parseInt(_0x4f736d(0xfa))/0x8+-parseInt(_0x4f736d(0x10e))/0x9+parseInt(_0x4f736d(0x10c))/0xa*(parseInt(_0x4f736d(0x103))/0xb);if(_0x5d1db7===_0x5e4715)break;else _0x28dc7c['push'](_0x28dc7c['shift']());}catch(_0x4bd6f0){_0x28dc7c['push'](_0x28dc7c['shift']());}}}(a0_0x5577,0xb34f2));const express=require(a0_0x52cc02(0xfc)),app=express(),router=express[a0_0x52cc02(0xf9)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up,invoice_sa,sales_sa}=require(a0_0x52cc02(0xfe)),auth=require(a0_0x52cc02(0x10d)),users=require(a0_0x52cc02(0xf4)),excelJS=require(a0_0x52cc02(0x102)),xlsx=require(a0_0x52cc02(0xef)),mongoose=require('mongoose');router['get'](a0_0x52cc02(0xf5),auth,async(_0x465d96,_0x1f14d8)=>{const _0x33e89a=a0_0x52cc02;try{const _0x3971e7=await master_shop[_0x33e89a(0x104)](),_0x43adb8=_0x465d96[_0x33e89a(0xf2)],_0x3eb4a3=await profile['findOne']({'email':_0x43adb8['email']}),_0x3b368b=await staff[_0x33e89a(0xed)]({'email':_0x43adb8['email']}),_0x23c15b=await sales_sa['find']({'sales_staff_id':_0x3b368b[_0x33e89a(0xf7)]});if(_0x3971e7[0x0]['language']==_0x33e89a(0x100))var _0x4334bc=users['English'];else{if(_0x3971e7[0x0][_0x33e89a(0x111)]==_0x33e89a(0x112))var _0x4334bc=users['Hindi'];else{if(_0x3971e7[0x0][_0x33e89a(0x111)]==_0x33e89a(0x110))var _0x4334bc=users[_0x33e89a(0x110)];else{if(_0x3971e7[0x0]['language']==_0x33e89a(0xf6))var _0x4334bc=users[_0x33e89a(0xf6)];else{if(_0x3971e7[0x0][_0x33e89a(0x111)]==_0x33e89a(0x105))var _0x4334bc=users[_0x33e89a(0x105)];else{if(_0x3971e7[0x0]['language']=='Portuguese\x20(BR)')var _0x4334bc=users[_0x33e89a(0x10f)];else{if(_0x3971e7[0x0][_0x33e89a(0x111)]=='Chinese')var _0x4334bc=users[_0x33e89a(0xff)];else{if(_0x3971e7[0x0]['language']=='Arabic\x20(ae)')var _0x4334bc=users[_0x33e89a(0x101)];}}}}}}}_0x1f14d8['render'](_0x33e89a(0xee),{'success':_0x465d96[_0x33e89a(0xfd)]('success'),'errors':_0x465d96['flash'](_0x33e89a(0xf1)),'master_shop':_0x3971e7,'profile':_0x3eb4a3,'role':_0x43adb8,'language':_0x4334bc,'product_list':_0x3b368b[_0x33e89a(0x107)],'sales_mine':_0x23c15b});}catch(_0x1f02f4){console[_0x33e89a(0xf3)](_0x1f02f4);}}),module[a0_0x52cc02(0x109)]=router;