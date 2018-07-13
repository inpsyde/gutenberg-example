<?php
declare(strict_types = 1);

namespace Inpsyde\Recipe\Model;

class EditorPicks
{

    const NAMESPACE = 'recipe/editor_picks';

    private $rootFile;

    public function __construct(string $rootFile)
    {

        $this->rootFile = $rootFile;
    }

    public function register() : bool
    {

        wp_enqueue_script(
            'recipe-editor-picks',
            plugins_url('assets/js/dist/editorpicks.js', $this->rootFile),
            ['wp-blocks', 'wp-data', 'wp-components', 'wp-edit-post']
        );

        return true;
    }
}
