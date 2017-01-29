/* Returns different URLs for different environments */

// DEV API: http://localhost:3000/?useMockApi=true
// PROD API: http://localhost:3000

export default function getBaseUrl()
{
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

// more vanillaJS to be replaced :)
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
