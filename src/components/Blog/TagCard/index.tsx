import React from 'react'

import { StyledBlogCard, CardTitle, ReadMore } from './style'

import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'

export const TagCard = ({ tag }) => {
    return (
        <StyledBlogCard>
            <Link href={`/blog/tags/[slug]`} as={`/blog/tags/${tag.slug}`}>
                <a>
                    <div>
                        <CardTitle>{tag.name}</CardTitle>
                        <ReadMore>
                            <FeatherIcon icon={'corner-down-right'} size={20} />
                            <span>VIEW POSTS</span>
                        </ReadMore>
                    </div>
                </a>
            </Link>
        </StyledBlogCard>
    )
}
