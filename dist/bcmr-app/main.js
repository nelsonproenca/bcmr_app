(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projetos\QuizADV\webapp\bcmr-app\src\main.ts */"zUnb");


/***/ }),

/***/ "5G3C":
/*!**********************************!*\
  !*** ./src/reducer/selectors.ts ***!
  \**********************************/
/*! exports provided: getState, getAdditionalData, getBack, getStart, getCriticality, getQuestion1, getQuestion2, getQuestion3, getQuestion4, getQuestion5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalData", function() { return getAdditionalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBack", function() { return getBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStart", function() { return getStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCriticality", function() { return getCriticality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion1", function() { return getQuestion1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion2", function() { return getQuestion2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion3", function() { return getQuestion3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion4", function() { return getQuestion4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion5", function() { return getQuestion5; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('myReducer');
const getAdditionalData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.additionalData);
const getBack = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.back);
const getStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.start);
const getCriticality = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.criticality);
const getQuestion1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.question1);
const getQuestion2 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.question2);
const getQuestion3 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.question3);
const getQuestion4 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.question4);
const getQuestion5 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, (state) => state.question5);


/***/ }),

/***/ "6wRC":
/*!*******************************!*\
  !*** ./src/reducer/action.ts ***!
  \*******************************/
/*! exports provided: START, ADDITIONAL_DATA, BACK, CRITICALITY, QUESTION1, QUESTION2, QUESTION3, QUESTION4, QUESTION5, Question1Action, Question2Action, Question3Action, Question4Action, Question5Action, StartAction, AdditionalDataAction, CriticalityAction, BackAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDITIONAL_DATA", function() { return ADDITIONAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRITICALITY", function() { return CRITICALITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION1", function() { return QUESTION1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION2", function() { return QUESTION2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION3", function() { return QUESTION3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION4", function() { return QUESTION4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION5", function() { return QUESTION5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question1Action", function() { return Question1Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question2Action", function() { return Question2Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question3Action", function() { return Question3Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question4Action", function() { return Question4Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question5Action", function() { return Question5Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartAction", function() { return StartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDataAction", function() { return AdditionalDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalityAction", function() { return CriticalityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackAction", function() { return BackAction; });
const START = 'FormBcmr-Start';
const ADDITIONAL_DATA = 'FormBcmr-AdditionalData';
const BACK = 'FormBcmr-Back';
const CRITICALITY = 'FormBcmr-Criticality';
const QUESTION1 = 'FormBcmr-Question1';
const QUESTION2 = 'FormBcmr-Question2';
const QUESTION3 = 'FormBcmr-Question3';
const QUESTION4 = 'FormBcmr-Question4';
const QUESTION5 = 'FormBcmr-Question5';
class Question1Action {
    constructor(payload) {
        this.payload = payload;
        this.type = QUESTION1;
    }
}
class Question2Action {
    constructor(payload) {
        this.payload = payload;
        this.type = QUESTION2;
    }
}
class Question3Action {
    constructor(payload) {
        this.payload = payload;
        this.type = QUESTION3;
    }
}
class Question4Action {
    constructor(payload) {
        this.payload = payload;
        this.type = QUESTION4;
    }
}
class Question5Action {
    constructor(payload) {
        this.payload = payload;
        this.type = QUESTION5;
    }
}
class StartAction {
    constructor(payload) {
        this.payload = payload;
        this.type = START;
    }
}
class AdditionalDataAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ADDITIONAL_DATA;
    }
}
class CriticalityAction {
    constructor(payload) {
        this.payload = payload;
        this.type = CRITICALITY;
    }
}
class BackAction {
    constructor(payload) {
        this.payload = payload;
        this.type = BACK;
    }
}


/***/ }),

/***/ "9e7o":
/*!******************************************************************!*\
  !*** ./src/app/criticality-level/criticality-level.component.ts ***!
  \******************************************************************/
/*! exports provided: CriticalityLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalityLevelComponent", function() { return CriticalityLevelComponent; });
/* harmony import */ var reducer_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducer/selectors */ "5G3C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



