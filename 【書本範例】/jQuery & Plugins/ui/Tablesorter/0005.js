$(document).ready(function() {
	$('#styling-cutom-striping').tableSorter({
		sortColumn:'name',	// 數字或是字串均可以(指的是欄位(th)的名稱(大小寫無關)或是第幾個 (由0開始) )
		sortClassAsc: 'headerSortUp',		// 往上的CSS Class名稱
		sortClassDesc: 'headerSortDown',	// 往下的CSS Class名稱
		headerClass: 'header',		// 表頭的CSS Class名稱(th)
		highlightClass: 'highlight' //當前排序的基準欄位使用的CSS Class名稱

	});
});
