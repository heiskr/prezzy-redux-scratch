/* Example 4 for applyMiddleware */
function example4() {
    var count = function(state, action) {
        if(action.type === 'INCREMENT') {
            return state ? state + 1 : 1;
        }
    };

    var reducer = combineReducers({
        count: count
    });

    function async(store) {
        return function(next) {
            return function(action) {
                var result = next(action);
                if(action.type === 'INCREMENT') {
                    alert('Incremented!');
                }
                return result;
            }
        };
    };

    var store = applyMiddleware(async)(createStore)(reducer);

    document.querySelector('#example-4 button')
        .addEventListener('click', function() {
            store.dispatch({type: 'INCREMENT'});
        });

    store.subscribe(function() {
        var state = store.getState();
        document.querySelector('#example-4 .count')
            .innerHTML = state.count;
    });
}
example4();
