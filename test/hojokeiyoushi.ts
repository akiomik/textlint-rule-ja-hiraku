import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('補助形容詞', rule, {
  valid: ['あなたの命が欲しい'],
  invalid: [
    {
      text: '頼むから話を聞いて欲しい',
      output: '頼むから話を聞いてほしい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい補助形容詞を使用しています: 欲しい',
          range: [9, 10],
        },
      ],
    },
    {
      text: '頼むから話を聞いて欲しかった',
      output: '頼むから話を聞いてほしかった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい補助形容詞を使用しています: 欲しかっ',
          range: [9, 10],
        },
      ],
    },
    {
      text: '話を聞いて欲しかろうが、俺には関係ない',
      output: '話を聞いてほしかろうが、俺には関係ない',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい補助形容詞を使用しています: 欲しかろ',
          range: [5, 6],
        },
      ],
    },
    {
      text: '話を聞いて欲しくなった',
      output: '話を聞いてほしくなった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい補助形容詞を使用しています: 欲しく',
          range: [5, 6],
        },
      ],
    },
    {
      text: '話を聞いて欲しければ、相応の態度をとることだ',
      output: '話を聞いてほしければ、相応の態度をとることだ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい補助形容詞を使用しています: 欲しけれ',
          range: [5, 6],
        },
      ],
    },
  ],
});
