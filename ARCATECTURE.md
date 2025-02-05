# https://mangoleaf.world

 - hosted globaly on cloudflare.
 - uses standard web tech to take photo in the browser.
 - uploads this to a DATABASE https://mangoleaf.freemap.online
   - d1 database (sqlite)
   - lit(lat, lon ,ip, time, hash) [`?it=1`](https://mangoleaf.freemap.online?it=1)
      - how to add post/ comment
      - pch(id, post, hash, prev, time, lat, lon) -- post to a chanel
      - rmr(hash, reason, time, ip, ray) -- request to delete a lit moment.
      - 
   - plit(lat, lon, ip, time, hash, post, lat, lon, note)
   - ???(hash, post, )