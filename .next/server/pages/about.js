/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "(pages-dir-node)/./components/BookDetails.js":
/*!***********************************!*\
  !*** ./components/BookDetails.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Container,Row!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Button,Col,Container,Row!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"(pages-dir-node)/./store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_3__]);\n([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction BookDetails({ book, workId, showFavouriteBtn = true }) {\n    const [favouritesList, setFavouritesList] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_3__.favouritesAtom);\n    const [showAdded, setShowAdded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"BookDetails.useEffect\": ()=>{\n            setShowAdded(favouritesList.includes(workId));\n        }\n    }[\"BookDetails.useEffect\"], [\n        favouritesList,\n        workId\n    ]);\n    const favouritesClicked = ()=>{\n        if (showAdded) {\n            setFavouritesList((current)=>current.filter((fav)=>fav !== workId));\n            setShowAdded(false);\n        } else {\n            setFavouritesList((current)=>[\n                    ...current,\n                    workId\n                ]);\n            setShowAdded(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                    lg: \"4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            onError: (event)=>{\n                                event.target.onerror = null;\n                                event.target.src = \"https://placehold.co/400x600?text=Cover+Not+Available\";\n                            },\n                            className: \"img-fluid w-100\",\n                            src: `https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`,\n                            alt: \"Cover Image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 38,\n                            columnNumber: 27\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                    lg: \"8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: book?.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        book?.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: typeof book.description === \"string\" ? book.description : book.description.value\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"Characters\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        \"Jean-Baptiste Grenouille, Baldini, Richis, Laure, Madame Gaillard\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 54,\n                            columnNumber: 27\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"Settings\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this),\n                        \"18th Century France, Paris, Grasse, Montpellier\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 58,\n                            columnNumber: 27\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \"More Information\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://en.wikipedia.org/wiki/Perfume_(novel)\",\n                                    target: \"_blank\",\n                                    rel: \"noreferrer\",\n                                    children: \"Wikipedia\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.goodreads.com/book/show/343.Perfume\",\n                                    target: \"_blank\",\n                                    rel: \"noreferrer\",\n                                    children: \"Goodreads\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        showFavouriteBtn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            variant: showAdded ? \"primary\" : \"outline-primary\",\n                            onClick: favouritesClicked,\n                            className: \"mt-3\",\n                            children: showAdded ? \"+ Favourite (added)\" : \"+ Favourite\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\BookDetails.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQm9va0RldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlCO0FBQ1k7QUFDSDtBQUUxQixTQUFTUSxZQUFZLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxtQkFBbUIsSUFBSSxFQUFFO0lBQ3pFLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1QsOENBQU9BLENBQUNHLGtEQUFjQTtJQUNsRSxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQTtpQ0FBQztZQUNOUyxhQUFhSCxlQUFlSSxRQUFRLENBQUNOO1FBQ3pDO2dDQUFHO1FBQUNFO1FBQWdCRjtLQUFPO0lBRTNCLE1BQU1PLG9CQUFvQjtRQUN0QixJQUFJSCxXQUFXO1lBQ1hELGtCQUFrQixDQUFDSyxVQUFZQSxRQUFRQyxNQUFNLENBQUMsQ0FBQ0MsTUFBUUEsUUFBUVY7WUFDL0RLLGFBQWE7UUFDakIsT0FBTztZQUNIRixrQkFBa0IsQ0FBQ0ssVUFBWTt1QkFBSUE7b0JBQVNSO2lCQUFPO1lBQ25ESyxhQUFhO1FBQ2pCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ2Ysc0dBQVNBO2tCQUNOLDRFQUFDQyxnR0FBR0E7OzhCQUNBLDhEQUFDQyxnR0FBR0E7b0JBQUNtQixJQUFHOztzQ0FDSiw4REFBQ0M7NEJBQ0dDLFNBQVMsQ0FBQ0M7Z0NBQ05BLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO2dDQUN2QkYsTUFBTUMsTUFBTSxDQUFDRSxHQUFHLEdBQ1o7NEJBQ1I7NEJBQ0FDLFdBQVU7NEJBQ1ZELEtBQUssQ0FBQyxvQ0FBb0MsRUFBRWxCLE1BQU1vQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0QkFDckVDLEtBQUk7Ozs7OztzQ0FFUiw4REFBQ0M7Ozs7O3NDQUFLLDhEQUFDQTs7Ozs7Ozs7Ozs7OEJBR1gsOERBQUM3QixnR0FBR0E7b0JBQUNtQixJQUFHOztzQ0FDSiw4REFBQ1c7c0NBQUl2QixNQUFNd0I7Ozs7Ozt3QkFDVnhCLE1BQU15Qiw2QkFDSCw4REFBQ0M7c0NBQ0ksT0FBTzFCLEtBQUt5QixXQUFXLEtBQUssV0FDdkJ6QixLQUFLeUIsV0FBVyxHQUNoQnpCLEtBQUt5QixXQUFXLENBQUNFLEtBQUs7Ozs7OztzQ0FHcEMsOERBQUNMOzs7OztzQ0FFRCw4REFBQ007c0NBQUc7Ozs7Ozt3QkFBZTtzQ0FFbkIsOERBQUNOOzs7OztzQ0FBSyw4REFBQ0E7Ozs7O3NDQUVQLDhEQUFDTTtzQ0FBRzs7Ozs7O3dCQUFhO3NDQUVqQiw4REFBQ047Ozs7O3NDQUFLLDhEQUFDQTs7Ozs7c0NBRVAsOERBQUNNO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzs4Q0FDVCw4REFBQ0M7b0NBQ0dDLE1BQUs7b0NBQ0xmLFFBQU87b0NBQ1BnQixLQUFJOzhDQUNQOzs7Ozs7OENBR0QsOERBQUNWOzs7Ozs7Ozs7OztzQ0FFTyw4REFBQ087OzhDQUNULDhEQUFDQztvQ0FDR0MsTUFBSztvQ0FDTGYsUUFBTztvQ0FDUGdCLEtBQUk7OENBQ1A7Ozs7Ozs4Q0FHRCw4REFBQ1Y7Ozs7Ozs7Ozs7O3dCQUdRcEIsa0NBQ0csOERBQUNSLG1HQUFNQTs0QkFDSHVDLFNBQVM1QixZQUFZLFlBQVk7NEJBQ2pDNkIsU0FBUzFCOzRCQUNUVyxXQUFVO3NDQUVUZCxZQUFZLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ3VpbGxcXFdlYnN0b3JtUHJvamVjdHNcXGEyXFxjb21wb25lbnRzXFxCb29rRGV0YWlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmYXZvdXJpdGVzQXRvbSB9IGZyb20gXCJAL3N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzKHsgYm9vaywgd29ya0lkLCBzaG93RmF2b3VyaXRlQnRuID0gdHJ1ZSB9KSB7XG4gICAgY29uc3QgW2Zhdm91cml0ZXNMaXN0LCBzZXRGYXZvdXJpdGVzTGlzdF0gPSB1c2VBdG9tKGZhdm91cml0ZXNBdG9tKTtcbiAgICBjb25zdCBbc2hvd0FkZGVkLCBzZXRTaG93QWRkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U2hvd0FkZGVkKGZhdm91cml0ZXNMaXN0LmluY2x1ZGVzKHdvcmtJZCkpO1xuICAgIH0sIFtmYXZvdXJpdGVzTGlzdCwgd29ya0lkXSk7XG5cbiAgICBjb25zdCBmYXZvdXJpdGVzQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNob3dBZGRlZCkge1xuICAgICAgICAgICAgc2V0RmF2b3VyaXRlc0xpc3QoKGN1cnJlbnQpID0+IGN1cnJlbnQuZmlsdGVyKChmYXYpID0+IGZhdiAhPT0gd29ya0lkKSk7XG4gICAgICAgICAgICBzZXRTaG93QWRkZWQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RmF2b3VyaXRlc0xpc3QoKGN1cnJlbnQpID0+IFsuLi5jdXJyZW50LCB3b3JrSWRdKTtcbiAgICAgICAgICAgIHNldFNob3dBZGRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIGxnPVwiNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9wbGFjZWhvbGQuY28vNDAweDYwMD90ZXh0PUNvdmVyK05vdCtBdmFpbGFibGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtib29rPy5jb3ZlcnM/LlswXX0tTC5qcGdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ292ZXIgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57Ym9vaz8udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2s/LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYm9vay5kZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJvb2suZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBib29rLmRlc2NyaXB0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8aDU+Q2hhcmFjdGVyczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIEplYW4tQmFwdGlzdGUgR3Jlbm91aWxsZSwgQmFsZGluaSwgUmljaGlzLCBMYXVyZSwgTWFkYW1lIEdhaWxsYXJkXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoNT5TZXR0aW5nczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDE4dGggQ2VudHVyeSBGcmFuY2UsIFBhcmlzLCBHcmFzc2UsIE1vbnRwZWxsaWVyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Nb3JlIEluZm9ybWF0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QZXJmdW1lXyhub3ZlbClcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFdpa2lwZWRpYVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vYm9vay9zaG93LzM0My5QZXJmdW1lXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHb29kcmVhZHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Zhdm91cml0ZUJ0biAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17c2hvd0FkZGVkID8gXCJwcmltYXJ5XCIgOiBcIm91dGxpbmUtcHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Zhdm91cml0ZXNDbGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWRkZWQgPyBcIisgRmF2b3VyaXRlIChhZGRlZClcIiA6IFwiKyBGYXZvdXJpdGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQnV0dG9uIiwidXNlQXRvbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmF2b3VyaXRlc0F0b20iLCJCb29rRGV0YWlscyIsImJvb2siLCJ3b3JrSWQiLCJzaG93RmF2b3VyaXRlQnRuIiwiZmF2b3VyaXRlc0xpc3QiLCJzZXRGYXZvdXJpdGVzTGlzdCIsInNob3dBZGRlZCIsInNldFNob3dBZGRlZCIsImluY2x1ZGVzIiwiZmF2b3VyaXRlc0NsaWNrZWQiLCJjdXJyZW50IiwiZmlsdGVyIiwiZmF2IiwibGciLCJpbWciLCJvbkVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbmVycm9yIiwic3JjIiwiY2xhc3NOYW1lIiwiY292ZXJzIiwiYWx0IiwiYnIiLCJoMyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwIiwidmFsdWUiLCJoNSIsInNwYW4iLCJhIiwiaHJlZiIsInJlbCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/BookDetails.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNav */ \"(pages-dir-node)/./components/MainNav.js\");\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js\");\n\n\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\Layout.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\Layout.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\Layout.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\Layout.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNZO0FBRTdCLFNBQVNFLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLHFCQUNJOzswQkFDSSw4REFBQ0gsZ0RBQU9BOzs7OzswQkFDUiw4REFBQ0k7Ozs7OzBCQUNELDhEQUFDSCx1RkFBU0E7MEJBQ0xFOzs7Ozs7MEJBRUwsOERBQUNDOzs7Ozs7O0FBR2IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ3VpbGxcXFdlYnN0b3JtUHJvamVjdHNcXGEyXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5OYXYgZnJvbSBcIi4vTWFpbk5hdlwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNYWluTmF2IC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNYWluTmF2IiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJiciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Layout.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainNav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js\");\n\n\n\nfunction MainNav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n        className: \"fixed-top navbar-dark bg-primary\",\n        expand: \"lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                    as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                    href: \"/\",\n                    children: \"Guillermo Torrez\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {\n                    \"aria-controls\": \"basic-navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {\n                    id: \"basic-navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        className: \"me-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n                                lineNumber: 12,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                href: \"/favourites\",\n                                children: \"Favourites\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n                                lineNumber: 13,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\MainNav.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTWFpbk5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQzRCO0FBRTFDLFNBQVNJO0lBQ3BCLHFCQUNJLDhEQUFDSCwrRkFBTUE7UUFBQ0ksV0FBVTtRQUFtQ0MsUUFBTztrQkFDeEQsNEVBQUNKLGtHQUFTQTs7OEJBQ04sOERBQUNELCtGQUFNQSxDQUFDTSxLQUFLO29CQUFDQyxJQUFJUixrREFBSUE7b0JBQUVTLE1BQUs7OEJBQUk7Ozs7Ozs4QkFDakMsOERBQUNSLCtGQUFNQSxDQUFDUyxNQUFNO29CQUFDQyxpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ1YsK0ZBQU1BLENBQUNXLFFBQVE7b0JBQUNDLElBQUc7OEJBQ2hCLDRFQUFDViw0RkFBR0E7d0JBQUNFLFdBQVU7OzBDQUNYLDhEQUFDRiw0RkFBR0EsQ0FBQ0gsSUFBSTtnQ0FBQ1EsSUFBSVIsa0RBQUlBO2dDQUFFUyxNQUFLOzBDQUFTOzs7Ozs7MENBQ2xDLDhEQUFDTiw0RkFBR0EsQ0FBQ0gsSUFBSTtnQ0FBQ1EsSUFBSVIsa0RBQUlBO2dDQUFFUyxNQUFLOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9EIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGd1aWxsXFxXZWJzdG9ybVByb2plY3RzXFxhMlxcY29tcG9uZW50c1xcTWFpbk5hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTmF2YmFyLCBDb250YWluZXIsIE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5OYXYoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJmaXhlZC10b3AgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiIGV4cGFuZD1cImxnXCI+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgYXM9e0xpbmt9IGhyZWY9XCIvXCI+R3VpbGxlcm1vIFRvcnJlejwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9mYXZvdXJpdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmF2b3VyaXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJNYWluTmF2IiwiY2xhc3NOYW1lIiwiZXhwYW5kIiwiQnJhbmQiLCJhcyIsImhyZWYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/MainNav.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/PageHeader.js":
