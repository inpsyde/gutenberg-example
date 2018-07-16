<?php
declare(strict_types = 1);

namespace Inpsyde\Recipe\Model;

class IngredientsBlock
{

    const NAMESPACE = 'recipe/ingredients';

    private $rootFile;

    public function __construct(string $rootFile)
    {

        $this->rootFile = $rootFile;
    }

    public function register() : bool
    {

        wp_register_script(
            'recipe-ingredients-block',
            plugins_url('assets/js/dist/ingredients.js', $this->rootFile),
            ['wp-blocks']
        );

        $success = register_block_type(
            self::NAMESPACE,
            [
                'editor_script'   => 'recipe-ingredients-block',
                'render_callback' => [$this, 'render'],
            ]
        );

        return $success !== false;
    }

    public function render() : string
    {

        $terms = wp_get_post_terms(get_the_ID(), 'category');

        ob_start();
        echo '<h2>' . esc_html_e('Ingredients', 'recipe') . '</h2>';
        echo '<ul class="ingredients">';
        array_map(function (\WP_Term $term) {

            echo '<li>' . esc_html($term->name) . '</li>';
        }, $terms);
        echo '</ul>';

        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }
}
