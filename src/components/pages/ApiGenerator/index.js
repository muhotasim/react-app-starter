import React from 'react';
import { Header } from '../../general/Common.Comp';
import ApiList from './ApiList';
import './index.css';
import Input from '../../general/Input';
import Filter from './Filter';
export default class ApiGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchModule: '',
      slmodule: null,
      selectedFilters: [],
      filterOptions: [],
      filterItems: [],
    };
    ['_onChange', '_addMoreFilter', '_removeFilter'].forEach(
      (fn) => (this[fn] = this[fn].bind(this))
    );
  }

  _onChange(v, k) {
    this.setState({ [k]: v });
  }
  _addMoreFilter() {
    let filters = this.state.filterItems;
    filters.push({
      field: '',
      conditionType: '',
      value: '',
    });
    this.setState({ filterItems: filters });
  }
  _removeFilter(index) {
    let filters = this.state.filterItems;
    filters.splice(index, 1);
    this.setState({ filterItems: filters });
  }
  render() {
    const {
      searchModule,
      slmodule,
      selectedFilters,
      filterOptions,
      filterItems,
    } = this.state;
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
              onSelect={(v) => {
                this._onChange(v, 'slmodule');
              }}
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
          <div className="col-md-9">
            {slmodule && (
              <Filter
                moduleName={slmodule.label}
                selectedFilters={selectedFilters}
                filterOptions={filterOptions}
                filterItems={filterItems}
                addFilter={this._addMoreFilter}
                removeFilter={this._removeFilter}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
