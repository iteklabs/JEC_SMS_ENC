function a0_0x4b1a(){var _0x112358=['supplier_report','Arabic\x20(ae)','findOne','2959gMHwfn','420981yzYUih','log','$return_sale.product_name','Arabic','/sale','../models/all_models','/supplier','success','/expense','sales_report','48ScMrMs','purchases_return_report','render','296OFaPgD','378cKjqhI','adjustment_report','master','exports','/purchases','user','340236nEqryB','get','/customer','145570ViXhqO','errors','/sale_return','287595HoWbDv','Spanish','Portuguese','Hindi','German','French','Chinese','/transfer','customer_report','2220904lseJne','/product','$sale_product.product_name','product_report','../public/language/languages.json','purchases\x20report','English\x20(US)','Portuguese\x20(BR)','flash','email','aggregate','English','language','find','transfer_report','$return_product.product_name','/adjustment','438291TeiLuy'];a0_0x4b1a=function(){return _0x112358;};return a0_0x4b1a();}var a0_0x35635f=a0_0x198c;function a0_0x198c(_0x1b9935,_0x40322e){var _0x4b1a46=a0_0x4b1a();return a0_0x198c=function(_0x198c6c,_0xafad05){_0x198c6c=_0x198c6c-0xba;var _0x439a62=_0x4b1a46[_0x198c6c];return _0x439a62;},a0_0x198c(_0x1b9935,_0x40322e);}(function(_0xcd9c1f,_0x34135a){var _0x2e3b8f=a0_0x198c,_0x59b036=_0xcd9c1f();while(!![]){try{var _0x1a4b58=parseInt(_0x2e3b8f(0xe7))/0x1*(-parseInt(_0x2e3b8f(0xbc))/0x2)+parseInt(_0x2e3b8f(0xe8))/0x3+parseInt(_0x2e3b8f(0xd2))/0x4+-parseInt(_0x2e3b8f(0xc9))/0x5+-parseInt(_0x2e3b8f(0xc3))/0x6+parseInt(_0x2e3b8f(0xe3))/0x7*(-parseInt(_0x2e3b8f(0xf2))/0x8)+-parseInt(_0x2e3b8f(0xbd))/0x9*(-parseInt(_0x2e3b8f(0xc6))/0xa);if(_0x1a4b58===_0x34135a)break;else _0x59b036['push'](_0x59b036['shift']());}catch(_0x320ed2){_0x59b036['push'](_0x59b036['shift']());}}}(a0_0x4b1a,0x5c8e8));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x35635f(0xed)),auth=require('../middleware/auth'),users=require(a0_0x35635f(0xd6));router[a0_0x35635f(0xc4)](a0_0x35635f(0xd3),auth,async(_0x412f59,_0x35b38d)=>{var _0x5e6112=a0_0x35635f;try{const {username:_0x1769bc,email:_0x49e416,role:_0x2d3d72}=_0x412f59[_0x5e6112(0xc2)],_0x339a6d=_0x412f59[_0x5e6112(0xc2)],_0x5c226c=await profile[_0x5e6112(0xe6)]({'email':_0x339a6d[_0x5e6112(0xdb)]}),_0x19161c=await master_shop['find']();console[_0x5e6112(0xe9)](_0x5e6112(0xbf),_0x19161c);const _0xcd74b2=await product[_0x5e6112(0xdf)]();console[_0x5e6112(0xe9)](_0xcd74b2);if(_0x19161c[0x0]['language']==_0x5e6112(0xd8)){var _0xd3e2a9=users['English'];console['log'](_0xd3e2a9);}else{if(_0x19161c[0x0][_0x5e6112(0xde)]==_0x5e6112(0xcc))var _0xd3e2a9=users[_0x5e6112(0xcc)];else{if(_0x19161c[0x0][_0x5e6112(0xde)]=='German')var _0xd3e2a9=users[_0x5e6112(0xcd)];else{if(_0x19161c[0x0]['language']==_0x5e6112(0xca))var _0xd3e2a9=users['Spanish'];else{if(_0x19161c[0x0][_0x5e6112(0xde)]==_0x5e6112(0xce))var _0xd3e2a9=users[_0x5e6112(0xce)];else{if(_0x19161c[0x0]['language']==_0x5e6112(0xd9))var _0xd3e2a9=users[_0x5e6112(0xcb)];else{if(_0x19161c[0x0][_0x5e6112(0xde)]==_0x5e6112(0xcf))var _0xd3e2a9=users[_0x5e6112(0xcf)];else{if(_0x19161c[0x0][_0x5e6112(0xde)]==_0x5e6112(0xe5))var _0xd3e2a9=users[_0x5e6112(0xeb)];}}}}}}}_0x35b38d[_0x5e6112(0xbb)](_0x5e6112(0xd5),{'success':_0x412f59['flash'](_0x5e6112(0xef)),'errors':_0x412f59[_0x5e6112(0xda)](_0x5e6112(0xc7)),'role':_0x339a6d,'profile':_0x5c226c,'master_shop':_0x19161c,'alldata':_0xcd74b2,'language':_0xd3e2a9});}catch(_0x45a336){console[_0x5e6112(0xe9)](_0x45a336);}}),router[a0_0x35635f(0xc4)](a0_0x35635f(0xc5),auth,async(_0x37b411,_0x35b231)=>{var _0x1999d3=a0_0x35635f;try{const {username:_0x520572,email:_0x3b72f9,role:_0x5997f8}=_0x37b411['user'],_0x4e0fe4=_0x37b411['user'],_0x983195=await profile[_0x1999d3(0xe6)]({'email':_0x4e0fe4[_0x1999d3(0xdb)]}),_0x28c24e=await master_shop[_0x1999d3(0xdf)]();console['log'](_0x1999d3(0xbf),_0x28c24e);const _0x14213a=await customer[_0x1999d3(0xdf)]();console[_0x1999d3(0xe9)](_0x14213a);if(_0x28c24e[0x0][_0x1999d3(0xde)]=='English\x20(US)'){var _0x4f4ccf=users[_0x1999d3(0xdd)];console[_0x1999d3(0xe9)](_0x4f4ccf);}else{if(_0x28c24e[0x0][_0x1999d3(0xde)]==_0x1999d3(0xcc))var _0x4f4ccf=users['Hindi'];else{if(_0x28c24e[0x0][_0x1999d3(0xde)]=='German')var _0x4f4ccf=users['German'];else{if(_0x28c24e[0x0][_0x1999d3(0xde)]==_0x1999d3(0xca))var _0x4f4ccf=users[_0x1999d3(0xca)];else{if(_0x28c24e[0x0][_0x1999d3(0xde)]==_0x1999d3(0xce))var _0x4f4ccf=users[_0x1999d3(0xce)];else{if(_0x28c24e[0x0][_0x1999d3(0xde)]==_0x1999d3(0xd9))var _0x4f4ccf=users['Portuguese'];else{if(_0x28c24e[0x0][_0x1999d3(0xde)]==_0x1999d3(0xcf))var _0x4f4ccf=users['Chinese'];else{if(_0x28c24e[0x0][_0x1999d3(0xde)]==_0x1999d3(0xe5))var _0x4f4ccf=users['Arabic'];}}}}}}}_0x35b231[_0x1999d3(0xbb)](_0x1999d3(0xd1),{'success':_0x37b411[_0x1999d3(0xda)](_0x1999d3(0xef)),'errors':_0x37b411['flash']('errors'),'role':_0x4e0fe4,'profile':_0x983195,'master_shop':_0x28c24e,'alldata':_0x14213a,'language':_0x4f4ccf});}catch(_0x587dfe){console[_0x1999d3(0xe9)](_0x587dfe);}}),router[a0_0x35635f(0xc4)](a0_0x35635f(0xee),auth,async(_0x3e32c0,_0x30a790)=>{var _0x3fbd69=a0_0x35635f;try{const {username:_0x43b2de,email:_0x2f5c47,role:_0xab7d95}=_0x3e32c0['user'],_0x534cef=_0x3e32c0[_0x3fbd69(0xc2)],_0x1cf4b4=await profile[_0x3fbd69(0xe6)]({'email':_0x534cef['email']}),_0x2b6cb5=await master_shop[_0x3fbd69(0xdf)]();console[_0x3fbd69(0xe9)]('master',_0x2b6cb5);const _0x39ae72=await suppliers[_0x3fbd69(0xdf)]();console['log'](_0x39ae72);if(_0x2b6cb5[0x0][_0x3fbd69(0xde)]=='English\x20(US)'){var _0x1d1f69=users[_0x3fbd69(0xdd)];console[_0x3fbd69(0xe9)](_0x1d1f69);}else{if(_0x2b6cb5[0x0][_0x3fbd69(0xde)]==_0x3fbd69(0xcc))var _0x1d1f69=users[_0x3fbd69(0xcc)];else{if(_0x2b6cb5[0x0][_0x3fbd69(0xde)]==_0x3fbd69(0xcd))var _0x1d1f69=users[_0x3fbd69(0xcd)];else{if(_0x2b6cb5[0x0]['language']=='Spanish')var _0x1d1f69=users[_0x3fbd69(0xca)];else{if(_0x2b6cb5[0x0]['language']==_0x3fbd69(0xce))var _0x1d1f69=users[_0x3fbd69(0xce)];else{if(_0x2b6cb5[0x0][_0x3fbd69(0xde)]==_0x3fbd69(0xd9))var _0x1d1f69=users[_0x3fbd69(0xcb)];else{if(_0x2b6cb5[0x0][_0x3fbd69(0xde)]==_0x3fbd69(0xcf))var _0x1d1f69=users[_0x3fbd69(0xcf)];else{if(_0x2b6cb5[0x0][_0x3fbd69(0xde)]==_0x3fbd69(0xe5))var _0x1d1f69=users[_0x3fbd69(0xeb)];}}}}}}}_0x30a790['render'](_0x3fbd69(0xe4),{'success':_0x3e32c0[_0x3fbd69(0xda)](_0x3fbd69(0xef)),'errors':_0x3e32c0[_0x3fbd69(0xda)](_0x3fbd69(0xc7)),'role':_0x534cef,'profile':_0x1cf4b4,'master_shop':_0x2b6cb5,'alldata':_0x39ae72,'language':_0x1d1f69});}catch(_0x4d6319){console[_0x3fbd69(0xe9)](_0x4d6319);}}),router[a0_0x35635f(0xc4)](a0_0x35635f(0xc1),auth,async(_0x4b34c5,_0x9896aa)=>{var _0x5c7c33=a0_0x35635f;try{const {username:_0x3209f6,email:_0xbfdfeb,role:_0x2234f6}=_0x4b34c5['user'],_0x123b0a=_0x4b34c5[_0x5c7c33(0xc2)],_0x2cd701=await profile[_0x5c7c33(0xe6)]({'email':_0x123b0a[_0x5c7c33(0xdb)]}),_0xe54b34=await master_shop[_0x5c7c33(0xdf)]();console[_0x5c7c33(0xe9)]('master',_0xe54b34);const _0x5cacac=await purchases[_0x5c7c33(0xdc)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':'$product.product_name','payable':0x1}}]);console[_0x5c7c33(0xe9)](_0x5c7c33(0xd7),_0x5cacac);if(_0xe54b34[0x0][_0x5c7c33(0xde)]==_0x5c7c33(0xd8)){var _0x5a6c6d=users[_0x5c7c33(0xdd)];console[_0x5c7c33(0xe9)](_0x5a6c6d);}else{if(_0xe54b34[0x0][_0x5c7c33(0xde)]==_0x5c7c33(0xcc))var _0x5a6c6d=users['Hindi'];else{if(_0xe54b34[0x0][_0x5c7c33(0xde)]==_0x5c7c33(0xcd))var _0x5a6c6d=users[_0x5c7c33(0xcd)];else{if(_0xe54b34[0x0][_0x5c7c33(0xde)]==_0x5c7c33(0xca))var _0x5a6c6d=users[_0x5c7c33(0xca)];else{if(_0xe54b34[0x0][_0x5c7c33(0xde)]==_0x5c7c33(0xce))var _0x5a6c6d=users[_0x5c7c33(0xce)];else{if(_0xe54b34[0x0][_0x5c7c33(0xde)]=='Portuguese\x20(BR)')var _0x5a6c6d=users[_0x5c7c33(0xcb)];else{if(_0xe54b34[0x0][_0x5c7c33(0xde)]=='Chinese')var _0x5a6c6d=users[_0x5c7c33(0xcf)];else{if(_0xe54b34[0x0]['language']==_0x5c7c33(0xe5))var _0x5a6c6d=users[_0x5c7c33(0xeb)];}}}}}}}_0x9896aa['render']('purchases_report',{'success':_0x4b34c5[_0x5c7c33(0xda)](_0x5c7c33(0xef)),'errors':_0x4b34c5[_0x5c7c33(0xda)]('errors'),'role':_0x123b0a,'profile':_0x2cd701,'master_shop':_0xe54b34,'alldata':_0x5cacac,'language':_0x5a6c6d});}catch(_0xf49c83){console[_0x5c7c33(0xe9)](_0xf49c83);}}),router[a0_0x35635f(0xc4)]('/purchase_return',auth,async(_0x29b53c,_0x23efb0)=>{var _0x3fabc8=a0_0x35635f;try{const {username:_0x527330,email:_0x2f06df,role:_0x276b36}=_0x29b53c[_0x3fabc8(0xc2)],_0x3e2d95=_0x29b53c[_0x3fabc8(0xc2)],_0x51af13=await profile[_0x3fabc8(0xe6)]({'email':_0x3e2d95['email']}),_0x4aa1a7=await master_shop[_0x3fabc8(0xdf)]();console[_0x3fabc8(0xe9)](_0x3fabc8(0xbf),_0x4aa1a7);const _0x4fed6e=await purchases_return[_0x3fabc8(0xdc)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x3fabc8(0xe1),'receivable':0x1}}]);console['log'](_0x3fabc8(0xba),_0x4fed6e);if(_0x4aa1a7[0x0][_0x3fabc8(0xde)]==_0x3fabc8(0xd8)){var _0x38e2eb=users[_0x3fabc8(0xdd)];console[_0x3fabc8(0xe9)](_0x38e2eb);}else{if(_0x4aa1a7[0x0]['language']=='Hindi')var _0x38e2eb=users[_0x3fabc8(0xcc)];else{if(_0x4aa1a7[0x0][_0x3fabc8(0xde)]==_0x3fabc8(0xcd))var _0x38e2eb=users['German'];else{if(_0x4aa1a7[0x0]['language']==_0x3fabc8(0xca))var _0x38e2eb=users['Spanish'];else{if(_0x4aa1a7[0x0][_0x3fabc8(0xde)]==_0x3fabc8(0xce))var _0x38e2eb=users[_0x3fabc8(0xce)];else{if(_0x4aa1a7[0x0][_0x3fabc8(0xde)]=='Portuguese\x20(BR)')var _0x38e2eb=users[_0x3fabc8(0xcb)];else{if(_0x4aa1a7[0x0][_0x3fabc8(0xde)]=='Chinese')var _0x38e2eb=users[_0x3fabc8(0xcf)];else{if(_0x4aa1a7[0x0]['language']==_0x3fabc8(0xe5))var _0x38e2eb=users['Arabic'];}}}}}}}_0x23efb0[_0x3fabc8(0xbb)](_0x3fabc8(0xba),{'success':_0x29b53c[_0x3fabc8(0xda)](_0x3fabc8(0xef)),'errors':_0x29b53c[_0x3fabc8(0xda)](_0x3fabc8(0xc7)),'role':_0x3e2d95,'profile':_0x51af13,'master_shop':_0x4aa1a7,'alldata':_0x4fed6e,'language':_0x38e2eb});}catch(_0x111676){console['log'](_0x111676);}}),router[a0_0x35635f(0xc4)](a0_0x35635f(0xec),auth,async(_0x4cd67d,_0x13a331)=>{var _0x45dff3=a0_0x35635f;try{const {username:_0x3dbb5a,email:_0x5a02bd,role:_0x2d324f}=_0x4cd67d['user'],_0x14e05d=_0x4cd67d[_0x45dff3(0xc2)],_0x43d950=await profile[_0x45dff3(0xe6)]({'email':_0x14e05d[_0x45dff3(0xdb)]}),_0x39f4e6=await master_shop[_0x45dff3(0xdf)]();console[_0x45dff3(0xe9)](_0x45dff3(0xbf),_0x39f4e6);const _0xc52dcd=await sales[_0x45dff3(0xdc)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x45dff3(0xd4),'receivable_amount':0x1}}]);console[_0x45dff3(0xe9)](_0xc52dcd);if(_0x39f4e6[0x0][_0x45dff3(0xde)]==_0x45dff3(0xd8)){var _0x10559c=users[_0x45dff3(0xdd)];console['log'](_0x10559c);}else{if(_0x39f4e6[0x0]['language']==_0x45dff3(0xcc))var _0x10559c=users[_0x45dff3(0xcc)];else{if(_0x39f4e6[0x0]['language']==_0x45dff3(0xcd))var _0x10559c=users[_0x45dff3(0xcd)];else{if(_0x39f4e6[0x0]['language']==_0x45dff3(0xca))var _0x10559c=users[_0x45dff3(0xca)];else{if(_0x39f4e6[0x0][_0x45dff3(0xde)]==_0x45dff3(0xce))var _0x10559c=users[_0x45dff3(0xce)];else{if(_0x39f4e6[0x0][_0x45dff3(0xde)]=='Portuguese\x20(BR)')var _0x10559c=users['Portuguese'];else{if(_0x39f4e6[0x0]['language']=='Chinese')var _0x10559c=users[_0x45dff3(0xcf)];else{if(_0x39f4e6[0x0]['language']==_0x45dff3(0xe5))var _0x10559c=users[_0x45dff3(0xeb)];}}}}}}}_0x13a331['render'](_0x45dff3(0xf1),{'success':_0x4cd67d['flash']('success'),'errors':_0x4cd67d[_0x45dff3(0xda)](_0x45dff3(0xc7)),'role':_0x14e05d,'profile':_0x43d950,'master_shop':_0x39f4e6,'alldata':_0xc52dcd,'language':_0x10559c});}catch(_0xd826ea){console[_0x45dff3(0xe9)](_0xd826ea);}}),router['get'](a0_0x35635f(0xc8),auth,async(_0x32d7d7,_0x381610)=>{var _0x427a19=a0_0x35635f;try{const {username:_0x205e1e,email:_0x2df242,role:_0x2e3fcf}=_0x32d7d7[_0x427a19(0xc2)],_0x3cd34b=_0x32d7d7[_0x427a19(0xc2)],_0xcefea2=await profile[_0x427a19(0xe6)]({'email':_0x3cd34b[_0x427a19(0xdb)]}),_0x456c75=await master_shop[_0x427a19(0xdf)]();console['log'](_0x427a19(0xbf),_0x456c75);const _0x492855=await sales_return[_0x427a19(0xdc)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x427a19(0xea),'payable_to_customer':0x1}}]);console[_0x427a19(0xe9)](_0x492855);if(_0x456c75[0x0][_0x427a19(0xde)]==_0x427a19(0xd8)){var _0x230738=users['English'];console[_0x427a19(0xe9)](_0x230738);}else{if(_0x456c75[0x0]['language']=='Hindi')var _0x230738=users['Hindi'];else{if(_0x456c75[0x0][_0x427a19(0xde)]==_0x427a19(0xcd))var _0x230738=users['German'];else{if(_0x456c75[0x0][_0x427a19(0xde)]==_0x427a19(0xca))var _0x230738=users[_0x427a19(0xca)];else{if(_0x456c75[0x0][_0x427a19(0xde)]==_0x427a19(0xce))var _0x230738=users[_0x427a19(0xce)];else{if(_0x456c75[0x0][_0x427a19(0xde)]=='Portuguese\x20(BR)')var _0x230738=users[_0x427a19(0xcb)];else{if(_0x456c75[0x0][_0x427a19(0xde)]==_0x427a19(0xcf))var _0x230738=users[_0x427a19(0xcf)];else{if(_0x456c75[0x0][_0x427a19(0xde)]==_0x427a19(0xe5))var _0x230738=users[_0x427a19(0xeb)];}}}}}}}_0x381610[_0x427a19(0xbb)]('sales_return_report',{'success':_0x32d7d7[_0x427a19(0xda)](_0x427a19(0xef)),'errors':_0x32d7d7[_0x427a19(0xda)]('errors'),'role':_0x3cd34b,'profile':_0xcefea2,'master_shop':_0x456c75,'alldata':_0x492855,'language':_0x230738});}catch(_0x2731f1){console[_0x427a19(0xe9)](_0x2731f1);}}),router[a0_0x35635f(0xc4)](a0_0x35635f(0xe2),auth,async(_0x34dc7a,_0xadb35)=>{var _0x38c465=a0_0x35635f;try{const {username:_0x1c2372,email:_0x15474f,role:_0xd5e99}=_0x34dc7a['user'],_0x343198=_0x34dc7a[_0x38c465(0xc2)],_0x3c486c=await profile[_0x38c465(0xe6)]({'email':_0x343198[_0x38c465(0xdb)]}),_0x284e9c=await master_shop[_0x38c465(0xdf)]();console[_0x38c465(0xe9)](_0x38c465(0xbf),_0x284e9c);const _0x50c776=await adjustment[_0x38c465(0xdf)]();console[_0x38c465(0xe9)](_0x50c776);if(_0x284e9c[0x0][_0x38c465(0xde)]==_0x38c465(0xd8)){var _0x5e7372=users[_0x38c465(0xdd)];console['log'](_0x5e7372);}else{if(_0x284e9c[0x0][_0x38c465(0xde)]=='Hindi')var _0x5e7372=users['Hindi'];else{if(_0x284e9c[0x0]['language']==_0x38c465(0xcd))var _0x5e7372=users[_0x38c465(0xcd)];else{if(_0x284e9c[0x0][_0x38c465(0xde)]==_0x38c465(0xca))var _0x5e7372=users[_0x38c465(0xca)];else{if(_0x284e9c[0x0][_0x38c465(0xde)]==_0x38c465(0xce))var _0x5e7372=users['French'];else{if(_0x284e9c[0x0][_0x38c465(0xde)]==_0x38c465(0xd9))var _0x5e7372=users[_0x38c465(0xcb)];else{if(_0x284e9c[0x0][_0x38c465(0xde)]==_0x38c465(0xcf))var _0x5e7372=users[_0x38c465(0xcf)];else{if(_0x284e9c[0x0]['language']==_0x38c465(0xe5))var _0x5e7372=users[_0x38c465(0xeb)];}}}}}}}_0xadb35[_0x38c465(0xbb)](_0x38c465(0xbe),{'success':_0x34dc7a[_0x38c465(0xda)]('success'),'errors':_0x34dc7a[_0x38c465(0xda)](_0x38c465(0xc7)),'role':_0x343198,'profile':_0x3c486c,'master_shop':_0x284e9c,'alldata':_0x50c776,'language':_0x5e7372});}catch(_0x29b1d7){console[_0x38c465(0xe9)](_0x29b1d7);}}),router['get'](a0_0x35635f(0xd0),auth,async(_0x9f352a,_0xa1b97a)=>{var _0xc10792=a0_0x35635f;try{const {username:_0x1d8658,email:_0xbe546f,role:_0x3733f6}=_0x9f352a[_0xc10792(0xc2)],_0x348a13=_0x9f352a[_0xc10792(0xc2)],_0x1709cf=await profile[_0xc10792(0xe6)]({'email':_0x348a13[_0xc10792(0xdb)]}),_0x3e0347=await master_shop['find']();console[_0xc10792(0xe9)](_0xc10792(0xbf),_0x3e0347);const _0xc01fff=await transfers[_0xc10792(0xdf)]();console[_0xc10792(0xe9)](_0xc01fff);if(_0x3e0347[0x0][_0xc10792(0xde)]=='English\x20(US)'){var _0x584c47=users[_0xc10792(0xdd)];console[_0xc10792(0xe9)](_0x584c47);}else{if(_0x3e0347[0x0]['language']==_0xc10792(0xcc))var _0x584c47=users[_0xc10792(0xcc)];else{if(_0x3e0347[0x0][_0xc10792(0xde)]==_0xc10792(0xcd))var _0x584c47=users[_0xc10792(0xcd)];else{if(_0x3e0347[0x0][_0xc10792(0xde)]==_0xc10792(0xca))var _0x584c47=users[_0xc10792(0xca)];else{if(_0x3e0347[0x0][_0xc10792(0xde)]==_0xc10792(0xce))var _0x584c47=users[_0xc10792(0xce)];else{if(_0x3e0347[0x0]['language']=='Portuguese\x20(BR)')var _0x584c47=users[_0xc10792(0xcb)];else{if(_0x3e0347[0x0][_0xc10792(0xde)]==_0xc10792(0xcf))var _0x584c47=users[_0xc10792(0xcf)];else{if(_0x3e0347[0x0]['language']==_0xc10792(0xe5))var _0x584c47=users[_0xc10792(0xeb)];}}}}}}}_0xa1b97a[_0xc10792(0xbb)](_0xc10792(0xe0),{'success':_0x9f352a['flash'](_0xc10792(0xef)),'errors':_0x9f352a['flash']('errors'),'role':_0x348a13,'profile':_0x1709cf,'master_shop':_0x3e0347,'alldata':_0xc01fff,'language':_0x584c47});}catch(_0x282111){console[_0xc10792(0xe9)](_0x282111);}}),router[a0_0x35635f(0xc4)](a0_0x35635f(0xf0),auth,async(_0x5e8407,_0x31bc84)=>{var _0x29f19c=a0_0x35635f;try{const {username:_0x1d8ee8,email:_0x2ebd52,role:_0x4a35af}=_0x5e8407[_0x29f19c(0xc2)],_0x220816=_0x5e8407['user'],_0x543a62=await profile['findOne']({'email':_0x220816['email']}),_0x942037=await master_shop[_0x29f19c(0xdf)]();console[_0x29f19c(0xe9)]('master',_0x942037);const _0x4cbf7b=await all_expenses[_0x29f19c(0xdf)]();console[_0x29f19c(0xe9)](_0x4cbf7b);if(_0x942037[0x0][_0x29f19c(0xde)]=='English\x20(US)'){var _0x5c7a6e=users['English'];console['log'](_0x5c7a6e);}else{if(_0x942037[0x0]['language']==_0x29f19c(0xcc))var _0x5c7a6e=users[_0x29f19c(0xcc)];else{if(_0x942037[0x0][_0x29f19c(0xde)]==_0x29f19c(0xcd))var _0x5c7a6e=users[_0x29f19c(0xcd)];else{if(_0x942037[0x0][_0x29f19c(0xde)]==_0x29f19c(0xca))var _0x5c7a6e=users[_0x29f19c(0xca)];else{if(_0x942037[0x0][_0x29f19c(0xde)]==_0x29f19c(0xce))var _0x5c7a6e=users[_0x29f19c(0xce)];else{if(_0x942037[0x0]['language']==_0x29f19c(0xd9))var _0x5c7a6e=users[_0x29f19c(0xcb)];else{if(_0x942037[0x0]['language']==_0x29f19c(0xcf))var _0x5c7a6e=users[_0x29f19c(0xcf)];else{if(_0x942037[0x0][_0x29f19c(0xde)]=='Arabic\x20(ae)')var _0x5c7a6e=users[_0x29f19c(0xeb)];}}}}}}}_0x31bc84[_0x29f19c(0xbb)]('expense_report',{'success':_0x5e8407['flash'](_0x29f19c(0xef)),'errors':_0x5e8407[_0x29f19c(0xda)]('errors'),'role':_0x220816,'profile':_0x543a62,'master_shop':_0x942037,'alldata':_0x4cbf7b,'language':_0x5c7a6e});}catch(_0x3d057e){console[_0x29f19c(0xe9)](_0x3d057e);}}),module[a0_0x35635f(0xc0)]=router;