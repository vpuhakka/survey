import React, { Component } from 'react';
import fire from './fire';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('topic').child('general');
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ topic: [message].concat(this.state.topic) });
    })
  }

	render() {
		return (
			<div id="survey" className="well well-sm">
				<div className="container">
	<h2>Kyselyn kysymykset</h2>
  <div className="panel-group" id="accordion">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Aihe 1</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse">
        <div class="panel-body">
        <ul>
          { /* Render the list of messages */
            this.state.topic.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </div>
      <div id="collapse1" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Aihe 2</a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Aihe 3</a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    
       <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Aihe 4</a>
        </h4>
      </div>
      <div id="collapse4" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    
       <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Aihe 5</a>
        </h4>
      </div>
      <div id="collapse5" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
    
  </div> 
</div>
</div>	
</div>
		)
	}

}

export default Survey;