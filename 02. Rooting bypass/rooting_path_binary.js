// checkSuBinary 값 false로 Hooking
function modifyCheckSuBinaryRet(){
    Java.perform(function() {
        var RootingDetector = Java.use("android.com.dream_detector.RootingDetector")
        RootingDetector.checkSuBinary.implementation = function(){
            console.log("[+] Bypassed checksuBinary check -> always return false")
            return false;
        }
    })
}

// java Default Library File의 exist Method의 반환값을 false로 Hooking
function modifyNativeFileRet(){
    Java.perform(function() {
        var File_io_ret = Java.use("java.io.File")
        File_io_ret.exists.implementation = function() {
            console.log("[+] Bypassed File existed() check -> always return false")
            return false;
        }
    })
}

modifyCheckSuBinaryRet();
modifyNativeFileRet();