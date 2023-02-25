<?php
function register_stylesheets()
{
  wp_register_style(
    'bootstrap-style',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    [],
    null,
    'all'
  );
  wp_register_style('main', get_template_directory_uri() . '/static/main.min.css', [], null, 'all');
  
  wp_enqueue_style('bootstrap-style');
  wp_enqueue_style('main');
}
add_action('wp_enqueue_scripts', 'register_stylesheets');
