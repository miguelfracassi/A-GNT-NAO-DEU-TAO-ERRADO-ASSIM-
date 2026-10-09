{
  "cleanUrls": true,
  "redirects": [
    {
      "source": "/((?!join|api/|assets/|admin|niverdamel|site\\.css|site\\.js|favicon\\.svg).*)",
      "destination": "/join",
      "permanent": false
    }
  ],
  "headers": [
    { "source": "/admin", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
  ]
}
