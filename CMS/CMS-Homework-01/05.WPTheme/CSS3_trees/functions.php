<?php

//Register sidebar
$sidebar_args = array(
				'name' => "Main Sidebar",
				'id' => "right_sidebar",
				'before_widget' => '<div class="sidebar">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3>',
				'after_title'   => '</h3>'
				);

register_sidebar($sidebar_args);


//Register menu
register_nav_menu('main-nav', 'This is our main navigation');
