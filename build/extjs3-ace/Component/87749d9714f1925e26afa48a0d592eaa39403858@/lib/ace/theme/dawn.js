require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/dawn'), ['pilot/dom'], function (require, exports, module) {


    var dom = require("pilot/dom");

    var cssText = ".ace-dawn .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-dawn .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-dawn .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-dawn .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-dawn .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-dawn .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-dawn .ace_scroller {\
  background-color: #F9F9F9;\
}\
\
.ace-dawn .ace_text-layer {\
  cursor: text;\
  color: #080808;\
}\
\
.ace-dawn .ace_cursor {\
  border-left: 2px solid #000000;\
}\
\
.ace-dawn .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #000000;\
}\
 \
.ace-dawn .ace_marker-layer .ace_selection {\
  background: rgba(39, 95, 255, 0.30);\
}\
\
.ace-dawn .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-dawn .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(75, 75, 126, 0.50);\
}\
\
.ace-dawn .ace_marker-layer .ace_active_line {\
  background: rgba(36, 99, 180, 0.12);\
}\
\
       \
.ace-dawn .ace_invisible {\
  color: rgba(75, 75, 126, 0.50);\
}\
\
.ace-dawn .ace_keyword {\
  color:#794938;\
}\
\
.ace-dawn .ace_keyword.ace_operator {\
  \
}\
\
.ace-dawn .ace_constant {\
  color:#811F24;\
}\
\
.ace-dawn .ace_constant.ace_language {\
  \
}\
\
.ace-dawn .ace_constant.ace_library {\
  \
}\
\
.ace-dawn .ace_constant.ace_numeric {\
  \
}\
\
.ace-dawn .ace_invalid {\
  \
}\
\
.ace-dawn .ace_invalid.ace_illegal {\
  text-decoration:underline;\
font-style:italic;\
color:#F8F8F8;\
background-color:#B52A1D;\
}\
\
.ace-dawn .ace_invalid.ace_deprecated {\
  text-decoration:underline;\
font-style:italic;\
color:#B52A1D;\
}\
\
.ace-dawn .ace_support {\
  color:#691C97;\
}\
\
.ace-dawn .ace_support.ace_function {\
  color:#693A17;\
}\
\
.ace-dawn .ace_function.ace_buildin {\
  \
}\
\
.ace-dawn .ace_string {\
  color:#0B6125;\
}\
\
.ace-dawn .ace_string.ace_regexp {\
  color:#CF5628;\
}\
\
.ace-dawn .ace_comment {\
  font-style:italic;\
color:#5A525F;\
}\
\
.ace-dawn .ace_comment.ace_doc {\
  \
}\
\
.ace-dawn .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-dawn .ace_variable {\
  color:#234A97;\
}\
\
.ace-dawn .ace_variable.ace_language {\
  \
}\
\
.ace-dawn .ace_xml_pe {\
  \
}";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-dawn";
});
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/87749d9714f1925e26afa48a0d592eaa39403858@/lib/ace/theme/dawn');