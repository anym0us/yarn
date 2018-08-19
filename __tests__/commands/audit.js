/* @flow */

// import {ConsoleReporter} from '../../src/reporters/index.js';
// import {run as buildRun, makeConfigFromDirectory} from './_helpers.js';
// import {Audit, run as audit} from '../../src/cli/commands/audit.js';

// /* npm result is:
// # Run  npm install minimatch@3.0.4  to resolve 1 vulnerability
// SEMVER WARNING: Recommended action is a potentially breaking change
// ┌───────────────┬──────────────────────────────────────────────────────────────┐
// │ High          │ Regular Expression Denial of Service                         │
// ├───────────────┼──────────────────────────────────────────────────────────────┤
// │ Package       │ minimatch                                                    │
// ├───────────────┼──────────────────────────────────────────────────────────────┤
// │ Dependency of │ minimatch                                                    │
// ├───────────────┼──────────────────────────────────────────────────────────────┤
// │ Path          │ minimatch                                                    │
// ├───────────────┼──────────────────────────────────────────────────────────────┤
// │ More info     │ https://nodesecurity.io/advisories/118                       │
// └───────────────┴──────────────────────────────────────────────────────────────┘
// */
// const auditData_1High = {
//   actions: [
//     {
//       action: 'install',
//       module: 'minimatch',
//       target: '3.0.4',
//       isMajor: true,
//       resolves: [
//         {
//           id: 118,
//           path: 'minimatch',
//           dev: false,
//           optional: false,
//           bundled: false,
//         },
//       ],
//     },
//   ],
//   advisories: {
//     '118': {
//       findings: [
//         {
//           version: '1.0.0',
//           paths: ['minimatch'],
//           dev: false,
//           optional: false,
//           bundled: false,
//         },
//       ],
//       id: 118,
//       created: '2016-05-25T16:37:20.000Z',
//       updated: '2018-03-01T21:58:01.072Z',
//       deleted: null,
//       title: 'Regular Expression Denial of Service',
//       found_by: {
//         name: 'Nick Starke',
//       },
//       reported_by: {
//         name: 'Nick Starke',
//       },
//       module_name: 'minimatch',
//       cves: ['CVE-2016-10540'],
//       vulnerable_versions: '<=3.0.1',
//       patched_versions: '>=3.0.2',
//       overview:
//         'Affected versions of `minimatch` are vulnerable to regular expression denial of service...''
//       recommendation: 'Update to version 3.0.2 or later.',
//       references: '',
//       access: 'public',
//       severity: 'high',
//       cwe: 'CWE-400',
//       metadata: {
//         module_type: 'Multi.Library',
//         exploitability: 4,
//         affected_components: "Internal::Code::Function::minimatch({type:'args', key:0, vector:{type:'string'}})",
//       },
//       url: 'https://nodesecurity.io/advisories/118',
//     },
//   },
//   muted: [],
//   metadata: {
//     vulnerabilities: {
//       info: 0,
//       low: 0,
//       moderate: 0,
//       high: 1,
//       critical: 0,
//     },
//     dependencies: 5,
//     devDependencies: 0,
//     optionalDependencies: 0,
//     totalDependencies: 5,
//   },
// };
