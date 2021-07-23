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
                <InvertImage src={src} alt={alt} />
            ) : (
                <Image src={src} alt={alt} />
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
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
                    alt="Typescript"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg"
                    alt="Rust"
                    invert={true}
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"
                    alt="Node.js"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
                    alt="CSS"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
                    alt="HTML"
                />

                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-plain.svg"
                    alt="Dart"
                />
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
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                    alt="React"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                    alt="Express"
                    invert={true}
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-plain.svg"
                    alt="Webpack"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-plain.svg"
                    alt="Flutter"
                />
                <TooltipImage
                    src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg"
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
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-plain.svg"
                    alt="Bash"
                    invert={true}
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg"
                    alt="Git"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
                    alt="NGINX"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg"
                    alt="MySQL"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg"
                    alt="PostgreSQL"
                />
                <TooltipImage
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="Postman"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg"
                    alt="Visual Studio Code"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg"
                    alt="Yarn"
                />
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
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-plain.svg"
                    alt="Linux"
                    invert={true}
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-plain.svg"
                    alt="Android"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg"
                    alt="Windows"
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg"
                    alt="Apple"
                    invert={true}
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                    alt="GitHub"
                    invert={true}
                />
                <TooltipImage
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg"
                    alt="Gitlab"
                />
            </div>
        </span>
    )
}
