﻿import { TestFixture } from '../../../test/WebsitesFixture';

// CASE: English Locale
new TestFixture({
    plugin: {
        id: 'pocketcomics',
        title: 'Pocket-Comics (コミコ)',
        settings: {
            language: 'en-US'
        }
    },
    container: {
        url: 'https://www.pocketcomics.com/comic/10040',
        id: JSON.stringify({ id: '/comic/10040', lang: 'en-US' }),
        title: 'The Devilishly Trash Duke'
    },
    child: {
        id: '2',
        title: 'Episode 1'
    },
    entry: {
        index: 0,
        size: 114_362,
        type: 'image/jpeg'
    }
}).AssertWebsite();

// CASE: French Locale
new TestFixture({
    plugin: {
        id: 'pocketcomics',
        title: 'Pocket-Comics (コミコ)',
        settings: {
            language: 'fr-FR'
        }
    },
    container: {
        url: 'https://www.pocketcomics.com/comic/10040',
        id: JSON.stringify({ id: '/comic/10040', lang: 'fr-FR' }),
        title: 'Un duc diaboliquement infâme'
    },
    child: {
        id: '2',
        title: 'Épisode 1'
    },
    entry: {
        index: 0,
        size: 106_037,
        type: 'image/jpeg'
    }
}).AssertWebsite();