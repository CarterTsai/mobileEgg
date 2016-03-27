import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var AppAction = {
	add(data) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ITEM,
			data: data
		});
	},
	remove(data) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			data: data
		});
	}
};

module.exports = AppAction;
