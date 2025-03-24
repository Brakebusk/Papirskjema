/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorMessage {
  message?: string;
  errors?: {
    all?: Record<string, string>;
    empty?: boolean;
    [key: string]: any;
  };
  confirmForceCleanupErrors?: {
    all?: Record<string, string>;
    empty?: boolean;
    [key: string]: any;
  };
}

export interface Codebook {
  elementIdsAndExternalElementIdsMap: Record<string, string>;
  subElementIdsAndExternalElementIdsMap: Record<string, string>;
  answerOptionIdsAndExternalAnswerOptionIdsMap: Record<string, string>;
}

export interface Retranscribe {
  language:
    | 'auto'
    | 'en'
    | 'zh'
    | 'de'
    | 'es'
    | 'ru'
    | 'ko'
    | 'fr'
    | 'ja'
    | 'pt'
    | 'tr'
    | 'pl'
    | 'ca'
    | 'nl'
    | 'ar'
    | 'sv'
    | 'it'
    | 'id'
    | 'hi'
    | 'fi'
    | 'vi'
    | 'he'
    | 'uk'
    | 'el'
    | 'ms'
    | 'cs'
    | 'ro'
    | 'da'
    | 'hu'
    | 'ta'
    | 'no'
    | 'th'
    | 'ur'
    | 'hr'
    | 'bg'
    | 'lt'
    | 'la'
    | 'mi'
    | 'ml'
    | 'cy'
    | 'sk'
    | 'te'
    | 'fa'
    | 'lv'
    | 'bn'
    | 'sr'
    | 'az'
    | 'sl'
    | 'kn'
    | 'et'
    | 'mk'
    | 'br'
    | 'eu'
    | 'is'
    | 'hy'
    | 'ne'
    | 'mn'
    | 'bs'
    | 'kk'
    | 'sq'
    | 'sw'
    | 'gl'
    | 'mr'
    | 'pa'
    | 'si'
    | 'km'
    | 'sn'
    | 'yo'
    | 'so'
    | 'af'
    | 'oc'
    | 'ka'
    | 'be'
    | 'tg'
    | 'sd'
    | 'gu'
    | 'am'
    | 'yi'
    | 'lo'
    | 'uz'
    | 'fo'
    | 'ht'
    | 'ps'
    | 'tk'
    | 'nn'
    | 'mt'
    | 'sa'
    | 'lb'
    | 'my'
    | 'bo'
    | 'tl'
    | 'mg'
    | 'as'
    | 'tt'
    | 'haw'
    | 'ln'
    | 'ha'
    | 'ba'
    | 'jw'
    | 'su'
    | 'yue';
  model?: string;
}

export interface CourseEvaluation {
  courseCode: string;
  semester: string;
  /** @format int64 */
  resultLimit?: number;
  /** @format int32 */
  batchSize?: number;
  isExamStudentsOnly?: boolean;
  term?: string;
  /** @format int32 */
  year?: number;
  sendAfterDate?: string;
}

export interface CreateInvitationResult {
  /** @format int32 */
  successInviteCount?: number;
  /** @format int32 */
  failedInviteCount?: number;
  invitationErrors?: ErrorMessageAndInvalidAddresses[];
  /** @format int32 */
  totalInviteCount?: number;
}

export interface ErrorMessageAndInvalidAddresses {
  message?: string;
  errorAddresses?: string[];
}

export interface ClientAnswer {
  /** @format int64 */
  questionId?: number;
  type?:
    | 'SINGLE_OPTION'
    | 'MULTIPLE_OPTIONS'
    | 'TEXT'
    | 'FILE'
    | 'DATE_TIME'
    | 'DATE'
    | 'TIME'
    | 'NOT_PROVIDED';
  text?: string;
  /** @format int64 */
  id?: number;
  ids?: number[];
  /** @format date-time */
  datetime?: string;
  time?: LocalTime;
  /** @format date */
  date?: string;
  answered?: boolean;
  unAnswered?: boolean;
}

export interface DeliverMetadata {
  /** @format int64 */
  elapsedTime?: number;
  tsdRespondent?: TsdRespondent;
}

export interface DeliverSubmission {
  answers?: ClientAnswer[];
  metadata?: DeliverMetadata;
}

export interface LocalTime {
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  second?: number;
  /** @format int32 */
  nano?: number;
}

export interface TsdRespondent {
  provider?: string;
  sub?: string;
  personal_identifier?: string;
  user_name?: string;
}

export interface ActivateForm {
  projectName?: string;
  token?: string;
}

export interface HighSecurityQueueInfo {
  projectName?: string;
  /** @format int64 */
  fileCount?: number;
  /** @format int64 */
  chunkCount?: number;
  /** @format date-time */
  newest?: string;
  /** @format date-time */
  oldest?: string;
}

export interface HighSecurityQueuesInfo {
  submissionsQueueTsd?: HighSecurityQueueInfo[];
  attachmentsQueueTsd?: HighSecurityQueueInfo[];
  submissionsQueueEducloud?: HighSecurityQueueInfo[];
  attachmentsQueueEducloud?: HighSecurityQueueInfo[];
  submissionsQueueTsdSummary?: QueueSummary;
  attachmentQueueTsdSummary?: QueueSummary;
  submissionsQueueEducloudSummary?: QueueSummary;
  attachmentQueueEducloudSummary?: QueueSummary;
}

export interface QueueSummary {
  /** @format int32 */
  fileCount?: number;
  /** @format int32 */
  chunkCount?: number;
}

export interface HighSecurityAttachmentQueueContent {
  /** @format date-time */
  createdDate?: string;
  projectName?: string;
  /** @format int64 */
  formId?: number;
  /** @format int64 */
  submissionId?: number;
  fileUid?: string;
  attachmentPath?: string;
  /** @format date-time */
  lastTriedDeliveryDate?: string;
  /** @format int32 */
  retries?: number;
}

