 $(document).ready(function(){
    $("#example > ul").tabs({
fx: [{opacity: 'toggle'}, { height: 'show' }] ,//[{hide},{show}]
	// fx: { height: 'toggle'} //slide up/down
//fx: fx: { opacity: 'toggle' } //fade in/out
//fx: { height: 'toggle', opacity: 'toggle', duration: 'fast' }// slide +fade 

	cache:true,
	spinner:''	
});
	  });