import React from 'react'
import Emoji from 'react-emoji-render'
import { generateEmojiConfig } from '../../tools/emoji'
import { Image, InvertImage, Tooltip } from './style'

export const TooltipImage = ({
    src,
    alt,
    invert,
}: {
    src: string
    alt: string
    invert?: boolean
}) => {
    return (
        <Tooltip data-tooltip={alt}>
            {invert ? (
                <InvertImage src={`/assets/about-icons/${src}.svg`} alt={alt} />
            ) : (
                <Image src={`/assets/about-icons/${src}.svg`} alt={alt} />
            )}
        </Tooltip>
    )
}

export const AboutFamiliar = () => {
    return (
        <span style={{ margin: '18px 0' }}>
            <h4>
                <Emoji
                    text={'💻'}
                    options={generateEmojiConfig({
                        className: 'emoji',
                    })}
                />{' '}
                Languages
            </h4>
            <div>
                <TooltipImage src="languages/typescript" alt="Typescript" />
                <TooltipImage src="languages/rust" alt="Rust" invert={true} />
                <TooltipImage src="languages/javascript" alt="Javascript" />
                <TooltipImage src="languages/css" alt="CSS" />
                <TooltipImage src="languages/html" alt="HTML" />

                <TooltipImage src="languages/dart" alt="Dart" />
            </div>

            <h4>
                <Emoji
                    text={'🏗️'}
                    options={generateEmojiConfig({
                        className: 'emoji',
                    })}
                />{' '}
                Frameworks
            </h4>
            <div>
                <TooltipImage src="frameworks/nodejs" alt="Node.js" />
                <TooltipImage src="frameworks/react" alt="React" />
                <TooltipImage
                    src="frameworks/express"
                    alt="Express"
                    invert={true}
                />
                <TooltipImage src="frameworks/webpack" alt="Webpack" />
                <TooltipImage src="frameworks/flutter" alt="Flutter" />
                <TooltipImage
                    src="frameworks/nextjs"
                    alt="Next.js"
                    invert={true}
                />
            </div>

            <h4>
                <Emoji
                    text={'💾'}
                    options={generateEmojiConfig({
                        className: 'emoji',
                    })}
                />{' '}
                Software
            </h4>
            <div>
                <TooltipImage src="software/bash" alt="Bash" invert={true} />
                <TooltipImage src="software/git" alt="Git" />
                <TooltipImage src="software/nginx" alt="NGINX" />
                <TooltipImage src="software/mongodb" alt="MongoDB" />
                <TooltipImage src="software/postgresql" alt="PostgreSQL" />
                <TooltipImage src="software/insomnia" alt="Insomnia" />
                <TooltipImage src="software/vscode" alt="Visual Studio Code" />
                <TooltipImage src="software/yarn" alt="Yarn" />
            </div>

            <h4>
                <Emoji
                    text={'❔'}
                    options={generateEmojiConfig({
                        className: 'emoji',
                    })}
                />{' '}
                Other
            </h4>
            <div>
                <TooltipImage src="other/linux" alt="Linux" invert={true} />
                <TooltipImage src="other/android" alt="Android" />
                <TooltipImage src="other/windows" alt="Windows" />
                <TooltipImage src="other/apple" alt="Apple" invert={true} />
                <TooltipImage src="other/github" alt="GitHub" invert={true} />
                <TooltipImage src="other/gitlab" alt="Gitlab" />
            </div>
        </span>
    )
}
