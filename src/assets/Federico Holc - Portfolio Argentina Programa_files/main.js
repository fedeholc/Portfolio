"use strict";
(self["webpackChunktestcrud"] = self["webpackChunktestcrud"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
// { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./educacion/educacion.component */ 755);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _trabajo_trabajo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trabajo/trabajo.component */ 4353);
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyectos/proyectos.component */ 3483);
/* harmony import */ var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idiomas/idiomas.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 3482);









class AppComponent {
    constructor() {
        this.title = 'testcrud';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 0, consts: [["id", "todo", 1, "container", "border-0", "p-5", "border-warning", 2, "margin-top", "20px", "margin-bottom", "50px"], [1, "row", "justify-content-center"], [1, "col"], [1, "col", 2, "max-width", "1000px"], [1, "p-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 1)(6, "div", 3)(7, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-educacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 1)(15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 1)(20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "app-proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 1)(25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "app-idiomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 1)(30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Cargando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, dependencies: [_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_0__.EducacionComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _trabajo_trabajo_component__WEBPACK_IMPORTED_MODULE_3__.TrabajoComponent, _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__.ProyectosComponent, _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_5__.IdiomasComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.service */ 7936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./educacion/educacion.component */ 755);
/* harmony import */ var _educacion_educacion_items_list_educacion_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./educacion/educacion-items-list/educacion-items-list.component */ 6135);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth.service */ 8915);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _educacion_educacion_update_form_educacion_update_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./educacion/educacion-update-form/educacion-update-form.component */ 9887);
/* harmony import */ var _educacion_educacion_add_item_form_educacion_add_item_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./educacion/educacion-add-item-form/educacion-add-item-form.component */ 5649);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _trabajo_trabajo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trabajo/trabajo.component */ 4353);
/* harmony import */ var _trabajo_trabajo_items_list_trabajo_items_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trabajo/trabajo-items-list/trabajo-items-list.component */ 3388);
/* harmony import */ var _trabajo_trabajo_add_item_form_trabajo_add_item_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trabajo/trabajo-add-item-form/trabajo-add-item-form.component */ 3488);
/* harmony import */ var _trabajo_trabajo_update_form_trabajo_update_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trabajo/trabajo-update-form/trabajo-update-form.component */ 1525);
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./proyectos/proyectos.component */ 3483);
/* harmony import */ var _proyectos_proyectos_add_item_form_proyectos_add_item_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./proyectos/proyectos-add-item-form/proyectos-add-item-form.component */ 2013);
/* harmony import */ var _proyectos_proyectos_update_form_proyectos_update_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./proyectos/proyectos-update-form/proyectos-update-form.component */ 1104);
/* harmony import */ var _proyectos_proyectos_items_list_proyectos_items_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./proyectos/proyectos-items-list/proyectos-items-list.component */ 7961);
/* harmony import */ var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./idiomas/idiomas.component */ 9671);
/* harmony import */ var _idiomas_idiomas_add_item_form_idiomas_add_item_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./idiomas/idiomas-add-item-form/idiomas-add-item-form.component */ 5855);
/* harmony import */ var _idiomas_idiomas_items_list_idiomas_items_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./idiomas/idiomas-items-list/idiomas-items-list.component */ 1768);
/* harmony import */ var _idiomas_idiomas_update_form_idiomas_update_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./idiomas/idiomas-update-form/idiomas-update-form.component */ 4981);
/* harmony import */ var _skills_skills_update_form_skills_update_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./skills/skills-update-form/skills-update-form.component */ 8458);
/* harmony import */ var _skills_skills_items_list_skills_items_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./skills/skills-items-list/skills-items-list.component */ 2062);
/* harmony import */ var _skills_skills_add_item_form_skills_add_item_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./skills/skills-add-item-form/skills-add-item-form.component */ 7363);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _header_header_update_form_header_update_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./header/header-update-form/header-update-form.component */ 7030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 2560);








































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService, _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.firebase),
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_34__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_35__.AngularFirestoreModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_36__.AngularFireStorageModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_37__.AngularFireDatabaseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _educacion_educacion_component__WEBPACK_IMPORTED_MODULE_3__.EducacionComponent,
        _educacion_educacion_items_list_educacion_items_list_component__WEBPACK_IMPORTED_MODULE_4__.EducacionItemsList,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.NavbarComponent,
        _educacion_educacion_update_form_educacion_update_form_component__WEBPACK_IMPORTED_MODULE_8__.EducacionUpdateForm,
        _educacion_educacion_add_item_form_educacion_add_item_form_component__WEBPACK_IMPORTED_MODULE_9__.EducacionAddItemForm,
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__.SkillsComponent,
        _trabajo_trabajo_component__WEBPACK_IMPORTED_MODULE_11__.TrabajoComponent,
        _trabajo_trabajo_items_list_trabajo_items_list_component__WEBPACK_IMPORTED_MODULE_12__.TrabajoItemsListComponent,
        _trabajo_trabajo_add_item_form_trabajo_add_item_form_component__WEBPACK_IMPORTED_MODULE_13__.TrabajoAddItemFormComponent,
        _trabajo_trabajo_update_form_trabajo_update_form_component__WEBPACK_IMPORTED_MODULE_14__.TrabajoUpdateFormComponent,
        _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_15__.ProyectosComponent,
        _proyectos_proyectos_add_item_form_proyectos_add_item_form_component__WEBPACK_IMPORTED_MODULE_16__.ProyectosAddItemFormComponent,
        _proyectos_proyectos_update_form_proyectos_update_form_component__WEBPACK_IMPORTED_MODULE_17__.ProyectosUpdateFormComponent,
        _proyectos_proyectos_items_list_proyectos_items_list_component__WEBPACK_IMPORTED_MODULE_18__.ProyectosItemsListComponent,
        _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_19__.IdiomasComponent,
        _idiomas_idiomas_add_item_form_idiomas_add_item_form_component__WEBPACK_IMPORTED_MODULE_20__.IdiomasAddItemFormComponent,
        _idiomas_idiomas_items_list_idiomas_items_list_component__WEBPACK_IMPORTED_MODULE_21__.IdiomasItemsListComponent,
        _idiomas_idiomas_update_form_idiomas_update_form_component__WEBPACK_IMPORTED_MODULE_22__.IdiomasUpdateFormComponent,
        _skills_skills_update_form_skills_update_form_component__WEBPACK_IMPORTED_MODULE_23__.SkillsUpdateFormComponent,
        _skills_skills_items_list_skills_items_list_component__WEBPACK_IMPORTED_MODULE_24__.SkillsItemsListComponent,
        _skills_skills_add_item_form_skills_add_item_form_component__WEBPACK_IMPORTED_MODULE_25__.SkillsAddItemFormComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__.FooterComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_27__.HeaderComponent,
        _header_header_update_form_header_update_form_component__WEBPACK_IMPORTED_MODULE_28__.HeaderUpdateFormComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_33__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_34__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_35__.AngularFirestoreModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_36__.AngularFireStorageModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_37__.AngularFireDatabaseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModule] }); })();


/***/ }),

/***/ 5649:
/*!****************************************************************************************!*\
  !*** ./src/app/educacion/educacion-add-item-form/educacion-add-item-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducacionAddItemForm": () => (/* binding */ EducacionAddItemForm)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






function EducacionAddItemForm_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar t\u00EDtulo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El t\u00EDtulo debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducacionAddItemForm_ng_template_0_div_14_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducacionAddItemForm_ng_template_0_div_14_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function EducacionAddItemForm_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar instituci\u00F3n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La instituci\u00F3n debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducacionAddItemForm_ng_template_0_div_20_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducacionAddItemForm_ng_template_0_div_20_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function EducacionAddItemForm_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar per\u00EDodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El per\u00EDodo debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducacionAddItemForm_ng_template_0_div_26_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducacionAddItemForm_ng_template_0_div_26_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
} }
function EducacionAddItemForm_ng_template_0_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducacionAddItemForm_ng_template_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducacionAddItemForm_ng_template_0_div_32_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducacionAddItemForm_ng_template_0_div_32_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EducacionAddItemForm_ng_template_0_div_32_div_3_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["pattern"]);
} }
function EducacionAddItemForm_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Educaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducacionAddItemForm_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "T\u00EDtulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EducacionAddItemForm_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.portfolioNewItem.titulo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EducacionAddItemForm_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15)(16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Instituci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EducacionAddItemForm_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.portfolioNewItem.institucion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EducacionAddItemForm_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19)(22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Per\u00EDodo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EducacionAddItemForm_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.portfolioNewItem.periodo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EducacionAddItemForm_ng_template_0_div_26_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enlace a la imagen de la instituci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EducacionAddItemForm_ng_template_0_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.portfolioNewItem.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EducacionAddItemForm_ng_template_0_div_32_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28)(36, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducacionAddItemForm_ng_template_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.addItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducacionAddItemForm_ng_template_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.cancelAddItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioNewItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class EducacionAddItemForm {
    //ese logo por default cambiarlo luego
    constructor(modalService) {
        this.modalService = modalService;
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.portfolioNewItem = {
            id: 0,
            titulo: '',
            institucion: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
            periodo: '',
        };
    }
    ngOnInit() { }
    // revisar si algo de esto vale la pena
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    addItem() {
        this.onAddItem.emit(this.portfolioNewItem);
        this.portfolioNewItem = {
            id: 0,
            titulo: '',
            institucion: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
            periodo: '',
        };
        this.modalService.dismissAll('guardar');
    }
    cancelAddItem() {
        this.portfolioNewItem = {
            id: 0,
            titulo: '',
            institucion: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
            periodo: '',
        };
        this.modalService.dismissAll('cancelar');
    }
}
EducacionAddItemForm.ɵfac = function EducacionAddItemForm_Factory(t) { return new (t || EducacionAddItemForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
EducacionAddItemForm.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducacionAddItemForm, selectors: [["app-educacion-add-item-form"]], outputs: { onAddItem: "onAddItem" }, decls: 6, vars: 0, consts: [["modalAddPortfolio", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", "me-1", 3, "click"], [1, "fa", "fa-plus"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "container"], [1, "row"], [1, "col-md-12", "p-2"], ["for", "idTitulo"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "eTitulo", "id", "idTitulo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["titulo", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "col-md-8", "p-2"], ["for", "idInstitucion"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "eInstitucion", "id", "idInstitucion", 1, "form-control", 3, "ngModel", "ngModelChange"], ["insti", "ngModel"], [1, "col-md-4", "p-2"], ["for", "idPeriodo"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "ePeriodo", "id", "idPeriodo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["periodo", "ngModel"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de la instituci\u00F3n.", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function EducacionAddItemForm_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EducacionAddItemForm_ng_template_0_Template, 40, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducacionAddItemForm_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0Agregar\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYWNpb24tYWRkLWl0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6135:
/*!**********************************************************************************!*\
  !*** ./src/app/educacion/educacion-items-list/educacion-items-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducacionItemsList": () => (/* binding */ EducacionItemsList)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _educacion_update_form_educacion_update_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../educacion-update-form/educacion-update-form.component */ 9887);








function EducacionItemsList_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "app-educacion-update-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onUpdateItem", function EducacionItemsList_div_10_Template_app_educacion_update_form_onUpdateItem_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EducacionItemsList_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onDelete(ctx_r3.portfolioItem)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("portfolioItemUpdate", ctx_r0.portfolioItem);
} }
class EducacionItemsList {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.portfolioItem = {
            id: 0,
            titulo: '',
            institucion: '',
            periodo: '',
            logo: '',
        };
        //ojo, ese modifica no lleva a ningun lado,
        //probar poner el modifica como está el delete con el emitter
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.misdatosPortfolioList = [];
        this.editando = false;
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getEducacion).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    onDelete(item) {
        this.onDeleteItem.emit(item);
    }
    onUpdate(itemPortfolio) {
        // lo que sigue acutaliza esta vista con el item
        // tal como estaba  antes de su cancelacion porque
        // sino con el binding tiene guardada la modificacion
        this.portfolioItem = itemPortfolio;
        this.onUpdateItem.emit(itemPortfolio);
    }
}
EducacionItemsList.ɵfac = function EducacionItemsList_Factory(t) { return new (t || EducacionItemsList)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
EducacionItemsList.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EducacionItemsList, selectors: [["app-educacion-items-list"]], inputs: { portfolioItem: "portfolioItem" }, outputs: { onDeleteItem: "onDeleteItem", onUpdateItem: "onUpdateItem" }, decls: 11, vars: 5, consts: [[1, "row", "p-3", "d-flex"], [1, "col-md-2", "p-0", "justify-content-center", "text-center"], ["alt", "logo", "height", "90", "width", "90", 2, "border-radius", "50%", 3, "src"], [1, "col-md-8", "p-0"], [2, "color", "rgba(0, 0, 0, 0.75)"], ["class", "col-md-2 pe-3 pt-3", "style", "text-align: right", 4, "ngIf"], [1, "col-md-2", "pe-3", "pt-3", 2, "text-align", "right"], [1, "btn-edit"], ["ngbTooltip", "Editar \u00EDtem", 3, "portfolioItemUpdate", "onUpdateItem"], ["ngbTooltip", "Borrar \u00EDtem", 1, "pointer", "miboton-der", 3, "click"], [1, "fa", "fa-trash"]], template: function EducacionItemsList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EducacionItemsList_div_10_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.portfolioItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.periodo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.institucion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _educacion_update_form_educacion_update_form_component__WEBPACK_IMPORTED_MODULE_3__.EducacionUpdateForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYWNpb24taXRlbXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9887:
/*!************************************************************************************!*\
  !*** ./src/app/educacion/educacion-update-form/educacion-update-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducacionUpdateForm": () => (/* binding */ EducacionUpdateForm)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ 7936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function EducacionUpdateForm_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar t\u00EDtulo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El t\u00EDtulo debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EducacionUpdateForm_ng_template_0_div_14_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EducacionUpdateForm_ng_template_0_div_14_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function EducacionUpdateForm_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar instituci\u00F3n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La instituci\u00F3n debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EducacionUpdateForm_ng_template_0_div_20_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EducacionUpdateForm_ng_template_0_div_20_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function EducacionUpdateForm_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar per\u00EDodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El per\u00EDodo debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EducacionUpdateForm_ng_template_0_div_26_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EducacionUpdateForm_ng_template_0_div_26_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
} }
function EducacionUpdateForm_ng_template_0_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EducacionUpdateForm_ng_template_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EducacionUpdateForm_ng_template_0_div_32_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EducacionUpdateForm_ng_template_0_div_32_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EducacionUpdateForm_ng_template_0_div_32_div_3_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["pattern"]);
} }
function EducacionUpdateForm_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EducacionUpdateForm_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "T\u00EDtulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EducacionUpdateForm_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.portfolioItemUpdate.titulo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EducacionUpdateForm_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 15)(16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Instituci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EducacionUpdateForm_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.portfolioItemUpdate.institucion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EducacionUpdateForm_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 19)(22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Per\u00EDodo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EducacionUpdateForm_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.portfolioItemUpdate.periodo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EducacionUpdateForm_ng_template_0_div_26_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Enlace a la imagen de la instituci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EducacionUpdateForm_ng_template_0_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.portfolioItemUpdate.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EducacionUpdateForm_ng_template_0_div_32_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 28)(36, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EducacionUpdateForm_ng_template_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.saveUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EducacionUpdateForm_ng_template_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.cancelUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class EducacionUpdateForm {
    constructor(datosPortfolio, modalService) {
        this.datosPortfolio = datosPortfolio;
        this.modalService = modalService;
        this.portfolioItemUpdate = {
            id: 0,
            titulo: '',
            institucion: '',
            periodo: '',
            logo: '',
        };
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.portfolioOriginalItem = {
            id: 0,
            titulo: '',
            institucion: '',
            periodo: '',
            logo: '',
        };
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getEducacion).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
    }
    saveUpdate() {
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        this.modalService.dismissAll();
    }
    cancelUpdate() {
        this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
            this.onUpdateItem.emit(this.portfolioItemUpdate);
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
EducacionUpdateForm.ɵfac = function EducacionUpdateForm_Factory(t) { return new (t || EducacionUpdateForm)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
EducacionUpdateForm.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EducacionUpdateForm, selectors: [["app-educacion-update-form"]], inputs: { portfolioItemUpdate: "portfolioItemUpdate" }, outputs: { onUpdateItem: "onUpdateItem" }, decls: 6, vars: 0, consts: [["content", ""], [1, "pointer", "miboton-izq", 3, "click"], [1, "fa", "fa-pen"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "container"], [1, "row"], [1, "col-md-12", "p-2"], ["for", "idTitulo"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "eTitulo", "id", "idTitulo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["titulo", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "col-md-8", "p-2"], ["for", "idInstitucion"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "eInstitucion", "id", "idInstitucion", 1, "form-control", 3, "ngModel", "ngModelChange"], ["insti", "ngModel"], [1, "col-md-4", "p-2"], ["for", "idPeriodo"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "ePeriodo", "id", "idPeriodo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["periodo", "ngModel"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de la instituci\u00F3n.", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function EducacionUpdateForm_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EducacionUpdateForm_ng_template_0_Template, 40, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EducacionUpdateForm_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYWNpb24tdXBkYXRlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 755:
/*!**************************************************!*\
  !*** ./src/app/educacion/educacion.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducacionComponent": () => (/* binding */ EducacionComponent)
/* harmony export */ });
/* harmony import */ var _restaurar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../restaurar */ 2772);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rutas-api */ 1167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _educacion_items_list_educacion_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./educacion-items-list/educacion-items-list.component */ 6135);
/* harmony import */ var _educacion_add_item_form_educacion_add_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./educacion-add-item-form/educacion-add-item-form.component */ 5649);








