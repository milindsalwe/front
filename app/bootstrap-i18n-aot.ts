/// <reference path="typings/medium-editor.d.ts" />
/// <reference path="typings/minds.d.ts" />
/// <reference path="../tools/typings/tsd/index.d.ts" />

import { registerLocaleData } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { MindsModuleNgFactory } from './app.module.ngfactory';

import localeEs from '@angular/common/locales/es';

enableProdMode();

registerLocaleData(localeEs);

platformBrowser().bootstrapModuleFactory(MindsModuleNgFactory);