import {Provider} from '@angular/core';

import {LazyMapsAPILoader} from './services/maps-api-loader/lazy-maps-api-loader';
import {MapsAPILoader} from './services/maps-api-loader/maps-api-loader';

// main modules
export * from './directives';
export * from './services';
export * from './events';

export const GOOGLE_MAPS_PROVIDERS: any[] = [
  new Provider(MapsAPILoader, {useClass: LazyMapsAPILoader}),
];
