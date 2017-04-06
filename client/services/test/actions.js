const TEST_RECEIVE = 'TEST_RECEIVE';
export const actions = {
  TEST_REQUEST: 'TEST_REQUEST',
  TEST_RECEIVE,
  receiveRequest: (testProperty) => ({
    type: TEST_RECEIVE,
    testProperty
  })
};


