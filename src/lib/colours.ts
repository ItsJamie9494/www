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
