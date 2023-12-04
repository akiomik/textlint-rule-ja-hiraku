# textlint-rule-ja-hiraku

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
