// FridaDetector 클래스의 checkport 메서드를 항상 False 반환
function modifyCheckPortRet() {
    Java.perform(function(){
        var FridaDetector = Java.use("android.com.dream_detector.FridaDetector")

        FridaDetector.checkPort.implementation = function () {
            console.log("[+] Bypassed checkPort check -> always return false")
            return false;
        }
    })
}

// 생성자 Overload 처리(java.net.Socket)
function modifySocketParameter(){
    Java.perform(function() {
        var Socket = Java.use("java.net.Socket");
        var constructor = Socket.$init.overload('java.lang.String', 'int');

        constructor.implementation = function(hostname, port){
            // console.log("[+] 호출자가 전달한 값: ", hostname, port)
            if (hostname == "127.0.0.1" && 26000 <= port && port < 27500){
                port = 1234;
            }
            return constructor.call(this, hostname, port);
        }
    })
}

// modifyCheckPortRet();
modifySocketParameter();