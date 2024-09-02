import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Link, useNavigate } from 'react-router-dom';

const navStyles: Partial<INavStyles> = {
  root: {
    width: '256px',
    height:'93vh',
    padding:'40px 8px 8px 8px',
    flexDirection:'column',
    flexShrink:0,
    boxSizing: 'border-box',
    border: '1px mpne #eee',
    background:'#EEE',
    overflowY: 'auto',
  },
};

const Navigation: React.FC = () => {
  const navigate = useNavigate();

 
const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        expandAriaLabel: 'Expand Home section',
        onClick: () => navigate('/businessunitsummary'),
        url: '',
        links: [
          {
            name: 'Business Unit Summary',
            key: 'BUS',
            onClick: () => navigate('/businessunitsummary'),
            url:''
          },
          { 
            name: 'Regional Summary',
            disabled: false,
            key: 'RGS',
            onClick: () => navigate('/regionalsummary'),
            url: '',
          },
          {
            name: 'Client Summary',
            disabled: false,
            key: 'CLS',
            onClick: () => navigate('/clientsummary'),
            url: '',
          },
          {
            name: 'Client Activity Sumary',
            disabled: false,
            key: 'ACT',
            onClick: () => navigate('/clientactivitysummary'),
            url: '',
          }
        ],
        isExpanded: true,
      },
      {
        name: 'Misc',
        onClick: () => navigate('/dataqualitysummary'),
        url: '',
        key: 'EXL',
        links: [
          {
            name: 'Data Quality Summary',
            key: 'DQS',
            target: '',
            url: '',
            onClick: () => navigate('/dataqualitysummary')
          },
          {
            name: 'Global Reports',
            key: 'RPT',
            onClick: () => navigate('/globalreports'),
            url: '',
            target: '',
          }
        ],
        isExpanded: true,
        target: '/',
      }
    ],
  },
];

  return (
    <div>
    <Nav
      groups={navLinkGroups}
      selectedKey="home"
      styles={navStyles}
    />
    </div>
  );
};

export default Navigation;
