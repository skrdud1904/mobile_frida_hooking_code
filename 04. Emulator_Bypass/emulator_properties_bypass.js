function modifyCheckPropertiesRet(){
    Java.perform(function(){
        var EmulatorDetector =Java.use("android.com.dream_detector.EmulatorDetector");
        EmulatorDetector.checkProperties.implementation = function(){
            console.log("[+] Bypassed checkproperties check -> always return false")
            return false;
        }
    })
}

function modifyGetPropRet(){
    var knownEmulatorProperties = {
        "init.svc.qemu-props": "",
        "qemu.hw.mainkeys": "",
        "qemu.sf.fake_camera": "",
        "qemu.sf.lcd_density": "",
        "ro.bootloader": "unknown",
        "ro.kernel.android.qemud": "",
        "ro.kernel.qemu.gles": "",
        "ro.kernel.qemu": "",
        "ro.product.device": "generic",
        "ro.product.model": "sdk",
        "ro.product.name": "sdk",
        "ro.serialno": "EMULATOR"
    };

    
    Java.perform(function(){
        var Utils = Java.use("android.com.dream_detector.Utils")
        Utils.getProp.implementation = function(context, property){
            for (var prop in knownEmulatorProperties){
                if(property == prop){
                    if(knownEmulatorProperties == ""){
                        console.log("[+] Bypassed Utils_getProp -> null return")
                        return null;
                    }
                }
            }
            console.log("[+] Bypassed Utils_getProp -> nothing return")
            return Utils.getProp.call(this, context, "nothing");
        }
    })
}

// modifyCheckPropertiesRet();
modifyGetPropRet();