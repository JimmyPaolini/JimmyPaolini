# sed (stream editor)

`sed -i 's/search/replace/flags' input.txt > output.txt`

- `s/` is a substitute
  - `p/` is a print (use with `-n` flag)
  - `d/` is a delete
- Omit `> output.txt` to simply print the output
- Regex flags: `/g` global, `/m` multiline, `/i` case insensitive, `/` no flags
- Perform multiple commands with multiple `-e 'command'` flags
- `-r` use extended regular expressions
- `-n` quiet output
