/**
 * Get a placeholder image URL if the provided image fails to load
 */
export const getPlaceholderImage = (width = 800, height = 600) => {
  return `https://via.placeholder.com/${width}x${height}/efefef/111111?text=Image+Loading`
}

/**
 * Handle image error by replacing with placeholder
 */
export const handleImageError = (event, placeholderWidth = 800, placeholderHeight = 600) => {
  event.target.src = getPlaceholderImage(placeholderWidth, placeholderHeight)
  event.target.onerror = null // Prevent infinite loop
}