class CriticalityLevelComponent {
    constructor(store) {
        this.store = store;
        this.criticalityLevelName = '';
        this.className = '';
        this.criticalityLevel$ = this.store
            .select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getCriticality"])
            .subscribe((criticality) => {
            var _a, _b;
            this.className = (_a = criticality === null || criticality === void 0 ? void 0 : criticality.className) !== null && _a !== void 0 ? _a : '';
            this.criticalityLevelName = (_b = criticality === null || criticality === void 0 ? void 0 : criticality.criticalityLevelName) !== null && _b !== void 0 ? _b : '';
        });
    }
    ngOnInit() { }
}
CriticalityLevelComponent.ɵfac = function CriticalityLevelComponent_Factory(t) { return new (t || CriticalityLevelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CriticalityLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CriticalityLevelComponent, selectors: [["app-criticality-level"]], decls: 6, vars: 3, consts: [[1, "row"], [1, "col-md-6"], [2, "text-align", "center"]], template: function CriticalityLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Criticidade identificada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.criticalityLevelName, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcml0aWNhbGl0eS1sZXZlbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var reducer_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducer/selectors */ "5G3C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(store) {
        this.store = store;
        this.color = '';
        this.start$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getCriticality"]);
        this.title = 'Formulário de Critica';
        this.subtitle = 'Nivel de criticidade do contrato';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[1, "container"], [1, "jumbotron", "text-center", 2, "padding-top", "15px", "height", "120px"], [1, "h1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.subtitle);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UcdY":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService, CriticalityLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalityLevel", function() { return CriticalityLevel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QuestionService {
    constructor() {
        this.questionAnswers = [];
    }
    summaryRatings() {
        let total = 0;
        this.questionAnswers.map((answer) => { var _a; return (total += (_a = answer.rating) !== null && _a !== void 0 ? _a : 0); });
        return total;
    }
    summaryValues() {
        let total = 0;
        this.questionAnswers.map((answer) => { var _a; return (total += (_a = answer.value) !== null && _a !== void 0 ? _a : 0); });
        return total;
    }
    criticalityLevel() {
        let totalRatings = this.summaryRatings();
        let totalValues = this.summaryValues();
        const percent = Math.floor(totalRatings / totalValues);
        let result = 0;
        if (percent < 10) {
            result = CriticalityLevel.Excepcional;
        }
        else if (percent >= 10 && percent < 25) {
            result = CriticalityLevel.Alto;
        }
        else if (percent >= 25 && percent < 50) {
            result = CriticalityLevel.Medio;
        }
        else if (percent >= 50) {
            result = CriticalityLevel.Baixo;
        }
        return result;
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
var CriticalityLevel;
(function (CriticalityLevel) {
    CriticalityLevel[CriticalityLevel["Excepcional"] = 1] = "Excepcional";
    CriticalityLevel[CriticalityLevel["Alto"] = 2] = "Alto";
    CriticalityLevel[CriticalityLevel["Medio"] = 3] = "Medio";
    CriticalityLevel[CriticalityLevel["Baixo"] = 4] = "Baixo";
})(CriticalityLevel || (CriticalityLevel = {}));


/***/ }),

/***/ "X+BE":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/question.service */ "UcdY");
/* harmony import */ var reducer_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducer/action */ "6wRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function QuestionsComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.questionDescription, " ");
} }
function QuestionsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r1.answerId4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.answerId4, "- ", ctx_r1.answerText4, " ");
} }
function QuestionsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Precisa selecionar pelo menos uma resposta.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class QuestionsComponent {
    constructor(router, questionService, store) {
        this.router = router;
        this.questionService = questionService;
        this.store = store;
        this.QUESTIONS = [
            {
                id: 1,
                text: 'Valor do contrato',
                description: '',
                answers: [
                    { id: 1, text: 'Estratégico', rating: 50, value: 1 },
                    { id: 2, text: 'Alto', rating: 15, value: 2 },
                    { id: 3, text: 'Médio', rating: 10, value: 3 },
                    { id: 4, text: 'Baixo', rating: 5, value: 4 },
                ],
            },
            {
                id: 2,
                text: 'Concentração de mercado',
                description: '',
                answers: [
                    {
                        id: 1,
                        text: 'Mercado possui no máximo 3 players habilitados a executar o serviço/fornecimento',
                        rating: 15,
                        value: 1,
                    },
                    {
                        id: 2,
                        text: 'O mercado possui diversos players habilitados plenamente e um número significante de agentes habilitados a promover as etapas-chave do fornecimento',
                        rating: 5,
                        value: 2,
                    },
                    {
                        id: 3,
                        text: 'O serviço é padrão e pode ser executado por uma diversidade grande de parceiros',
                        rating: 3,
                        value: 3,
                    },
                ],
            },
            {
                id: 3,
                text: 'Risco de alterar o parceiro no decorrer do contrato',
                description: '',
                answers: [
                    {
                        id: 1,
                        text: 'Risco significante',
                        rating: 20,
                        value: 1,
                    },
                    {
                        id: 2,
                        text: 'Risco médio',
                        rating: 10,
                        value: 2,
                    },
                    {
                        id: 3,
                        text: 'Risco pequeno',
                        rating: 5,
                        value: 3,
                    },
                ],
            },
            {
                id: 4,
                text: 'Risco Legal',
                description: '',
                answers: [
                    {
                        id: 1,
                        text: 'Probabilidade de superveniência de danos graves, perda de PI, contexto regulatório não obedecido',
                        rating: 25,
                        value: 1,
                    },
                    {
                        id: 2,
                        text: 'Danos moderados possíveis: compartilhamento de PI, gerenciamento por terceiros, fornecedor não avaliado previamente',
                        rating: 15,
                        value: 2,
                    },
                    {
                        id: 3,
                        text: 'Atividades não se mostram hábeis a causar impactos relevantes: inexistência de compartilhamento de PI, inexistência de cessão de mão de obra',
                        rating: 10,
                        value: 3,
                    },
                ],
            },
            {
                id: 5,
                text: 'Risco de reputação',
                description: '',
                answers: [
                    {
                        id: 1,
                        text: 'Risco alto de consumidores ou agentes de mercado não contratarem mais a nossa empresa',
                        rating: 25,
                        value: 1,
                    },
                    {
                        id: 2,
                        text: 'Comentários negativos ou pedidos de explicação e/ou reavaliação de contratos formalizados com parceiros',
                        rating: 15,
                        value: 2,
                    },
                    {
                        id: 3,
                        text: 'Repercussão limitada a pequenos grupos ou a consumidor específico',
                        rating: 5,
                        value: 3,
                    },
                ],
            },
        ];
        this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        this.questionAnswers = [];
        this.submitted = false;
        this.criticalityLevelName = '';
        this.className = '';
        this.questionCurrent = 0;
        this.questionId = 0;
        this.questionText = '';
        this.questionDescription = '';
        this.answerText1 = '';
        this.answerText2 = '';
        this.answerText3 = '';
        this.answerText4 = '';
        this.answerId1 = 0;
        this.answerId2 = 0;
        this.answerId3 = 0;
        this.answerId4 = 0;
    }
    reset() {
        this.questionId = 0;
        this.questionText = '';
        this.questionDescription = '';
        this.answerText1 = '';
        this.answerText2 = '';
        this.answerText3 = '';
        this.answerText4 = '';
        this.answerId1 = 0;
        this.answerId2 = 0;
        this.answerId3 = 0;
        this.answerId4 = 0;
        this.questionForm.setValue({ answer: '' });
        this.submitted = false;
    }
    get checkValidaiton() {
        return this.questionForm.controls;
    }
    ngOnInit() {
        this.loadQuestion();
    }
    loadQuestion() {
        var _a, _b, _c;
        this.questionId = this.QUESTIONS[this.questionCurrent].id;
        this.questionText = this.QUESTIONS[this.questionCurrent].text;
        this.questionDescription = this.QUESTIONS[this.questionCurrent].description;
        this.answerText1 = this.QUESTIONS[this.questionCurrent].answers[0].text;
        this.answerText2 = this.QUESTIONS[this.questionCurrent].answers[1].text;
        this.answerText3 = this.QUESTIONS[this.questionCurrent].answers[2].text;
        this.answerText4 = (_a = this.QUESTIONS[this.questionCurrent].answers[3]) === null || _a === void 0 ? void 0 : _a.text;
        this.answerId1 = this.QUESTIONS[this.questionCurrent].answers[0].id;
        this.answerId2 = this.QUESTIONS[this.questionCurrent].answers[1].id;
        this.answerId3 = this.QUESTIONS[this.questionCurrent].answers[2].id;
        this.answerId4 = (_c = (_b = this.QUESTIONS[this.questionCurrent]) === null || _b === void 0 ? void 0 : _b.answers[3]) === null || _c === void 0 ? void 0 : _c.id;
    }
    getAnswerSelected() {
        var _a;
        const answerSelected = this.questionForm.controls.answer.value;
        let answerItem;
        answerItem = (_a = this.QUESTIONS[this.questionCurrent - 1]) === null || _a === void 0 ? void 0 : _a.answers.find((answer) => answer.id === +answerSelected);
        return answerItem;
    }
    showNextQuestion() {
        this.questionCurrent++;
        this.setcriticalityLevel();
        this.reset();
        this.loadQuestion();
    }
    setcriticalityLevel() {
        let answerItem = this.getAnswerSelected();
        this.questionAnswers.push({
            answerId: answerItem === null || answerItem === void 0 ? void 0 : answerItem.id,
            questionId: this.questionId,
            rating: answerItem === null || answerItem === void 0 ? void 0 : answerItem.rating,
            value: answerItem === null || answerItem === void 0 ? void 0 : answerItem.value,
        });
        this.questionService.questionAnswers = this.questionAnswers;
        const criticalityLevel = this.questionService.criticalityLevel();
        switch (criticalityLevel) {
            case +app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["CriticalityLevel"].Alto:
                this.className = 'p-5 mb-2 bg-success text-white';
                this.criticalityLevelName = 'Alto';
                break;
            case +app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["CriticalityLevel"].Baixo:
                this.className = 'p-3 mb-2 bg-info text-white';
                this.criticalityLevelName = 'Baixo';
                break;
            case +app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["CriticalityLevel"].Medio:
                this.className = 'p-3 mb-2 bg-warning text-dark';
                this.criticalityLevelName = 'Médio';
                break;
            case +app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["CriticalityLevel"].Excepcional:
                this.className = 'p-3 mb-2 bg-danger text-white';
                this.criticalityLevelName = 'Excepcional';
                break;
            default:
                break;
        }
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f;
        this.submitted = true;
        let current = this.questionCurrent;
        let length = this.QUESTIONS.length - 1;
        if (current >= length) {
            this.setcriticalityLevel();
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["CriticalityAction"]({
                criticality: {
                    className: this.className,
                    criticalityLevelName: this.criticalityLevelName,
                },
            }));
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["Question1Action"]({
                question1: (_a = this.questionAnswers[0].answerId) !== null && _a !== void 0 ? _a : 0,
            }));
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["Question2Action"]({
                question2: (_b = this.questionAnswers[1].answerId) !== null && _b !== void 0 ? _b : 0,
            }));
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["Question3Action"]({
                question3: (_c = this.questionAnswers[2].answerId) !== null && _c !== void 0 ? _c : 0,
            }));
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["Question4Action"]({
                question4: (_d = this.questionAnswers[3].answerId) !== null && _d !== void 0 ? _d : 0,
            }));
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["Question5Action"]({
                question5: (_e = this.questionAnswers[4].answerId) !== null && _e !== void 0 ? _e : 0,
            }));
            this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_2__["Question1Action"]({
                question1: (_f = this.questionAnswers[0].answerId) !== null && _f !== void 0 ? _f : 0,
            }));
            console.log('question1- dispatch', this.questionAnswers[0].answerId);
            this.router.navigate(['additional-data']);
        }
        else {
            if (this.submitted && this.checkValidaiton.answer.valid) {
                this.showNextQuestion();
            }
        }
    }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], decls: 30, vars: 18, consts: [[1, "col-xl-12", "col-xxl-8"], [1, "row", "align-items-center", "g-lg-5"], [1, "col-md-9", "col-lg-8"], [1, "display-4", "lh-1", "mb-3", 2, "font-size", "1.75rem"], ["class", "col-lg-10 fs-4", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "p-4", "p-md-5", "border", "rounded-3", "bg-light"], [1, "form-check"], ["type", "radio", "id", "answerText1", "name", "answer", "formControlName", "answer", 1, "form-check-input", 3, "value"], ["for", "answerText1", 1, "form-check-label"], ["type", "radio", "id", "answerText2", "name", "answer", "formControlName", "answer", 1, "form-check-input", 3, "value"], ["for", "answerText2", 1, "form-check-label"], ["type", "radio", "id", "answerText3", "name", "answer", "formControlName", "answer", 1, "form-check-input", 3, "value"], ["for", "answerText3", 1, "form-check-label"], ["class", "form-check", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "flex-1", "mt-3", "text-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-md-3", "p-4", "text-center"], [1, "col-lg-10", "fs-4"], ["type", "radio", "id", "answerText4", "name", "answer", "formControlName", "answer", 1, "form-check-input", 3, "value"], ["for", "answerText4", 1, "form-check-label"], [1, "alert", "alert-danger"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, QuestionsComponent_p_5_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function QuestionsComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, QuestionsComponent_div_20_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, QuestionsComponent_div_21_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Pr\u00F3ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Criticidade identificada");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.questionId, " - ", ctx.questionText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.questionDescription.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.questionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.answerId1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.answerId1, "- ", ctx.answerText1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.answerId2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.answerId2, "- ", ctx.answerText2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.answerId3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.answerId3, "- ", ctx.answerText3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.answerText4 !== undefined && ctx.answerText4.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidaiton.answer.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.criticalityLevelName, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XqP2":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var reducer_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reducer/selectors */ "5G3C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../criticality-level/criticality-level.component */ "9e7o");





const _c0 = function () { return ["/"]; };
class SummaryComponent {
    constructor(store) {
        this.store = store;
        this.contrato = '';
        this.partes = '';
        this.projeto = '';
        this.questions = [];
        this.comentarios = '';
        this.concentracaoMercado = '';
        this.riscoAlterarParceiro = '';
        this.riscoLegal = '';
        this.riscoReputacaoPrincipal = '';
        this.riscoReputacaoSecundaria = '';
        this.valorContrato = '';
        this.comentariosLivres = '';
        this.data = '';
        this.diretor = '';
        this.local = '';
        this.question1 = 0;
        this.question2 = 0;
        this.question3 = 0;
        this.question4 = 0;
        this.question5 = 0;
        this.question1$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getQuestion1"]).subscribe((question) => {
            this.question1 = question;
        });
        this.question2$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getQuestion2"]).subscribe((question) => {
            this.question2 = question;
        });
        this.question3$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getQuestion3"]).subscribe((question) => {
            this.question3 = question;
        });
        this.question4$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getQuestion4"]).subscribe((question) => {
            this.question4 = question;
        });
        this.question5$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getQuestion5"]).subscribe((question) => {
            this.question5 = question;
        });
        this.additionalData$ = this.store
            .select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getAdditionalData"])
            .subscribe((additionalData) => {
            var _a, _b, _c, _d;
            this.local = (_a = additionalData === null || additionalData === void 0 ? void 0 : additionalData.local) !== null && _a !== void 0 ? _a : '';
            this.comentariosLivres = (_b = additionalData === null || additionalData === void 0 ? void 0 : additionalData.comentariosLivres) !== null && _b !== void 0 ? _b : '';
            this.data = (_c = additionalData === null || additionalData === void 0 ? void 0 : additionalData.data) !== null && _c !== void 0 ? _c : '';
            this.diretor = (_d = additionalData === null || additionalData === void 0 ? void 0 : additionalData.diretor) !== null && _d !== void 0 ? _d : '';
        });
        this.back$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getBack"]).subscribe((back) => {
            var _a, _b, _c, _d, _e, _f, _g;
            this.comentarios = (_a = back === null || back === void 0 ? void 0 : back.comentarios) !== null && _a !== void 0 ? _a : '';
            this.concentracaoMercado = (_b = back === null || back === void 0 ? void 0 : back.concentracaoMercado) !== null && _b !== void 0 ? _b : '';
            this.riscoAlterarParceiro = (_c = back === null || back === void 0 ? void 0 : back.riscoAlterarParceiro) !== null && _c !== void 0 ? _c : '';
            this.riscoLegal = (_d = back === null || back === void 0 ? void 0 : back.riscoLegal) !== null && _d !== void 0 ? _d : '';
            this.riscoReputacaoPrincipal = (_e = back === null || back === void 0 ? void 0 : back.riscoReputacaoPrincipal) !== null && _e !== void 0 ? _e : '';
            this.riscoReputacaoSecundaria = (_f = back === null || back === void 0 ? void 0 : back.riscoReputacaoSecundaria) !== null && _f !== void 0 ? _f : '';
            this.valorContrato = (_g = back === null || back === void 0 ? void 0 : back.valorContrato) !== null && _g !== void 0 ? _g : '';
        });
        this.start$ = this.store.select(reducer_selectors__WEBPACK_IMPORTED_MODULE_0__["getStart"]).subscribe((start) => {
            var _a, _b, _c;
            this.projeto = (_a = start === null || start === void 0 ? void 0 : start.projeto) !== null && _a !== void 0 ? _a : '';
            this.contrato = (_b = start === null || start === void 0 ? void 0 : start.contrato) !== null && _b !== void 0 ? _b : '';
            this.partes = (_c = start === null || start === void 0 ? void 0 : start.partes) !== null && _c !== void 0 ? _c : '';
        });
    }
    ngOnInit() { }
    printPage() {
        window.print();
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 132, vars: 21, consts: [[1, "d-flex", "flex-row-reverse", "bd-highlight"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "routerLink"], [1, "table", "mb-3"], ["scope", "col"], ["scope", "col", "colspan", "2", 1, "display-4", 2, "font-size", "2rem"], ["scope", "row"], ["scope", "col", "colspan", "4", 1, "display-4", 2, "font-size", "2rem"], ["colspan", "3"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_1_listener() { return ctx.printPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Imprimir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Re-Iniciar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-criticality-level");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Projeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Partes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Perguntas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Valor do contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Concentra\u00E7\u00E3o de mercado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Risco de alterar o parceiro no decorrer do contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Risco Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Risco de reputa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Informa\u00E7\u00F5es Adicionais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Diretor respons\u00E1vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Coment\u00E1rios livres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Verso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Risco Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Concentra\u00E7\u00E3o de mercado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Risco de alterar o parceiro no decorrer do contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Valor do Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Risco de reputa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Risco de reputa\u00E7\u00E3o (Campo 2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Coment\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projeto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contrato);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.partes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.question1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.question2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.question3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.question4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.question5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.local);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.diretor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.comentariosLivres);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.riscoLegal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.concentracaoMercado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.riscoAlterarParceiro);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.valorContrato);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.riscoReputacaoPrincipal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.riscoReputacaoSecundaria);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.comentarios);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_4__["CriticalityLevelComponent"]], styles: ["@media print {\n  button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "YRqh":
/*!****************************************!*\
  !*** ./src/app/back/back.component.ts ***!
  \****************************************/
/*! exports provided: BackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackComponent", function() { return BackComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var reducer_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducer/action */ "6wRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../criticality-level/criticality-level.component */ "9e7o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function BackComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Valor do contrato n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BackComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Risco Legal n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BackComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Concentra\u00E7\u00E3o de mercado n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BackComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Risco de Reputa\u00E7\u00E3o n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BackComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Risco de alterar o parceiro no decorrer do contrato n\u00E3o pode ser em branco. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BackComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.backForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            valorContrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            riscoLegal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            concentracaoMercado: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            riscoReputacaoPrincipal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            riscoAlterarParceiro: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            riscoReputacaoSecundaria: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            comentarios: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.submitted = false;
    }
    get checkValidation() {
        return this.backForm.controls;
    }
    ngOnInit() { }
    onSubmit() {
        let backStore = this.backForm.value;
        this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_1__["BackAction"]({ back: backStore }));
        this.router.navigate(['/summary']);
    }
}
BackComponent.ɵfac = function BackComponent_Factory(t) { return new (t || BackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
BackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BackComponent, selectors: [["app-back"]], decls: 65, vars: 6, consts: [[1, "row"], [1, "col-md-6"], [1, "display-4", "lh-1", "mb-3", 2, "font-size", "2rem"], [1, "lead"], [3, "formGroup", "ngSubmit"], [1, "row", "g-2"], [1, "col-md"], [1, "form-floating", "mb-3"], ["for", "floatingInputCampo1"], ["type", "text", "id", "valorContrato", "formControlName", "valorContrato", "aria-describedby", "Valor do contrato", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "riscoLegal"], ["type", "text", "id", "riscoLegal", "formControlName", "riscoLegal", "aria-describedby", "Risco Legal", "required", "", 1, "form-control"], [1, "blockquote-footer", 2, "font-size", "x-small"], ["for", "concentracaoMercado"], ["type", "text", "id", "concentracaoMercado", "formControlName", "concentracaoMercado", "aria-describedby", "Concentra\u00E7\u00E3o de mercado", "required", "", 1, "form-control"], ["for", "riscoReputacaoPrincipal"], ["type", "text", "id", "riscoReputacaoPrincipal", "formControlName", "riscoReputacaoPrincipal", "aria-describedby", "Risco de Reputa\u00E7\u00E3o", "required", "", 1, "form-control"], ["for", "riscoAlterarParceiro"], ["type", "text", "id", "riscoAlterarParceiro", "formControlName", "riscoAlterarParceiro", "aria-describedby", "Risco de alterar o parceiro no decorrer do contrato", "required", "", 1, "form-control"], ["for", "riscoReputacaoSecundaria"], ["type", "email", "id", "riscoReputacaoSecundaria", "formControlName", "riscoReputacaoSecundaria", "aria-describedby", "Risco de Reputa\u00E7\u00E3o", 1, "form-control"], ["for", "comentarios"], ["id", "comentarios", "formControlName", "comentarios", "aria-describedby", "Coment\u00E1rios adicionais", 1, "form-control", 2, "height", "100px"], [1, "blockquote-footer"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function BackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Verso");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-criticality-level");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Respons\u00E1vel pelo preenchimento inserir\u00E1 a seguir os elementos considerados para a escolha das op\u00E7\u00F5es marcadas no formul\u00E1rio. Seus coment\u00E1rios servir\u00E3o para que o leitor (ou at\u00E9 mesmo voc\u00EA) torne suas conclus\u00F5es mais objetivas, permitindo ainda a avalia\u00E7\u00E3o pelos mais seniores, gestores, disponibilizando ainda elementos pass\u00EDveis de serem auditados.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BackComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Valor do contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BackComponent_div_15_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Risco Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BackComponent_div_22_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "figcaption", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " O descumprimento do contrato dar\u00E1 ensejo a que tipo de situa\u00E7\u00E3o para a empresa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Concentra\u00E7\u00E3o de mercado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, BackComponent_div_31_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Risco de Reputa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, BackComponent_div_38_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "figcaption", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " O descumprimento contratual, o vazamento de informa\u00E7\u00F5es ou ainda o acesso inadvertido a elementos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Risco de alterar o parceiro no decorrer do contrato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, BackComponent_div_47_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Risco de Reputa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "figcaption", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " O descumprimento contratual, o vazamento de informa\u00E7\u00F5es ou ainda o acesso inadvertido a elementos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Coment\u00E1rios adicionais");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "figcaption", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Coment\u00E1rios adicionais que eventualmente n\u00E3o tenham sido inseridos em outros campos ou que voc\u00EA entende n\u00E3o tenham sido cobertos por qualquer outro elemento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Pr\u00F3ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.backForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.valorContrato.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.riscoLegal.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.concentracaoMercado.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.riscoReputacaoPrincipal.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.riscoAlterarParceiro.invalid);
    } }, directives: [_criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_5__["CriticalityLevelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Z8PC":
/*!**************************************************************!*\
  !*** ./src/app/additional-data/additional-data.component.ts ***!
  \**************************************************************/
/*! exports provided: AdditionalDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDataComponent", function() { return AdditionalDataComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var reducer_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducer/action */ "6wRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../criticality-level/criticality-level.component */ "9e7o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AdditionalDataComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Local n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdditionalDataComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Data n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdditionalDataComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Diretor respons\u00E1vel n\u00E3o pode ser em branco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AdditionalDataComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.additionalDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            local: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            diretor: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            comentariosLivres: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.submitted = false;
    }
    get checkValidation() {
        return this.additionalDataForm.controls;
    }
    ngOnInit() { }
    onSubmit() {
        this.submitted = true;
        let additionalDataStore = this.additionalDataForm.value;
        console.warn('additionalDataStore', this.additionalDataForm.value);
        this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_1__["AdditionalDataAction"]({ additionalData: additionalDataStore }));
        if (this.submitted &&
            this.checkValidation.data.valid &&
            this.checkValidation.local.valid &&
            this.checkValidation.diretor.valid) {
            this.router.navigate(['/back']);
        }
    }
}
AdditionalDataComponent.ɵfac = function AdditionalDataComponent_Factory(t) { return new (t || AdditionalDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AdditionalDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdditionalDataComponent, selectors: [["app-additional-data"]], decls: 40, vars: 4, consts: [[1, "row"], [1, "col-md-6"], [1, "display-4", "lh-1", "mb-3", 2, "font-size", "2rem"], [3, "formGroup", "ngSubmit"], [1, "row", "g-2"], [1, "col-md"], [1, "form-floating", "mb-3"], ["for", "local"], ["type", "text", "id", "local", "formControlName", "local", "aria-describedby", "Local", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "data"], ["type", "date", "id", "data", "formControlName", "data", "aria-describedby", "Data", "required", "", 1, "form-control"], [1, "col-md-12"], ["for", "diretor"], ["type", "text", "id", "diretorResponsavel", "formControlName", "diretor", "aria-describedby", "Diretor respons\u00E1vel", "required", "", 1, "form-control"], [1, "blockquote-footer"], ["for", "comentariosLivres"], ["id", "comentariosLivres", "formControlName", "comentariosLivres", "aria-describedby", "Coment\u00E1rios livres", 1, "form-control", 2, "height", "100px"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function AdditionalDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Dados Adicionais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-criticality-level");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdditionalDataComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AdditionalDataComponent_div_13_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AdditionalDataComponent_div_19_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Diretor respons\u00E1vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AdditionalDataComponent_div_27_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "figcaption", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Respons\u00E1vel pela an\u00E1lise e preenchimento do formul\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Coment\u00E1rios livres");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "figcaption", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Coment\u00E1rios livres sobre as dimens\u00F5es comerciais que voc\u00EA identificou de maneira geral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Pr\u00F3ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.additionalDataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.local.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.data.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.checkValidation.diretor.invalid);
    } }, directives: [_criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_5__["CriticalityLevelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRpdGlvbmFsLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var reducer_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducer/reducer */ "iPF8");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions/questions.component */ "X+BE");
/* harmony import */ var _additional_data_additional_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./additional-data/additional-data.component */ "Z8PC");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./back/back.component */ "YRqh");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./summary/summary.component */ "XqP2");
/* harmony import */ var _criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./criticality-level/criticality-level.component */ "9e7o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ myReducer: reducer_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"] }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
        _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsComponent"],
        _additional_data_additional_data_component__WEBPACK_IMPORTED_MODULE_9__["AdditionalDataComponent"],
        _back_back_component__WEBPACK_IMPORTED_MODULE_10__["BackComponent"],
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"],
        _criticality_level_criticality_level_component__WEBPACK_IMPORTED_MODULE_12__["CriticalityLevelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"]] }); })();


