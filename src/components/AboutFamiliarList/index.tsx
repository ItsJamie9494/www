/* components/AboutFamiliarList/index.tsx
 *
 * Copyright 2021 Jamie Thalacker
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import { Emoji, generateEmojiConfig } from '../../tools/emoji'
import { Image, InvertImage, StyledList, Tooltip } from './style'

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
                <InvertImage src={`/assets/icons/${src}.svg`} alt={alt} />
            ) : (
                <Image src={`/assets/icons/${src}.svg`} alt={alt} />
            )}
        </Tooltip>
    )
}

export const AboutFamiliarList = () => {
    return (
        <StyledList>
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
                <TooltipImage src={'languages/typescript'} alt={'TypeScript'} />
                <TooltipImage
                    src={'languages/rust'}
                    alt={'Rust'}
                    invert={true}
                />
                <TooltipImage src={'languages/javascript'} alt={'JavaScript'} />
                <TooltipImage src={'languages/css'} alt={'CSS'} />
                <TooltipImage src={'languages/html'} alt={'HTML'} />
                <TooltipImage src={'languages/vala'} alt={'Vala'} />
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
                <TooltipImage src={'frameworks/react'} alt={'React.js'} />
                <TooltipImage
                    src={'frameworks/nextjs'}
                    alt={'Next.js'}
                    invert={true}
                />
                <TooltipImage
                    src={'frameworks/express'}
                    alt={'Express'}
                    invert={true}
                />
                <TooltipImage src={'frameworks/node'} alt={'Node.js'} />
                <TooltipImage src={'frameworks/webpack'} alt={'Webpack'} />
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

            {/* TODO prevent overflow */}
            <div>
                <TooltipImage
                    src={'software/bash'}
                    alt={'Bash'}
                    invert={true}
                />
                <TooltipImage src={'software/builder'} alt={'GNOME Builder'} />
                <TooltipImage src={'software/git'} alt={'Git'} />
                <TooltipImage src={'software/insomnia'} alt={'Insomnia'} />
                <TooltipImage src={'software/nginx'} alt={'NGINX'} />
                <TooltipImage src={'software/postgre'} alt={'PostgreSQL'} />
                <TooltipImage src={'software/vscode'} alt={'VSCode'} />
                <TooltipImage src={'software/yarn'} alt={'Yarn'} />
                <TooltipImage src={'software/podman'} alt={'Podman'} />
            </div>

            <h4>
                <Emoji
                    text={'❔'}
                    options={generateEmojiConfig({
                        className: 'emoji',
                    })}
                />{' '}
                Miscellaneous
            </h4>

            <div>
                <TooltipImage src="other/github" alt="GitHub" invert={true} />
                <TooltipImage src="other/linux" alt="Linux" />
                <TooltipImage src="other/android" alt="Android" />
            </div>
        </StyledList>
    )
}
