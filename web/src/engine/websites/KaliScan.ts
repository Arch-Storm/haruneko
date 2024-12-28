import { Tags } from '../Tags';
import icon from './KaliScan.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import * as MadTheme from './decorators/MadTheme';

@Common.MangaCSS(/^{origin}\/manga\/[^/]+$/, 'div.name.box h1')
@Common.MangasMultiPageCSS('/az-list?page={page}', 'div.manga-list div.title h3 a', 1)
@MadTheme.ChaptersSinglePageAJAXV2()
@Common.PagesSinglePageJS(MadTheme.scriptImageLinks, 500)
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('kaliscan', `KaliScan`, 'https://kaliscan.io', Tags.Language.English, Tags.Media.Manga, Tags.Media.Manhua, Tags.Media.Manhwa, Tags.Source.Aggregator);
    }

    public override get Icon() {
        return icon;
    }
}