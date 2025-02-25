const DUMMY_IMAGES = [
  {
    id: "dalle-image-1",
    description: "Big octopus in space",
    image: "images/octopus-space.jpg",
    isFeatured: true,
  },

  {
    id: "dalle-image-2",
    description: "Mona Lisa style painting of black woman",
    image: "images/mona-lisa-black-woman.jpg",
    isFeatured: true,
  },

  {
    id: "dalle-image-3",
    description: "Graffiti of Albert Einstein",
    image: "images/einstein-graffiti.jpg",
    isFeatured: true,
  },

  {
    id: "dalle-image-4",
    description: "Babies as scientists",
    image: "images/babies-scientists.jpg",
    isFeatured: true,
  },
];

export function getFeaturedImages() {
  return DUMMY_IMAGES.filter((image) => image.isFeatured);
}

export function getAllImages() {
  return DUMMY_IMAGES;
}

export function getImageById(id) {
  return DUMMY_IMAGES.find((image) => image.id === id);
}
