import yaml from 'js-yaml'

interface Language {
    color: string
    // and others that I don't care about
}

export const GetLanguageColour = async (language: string) => {
    // TODO cache this
    return await fetch('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml').then(async (response) => {
        let document = yaml.load(await response.text())

        console.log(((document as any)[language] as Language).color)
        return ((document as any)[language] as Language).color
    })
}