function EducacionComponent_app_educacion_items_list_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-educacion-items-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDeleteItem", function EducacionComponent_app_educacion_items_list_6_Template_app_educacion_items_list_onDeleteItem_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const itemPortfolio_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteItem(itemPortfolio_r2)); })("onUpdateItem", function EducacionComponent_app_educacion_items_list_6_Template_app_educacion_items_list_onUpdateItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.updateItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cargando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPortfolio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("portfolioItem", itemPortfolio_r2);
} }
function EducacionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EducacionComponent_div_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.restaurar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0\u00A0Restaurar\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-educacion-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAddItem", function EducacionComponent_div_7_Template_app_educacion_add_item_form_onAddItem_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.addItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
class EducacionComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.getEducacion).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    addItem(itemPortfolio) {
        this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.postEducacion, itemPortfolio).subscribe((item) => {
            this.misdatosPortfolioList.push(item);
        });
    }
    updateItem(itemPortfolio) {
        this.datosPortfolio.updateItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.putEducacion, itemPortfolio).subscribe((item) => {
        });
    }
    deleteItem(itemPortfolio) {
        this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.delEducacion, itemPortfolio).subscribe(() => {
            this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element) => {
                return element.id !== itemPortfolio.id;
            });
        });
    }
    restaurar() {
        this.misdatosPortfolioList.forEach((element, index) => {
            this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.delEducacion, element).subscribe(() => {
            });
        });
        this.misdatosPortfolioList.splice(0);
        _restaurar__WEBPACK_IMPORTED_MODULE_0__.Restaurar.educacion.forEach((element, index) => {
            this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_1__.ApiEndPoint.postEducacion, element).subscribe((item) => {
                this.misdatosPortfolioList.push(item);
            });
        });
    }
}
EducacionComponent.ɵfac = function EducacionComponent_Factory(t) { return new (t || EducacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
EducacionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EducacionComponent, selectors: [["app-educacion"]], decls: 8, vars: 2, consts: [[1, "card", "mat-card", 2, "border", "1px solid #5aaee8"], [1, "card", "card-title", "border-0", "bg-light", "ps-3", "p-1", "pt-2", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"], [2, "color", "#47397b"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem", 4, "ngFor", "ngForOf"], ["class", "card-footer pe-3", "style", "border-top: 1px solid #5aaee8; background-color: white", 4, "ngIf"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem"], [1, "card-footer", "pe-3", 2, "border-top", "1px solid #5aaee8", "background-color", "white"], [2, "text-align", "right"], ["type", "button", 1, "btn-edit", "me-2", "p-1", "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-undo"], [3, "onAddItem"]], template: function EducacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EducacionComponent_app_educacion_items_list_6_Template, 2, 1, "app-educacion-items-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, EducacionComponent_div_7_Template, 7, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.misdatosPortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _educacion_items_list_educacion_items_list_component__WEBPACK_IMPORTED_MODULE_4__.EducacionItemsList, _educacion_add_item_form_educacion_add_item_form_component__WEBPACK_IMPORTED_MODULE_5__.EducacionAddItemForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYWNpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "text-center", "text-lg-start", 2, "width", "100%", "bottom", "0", "background-color", "#5aaee8", "color", "white"], [1, "text-center", "p-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2022 - Federico Holc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7030:
/*!***************************************************************************!*\
  !*** ./src/app/header/header-update-form/header-update-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderUpdateFormComponent": () => (/* binding */ HeaderUpdateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ 7936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function HeaderUpdateFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderUpdateFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function HeaderUpdateFormComponent_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un t\u00EDtulo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El t\u00EDtulo debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_20_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderUpdateFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function HeaderUpdateFormComponent_ng_template_0_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_27_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresar una direcci\u00F3n de email v\u00E1lida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
} }
function HeaderUpdateFormComponent_ng_template_0_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una ubicaci\u00F3n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La ubicaci\u00F3n debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_33_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderUpdateFormComponent_ng_template_0_div_33_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["minlength"]);
} }
function HeaderUpdateFormComponent_ng_template_0_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El texto debe tener al menos 4 caracters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_39_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderUpdateFormComponent_ng_template_0_div_39_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors["minlength"]);
} }
function HeaderUpdateFormComponent_ng_template_0_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_45_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_45_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_45_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderUpdateFormComponent_ng_template_0_div_45_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderUpdateFormComponent_ng_template_0_div_45_div_3_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors["pattern"]);
} }
function HeaderUpdateFormComponent_ng_template_0_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_53_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_53_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderUpdateFormComponent_ng_template_0_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderUpdateFormComponent_ng_template_0_div_53_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderUpdateFormComponent_ng_template_0_div_53_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderUpdateFormComponent_ng_template_0_div_53_div_3_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors["pattern"]);
} }
function HeaderUpdateFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Modificar datos personales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderUpdateFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.portfolioItemUpdate.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderUpdateFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "T\u00EDtulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.portfolioItemUpdate.titulo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HeaderUpdateFormComponent_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.portfolioItemUpdate.mail = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, HeaderUpdateFormComponent_ng_template_0_div_27_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10)(29, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Ubicaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.portfolioItemUpdate.ubicacion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, HeaderUpdateFormComponent_ng_template_0_div_33_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24)(35, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Sobre m\u00ED:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "textarea", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_textarea_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.portfolioItemUpdate.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, HeaderUpdateFormComponent_ng_template_0_div_39_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24)(41, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Enlace a la imagen de cabecera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r40.portfolioItemUpdate.banner = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, HeaderUpdateFormComponent_ng_template_0_div_45_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 24)(49, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Enlace a la imagen de perfil:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderUpdateFormComponent_ng_template_0_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.portfolioItemUpdate.foto = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, HeaderUpdateFormComponent_ng_template_0_div_53_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 37)(57, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderUpdateFormComponent_ng_template_0_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.saveUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderUpdateFormComponent_ng_template_0_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.cancelUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.ubicacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.banner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.banner, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.foto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.invalid && (_r16.dirty || _r16.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.foto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class HeaderUpdateFormComponent {
    constructor(datosPortfolio, modalService) {
        this.datosPortfolio = datosPortfolio;
        this.modalService = modalService;
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.portfolioItemUpdate = {
            id: 0,
            nombre: '',
            titulo: '',
            mail: '',
            descripcion: '',
            foto: '',
            ubicacion: '',
            banner: ''
        };
        this.portfolioOriginalItem = {
            id: 0,
            nombre: '',
            titulo: '',
            mail: '',
            descripcion: '',
            foto: '',
            ubicacion: '',
            banner: ''
        };
        this.miPortfolio = { id: 0,
            nombre: '',
            titulo: '',
            mail: '',
            descripcion: '',
            foto: '',
            ubicacion: '',
            banner: '' };
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getPersona).subscribe((data) => {
            this.miPortfolio = data[0];
            this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        });
    }
    saveUpdate() {
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        this.modalService.dismissAll();
    }
    cancelUpdate() {
        this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        //  this.principalComponent.cancelUpdateEducacion(this.educacionOriginalItem);
        // ya no hace falta esa llamada porque hice un doble emit - emit hasta llegar
        // al formulario principal que tiene la lista de items.
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
            this.onUpdateItem.emit(this.portfolioItemUpdate);
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
HeaderUpdateFormComponent.ɵfac = function HeaderUpdateFormComponent_Factory(t) { return new (t || HeaderUpdateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
HeaderUpdateFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderUpdateFormComponent, selectors: [["app-header-update-form"]], inputs: { portfolioItemUpdate: "portfolioItemUpdate" }, outputs: { onUpdateItem: "onUpdateItem" }, decls: 6, vars: 0, consts: [["content", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-pen"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-6", "p-2"], ["for", "idNombre"], ["required", "", "type", "text", "name", "nombre", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "titulo", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["t", "ngModel"], ["for", "idMail"], ["required", "", "email", "", "type", "text", "name", "mail", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["m", "ngModel"], ["for", "idUbicacion"], ["required", "", "type", "text", "name", "ubicacion", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["u", "ngModel"], [1, "col-md-12", "p-2"], ["for", "idInstitucion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["s", "ngModel"], ["for", "idBanner"], ["name", "banner", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ib", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "imagen de cabecera", 2, "max-width", "300px", 3, "src"], ["for", "idFoto"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], ["alt", "imagen de perfil", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function HeaderUpdateFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeaderUpdateFormComponent_ng_template_0_Template, 61, 17, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderUpdateFormComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0\u00A0Editar\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItdXBkYXRlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rutas-api */ 1167);
/* harmony import */ var _restaurar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurar */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_update_form_header_update_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-update-form/header-update-form.component */ 7030);







function HeaderComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.restaurar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0\u00A0Restaurar\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-header-update-form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onUpdateItem", function HeaderComponent_div_26_Template_app_header_update_form_onUpdateItem_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("portfolioItemUpdate", ctx_r0.miPortfolio);
} }
class HeaderComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.miPortfolio = {
            id: 0,
            nombre: '',
            titulo: '',
            mail: '',
            descripcion: '',
            foto: '',
            ubicacion: '',
            banner: '',
        };
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio
            .obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getPersona)
            .subscribe((data) => {
            this.miPortfolio = data[0];
            this.misdatosPortfolioList = data;
        });
    }
    onUpdate(itemPortfolio) {
        this.miPortfolio = { ...itemPortfolio };
        this.datosPortfolio
            .updateItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.putPersona, itemPortfolio)
            .subscribe((item) => { });
    }
    restaurar() {
        this.misdatosPortfolioList.forEach((element, index) => {
            this.datosPortfolio
                .deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delPersona, element)
                .subscribe(() => { });
        });
        this.misdatosPortfolioList.splice(0);
        this.datosPortfolio
            .addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postPersona, _restaurar__WEBPACK_IMPORTED_MODULE_1__.Restaurar.persona)
            .subscribe((item) => {
            this.miPortfolio = item;
            this.misdatosPortfolioList.push(item);
            this.ngOnInit();
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 8, consts: [[1, "", 2, "padding-bottom", "12px", "border-radius", "0px 0px 5px 5px", "border", "1px solid #ffc107"], ["id", "encabezado", 1, "row"], [3, "src"], [1, "row", "border", "p-0", "m-0", "border-0", "border-secondary", 2, "background-color", "#fbfbfa"], [1, "border-1", "col-sm-4", "border-primary", "ps-3"], [2, "display", "block", "text-align", "center"], ["height", "150", "width", "150", "alt", "foto de perfil", 2, "margin-top", "-75px", "margin-bottom", "10px", "margin-left", "0px", "border", "3px solid #5aaee8", "border-radius", "50%", 3, "src"], [2, "margin-bottom", "7px"], [1, "border", "border-0", "col", "p-4", "pb-3", "align-self-center"], [1, "card", "mat-card", "p-4", "pb-2", 2, "border", "1px solid #5aaee8"], [1, "card", "card-title", "border-0"], [1, "d-flex", "justify-content-between"], [2, "color", "#47397b"], [2, "color", "rgb(255, 59, 173)"], ["id", "text-sobremi", 2, "white-space", "pre-line", "font-family", "Noto Serif, Serif", "font-size", "1.05rem", "color", "black"], ["style", "padding-top: 10px; float: right;", 4, "ngIf"], [2, "padding-top", "10px", "float", "right"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-undo"], [3, "portfolioItemUpdate", "onUpdateItem"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\u00A1Hola! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "=)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div")(24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, HeaderComponent_div_26_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.miPortfolio.banner, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.miPortfolio.foto, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.miPortfolio.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.miPortfolio.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.miPortfolio.ubicacion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.miPortfolio.mail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.miPortfolio.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _header_update_form_header_update_form_component__WEBPACK_IMPORTED_MODULE_4__.HeaderUpdateFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5855:
/*!**********************************************************************************!*\
  !*** ./src/app/idiomas/idiomas-add-item-form/idiomas-add-item-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdiomasAddItemFormComponent": () => (/* binding */ IdiomasAddItemFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






function IdiomasAddItemFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IdiomasAddItemFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IdiomasAddItemFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function IdiomasAddItemFormComponent_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IdiomasAddItemFormComponent_ng_template_0_div_20_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IdiomasAddItemFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function IdiomasAddItemFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdiomasAddItemFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IdiomasAddItemFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IdiomasAddItemFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IdiomasAddItemFormComponent_ng_template_0_div_26_div_3_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["pattern"]);
} }
function IdiomasAddItemFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Idiomas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdiomasAddItemFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IdiomasAddItemFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.portfolioNewItem.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IdiomasAddItemFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IdiomasAddItemFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.portfolioNewItem.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, IdiomasAddItemFormComponent_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18)(22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enlace a la imagen del idioma:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IdiomasAddItemFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.portfolioNewItem.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, IdiomasAddItemFormComponent_ng_template_0_div_26_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24)(30, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdiomasAddItemFormComponent_ng_template_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.addItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdiomasAddItemFormComponent_ng_template_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.cancelAddItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioNewItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class IdiomasAddItemFormComponent {
    //ese logo por default cambiarlo luego
    constructor(modalService) {
        this.modalService = modalService;
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
        };
    }
    ngOnInit() { }
    // revisar si algo de esto vale la pena
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    addItem() {
        if (this.portfolioNewItem.nombre.length === 0) {
            alert('Please add a task!'); //cambiar
            return;
        }
        this.onAddItem.emit(this.portfolioNewItem);
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp', //luego quitar
        };
        this.modalService.dismissAll('guardar');
    }
    cancelAddItem() {
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp', //luego quitar
        };
        this.modalService.dismissAll('cancelar');
    }
}
IdiomasAddItemFormComponent.ɵfac = function IdiomasAddItemFormComponent_Factory(t) { return new (t || IdiomasAddItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
IdiomasAddItemFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdiomasAddItemFormComponent, selectors: [["app-idiomas-add-item-form"]], outputs: { onAddItem: "onAddItem" }, decls: 8, vars: 0, consts: [["modalAddPortfolio", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-plus"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-6", "p-2"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "nombre", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], [1, "col-md-12", "p-2"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function IdiomasAddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IdiomasAddItemFormComponent_ng_template_0_Template, 34, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdiomasAddItemFormComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0Agregar\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0\n");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGlvbWFzLWFkZC1pdGVtLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1768:
/*!****************************************************************************!*\
  !*** ./src/app/idiomas/idiomas-items-list/idiomas-items-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdiomasItemsListComponent": () => (/* binding */ IdiomasItemsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _idiomas_update_form_idiomas_update_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idiomas-update-form/idiomas-update-form.component */ 4981);








function IdiomasItemsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.portfolioItem.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.portfolioItem.descripcion);
} }
function IdiomasItemsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "app-idiomas-update-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onUpdateItem", function IdiomasItemsListComponent_div_5_Template_app_idiomas_update_form_onUpdateItem_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IdiomasItemsListComponent_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onDelete(ctx_r4.portfolioItem)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("portfolioItemUpdate", ctx_r1.portfolioItem);
} }
class IdiomasItemsListComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.portfolioItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            logo: '',
        };
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.misdatosPortfolioList = [];
        this.texto = '';
        this.editando = false;
    }
    ngOnInit() {
        this.datosPortfolio
            .obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getIdioma)
            .subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    onDelete(item) {
        this.onDeleteItem.emit(item);
    }
    onUpdate(itemPortfolio) {
        // lo que sigue acutaliza esta vista con el item
        // tal como estaba  antes de su cancelacion porque
        // sino con el binding tiene guardada la modificacion
        this.portfolioItem = itemPortfolio;
        this.onUpdateItem.emit(itemPortfolio);
    }
}
IdiomasItemsListComponent.ɵfac = function IdiomasItemsListComponent_Factory(t) { return new (t || IdiomasItemsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
IdiomasItemsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IdiomasItemsListComponent, selectors: [["app-idiomas-items-list"]], inputs: { portfolioItem: "portfolioItem" }, outputs: { onDeleteItem: "onDeleteItem", onUpdateItem: "onUpdateItem" }, decls: 6, vars: 3, consts: [[1, "row", "p-3", "d-flex", "align-items-center"], [1, "col-md-2", "p-0", "justify-content-center", "text-center"], ["alt", "logo", "width", "90", "height", "90", 2, "border-radius", "50%", 3, "src"], [1, "col-md-8", "p-0"], [4, "ngIf"], ["class", " col-lg-2 pe-3 p-3 align-self-start", "style", "text-align: right", 4, "ngIf"], [1, "col-lg-2", "pe-3", "p-3", "align-self-start", 2, "text-align", "right"], [1, "btn-edit"], [3, "portfolioItemUpdate", "onUpdateItem"], ["ngbTooltip", "Borrar \u00EDtem", 1, "pointer", "miboton-der", 3, "click"], [1, "fa", "fa-trash"]], template: function IdiomasItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, IdiomasItemsListComponent_div_4_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, IdiomasItemsListComponent_div_5_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.portfolioItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _idiomas_update_form_idiomas_update_form_component__WEBPACK_IMPORTED_MODULE_3__.IdiomasUpdateFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGlvbWFzLWl0ZW1zLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4981:
/*!******************************************************************************!*\
  !*** ./src/app/idiomas/idiomas-update-form/idiomas-update-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdiomasUpdateFormComponent": () => (/* binding */ IdiomasUpdateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ 7936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function IdiomasUpdateFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasUpdateFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasUpdateFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IdiomasUpdateFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IdiomasUpdateFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function IdiomasUpdateFormComponent_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasUpdateFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IdiomasUpdateFormComponent_ng_template_0_div_20_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
} }
function IdiomasUpdateFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasUpdateFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasUpdateFormComponent_ng_template_0_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasUpdateFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IdiomasUpdateFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IdiomasUpdateFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, IdiomasUpdateFormComponent_ng_template_0_div_26_div_3_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["pattern"]);
} }
function IdiomasUpdateFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdiomasUpdateFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IdiomasUpdateFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.portfolioItemUpdate.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, IdiomasUpdateFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IdiomasUpdateFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.portfolioItemUpdate.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, IdiomasUpdateFormComponent_ng_template_0_div_20_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18)(22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Enlace a la imagen del idioma:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IdiomasUpdateFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.portfolioItemUpdate.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, IdiomasUpdateFormComponent_ng_template_0_div_26_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 24)(30, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdiomasUpdateFormComponent_ng_template_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.saveUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdiomasUpdateFormComponent_ng_template_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.cancelUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class IdiomasUpdateFormComponent {
    constructor(datosPortfolio, modalService) {
        this.datosPortfolio = datosPortfolio;
        this.modalService = modalService;
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.portfolioItemUpdate = {
            id: 0,
            nombre: '',
            descripcion: '',
            logo: '',
        };
        this.portfolioOriginalItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            logo: '',
        };
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getIdioma).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
    }
    saveUpdate() {
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        this.modalService.dismissAll();
    }
    cancelUpdate() {
        this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        //  this.principalComponent.cancelUpdateEducacion(this.educacionOriginalItem);
        // ya no hace falta esa llamada porque hice un doble emit - emit hasta llegar
        // al formulario principal que tiene la lista de items.
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
            this.onUpdateItem.emit(this.portfolioItemUpdate);
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
IdiomasUpdateFormComponent.ɵfac = function IdiomasUpdateFormComponent_Factory(t) { return new (t || IdiomasUpdateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
IdiomasUpdateFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IdiomasUpdateFormComponent, selectors: [["app-idiomas-update-form"]], inputs: { portfolioItemUpdate: "portfolioItemUpdate" }, outputs: { onUpdateItem: "onUpdateItem" }, decls: 6, vars: 0, consts: [["content", ""], [1, "pointer", "miboton-izq", 3, "click"], [1, "fa", "fa-pen"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-6", "p-2"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "nombre", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], [1, "col-md-12", "p-2"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function IdiomasUpdateFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IdiomasUpdateFormComponent_ng_template_0_Template, 34, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdiomasUpdateFormComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGlvbWFzLXVwZGF0ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9671:
/*!**********************************************!*\
  !*** ./src/app/idiomas/idiomas.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdiomasComponent": () => (/* binding */ IdiomasComponent)
/* harmony export */ });
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rutas-api */ 1167);
/* harmony import */ var src_app_restaurar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/restaurar */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _idiomas_add_item_form_idiomas_add_item_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./idiomas-add-item-form/idiomas-add-item-form.component */ 5855);
/* harmony import */ var _idiomas_items_list_idiomas_items_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idiomas-items-list/idiomas-items-list.component */ 1768);








