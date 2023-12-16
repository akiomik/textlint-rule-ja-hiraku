import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
const config = {
  rules: [
    {
      ruleId: 'ja-hiraku',
      rule,
      options: {
        fukujoshi: false,
        fukushi: false,
        hojodoushi: false,
        keishikimeishi: false,
        'other-doushi': false,
        'other-jodoushi': false,
        'other-kandoushi': false,
        'other-keiyoushi': false,
        'other-meishi': false,
        rentaishi: false,
        setsuzokushi: false,
      },
    },
  ],
};
tester.run('options (disabled)', config, {
  valid: [
    'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
    '丁度良かった。色々話を聞いて頂きたいと思っていた所でした。',
  ],
});
