import type { TextlintRuleModule } from "@textlint/types";
import { tokenize } from "kuromojin";
import { createTextlintMatcher } from "morpheme-match-textlint";

const dictionaries = [
  {
    message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    expected: "わけ",
    tokens: [
      {
        surface_form: "訳",
        pos: "名詞",
        basic_form: "訳",
        reading: "ワケ",
        pronunciation: "ワケ",
      },
    ],
  },
  {
    message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    expected: "ほう",
    tokens: [
      {
        surface_form: "方",
        pos: "名詞",
        basic_form: "方",
        reading: "ホウ",
        pronunciation: "ホー",
      },
    ],
  },
  {
    message: "平仮名にひらいたほうが読みやすい漢字を使用しています。",
    expected: "ほか",
    tokens: [
      {
        surface_form: "他",
        pos: "名詞",
        basic_form: "他",
        reading: "ホカ",
        pronunciation: "ホカ",
      },
    ],
  },
];

const report: TextlintRuleModule = (context) => {
  const { Syntax, RuleError, report, getSource, fixer } = context;
  const matchAll = createTextlintMatcher({ tokenize, dictionaries });

  return {
    [Syntax.Str](node) {
      // "Str" node
      const text = getSource(node); // Get text

      return matchAll(text).then((results) => {
        for (const result of results) {
          if (result.expected) {
            report(
              node,
              new RuleError(result.message, {
                index: result.index,
                fix: fixer.replaceTextRange(result.range, result.expected),
              }),
            );
          }
        }
      });
    },
  };
};

export default report;
