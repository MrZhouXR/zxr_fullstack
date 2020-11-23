"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}; // JSON Object O(1)
    }
    Queue.prototype.enqueue = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    Queue.prototype.dequeue = function () {
        // FIFO 先进先出 队列
        // ts datastruct 有态度
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.clear = function () {
        this.count = 0;
        this.items = {};
    };
    Queue.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = objString + ", " + this.items;
        }
        return objString;
    };
    return Queue;
}());
exports["default"] = Queue;
