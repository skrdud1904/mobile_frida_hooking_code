function modifyCheckProcStatusRet(){
    Java.perform(function(){
        var DebuggingDetector = Java.use("android.com.dream_detector.DebuggingDetector");

        DebuggingDetector.checkProcStatus.implementation = function(){
            console.log("[+] Bypassed checkProcStatus check -> always return false")
            return Java.use("java.lang.Boolean").$new(false);;

        }
    })
}

function modifyFileContent(){
    Java.perform(function() {
        var File = Java.use("java.io.File");
        var constructor = File.$init.overload('java.lang.String');
    
        constructor.implementation = function(pathname) {
            if (pathname == "/proc/self/status") {
                var BufferedReader = Java.use("java.io.BufferedReader");
                var readLine = BufferedReader.readLine.overload();
    
                readLine.implementation = function() {
                    var ret = readLine.call(this);
                    if (ret.includes("TracerPid:"))
                        ret = "TracerPid: 0";
                        console.log(ret);
                    return ret;
                };
            }
            console.log(pathname);
            return constructor.call(this, pathname);
        };
    });
}

// modifyCheckProcStatusRet();
modifyFileContent();