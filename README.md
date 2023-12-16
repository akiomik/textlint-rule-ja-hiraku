# textlint-rule-ja-hiraku

[![npm version](https://badge.fury.io/js/textlint-rule-ja-hiraku.svg)](https://badge.fury.io/js/textlint-rule-ja-hiraku)
[![Node.js CI](https://github.com/akiomik/textlint-rule-ja-hiraku/actions/workflows/ci.yml/badge.svg)](https://github.com/akiomik/textlint-rule-ja-hiraku/actions/workflows/ci.yml)
[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

漢字を「ひらく」ためのtextlintルールです。

「ひらく」というのは、漢字の読みや字面からくる印象などを考慮しひらがなで表記することで、読みやすく誤読しにくい文章へと変えることです。
漢字とひらがな、どちらで書くかが統一されるので、表記揺れを減らすことにも繋がります。

`textlint-rule-ja-hiraku` を使うことで文章を簡易的に校正できます。

例:

```
丁度良かった。色々話を聞いて頂きたいと思っていた所でした。
↓
ちょうどよかった。いろいろ話を聞いて頂きたいと思っていたところでした。
```

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

開発するにあたり、以下の書籍やページを参考にさせていただきました。

- [＜新版＞日本語の作文技術 - 本多勝一](https://publications.asahi.com/ecs/detail/?item_id=17593)
- [「なぜ、“ひらく”のか」への考察 - 鷹野 雅弘](https://note.com/swwwitch/n/n105a095c0687)
- [【校正】ひらく漢字の決定版！常用漢字表（H22改正）ほか - ことばのよろず屋](https://kotobanoyorozuya.com/hiraku-ichiran/)
- [漢字の閉じ開きとは？漢字とひらがなを使い分けて読みやすい文章を作成しよう - ALTENAS](https://altenas.jp/blog/chinese-characters-close-up-or-open)
- [閉じるべき漢字・閉じたほうがいい漢字の見分け方【ひらがな→漢字】 - ライカツ](https://lifelikewriter.com/hiragana-kanji-rules/)
- [何でもわかる 日本語便利帳 - WORD-WISE WEB](https://dictionary.sanseido-publ.co.jp/dict/ssd36029)
