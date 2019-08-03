

/**
 *
 * @param __variable_name       pass by the user that comet core should change as a response with call
 * @param __user_data_object    object hold all necessary data that user should pass
 * @param __fetch_call_config   fetch call custom config data object
 *                              {
 *                                  this_scope: user_this_scope, (mandatory)
 *                                  url: api_call_url, (mandatory)
 *                                  default: variable_default_value, (optional)
 *                                  return: return_type_function_object, (optional)
 *                                  time: user_time_gap_for_api_call, (optional)
 *
 *                              }
 *
 * @constructor
 * @private
 */
exports.V_ = function(__variable_name, __user_data_object) { return V_core(__variable_name, __user_data_object) }

/**
 *
 * @param __variable_name
 * @param __user_data_object
 * @constructor
 */
function V_core(__user_variable_name, __user_data_object) {

    /**
     *@description
     * state variable name that user init in react app
     */
    var __variable_name

    /**
     *@description
     * this scope in react component
     */
    var _this_scope;

    /**
     *@description
     * api url path for fetch call
     */
    var _url;

    /**
     *@description
     * return this default value as props if api call failed
     */
    var _default;

    /**
     *@description
     * return method body, if user init method comet core pass return value of api to method body
     */
    var _return;

    /**
     *@description
     * time gap with two api call
     */
    var _time;

    /**
     *
     * @type {{}}
     * @private
     * @description
     * user fetch api config data
     */
    var _fetch_config;

    if (isEmptyOrNullOrUndefined(__user_variable_name)) { console.log("V_comet ERROR: variable not pass"); return; }
    if (__user_data_object == undefined || __user_data_object == null) { console.log("V_comet ERROR: object not pass"); return; }

    try {
        __variable_name = __user_variable_name.substring(__user_variable_name.lastIndexOf(".") + 1, __user_variable_name.length);
    } catch (e) {
       console.log("V_comet ERROR in user pass variable name");
       return;
    }

    try {
       _url = __user_data_object.url;
    } catch (e) {
        console.log("V_comet ERROR: url is not defined in user defined object", e);
        return;
    }

    try {
        _this_scope = __user_data_object.this_scope;
    } catch (e) {
        console.log("V_comet ERROR: this scope is defined in user defined object", e);
        return;
    }

    try{
        _default = __user_data_object.default;
    } catch (e) {
        _default = "";
    }

    try {
        _time = __user_data_object.time;
    } catch (e) {
        _time = 0;
    }

    try {
        _return = __user_data_object.return;
    } catch (e) {
        _return = null;
    }

    try {
        _fetch_config = __user_data_object.config;
    } catch (e) {
        _fetch_config = {}
    }

    if (_time > 0) {
        fetchCall(_url, _this_scope, __variable_name, _return, _default, _fetch_config);
        setInterval(function () {
            fetchCall(_url, _this_scope, __variable_name, _return, _default, _fetch_config);
        }, _time);
    } else {
        fetchCall(_url, _this_scope, __variable_name, _return, _default, _fetch_config);
    }

}

/**
 *
 * @param param_value
 * @returns {boolean}
 */
function isEmptyOrNullOrUndefined(param_value) {
    if (param_value == null || param_value == undefined || param_value == "") return true;
    return false;
}

/**
 *
 * @param URL
 * @param THIS
 * @param VAR_NAME
 * @param RETURN
 */
function fetchCall(URL, THIS, VAR_NAME, RETURN, DEFAULT, FETCH_CONFIG) {
    fetch(URL, FETCH_CONFIG)
        .then((res) => res.json())
        .then(function (data) {
            if (typeof data.error !== 'undefined' ) {
                var obj = {};
                obj[VAR_NAME] = DEFAULT;
                try {
                    THIS.setState(obj);
                } catch (e) {
                    if (e.message === 'THIS.setState is not a function') {
                        THIS[VAR_NAME] = obj[VAR_NAME];
                    }
                }

            } else {
                var obj = {};
                if (typeof RETURN === 'undefined') {
                    obj[VAR_NAME] = data;
                } else {
                    obj[VAR_NAME] = RETURN(data);
                }
                try {
                    THIS.setState(obj);
                } catch (e) {
                    if (e.message === 'THIS.setState is not a function') {
                        THIS[VAR_NAME] = obj[VAR_NAME];
                    }
                }

            }

        })
        .catch(function (error) {
            var obj = {};
            obj[VAR_NAME] = DEFAULT;
            try {
                THIS.setState(obj);
            } catch (e) {
                if (e.message === 'THIS.setState is not a function') {
                    THIS[VAR_NAME] = obj[VAR_NAME];
                }
            }
        });
}

