
import React, { useState } from 'react';

import {
  EuiDatePicker,
  EuiSpacer,
  EuiFormRow,
} from '@elastic/eui';

export default () => {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
  };

  const errors = [
    "Here's an example of an error",
    'You might have more than one error, so pass an array.',
  ];

  return (
    /* DisplayToggles wrapper for Docs only */
    <div>

      <EuiSpacer size="l" />

      <EuiDatePicker
        showTimeSelect
        selected={startDate}
        onChange={handleChange}
        onClear={() => handleChange(null)}
        placeholder="Choose your prefer date"
      />
  
    </div>
  );
};