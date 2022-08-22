const isIntersecting = (entry: IntersectionObserverEntry) => {
    return entry.isIntersecting
}

const loadImage = (entry: IntersectionObserverEntry) => {
    const image = entry.target as HTMLImageElement
    const urlImage = image.dataset.src

    if(urlImage) {
        image.src = urlImage
    }

    observer.unobserve(image)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image: HTMLImageElement) => {
    observer.observe(image)
}