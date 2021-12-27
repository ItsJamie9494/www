/* lib/colours.ts
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

import yaml from 'js-yaml'
import { fetchWithCache } from './fetch'

interface Language {
    color: string
    // and others that I don't care about
}

export const GetLanguageColour = async (language: string) => {
    return await fetchWithCache('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml').then(async (response) => {
        let document = yaml.load(await (response as Response).text())
        return ((document as any)[language] as Language).color
    })
}