function IdiomasComponent_app_idiomas_items_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-idiomas-items-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDeleteItem", function IdiomasComponent_app_idiomas_items_list_5_Template_app_idiomas_items_list_onDeleteItem_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const itemPortfolio_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteItem(itemPortfolio_r2)); })("onUpdateItem", function IdiomasComponent_app_idiomas_items_list_5_Template_app_idiomas_items_list_onUpdateItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.updateItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cargando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPortfolio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("portfolioItem", itemPortfolio_r2);
} }
function IdiomasComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IdiomasComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.restaurar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0\u00A0Restaurar\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-idiomas-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAddItem", function IdiomasComponent_div_6_Template_app_idiomas_add_item_form_onAddItem_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.addItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
class IdiomasComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getIdioma).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    addItem(itemPortfolio) {
        this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postIdioma, itemPortfolio).subscribe((item) => {
            this.misdatosPortfolioList.push(item);
        });
    }
    updateItem(itemPortfolio) {
        this.datosPortfolio.updateItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.putIdioma, itemPortfolio).subscribe((item) => {
        });
    }
    deleteItem(itemPortfolio) {
        this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delIdioma, itemPortfolio).subscribe(() => {
            this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element) => {
                return element.id !== itemPortfolio.id;
            });
        });
    }
    restaurar() {
        this.misdatosPortfolioList.forEach((element, index) => {
            this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delIdioma, element).subscribe(() => {
            });
        });
        this.misdatosPortfolioList.splice(0);
        src_app_restaurar__WEBPACK_IMPORTED_MODULE_1__.Restaurar.idiomas.forEach((element, index) => {
            this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postIdioma, element).subscribe((item) => {
                this.misdatosPortfolioList.push(item);
            });
        });
    }
}
IdiomasComponent.ɵfac = function IdiomasComponent_Factory(t) { return new (t || IdiomasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
IdiomasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: IdiomasComponent, selectors: [["app-idiomas"]], decls: 7, vars: 2, consts: [[1, "card", "mat-card", 2, "border", "1px solid #5aaee8"], [1, "card", "card-title", "border-0", "bg-light", "ps-3", "p-1", "pt-2", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"], [2, "color", "#47397b"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem", 4, "ngFor", "ngForOf"], ["class", "card-footer pe-3", "style", "border-top: 1px solid #5aaee8; background-color: white", 4, "ngIf"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem"], [1, "card-footer", "pe-3", 2, "border-top", "1px solid #5aaee8", "background-color", "white"], [2, "text-align", "right"], ["type", "button", 1, "btn-edit", "me-2", "p-1", "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-undo"], [3, "onAddItem"]], template: function IdiomasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Idiomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, IdiomasComponent_app_idiomas_items_list_5_Template, 2, 1, "app-idiomas-items-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, IdiomasComponent_div_6_Template, 7, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.misdatosPortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _idiomas_add_item_form_idiomas_add_item_form_component__WEBPACK_IMPORTED_MODULE_4__.IdiomasAddItemFormComponent, _idiomas_items_list_idiomas_items_list_component__WEBPACK_IMPORTED_MODULE_5__.IdiomasItemsListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGlvbWFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




function NavbarComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openFormModalLogIn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.authService.SignOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.formModalLogIn = new window.bootstrap.Modal(document.getElementById('myModal'));
    }
    openFormModalLogIn() {
        this.formModalLogIn.show();
    }
    logIn(email, pass) {
        this.authService.SignIn(email, pass, this.formModalLogIn);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 39, vars: 2, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "justify-content-between", 2, "background-color", "#5aaee8", "color", "#fbfbfa"], [1, "navbar-izq", 2, "margin-left", "0.4rem"], ["role", "group", 1, "btn-group"], ["href", "https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa", 1, "navbar-brand", 2, "color", "#fbfbfa"], ["alt", "logo INTI", "src", "assets/logosargentinaprograma.png", "height", "50"], ["role", "group", 1, "btn-group", "mr-2"], [1, "navbar-der", 2, "margin-right", "1.4rem"], [1, "nav", "navbar-top-links"], [1, "text-center"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["style", "font-size: 17px; color: white", "class", "btn btn-social-icon", 3, "click", 4, "ngIf"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "mr-2"], ["href", "https://www.linkedin.com/in/federicoholc/", "title", "LinkedIn", "target", "_blank", 1, "btn", "btn-social-icon", 2, "color", "white", "border", "0"], [1, "fab", "fa-linkedin", "fa-lg"], ["href", "https://github.com/fedeholc", "title", "GitHub", "target", "_blank", 1, "btn", "btn-social-icon", 2, "color", "white", "border", "0"], [1, "fab", "fa-github", "fa-lg"], ["id", "myModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "text-center"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body", "mx-3"], [1, "form-floating", "mb-3"], ["required", "", "type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control"], ["userName", ""], ["for", "floatingInput"], [1, "form-floating"], ["required", "", "type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["userPassword", ""], ["for", "floatingPassword"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", "value", "Log in", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-social-icon", 2, "font-size", "17px", "color", "white", 3, "click"], [1, "fas", "fa-user"], [1, "fas", "fa-sign-out-alt"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Argentina Programa - #YoProgramo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li")(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavbarComponent_a_12_Template, 3, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_a_13_Template, 3, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Inicio de sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22)(27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 31)(38, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_input_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.logIn(_r2.value, _r3.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7936:
/*!**************************************!*\
  !*** ./src/app/portfolio.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioService": () => (/* binding */ PortfolioService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class PortfolioService {
    constructor(http) {
        this.http = http;
    }
    obtenerDatosPortfolio(miUrl) {
        const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
        return this.http.get(miUrl, { 'headers': headers });
    }
    addItemPortfolio(miUrl, item) {
        return this.http.post(miUrl, item);
    }
    updateItemPortfolio(miUrl, item) {
        return this.http.put(miUrl, item);
    }
    deleteItemPortfolio(miUrl, item) {
        return this.http.delete(miUrl + item.id);
    }
}
PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PortfolioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2013:
/*!****************************************************************************************!*\
  !*** ./src/app/proyectos/proyectos-add-item-form/proyectos-add-item-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectosAddItemFormComponent": () => (/* binding */ ProyectosAddItemFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






function ProyectosAddItemFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProyectosAddItemFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProyectosAddItemFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function ProyectosAddItemFormComponent_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProyectosAddItemFormComponent_ng_template_0_div_20_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProyectosAddItemFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function ProyectosAddItemFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProyectosAddItemFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProyectosAddItemFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
} }
function ProyectosAddItemFormComponent_ng_template_0_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectosAddItemFormComponent_ng_template_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProyectosAddItemFormComponent_ng_template_0_div_32_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProyectosAddItemFormComponent_ng_template_0_div_32_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProyectosAddItemFormComponent_ng_template_0_div_32_div_3_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["pattern"]);
} }
function ProyectosAddItemFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proyectos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectosAddItemFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProyectosAddItemFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.portfolioNewItem.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProyectosAddItemFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProyectosAddItemFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.portfolioNewItem.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProyectosAddItemFormComponent_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enlace al proyecto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProyectosAddItemFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.portfolioNewItem.enlace = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProyectosAddItemFormComponent_ng_template_0_div_26_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enlace a la imagen del proyecto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProyectosAddItemFormComponent_ng_template_0_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.portfolioNewItem.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProyectosAddItemFormComponent_ng_template_0_div_32_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25)(36, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectosAddItemFormComponent_ng_template_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.addItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectosAddItemFormComponent_ng_template_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.cancelAddItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.enlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioNewItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class ProyectosAddItemFormComponent {
    //ese logo por default cambiarlo luego
    constructor(modalService) {
        this.modalService = modalService;
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            enlace: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
        };
    }
    ngOnInit() { }
    // revisar si algo de esto vale la pena
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    addItem() {
        if (this.portfolioNewItem.nombre.length === 0) {
            alert('Please add a task!'); //cambiar
            return;
        }
        this.onAddItem.emit(this.portfolioNewItem);
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            enlace: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp', //luego quitar
        };
        this.modalService.dismissAll('guardar');
    }
    cancelAddItem() {
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            enlace: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp', //luego quitar
        };
        this.modalService.dismissAll('cancelar');
    }
}
ProyectosAddItemFormComponent.ɵfac = function ProyectosAddItemFormComponent_Factory(t) { return new (t || ProyectosAddItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
ProyectosAddItemFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProyectosAddItemFormComponent, selectors: [["app-proyectos-add-item-form"]], outputs: { onAddItem: "onAddItem" }, decls: 8, vars: 0, consts: [["modalAddPortfolio", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-plus"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-12", "p-2"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "nombre", "minlength", "4", "maxlength", "255", 1, "form-control", "p-3", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", 1, "form-control", "p-3", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["required", "", "type", "text", "name", "enlace", "minlength", "4", "maxlength", "255", 1, "form-control", "p-3", 3, "ngModel", "ngModelChange"], ["e", "ngModel"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", "p-3", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function ProyectosAddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProyectosAddItemFormComponent_ng_template_0_Template, 40, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectosAddItemFormComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0Agregar\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0b3MtYWRkLWl0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7961:
/*!**********************************************************************************!*\
  !*** ./src/app/proyectos/proyectos-items-list/proyectos-items-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectosItemsListComponent": () => (/* binding */ ProyectosItemsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _proyectos_update_form_proyectos_update_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proyectos-update-form/proyectos-update-form.component */ 1104);








function ProyectosItemsListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "app-proyectos-update-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onUpdateItem", function ProyectosItemsListComponent_div_11_Template_app_proyectos_update_form_onUpdateItem_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProyectosItemsListComponent_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onDelete(ctx_r3.portfolioItem)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("portfolioItemUpdate", ctx_r0.portfolioItem);
} }
class ProyectosItemsListComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.portfolioItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            enlace: '',
            logo: '',
        };
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.misdatosPortfolioList = [];
        this.texto = '';
        this.editando = false;
    }
    ngOnInit() {
        this.datosPortfolio
            .obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getProyecto)
            .subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    onDelete(item) {
        this.onDeleteItem.emit(item);
    }
    onUpdate(itemPortfolio) {
        // lo que sigue acutaliza esta vista con el item
        // tal como estaba  antes de su cancelacion porque
        // sino con el binding tiene guardada la modificacion
        this.portfolioItem = itemPortfolio;
        this.onUpdateItem.emit(itemPortfolio);
    }
}
ProyectosItemsListComponent.ɵfac = function ProyectosItemsListComponent_Factory(t) { return new (t || ProyectosItemsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
ProyectosItemsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProyectosItemsListComponent, selectors: [["app-proyectos-items-list"]], inputs: { portfolioItem: "portfolioItem" }, outputs: { onDeleteItem: "onDeleteItem", onUpdateItem: "onUpdateItem" }, decls: 12, vars: 6, consts: [[1, "row", "p-3", "d-flex"], [1, "col-md-2", "p-0", "justify-content-center", "text-center"], ["alt", "logo", "height", "90", "width", "90", 2, "border-radius", "50%", 3, "src"], [1, "col-md-8", "p-0"], ["target", "_blank", 3, "href"], ["class", "col-md-2 pe-3 pt-3", "style", "text-align: right", 4, "ngIf"], [1, "col-md-2", "pe-3", "pt-3", 2, "text-align", "right"], [1, "btn-edit"], ["ngbTooltip", "Editar \u00EDtem", 3, "portfolioItemUpdate", "onUpdateItem"], ["ngbTooltip", "Borrar \u00EDtem", 1, "pointer", "miboton-der", 3, "click"], [1, "fa", "fa-trash"]], template: function ProyectosItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p")(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProyectosItemsListComponent_div_11_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.portfolioItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.portfolioItem.nombre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx.portfolioItem.enlace, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.enlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _proyectos_update_form_proyectos_update_form_component__WEBPACK_IMPORTED_MODULE_3__.ProyectosUpdateFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0b3MtaXRlbXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1104:
/*!************************************************************************************!*\
  !*** ./src/app/proyectos/proyectos-update-form/proyectos-update-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectosUpdateFormComponent": () => (/* binding */ ProyectosUpdateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ 7936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function ProyectosUpdateFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProyectosUpdateFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProyectosUpdateFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function ProyectosUpdateFormComponent_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProyectosUpdateFormComponent_ng_template_0_div_20_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProyectosUpdateFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function ProyectosUpdateFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProyectosUpdateFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProyectosUpdateFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
} }
function ProyectosUpdateFormComponent_ng_template_0_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProyectosUpdateFormComponent_ng_template_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProyectosUpdateFormComponent_ng_template_0_div_32_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProyectosUpdateFormComponent_ng_template_0_div_32_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProyectosUpdateFormComponent_ng_template_0_div_32_div_3_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.errors == null ? null : _r10.errors["pattern"]);
} }
function ProyectosUpdateFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProyectosUpdateFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProyectosUpdateFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.portfolioItemUpdate.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProyectosUpdateFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProyectosUpdateFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.portfolioItemUpdate.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProyectosUpdateFormComponent_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Enlace al proyecto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProyectosUpdateFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.portfolioItemUpdate.enlace = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProyectosUpdateFormComponent_ng_template_0_div_26_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Enlace a la imagen del proyecto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProyectosUpdateFormComponent_ng_template_0_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.portfolioItemUpdate.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProyectosUpdateFormComponent_ng_template_0_div_32_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25)(36, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProyectosUpdateFormComponent_ng_template_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.saveUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProyectosUpdateFormComponent_ng_template_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.cancelUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.enlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.invalid && (_r10.dirty || _r10.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class ProyectosUpdateFormComponent {
    constructor(datosPortfolio, modalService) {
        this.datosPortfolio = datosPortfolio;
        this.modalService = modalService;
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.portfolioItemUpdate = {
            id: 0,
            nombre: '',
            descripcion: '',
            enlace: '',
            logo: '',
        };
        this.portfolioOriginalItem = {
            id: 0,
            nombre: '',
            descripcion: '',
            enlace: '',
            logo: '',
        };
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getProyecto).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
    }
    saveUpdate() {
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        this.modalService.dismissAll();
    }
    cancelUpdate() {
        this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        //  this.principalComponent.cancelUpdateEducacion(this.educacionOriginalItem);
        // ya no hace falta esa llamada porque hice un doble emit - emit hasta llegar
        // al formulario principal que tiene la lista de items.
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
            this.onUpdateItem.emit(this.portfolioItemUpdate);
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
ProyectosUpdateFormComponent.ɵfac = function ProyectosUpdateFormComponent_Factory(t) { return new (t || ProyectosUpdateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
ProyectosUpdateFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProyectosUpdateFormComponent, selectors: [["app-proyectos-update-form"]], inputs: { portfolioItemUpdate: "portfolioItemUpdate" }, outputs: { onUpdateItem: "onUpdateItem" }, decls: 6, vars: 0, consts: [["content", ""], [1, "pointer", "miboton-izq", 3, "click"], [1, "fa", "fa-pen"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-12", "p-2"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "nombre", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["required", "", "type", "text", "name", "enlace", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["e", "ngModel"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function ProyectosUpdateFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProyectosUpdateFormComponent_ng_template_0_Template, 40, 9, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProyectosUpdateFormComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0b3MtdXBkYXRlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3483:
/*!**************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectosComponent": () => (/* binding */ ProyectosComponent)
/* harmony export */ });
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rutas-api */ 1167);
/* harmony import */ var _restaurar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurar */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _proyectos_add_item_form_proyectos_add_item_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyectos-add-item-form/proyectos-add-item-form.component */ 2013);
/* harmony import */ var _proyectos_items_list_proyectos_items_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proyectos-items-list/proyectos-items-list.component */ 7961);








function ProyectosComponent_app_proyectos_items_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-proyectos-items-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDeleteItem", function ProyectosComponent_app_proyectos_items_list_5_Template_app_proyectos_items_list_onDeleteItem_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const itemPortfolio_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteItem(itemPortfolio_r2)); })("onUpdateItem", function ProyectosComponent_app_proyectos_items_list_5_Template_app_proyectos_items_list_onUpdateItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.updateItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cargando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPortfolio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("portfolioItem", itemPortfolio_r2);
} }
function ProyectosComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProyectosComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.restaurar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0\u00A0Restaurar\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-proyectos-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAddItem", function ProyectosComponent_div_6_Template_app_proyectos_add_item_form_onAddItem_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.addItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
class ProyectosComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getProyecto).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    addItem(itemPortfolio) {
        this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postProyecto, itemPortfolio).subscribe((item) => {
            this.misdatosPortfolioList.push(item);
        });
    }
    updateItem(itemPortfolio) {
        this.datosPortfolio.updateItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.putProyecto, itemPortfolio).subscribe((item) => {
        });
    }
    deleteItem(itemPortfolio) {
        this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delProyecto, itemPortfolio).subscribe(() => {
            this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element) => {
                return element.id !== itemPortfolio.id;
            });
        });
    }
    restaurar() {
        this.misdatosPortfolioList.forEach((element, index) => {
            this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delProyecto, element).subscribe(() => {
            });
        });
        this.misdatosPortfolioList.splice(0);
        _restaurar__WEBPACK_IMPORTED_MODULE_1__.Restaurar.proyectos.forEach((element, index) => {
            this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postProyecto, element).subscribe((item) => {
                this.misdatosPortfolioList.push(item);
            });
        });
    }
}
ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) { return new (t || ProyectosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
ProyectosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProyectosComponent, selectors: [["app-proyectos"]], decls: 7, vars: 2, consts: [[1, "card", "mat-card", 2, "border", "1px solid #5aaee8"], [1, "card", "card-title", "border-0", "bg-light", "ps-3", "p-1", "pt-2", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"], [2, "color", "#47397b"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem", 4, "ngFor", "ngForOf"], ["class", "card-footer pe-3", "style", "border-top: 1px solid #5aaee8; background-color: white", 4, "ngIf"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem"], [1, "card-footer", "pe-3", 2, "border-top", "1px solid #5aaee8", "background-color", "white"], [2, "text-align", "right"], ["type", "button", 1, "btn-edit", "me-2", "p-1", "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-undo"], [3, "onAddItem"]], template: function ProyectosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProyectosComponent_app_proyectos_items_list_5_Template, 2, 1, "app-proyectos-items-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProyectosComponent_div_6_Template, 7, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.misdatosPortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _proyectos_add_item_form_proyectos_add_item_form_component__WEBPACK_IMPORTED_MODULE_4__.ProyectosAddItemFormComponent, _proyectos_items_list_proyectos_items_list_component__WEBPACK_IMPORTED_MODULE_5__.ProyectosItemsListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0b3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2772:
/*!******************************!*\
  !*** ./src/app/restaurar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Restaurar": () => (/* binding */ Restaurar)
/* harmony export */ });
class Restaurar {
}
Restaurar.skills = [
    {
        id: 0,
        nombre: 'HTML 5',
        valor: 95,
        logo: 'https://i.postimg.cc/0NypvvkL/h1.png',
    },
    {
        id: 0,
        nombre: 'CSS',
        valor: 85,
        logo: 'https://i.postimg.cc/cH2xHRQQ/CSS3-logo-svg.png',
    },
    {
        id: 0,
        nombre: 'Bootstrap',
        valor: 80,
        logo: 'https://i.postimg.cc/Dft2qPRD/Bootstrap-logo-svg.png',
    },
    {
        id: 0,
        nombre: 'JavaScript',
        valor: 85,
        logo: 'https://i.postimg.cc/MHR2HyGj/js1.jpg',
    },
    {
        id: 0,
        nombre: 'Angular',
        valor: 80,
        logo: 'https://i.postimg.cc/g0vygLDp/Angular-full-color-logo.png',
    },
    {
        id: 0,
        nombre: 'Java',
        valor: 80,
        logo: 'https://i.postimg.cc/pLstrQvp/226777.png',
    },
    {
        id: 0,
        nombre: 'SQL',
        valor: 80,
        logo: 'https://i.postimg.cc/QNfg6Hjc/sql.png',
    },
    {
        id: 0,
        nombre: 'Spring',
        valor: 70,
        logo: 'https://i.postimg.cc/bw74smMY/spring-logo-9-A2-BC78-AAF-seeklogo-com.png',
    },
    {
        id: 0,
        nombre: 'Comunicación clara',
        valor: 95,
        logo: 'https://i.postimg.cc/tgnTQRZS/speech-balloon.png',
    },
    {
        id: 0,
        nombre: 'Trabajo en equipo',
        valor: 90,
        logo: 'https://i.postimg.cc/4xdyPQJT/handshake.png',
    },
    {
        id: 0,
        nombre: 'Adaptación al cambio',
        valor: 85,
        logo: 'https://i.postimg.cc/g2TJTLJL/tornado.png',
    },
    {
        id: 0,
        nombre: 'Gestión del tiempo',
        valor: 90,
        logo: 'https://i.postimg.cc/WbshFPCz/hourglass.png',
    },
    {
        id: 0,
        nombre: 'Responsabilidad',
        valor: 95,
        logo: 'https://i.postimg.cc/MHmHPsMz/female-teacher.png',
    },
    {
        id: 0,
        nombre: 'Resolución de problemas',
        valor: 90,
        logo: 'https://i.postimg.cc/wTF3DGYV/hammer-and-wrench.png',
    },
    {
        id: 0,
        nombre: 'Escucha activa',
        valor: 95,
        logo: 'https://i.postimg.cc/tJj7z0gr/ear.png',
    },
    {
        id: 0,
        nombre: 'Empatía',
        valor: 90,
        logo: 'https://i.postimg.cc/8kR7zCyx/green-heart.png',
    },
];
Restaurar.persona = {
    id: 0,
    nombre: 'Federico Holc',
    titulo: 'Full Stack Web Developer',
    mail: 'federico.holc@gmail.com',
    descripcion: 'Soy Fede, programador frontend y backend. Me gusta que las webs sean bellas, fáciles de usar, y que funcionen bien. En mis ratos libres me dedico a aprender cosas nuevas y a la fotografía. Si querés que hablemos mandame un mail.',
    foto: 'assets/FH-06723-v0-01.jpg',
    ubicacion: 'Buenos Aires - Argentina',
    banner: "assets/banner1a.jpg",
};
Restaurar.proyectos = [
    {
        id: 0,
        nombre: 'Mi portfolio',
        descripcion: 'Portfolio web desarrollado como trabajo final para #YoProgramo - Argentina Programa.',
        enlace: 'httP://localhost:4200',
        logo: 'https://i.postimg.cc/xTnQFzZ6/ap.jpg',
    },
];
Restaurar.trabajos = [
    {
        id: 0,
        lugar: 'Ministerio de Educación del GCABA',
        periodo: '2010 - 2022',
        puesto: 'Profesor de enseñanza media',
        descripcion: 'Docente de las asignaturas: Introducción a las Ciencias Sociales y a las Humanidades, Formación Ética y Ciudadana, Sociología, e Historia, en escuelas secundarias de la ciudad de Buenos Aires.',
        logo: 'https://i.postimg.cc/nVgZXQjN/Escudo-de-la-Ciudad-de-Buenos-Aires.png'
    },
    {
        id: 0,
        lugar: 'Universidad de Buenos Aires - Facultad de Ciencias Sociales',
        periodo: '2009 - 2015',
        puesto: 'Profesor y tutor universitario',
        descripcion: 'Docente y tutor en la asignatura “Práctica de la enseñanza”. Universidad de Buenos Aires, Facultad de Ciencias Sociales, Profesorado de Sociología, cátedra Pipkin.',
        logo: 'https://i.postimg.cc/7ZT6rJdy/fsoc2.jpg'
    },
    {
        id: 0,
        lugar: 'Ministerio de Salud del GCABA - Departamento de Salud Ambiental',
        periodo: '2008 - 2012',
        puesto: 'Sociólogo',
        descripcion: 'Desarrollo e implementación de instrumentos para el relevamiento de problemáticas socio-ambientales. Capacitación del personal para su utilización. \nAnálisis de datos socio-ambientales utilizando Epi Info, bases de datos, y SPSS.',
        logo: 'https://i.postimg.cc/hjsSfSQv/dsa.png'
    },
    {
        id: 0,
        lugar: 'Universidad de Buenos Aires - Ciclo Básico Común',
        periodo: '2007 - 2011',
        puesto: 'Profesor universitario',
        descripcion: 'Docente de la asignatura “Introducción al Pensamiento Científico”. Universidad de Buenos Aires, Ciclo Básico Común, cátedra Marqués.',
        logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp'
    },
    {
        id: 0,
        lugar: 'CompuHotel S.A.',
        periodo: '1998 - 2002',
        puesto: 'Programador',
        descripcion: 'Principales tareas realizadas:' +
            '- Desarrollo de software de administración hotelera utilizando Visual Basic, Visual Fox Pro, y bases de datos SQL.' +
            '- Diseño y desarrollo de páginas web utilizando HTML, CSS y Javascript.',
        logo: 'https://i.postimg.cc/gk71gCSM/service-custom-software-development.png'
    },
];
Restaurar.idiomas = [
    {
        id: 0,
        nombre: 'Español',
        descripcion: 'Nativo',
        logo: 'https://i.postimg.cc/wBDVC0rZ/Flag-of-Spain-Civil.png',
    },
    {
        id: 0,
        nombre: 'Inglés',
        descripcion: 'First Certificate Exam, Cambridge University. Calificación: B',
        logo: 'https://i.postimg.cc/9QdtgwqQ/Flag-of-the-United-Kingdom.png',
    },
];
Restaurar.educacion = [
    {
        id: 0,
        titulo: 'Desarrollador Web Full Stack',
        institucion: 'Argentina Programa. Ministerio de Desarrollo Productivo de la Nación.',
        periodo: '2022 - 2023',
        logo: 'https://i.postimg.cc/xTnQFzZ6/ap.jpg',
    },
    {
        id: 0,
        titulo: 'Especialista Docente de Nivel Superior en Educación Sexual Integral',
        institucion: 'Instituto Superior del Profesorado “Dr. Joaquín V. González.',
        periodo: '2017 - 2019',
        logo: 'https://i.postimg.cc/g2hqQCRq/jvg.jpg',
    },
    {
        id: 0,
        titulo: 'Profesor de Enseñanza Secundaria, Normal y Especial en Sociología',
        institucion: 'Universidad de Buenos Aires, Facultad de Ciencias Sociales.',
        periodo: '2008 - 2009',
        logo: 'https://i.postimg.cc/7ZT6rJdy/fsoc2.jpg',
    },
    {
        id: 0,
        titulo: 'Licenciado en Sociología',
        institucion: 'Universidad de Buenos Aires, Facultad de Ciencias Sociales.',
        periodo: '2002 - 2007',
        logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
    },
    {
        id: 0,
        titulo: 'Técnico en Computación',
        institucion: 'Escuela Técnica Nº 3 D.E. 9 María Sanchez de Thompson.',
        periodo: '1992 - 1998',
        logo: 'https://i.postimg.cc/DysTvNy0/et3.jpg',
    },
];


/***/ }),

