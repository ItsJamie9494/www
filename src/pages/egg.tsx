/* pages/egg.tsx
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

import { NextPage } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import React from 'react'

const Home: NextPage = () => {
    React.useEffect(() => {})
    return (
        <>
            <div className="template-wrap clear">
                <canvas
                    className="emscripten"
                    id="canvas"
                    contextMenu="event.preventDefault()"
                    height="600px"
                    width="960px"
                ></canvas>
                <br />
                <div className="logo"></div>
                <div className="fullscreen">
                    <Image
                        src="/egg/TemplateData/fullscreen.png"
                        width="38"
                        height="38"
                        alt="Fullscreen"
                        title="Fullscreen"
                        onClick={() => {
                            //@ts-ignore
                            SetFullscreen(1)
                        }}
                    />
                </div>
                <div className="title">The Savior: Planet of Magistera</div>
            </div>
            <Script src="/egg/egg.js" />
            <Script src="/egg/Release/UnityLoader.js" />
        </>
    )
}

export default Home
