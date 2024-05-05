import React from 'react';
import { Button } from '@salesforce/design-system-react';

const SalesforceButton = () => {
  return (
    <div>
      <Button label="Send" variant="brand" onClick={() => console.log('Button clicked')} />
    </div>
  );
}

export default SalesforceButton;
