import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('その他 (形容詞)', rule, {
  invalid: [
    {
      text: '有難いことに仕事が増えている',
      output: 'ありがたいことに仕事が増えている',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 有難い',
          range: [0, 1],
        },
      ],
    },
    {
      text: 'アムロ、上手くやれよ',
      output: 'アムロ、うまくやれよ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 上手く',
          range: [4, 5],
        },
      ],
    },
    {
      text: '可笑しいお菓子',
      output: 'おかしいお菓子',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 可笑しい',
          range: [0, 1],
        },
      ],
    },
    {
      text: '可能性は無いに等しい',
      output: '可能性はないに等しい',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 無い',
          range: [4, 5],
        },
      ],
    },
    {
      text: 'それは不味いことになったな',
      output: 'それはまずいことになったな',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 不味い',
          range: [3, 4],
        },
      ],
    },
    {
      text: '勿体ないおばけ',
      output: 'もったいないおばけ',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 勿体ない',
          range: [0, 1],
        },
      ],
    },
    {
      text: '良いお年をお迎えください',
      output: 'よいお年をお迎えください',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 良い',
          range: [0, 1],
        },
      ],
    },
    {
      text: '君に会えて良かった',
      output: '君に会えてよかった',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 良かっ',
          range: [5, 6],
        },
      ],
    },
    {
      text: '頭が良くなる習慣',
      output: '頭がよくなる習慣',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい形容詞を使用しています: 良く',
          range: [2, 3],
        },
      ],
    },
  ],
});
