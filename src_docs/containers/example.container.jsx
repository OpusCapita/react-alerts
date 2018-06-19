import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import ExampleComponent from '../components/example.component';
import { OCAlertsProvider } from '../../src/index';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={10}>
            <h3>React alerts</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-alerts"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel>
          <ExampleComponent />
        </Panel>
      </Col>
    </Row>
    <OCAlertsProvider />
  </Grid>
);
