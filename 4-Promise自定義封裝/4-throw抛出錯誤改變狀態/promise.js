function Promise(executor) {

    this.PromiseState = 'pending';
    this.PromiseResult = nu
    const self = this;// self _this that

    function resolve(data) {
        self.PromiseState = 'fulfilled';// resolved
        self.PromiseResult = data;
    }
    //reject 函数
    function reject(data) {
        self.PromiseState = 'rejected';// 
        self.PromiseResult = data;
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {

}