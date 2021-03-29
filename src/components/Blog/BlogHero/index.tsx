import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'
import { StyledBlogHero, InputContainer, InputIconContainer, Input } from "./style"
import { searchPosts } from "../../../lib/search"
import { isBrowser } from '../../../helpers/blog'
import { useGlobalState } from '../../../globals'

export const BlogHero = ({ subTitle, link, posts, isListing }: { subTitle?: string, link?: string, posts?: Array<unknown>, isListing?: boolean }) => {
    const searchRef = React.createRef<HTMLInputElement>()
    const [postsArray, setPostsArray] = useGlobalState('blogPostArray')
    const [isSearch, setSearch] = useGlobalState('isSearch')
    const [isResults, setResults] = useGlobalState('isResults')
    isBrowser() && window.addEventListener('keyup', (e) => {
        if (e.code === '191') {
            if (searchRef.current) searchRef.current.focus
        }
    })

    const doSearch = () => {
        let query = searchRef.current.value;
        if (query === '') {
            setSearch(false)
            return setPostsArray(posts)
        }

        searchPosts(query, posts)
            .then(async (results) => {
                if (results.total === 0) { // make sure results exist
                    return setResults(false)
                }
                // @ts-ignore idk why it's giving me errors but it works
                setPostsArray(results) // set the list of posts that match the query
                setSearch(true) // tell the blog list that we are searching
                setResults(true)
            })

    }

    return (
        <StyledBlogHero>
            <div style={{ marginRight: '0px' }}>
                <Link href={link ? link : '/blog'}>
                    <a>
                        <h1 style={{ fontSize: '1.5rem', textAlign: 'center', width: 'fit-content' }}>Blog {subTitle && `| ${subTitle}`}</h1>
                    </a>
                </Link>

            </div>
            {isListing && (<InputContainer>
                <InputIconContainer>
                    <FeatherIcon icon={"search"} size={16} />
                </InputIconContainer>
                <Input
                    placeholder={"Search for a post"}
                    type={"text"}
                    ref={searchRef}
                    onChange={() => doSearch()}/>
            </InputContainer>)}
        </StyledBlogHero>
    )
}
