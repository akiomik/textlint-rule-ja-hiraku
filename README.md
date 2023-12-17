# textlint-rule-ja-hiraku

[![npm version](https://badge.fury.io/js/textlint-rule-ja-hiraku.svg)](https://badge.fury.io/js/textlint-rule-ja-hiraku)
[![Node.js CI](https://github.com/akiomik/textlint-rule-ja-hiraku/actions/workflows/ci.yml/badge.svg)](https://github.com/akiomik/textlint-rule-ja-hiraku/actions/workflows/ci.yml)
[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

`textlint-rule-ja-hiraku` は漢字を「ひらく」ためのtextlintルールです。

「ひらく」というのは、漢字の読みや文字から受ける印象を考慮し一部をひらがなで表記することで、読みやすく誤読しにくい文章へと変えることです。
漢字とひらがな、どちらで書くかが統一されるので、表記揺れを減らすことにも繋がります。

例:

```
丁度良かった。色々話を聞いて頂きたいと思っていた所でした。
↓
ちょうどよかった。いろいろ話を聞いていただきたいと思っていたところでした。
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

## 設定

形態素の格ごとにチェックするかどうかを切り替え可能です。

デフォルトでは全てチェック対象となっていますが、
ほどんどのケースでは以下のように代名詞・副助詞・副詞・補助動詞・補助形容詞・形式名詞・連体詞・接続詞のチェックだけで十分かもしれません。

```jsonc
{
  "rules": {
    "ja-hiraku": {
      "daimeishi": true,        // 代名詞のチェック (default: true)
      "fukujoshi": true,        // 副助詞のチェック (default: true)
      "fukushi": true,          // 副詞のチェック (default: true)
      "hojodoushi": true,       // 補助動詞のチェック (default: true)
      "hojokeiyoushi": true,    // 補助形容詞のチェック (default: true)
      "keishikimeishi": true,   // 形式名詞のチェック (default: true)
      "other-doushi": false,    // その他 (動詞) のチェック (default: true)
      "other-jodoushi": false,  // その他 (助動詞) のチェック (default: true)
      "other-kandoushi": false, // その他 (感動詞) のチェック (default: true)
      "other-keiyoushi": false, // その他 (形容詞) のチェック (default: true)
      "other-meishi": false,    // その他 (名詞) のチェック (default: true)
      "rentaishi": true,        // 連体詞のチェック (default: true)
      "setsuzokushi": true,     // 接続詞のチェック (default: true)
    },
  }
}
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
