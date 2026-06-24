export type CategoryOpts = boolean | Record<string, boolean>;

export interface DictOpts {
  daimeishi: CategoryOpts;
  fukushi: CategoryOpts;
  fukujoshi: CategoryOpts;
  hojodoushi: CategoryOpts;
  hojokeiyoushi: CategoryOpts;
  keishikimeishi: CategoryOpts;
  'other-doushi': CategoryOpts;
  'other-jodoushi': CategoryOpts;
  'other-kandoushi': CategoryOpts;
  'other-keiyoushi': CategoryOpts;
  'other-meishi': CategoryOpts;
  rentaishi: CategoryOpts;
  setsuzokushi: CategoryOpts;
}
