<?php
declare(strict_types = 1);

namespace Inpsyde\Recipe\Model;

class EditorPickMeta
{

    const KEY = 'editors_pick';

    public function register() : bool
    {

        return register_meta(
            'post',
            self::KEY,
            [
                'type' => 'boolean',
                'description' => __('Whether this repipe is an editors pick.', 'recipe'),
                'single' => true,
                'show_in_rest' => true,
            ]
        );
    }

}