/*!**********************************!*\
  !*** ./components/PageHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageHeader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ \"(pages-dir-node)/./node_modules/react-bootstrap/cjs/Card.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PageHeader({ text, subtext }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"bg-light p-3 shadow-sm mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-0\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\PageHeader.js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this),\n                    subtext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"text-muted\",\n                        children: subtext\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\PageHeader.js\",\n                        lineNumber: 8,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\PageHeader.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\components\\\\PageHeader.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvUGFnZUhlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0MsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUNoRCxxQkFDSTs7MEJBQ0ksOERBQUNILDZEQUFJQTtnQkFBQ0ksV0FBVTs7a0NBQ1osOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFRRjs7Ozs7O29CQUNyQkMseUJBQVcsOERBQUNHO3dCQUFNRixXQUFVO2tDQUFjRDs7Ozs7Ozs7Ozs7OzBCQUUvQyw4REFBQ0k7Ozs7Ozs7QUFHYiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxndWlsbFxcV2Vic3Rvcm1Qcm9qZWN0c1xcYTJcXGNvbXBvbmVudHNcXFBhZ2VIZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoeyB0ZXh0LCBzdWJ0ZXh0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctbGlnaHQgcC0zIHNoYWRvdy1zbSBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTBcIj57dGV4dH08L2gxPlxuICAgICAgICAgICAgICAgIHtzdWJ0ZXh0ICYmIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3N1YnRleHR9PC9zbWFsbD59XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiUGFnZUhlYWRlciIsInRleHQiLCJzdWJ0ZXh0IiwiY2xhc3NOYW1lIiwiaDEiLCJzbWFsbCIsImJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/PageHeader.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\about.js */ \"(pages-dir-node)/./pages/about.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_about_js__WEBPACK_IMPORTED_MODULE_5__]);\n([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_about_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_about_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/about\",\n        pathname: \"/about\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_about_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/about\",\n    config,\n    userland: _pages_about_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZhYm91dCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYWJvdXQuanMmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Y7QUFDaEM7QUFDRTtBQUMxRDtBQUN5RDtBQUNWO0FBQy9DO0FBQzhDO0FBQ2tDO0FBQ2hGO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0Q0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyw0Q0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsNENBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsNENBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyw0Q0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUN6RDtBQUNPLHdCQUF3QixrR0FBZ0I7QUFDL0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFvQyxJQUFJLENBQUU7QUFDdkQsd0JBQXdCLE1BQXVDO0FBQy9EO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixtRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDO0FBQ00sZ0JBQWdCLDhGQUFVO0FBQ2pDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFib3V0LmpzXCI7XG5pbXBvcnQgeyBnZXRIYW5kbGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9wYWdlcy1oYW5kbGVyXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U2VydmVyU2lkZVByb3BzJyk7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgJ3JlcG9ydFdlYlZpdGFscycpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclByb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi9hYm91dFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYWJvdXRcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBkaXN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfRElTVF9ESVIgfHwgJycsXG4gICAgcmVsYXRpdmVQcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAvLyBkZWZhdWx0IGV4cG9ydCBtaWdodCBub3QgZXhpc3Qgd2hlbiBvcHRpbWl6ZWQgZm9yIGRhdGEgb25seVxuICAgICAgICBBcHA6IGFwcC5kZWZhdWx0LFxuICAgICAgICBEb2N1bWVudDogZG9jdW1lbnQuZGVmYXVsdFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBnZXRIYW5kbGVyKHtcbiAgICBzcmNQYWdlOiBcIi9hYm91dFwiLFxuICAgIGNvbmZpZyxcbiAgICB1c2VybGFuZCxcbiAgICByb3V0ZU1vZHVsZSxcbiAgICBnZXRTdGF0aWNQYXRocyxcbiAgICBnZXRTdGF0aWNQcm9wcyxcbiAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(pages-dir-node)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"(pages-dir-node)/./components/Layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);\nswr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst fetcher = async (...args)=>{\n    const response = await fetch(...args);\n    if (!response.ok) {\n        throw new Error(`Request failed with status: ${response.status}`);\n    }\n    return response.json();\n};\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n        value: {\n            fetcher\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_app.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_app.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQjtBQUNMO0FBQ1Q7QUFFaEMsTUFBTUUsVUFBVSxPQUFPLEdBQUdDO0lBQ3RCLE1BQU1DLFdBQVcsTUFBTUMsU0FBU0Y7SUFDaEMsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7UUFDZCxNQUFNLElBQUlDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRUgsU0FBU0ksTUFBTSxFQUFFO0lBQ3BFO0lBQ0EsT0FBT0osU0FBU0ssSUFBSTtBQUN4QjtBQUVBLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQ0ksOERBQUNYLDBDQUFTQTtRQUFDWSxPQUFPO1lBQUVYO1FBQVE7a0JBQ3hCLDRFQUFDRiwwREFBTUE7c0JBQ0gsNEVBQUNXO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxndWlsbFxcV2Vic3Rvcm1Qcm9qZWN0c1xcYTJcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJztcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNXUkNvbmZpZyB2YWx1ZT17eyBmZXRjaGVyIH19PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9TV1JDb25maWc+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU1dSQ29uZmlnIiwiZmV0Y2hlciIsImFyZ3MiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_document.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_document.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_document.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_document.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\_document.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkQ7QUFFOUMsU0FBU0k7SUFDdEIscUJBQ0UsOERBQUNKLCtDQUFJQTtRQUFDSyxNQUFLOzswQkFDVCw4REFBQ0osK0NBQUlBOzs7OzswQkFDTCw4REFBQ0s7O2tDQUNDLDhEQUFDSiwrQ0FBSUE7Ozs7O2tDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGd1aWxsXFxXZWJzdG9ybVByb2plY3RzXFxhMlxccGFnZXNcXF9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8SGVhZCAvPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJEb2N1bWVudCIsImxhbmciLCJib2R5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PageHeader */ \"(pages-dir-node)/./components/PageHeader.js\");\n/* harmony import */ var _components_BookDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BookDetails */ \"(pages-dir-node)/./components/BookDetails.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_BookDetails__WEBPACK_IMPORTED_MODULE_2__]);\n_components_BookDetails__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction About({ book }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"About the Developer: Guillermo Torrez\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\about.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Hello! My name is Guillermo, and I am learning Web Development using Next.js and React. Currently, I am working as a swim instructor and lifeguard.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\about.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    'One of my favorite books is \"',\n                    book.title,\n                    '\".'\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\about.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                book: book\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\about.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guill\\\\WebstormProjects\\\\a2\\\\pages\\\\about.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\nasync function getStaticProps() {\n    const res = await fetch(\"https://openlibrary.org/works/OL10834W.json\");\n    const data = await res.json();\n    return {\n        props: {\n            book: data\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2Fib3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDRTtBQUVwQyxTQUFTRSxNQUFNLEVBQUVDLElBQUksRUFBRTtJQUNsQyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDSiw4REFBVUE7Z0JBQUNLLE1BQUs7Ozs7OzswQkFFakIsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNBOztvQkFBRTtvQkFBOEJILEtBQUtJLEtBQUs7b0JBQUM7Ozs7Ozs7MEJBRTVDLDhEQUFDTiwrREFBV0E7Z0JBQUNFLE1BQU1BOzs7Ozs7Ozs7Ozs7QUFHL0I7QUFFTyxlQUFlSztJQUNsQixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLE9BQU87UUFDSEMsT0FBTztZQUNIVixNQUFNUTtRQUNWO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxndWlsbFxcV2Vic3Rvcm1Qcm9qZWN0c1xcYTJcXHBhZ2VzXFxhYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZWFkZXJcIjtcbmltcG9ydCBCb29rRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL0Jvb2tEZXRhaWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHsgYm9vayB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYWdlSGVhZGVyIHRleHQ9XCJBYm91dCB0aGUgRGV2ZWxvcGVyOiBHdWlsbGVybW8gVG9ycmV6XCIgLz5cblxuICAgICAgICAgICAgPHA+SGVsbG8hIE15IG5hbWUgaXMgR3VpbGxlcm1vLCBhbmQgSSBhbSBsZWFybmluZyBXZWIgRGV2ZWxvcG1lbnQgdXNpbmcgTmV4dC5qcyBhbmQgUmVhY3QuIEN1cnJlbnRseSwgSSBhbSB3b3JraW5nIGFzIGEgc3dpbSBpbnN0cnVjdG9yIGFuZCBsaWZlZ3VhcmQuPC9wPlxuICAgICAgICAgICAgPHA+T25lIG9mIG15IGZhdm9yaXRlIGJvb2tzIGlzIFwie2Jvb2sudGl0bGV9XCIuPC9wPlxuXG4gICAgICAgICAgICA8Qm9va0RldGFpbHMgYm9vaz17Ym9va30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcvd29ya3MvT0wxMDgzNFcuanNvblwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBib29rOiBkYXRhLFxuICAgICAgICB9LFxuICAgIH07XG59XG4iXSwibmFtZXMiOlsiUGFnZUhlYWRlciIsIkJvb2tEZXRhaWxzIiwiQWJvdXQiLCJib29rIiwiZGl2IiwidGV4dCIsInAiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/about.js\n");

/***/ }),

