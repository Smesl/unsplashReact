export const photosDataNormalize = (photos) => {
    return photos.map(p => {
        return ({
            id: p ? p.id : '',
            createdPhoto: p ? (p.created_at) : '',
            isLiked: p ? p.liked_by_user : '',
            likes: p ? p.likes : '0',
            photoImgThumb: p && p.urls ? p.urls.small : '',
            photoImgSmall: p && p.urls ? p.urls.thumb : '',
            authorName: p && p.user ? p.user.name : '',
            authorProfileLink: p && p.user && p.user.links ? p.user.links.html : '',
            authorProfileAvatar: p && p.user && p.user.profile_image ? p.user.profile_image.small : ''
            })
    })
}