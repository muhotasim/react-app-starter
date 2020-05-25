import React from 'react';
import TopMenu from './general/TopMenu';
import Input from './general/Input';
import { BrowserRouter, Switch } from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      val: null,
    };
    [].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <div>
              <TopMenu
                menus={[
                  {
                    label: 'TEst',
                    link: '',
                    menus: [],
                  },
                ]}
              />
            </div>
            <div>
              <Input
                label={'test '}
                value={this.state.val}
                type="file"
                onChange={(v) => {
                  this.setState({ val: v });
                }}
              />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
