const a0_0x3e49bd=a0_0x4999;function a0_0x8796(){const _0x16609b=['jsonwebtoken','flash','1518165ebkwSD','6756mJjeqG','env','9nlmBcY','jwt','verify','1491aPLHjb','342940rLjtrZ','cookies','1474064mmoCxQ','user','exports','6289690VqmPUN','373720CjsDdr','errors','9RHPuRF','166253ZFLgKm'];a0_0x8796=function(){return _0x16609b;};return a0_0x8796();}(function(_0x19050e,_0x4882a7){const _0x4f652e=a0_0x4999,_0xd8a256=_0x19050e();while(!![]){try{const _0x4c413d=-parseInt(_0x4f652e(0x171))/0x1+parseInt(_0x4f652e(0x168))/0x2+-parseInt(_0x4f652e(0x170))/0x3*(-parseInt(_0x4f652e(0x16e))/0x4)+-parseInt(_0x4f652e(0x174))/0x5+-parseInt(_0x4f652e(0x175))/0x6*(parseInt(_0x4f652e(0x17a))/0x7)+-parseInt(_0x4f652e(0x16a))/0x8+parseInt(_0x4f652e(0x177))/0x9*(parseInt(_0x4f652e(0x16d))/0xa);if(_0x4c413d===_0x4882a7)break;else _0xd8a256['push'](_0xd8a256['shift']());}catch(_0x4c82ab){_0xd8a256['push'](_0xd8a256['shift']());}}}(a0_0x8796,0x2d97b));function a0_0x4999(_0x44a758,_0x4560b8){const _0x8796fc=a0_0x8796();return a0_0x4999=function(_0x499992,_0x29c2a6){_0x499992=_0x499992-0x168;let _0x49b25b=_0x8796fc[_0x499992];return _0x49b25b;},a0_0x4999(_0x44a758,_0x4560b8);}const express=require('express'),jwt=require(a0_0x3e49bd(0x172)),auth=async(_0x431833,_0x24f852,_0x52d7ed)=>{const _0x357a27=a0_0x3e49bd;try{const _0x29e5a2=_0x431833[_0x357a27(0x169)][_0x357a27(0x178)];if(!_0x29e5a2)return _0x431833[_0x357a27(0x173)](_0x357a27(0x16f),'You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...'),_0x24f852['redirect']('/');const _0x36bac5=await jwt[_0x357a27(0x179)](_0x29e5a2,process[_0x357a27(0x176)]['secret_key']);_0x431833[_0x357a27(0x16b)]=_0x36bac5,_0x52d7ed();}catch(_0x2172f6){return _0x431833[_0x357a27(0x173)](_0x357a27(0x16f),'You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...'),_0x24f852['redirect']('/');}};module[a0_0x3e49bd(0x16c)]=auth;