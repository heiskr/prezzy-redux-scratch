/* Example 2 for combineReducers */
function example2() {
    var count = function(state, action) {
        if(action.type === 'INCREMENT') {
            return state ? state + 1 : 1;
        }
    };

    /*
    The following should be equal to doing:
    ------------------------------
    var reducer = function(state, action) {
        return {
            count: count(state.count, action)
        };
    };
    */

    var reducer = combineReducers({
        count: count
    });

    var store = createStore(reducer);

    document.querySelector('#example-2 button')
        .addEventListener('click', function() {
            store.dispatch({type: 'INCREMENT'});
        });

    store.subscribe(function() {
        var state = store.getState();
        document.querySelector('#example-2 .count')
            .innerHTML = state.count;
    });
}
example2();
