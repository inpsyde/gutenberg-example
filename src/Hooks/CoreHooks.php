<?php
declare(strict_types = 1);

namespace Inpsyde\Recipe\Hooks;

use Inpsyde\Recipe\Model\FeaturedImage;
use Inpsyde\Recipe\Model\IngredientsBlock;
use Inpsyde\Recipe\Model\RecipePostType;

class CoreHooks implements Hook
{

    private $rootFile;

    public function __construct(string $rootFile)
    {
        $this->rootFile = $rootFile;
    }

    public function setup() : bool
    {

        add_action(
            'init',
            function () {

                (new RecipePostType())->register();
                (new IngredientsBlock($this->rootFile))->register();
            }
        );
        add_action(
            'enqueue_block_editor_assets',
            function () {
                (new FeaturedImage($this->rootFile))->register();
            }
        );



    }
}
