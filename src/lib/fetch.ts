/* lib/fetch.ts
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

export const fetchWithCache = async (url: string) => {
    if ('caches' in window) {
        return await caches.open('fetchWithCacheData').then(async (cache) => {
            cache.put(url, await fetch(url))
            if (!cache.match(url)) {
                console.log('test')
                cache.put(url, await fetch(url))
            }
            return await cache.match(url)
        })
    } else {
        console.debug('Cache API not available')
        return await fetch(url)
    }
}
