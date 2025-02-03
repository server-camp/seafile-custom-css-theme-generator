# seafile-custom-colors

This project provides a web interface for generating custom CSS code for Seafile, allowing users to create a
personalized color theme for the Seafile / Seahub web interface.

## how to use

Simply visit the [web interface](https://server.camp/seafile-custom-css/) and select your preferred primary color. The
CSS code will be generated automatically.

## submit an issue

Just [open an issue](https://github.com/server-camp/seafile-custom-css-theme-generator/issues/new?template=Blank+issue)
in the [issue tracker](https://github.com/server-camp/seafile-custom-css-theme-generator/issues/) and describe your
problem or suggestion.

## how to contribute

Feel free to contribute to this project. Just fork the repository and create a pull request. We would love to see more
options for customizing the Seafile web interface, e.g. a dark theme or support for more Seafile versions.

## how to build

There is no build process required. You can edit the files and use any web server of your choice to serve them. A
straightforward option is to use the python module `http.server`:

```bash
python3 -m http.server 9000
 ```

## disclaimer

This project is not affiliated with [Seafile or Seafile Ltd](https://www.seafile.com). It is a tool designed to generate
custom CSS code for the Seafile web interface. Please be aware that the generated CSS code may not be compatible with
future versions of Seafile, and you should use it at your own risk.