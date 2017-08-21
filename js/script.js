function drawTree(nodes) {
  for(var i = 0; i < nodes; i++){
    star = "";
    gap = "";
    for(var j = 0; j <= i; j++){
      star += "*";
    };
    for(var k = nodes - i; k > 0; k--){
      gap += " ";
    };
    console.log(gap + star + star);
  };
}
drawTree(5);