var str = Memory.allocUtf8String("This is test");
console.log("str address: " + str)
// Process Heap Memory 내 "This is test" 문자열을 할당 후 반환된 NativePointer 형태의 주소값

console.log("str.isNull: " + str.isNull());
// 포인터가 Null인지 검사 수행
console.log("str.add(4): " + str.add(4));
// 포인터 값에서 4를 더함
console.log("str.toString(): " + str.toString());
// 포인터 값을 문자열로 변환
console.log("str.readPointer(): " + str.readPointer());
// 포인터 주소에서 NativePointer 형태로 값을 읽거나 쓰기
// 이때 포인터의 크기는 대상 프로세스의 포인터 크기로 가정
console.log("str.readU16(): " + str.readU16());
// 인자로 전달한 size만큼 문자열을 읽어옴 (Utf-8) 형태
console.log("str.readUtf8String(): " + str.readUtf8String());
// writeU16으로 값을 쓴 후 16비트 값을 읽음
console.log("str.writeU16(0x4141): " + str.writeU16(0x4141));
// 포인터 주소에 부호 없는 16비트 값을 씀, AA
console.log("str.readU16(): " + str.readU16());
// writeU16으로 값을 쓴 후 16비트 값을 읽음, AA 추가
console.log("str.readUtf8String(): " + str.readUtf8String());
// 인자로 전달한 size만큼 문자열을 읽어옴 (Utf-8) 형태, AA 추가