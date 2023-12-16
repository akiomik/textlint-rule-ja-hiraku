# textlint-rule-ja-hiraku

[![Node.js CI](https://github.com/akiomik/textlint-rule-ja-hiraku/actions/workflows/ci.yml/badge.svg)](https://github.com/akiomik/textlint-rule-ja-hiraku/actions/workflows/ci.yml)
[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

漢字をひらくためのtextlintルール

## インストール

```bash
npm install -g textlint-rule-ja-hiraku
```

## 使い方

`.textlintrc.json` を利用する場合 (推奨):

```json
{
  "rules": {
    "ja-hiraku": true
  }
}
```

CLIから利用する場合:

```bash
textlint --rule ja-hiraku README.md
```

## 開発

### ビルド

```bash
npm run build
```

### テスト

[textlint-tester](https://github.com/textlint/textlint-tester) を利用してテストします。

```bash
npm test
```

## 参考文献

開発するにあたり、以下のページを参考にさせていただきました。

- [「なぜ、“ひらく”のか」への考察 - 鷹野 雅弘](https://note.com/swwwitch/n/n105a095c0687)
- [【校正】ひらく漢字の決定版！常用漢字表（H22改正）ほか - ことばのよろず屋](https://kotobanoyorozuya.com/hiraku-ichiran/)
- [漢字の閉じ開きとは？漢字とひらがなを使い分けて読みやすい文章を作成しよう - ALTENAS](https://altenas.jp/blog/chinese-characters-close-up-or-open)
- [閉じるべき漢字・閉じたほうがいい漢字の見分け方【ひらがな→漢字】 - ライカツ](https://lifelikewriter.com/hiragana-kanji-rules/)
- [何でもわかる 日本語便利帳 - WORD-WISE WEB](https://dictionary.sanseido-publ.co.jp/dict/ssd36029)
