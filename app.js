function a0_0x126b(){const _0x1aa9ae=['/sales_sa','/sales_return_finished','/adjustment','public','this\x20is\x20my\x20secretkey','/forgotPassword','./routers/all_sales_finsished','./routers/expenses','catch','static','/picking_list','/report','7072443OMnrlF','./routers/sales_order','1067299nNzWDJ','729QkyffR','/reports_sa','/all_purchases_finished','view\x20engine','./routers/warehouse_checking','log','./routers/purchase_return_finished','/accounting_approval','/payment_report','./routers/sales_return','db\x20connected\x20!!!!!','./routers/so_approver','./routers/otherReports','./routers/adjustment','/mobile_login','./routers/warehouse','/adjustment_finished','/customer_sa','urlencoded','/customer','./routers/gross_price_setup','/mobile_rw_inc','/all_sales','dotenv','ejs','/all_purchases','./routers/reports_sa','env','/all_expenses','/sales_order','./routers/profile','1897908ayCeBn','/staff','production','./routers/master_settings','connect-mongodb-session','cookie-parser','./routers/purchases_return','8474928UdKmnr','./routers/warehouse_approval','/gross_price_setup','./routers/sales_sa','./mobile_routers/rw_inc','./routers/transfer','/warehousemap_Income','./routers/test/removeNegative','/transaction_reports','/mobile_warehouse','views','./routers/adjustment_finished','./routers/main_inventory_sa','./routers/customer','server\x20running\x20on\x20port\x20','DATABASE_STRING_TEST','config','/stock_report','join','mongoose','./routers/payment_report','SESSION_COLLECTION_TEST','set','./routers/warehousemap_income','SESSION_COLLECTION','2861720qUstYa','/purchases_return_finished','DATABASE_STRING','then','/purchases_return','/TEST','/supplier','./routers/index','/transfer','connect-flash','19412iroYsv','/reports','NODE_ENV','/main_inventory','./routers/sing_up','./routers/password_reset','/warehouse_checker','/transfer_finished','listen','body-parser','/warehousemap_Outcome','/edit_approval','./routers/all_sales','/all_sales_finished','SESSION_STRING_TEST','./routers/report','./mobile_routers/warehouse','./routers/customer_sa','516qyhPFq','./routers/sales_return_finished','./routers/supplier','/master_shop','./routers/pickinglist','./routers/stock_report','./routers/accounting','583064tiAxTK','json','use','SESSION_STRING'];a0_0x126b=function(){return _0x1aa9ae;};return a0_0x126b();}const a0_0x535998=a0_0x1697;(function(_0x32d88f,_0x122aaa){const _0x4781f1=a0_0x1697,_0x910944=_0x32d88f();while(!![]){try{const _0x3ae904=-parseInt(_0x4781f1(0x182))/0x1+-parseInt(_0x4781f1(0x1cc))/0x2*(parseInt(_0x4781f1(0x1de))/0x3)+-parseInt(_0x4781f1(0x1a2))/0x4+parseInt(_0x4781f1(0x1c2))/0x5+-parseInt(_0x4781f1(0x1a9))/0x6+-parseInt(_0x4781f1(0x180))/0x7+parseInt(_0x4781f1(0x1e5))/0x8*(parseInt(_0x4781f1(0x183))/0x9);if(_0x3ae904===_0x122aaa)break;else _0x910944['push'](_0x910944['shift']());}catch(_0xf07553){_0x910944['push'](_0x910944['shift']());}}}(a0_0x126b,0xcd85e),require(a0_0x535998(0x19a))[a0_0x535998(0x1b9)]());const express=require('express'),app=express(),bodyParser=require(a0_0x535998(0x1d5)),path=require('path'),ejs=require(a0_0x535998(0x19b)),port=process['env']['PORT']||0x1388,mongoose=require(a0_0x535998(0x1bc)),flash=require(a0_0x535998(0x1cb));var session=require('express-session');const mongoDbsession=require(a0_0x535998(0x1a6))(session),cookieParser=require(a0_0x535998(0x1a7));let databaseString,sessionString,sessionCollection;if(process[a0_0x535998(0x19e)][a0_0x535998(0x1ce)]==a0_0x535998(0x1a4))databaseString=process[a0_0x535998(0x19e)][a0_0x535998(0x1c4)],sessionString=process[a0_0x535998(0x19e)][a0_0x535998(0x173)],sessionCollection=process[a0_0x535998(0x19e)][a0_0x535998(0x1c1)];else process[a0_0x535998(0x19e)][a0_0x535998(0x1ce)]=='dev'&&(databaseString=process[a0_0x535998(0x19e)][a0_0x535998(0x1b8)],sessionString=process['env'][a0_0x535998(0x1da)],sessionCollection=process[a0_0x535998(0x19e)][a0_0x535998(0x1be)]);mongoose['connect'](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})[a0_0x535998(0x1c5)](()=>{const _0x4e5172=a0_0x535998;console[_0x4e5172(0x188)](_0x4e5172(0x18d));})[a0_0x535998(0x17c)](_0x55a285=>{const _0x4c2c1e=a0_0x535998;console[_0x4c2c1e(0x188)](_0x55a285);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});app[a0_0x535998(0x1e7)](session({'secret':a0_0x535998(0x178),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0x535998(0x1e7)](flash()),app[a0_0x535998(0x1e7)](bodyParser[a0_0x535998(0x195)]({'extended':![]})),app[a0_0x535998(0x1e7)](cookieParser()),app[a0_0x535998(0x1e7)](bodyParser[a0_0x535998(0x1e6)]()),app[a0_0x535998(0x1e7)](express[a0_0x535998(0x1e6)]()),app[a0_0x535998(0x1bf)](a0_0x535998(0x186),a0_0x535998(0x19b)),app[a0_0x535998(0x1bf)](a0_0x535998(0x1b3),path[a0_0x535998(0x1bb)](__dirname,a0_0x535998(0x1b3))),app[a0_0x535998(0x1e7)](express[a0_0x535998(0x17d)](path[a0_0x535998(0x1bb)](__dirname,a0_0x535998(0x177))));const index_router=require(a0_0x535998(0x1c9)),products_router=require('./routers/products'),warehouse_router=require(a0_0x535998(0x192)),staff_router=require('./routers/staff'),customer_router=require(a0_0x535998(0x1b6)),supplier_router=require(a0_0x535998(0x1e0)),all_purchases_router=require('./routers/all_purchases'),purchases_return_router=require(a0_0x535998(0x1a8)),all_sales_router=require(a0_0x535998(0x1d8)),sales_return_router=require(a0_0x535998(0x18c)),adjustment_router=require(a0_0x535998(0x190)),transfer_router=require(a0_0x535998(0x1ae)),all_expenses_router=require(a0_0x535998(0x17b)),stock_report_router=require(a0_0x535998(0x1e3)),payment_report=require(a0_0x535998(0x1bd)),all_report=require(a0_0x535998(0x1db)),master_shop=require(a0_0x535998(0x1a5)),warehousemap_incoming=require(a0_0x535998(0x1c0)),warehousemap_outgoing=require('./routers/warehousemap_outgoing'),transaction_reports_finished=require('./routers/transaction_reports_finished'),profile_router=require(a0_0x535998(0x1a1)),sing_up_router=require(a0_0x535998(0x1d0)),login_router=require('./routers/login'),all_purchases_router_finished=require('./routers/all_purchases_finished'),all_sales_router_finished=require(a0_0x535998(0x17a)),adjustment_router_finished=require(a0_0x535998(0x1b4)),transfer_router_finished=require('./routers/transfer_finished'),purchases_return_finished=require(a0_0x535998(0x189)),sales_return_finished=require(a0_0x535998(0x1df)),pdfOutReport=require(a0_0x535998(0x1e2)),edit_approver_router=require('./routers/edit_approval'),passwordChanger=require(a0_0x535998(0x1d1)),Tester=require(a0_0x535998(0x1b0));app[a0_0x535998(0x1e7)](a0_0x535998(0x1c7),Tester),app[a0_0x535998(0x1e7)](a0_0x535998(0x179),passwordChanger),app[a0_0x535998(0x1e7)](a0_0x535998(0x1d7),edit_approver_router),app['use']('/',index_router),app[a0_0x535998(0x1e7)]('/products',products_router),app[a0_0x535998(0x1e7)]('/warehouse',warehouse_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1a3),staff_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x196),customer_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1c8),supplier_router),app['use'](a0_0x535998(0x19c),all_purchases_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1c6),purchases_return_router),app['use'](a0_0x535998(0x199),all_sales_router),app[a0_0x535998(0x1e7)]('/sales_return',sales_return_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x176),adjustment_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1ca),transfer_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x19f),all_expenses_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1ba),stock_report_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x18b),payment_report),app[a0_0x535998(0x1e7)](a0_0x535998(0x17f),all_report),app['use'](a0_0x535998(0x1e1),master_shop),app[a0_0x535998(0x1e7)](a0_0x535998(0x1af),warehousemap_incoming),app[a0_0x535998(0x1e7)](a0_0x535998(0x1d6),warehousemap_outgoing),app['use'](a0_0x535998(0x185),all_purchases_router_finished),app[a0_0x535998(0x1e7)](a0_0x535998(0x1d9),all_sales_router_finished),app['use'](a0_0x535998(0x1c3),purchases_return_finished),app[a0_0x535998(0x1e7)](a0_0x535998(0x175),sales_return_finished),app[a0_0x535998(0x1e7)](a0_0x535998(0x17e),pdfOutReport),app[a0_0x535998(0x1e7)](a0_0x535998(0x193),adjustment_router_finished),app[a0_0x535998(0x1e7)](a0_0x535998(0x1d3),transfer_router_finished),app[a0_0x535998(0x1e7)](a0_0x535998(0x1b1),transaction_reports_finished),app['use']('/profile',profile_router),app['use']('/',sing_up_router),app[a0_0x535998(0x1e7)]('/',login_router);const mobile_login=require('./mobile_routers/login'),mobile_rw_inc=require(a0_0x535998(0x1ad)),mobile_warehouse=require(a0_0x535998(0x1dc));function a0_0x1697(_0x5b8fd8,_0x25c3b8){const _0x126b06=a0_0x126b();return a0_0x1697=function(_0x1697b2,_0x4c4123){_0x1697b2=_0x1697b2-0x173;let _0x353a43=_0x126b06[_0x1697b2];return _0x353a43;},a0_0x1697(_0x5b8fd8,_0x25c3b8);}app[a0_0x535998(0x1e7)](a0_0x535998(0x191),mobile_login),app[a0_0x535998(0x1e7)](a0_0x535998(0x198),mobile_rw_inc),app[a0_0x535998(0x1e7)](a0_0x535998(0x1b2),mobile_warehouse);const customer_sa_router=require(a0_0x535998(0x1dd)),main_inventory_sa_router=require(a0_0x535998(0x1b5)),my_inventory_sa_router=require('./routers/my_inventory_sa'),sales_sa_router=require(a0_0x535998(0x1ac)),reportts_sa_router=require(a0_0x535998(0x19d)),gross_price_router=require(a0_0x535998(0x197)),collection_router=require('./routers/collection'),Reports_router=require(a0_0x535998(0x18f)),sales_order_router=require(a0_0x535998(0x181));app[a0_0x535998(0x1e7)](a0_0x535998(0x194),customer_sa_router),app[a0_0x535998(0x1e7)]('/my_inventory',my_inventory_sa_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1cf),main_inventory_sa_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x174),sales_sa_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x184),reportts_sa_router),app['use']('/collection',collection_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1ab),gross_price_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1cd),Reports_router),app[a0_0x535998(0x1e7)](a0_0x535998(0x1a0),sales_order_router);const approval_acct_router=require(a0_0x535998(0x1e4));app[a0_0x535998(0x1e7)](a0_0x535998(0x18a),approval_acct_router);const approval_wm_router=require(a0_0x535998(0x1aa));app[a0_0x535998(0x1e7)]('/warehouse_approval',approval_wm_router);const approval_so_setup=require(a0_0x535998(0x18e));app[a0_0x535998(0x1e7)]('/so_approvers',approval_so_setup);const warehouse_checking=require(a0_0x535998(0x187));app[a0_0x535998(0x1e7)](a0_0x535998(0x1d2),warehouse_checking),app[a0_0x535998(0x1d4)](port,()=>{const _0x30c9e5=a0_0x535998;console['log'](_0x30c9e5(0x1b7)+port);});