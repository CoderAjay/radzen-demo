import {Injector} from '@angular/core';
import {Grid} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Container} from '@radzen/angular';
import {Injector} from '@angular/core';
import {Form} from '@radzen/angular';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import { ODataService } from '../../services/o-data';
import { ODATA_SELECT } from '../../reducers/odata';
import { State } from '../../state.ts';


export const DIRECTIVES = [
  Grid, Container, Form
];

export const PROVIDERS = [
  ODataService
];

export class HomeMeta {
    cell0 = {
      columns: 12
    };
    grid0 = {
      columns: [],
      dataSource: "OData"
    };
    cell1 = {
      columns: 12
    };
    form0 = {
      dataSource: "OData",
      fields: [
        {
          property: "Description",
          title: "Description"
        },
        {
          property: "DiscontinuedDate",
          title: "DiscontinuedDate"
        },
        {
          property: "ID",
          title: "ID"
        },
        {
          property: "Name",
          title: "Name"
        },
        {
          property: "Price",
          title: "Price"
        },
        {
          property: "Rating",
          title: "Rating"
        },
        {
          property: "ReleaseDate",
          title: "ReleaseDate"
        }
      ]
    };

  oDataItems: Observable<any>;
  oDataSelection: Observable<any>;
  oDataSchema: any;
  store: Store<State>;

  constructor(injector: Injector) {
    const odataService: ODataService = injector.get(ODataService);

    const store: Store<State> = injector.get(Store);

    this.store = store;

    this.oDataItems = odataService.data$;

    this.oDataSchema = odataService.schema;

    this.oDataSelection = this.store.select('odataSelection');
  }

  odataSelect(payload) {
    this.store.dispatch({
      type: ODATA_SELECT,
      payload
    });
  }
}
