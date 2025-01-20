function fn() {
    fn();
}

fn(); // This function will reach the maximum size of the call-stack
