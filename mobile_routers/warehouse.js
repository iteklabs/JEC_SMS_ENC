const a0_0x1271dd=a0_0x48e4;(function(_0x513316,_0x82047a){const _0x158b75=a0_0x48e4,_0x2d6ca7=_0x513316();while(!![]){try{const _0x4950fc=parseInt(_0x158b75(0xdf))/0x1+-parseInt(_0x158b75(0xdd))/0x2+parseInt(_0x158b75(0xde))/0x3*(parseInt(_0x158b75(0xda))/0x4)+-parseInt(_0x158b75(0xd1))/0x5*(-parseInt(_0x158b75(0xd9))/0x6)+parseInt(_0x158b75(0xf9))/0x7*(parseInt(_0x158b75(0xd8))/0x8)+parseInt(_0x158b75(0xd3))/0x9*(-parseInt(_0x158b75(0xf2))/0xa)+parseInt(_0x158b75(0xd7))/0xb;if(_0x4950fc===_0x82047a)break;else _0x2d6ca7['push'](_0x2d6ca7['shift']());}catch(_0x36eccc){_0x2d6ca7['push'](_0x2d6ca7['shift']());}}}(a0_0x5569,0x610fb));const express=require(a0_0x1271dd(0xe7)),app=express(),router=express[a0_0x1271dd(0xe2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,email_settings,supervisor_settings}=require('../models/all_models'),auth=require(a0_0x1271dd(0xeb)),nodemailer=require(a0_0x1271dd(0xe0));function a0_0x5569(){const _0x8ab390=['97176PbigPn','1334790sLuLQY','204239WjcXuu','nodemailer','/invoice','Router','message','status','body','exports','express','post','json','Finished\x20Goods','../middleware/auth','aggregate','/view','$_id','/room','Return\x20Goods','/supplier','10EWuSiS','$name','table\x20page','length','log','Enabled','floor','7AFMftJ','find','12260SRoMFI','path','7111593JSoDIa','ejs','INC-','random','907291cSHKwk','1232336EAsPXt','858WmOYOn','4xOnIQk','../public/language/languages.json','$room'];a0_0x5569=function(){return _0x8ab390;};return a0_0x5569();}var ejs=require(a0_0x1271dd(0xd4));const path=require(a0_0x1271dd(0xd2)),users=require(a0_0x1271dd(0xdb));function a0_0x48e4(_0x4a8f3b,_0xd87695){const _0x5569f8=a0_0x5569();return a0_0x48e4=function(_0x48e487,_0x149e78){_0x48e487=_0x48e487-0xd1;let _0x343151=_0x5569f8[_0x48e487];return _0x343151;},a0_0x48e4(_0x4a8f3b,_0xd87695);}router[a0_0x1271dd(0xe8)](a0_0x1271dd(0xed),async(_0x5736f8,_0x3be307)=>{const _0x374125=a0_0x1271dd;try{const {warehouse_category:_0x7563e}=_0x5736f8[_0x374125(0xe5)];if(_0x7563e=='RM'){const _0x26457d=await warehouse[_0x374125(0xec)]([{'$match':{'status':_0x374125(0xf7),'warehouse_category':'Raw\x20Materials','name':{'$ne':_0x374125(0xf0)}}},{'$group':{'_id':_0x374125(0xf3),'name':{'$first':_0x374125(0xf3)}}}]);_0x3be307[_0x374125(0xe9)](_0x26457d);}else{const _0x14d84a=await warehouse[_0x374125(0xec)]([{'$match':{'status':_0x374125(0xf7),'warehouse_category':_0x374125(0xea),'name':{'$ne':'Return\x20Goods'}}},{'$group':{'_id':_0x374125(0xf3),'name':{'$first':_0x374125(0xf3)}}}]);_0x3be307[_0x374125(0xe9)](_0x14d84a);}}catch(_0x3e8aa5){console[_0x374125(0xf6)](_0x374125(0xf4),_0x3e8aa5),_0x3be307[_0x374125(0xe4)](0xc8)[_0x374125(0xe9)]({'message':_0x3e8aa5[_0x374125(0xe3)]});}}),router[a0_0x1271dd(0xe8)](a0_0x1271dd(0xf1),async(_0x20b393,_0x196a36)=>{const _0x31b30a=a0_0x1271dd;try{const _0x2f5a64=await suppliers[_0x31b30a(0xfa)]({});_0x196a36[_0x31b30a(0xe4)](0xc8)[_0x31b30a(0xe9)](_0x2f5a64);}catch(_0x23291a){console[_0x31b30a(0xf6)](_0x31b30a(0xf4),_0x23291a),_0x196a36[_0x31b30a(0xe4)](0xc8)[_0x31b30a(0xe9)]({'message':_0x23291a['message']});}}),router[a0_0x1271dd(0xe8)](a0_0x1271dd(0xef),async(_0x44dedb,_0x4d2bd1)=>{const _0x44f2bc=a0_0x1271dd;try{const {wahouse_data:_0x5c6465}=_0x44dedb[_0x44f2bc(0xe5)],_0x188e61=[{'$match':{'name':_0x5c6465,'status':_0x44f2bc(0xf7)}},{'$group':{'_id':_0x44f2bc(0xee),'room_name':{'$first':_0x44f2bc(0xdc)}}},{'$sort':{'room_name':0x1}}],_0x34b913=await warehouse[_0x44f2bc(0xec)](_0x188e61);_0x4d2bd1[_0x44f2bc(0xe4)](0xc8)['json'](_0x34b913);}catch(_0x507d7f){console[_0x44f2bc(0xf6)](_0x44f2bc(0xf4),_0x507d7f),_0x4d2bd1[_0x44f2bc(0xe4)](0xc8)[_0x44f2bc(0xe9)]({'message':_0x507d7f['message']});}}),router[a0_0x1271dd(0xe8)](a0_0x1271dd(0xe1),async(_0xd80a47,_0x4e9f5e)=>{const _0x348ee2=a0_0x1271dd;try{const _0x47c648=0x989680,_0x2e0d14=0x5f5e0ff,_0x5a741d=Math[_0x348ee2(0xf8)](Math[_0x348ee2(0xd6)]()*(_0x2e0d14-_0x47c648+0x1))+_0x47c648;var _0x58ee11;const _0x547aef=await purchases['findOne']({'invoice':_0x348ee2(0xd5)+_0x5a741d});return _0x547aef&&_0x547aef[_0x348ee2(0xf5)]>0x0?_0x58ee11=_0x348ee2(0xd5)+_0x5a741d:_0x58ee11='INC-'+_0x5a741d,_0x4e9f5e[_0x348ee2(0xe9)]({'incoming_invoice':_0x58ee11}),_0x58ee11;}catch(_0x3cd6e4){console[_0x348ee2(0xf6)](_0x348ee2(0xf4),_0x3cd6e4),_0x4e9f5e[_0x348ee2(0xe4)](0xc8)[_0x348ee2(0xe9)]({'message':_0x3cd6e4[_0x348ee2(0xe3)]});}}),module[a0_0x1271dd(0xe6)]=router;