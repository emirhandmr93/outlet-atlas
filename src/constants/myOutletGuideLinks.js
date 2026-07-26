export const MY_OUTLET_GUIDE_APP_STORE_URL =
"https://apps.apple.com/app/id6791893523";

const MY_OUTLET_GUIDE_WEB_URLS = {
en: "https://myoutletguide.com/en",
tr: "https://myoutletguide.com/tr",
fr: "https://myoutletguide.com/fr",
de: "https://myoutletguide.com/de",
it: "https://myoutletguide.com/en",
es: "https://myoutletguide.com/es",
ru: "https://myoutletguide.com/ru",
};

export function getMyOutletGuideUrl(language) {
return MY_OUTLET_GUIDE_WEB_URLS[language] || MY_OUTLET_GUIDE_WEB_URLS.en;
}
