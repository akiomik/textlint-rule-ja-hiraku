import type { TextlintRuleModule } from '@textlint/types';
import { tokenize } from 'kuromojin';
import { createTextlintMatcher } from 'morpheme-match-textlint';

import { fukushi } from './dictionaries/fukushi';
import { hojodoushi } from './dictionaries/hojodoushi';
import { keishikimeishi } from './dictionaries/keishikimeishi';
import { otherDoushi } from './dictionaries/other-doushi';
import { otherJodoushi } from './dictionaries/other-jodoushi';
import { otherKandoushi } from './dictionaries/other-kandoushi';
import { otherKeiyoushi } from './dictionaries/other-keiyoushi';
import { otherMeishi } from './dictionaries/other-meishi';
import { rentaishi } from './dictionaries/rentaishi';
import { setsuzokushi } from './dictionaries/setsuzokushi';

const dictionaries = [
  ...fukushi,
  ...hojodoushi,
  ...keishikimeishi,
  ...otherDoushi,
  ...otherJodoushi,
  ...otherKandoushi,
  ...otherKeiyoushi,
  ...otherMeishi,
  ...rentaishi,
  ...setsuzokushi,
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
