'use strict';

describe('Hello world', function () {
  var SmithService, appCtrl;
  beforeEach(module('practicalAngularApp'));
  beforeEach(inject(function (_SmithService_) {
    SmithService = _SmithService_;
  }));
  beforeEach(inject(function ($controller) {
    appCtrl = $controller('AppCtrl');
  }));

  describe('SmithService', function () {
    it('should append Smith to a name', function () {
      expect(SmithService.getName('Will')).toBe('Will Smith');
    })
  });

  describe('AppCtrl', function () {
    it('should have a message of hello', function () {
      expect(appCtrl.message).toBe('Hello');
    })
  });
});
