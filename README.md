# g-map-field
Google Maps form field (Vue.js powered)

Google Maps path form field with json serialization

# Installation
1) Clone repo (or type bower install g-map-field)

2) Install npm dependencies

3) Run "gulp default"

4) Common library file compiled into *src/js/index.js*, dependencies compiles into *src/js/libs.js*, styles - *src/css/base.css*.
you can use only *src/js/index.js* with resolving dependencies with bower and write your own styles

# Usage

1) Link dependencies (vue.js required, bootstrap optional)

2) Create vue.js app

3) Add "<path-input field-name="field-name" field-value='json-value'></path-input>" tag into your form. Form value submitted as *field-name* (JSON encoded).
Value decoded from json format (*json-value*)