export interface HighSecurityQueuesContent {
  submissionQueueContentTsd?: HighSecuritySubmissionQueueContent[];
  attachmentQueueContentTsd?: HighSecurityAttachmentQueueContent[];
  submissionQueueContentEducloud?: HighSecuritySubmissionQueueContent[];
  attachmentQueueContentEducloud?: HighSecurityAttachmentQueueContent[];
}

export interface HighSecuritySubmissionQueueContent {
  /** @format date-time */
  createdDate?: string;
  projectName?: string;
  /** @format int64 */
  formId?: number;
  /** @format int64 */
  submissionId?: number;
  type?: 'SUBMISSION' | 'FORM_METADATA' | 'SIGNED_PDF' | 'WHOLE_FILE';
  /** @format date-time */
  lastTriedDeliveryDate?: string;
  /** @format int32 */
  retries?: number;
}

export interface HighSecurityProjectFormCount {
  projectName?: string;
  /** @format int64 */
  formCount?: number;
}

export interface OtherFormOwners {
  username?: string;
  group?: boolean;
  name?: string;
}

export interface FormHeaderInfo {
  /** @format int64 */
  formId?: number;
  title?: string;
  titleShort?: string;
  formType?:
    | 'DEFAULT'
    | 'HIGH_SECURITY'
    | 'SIGN_UP'
    | 'MULTIPLE_CHOICE'
    | 'COURSE_EVALUATION';
  deliveryDestination?: 'DATABASE' | 'DATABASE_ENCRYPTED' | 'EDUCLOUD' | 'TSD';
  /** @uniqueItems true */
  editors?: Person[];
  respondentGroup?:
    | 'ALL'
    | 'FEIDE'
    | 'INVITED'
    | 'ID_PORTEN_LEVEL_3'
    | 'ID_PORTEN_LEVEL_4'
    | 'ID_PORTEN_LEVEL_3_SIGNING'
    | 'ID_PORTEN_LEVEL_4_SIGNING'
    | 'HELSENORGE'
    | 'HELSENORGE_SIGNING';
  collectsPersonalData?: boolean;
  codebookActivated?: boolean;
  languageCode?: string;
  postponable?: boolean;
  receiptText?: string;
  sensitivePersonalDataCollected?: boolean;
  /** @uniqueItems true */
  personalDataPurposeTypes?: (
    | 'STUDY_OR_EDUCATION'
    | 'EMPLOYEE'
    | 'RESEARCH'
    | 'OTHER'
  )[];
  shouldPreventDataManipulation?: boolean;
  afterDeliveryForwardFormIds?: string;
  isDictaphone?: boolean;
}

export interface Person {
  /** @format int64 */
  personId?: number;
  username?: string;
  name?: string;
  email?: string;
  type?:
    | 'LOCAL'
    | 'TOKEN'
    | 'FEIDE'
    | 'ID_PORTEN'
    | 'API'
    | 'TSD'
    | 'API_CLIENT';
  isSuperuser?: boolean;
  isSupportuser?: boolean;
  isUioTils?: boolean;
}

export interface FormTemplate {
  /** @format int64 */
  formId?: number;
  title_en?: string;
  title_nb?: string;
  title_nn?: string;
  formType?:
    | 'DEFAULT'
    | 'HIGH_SECURITY'
    | 'SIGN_UP'
    | 'MULTIPLE_CHOICE'
    | 'COURSE_EVALUATION';
}

export interface Environment {
  version?: string;
  isProduction?: boolean;
  commitId?: string;
  operationMessage?: string;
  baseUrl?: string;
  legacyBaseUrl?: string;
}

export interface SubmissionMetadata {
  /** @format int64 */
  formId?: number;
  /** @format int64 */
  submissionId?: number;
  /** @format int64 */
  answerTime?: number;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  modifiedDate?: string;
  /** @format int64 */
  forwardedTo?: number;
  respondentEmail?: string;
  respondentName?: string;
  anonymous?: boolean;
  deliveryDestination?: string;
  submissionSignatureState?: string;
  person?: SubmissionMetadataPerson;
}

export interface SubmissionMetadataPerson {
  name?: string;
  email?: string;
}

