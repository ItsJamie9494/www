/* components/Layouts/main.tsx
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

import type { NextComponentType } from 'next'
import scroll from 'react-scroll'
import { scroller } from '../pages/_app';
import { Emoji, generateEmojiConfig } from '../tools/emoji';
import { StyledChevron, StyledMainHeader, StyledMainLayout, StyledMainSubheader } from './styles'

const MainLayout: NextComponentType = () => {
    let ScrollElement = scroll.Element;
    
    return (
        <ScrollElement name="mainLayout">
            <StyledMainLayout>
                <div>
                    <StyledMainHeader>
                        Hello, I'm Jamie{' '}
                        <Emoji
                            text={'👋'}
                            options={generateEmojiConfig({
                                className: 'emoji',
                            })}
                        />
                    </StyledMainHeader>
                    <StyledMainSubheader>I'm a programmer that works on open-source projects &lt;3</StyledMainSubheader>
                </div>
                <StyledChevron 
                onClick={() => scroller.scrollTo('workLayout', {
                    duration: 500,
                    smooth: true,
                })}/>
            </StyledMainLayout>
        </ScrollElement>
    )
}

export default MainLayout
