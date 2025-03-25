export const VALID_FIELDS = [
  'validate_valid',
  'validate_invalid',
  'get_forms_successful',
  'get_forms_failed',
  'choose_form',
  'get_elements_successful',
  'get_elements_failed',
  'create_pdf',
  'choose_another_form',
  'logout',
] as const;

export type VALID_FIELD = (typeof VALID_FIELDS)[number];

const pingInsight = (field: VALID_FIELD) => {
  if (navigator.sendBeacon) navigator.sendBeacon('/api/insight', field);
};
export default pingInsight;
