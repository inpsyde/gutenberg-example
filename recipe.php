<?php
/**
 * Plugin Name: Recipe
 * Description: Recipes - demonstrate Gutenberg
 * Author: David Remer/Inpsyde
 * Version: 0.1
 * License: MIT
 *
 * @package Gutenberg-demonstration
 */
declare(strict_types = 1);

namespace Inpsyde\Recipe;

use Inpsyde\Recipe\Hooks\CoreHooks;

add_action(
    'plugins_loaded',
    function()
    {

        try {

            if (! class_exists(CoreHooks::class)) {
                require_once __DIR__ . '/vendor/autoload.php';
            }

            ( new CoreHooks(__FILE__) )->setup();
        } catch( \Throwable $error ) {
            throw $error;
        }
    }
);