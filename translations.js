
//! THIS FILE IS AUTO GENERATED BY https://inlang.dev
//! Do not modify by hand.
//
//
// This file exports the following variables
//      'translations': contains the translations
//      'inlangConfig': contains the configuration for inlang
//
// Futhermore, a 't()' function is exported which can be
// invoked to translate given text e.g.
//      t("Hello World") -> "Hallo Welt"

import { Inlang } from 'inlang';

/**
 * Contains translations.
 */
export const translations = {
  "Create Next App": {
    "de": "Nächste App erstellen"
  }
};

/**
 * Use for fine grained inlang setup.
 *
 * If you don't need fine granined setup, use the provided t() function.
 */
export const inlangConfig = {
  "projectId": "a30a3766-a471-4f24-a788-7ee0096062e7",
  "locales": [
    "de"
  ],
  "defaultLocale": "en"
};

let inlang;

/**
 * Auto-configuration inlang object which can be used directly to translate text.
 *
 * Only works in a browser environment as document.documentElement
 * is used to derive the current language of the website.
 *
 * @returns translated text (if exists)
 */
export function t(text, args) {
	if (inlang === undefined) {
		inlang = new Inlang({
			projectConfig: inlangConfig,
			translations: translations,
			locale: document.documentElement.lang
		});
	}
	inlang.locale = document.documentElement.lang;
	return inlang.translate(text, args);
}
