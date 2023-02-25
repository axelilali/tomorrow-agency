<?php
function register_scripts()
{
  wp_enqueue_script(
    'bootstrap',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
    [],
    null,
    'all',
    true
  );

  wp_enqueue_script('main-script', get_template_directory_uri() . '/static/main.min.js', ['jquery'], null, 'all', true);
}
add_action('wp_enqueue_scripts', 'register_scripts');
