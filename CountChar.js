
console.log("What is the input string?")
process.stdin.setEncoding('utf8');

var size = 0;
const g = function f(){
	process.stdin.once('data', function (rough){
 		
 		var str = rough.toString().trim();
 		
  		if (str === "") {
  			console.log("please enter a valid input")
  			g();
  		}else {
    		size = str.length;
    		process.stdout.write("String size: "+size+"\n");
    		process.stdin.pause()
  		

  		}
	});
}

g();
