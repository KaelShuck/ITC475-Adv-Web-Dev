<?php

session_start();

$page_path = "pages/home.php";
$title = "Podracing";
$headExtra = "";
$api = false;

$routes = [
	'/' => function(){
		homePage();
	},
	'race' => function(){
		homePage();
	},
	'stats' => function(){
		setPath('pages/stats.php');
		setTitle("Podracing - Stats");
		addHeader('<script src="js/jquery.min.js"></script>');
		addHeader('<script src="js/racers.js"></script>');
		addHeader("<script src=\"js/stats.js\"></script>");
	},
	'api/race' => function(){
		global $api;
		$api = true;
		setPath('api/race.php');
	},
	'api/stats' => function(){
		global $api;
		$api = true;
		setPath('api/stats.php');
	},
];

function homePage(){
	setPath('pages/home.php');
	setTitle("Podracing - Stats");
	addHeader('<script src="js/jquery.min.js"></script>');
	addHeader('<script src="js/racers.js"></script>');
	addHeader("<script src=\"js/racing.js\"></script>");
}

function setPath($path){
	global $page_path;
	$page_path = $path;
}

function addHeader($add){
	global $headExtra;
	$headExtra .= $add;
}

function setTitle($t){
	global $title;
	$title = $t;
}

$path = request_path();

if (isset($routes[$path]) AND is_callable($routes[$path]))
{
    $routes[$path]();
    if(!$api){
    	require "template/template.php";
	}else{
		require $page_path;
	}
}
else
{
	setPath('template/404.php');
	require "template/template.php";
}

function request_path()
{
    $request_uri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
    $script_name = explode('/', trim($_SERVER['SCRIPT_NAME'], '/'));
    $parts = array_diff_assoc($request_uri, $script_name);
    if (empty($parts))
    {
        return '/';
    }
    $path = implode('/', $parts);
    if (($position = strpos($path, '?')) !== FALSE)
    {
        $path = substr($path, 0, $position);
    }
    return $path;
}

?>