export interface FormSettings {
  /** @format int64 */
  formId?: number;
  formType?:
    | 'DEFAULT'
    | 'HIGH_SECURITY'
    | 'SIGN_UP'
    | 'MULTIPLE_CHOICE'
    | 'COURSE_EVALUATION';
  scoreResultDisplayType?:
    | 'NONE'
    | 'SCORE_ONLY'
    | 'FULL_SOLUTION_AND_SCORE'
    | 'ONLY_CHECK_ANSWER';
  /** @format date-time */
  openFrom?: string;
  /** @format date-time */
  openTo?: string;
  /**
   * @minLength 0
   * @maxLength 130
   * @pattern ^[#\`\'"\=\!\&\+\{\}\[\]\*\;\:\(\)\/\.\,\?_«»¿¡€¢–\-"\@\d\s\p{L}]+$
   */
  title?: string;
  /**
   * @minLength 0
   * @maxLength 30
   * @pattern (?:[a-z0-9]+(?:(?:[-a-z0-9][a-z0-9]+)*|[a-z0-9]*))?
   */
  titleShort?: string;
  /**
   * @minLength 0
   * @maxLength 254
   */
  editorsContactEmail?: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  editorsContactUrl?: string;
  collectsPersonalData?: boolean;
  sensitivePersonalDataCollected?: boolean;
  /**
   * @minLength 0
   * @maxLength 3800
   */
  personalDataSharedOutsideInstitutionWith?: string;
  /** @uniqueItems true */
  personalDataPurposeTypes?: (
    | 'STUDY_OR_EDUCATION'
    | 'EMPLOYEE'
    | 'RESEARCH'
    | 'OTHER'
  )[];
  /**
   * @minLength 0
   * @maxLength 3800
   */
  personalDataPurposeDescription?: string;
  languageCode?: string;
  shouldHideProgressBar?: boolean;
  shouldPreventDataManipulation?: boolean;
  codebookActivated?: boolean;
  /**
   * @minLength 0
   * @maxLength 200
   * @pattern ^(([0-9]+)(,[0-9]+)*)?$
   */
  afterDeliveryForwardFormIds?: string;
  /**
   * @format int32
   * @min 1
   */
  maxSubmissionsForm?: number;
  /**
   * @format int32
   * @min 1
   */
  maxSubmissionsPerson?: number;
  /**
   * @minLength 0
   * @maxLength 3800
   */
  canNotAnswerMessage?: string;
  respondentGroup?:
    | 'ALL'
    | 'FEIDE'
    | 'INVITED'
    | 'ID_PORTEN_LEVEL_3'
    | 'ID_PORTEN_LEVEL_4'
    | 'ID_PORTEN_LEVEL_3_SIGNING'
    | 'ID_PORTEN_LEVEL_4_SIGNING'
    | 'HELSENORGE'
    | 'HELSENORGE_SIGNING';
  /**
   * @format int32
   * @min 1
   */
  deleteSubmissionsAfterNumberOfDays?: number;
  postponable?: boolean;
  retainRespondentAccessAfterDelivery?: boolean;
  sendingReceiptToRespondent?: boolean;
  /**
   * @minLength 0
   * @maxLength 3800
   */
  receiptText?: string;
  editorsSubmissionEmailType?: 'NONE' | 'MESSAGE' | 'SUBMISSION';
  /**
   * @minLength 0
   * @maxLength 4000
   */
  editorsSubmissionEmails?: string;
  deliveryDestination?: 'DATABASE' | 'DATABASE_ENCRYPTED' | 'EDUCLOUD' | 'TSD';
  /**
   * @minLength 0
   * @maxLength 3800
   */
  emailInvitationText?: string;
  /**
   * @minLength 0
   * @maxLength 3800
   */
  emailReminderText?: string;
  /**
   * @format int32
   * @min 1
   * @max 10000
   */
  automaticReminderIntervalInDays?: number;
  /**
   * @format int32
   * @min 2
   */
  recurringInvitationNumber?: number;
  /**
   * @format int32
   * @min 1
   * @max 10000
   */
  recurringInvitationIntervalInDays?: number;
  tsdPgpPublicKeyFingerprint?: string;
  editorCryptKeyDatabaseEncrypted?: string;
  editorCryptKeyDatabaseEncryptedFingerprint?: string;
  /** @uniqueItems true */
  editors?: Person[];
  /** @uniqueItems true */
  personsWithCopyPermission?: Person[];
  /** @uniqueItems true */
  netgroupsEditor?: Netgroup[];
  /** @uniqueItems true */
  netgroupsWithCopyPermission?: Netgroup[];
  consentForm?: boolean;
  randomizedOrder?: boolean;
  supportuser?: FormSettingsSupportuser;
  superuser?: FormSettingsSuperuser;
  isDictaphone?: boolean;
  titleForLogging?: string;
}

export interface FormSettingsSuperuser {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  afterDeliveryForwardUrl?: string;
  /**
   * @minLength 0
   * @maxLength 1000
   * @pattern ^(([-_A-Za-z0-9]+)(,[-_A-Za-z0-9]+)*)?$
   */
  afterDeliveryForwardCodebookValues?: string;
  receiptPageScript?: string;
}

export interface FormSettingsSupportuser {
  theme?:
    | 'DEFAULT'
    | 'AHO'
    | 'ANSGAR'
    | 'BARNEVERN_NOTODDEN'
    | 'BARRATTDUE'
    | 'BBJ'
    | 'BGO'
    | 'BI'
    | 'DMMH'
    | 'EDUCLOUD'
    | 'EDUCSC'
    | 'FHI'
    | 'GATEJURISTENTROMSO'
    | 'HELSEDIREKTORATET'
    | 'HELSE_STAVANGER'
    | 'HFY'
    | 'HIOF'
    | 'HIMOLDE'
    | 'HIVOLDA'
    | 'HLSENTERET'
    | 'HK'
    | 'INN'
    | 'ISF'
    | 'KHIO'
    | 'KIRKENSBYMISJON'
    | 'KRUS'
    | 'KULTURAKADEMIET'
    | 'LANDBRUKSDIREKTORATET'
    | 'LDH'
    | 'MF'
    | 'MOBA'
    | 'NIH'
    | 'NKVTS'
    | 'NLA'
    | 'NMBU'
    | 'NMH'
    | 'NOKUT'
    | 'NORCE'
    | 'NORD'
    | 'NORDKAPP_KOMMUNE'
    | 'NORDLANDSFORSKNING'
    | 'NTNU'
    | 'NTNU_SAMFORSK'
    | 'NUBU'
    | 'OSLOMET'
    | 'OSLONH'
    | 'OUS'
    | 'PHS'
    | 'RADICH'
    | 'RBUP'
    | 'SAMAS'
    | 'SIKT'
    | 'SSHF'
    | 'SYKEHUSET_INNLANDET'
    | 'UIA'
    | 'UIB'
    | 'UIS'
    | 'UIT'
    | 'UNIS'
    | 'USN'
    | 'VESTRE_VIKEN'
    | 'VETINST'
    | 'VID'
    | 'NOLOGO';
}

export interface Netgroup {
  /** @format int64 */
  netgroupId?: number;
  name?: string;
}

export interface Invitation {
  /** @format int64 */
  invitationMetadataId?: number;
  invitedPersonStringRaw?: string;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  lastRemindedDate?: string;
  state?: string;
  /** @format int32 */
  numberOfSubmissions?: number;
  /** @format int32 */
  numberOfInvitations?: number;
  invited?: Person;
  createdBy?: Person;
}

