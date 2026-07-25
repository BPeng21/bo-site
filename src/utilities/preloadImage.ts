export function preloadImage(url: string | undefined) {
  if (url) {
    const preImg = new Image();
    preImg.src = url;
  }
}
