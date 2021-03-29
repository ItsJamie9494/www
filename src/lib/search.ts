import fuzzysort from "fuzzysort";

export const searchPosts = async (query: string, posts: unknown[]) => {
    return fuzzysort.go(query, posts, {
        keys: [
            'title'
        ],
        limit: 10,
        allowTypo: true,
        threshold: -3500
    })
}
