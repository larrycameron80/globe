![Globe Logo][]

[![Build Status](https://travis-ci.org/makepanic/globe.png?branch=master)](https://travis-ci.org/makepanic/globe)


JavaScript application to search and view details for Tor relays and bridges.
All the data comes from the [Tor Onionoo API][].  Uses [Ember.js][] as
Javascript framework.  Inspired by the official [Tor Atlas][] project.

Tor Onionoo is not affiliated with the Tor project.  "Tor" and the "Onion Logo"
are registered trademarks of The Tor Project, Inc.


## Use the Application

To use a hosted version of Globe, [click here][].  If you want to build your
own version, take a look at the [grunt targets](#grunt-targets) section.

If you can't or don't want to build the application on your own, you can
download the latest archived release from [the release page][].


## Features

- search for bridges or relays
- advanced search with country, running, flags and other filters
- details for a bridge or relay
- interactive graphs using dygraphs
- shareable links for searches or details


## License

Globe is open-sourced software licensed under the [MIT License][].

Project | License
--- | ---
[Ember.js](http://emberjs.com/) | [MIT License](http://opensource.org/licenses/MIT)
[Pure](http://purecss.io/) | [Yahoo! Inc. BSD license](https://github.com/yui/pure/blob/master/LICENSE.md)
[Font Awesome - Font](http://purecss.io/) | [SIL OFL 1.1](http://scripts.sil.org/OFL)
[Font Awesome - SASS files](http://purecss.io/) | [MIT License](http://opensource.org/licenses/mit-license.html)
[Handlebars](http://handlebarsjs.com/) | [MIT License](http://opensource.org/licenses/MIT)
[dygraphs](http://dygraphs.com/) | [MIT License](http://opensource.org/licenses/MIT)
[moment](http://momentjs.com/) | [MIT License](http://opensource.org/licenses/MIT)
[jQuery](http://jquery.com/) | [MIT License](http://opensource.org/licenses/MIT)
[qTip2](http://qtip2.com/) | [MIT License](http://opensource.org/licenses/MIT)
[DataTables](https://datatables.net/) | [MIT license](http://opensource.org/licenses/MIT) [@](http://datatables.net/license_mit)
[jquery deparam](https://github.com/chrissrogers/jquery-deparam/blob/master/jquery-deparam.js) | [MIT license](http://opensource.org/licenses/MIT) [@](http://benalman.com/about/license/)
[jsSHA](http://caligatio.github.io/jsSHA/) | [BSD license](https://github.com/Caligatio/jsSHA/blob/release-1.42/LICENSE)


## Installation

Globe is tested and build with nodejs (0.10.x).  For an easy overview on how
to install node on your distribution look at
[Installing Node.js via Package Manager][] -- or, more preferably: [nvm][].

In addition to that, globe can be built in a virtual machine that is managed
using [Vagrant][].  To make it easier for you, we provide a [Vagrantfile][]
that builds an ubuntu (12.04) virtual machine with everything necessary for
developing and building globe.  If you have vagrant installed run `vagrant up`
and wait until everything is ready.

Connect to your running virtual machine via `vagrant ssh`.  Using the shared
folder (`cd /vagrant/`) you can continue building globe using the following
commands.


### Summary:

1. `npm install` (not necessary in the vagrant machine)
2. `grunt`
3. `node app.js`


### Explanation

1. First you need all the npm dependencies. Run `npm install`.

2. Now you're ready to build the application and start the server.  Call
   `grunt` and wait for it to complete the build process.  Grunt precompiles
   the handlebars templates, combines all the different JavaScript and CSS
   files and minifies them.  This can take a while depending on your computer.

3. If it's done start the server using `node app.js`. This will start a simple
   [Express.js][] server that handles the requests.

If you only want to get the required html, JavaScript and CSS files see the
**Standalone grunt target** below.


### Grunt Targets


#### Development Target - `grunt dev`

- useful for local development
- uses not minified js and css
- uses grunt watch to update code changes


#### Standalone Target - `grunt standalone`

- useful to create a minified version that is easy to deploy to your server
- minifies all the js and css files
- creates a `/build` folder that has all the required resources
- used to build the resources for the running application


#### Standalone Target with Archive - `grunt standalone-archive`

- same as `grunt standalone` but creates archive of the build directory
- used for to create release files on github


#### Continuous Integration Target - `grunt ci`

- same targets as `grunt standalone` with additional testing of the generated
  files using [karma][]
- used for travis continuous integration


#### Default Target - `grunt`

- same as `standalone` except it won't create a build folder with all the
  resources


  [Globe Logo]: https://raw.github.com/makepanic/globe/master/res/others/logo-big.png "Globe Logo"
  [Tor Onionoo API]: https://onionoo.torproject.org/ "Tor Onionoo API"
  [Ember.js]: http://emberjs.com/ "Ember.js"
  [Tor Atlas]: https://atlas.torproject.org/ "Tor Atlas"
  [click here]: https://globe.torproject.org/ "Tor Globe"
  [the release page]: https://github.com/makepanic/globe/releases "Tor Globe Releases"
  [MIT License]: http://opensource.org/licenses/MIT "MIT License"
  [Installing Node.js via Package Manager]: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager "Installing Node.js via Package Manager"
  [nvm]: https://github.com/creationix/nvm "NVM - Node Version Manager"
  [Vagrant]: https://www.vagrantup.com/ "Vagrant"
  [Vagrantfile]: https://gitweb.torproject.org/globe.git/blob/HEAD:/Vagrantfile "Vagrantfile"
  [Express.js]: http://expressjs.com/ "Express.js"
  [karma]: https://karma-runner.github.io/0.12/index.html "Karma"