/***/ 1167:
/*!******************************!*\
  !*** ./src/app/rutas-api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiEndPoint": () => (/* binding */ ApiEndPoint)
/* harmony export */ });
var _a;
class ApiEndPoint {
}
_a = ApiEndPoint;
ApiEndPoint.apiURL = 'http://localhost:8088';
// public static apiURL = 'https://test-portfolio-fh.herokuapp.com';
ApiEndPoint.getPersona = _a.apiURL + '/ver/persona/';
ApiEndPoint.putPersona = _a.apiURL + '/modificar/persona/';
ApiEndPoint.postPersona = _a.apiURL + '/new/persona/';
ApiEndPoint.delPersona = _a.apiURL + '/delete/persona/';
ApiEndPoint.getEducacion = _a.apiURL + '/ver/educa/';
ApiEndPoint.delEducacion = _a.apiURL + '/delete/educa/';
ApiEndPoint.putEducacion = _a.apiURL + '/modificar/educa/';
ApiEndPoint.postEducacion = _a.apiURL + '/new/educa/';
ApiEndPoint.getTrabajo = _a.apiURL + '/ver/trabajo/';
ApiEndPoint.delTrabajo = _a.apiURL + '/delete/trabajo/';
ApiEndPoint.putTrabajo = _a.apiURL + '/modificar/trabajo/';
ApiEndPoint.postTrabajo = _a.apiURL + '/new/trabajo/';
ApiEndPoint.getSkill = _a.apiURL + '/ver/skill/';
ApiEndPoint.delSkill = _a.apiURL + '/delete/skill/';
ApiEndPoint.putSkill = _a.apiURL + '/modificar/skill/';
ApiEndPoint.postSkill = _a.apiURL + '/new/skill/';
ApiEndPoint.getIdioma = _a.apiURL + '/ver/idioma/';
ApiEndPoint.delIdioma = _a.apiURL + '/delete/idioma/';
ApiEndPoint.putIdioma = _a.apiURL + '/modificar/idioma/';
ApiEndPoint.postIdioma = _a.apiURL + '/new/idioma/';
ApiEndPoint.getProyecto = _a.apiURL + '/ver/proyecto/';
ApiEndPoint.delProyecto = _a.apiURL + '/delete/proyecto/';
ApiEndPoint.putProyecto = _a.apiURL + '/modificar/proyecto/';
ApiEndPoint.postProyecto = _a.apiURL + '/new/proyecto/';


