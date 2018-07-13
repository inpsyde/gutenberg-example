<?php
declare(strict_types = 1);

namespace Inpsyde\Recipe\Model;

class FeaturedImage
{

    private $rootFile;

    public function __construct(string $rootFile)
    {

        $this->rootFile = $rootFile;
    }

    public function register() : bool
    {

        wp_enqueue_script(
            'recipe-featured-image',
            plugins_url('assets/js/dist/featured_image.js', $this->rootFile),
            ['wp-data']
        );
        return true;
    }

}