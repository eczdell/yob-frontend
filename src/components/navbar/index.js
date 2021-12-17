import { EuiBadge, EuiIcon, EuiAvatar } from '@elastic/eui';
import React from 'react';

/**
 * Docs note: Consuming apps should import the theme via the export json file
 * import theme from '@elastic/eui/dist/eui_theme_light.json';
 */

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeaderSectionItemButton,
  EuiHeaderSectionItem,
  EuiSelectableTemplateSitewide,
  EuiSelectableMessage

} from '@elastic/eui';




export default () => (
  <EuiHeader
    theme="dark"
    sections={[
      {
        items: [
          <EuiHeaderLogo><a href="/">Your Own Booking</a></EuiHeaderLogo>,
        ],
      },

      {
        items: [
          <EuiHeaderLinks aria-label="App navigation dark theme example">
            <EuiHeaderSectionItem>{search}</EuiHeaderSectionItem>

            <EuiHeaderLink iconType="help">
              <a href='/help'>
                Help
              </a></EuiHeaderLink>
            <EuiHeaderLink iconType="notebookApp">
              <a href='/booking'>
                Manage Booking
              </a>
            </EuiHeaderLink>
          </EuiHeaderLinks>,
          <EuiHeaderSectionItemButton
            aria-label="2 Notifications"
            notification={'2'}>
            <EuiIcon type="cheer" size="m" />
          </EuiHeaderSectionItemButton>,
          <EuiHeaderSectionItemButton aria-label="Account menu">
            <EuiAvatar name="John Username" size="s" />
          </EuiHeaderSectionItemButton>,
        ],
        borders: 'none',
      },
    ]}
  />
);

const search = (
  <EuiSelectableTemplateSitewide
    options={[]}
    searchProps={{
      compressed: true,
    }}
    popoverButton={
      <EuiHeaderSectionItemButton aria-label="Sitewide search">
        <EuiIcon type="search" size="m" />
      </EuiHeaderSectionItemButton>
    }
    emptyMessage={
      <EuiSelectableMessage style={{ minHeight: 300 }}>
        <p>
          Please see the component page for
          {/* <Link to="/forms/selectable">
            <strong>EuiSelectableTemplateSitewide</strong>
          </Link> */}
          on how to configure your sitewide search.
        </p>
      </EuiSelectableMessage>
    }
  />
);