/***/ }),

/***/ 8915:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password, formModal) {
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.SetUserData(result.user);
            this.afAuth.authState.subscribe((user) => {
                if (user) {
                    formModal.hide();
                }
            });
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        //return user !== null && user.emailVerified !== false ? true : false;
        return user !== null ? true : false;
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }
    // Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            //this.router.navigate(['sign-in']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7363:
/*!*******************************************************************************!*\
  !*** ./src/app/skills/skills-add-item-form/skills-add-item-form.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsAddItemFormComponent": () => (/* binding */ SkillsAddItemFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






function SkillsAddItemFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsAddItemFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El nombre debe tener al menos 3 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsAddItemFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsAddItemFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsAddItemFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function SkillsAddItemFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar valor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsAddItemFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingrese un valor entre 0 y 100. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsAddItemFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
} }
function SkillsAddItemFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsAddItemFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsAddItemFormComponent_ng_template_0_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsAddItemFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsAddItemFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsAddItemFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsAddItemFormComponent_ng_template_0_div_26_div_3_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["pattern"]);
} }
function SkillsAddItemFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hard & Soft Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsAddItemFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillsAddItemFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.portfolioNewItem.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SkillsAddItemFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Valor (1 a 100):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillsAddItemFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.portfolioNewItem.valor = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SkillsAddItemFormComponent_ng_template_0_div_20_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18)(22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enlace a la imagen del idioma:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillsAddItemFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.portfolioNewItem.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SkillsAddItemFormComponent_ng_template_0_div_26_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24)(30, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsAddItemFormComponent_ng_template_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.addItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsAddItemFormComponent_ng_template_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.cancelAddItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioNewItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class SkillsAddItemFormComponent {
    //ese logo por default cambiarlo luego
    constructor(modalService) {
        this.modalService = modalService;
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            valor: 0,
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
        };
    }
    ngOnInit() { }
    // revisar si algo de esto vale la pena
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    addItem() {
        if (this.portfolioNewItem.nombre.length === 0) {
            alert('Please add a task!'); //cambiar
            return;
        }
        this.onAddItem.emit(this.portfolioNewItem);
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            valor: 0,
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp', //luego quitar
        };
        this.modalService.dismissAll('guardar');
    }
    cancelAddItem() {
        this.portfolioNewItem = {
            id: 0,
            nombre: '',
            valor: 0,
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp', //luego quitar
        };
        this.modalService.dismissAll('cancelar');
    }
}
SkillsAddItemFormComponent.ɵfac = function SkillsAddItemFormComponent_Factory(t) { return new (t || SkillsAddItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
SkillsAddItemFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsAddItemFormComponent, selectors: [["app-skills-add-item-form"]], outputs: { onAddItem: "onAddItem" }, decls: 8, vars: 0, consts: [["modalAddPortfolio", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-plus"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-6", "p-2"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "nombre", "minlength", "3", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idDescripcion"], ["required", "", "type", "number", "name", "descripcion", "max", "100", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], [1, "col-md-12", "p-2"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function SkillsAddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillsAddItemFormComponent_ng_template_0_Template, 34, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsAddItemFormComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0Agregar\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMtYWRkLWl0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2062:
/*!*************************************************************************!*\
  !*** ./src/app/skills/skills-items-list/skills-items-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsItemsListComponent": () => (/* binding */ SkillsItemsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _skills_update_form_skills_update_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills-update-form/skills-update-form.component */ 8458);








function SkillsItemsListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "app-skills-update-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onUpdateItem", function SkillsItemsListComponent_div_11_Template_app_skills_update_form_onUpdateItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SkillsItemsListComponent_div_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onDelete(ctx_r3.portfolioItem)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("portfolioItemUpdate", ctx_r0.portfolioItem);
} }
class SkillsItemsListComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.portfolioItem = {
            id: 0,
            nombre: '',
            valor: 0,
            logo: '',
        };
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.misdatosPortfolioList = [];
        this.texto = '';
        this.editando = false;
        this.valor = ''; // para el circular progress bar
        this.masde50 = '';
    }
    ngOnInit() {
        this.datosPortfolio
            .obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getSkill)
            .subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
        this.valor = this.portfolioItem.valor.toString() + '%';
        if (this.portfolioItem.valor > 50) {
            this.masde50 = 'over50';
        }
        else {
            this.masde50 = '';
        }
    }
    onDelete(item) {
        this.onDeleteItem.emit(item);
    }
    onUpdate(itemPortfolio) {
        // lo que sigue acutaliza esta vista con el item
        // tal como estaba  antes de su cancelacion porque
        // sino con el binding tiene guardada la modificacion
        this.portfolioItem = itemPortfolio;
        if (this.portfolioItem.valor > 50) {
            this.masde50 = 'over50';
        }
        else {
            this.masde50 = '';
        }
        this.onUpdateItem.emit(itemPortfolio);
    }
}
SkillsItemsListComponent.ɵfac = function SkillsItemsListComponent_Factory(t) { return new (t || SkillsItemsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
SkillsItemsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SkillsItemsListComponent, selectors: [["app-skills-items-list"]], inputs: { portfolioItem: "portfolioItem" }, outputs: { onDeleteItem: "onDeleteItem", onUpdateItem: "onUpdateItem" }, decls: 12, vars: 7, consts: [[1, "col"], [1, "row", "justify-content-center"], ["height", "60", "width", "60", 3, "src"], [1, "left-half-clipper"], [1, "first50-bar"], [1, "value-bar"], [2, "padding-bottom", "10px", "text-align", "center"], [2, "margin-top", "-5px"], ["class", "btn-edit", "style", "padding-bottom: 20px;", 4, "ngIf"], [1, "btn-edit", 2, "padding-bottom", "20px"], ["ngbTooltip", "Editar \u00EDtem", 3, "portfolioItemUpdate", "onUpdateItem"], ["ngbTooltip", "Borrar \u00EDtem", 1, "pointer", "miboton-der", 3, "click"], [1, "fa", "fa-trash"]], template: function SkillsItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SkillsItemsListComponent_div_11_Template, 6, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate2"]("progress-circle ", ctx.masde50, " p", ctx.portfolioItem.valor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.portfolioItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _skills_update_form_skills_update_form_component__WEBPACK_IMPORTED_MODULE_3__.SkillsUpdateFormComponent], styles: [".progress-circle[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin: 20px;\n    position: relative; \n    padding: 0;\n    width: 5em;\n    height: 5em;\n    background-color: #F2E9E1; \n    border-radius: 50%;\n    line-height: 5em;\n }\n \n .progress-circle[_ngcontent-%COMP%]:after{\n     border: none;\n     position: absolute;\n     top: 0.35em;\n     left: 0.35em;\n     text-align: center;\n     display: block;\n     border-radius: 50%;\n     width: 4.3em;\n     height: 4.3em;\n     background-color: white;\n     content: \" \";\n }\n \n \n \n .progress-circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n     position: absolute;\n     line-height: 5em;\n     width: 5em;\n     text-align: center;\n     display: block;\n     color: cornflowerblue;\n     z-index: 2;\n }\n \n .left-half-clipper[_ngcontent-%COMP%] { \n    \n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n    position: absolute; \n    clip: rect(0, 5em, 5em, 2.5em);  \n }\n \n \n \n .progress-circle.over50[_ngcontent-%COMP%]   .left-half-clipper[_ngcontent-%COMP%] {\n    clip: rect(auto,auto,auto,auto);\n }\n \n .value-bar[_ngcontent-%COMP%] {\n     \n    position: absolute; \n    clip: rect(0, 2.5em, 5em, 0);\n    width: 5em;\n    height: 5em;\n    border-radius: 50%;\n    border: 0.45em solid #ffc107; \n     \n    box-sizing: border-box;\n   \n }\n \n \n \n .progress-circle.over50[_ngcontent-%COMP%]   .first50-bar[_ngcontent-%COMP%] {\n    \n    position: absolute; \n    clip: rect(0, 5em, 5em, 2.5em);\n    background-color: #ffc107;\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n }\n \n .progress-circle[_ngcontent-%COMP%]:not(.over50)   .first50-bar[_ngcontent-%COMP%]{ display: none; }\n \n \n \n .progress-circle.p0[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { display: none; }\n \n .progress-circle.p1[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(4deg); }\n \n .progress-circle.p2[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(7deg); }\n \n .progress-circle.p3[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(11deg); }\n \n .progress-circle.p4[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(14deg); }\n \n .progress-circle.p5[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(18deg); }\n \n .progress-circle.p6[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(22deg); }\n \n .progress-circle.p7[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(25deg); }\n \n .progress-circle.p8[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(29deg); }\n \n .progress-circle.p9[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(32deg); }\n \n .progress-circle.p10[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(36deg); }\n \n .progress-circle.p11[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(40deg); }\n \n .progress-circle.p12[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(43deg); }\n \n .progress-circle.p13[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(47deg); }\n \n .progress-circle.p14[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(50deg); }\n \n .progress-circle.p15[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(54deg); }\n \n .progress-circle.p16[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(58deg); }\n \n .progress-circle.p17[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(61deg); }\n \n .progress-circle.p18[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(65deg); }\n \n .progress-circle.p19[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(68deg); }\n \n .progress-circle.p20[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(72deg); }\n \n .progress-circle.p21[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(76deg); }\n \n .progress-circle.p22[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(79deg); }\n \n .progress-circle.p23[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(83deg); }\n \n .progress-circle.p24[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(86deg); }\n \n .progress-circle.p25[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(90deg); }\n \n .progress-circle.p26[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(94deg); }\n \n .progress-circle.p27[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(97deg); }\n \n .progress-circle.p28[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(101deg); }\n \n .progress-circle.p29[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(104deg); }\n \n .progress-circle.p30[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(108deg); }\n \n .progress-circle.p31[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(112deg); }\n \n .progress-circle.p32[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(115deg); }\n \n .progress-circle.p33[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(119deg); }\n \n .progress-circle.p34[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(122deg); }\n \n .progress-circle.p35[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(126deg); }\n \n .progress-circle.p36[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(130deg); }\n \n .progress-circle.p37[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(133deg); }\n \n .progress-circle.p38[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(137deg); }\n \n .progress-circle.p39[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(140deg); }\n \n .progress-circle.p40[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(144deg); }\n \n .progress-circle.p41[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(148deg); }\n \n .progress-circle.p42[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(151deg); }\n \n .progress-circle.p43[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(155deg); }\n \n .progress-circle.p44[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(158deg); }\n \n .progress-circle.p45[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(162deg); }\n \n .progress-circle.p46[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(166deg); }\n \n .progress-circle.p47[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(169deg); }\n \n .progress-circle.p48[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(173deg); }\n \n .progress-circle.p49[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(176deg); }\n \n .progress-circle.p50[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(180deg); }\n \n .progress-circle.p51[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(184deg); }\n \n .progress-circle.p52[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(187deg); }\n \n .progress-circle.p53[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(191deg); }\n \n .progress-circle.p54[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(194deg); }\n \n .progress-circle.p55[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(198deg); }\n \n .progress-circle.p56[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(202deg); }\n \n .progress-circle.p57[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(205deg); }\n \n .progress-circle.p58[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(209deg); }\n \n .progress-circle.p59[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(212deg); }\n \n .progress-circle.p60[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(216deg); }\n \n .progress-circle.p61[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(220deg); }\n \n .progress-circle.p62[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(223deg); }\n \n .progress-circle.p63[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(227deg); }\n \n .progress-circle.p64[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(230deg); }\n \n .progress-circle.p65[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(234deg); }\n \n .progress-circle.p66[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(238deg); }\n \n .progress-circle.p67[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(241deg); }\n \n .progress-circle.p68[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(245deg); }\n \n .progress-circle.p69[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(248deg); }\n \n .progress-circle.p70[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(252deg); }\n \n .progress-circle.p71[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(256deg); }\n \n .progress-circle.p72[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(259deg); }\n \n .progress-circle.p73[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(263deg); }\n \n .progress-circle.p74[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(266deg); }\n \n .progress-circle.p75[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(270deg); }\n \n .progress-circle.p76[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(274deg); }\n \n .progress-circle.p77[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(277deg); }\n \n .progress-circle.p78[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(281deg); }\n \n .progress-circle.p79[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(284deg); }\n \n .progress-circle.p80[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(288deg); }\n \n .progress-circle.p81[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(292deg); }\n \n .progress-circle.p82[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(295deg); }\n \n .progress-circle.p83[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(299deg); }\n \n .progress-circle.p84[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(302deg); }\n \n .progress-circle.p85[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(306deg); }\n \n .progress-circle.p86[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(310deg); }\n \n .progress-circle.p87[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(313deg); }\n \n .progress-circle.p88[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(317deg); }\n \n .progress-circle.p89[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(320deg); }\n \n .progress-circle.p90[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(324deg); }\n \n .progress-circle.p91[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(328deg); }\n \n .progress-circle.p92[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(331deg); }\n \n .progress-circle.p93[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(335deg); }\n \n .progress-circle.p94[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(338deg); }\n \n .progress-circle.p95[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(342deg); }\n \n .progress-circle.p96[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(346deg); }\n \n .progress-circle.p97[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(349deg); }\n \n .progress-circle.p98[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(353deg); }\n \n .progress-circle.p99[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(356deg); }\n \n .progress-circle.p100[_ngcontent-%COMP%]   .value-bar[_ngcontent-%COMP%] { transform: rotate(360deg); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy1pdGVtcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQixFQUFFLGtEQUFrRDtJQUN0RSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7Q0FFQTtLQUNJLFlBQVk7S0FDWixrQkFBa0I7S0FDbEIsV0FBVztLQUNYLFlBQVk7S0FDWixrQkFBa0I7S0FDbEIsY0FBYztLQUNkLGtCQUFrQjtLQUNsQixZQUFZO0tBQ1osYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixZQUFZO0NBQ2hCOztDQUNBLDRCQUE0Qjs7Q0FDNUI7S0FDSSxrQkFBa0I7S0FDbEIsZ0JBQWdCO0tBQ2hCLFVBQVU7S0FDVixrQkFBa0I7S0FDbEIsY0FBYztLQUNkLHFCQUFxQjtLQUNyQixVQUFVO0NBQ2Q7O0NBQ0E7SUFDRyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLDhCQUE4QixFQUFFLDZCQUE2QjtDQUNoRTs7Q0FDQSxtQ0FBbUM7O0NBQ25DO0lBQ0csK0JBQStCO0NBQ2xDOztDQUNBO0lBQ0c7O3VDQUVtQztJQUNuQyxrQkFBa0IsRUFBRSxzQkFBc0I7SUFDMUMsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QixFQUFFLG9FQUFvRTtJQUNsRyw2QkFBNkIsRUFBRSxjQUFjO0lBQzdDLHNCQUFzQjs7Q0FFekI7O0NBQ0EsbUVBQW1FOztDQUNuRTtJQUNHLCtEQUErRDtJQUMvRCxrQkFBa0IsRUFBRSxzQkFBc0I7SUFDMUMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7Q0FDZDs7Q0FDQSw0Q0FBNEMsYUFBYSxFQUFFOztDQUczRCxtQ0FBbUM7O0NBQ25DLGlDQUFpQyxhQUFhLEVBQUU7O0NBQ2hELGlDQUFpQyx1QkFBdUIsRUFBRTs7Q0FDMUQsaUNBQWlDLHVCQUF1QixFQUFFOztDQUMxRCxpQ0FBaUMsd0JBQXdCLEVBQUU7O0NBQzNELGlDQUFpQyx3QkFBd0IsRUFBRTs7Q0FDM0QsaUNBQWlDLHdCQUF3QixFQUFFOztDQUMzRCxpQ0FBaUMsd0JBQXdCLEVBQUU7O0NBQzNELGlDQUFpQyx3QkFBd0IsRUFBRTs7Q0FDM0QsaUNBQWlDLHdCQUF3QixFQUFFOztDQUMzRCxpQ0FBaUMsd0JBQXdCLEVBQUU7O0NBQzNELGtDQUFrQyx3QkFBd0IsRUFBRTs7Q0FDNUQsa0NBQWtDLHdCQUF3QixFQUFFOztDQUM1RCxrQ0FBa0Msd0JBQXdCLEVBQUU7O0NBQzVELGtDQUFrQyx3QkFBd0IsRUFBRTs7Q0FDNUQsa0NBQWtDLHdCQUF3QixFQUFFOztDQUM1RCxrQ0FBa0Msd0JBQXdCLEVBQUU7O0NBQzVELGtDQUFrQyx3QkFBd0IsRUFBRTs7Q0FDNUQsa0NBQWtDLHdCQUF3QixFQUFFOztDQUM1RCxrQ0FBa0Msd0JBQXdCLEVBQUU7O0NBQzVELGtDQUFrQyx3QkFBd0IsRUFBRTs7Q0FDNUQsa0NBQWtDLHdCQUF3QixFQUFFOztDQUM1RCxrQ0FBa0Msd0JBQXdCLEVBQUU7O0NBQzVELGtDQUFrQyx3QkFBd0IsRUFBRTs7Q0FDNUQsa0NBQWtDLHdCQUF3QixFQUFFOztDQUM1RCxrQ0FBa0Msd0JBQXdCLEVBQUU7O0NBQzVELGtDQUFrQyx3QkFBd0IsRUFBRTs7Q0FDNUQsa0NBQWtDLHdCQUF3QixFQUFFOztDQUM1RCxrQ0FBa0Msd0JBQXdCLEVBQUU7O0NBQzVELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELGtDQUFrQyx5QkFBeUIsRUFBRTs7Q0FDN0Qsa0NBQWtDLHlCQUF5QixFQUFFOztDQUM3RCxrQ0FBa0MseUJBQXlCLEVBQUU7O0NBQzdELG1DQUFtQyx5QkFBeUIsRUFBRSIsImZpbGUiOiJza2lsbHMtaXRlbXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuXG5cbi5wcm9ncmVzcy1jaXJjbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzbyB0aGF0IGNoaWxkcmVuIGNhbiBiZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgKi9cbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRTlFMTsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiA1ZW07XG4gfVxuIFxuIC5wcm9ncmVzcy1jaXJjbGU6YWZ0ZXJ7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6IDAuMzVlbTtcbiAgICAgbGVmdDogMC4zNWVtO1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgIHdpZHRoOiA0LjNlbTtcbiAgICAgaGVpZ2h0OiA0LjNlbTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgIGNvbnRlbnQ6IFwiIFwiO1xuIH1cbiAvKiBUZXh0IGluc2lkZSB0aGUgY29udHJvbCAqL1xuIC5wcm9ncmVzcy1jaXJjbGUgc3BhbiB7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgbGluZS1oZWlnaHQ6IDVlbTtcbiAgICAgd2lkdGg6IDVlbTtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICB6LWluZGV4OiAyO1xuIH1cbiAubGVmdC1oYWxmLWNsaXBwZXIgeyBcbiAgICAvKiBhIHJvdW5kIGNpcmNsZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNWVtO1xuICAgIGhlaWdodDogNWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogbmVlZGVkIGZvciBjbGlwcGluZyAqL1xuICAgIGNsaXA6IHJlY3QoMCwgNWVtLCA1ZW0sIDIuNWVtKTsgLyogY2xpcHMgdGhlIHdob2xlIGxlZnQgaGFsZiovIFxuIH1cbiAvKiB3aGVuIHA+NTAsIGRvbid0IGNsaXAgbGVmdCBoYWxmKi9cbiAucHJvZ3Jlc3MtY2lyY2xlLm92ZXI1MCAubGVmdC1oYWxmLWNsaXBwZXIge1xuICAgIGNsaXA6IHJlY3QoYXV0byxhdXRvLGF1dG8sYXV0byk7XG4gfVxuIC52YWx1ZS1iYXIge1xuICAgIC8qVGhpcyBpcyBhbiBvdmVybGF5ZWQgc3F1YXJlLCB0aGF0IGlzIG1hZGUgcm91bmQgd2l0aCB0aGUgYm9yZGVyIHJhZGl1cyxcbiAgICB0aGVuIGl0IGlzIGN1dCB0byBkaXNwbGF5IG9ubHkgdGhlIGxlZnQgaGFsZiwgdGhlbiByb3RhdGVkIGNsb2Nrd2lzZVxuICAgIHRvIGVzY2FwZSB0aGUgb3V0ZXIgY2xpcHBpbmcgcGF0aC4qLyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qbmVlZGVkIGZvciBjbGlwcGluZyovXG4gICAgY2xpcDogcmVjdCgwLCAyLjVlbSwgNWVtLCAwKTtcbiAgICB3aWR0aDogNWVtO1xuICAgIGhlaWdodDogNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDAuNDVlbSBzb2xpZCAjZmZjMTA3OyAvKlRoZSBib3JkZXIgaXMgMC4zNSBidXQgbWFraW5nIGl0IGxhcmdlciByZW1vdmVzIHZpc3VhbCBhcnRpZmFjdHMgKi9cbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0RDY0MkQ7Ki8gLyogZm9yIGRlYnVnICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIFxuIH1cbiAvKiBQcm9ncmVzcyBiYXIgZmlsbGluZyB0aGUgd2hvbGUgcmlnaHQgaGFsZiBmb3IgdmFsdWVzIGFib3ZlIDUwJSAqL1xuIC5wcm9ncmVzcy1jaXJjbGUub3ZlcjUwIC5maXJzdDUwLWJhciB7XG4gICAgLypQcm9ncmVzcyBiYXIgZm9yIHRoZSBmaXJzdCA1MCUsIGZpbGxpbmcgdGhlIHdob2xlIHJpZ2h0IGhhbGYqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLypuZWVkZWQgZm9yIGNsaXBwaW5nKi9cbiAgICBjbGlwOiByZWN0KDAsIDVlbSwgNWVtLCAyLjVlbSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBoZWlnaHQ6IDVlbTtcbiB9XG4gLnByb2dyZXNzLWNpcmNsZTpub3QoLm92ZXI1MCkgLmZpcnN0NTAtYmFyeyBkaXNwbGF5OiBub25lOyB9XG4gXG4gXG4gLyogUHJvZ3Jlc3MgYmFyIHJvdGF0aW9uIHBvc2l0aW9uICovXG4gLnByb2dyZXNzLWNpcmNsZS5wMCAudmFsdWUtYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDEgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDRkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAzIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA0IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA1IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA2IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA3IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA4IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyOWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA5IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzMmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAxMCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMTEgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDEyIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSg0M2RlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAxMyAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoNDdkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMTQgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDUwZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDE1IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAxNiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoNThkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMTcgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDYxZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDE4IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSg2NWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAxOSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMjAgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDIxIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSg3NmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAyMiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoNzlkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMjMgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDgzZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDI0IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSg4NmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAyNSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMjYgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDk0ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDI3IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSg5N2RlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAyOCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTAxZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDI5IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMDRkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMzAgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAzMSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTEyZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDMyIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMTVkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMzMgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDExOWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAzNCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTIyZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDM1IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMzYgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAzNyAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDM4IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMzdkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wMzkgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA0MCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDQxIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNDhkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNDIgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDE1MWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA0MyAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTU1ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDQ0IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNThkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNDUgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA0NiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTY2ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDQ3IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNjlkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNDggLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDE3M2RlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA0OSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTc2ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDUwIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNTEgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDE4NGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA1MiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTg3ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDUzIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxOTFkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNTQgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDE5NGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA1NSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDU2IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMDJkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNTcgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDIwNWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA1OCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjA5ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDU5IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMTJkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNjAgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA2MSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDYyIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMjNkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNjMgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDIyN2RlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA2NCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjMwZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDY1IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMzRkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNjYgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDIzOGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA2NyAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjQxZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDY4IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNDVkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNjkgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDI0OGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA3MCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDcxIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNTZkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNzIgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDI1OWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA3MyAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjYzZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDc0IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNjZkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNzUgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA3NiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjc0ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDc3IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNzdkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wNzggLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDI4MWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA3OSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjg0ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDgwIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyODhkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wODEgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDI5MmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA4MiAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMjk1ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDgzIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyOTlkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wODQgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDMwMmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA4NSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDg2IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzMTBkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wODcgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDMxM2RlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA4OCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMzE3ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDg5IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzMjBkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wOTAgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA5MSAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMzI4ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDkyIC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzMzFkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wOTMgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDMzNWRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA5NCAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMzM4ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDk1IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNDJkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wOTYgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDM0NmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnA5NyAudmFsdWUtYmFyIHsgdHJhbnNmb3JtOiByb3RhdGUoMzQ5ZGVnKTsgfVxuIC5wcm9ncmVzcy1jaXJjbGUucDk4IC52YWx1ZS1iYXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNTNkZWcpOyB9XG4gLnByb2dyZXNzLWNpcmNsZS5wOTkgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDM1NmRlZyk7IH1cbiAucHJvZ3Jlc3MtY2lyY2xlLnAxMDAgLnZhbHVlLWJhciB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0iXX0= */"] });


/***/ }),

/***/ 8458:
/*!***************************************************************************!*\
  !*** ./src/app/skills/skills-update-form/skills-update-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsUpdateFormComponent": () => (/* binding */ SkillsUpdateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ 7936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function SkillsUpdateFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsUpdateFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre debe tener al menos 3 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsUpdateFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SkillsUpdateFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SkillsUpdateFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function SkillsUpdateFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar valor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsUpdateFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingrese un valor entre 0 y 100. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SkillsUpdateFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
} }
function SkillsUpdateFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsUpdateFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsUpdateFormComponent_ng_template_0_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsUpdateFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SkillsUpdateFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SkillsUpdateFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SkillsUpdateFormComponent_ng_template_0_div_26_div_3_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["pattern"]);
} }
function SkillsUpdateFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsUpdateFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SkillsUpdateFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.portfolioItemUpdate.nombre = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SkillsUpdateFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Valor (1 a 100):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SkillsUpdateFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.portfolioItemUpdate.valor = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SkillsUpdateFormComponent_ng_template_0_div_20_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18)(22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Enlace a la imagen del idioma:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SkillsUpdateFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.portfolioItemUpdate.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SkillsUpdateFormComponent_ng_template_0_div_26_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 24)(30, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsUpdateFormComponent_ng_template_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.saveUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsUpdateFormComponent_ng_template_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.cancelUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class SkillsUpdateFormComponent {
    constructor(datosPortfolio, modalService) {
        this.datosPortfolio = datosPortfolio;
        this.modalService = modalService;
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.portfolioItemUpdate = {
            id: 0,
            nombre: '',
            valor: 0,
            logo: '',
        };
        this.portfolioOriginalItem = {
            id: 0,
            nombre: '',
            valor: 0,
            logo: '',
        };
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getSkill).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
    }
    saveUpdate() {
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        this.modalService.dismissAll();
    }
    cancelUpdate() {
        this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        //  this.principalComponent.cancelUpdateEducacion(this.educacionOriginalItem);
        // ya no hace falta esa llamada porque hice un doble emit - emit hasta llegar
        // al formulario principal que tiene la lista de items.
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
            this.onUpdateItem.emit(this.portfolioItemUpdate);
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
SkillsUpdateFormComponent.ɵfac = function SkillsUpdateFormComponent_Factory(t) { return new (t || SkillsUpdateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
SkillsUpdateFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillsUpdateFormComponent, selectors: [["app-skills-update-form"]], inputs: { portfolioItemUpdate: "portfolioItemUpdate" }, outputs: { onUpdateItem: "onUpdateItem" }, decls: 6, vars: 0, consts: [["content", ""], [1, "pointer", "miboton-izq", 3, "click"], [1, "fa", "fa-pen"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-6", "p-2"], ["for", "idTitulo"], ["required", "", "type", "text", "name", "nombre", "minlength", "3", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["n", "ngModel"], ["class", "form-error", 4, "ngIf"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "max", "100", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], [1, "col-md-12", "p-2"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function SkillsUpdateFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SkillsUpdateFormComponent_ng_template_0_Template, 34, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsUpdateFormComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMtdXBkYXRlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5490:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rutas-api */ 1167);
/* harmony import */ var _restaurar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurar */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _skills_items_list_skills_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills-items-list/skills-items-list.component */ 2062);
/* harmony import */ var _skills_add_item_form_skills_add_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-add-item-form/skills-add-item-form.component */ 7363);








function SkillsComponent_app_skills_items_list_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-skills-items-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDeleteItem", function SkillsComponent_app_skills_items_list_7_Template_app_skills_items_list_onDeleteItem_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const itemPortfolio_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteItem(itemPortfolio_r2)); })("onUpdateItem", function SkillsComponent_app_skills_items_list_7_Template_app_skills_items_list_onUpdateItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.updateItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cargando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPortfolio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("portfolioItem", itemPortfolio_r2);
} }
function SkillsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SkillsComponent_div_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.restaurar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0\u00A0Restaurar\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-skills-add-item-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAddItem", function SkillsComponent_div_8_Template_app_skills_add_item_form_onAddItem_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.addItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
class SkillsComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getSkill).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    addItem(itemPortfolio) {
        this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postSkill, itemPortfolio).subscribe((item) => {
            this.misdatosPortfolioList.push(item);
        });
    }
    updateItem(itemPortfolio) {
        this.datosPortfolio.updateItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.putSkill, itemPortfolio).subscribe((item) => {
        });
    }
    deleteItem(itemPortfolio) {
        this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delSkill, itemPortfolio).subscribe(() => {
            this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element) => {
                return element.id !== itemPortfolio.id;
            });
        });
    }
    restaurar() {
        this.misdatosPortfolioList.forEach((element, index) => {
            this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delSkill, element).subscribe(() => {
            });
        });
        this.misdatosPortfolioList.splice(0);
        _restaurar__WEBPACK_IMPORTED_MODULE_1__.Restaurar.skills.forEach((element, index) => {
            this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postSkill, element).subscribe((item) => {
                this.misdatosPortfolioList.push(item);
            });
        });
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 9, vars: 2, consts: [[1, "card", "mat-card", 2, "border", "1px solid #5aaee8"], [1, "card", "card-title", "border-0", "bg-light", "ps-3", "p-1", "pt-2", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"], [2, "color", "#47397b"], [1, "container"], [1, "row", "row-cols-md-4"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem", 4, "ngFor", "ngForOf"], ["class", "card-footer pe-3", "style", "border-top: 1px solid #5aaee8; background-color: white", 4, "ngIf"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem"], [1, "card-footer", "pe-3", 2, "border-top", "1px solid #5aaee8", "background-color", "white"], [2, "text-align", "right"], ["type", "button", 1, "btn-edit", "me-2", "p-1", "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-undo"], [3, "onAddItem"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Hard & Soft Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SkillsComponent_app_skills_items_list_7_Template, 2, 1, "app-skills-items-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SkillsComponent_div_8_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.misdatosPortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _skills_items_list_skills_items_list_component__WEBPACK_IMPORTED_MODULE_4__.SkillsItemsListComponent, _skills_add_item_form_skills_add_item_form_component__WEBPACK_IMPORTED_MODULE_5__.SkillsAddItemFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3488:
/*!**********************************************************************************!*\
  !*** ./src/app/trabajo/trabajo-add-item-form/trabajo-add-item-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoAddItemFormComponent": () => (/* binding */ TrabajoAddItemFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);






function TrabajoAddItemFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrabajoAddItemFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrabajoAddItemFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function TrabajoAddItemFormComponent_ng_template_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar periodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrabajoAddItemFormComponent_ng_template_0_div_20_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrabajoAddItemFormComponent_ng_template_0_div_20_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function TrabajoAddItemFormComponent_ng_template_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar puesto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrabajoAddItemFormComponent_ng_template_0_div_26_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrabajoAddItemFormComponent_ng_template_0_div_26_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
} }
function TrabajoAddItemFormComponent_ng_template_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 33);
} }
function TrabajoAddItemFormComponent_ng_template_0_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrabajoAddItemFormComponent_ng_template_0_div_33_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrabajoAddItemFormComponent_ng_template_0_div_33_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors["minlength"]);
} }
function TrabajoAddItemFormComponent_ng_template_0_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_39_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrabajoAddItemFormComponent_ng_template_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrabajoAddItemFormComponent_ng_template_0_div_39_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrabajoAddItemFormComponent_ng_template_0_div_39_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrabajoAddItemFormComponent_ng_template_0_div_39_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors["pattern"]);
} }
function TrabajoAddItemFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrabajoAddItemFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lugar de trabajo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrabajoAddItemFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.portfolioNewItem.lugar = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TrabajoAddItemFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15)(16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Per\u00EDodo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrabajoAddItemFormComponent_ng_template_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.portfolioNewItem.periodo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TrabajoAddItemFormComponent_ng_template_0_div_20_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15)(22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Puesto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrabajoAddItemFormComponent_ng_template_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.portfolioNewItem.puesto = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TrabajoAddItemFormComponent_ng_template_0_div_26_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TrabajoAddItemFormComponent_ng_template_0_div_27_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10)(29, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrabajoAddItemFormComponent_ng_template_0_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.portfolioNewItem.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TrabajoAddItemFormComponent_ng_template_0_div_33_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10)(35, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enlace a la imagen del trabajo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrabajoAddItemFormComponent_ng_template_0_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.portfolioNewItem.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TrabajoAddItemFormComponent_ng_template_0_div_39_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30)(43, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrabajoAddItemFormComponent_ng_template_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.addItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrabajoAddItemFormComponent_ng_template_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.cancelAddItem(_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.lugar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r8.invalid && (_r8.dirty || _r8.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.portfolioNewItem.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.invalid && (_r13.dirty || _r13.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioNewItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class TrabajoAddItemFormComponent {
    //ese logo por default cambiarlo luego
    constructor(modalService) {
        this.modalService = modalService;
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.portfolioNewItem = {
            id: 0,
            puesto: '',
            descripcion: '',
            lugar: '',
            logo: 'https://i.postimg.cc/MGTTj7JR/715px-UBA-svg.webp',
            periodo: '',
        };
    }
    ngOnInit() { }
    // revisar si algo de esto vale la pena
    open(content) {
        this.modalService
            .open(content, { modalDialogClass: 'my-class', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    addItem() {
        this.onAddItem.emit(this.portfolioNewItem);
        this.portfolioNewItem = {
            id: 0,
            puesto: '',
            descripcion: '',
            lugar: '',
            logo: '',
            periodo: '',
        };
        this.modalService.dismissAll('guardar');
    }
    cancelAddItem(form) {
        this.portfolioNewItem = {
            id: 0,
            puesto: '',
            descripcion: '',
            lugar: '',
            logo: '',
            periodo: '',
        };
        this.modalService.dismissAll('cancelar');
    }
}
TrabajoAddItemFormComponent.ɵfac = function TrabajoAddItemFormComponent_Factory(t) { return new (t || TrabajoAddItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
TrabajoAddItemFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrabajoAddItemFormComponent, selectors: [["app-trabajo-add-item-form"]], outputs: { onAddItem: "onAddItem" }, decls: 8, vars: 0, consts: [["modalAddPortfolio", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-plus"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-12", "p-2"], ["for", "idLugar", 1, "my-class"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "lugar", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lugar", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "col-md-6", "p-2"], ["for", "idPeriodo"], ["type", "text", "name", "periodo", "required", "", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["periodo", "ngModel"], ["for", "idPuesto"], ["type", "text", "name", "puesto", "required", "", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["puesto", "ngModel"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen del trabajo.", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function TrabajoAddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrabajoAddItemFormComponent_ng_template_0_Template, 47, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrabajoAddItemFormComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0Agregar\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0\n");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvLWFkZC1pdGVtLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ 3388:
/*!****************************************************************************!*\
  !*** ./src/app/trabajo/trabajo-items-list/trabajo-items-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoItemsListComponent": () => (/* binding */ TrabajoItemsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _trabajo_update_form_trabajo_update_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trabajo-update-form/trabajo-update-form.component */ 1525);








function TrabajoItemsListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "app-trabajo-update-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onUpdateItem", function TrabajoItemsListComponent_div_12_Template_app_trabajo_update_form_onUpdateItem_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onUpdate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TrabajoItemsListComponent_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onDelete(ctx_r3.portfolioItem)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("portfolioItemUpdate", ctx_r0.portfolioItem);
} }
class TrabajoItemsListComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.portfolioItem = {
            id: 0,
            lugar: '',
            puesto: '',
            descripcion: '',
            periodo: '',
            logo: '',
        };
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.misdatosPortfolioList = [];
        this.texto = '';
        this.editando = false;
    }
    ngOnInit() {
        this.datosPortfolio
            .obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getTrabajo)
            .subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    onDelete(item) {
        this.onDeleteItem.emit(item);
    }
    onUpdate(itemPortfolio) {
        // lo que sigue actaliza esta vista con el item
        // tal como estaba  antes de su cancelacion porque
        // sino con el binding tiene guardada la modificacion
        this.portfolioItem = itemPortfolio;
        this.onUpdateItem.emit(itemPortfolio);
    }
}
TrabajoItemsListComponent.ɵfac = function TrabajoItemsListComponent_Factory(t) { return new (t || TrabajoItemsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
TrabajoItemsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TrabajoItemsListComponent, selectors: [["app-trabajo-items-list"]], inputs: { portfolioItem: "portfolioItem" }, outputs: { onDeleteItem: "onDeleteItem", onUpdateItem: "onUpdateItem" }, decls: 13, vars: 6, consts: [[1, "row", "p-3", "d-flex"], [1, "col-md-2", "p-0", "justify-content-center", "text-center"], ["alt", "logo", "height", "90", "max-width", "90", 2, "border-radius", "50%", 3, "src"], [1, "col-md-8", "p-0"], [2, "color", "rgba(0, 0, 0, 0.75)"], [2, "white-space", "pre-line"], ["class", "col-md-2 pe-3 pt-3", "style", "text-align: right", 4, "ngIf"], [1, "col-md-2", "pe-3", "pt-3", 2, "text-align", "right"], [1, "btn-edit"], ["ngbTooltip", "Editar \u00EDtem", 3, "portfolioItemUpdate", "onUpdateItem"], ["ngbTooltip", "Borrar \u00EDtem", 1, "pointer", "miboton-der", 3, "click"], [1, "fa", "fa-trash"]], template: function TrabajoItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TrabajoItemsListComponent_div_12_Template, 7, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.portfolioItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.periodo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.portfolioItem.lugar, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.portfolioItem.puesto, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.portfolioItem.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _trabajo_update_form_trabajo_update_form_component__WEBPACK_IMPORTED_MODULE_3__.TrabajoUpdateFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvLWl0ZW1zLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1525:
/*!******************************************************************************!*\
  !*** ./src/app/trabajo/trabajo-update-form/trabajo-update-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoUpdateFormComponent": () => (/* binding */ TrabajoUpdateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rutas-api */ 1167);
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portfolio.service */ 7936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);








function TrabajoUpdateFormComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar nombre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrabajoUpdateFormComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrabajoUpdateFormComponent_ng_template_0_div_14_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["minlength"]);
} }
function TrabajoUpdateFormComponent_ng_template_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 33);
} }
function TrabajoUpdateFormComponent_ng_template_0_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar periodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrabajoUpdateFormComponent_ng_template_0_div_21_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrabajoUpdateFormComponent_ng_template_0_div_21_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors["minlength"]);
} }
function TrabajoUpdateFormComponent_ng_template_0_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar puesto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrabajoUpdateFormComponent_ng_template_0_div_27_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrabajoUpdateFormComponent_ng_template_0_div_27_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors["minlength"]);
} }
function TrabajoUpdateFormComponent_ng_template_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 33);
} }
function TrabajoUpdateFormComponent_ng_template_0_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar texto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El texto debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrabajoUpdateFormComponent_ng_template_0_div_34_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrabajoUpdateFormComponent_ng_template_0_div_34_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.errors == null ? null : _r12.errors["minlength"]);
} }
function TrabajoUpdateFormComponent_ng_template_0_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar un enlace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El enlace debe tener al menos 4 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ingresar una direcci\u00F3n de enlace v\u00E1lida (https://...)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TrabajoUpdateFormComponent_ng_template_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrabajoUpdateFormComponent_ng_template_0_div_40_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TrabajoUpdateFormComponent_ng_template_0_div_40_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TrabajoUpdateFormComponent_ng_template_0_div_40_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.errors == null ? null : _r14.errors["pattern"]);
} }
function TrabajoUpdateFormComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrabajoUpdateFormComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "form", null, 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Lugar de trabajo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TrabajoUpdateFormComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.portfolioItemUpdate.lugar = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TrabajoUpdateFormComponent_ng_template_0_div_14_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TrabajoUpdateFormComponent_ng_template_0_div_15_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15)(17, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Per\u00EDodo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TrabajoUpdateFormComponent_ng_template_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.portfolioItemUpdate.periodo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TrabajoUpdateFormComponent_ng_template_0_div_21_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Puesto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TrabajoUpdateFormComponent_ng_template_0_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.portfolioItemUpdate.puesto = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TrabajoUpdateFormComponent_ng_template_0_div_27_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TrabajoUpdateFormComponent_ng_template_0_div_28_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TrabajoUpdateFormComponent_ng_template_0_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.portfolioItemUpdate.descripcion = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, TrabajoUpdateFormComponent_ng_template_0_div_34_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10)(36, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Enlace a la imagen del trabajo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TrabajoUpdateFormComponent_ng_template_0_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.portfolioItemUpdate.logo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, TrabajoUpdateFormComponent_ng_template_0_div_40_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 30)(44, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrabajoUpdateFormComponent_ng_template_0_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.saveUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrabajoUpdateFormComponent_ng_template_0_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.cancelUpdate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.lugar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(_r4.invalid && (_r4.dirty || _r4.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(_r9.invalid && (_r9.dirty || _r9.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.portfolioItemUpdate.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.portfolioItemUpdate.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class TrabajoUpdateFormComponent {
    constructor(datosPortfolio, modalService) {
        this.datosPortfolio = datosPortfolio;
        this.modalService = modalService;
        this.onUpdateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.portfolioItemUpdate = {
            id: 0,
            puesto: '',
            descripcion: '',
            lugar: '',
            logo: '',
            periodo: '',
        };
        this.portfolioOriginalItem = {
            id: 0,
            puesto: '',
            descripcion: '',
            lugar: '',
            logo: '',
            periodo: '',
        };
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getTrabajo).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
    }
    saveUpdate() {
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
        this.modalService.dismissAll();
    }
    cancelUpdate() {
        this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
        this.onUpdateItem.emit(this.portfolioItemUpdate);
        //  this.principalComponent.cancelUpdateEducacion(this.educacionOriginalItem);
        // ya no hace falta esa llamada porque hice un doble emit - emit hasta llegar
        // al formulario principal que tiene la lista de items.
        this.modalService.dismissAll();
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
            this.onUpdateItem.emit(this.portfolioItemUpdate);
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
TrabajoUpdateFormComponent.ɵfac = function TrabajoUpdateFormComponent_Factory(t) { return new (t || TrabajoUpdateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
TrabajoUpdateFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrabajoUpdateFormComponent, selectors: [["app-trabajo-update-form"]], inputs: { portfolioItemUpdate: "portfolioItemUpdate" }, outputs: { onUpdateItem: "onUpdateItem" }, decls: 6, vars: 0, consts: [["content", ""], [1, "pointer", "miboton-izq", 3, "click"], [1, "fa", "fa-pen"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["form", "ngForm"], [1, "containter"], [1, "row"], [1, "col-md-12", "p-2"], ["for", "idLugar", 1, "my-class"], ["required", "", "minlength", "4", "maxlength", "255", "type", "text", "name", "lugar", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lugar", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "col-md-6", "p-2"], ["for", "idPeriodo"], ["type", "text", "name", "periodo", "required", "", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["periodo", "ngModel"], ["for", "idPuesto"], ["type", "text", "name", "puesto", "required", "", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["puesto", "ngModel"], ["for", "idDescripcion"], ["required", "", "type", "text", "name", "descripcion", "minlength", "4", "maxlength", "255", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["for", "idLogo"], ["name", "foto", "type", "text", "required", "", "placeholder", "https://", "minlength", "4", "maxlength", "255", "pattern", "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ip", "ngModel"], [1, "col-md-12", "p-2", 2, "text-align", "center"], ["alt", "Imagen de idioma", 2, "max-width", "300px", 3, "src"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-error"], [4, "ngIf"]], template: function TrabajoUpdateFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TrabajoUpdateFormComponent_ng_template_0_Template, 48, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrabajoUpdateFormComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvLXVwZGF0ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4353:
/*!**********************************************!*\
  !*** ./src/app/trabajo/trabajo.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoComponent": () => (/* binding */ TrabajoComponent)
/* harmony export */ });
/* harmony import */ var _rutas_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rutas-api */ 1167);
/* harmony import */ var _restaurar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurar */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio.service */ 7936);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _trabajo_items_list_trabajo_items_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trabajo-items-list/trabajo-items-list.component */ 3388);
/* harmony import */ var _trabajo_add_item_form_trabajo_add_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trabajo-add-item-form/trabajo-add-item-form.component */ 3488);








function TrabajoComponent_app_trabajo_items_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-trabajo-items-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDeleteItem", function TrabajoComponent_app_trabajo_items_list_5_Template_app_trabajo_items_list_onDeleteItem_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const itemPortfolio_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteItem(itemPortfolio_r2)); })("onUpdateItem", function TrabajoComponent_app_trabajo_items_list_5_Template_app_trabajo_items_list_onUpdateItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.updateItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cargando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPortfolio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("portfolioItem", itemPortfolio_r2);
} }
function TrabajoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TrabajoComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.restaurar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00A0\u00A0Restaurar\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-trabajo-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAddItem", function TrabajoComponent_div_6_Template_app_trabajo_add_item_form_onAddItem_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.addItem($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
class TrabajoComponent {
    constructor(datosPortfolio, authService) {
        this.datosPortfolio = datosPortfolio;
        this.authService = authService;
        this.misdatosPortfolioList = [];
    }
    ngOnInit() {
        this.datosPortfolio.obtenerDatosPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.getTrabajo).subscribe((data) => {
            this.misdatosPortfolioList = data;
        });
    }
    addItem(itemPortfolio) {
        this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postTrabajo, itemPortfolio).subscribe((item) => {
            this.misdatosPortfolioList.push(item);
        });
    }
    updateItem(itemPortfolio) {
        this.datosPortfolio.updateItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.putTrabajo, itemPortfolio).subscribe((item) => {
        });
    }
    deleteItem(itemPortfolio) {
        this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delTrabajo, itemPortfolio).subscribe(() => {
            this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element) => {
                return element.id !== itemPortfolio.id;
            });
        });
    }
    restaurar() {
        this.misdatosPortfolioList.forEach((element, index) => {
            this.datosPortfolio.deleteItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.delTrabajo, element).subscribe(() => {
            });
        });
        this.misdatosPortfolioList.splice(0);
        _restaurar__WEBPACK_IMPORTED_MODULE_1__.Restaurar.trabajos.forEach((element, index) => {
            this.datosPortfolio.addItemPortfolio(_rutas_api__WEBPACK_IMPORTED_MODULE_0__.ApiEndPoint.postTrabajo, element).subscribe((item) => {
                this.misdatosPortfolioList.push(item);
            });
        });
    }
}
TrabajoComponent.ɵfac = function TrabajoComponent_Factory(t) { return new (t || TrabajoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_portfolio_service__WEBPACK_IMPORTED_MODULE_2__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
TrabajoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TrabajoComponent, selectors: [["app-trabajo"]], decls: 7, vars: 2, consts: [[1, "card", "mat-card", 2, "border", "1px solid #5aaee8"], [1, "card", "card-title", "border-0", "bg-light", "ps-3", "p-1", "pt-2", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"], [2, "color", "#47397b"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem", 4, "ngFor", "ngForOf"], ["class", "card-footer pe-3", "style", "border-top: 1px solid #5aaee8; background-color: white", 4, "ngIf"], [3, "portfolioItem", "onDeleteItem", "onUpdateItem"], [1, "card-footer", "pe-3", 2, "border-top", "1px solid #5aaee8", "background-color", "white"], [2, "text-align", "right"], ["type", "button", 1, "btn-edit", "me-2", "p-1", "btn", "btn-sm", "btn-primary", "rounded-pill", 3, "click"], [1, "fa", "fa-undo"], [3, "onAddItem"]], template: function TrabajoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Experiencia Laboral");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TrabajoComponent_app_trabajo_items_list_5_Template, 2, 1, "app-trabajo-items-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, TrabajoComponent_div_6_Template, 7, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.misdatosPortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _trabajo_items_list_trabajo_items_list_component__WEBPACK_IMPORTED_MODULE_4__.TrabajoItemsListComponent, _trabajo_add_item_form_trabajo_add_item_form_component__WEBPACK_IMPORTED_MODULE_5__.TrabajoAddItemFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyC0w25YgOXOLTN6bKwL_a22eQZMLz6Q2jE',
        authDomain: 'portfolioap-cccf4.firebaseapp.com',
        projectId: 'portfolioap-cccf4',
        storageBucket: 'portfolioap-cccf4.appspot.com',
        messagingSenderId: '1005142047503',
        databaseURL: "https://portfolioap-cccf4-default-rtdb.firebaseio.com",
        appId: '1:1005142047503:web:67c24ece9f150703f11c7a',
        measurementId: 'G-SGLNZNJM2L',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1736), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map