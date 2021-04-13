<?php

session_start();

$page_path = "pages/home.php";
$title = "Mega Travel";
$headExtra = "";

$routes = [
	'/' => function(){
		homePage();
	},
	'home' => function(){
		homePage();
	},
	'about' => function(){
		setPath('pages/aboutus.php');
		setTitle("Mega Travel - About Us");
	},
	'contact' => function(){
		setPath('pages/contactform.php');
		setTitle("Mega Travel - Contact");
		addHeader("<script src=\"js/activities.js\"></script>");
	},
	'confirm' => function(){
		setPath('pages/confirm.php');
		setTitle("Mega Travel - Confirm");
	},
	'admin' => function(){
		setPath('pages/admin.php');
		setTitle("Mega Travel - Admin");
	},
	'login' => function(){
		setPath('pages/login.php');
		setTitle("Mega Travel - Login");
	},
	'logout' => function(){
		require_once("controllers/auth.php");
		$auth->logout();
		header("Location: home");
		die();
	},
];

function homePage(){
	setPath('pages/home.php');
	setTitle("Mega Travel - Home");
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
    require "template/template.php";
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