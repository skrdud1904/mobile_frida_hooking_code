function add(num, num2){
    console.log("type: " + typeof(num) + ", " + typeof(num2));
    var num_obj = int64(num);
    // 인자 object 형태로 변환
    var num_obj2 = int64(num2);

    var sum = num_obj.add(num_obj2); // sum

    console.log("add sum: " + sum + " type: " + typeof(sum));
    // object Type -> toNumber로 변환 필요(숫자 Type 변환)
}

function compare(num, num2){
    var num_obj = int64(num);
    var num_obj2 = int64(num2);

    var result = num_obj.compare(num_obj2); // object 비교

    if(!result){ // compare로 같을 경우 0을 반환, 즉 !result 이므로 1로 같을 경우 참
        console.log("Same."); 
    }
    else {
        console.log("Different");
    }
}

function convert(num){
    var num_obj = int64(num);

    console.log("Decimal: " + num_obj.toString(10)); // 10진수 변환
    console.log("Hexadecimal: " + num_obj.toString(16)); // 16진수 변환
}

add("100", "200");
compare("100", "200");
compare("100", "100");
convert("1234");
