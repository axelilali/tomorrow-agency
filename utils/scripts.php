<?php
function register_scripts()
{
  wp_enqueue_script('main-script', get_template_directory_uri() . '/static/main.min.js', ['jquery'], null, 'all', true);
}
add_action('wp_enqueue_scripts', 'register_scripts');
