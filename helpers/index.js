import jwDecode from 'jwt-decode'

const Cookieparser = require('cookieparser')

export function getUserFromCookie (req) {
  if (process.server && process.static) { return }
  if (!req.headers.cookie) { return }
  if (req.headers.cookie) {
    const parsed = Cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) { return }
    const decodedToken = jwDecode(accessTokenCookie)
    if (!decodedToken) { return }
    return decodedToken
  }
}
