<?php
// Theme option page
if (function_exists('acf_add_options_page')) {
  $option_page = acf_add_options_page([
    'page_title' => 'Options',
    'menu_title' => 'Options',
    'menu_slug'  => 'theme-general-settings',
    'capability' => 'edit_posts',
    'redirect'   => false,
    'position'   => '30',
  ]);
}