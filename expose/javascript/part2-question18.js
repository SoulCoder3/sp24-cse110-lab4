function print_time() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}
setInterval(print_time, 1000)