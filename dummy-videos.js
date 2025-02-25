const DUMMY_VIDEOS = [
    {
      id: "sora-video-1",
      description: "idk",
      video: "images/coding-event.jpg",
      isFeatured: true,
    },
  
    {
      id: "sora-video-2",
      description: "idk",
      video: "images/coding-event.jpg",
      isFeatured: true,
    },
  
    {
      id: "sora-video-3",
      description: "idk",
      video: "images/coding-event.jpg",
      isFeatured: true,
    },
  ];
  
  export function getFeaturedVideos() {
    return DUMMY_VIDEOS.filter((video) => video.isFeatured);
  }
  
  export function getAllVideos() {
    return DUMMY_VIDEOS;
  }
  
  export function getVideosById(id) {
    return DUMMY_VIDEOS.find((video) => video.id === id);
  }
  