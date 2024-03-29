import React,{Component} from 'react'

class ListMenu extends Component{

    state = {
        menuDisplay: 'default',
        titleName: ''
      }
     
    render(){
        const { toggleListMenu, deleteList, listId } = this.props
    
        switch (this.state.menuDisplay) {
          case 'copyList':
            return (
              <div className="list-menu" ref={node => this.node = node}>
                <header className="list-menu__header">
                  <p className="list-menu__header-title">Copy List</p>
                  <button onClick={toggleListMenu} className="list-menu__header-close-btn"><i className="fas fa-times"></i></button>
                </header>
                <section className="action-list">
                  <h4 className="copy-list__title">Name</h4>
                  <div className="copy-menu__title-input">
                    <textarea
                      onChange={(e) => { this.onCopyTitleChange(e.target.value) }}
                      className="title-input__text"
                      value={this.state.titleName} />
                  </div>
                  <button
                    onClick={() => {
                      let title = this.state.titleName || this.props.title;
                      this.props.copyList(listId, title);
                      toggleListMenu();
                    }}
                    className="btn--menu btn--submit btn--copy-memu">
                    Create List
                    </button>
                </section>
              </div>
            )
            break;
          default:
            return (
              <div className="list-menu" ref={node => this.node = node}>
                <header className="list-menu__header">
                  <p className="list-menu__header-title">List Actions</p>
                  <button onClick={toggleListMenu} className="list-menu__header-close-btn"><i className="fas fa-times"></i></button>
                </header>
                <section className="action-list">
                  <button className="action-list__btn"
                    onClick={this.displayCopyList}
                  >Copy List...</button>
                  <button className="action-list__btn"
                    onClick={() => {
                      deleteList(listId);
                    }}
                  >Delete List...</button>
                </section>
              </div>
            )
        }
      }  
}

export default ListMenu