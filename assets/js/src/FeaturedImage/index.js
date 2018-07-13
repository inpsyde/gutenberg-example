const { subscribe, dispatch, select } = wp.data
class FeaturedImage {
  subscribe () {
    const galleryImage = this.currentGalleryImage()
    if (galleryImage !== this.currentFeaturedImage()) {
      this.updateFeaturedImage(galleryImage)
    }
  }

  currentFeaturedImage () {
    const image = select('core/editor').getEditedPostAttribute('featured_image')
    if (!image) {
      return 0
    }
    return image
  }

  updateFeaturedImage (featured_media) {
    dispatch('core/editor').editPost({featured_media})
  }

  galleryBlock () {
    const blocks = select('core/editor').getBlocks()
    const galleries = blocks.filter(
      (block) => {
        return block.name === 'core/gallery'
      }
    )
    if (!galleries.length) {
      return false
    }
    return galleries[0]
  }

  currentGalleryImage () {
    const gallery = this.galleryBlock()
    if (!gallery) {
      return 0
    }
    const images = gallery.attributes.images
    if (images.length === 0) {
      return 0
    }
    return images[0].id
  }
}

const featured = new FeaturedImage()
subscribe(() => {
  featured.subscribe()
})
