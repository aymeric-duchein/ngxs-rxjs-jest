import {FAKE_JSON_TOKEN, FakeJsonInterceptor} from '@src/app/core/interceptor/http.interceptor';
import {fakeJsonUrl} from '@src/app/core/issue/issue.data';

describe('FakeJsonInterceptor', () => {
  let interceptor: FakeJsonInterceptor;

  beforeEach(() => {
    interceptor = new FakeJsonInterceptor();
  });

  test('should intercept fake json request', () => {
    const mockNext = {handle: jest.fn()};
    const fakeBody = {fake: 'body'};
    const cloneMock = jest.fn().mockImplementation(params => ({...mockReq, ...params}));
    const mockReq = {url: fakeJsonUrl, clone: cloneMock, body: fakeBody};
    const expectedReq = {url: fakeJsonUrl, clone: cloneMock, body: {...fakeBody, token: FAKE_JSON_TOKEN}};
    interceptor.intercept(mockReq as any, mockNext);

    expect(mockNext.handle).toHaveBeenCalledWith(expectedReq);
  });

  test('should not intercept other request', () => {
    const mockNext = {handle: jest.fn()};
    const fakeBody = {fake: 'body'};
    const mockReq = {url: 'http:\\fake', clone: jest.fn().mockReturnThis(), body: fakeBody};
    interceptor.intercept(mockReq as any, mockNext);

    expect(mockNext.handle).toHaveBeenCalledWith(mockReq);
  });

});
