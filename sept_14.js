let obj = [{ name: "Guru", age: 28 }, { name: "B", age: 25 }];
function newn() {
    let x = new Promise(function (resolve, reject) {
        let err = true;
        if (err) {
                obj.push({ name: "YO", age: 40 });
            resolve();
        }
        else {
            reject("Error Detected");
        }
    })
    return x;
}
function print_name() {
        obj.forEach((data) => { console.log(data.name) })
        console.log(obj);


}

newn().then(print_name);