export interface FormInfo {
  title?: string;
  canEditForm?: boolean;
  isCodebookValid?: boolean;
  hasSubmissions?: boolean;
  /** @format date-time */
  modifiedDate?: string;
  modifiedBy?: Person;
  isOpen?: boolean;
  deliveryDestination?: string;
  projectName?: string;
  /** @format int32 */
  numberOfPostponedSubmissions?: number;
  /** @format int32 */
  numberOfSubmissions?: number;
  /** @format int32 */
  numberOfInvitations?: number;
  editorsContactEmail?: string;
  editorsContactUrl?: string;
  /** @format date-time */
  lastSubmissionDate?: string;
  /** @format date-time */
  markedForDeletionDate?: string;
  /** @format date-time */
  deleteDate?: string;
}

export interface AnswerOption {
  /** @format int64 */
  answerOptionId?: number;
  /** @format int32 */
  sequence?: number;
  text?: string;
  /** @format int64 */
  redirectToForm?: number;
  isPreselected?: boolean;
  isCorrect?: boolean;
  additionalRecipientEmail?: string;
  externalAnswerOptionId?: string;
  image?: Image;
  imageUrl?: string;
  altText?: string;
  externalElementId?: string;
  textOrAltText?: string;
}

export interface Element {
  /** @format int64 */
  elementId?: number;
  /** @format int64 */
  questionId?: number;
  text?: string;
  description?: string;
  elementType:
    | 'DEFAULT' // Custom element only used by frontend
    | 'TEXT'
    | 'IMAGE'
    | 'HEADING'
    | 'PAGE_BREAK'
    | 'ACCORDION'
    | 'RADIO'
    | 'SELECT'
    | 'CHECKBOX'
    | 'MATRIX_RADIO'
    | 'MATRIX_CHECKBOX'
    | 'DATE'
    | 'NAME'
    | 'PHONE'
    | 'EMAIL'
    | 'NUMBER'
    | 'QUESTION'
    | 'USERNAME'
    | 'ATTACHMENT'
    | 'LINEAR_SCALE'
    | 'NATIONAL_ID_NUMBER'
    | 'QUESTION_MULTILINE'
    | 'SUBMISSION_REFERENCE';
  dateFormat?: 'DATE' | 'DATE_TIME' | 'TIME';
  /** @format int32 */
  sequence?: number;
  /** @format int32 */
  maxSelectedAnswerOptions?: number;
  imageUrl?: string;
  altText?: string;
  linearScaleType?:
    | 'NONE'
    | 'START_END'
    | 'START_MID_END'
    | 'TEXT_AND_NUM'
    | 'ALL';
  nationalIdNumberType?: 'ONLY_NUMBERS' | 'NORWEGIAN_ID_NUMBER' | 'CUSTOM';
  repeatedNationalIdRequired?: boolean;
  /** @format int32 */
  nationalIdNumberOfLetters?: number;
  /** @format int32 */
  nationalIdNumberOfDigits?: number;
  isAutofill?: boolean;
  image?: Image;
  isMandatory?: boolean;
  isHorizontal?: boolean;
  isRangeMarksShown?: boolean;
  externalElementId?: string;
  /** @format int64 */
  minimumValue?: number;
  /** @format int64 */
  maximumValue?: number;
  sendAdditionalRecipientEmail?: boolean;
  useForRedirectToForm?: boolean;
  minimumValueText?: string;
  midValueText?: string;
  maximumValueText?: string;
  /** @format int32 */
  numberOfDecimals?: number;
  routingReferenceIds?: number[];
  answerOptions?: AnswerOption[];
  answerOptionsVisibilityFilter?: AnswerOption[];
  subElements?: SubElement[];
  validationScripts?: ValidationScript[];
  isAnswerHashed?: boolean;
  /** @format int32 */
  maxNumberOfCharacters?: number;
  isRandomizedOrder?: boolean;
}

export interface Image {
  /** @format uuid */
  imageId?: string;
  filename?: string;
  /** @format int32 */
  size?: number;
  mediaType?: string;
}

export interface SubElement {
  /** @format int64 */
  subElementId?: number;
  /** @format int64 */
  questionId?: number;
  /** @format int32 */
  sequence?: number;
  description?: string;
  text?: string;
  isMandatory?: boolean;
  externalElementId?: string;
  sendAdditionalRecipientEmail?: boolean;
}

export interface ValidationScript {
  title?: string;
  content?: string;
  /** @format int64 */
  validationScriptId?: number;
}

export interface FormDefinitionAnswerOption {
  /** @format int64 */
  answerOptionId?: number;
  /** @format int32 */
  sequence?: number;
  text?: string;
  externalAnswerOptionId?: string;
}

export interface FormDefinitionAnswerOptionsVisibilityFilter {
  externalElementId?: string;
  externalAnswerOptionId?: string;
}

