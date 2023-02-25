<?php

$context             = Timber::context();
$timber_post         = new Timber\Post();
$context['post']     = $timber_post;
$context['services'] = Timber::get_posts([
  'post_type'      => 'services',
  'posts_per_page' => -1,
  'order'=>'asc'
]);

$context['portfolio'] = Timber::get_posts([
  'post_type'      => 'portfolio',
  'posts_per_page' => -1,
  'order'=>'asc'
]);

Timber::render('accueil.twig', $context);
