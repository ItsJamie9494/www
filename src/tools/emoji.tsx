/* tools/emoji.tsx
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
import twemoji from 'twemoji'

interface Options {
    protocol?: 'http' | 'https'
    base?: string
    size?: string
    ext?: '.svg' | 'png'
    folder?: 'svg'
    className?: string
}

export const generateEmojiConfig = ({
    className,
}: {
    className: string
}): Options => {
    return {
        protocol: 'https',
        ext: '.svg',
        folder: 'svg',
        size: '',
        className,
    }
}

export const Emoji = ({
    text,
    options,
}: {
    text: string
    options: Options
}) => {
    const EmojiRef = React.createRef<HTMLSpanElement>()

    React.useEffect(() => {
        if (EmojiRef.current) {
            twemoji.parse(EmojiRef.current, options)
        }
    }, [])

    return <span ref={EmojiRef}>{text}</span>
}
