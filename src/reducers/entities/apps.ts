// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {combineReducers} from 'redux';

import {AppsTypes} from 'action_types';
import {AppBinding, AppsState} from 'types/apps';
import {GenericAction} from 'types/actions';

// This file contents belong to the Apps Framework feature.
// Apps Framework feature is experimental, and all the contents on this file are
// susceptible to breaking changes without pushing the major version of this package.

function bindings(state: AppBinding[] = [], action: GenericAction): AppBinding[] {
    switch (action.type) {
    case AppsTypes.RECEIVED_APP_BINDINGS: {
        return action.data || [];
    }
    default:
        return state;
    }
}

export default (combineReducers({
    bindings,
}) as (b: AppsState, a: GenericAction) => AppsState);
