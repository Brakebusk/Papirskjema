export type FormLanguageCode = 'en' | 'nb' | 'nn';

type Translations = {
  downloaded: string;
  mandatoryNotice: string;
  norwegianNationalIdNumber: string;
  fillInLettersAndDigits: (letters: number, digits: number) => string;
  fillInLetters: (letters: number) => string;
  fillInDigits: (digits: number) => string;
  numberBetween: (min: number, max: number) => string;
  numberAtLeast: (min: number) => string;
  numberAtMost: (max: number) => string;
  chooseOneOption: string;
  chooseUpToOptions: (max: number) => string;
  chooseAsManyOptions: string;
  chooseOneOptionPerRow: string;
  chooseUpToOptionsPerRow: (max: number) => string;
  chooseAsManyOptionsPerRow: string;
  date: string;
  time: string;
  submissionReference: string;
};

export const translations: Record<FormLanguageCode, Translations> = {
  en: {
    downloaded: 'Downloaded',
    mandatoryNotice: 'Mandatory questions are marked with an asterisk *',
    norwegianNationalIdNumber: 'Norwegian national identity number (11 digits)',
    fillInLettersAndDigits: (letters, digits) =>
      `Enter ${letters} letters and ${digits} digits`,
    fillInLetters: (letters) => `Enter ${letters} letters`,
    fillInDigits: (digits) => `Enter ${digits} digits`,
    numberBetween: (min, max) => `The number must be between ${min} and ${max}`,
    numberAtLeast: (min) => `The number must be at least ${min}`,
    numberAtMost: (max) => `The number must be at most ${max}`,
    chooseOneOption: 'Select one option',
    chooseUpToOptions: (max) => `Select up to ${max} options`,
    chooseAsManyOptions: 'Select as many options as you like',
    chooseOneOptionPerRow: 'Select one option in each row',
    chooseUpToOptionsPerRow: (max) => `Select up to ${max} options in each row`,
    chooseAsManyOptionsPerRow: 'Select as many options as you like in each row',
    date: 'Date (dd.mm.yyyy)',
    time: 'Time (hh:mm)',
    submissionReference: 'Reference ID',
  },
  nb: {
    downloaded: 'Lastet ned',
    mandatoryNotice: 'Obligatoriske spørsmål er markert med stjerne *',
    norwegianNationalIdNumber: 'Norsk fødselsnummer (11 siffer)',
    fillInLettersAndDigits: (letters, digits) =>
      `Fyll inn ${letters} bokstaver og ${digits} siffer`,
    fillInLetters: (letters) => `Fyll inn ${letters} bokstaver`,
    fillInDigits: (digits) => `Fyll inn ${digits} siffer`,
    numberBetween: (min, max) => `Tallet må være mellom ${min} og ${max}`,
    numberAtLeast: (min) => `Tallet må være minst ${min}`,
    numberAtMost: (max) => `Tallet må være høyst ${max}`,
    chooseOneOption: 'Velg ett alternativ',
    chooseUpToOptions: (max) => `Velg opptil ${max} alternativer`,
    chooseAsManyOptions: 'Velg så mange alternativer du vil',
    chooseOneOptionPerRow: 'Velg ett alternativ på hver rad',
    chooseUpToOptionsPerRow: (max) =>
      `Velg opptil ${max} alternativer på hver rad`,
    chooseAsManyOptionsPerRow: 'Velg så mange alternativer du vil på hver rad',
    date: 'Dato (dd.mm.åååå)',
    time: 'Tid (tt:mm)',
    submissionReference: 'Referanse-ID',
  },
  nn: {
    downloaded: 'Lasta ned',
    mandatoryNotice: 'Obligatoriske spørsmål er markerte med stjerne *',
    norwegianNationalIdNumber: 'Norsk fødselsnummer (11 siffer)',
    fillInLettersAndDigits: (letters, digits) =>
      `Fyll inn ${letters} bokstavar og ${digits} siffer`,
    fillInLetters: (letters) => `Fyll inn ${letters} bokstavar`,
    fillInDigits: (digits) => `Fyll inn ${digits} siffer`,
    numberBetween: (min, max) => `Talet må vere mellom ${min} og ${max}`,
    numberAtLeast: (min) => `Talet må vere minst ${min}`,
    numberAtMost: (max) => `Talet må vere høgst ${max}`,
    chooseOneOption: 'Vel eitt alternativ',
    chooseUpToOptions: (max) => `Vel opptil ${max} alternativ`,
    chooseAsManyOptions: 'Vel så mange alternativ du vil',
    chooseOneOptionPerRow: 'Vel eitt alternativ på kvar rad',
    chooseUpToOptionsPerRow: (max) =>
      `Vel opptil ${max} alternativ på kvar rad`,
    chooseAsManyOptionsPerRow: 'Vel så mange alternativ du vil på kvar rad',
    date: 'Dato (dd.mm.åååå)',
    time: 'Tid (tt:mm)',
    submissionReference: 'Referanse-ID',
  },
};