/***/ "(pages-dir-node)/./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   favouritesAtom: () => (/* binding */ favouritesAtom)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst favouritesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZCO0FBRXRCLE1BQU1DLGlCQUFpQkQsMkNBQUlBLENBQUMsRUFBRSxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGd1aWxsXFxXZWJzdG9ybVByb2plY3RzXFxhMlxcc3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJqb3RhaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdm91cml0ZXNBdG9tID0gYXRvbShbXSk7XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwiZmF2b3VyaXRlc0F0b20iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Button,Col,Container,Row!=!./node_modules/react-bootstrap/cjs/index.js":
/*!********************************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Col,Container,Row!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** __barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_guill_WebstormProjects_a2_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useCallbackRef":
/*!************************************************!*\
  !*** external "@restart/hooks/useCallbackRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useCallbackRef");

/***/ }),

/***/ "@restart/hooks/useCommittedRef":
/*!*************************************************!*\
  !*** external "@restart/hooks/useCommittedRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useCommittedRef");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useIsomorphicEffect":
/*!*****************************************************!*\
  !*** external "@restart/hooks/useIsomorphicEffect" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useIsomorphicEffect");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/hooks/useTimeout":
/*!********************************************!*\
  !*** external "@restart/hooks/useTimeout" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useTimeout");

/***/ }),

