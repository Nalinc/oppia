// Copyright 2015 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service to retrieve information of creator dashboard from the
 * backend.
 */

oppia.factory('DashboardBackendApiService', ['$http', function($http) {
  var _fetchDashboardData = function() {
    return $http.get('/dashboardhandler/data');
  };

  var _fetchExplorationStats = function(explorationId) {
    return $http.get('/dashboardhandler/explorationstats/' + explorationId, {
      cache: true
    });
  };

  return {
    fetchDashboardData: _fetchDashboardData,
    fetchExplorationStats: _fetchExplorationStats
  };
}]);
