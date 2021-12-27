/* components/Footer/index.tsx
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
import {
    StyledFooter,
    Container,
    Image,
    RightContainer,
    CopyrightContainer,
} from './style'
import Link from 'next/link'

export const Footer = () => {
    return (
        <>
            <StyledFooter>
                <Container>
                    <Image
                        src={'/assets/logo.jpg'}
                        alt={'Logo'}
                        style={{ borderRadius: '25px' }}
                    />
                    <RightContainer>
                        <Link href={`https://github.com/ItsJamie9494/www`}>
                            <a>Source Code</a>
                        </Link>

                        <CopyrightContainer>
                            Copyright {new Date().getFullYear()} Jamie
                            Thalacker. All Rights Reserved
                        </CopyrightContainer>
                    </RightContainer>
                </Container>
            </StyledFooter>
        </>
    )
}

// export const Footer = () => {
//     return (
//         <>
//             <StyledFooter isBlured={true}>
//                 <Container>
//                     <div
//                         style={{
//                             display: 'flex',
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <span>
//                             <Image
//                                 src={'/assets/logo.jpg'}
//                                 alt={'Logo'}
//                                 style={{ borderRadius: '25px' }}
//                             />
//                         </span>
//                         <div style={{ display: 'flex' }}>
//                             <Link href={`https://twitter.com/jamierthalacker`}>
//                                 <a className={'noHover'}>
//                                     <i className={'icon twitter-icon'} />
//                                 </a>
//                             </Link>
//                             <span style={{ margin: '10px' }} />
//                             <Link href={`https://adsfsdaf/discord`}>
//                                 <a className={'noHover'}>
//                                     <i className={'icon discord-icon'} />
//                                 </a>
//                             </Link>
//                             <span style={{ margin: '10px' }} />
//                             <Link href={`https://gitlab.com/asdfdsaf`}>
//                                 <a className={'noHover'}>
//                                     <i className={'icon gitlab-icon'} />
//                                 </a>
//                             </Link>
//                         </div>
//                     </div>
//                     <RightContainer>
//                         <LinkContainer>
//                             <Link href={`https://gitlab.com/$adfds/www`}>
//                                 Source Code
//                             </Link>
//                             <Link href={'/legal'}>Legal Notices</Link>
//                             <Link href={'/contact'}>Contact Me</Link>
//                         </LinkContainer>
//                         <CopyrightContainer>
//                             <p>
//                                 Copyright {new Date().getFullYear()} Jamie
//                                 Thalacker. All Rights Reserved
//                             </p>
//                         </CopyrightContainer>
//                     </RightContainer>
//                 </Container>
//             </StyledFooter>
//         </>
//     )
// }
