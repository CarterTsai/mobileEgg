import Flux from 'flux';
import ToDoConstants from '../constants/AppConstants';
import assign from 'react/lib/Object.assign';

let Dispatcher = assign(new Flux.Dispatcher(), {
  handleViewAction(action) {
    var payload = {
      source: AppConstants.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

export default Dispatcher;
