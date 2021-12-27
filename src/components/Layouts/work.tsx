/* components/Layouts/work.tsx
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

import Link from 'next/link';
import scroll from 'react-scroll'
import { Repository } from '../../interfaces/Repository';
import RepositoryComponent from '../Repository';
import { TextButton } from '../TextButton';
import { RepositoriesGrid, StyledMainHeader, StyledMainLayout, StyledMainSubheader, StyledWorkLayout } from './styles'

const WorkLayout = ({ repositories }: { repositories?: Array<Repository> }) => {
    let ScrollElement = scroll.Element;
    return (
        <ScrollElement name={"workLayout"}>
            <StyledWorkLayout>
                <div>
                    <StyledMainHeader>
                        What I Do
                    </StyledMainHeader>
                </div>

                <StyledMainHeader>
                    Repositories
                </StyledMainHeader>
                <p>A list of public repositories on my Github page</p>
                <TextButton>
                    <Link href={`https://github.com/ItsJamie9494`}>
                        <a>
                            <span
                                style={{
                                    display: 'flex',
                                    marginLeft: -10,
                                }}>
                                <i className={'icon github-icon'} /> View my Profile
                            </span>
                        </a>
                    </Link>
                </TextButton>
                <RepositoriesGrid>
                    {repositories && repositories.map((repo) => (
                        <RepositoryComponent repo={repo} key={repo.id} />
                    ))}
                </RepositoriesGrid>
            </StyledWorkLayout>
        </ScrollElement>
    )
}

export default WorkLayout
