// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {realmConnect} from 'realm-react-redux';

import {scheduleExpiredNotification} from 'app/realm/actions/general';
import {ssoLogin} from 'app/realm/actions/user';
import options from 'app/store/realm_context_options';

import SSO from './sso';

const mapRealmDispatchToProps = {
    scheduleExpiredNotification,
    ssoLogin,
};

export default realmConnect(null, null, mapRealmDispatchToProps, null, options)(SSO);
