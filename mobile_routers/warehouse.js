const a0_0xeba582=a0_0x395b;(function(_0x2154b3,_0x873e09){const _0x3ec413=a0_0x395b,_0x2e6cb9=_0x2154b3();while(!![]){try{const _0x14a718=parseInt(_0x3ec413(0xfd))/0x1+parseInt(_0x3ec413(0x107))/0x2*(parseInt(_0x3ec413(0x10e))/0x3)+parseInt(_0x3ec413(0x10a))/0x4+-parseInt(_0x3ec413(0x11a))/0x5+-parseInt(_0x3ec413(0xfc))/0x6+parseInt(_0x3ec413(0x103))/0x7+parseInt(_0x3ec413(0x100))/0x8*(-parseInt(_0x3ec413(0x11f))/0x9);if(_0x14a718===_0x873e09)break;else _0x2e6cb9['push'](_0x2e6cb9['shift']());}catch(_0x2ae94c){_0x2e6cb9['push'](_0x2e6cb9['shift']());}}}(a0_0x2240,0x20266));const express=require(a0_0xeba582(0x11d)),app=express(),router=express[a0_0xeba582(0x104)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require(a0_0xeba582(0x105)),auth=require(a0_0xeba582(0x10b)),nodemailer=require(a0_0xeba582(0x114));function a0_0x2240(){const _0x247fe2=['$name','124380MXpJiU','../middleware/auth','random','body','779313YBVxkx','path','message','length','/room','post','nodemailer','json','../public/language/languages.json','status','/view','log','312245TQGaeM','/supplier','Return\x20Goods','express','Finished\x20Goods','4075317kCmAPj','Enabled','524490TIjRSF','254086bXoAYO','table\x20page','Raw\x20Materials','8fCHhgS','exports','floor','1325877WhdOpP','Router','../models/all_models','aggregate','2ghKKeW','INC-'];a0_0x2240=function(){return _0x247fe2;};return a0_0x2240();}function a0_0x395b(_0x30dbd6,_0x35625c){const _0x2240fa=a0_0x2240();return a0_0x395b=function(_0x395b50,_0x1443ab){_0x395b50=_0x395b50-0xfb;let _0x1a892b=_0x2240fa[_0x395b50];return _0x1a892b;},a0_0x395b(_0x30dbd6,_0x35625c);}var ejs=require('ejs');const path=require(a0_0xeba582(0x10f)),users=require(a0_0xeba582(0x116));router['post'](a0_0xeba582(0x118),async(_0xc10b42,_0x238247)=>{const _0x37b8e2=a0_0xeba582;try{const {warehouse_category:_0x3564be}=_0xc10b42['body'];if(_0x3564be=='RM'){const _0xf5e920=await warehouse['aggregate']([{'$match':{'status':_0x37b8e2(0xfb),'warehouse_category':_0x37b8e2(0xff),'name':{'$ne':_0x37b8e2(0x11c)}}},{'$group':{'_id':_0x37b8e2(0x109),'name':{'$first':_0x37b8e2(0x109)}}}]);_0x238247[_0x37b8e2(0x115)](_0xf5e920);}else{const _0x57ea2e=await warehouse[_0x37b8e2(0x106)]([{'$match':{'status':_0x37b8e2(0xfb),'warehouse_category':_0x37b8e2(0x11e),'name':{'$ne':_0x37b8e2(0x11c)}}},{'$group':{'_id':_0x37b8e2(0x109),'name':{'$first':_0x37b8e2(0x109)}}}]);_0x238247[_0x37b8e2(0x115)](_0x57ea2e);}}catch(_0x29740e){console[_0x37b8e2(0x119)](_0x37b8e2(0xfe),_0x29740e),_0x238247[_0x37b8e2(0x117)](0xc8)[_0x37b8e2(0x115)]({'message':_0x29740e['message']});}}),router[a0_0xeba582(0x113)](a0_0xeba582(0x11b),async(_0x31104e,_0x52eedc)=>{const _0x370d1f=a0_0xeba582;try{const _0x3fbcce=await suppliers['find']({});_0x52eedc[_0x370d1f(0x117)](0xc8)['json'](_0x3fbcce);}catch(_0x1a5877){console[_0x370d1f(0x119)](_0x370d1f(0xfe),_0x1a5877),_0x52eedc[_0x370d1f(0x117)](0xc8)[_0x370d1f(0x115)]({'message':_0x1a5877[_0x370d1f(0x110)]});}}),router['post'](a0_0xeba582(0x112),async(_0x4f3b7e,_0x2df04f)=>{const _0xbda7af=a0_0xeba582;try{const {wahouse_data:_0x2d07dc}=_0x4f3b7e[_0xbda7af(0x10d)],_0x90aff4=[{'$match':{'name':_0x2d07dc,'status':_0xbda7af(0xfb)}},{'$group':{'_id':'$_id','room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}],_0x3eab45=await warehouse[_0xbda7af(0x106)](_0x90aff4);_0x2df04f[_0xbda7af(0x117)](0xc8)[_0xbda7af(0x115)](_0x3eab45);}catch(_0x4620cc){console['log']('table\x20page',_0x4620cc),_0x2df04f['status'](0xc8)[_0xbda7af(0x115)]({'message':_0x4620cc[_0xbda7af(0x110)]});}}),router[a0_0xeba582(0x113)]('/invoice',async(_0x331a3e,_0x5e3488)=>{const _0x953c31=a0_0xeba582;try{const _0x4bdfe4=0x989680,_0x1e136c=0x5f5e0ff,_0x368409=Math[_0x953c31(0x102)](Math[_0x953c31(0x10c)]()*(_0x1e136c-_0x4bdfe4+0x1))+_0x4bdfe4;var _0x27b245;const _0x2a7383=await purchases['findOne']({'invoice':_0x953c31(0x108)+_0x368409});return _0x2a7383&&_0x2a7383[_0x953c31(0x111)]>0x0?_0x27b245=_0x953c31(0x108)+_0x368409:_0x27b245=_0x953c31(0x108)+_0x368409,_0x5e3488[_0x953c31(0x115)]({'incoming_invoice':_0x27b245}),_0x27b245;}catch(_0x192e85){console[_0x953c31(0x119)]('table\x20page',_0x192e85),_0x5e3488[_0x953c31(0x117)](0xc8)['json']({'message':_0x192e85['message']});}}),module[a0_0xeba582(0x101)]=router;