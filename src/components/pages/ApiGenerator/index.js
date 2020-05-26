import React from 'react';
import { Header } from '../../general/Common.Comp';
import ApiList from './ApiList';
import './index.css';
import Input from '../../general/Input';
export default class ApiGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchModule: '',
    };
    ['_onChange'].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }

  _onChange(v, k) {
    this.setState({ [k]: v });
  }

  render() {
    const { searchModule } = this.state;
    return (
      <div className="page">
        <Header title="Api Generator" />
        <div className="row">
          <div className="col-md-3">
            <Input
              type="text"
              label="Search Module"
              value={searchModule}
              onChange={(v) => {
                this._onChange(v, 'searchModule');
              }}
            />
            <ApiList
              apis={[
                { label: 'module 1 ' },
                { label: 'module 2 ' },
                { label: 'module 3 ' },
                { label: 'module 4 ' },
                { label: 'module 5 ' },
                { label: 'module 6 ' },
              ]}
            />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    );
  }
}
