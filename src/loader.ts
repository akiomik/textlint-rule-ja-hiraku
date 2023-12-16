import type { ExpectedDictionary } from 'morpheme-match-all';
import type { ExpectedTokenWithCapture } from 'morpheme-match-textlint';

import { daimeishi } from './dictionaries/daimeishi';
import { fukujoshi } from './dictionaries/fukujoshi';
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
import type { DictOpts } from './opts';

const defaultOpts: DictOpts = {
  daimeishi: true,
  fukushi: true,
  fukujoshi: true,
  hojodoushi: true,
  keishikimeishi: true,
  'other-doushi': true,
  'other-jodoushi': true,
  'other-kandoushi': true,
  'other-keiyoushi': true,
  'other-meishi': true,
  rentaishi: true,
  setsuzokushi: true,
};

export class DictionaryLoader {
  private options: DictOpts;

  constructor(options: Partial<DictOpts>) {
    this.options = { ...defaultOpts, ...options };
  }

  load<
    T extends ExpectedTokenWithCapture,
    Dictionary extends ExpectedDictionary<T>,
  >(): Dictionary[] {
    let dict = [] as Dictionary[];

    if (this.options.daimeishi) {
      dict = [...(daimeishi as Dictionary[])];
    }

    if (this.options.fukujoshi) {
      dict = [...dict, ...(fukujoshi as Dictionary[])];
    }

    if (this.options.fukushi) {
      dict = [...dict, ...(fukushi as Dictionary[])];
    }

    if (this.options.hojodoushi) {
      dict = [...dict, ...(hojodoushi as Dictionary[])];
    }

    if (this.options.keishikimeishi) {
      dict = [...dict, ...(keishikimeishi as Dictionary[])];
    }

    if (this.options['other-doushi']) {
      dict = [...dict, ...(otherDoushi as Dictionary[])];
    }

    if (this.options['other-jodoushi']) {
      dict = [...dict, ...(otherJodoushi as Dictionary[])];
    }

    if (this.options['other-kandoushi']) {
      dict = [...dict, ...(otherKandoushi as Dictionary[])];
    }

    if (this.options['other-keiyoushi']) {
      dict = [...dict, ...(otherKeiyoushi as Dictionary[])];
    }

    if (this.options['other-meishi']) {
      dict = [...dict, ...(otherMeishi as Dictionary[])];
    }

    if (this.options.rentaishi) {
      dict = [...dict, ...(rentaishi as Dictionary[])];
    }

    if (this.options.setsuzokushi) {
      dict = [...dict, ...(setsuzokushi as Dictionary[])];
    }

    return dict;
  }
}
