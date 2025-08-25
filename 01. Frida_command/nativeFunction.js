var open = new NativeFunction(Module.getExportByName(null, "open"), "int", ["pointer", "int"]);
// Native 함수 open 선언
var write = new NativeFunction(Module.getExportByName(null, "write"), "ssize_t", ["int", "pointer", "size_t"]);
// Native 함수 write 선언
var close = new NativeFunction(Module.getExportByName(null, "close"), "int", ["int"]);
// Native 함수 close 선언

// Android
var filePath = "/data/data/com.google.android.calendar/test.txt"

var O_WRONLY = 1;
// Android
var O_CREAT = 0x40;

var fd = open(Memory.allocUtf8String(filePath), O_CREAT|O_WRONLY);
console.log("file descriptor: " + fd);
write(fd, Memory.allocUtf8String("Hello World\n"), 12);
close(fd);
console.log("done, check " + filePath);