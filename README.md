# g-map-field
Google Maps form field (Vue.js powered)

Google Maps path form field with json serialization

# Installation
1) Clone repo (or type bower install g-map-field)

2) Install npm dependencies

3) Run "gulp default"

4) Common library file compiled into *dist/js/index.js*.

# Usage

1) Link dependencies (vue.js required, bootstrap required)

2) Add "<path-input field-name="field-name" field-value='json-value' template="template-path" ></path-input>"
tag into your form. Form value submitted as *field-name* (JSON encoded). Template *template-path* used for component
template (template url rendering not suppurted by vue.js, this is own functional)

Value decoded from json format (*json-value*)

3) Create vue.js app

# Notes
For *bootstrap-timepicker* plugin css styles not included, only less. You can compile less and include result css in your project
