
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var _store = {
  list: []
};

var add = function(item) {
  _store.list.push(item);
};

var remove = function(index) {
  _store.list.splice(index, 1);
};

var todoStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      add(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      remove(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default todoStore;
