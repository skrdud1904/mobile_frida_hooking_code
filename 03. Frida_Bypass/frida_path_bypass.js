// checkPath 값 false로 Hooking
function modifyCheckPathRet(){
    Java.perform(function(){
        var FridaDetector = Java.use("android.com.dream_detector.FridaDetector")
        FridaDetector.checkPath.implementation = function(){
            console.log("[+] Bypassed checkPath check -> always return false")
            return false;
        }
    })
}

// java Default Library String의 contains 전달되는 CharSequence의 값이 frida인지 확인하고 문자열 변경
function modifyStrContainsParameter(){
    Java.perform(function(){
        var String_ = Java.use("java.lang.String")

        // Confirm Overloading List
    	String_.contains.overloads.forEach(function (m){
		console.log(m.toString());
	    })
        // overload implementation
        String_.contains.overload('java.lang.CharSequence').implementation = function(s) {
            if (s == "frida"){
                s = "Not_data";
            }
            console.log("[+] Bypassed String_Overload -> Change String")
            return String_.contains.overload('java.lang.CharSequence').call(this, s)
        }
    })
}

// modifyCheckPathRet();
modifyStrContainsParameter();