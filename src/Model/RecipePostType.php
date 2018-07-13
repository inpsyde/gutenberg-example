<?php
declare(strict_types = 1);

namespace Inpsyde\Recipe\Model;

class RecipePostType
{

    const POST_TYPE = 'recipe';

    public function register() : bool
    {

        $success = register_post_type(
            self::POST_TYPE,
            $this->args()
        );

        if (is_wp_error($success)) {
            return false;
        }
        register_taxonomy_for_object_type('category', self::POST_TYPE);
        return true;
    }

    private function args() : array
    {

        $supports = [
            'author',
            'title',
            'editor',
            'thumbnail',
        ];

        return [
            'label' => __('Recipe', 'recipe'),
            'public' => true,
            'show_in_rest' => true,
            'supports' => $supports,
        ];
    }
}
