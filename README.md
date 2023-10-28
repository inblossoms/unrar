## unrar

Unzipping.rar files usually requires us to download additional tools on the desktop, and these tools usually have ads built in.

So there is this script tool that can run on the command line to extract.rar files.

### Usage

```shell
# You can view help at unrar-h

# when decompressing the file, you need to specify the archive password, via p or password
unrar demo.rar -p password

# of course you can specify the output directory to extract the file, via o or output
unrar demo.rar -p password -o download
```

### Tip

By default, the output file with the same name in the local file is automatically overwritten, of course, you can change the default value to false by r or overwrite to choose not to overwrite.
