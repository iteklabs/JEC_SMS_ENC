const a0_0xe2e71c=a0_0x1094;(function(_0xda6675,_0xce0045){const _0x1c3f4e=a0_0x1094,_0x42136d=_0xda6675();while(!![]){try{const _0x8e7135=parseInt(_0x1c3f4e(0x185))/0x1*(parseInt(_0x1c3f4e(0x13b))/0x2)+parseInt(_0x1c3f4e(0x154))/0x3+parseInt(_0x1c3f4e(0x116))/0x4*(parseInt(_0x1c3f4e(0x187))/0x5)+-parseInt(_0x1c3f4e(0x141))/0x6*(-parseInt(_0x1c3f4e(0x169))/0x7)+parseInt(_0x1c3f4e(0x12a))/0x8+parseInt(_0x1c3f4e(0x135))/0x9+-parseInt(_0x1c3f4e(0x17e))/0xa;if(_0x8e7135===_0xce0045)break;else _0x42136d['push'](_0x42136d['shift']());}catch(_0x2eeee7){_0x42136d['push'](_0x42136d['shift']());}}}(a0_0x42fd,0x6b850),require('dotenv')[a0_0xe2e71c(0x165)]());const express=require(a0_0xe2e71c(0x115)),app=express(),bodyParser=require('body-parser'),path=require(a0_0xe2e71c(0x11a)),ejs=require('ejs'),port=process[a0_0xe2e71c(0x164)]['PORT']||0x1388,mongoose=require('mongoose'),flash=require(a0_0xe2e71c(0x13f));var session=require('express-session');const mongoDbsession=require(a0_0xe2e71c(0x13a))(session),cookieParser=require(a0_0xe2e71c(0x13c));function a0_0x42fd(){const _0x2c20a9=['1318623cNTCqr','./routers/pickinglist','/profile','./routers/gross_price_setup','/warehouse_approval','/transaction_reports','/sales_order','db\x20connected\x20!!!!!','/collection','catch','./routers/sales_return','server\x20running\x20on\x20port\x20','./routers/supplier','join','./routers/sales_sa','/mobile_warehouse','env','config','SESSION_STRING_TEST','/mobile_rw_inc','json','35nhNOyM','./routers/all_sales_finsished','./routers/stock_report','/so_approvers','DATABASE_STRING','./routers/edit_approval','SESSION_COLLECTION_TEST','then','/stock_report','/sales_return','./routers/otherReports','NODE_ENV','./routers/warehouse','./mobile_routers/rw_inc','this\x20is\x20my\x20secretkey','./routers/report','./routers/collection','/accounting_approval','static','/adjustment','dev','17755320kAfRyK','./routers/transaction_reports_finished','./routers/all_purchases_finished','production','/sales_sa','./routers/sales_order','/purchases_return','5NVuSoi','./routers/reports_sa','265bXoGGt','/reports_sa','./routers/warehousemap_income','express','8932OitLcq','views','/all_sales','./routers/payment_report','path','./routers/sales_return_finished','/all_purchases','/forgotPassword','/mobile_login','/sales_return_finished','/warehousemap_Outcome','./routers/warehouse_checking','./routers/all_sales','urlencoded','./mobile_routers/login','./mobile_routers/warehouse','/customer','./routers/my_inventory_sa','./routers/adjustment','/payment_report','4467496DJyZNH','./routers/all_purchases','/products','/all_purchases_finished','/supplier','/purchases_return_finished','/all_sales_finished','/staff','/master_shop','/adjustment_finished','./routers/purchases_return','5727780TMaguJ','listen','SESSION_STRING','./routers/sing_up','./routers/transfer_finished','connect-mongodb-session','127746uDALax','cookie-parser','use','./routers/master_settings','connect-flash','SESSION_COLLECTION','172584uPGYFi','/main_inventory','./routers/customer_sa','/warehousemap_Income','./routers/adjustment_finished','log','public','./routers/login','./routers/warehouse_approval','./routers/profile','./routers/products','./routers/main_inventory_sa','/TEST','./routers/test/removeNegative','set','DATABASE_STRING_TEST','./routers/purchase_return_finished','./routers/index','view\x20engine'];a0_0x42fd=function(){return _0x2c20a9;};return a0_0x42fd();}let databaseString,sessionString,sessionCollection;if(process[a0_0xe2e71c(0x164)][a0_0xe2e71c(0x174)]==a0_0xe2e71c(0x181))databaseString=process[a0_0xe2e71c(0x164)][a0_0xe2e71c(0x16d)],sessionString=process['env'][a0_0xe2e71c(0x137)],sessionCollection=process['env'][a0_0xe2e71c(0x140)];else process['env'][a0_0xe2e71c(0x174)]==a0_0xe2e71c(0x17d)&&(databaseString=process[a0_0xe2e71c(0x164)][a0_0xe2e71c(0x150)],sessionString=process[a0_0xe2e71c(0x164)][a0_0xe2e71c(0x166)],sessionCollection=process[a0_0xe2e71c(0x164)][a0_0xe2e71c(0x16f)]);function a0_0x1094(_0x1f1f16,_0x34d05e){const _0x42fd4b=a0_0x42fd();return a0_0x1094=function(_0x109458,_0x35f387){_0x109458=_0x109458-0x113;let _0x54ae8d=_0x42fd4b[_0x109458];return _0x54ae8d;},a0_0x1094(_0x1f1f16,_0x34d05e);}mongoose['connect'](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})[a0_0xe2e71c(0x170)](()=>{const _0x4c5651=a0_0xe2e71c;console[_0x4c5651(0x146)](_0x4c5651(0x15b));})[a0_0xe2e71c(0x15d)](_0x4e9976=>{const _0x551311=a0_0xe2e71c;console[_0x551311(0x146)](_0x4e9976);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});app['use'](session({'secret':a0_0xe2e71c(0x177),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0xe2e71c(0x13d)](flash()),app[a0_0xe2e71c(0x13d)](bodyParser[a0_0xe2e71c(0x123)]({'extended':![]})),app['use'](cookieParser()),app['use'](bodyParser[a0_0xe2e71c(0x168)]()),app['use'](express['json']()),app[a0_0xe2e71c(0x14f)](a0_0xe2e71c(0x153),'ejs'),app[a0_0xe2e71c(0x14f)](a0_0xe2e71c(0x117),path[a0_0xe2e71c(0x161)](__dirname,'views')),app[a0_0xe2e71c(0x13d)](express[a0_0xe2e71c(0x17b)](path['join'](__dirname,a0_0xe2e71c(0x147))));const index_router=require(a0_0xe2e71c(0x152)),products_router=require(a0_0xe2e71c(0x14b)),warehouse_router=require(a0_0xe2e71c(0x175)),staff_router=require('./routers/staff'),customer_router=require('./routers/customer'),supplier_router=require(a0_0xe2e71c(0x160)),all_purchases_router=require(a0_0xe2e71c(0x12b)),purchases_return_router=require(a0_0xe2e71c(0x134)),all_sales_router=require(a0_0xe2e71c(0x122)),sales_return_router=require(a0_0xe2e71c(0x15e)),adjustment_router=require(a0_0xe2e71c(0x128)),transfer_router=require('./routers/transfer'),all_expenses_router=require('./routers/expenses'),stock_report_router=require(a0_0xe2e71c(0x16b)),payment_report=require(a0_0xe2e71c(0x119)),all_report=require(a0_0xe2e71c(0x178)),master_shop=require(a0_0xe2e71c(0x13e)),warehousemap_incoming=require(a0_0xe2e71c(0x114)),warehousemap_outgoing=require('./routers/warehousemap_outgoing'),transaction_reports_finished=require(a0_0xe2e71c(0x17f)),profile_router=require(a0_0xe2e71c(0x14a)),sing_up_router=require(a0_0xe2e71c(0x138)),login_router=require(a0_0xe2e71c(0x148)),all_purchases_router_finished=require(a0_0xe2e71c(0x180)),all_sales_router_finished=require(a0_0xe2e71c(0x16a)),adjustment_router_finished=require(a0_0xe2e71c(0x145)),transfer_router_finished=require(a0_0xe2e71c(0x139)),purchases_return_finished=require(a0_0xe2e71c(0x151)),sales_return_finished=require(a0_0xe2e71c(0x11b)),pdfOutReport=require(a0_0xe2e71c(0x155)),edit_approver_router=require(a0_0xe2e71c(0x16e)),passwordChanger=require('./routers/password_reset'),Tester=require(a0_0xe2e71c(0x14e));app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x14d),Tester),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x11d),passwordChanger),app[a0_0xe2e71c(0x13d)]('/edit_approval',edit_approver_router),app[a0_0xe2e71c(0x13d)]('/',index_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x12c),products_router),app[a0_0xe2e71c(0x13d)]('/warehouse',warehouse_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x131),staff_router),app['use'](a0_0xe2e71c(0x126),customer_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x12e),supplier_router),app['use'](a0_0xe2e71c(0x11c),all_purchases_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x184),purchases_return_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x118),all_sales_router),app['use'](a0_0xe2e71c(0x172),sales_return_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x17c),adjustment_router),app[a0_0xe2e71c(0x13d)]('/transfer',transfer_router),app[a0_0xe2e71c(0x13d)]('/all_expenses',all_expenses_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x171),stock_report_router),app['use'](a0_0xe2e71c(0x129),payment_report),app[a0_0xe2e71c(0x13d)]('/report',all_report),app['use'](a0_0xe2e71c(0x132),master_shop),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x144),warehousemap_incoming),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x120),warehousemap_outgoing),app['use'](a0_0xe2e71c(0x12d),all_purchases_router_finished),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x130),all_sales_router_finished),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x12f),purchases_return_finished),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x11f),sales_return_finished),app['use']('/picking_list',pdfOutReport),app['use'](a0_0xe2e71c(0x133),adjustment_router_finished),app['use']('/transfer_finished',transfer_router_finished),app['use'](a0_0xe2e71c(0x159),transaction_reports_finished),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x156),profile_router),app[a0_0xe2e71c(0x13d)]('/',sing_up_router),app['use']('/',login_router);const mobile_login=require(a0_0xe2e71c(0x124)),mobile_rw_inc=require(a0_0xe2e71c(0x176)),mobile_warehouse=require(a0_0xe2e71c(0x125));app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x11e),mobile_login),app['use'](a0_0xe2e71c(0x167),mobile_rw_inc),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x163),mobile_warehouse);const customer_sa_router=require(a0_0xe2e71c(0x143)),main_inventory_sa_router=require(a0_0xe2e71c(0x14c)),my_inventory_sa_router=require(a0_0xe2e71c(0x127)),sales_sa_router=require(a0_0xe2e71c(0x162)),reportts_sa_router=require(a0_0xe2e71c(0x186)),gross_price_router=require(a0_0xe2e71c(0x157)),collection_router=require(a0_0xe2e71c(0x179)),Reports_router=require(a0_0xe2e71c(0x173)),sales_order_router=require(a0_0xe2e71c(0x183));app[a0_0xe2e71c(0x13d)]('/customer_sa',customer_sa_router),app['use']('/my_inventory',my_inventory_sa_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x142),main_inventory_sa_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x182),sales_sa_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x113),reportts_sa_router),app['use'](a0_0xe2e71c(0x15c),collection_router),app[a0_0xe2e71c(0x13d)]('/gross_price_setup',gross_price_router),app['use']('/reports',Reports_router),app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x15a),sales_order_router);const approval_acct_router=require('./routers/accounting');app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x17a),approval_acct_router);const approval_wm_router=require(a0_0xe2e71c(0x149));app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x158),approval_wm_router);const approval_so_setup=require('./routers/so_approver');app[a0_0xe2e71c(0x13d)](a0_0xe2e71c(0x16c),approval_so_setup);const warehouse_checking=require(a0_0xe2e71c(0x121));app[a0_0xe2e71c(0x13d)]('/warehouse_checker',warehouse_checking),app[a0_0xe2e71c(0x136)](port,()=>{const _0x372f52=a0_0xe2e71c;console[_0x372f52(0x146)](_0x372f52(0x15f)+port);});