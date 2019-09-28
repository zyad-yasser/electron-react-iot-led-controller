import * as React from 'react';
import "./types.component.sass";
import { pages } from 'src/constants';

class TypesComponent extends React.Component<any> {
  public render() {
    return (
      <div className="types">
        <div className="liner" />
        <div className="items">
          {
            pages.map((page) => {
              return <div key={page.id} className="one-item" onClick={this.props.handlePageChange.bind(null, page.id)}>
                <div className={(this.props.active === page.id ? "hoverer active" : "hoverer")} />
                <div className="text">
                  {page.name}
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default TypesComponent;

