import React, { useState, useEffect } from 'react';
import { AdType, PricingRules } from '../shared/types';
import { AgGridReact } from 'ag-grid-react';

import '../../node_modules/ag-grid-community/styles/ag-grid.css';
import '../../node_modules/ag-grid-community/styles/ag-theme-alpine.css';
import styles from './ads-cart.module.css';

type AdInfo = {
  name: string;
  type: AdType;
}

interface AdsCartProps {
  adsList: AdInfo[];
  pricingRules: PricingRules;
  checkout: (list, rules) => number
}

const AdsCart = (props: AdsCartProps) => {
  const adsList = props.adsList;
  const pricingRules = props.pricingRules as unknown as PricingRules[];

  const [total, setTotal] = useState(0);
  const [rowData] = useState(adsList);

  const [columnDefs] = useState([
    { field: 'name', headerName: 'Ad Name', editable: true },
    {
      field: 'type',
      headerName: 'Ad Type',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['classic', 'standout', 'premium'],
      },
      valueSetter: params => {
        params.data.type = params.newValue;

        const adsItems = rowData.map(r => {
          return r.type;
        })
        setTotal(props.checkout(adsItems, pricingRules));
        return true;
      }
    }
  ]);

  useEffect(() => {
    const adsItems = rowData.map(r => {
      return r.type;
    })
    setTotal(props.checkout(adsItems, pricingRules));
  }, []);

  return (
    <div className={`ag-theme-alpine ${styles['cart-table']}`}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} ></AgGridReact>
      <div>Total: ${total/100}</div>
    </div>
  );
}

export default AdsCart;