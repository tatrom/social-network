import React from 'react';
import { render, screen } from '@testing-library/react';
import {SamuraiJSApp} from "./AppContainer";

test('test app', () => {
  render(<SamuraiJSApp />);
});
