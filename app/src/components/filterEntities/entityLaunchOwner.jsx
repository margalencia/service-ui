import { connect } from 'react-redux';
import { URLS } from 'common/urls';
import { activeProjectSelector } from 'controllers/user';
import { EntityUserSearch } from './entityUserSearch';

export const EntityLaunchOwner = connect((state) => ({
  ownersSearchUrl: URLS.launchOwnersSearch(activeProjectSelector(state)),
}))(EntityUserSearch);
