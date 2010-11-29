// Run the script on DOM ready:
$(function(){
	//filtered chart
 	$('table')
 		.visualize({
	 		rowFilter: ':not(:last)',
	 		colFilter: ':not(:last-child)'
	 	})
	 	.before("<h2>B) Charted with filters to exclude totals data</h2><pre><code>$('table').visualize({<strong>rowFilter: ':not(:last)', colFilter: ':not(:last-child)'</strong>});</code></pre>");
 	
 	$('table')
 		.visualize()
 		.before("<h2>A) Charted without row/col filtering (<em>not ideal with this table</em>)</h2><pre><code>$('table').visualize();</code></pre>")
});