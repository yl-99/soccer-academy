function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/player/player.component */
    "./src/app/pages/player/player.component.ts");
    /* harmony import */


    var _pages_coach_coach_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/coach/coach.component */
    "./src/app/pages/coach/coach.component.ts");
    /* harmony import */


    var _pages_sub_form_sub_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/sub-form/sub-form.component */
    "./src/app/pages/sub-form/sub-form.component.ts");
    /* harmony import */


    var _pages_player_technique_technique_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/player/technique/technique.component */
    "./src/app/pages/player/technique/technique.component.ts");
    /* harmony import */


    var _pages_player_skill_skill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/player/skill/skill.component */
    "./src/app/pages/player/skill/skill.component.ts");
    /* harmony import */


    var _pages_player_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/player/fitness/fitness.component */
    "./src/app/pages/player/fitness/fitness.component.ts");
    /* harmony import */


    var _pages_player_positioning_positioning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/player/positioning/positioning.component */
    "./src/app/pages/player/positioning/positioning.component.ts");
    /* harmony import */


    var _pages_player_planning_planning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/player/planning/planning.component */
    "./src/app/pages/player/planning/planning.component.ts");
    /* harmony import */


    var _pages_coach_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/coach/equipment/equipment.component */
    "./src/app/pages/coach/equipment/equipment.component.ts");
    /* harmony import */


    var _pages_coach_drills_drills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/coach/drills/drills.component */
    "./src/app/pages/coach/drills/drills.component.ts");
    /* harmony import */


    var _pages_coach_plan_plan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/coach/plan/plan.component */
    "./src/app/pages/coach/plan/plan.component.ts");
    /* harmony import */


    var _pages_coach_persona_persona_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/coach/persona/persona.component */
    "./src/app/pages/coach/persona/persona.component.ts");
    /* harmony import */


    var _pages_player_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/player/howtoplay/howtoplay.component */
    "./src/app/pages/player/howtoplay/howtoplay.component.ts");
    /* harmony import */


    var _pages_player_player_recruit_player_recruit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/player/player-recruit/player-recruit.component */
    "./src/app/pages/player/player-recruit/player-recruit.component.ts");
    /* harmony import */


    var _pages_coach_howtoplay_coach_howtoplay_coach_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/coach/howtoplay-coach/howtoplay-coach.component */
    "./src/app/pages/coach/howtoplay-coach/howtoplay-coach.component.ts");
    /* harmony import */


    var _pages_coach_coach_recruit_coach_recruit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/coach/coach-recruit/coach-recruit.component */
    "./src/app/pages/coach/coach-recruit/coach-recruit.component.ts");

    var routes = [{
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'player',
      component: _pages_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"],
      children: [{
        path: '',
        redirectTo: '/player/howtoplay',
        pathMatch: 'full'
      }, {
        path: 'howtoplay',
        component: _pages_player_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_15__["HowtoplayComponent"]
      }, {
        path: 'technique',
        component: _pages_player_technique_technique_component__WEBPACK_IMPORTED_MODULE_6__["TechniqueComponent"]
      }, {
        path: 'skill',
        component: _pages_player_skill_skill_component__WEBPACK_IMPORTED_MODULE_7__["SkillComponent"]
      }, {
        path: 'fitness',
        component: _pages_player_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_8__["FitnessComponent"]
      }, {
        path: 'positioning',
        component: _pages_player_positioning_positioning_component__WEBPACK_IMPORTED_MODULE_9__["PositioningComponent"]
      }, {
        path: 'planning',
        component: _pages_player_planning_planning_component__WEBPACK_IMPORTED_MODULE_10__["PlanningComponent"]
      }, {
        path: 'playerrecruit',
        component: _pages_player_player_recruit_player_recruit_component__WEBPACK_IMPORTED_MODULE_16__["PlayerRecruitComponent"]
      }]
    }, {
      path: 'coach',
      component: _pages_coach_coach_component__WEBPACK_IMPORTED_MODULE_4__["CoachComponent"],
      children: [{
        path: '',
        redirectTo: '/coach/howtoplay',
        pathMatch: 'full'
      }, {
        path: 'howtoplay',
        component: _pages_coach_howtoplay_coach_howtoplay_coach_component__WEBPACK_IMPORTED_MODULE_17__["HowtoplayCoachComponent"]
      }, {
        path: 'coachrecruit',
        component: _pages_coach_coach_recruit_coach_recruit_component__WEBPACK_IMPORTED_MODULE_18__["CoachRecruitComponent"]
      }, {
        path: 'drills',
        component: _pages_coach_drills_drills_component__WEBPACK_IMPORTED_MODULE_12__["DrillsComponent"]
      }, {
        path: 'equipment',
        component: _pages_coach_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_11__["EquipmentComponent"]
      }, {
        path: 'persona',
        component: _pages_coach_persona_persona_component__WEBPACK_IMPORTED_MODULE_14__["PersonaComponent"]
      }, {
        path: 'plan',
        component: _pages_coach_plan_plan_component__WEBPACK_IMPORTED_MODULE_13__["PlanComponent"]
      }]
    }, {
      path: 'newsletter',
      component: _pages_sub_form_sub_form_component__WEBPACK_IMPORTED_MODULE_5__["SubFormComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_nav_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleSideBar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BASICS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TECHNIQUE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SKILL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FITNESS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "POSITIONING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PLANNING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "RECRUITMENT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HOME");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_nav_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_3_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleSideBar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BASICS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EQUIPMENT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DRILLS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PLANNING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "PERSONALITY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RECRUITMENT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HOME");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'soccerAcademy';
        router.events.subscribe(function (val) {
          // see also 
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            var res = val.url.split("/");
            _this.path = res[1];
          }
        });
      }

      _createClass(AppComponent, [{
        key: "toggleSideBar",
        value: function toggleSideBar() {
          document.getElementsByClassName("sideNavBar")[0].classList.toggle("active");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 2,
      consts: [["routerLink", "/home"], ["id", "logo", "src", "../assets/images/logo.png"], ["class", "sideNavBar", 4, "ngIf"], [1, "sideNavBar"], ["id", "toggleBtn", 3, "click"], ["routerLink", "/player/howtoplay"], ["routerLink", "/player/technique"], ["routerLink", "/player/skill"], ["routerLink", "/player/fitness"], ["routerLink", "/player/positioning"], ["routerLink", "/player/planning"], ["routerLink", "/player/playerrecruit"], ["routerLink", "/coach/howtoplay"], ["routerLink", "/coach/equipment"], ["routerLink", "/coach/drills"], ["routerLink", "/coach/plan"], ["routerLink", "/coach/persona"], ["routerLink", "/coach/coachrecruit"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_nav_2_Template, 22, 0, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_nav_3_Template, 20, 0, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path === "player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path === "coach");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["#logo[_ngcontent-%COMP%]{\r\n    width: 70px; \r\n    height: 70px;\r\n    margin-left: 750px;\r\n  }\r\n.sideNavBar[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100px;\r\n    left:-200px;\r\n    top:0px;\r\n}\r\n.sideNavBar.active[_ngcontent-%COMP%]{\r\n    left:-15px;\r\n    transition: 300ms;\r\n}\r\n.sideNavBar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: rgb(252, 252, 255);\r\n    font-size: 12px;\r\n    list-style: none;\r\n    padding: 15px 20px;\r\n    margin-bottom: 10px;\r\n    width: 80px;\r\n    height: 10px;\r\n    border: 3px solid rgb(252, 252, 255);\r\n    background-color: rgb(84, 84, 85);\r\n    border-radius:10px;\r\n\r\n}\r\n.sideNavBar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    color: rgb(0, 0, 0);\r\n    border: 3px solid rgb(84, 84, 85);   \r\n    background-color: rgb(252, 252, 255);\r\n    margin-left: 10px;\r\n    transition:background-color 300ms ease-in;\r\n    transition: margin-left 300ms ease-in;\r\n    cursor: pointer;\r\n}\r\n.sideNavBar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n    -webkit-margin-before: 0px;\r\n            margin-block-start: 0px;\r\n}\r\n#toggleBtn[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:0px;\r\n    left:200px;\r\n}\r\n#toggleBtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 20px;\r\n    height: 5px;\r\n    margin: 5px;\r\n    background-color: rgb(46, 46, 46);\r\n}\r\n.foot[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: black;\r\n    width: 100%;\r\n    left: 0px;\r\n}\r\n.foot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    display:inline;\r\n    margin: 20px;\r\n    color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztBQUNYO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QiwwQkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ297XHJcbiAgICB3aWR0aDogNzBweDsgXHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUwcHg7XHJcbiAgfVxyXG4uc2lkZU5hdkJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGxlZnQ6LTIwMHB4O1xyXG4gICAgdG9wOjBweDtcclxufVxyXG4uc2lkZU5hdkJhci5hY3RpdmV7XHJcbiAgICBsZWZ0Oi0xNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbn1cclxuLnNpZGVOYXZCYXIgbGl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1MiwgMjUyLCAyNTUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTIsIDI1MiwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgODQsIDg1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuXHJcbn1cclxuLnNpZGVOYXZCYXIgbGk6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDg0LCA4NCwgODUpOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDMwMG1zIGVhc2UtaW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNpZGVOYXZCYXIgdWx7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XHJcbn1cclxuI3RvZ2dsZUJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjIwMHB4O1xyXG59XHJcbiN0b2dnbGVCdG4gc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xyXG59ICBcclxuXHJcbi5mb290e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG4uZm9vdCBwe1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/player/player.component */
    "./src/app/pages/player/player.component.ts");
    /* harmony import */


    var _pages_coach_coach_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/coach/coach.component */
    "./src/app/pages/coach/coach.component.ts");
    /* harmony import */


    var _pages_sub_form_sub_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/sub-form/sub-form.component */
    "./src/app/pages/sub-form/sub-form.component.ts");
    /* harmony import */


    var _pages_player_technique_technique_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/player/technique/technique.component */
    "./src/app/pages/player/technique/technique.component.ts");
    /* harmony import */


    var _pages_player_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/player/skill/skill.component */
    "./src/app/pages/player/skill/skill.component.ts");
    /* harmony import */


    var _pages_player_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/player/fitness/fitness.component */
    "./src/app/pages/player/fitness/fitness.component.ts");
    /* harmony import */


    var _pages_player_positioning_positioning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/player/positioning/positioning.component */
    "./src/app/pages/player/positioning/positioning.component.ts");
    /* harmony import */


    var _pages_player_planning_planning_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/player/planning/planning.component */
    "./src/app/pages/player/planning/planning.component.ts");
    /* harmony import */


    var _pages_coach_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/coach/equipment/equipment.component */
    "./src/app/pages/coach/equipment/equipment.component.ts");
    /* harmony import */


    var _pages_coach_drills_drills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/coach/drills/drills.component */
    "./src/app/pages/coach/drills/drills.component.ts");
    /* harmony import */


    var _pages_coach_plan_plan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/coach/plan/plan.component */
    "./src/app/pages/coach/plan/plan.component.ts");
    /* harmony import */


    var _pages_coach_persona_persona_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/coach/persona/persona.component */
    "./src/app/pages/coach/persona/persona.component.ts");
    /* harmony import */


    var _pages_player_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/player/howtoplay/howtoplay.component */
    "./src/app/pages/player/howtoplay/howtoplay.component.ts");
    /* harmony import */


    var _pages_player_player_recruit_player_recruit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/player/player-recruit/player-recruit.component */
    "./src/app/pages/player/player-recruit/player-recruit.component.ts");
    /* harmony import */


    var _pages_coach_coach_recruit_coach_recruit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/coach/coach-recruit/coach-recruit.component */
    "./src/app/pages/coach/coach-recruit/coach-recruit.component.ts");
    /* harmony import */


    var _pages_coach_howtoplay_coach_howtoplay_coach_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/coach/howtoplay-coach/howtoplay-coach.component */
    "./src/app/pages/coach/howtoplay-coach/howtoplay-coach.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"], _pages_coach_coach_component__WEBPACK_IMPORTED_MODULE_6__["CoachComponent"], _pages_sub_form_sub_form_component__WEBPACK_IMPORTED_MODULE_7__["SubFormComponent"], _pages_player_technique_technique_component__WEBPACK_IMPORTED_MODULE_8__["TechniqueComponent"], _pages_player_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__["SkillComponent"], _pages_player_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_10__["FitnessComponent"], _pages_player_positioning_positioning_component__WEBPACK_IMPORTED_MODULE_11__["PositioningComponent"], _pages_player_planning_planning_component__WEBPACK_IMPORTED_MODULE_12__["PlanningComponent"], _pages_coach_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_13__["EquipmentComponent"], _pages_coach_drills_drills_component__WEBPACK_IMPORTED_MODULE_14__["DrillsComponent"], _pages_coach_plan_plan_component__WEBPACK_IMPORTED_MODULE_15__["PlanComponent"], _pages_coach_persona_persona_component__WEBPACK_IMPORTED_MODULE_16__["PersonaComponent"], _pages_player_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_17__["HowtoplayComponent"], _pages_player_player_recruit_player_recruit_component__WEBPACK_IMPORTED_MODULE_18__["PlayerRecruitComponent"], _pages_coach_coach_recruit_coach_recruit_component__WEBPACK_IMPORTED_MODULE_19__["CoachRecruitComponent"], _pages_coach_howtoplay_coach_howtoplay_coach_component__WEBPACK_IMPORTED_MODULE_20__["HowtoplayCoachComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"], _pages_coach_coach_component__WEBPACK_IMPORTED_MODULE_6__["CoachComponent"], _pages_sub_form_sub_form_component__WEBPACK_IMPORTED_MODULE_7__["SubFormComponent"], _pages_player_technique_technique_component__WEBPACK_IMPORTED_MODULE_8__["TechniqueComponent"], _pages_player_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__["SkillComponent"], _pages_player_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_10__["FitnessComponent"], _pages_player_positioning_positioning_component__WEBPACK_IMPORTED_MODULE_11__["PositioningComponent"], _pages_player_planning_planning_component__WEBPACK_IMPORTED_MODULE_12__["PlanningComponent"], _pages_coach_equipment_equipment_component__WEBPACK_IMPORTED_MODULE_13__["EquipmentComponent"], _pages_coach_drills_drills_component__WEBPACK_IMPORTED_MODULE_14__["DrillsComponent"], _pages_coach_plan_plan_component__WEBPACK_IMPORTED_MODULE_15__["PlanComponent"], _pages_coach_persona_persona_component__WEBPACK_IMPORTED_MODULE_16__["PersonaComponent"], _pages_player_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_17__["HowtoplayComponent"], _pages_player_player_recruit_player_recruit_component__WEBPACK_IMPORTED_MODULE_18__["PlayerRecruitComponent"], _pages_coach_coach_recruit_coach_recruit_component__WEBPACK_IMPORTED_MODULE_19__["CoachRecruitComponent"], _pages_coach_howtoplay_coach_howtoplay_coach_component__WEBPACK_IMPORTED_MODULE_20__["HowtoplayCoachComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/coach-recruit/coach-recruit.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/coach/coach-recruit/coach-recruit.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CoachRecruitComponent */

  /***/
  function srcAppPagesCoachCoachRecruitCoachRecruitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachRecruitComponent", function () {
      return CoachRecruitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CoachRecruitComponent = /*#__PURE__*/function () {
      function CoachRecruitComponent() {
        _classCallCheck(this, CoachRecruitComponent);
      }

      _createClass(CoachRecruitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoachRecruitComponent;
    }();

    CoachRecruitComponent.ɵfac = function CoachRecruitComponent_Factory(t) {
      return new (t || CoachRecruitComponent)();
    };

    CoachRecruitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CoachRecruitComponent,
      selectors: [["app-coach-recruit"]],
      decls: 10,
      vars: 0,
      consts: [[1, "coachrecruit"], ["src", "../../../../assets/images/recruit.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"]],
      template: function CoachRecruitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recruitment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD Of course without players you can not have a team to build. So picking and choosing the right players that best fit your style of play is key.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD Going to to scouting events such as tryouts, kick-arounds, or college showcases can give you an opportunity to meet players. It is important to know what you want on your team, and not be totally picky, as some players may surprise you in the long end.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvY29hY2gtcmVjcnVpdC9jb2FjaC1yZWNydWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvYWNoL2NvYWNoLXJlY3J1aXQvY29hY2gtcmVjcnVpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoachRecruitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-coach-recruit',
          templateUrl: './coach-recruit.component.html',
          styleUrls: ['./coach-recruit.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/coach.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/coach/coach.component.ts ***!
    \************************************************/

  /*! exports provided: CoachComponent */

  /***/
  function srcAppPagesCoachCoachComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachComponent", function () {
      return CoachComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CoachComponent = /*#__PURE__*/function () {
      function CoachComponent() {
        _classCallCheck(this, CoachComponent);
      }

      _createClass(CoachComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoachComponent;
    }();

    CoachComponent.ɵfac = function CoachComponent_Factory(t) {
      return new (t || CoachComponent)();
    };

    CoachComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CoachComponent,
      selectors: [["app-coach"]],
      decls: 2,
      vars: 0,
      consts: [[1, "info"]],
      template: function CoachComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".info[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: sans-serif;\r\n    color: rgb(80, 77, 77);\r\n    margin-bottom: 70px;\r\n    margin-left: 110px;\r\n    margin-right: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvY29hY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29hY2gvY29hY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoODAsIDc3LCA3Nyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoachComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-coach',
          templateUrl: './coach.component.html',
          styleUrls: ['./coach.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/drills/drills.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/coach/drills/drills.component.ts ***!
    \********************************************************/

  /*! exports provided: DrillsComponent */

  /***/
  function srcAppPagesCoachDrillsDrillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrillsComponent", function () {
      return DrillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DrillsComponent = /*#__PURE__*/function () {
      function DrillsComponent() {
        _classCallCheck(this, DrillsComponent);
      }

      _createClass(DrillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DrillsComponent;
    }();

    DrillsComponent.ɵfac = function DrillsComponent_Factory(t) {
      return new (t || DrillsComponent)();
    };

    DrillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DrillsComponent,
      selectors: [["app-drills"]],
      decls: 20,
      vars: 0,
      consts: [[1, "howtoplay"], ["src", "../../../../assets/images/drills.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["href", "https://www.soccerxpert.com/drills", "target", "_blank", 2, "text-decoration", "none", "color", "rgb(80, 77, 77)"]],
      template: function DrillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Drills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD Choosing the right drills and showcasing them to your team is either make or break when it comes to the teams success.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD The foundation of how a team performs is the technicality and efficiency of the drills.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD Certain days you can focus on shooting, passing, or game play such as how how formation will work during a game.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD Most of the time it is good to include a little game or scrimmage at the end so the players can have a little fun, and implement the stuff they practiced within the game or scrimmage.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u26BD Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " for example drills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvZHJpbGxzL2RyaWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb2FjaC9kcmlsbHMvZHJpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-drills',
          templateUrl: './drills.component.html',
          styleUrls: ['./drills.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/equipment/equipment.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/coach/equipment/equipment.component.ts ***!
    \**************************************************************/

  /*! exports provided: EquipmentComponent */

  /***/
  function srcAppPagesCoachEquipmentEquipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function () {
      return EquipmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EquipmentComponent = /*#__PURE__*/function () {
      function EquipmentComponent() {
        _classCallCheck(this, EquipmentComponent);
      }

      _createClass(EquipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EquipmentComponent;
    }();

    EquipmentComponent.ɵfac = function EquipmentComponent_Factory(t) {
      return new (t || EquipmentComponent)();
    };

    EquipmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentComponent,
      selectors: [["app-equipment"]],
      decls: 14,
      vars: 0,
      consts: [[1, "howtoplay"], ["src", "../../../../assets/images/equip.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["href", "https://www.networldsports.com/soccer/soccer-training-equipment", "target", "_blank", 2, "text-decoration", "none", "color", "rgb(80, 77, 77)"]],
      template: function EquipmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Equipment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD Having the basic equipment such as cones and a soccer bag full of balls is essential for a good for a practice, but if you want to add a little more the better the practices will be.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " for equipment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvZXF1aXBtZW50L2VxdWlwbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb2FjaC9lcXVpcG1lbnQvZXF1aXBtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-equipment',
          templateUrl: './equipment.component.html',
          styleUrls: ['./equipment.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/howtoplay-coach/howtoplay-coach.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/coach/howtoplay-coach/howtoplay-coach.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HowtoplayCoachComponent */

  /***/
  function srcAppPagesCoachHowtoplayCoachHowtoplayCoachComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowtoplayCoachComponent", function () {
      return HowtoplayCoachComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HowtoplayCoachComponent = /*#__PURE__*/function () {
      function HowtoplayCoachComponent() {
        _classCallCheck(this, HowtoplayCoachComponent);
      }

      _createClass(HowtoplayCoachComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HowtoplayCoachComponent;
    }();

    HowtoplayCoachComponent.ɵfac = function HowtoplayCoachComponent_Factory(t) {
      return new (t || HowtoplayCoachComponent)();
    };

    HowtoplayCoachComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HowtoplayCoachComponent,
      selectors: [["app-howtoplay-coach"]],
      decls: 126,
      vars: 0,
      consts: [[1, "howtoplay"], ["src", "../../../../assets/images/soccerball.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["src", "../../../../assets/images/field.png", "width", "350", "height", "350", 2, "margin-left", "485px"], ["src", "../../../../assets/images/positions.png", "width", "350", "height", "350", 2, "margin-left", "485px"], [2, "color", "red"], [2, "color", "rgb(231, 231, 6)"], ["href", "https://img.fifa.com/image/upload/khhloe2xoigyna8juxw3.pdf", "target", "_blank", 2, "text-decoration", "none", "color", "rgb(80, 77, 77)"]],
      template: function HowtoplayCoachComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Basics Of The Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GAMEPLAY:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD Most soccer games consist of a total of 22 players on the field, 11 players for each of the 2 teams on the field, with a few substitutes on each bench. Youth games or special games such as indoor soccer of futsal may contain less players.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD A single referee within the field, mostly along the center of field and 2 other sideline referees, standing on opposite sides of the sides where the goals are not present. The center referee is there to primary call fouls, and the side referee's are there to primarily call offsides.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u26BD The objective of the game is to put the ball on the opposite teams goal; illegal to score with your hands or arms. A point is rewarded for each ball put into the goal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u26BD Corner flags are placed on each corner of the field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u26BD Most games consist of 90 minutes; 45 minutes each half. In youth games this may be less.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "POSITIONS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u26BD The main positions are GoalKeeper, Defender, MidFielder, Attacker. These positions can be mixed depending on the formation the team decides to play.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u26BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MUST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " have GoalKeeper, cannot play without one. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "RULES:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u26BD ONLY the GoalKeeper is allowed to use hands, as long as they are within the 18 yard box, they are allowed to use other parts at anytime. Other players may not use ther hands, but are allowed to use everything else. NOTE: These other players are allowed to use hands on a throwin; throwin's will be explained down below.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u26BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ANY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " tackle of some sort towards another opposing player is called a foul. Pushing is called a foul. Use of any body part against another player that is deemed by the referee to be too aggressive will be called a foul.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u26BD Fouls that are called primarily by the center referee, and a player could possibly be given the fallowing two cards depending on the situation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Card: meaning the player is thrown out of the game and may serve future match bans. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Yellow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " card: meaning the player is issued a caution and is still able to stay on the field and play. A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Yellow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Card: Meaning another Yellow card will be displayed to the player, which turns into a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " card, that will result in the player to be removed from the game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u26BD A foul maybe called but if deemed not too aggressive but a little reckless by the referee, then no card will be awarded only a verbal warning.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u26BD In an event of any foul a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "freekick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " is awarded to the opposing team. A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "freekick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " is where a single player chosen from the awarded team, places the ball where the foul is committed and kicks the ball back into play, or into the goal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u26BD If a foul was called on the defending team in their own 18 yard box, then a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "penalty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " kick is awarded to the opposing team. In a penalty kick a single player chosen from the awarded team, places the ball on the penalty spot, and gets to have a shot one on one versus the goalkeeper. All of the other players are to be on the edge of the 18 yard box, and the penalty arc, where they may not interfere with the play, until it has been kicked/touched by the player taking the shot.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u26BD A ball kicked out from the field that crossed the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "side line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ", the sides where the goals are ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "NOT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " present, results in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "throwin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " for the team that did not kick the ball out. A player is chosen from the awarded team and throws the ball back into play from the where the ball crossed the sideline.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u26BD A ball kicked out from field that crossed the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "end line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ", the sides where the goal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "IS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " present, results in either a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "goal kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " or a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "corner kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ". This actions results in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "goal kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " if the attacking team kicked the ball out. This action results in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "corner kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " if the defending team kicked the ball out.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u26BD In an event of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "goal kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " the opposing goalkeeper, of the attacking team, places the ball on the six yard box(gaolkeeper's box) and restarts the play from there with a kick. In an event of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "corner kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ", the opposing team of the defending teams, chooses a single player to kick the ball back into play from the corner flag. The designated corner flag is determined by the direction of the ball from where it went out of play.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u26BD An ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "offsides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " call is called when an attacking team attempts to play a ball to one of its players that is behind the last defender of the defending team. If the ball left the foot of the passer while the other teammate is behind the last defender of the defending side, then it is called. If not, or if this incident happens on the attacking teams half, then offsides is not called.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "* For more information on gameplay and rules visit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "FifaLawsOfTheGame");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvaG93dG9wbGF5LWNvYWNoL2hvd3RvcGxheS1jb2FjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb2FjaC9ob3d0b3BsYXktY29hY2gvaG93dG9wbGF5LWNvYWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowtoplayCoachComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-howtoplay-coach',
          templateUrl: './howtoplay-coach.component.html',
          styleUrls: ['./howtoplay-coach.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/persona/persona.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/coach/persona/persona.component.ts ***!
    \**********************************************************/

  /*! exports provided: PersonaComponent */

  /***/
  function srcAppPagesCoachPersonaPersonaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonaComponent", function () {
      return PersonaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PersonaComponent = /*#__PURE__*/function () {
      function PersonaComponent() {
        _classCallCheck(this, PersonaComponent);
      }

      _createClass(PersonaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonaComponent;
    }();

    PersonaComponent.ɵfac = function PersonaComponent_Factory(t) {
      return new (t || PersonaComponent)();
    };

    PersonaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonaComponent,
      selectors: [["app-persona"]],
      decls: 20,
      vars: 0,
      consts: [[1, "howtoplay"], ["src", "../../../../assets/images/coach.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"]],
      template: function PersonaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Personality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD With any team you want the players to be happy with their coach, you do not want conflicts or problems among the team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD Being flexible and welling to help the players when they are down is key.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD Make sure everyone should feel included, do not show favoritism among the players. Make sure they all feel as they are equal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD Maybe have activities as a team outside of soccer to have the overall chemistry and moral of the team be higher.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u26BD Although during practice you would want to be serious most of the time, do not be afraid to show a little fun as it will make the players wan to play soccer more and be apart of your team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u26BD Do not be afraid to ask the players for assistance on what could be done better when the team is falling. Communication between these times can make the team strong and better as a whole.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u26BD Make sure the players are given time to ask questions, and if they are struggling with drills regroup and talk about how to fix it as a team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvcGVyc29uYS9wZXJzb25hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvYWNoL3BlcnNvbmEvcGVyc29uYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-persona',
          templateUrl: './persona.component.html',
          styleUrls: ['./persona.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/coach/plan/plan.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/coach/plan/plan.component.ts ***!
    \****************************************************/

  /*! exports provided: PlanComponent */

  /***/
  function srcAppPagesCoachPlanPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanComponent", function () {
      return PlanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PlanComponent = /*#__PURE__*/function () {
      function PlanComponent() {
        _classCallCheck(this, PlanComponent);
      }

      _createClass(PlanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlanComponent;
    }();

    PlanComponent.ɵfac = function PlanComponent_Factory(t) {
      return new (t || PlanComponent)();
    };

    PlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlanComponent,
      selectors: [["app-plan"]],
      decls: 18,
      vars: 0,
      consts: [[1, "howtoplay"], ["src", "../../../../assets/images/soccerball.jpg", "width", "500", "height", "333", 2, "position", "relative", "left", "500px"], ["href", "https://www.canva.com/create/personal-planners/", "target", "_blank", 2, "text-decoration", "none", "color", "rgb(80, 77, 77)"]],
      template: function PlanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Planning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD Planning is very important when it come to keeping the team organized and successful.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD Be sure to have a plan of what drills you will be doing with the team throughout the week.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD Make sure to stay on schedule and keep in mind who will be starting in the next game and who will be on the bench.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " for an online planner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29hY2gvcGxhbi9wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvYWNoL3BsYW4vcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plan',
          templateUrl: './plan.component.html',
          styleUrls: ['./plan.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this["switch"] = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 0,
      consts: [[1, "nav"], ["routerLink", "/player", "id", "player"], ["routerLink", "/coach", "id", "coach"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Soccer Academy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The How To For All Things Soccer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I AM A PLAYER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I AM A COACH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["h1[_ngcontent-%COMP%]{\r\n    -webkit-margin-before: 0px;\r\n            margin-block-start: 0px;\r\n    font-size: 55px;\r\n    text-align: center;\r\n}\r\nh1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    text-align: center;\r\n    margin-top: 150px;\r\n    margin-bottom: 351px;\r\n}\r\n#player[_ngcontent-%COMP%]{\r\n    color: white;\r\n    width: 100px;\r\n\theight: 70px;\r\n    border-radius:15px;\r\n    border-color: black;\r\n    background: #555;\r\n    margin-right: 80px;\r\n}\r\n#coach[_ngcontent-%COMP%]{\r\n    color: white;\r\n    width: 100px;\r\n\theight: 70px;\r\n    border-radius:15px;\r\n    border-color: black;\r\n    background: #555;\r\n    margin-right: 80px; \r\n}\r\n#subscribe[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top:60px;\r\n    left:650px;\r\n    margin: 100px;\r\n    border-radius: 20px;\r\n    \r\n}\r\n#player[_ngcontent-%COMP%]:hover{\r\n\r\n}\r\n#coach[_ngcontent-%COMP%]:hover{\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7Q0FDZixZQUFZO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmLFlBQVk7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMSBwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5uYXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1MXB4O1xyXG59XHJcbiNwbGF5ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbn1cclxuI2NvYWNoe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4OyBcclxufVxyXG4jc3Vic2NyaWJle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NjBweDtcclxuICAgIGxlZnQ6NjUwcHg7XHJcbiAgICBtYXJnaW46IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG59XHJcbiNwbGF5ZXI6aG92ZXJ7XHJcblxyXG59XHJcbiNjb2FjaDpob3ZlcntcclxuICAgIFxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/fitness/fitness.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/player/fitness/fitness.component.ts ***!
    \***********************************************************/

  /*! exports provided: FitnessComponent */

  /***/
  function srcAppPagesPlayerFitnessFitnessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitnessComponent", function () {
      return FitnessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FitnessComponent = /*#__PURE__*/function () {
      function FitnessComponent() {
        _classCallCheck(this, FitnessComponent);
      }

      _createClass(FitnessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FitnessComponent;
    }();

    FitnessComponent.ɵfac = function FitnessComponent_Factory(t) {
      return new (t || FitnessComponent)();
    };

    FitnessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FitnessComponent,
      selectors: [["app-fitness"]],
      decls: 38,
      vars: 0,
      consts: [[1, "technique"], ["src", "../../../../assets/images/fitness.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/aFb8JUMramg", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/rSZ0bWUHLQw", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/jCdTxouGAic", "autoplay", "1"]],
      template: function FitnessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fitness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u26BD Fitness is a very important aspect of soccer. This primarily consists of your cardiovascular endurance(running, agility), muscle, and eating healthy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CARDIOVASCULAR ENDURANCE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD In an 90 minute game an average player covers a total distance of 7 miles, to be able to keep up a player must practice their endurance. Doing drills that require running and a quick change of direction will improve your endurance to that of a pro.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MUSCLE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u26BD Having muscle can help allot with the aggressiveness that is involved with the game. You will be able to stay on your feet allot more without getting easily knocked down.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u26BD Certain work outs can not only help you stay up on the field but also increase your speed and agility.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "EATING HEALTHY:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u26BD Eating the right foods can make you more efficient during games and practices. The better you eat the better you will feel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u26BD Get the right amount of each nutrient such as carbohydrates, proteins, vitamins.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL2ZpdG5lc3MvZml0bmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5ZXIvZml0bmVzcy9maXRuZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FitnessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fitness',
          templateUrl: './fitness.component.html',
          styleUrls: ['./fitness.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/howtoplay/howtoplay.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/player/howtoplay/howtoplay.component.ts ***!
    \***************************************************************/

  /*! exports provided: HowtoplayComponent */

  /***/
  function srcAppPagesPlayerHowtoplayHowtoplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowtoplayComponent", function () {
      return HowtoplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HowtoplayComponent = /*#__PURE__*/function () {
      function HowtoplayComponent() {
        _classCallCheck(this, HowtoplayComponent);
      }

      _createClass(HowtoplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HowtoplayComponent;
    }();

    HowtoplayComponent.ɵfac = function HowtoplayComponent_Factory(t) {
      return new (t || HowtoplayComponent)();
    };

    HowtoplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HowtoplayComponent,
      selectors: [["app-howtoplay"]],
      decls: 126,
      vars: 0,
      consts: [[1, "howtoplay"], ["src", "../../../../assets/images/soccerball.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["src", "../../../../assets/images/field.png", "width", "350", "height", "350", 2, "margin-left", "485px"], ["src", "../../../../assets/images/positions.png", "width", "350", "height", "350", 2, "margin-left", "485px"], [2, "color", "red"], [2, "color", "rgb(231, 231, 6)"], ["href", "https://img.fifa.com/image/upload/khhloe2xoigyna8juxw3.pdf", "target", "_blank", 2, "text-decoration", "none", "color", "rgb(80, 77, 77)"]],
      template: function HowtoplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Basics Of The Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GAMEPLAY:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD Most soccer games consist of a total of 22 players on the field, 11 players for each of the 2 teams on the field, with a few substitutes on each bench. Youth games or special games such as indoor soccer of futsal may contain less players.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD A single referee within the field, mostly along the center of field and 2 other sideline referees, standing on opposite sides of the sides where the goals are not present. The center referee is there to primary call fouls, and the side referee's are there to primarily call offsides.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u26BD The objective of the game is to put the ball on the opposite teams goal; illegal to score with your hands or arms. A point is rewarded for each ball put into the goal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u26BD Corner flags are placed on each corner of the field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u26BD Most games consist of 90 minutes; 45 minutes each half. In youth games this may be less.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "POSITIONS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u26BD The main positions are GoalKeeper, Defender, MidFielder, Attacker. These positions can be mixed depending on the formation the team decides to play.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u26BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MUST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " have GoalKeeper, cannot play without one. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "RULES:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u26BD ONLY the GoalKeeper is allowed to use hands, as long as they are within the 18 yard box, they are allowed to use other parts at anytime. Other players may not use ther hands, but are allowed to use everything else. NOTE: These other players are allowed to use hands on a throwin; throwin's will be explained down below.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u26BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ANY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " tackle of some sort towards another opposing player is called a foul. Pushing is called a foul. Use of any body part against another player that is deemed by the referee to be too aggressive will be called a foul.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u26BD Fouls that are called primarily by the center referee, and a player could possibly be given the fallowing two cards depending on the situation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Card: meaning the player is thrown out of the game and may serve future match bans. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Yellow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " card: meaning the player is issued a caution and is still able to stay on the field and play. A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Yellow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Card: Meaning another Yellow card will be displayed to the player, which turns into a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " card, that will result in the player to be removed from the game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u26BD A foul maybe called but if deemed not too aggressive but a little reckless by the referee, then no card will be awarded only a verbal warning.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u26BD In an event of any foul a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "freekick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " is awarded to the opposing team. A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "freekick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " is where a single player chosen from the awarded team, places the ball where the foul is committed and kicks the ball back into play, or into the goal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u26BD If a foul was called on the defending team in their own 18 yard box, then a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "penalty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " kick is awarded to the opposing team. In a penalty kick a single player chosen from the awarded team, places the ball on the penalty spot, and gets to have a shot one on one versus the goalkeeper. All of the other players are to be on the edge of the 18 yard box, and the penalty arc, where they may not interfere with the play, until it has been kicked/touched by the player taking the shot.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u26BD A ball kicked out from the field that crossed the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "side line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ", the sides where the goals are ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "NOT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " present, results in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "throwin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " for the team that did not kick the ball out. A player is chosen from the awarded team and throws the ball back into play from the where the ball crossed the sideline.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u26BD A ball kicked out from field that crossed the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "end line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ", the sides where the goal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "IS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " present, results in either a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "goal kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " or a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "corner kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ". This actions results in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "goal kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " if the attacking team kicked the ball out. This action results in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "corner kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " if the defending team kicked the ball out.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u26BD In an event of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "goal kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " the opposing goalkeeper, of the attacking team, places the ball on the six yard box(gaolkeeper's box) and restarts the play from there with a kick. In an event of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "corner kick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ", the opposing team of the defending teams, chooses a single player to kick the ball back into play from the corner flag. The designated corner flag is determined by the direction of the ball from where it went out of play.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u26BD An ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "offsides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " call is called when an attacking team attempts to play a ball to one of its players that is behind the last defender of the defending team. If the ball left the foot of the passer while the other teammate is behind the last defender of the defending side, then it is called. If not, or if this incident happens on the attacking teams half, then offsides is not called.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "* For more information on gameplay and rules visit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "FifaLawsOfTheGame");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL2hvd3RvcGxheS9ob3d0b3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyL2hvd3RvcGxheS9ob3d0b3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmgze1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowtoplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-howtoplay',
          templateUrl: './howtoplay.component.html',
          styleUrls: ['./howtoplay.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/planning/planning.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/player/planning/planning.component.ts ***!
    \*************************************************************/

  /*! exports provided: PlanningComponent */

  /***/
  function srcAppPagesPlayerPlanningPlanningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanningComponent", function () {
      return PlanningComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PlanningComponent = /*#__PURE__*/function () {
      function PlanningComponent() {
        _classCallCheck(this, PlanningComponent);
      }

      _createClass(PlanningComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlanningComponent;
    }();

    PlanningComponent.ɵfac = function PlanningComponent_Factory(t) {
      return new (t || PlanningComponent)();
    };

    PlanningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlanningComponent,
      selectors: [["app-planning"]],
      decls: 14,
      vars: 0,
      consts: [[1, "technique"], ["src", "../../../../assets/images/planning.png", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["href", "https://www.canva.com/create/personal-planners/", "target", "_blank", 2, "text-decoration", "none", "color", "rgb(80, 77, 77)"]],
      template: function PlanningComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Planning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD Planning your practices and workouts can be a great supplement to your progression as a player. Writing down your plans is a great way to start.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " for an online planner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3BsYW5uaW5nL3BsYW5uaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGFubmluZy9wbGFubmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-planning',
          templateUrl: './planning.component.html',
          styleUrls: ['./planning.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/player-recruit/player-recruit.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/player/player-recruit/player-recruit.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PlayerRecruitComponent */

  /***/
  function srcAppPagesPlayerPlayerRecruitPlayerRecruitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerRecruitComponent", function () {
      return PlayerRecruitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PlayerRecruitComponent = /*#__PURE__*/function () {
      function PlayerRecruitComponent() {
        _classCallCheck(this, PlayerRecruitComponent);
      }

      _createClass(PlayerRecruitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlayerRecruitComponent;
    }();

    PlayerRecruitComponent.ɵfac = function PlayerRecruitComponent_Factory(t) {
      return new (t || PlayerRecruitComponent)();
    };

    PlayerRecruitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerRecruitComponent,
      selectors: [["app-player-recruit"]],
      decls: 14,
      vars: 0,
      consts: [[1, "technique"], ["src", "../../../../assets/images/recruit.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/yjrZ352elXc", "autoplay", "1"]],
      template: function PlayerRecruitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recruitment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u26BD Once you feel confidant in your playing ability, now it is the time to show the world what you got.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u26BD Getting recruited to play for youth clubs can be achieved by attending tryouts or kick-arounds, these are primarily available in the summer, a few can be offered in the spring.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD If you are wanting to play college, while you are in highschool make sure to build connections with the college coaches overtime to have them come out to a couple of games and check you out. Below are some tips for college soccer to get you started.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3BsYXllci1yZWNydWl0L3BsYXllci1yZWNydWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItcmVjcnVpdC9wbGF5ZXItcmVjcnVpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerRecruitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player-recruit',
          templateUrl: './player-recruit.component.html',
          styleUrls: ['./player-recruit.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/player.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/player/player.component.ts ***!
    \**************************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppPagesPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent() {
        _classCallCheck(this, PlayerComponent);
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)();
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      decls: 2,
      vars: 0,
      consts: [[1, "info"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".info[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-family: sans-serif;\r\n    color: rgb(80, 77, 77);\r\n    margin-bottom: 70px;\r\n    margin-left: 110px;\r\n    margin-right: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDgwLCA3NywgNzcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/positioning/positioning.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/player/positioning/positioning.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PositioningComponent */

  /***/
  function srcAppPagesPlayerPositioningPositioningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositioningComponent", function () {
      return PositioningComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PositioningComponent = /*#__PURE__*/function () {
      function PositioningComponent() {
        _classCallCheck(this, PositioningComponent);
      }

      _createClass(PositioningComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PositioningComponent;
    }();

    PositioningComponent.ɵfac = function PositioningComponent_Factory(t) {
      return new (t || PositioningComponent)();
    };

    PositioningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PositioningComponent,
      selectors: [["app-positioning"]],
      decls: 66,
      vars: 0,
      consts: [[1, "technique"], ["src", "../../../../assets/images/pos.png", "width", "50%", "height", "525px", 2, "margin-left", "320px"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/jVJz8Za-UZI", "autoplay", "1"]],
      template: function PositioningComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Positioning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u26BD Picking a position is based on your playing style find one that you feel most comfortable ith in a game. It is also valuable to being able to play more than one position as coaches will look at you to be more.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GOALKEEPER:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD As a GoalKeeper your main job is to keep the ball from going in the goal. You will need to be fearless and be able to dive, catch, quick, and be aggressive. Great goalkeepers are versatile, able to save any ball coming at them.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u26BD As a goalkeeper you will need to be a smart to where you will kick or throw the ball, maybe to possible get it out of danger, or to play a quick counter attack to your teammates.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DEFENDER:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u26BD The basic positions of a defender is left, right, center. This position usually has 4-5 players. These can be altered a little depending on the formation of team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u26BD You are the last person back in this position, you must not allow any balls to be shot at your goalkeeper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u26BD You must stay attentive to where other players are at, must be aggressive, and be able to clear any ball in your defensive area when there is great danger of the opponent scoring.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u26BD In this position you are the primarily a connector between the goalkeeper and midfielders, and occasionally the forwards.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "MIDFIELDER:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u26BD The basic positions of a midfielder is left, right, center. This position usually has 4-5 players. These can be altered a little depending on the formation of team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u26BD In this position you are the brains of the game, you are the person that mostly influences the game.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u26BD This is for those who are not scared of pressure and can deal with any situation that comes there way.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u26BD Here you are connecting the defense with the forwards, and depending on how good the midfielders are playing, it can have an effect on how many shots are taken by that team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u26BD Your passing has to be superior to those around you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u26BD Some of the most technical players are placed here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "FORWARD/ATTACKER:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u26BD This position usually contains 2 or 3 players, either 2 center players or 1 center, and 2 wingers(left and right).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u26BD In this position you are connecting the midfielder to the goal, as you being the middle man, delivering the ball to the net.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u26BD As a forward you are required to have superior shooting than those others around you, as you are primary the one scoring goals.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u26BD You must also be smart when making runs to retrieve the ball from your teammates to go and score.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u26BD Speed, skills and dribbling also have a contribution in this position.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u26BD More information about each position below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositioningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-positioning',
          templateUrl: './positioning.component.html',
          styleUrls: ['./positioning.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/skill/skill.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/player/skill/skill.component.ts ***!
    \*******************************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppPagesPlayerSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SkillComponent = /*#__PURE__*/function () {
      function SkillComponent() {
        _classCallCheck(this, SkillComponent);
      }

      _createClass(SkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillComponent;
    }();

    SkillComponent.ɵfac = function SkillComponent_Factory(t) {
      return new (t || SkillComponent)();
    };

    SkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillComponent,
      selectors: [["app-skill"]],
      decls: 46,
      vars: 0,
      consts: [[1, "technique"], ["src", "../../../../assets/images/skill.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/JoHKbd5YG80", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/ohPaEy20qJE", "autoplay", "1", 2, "margin-left", "100px"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/1sr8zc8nP9Y", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/vR2Grj1f0VE", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/LbIfVWZpD4A", "autoplay", "1"]],
      template: function SkillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skill");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skill can be obtained by practicing consistently. There are many areas of skill in soccer that can be achieved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "JUGGLING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD Juggling or keepy ups, is done by keeping he ball in the air consecutively without dropping it. This is primarily done by hitting the ball from underneath by using the top of your foot. This can be very tricky at first, but the more you practice the easier it will get. Soon you will be able to move on to freestyle which is a more advanced technique of juggling by not only using your feet but also using other parts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ADVANCED DRIBBLING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u26BD After successfully being able to dribble, you can move on to doing moves while dribbling. These advanced moves can be able to trick your opponents in one on one situations, and allow you to score more goals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ADVANCED SHOOTING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u26BD Shooting skills can get you more goals if you have mastered them. Making the ball curve or bend can confuse the goalkeeper and cause the ball to go into the goal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u26BD These skills are achieved by slightly altering the way you shoot a ball normally.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ADVANCED PASSING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u26BD With passing skill , much like shooting skills, can be done be slightly altering the place of where the ball is kicked to either achieve a little curve, or to drive the ball with more power to your teammate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "iframe", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3NraWxsL3NraWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9za2lsbC9za2lsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skill',
          templateUrl: './skill.component.html',
          styleUrls: ['./skill.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/player/technique/technique.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/player/technique/technique.component.ts ***!
    \***************************************************************/

  /*! exports provided: TechniqueComponent */

  /***/
  function srcAppPagesPlayerTechniqueTechniqueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechniqueComponent", function () {
      return TechniqueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TechniqueComponent = /*#__PURE__*/function () {
      function TechniqueComponent() {
        _classCallCheck(this, TechniqueComponent);
      }

      _createClass(TechniqueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TechniqueComponent;
    }();

    TechniqueComponent.ɵfac = function TechniqueComponent_Factory(t) {
      return new (t || TechniqueComponent)();
    };

    TechniqueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TechniqueComponent,
      selectors: [["app-technique"]],
      decls: 42,
      vars: 0,
      consts: [[1, "technique"], ["src", "../../../../assets/images/tech.jpg", "width", "50%", "height", "50%", 2, "margin-left", "320px"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/fCanpKMKwUI", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/2wHXqTqVPFo", "autoplay", "1"], ["width", "400", "height", "400", "src", "https://www.youtube.com/embed/70k5fJ4A_6g", "autoplay", "1"]],
      template: function TechniqueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Technique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PASSING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u26BD When passing, primarily the inside of the foot is used to get the ball to your teammate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u26BD Short to medium range passes are best played by using the inside of the foot. Long range passes are best used by the top of the foot(laces of your shoes), while leaning back to be able to cover the distance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SHOOTING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u26BD When shooting it is best to use the part of the foot between the big toe and top of your foot, to achieve power.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u26BD Make sure your kicking knee and your chest is over the ball to achieve more power.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u26BD Your other foot known as your aiming foot, is used to help with the trail the ball takes when you kick it. Position your aiming foot along with your hips in the direction towards your destination to achieve better accuracy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "DRIBBLING:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u26BD When dribbling with the ball make sure you practice moving slowly and keeping the ball close your your body by lightly tapping the ball with primarily your small toe. Once you can do that comfortable continue to speed up while keeping the ball close to your feet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u26BD Make sure to bend the knees a little bit when you are dribbling, do not want to be stiff.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u26BD Chest should be slightly leaned forward to be more able to switch direction quickly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center; \r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3RlY2huaXF1ZS90ZWNobmlxdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyL3RlY2huaXF1ZS90ZWNobmlxdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmgze1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechniqueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-technique',
          templateUrl: './technique.component.html',
          styleUrls: ['./technique.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/sub-form/sub-form.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/sub-form/sub-form.component.ts ***!
    \******************************************************/

  /*! exports provided: SubFormComponent */

  /***/
  function srcAppPagesSubFormSubFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubFormComponent", function () {
      return SubFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SubFormComponent = /*#__PURE__*/function () {
      function SubFormComponent() {
        _classCallCheck(this, SubFormComponent);
      }

      _createClass(SubFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubFormComponent;
    }();

    SubFormComponent.ɵfac = function SubFormComponent_Factory(t) {
      return new (t || SubFormComponent)();
    };

    SubFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubFormComponent,
      selectors: [["app-sub-form"]],
      decls: 2,
      vars: 0,
      template: function SubFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sub-form works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Yi1mb3JtL3N1Yi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sub-form',
          templateUrl: './sub-form.component.html',
          styleUrls: ['./sub-form.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Owner\Documents\soccer-academy\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map