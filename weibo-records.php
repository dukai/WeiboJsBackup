<?php
require_once "common.php";
$db = getDb();
$backupId = $_GET['backupid'];
$totalCount = $db->fetchOne("select count(*) from weibos");
if(empty($_GET['page'])){
	$page = 1;
}else{
	$page = intval($_GET['page']);
}
$take = 40;

$maxPages = ceil($totalCount/$take);

$start = ($page - 1) * $take;
$cmd = "select * from weibos where backupid='{$backupId}' order by dateline desc limit {$start}, {$take}";
$weibos = $db->fetchAll($cmd);
$q = "/weibo-records.php?backupid={$backupId}&page={page}";


function pager($currpage, $perpage, $nums, $q, $currPageStyle='', $othersPageStyle='') {
	$dp=10; /* 分页链接的数量 */
	$nums = intval($nums);
	$maxPages = ceil($nums/$perpage);
	$pageStart=1;
	if ($maxPages==0) {
		$maxPages = 1;
	}
	if ($currpage>$maxPages) {
		$currpage=$maxPages;
	}
	if ($currpage<=1) {
		$s = "<span class=\"{$currPageStyle}\">上页 </span>";
		$pageStart = 1;
		$currpage=1;
		$pageEnd=$dp;
	} else {
		$tmp = $currpage-1;
		$s = "<a href=\"".str_replace('{page}', $tmp, $q)."\" class=\"{$othersPageStyle}\">上页</a> ";
		/*** 下面开始计算 1--$dp 以后的 $pageStart ***/
		$rangeOrder = floor(($currpage-2)/($dp-2));
		$pageStart = $rangeOrder*($dp-2)+1;
		$pageEnd=$pageStart+$dp-1;
	}

	for ($i=$pageStart; $i<=$pageEnd; $i++) {
		if ($i>$maxPages) {
			break;
		}
		if ($i!=$currpage) {
			$s.= '<a href="'.str_replace('{page}', $i, $q).'" class="'.$othersPageStyle.'">'.$i.'</a> ';
		}
		else {
			$s.= '<span class="'.$currPageStyle.'">'.$i.'</span> ';
		}
	}

	if ($currpage>=$maxPages) {
		$s.= "<span class=\"{$currPageStyle}\">下页 </span>";
	} else {
		$tmp = $currpage+1;
		$s.= "<a href=\"".str_replace('{page}', $tmp, $q)."\" class=\"{$othersPageStyle}\">下页</a>";
	}
	return $s;
}

?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<title>HTML TEMPLATE</title>
	<link href="css/style.css" rel="stylesheet" type="text/css" />

</head>
<body>
<div id="wraper">
	<h1>微博备份</h1>
	<ul>
		<?foreach($weibos as $w){?>
		<li class="item">
			<div><?= preg_replace("/@([^@）（。，：\s]+)(?=(）|（|。|，|：|？|\s|$))/u", "<a href=\"http://weibo.com/n/$1\" target=\"_blank\">@$1</a>", preg_replace("/(http:\/\/.+?)(\s|$)/", '<a href="$1" target="_blank">$1</a>', $w['content']))?></div>
			<?if(!empty($w['refer_content'])){?>
			<div class="refer">
				<div class="comment"><?=$w['refer_content']?></div>
				<div>
					<?if(!empty($w['refer_img'])){?>
					<img src="<?=$w['refer_img']?>" />
					<?}?>
				</div>
			</div>
			<?}?>
			<div>
				<?if(!empty($w['img'])){?>
				<img src="<?=$w['img']?>" onclick="toggleImg(this);" />
				<?}?>
			</div>
		</li>
		<?}?>
	</ul>
	<div class="pager"><?=pager($page, $take, $totalCount, $q);?></div>
</div>

<script>

</script>
</body>
</html>