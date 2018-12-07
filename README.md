# Gutenberg example: Recipe plugin
This plugin accompanies the talk in the Inpsyde developers meeting from July 16th, 2018: "Beyond the Block". The slides and the talk can be found [here](https://inpsyde.com/en/develop-for-gutenberg-enhance-gutenberg/).

## What is this plugin about
Well, _do not use it in production_, its aim is to demonstrate some ways to interact with the new Block editor of WordPress 5.0. This is done by developing a recipes plugin, which contains some features extending Gutenberg.
During the talk, the different features are discussed. They are grouped in branches. Each branch starts off from the previously discussed branch. While during the talk, we discuss only the central parts of the code, a diff between the current branch and its previous branch gives you an insight about the whole code, which was needed for a specific feature.

## What branches do exist?
* master (contains the whole code plus this readme)
* 0-init (the initial branch)
* 1-template (we discuss the template system and create a basic block)
* 2-featured-image (we discuss `wp.data` and data stores)
* 3-show-ingredients-in-block (we discuss `withSelect` and data stores)
* 4-editors-pick (we discuss Slot/Fill and some other higher order components for `wp.data`)
* before-wp-5 (see below)

## How to diff?
```
git diff 2-featured-image..3-show-ingredients-in-block
```
You can diff two branches like seen above. This command will show you the difference between the `3-show-ingreditens-in-block` branch and the `2-featured-image` branch. As you can see, the branches are numbered, so you can easily determine, which branch is the previous branch for a specific branch.

## Gutenberg and WordPress 5.0
This talk was given in July 2018. Since then a lot of features had been moved or deprecated. I have updated the
Github repository to keep up with the changes. The `master`-branch does work with WordPress 5.0. The other
branches are still pre WordPress 5.0. If you are interested in what needed to be changed in order to
keep up, you can diff the `master` against the `before-wp-5`-branch.

## To actually run this plugin
This plugin relies on the composer autoloader. So you will need to run `composer install`, before you can actually activate this plugin.

In addition, the build files are not present in the repository, to give you a cleaner diff. So you will need to run `npm install` as soon as JavaScript files are needed. To build the files, you will then need to run `webpack` for each branch, to create the actually used JavaScript files.
