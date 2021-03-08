function create(proto) {
  function f () {

  }
  f.prototype = proto
  f.prototype.constructor = f

  return new f()
}