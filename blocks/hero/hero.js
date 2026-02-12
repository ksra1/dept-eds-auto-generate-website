/**
 * Lincoln Hero Block
 * Full-width hero with image background and centered content
 */
export default function decorate(block) {
  const heroContent = block.querySelector('div');
  
  // Extract content elements
  const picture = heroContent.querySelector('picture');
  const heading = heroContent.querySelector('h1, h2, h3');
  const description = heroContent.querySelector('p');
  const cta = heroContent.querySelector('a');

  // Clear and rebuild structure
  block.innerHTML = '';

  // Create hero container
  const heroContainer = document.createElement('div');
  heroContainer.className = 'hero-container';

  // Add background image
  if (picture) {
    const bgImage = document.createElement('div');
    bgImage.className = 'hero-background';
    bgImage.appendChild(picture);
    heroContainer.appendChild(bgImage);
  }

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-content';

  // Add heading
  if (heading) {
    heading.className = 'hero-heading';
    contentWrapper.appendChild(heading);
  }

  // Add description
  if (description) {
    description.className = 'hero-description';
    contentWrapper.appendChild(description);
  }

  // Add CTA button
  if (cta) {
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'hero-cta';
    cta.className = 'button primary';
    ctaWrapper.appendChild(cta);
    contentWrapper.appendChild(ctaWrapper);
  }

  heroContainer.appendChild(contentWrapper);
  block.appendChild(heroContainer);

  // Add scroll indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'hero-scroll-indicator';
  scrollIndicator.innerHTML = '<span>Scroll to explore</span>';
  scrollIndicator.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });
  heroContainer.appendChild(scrollIndicator);
}
