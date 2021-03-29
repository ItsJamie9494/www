import React from 'react'
import Emoji from 'react-emoji-render'
import Link from 'next/link'

import { generateEmojiConfig} from "../../../tools/emoji";
import { StyledBlogEnding, MainText, SubText } from './style'

export const BlogEnding = () => {
    return (
        <StyledBlogEnding>
            <Emoji
                text={"👻"}
                options={
                    generateEmojiConfig({
                        className: 'emoji'
                    })
                }/>
            <MainText>It's pretty spooky down here</MainText>
            <SubText>Why don't you head back <span style={{ display: 'inline-block' }}>
            <Link href={'/blog#'} >
                to the top
            </Link></span>?</SubText>
        </StyledBlogEnding>
    )
}
