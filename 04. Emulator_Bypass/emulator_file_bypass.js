function modifyCheckFilesRet() {
    Java.perform(function() {
        var EmulatorDetector = Java.use("android.com.dream_detector.EmulatorDetector");
    
        EmulatorDetector.checkFiles.overload().implementation = function() {
            console.log("[+] Bypassed checkFiles check -> always return false")
            return false;
        };
    });
}

function modifyCheckFilesParam(){
    Java.perform(function(){
        var EmulatorDetector = Java.use("android.com.dream_detector.EmulatorDetector")
        var checkFiles = EmulatorDetector.checkFiles.overload('[Ljava.lang.String;')

        checkFiles.implementation = function (files){
            console.log("[+] Bypassed emulator string change -> changed string")
            var emulator_files_not_exists = ["/not_exist", "/bypass_emulator_check"];
            return checkFiles.call(this, emulator_files_not_exists);
        }
    })
}

modifyCheckFilesRet();
// modifyCheckFilesParam();