/***/ }),

/***/ "iPF8":
/*!********************************!*\
  !*** ./src/reducer/reducer.ts ***!
  \********************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "6wRC");

const initialState = {
    additionalData: undefined,
    back: undefined,
    start: undefined,
    criticality: undefined,
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _action__WEBPACK_IMPORTED_MODULE_0__["ADDITIONAL_DATA"]: {
            return Object.assign(Object.assign({}, state), { additionalData: action.payload.additionalData });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["BACK"]: {
            return Object.assign(Object.assign({}, state), { back: action.payload.back });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["START"]: {
            return Object.assign(Object.assign({}, state), { start: action.payload.start });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["CRITICALITY"]: {
            return Object.assign(Object.assign({}, state), { criticality: action.payload.criticality });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["QUESTION1"]: {
            return Object.assign(Object.assign({}, state), { question1: action.payload.question1 });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["QUESTION2"]: {
            return Object.assign(Object.assign({}, state), { question2: action.payload.question2 });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["QUESTION3"]: {
            return Object.assign(Object.assign({}, state), { question3: action.payload.question3 });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["QUESTION4"]: {
            return Object.assign(Object.assign({}, state), { question4: action.payload.question4 });
        }
        case _action__WEBPACK_IMPORTED_MODULE_0__["QUESTION5"]: {
            return Object.assign(Object.assign({}, state), { question5: action.payload.question5 });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "ss/J":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var reducer_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducer/action */ "6wRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class StartComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.startForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            projeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            contrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            partes: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    onSubmit() {
        let startStore = this.startForm.value;
        this.store.dispatch(new reducer_action__WEBPACK_IMPORTED_MODULE_1__["StartAction"]({ start: startStore }));
        this.router.navigate(['/questions']);
    }
    ngOnInit() { }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 15, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "projeto"], ["type", "text", "id", "projeto", "formControlName", "projeto", "aria-describedby", "Projeto", "required", "", 1, "form-control"], ["for", "contrato"], ["type", "text", "id", "contrato", "formControlName", "contrato", "aria-describedby", "Contrato", "required", "", 1, "form-control"], ["for", "partes"], ["type", "text", "id", "partes", "formControlName", "partes", "aria-describedby", "Partes", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StartComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Projeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Partes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Pr\u00F3ximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.startForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.startForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/questions.component */ "X+BE");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _additional_data_additional_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./additional-data/additional-data.component */ "Z8PC");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back/back.component */ "YRqh");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary/summary.component */ "XqP2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    { path: 'questions', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_1__["QuestionsComponent"] },
    { path: 'additional-data', component: _additional_data_additional_data_component__WEBPACK_IMPORTED_MODULE_3__["AdditionalDataComponent"] },
    { path: 'back', component: _back_back_component__WEBPACK_IMPORTED_MODULE_4__["BackComponent"] },
    { path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__["SummaryComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map