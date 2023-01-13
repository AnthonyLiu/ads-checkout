import React, { useState } from 'react';
import { AdType, PricingRules } from '../../shared/types';
import { AgGridReact } from 'ag-grid-react';

import '../../node_modules/ag-grid-community/styles/ag-grid.css';
import '../../node_modules/ag-grid-community/styles/ag-theme-alpine.css';
import checkout from '../../shared/checkout';

type AdInfo = {
  name: string;
  type: AdType;
}

interface AdsCartProps {
  adsList: AdInfo[];
  pricingRules: PricingRules;
}

const AdsCart = (props: AdsCartProps) => {
  const adsList = props.adsList;
  const pricingRules = props.pricingRules as unknown as PricingRules[];

  const [rowData] = useState(adsList);

  const [columnDefs] = useState([
    { field: 'name', headerName: 'Ad Name', editable: true },
    { field: 'type', headerName: 'Ad Type', editable: true }
  ]);

  let adsItems: AdType[] = rowData.map( r => {
    return r.type;
  })

  console.log(adsItems);
  console.log(pricingRules);

  let totalAmount = checkout(adsItems, pricingRules);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      <div>Total: {totalAmount}</div>
    </div>
  );
}

export default AdsCart;