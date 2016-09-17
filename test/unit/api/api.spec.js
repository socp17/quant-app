/* eslint-env jasmine */

import { get } from '../../../src/client/assets/javascripts/common/api'
import { expect } from 'chai';

describe('Unit: common/api', () => {
  it('should exist', () => {
    expect(get).to.exist;
  })
})