/***/ "@restart/hooks/useUpdateEffect":
/*!*************************************************!*\
  !*** external "@restart/hooks/useUpdateEffect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useUpdateEffect");

/***/ }),

/***/ "@restart/hooks/useWillUnmount":
/*!************************************************!*\
  !*** external "@restart/hooks/useWillUnmount" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useWillUnmount");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Button":
/*!*************************************!*\
  !*** external "@restart/ui/Button" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Button");

/***/ }),

/***/ "@restart/ui/Dropdown":
/*!***************************************!*\
  !*** external "@restart/ui/Dropdown" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Dropdown");

/***/ }),

/***/ "@restart/ui/DropdownContext":
/*!**********************************************!*\
  !*** external "@restart/ui/DropdownContext" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownContext");

/***/ }),

/***/ "@restart/ui/DropdownItem":
/*!*******************************************!*\
  !*** external "@restart/ui/DropdownItem" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownItem");

/***/ }),

/***/ "@restart/ui/DropdownMenu":
/*!*******************************************!*\
  !*** external "@restart/ui/DropdownMenu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownMenu");

/***/ }),

/***/ "@restart/ui/DropdownToggle":
/*!*********************************************!*\
  !*** external "@restart/ui/DropdownToggle" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownToggle");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/NoopTransition":
/*!*********************************************!*\
  !*** external "@restart/ui/NoopTransition" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NoopTransition");

/***/ }),