export interface FormDefinition {
  version?: string;
  /** @format int32 */
  versionMinor?: number;
  /** @format date-time */
  generatedDate?: string;
  /** @format int64 */
  formId?: number;
  languageCode?: string;
  title?: string;
  titleShort?: string;
  deliveryDestination?: 'DATABASE' | 'DATABASE_ENCRYPTED' | 'EDUCLOUD' | 'TSD';
  formType?:
    | 'DEFAULT'
    | 'HIGH_SECURITY'
    | 'SIGN_UP'
    | 'MULTIPLE_CHOICE'
    | 'COURSE_EVALUATION';
  theme?:
    | 'DEFAULT'
    | 'AHO'
    | 'ANSGAR'
    | 'BARNEVERN_NOTODDEN'
    | 'BARRATTDUE'
    | 'BBJ'
    | 'BGO'
    | 'BI'
    | 'DMMH'
    | 'EDUCLOUD'
    | 'EDUCSC'
    | 'FHI'
    | 'GATEJURISTENTROMSO'
    | 'HELSEDIREKTORATET'
    | 'HELSE_STAVANGER'
    | 'HFY'
    | 'HIOF'
    | 'HIMOLDE'
    | 'HIVOLDA'
    | 'HLSENTERET'
    | 'HK'
    | 'INN'
    | 'ISF'
    | 'KHIO'
    | 'KIRKENSBYMISJON'
    | 'KRUS'
    | 'KULTURAKADEMIET'
    | 'LANDBRUKSDIREKTORATET'
    | 'LDH'
    | 'MF'
    | 'MOBA'
    | 'NIH'
    | 'NKVTS'
    | 'NLA'
    | 'NMBU'
    | 'NMH'
    | 'NOKUT'
    | 'NORCE'
    | 'NORD'
    | 'NORDKAPP_KOMMUNE'
    | 'NORDLANDSFORSKNING'
    | 'NTNU'
    | 'NTNU_SAMFORSK'
    | 'NUBU'
    | 'OSLOMET'
    | 'OSLONH'
    | 'OUS'
    | 'PHS'
    | 'RADICH'
    | 'RBUP'
    | 'SAMAS'
    | 'SIKT'
    | 'SSHF'
    | 'SYKEHUSET_INNLANDET'
    | 'UIA'
    | 'UIB'
    | 'UIS'
    | 'UIT'
    | 'UNIS'
    | 'USN'
    | 'VESTRE_VIKEN'
    | 'VETINST'
    | 'VID'
    | 'NOLOGO';
  createdBy?: Person;
  modifiedBy?: Person;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  modifiedDate?: string;
  /** @format date-time */
  openFrom?: string;
  /** @format date-time */
  openTo?: string;
  respondentGroup?:
    | 'ALL'
    | 'FEIDE'
    | 'INVITED'
    | 'ID_PORTEN_LEVEL_3'
    | 'ID_PORTEN_LEVEL_4'
    | 'ID_PORTEN_LEVEL_3_SIGNING'
    | 'ID_PORTEN_LEVEL_4_SIGNING'
    | 'HELSENORGE'
    | 'HELSENORGE_SIGNING';
  editorsContactEmail?: string;
  editorsContactUrl?: string;
  editors?: Person[];
  netgroupsEditor?: Netgroup[];
  personsWithCopyPermission?: Person[];
  netgroupsWithCopyPermission?: Netgroup[];
  collectsPersonalData?: boolean;
  /** @format int32 */
  maxSubmissionsForm?: number;
  isSensitivePersonalDataCollected?: boolean;
  personalDataPurposeDescription?: string;
  personalDataSharedOutsideInstitutionWith?: string;
  isConsentForm?: boolean;
  afterDeliveryForwardFormIds?: string;
  elements?: FormDefinitionElement[];
}

export interface FormDefinitionElement {
  /** @format int64 */
  elementId?: number;
  text?: string;
  description?: string;
  elementType?:
    | 'TEXT'
    | 'IMAGE'
    | 'HEADING'
    | 'PAGE_BREAK'
    | 'ACCORDION'
    | 'RADIO'
    | 'SELECT'
    | 'CHECKBOX'
    | 'MATRIX_RADIO'
    | 'MATRIX_CHECKBOX'
    | 'DATE'
    | 'NAME'
    | 'PHONE'
    | 'EMAIL'
    | 'NUMBER'
    | 'QUESTION'
    | 'USERNAME'
    | 'ATTACHMENT'
    | 'LINEAR_SCALE'
    | 'NATIONAL_ID_NUMBER'
    | 'QUESTION_MULTILINE'
    | 'SUBMISSION_REFERENCE';
  dateFormat?: 'DATE' | 'DATE_TIME' | 'TIME';
  /** @format int32 */
  sequence?: number;
  altText?: string;
  nationalIdNumberType?: 'ONLY_NUMBERS' | 'NORWEGIAN_ID_NUMBER' | 'CUSTOM';
  externalElementId?: string;
  answerOptions?: FormDefinitionAnswerOption[];
  subElements?: FormDefinitionSubElement[];
  isAnswerHashed?: boolean;
  /** @format int32 */
  numberOfDecimals?: number;
  answerOptionsVisibilityFilter?: FormDefinitionAnswerOptionsVisibilityFilter[];
}

export interface FormDefinitionSubElement {
  /** @format int64 */
  subElementId?: number;
  /** @format int64 */
  questionId?: number;
  /** @format int32 */
  sequence?: number;
  description?: string;
  text?: string;
  externalElementId?: string;
}

export interface AnswerAttachment {
  /** @format int64 */
  answerAttachmentId?: number;
  filename?: string;
  mediaType?: string;
  /** @format int32 */
  size?: number;
}

export interface Answer {
  /** @format int64 */
  formId?: number;
  /** @format int64 */
  submissionId?: number;
  /** @format int64 */
  answerId?: number;
  /** @format int64 */
  elementId?: number;
  externalElementId?: string;
  textAnswer?: string;
  answerOptionIds?: number[];
  externalAnswerOptionIds?: string[];
  /** @format int64 */
  answerAttachmentId?: number;
  filename?: string;
  mediaType?: string;
  /** @format int32 */
  size?: number;
  elementType?: string;
  correct?: boolean;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  modifiedDate?: string;
  /** @format int64 */
  subElementId?: number;
  attachment?: AnswerAttachment;
}

export interface SingleSubmission {
  submissionMetadata?: SubmissionMetadata;
  answers?: Answer[];
}

export interface FormForMySubmissions {
  title?: string;
}

export interface MySubmissions {
  /** @format int64 */
  submissionId?: number;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  modifiedDate?: string;
  delivered?: boolean;
  form?: FormForMySubmissions;
}

