const a0_0x382c83=a0_0x477e;(function(_0x2383e4,_0x2e9cd1){const _0x3f49b9=a0_0x477e,_0xa36f12=_0x2383e4();while(!![]){try{const _0x1f27c0=-parseInt(_0x3f49b9(0x15e))/0x1+-parseInt(_0x3f49b9(0x13f))/0x2*(parseInt(_0x3f49b9(0x119))/0x3)+parseInt(_0x3f49b9(0x183))/0x4+-parseInt(_0x3f49b9(0x138))/0x5*(-parseInt(_0x3f49b9(0x137))/0x6)+-parseInt(_0x3f49b9(0x116))/0x7*(-parseInt(_0x3f49b9(0x143))/0x8)+-parseInt(_0x3f49b9(0x121))/0x9*(-parseInt(_0x3f49b9(0x155))/0xa)+-parseInt(_0x3f49b9(0x176))/0xb*(parseInt(_0x3f49b9(0x16e))/0xc);if(_0x1f27c0===_0x2e9cd1)break;else _0xa36f12['push'](_0xa36f12['shift']());}catch(_0x40ed2d){_0xa36f12['push'](_0xa36f12['shift']());}}}(a0_0x140c,0xac34f),require(a0_0x382c83(0x14a))[a0_0x382c83(0x129)]());const express=require(a0_0x382c83(0x123)),app=express(),bodyParser=require(a0_0x382c83(0x14c)),path=require('path'),ejs=require(a0_0x382c83(0x180)),port=process['env'][a0_0x382c83(0x16b)]||0x1388,mongoose=require(a0_0x382c83(0x17f)),flash=require(a0_0x382c83(0x147));var session=require(a0_0x382c83(0x157));const mongoDbsession=require(a0_0x382c83(0x173))(session),cookieParser=require(a0_0x382c83(0x153));let databaseString,sessionString,sessionCollection;if(process['env']['NODE_ENV']==a0_0x382c83(0x11a))databaseString=process['env']['DATABASE_STRING'],sessionString=process[a0_0x382c83(0x112)][a0_0x382c83(0x11b)],sessionCollection=process[a0_0x382c83(0x112)][a0_0x382c83(0x172)];else process[a0_0x382c83(0x112)][a0_0x382c83(0x154)]=='dev'&&(databaseString=process['env'][a0_0x382c83(0x133)],sessionString=process[a0_0x382c83(0x112)][a0_0x382c83(0x111)],sessionCollection=process[a0_0x382c83(0x112)][a0_0x382c83(0x14f)]);function a0_0x477e(_0x40b172,_0x2fae59){const _0x140c89=a0_0x140c();return a0_0x477e=function(_0x477e34,_0xe4dcef){_0x477e34=_0x477e34-0x10d;let _0xb0a30=_0x140c89[_0x477e34];return _0xb0a30;},a0_0x477e(_0x40b172,_0x2fae59);}mongoose['connect'](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})[a0_0x382c83(0x171)](()=>{const _0x4d0130=a0_0x382c83;console[_0x4d0130(0x150)](_0x4d0130(0x120));})['catch'](_0x3ce352=>{console['log'](_0x3ce352);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});app[a0_0x382c83(0x10d)](session({'secret':a0_0x382c83(0x15c),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0x382c83(0x10d)](flash()),app['use'](bodyParser['urlencoded']({'extended':![]})),app[a0_0x382c83(0x10d)](cookieParser()),app[a0_0x382c83(0x10d)](bodyParser[a0_0x382c83(0x13b)]()),app[a0_0x382c83(0x10d)](express[a0_0x382c83(0x13b)]()),app[a0_0x382c83(0x134)](a0_0x382c83(0x177),a0_0x382c83(0x180)),app[a0_0x382c83(0x134)]('views',path[a0_0x382c83(0x184)](__dirname,a0_0x382c83(0x179))),app[a0_0x382c83(0x10d)](express[a0_0x382c83(0x132)](path[a0_0x382c83(0x184)](__dirname,a0_0x382c83(0x12b))));const index_router=require(a0_0x382c83(0x178)),products_router=require(a0_0x382c83(0x13a)),warehouse_router=require(a0_0x382c83(0x182)),staff_router=require(a0_0x382c83(0x144)),customer_router=require(a0_0x382c83(0x17c)),supplier_router=require(a0_0x382c83(0x13e)),all_purchases_router=require(a0_0x382c83(0x162)),purchases_return_router=require(a0_0x382c83(0x114)),all_sales_router=require(a0_0x382c83(0x164)),sales_return_router=require(a0_0x382c83(0x115)),adjustment_router=require(a0_0x382c83(0x127)),transfer_router=require(a0_0x382c83(0x12f)),all_expenses_router=require(a0_0x382c83(0x161)),stock_report_router=require(a0_0x382c83(0x17e)),payment_report=require(a0_0x382c83(0x135)),all_report=require('./routers/report'),master_shop=require(a0_0x382c83(0x11c)),warehousemap_incoming=require(a0_0x382c83(0x122)),warehousemap_outgoing=require('./routers/warehousemap_outgoing'),transaction_reports_finished=require(a0_0x382c83(0x158)),profile_router=require('./routers/profile'),sing_up_router=require(a0_0x382c83(0x12c)),login_router=require(a0_0x382c83(0x174)),all_purchases_router_finished=require('./routers/all_purchases_finished'),all_sales_router_finished=require(a0_0x382c83(0x10e)),adjustment_router_finished=require(a0_0x382c83(0x12d)),transfer_router_finished=require('./routers/transfer_finished'),purchases_return_finished=require(a0_0x382c83(0x17b)),sales_return_finished=require(a0_0x382c83(0x15a)),pdfOutReport=require(a0_0x382c83(0x149)),edit_approver_router=require(a0_0x382c83(0x175)),passwordChanger=require('./routers/password_reset'),Tester=require(a0_0x382c83(0x16c));app[a0_0x382c83(0x10d)](a0_0x382c83(0x131),Tester),app[a0_0x382c83(0x10d)](a0_0x382c83(0x130),passwordChanger),app[a0_0x382c83(0x10d)]('/edit_approval',edit_approver_router),app[a0_0x382c83(0x10d)]('/',index_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x12a),products_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x181),warehouse_router),app['use'](a0_0x382c83(0x124),staff_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x11d),customer_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x148),supplier_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x125),all_purchases_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x113),purchases_return_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x11f),all_sales_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x168),sales_return_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x117),adjustment_router),app['use'](a0_0x382c83(0x14e),transfer_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x13c),all_expenses_router),app['use'](a0_0x382c83(0x152),stock_report_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x142),payment_report),app[a0_0x382c83(0x10d)](a0_0x382c83(0x126),all_report),app[a0_0x382c83(0x10d)](a0_0x382c83(0x139),master_shop),app[a0_0x382c83(0x10d)](a0_0x382c83(0x110),warehousemap_incoming),app[a0_0x382c83(0x10d)](a0_0x382c83(0x165),warehousemap_outgoing),app[a0_0x382c83(0x10d)](a0_0x382c83(0x11e),all_purchases_router_finished),app[a0_0x382c83(0x10d)]('/all_sales_finished',all_sales_router_finished),app[a0_0x382c83(0x10d)](a0_0x382c83(0x185),purchases_return_finished),app[a0_0x382c83(0x10d)]('/sales_return_finished',sales_return_finished),app[a0_0x382c83(0x10d)](a0_0x382c83(0x156),pdfOutReport),app['use'](a0_0x382c83(0x140),adjustment_router_finished),app[a0_0x382c83(0x10d)](a0_0x382c83(0x12e),transfer_router_finished),app[a0_0x382c83(0x10d)](a0_0x382c83(0x170),transaction_reports_finished),app[a0_0x382c83(0x10d)]('/profile',profile_router),app[a0_0x382c83(0x10d)]('/',sing_up_router),app['use']('/',login_router);const mobile_login=require(a0_0x382c83(0x13d)),mobile_rw_inc=require('./mobile_routers/rw_inc'),mobile_warehouse=require(a0_0x382c83(0x169));app[a0_0x382c83(0x10d)](a0_0x382c83(0x166),mobile_login),app['use'](a0_0x382c83(0x16d),mobile_rw_inc),app['use'](a0_0x382c83(0x186),mobile_warehouse);const customer_sa_router=require(a0_0x382c83(0x14d)),main_inventory_sa_router=require('./routers/main_inventory_sa'),my_inventory_sa_router=require(a0_0x382c83(0x146)),sales_sa_router=require(a0_0x382c83(0x167)),reportts_sa_router=require(a0_0x382c83(0x16a)),gross_price_router=require(a0_0x382c83(0x141)),collection_router=require('./routers/collection'),Reports_router=require(a0_0x382c83(0x163)),sales_order_router=require('./routers/sales_order');app[a0_0x382c83(0x10d)](a0_0x382c83(0x15f),customer_sa_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x15d),my_inventory_sa_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x17a),main_inventory_sa_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x16f),sales_sa_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x145),reportts_sa_router),app['use'](a0_0x382c83(0x128),collection_router),app[a0_0x382c83(0x10d)]('/gross_price_setup',gross_price_router),app['use'](a0_0x382c83(0x118),Reports_router),app[a0_0x382c83(0x10d)](a0_0x382c83(0x17d),sales_order_router);const approval_acct_router=require('./routers/accounting');app['use'](a0_0x382c83(0x15b),approval_acct_router);const approval_wm_router=require(a0_0x382c83(0x151));app['use'](a0_0x382c83(0x14b),approval_wm_router);function a0_0x140c(){const _0x3b0591=['./routers/staff','/reports_sa','./routers/my_inventory_sa','connect-flash','/supplier','./routers/pickinglist','dotenv','/warehouse_approval','body-parser','./routers/customer_sa','/transfer','SESSION_COLLECTION_TEST','log','./routers/warehouse_approval','/stock_report','cookie-parser','NODE_ENV','11946390IvSpOI','/picking_list','express-session','./routers/transaction_reports_finished','/warehouse_checker','./routers/sales_return_finished','/accounting_approval','this\x20is\x20my\x20secretkey','/my_inventory','819431msFPaw','/customer_sa','/so_approvers','./routers/expenses','./routers/all_purchases','./routers/otherReports','./routers/all_sales','/warehousemap_Outcome','/mobile_login','./routers/sales_sa','/sales_return','./mobile_routers/warehouse','./routers/reports_sa','PORT','./routers/test/removeNegative','/mobile_rw_inc','8772vfkmcr','/sales_sa','/transaction_reports','then','SESSION_COLLECTION','connect-mongodb-session','./routers/login','./routers/edit_approval','17996PxCCwZ','view\x20engine','./routers/index','views','/main_inventory','./routers/purchase_return_finished','./routers/customer','/sales_order','./routers/stock_report','mongoose','ejs','/warehouse','./routers/warehouse','4123836pvFdTG','join','/purchases_return_finished','/mobile_warehouse','./routers/warehouse_checking','use','./routers/all_sales_finsished','server\x20running\x20on\x20port\x20','/warehousemap_Income','SESSION_STRING_TEST','env','/purchases_return','./routers/purchases_return','./routers/sales_return','7NnKlxq','/adjustment','/reports','3BVsOCo','production','SESSION_STRING','./routers/master_settings','/customer','/all_purchases_finished','/all_sales','db\x20connected\x20!!!!!','9NFKTlJ','./routers/warehousemap_income','express','/staff','/all_purchases','/report','./routers/adjustment','/collection','config','/products','public','./routers/sing_up','./routers/adjustment_finished','/transfer_finished','./routers/transfer','/forgotPassword','/TEST','static','DATABASE_STRING_TEST','set','./routers/payment_report','./routers/so_approver','150kayrud','87640mEnmhD','/master_shop','./routers/products','json','/all_expenses','./mobile_routers/login','./routers/supplier','16130avPiKK','/adjustment_finished','./routers/gross_price_setup','/payment_report','519784miwGwb'];a0_0x140c=function(){return _0x3b0591;};return a0_0x140c();}const approval_so_setup=require(a0_0x382c83(0x136));app[a0_0x382c83(0x10d)](a0_0x382c83(0x160),approval_so_setup);const warehouse_checking=require(a0_0x382c83(0x187));app[a0_0x382c83(0x10d)](a0_0x382c83(0x159),warehouse_checking),app['listen'](port,()=>{const _0x47c0f9=a0_0x382c83;console[_0x47c0f9(0x150)](_0x47c0f9(0x10f)+port);});