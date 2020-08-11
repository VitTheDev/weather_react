import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Chart = (props) => {
  function average(data) {
    if (props.calculate) {
      return (_.round(_.sum(data) / data.length) - 273.15).toFixed(2);
    } else {
      return _.round(_.sum(data) / data.length);
    }
  }
  console.log(props.data);
  return (
    <>
      <Sparklines margin={5} height={500} width={800} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </>
  );
};

export default Chart;
