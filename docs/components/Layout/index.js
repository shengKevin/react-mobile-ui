import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from '../Menu';
import { Cell, CellBody } from '../../../src/components/Cell';
// import './index.less';
import './index.css';

class Layout extends React.Component {

  handleMenuChange = (key) => {
    this.props.history.push(`${key}`);
  }

  renderMenuItem = () => {
    const { routers } = this.props;
    return routers.map((item) => {
      const title = item.path.replace(/^\//g, '');
      return (
        <Menu.Item key={item.path}>{title}</Menu.Item>
      );
    });
  }

  render() {
    const { children, routers, ...others } = this.props;
    const { path } = this.props.match;
    return (
      <div className="layout" {...others}>
        <Cell style={{background: '#FF5A10', color: '#fff'}}><CellBody>react-mui docs</CellBody></Cell>
        <div className="container">
          <Menu selectedKeys={[path]} onClick={this.handleMenuChange} style={{background: '#f5f5f5'}}>
            {this.renderMenuItem()}
          </Menu>
          <div className="content">{children}</div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  routers: PropTypes.array,
};

Layout.defaultProps = {
  routers: [],
};

export default withRouter(({ staticContext, ...props}) => <Layout {...props} />);
