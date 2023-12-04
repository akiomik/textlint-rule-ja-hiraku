# textlint-rule-ja-hiraku

## Install

Install with [npm](https://www.npmjs.com/):

```
npm install -g textlint-rule-ja-hiraku
```

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "ja-hiraku": true
    }
}
```

Via CLI

```bash
textlint --rule ja-hiraku README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```bash
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```bash
npm test
```
