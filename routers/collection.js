var a0_0x49ee87=a0_0x11e9;(function(_0x34d7ff,_0x457a19){var _0x4aa9f4=a0_0x11e9,_0x43229e=_0x34d7ff();while(!![]){try{var _0x3927a6=parseInt(_0x4aa9f4(0xae))/0x1+parseInt(_0x4aa9f4(0xc1))/0x2+parseInt(_0x4aa9f4(0xc0))/0x3*(parseInt(_0x4aa9f4(0xa4))/0x4)+-parseInt(_0x4aa9f4(0xad))/0x5+-parseInt(_0x4aa9f4(0xb7))/0x6+-parseInt(_0x4aa9f4(0xa6))/0x7*(-parseInt(_0x4aa9f4(0x6e))/0x8)+parseInt(_0x4aa9f4(0x83))/0x9*(-parseInt(_0x4aa9f4(0xa2))/0xa);if(_0x3927a6===_0x457a19)break;else _0x43229e['push'](_0x43229e['shift']());}catch(_0x782932){_0x43229e['push'](_0x43229e['shift']());}}}(a0_0x2cf8,0x72334));function a0_0x11e9(_0x9f98d8,_0x240b8c){var _0x2cf892=a0_0x2cf8();return a0_0x11e9=function(_0x11e911,_0x5e36c3){_0x11e911=_0x11e911-0x6e;var _0x533cee=_0x2cf892[_0x11e911];return _0x533cee;},a0_0x11e9(_0x9f98d8,_0x240b8c);}function a0_0x2cf8(){var _0x5ec69e=['8687430GDiIrb','../models/all_models','French','Collection\x20Update\x20successfully','Router','save','ewt','/view_so_xt/:id','type_of_payment','exceljs','/view','spwp','updateOne','string','exports','../public/language/languages.json','language','../middleware/auth','English\x20(US)','Portuguese','render','errors','collection_sox','length','Chinese','express','Arabic\x20(ae)','collection_price','flash','body','/so_x','10VRWeIw','bo_disc','20Gjewmw','collection_so_xt','14PZHKOX','map','/x_so','English','valueOf','ObjectId','email','55195TYiEvq','270604SvdYGs','totalcollection','params','Portuguese\x20(BR)','_id','post','/collection/view/','multer','forEach','975972jzfptr','/view/:id','Spanish','German','Hindi','xlsx','Arabic','view_collections_sox','totalNewPrice','123999YptkUm','578904UieDtN','cash_date','3360056GtHUBk','find','redirect','log','/collection/view_so_xt/','id_detl','view_collections_xt','user','success','typeofprocess','True','findById','view_collections_so_xt','/view_sox/:id','findOne','vol_deals','paid','mongoose','/view_xt/:id','fin_disc','get'];a0_0x2cf8=function(){return _0x5ec69e;};return a0_0x2cf8();}const express=require(a0_0x49ee87(0x9c)),app=express(),router=express[a0_0x49ee87(0x87)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sales_sa,sales_order}=require(a0_0x49ee87(0x84)),auth=require(a0_0x49ee87(0x94)),users=require(a0_0x49ee87(0x92)),excelJS=require(a0_0x49ee87(0x8c)),xlsx=require(a0_0x49ee87(0xbc)),multer=require(a0_0x49ee87(0xb5)),mongoose=require(a0_0x49ee87(0x7f));router['get'](a0_0x49ee87(0x8d),auth,async(_0x34c6a4,_0x4bf59f)=>{var _0x3f6973=a0_0x49ee87;try{const _0x2c9e6f=await master_shop[_0x3f6973(0x6f)](),_0x3e2c8a=_0x34c6a4[_0x3f6973(0x75)],_0x9ba3d3=await profile[_0x3f6973(0x7c)]({'email':_0x3e2c8a[_0x3f6973(0xac)]}),_0x3b546e=await staff[_0x3f6973(0x7c)]({'email':_0x3e2c8a[_0x3f6973(0xac)],'type_of_acc_cat':'2'});let _0x1fd914=[];_0x3b546e!=null&&(_0x1fd914=await sales_order['find']({'sales_staff_id':_0x3b546e[_0x3f6973(0xb2)]}));if(_0x2c9e6f[0x0][_0x3f6973(0x93)]==_0x3f6973(0x95))var _0x2296fe=users[_0x3f6973(0xa9)];else{if(_0x2c9e6f[0x0][_0x3f6973(0x93)]==_0x3f6973(0xbb))var _0x2296fe=users[_0x3f6973(0xbb)];else{if(_0x2c9e6f[0x0]['language']==_0x3f6973(0xba))var _0x2296fe=users[_0x3f6973(0xba)];else{if(_0x2c9e6f[0x0]['language']==_0x3f6973(0xb9))var _0x2296fe=users['Spanish'];else{if(_0x2c9e6f[0x0][_0x3f6973(0x93)]==_0x3f6973(0x85))var _0x2296fe=users[_0x3f6973(0x85)];else{if(_0x2c9e6f[0x0][_0x3f6973(0x93)]=='Portuguese\x20(BR)')var _0x2296fe=users[_0x3f6973(0x96)];else{if(_0x2c9e6f[0x0][_0x3f6973(0x93)]==_0x3f6973(0x9b))var _0x2296fe=users['Chinese'];else{if(_0x2c9e6f[0x0][_0x3f6973(0x93)]=='Arabic\x20(ae)')var _0x2296fe=users[_0x3f6973(0xbd)];}}}}}}}_0x4bf59f['render']('collection',{'success':_0x34c6a4[_0x3f6973(0x9f)](_0x3f6973(0x76)),'errors':_0x34c6a4[_0x3f6973(0x9f)](_0x3f6973(0x98)),'master_shop':_0x2c9e6f,'profile':_0x9ba3d3,'role':_0x3e2c8a,'language':_0x2296fe,'sales_mine':_0x1fd914,'staff_arr':_0x3b546e});}catch(_0x3cc1ee){console[_0x3f6973(0x71)](_0x3cc1ee);}}),router[a0_0x49ee87(0x82)](a0_0x49ee87(0xb8),auth,async(_0x109027,_0x1dfcff)=>{var _0x5607d7=a0_0x49ee87;try{const _0x56a232=await master_shop[_0x5607d7(0x6f)](),_0x1db4bf=_0x109027[_0x5607d7(0x75)],_0x5827c7=await profile[_0x5607d7(0x7c)]({'email':_0x1db4bf[_0x5607d7(0xac)]}),_0xb4c89f=await staff[_0x5607d7(0x7c)]({'email':_0x1db4bf[_0x5607d7(0xac)]}),_0x6c50ab=await customer[_0x5607d7(0x6f)]({'agent_id':_0xb4c89f[_0x5607d7(0xb2)]}),_0x514d54=_0x109027[_0x5607d7(0xb0)]['id'],_0x1c80a7=await sales_sa[_0x5607d7(0x79)](_0x514d54);if(_0x56a232[0x0][_0x5607d7(0x93)]==_0x5607d7(0x95))var _0x5c64b2=users[_0x5607d7(0xa9)];else{if(_0x56a232[0x0][_0x5607d7(0x93)]==_0x5607d7(0xbb))var _0x5c64b2=users[_0x5607d7(0xbb)];else{if(_0x56a232[0x0][_0x5607d7(0x93)]==_0x5607d7(0xba))var _0x5c64b2=users[_0x5607d7(0xba)];else{if(_0x56a232[0x0]['language']=='Spanish')var _0x5c64b2=users[_0x5607d7(0xb9)];else{if(_0x56a232[0x0][_0x5607d7(0x93)]=='French')var _0x5c64b2=users['French'];else{if(_0x56a232[0x0][_0x5607d7(0x93)]==_0x5607d7(0xb1))var _0x5c64b2=users['Portuguese'];else{if(_0x56a232[0x0][_0x5607d7(0x93)]==_0x5607d7(0x9b))var _0x5c64b2=users[_0x5607d7(0x9b)];else{if(_0x56a232[0x0][_0x5607d7(0x93)]=='Arabic\x20(ae)')var _0x5c64b2=users[_0x5607d7(0xbd)];}}}}}}}_0x1dfcff[_0x5607d7(0x97)]('view_collections',{'success':_0x109027['flash'](_0x5607d7(0x76)),'errors':_0x109027[_0x5607d7(0x9f)](_0x5607d7(0x98)),'master_shop':_0x56a232,'profile':_0x5827c7,'role':_0x1db4bf,'language':_0x5c64b2,'customer':_0x6c50ab,'sales_sa':_0x1c80a7,'staff_arr':_0xb4c89f});}catch(_0x4cc682){console[_0x5607d7(0x71)](_0x4cc682);}}),router[a0_0x49ee87(0xb3)](a0_0x49ee87(0xb8),auth,async(_0x32996f,_0x20919a)=>{var _0x1b0c3d=a0_0x49ee87;try{const _0x2a2062=_0x32996f[_0x1b0c3d(0xb0)]['id'],_0x1677e6=await sales_sa[_0x1b0c3d(0x79)](_0x2a2062),{collection:_0x9ef098,invoicemoney:_0x441617,collectionnumber:_0x59b13a,typeofpayment:_0xb50209,cashdate:_0x53eabc,id_detl:_0x361693}=_0x32996f['body'];_0x20919a['json'](_0x1677e6);return;if(typeof _0x361693==_0x1b0c3d(0x90))var _0x24cc68=[_0x32996f['body'][_0x1b0c3d(0x73)]],_0x12ff35=[_0x32996f[_0x1b0c3d(0xa0)][_0x1b0c3d(0x89)]],_0x49420c=[_0x32996f['body'][_0x1b0c3d(0x8e)]],_0x4627b0=[_0x32996f[_0x1b0c3d(0xa0)]['fin_disc']],_0x5c006d=[_0x32996f[_0x1b0c3d(0xa0)][_0x1b0c3d(0x7d)]],_0x15785b=[_0x32996f[_0x1b0c3d(0xa0)][_0x1b0c3d(0xa3)]],_0x59d9e9=[_0x32996f[_0x1b0c3d(0xa0)]['totalNewPrice']];else var _0x24cc68=[..._0x32996f[_0x1b0c3d(0xa0)][_0x1b0c3d(0x73)]],_0x12ff35=[..._0x32996f[_0x1b0c3d(0xa0)][_0x1b0c3d(0x89)]],_0x49420c=[..._0x32996f['body']['spwp']],_0x4627b0=[..._0x32996f['body'][_0x1b0c3d(0x81)]],_0x5c006d=[..._0x32996f[_0x1b0c3d(0xa0)]['vol_deals']],_0x15785b=[..._0x32996f['body']['bo_disc']],_0x59d9e9=[..._0x32996f[_0x1b0c3d(0xa0)]['totalNewPrice']];const _0x7b8519=_0x24cc68[_0x1b0c3d(0xa7)](_0x2e06a1=>{return _0x2e06a1={'id_detl':_0x2e06a1};});_0x12ff35[_0x1b0c3d(0xb6)]((_0xd63476,_0x3c92f8)=>{var _0x545897=_0x1b0c3d;_0x7b8519[_0x3c92f8][_0x545897(0x89)]=_0xd63476;}),_0x49420c[_0x1b0c3d(0xb6)]((_0x2b1a11,_0x57045e)=>{var _0x92a5cc=_0x1b0c3d;_0x7b8519[_0x57045e][_0x92a5cc(0x8e)]=_0x2b1a11;}),_0x4627b0['forEach']((_0x11ae17,_0x404a21)=>{var _0xef092d=_0x1b0c3d;_0x7b8519[_0x404a21][_0xef092d(0x81)]=_0x11ae17;}),_0x5c006d['forEach']((_0x1e2ef2,_0x11a261)=>{var _0x20782a=_0x1b0c3d;_0x7b8519[_0x11a261][_0x20782a(0x7d)]=_0x1e2ef2;}),_0x15785b[_0x1b0c3d(0xb6)]((_0x2c28d9,_0x16cedb)=>{var _0x2502cb=_0x1b0c3d;_0x7b8519[_0x16cedb][_0x2502cb(0xa3)]=_0x2c28d9;}),_0x59d9e9[_0x1b0c3d(0xb6)]((_0x268211,_0x32b1a0)=>{_0x7b8519[_0x32b1a0]['totalcollection']=_0x268211;}),_0x1677e6[_0x1b0c3d(0x9e)]=_0x9ef098,_0x1677e6['collectionnumber']=_0x59b13a,_0x1677e6['type_of_payment']=_0xb50209,_0x1677e6[_0x1b0c3d(0xc2)]=_0x53eabc,_0x1677e6[_0x1b0c3d(0x7e)]=_0x1b0c3d(0x78);const _0x14c1df=await _0x1677e6[_0x1b0c3d(0x88)]();if(_0x14c1df[_0x1b0c3d(0x7e)]=='True')for(let _0x4a5dbe=0x0;_0x4a5dbe<=_0x7b8519[_0x1b0c3d(0x9a)]-0x1;_0x4a5dbe++){const _0x37cf19=_0x7b8519[_0x4a5dbe],_0x37dc2d=mongoose['Types'][_0x1b0c3d(0xab)];console[_0x1b0c3d(0x71)](_0x37cf19);const _0x16cdf7=await sales_sa[_0x1b0c3d(0x8f)]({'_id':_0x37dc2d(_0x2a2062[_0x1b0c3d(0xaa)]()),'sale_product._id':_0x37dc2d(_0x37cf19[_0x1b0c3d(0x73)][_0x1b0c3d(0xaa)]())},{'$set':{'sale_product.$.ewt':_0x37cf19[_0x1b0c3d(0x89)],'sale_product.$.spwp':_0x37cf19[_0x1b0c3d(0x8e)],'sale_product.$.fin_disc':_0x37cf19[_0x1b0c3d(0x81)],'sale_product.$.vol_deals':_0x37cf19[_0x1b0c3d(0x7d)],'sale_product.$.bo_disc':_0x37cf19[_0x1b0c3d(0xa3)],'sale_product.$.totalprice':parseFloat(_0x37cf19[_0x1b0c3d(0xaf)])}});}_0x32996f[_0x1b0c3d(0x9f)](_0x1b0c3d(0x76),_0x1b0c3d(0x86)),_0x20919a[_0x1b0c3d(0x70)]('/collection/view/'+_0x2a2062);}catch(_0xce89b8){console[_0x1b0c3d(0x71)](_0xce89b8);}}),router[a0_0x49ee87(0x82)](a0_0x49ee87(0xa8),auth,async(_0x428b37,_0x346358)=>{var _0x334a85=a0_0x49ee87;try{const _0x423b99=await master_shop['find'](),_0x1ce2f2=_0x428b37[_0x334a85(0x75)],_0x4ba9e0=await profile[_0x334a85(0x7c)]({'email':_0x1ce2f2['email']}),_0x1420b0=await staff['findOne']({'email':_0x1ce2f2[_0x334a85(0xac)],'type_of_acc_cat':'2'});let _0x53a52c=[];_0x1420b0!=null&&(_0x53a52c=await sales_order[_0x334a85(0x6f)]({'sales_staff_id':_0x1420b0['_id']}));console[_0x334a85(0x71)](_0x53a52c);if(_0x423b99[0x0][_0x334a85(0x93)]==_0x334a85(0x95))var _0x2489b2=users[_0x334a85(0xa9)];else{if(_0x423b99[0x0][_0x334a85(0x93)]==_0x334a85(0xbb))var _0x2489b2=users[_0x334a85(0xbb)];else{if(_0x423b99[0x0][_0x334a85(0x93)]==_0x334a85(0xba))var _0x2489b2=users[_0x334a85(0xba)];else{if(_0x423b99[0x0]['language']==_0x334a85(0xb9))var _0x2489b2=users[_0x334a85(0xb9)];else{if(_0x423b99[0x0][_0x334a85(0x93)]==_0x334a85(0x85))var _0x2489b2=users[_0x334a85(0x85)];else{if(_0x423b99[0x0][_0x334a85(0x93)]=='Portuguese\x20(BR)')var _0x2489b2=users[_0x334a85(0x96)];else{if(_0x423b99[0x0][_0x334a85(0x93)]==_0x334a85(0x9b))var _0x2489b2=users[_0x334a85(0x9b)];else{if(_0x423b99[0x0]['language']==_0x334a85(0x9d))var _0x2489b2=users[_0x334a85(0xbd)];}}}}}}}_0x346358[_0x334a85(0x97)](_0x334a85(0x99),{'success':_0x428b37[_0x334a85(0x9f)](_0x334a85(0x76)),'errors':_0x428b37[_0x334a85(0x9f)](_0x334a85(0x98)),'master_shop':_0x423b99,'profile':_0x4ba9e0,'role':_0x1ce2f2,'language':_0x2489b2,'sales_mine':_0x53a52c,'staff_arr':_0x1420b0});}catch(_0x4a7409){console[_0x334a85(0x71)](_0x4a7409);}}),router[a0_0x49ee87(0x82)](a0_0x49ee87(0x7b),auth,async(_0x283d22,_0x4d3e8e)=>{var _0x3b65f3=a0_0x49ee87;try{const _0x533be5=await master_shop['find'](),_0x1606ab=_0x283d22[_0x3b65f3(0x75)],_0x584230=await profile['findOne']({'email':_0x1606ab[_0x3b65f3(0xac)]}),_0x1d7e34=await staff[_0x3b65f3(0x7c)]({'email':_0x1606ab[_0x3b65f3(0xac)]}),_0x56a04e=await customer['find']({'agent_id':_0x1d7e34[_0x3b65f3(0xb2)]}),_0x461654=_0x283d22[_0x3b65f3(0xb0)]['id'],_0x1a28e1=await sales_order[_0x3b65f3(0x79)](_0x461654);if(_0x533be5[0x0][_0x3b65f3(0x93)]=='English\x20(US)')var _0x1d767a=users[_0x3b65f3(0xa9)];else{if(_0x533be5[0x0][_0x3b65f3(0x93)]=='Hindi')var _0x1d767a=users[_0x3b65f3(0xbb)];else{if(_0x533be5[0x0][_0x3b65f3(0x93)]=='German')var _0x1d767a=users['German'];else{if(_0x533be5[0x0][_0x3b65f3(0x93)]==_0x3b65f3(0xb9))var _0x1d767a=users['Spanish'];else{if(_0x533be5[0x0][_0x3b65f3(0x93)]==_0x3b65f3(0x85))var _0x1d767a=users[_0x3b65f3(0x85)];else{if(_0x533be5[0x0][_0x3b65f3(0x93)]=='Portuguese\x20(BR)')var _0x1d767a=users[_0x3b65f3(0x96)];else{if(_0x533be5[0x0]['language']==_0x3b65f3(0x9b))var _0x1d767a=users[_0x3b65f3(0x9b)];else{if(_0x533be5[0x0][_0x3b65f3(0x93)]==_0x3b65f3(0x9d))var _0x1d767a=users['Arabic'];}}}}}}}_0x4d3e8e[_0x3b65f3(0x97)](_0x3b65f3(0xbe),{'success':_0x283d22[_0x3b65f3(0x9f)](_0x3b65f3(0x76)),'errors':_0x283d22[_0x3b65f3(0x9f)](_0x3b65f3(0x98)),'master_shop':_0x533be5,'profile':_0x584230,'role':_0x1606ab,'language':_0x1d767a,'customer':_0x56a04e,'sales_sa':_0x1a28e1});}catch(_0x577c8d){console['log'](_0x577c8d);}}),router[a0_0x49ee87(0x82)]('/view_x',auth,async(_0x13f5f2,_0x2cc39c)=>{var _0x367e5b=a0_0x49ee87;try{const _0x567eba=await master_shop[_0x367e5b(0x6f)](),_0x410cf5=_0x13f5f2[_0x367e5b(0x75)],_0x58d375=await profile[_0x367e5b(0x7c)]({'email':_0x410cf5[_0x367e5b(0xac)]}),_0x5b12dd=await staff[_0x367e5b(0x7c)]({'email':_0x410cf5[_0x367e5b(0xac)],'type_of_acc_cat':'1'});let _0xacf57c=[];_0x5b12dd!=null&&(_0xacf57c=await sales_sa['find']({'sales_staff_id':_0x5b12dd['_id']}));if(_0x567eba[0x0]['language']=='English\x20(US)')var _0x2083c3=users[_0x367e5b(0xa9)];else{if(_0x567eba[0x0][_0x367e5b(0x93)]==_0x367e5b(0xbb))var _0x2083c3=users[_0x367e5b(0xbb)];else{if(_0x567eba[0x0][_0x367e5b(0x93)]==_0x367e5b(0xba))var _0x2083c3=users['German'];else{if(_0x567eba[0x0][_0x367e5b(0x93)]==_0x367e5b(0xb9))var _0x2083c3=users['Spanish'];else{if(_0x567eba[0x0][_0x367e5b(0x93)]==_0x367e5b(0x85))var _0x2083c3=users['French'];else{if(_0x567eba[0x0][_0x367e5b(0x93)]==_0x367e5b(0xb1))var _0x2083c3=users[_0x367e5b(0x96)];else{if(_0x567eba[0x0]['language']=='Chinese')var _0x2083c3=users[_0x367e5b(0x9b)];else{if(_0x567eba[0x0][_0x367e5b(0x93)]==_0x367e5b(0x9d))var _0x2083c3=users[_0x367e5b(0xbd)];}}}}}}}_0x2cc39c[_0x367e5b(0x97)]('collection_xt',{'success':_0x13f5f2[_0x367e5b(0x9f)]('success'),'errors':_0x13f5f2['flash'](_0x367e5b(0x98)),'master_shop':_0x567eba,'profile':_0x58d375,'role':_0x410cf5,'language':_0x2083c3,'sales_mine':_0xacf57c,'staff_arr':_0x5b12dd});}catch(_0x1fb0a9){console[_0x367e5b(0x71)](_0x1fb0a9);}}),router[a0_0x49ee87(0x82)]('/view_xt/:id',auth,async(_0x5e60c6,_0x51ab35)=>{var _0x480813=a0_0x49ee87;try{const _0x46adbe=await master_shop[_0x480813(0x6f)](),_0x1c7c3c=_0x5e60c6[_0x480813(0x75)],_0x143423=await profile['findOne']({'email':_0x1c7c3c['email']}),_0x37e8eb=await staff[_0x480813(0x7c)]({'email':_0x1c7c3c[_0x480813(0xac)]}),_0x3006fb=await customer['find']({'agent_id':_0x37e8eb[_0x480813(0xb2)]}),_0x1edc8f=_0x5e60c6[_0x480813(0xb0)]['id'],_0x4d9756=await sales_sa[_0x480813(0x79)](_0x1edc8f);if(_0x46adbe[0x0][_0x480813(0x93)]==_0x480813(0x95))var _0x306de2=users[_0x480813(0xa9)];else{if(_0x46adbe[0x0][_0x480813(0x93)]=='Hindi')var _0x306de2=users[_0x480813(0xbb)];else{if(_0x46adbe[0x0][_0x480813(0x93)]=='German')var _0x306de2=users[_0x480813(0xba)];else{if(_0x46adbe[0x0][_0x480813(0x93)]==_0x480813(0xb9))var _0x306de2=users['Spanish'];else{if(_0x46adbe[0x0][_0x480813(0x93)]==_0x480813(0x85))var _0x306de2=users[_0x480813(0x85)];else{if(_0x46adbe[0x0][_0x480813(0x93)]=='Portuguese\x20(BR)')var _0x306de2=users[_0x480813(0x96)];else{if(_0x46adbe[0x0][_0x480813(0x93)]==_0x480813(0x9b))var _0x306de2=users[_0x480813(0x9b)];else{if(_0x46adbe[0x0][_0x480813(0x93)]==_0x480813(0x9d))var _0x306de2=users[_0x480813(0xbd)];}}}}}}}_0x51ab35[_0x480813(0x97)](_0x480813(0x74),{'success':_0x5e60c6[_0x480813(0x9f)](_0x480813(0x76)),'errors':_0x5e60c6[_0x480813(0x9f)](_0x480813(0x98)),'master_shop':_0x46adbe,'profile':_0x143423,'role':_0x1c7c3c,'language':_0x306de2,'customer':_0x3006fb,'sales_sa':_0x4d9756,'staff_arr':_0x37e8eb});}catch(_0x9c8249){console[_0x480813(0x71)](_0x9c8249);}}),router[a0_0x49ee87(0xb3)](a0_0x49ee87(0x80),auth,async(_0x43b463,_0x4641bd)=>{var _0x4b59e9=a0_0x49ee87;try{const _0x4f537d=_0x43b463[_0x4b59e9(0xb0)]['id'],_0x4993db=await sales_sa['findById'](_0x4f537d),{collection:_0x41c901,invoicemoney:_0x519548,collectionnumber:_0x55f628,typeofpayment:_0x30a2d0,cashdate:_0xc4ad2e,id_detl:_0x449da1}=_0x43b463[_0x4b59e9(0xa0)];if(typeof _0x449da1==_0x4b59e9(0x90))var _0x32b967=[_0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x73)]],_0x58fe1c=[_0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x89)]],_0x48e87c=[_0x43b463[_0x4b59e9(0xa0)]['spwp']],_0x2c73c2=[_0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x81)]],_0x1d5ec8=[_0x43b463[_0x4b59e9(0xa0)]['vol_deals']],_0x586e16=[_0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0xa3)]],_0x4fbdae=[_0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0xbf)]];else var _0x32b967=[..._0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x73)]],_0x58fe1c=[..._0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x89)]],_0x48e87c=[..._0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x8e)]],_0x2c73c2=[..._0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x81)]],_0x1d5ec8=[..._0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0x7d)]],_0x586e16=[..._0x43b463[_0x4b59e9(0xa0)][_0x4b59e9(0xa3)]],_0x4fbdae=[..._0x43b463['body'][_0x4b59e9(0xbf)]];const _0x342c6c=_0x32b967[_0x4b59e9(0xa7)](_0x1d0d9c=>{return _0x1d0d9c={'id_detl':_0x1d0d9c};});_0x58fe1c[_0x4b59e9(0xb6)]((_0x573c5f,_0x5abac4)=>{_0x342c6c[_0x5abac4]['ewt']=_0x573c5f;}),_0x48e87c[_0x4b59e9(0xb6)]((_0x496f73,_0x255c7f)=>{var _0x1be232=_0x4b59e9;_0x342c6c[_0x255c7f][_0x1be232(0x8e)]=_0x496f73;}),_0x2c73c2[_0x4b59e9(0xb6)]((_0x4916f4,_0x31a90a)=>{var _0x4b39fe=_0x4b59e9;_0x342c6c[_0x31a90a][_0x4b39fe(0x81)]=_0x4916f4;}),_0x1d5ec8['forEach']((_0x477218,_0x3e3674)=>{_0x342c6c[_0x3e3674]['vol_deals']=_0x477218;}),_0x586e16['forEach']((_0xa6e005,_0x26ec24)=>{var _0x16596=_0x4b59e9;_0x342c6c[_0x26ec24][_0x16596(0xa3)]=_0xa6e005;}),_0x4fbdae[_0x4b59e9(0xb6)]((_0x41917d,_0x272c5)=>{_0x342c6c[_0x272c5]['totalcollection']=_0x41917d;}),_0x4993db[_0x4b59e9(0x9e)]=_0x41c901,_0x4993db['collectionnumber']=_0x55f628,_0x4993db[_0x4b59e9(0x8b)]=_0x30a2d0,_0x4993db[_0x4b59e9(0xc2)]=_0xc4ad2e,_0x4993db[_0x4b59e9(0x7e)]=_0x4b59e9(0x78),_0x4993db[_0x4b59e9(0x77)]='1';const _0x581526=await _0x4993db['save']();if(_0x581526[_0x4b59e9(0x7e)]==_0x4b59e9(0x78))for(let _0x1907f5=0x0;_0x1907f5<=_0x342c6c[_0x4b59e9(0x9a)]-0x1;_0x1907f5++){const _0x1769da=_0x342c6c[_0x1907f5],_0x5241b1=mongoose['Types'][_0x4b59e9(0xab)];console[_0x4b59e9(0x71)](_0x1769da);const _0x3064da=await sales_sa['updateOne']({'_id':_0x5241b1(_0x4f537d[_0x4b59e9(0xaa)]()),'sale_product._id':_0x5241b1(_0x1769da[_0x4b59e9(0x73)][_0x4b59e9(0xaa)]())},{'$set':{'sale_product.$.ewt':_0x1769da[_0x4b59e9(0x89)],'sale_product.$.spwp':_0x1769da[_0x4b59e9(0x8e)],'sale_product.$.fin_disc':_0x1769da['fin_disc'],'sale_product.$.vol_deals':_0x1769da['vol_deals'],'sale_product.$.bo_disc':_0x1769da['bo_disc'],'sale_product.$.totalprice':parseFloat(_0x1769da[_0x4b59e9(0xaf)])}});}_0x43b463[_0x4b59e9(0x9f)](_0x4b59e9(0x76),_0x4b59e9(0x86)),_0x4641bd['redirect'](_0x4b59e9(0xb4)+_0x4f537d);}catch(_0x41343f){console['log'](_0x41343f);}}),router['get'](a0_0x49ee87(0xa1),auth,async(_0x154ee7,_0x484155)=>{var _0x5f2978=a0_0x49ee87;try{const _0x14591a=await master_shop[_0x5f2978(0x6f)](),_0x10c744=_0x154ee7[_0x5f2978(0x75)],_0x1d77bf=await profile[_0x5f2978(0x7c)]({'email':_0x10c744[_0x5f2978(0xac)]}),_0x4af305=await staff[_0x5f2978(0x7c)]({'email':_0x10c744[_0x5f2978(0xac)],'type_of_acc_cat':'1'});let _0x3b1b67=[];_0x4af305!=null&&(_0x3b1b67=await sales_order[_0x5f2978(0x6f)]({'sales_staff_id':_0x4af305[_0x5f2978(0xb2)]}));if(_0x14591a[0x0][_0x5f2978(0x93)]==_0x5f2978(0x95))var _0x53de17=users[_0x5f2978(0xa9)];else{if(_0x14591a[0x0][_0x5f2978(0x93)]==_0x5f2978(0xbb))var _0x53de17=users[_0x5f2978(0xbb)];else{if(_0x14591a[0x0][_0x5f2978(0x93)]==_0x5f2978(0xba))var _0x53de17=users[_0x5f2978(0xba)];else{if(_0x14591a[0x0][_0x5f2978(0x93)]==_0x5f2978(0xb9))var _0x53de17=users[_0x5f2978(0xb9)];else{if(_0x14591a[0x0][_0x5f2978(0x93)]=='French')var _0x53de17=users[_0x5f2978(0x85)];else{if(_0x14591a[0x0][_0x5f2978(0x93)]==_0x5f2978(0xb1))var _0x53de17=users['Portuguese'];else{if(_0x14591a[0x0]['language']==_0x5f2978(0x9b))var _0x53de17=users['Chinese'];else{if(_0x14591a[0x0][_0x5f2978(0x93)]=='Arabic\x20(ae)')var _0x53de17=users['Arabic'];}}}}}}}_0x484155[_0x5f2978(0x97)](_0x5f2978(0xa5),{'success':_0x154ee7[_0x5f2978(0x9f)](_0x5f2978(0x76)),'errors':_0x154ee7[_0x5f2978(0x9f)]('errors'),'master_shop':_0x14591a,'profile':_0x1d77bf,'role':_0x10c744,'language':_0x53de17,'sales_mine':_0x3b1b67,'staff_arr':_0x4af305});}catch(_0x2e8502){console[_0x5f2978(0x71)](_0x2e8502);}}),router[a0_0x49ee87(0x82)](a0_0x49ee87(0x8a),auth,async(_0x201a80,_0x35a5f4)=>{var _0x29520b=a0_0x49ee87;try{const _0xe54a4f=await master_shop['find'](),_0x4f35e8=_0x201a80[_0x29520b(0x75)],_0x4e49b9=await profile[_0x29520b(0x7c)]({'email':_0x4f35e8['email']}),_0x2d44e7=await staff[_0x29520b(0x7c)]({'email':_0x4f35e8['email']}),_0x247e5f=await customer[_0x29520b(0x6f)]({'agent_id':_0x2d44e7[_0x29520b(0xb2)]}),_0x14bd8f=_0x201a80[_0x29520b(0xb0)]['id'],_0x3ccf28=await sales_order[_0x29520b(0x79)](_0x14bd8f);if(_0xe54a4f[0x0]['language']=='English\x20(US)')var _0x4edf69=users[_0x29520b(0xa9)];else{if(_0xe54a4f[0x0][_0x29520b(0x93)]==_0x29520b(0xbb))var _0x4edf69=users['Hindi'];else{if(_0xe54a4f[0x0][_0x29520b(0x93)]==_0x29520b(0xba))var _0x4edf69=users[_0x29520b(0xba)];else{if(_0xe54a4f[0x0][_0x29520b(0x93)]=='Spanish')var _0x4edf69=users[_0x29520b(0xb9)];else{if(_0xe54a4f[0x0][_0x29520b(0x93)]==_0x29520b(0x85))var _0x4edf69=users[_0x29520b(0x85)];else{if(_0xe54a4f[0x0]['language']==_0x29520b(0xb1))var _0x4edf69=users[_0x29520b(0x96)];else{if(_0xe54a4f[0x0][_0x29520b(0x93)]==_0x29520b(0x9b))var _0x4edf69=users[_0x29520b(0x9b)];else{if(_0xe54a4f[0x0][_0x29520b(0x93)]==_0x29520b(0x9d))var _0x4edf69=users[_0x29520b(0xbd)];}}}}}}}_0x35a5f4[_0x29520b(0x97)](_0x29520b(0x7a),{'success':_0x201a80[_0x29520b(0x9f)]('success'),'errors':_0x201a80['flash'](_0x29520b(0x98)),'master_shop':_0xe54a4f,'profile':_0x4e49b9,'role':_0x4f35e8,'language':_0x4edf69,'customer':_0x247e5f,'sales_sa':_0x3ccf28,'staff_arr':_0x2d44e7});}catch(_0x28b174){console[_0x29520b(0x71)](_0x28b174);}}),router[a0_0x49ee87(0xb3)](a0_0x49ee87(0x8a),auth,async(_0x1fbf2d,_0x346880)=>{var _0x3204e7=a0_0x49ee87;try{const _0x5f0726=_0x1fbf2d['params']['id'],_0x126f17=await sales_order['findById'](_0x5f0726),{collection:_0x38f37a,invoicemoney:_0x428b08,collectionnumber:_0x3e67c8,typeofpayment:_0x5cd9f1,cashdate:_0x5c02be,id_detl:_0xa45887}=_0x1fbf2d['body'];_0x126f17['collection_price']=_0x38f37a,_0x126f17[_0x3204e7(0x8b)]=_0x5cd9f1,_0x126f17['cash_date']=_0x5c02be,_0x126f17[_0x3204e7(0x7e)]=_0x3204e7(0x78),_0x126f17[_0x3204e7(0x77)]='1';const _0x22d9f6=await _0x126f17[_0x3204e7(0x88)]();_0x1fbf2d[_0x3204e7(0x9f)]('success',_0x3204e7(0x86)),_0x346880['redirect'](_0x3204e7(0x72)+_0x5f0726);}catch(_0x1006cd){console['log'](_0x1006cd);}}),module[a0_0x49ee87(0x91)]=router;