/***/ "@restart/ui/Overlay":
/*!**************************************!*\
  !*** external "@restart/ui/Overlay" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Overlay");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "@restart/ui/TabContext":
/*!*****************************************!*\
  !*** external "@restart/ui/TabContext" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/TabContext");

/***/ }),

/***/ "@restart/ui/TabPanel":
/*!***************************************!*\
  !*** external "@restart/ui/TabPanel" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/TabPanel");

/***/ }),

/***/ "@restart/ui/Tabs":
/*!***********************************!*\
  !*** external "@restart/ui/Tabs" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Tabs");

/***/ }),

/***/ "@restart/ui/ssr":
/*!**********************************!*\
  !*** external "@restart/ui/ssr" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ssr");

/***/ }),

/***/ "@restart/ui/utils":
/*!************************************!*\
  !*** external "@restart/ui/utils" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/utils");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/addEventListener":
/*!***********************************************!*\
  !*** external "dom-helpers/addEventListener" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addEventListener");

/***/ }),

/***/ "dom-helpers/canUseDOM":
/*!****************************************!*\
  !*** external "dom-helpers/canUseDOM" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/canUseDOM");

/***/ }),

/***/ "dom-helpers/contains":
/*!***************************************!*\
  !*** external "dom-helpers/contains" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/contains");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/hasClass":
/*!***************************************!*\
  !*** external "dom-helpers/hasClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ "dom-helpers/ownerDocument":
/*!********************************************!*\
  !*** external "dom-helpers/ownerDocument" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/removeEventListener":
/*!**************************************************!*\
  !*** external "dom-helpers/removeEventListener" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeEventListener");

/***/ }),

/***/ "dom-helpers/scrollbarSize":
/*!********************************************!*\
  !*** external "dom-helpers/scrollbarSize" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/scrollbarSize");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("invariant");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("warning");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/@babel","vendor-chunks/bootstrap"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fabout&preferredRegion=&absolutePagePath=.%2Fpages%5Cabout.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();