<?php

$q = strtolower($_GET["q"]);
if (!$q) return;
$items = array(
"高雄市",
"Kaohsiung",
	"台北市",
	"Taipei",
	"鳳山市",
	"Fengshan",
	"花蓮市",
	"Hualien",
	"嘉義市",
	"Chiayi",
	"基隆市",
	"Keelung",
	"苗栗市",
	"Miaoli",
	"南投市",
	"Nantou",
	"馬公市",
	"Makung",
	"屏東市",
	"Pingtung",
	"台東市",
	"Taitung",
	"台南市",
	"Tainan",
	"台中市",
	"Taichung",
	"桃園市",
	"Taoyuan",
	"新竹市",
	"Hsinchu",
	"彰化市",
	"Changhua"
);

foreach ($items as $key) {
    if (strpos(strtolower($key), $q) !== false) {
        echo "$key \n";
    }
}

?> 