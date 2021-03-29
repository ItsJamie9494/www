import GhostContentAPI from '@tryghost/content-api'
import * as fuzzysort from "fuzzysort";

const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_KEY,
    version: 'v3'
})

export const getPosts = async () => {
    return await api.posts
        .browse({
            include: 'tags',
            limit: 'all'
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getSinglePost = async (postSlug) => {
    return await api.posts
        .read({
            include: 'tags',
            slug: postSlug
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getTags = async () => {
    return await api.tags
        .browse({
            limit: 'all'
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getSingleTag = async (tagSlug) => {
    return await api.tags
        .read({
            slug: tagSlug
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getTagPosts = async (tagName) => {
    return await api.posts
        .browse({
            filter: `tags:[${tagName}]`,
            limit: 'all'
        })
        .catch((err) => {
            console.error(err)
        })
}