export interface MyForms {
  /** @format int64 */
  formId?: number;
  title?: string;
  /** @format date-time */
  openFrom?: string;
  /** @format date-time */
  openTo?: string;
  /** @format date-time */
  lastSubmissionDate?: string;
  /** @format date-time */
  modifiedDate?: string;
  /** @format date-time */
  personalDataErasedDate?: string;
  deliveryDestination?: string;
  anonymous?: boolean;
  /** @format int64 */
  numberOfDeliveredSubmissions?: number;
  /** @format int64 */
  owners?: number;
  isDictaphone?: boolean;
  myFormsFormListingGroup?: 'MY' | 'SHARED' | 'OLD' | 'COPY' | 'ERASED';
  open?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8080';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Nettskjema api
 * @version v3
 * @baseUrl http://localhost:8080
 *
 * Terms of use: [https://www.uio.no/tjenester/it/adm-app/nettskjema/include-files/tos-aud.html](https://www.uio.no/tjenester/it/adm-app/nettskjema/include-files/tos-aud.html)
 *
 * Documentation: [https://www.uio.no/tjenester/it/adm-app/nettskjema/hjelp/api-clients-v3.md](https://www.uio.no/tjenester/it/adm-app/nettskjema/hjelp/api-clients-v3.md)
 *
 * Authorize your requests with your **access token** by clicking the *Authorise* button on the right side
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  proxied = {
    /**
     * No description
     *
     * @tags Updating codebook
     * @name DeliverCodebook
     * @request PUT:/proxied/form/{formId}/codebook
     * @secure
     */
    deliverCodebook: (
      formId: number,
      data: Codebook,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/codebook`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delivering attachments to forms
     * @name DeliverAttachmentStream
     * @request PUT:/proxied/form/submission/{submissionId}/attachment
     * @secure
     */
    deliverAttachmentStream: (
      submissionId: number,
      query: {
        /** @format int64 */
        questionId: number;
        filename: string;
        /** @format int64 */
        fileSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, string>, ErrorMessage>({
        path: `/proxied/form/submission/${submissionId}/attachment`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags retranscribe-proxied-controller
     * @name Retranscribe
     * @request POST:/proxied/submission/attachment/{answerAttachmentId}/retranscribe
     * @secure
     */
    retranscribe: (
      answerAttachmentId: number,
      data: Retranscribe,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/submission/attachment/${answerAttachmentId}/retranscribe`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Emneevaluering
     * @name GetEmailAddressesForCourseEvaluation
     * @summary Henter e-postadressen til studenter for en gitt emnekode
     * @request GET:/proxied/private/form/{formId}/invitations/course-evaluation
     * @secure
     */
    getEmailAddressesForCourseEvaluation: (
      formId: number,
      query: {
        'course-code': string;
        semester: string;
        'is-exam-students-only': boolean;
        /** @format int64 */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], ErrorMessage>({
        path: `/proxied/private/form/${formId}/invitations/course-evaluation`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Emneevaluering
     * @name InviteStudentsToCourseEvaluation
     * @summary Inviterer alle studenter ved en gitt emnekode
     * @request POST:/proxied/private/form/{formId}/invitations/course-evaluation
     * @secure
     */
    inviteStudentsToCourseEvaluation: (
      formId: number,
      data: CourseEvaluation,
      params: RequestParams = {},
    ) =>
      this.request<CreateInvitationResult, ErrorMessage>({
        path: `/proxied/private/form/${formId}/invitations/course-evaluation`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags submissions-signing-proxied-controller
     * @name DeliverSigningConfirmation
     * @request POST:/proxied/private/form/submissions/signing-confirmation
     * @secure
     */
    deliverSigningConfirmation: (
      query: {
        /** @format int64 */
        submissionId: number;
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, string>, ErrorMessage>({
        path: `/proxied/private/form/submissions/signing-confirmation`,
        method: 'POST',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment for a submission
     * @name CleanupAnswerAttachments
     * @request POST:/proxied/private/form/submissions/cleanup-answer-attachment-s3
     * @secure
     */
    cleanupAnswerAttachments: (params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/private/form/submissions/cleanup-answer-attachment-s3`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delivering submissions to forms
     * @name DeliverSubmission
     * @request POST:/proxied/form/{formId}/submission
     * @secure
     */
    deliverSubmission: (
      formId: number,
      data: DeliverSubmission,
      params: RequestParams = {},
    ) =>
      this.request<Record<string, object>, ErrorMessage>({
        path: `/proxied/form/${formId}/submission`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delete submissions
     * @name DeleteSubmission
     * @summary Delete list of submissions
     * @request DELETE:/proxied/form/{formId}/submission
     * @secure
     */
    deleteSubmission: (
      formId: number,
      data: number[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/submission`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Send invitation reminders
     * @name Remind
     * @request POST:/proxied/form/{formId}/remind
     * @secure
     */
    remind: (formId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/remind`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags List all invitations
     * @name GetAllInvitations
     * @request GET:/proxied/form/{formId}/invitations
     * @secure
     */
    getAllInvitations: (formId: number, params: RequestParams = {}) =>
      this.request<Invitation, ErrorMessage>({
        path: `/proxied/form/${formId}/invitations`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Create new invitations
     * @name CreateInvitations
     * @request POST:/proxied/form/{formId}/invitations
     * @secure
     */
    createInvitations: (
      formId: number,
      data: string[],
      query?: {
        isSmsInvitation?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateInvitationResult, ErrorMessage>({
        path: `/proxied/form/${formId}/invitations`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delete invitations
     * @name DeleteAllInvitations
     * @summary Delete all invitations
     * @request DELETE:/proxied/form/{formId}/invitations
     * @secure
     */
    deleteAllInvitations: (
      formId: number,
      data: number[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/invitations`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activate forms for HighSecurity
     * @name ActivateTsd
     * @request POST:/proxied/form/{formId}/activate/tsd
     * @secure
     */
    activateTsd: (
      formId: number,
      data: ActivateForm,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/activate/tsd`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activate forms for HighSecurity
     * @name ActivateEducloud
     * @request POST:/proxied/form/{formId}/activate/educloud
     * @secure
     */
    activateEducloud: (
      formId: number,
      data: ActivateForm,
      params: RequestParams = {},
    ) =>
      this.request<Record<string, string>, ErrorMessage>({
        path: `/proxied/form/${formId}/activate/educloud`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delivering submissions to invitations
     * @name DeliverSubmissionForInvitation
     * @request POST:/proxied/form/invitation/{invitationId}/submission
     * @secure
     */
    deliverSubmissionForInvitation: (
      invitationId: number,
      data: DeliverSubmission,
      params: RequestParams = {},
    ) =>
      this.request<Record<string, object>, ErrorMessage>({
        path: `/proxied/form/invitation/${invitationId}/submission`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags terms-of-service-proxied-controller
     * @name PatchAccept
     * @request PATCH:/proxied/private/tos/accept
     * @secure
     */
    patchAccept: (params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/private/tos/accept`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags form-open-close-proxied-controller
     * @name Open
     * @request PATCH:/proxied/private/form/{formId}/open
     * @secure
     */
    open: (formId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/private/form/${formId}/open`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags form-open-close-proxied-controller
     * @name Close
     * @request PATCH:/proxied/private/form/{formId}/close
     * @secure
     */
    close: (formId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/private/form/${formId}/close`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activate forms for HighSecurity
     * @name TsdV2Reactivation
     * @request PATCH:/proxied/private/form/tsd-v2-reactivation
     * @secure
     */
    tsdV2Reactivation: (
      data: Record<string, number>[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/private/form/tsd-v2-reactivation`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings for form
     * @name GetFormSettings
     * @request GET:/proxied/form/{formId}/settings
     * @secure
     */
    getFormSettings: (formId: number, params: RequestParams = {}) =>
      this.request<FormSettings, ErrorMessage>({
        path: `/proxied/form/${formId}/settings`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings for form
     * @name PatchSettings
     * @request PATCH:/proxied/form/{formId}/settings
     * @secure
     */
    patchSettings: (
      formId: number,
      data: Record<string, object>,
      query?: {
        forceCleanup?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ErrorMessage, ErrorMessage>({
        path: `/proxied/form/${formId}/settings`,
        method: 'PATCH',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags transcribe-proxied-controller
     * @name GetAttachmentTranscribedVtt
     * @request GET:/proxied/submission/attachment/{answerAttachmentId}/transcribed/vtt
     * @secure
     */
    getAttachmentTranscribedVtt: (
      answerAttachmentId: number,
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorMessage>({
        path: `/proxied/submission/attachment/${answerAttachmentId}/transcribed/vtt`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags transcribe-proxied-controller
     * @name GetAttachmentTranscribedTxt
     * @request GET:/proxied/submission/attachment/{answerAttachmentId}/transcribed/txt
     * @secure
     */
    getAttachmentTranscribedTxt: (
      answerAttachmentId: number,
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorMessage>({
        path: `/proxied/submission/attachment/${answerAttachmentId}/transcribed/txt`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags transcribe-proxied-controller
     * @name GetAttachmentTranscribedJson
     * @request GET:/proxied/submission/attachment/{answerAttachmentId}/transcribed/json
     * @secure
     */
    getAttachmentTranscribedJson: (
      answerAttachmentId: number,
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorMessage>({
        path: `/proxied/submission/attachment/${answerAttachmentId}/transcribed/json`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags high-security-queues-info-proxy-controller
     * @name QueueInfo
     * @request GET:/proxied/private/support/tsd/queue/info
     * @secure
     */
    queueInfo: (params: RequestParams = {}) =>
      this.request<HighSecurityQueuesInfo, ErrorMessage>({
        path: `/proxied/private/support/tsd/queue/info`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags high-security-queues-info-proxy-controller
     * @name QueueContent
     * @request GET:/proxied/private/support/tsd/queue/content
     * @secure
     */
    queueContent: (params: RequestParams = {}) =>
      this.request<HighSecurityQueuesContent, ErrorMessage>({
        path: `/proxied/private/support/tsd/queue/content`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags high-security-project-form-proxy-controller
     * @name TsdProjectForm
     * @request GET:/proxied/private/support/tsd/project/forms
     * @secure
     */
    tsdProjectForm: (params: RequestParams = {}) =>
      this.request<HighSecurityProjectFormCount[], ErrorMessage>({
        path: `/proxied/private/support/tsd/project/forms`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Information about forms
     * @name FormOwners
     * @request GET:/proxied/private/form/{formId}/other-form-owners
     * @secure
     */
    formOwners: (formId: number, params: RequestParams = {}) =>
      this.request<OtherFormOwners[], ErrorMessage>({
        path: `/proxied/private/form/${formId}/other-form-owners`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags form-header-info-proxied-controller
     * @name GetFormHeaderInfo
     * @request GET:/proxied/private/form/{formId}/header-info
     * @secure
     */
    getFormHeaderInfo: (formId: number, params: RequestParams = {}) =>
      this.request<FormHeaderInfo, ErrorMessage>({
        path: `/proxied/private/form/${formId}/header-info`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Emneevaluering
     * @name GetCourseInstructors
     * @summary Henter e-postaddresser til fagansvarlig for en gitt emnekode
     * @request GET:/proxied/private/form/{formId}/course-evaluation/instructor
     * @secure
     */
    getCourseInstructors: (
      formId: number,
      query: {
        'course-code': string;
        semester: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, string[]>, ErrorMessage>({
        path: `/proxied/private/form/${formId}/course-evaluation/instructor`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags form-templates-proxied-controller
     * @name GetFormTemplates
     * @request GET:/proxied/private/form/templates
     * @secure
     */
    getFormTemplates: (params: RequestParams = {}) =>
      this.request<FormTemplate[], ErrorMessage>({
        path: `/proxied/private/form/templates`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Information about the environment of the application
     * @name GetEnvironment
     * @request GET:/proxied/private/environment
     * @secure
     */
    getEnvironment: (params: RequestParams = {}) =>
      this.request<Environment, ErrorMessage>({
        path: `/proxied/private/environment`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Information about the user
     * @name GetEnvironment1
     * @request GET:/proxied/me
     * @secure
     */
    getEnvironment1: (params: RequestParams = {}) =>
      this.request<Record<string, object>, ErrorMessage>({
        path: `/proxied/me`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags All submission metadata for a form
     * @name GetAllMetadataAnswers
     * @request GET:/proxied/form/{formId}/submission-metadata
     * @secure
     */
    getAllMetadataAnswers: (formId: number, params: RequestParams = {}) =>
      this.request<SubmissionMetadata, ErrorMessage>({
        path: `/proxied/form/${formId}/submission-metadata`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags All submission metadata on postponed submissions for a form
     * @name GetAllPostponedMetadataAnswers
     * @request GET:/proxied/form/{formId}/submission-metadata-postponed
     * @secure
     */
    getAllPostponedMetadataAnswers: (
      formId: number,
      params: RequestParams = {},
    ) =>
      this.request<SubmissionMetadata, ErrorMessage>({
        path: `/proxied/form/${formId}/submission-metadata-postponed`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports on form
     * @name GetSpssSyntaxFile
     * @summary SPSS syntax file
     * @request GET:/proxied/form/{formId}/spss-syntax
     * @secure
     */
    getSpssSyntaxFile: (formId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/spss-syntax`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings for form
     * @name GetFormSettingsValidation
     * @request GET:/proxied/form/{formId}/settings/validation
     * @secure
     */
    getFormSettingsValidation: (formId: number, params: RequestParams = {}) =>
      this.request<ErrorMessage, ErrorMessage>({
        path: `/proxied/form/${formId}/settings/validation`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Information about a form
     * @name GetInfo
     * @summary Info about the form for answering
     * @request GET:/proxied/form/{formId}/info
     * @secure
     */
    getInfo: (formId: number, params: RequestParams = {}) =>
      this.request<FormInfo, ErrorMessage>({
        path: `/proxied/form/${formId}/info`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports on form
     * @name GetExcelReport
     * @summary Excel file
     * @request GET:/proxied/form/{formId}/excel-report
     * @secure
     */
    getExcelReport: (formId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/excel-report`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elements in form
     * @name Elements
     * @summary List of elements for answering form
     * @request GET:/proxied/form/{formId}/elements
     * @secure
     */
    elements: (formId: number, params: RequestParams = {}) =>
      this.request<Element[], ErrorMessage>({
        path: `/proxied/form/${formId}/elements`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activate forms for HighSecurity
     * @name TsdActivationJsonNew
     * @request GET:/proxied/form/{formId}/definition
     * @secure
     */
    tsdActivationJsonNew: (formId: number, params: RequestParams = {}) =>
      this.request<FormDefinition, ErrorMessage>({
        path: `/proxied/form/${formId}/definition`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports on form
     * @name GetCsvReport
     * @summary CSV text file with semicolon (;) as delimiter
     * @request GET:/proxied/form/{formId}/csv-report
     * @secure
     */
    getCsvReport: (formId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/csv-report`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags All answers for a form
     * @name GetAllAnswers
     * @request GET:/proxied/form/{formId}/answers
     * @secure
     */
    getAllAnswers: (formId: number, params: RequestParams = {}) =>
      this.request<Answer, ErrorMessage>({
        path: `/proxied/form/${formId}/answers`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Find form id from title short
     * @name GetFormId
     * @request GET:/proxied/form/titleshort/{titleShort}
     * @secure
     */
    getFormId: (titleShort: string, params: RequestParams = {}) =>
      this.request<Record<string, number>, ErrorMessage>({
        path: `/proxied/form/titleshort/${titleShort}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Submission with answers
     * @name GetSubmission
     * @request GET:/proxied/form/submission/{submissionId}
     * @secure
     */
    getSubmission: (submissionId: number, params: RequestParams = {}) =>
      this.request<SingleSubmission, ErrorMessage>({
        path: `/proxied/form/submission/${submissionId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags List of my submissions
     * @name GetMe
     * @request GET:/proxied/form/submission/me
     * @secure
     */
    getMe: (params: RequestParams = {}) =>
      this.request<MySubmissions[], ErrorMessage>({
        path: `/proxied/form/submission/me`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Information about forms
     * @name MyForms
     * @request GET:/proxied/form/me
     * @secure
     */
    myForms: (params: RequestParams = {}) =>
      this.request<MyForms[], ErrorMessage>({
        path: `/proxied/form/me`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delete form
     * @name DeleteForm
     * @request DELETE:/proxied/form
     * @secure
     */
    deleteForm: (data: number[], params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delete submissions
     * @name DeleteAllSubmissions
     * @summary Delete all submissions
     * @request DELETE:/proxied/form/{formId}/submissions
     * @secure
     */
    deleteAllSubmissions: (
      formId: number,
      data: number[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/submissions`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Delete invitations
     * @name DeleteInvitations
     * @summary Delete list of invitations
     * @request DELETE:/proxied/form/{formId}/invitation
     * @secure
     */
    deleteInvitations: (
      formId: number,
      data: number[],
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/proxied/form/${formId}/invitation`,
        method: 'DELETE',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  receiptRespondent = {
    /**
     * No description
     *
     * @tags Temporary controller for development of different types of mail
     * @name GetReceiptRespondent
     * @summary Midlertidig endepunkt for testing av kvittering til respondent
     * @request GET:/receipt-respondent
     * @secure
     */
    getReceiptRespondent: (
      query: {
        toAddress: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, object>, ErrorMessage>({
        path: `/receipt-respondent`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  receiptEditor = {
    /**
     * No description
     *
     * @tags Temporary controller for development of different types of mail
     * @name GetReceiptEditor
     * @summary Midlertidig endepunkt for testing av kvittering til editor
     * @request GET:/receipt-editor
     * @secure
     */
    getReceiptEditor: (
      query: {
        toAddress: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, object>, ErrorMessage>({
        path: `/receipt-editor`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  private = {
    /**
     * No description
     *
     * @tags resource-server-protected-controller
     * @name GetUserInfo
     * @request GET:/private/resource-server-protected
     * @secure
     */
    getUserInfo: (params: RequestParams = {}) =>
      this.request<Record<string, object>, ErrorMessage>({
        path: `/private/resource-server-protected`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
}
