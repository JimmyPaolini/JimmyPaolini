# netstat (network statistics)

`-a` - All connections

`-l` - Listening connections

`-s` - Show statistics (lots of info)

---

`-t` - TCP connections only (Transfer Control Protocol) [`-at`, `-lt`, `-st`]

`-u` - UDP connections only (User Datagram Protocol) [`-au`, `-lu`, `-su`]

---

`-n` - Show IP address without reverse DNS lookup [`-ant`]

`-F` - Show domain name where possible (`/etc/hosts` lookup?)

`-c` - Show output continuously

`-e` - Show extended information

`-i` - Show interfaces only

---

`netstat -an | grep ESTABLISHED` - Show established connections

`netstat -an | grep ":####"` - Show connections on port
