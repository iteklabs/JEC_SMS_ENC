const a0_0x3bbf90=a0_0x572d;function a0_0x572d(_0x213b7a,_0x353be8){const _0x536c9e=a0_0x536c();return a0_0x572d=function(_0x572da8,_0x31e1b1){_0x572da8=_0x572da8-0x13a;let _0x500dfb=_0x536c9e[_0x572da8];return _0x500dfb;},a0_0x572d(_0x213b7a,_0x353be8);}function a0_0x536c(){const _0x9a404b=['272bFwIoG','1440280OsCPnA','You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...','jsonwebtoken','53990bjtLhn','234XdQONp','81ObnEpi','2883156tQyobY','verify','express','3525LuMJxP','user','exports','10055592kOTjMH','9297092hZPPza','cookies','3483490GgQRGT','errors','secret_key','flash'];a0_0x536c=function(){return _0x9a404b;};return a0_0x536c();}(function(_0x1324c3,_0x145b6a){const _0xa7bf0a=a0_0x572d,_0x3abd42=_0x1324c3();while(!![]){try{const _0x44e0c3=parseInt(_0xa7bf0a(0x13a))/0x1+parseInt(_0xa7bf0a(0x14d))/0x2*(parseInt(_0xa7bf0a(0x143))/0x3)+-parseInt(_0xa7bf0a(0x140))/0x4+-parseInt(_0xa7bf0a(0x13d))/0x5*(-parseInt(_0xa7bf0a(0x13e))/0x6)+parseInt(_0xa7bf0a(0x147))/0x7+parseInt(_0xa7bf0a(0x146))/0x8+parseInt(_0xa7bf0a(0x13f))/0x9*(-parseInt(_0xa7bf0a(0x149))/0xa);if(_0x44e0c3===_0x145b6a)break;else _0x3abd42['push'](_0x3abd42['shift']());}catch(_0x56389d){_0x3abd42['push'](_0x3abd42['shift']());}}}(a0_0x536c,0xb7329));const express=require(a0_0x3bbf90(0x142)),jwt=require(a0_0x3bbf90(0x13c)),auth=async(_0x562832,_0x342125,_0x11dd35)=>{const _0x6cfa2e=a0_0x3bbf90;try{const _0xcffec4=_0x562832[_0x6cfa2e(0x148)]['jwt'];if(!_0xcffec4)return _0x562832[_0x6cfa2e(0x14c)](_0x6cfa2e(0x14a),_0x6cfa2e(0x13b)),_0x342125['redirect']('/');const _0x41f821=await jwt[_0x6cfa2e(0x141)](_0xcffec4,process['env'][_0x6cfa2e(0x14b)]);_0x562832[_0x6cfa2e(0x144)]=_0x41f821,_0x11dd35();}catch(_0x11dd44){return _0x562832['flash'](_0x6cfa2e(0x14a),'You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...'),_0x342125['redirect']('/');}};module[a0_0x3bbf90(0x145)]=auth;