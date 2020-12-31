const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

function preTree(root) {
  let arr = []
  if(!root) return 
  while(root) {
    arr.push(root.val)
    root.preTree(root.left)
    root.preTree(root.right)
  }
  return arr
}
