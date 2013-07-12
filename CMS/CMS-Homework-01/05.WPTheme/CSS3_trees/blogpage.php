<?php
/*
 * Template Name: Blogpage
 */
get_header();

$myposts = get_posts('');
foreach($myposts as $post) :
setup_postdata($post);
	
?>

<h2><?php the_title(); ?></h2>
 
<p><?php the_content(); ?></p>
 
<?php 
endforeach; 

wp_reset_postdata(); 
?>
        
<?php get_footer(); ?>