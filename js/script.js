function drawTree(nodes) {
  for(var i = 1; i <= nodes; i++){
    star = "";
    gap = "";
    for(var j = 0; j < i * 2 - 1; j++){
      star += "*";
    };
    for(var k = nodes - i; k > 0; k--){
      gap += " ";
    };
    console.log(gap + star);
  };
}

drawTree(5);