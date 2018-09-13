<script>
var s="alap";
var result=function(s){
var checker = 0;
 for (let i = 0; i < s.length; i++) {
 let val = s.charCodeAt(i) - 'a'.charCodeAt(0);
 document.write("checker"+checker+" ");
 document.write("val"+(1<<val)+" ");
 document.write("cond"+(checker & (1 << val))+" ");
 if ((checker & (1 << val)) > 0) {
 return false;
 }
 checker |= (1 << val);
 
 
 }
 return true; 
};
document.write(result(s));

//checker0 val1 cond0 checker1 val2048 cond0 checker2049 val1 cond1 false
</script>
