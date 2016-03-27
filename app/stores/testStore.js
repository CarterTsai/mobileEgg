import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/appConstants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var _store = {
	list: ['Carter']
};

var add = function(item) {
	_store.list.push(item);
};

var remove = function(index) {
	_store.list.splice(index, 1);
};

var todoStore = objectAssign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},
	getAll : function() {
		return _store.list;
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch (action.actionType) {
		case AppConstants.ADD_ITEM:
			add(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.REMOVE_ITEM:
			remove(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = todoStore;
