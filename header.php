<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="initial-scale=1.0,width=device-width" />
<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="<?php bloginfo('name'); ?> Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<?php
//OptionTree Stuff
$googleApi = ot_get_option('google_api');
$googleKeyword = ot_get_option('google_keyword');
$eventCat = ot_get_option('event_cat');
$logo = ot_get_option('logo');
$linkColor = ot_get_option('link_color');
$sidebarPosition = ot_get_option('sidebar_position');
$twoColumn = ot_get_option('two_column');
$customCSS = ot_get_option('custom_css');
$favicon = ot_get_option('favicon'); 
?>

<?php if($favicon) { ?><link rel="icon" href="<?php echo $favicon; ?>" type="image/x-icon" /><?php } ?>
<?php if($googleApi) { echo $googleApi; } ?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/scripts/prettyPhoto.css" type="text/css" media="screen" />

<style>
<?php if($googleKeyword){?>
body,
#countDown,
#wp-calendar {font-family: '<?php echo $googleKeyword;?>', sans-serif;}
<?php } ?>

/*--SIDEBSR STUFF--*/
<?php if($sidebarPosition == "left"){?>
#sidebar,
#postDetails {float: left;}
#listing, 
body.page .page {float: right;}
body.single .post {
    border-left: 1px dashed #CCCCCC;
    float: right;
    padding: 0 0 40px 35px;
}
<?php } else { ?>
#sidebar,
#postDetails {float: right;}
#listing, 
body.page .page {float: left;}
body.single .post {
    border-right: 1px dashed #CCCCCC;
    float: left;
    padding: 0 0 40px 35px;
}
<?php } ?>

/*--TWO COLUMN STUFF--*/
<?php if($twoColumn){?>
#twoColumns {
	text-align: justify;
	-moz-column-count: 2;
	-webkit-column-count: 2;
	column-count: 2;
	-moz-column-gap: 60px;
	-webkit-column-gap: 60px;
	column-gap:60px;
	-moz-column-rule: 1px dashed #ccc;
	-webkit-column-rule: 1px dashed #ccc;
	column-rule: 1px dashed #ccc;
}
@media screen and (max-width:740px) {
	#twoColumns {
		text-align: inherit;
		-moz-column-count: 1;
		-webkit-column-count: 1;
		column-count: 1;
	}
}
<?php } ?>

/*--FONT COLOR STUFF--*/
#wp-calendar #prev a,
#wp-calendar #next a,
li.activeMonth a.dateLink,
#copyright a:hover,
a {color:<?php echo $linkColor;?>;}

/*--BACKGROUND COLOR STUFF--*/
li.box a:hover,
.dateInfo:hover,
#wp-calendar td a:hover,
#commentform input[type="submit"]:hover,
input[type="submit"]:hover,
#postNav .pagenav a:hover,
#theTags a:hover,
#tagLine a:hover,
.sliderInfo a:hover,
.flex-direction-nav li a:hover,
#dropmenu li a:hover {background-color:<?php echo $linkColor;?>;}

/*--CUSTOM CSS STUFF--*/
<?php echo $customCSS;?>
</style>

<?php 
wp_enqueue_script('jquery');
wp_head(); 
if ( is_singular() ) wp_enqueue_script( "comment-reply" );
?>

<!--[if lt IE 8]>
<script src="http://ie7-js.googlecode.com/svn/version/2.0(beta3)/IE8.js" type="text/javascript"></script>
<![endif]-->

</head>

<body <?php body_class();?>>

<div id="wrapper">

<!--DOTTED ACCENT-->
<div class="dotted"></div>

<div id="header">
	<!--LOGO-->
	<?php if($logo){?>	<a id="logo" href="<?php echo home_url(); ?>"><img src="<?php echo $logo;?>" alt="<?php bloginfo('name'); ?>" /></a><?php } ?>
	<!--MENU-->
	<?php if (has_nav_menu( 'main' ) ) { wp_nav_menu(array('theme_location' => 'main', 'container_id' => 'navigation', 'menu_id' => 'dropmenu')); }?>
	<?php 
	$menu_name = 'main';
    if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {
		$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
		$menu_items = wp_get_nav_menu_items($menu->term_id);
		$menu_list = '<select id="selectMenu"><option value="" selected="selected">'.__('Menu','themolitor').'</option>';
		foreach ( (array) $menu_items as $key => $menu_item ) {
	    	$title = $menu_item->title;
	   		$url = $menu_item->url;
	   		$menu_list .= '<option value="' . $url . '">' . $title . '</option>';
		}
		$menu_list .= '</select>';
		echo $menu_list;
    }
    ?>	
</div><!--end header-->

<div id="content">