var isValid = function(s) {
  var length = s.length
  if( length % 2 == 1)
      return false
  var stack = []
  for( var i = 0; i < length; i++){
      if(s[i] == '(' || s[i] == '[' || s[i] == '{')
          stack.push(s[i])
      else{
          if(stack.length == 0)
              return false
          var match
          var c = stack.pop() 
          if(s[i] == ')')
              match = '('
          if(s[i] == ']')
              match = '['
          if(s[i] == '}')
              match = '{'
          if(c != match)
              return false
      }
  }
  if(stack.length != 0)
      return false
  return true
};