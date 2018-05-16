export const SET_LANGUAGE = 'GENERAL/SET_LANGUAGE';

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language,
  };
}
