<?php
//OptionTree Stuff
$footerText = ot_get_option('footer_text');
$linkColor = ot_get_option('link_color');
$rss = ot_get_option('rss_on_off');
$twitter = ot_get_option('twitter');
$youtube = ot_get_option('youtube');
$flickr = ot_get_option('flickr');
$meetup = ot_get_option('meetup');
$gplus = ot_get_option('gplus');
$vimeo = ot_get_option('vimeo');
$myspace = ot_get_option('myspace');
$facebook = ot_get_option('facebook');
?>

<div class="clear"></div>
</div><!--end content-->


<!--SOCIAL ICONS-->
<?php if($rss || $twitter || $youtube || $flickr || $meetup || $gplus || $vimeo || $myspace || $facebook){?>
<div id="socialIcons">
<?php if($rss) { ?><div class="socialWrap"><a class="socialIcon" id="rssIcon" href="<?php bloginfo('rss2_url'); ?>"></a></div><?php } ?>
<?php if($facebook) { ?><div class="socialWrap"><a class="socialIcon" id="facebookIcon" href="<?php echo $facebook;?>"target="_blank"></a></div><?php } ?>
<?php if($twitter) { ?><div class="socialWrap"><a class="socialIcon" id="twitterIcon" href="<?php echo $twitter;?>"target="_blank"></a></div><?php } ?>
<?php if($youtube) { ?><div class="socialWrap"><a class="socialIcon" id="youTubeIcon" href="<?php echo $youtube;?>"target="_blank"></a></div><?php } ?>
<?php if($flickr) { ?><div class="socialWrap"><a class="socialIcon" id="flickrIcon" href="<?php echo $flickr;?>"target="_blank"></a></div><?php } ?>
<?php if($meetup) { ?><div class="socialWrap"><a class="socialIcon" id="meetupIcon" href="<?php echo $meetup;?>"target="_blank"></a></div><?php } ?>
<?php if($gplus) { ?><div class="socialWrap"><a class="socialIcon" id="gplusIcon" href="<?php echo $gplus;?>"target="_blank"></a></div><?php } ?>
<?php if($vimeo) { ?><div class="socialWrap"><a class="socialIcon" id="vimeoIcon" href="<?php echo $vimeo;?>"target="_blank"></a></div><?php } ?>
<?php if($myspace) { ?><div class="socialWrap"><a class="socialIcon" id="mySpaceIcon" href="<?php echo $myspace;?>target="_blank""></a></div><?php } ?>
</div>
<?php } ?>



<!--COPYRIGHT-->
<div id="copyright">&copy; <?php echo date("Y "); bloginfo('name'); ?>. <?php echo $footerText;?></div>

</div><!--end wrapper-->
<!--jQUERY SCRIPTS-->
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/scripts/sticky.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/scripts/prettyphoto.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/scripts/flexslider.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/scripts/respond.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/scripts/custom.js"></script>
<script type="text/javascript">
jQuery.noConflict(); jQuery(document).ready(function(){

	//SLIDER BUTTON WIDTHS
	function sliderTabs(){
		var numberButtons = jQuery('ol.flex-control-nav li').length,
			sliderWidth = jQuery('#slider').width(),
			buttonWidth =  sliderWidth / numberButtons - 2;
			
		jQuery('ol.flex-control-nav li a').css({width:buttonWidth+"px"});
		jQuery('ol.flex-control-nav li:first-child a').css({width:buttonWidth+2+"px"});
	}
	
	//WHEN PAGE LOADS...
	jQuery(window).load(function(){
		jQuery("#slider").css({backgroundImage:"none"});
		sliderTabs();
	}).resize(function(){
		sliderTabs();
	});
});
</script>

<?php wp_footer(); ?>

</body>
</html>