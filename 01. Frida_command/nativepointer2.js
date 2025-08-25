function getFuncMoudle(funcName){
    var addr = Module.findExportByName(null, funcName);
    // 지정한 export 함수의 실제 주소를 가져옴 (모듈 이름을 모를 때는 null)
    var obj = Process.findModuleByAddress(ptr(addr));
    // 해당 주소가 속해 있는 모듈 정보를 가져옴
    return obj.path
}

var libPath;
libPath = getFuncMoudle("open");
console.log("func_open_Path: " + libPath);
// Export 함수 - open 함수가 속한 모듈의 정보

libPath = getFuncMoudle("fopen");
console.log("func_fopen_Path: " + libPath);